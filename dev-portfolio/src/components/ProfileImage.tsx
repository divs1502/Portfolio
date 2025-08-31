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
    console.log('Image clicked, toggling zoom from:', isZoomed, 'to:', !isZoomed);
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
          className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleImageClick();
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img 
              src="/images/profile-image.jpg" 
              alt="Divyesh Lahane - Software Engineer"
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback initials */}
            <div className={`w-full h-full rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center ${textSizes[size]} font-bold text-indigo-600 hidden`}>
              DL
            </div>
          </div>
        </div>
        
        {/* Online status indicator */}
        {showStatus && (
          <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${
            isOnline ? 'bg-green-400' : 'bg-gray-400'
          }`}></div>
        )}
        
        {/* Floating elements for interactivity */}
        {showFloatingElements && (
          <>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse border-2 border-white"></div>
          </>
        )}
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Click hint */}
        <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to zoom
          </span>
        </div>
        
        {/* Always visible click indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click me!
        </div>
      </div>

      {/* Zoomed modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-2xl max-h-2xl w-full h-full flex items-center justify-center">
            <img 
              src="/images/profile-image.jpg" 
              alt="Divyesh Lahane - Software Engineer"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors shadow-lg z-10"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoomed image"
            >
              <span className="text-lg font-bold">✕</span>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
              Press ESC to close
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileImage;
