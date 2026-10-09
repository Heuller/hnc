import React, { useState } from 'react';
import { Check, X, BookOpen } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F2ComJustificativa: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  respostaSelecionada,
  onResponder,
  disabled = false,
}) => {
  const [julgamento, setJulgamento] = useState<'C' | 'E' | null>(null);
  const [justificativaEscolhida, setJustificativaEscolhida] = useState<string | null>(null);

  const opcoesJustificativa = conceito.variantesFormatos?.f2_com_justificativa?.opcoes || [
    conceito.justificativaCanonic,
    'A regra decorre de convenção internacional não vinculante para órgãos federais.',
    'A assertiva está invertida em relação à regra geral do Cebraspe.',
  ];

  const handleConfirmar = (just: string) => {
    if (!julgamento) return;
    setJustificativaEscolhida(just);
    // Envia o julgamento com a confirmação
    onResponder(julgamento);
  };

  return (
    <div className="space-y-4">
      {/* Enunciado do Item */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm">
        <div className="text-xs font-sans font-bold uppercase tracking-wider text-accent mb-2">
          {conceito.topico} · Julgamento + Justificativa Canônica
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
          {conceito.enunciadoCanonic}
        </p>
      </div>

      {/* Etapa 1: Julgamento C/E */}
      <div>
        <div className="text-xs font-sans font-semibold text-ink-2 mb-2">
          1. Primeiro passo: Escolha seu julgamento:
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={disabled || respondido}
            onClick={() => setJulgamento('C')}
            className={`p-3 rounded-xl border flex items-center justify-center gap-2 font-sans font-bold transition-all cursor-pointer ${
              julgamento === 'C'
                ? 'border-emerald-600 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/20'
                : 'border-border bg-surface hover:border-emerald-500/40 text-ink'
            }`}
          >
            <Check className="w-4 h-4 text-emerald-600" />
            <span>CERTO</span>
          </button>

          <button
            type="button"
            disabled={disabled || respondido}
            onClick={() => setJulgamento('E')}
            className={`p-3 rounded-xl border flex items-center justify-center gap-2 font-sans font-bold transition-all cursor-pointer ${
              julgamento === 'E'
                ? 'border-rose-600 bg-rose-500/10 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/20'
                : 'border-border bg-surface hover:border-rose-500/40 text-ink'
            }`}
          >
            <X className="w-4 h-4 text-rose-600" />
            <span>ERRADO</span>
          </button>
        </div>
      </div>

      {/* Etapa 2: Seleção da Justificativa Canônica */}
      {julgamento && (
        <div className="animate-fade-in pt-2">
          <div className="text-xs font-sans font-semibold text-ink-2 mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span>2. Segundo passo: Selecione a justificativa canônica correta:</span>
          </div>

          <div className="space-y-2">
            {opcoesJustificativa.map((just, idx) => {
              const isSelected = justificativaEscolhida === just || respostaSelecionada === julgamento;
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={disabled || respondido}
                  onClick={() => handleConfirmar(just)}
                  className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-serif leading-relaxed transition-all cursor-pointer ${
                    isSelected
                      ? 'border-accent bg-accent/5 ring-1 ring-accent text-ink'
                      : 'border-border bg-surface hover:border-accent/40 text-ink-2 hover:text-ink'
                  }`}
                >
                  <span className="font-sans font-bold text-accent mr-2">[{String.fromCharCode(65 + idx)}]</span>
                  {just}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
