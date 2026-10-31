import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../utils/scrollUtils';

interface ScrollToTopProps {
  scrollY: number;
}

const ScrollToTop = ({ scrollY }: ScrollToTopProps) => {
  if (scrollY <= 500) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 p-2.5 bg-surface-overlay ring-1 ring-line text-ink-muted rounded-lg hover:text-ink hover:ring-line-strong transition-all duration-150 z-40"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
