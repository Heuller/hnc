import React from 'react';
import { Drawer } from 'vaul';
import type { MnemonicosModulo } from '../../domain/schemas/mnemonico.schema';
import { MnemonicosTabs } from './MnemonicosTabs';
import { Sparkles, X } from 'lucide-react';

interface MnemonicosDrawerMobileProps {
  mnemonicos: MnemonicosModulo;
  tituloModulo: string;
}

export const MnemonicosDrawerMobile: React.FC<MnemonicosDrawerMobileProps> = ({
  mnemonicos,
  tituloModulo,
}) => {
  return (
    <div className="lg:hidden fixed bottom-20 right-4 z-40">
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-white shadow-lg font-sans font-semibold text-sm active:scale-95 transition-transform"
            aria-label="Abrir Resumo e Mnemônicos"
          >
            <Sparkles className="w-4 h-4" />
            <span>Mnemônicos</span>
          </button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs" />
          <Drawer.Content className="bg-surface border-t border-border flex flex-col rounded-t-2xl max-h-[88vh] fixed bottom-0 left-0 right-0 z-50 focus:outline-none">
            <div className="p-4 bg-surface rounded-t-2xl flex flex-col max-h-[88vh]">
              {/* Puxador da gaveta */}
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-border mb-3" />

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
                    className="p-2 text-ink-2 hover:text-ink rounded-lg focus:outline-none"
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
