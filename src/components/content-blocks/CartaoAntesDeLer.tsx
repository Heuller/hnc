import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, ChevronDown, ChevronUp, RotateCcw, Building2 } from 'lucide-react';
import type { TermoAntesDeLer } from '../../domain/types';
import { useGlossarioStore } from '../../store/useGlossarioStore';

interface CartaoAntesDeLerProps {
  termos?: TermoAntesDeLer[];
}

export const CartaoAntesDeLer: React.FC<CartaoAntesDeLerProps> = ({ termos }) => {
  const { isTermoSilenciado, alternarJaSei } = useGlossarioStore();
  const [expandido, setExpandido] = useState(true);

  if (!termos || termos.length === 0) return null;

  return (
    <section
      aria-label="Pré-requisitos conceituais antes de ler a teoria"
      className="my-6 p-4 sm:p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 shadow-2xs text-ink"
    >
      <header className="flex items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif text-base sm:text-lg font-bold text-ink">
              Antes de Ler: Vocabulário Essencial
            </h2>
            <p className="text-xs text-ink-2 font-sans">
              Domine estes conceitos para ler a teoria com máxima fluência e sem travas conceituais.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpandido(!expandido)}
          className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center shrink-0"
          aria-label={expandido ? 'Recolher cartão antes de ler' : 'Expandir cartão antes de ler'}
        >
          {expandido ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </header>

      {expandido && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fadeIn">
          {termos.map((item, idx) => {
            const termoId = `antes-${item.termo.toLowerCase().replace(/\s+/g, '-')}`;
            const jaSei = isTermoSilenciado(termoId);

            return (
              <div
                key={`${item.termo}-${idx}`}
                className={`p-3.5 rounded-xl border transition-all ${
                  jaSei
                    ? 'bg-surface-2/40 border-border opacity-70'
                    : 'bg-surface border-amber-500/25 shadow-2xs'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-serif font-bold text-sm text-ink flex items-center gap-1.5">
                    <span>{item.termo}</span>
                    {jaSei && (
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 font-bold">
                        Já sei
                      </span>
                    )}
                  </h3>

                  <button
                    type="button"
                    onClick={() => alternarJaSei(termoId)}
                    className="text-[11px] font-mono text-ink-2 hover:text-ink hover:underline cursor-pointer flex items-center gap-1 shrink-0"
                    title={jaSei ? 'Reabrir definição' : 'Marcar que já conhece este conceito'}
                  >
                    {jaSei ? (
                      <>
                        <RotateCcw className="w-3 h-3 text-ink-2" />
                        <span>Reabrir</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>Já sei</span>
                      </>
                    )}
                  </button>
                </div>

                {!jaSei && (
                  <div className="space-y-2 text-xs leading-relaxed text-ink-2 font-sans">
                    <p className="text-ink">{item.definicao}</p>

                    {item.exemploBiblioteca && (
                      <div className="p-2 rounded-lg bg-surface-2 border border-border/70 text-[11px] text-ink flex items-start gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>
                          <strong>Na biblioteca:</strong> {item.exemploBiblioteca}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
