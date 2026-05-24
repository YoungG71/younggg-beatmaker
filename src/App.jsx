import React, { useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import GoldParticles from './components/GoldParticles';
import { Loader2 } from 'lucide-react';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';

// Lazy-loaded page components for code-splitting
const Hero = lazy(() => import('./components/Hero'));
const HomeContent = lazy(() => import('./components/HomeContent'));
const Discography = lazy(() => import('./components/Discography'));
const BeatStore = lazy(() => import('./components/BeatStore'));
const TheStash = lazy(() => import('./components/TheStash'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

// Loading fallback for lazy-loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-10 h-10 text-west-gold animate-spin" />
      <span className="text-west-gold text-sm tracking-widest uppercase">Loading...</span>
    </div>
  </div>
);

function HomePage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Hero />
      <HomeContent />
    </Suspense>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Suspense fallback={<PageLoader />}>
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
      <Footer />
    </div>
  );
}

function AppLayout({ children }) {
  const mainRef = useRef(null);
  const location = useLocation();

  return (
    <div className="min-h-screen text-white selection:bg-west-gold selection:text-west-black overflow-x-hidden">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-west-gold focus:text-black focus:px-6 focus:py-3 focus:rounded focus:font-bold focus:uppercase focus:tracking-wider focus:shadow-[0_0_20px_rgba(255,215,0,0.6)]"
      >
        Skip to main content
      </a>

      <CookieConsent />
      <BackToTop />
      <Background />
      <GoldParticles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main
          id="main-content"
          ref={mainRef}
          className="flex-grow outline-none"
          tabIndex={-1}
        >
          {children}
        </main>

        {/* Footer on all pages except contact */}
        {!location.pathname.startsWith('/contact') && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<Discography />} />
            <Route path="/beat-store" element={<BeatStore />} />
            <Route path="/shop" element={<TheStash />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
