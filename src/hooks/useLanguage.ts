import { useState, useEffect, useCallback } from 'react';
import { Language, translations } from '@/i18n/translations';

const LANGUAGE_KEY = 'verso-diario-language';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY) as Language | null;
    setLanguageState(saved);
    setIsLoading(false);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(LANGUAGE_KEY, lang);
    setLanguageState(lang);
  }, []);

  const t = useCallback((key: keyof typeof translations.pt) => {
    const lang = language || 'pt';
    return translations[lang][key];
  }, [language]);

  return {
    language,
    setLanguage,
    isLoading,
    t,
    languageSelected: language !== null,
  };
}
