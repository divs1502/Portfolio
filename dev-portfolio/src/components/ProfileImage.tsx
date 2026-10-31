import { useState, useEffect } from 'react';

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showFloatingElements?: boolean;
  showStatus?: boolean;
  isOnline?: boolean;
}

const ProfileImage = ({ 
  size = 'md', 
  className = '', 
  showFloatingElements = false,
  showStatus = false,
  isOnline = true
}: ProfileImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isZoomed) {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  return (
    <>
      <div className={`${sizeClasses[size]} relative group ${className}`}>
        {/* Main profile image */}
        <div 
          className="w-full h-full rounded-full bg-surface-overlay ring-1 ring-line p-1 transition-all duration-200 cursor-pointer" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleImageClick();
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-surface-raised">
            <img 
              src="/images/profile-image.jpg" 
              alt="Divyesh Lahane - Software Engineer"
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-200"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback initials */}
            <div className={`w-full h-full rounded-full bg-surface-overlay flex items-center justify-center ${textSizes[size]} font-bold text-accent hidden`}>
              DL
            </div>
          </div>
        </div>
        
        {/* Online status indicator */}
        {showStatus && (
          <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-surface ${
            isOnline ? 'bg-green-400' : 'bg-ink-subtle'
          }`}></div>
        )}
        
        {/* Floating elements for interactivity */}
        {showFloatingElements && (
          <>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse border-2 border-surface"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse border-2 border-surface"></div>
          </>
        )}
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-full bg-ink opacity-0 group-hover:opacity-5 transition-opacity duration-200"></div>
      </div>

      {/* Zoomed modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-surface/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-2xl max-h-2xl w-full h-full flex items-center justify-center">
            <img 
              src="/images/profile-image.jpg" 
              alt="Divyesh Lahane - Software Engineer"
              className="max-w-full max-h-full object-contain rounded-lg ring-1 ring-line"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-surface-overlay ring-1 ring-line rounded-full flex items-center justify-center text-ink-muted hover:text-ink transition-colors duration-150 z-10"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoomed image"
            >
              <span className="text-lg font-bold">✕</span>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-ink-muted text-xs bg-surface-overlay/90 backdrop-blur-sm px-3 py-1 rounded-full ring-1 ring-line font-mono">
              Press ESC to close
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileImage;
