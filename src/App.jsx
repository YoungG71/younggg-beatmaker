import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Discography from './components/Discography';
import BeatStore from './components/BeatStore';
import TheStash from './components/TheStash';
import Contact from './components/Contact';
import Footer from './components/Footer';

const VIEW_TO_HASH = {
  HOME: '/',
  MUSIC: '#music',
  BEAT_STORE: '#beat-store',
  SHOP: '#shop',
  CONTACT: '#contact',
};

const HASH_TO_VIEW = {
  '/': 'HOME',
  '#music': 'MUSIC',
  '#beat-store': 'BEAT_STORE',
  '#shop': 'SHOP',
  '#contact': 'CONTACT',
};

function getViewFromHash() {
  const hash = window.location.hash || '/';
  return HASH_TO_VIEW[hash] || 'HOME';
}

function App() {
  const [currentView, setCurrentView] = useState(getViewFromHash());

  // Sync URL hash when view changes
  useEffect(() => {
    window.location.hash = VIEW_TO_HASH[currentView] || '/';
    window.scrollTo(0, 0);
  }, [currentView]);

  // Sync view when hash changes (browser back/forward)
  useEffect(() => {
    const onHashChange = () => {
      setCurrentView(getViewFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderView = () => {
    switch(currentView) {
      case 'HOME':
        return (
          <div className="home-page">
            <Hero />
            <HomeContent /> 
          </div>
        );
      case 'MUSIC':
        return <Discography />;
      case 'BEAT_STORE':
        return <BeatStore />;
      case 'SHOP':
        return <TheStash />;
      case 'CONTACT':
        return (
          <div className="min-h-screen flex flex-col justify-between">
            <Contact />
            <Footer />
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen text-white selection:bg-west-gold selection:text-west-black overflow-x-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10 bg-vinyl mix-blend-overlay"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar currentView={currentView} setCurrentView={setCurrentView} />
        
        <main className="flex-grow">
          {renderView()}
        </main>

        {/* Always show Footer unless in Contact view where it's part of the content */}
        {currentView !== 'CONTACT' && <Footer />}
      </div>
    </div>
  );
}

export default App;