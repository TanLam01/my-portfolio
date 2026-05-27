import { Code, Smartphone } from 'lucide-react'

export default function AboutSection() {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container max-w-5xl mx-auto '>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                    About <span className='text-primary'>Me</span>
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>Passionate Software Engineer</h3>
                    <p className='text-muted-foreground'>
                        Software Engineer with 3 years of professional experience, specializing in both robust backend systems (PHP/Laminas) and scalable frontend architectures (React.js/Next.js/Vue.js/Flutter).
                    </p>
                    <p className='text-muted-foreground'>
                        Experienced in architecting highly scalable codebases using modern tools like pnpm monorepos. Proficient in scaling RESTful APIs, eliminating database bottlenecks using the CQRS pattern (Redis, Elasticsearch, MariaDB), and engineering event-driven pipelines with Kafka for high-traffic data streams.
                    </p>
                    <p className='text-muted-foreground'>
                        Skilled in mastering real-time messaging layers using GraphQL (AWS AppSync) and implementing secure enterprise-grade authentication (Auth0), allowing me to seamlessly bridge the gap between frontend user experience and complex backend infrastructure.
                    </p>
                    <p className='text-muted-foreground'>
                        Adept at working in Agile environments, bringing full-stack expertise and performance optimization skills to drive technical excellence. Comfortable communicating in English with teams to ensure smooth collaboration and project alignment. Eager to learn new technologies and tools to meet project requirements.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            Contact Me
                        </a>
                        <a href="/public/resume/Tat_Tan_Lam-Software_Engineer.pdf" download className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
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
                                    Building responsive and interactive web applications using React.js and Next.js frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Smartphone className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>
                                    App Development
                                </h4>
                                <p className='text-muted-foreground'>
                                    Building mobile applications using Flutter Framework.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
