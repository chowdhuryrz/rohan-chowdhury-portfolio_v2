import { Github, Linkedin } from 'lucide-react';
import { NAVIGATION_ITEMS, SOCIAL_LINKS, CONTACT } from '@/config/constants';

interface LeftSidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const LeftSidebar = ({ activeSection, onNavigate }: LeftSidebarProps) => {
  return (
    <div className="hidden xl:block xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] xl:flex xl:flex-col xl:justify-between xl:pb-24">
      <div>
        <h1 className="text-5xl font-bold tracking-tight leading-[1.1] text-white mb-3">
          {CONTACT.name}
        </h1>
        <h2 className="text-xl font-light text-white/90 mb-4">
          {CONTACT.title}
        </h2>
        <p className="text-base text-white/70 max-w-[320px] leading-normal mb-16">
          {CONTACT.tagline}
        </p>

        <nav className="mb-24">
          <ul className="space-y-0">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`relative text-xs uppercase tracking-widest font-medium py-3 pl-8 transition-colors block ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-300 ease-in-out ${
                    activeSection === item.id 
                      ? 'bg-white opacity-100' 
                      : 'bg-white/20 opacity-50'
                  }`}></div>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-5">
        {SOCIAL_LINKS.map(({ name, href, label }) => {
          const Icon = name === 'github' ? Github : Linkedin;
          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
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