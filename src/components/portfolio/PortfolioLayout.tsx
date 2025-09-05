import { useState, useEffect } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { RightContent } from './RightContent';
import { MobileNav } from './MobileNav';

export const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200; // Add offset for better detection
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="lg:grid-cols-1 xl:grid xl:grid-cols-[480px_1fr] xl:gap-x-8 xl:items-start">
          <LeftSidebar activeSection={activeSection} onNavigate={handleNavigate} />
          <RightContent />
        </div>
      </div>
    </div>
  );
};