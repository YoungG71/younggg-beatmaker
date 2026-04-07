import React from 'react';
import { artistData } from '../artistData';
import { Instagram, Facebook, Youtube, Music2 } from 'lucide-react';

// Custom TikTok icon component since Lucide might not have it or for style consistency
const TikTok = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black border-t-4 border-west-gold py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl text-west-gold font-gothic mb-2">{artistData.name}</h2>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Center: Socials */}
        <div className="flex gap-6">
          <a href={artistData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-west-gold transition-colors transform hover:scale-110">
            <Instagram className="w-8 h-8" />
          </a>
          <a href={artistData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-west-gold transition-colors transform hover:scale-110">
            <Facebook className="w-8 h-8" />
          </a>
          <a href={artistData.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-west-gold transition-colors transform hover:scale-110">
            <TikTok className="w-8 h-8" />
          </a>
          <a href={artistData.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-west-gold transition-colors transform hover:scale-110">
            <Youtube className="w-8 h-8" />
          </a>
        </div>

        {/* Right Side: Parental Advisory */}
        <div className="border-2 border-white p-1 bg-white inline-block transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="border border-black bg-black text-white px-2 py-1 text-center">
            <div className="text-[10px] tracking-widest uppercase font-bold leading-none mb-0.5">Parental</div>
            <div className="text-xl font-bold uppercase tracking-tighter leading-none text-white">Advisory</div>
            <div className="text-[10px] tracking-widest uppercase font-bold leading-none mt-0.5">Explicit Content</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
