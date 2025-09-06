import { Github, Linkedin, FileText } from 'lucide-react';
import { NAVIGATION_ITEMS, SOCIAL_LINKS, CONTACT } from '@/config/constants';

interface LeftSidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const LeftSidebar = ({ activeSection, onNavigate }: LeftSidebarProps) => {
  return (
    <div className="hidden xl:block xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] xl:flex xl:flex-col xl:justify-between xl:pb-24">
      <div>
        <h1 className="text-5xl font-semibold tracking-tight leading-[1.1] text-white mb-3">
          {CONTACT.name}
        </h1>
        <h2 className="text-xl font-light text-white mb-4">
          {CONTACT.title}
        </h2>
        <p className="text-base font-light text-text-secondary max-w-[320px] leading-normal mb-16">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className="mb-24">
          <ul className="space-y-0">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-5">
        {SOCIAL_LINKS.map(({ name, href, label }) => {
          const Icon = name === 'github' ? Github : name === 'linkedin' ? Linkedin : FileText;
          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
};