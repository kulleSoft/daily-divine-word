import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Verse } from '@/data/verses';
import { cn } from '@/lib/utils';

interface VerseCardProps {
  verse: Verse;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onShare: () => void;
  className?: string;
}

export function VerseCard({ verse, isFavorite, onToggleFavorite, onShare, className }: VerseCardProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-2xl p-6 card-elevated animate-slide-up",
        className
      )}
    >
      <div className="relative">
        {/* Decorative quote mark */}
        <span className="absolute -top-2 -left-2 text-6xl gold-text opacity-30 font-display select-none">
          "
        </span>
        
        <blockquote className="scripture-text text-xl md:text-2xl font-medium leading-relaxed pt-6 pb-4 text-center">
          {verse.text}
        </blockquote>
        
        <footer className="text-center">
          <cite className="gold-text font-display text-lg font-semibold not-italic">
            — {verse.reference}
          </cite>
        </footer>
      </div>

      <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-border">
        <Button
          variant="ghost"
          size="lg"
          onClick={onToggleFavorite}
          className={cn(
            "gap-2 transition-all duration-300",
            isFavorite 
              ? "text-primary hover:text-primary/80" 
              : "text-muted-foreground hover:text-primary"
          )}
        >
          <Heart 
            className={cn(
              "w-5 h-5 transition-all duration-300",
              isFavorite && "fill-current scale-110"
            )} 
          />
          <span className="text-sm font-medium">
            {isFavorite ? 'Salvo' : 'Salvar'}
          </span>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          onClick={onShare}
          className="gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">Compartilhar</span>
        </Button>
      </div>
    </div>
  );
}
