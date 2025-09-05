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

const education = [
  {
    period: 'Aug 2020 — May 2022',
    school: 'Virginia Commonwealth University',
    degree: 'B.S. Computer Science',
    location: 'Richmond, VA',
    coursework: ['Software Engineering Practice', 'Operating Systems', 'Computer Architecture', 'Model-Based Programming', 'Algorithms and Data Structures'],
  },
];

export const RightContent = () => {
  return (
    <div className="w-full lg:w-1/2 lg:ml-auto lg:py-24">
      <main className="space-y-24">
        {/* About Section */}
        <section id="about" data-section className="fade-in">
          <div className="lg:hidden mb-16">
            <div className="section-header">
              <h2>About</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I'm a software engineer focused on React/Next.js frontends, TypeScript/Node backends, 
              and automation at scale. At Allstate Sales Group I shipped a centralized HR portal 
              used by 500+ employees, integrated 12+ third-party APIs, and raised uptime from 97.3% 
              to 99.8% with a replica database and automated staging.
            </p>
            
            <p>
              I like systems that eliminate manual work and surface real-time KPIs.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-section className="fade-in">
          <div className="lg:hidden mb-16">
            <div className="section-header">
              <h2>Experience</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <a
                key={index}
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="experience-card">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-1">
                      <p className="text-sm text-text-muted uppercase tracking-wider">
                        {experience.period}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <h3 className="text-text-primary font-medium mb-2 group-hover:text-accent-cyan transition-colors flex items-center gap-2">
                        {experience.title} · {experience.company}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </h3>
                      
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span key={tech} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <a
              href="mailto:rmc.2917@gmail.com"
              className="inline-flex items-center gap-2 text-accent-cyan hover:underline transition-colors"
            >
              View Full Résumé
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-section className="fade-in">
          <div className="lg:hidden mb-16">
            <div className="section-header">
              <h2>Projects</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-1">
                    <div className="w-full h-24 lg:h-20 bg-accent-navy rounded border border-divider"></div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-text-primary font-medium mb-2 flex items-center gap-2">
                      {project.title}
                      <div className="flex gap-2">
                        {project.links.external && (
                          <a
                            href={project.links.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent-cyan transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent-cyan transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </h3>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
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
              className="inline-flex items-center gap-2 text-accent-cyan hover:underline transition-colors"
            >
              View Full Project Archive
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" data-section className="fade-in">
          <div className="lg:hidden mb-16">
            <div className="section-header">
              <h2>Education</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="experience-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-text-muted uppercase tracking-wider">
                      {edu.period}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-text-primary font-medium mb-2">
                      {edu.degree} · {edu.school}
                    </h3>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {edu.location}
                    </p>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      <strong>Relevant Coursework:</strong> {edu.coursework.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-section className="fade-in">
          <div className="lg:hidden mb-16">
            <div className="section-header">
              <h2>Contact</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="text-text-secondary leading-relaxed">
              Let's work together. Email me or connect on LinkedIn.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:rmc.2917@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-navy/10 border border-accent-cyan/20 rounded-lg text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rohancho/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-navy/10 border border-accent-cyan/20 rounded-lg text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/chowdhuryrz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-navy/10 border border-accent-cyan/20 rounded-lg text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
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