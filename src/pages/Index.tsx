import { useState } from 'react';
import { BottomNav, Tab } from '@/components/BottomNav';
import { TermsDialog } from '@/components/TermsDialog';
import { VersesScreen } from '@/components/screens/VersesScreen';
import { FavoritesScreen } from '@/components/screens/FavoritesScreen';
import { SettingsScreen } from '@/components/screens/SettingsScreen';
import { useFavorites } from '@/hooks/useFavorites';
import { useTermsAccepted } from '@/hooks/useTermsAccepted';
import { useDarkMode } from '@/hooks/useDarkMode';
import { BookOpen } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('verses');
  const { favorites, isFavorite, toggleFavorite, removeFavorite } = useFavorites();
  const { termsAccepted, acceptTerms, isLoading } = useTermsAccepted();
  const { isDark, toggleDarkMode } = useDarkMode();

  // Show loading state while checking terms acceptance
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <div className="mx-auto w-20 h-20 rounded-full gold-gradient flex items-center justify-center mb-4 divine-glow">
            <BookOpen className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold gold-text">
            Frases Bíblicas
          </h1>
        </div>
      </div>
    );
  }

  // Show terms dialog if not accepted
  if (!termsAccepted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center animate-fade-in">
          <div className="mx-auto w-24 h-24 rounded-full gold-gradient flex items-center justify-center mb-6 divine-glow">
            <BookOpen className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold gold-text mb-2">
            Frases Bíblicas
          </h1>
          <p className="text-muted-foreground mb-8">
            Inspiração diária da Palavra de Deus
          </p>
        </div>
        <TermsDialog open={true} onAccept={acceptTerms} />
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
          />
        )}
        {activeTab === 'favorites' && (
          <FavoritesScreen 
            favorites={favorites}
            onRemoveFavorite={removeFavorite}
          />
        )}
        {activeTab === 'settings' && (
          <SettingsScreen 
            isDarkMode={isDark}
            onToggleDarkMode={toggleDarkMode}
          />
        )}
      </main>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
