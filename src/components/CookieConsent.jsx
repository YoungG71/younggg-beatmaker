import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'youngg-cookie-consent';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't pop up immediately
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimatingOut(false);
    }, 300);
    // Load GA after consent
    loadGoogleAnalytics();
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimatingOut(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isAnimatingOut ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="bg-zinc-900/95 backdrop-blur-md border-t border-west-gold/30 shadow-[0_-5px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Icon + Text */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Cookie className="w-6 h-6 text-west-gold flex-shrink-0" />
          </div>
          <p className="text-gray-300 text-sm flex-1 text-center md:text-left">
            This site uses cookies to improve your experience and analyze traffic.{' '}
            <span className="text-gray-500">(Google Analytics)</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="px-5 py-2.5 border border-zinc-600 text-gray-300 rounded text-sm font-bold uppercase tracking-wider hover:border-zinc-400 transition-colors"
            >
              <X className="w-4 h-4 inline mr-1" />
              Decline
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 bg-west-gold text-black rounded text-sm font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_10px_rgba(255,215,0,0.3)]"
            >
              <Check className="w-4 h-4 inline mr-1" />
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Google Analytics 4 — load script only after consent
function loadGoogleAnalytics() {
  if (typeof window.gtag !== 'undefined' || document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LYPPXHN7NF';
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-LYPPXHN7NF', { anonymize_ip: true });
}

export default CookieConsent;
