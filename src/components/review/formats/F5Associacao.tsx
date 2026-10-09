import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F5Associacao: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  onResponder,
  disabled = false,
}) => {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const pares = conceito.variantesFormatos?.f5_associacao?.associacao?.pares || [
    { ladoA: 'Princípio / Campo Técnico', ladoB: conceito.topico },
    { ladoA: 'Gabarito Oficial Canônico', ladoB: conceito.gabaritoCanonic === 'C' ? 'CERTO' : 'ERRADO' },
  ];

  const handleConfirmar = (ladoB: string) => {
    setSelecionado(ladoB);
    onResponder(conceito.gabaritoCanonic);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm">
        <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-accent mb-2">
          <Layers className="w-3.5 h-3.5" />
          <span>{conceito.topico} · Associação Conceitual</span>
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
          {conceito.enunciadoCanonic}
        </p>
      </div>

      <div className="p-3 bg-surface-2 rounded-xl border border-border text-xs text-ink-2">
        Relacione a assertiva acima ao seu respectivo enquadramento canônico:
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pares.map((par, idx) => (
          <button
            key={idx}
            type="button"
            disabled={disabled || respondido}
            onClick={() => handleConfirmar(par.ladoB)}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              selecionado === par.ladoB
                ? 'border-accent bg-accent/10 ring-2 ring-accent/20'
                : 'border-border bg-surface hover:border-accent/40'
            }`}
          >
            <div className="text-xs font-sans font-bold text-accent">{par.ladoA}</div>
            <div className="text-sm font-sans font-medium text-ink mt-1">{par.ladoB}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
