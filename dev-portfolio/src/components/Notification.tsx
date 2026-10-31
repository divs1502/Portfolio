import { useState, useEffect } from 'react';
import { X, Info, AlertCircle, CheckCircle } from 'lucide-react';

interface NotificationProps {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  onClose: () => void;
}

const Notification = ({ message, type = 'info', duration = 3000, onClose }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 200); // 200ms transition
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />;
      case 'warning':
        return <AlertCircle size={18} className="text-yellow-500 shrink-0 mt-0.5" />;
      case 'error':
        return <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />;
      default:
        return <Info size={18} className="text-accent shrink-0 mt-0.5" />;
    }
  };

  return (
    <div
      className={`fixed top-5 right-5 z-[9999] max-w-sm w-full p-4 rounded-lg bg-surface-raised ring-1 ring-line shadow-lg transition-all duration-200 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
      }`}
    >
      <div className="flex items-start gap-3">
        {getIcon()}
        <div className="flex-1">
          <p className="text-sm font-medium text-ink">{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 200);
          }}
          aria-label="Close notification"
          className="text-ink-subtle hover:text-ink transition-colors duration-150"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Notification;
