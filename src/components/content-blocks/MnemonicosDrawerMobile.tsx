import React from 'react';
import { Drawer } from 'vaul';
import type { MnemonicosModulo } from '../../domain/schemas/mnemonico.schema';
import { MnemonicosTabs } from './MnemonicosTabs';
import { Sparkles, X } from 'lucide-react';

export interface MnemonicosDrawerMobileProps {
  mnemonicos: MnemonicosModulo;
  tituloModulo: string;
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

/**
 * Gaveta móvel de Mnemônicos e Resumo Rápido
 *
 * Integrada na barra de ações/contexto móvel (TeoriaStickyBar), sem botão flutuante (FAB)
 * sobrepondo o texto de leitura ou tabelas (Diretriz D6 do Plano v3).
 */
export const MnemonicosDrawerMobile: React.FC<MnemonicosDrawerMobileProps> = ({
  mnemonicos,
  tituloModulo,
  trigger,
  isOpen,
  onOpenChange,
  className = '',
}) => {
  return (
    <div className={`md:hidden inline-flex items-center ${className}`}>
      <Drawer.Root
        shouldScaleBackground={false}
        open={isOpen}
        onOpenChange={onOpenChange}
      >
        <Drawer.Trigger asChild>
          {trigger || (
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-accent text-accent-text shadow-2xs font-sans font-bold text-xs active:scale-95 transition-all cursor-pointer border border-accent/40 shrink-0"
              aria-label="Abrir Resumo e Mnemônicos"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Mnemônicos</span>
            </button>
          )}
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/70 z-50 backdrop-blur-xs" />
          <Drawer.Content
            className="bg-surface border-t border-border flex flex-col rounded-t-2xl max-h-[88dvh] fixed bottom-0 left-0 right-0 z-50 foco focus-visible:ring-2 focus-visible:ring-accent shadow-2xl"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <div
              className="p-4 rounded-t-2xl flex flex-col max-h-[88dvh] bg-surface"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              {/* Puxador da gaveta (alça de arraste) */}
              <div
                className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-border mb-3 cursor-grab"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div>
                  <Drawer.Title className="font-sans font-bold text-ink text-base">
                    Resumo Rápido e Mnemônicos
                  </Drawer.Title>
                  <Drawer.Description className="text-xs text-ink-2 font-sans truncate max-w-[280px]">
                    {tituloModulo}
                  </Drawer.Description>
                </div>
                <Drawer.Close asChild>
                  <button
                    type="button"
                    className="p-2 text-ink-2 hover:text-ink rounded-lg foco focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 cursor-pointer"
                    aria-label="Fechar resumo"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Drawer.Close>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <MnemonicosTabs mnemonicos={mnemonicos} isCompact />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
