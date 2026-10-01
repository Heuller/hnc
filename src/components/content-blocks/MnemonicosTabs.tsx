import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { MnemonicosModulo } from '../../domain/schemas/mnemonico.schema';
import { LinhaDoTempo } from './LinhaDoTempo';
import { CartaoAutorGrid } from './CartaoAutor';
import { PegadinhaCardList } from './PegadinhaCard';
import { Clock, Users, AlertTriangle } from 'lucide-react';

interface MnemonicosTabsProps {
  mnemonicos: MnemonicosModulo;
  className?: string;
  isCompact?: boolean;
}

export const MnemonicosTabs: React.FC<MnemonicosTabsProps> = ({
  mnemonicos,
  className = '',
  isCompact = false,
}) => {
  const [abaAtiva, setAbaAtiva] = useState<'timeline' | 'autores' | 'pegadinhas'>('timeline');

  return (
    <div className={`space-y-4 pt-1 ${className}`}>
      {/* Seletor de Abas com indicador deslizante (layoutId) */}
      <div className="grid grid-cols-3 gap-1 border border-border bg-surface-2 p-1 rounded-xl relative">
        <button
          type="button"
          onClick={() => setAbaAtiva('timeline')}
          className={`relative py-2 px-1 text-xs font-sans rounded-lg flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
            abaAtiva === 'timeline'
              ? 'text-ink font-bold'
              : 'text-ink-2 hover:text-ink font-medium'
          }`}
          title="Linha do Tempo Histórica"
        >
          {abaAtiva === 'timeline' && (
            <motion.span
              layoutId="activeMnemonicTab"
              className="absolute inset-0 rounded-lg bg-surface shadow-xs border border-border/80 -z-10"
              transition={{ type: 'spring', stiffness: 450, damping: 32 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">Cronologia</span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => setAbaAtiva('autores')}
          className={`relative py-2 px-1 text-xs font-sans rounded-lg flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
            abaAtiva === 'autores'
              ? 'text-ink font-bold'
              : 'text-ink-2 hover:text-ink font-medium'
          }`}
          title="Autores Canônicos e Quem é Quem"
        >
          {abaAtiva === 'autores' && (
            <motion.span
              layoutId="activeMnemonicTab"
              className="absolute inset-0 rounded-lg bg-surface shadow-xs border border-border/80 -z-10"
              transition={{ type: 'spring', stiffness: 450, damping: 32 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5 truncate">
            <Users className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">Autores</span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => setAbaAtiva('pegadinhas')}
          className={`relative py-2 px-1 text-xs font-sans rounded-lg flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
            abaAtiva === 'pegadinhas'
              ? 'text-ink font-bold'
              : 'text-ink-2 hover:text-ink font-medium'
          }`}
          title="Pegadinhas e Cascas de Banana da Banca"
        >
          {abaAtiva === 'pegadinhas' && (
            <motion.span
              layoutId="activeMnemonicTab"
              className="absolute inset-0 rounded-lg bg-surface shadow-xs border border-border/80 -z-10"
              transition={{ type: 'spring', stiffness: 450, damping: 32 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5 truncate">
            <AlertTriangle className="w-3.5 h-3.5 text-alerta-cebraspe shrink-0" />
            <span className="truncate">Pegadinhas</span>
          </span>
        </button>
      </div>

      {/* Conteúdo da Aba com transição suave */}
      <div className="pt-2">
        <AnimatePresence mode="wait">
          {abaAtiva === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 mb-3">
                Marcos Históricos da Disciplina
              </h4>
              <LinhaDoTempo items={mnemonicos.timeline} />
            </motion.div>
          )}

          {abaAtiva === 'autores' && (
            <motion.div
              key="autores"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 mb-3">
                Autores Canônicos e Ideias-Chave
              </h4>
              <CartaoAutorGrid
                autores={mnemonicos.autores}
                className={isCompact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}
              />
            </motion.div>
          )}

          {abaAtiva === 'pegadinhas' && (
            <motion.div
              key="pegadinhas"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 mb-3">
                Padrões de Armadilhas do Cebraspe
              </h4>
              <PegadinhaCardList pegadinhas={mnemonicos.pegadinhas} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
