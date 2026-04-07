import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Discography from './components/Discography';
import BeatStore from './components/BeatStore';
import TheStash from './components/TheStash';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('HOME');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

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
