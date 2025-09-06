import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, CONTACT } from '@/config/constants';

interface MobileNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-text-primary">
          {CONTACT.name.split(' ').map(n => n[0]).join('')}
        </h1>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-secondary hover:text-accent-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {isOpen && (
        <nav className="border-t border-divider bg-background/95 backdrop-blur-sm">
          <ul className="px-6 py-4 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigate(item.id)}
                  className={`nav-link text-sm uppercase tracking-widest block w-full text-left ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};