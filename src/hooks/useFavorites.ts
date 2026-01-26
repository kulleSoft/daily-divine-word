import { useState, useEffect, useCallback } from 'react';
import { Verse } from '@/data/verses';

const FAVORITES_KEY = 'biblical-verses-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Verse[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  const saveFavorites = useCallback((newFavorites: Verse[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }, []);

  const addFavorite = useCallback((verse: Verse) => {
    const newFavorites = [...favorites, verse];
    saveFavorites(newFavorites);
  }, [favorites, saveFavorites]);

  const removeFavorite = useCallback((verseId: number) => {
    const newFavorites = favorites.filter(v => v.id !== verseId);
    saveFavorites(newFavorites);
  }, [favorites, saveFavorites]);

  const isFavorite = useCallback((verseId: number) => {
    return favorites.some(v => v.id === verseId);
  }, [favorites]);

  const toggleFavorite = useCallback((verse: Verse) => {
    if (isFavorite(verse.id)) {
      removeFavorite(verse.id);
    } else {
      addFavorite(verse);
    }
  }, [isFavorite, removeFavorite, addFavorite]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };
}
