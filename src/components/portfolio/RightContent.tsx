import { ExternalLink, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    period: 'Jan 2023 — Present',
    title: 'Software Engineer',
    company: 'Allstate Sales Group',
    companyUrl: '#',
    description: 'Built HR systems and data pipelines used across the organization. Reduced access management time 65% by building a centralized HR portal and admin console for 500+ users. Cut data-entry errors 78% and improved form efficiency 40% via 30+ validation rules. Integrated 12+ third-party APIs to eliminate manual handoffs.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Azure', 'Docker', 'PowerBI'],
  },
  {
    period: 'Jun 2022 — Nov 2022',
    title: 'Frontend Developer',
    company: 'Frontend Simplified',
    companyUrl: '#',
    description: 'Taught modern frontend and led hands-on builds. Helped 1,000+ students ship projects faster through live coding and debugging sessions. Taught responsive design, API requests, Promises/async patterns.',
    technologies: ['React', 'JavaScript', 'Git', 'Chrome DevTools'],
  },
];

const projects = [
  {
    title: 'McGill Scheduler',
    description: 'Full-stack scheduling app used by 1,000+ students. React UI, Spring Boot REST API, PostgreSQL.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    links: {
      external: 'https://mcgillscheduler.vercel.app/',
      github: 'https://github.com/Erik-Cupsa/McGill-Scheduler',
    },
  },
  {
    title: 'Empor',
    description: 'Led marketplace for 1,000+ students with modern stack and typed data layer.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'Spring Boot'],
    links: {
      external: 'https://empor.ca/',
      github: null,
    },
  },
];

export const RightContent = () => {
  return (
    <div className="pt-24 xl:pt-12">
      <main className="max-w-[720px] space-y-24">
        {/* About Section */}
        <section id="about" data-section>
          <h2 className="xl:hidden tracking-[0.2em] text-white/60 text-xs uppercase mb-8">About</h2>
          
          <div className="space-y-4">
            <p className="text-white/80 leading-7">
              I'm a developer passionate about crafting accessible, pixel-perfect user 
              interfaces that blend thoughtful design with robust engineering. My favorite 
              work lies at the intersection of design and development, creating experiences 
              that not only look great but are meticulously built for performance and usability.
            </p>
            
            <p className="text-white/80 leading-7">
              Currently, I'm a Software Engineer specializing in 
              full-stack development. I contribute to the creation and maintenance of scalable 
              applications, ensuring our platform meets web accessibility 
              standards and best practices to deliver an inclusive user experience.
            </p>
            
            <p className="text-white/80 leading-7">
              In the past, I've had the opportunity to develop software across a variety of 
              settings — from <span className="text-white font-medium">advertising agencies</span> and 
              <span className="text-white font-medium"> large corporations</span> to 
              <span className="text-white font-medium"> start-ups</span> and 
              <span className="text-white font-medium"> small digital product studios</span>. Additionally, I also released a 
              <span className="text-white font-medium"> comprehensive video course</span> a few years ago, guiding learners through building a web app with 
              the Spotify API.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-section>
          <h2 className="xl:hidden tracking-[0.2em] text-white/60 text-xs uppercase mb-8">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="group">
                <div className="flex gap-4">
                  <div className="min-w-[120px]">
                    <div className="text-white/40 text-xs uppercase tracking-wide">
                      {experience.period}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-accent-cyan transition-colors">
                      {experience.title} · {experience.company}
                    </h3>
                    <p className="text-white/80 leading-7 mt-2">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center text-xs rounded-full px-2.5 py-1 bg-white/5 ring-1 ring-white/10 text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a
              href="mailto:rmc.2917@gmail.com"
              className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
            >
              View Full Résumé
              <ArrowUpRight className="w-4 h-4 inline ml-1" />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-section>
          <h2 className="xl:hidden tracking-[0.2em] text-white/60 text-xs uppercase mb-8">Projects</h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="flex gap-4">
                  <div className="min-w-[120px]">
                    <div className="w-full h-16 bg-white/5 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-accent-cyan transition-colors flex items-center gap-2">
                      {project.title}
                      <div className="flex gap-2">
                        {project.links.external && (
                          <a
                            href={project.links.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </h3>
                    <p className="text-white/80 leading-7 mt-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center text-xs rounded-full px-2.5 py-1 bg-white/5 ring-1 ring-white/10 text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a
              href="https://github.com/chowdhuryrz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
            >
              View Full Project Archive
              <ArrowUpRight className="w-4 h-4 inline ml-1" />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-section>
          <h2 className="xl:hidden tracking-[0.2em] text-white/60 text-xs uppercase mb-8">Contact</h2>
          
          <div className="space-y-8">
            <p className="text-white/80 leading-7">
              Let's work together. Email me or connect on LinkedIn.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:rmc.2917@gmail.com"
                className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rohancho/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/chowdhuryrz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};