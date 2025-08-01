import { Briefcase, Code, User } from 'lucide-react'

export default function AboutSection() {
    return (
        <section id='about' className='py-24 px-4 relative'>
            {" "}
            <div className='container max-w-5xl mx-auto '>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                    About <span className='text-primary'>Me</span>
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
                    <p className='text-muted-foreground'>
                        Front-end Developer with 2 years of experience in building web and mobile applications using Next.js,
                        React, and Flutter.
                    </p>
                    <p className='text-muted-foreground'>
                        Proficient in integrating RESTful APIs to provide seamless data flow and improve user
                        interfaces. Skilled in leveraging Prompt AI techniques to streamline development processes and create
                        innovative solutions.
                    </p>
                    <p className='text-muted-foreground'>
                        Adept at working in Agile environments, applying strong problem-solving abilities and
                        fostering team collaboration to meet project goals and drive technical excellence.
                    </p>
                    <p className='text-muted-foreground'>
                        Comfortable communicating in English with teams to ensure smooth collaboration and alignment of the project
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            Contact Me
                        </a>
                        <a href="/public/resume/Frontend_LamTat_Resume.pdf" download className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Code className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>
                                    Web Development
                                </h4>
                                <p className='text-muted-foreground'>
                                    Building responsive and interactive web applications using modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <User className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>
                                    UI/UX Design
                                </h4>
                                <p className='text-muted-foreground'>
                                    Creating user-centered designs and intuitive interfaces for web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Briefcase className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>
                                    Frontend Developer
                                </h4>
                                <p className='text-muted-foreground'>
                                    Building responsive and interactive web applications using modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
