
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  repeat?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  speed = 100,
  delay = 1000,
  cursor = true,
  repeat = true,
}) => {
  const textArray = Array.isArray(text) ? text : [text];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = textArray[currentIndex];
    
    const typeEffect = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      } else {
        // Typing text
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        // Once we finish typing
        if (displayText.length === currentText.length) {
          // Only start deleting if we're repeating or have more texts to show
          if (repeat || currentIndex < textArray.length - 1) {
            timeout = setTimeout(() => {
              setIsDeleting(true);
            }, delay);
            return;
          }
        }
      }
      
      const nextSpeed = isDeleting ? speed / 1.5 : speed;
      timeout = setTimeout(typeEffect, nextSpeed);
    };
    
    timeout = setTimeout(typeEffect, speed);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, textArray, speed, delay, repeat]);
  
  return (
    <span className={className}>
      {displayText}
      {cursor && <span className="typed-cursor">|</span>}
    </span>
  );
};

export default AnimatedText;
