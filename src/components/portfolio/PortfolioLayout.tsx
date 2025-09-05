import { useState, useEffect } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { RightContent } from './RightContent';
import { MobileNav } from './MobileNav';

export const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 96; // Match navigation offset
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop - 96) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 96; // Align with left sidebar content
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
      
      <div className="max-w-[1200px] mx-auto px-2 md:px-4 lg:px-6">
        <div className="lg:grid-cols-1 xl:grid xl:grid-cols-2 xl:gap-x-4 xl:items-start">
          <LeftSidebar activeSection={activeSection} onNavigate={handleNavigate} />
          <RightContent />
        </div>
      </div>
    </div>
  );
};