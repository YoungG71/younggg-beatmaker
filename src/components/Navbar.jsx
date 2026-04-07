import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { artistData } from '../artistData'; // Import de artistData

const Navbar = ({ currentView, setCurrentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Trouver le CD "Up The Level"
  const upTheLevelCD = artistData.shop.find(item => item.id === 204);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'HOME', label: 'ACCUEIL' },
    { id: 'MUSIC', label: 'MUSIC' },
    { id: 'BEAT_STORE', label: 'BEAT STORE' },
    { id: 'SHOP', label: 'SHOP' },
    { id: 'CONTACT', label: 'CONTACT' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 border-b border-west-gold shadow-[0_0_20px_rgba(255,215,0,0.2)] py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl md:text-3xl font-gothic text-west-gold cursor-pointer drop-shadow-md hover:text-white transition-colors"
          onClick={() => setCurrentView('HOME')}
        >
          YOUNG G
        </div>

        {/* Panneau promotionnel "Up The Level" */}
        {upTheLevelCD && (
          <div 
            className="hidden md:flex items-center gap-2 cursor-pointer animate-blink p-1 rounded-md border border-west-gold bg-black/50"
            onClick={() => setCurrentView('SHOP')}
          >
            <img src={upTheLevelCD.image} alt={upTheLevelCD.name} className="h-10 w-10 object-cover rounded-full border border-west-gold" />
            <span className="text-west-gold text-sm font-bold tracking-wider">AVAILABLE NOW!</span>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`text-lg tracking-widest transition-all duration-300 hover:text-west-gold hover:scale-110 ${
                currentView === item.id 
                  ? 'text-west-gold border-b-2 border-west-gold pb-1' 
                  : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-west-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b-2 border-west-gold animate-in slide-in-from-top-5">
          <div className="flex flex-col items-center py-8 gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl tracking-widest ${
                  currentView === item.id ? 'text-west-gold' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
