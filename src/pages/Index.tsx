import { useState } from 'react';
import { BottomNav, Tab } from '@/components/BottomNav';
import { TermsDialog } from '@/components/TermsDialog';
import { LanguageDialog } from '@/components/LanguageDialog';
import { VersesScreen } from '@/components/screens/VersesScreen';
import { FavoritesScreen } from '@/components/screens/FavoritesScreen';
import { SettingsScreen } from '@/components/screens/SettingsScreen';
import { useFavorites } from '@/hooks/useFavorites';
import { useTermsAccepted } from '@/hooks/useTermsAccepted';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useLanguage } from '@/hooks/useLanguage';
import { BookOpen } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('verses');
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();
  const { termsAccepted, acceptTerms, isLoading: termsLoading } = useTermsAccepted();
  const { isDark, toggleDarkMode } = useDarkMode();
  const { language, setLanguage, isLoading: langLoading, t, languageSelected } = useLanguage();

  if (termsLoading || langLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <div className="mx-auto w-20 h-20 rounded-full gold-gradient flex items-center justify-center mb-4 divine-glow">
            <BookOpen className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold gold-text">
            Verso Diário
          </h1>
        </div>
      </div>
    );
  }

  // Step 1: Language selection
  if (!languageSelected) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center animate-fade-in">
          <div className="mx-auto w-24 h-24 rounded-full gold-gradient flex items-center justify-center mb-6 divine-glow">
            <BookOpen className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold gold-text mb-2">
            Verso Diário
          </h1>
          <p className="text-muted-foreground mb-8">
            Daily Bible Verses
          </p>
        </div>
        <LanguageDialog open={true} onSelect={setLanguage} />
      </div>
    );
  }

  // Step 2: Terms acceptance
  if (!termsAccepted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center animate-fade-in">
          <div className="mx-auto w-24 h-24 rounded-full gold-gradient flex items-center justify-center mb-6 divine-glow">
            <BookOpen className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold gold-text mb-2">
            Verso Diário
          </h1>
          <p className="text-muted-foreground mb-8">
            {t('versesSubtitle')}
          </p>
        </div>
        <TermsDialog open={true} onAccept={acceptTerms} t={t} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20">
        {activeTab === 'verses' && (
          <VersesScreen 
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
            t={t}
          />
        )}
        {activeTab === 'favorites' && (
          <FavoritesScreen 
            favorites={favorites}
            onRemoveFavorite={removeFavorite}
            t={t}
          />
        )}
        {activeTab === 'settings' && (
          <SettingsScreen 
            isDarkMode={isDark}
            onToggleDarkMode={toggleDarkMode}
            language={language!}
            onChangeLanguage={setLanguage}
            t={t}
          />
        )}
      </main>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} t={t} />
    </div>
  );
};

export default Index;
