import { useState, useEffect } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { RightContent } from './RightContent';
import { MobileNav } from './MobileNav';

export const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-portfolio font-inter">
      <MobileNav 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-24 flex pt-20 lg:pt-0">
        <LeftSidebar 
          activeSection={activeSection} 
          onNavigate={scrollToSection}
        />
        <RightContent />
      </div>
    </div>
  );
};