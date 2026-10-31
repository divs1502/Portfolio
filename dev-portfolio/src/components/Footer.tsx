import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-ink-muted">
              divyesh<span className="text-accent">.</span>dev
            </p>
            <p className="text-xs text-ink-subtle mt-1">Software Engineer · Pune, India</p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/divs1502/" target="_blank" rel="noopener noreferrer"
               aria-label="GitHub Profile"
               className="text-ink-subtle hover:text-ink transition-colors duration-150">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/divyesh-lahane/" target="_blank" rel="noopener noreferrer"
               aria-label="LinkedIn Profile"
               className="text-ink-subtle hover:text-ink transition-colors duration-150">
              <Linkedin size={18} />
            </a>
            <a href="mailto:divyeshlahane15@gmail.com"
               aria-label="Send Email"
               className="text-ink-subtle hover:text-ink transition-colors duration-150">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-line text-center">
          <p className="text-xs text-ink-subtle font-mono">© 2025 Divyesh Lahane · Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
