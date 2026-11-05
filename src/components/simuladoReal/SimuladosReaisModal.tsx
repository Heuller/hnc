import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
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
  const [falhaAoSalvar, setFalhaAoSalvar] = useState(false);
  function atualizarSessao(alterar: (atual: SessaoQuestoesReais) => SessaoQuestoesReais) {
    const proxima = alterar(sessao);
    try { localStorage.setItem(storageKey, JSON.stringify(proxima)); setFalhaAoSalvar(false); }
    catch { setFalhaAoSalvar(true); }
    setSessao(proxima);
  }
  const modulo = sessao.modulo;
  const respostas = sessao.respostas;
  const setSelectedSubmodule = useNavigationStore(s => s.setSelectedSubmodule);
  const setActiveView = useNavigationStore(s => s.setActiveView);
  const modulos = ALL_COURSE_MODULES;
  const itens = QUESTOES_REAIS.filter(q => q.modulo === modulo);
  const indiceSalvo = itens.findIndex(q => q.id === sessao.questaoId);
  const indice = Math.max(0, indiceSalvo);
  const questao = itens[indice];
  const resposta = questao && respostas[questao.id]?.resposta;
  function mover(n: number) { atualizarSessao(s => ({ ...s, questaoId: itens[n]?.id })); }
  return <Dialog.Root open onOpenChange={open => { if (!open) onClose(); }}>
    <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-xs" />
      <Dialog.Content className="fixed z-50 inset-x-3 top-[4dvh] mx-auto max-w-3xl max-h-[92dvh] overflow-y-auto rounded-2xl border border-border bg-surface p-4 sm:p-6 shadow-editorial-lg text-ink">
        <div className="flex items-start justify-between gap-3">
          <div><Dialog.Title className="text-xl font-serif font-bold">Questões reais por módulo</Dialog.Title>
            <Dialog.Description className="text-sm text-ink-2 mt-1">Julgue e confira imediatamente o raciocínio e as fontes da questão.</Dialog.Description></div>
          <Dialog.Close aria-label="Fechar questões reais" className="min-w-11 min-h-11 flex items-center justify-center rounded-xl border border-border"><X className="w-5 h-5" /></Dialog.Close>
        </div>
        <p className="mt-4 p-3 rounded-xl bg-accent-soft border border-accent/30 text-sm" role="note">Acervo em construção: {QUESTOES_REAIS.length} itens disponíveis. Em cada item, confira se o gabarito foi confrontado com a banca ou se é informado pelo caderno. A extração e revisão dos demais materiais ainda não estão concluídas.</p>
        {!modulo ? <div className="mt-4 space-y-3"><h2 className="font-bold">Escolha um módulo</h2>
          {modulos.map(m => {
            const codigo = m.codigo.toUpperCase();
            const quantidade = QUESTOES_REAIS.filter(q => q.modulo === codigo).length;
            return <button type="button" key={m.id} disabled={quantidade === 0} className="w-full min-h-11 rounded-xl border border-border p-3 text-left hover:border-accent disabled:opacity-50 foco" onClick={() => { atualizarSessao(s => ({ ...s, modulo: codigo, questaoId: QUESTOES_REAIS.find(q => q.modulo === codigo)?.id })); }}>{codigo} — {m.titulo_curto || m.titulo} · {quantidade} {quantidade === 1 ? 'questão disponível' : 'questões disponíveis'}</button>;
          })}
          <p className="text-sm text-ink-2">Os módulos ainda sem itens disponíveis serão acrescentados conforme a revisão do acervo.</p>
        </div> : questao && <div className="mt-5 space-y-4">
          <button type="button" onClick={() => { atualizarSessao(s => ({ ...s, modulo: undefined, questaoId: undefined })); }} className="min-h-11 text-sm underline foco">← Escolher outro módulo</button>
          <div className="text-xs text-ink-2">{modulo} · Item {indice + 1} de {itens.length} · {itens.filter(q => respostas[q.id]).length} respondidos · {itens.filter(q => respostas[q.id]?.resposta === q.gabarito).length} acertos</div>
          <p className="text-xs font-semibold text-accent">{questao.prova}</p>
          <p className="text-xs text-ink-2">{questao.estadoConferencia === 'caderno' ? 'Atribuição e gabarito informados pelo caderno; confronto com a prova oficial pendente.' : 'Prova e gabarito definitivo confrontados com a banca.'}</p>
          <p className="text-sm text-ink-2">{questao.contexto}</p>
          <p className="font-serif text-base leading-relaxed">{questao.item}</p>
          <div className="flex flex-wrap gap-2">{(['C', 'E', 'BRANCO'] as const).map(value => <button key={value} type="button" disabled={Boolean(resposta)} onClick={() => atualizarSessao(s => ({ ...s, respostas: { ...s.respostas, [questao.id]: { resposta: value, assinatura: assinaturaQuestaoReal(questao) } } }))} className="min-h-11 px-4 rounded-xl border border-border disabled:opacity-60 foco">{value === 'C' ? 'Certo' : value === 'E' ? 'Errado' : 'Em branco'}</button>)}</div>
          {resposta && <div aria-live="polite" className="space-y-4"><p className="font-bold">{resposta === 'BRANCO' ? 'Em branco' : resposta === questao.gabarito ? 'Você acertou' : 'Você errou'} · Gabarito: {questao.gabarito === 'C' ? 'Certo' : 'Errado'}</p>
            <PainelEstudoReverso questao={questao} resposta={resposta} autoexplicacao={false} onReverTeoria={subId => { onClose(); setSelectedSubmodule(subId); setActiveView('teoria'); }} />
            <p className="text-sm text-ink-2">Fonte: <a className="underline" href={questao.provaUrl} target="_blank" rel="noreferrer">{questao.estadoConferencia === 'caderno' ? 'questão no caderno' : 'prova oficial'}</a>{questao.gabaritoUrl && <> · <a className="underline" href={questao.gabaritoUrl} target="_blank" rel="noreferrer">gabarito definitivo</a></>} · <a className="underline" href={questao.acervoUrl} target="_blank" rel="noreferrer">caderno no Drive</a></p>
            {Boolean(questao.outrasFontes?.length) && <details className="text-sm text-ink-2"><summary className="cursor-pointer foco">Outras fontes do acervo ({questao.outrasFontes?.length})</summary><ul className="list-disc pl-5 mt-2 space-y-1">{questao.outrasFontes?.map(f => <li key={f.url}><a href={f.url} className="underline" target="_blank" rel="noreferrer">{f.titulo}</a></li>)}</ul></details>}
          </div>}
          <div className="flex gap-3"><button type="button" disabled={indice === 0} onClick={() => mover(indice - 1)} className="min-h-11 rounded-xl border border-border px-4 disabled:opacity-40 foco">Anterior</button><button type="button" disabled={indice >= itens.length - 1} onClick={() => mover(indice + 1)} className="min-h-11 rounded-xl border border-border px-4 disabled:opacity-40 foco">Próxima</button></div>
          <p className="text-xs text-ink-2">{falhaAoSalvar ? 'Não foi possível salvar neste navegador. Mantenha a janela aberta para preservar esta sessão.' : 'Seu ponto de leitura e suas respostas ficam salvos neste navegador, separados por usuário.'}</p>
        </div>}
      </Dialog.Content></Dialog.Portal>
  </Dialog.Root>;
}
