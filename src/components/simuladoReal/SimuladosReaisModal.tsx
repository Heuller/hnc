import { useEffect, useMemo, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, ListChecks, Minus, ShieldCheck, X, XCircle } from 'lucide-react';
import { QUESTOES_REAIS } from '../../content/questoesReais';
import { ALL_COURSE_MODULES } from '../../content/registry';
import { PainelEstudoReverso } from '../common/PainelEstudoReverso';
import { useNavigationStore } from '../../store/useNavigationStore';
import { useAuthStore } from '../../store/useAuthStore';
import { getEffectiveUserId } from '../../lib/userScopedStorage';
import { assinaturaQuestaoReal, lerSessaoReal, sessaoRealVazia, type SessaoQuestoesReais } from '../../domain/sessaoQuestoesReais';

export function SimuladosReaisModal({ onClose }: { onClose: () => void }) {
  const userId = useAuthStore(s => s.user?.id) || getEffectiveUserId() || 'local';
  return <SessaoReal key={userId} onClose={onClose} storageKey={`hnc_questoes_reais_v1:${userId}`} />;
}

function SessaoReal({ onClose, storageKey }: { onClose: () => void; storageKey: string }) {
  const [sessao, setSessao] = useState(() => {
    try { return lerSessaoReal(localStorage.getItem(storageKey), QUESTOES_REAIS); }
    catch { return sessaoRealVazia(); }
  });
  const [assunto, setAssunto] = useState('');
  const [falhaAoSalvar, setFalhaAoSalvar] = useState(false);
  const conteudo = useRef<HTMLDivElement>(null);
  const correcao = useRef<HTMLElement>(null);
  const abrirCorrecao = useRef(false);
  const setSelectedSubmodule = useNavigationStore(s => s.setSelectedSubmodule);
  const setActiveView = useNavigationStore(s => s.setActiveView);
  const porModulo = useMemo(() => {
    const grupos: Record<string, typeof QUESTOES_REAIS> = {};
    for (const q of QUESTOES_REAIS) (grupos[q.modulo] ||= []).push(q);
    return grupos;
  }, []);
  const modulo = sessao.modulo;
  const respostas = sessao.respostas;
  const dadosModulo = ALL_COURSE_MODULES.find(m => m.codigo.toUpperCase() === modulo);
  const todosItens = (modulo && porModulo[modulo]) || [];
  const itens = assunto ? todosItens.filter(q => q.submoduloId === assunto) : todosItens;
  const indice = Math.max(0, itens.findIndex(q => q.id === sessao.questaoId));
  const questao = itens[indice];
  const resposta = questao && respostas[questao.id]?.resposta;
  useEffect(() => {
    if (!abrirCorrecao.current || !resposta) return;
    abrirCorrecao.current = false;
    correcao.current?.focus({ preventScroll: true });
    correcao.current?.scrollIntoView?.({ block: 'start', behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [resposta, questao?.id]);
  const respondidos = itens.filter(q => respostas[q.id]).length;
  const acertos = itens.filter(q => respostas[q.id]?.resposta === q.gabarito).length;
  const assuntos = dadosModulo?.modulosFilhos?.filter(s => todosItens.some(q => q.submoduloId === s.numero)) || [];
  const aula = dadosModulo?.modulosFilhos?.find(s => s.numero === questao?.submoduloId);
  const disponiveis = ALL_COURSE_MODULES.filter(m => porModulo[m.codigo.toUpperCase()]?.length);
  const emPreparacao = ALL_COURSE_MODULES.filter(m => !porModulo[m.codigo.toUpperCase()]?.length);

  function atualizarSessao(alterar: (atual: SessaoQuestoesReais) => SessaoQuestoesReais) {
    const proxima = alterar(sessao);
    try { localStorage.setItem(storageKey, JSON.stringify(proxima)); setFalhaAoSalvar(false); }
    catch { setFalhaAoSalvar(true); }
    setSessao(proxima);
  }
  function voltarAoTopo() { if (conteudo.current) conteudo.current.scrollTop = 0; }
  function mover(n: number) {
    if (!itens[n]) return;
    atualizarSessao(s => ({ ...s, questaoId: itens[n].id }));
    voltarAoTopo();
  }
  function escolherModulo(codigo?: string) {
    setAssunto('');
    const grupo = codigo ? porModulo[codigo] || [] : [];
    const primeira = grupo.find(q => !respostas[q.id]) || grupo[0];
    atualizarSessao(s => ({ ...s, modulo: codigo, questaoId: primeira?.id }));
    voltarAoTopo();
  }
  function filtrarAssunto(valor: string) {
    setAssunto(valor);
    const primeira = todosItens.find(q => !valor || q.submoduloId === valor);
    atualizarSessao(s => ({ ...s, questaoId: primeira?.id }));
    voltarAoTopo();
  }
  function julgar(value: 'C' | 'E' | 'BRANCO') {
    abrirCorrecao.current = true;
    atualizarSessao(s => ({ ...s, respostas: { ...s.respostas, [questao.id]: { resposta: value, assinatura: assinaturaQuestaoReal(questao) } } }));
  }
  const armazenamento = falhaAoSalvar
    ? 'Não foi possível salvar neste navegador. Mantenha esta janela aberta para preservar a sessão.'
    : 'Progresso salvo neste navegador, separado por usuário.';

  return <Dialog.Root open onOpenChange={open => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs" />
      <Dialog.Content className="fixed z-50 inset-x-2 top-[2dvh] mx-auto flex h-[96dvh] max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-surface text-ink shadow-editorial-lg sm:inset-x-6 sm:top-[4dvh] sm:h-[92dvh] sm:rounded-3xl">
        <header className="flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 py-4 sm:px-7 sm:py-5">
          <div className="flex min-w-0 items-start gap-3">
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent sm:flex"><ListChecks className="h-5 w-5" aria-hidden="true" /></span>
            <div className="min-w-0">
              <Dialog.Title className="font-serif text-xl font-bold sm:text-2xl">Questões reais por módulo</Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-ink-2">Certo ou errado. Responda, entenda a regra e volte à teoria.</Dialog.Description>
            </div>
          </div>
          <Dialog.Close aria-label="Fechar questões reais" className="foco flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-border hover:bg-surface-2"><X className="h-5 w-5" aria-hidden="true" /></Dialog.Close>
        </header>

        <div ref={conteudo} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-7 sm:py-6">
          {!modulo ? <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div><p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">Sua trilha de prática</p><h2 className="font-serif text-2xl font-bold">Escolha um módulo</h2></div>
              <p className="text-sm text-ink-2"><strong className="font-semibold text-ink">{QUESTOES_REAIS.length.toLocaleString('pt-BR')}</strong> questões · {disponiveis.length} módulos com itens</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {disponiveis.map(m => {
                const codigo = m.codigo.toUpperCase();
                const grupo = porModulo[codigo] || [];
                const feitas = grupo.filter(q => respostas[q.id]).length;
                return <button type="button" key={m.id} className="foco group flex min-h-36 flex-col justify-between gap-4 rounded-2xl border border-border bg-surface p-4 text-left transition-colors hover:border-accent/60 hover:bg-surface-2 sm:p-5" onClick={() => escolherModulo(codigo)}>
                  <span className="flex items-start gap-3"><span className="rounded-lg bg-accent-soft px-2.5 py-1.5 font-mono text-xs font-bold text-accent">{codigo}</span><span className="min-w-0 flex-1 font-serif text-lg font-semibold leading-snug">{m.titulo_curto || m.titulo}</span><ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-2 group-hover:text-accent" aria-hidden="true" /></span>
                  <span className="space-y-2"><span className="flex items-center justify-between gap-2 text-xs text-ink-2"><span>{grupo.length} questões disponíveis</span><span>{feitas ? `${feitas} respondidas` : 'Começar'}</span></span><span className="block h-1.5 overflow-hidden rounded-full bg-surface-3" aria-hidden="true"><span className="block h-full rounded-full bg-accent" style={{ width: `${feitas / grupo.length * 100}%` }} /></span></span>
                </button>;
              })}
            </div>
            {emPreparacao.length > 0 && <p className="text-xs leading-relaxed text-ink-2">Ainda sem questões revisadas: {emPreparacao.map(m => m.codigo).join(', ')}. Esses módulos serão acrescentados conforme a revisão do acervo.</p>}
            <details className="rounded-2xl border border-border bg-surface-2 p-4 text-sm text-ink-2">
              <summary className="foco cursor-pointer font-semibold text-ink">Sobre as fontes e os gabaritos</summary>
              <p className="mt-3 leading-relaxed">{QUESTOES_REAIS.length.toLocaleString('pt-BR')} questões com enunciados legíveis e documentos conferidos. Os links distinguem arquivos da banca e cópias consultadas. Itens anulados ou com conferência pendente ficam fora dos treinos.</p>
              <p className="mt-3 leading-relaxed">Após responder, estude a análise do conteúdo, a regra e o exemplo prático. O resultado da prova segue o gabarito definitivo da banca; a explicação fundamenta o julgamento e contextualiza normas e conceitos da época.</p>
            </details>
          </div> : questao && <div className="mx-auto max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <button type="button" onClick={() => escolherModulo()} className="foco -ml-2 inline-flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm text-ink-2 hover:bg-surface-2 hover:text-ink"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Escolher outro módulo</button>
              <span className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent">{modulo} · {dadosModulo?.titulo_curto || dadosModulo?.titulo}</span>
            </div>
            <div className="rounded-2xl border border-border bg-surface-2 p-4 sm:p-5">
              <div className="flex items-baseline justify-between gap-3"><span className="text-sm font-semibold">Item {indice + 1} de {itens.length}</span><span className="text-xs text-ink-2">{respondidos} respondidos · {acertos} acertos</span></div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-3" role="progressbar" aria-label="Progresso nesta seleção" aria-valuenow={respondidos} aria-valuemin={0} aria-valuemax={itens.length}><div className="h-full rounded-full bg-accent" style={{ width: `${respondidos / itens.length * 100}%` }} /></div>
              {assuntos.length > 1 && <label className="mt-4 block text-xs font-semibold text-ink-2">Filtrar por assunto<select aria-label="Filtrar por assunto" value={assunto} onChange={event => filtrarAssunto(event.target.value)} className="foco mt-1.5 block min-h-11 w-full min-w-0 rounded-xl border border-border bg-surface px-3 text-sm font-normal text-ink"><option value="">Todos os assuntos do módulo</option>{assuntos.map(s => <option key={s.id} value={s.numero}>{s.numero} · {s.titulo}</option>)}</select></label>}
            </div>

            <article className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="text-xs font-bold text-accent">{questao.prova.replace(/ · atribuição na apostila$/, '')}</p>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${questao.estadoConferencia === 'caderno' ? 'bg-surface-2 text-ink-2' : 'bg-ok-soft text-ok'}`}><ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />{questao.estadoConferencia === 'caderno' ? 'Gabarito da apostila' : questao.estadoConferencia === 'copia-oficial' ? 'Documento conferido em cópia' : 'Conferida com a banca'}</span>
              </div>
              {questao.estadoConferencia === 'copia-oficial' && <p className="mt-2 text-xs text-ink-2">Conferência com documento oficial em espelho. Os links identificam as cópias consultadas.</p>}
              {questao.estadoConferencia === 'caderno' && <p className="mt-2 text-xs text-ink-2">Atribuição na fonte secundária; confronto com a prova oficial pendente.</p>}
              {aula && <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink-2"><BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />{aula.numero} · {aula.titulo}</p>}
              {questao.contexto && <p className="mt-5 text-sm leading-relaxed text-ink-2">{questao.contexto}</p>}
              <p className="mt-4 font-serif text-lg leading-relaxed sm:text-xl">{questao.item}</p>
              <div className="mt-6 border-t border-border pt-5"><p className="mb-3 text-xs font-semibold text-ink-2">{resposta ? 'Sua resposta foi registrada' : 'Julgue a afirmação para abrir o estudo reverso'}</p>
                <div className="grid grid-cols-3 gap-2">{(['C', 'E', 'BRANCO'] as const).map(value => {
                  const texto = value === 'C' ? 'Certo' : value === 'E' ? 'Errado' : 'Em branco';
                  const escolhido = resposta === value;
                  const estilo = !resposta ? 'border-border hover:border-accent hover:bg-accent-soft' : escolhido ? value === 'BRANCO' ? 'border-2 border-accent bg-accent-soft text-accent' : value === questao.gabarito ? 'border-2 border-ok bg-ok-soft text-ok' : 'border-2 border-err bg-err-soft text-err' : 'border-border text-ink-2';
                  return <button key={value} type="button" aria-label={texto} aria-pressed={escolhido} disabled={Boolean(resposta)} onClick={() => julgar(value)} className={`foco flex min-h-14 items-center justify-center gap-1.5 rounded-xl border px-2 text-sm font-semibold transition-colors ${estilo}`}>{escolhido && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}{texto}</button>;
                })}</div>
              </div>
            </article>

            {resposta && <section ref={correcao} tabIndex={-1} aria-label="Correção da questão" className="scroll-mt-2 space-y-4">
              <div role="status" className={`flex items-center gap-3 rounded-2xl border p-4 ${resposta === 'BRANCO' ? 'border-border bg-surface-2' : resposta === questao.gabarito ? 'border-ok/30 bg-ok-soft' : 'border-err/30 bg-err-soft'}`}>
                {resposta === 'BRANCO' ? <Minus className="h-5 w-5 shrink-0 text-ink-2" aria-hidden="true" /> : resposta === questao.gabarito ? <CheckCircle2 className="h-5 w-5 shrink-0 text-ok" aria-hidden="true" /> : <XCircle className="h-5 w-5 shrink-0 text-err" aria-hidden="true" />}
                <p className="text-sm font-semibold">{resposta === 'BRANCO' ? 'Em branco' : resposta === questao.gabarito ? 'Você acertou' : 'Você errou'} · Gabarito: {questao.gabarito === 'C' ? 'Certo' : 'Errado'}</p>
              </div>
              <PainelEstudoReverso questao={questao} resposta={resposta} autoexplicacao={false} onReverTeoria={subId => { onClose(); setSelectedSubmodule(subId); setActiveView('teoria'); }} />
              <div className="rounded-2xl border border-border p-4 text-xs leading-relaxed text-ink-2"><p className="mb-2 font-semibold text-ink">Confira na fonte</p><div className="flex flex-wrap gap-x-4 gap-y-2"><a className="foco inline-flex min-h-9 items-center gap-1.5 underline underline-offset-4" href={questao.provaUrl} target="_blank" rel="noreferrer">{questao.estadoConferencia === 'caderno' ? 'questão no caderno' : questao.conferenciaOficial?.provaEmEspelho ? 'cópia da prova' : 'prova oficial'}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>{questao.gabaritoUrl && <a className="foco inline-flex min-h-9 items-center gap-1.5 underline underline-offset-4" href={questao.gabaritoUrl} target="_blank" rel="noreferrer">{questao.conferenciaOficial?.tipoGabarito === 'recurso' ? 'decisão definitiva do recurso' : questao.conferenciaOficial?.gabaritoEmEspelho ? 'gabarito definitivo (cópia)' : 'gabarito definitivo'}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>}<a className="foco inline-flex min-h-9 items-center gap-1.5 underline underline-offset-4" href={questao.acervoUrl} target="_blank" rel="noreferrer">{questao.acervoUrl.startsWith('https://drive.google.com/') ? 'caderno no Drive' : 'documento de origem'}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a></div>
                {Boolean(questao.outrasFontes?.length) && <details className="mt-3"><summary className="foco cursor-pointer">Outras fontes do acervo ({questao.outrasFontes?.length})</summary><ul className="mt-2 list-disc space-y-1 pl-5">{questao.outrasFontes?.map(f => <li key={f.url}><a href={f.url} className="underline" target="_blank" rel="noreferrer">{f.titulo}</a></li>)}</ul></details>}
              </div>
            </section>}
            <p className={`text-xs leading-relaxed ${falhaAoSalvar ? 'text-err' : 'text-ink-2'}`} role={falhaAoSalvar ? 'alert' : undefined}>{armazenamento}</p>
          </div>}
        </div>

        {modulo && questao && <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-border bg-surface px-4 py-3 sm:px-7">
          <button type="button" disabled={indice === 0} onClick={() => mover(indice - 1)} className="foco inline-flex min-h-11 items-center gap-1 rounded-xl border border-border px-3 text-sm hover:bg-surface-2 disabled:opacity-40"><ChevronLeft className="h-4 w-4" aria-hidden="true" />Anterior</button>
          <span className="hidden text-xs text-ink-2 sm:block">{indice + 1} / {itens.length}</span>
          <button type="button" onClick={() => indice >= itens.length - 1 ? escolherModulo() : mover(indice + 1)} className="foco inline-flex min-h-11 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-surface hover:opacity-90 disabled:opacity-40">{indice >= itens.length - 1 ? 'Escolher módulo' : 'Próxima'}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
        </footer>}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
