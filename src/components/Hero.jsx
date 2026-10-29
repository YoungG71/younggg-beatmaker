import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Disc3, ShieldCheck, Flame, ChevronDown, Sparkles } from 'lucide-react';
import { artistData } from '../artistData';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContent = () => {
    const el = document.getElementById('featured-beats-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-28 pb-12 px-4 overflow-hidden bg-transparent">
      {/* Radial soft backdrop to guarantee 100% text contrast while preserving the street scene below */}
      <div className="absolute inset-0 bg-radial-gradient from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center my-auto">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-west-gold/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.2)] mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-west-gold" />
          <span className="text-west-gold text-xs sm:text-sm font-sans font-semibold tracking-widest uppercase">
            Official West Coast Producer • Since 2010
          </span>
          <Flame className="w-4 h-4 text-west-orange" />
        </div>

        {/* Brand Title: ELECTRIC NEON SIGN EFFECT */}
        <div className="neon-glow-container mb-3">
          <h1 className="neon-electric-title text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-brand font-black tracking-widest uppercase leading-none select-none relative">
            {artistData.name}
            {/* Arc sweep overlay layer */}
            <span className="neon-arc-layer text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-brand font-black tracking-widest uppercase leading-none" aria-hidden="true">
              {artistData.name}
            </span>
          </h1>
        </div>

        {/* Separator Line */}
        <div className="flex items-center justify-center gap-3 my-2 w-full max-w-md">
          <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-west-gold to-west-gold shadow-[0_0_8px_#FFD700]" />
          <span className="text-west-gold text-lg">★</span>
          <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-west-gold to-west-gold shadow-[0_0_8px_#FFD700]" />
        </div>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-brand font-bold text-gray-100 tracking-widest mt-2 uppercase text-shadow-md">
          {artistData.tagline}
        </h2>

        {/* Sub-description */}
        <p className="max-w-2xl text-sm sm:text-base text-gray-300 font-sans tracking-wide mt-3 text-shadow-sm">
          Authentic California G-Funk & Heavy West Coast Instrumentals with <span className="text-west-gold font-bold">100% Exclusive Rights</span> at 80€ Flat Rate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-lg">
          <button
            onClick={() => { navigate('/beat-store'); window.scrollTo(0, 0); }}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFE259] via-west-gold to-[#FFA751] text-black font-brand text-2xl tracking-wider rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.5)] hover:shadow-[0_0_40px_rgba(255,215,0,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <Music className="w-6 h-6 text-black group-hover:rotate-12 transition-transform duration-300" />
            <span>BEAT STORE (80€)</span>
          </button>

          <button
            onClick={() => { navigate('/shop'); window.scrollTo(0, 0); }}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-black/70 hover:bg-black/90 text-white border-2 border-west-gold/70 hover:border-west-gold font-brand text-2xl tracking-wider rounded-xl backdrop-blur-md shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <Disc3 className="w-6 h-6 text-west-gold group-hover:spin transition-transform duration-500" />
            <span>ALBUMS & MERCH</span>
          </button>
        </div>

        {/* Key Guarantees Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 w-full max-w-3xl">
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black/50 border border-west-gold/30 backdrop-blur-md">
            <ShieldCheck className="w-5 h-5 text-west-gold shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-sans tracking-wide">100% Exclusive Rights</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black/50 border border-west-gold/30 backdrop-blur-md">
            <Music className="w-5 h-5 text-west-gold shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-sans tracking-wide">Studio Master WAV Files</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black/50 border border-west-gold/30 backdrop-blur-md">
            <Flame className="w-5 h-5 text-west-orange shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-sans tracking-wide">Authentic California Sound</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div 
        onClick={scrollToContent}
        className="relative z-10 flex flex-col items-center gap-1 cursor-pointer text-west-gold/80 hover:text-west-gold transition-colors duration-200 mt-6 animate-bounce"
      >
        <span className="text-xs font-sans tracking-widest uppercase">Discover</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
