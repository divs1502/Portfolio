import './styles/globals.css';
import './index.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Hooks
import { useTypingEffect } from './hooks/useTypingEffect';
import { useScrollTracking } from './hooks/useScrollTracking';

// Utils
import { scrollToSection } from './utils/scrollUtils';

// Constants
import { ROLES, SECTIONS } from './constants';

const Portfolio = () => {
  // Custom hooks
  const typedText = useTypingEffect(ROLES);
  const { activeSection, scrollY } = useScrollTracking(SECTIONS);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800">
      {/* Gentle background pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-pattern" />
      </div>

      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      {/* Hero Section */}
      <Hero 
        typedText={typedText} 
        scrollToSection={scrollToSection} 
      />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop scrollY={scrollY} />
    </div>
  );
};

export default Portfolio;