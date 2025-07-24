import * as React from "react";

// === Constants ===
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

// === Types ===
export interface ToastItem {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    [key: string]: unknown;
}

type ToastState = {
    toasts: ToastItem[];
};

type Action =
    | { type: "ADD_TOAST"; toast: ToastItem }
    | { type: "UPDATE_TOAST"; toast: Partial<ToastItem> & { id: string } }
    | { type: "DISMISS_TOAST"; toastId?: string }
    | { type: "REMOVE_TOAST"; toastId?: string };

// === Utilities ===
let count = 0;
function genId(): string {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function addToRemoveQueue(toastId: string) {
    if (toastTimeouts.has(toastId)) return;

    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatch({ type: "REMOVE_TOAST", toastId });
    }, TOAST_REMOVE_DELAY);

    toastTimeouts.set(toastId, timeout);
}

// === Reducer ===
function reducer(state: ToastState, action: Action): ToastState {
    switch (action.type) {
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };

        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    t.id === action.toast.id ? { ...t, ...action.toast } : t
                ),
            };

        case "DISMISS_TOAST": {
            const { toastId } = action;

            if (toastId) {
                addToRemoveQueue(toastId);
            } else {
                state.toasts.forEach((toast) => {
                    addToRemoveQueue(toast.id);
                });
            }

            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    toastId === undefined || t.id === toastId ? { ...t, open: false } : t
                ),
            };
        }

        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return { ...state, toasts: [] };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t) => t.id !== action.toastId),
            };

        default:
            return state;
    }
}

// === Memory State ===
const listeners: Array<(state: ToastState) => void> = [];
let memoryState: ToastState = { toasts: [] };

function dispatch(action: Action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => listener(memoryState));
}

// === toast function ===
function toast(props: Omit<ToastItem, "id">) {
    const id = genId();

    const update = (props: Partial<ToastItem>) =>
        dispatch({ type: "UPDATE_TOAST", toast: { ...props, id } });

    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open) => {
                if (!open) dismiss();
            },
        },
    });

    return { id, dismiss, update };
}

// === Hook ===
function useToast() {
    const [state, setState] = React.useState<ToastState>(memoryState);

    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);

    return {
        ...state,
        toast,
        dismiss: (toastId?: string) =>
            dispatch({ type: "DISMISS_TOAST", toastId }),
    };
}

export { useToast, toast };
