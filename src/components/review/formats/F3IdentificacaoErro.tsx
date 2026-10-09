import React from 'react';
import { AlertCircle, Target } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F3IdentificacaoErro: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  onResponder,
  disabled = false,
}) => {
  const opcoesErro = [
    {
      id: 'E',
      label: 'A assertiva inverteu ou distorceu a regra normativa canônica.',
      explicacao: conceito.justificativaCanonic,
    },
    {
      id: 'distrator_1',
      label: 'A assertiva foi redigida corretamente em todos os aspectos fáticos.',
      explicacao: 'Incorreto: o item contém uma armadilha clássica da banca.',
    },
    {
      id: 'distrator_2',
      label: 'O erro consiste apenas na ausência de número de processo ou portaria.',
      explicacao: 'Incorreto: a banca não exige memorização de números secundários sem relevância conceitual.',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Enunciado com Destaque para Caça ao Erro */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm">
        <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
          <Target className="w-4 h-4" />
          <span>{conceito.topico} · Caça ao Erro Cebraspe</span>
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
          {conceito.enunciadoCanonic}
        </p>
      </div>

      <div className="p-3 bg-surface-2 rounded-xl border border-border text-xs text-ink-2 flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-accent shrink-0" />
        <span>Identifique o vício da assertiva que a torna canonicamente incorreta:</span>
      </div>

      <div className="space-y-2">
        {opcoesErro.map((op, idx) => (
          <button
            key={idx}
            type="button"
            disabled={disabled || respondido}
            onClick={() => onResponder(op.id === 'E' ? 'E' : 'C')}
            className="w-full p-3.5 rounded-xl border border-border bg-surface hover:border-rose-500/50 hover:bg-rose-500/5 text-left text-xs sm:text-sm font-sans transition-all cursor-pointer flex items-start gap-2.5 text-ink"
          >
            <span className="font-bold text-accent shrink-0">[{idx + 1}]</span>
            <span className="leading-relaxed">{op.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
