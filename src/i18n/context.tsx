import React, { createContext, useContext, useState } from 'react';
import type { Locale, SiteContent } from './types';
import pl from '../constants/pl';
import en from '../constants/en';

const CONTENT_MAP: Record<Locale, SiteContent> = { pl, en };

function detectLocale(): Locale {
  // URL param override for dev: ?lang=en or ?lang=pl
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get('lang') as Locale | null;
  if (paramLang === 'pl' || paramLang === 'en') {
    localStorage.setItem('locale', paramLang);
    return paramLang;
  }

  const stored = localStorage.getItem('locale') as Locale | null;
  if (stored === 'pl' || stored === 'en') return stored;

  const host = window.location.hostname;
  if (host.includes('potega.ai')) return 'pl';
  if (host.includes('sysformer.com')) return 'en';

  return 'pl';
}

interface LanguageContextType {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, content: CONTENT_MAP[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
