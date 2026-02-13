import { useState, useCallback, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VerseCard } from '@/components/VerseCard';
import { getDailyVerse, getRandomVerse, Verse } from '@/data/verses';
import { useToast } from '@/hooks/use-toast';
import { Language, TranslationKey } from '@/i18n/translations';

interface VersesScreenProps {
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (verse: Verse) => void;
  t: (key: TranslationKey) => string;
  language: Language;
}

export function VersesScreen({ isFavorite, onToggleFavorite, t, language }: VersesScreenProps) {
  const [currentVerse, setCurrentVerse] = useState<Verse>(() => getDailyVerse(language));
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setCurrentVerse(getDailyVerse(language));
  }, [language]);

  const handleShare = useCallback(async () => {
    const shareText = `"${currentVerse.text}"\n\n— ${currentVerse.reference}\n\n${t('shareAppName')}`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: t('shareTitle'), text: shareText });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          await navigator.clipboard.writeText(shareText);
          toast({ title: t('copied'), description: t('copiedDesc') });
        }
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      toast({ title: t('copied'), description: t('copiedDesc') });
    }
  }, [currentVerse, toast, t]);

  const handleNewVerse = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentVerse(getRandomVerse(language));
      setIsRefreshing(false);
    }, 300);
  }, [language]);

  return (
    <div className="flex flex-col min-h-full px-4 py-6 pb-24">
      <header className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold gold-text mb-2">
          {t('versesTitle')}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t('versesSubtitle')}
        </p>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className={`w-full max-w-lg transition-opacity duration-300 ${isRefreshing ? 'opacity-0' : 'opacity-100'}`}>
          <VerseCard
            verse={currentVerse}
            isFavorite={isFavorite(currentVerse.id)}
            onToggleFavorite={() => onToggleFavorite(currentVerse)}
            onShare={handleShare}
            t={t}
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button
          onClick={handleNewVerse}
          variant="outline"
          size="lg"
          disabled={isRefreshing}
          className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/5"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {t('newVerse')}
        </Button>
      </div>

      <div className="mt-8 mx-auto w-full max-w-lg">
        <div className="bg-muted/50 rounded-lg h-20 flex items-center justify-center border border-border/50">
          <span className="text-xs text-muted-foreground">{t('adPlaceholder')}</span>
        </div>
      </div>
    </div>
  );
}
