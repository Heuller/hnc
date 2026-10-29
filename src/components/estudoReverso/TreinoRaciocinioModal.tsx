import React, { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, BookOpen, ArrowRight } from 'lucide-react';
import { ALL_SIMULADOS_REGISTRY } from '../../content/simuladosRegistry';
import { PILOTO_RACIOCINIO } from '../../content/estudoReverso/pilotoRaciocinio';
import { montarAcervoReverso, selecionarTreinoReverso, proximaRevisaoReversa, type ItemTreinoReverso } from '../../domain/treinoReverso';
import { useProgressStore } from '../../store/useProgressStore';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigationStore } from '../../store/useNavigationStore';
import type { ItemAttempt, RespostaCE } from '../../domain/itemAttempts';
import { PainelEstudoReverso } from '../common/PainelEstudoReverso';
import { Button } from '../common/Button';

interface Props { onClose: () => void }

/** Sessão deliberada curta. A explicação e a aplicação imediata não são notas automáticas de domínio. */
export const TreinoRaciocinioModal: React.FC<Props> = ({ onClose }) => {
  const userId = useAuthStore(s => s.user?.id || 'usuario-local');
  const [itens] = useState(() => selecionarTreinoReverso(
    montarAcervoReverso(ALL_SIMULADOS_REGISTRY.flatMap(s => s.questoes), PILOTO_RACIOCINIO),
    useProgressStore.getState().itemAttempts, userId, new Date().toISOString().slice(0, 10),
  ));
  const [indice, setIndice] = useState(0);
  const [resultados, setResultados] = useState<ItemAttempt[]>([]);
  const concluido = indice >= itens.length;

  return (
    <Dialog.Root open onOpenChange={open => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-xs" />
        <Dialog.Content className="fixed z-50 inset-x-3 top-[4dvh] mx-auto max-w-2xl max-h-[92dvh] overflow-y-auto rounded-2xl border border-border bg-surface p-4 sm:p-6 shadow-editorial-lg text-ink">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <Dialog.Title className="text-xl font-serif font-bold">Estudo reverso por questões</Dialog.Title>
              <Dialog.Description className="text-sm text-ink-2 mt-1">Tente, explique seu raciocínio e confira a regra. Depois, aplique em outro cenário.</Dialog.Description>
            </div>
            <Dialog.Close aria-label="Fechar estudo reverso" className="min-w-11 min-h-11 flex items-center justify-center rounded-xl border border-border cursor-pointer"><X className="w-5 h-5" /></Dialog.Close>
          </div>
          {concluido ? (
            <div className="space-y-4" role="status">
              <h2 className="text-lg font-bold">Sessão concluída</h2>
              <p>{resultados.filter(a => a.correto).length} acertos nos {resultados.length} julgamentos iniciais desta sessão.</p>
              <p className="text-sm text-ink-2">Acertar logo após estudar é diferente de recuperar depois de alguns dias. Volte em outro dia para verificar o que permaneceu.</p>
              <Button onClick={onClose}>Concluir sessão</Button>
            </div>
          ) : (
            <ItemRaciocinio key={itens[indice].questao.id} item={itens[indice]} indice={indice} total={itens.length}
              onRegistrado={attempt => setResultados(prev => [...prev, attempt])}
              onProximo={() => setIndice(n => n + 1)} onClose={onClose} />
          )}
          <p className="text-xs text-ink-2 mt-5 border-t border-border pt-3">Lote de 12 questões autorais revisadas. Treino inspirado em demandas observadas em provas do Cebraspe; não é uma prova oficial nem uma previsão de aprovação.</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

function ItemRaciocinio({ item, indice, total, onRegistrado, onProximo, onClose }: {
  item: ItemTreinoReverso; indice: number; total: number;
  onRegistrado: (attempt: ItemAttempt) => void; onProximo: () => void; onClose: () => void;
}) {
  const { questao, analise } = item;
  const [resposta, setResposta] = useState<RespostaCE | null>(null);
  const [certeza, setCerteza] = useState<'alta' | 'media' | 'baixa' | undefined>();
  const [explicacao, setExplicacao] = useState('');
  const [attempt, setAttempt] = useState<ItemAttempt | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');
  const [transferencia, setTransferencia] = useState<RespostaCE | null>(null);
  const bloqueio = useRef(false);
  const [aplicacaoAberta, setAplicacaoAberta] = useState(false);
  const adicionar = useProgressStore(s => s.adicionarItemAttempt);
  const anteriores = useProgressStore(s => s.itemAttempts);

  async function confirmar(e: React.FormEvent) {
    e.preventDefault();
    if (!resposta || bloqueio.current || attempt) return;
    bloqueio.current = true; setSalvando(true); setErro('');
    try {
      const registro = await adicionar({ itemId: questao.id, submoduloId: questao.submoduloId, moduloId: questao.macroModuloId, contexto: 'treino', resposta, gabarito: questao.gabarito, certeza });
      setAttempt(registro); onRegistrado(registro);
    } catch {
      bloqueio.current = false; setErro('Não foi possível registrar sua resposta. Tente novamente.');
    } finally { setSalvando(false); }
  }

  const opcoes = [['C', 'Certo'], ['E', 'Errado'], ['BRANCO', 'Não sei']] as const;
  return (
    <div className="space-y-4">
      <p className="text-xs font-mono text-ink-2">Item {indice + 1} de {total} · Submódulo {questao.submoduloId}</p>
      <p className="font-serif text-base leading-relaxed select-text">{questao.item}</p>
      {!attempt ? (
        <form onSubmit={confirmar} className="space-y-4">
          <fieldset disabled={salvando} className="space-y-2">
            <legend className="text-sm font-semibold mb-2">Qual é o seu julgamento?</legend>
            <div className="grid grid-cols-3 gap-2">{opcoes.map(([valor, label]) => (
              <button key={valor} type="button" aria-pressed={resposta === valor} onClick={() => setResposta(valor)} className={`min-h-11 rounded-xl border p-2 cursor-pointer ${resposta === valor ? 'border-accent bg-accent-soft font-bold' : 'border-border bg-surface-2'}`}>{label}</button>
            ))}</div>
          </fieldset>
          <fieldset disabled={salvando}>
            <legend className="text-sm mb-2">Antes de conferir, qual é sua confiança? <span className="text-ink-2">(opcional)</span></legend>
            <div className="flex flex-wrap gap-2">{([['alta', 'Tenho certeza'], ['media', 'Estou em dúvida'], ['baixa', 'Foi um palpite']] as const).map(([valor, label]) => (
              <button key={valor} type="button" aria-pressed={certeza === valor} onClick={() => setCerteza(atual => atual === valor ? undefined : valor)} className={`min-h-11 rounded-xl border px-3 py-2 text-sm cursor-pointer ${certeza === valor ? 'border-accent bg-accent-soft' : 'border-border'}`}>{label}</button>
            ))}</div>
          </fieldset>
          <label className="block text-sm font-semibold" htmlFor={`explicacao-${questao.id}`}>Qual regra ou condição sustenta sua resposta? <span className="font-normal text-ink-2">(opcional)</span></label>
          <textarea id={`explicacao-${questao.id}`} rows={3} maxLength={1200} disabled={salvando} value={explicacao} onChange={e => setExplicacao(e.target.value)} placeholder="Tente explicar em uma frase. Se não souber, pode conferir e aprender agora." className="w-full rounded-xl border border-border bg-surface p-3 text-base select-text" />
          {erro && <p role="alert" className="text-sm text-err">{erro}</p>}
          <Button type="submit" disabled={!resposta || salvando} className="w-full">{salvando ? 'Registrando...' : 'Conferir raciocínio'}</Button>
        </form>
      ) : (
        <div className="space-y-4">
          <p role="status" className={`rounded-xl p-3 font-semibold ${attempt.correto ? 'bg-ok-soft text-ok' : 'bg-surface-2 text-ink'}`}>{attempt.resposta === 'BRANCO' ? 'Você marcou “não sei”. Vamos construir a resposta.' : attempt.correto ? 'Julgamento correto. Confira também o raciocínio.' : 'Vamos identificar onde o raciocínio muda.'}</p>
          {explicacao.trim() && <div className="rounded-xl border border-border p-3 text-sm"><strong>Seu raciocínio antes da correção</strong><p className="mt-2 whitespace-pre-wrap select-text">{explicacao}</p></div>}
          <PainelEstudoReverso questao={questao} resposta={attempt.resposta} certeza={certeza === 'alta' ? 'certeza' : certeza === 'media' ? 'provavel' : certeza === 'baixa' ? 'chute' : undefined} autoexplicacao={false} />
          <section className="rounded-xl bg-surface-2 border border-border p-4 space-y-3">
            <h3 className="font-bold">Como chegar ao julgamento</h3>
            <p className="text-sm text-ink-2">{analise.habilidade}</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">{analise.passos.map(passo => <li key={passo}>{passo}</li>)}</ol>
            <a href={analise.fonte.url} target="_blank" rel="noreferrer" className="text-sm text-accent underline flex items-start gap-2"><BookOpen className="w-4 h-4 shrink-0 mt-1" />{analise.fonte.titulo} · {analise.fonte.localizador}</a>
            <Button variant="outline" onClick={() => { const nav = useNavigationStore.getState(); nav.setSelectedSubmodule(questao.submoduloId); nav.setActiveView('teoria'); onClose(); }}>Estudar este assunto na teoria</Button>
          </section>
          {!aplicacaoAberta ? <Button variant="outline" onClick={() => setAplicacaoAberta(true)}>Aplicar a regra em outro cenário</Button> : (
            <section className="border border-accent/30 rounded-xl p-4 space-y-3">
              <h3 className="font-bold">Agora, aplique a regra</h3>
              <p className="font-serif leading-relaxed">{analise.transferencia.item}</p>
              <div className="flex gap-2">{opcoes.map(([valor, label]) => <button key={valor} type="button" disabled={transferencia !== null} onClick={() => setTransferencia(valor)} className="min-h-11 border border-border rounded-xl px-3 cursor-pointer disabled:opacity-60">{label}</button>)}</div>
              {transferencia && <div role="status" className="text-sm space-y-2"><p className="font-bold">{transferencia === analise.transferencia.gabarito ? 'Você aplicou a regra.' : 'Confira a condição decisiva.'} Gabarito: {analise.transferencia.gabarito === 'C' ? 'Certo' : 'Errado'}.</p><p>{analise.transferencia.justificativa}</p><p className="text-ink-2">Esta aplicação acontece logo após o feedback. Ela não demonstra retenção em outro dia.</p></div>}
            </section>
          )}
          <p className="text-xs text-ink-2">Revisão sugerida para {proximaRevisaoReversa(attempt, anteriores.filter(a => a.id !== attempt.id))}. Você pode praticar antes; repetir hoje não equivale a recuperar em outro dia.</p>
          <Button onClick={onProximo} className="w-full">{indice + 1 === total ? 'Concluir sessão' : 'Próxima questão'}<ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      )}
    </div>
  );
}
