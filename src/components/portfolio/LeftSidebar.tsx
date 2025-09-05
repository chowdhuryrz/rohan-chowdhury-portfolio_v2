import { Github, Linkedin, Instagram, BookOpen, CodepenIcon } from 'lucide-react';

interface LeftSidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navigationItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { Icon: Github, href: 'https://github.com/chowdhuryrz', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/rohancho/', label: 'LinkedIn' },
];

export const LeftSidebar = ({ activeSection, onNavigate }: LeftSidebarProps) => {
  return (
    <div className="hidden lg:flex lg:w-1/2 lg:fixed lg:h-screen lg:py-24 lg:flex-col lg:justify-between">
      <div className="fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          Rohan Chowdhury
        </h1>
        <h2 className="text-xl lg:text-2xl font-medium text-text-primary mb-4">
          Software Engineer
        </h2>
        <p className="text-text-secondary max-w-xs mb-16 leading-relaxed">
          I build reliable, data-driven web apps and automations.
        </p>

        <nav className="hidden lg:block">
          <ul className="space-y-6">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`nav-link text-sm uppercase tracking-widest ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex space-x-6 mt-16 lg:mt-0">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};