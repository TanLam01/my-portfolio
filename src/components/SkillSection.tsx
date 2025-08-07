import { cn } from "@/lib/utils";
import { useState } from "react"

const skills = [
    // Frontend
    {
        name: 'JavaScript/TypeScript',
        level: 'Advanced',
        category: 'Frontend',
        icon: 'path/to/javascript-icon.svg',
    }, {
        name: 'React',
        level: 'Advanced',
        category: 'Frontend',
        icon: 'path/to/react-icon.svg',
    }, {
        name: 'Next.js',
        level: 'Intermediate',
        category: 'Frontend',
        icon: 'path/to/nextjs-icon.svg',
    }, {
        name: 'HTML & CSS (SCSS)',
        level: 'Advanced',
        category: 'Frontend',
        icon: 'path/to/html-css-icon.svg',
    }, {
        name: 'Tailwind CSS',
        level: 'Intermediate',
        category: 'Frontend',
        icon: 'path/to/tailwind-icon.svg',
    },
    {
        name: 'Flutter',
        level: 'Beginner',
        category: 'Frontend',
        icon: 'path/to/Flutter-icon.svg',
    },

    // Tools
    {
        name: 'Git/GitHub',
        level: 'Intermediate',
        category: 'Tools',
        icon: 'path/to/git-icon.svg'
    },
    {
        name: 'Figma',
        level: 'Intermediate',
        category: 'Tools',
        icon: 'path/to/figma-icon.svg'
    },
    {
        name: 'Docker',
        level: 'Intermediate',
        category: 'Tools',
        icon: 'path/to/docker-icon.svg'
    },
];

const categories = [
    "all", "frontend", "tools"
];

export default function SkillSection() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category.toLowerCase() === activeCategory);

    return (
        <section id="skills" className='py-24 px-4 relative bg-secondary/30'>
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My {""}
                    <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : category === "Intermediate" ? "bg-secondary/70 text-foreground hover:bd-secondary" : "bg-secondary/0 text-foreground hover:bd-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >

                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            {/* <div className="flex items-center mb-4"> */}
                            {/* <img src={skill.icon} alt={skill.name} className="w-12 h-12 mr-4" /> */}
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level === 'Advanced' ? '100%' : skill.level === 'Intermediate' ? '70%' : '50%' }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}</span>
                            </div>
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
