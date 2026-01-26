import { BookOpen, Heart, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'verses' | 'favorites' | 'settings';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs = [
  { id: 'verses' as Tab, icon: BookOpen, label: 'Frases' },
  { id: 'favorites' as Tab, icon: Heart, label: 'Favoritos' },
  { id: 'settings' as Tab, icon: Settings, label: 'Configurações' },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom z-50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 min-w-[72px]",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "relative transition-transform duration-300",
                isActive && "scale-110"
              )}>
                <Icon 
                  className={cn(
                    "w-6 h-6 transition-all duration-300",
                    isActive && "fill-primary/20"
                  )} 
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
              <span className={cn(
                "text-xs font-medium transition-all duration-300",
                isActive && "font-semibold"
              )}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export type { Tab };
