import { ArrowRight, ExternalLink } from "lucide-react"
import fitnessJourneyImage from "@/assets/images/fitness_journey.png"
import gggMetaverseImage from "@/assets/images/ggg.png"
import engihireImage from "@/assets/images/engihire.png"
import engibaseImage from "@/assets/images/engibase.png"
import portfolio from "@/assets/images/portfolio.png";

const featuredProjects = [{
    id: 1,
    title: "Engihire",
    description: "A comprehensive recruitment management system built to digitize and streamline the entire candidate lifecycle, from multi-channel application tracking and multi-stage interview scheduling to performance evaluation and onboarding.",
    link: "https://visitor.hire.engibase.com/",
    image: engihireImage,
    tags: ["Vue.js (TypeScript)", "Pinia", "TailWindCSS", "RESTful API", "Laminas Mezzio (PHP)", "Docker", "Kafka", "Redis", "Tanstack Query"],
}, {
    id: 2,
    title: "Engibase",
    description: "Developed a centralized platform to manage engineer skill matrices (technical stacks, certifications) and career aspirations. Built real-time tracking for engineer utilization (bench vs. project-active) to optimize talent allocation, streamline negotiation, and ensure project-personnel alignment with both technical requirements and individual growth paths",
    link: "https://engibase.com/",
    image: engibaseImage,
    tags: ["Laminas Zend (PHP)", "HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Docker", "Kafka", "Redis"],
}, {
    id: 3,
    title: "Fitness Journey",
    description: "Fitness Journey is a facility search and habit-building goal-setting app for fitness enthusiasts.",
    link: "https://apps.apple.com/vn/app/fitness-journey/id6451079440?platform=iphone",
    image: fitnessJourneyImage,
    tags: ["Flutter (Dart)", "Auth0", "RESTful API", "Web3", "Provider"],
}, {
    id: 4,
    title: "GGG Metaverse",
    description: "Virtual space platform for real-time online events that allows users to create and join meetings, workshops, and other events in a virtual environment.",
    link: "https://www.greenwaygrid.global/en/business/g-cube/",
    image: gggMetaverseImage,
    tags: ["Next.js (TypeScript)", "Zustand", "Zod", "Styled Components", "Atomic Design", "AWS Service", "React Hooks", "RESTful API/GraphQL"],
}];

const personalProjects = [{
    id: 5,
    title: "My portfolio",
    description: "Showcase of my work and projects.",
    link: "https://my-portfolio-lamtat.vercel.app/",
    image: portfolio,
    tags: ["React.js", "Vite", "HTML", "TailWindCSS", "lucide-react"],
}, {
    id: 6,
    title: "Chats App",
    description: "Real-time chat application.",
    link: "https://github.com/TanLam01/chatsApp",
    image: "",
    tags: ["React.js", "Next.js", "TypeScript", "TaiWindCSS", "Firebase", "Zustand", "Zod", "Shadcn"],
}, {
    id: 7,
    title: "Stepzen Weather",
    description: "Stepzen Weather is a weather app that delivers real-time updates and forecasts, leveraging AI to generate concise weather summaries.",
    link: "https://github.com/TanLam01/stepzen-weather",
    image: "",
    tags: ["React.js", "Next.js", "TypeScript", "TailWindCSS", "OpenAI", "GraphQL"],
}];

const ProjectCard = ({ project }: { project: any }) => (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
        <div className="h-48 overflow-hidden bg-muted/20">
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, index: number) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 border font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
            <div className="flex justify-between items-center mt-auto">
                <div className="flex space-x-3">
                    <a
                        href={project.link}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                        Here are some recent featured projects of previous work.
                        Each project was carefully crafted with attention to detail, performance, and user experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Personal <span className="text-primary">Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {personalProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/TanLam01"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}
