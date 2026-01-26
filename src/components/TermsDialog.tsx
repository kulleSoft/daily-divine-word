import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, Shield, Bell } from 'lucide-react';

interface TermsDialogProps {
  open: boolean;
  onAccept: () => void;
  showCloseButton?: boolean;
  onClose?: () => void;
}

export function TermsDialog({ open, onAccept, showCloseButton = false, onClose }: TermsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={showCloseButton ? onClose : undefined}>
      <DialogContent className="max-w-md mx-auto bg-card border-border">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="font-display text-2xl text-foreground">
            Termos de Uso
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Leia e aceite os termos para continuar
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-64 pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Uso do Aplicativo</h4>
                <p>
                  Este aplicativo foi desenvolvido para compartilhar versículos e frases bíblicas 
                  inspiradoras. Todo o conteúdo é retirado da Bíblia Sagrada.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Exibição de Anúncios</h4>
                <p>
                  Para manter o aplicativo gratuito e disponível para todos, exibimos anúncios 
                  durante o uso. Os anúncios são fornecidos por parceiros de publicidade e 
                  ajudam a custear o desenvolvimento e manutenção do app.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-4">
              <p className="text-xs">
                Ao aceitar estes termos, você concorda com a exibição de anúncios e com o 
                uso do aplicativo conforme descrito acima. Seus dados de favoritos são 
                armazenados apenas localmente no seu dispositivo.
              </p>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex flex-col gap-2 sm:flex-col">
          {showCloseButton ? (
            <Button onClick={onClose} variant="outline" className="w-full">
              Fechar
            </Button>
          ) : (
            <Button onClick={onAccept} className="w-full gold-gradient text-primary-foreground hover:opacity-90">
              Aceitar e Continuar
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
