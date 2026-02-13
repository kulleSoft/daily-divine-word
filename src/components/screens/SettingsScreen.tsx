import { useState } from 'react';
import { Moon, Sun, FileText, Info, ExternalLink, Globe } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { TermsDialog } from '@/components/TermsDialog';
import { Language, TranslationKey } from '@/i18n/translations';

interface SettingsScreenProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  language: Language;
  onChangeLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

export function SettingsScreen({ isDarkMode, onToggleDarkMode, language, onChangeLanguage, t }: SettingsScreenProps) {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="flex flex-col min-h-full px-4 py-6 pb-24">
      <header className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold gold-text mb-2">
          {t('settingsTitle')}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t('settingsSubtitle')}
        </p>
      </header>

      <div className="space-y-4 max-w-lg mx-auto w-full">
        {/* Appearance */}
        <div className="bg-card rounded-xl p-4 card-glow">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            {t('appearance')}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isDarkMode ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
              <div>
                <p className="font-medium text-foreground">{t('darkMode')}</p>
                <p className="text-xs text-muted-foreground">
                  {isDarkMode ? t('enabled') : t('disabled')}
                </p>
              </div>
            </div>
            <Switch checked={isDarkMode} onCheckedChange={onToggleDarkMode} className="data-[state=checked]:bg-primary" />
          </div>
        </div>

        {/* Language */}
        <div className="bg-card rounded-xl p-4 card-glow">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            {t('language')}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">{t('languageLabel')}</p>
                <p className="text-xs text-muted-foreground">
                  {language === 'pt' ? '🇧🇷 Português' : '🇺🇸 English'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={language === 'pt' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onChangeLanguage('pt')}
                className={language === 'pt' ? 'gold-gradient text-primary-foreground' : ''}
              >
                🇧🇷
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onChangeLanguage('en')}
                className={language === 'en' ? 'gold-gradient text-primary-foreground' : ''}
              >
                🇺🇸
              </Button>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="bg-card rounded-xl p-4 card-glow">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            {t('legal')}
          </h3>
          <Button
            variant="ghost"
            className="w-full justify-between h-auto py-3 px-0 hover:bg-transparent"
            onClick={() => setShowTerms(true)}
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{t('termsOfUse')}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>

        {/* About */}
        <div className="bg-card rounded-xl p-4 card-glow">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            {t('about')}
          </h3>
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-foreground">{t('appName')}</p>
              <p className="text-xs text-muted-foreground mt-1">{t('version')}</p>
              <p className="text-xs text-muted-foreground mt-2">{t('madeWith')}</p>
            </div>
          </div>
        </div>
      </div>

      <TermsDialog 
        open={showTerms} 
        onAccept={() => {}}
        showCloseButton={true}
        onClose={() => setShowTerms(false)}
        t={t}
      />
    </div>
  );
}
