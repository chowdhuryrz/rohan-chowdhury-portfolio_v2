import { Github, Linkedin, Instagram, BookOpen, CodepenIcon } from 'lucide-react';

interface LeftSidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navigationItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { Icon: Github, href: 'https://github.com/chowdhuryrz', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/rohancho/', label: 'LinkedIn' },
];

export const LeftSidebar = ({ activeSection, onNavigate }: LeftSidebarProps) => {
  return (
    <div className="hidden xl:block xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] xl:flex xl:flex-col xl:justify-between xl:py-12">
      <div>
        <h1 className="text-6xl font-extrabold tracking-tight leading-none text-white">
          Rohan Chowdhury
        </h1>
        <h2 className="mt-3 text-xl font-semibold text-white/90">
          Software Engineer
        </h2>
        <p className="mt-3 text-sm text-white/70 max-w-[34ch] leading-relaxed">
          I build reliable, data-driven web apps and automations.
        </p>

        <nav className="mt-16">
          <ul>
            {navigationItems.map((item, index) => (
              <li key={item.id} className="py-3">
                {index > 0 && <div className="h-px bg-white/10 mb-3"></div>}
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto flex gap-5">
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