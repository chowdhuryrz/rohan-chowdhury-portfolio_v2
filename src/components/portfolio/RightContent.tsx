import { ExternalLink, ArrowUpRight, Star, Download, Github } from 'lucide-react';
import { EXPERIENCES, PROJECTS, ABOUT_SECTIONS } from '@/config/data';
import { RESUME_URL, SOCIAL_LINKS, CONTACT } from '@/config/constants';

export const RightContent = () => {
  return (
    <div className="pt-4 xl:pt-24 px-6 xl:px-0">
      <main className="max-w-[720px] space-y-12 xl:space-y-32">
        {/* About Section */}
        <section id="about" data-section>
          <div className="space-y-4">
              {ABOUT_SECTIONS.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed text-base font-light">
                  {paragraph.split(/(\bAllstate Sales Group\b|\bFrontend Simplified\b|\bMcGill Scheduler\b|\bEmpor\b|\bReact\b|\bNext\.js\b|\bTypeScript\b|\bNode\.js\b|\bPostgreSQL\b|\bAWS\b)/).map((part, partIndex) => {
                    if (['Allstate Sales Group', 'Frontend Simplified', 'McGill Scheduler', 'Empor', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'].includes(part)) {
                      return <span key={partIndex} className="text-text-primary font-light">{part}</span>;
                    }
                    return part;
                  })}
                </p>
              ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-section>
          <div className="space-y-8 xl:space-y-12">
              {EXPERIENCES.map((experience, index) => (
              <div key={index} className="group experience-card">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                  <div className="xl:col-span-1">
                    <div className="text-text-muted text-xs uppercase tracking-wide font-medium xl:whitespace-nowrap xl:sticky xl:top-8">
                      {experience.period}
                    </div>
                  </div>
                  <div className="xl:col-span-3">
                    <h3 className="experience-title-link">
                      {experience.title} · {experience.company} 
                      <ArrowUpRight className="w-4 h-4 opacity-70 experience-arrow" />
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm font-light mb-3">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="tech-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-12">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
              >
                View Full Résumé
                <ArrowUpRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-section>
          <div className="space-y-8 xl:space-y-12">
              {PROJECTS.map((project, index) => (
              <div key={index} className="group experience-card">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                  <div className="xl:col-span-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-contain rounded border border-text-muted/20 xl:sticky xl:top-8"
                    />
                  </div>
                  <div className="xl:col-span-3">
                    <h3 className="experience-title-link gap-2">
                      {project.title}
                      <div className="flex gap-2">
                        {project.links.external && (
                          <a
                            href={project.links.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-text-primary transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed text-sm font-light mb-3">
                      {project.description}
                    </p>
                    
                    {'stars' in project && (
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="w-4 h-4 text-text-muted" />
                        <span className="text-text-muted text-sm">{project.stars.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {'downloads' in project && (
                      <div className="flex items-center gap-1 mb-3">
                        <Download className="w-4 h-4 text-text-muted" />
                        <span className="text-text-muted text-sm">{project.downloads}</span>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-12">
              <a
                href={SOCIAL_LINKS.find(link => link.name === 'github')?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
              >
                View Full Project Archive
                <ArrowUpRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="pt-8 xl:pt-12">
          <p className="text-text-secondary leading-relaxed text-base font-light mb-6">
            I'm always interested in new opportunities and interesting projects. Feel free to reach out if you'd like to connect.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>

        {/* Footer */}
        <footer className="pt-12 xl:pt-16 pb-16 xl:pb-24">
          <p className="text-white/50 text-sm leading-relaxed">
            © {new Date().getFullYear()} Rohan Chowdhury. Designed and built with attention to detail.
          </p>
        </footer>
      </main>
    </div>
  );
};