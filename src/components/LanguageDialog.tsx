import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { Language } from '@/i18n/translations';

interface LanguageDialogProps {
  open: boolean;
  onSelect: (lang: Language) => void;
}

export function LanguageDialog({ open, onSelect }: LanguageDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="max-w-sm mx-auto bg-card border-border [&>button]:hidden">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="font-display text-2xl text-foreground">
            Idioma / Language
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Selecione o idioma / Select language
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4">
          <Button
            onClick={() => onSelect('pt')}
            variant="outline"
            size="lg"
            className="w-full h-16 text-lg gap-4 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
          >
            <span className="text-5xl" style={{ fontFamily: 'system-ui' }}>🇧🇷</span>
            <span>Português</span>
          </Button>
          <Button
            onClick={() => onSelect('en')}
            variant="outline"
            size="lg"
            className="w-full h-16 text-lg gap-4 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
          >
            <span className="text-5xl" style={{ fontFamily: 'system-ui' }}>🇺🇸</span>
            <span>English</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
