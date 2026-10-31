import './styles/globals.css';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { useTypingEffect } from './hooks/useTypingEffect';
import { useScrollTracking } from './hooks/useScrollTracking';
import { useTheme } from './hooks/useTheme';
import { scrollToSection } from './utils/scrollUtils';
import { ROLES, SECTIONS } from './constants';

const Portfolio = () => {
  const typedText = useTypingEffect(ROLES);
  const { activeSection, scrollY } = useScrollTracking(SECTIONS);
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-surface text-ink antialiased">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        theme={theme}
        onThemeToggle={toggle}
      />
      <Hero
        typedText={typedText}
        scrollToSection={scrollToSection}
      />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop scrollY={scrollY} />
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default Portfolio;
