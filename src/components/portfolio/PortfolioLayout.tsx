import { useState, useEffect } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { RightContent } from './RightContent';
import { MobileNav } from './MobileNav';

export const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
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
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="lg:grid-cols-1 xl:grid xl:grid-cols-[480px_1fr] xl:gap-x-24 xl:items-start">
          <LeftSidebar activeSection={activeSection} onNavigate={handleNavigate} />
          <RightContent />
        </div>
      </div>
    </div>
  );
};