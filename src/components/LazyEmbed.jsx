import React, { useState } from 'react';

const LazyEmbed = ({ videoId, title, className, style }) => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div
        onClick={() => setLoaded(true)}
        className={`relative cursor-pointer group overflow-hidden ${className || ''}`}
        style={{ width: '100%', height: '100%', ...style }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLoaded(true); }}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={title || 'Play video'}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/30">
            <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent ml-1.5"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title={title || 'YouTube video player'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={`w-full h-full ${className || ''}`}
      style={style}
    ></iframe>
  );
};

export default LazyEmbed;
