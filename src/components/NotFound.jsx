import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Large 404 with West Coast style */}
        <div className="mb-8">
          <div className="text-9xl md:text-[12rem] font-gothic text-west-gold animate-neon leading-none select-none"
               style={{ WebkitTextStroke: '4px black' }}>
            404
          </div>
          <div className="h-1 w-32 mx-auto bg-west-gold shadow-[0_0_10px_#FFD700] animate-gold-glow mb-8"></div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-west-gold animate-lowrider-bounce" />
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-4 tracking-wider uppercase">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-md mx-auto">
          This track doesn't exist. Let's get you back to the West Coast.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
          className="inline-flex items-center gap-3 bg-west-gold text-black font-bold text-xl uppercase tracking-widest px-10 py-5 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.7)] group"
        >
          <Home className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
          Back to Home
        </button>

        {/* Decorative bottom line */}
        <div className="mt-16 text-gray-600 text-sm tracking-widest uppercase">
          Young G — West Coast Legend in the Making
        </div>
      </div>
    </section>
  );
};

export default NotFound;
