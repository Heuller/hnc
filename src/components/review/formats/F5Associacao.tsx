import { ordenarOpcoes } from '../../../domain/avaliarFormatoRevisao';
import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F5Associacao: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  onResponder,
  disabled = false,
}) => {
  const [escolhas, setEscolhas] = useState<Record<number, string>>({});
  const pares = conceito.variantesFormatos?.f5_associacao?.associacao?.pares || [];
  const opcoes = ordenarOpcoes([...new Set(pares.map(p => p.ladoB))], conceito.id);

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

      <div className="space-y-3">
        {pares.map((par, idx) => <label key={idx} className="block space-y-2 text-sm">
          <span>{par.ladoA}</span>
          <select aria-label={`Associação ${idx + 1}: ${par.ladoA}`} value={escolhas[idx] || ''} disabled={disabled || respondido}
            className="block w-full min-h-[44px] border border-border rounded-xl bg-surface text-ink p-3"
            onChange={event => setEscolhas(s => ({ ...s, [idx]: event.target.value }))}>
            <option value="">Escolha a correspondência</option>{opcoes.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>)}
        <button type="button" className="min-h-[44px] px-4 rounded-xl border border-border" disabled={disabled || respondido || !pares.length || pares.some((_,i) => !escolhas[i])}
          onClick={() => onResponder({ tipo: 'associacao', pares: pares.map((p,i) => ({ ladoA: p.ladoA, ladoB: escolhas[i] })) })}>Conferir associações</button>
      </div>
    </div>
  );
};
