import { ArrowDown, Github, Linkedin, Mail, Globe } from 'lucide-react';
import ProfileImage from './ProfileImage';

interface HeroProps {
  typedText: string;
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ typedText, scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-14">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Profile image */}
        <div className="mb-8 flex justify-center">
          <ProfileImage size="lg" showStatus={true} isOnline={true} />
        </div>

        {/* Label */}
        <p className="font-mono text-xs text-ink-muted tracking-widest uppercase mb-4">
          Software Engineer · Pune, India
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-4 text-balance">
          Divyesh Lahane
        </h1>

        {/* Typing effect */}
        <div className="h-8 flex items-center justify-center mb-6">
          <span className="font-mono text-base text-ink-muted">
            {typedText}
            <span className="animate-blink text-accent ml-0.5">|</span>
          </span>
        </div>

        {/* Summary */}
        <p className="text-base text-ink-muted mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          3+ years building scalable SaaS platforms and ERP integrations with C#/.NET, React, AWS, and GraphQL.
          Currently at{' '}
          <a
            href="https://www.linkedin.com/company/cybage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dim transition-colors duration-150 underline underline-offset-2"
          >
            Cybage Software
          </a>
          {' '}serving enterprise clients across the RepSpark B2B platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-2.5 bg-ink text-surface text-sm font-medium rounded-md hover:bg-ink/90 transition-all duration-150"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 ring-1 ring-line-strong text-ink-muted text-sm font-medium rounded-md hover:text-ink hover:ring-line-strong transition-all duration-150"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/divs1502/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-ink-subtle hover:text-ink transition-colors duration-150"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/divyesh-lahane/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-ink-subtle hover:text-ink transition-colors duration-150"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:divyeshlahane15@gmail.com"
            aria-label="Send Email"
            className="p-2 text-ink-subtle hover:text-ink transition-colors duration-150"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://portfolio-divyesh.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio Website"
            className="p-2 text-ink-subtle hover:text-ink transition-colors duration-150"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="p-2 text-ink-subtle hover:text-ink-muted transition-colors duration-150 animate-bounce"
        >
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
