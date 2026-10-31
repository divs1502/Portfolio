import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Navigation = ({ activeSection, scrollToSection, theme, onThemeToggle }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-line nav-backdrop backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <button
            onClick={() => handleNavClick('home')}
            className="font-mono text-sm text-ink-muted hover:text-ink transition-colors duration-150"
          >
            divyesh<span className="text-accent">.</span>dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-150 ${
                  activeSection === item.id
                    ? 'text-ink nav-item-active font-medium'
                    : 'text-ink-muted hover:text-ink nav-item-hover'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme toggle — desktop */}
            <button
              onClick={onThemeToggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="ml-2 p-2 rounded-md text-ink-muted hover:text-ink nav-item-hover transition-all duration-150"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile right cluster: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={onThemeToggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-ink-muted hover:text-ink nav-item-hover rounded-md transition-colors duration-150"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-ink-muted hover:text-ink nav-item-hover rounded-md transition-colors duration-150"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-line animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2.5 text-sm rounded-md transition-colors duration-150 ${
                  activeSection === item.id
                    ? 'text-ink nav-item-active font-medium'
                    : 'text-ink-muted hover:text-ink nav-item-hover'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
