import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, Shield, Bell } from 'lucide-react';
import { TranslationKey } from '@/i18n/translations';

interface TermsDialogProps {
  open: boolean;
  onAccept: () => void;
  showCloseButton?: boolean;
  onClose?: () => void;
  t: (key: TranslationKey) => string;
}

export function TermsDialog({ open, onAccept, showCloseButton = false, onClose, t }: TermsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={showCloseButton ? onClose : undefined}>
      <DialogContent className="max-w-md mx-auto bg-card border-border">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="font-display text-2xl text-foreground">
            {t('termsTitle')}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t('termsSubtitle')}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-64 pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('termsAppUsageTitle')}</h4>
                <p>{t('termsAppUsageDesc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('termsAdsTitle')}</h4>
                <p>{t('termsAdsDesc')}</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-4">
              <p className="text-xs">{t('termsAcceptText')}</p>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex flex-col gap-2 sm:flex-col">
          {showCloseButton ? (
            <Button onClick={onClose} variant="outline" className="w-full">
              {t('termsCloseButton')}
            </Button>
          ) : (
            <Button onClick={onAccept} className="w-full gold-gradient text-primary-foreground hover:opacity-90">
              {t('termsAcceptButton')}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
