import { ChevronDown } from 'lucide-react';
import { scrollToTop } from '../utils/scrollUtils';

interface ScrollToTopProps {
  scrollY: number;
}

const ScrollToTop = ({ scrollY }: ScrollToTopProps) => {
  if (scrollY <= 500) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-40 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ChevronDown size={24} className="rotate-180" />
    </button>
  );
};

export default ScrollToTop;
