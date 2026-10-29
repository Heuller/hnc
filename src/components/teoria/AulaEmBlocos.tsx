import type { ModuloFilho } from '../../domain/types';
import { ConteudoMarkdown } from '../common/ConteudoMarkdown';
import { ItemCE } from '../common/ItemCE';
import { useProgressStore } from '../../store/useProgressStore';
import { getUnitReadingKey } from '../../domain/learningEngine';

/** Os IDs de checkpoint são os mesmos na aula, no progresso e na revisão. */
export function AulaEmBlocos({ submodulo, moduloId }: { submodulo: ModuloFilho; moduloId: string }) {
  const unidades = submodulo.unidadesAprendizagem || [];
  const lidas = useProgressStore(state => state.secoesVisualizadas?.[submodulo.id]);
  const registrarLeitura = useProgressStore(state => state.registrarSecaoVisualizada);
  return (
    <div className="space-y-10">
      <nav aria-label="Blocos desta aula" className="rounded-xl border border-border p-4 print:hidden">
        <p className="font-semibold text-ink mb-3">Nesta aula</p>
        <ol className="space-y-2 list-decimal pl-5 text-ink-2">
          {unidades.map(unidade => <li key={unidade.id}><a className="underline underline-offset-4 focus-visible:outline-2" href={`#${unidade.id}`} onClick={event => {
            event.preventDefault(); document.getElementById(unidade.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById(unidade.id)?.focus({ preventScroll: true });
          }}>{unidade.titulo}</a></li>)}
        </ol>
      </nav>
      {unidades.map((unidade, index) => (
        <section key={unidade.id} id={unidade.id} tabIndex={-1} aria-labelledby={`${unidade.id}-titulo`} className="scroll-mt-28 space-y-5 focus-visible:outline-2 focus-visible:outline-accent">
          <header>
            <p className="text-xs font-mono text-ink-2">Bloco {index + 1} de {unidades.length}</p>
            <h3 id={`${unidade.id}-titulo`} className="text-xl font-semibold text-ink mt-2">{unidade.titulo}</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-ink-2 space-y-1">{unidade.objetivos.map(objetivo => <li key={objetivo}>{objetivo}</li>)}</ul>
          </header>
          <ConteudoMarkdown content={unidade.conteudo} submoduloId={submodulo.id} />
          {unidade.checkpointIds.length > 0 && <div className="rounded-xl border border-accent/25 p-4 space-y-4 print:hidden">
            <p className="font-semibold text-ink">Pare e recupere</p>
            <p className="text-sm text-ink-2">Tente responder sem consultar. Você pode continuar a leitura e voltar depois.</p>
            {unidade.checkpointIds.map(id => {
              const cp = submodulo.checkpoints.find(item => item.id === id);
              if (!cp) return null;
              return <ItemCE key={cp.id} contexto="teoria" contadorTexto="Microcheckpoint autoral" item={{ id: cp.id, moduloId, submoduloId: submodulo.numero, enunciado: cp.item, gabarito: cp.gabarito, justificativa: cp.justificativa, versaoCorreta: cp.versao_correta, fonte: cp.fonte, armadilha: cp.armadilhaBanca, secaoRef: unidade.id }} />;
            })}
          </div>}
          <button type="button" disabled={lidas?.includes(getUnitReadingKey(submodulo, unidade.id))} onClick={() => registrarLeitura(submodulo.id, getUnitReadingKey(submodulo, unidade.id))} className="rounded-lg border border-border px-4 py-2 text-sm text-ink hover:bg-surface-2 disabled:opacity-60 print:hidden">
            {lidas?.includes(getUnitReadingKey(submodulo, unidade.id)) ? 'Bloco marcado como lido' : 'Marcar bloco como lido'}
          </button>
        </section>
      ))}
      {submodulo.fontesTeoria?.length ? <section aria-label="Fontes desta aula" className="border-t border-border pt-5">
        <h3 className="text-lg font-semibold text-ink">Fontes e aprofundamento</h3>
        <ul className="mt-3 space-y-3 text-sm text-ink-2">{submodulo.fontesTeoria.map(fonte => <li key={fonte.id}>
          {fonte.url ? <a href={fonte.url} target="_blank" rel="noreferrer" className="underline">{fonte.titulo}</a> : <strong>{fonte.titulo}</strong>}
          <p>{fonte.localizador}</p>
        </li>)}</ul>
      </section> : null}
    </div>
  );
}
