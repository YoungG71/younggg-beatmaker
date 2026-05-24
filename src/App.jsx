import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Discography from './components/Discography';
import BeatStore from './components/BeatStore';
import TheStash from './components/TheStash';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <HomeContent />
    </>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white selection:bg-west-gold selection:text-west-black overflow-x-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-15 bg-vinyl mix-blend-overlay"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/music" element={<Discography />} />
              <Route path="/beat-store" element={<BeatStore />} />
              <Route path="/shop" element={<TheStash />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Routes>
            <Route path="/contact" element={null} />
            <Route path="*" element={<Footer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
