import { ExternalLink, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    period: '2024 — Present',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    companyUrl: 'https://klaviyo.com',
    description: 'Build and maintain critical components used to construct Klaviyo\'s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
  {
    period: '2018 — 2024',
    title: 'Lead Engineer',
    company: 'Upstatement',
    companyUrl: 'https://upstatement.com',
    description: 'Delivered high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
  },
];

const projects = [
  {
    title: 'Build a Spotify Connected App',
    description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the Web API, user authentication, Node.js, Express, React, Styled Components, and more.',
    technologies: ['React', 'Node.js', 'Express', 'Spotify API'],
    links: {
      external: 'https://buildaspotifyapp.com',
      github: 'https://github.com/bchiang7/spotify-profile',
    },
  },
  {
    title: 'Halcyon Theme',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    links: {
      external: 'https://halcyon-theme.netlify.app',
      github: 'https://github.com/bchiang7/halcyon-theme',
    },
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
              I'm a developer passionate about crafting accessible, pixel-perfect user 
              interfaces that blend thoughtful design with robust engineering. My favorite 
              work lies at the intersection of design and development, creating experiences 
              that not only look great but are meticulously built for performance and usability.
            </p>
            
            <p>
              Currently, I'm a Senior Front-End Engineer at{' '}
              <a 
                href="https://klaviyo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline transition-colors"
              >
                Klaviyo
              </a>
              , specializing in accessibility. I contribute to the creation and maintenance 
              of UI components that power Klaviyo's frontend, ensuring our platform meets 
              web accessibility standards and best practices to deliver an inclusive user experience.
            </p>
            
            <p>
              In the past, I've had the opportunity to develop software across a variety 
              of settings — from advertising agencies and large corporations to start-ups 
              and small digital product studios. Additionally, I also released a{' '}
              <a 
                href="#" 
                className="text-accent-cyan hover:underline transition-colors"
              >
                comprehensive video course
              </a>
              {' '}a few years ago, guiding learners through building a web app with 
              the Spotify API.
            </p>
            
            <p>
              In my spare time, I'm usually climbing, reading, hanging out with my wife and 
              two cats, or running around Hyrule searching for{' '}
              <a 
                href="#" 
                className="text-accent-cyan hover:underline transition-colors"
              >
                Korok seeds
              </a>
              .
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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-cyan hover:underline transition-colors"
            >
              View Full Project Archive
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};