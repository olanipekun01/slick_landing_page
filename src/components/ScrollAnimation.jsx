import React, { useState, useEffect } from 'react';

const ScrollAnimation = ({ triggerPoint, children }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > triggerPoint) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerPoint]);

  return (
    <div className={`animation-element ${animate ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;