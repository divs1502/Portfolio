import { useState, useEffect } from 'react';

export const useTypingEffect = (roles: string[], typingSpeed: number = 150, pauseTime: number = 3000) => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let i = 0;
    
    const typing = setInterval(() => {
      if (i < currentRole.length) {
        setTypedText(currentRole.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          const erasing = setInterval(() => {
            if (i > 0) {
              setTypedText(currentRole.substring(0, i - 1));
              i--;
            } else {
              clearInterval(erasing);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 100);
        }, pauseTime);
      }
    }, typingSpeed);

    return () => clearInterval(typing);
  }, [currentRoleIndex, roles, typingSpeed, pauseTime]);

  return typedText;
};
