import { cn } from "@/lib/utils";
import { useState } from "react"

const skills = [
    // Frontend
    {
        name: 'JavaScript/TypeScript',
        level: 90,
        category: 'Frontend',
        icon: 'path/to/javascript-icon.svg',
    }, {
        name: 'React',
        level: 90,
        category: 'Frontend',
        icon: 'path/to/react-icon.svg',
    }, {
        name: 'Next.js',
        level: 70,
        category: 'Frontend',
    }, {
        name: 'Vue.js',
        level: 70,
        category: 'Frontend',
    }, {
        name: 'HTML & CSS (SCSS)',
        level: 90,
        category: 'Frontend',
    }, {
        name: 'Tailwind CSS',
        level: 70,
        category: 'Frontend',
    }, {
        name: 'Styled Components',
        level: 90,
        category: 'Frontend',
    }, {
        name: 'Redux',
        level: 60,
        category: 'Frontend',
    }, {
        name: 'Flutter',
        level: 60,
        category: 'Frontend',
    }, {
        name: 'RESTful API/GraphQL',
        level: 80,
        category: 'Frontend',
    }, {
        name: 'React Hooks',
        level: 80,
        category: 'Frontend',
    },

    // Tools
    {
        name: 'Git/GitHub',
        level: '70',
        category: 'Tools',
    }, {
        name: 'Figma',
        level: '60',
        category: 'Tools',
    }, {
        name: 'Docker',
        level: '20',
        category: 'Tools',
    }, {
        name: 'AWS Services',
        level: '60',
        category: 'Tools',
    }, {
        name: 'Jira',
        level: '100',
        category: 'Tools',
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
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bd-secondary"
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
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
