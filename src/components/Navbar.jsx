import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Disc, Music, ShoppingBag, Mail, Menu, X, Sparkles } from 'lucide-react';
import { artistData } from '../artistData';

const NAV_ITEMS = [
  { path: '/', label: 'HOME', icon: Home },
  { path: '/music', label: 'MUSIC', icon: Disc },
  { path: '/beat-store', label: 'BEAT STORE', icon: Music, badge: '80€' },
  { path: '/shop', label: 'SHOP', icon: ShoppingBag },
  { path: '/contact', label: 'CONTACT', icon: Mail },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const upTheLevelCD = artistData.shop.find(item => item.id === 204);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <nav
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-black/90 border border-west-gold/50 shadow-[0_8px_32px_rgba(0,0,0,0.9),0_0_20px_rgba(255,215,0,0.2)] backdrop-blur-xl'
            : 'bg-black/50 border border-west-gold/25 shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md'
        }`}
      >
        {/* ============================================================ */}
        {/* BRAND LOGO */}
        {/* ============================================================ */}
        <div
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 cursor-pointer group select-none shrink-0"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-west-gold shadow-[0_0_10px_#FFD700] animate-pulse" />
          <span className="text-2xl sm:text-3xl font-brand tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-west-gold via-white to-west-gold group-hover:scale-105 transition-transform duration-200">
            YOUNG G
          </span>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP NAVIGATION DOCK (Floating Segmented Capsule) */}
        {/* ============================================================ */}
        <div className="hidden md:flex items-center p-1 rounded-full bg-black/60 border border-west-gold/30 backdrop-blur-xl shadow-inner gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`group relative flex items-center gap-2 px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full font-brand text-sm lg:text-base tracking-wider transition-all duration-300 cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-west-gold via-[#FFE259] to-[#FFA751] text-black font-bold shadow-[0_0_20px_rgba(255,215,0,0.5)] scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 ${
                    active ? 'text-black' : 'text-west-gold group-hover:scale-110'
                  }`}
                />
                <span>{item.label}</span>

                {/* Optional special badge (e.g. 80€ on Beat Store) */}
                {item.badge && !active && (
                  <span className="text-[10px] font-sans font-extrabold px-1.5 py-0.2 rounded-full bg-west-gold/20 text-west-gold border border-west-gold/40 tracking-normal">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* RIGHT SIDE: ALBUM TEASER & MOBILE MENU TOGGLE */}
        {/* ============================================================ */}
        <div className="flex items-center gap-3">
          {upTheLevelCD && (
            <div
              onClick={() => handleNavClick('/shop')}
              className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-west-gold/40 bg-black/70 hover:border-west-gold hover:bg-black/90 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={upTheLevelCD.image}
                  alt={upTheLevelCD.name}
                  className="h-8 w-8 object-cover rounded-full border border-west-gold group-hover:rotate-180 transition-transform duration-700"
                />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border border-black shadow-[0_0_6px_#22c55e] animate-pulse" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-sans font-bold text-gray-400 uppercase tracking-widest leading-none">
                  New CD
                </span>
                <span className="text-west-gold text-xs font-brand tracking-wider uppercase leading-tight group-hover:text-white transition-colors">
                  Available Now!
                </span>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-black/60 border border-west-gold/50 text-west-gold hover:text-white hover:border-west-gold transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* MOBILE MENU DROPDOWN */}
      {/* ============================================================ */}
      {isMobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-3 bg-black/95 backdrop-blur-2xl border-2 border-west-gold/50 rounded-3xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.95)] animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl font-brand text-lg tracking-wider transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-west-gold to-[#FFA751] text-black font-bold shadow-[0_0_20px_rgba(255,215,0,0.4)]'
                      : 'text-gray-200 hover:bg-white/10 hover:text-west-gold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${active ? 'text-black' : 'text-west-gold'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-xs font-sans font-bold px-2 py-0.5 rounded-full ${
                        active
                          ? 'bg-black text-west-gold'
                          : 'bg-west-gold/20 text-west-gold border border-west-gold/40'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {upTheLevelCD && (
              <div
                onClick={() => handleNavClick('/shop')}
                className="mt-2 pt-3 border-t border-gray-800 flex items-center justify-between p-3 rounded-xl bg-west-gold/10 border border-west-gold/30 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={upTheLevelCD.image}
                    alt={upTheLevelCD.name}
                    className="h-10 w-10 object-cover rounded-lg border border-west-gold"
                  />
                  <div>
                    <span className="block text-xs font-sans text-gray-300 uppercase tracking-wider">
                      Official CD Release
                    </span>
                    <span className="font-brand text-base text-west-gold tracking-wider">
                      {upTheLevelCD.name} — Available Now
                    </span>
                  </div>
                </div>
                <span className="font-brand text-base text-white font-bold">{upTheLevelCD.price} €</span>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
