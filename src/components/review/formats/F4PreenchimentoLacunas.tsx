import React from 'react';
import { PenTool } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F4PreenchimentoLacunas: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  onResponder,
  disabled = false,
}) => {
  const variante = conceito.variantesFormatos?.f4_preenchimento_lacunas;
  const textoLacuna = variante?.lacunas?.textoComLacuna || conceito.enunciadoCanonic;
  const respostaCorreta = variante?.lacunas?.respostaCorreta || 'correto';
  const distratores = variante?.lacunas?.distratores || ['exclusivo', 'facultativo', 'anacrônico'];

  const opcoes = [respostaCorreta, ...distratores].sort(() => 0.5 - Math.random());

  return (
    <div className="space-y-4">
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm">
        <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-accent mb-2">
          <PenTool className="w-3.5 h-3.5" />
          <span>{conceito.topico} · Recuperação de Lacuna (Cloze)</span>
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
          {textoLacuna}
        </p>
      </div>

      <div className="text-xs font-sans font-semibold text-ink-2">
        Selecione o termo técnico que completa com exatidão a lacuna:
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {opcoes.map((opcao, idx) => (
          <button
            key={idx}
            type="button"
            disabled={disabled || respondido}
            onClick={() => {
              const acertou = opcao.toLowerCase() === respostaCorreta.toLowerCase();
              onResponder(acertou ? conceito.gabaritoCanonic : (conceito.gabaritoCanonic === 'C' ? 'E' : 'C'));
            }}
            className="p-3 rounded-xl border border-border bg-surface hover:border-accent hover:bg-accent/5 text-left text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer text-ink flex items-center justify-between"
          >
            <span>{opcao}</span>
            <span className="text-[11px] font-mono text-ink-3">[{idx + 1}]</span>
          </button>
        ))}
      </div>
    </div>
  );
};
