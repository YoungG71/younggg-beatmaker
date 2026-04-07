import React from 'react';
import { artistData } from '../artistData';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Image REMOVED to show global home-bg.png */}
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-6xl md:text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-west-gold to-west-gold-dark drop-shadow-lg filter tracking-wider font-gothic lowercase first-letter:uppercase">
          {artistData.name}
        </h1>
        <div className="h-1 w-32 mx-auto bg-west-gold shadow-[0_0_10px_#FFD700]"></div>
        <h2 className="text-2xl md:text-4xl text-gray-200 tracking-widest mt-6">
          {artistData.tagline}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
