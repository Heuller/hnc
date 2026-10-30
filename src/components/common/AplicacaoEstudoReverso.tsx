import { useState } from 'react';
import type { AnaliseItemReverso } from '../../domain/treinoReverso';
import type { JulgamentoCebraspe } from '../../domain/schemas/question.schema';

/** Prática guiada após a correção; nunca altera a resposta ou a nota do simulado. */
export function AplicacaoEstudoReverso({ transferencia }: { transferencia: AnaliseItemReverso['transferencia'] }) {
  const [aberto, setAberto] = useState(false);
  const [resposta, setResposta] = useState<JulgamentoCebraspe>();

  return (
    <section aria-label="Aplicação da regra" className="p-4 rounded-xl border border-accent/30 bg-accent-soft space-y-3">
      <h3 className="m-0 text-sm font-bold text-ink">Consegue aplicar a regra em outro item?</h3>
      <p className="m-0 text-xs text-ink-2">Exercício autoral de prática guiada, sem alterar sua nota. Um acerto agora ainda precisa ser confirmado em uma revisão futura, sem ajuda.</p>
      {!aberto ? (
        <button type="button" onClick={() => setAberto(true)} className="min-h-[44px] px-4 py-2 rounded-xl bg-primary text-primary-text text-xs font-bold foco">Tentar outra situação</button>
      ) : (
        <>
          <p className="m-0 text-sm font-serif text-ink leading-relaxed">{transferencia.item}</p>
          <div role="group" aria-label="Julgar o exercício de aplicação" className="flex flex-wrap gap-2">
            {(['C', 'E', 'BRANCO'] as const).map(valor => (
              <button key={valor} type="button" disabled={resposta !== undefined} aria-pressed={resposta === valor} onClick={() => setResposta(valor)} className="min-h-[44px] px-4 py-2 rounded-xl border border-border bg-surface text-ink text-sm foco disabled:opacity-70 aria-pressed:border-accent aria-pressed:font-bold">
                {valor === 'C' ? 'Certo' : valor === 'E' ? 'Errado' : 'Não sei ainda'}
              </button>
            ))}
          </div>
          <div aria-live="polite" aria-atomic="true">
            {resposta && (
              <div className="space-y-2 text-sm text-ink">
                <p className="m-0 font-bold">{resposta === 'BRANCO' ? 'Vamos construir a resposta.' : resposta === transferencia.gabarito ? 'Você aplicou a regra neste exercício.' : 'Reveja a condição que muda o julgamento.'} Gabarito: {transferencia.gabarito === 'C' ? 'CERTO' : 'ERRADO'}.</p>
                <p className="m-0 leading-relaxed">{transferencia.justificativa}</p>
                <p className="m-0 text-xs text-ink-2">Compare com o item anterior: o que mudou e por que essa mudança afeta a conclusão?</p>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
