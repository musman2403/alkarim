import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const EyeBlinkTransition = () => {
  const { pathname } = useLocation();
  const [isBlinking, setIsBlinking] = useState(false);
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Avoid double trigger on initial mount if desired, or run on every route change
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    setIsBlinking(true);

    // Scroll to top right in the middle of the blink when screen is occluded
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 220);

    const finishTimer = setTimeout(() => {
      setIsBlinking(false);
    }, 600);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(finishTimer);
    };
  }, [pathname]);

  if (!isBlinking) return null;

  return (
    <div className="eye-blink-container" aria-hidden="true">
      <div className="eyelid-panel eyelid-panel-top">
        <div className="eyelash-rim rim-top"></div>
      </div>
      <div className="eyelid-glow-slit"></div>
      <div className="eyelid-panel eyelid-panel-bottom">
        <div className="eyelash-rim rim-bottom"></div>
      </div>
    </div>
  );
};

export default EyeBlinkTransition;
