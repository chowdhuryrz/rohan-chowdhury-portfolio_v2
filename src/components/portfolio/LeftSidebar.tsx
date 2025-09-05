import { Github, Linkedin, Instagram, BookOpen, CodepenIcon } from 'lucide-react';

interface LeftSidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navigationItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const socialLinks = [
  { Icon: Github, href: 'https://github.com/chowdhuryrz', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/rohancho/', label: 'LinkedIn' },
];

export const LeftSidebar = ({ activeSection, onNavigate }: LeftSidebarProps) => {
  return (
    <div className="hidden xl:block xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] xl:flex xl:flex-col xl:justify-between xl:pb-24">
      <div>
        <h1 className="text-5xl font-bold tracking-tight leading-[1.1] text-white mb-3">
          Rohan Chowdhury
        </h1>
        <h2 className="text-xl font-medium text-white/90 mb-4">
          Software Engineer
        </h2>
        <p className="text-base text-white/70 max-w-[320px] leading-normal mb-16">
          I build reliable, data-driven web apps and automations.
        </p>

        <nav className="mb-24">
          <ul className="space-y-0">
            {navigationItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`relative text-xs uppercase tracking-widest font-medium py-3 pl-8 transition-colors block ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-px transition-all ${
                    activeSection === item.id 
                      ? 'bg-white' 
                      : 'bg-white/20'
                  }`}></div>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-5">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};