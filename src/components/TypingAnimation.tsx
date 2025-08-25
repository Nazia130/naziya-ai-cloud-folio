import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingAnimation = ({ text, speed = 100, className = '' }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (displayText.length < text.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else {
      setIsComplete(true);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`inline-block w-0.5 h-6 bg-sky ml-1 ${
          isComplete ? 'animate-blink' : 'opacity-100'
        }`}
      />
    </span>
  );
};

export default TypingAnimation;