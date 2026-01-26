import { useState } from 'react';
import { Moon, Sun, FileText, Info, ExternalLink } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { TermsDialog } from '@/components/TermsDialog';

interface SettingsScreenProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function SettingsScreen({ isDarkMode, onToggleDarkMode }: SettingsScreenProps) {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="flex flex-col min-h-full px-4 py-6 pb-24">
      <header className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold gold-text mb-2">
          Configurações
        </h1>
        <p className="text-muted-foreground text-sm">
          Personalize sua experiência
        </p>
      </header>

      <div className="space-y-4 max-w-lg mx-auto w-full">
        {/* Appearance Section */}
        <div className="bg-card rounded-xl p-4 card-glow">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Aparência
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isDarkMode ? (
                <Moon className="w-5 h-5 text-primary" />
              ) : (
                <Sun className="w-5 h-5 text-primary" />
              )}
              <div>
                <p className="font-medium text-foreground">Modo Escuro</p>
                <p className="text-xs text-muted-foreground">
                  {isDarkMode ? 'Ativado' : 'Desativado'}
                </p>
              </div>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={onToggleDarkMode}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>

        {/* Legal Section */}
        <div className="bg-card rounded-xl p-4 card-glow">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Legal
          </h3>
          
          <Button
            variant="ghost"
            className="w-full justify-between h-auto py-3 px-0 hover:bg-transparent"
            onClick={() => setShowTerms(true)}
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Termos de Uso</span>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>

        {/* About Section */}
        <div className="bg-card rounded-xl p-4 card-glow">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Sobre
          </h3>
          
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Frases Bíblicas</p>
              <p className="text-xs text-muted-foreground mt-1">
                Versão 1.0.0
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Desenvolvido com ❤️ para compartilhar a Palavra de Deus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TermsDialog 
        open={showTerms} 
        onAccept={() => {}}
        showCloseButton={true}
        onClose={() => setShowTerms(false)}
      />
    </div>
  );
}
