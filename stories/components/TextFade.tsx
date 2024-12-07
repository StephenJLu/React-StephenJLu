import React, { useEffect, useState, useRef } from 'react';
import './textFade.css';

interface TextFadeProps {
  fadeText: string;
  delay?: number; // Optional delay in milliseconds
}

const TextFade: React.FC<TextFadeProps> = ({ fadeText, delay = 2000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, delay); // Delay before showing the text

            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  return (
    <span ref={textRef} data-bs-theme="dark" className={`text-fade ${isVisible ? 'visible' : ''}`}>
      {fadeText}
    </span>
  );
};

export default TextFade;