import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    // 1. Check saved preference in localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('preferred_language');
        if (saved === 'fr' || saved === 'en') return saved;
      } catch (e) {
        // ignore
      }
      // 2. Detect browser language
      try {
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('fr')) return 'fr';
      } catch (e) {
        // ignore
      }
    }
    return 'en';
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferred_language', newLang);
      } catch (e) {
        // ignore
      }
    }
  };

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  // Keep html lang attribute in sync
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

