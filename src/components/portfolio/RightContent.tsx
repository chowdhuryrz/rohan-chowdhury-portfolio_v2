import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES, PROJECTS, ABOUT_SECTIONS } from '@/config/data';
import { RESUME_URL, SOCIAL_LINKS } from '@/config/constants';
import SectionErrorBoundary from '@/components/SectionErrorBoundary';

export const RightContent = () => {
  return (
    <div className="pt-24 xl:pt-24">
      <main className="max-w-[720px] space-y-24">
        {/* About Section */}
        <section id="about" data-section>
          <SectionErrorBoundary sectionName="About">
            <div className="space-y-4">
              {ABOUT_SECTIONS.map((paragraph, index) => (
                <p key={index} className="text-white/80 leading-relaxed text-base">
                  {paragraph.split(' ').map((word, wordIndex) => {
                    if (word.includes('Allstate Sales Group') || word.includes('advertising') || 
                        word.includes('corporations') || word.includes('start-ups') || 
                        word.includes('studios') || word.includes('video course') || 
                        word.includes('Korok seeds')) {
                      return <span key={wordIndex} className="text-white font-medium">{word} </span>;
                    }
                    return word + ' ';
                  })}
                </p>
              ))}
            </div>
          </SectionErrorBoundary>
        </section>

        {/* Experience Section */}
        <section id="experience" data-section>
          <SectionErrorBoundary sectionName="Experience">
            <div className="space-y-12">
              {EXPERIENCES.map((experience, index) => (
              <div key={index} className="group">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <div className="text-white/40 text-xs uppercase tracking-wide font-medium whitespace-nowrap">
                      {experience.period}
                    </div>
                  </div>
                  <div className="col-span-3">
                    <h3 className="text-white font-medium text-base mb-2 group-hover:text-accent-cyan transition-colors">
                      {experience.title} · {experience.company} <ArrowUpRight className="w-4 h-4 inline ml-1" />
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm mb-3">
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
            
            <div className="mt-12">
              <a
                href={RESUME_URL}
                className="text-white underline decoration-white/20 hover:decoration-white transition-colors"
              >
                View Full Résumé
                <ArrowUpRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>
            </div>
          </SectionErrorBoundary>
        </section>

        {/* Projects Section */}
        <section id="projects" data-section>
          <SectionErrorBoundary sectionName="Projects">
            <div className="space-y-12">
              {PROJECTS.map((project, index) => (
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
          </SectionErrorBoundary>
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