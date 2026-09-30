import React, { useState } from 'react';
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
    <div className={`space-y-4 ${className}`}>
      {/* Seletor de Abas */}
      <div className="flex border-b border-border bg-surface-2 p-1 rounded-xl">
        <button
          type="button"
          onClick={() => setAbaAtiva('timeline')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-sans font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
            abaAtiva === 'timeline'
              ? 'bg-surface text-ink shadow-xs font-semibold'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          <Clock className="w-3.5 h-3.5 text-accent" />
          <span>Linha do Tempo</span>
        </button>

        <button
          type="button"
          onClick={() => setAbaAtiva('autores')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-sans font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
            abaAtiva === 'autores'
              ? 'bg-surface text-ink shadow-xs font-semibold'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          <Users className="w-3.5 h-3.5 text-accent" />
          <span>Quem é Quem</span>
        </button>

        <button
          type="button"
          onClick={() => setAbaAtiva('pegadinhas')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-sans font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
            abaAtiva === 'pegadinhas'
              ? 'bg-surface text-ink shadow-xs font-semibold'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-alerta-cebraspe" />
          <span>Pegadinhas</span>
        </button>
      </div>

      {/* Conteúdo da Aba */}
      <div className="pt-2">
        {abaAtiva === 'timeline' && (
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 mb-3">
              Marcos Históricos da Disciplina
            </h4>
            <LinhaDoTempo items={mnemonicos.timeline} />
          </div>
        )}

        {abaAtiva === 'autores' && (
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 mb-3">
              Autores Canônicos e Ideias-Chave
            </h4>
            <CartaoAutorGrid
              autores={mnemonicos.autores}
              className={isCompact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}
            />
          </div>
        )}

        {abaAtiva === 'pegadinhas' && (
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 mb-3">
              Padrões de Armadilhas do Cebraspe
            </h4>
            <PegadinhaCardList pegadinhas={mnemonicos.pegadinhas} />
          </div>
        )}
      </div>
    </div>
  );
};
