import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const backgrounds = {
  '/': '/home-bg.webp',
  '/music': '/vyniles.webp',
  '/beat-store': '/beatstore.webp',
  '/shop': '/shop.webp',
  '/contact': '/contact.webp',
};

// Preload all background images immediately
Object.values(backgrounds).forEach((url) => {
  const img = new Image();
  img.src = url;
});

const Background = () => {
  const location = useLocation();
  const [bgImage, setBgImage] = useState(backgrounds['/']);
  const [isVisible, setIsVisible] = useState(true);
  const prevPathRef = useRef('/');

  useEffect(() => {
    // Determine which background matches current path
    let bgKey = '/';
    for (const [path] of Object.entries(backgrounds)) {
      if (path === '/' && location.pathname === '/') {
        bgKey = path;
        break;
      } else if (path !== '/' && location.pathname.startsWith(path)) {
        bgKey = path;
        break;
      }
    }

    const newBg = backgrounds[bgKey];
    if (bgKey === prevPathRef.current) return; // already showing correct bg

    prevPathRef.current = bgKey;

    // Fade out → switch → fade in
    setIsVisible(false);
    setTimeout(() => {
      setBgImage(newBg);
      setIsVisible(true);
    }, 250);
  }, [location.pathname]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `url('${bgImage}') center center / cover no-repeat fixed`,
        transition: 'opacity 0.25s ease-in-out',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default Background;
