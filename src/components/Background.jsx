import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const backgrounds = {
  '/': '/home-bg.webp',
  '/music': '/vyniles.webp',
  '/beat-store': '/beatstore.webp',
  '/shop': '/shop.webp',
  '/contact': '/contact.webp',
};

const Background = () => {
  const location = useLocation();
  const [currentBg, setCurrentBg] = useState(backgrounds['/']);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // Find the matching background for current path
    let bgImage = backgrounds['/']; // default to home
    for (const [path, image] of Object.entries(backgrounds)) {
      if (path === '/' && location.pathname === '/') {
        bgImage = image;
        break;
      } else if (path !== '/' && location.pathname.startsWith(path)) {
        bgImage = image;
        break;
      }
    }

    if (bgImage !== currentBg) {
      setIsTransitioning(true);
      // Wait for fade out, then switch image, then fade in
      setTimeout(() => {
        setCurrentBg(bgImage);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  }, [location.pathname, currentBg]);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `url('${currentBg}') center center / cover no-repeat fixed`,
        transition: 'opacity 0.3s ease-in-out',
        opacity: isTransitioning ? 0 : 1,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default Background;
