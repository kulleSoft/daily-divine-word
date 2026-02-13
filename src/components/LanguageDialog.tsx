import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { Language } from '@/i18n/translations';

const BrazilFlag = () => (
  <svg width="40" height="28" viewBox="0 0 640 480" className="rounded shrink-0">
    <rect width="640" height="480" fill="#229e45" />
    <polygon points="320,60 600,240 320,420 40,240" fill="#f8e509" />
    <circle cx="320" cy="240" r="100" fill="#2b49a3" />
    <path d="M200,240 Q320,180 440,260" fill="none" stroke="#fff" strokeWidth="14" />
  </svg>
);

const USAFlag = () => (
  <svg width="40" height="28" viewBox="0 0 640 480" className="rounded shrink-0">
    <rect width="640" height="480" fill="#fff" />
    {[0, 1, 2, 3, 4, 5, 6].map(i => (
      <rect key={i} y={i * 74} width="640" height="37" fill="#b22234" />
    ))}
    <rect width="260" height="260" fill="#3c3b6e" />
    {[0, 1, 2, 3, 4].map(row =>
      [0, 1, 2, 3, 4, 5].map(col => (
        <circle key={`${row}-${col}`} cx={22 + col * 44} cy={18 + row * 52} r="7" fill="#fff" />
      ))
    )}
    {[0, 1, 2, 3].map(row =>
      [0, 1, 2, 3, 4].map(col => (
        <circle key={`s${row}-${col}`} cx={44 + col * 44} cy={44 + row * 52} r="7" fill="#fff" />
      ))
    )}
  </svg>
);

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
            <BrazilFlag />
            <span>Português</span>
          </Button>
          <Button
            onClick={() => onSelect('en')}
            variant="outline"
            size="lg"
            className="w-full h-16 text-lg gap-4 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
          >
            <USAFlag />
            <span>English</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
