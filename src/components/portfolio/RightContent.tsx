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
    <div className="pt-24 xl:pt-24">
      <main className="max-w-[720px] space-y-24">
        {/* About Section */}
        <section id="about" data-section>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed text-base">
              I'm a developer passionate about crafting accessible, pixel-perfect user 
              interfaces that blend thoughtful design with robust engineering. My favorite 
              work lies at the intersection of design and development, creating experiences 
              that not only look great but are meticulously built for performance and usability.
            </p>
            
            <p className="text-white/80 leading-relaxed text-base">
              Currently, I'm a Software Engineer at <span className="text-white font-medium">Allstate Sales Group</span>, specializing in 
              full-stack development. I contribute to the creation and maintenance of scalable 
              applications, ensuring our platform meets web accessibility 
              standards and best practices to deliver an inclusive user experience.
            </p>
            
            <p className="text-white/80 leading-relaxed text-base">
              In the past, I've had the opportunity to develop software across a variety of 
              settings — from <span className="text-white font-medium">advertising agencies</span> and 
              <span className="text-white font-medium"> large corporations</span> to 
              <span className="text-white font-medium"> start-ups</span> and 
              <span className="text-white font-medium"> small digital product studios</span>. Additionally, I also released a 
              <span className="text-white font-medium"> comprehensive video course</span> a few years ago, guiding learners through building a web app with 
              the Spotify API.
            </p>
            
            <p className="text-white/80 leading-relaxed text-base">
              In my spare time, I'm usually climbing, reading, hanging out with my wife and 
              two cats, or running around Hyrule searching for <span className="text-white font-medium">Korok seeds</span>.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-section>          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="group">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <div className="text-white/40 text-sm uppercase tracking-wide font-medium">
                      {experience.period}
                    </div>
                  </div>
                  <div className="col-span-3">
                    <h3 className="text-white font-medium text-base mb-2 group-hover:text-accent-cyan transition-colors">
                      {experience.title} · {experience.company} <ArrowUpRight className="w-4 h-4 inline ml-1" />
                    </h3>
                    <p className="text-white/80 leading-relaxed text-base mb-3">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center text-xs rounded-full px-3 py-1 bg-teal-400/10 text-teal-300 font-medium">
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
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <div className="w-full h-12 bg-white/5 rounded border border-white/10"></div>
                  </div>
                  <div className="col-span-3">
                    <h3 className="text-white font-medium text-base mb-2 group-hover:text-accent-cyan transition-colors flex items-center gap-2">
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
                    <p className="text-white/80 leading-relaxed text-base mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center text-xs rounded-full px-3 py-1 bg-teal-400/10 text-teal-300 font-medium">
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
        
        {/* Footer */}
        <footer className="pt-16 pb-24">
          <p className="text-white/50 text-sm leading-relaxed">
            Loosely designed in <span className="text-white/70 font-medium">Figma</span> and coded in <span className="text-white/70 font-medium">Visual Studio Code</span> by 
            yours truly. Built with <span className="text-white/70 font-medium">React</span> and <span className="text-white/70 font-medium">Tailwind CSS</span>, deployed with 
            <span className="text-white/70 font-medium"> Vercel</span>. All text is set in the <span className="text-white/70 font-medium">Inter</span> typeface.
          </p>
        </footer>
      </main>
    </div>
  );
};