import React from 'react';
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

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `url('${bgImage}') center center / cover no-repeat fixed`,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default Background;
