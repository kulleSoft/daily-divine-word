import { Heart, Trash2, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Verse } from '@/data/verses';
import { useToast } from '@/hooks/use-toast';
import { useCallback } from 'react';
import { TranslationKey } from '@/i18n/translations';

interface FavoritesScreenProps {
  favorites: Verse[];
  onRemoveFavorite: (id: number) => void;
  t: (key: TranslationKey) => string;
}

export function FavoritesScreen({ favorites, onRemoveFavorite, t }: FavoritesScreenProps) {
  const { toast } = useToast();

  const handleShare = useCallback(async (verse: Verse) => {
    const shareText = `"${verse.text}"\n\n— ${verse.reference}\n\n${t('shareAppName')}`;
    
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
  }, [toast, t]);

  return (
    <div className="flex flex-col min-h-full px-4 py-6 pb-24">
      <header className="text-center mb-6">
        <h1 className="font-display text-3xl font-bold gold-text mb-2">
          {t('favoritesTitle')}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t('favoritesSubtitle')}
        </p>
      </header>

      {favorites.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
            <Heart className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            {t('noFavorites')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t('noFavoritesHint')}
          </p>
        </div>
      ) : (
        <ScrollArea className="flex-1 -mx-4 px-4">
          <div className="space-y-4">
            {favorites.map((verse, index) => (
              <div 
                key={verse.id}
                className="bg-card rounded-xl p-4 card-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <blockquote className="scripture-text text-base leading-relaxed mb-3">
                  "{verse.text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <cite className="gold-text font-display text-sm font-semibold not-italic">
                    — {verse.reference}
                  </cite>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(verse)}
                      className="text-muted-foreground hover:text-primary h-8 w-8 p-0"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveFavorite(verse.id)}
                      className="text-muted-foreground hover:text-destructive h-8 w-8 p-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}

      {favorites.length > 0 && (
        <div className="mt-6 mx-auto w-full max-w-lg">
          <div className="bg-muted/50 rounded-lg h-16 flex items-center justify-center border border-border/50">
            <span className="text-xs text-muted-foreground">{t('adPlaceholder')}</span>
          </div>
        </div>
      )}
    </div>
  );
}
