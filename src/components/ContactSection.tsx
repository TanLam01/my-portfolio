import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

export default function ContactSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Handle form submission logic here
        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for your message! I will get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    }

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact <span className="text-primary">Me</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities to be part of your vision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:tattanlam.work@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        tattanlam.work@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+84902795906" className="text-muted-foreground hover:text-primary transition-colors">
                                        +84 902-795-906
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">
                                        Ho Chi Minh City, Vietnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/lam-tat/" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">
                            Send Me a Message
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}>
                                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                <Send size={16} />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
