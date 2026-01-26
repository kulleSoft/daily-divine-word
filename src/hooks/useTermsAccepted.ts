import { useState, useEffect, useCallback } from 'react';

const TERMS_KEY = 'biblical-verses-terms-accepted';

export function useTermsAccepted() {
  const [termsAccepted, setTermsAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(TERMS_KEY);
    setTermsAccepted(stored === 'true');
  }, []);

  const acceptTerms = useCallback(() => {
    localStorage.setItem(TERMS_KEY, 'true');
    setTermsAccepted(true);
  }, []);

  return {
    termsAccepted,
    acceptTerms,
    isLoading: termsAccepted === null,
  };
}
