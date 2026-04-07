import React from 'react';
import { artistData } from '../artistData';

const videos = [
  "BV-e07Nsu5E", // I Said Biatch
  "9Wr_qtoQ3iY", 
  "e5D7_yqw8GA", 
  "MqGRD0DBUS4", 
  "jSKb_PgoWbQ", 
  "TcfcXBZVY2c", 
  "h7h9XVpO6K0", 
  "ijg9UOOSgis", 
  "3Z0n6LI5Hyw", 
  "MOFjWbiaos4", 
  "_BchdHYhpZ0"
];

const HomeContent = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: ABOUT ME & BIO */}
        <div className="mb-32 text-center">
          <h2 className="text-6xl md:text-8xl text-west-gold font-street mb-12 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] tracking-wide">
            ABOUT ME
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-3xl text-gray-100 font-street tracking-wide leading-relaxed drop-shadow-lg bg-black/60 p-8 rounded-xl border border-west-gold/30 backdrop-blur-sm">
              {artistData.bio}
            </p>
          </div>
        </div>

        {/* SECTION 2: VIDEO PRODUCTIONS */}
        <div>
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-west-gold"></div>
            <h3 className="text-4xl md:text-5xl text-west-gold font-street mx-6 tracking-widest">
              VIDEO PRODUCTIONS
            </h3>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-west-gold"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((videoId, index) => (
              <div 
                key={index} 
                className="aspect-video w-full border border-west-gold shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeContent;