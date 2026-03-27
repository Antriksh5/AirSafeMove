'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type LanguageCode = 'en' | 'hi' | 'mr' | 'gu' | 'te' | 'ta';

const STORAGE_KEY = 'preferredLanguage';

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return storedLanguage && isLanguageCode(storedLanguage) ? storedLanguage : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

function isLanguageCode(value: string): value is LanguageCode {
  return value === 'en' || value === 'hi' || value === 'mr' || value === 'gu' || value === 'te' || value === 'ta';
}
