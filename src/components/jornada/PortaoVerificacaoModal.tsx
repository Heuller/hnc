import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  X,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Award,
  AlertTriangle,
} from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { useNavigationStore } from '../../store/useNavigationStore';
import { COURSE_REGISTRY } from '../../content/registry';
import { getModuleTheme } from '../../domain/moduleThemes';
import { JORNADA_CONFIG, getDescricaoLimiar } from '../../config/jornada.config';
import {
  criarTentativaRegistro,
  type RespostaTentativa,
  type TipoTentativa,
} from '../../domain/tentativas';
import { Button } from '../common/Button';
import { selecionarItensPortal, type ItemCandidatoPortal } from '../../domain/portalRevisao';
import { SIMULADOS_REGISTRY } from '../../content/simuladosRegistry';
import {
  IllustrationPortal,
  IllustrationConclusao,
  IllustrationBloqueio,
} from '../illustrations/ContextualIllustrations';
import { obterItensVerificacaoSubmodulo } from '../../domain/progressoEngine';

interface PortaoVerificacaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  etapaId: string; // Ex: '1.1', 'desafio-m1', 'portal-m2'
}

interface ItemQuiz {
  id: string;
  pergunta?: string;
  assertiva: string;
  gabarito: 'C' | 'E';
  justificativa: string;
  armadilhaBanca?: string;
  secaoId?: string;
}

export const PortaoVerificacaoModal: React.FC<PortaoVerificacaoModalProps> = ({
  isOpen,
  onClose,
  etapaId,
}) => {
  const {
    getJornadaState,
    adicionarTentativa,
    reabrirSecaoAposFalha,
    leitnerDeck,
    modoLivre,
    checkpointsRespondidos,
    obterPrimeiraTentativa,
    adicionarItemAttempt,
  } = useProgressStore();

  const { setSelectedSubmodule, setActiveView } = useNavigationStore();

  const [fase, setFase] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, 'C' | 'E' | 'BRANCO'>>({});
  const [tentativaRecente, setTentativaRecente] = useState<any | null>(null);

  const jornada = getJornadaState();
  const etapa = jornada.etapas[etapaId];

  // Recupera o tema visual do módulo
  const moduleTheme = useMemo(() => {
    return etapa ? getModuleTheme(etapa.moduloId) : getModuleTheme('m1');
  }, [etapa]);

  // Monta o banco de itens para esta etapa (usando a engine canônica para submódulos - Regra 1.3 e 1.6)
  const itensParaQuiz: ItemQuiz[] = useMemo(() => {
    if (!etapa) return [];

    if (etapa.tipo === 'submodulo') {
      const allSubs = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
      const sub = allSubs.find((s) => s.numero === etapa.id || s.id === etapa.id);
      if (!sub) return [];

      const listaItens = obterItensVerificacaoSubmodulo(sub, etapa.moduloId);
      return listaItens.map((it) => ({
        id: it.id,
        pergunta: `Item de Verificação · Submódulo ${it.submoduloNumero}`,
        assertiva: it.texto,
        gabarito: it.gabarito,
        justificativa: it.justificativa || 'Assertiva formulada de acordo com as normas e literatura canônica.',
        secaoId: 'sec-checkpoints',
      }));
    }

    if (etapa.tipo === 'desafio_modulo') {
      // Utiliza o caderno oficial de 100 itens Cebraspe do módulo se disponível (M1 a M10)
      const simulado = SIMULADOS_REGISTRY.find((s) => s.numero === etapa.moduloNumero);
      if (simulado && simulado.questoes.length > 0) {
        return simulado.questoes.map((q) => ({
          id: q.id,
          pergunta: `Item ${q.numero} · Submódulo ${q.submoduloId}`,
          assertiva: q.item,
          gabarito: q.gabarito,
          justificativa: q.justificativa,
          armadilhaBanca: q.armadilhaBanca,
          secaoId: 'sec-teoria',
        }));
      }

      // Para outros módulos complementares (M11 a M13), consolida as questões dos submódulos
      const macro = COURSE_REGISTRY.find((m) => m.numero === etapa.moduloNumero);
      const list: ItemQuiz[] = [];
      if (macro) {
        for (const sub of macro.modulosFilhos) {
          for (const cp of sub.checkpoints || []) {
            list.push({
              id: cp.id,
              pergunta: `${sub.numero} · ${cp.pergunta}`,
              assertiva: cp.item,
              gabarito: cp.gabarito,
              justificativa: cp.justificativa,
              secaoId: 'sec-checkpoints',
            });
          }
        }
      }
      return list;
    }

    if (etapa.tipo === 'portal_revisao') {
      // Gera os 20 itens selecionados e balanceados pelo motor do Portal
      const todosCandidatos: ItemCandidatoPortal[] = [];
      for (const m of COURSE_REGISTRY) {
        const num = m.numero;
        for (const s of m.modulosFilhos) {
          for (const cp of s.checkpoints || []) {
            todosCandidatos.push({
              id: cp.id,
              moduloNumero: num,
              moduloId: m.id,
              submoduloId: s.numero,
              assertiva: cp.item,
              gabarito: cp.gabarito,
              justificativa: cp.justificativa,
              secaoId: 'sec-checkpoints',
            });
          }
        }
      }

      const res = selecionarItensPortal({
        moduloAlvoNumero: etapa.moduloNumero,
        bancoItens: todosCandidatos,
        leitnerDeck: leitnerDeck || {},
        dataAtualIso: new Date().toISOString().split('T')[0],
      });

      return res.itens.map((it) => ({
        id: it.id,
        pergunta: `Portal P(${etapa.moduloNumero}) · Módulo ${it.moduloNumero}`,
        assertiva: it.assertiva,
        gabarito: it.gabarito,
        justificativa: it.justificativa,
        armadilhaBanca: it.armadilhaBanca,
        secaoId: it.secaoId,
      }));
    }

    return [];
  }, [etapa, leitnerDeck]);

  // Carrega respostas já dadas na Teoria ou em outros contextos (Regra 1.1 e 1.3)
  useEffect(() => {
    if (isOpen && itensParaQuiz.length > 0) {
      const respostasIniciais: Record<string, 'C' | 'E' | 'BRANCO'> = {};
      for (const it of itensParaQuiz) {
        const tentativa = obterPrimeiraTentativa(it.id);
        if (tentativa) {
          respostasIniciais[it.id] = tentativa.resposta;
        } else if (checkpointsRespondidos && checkpointsRespondidos[it.id]) {
          respostasIniciais[it.id] = checkpointsRespondidos[it.id];
        }
      }
      setRespostas((prev) => ({ ...respostasIniciais, ...prev }));
    }
  }, [isOpen, itensParaQuiz, obterPrimeiraTentativa, checkpointsRespondidos]);

  if (!isOpen || !etapa) return null;

  const currentItem = itensParaQuiz[currentIndex];
  const totalItens = itensParaQuiz.length;

  const handleResponder = async (resposta: 'C' | 'E' | 'BRANCO') => {
    if (!currentItem) return;
    setRespostas((prev) => ({ ...prev, [currentItem.id]: resposta }));

    // Sincroniza atômica e imediatamente com a Fonte Única de Respostas (Regra 1.1)
    await adicionarItemAttempt({
      itemId: currentItem.id,
      submoduloId: etapa.tipo === 'submodulo' ? etapa.id : '1.1',
      moduloId: etapa.moduloId,
      contexto:
        etapa.tipo === 'submodulo'
          ? 'jornada'
          : etapa.tipo === 'desafio_modulo'
          ? 'simulado'
          : 'portal',
      resposta,
      gabarito: currentItem.gabarito,
    });
  };

  const handleProximo = () => {
    if (currentIndex < totalItens - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finalizarTentativa();
    }
  };

  const handleAnterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const finalizarTentativa = async () => {
    const mapaRespostas: Record<string, RespostaTentativa> = {};

    for (const it of itensParaQuiz) {
      const resp = respostas[it.id] || 'BRANCO';
      const acertou = resp === it.gabarito;
      mapaRespostas[it.id] = {
        questionId: it.id,
        resposta: resp,
        gabarito: it.gabarito,
        acertou,
        secaoId: it.secaoId || 'sec-teoria',
        texto: it.assertiva,
      };
    }

    const tipo: TipoTentativa =
      etapa.tipo === 'submodulo'
        ? 'verificacao_submodulo'
        : etapa.tipo === 'desafio_modulo'
        ? 'desafio_modulo'
        : 'portal_revisao';

    const novaTentativa = criarTentativaRegistro({
      userId: 'usuario-logado',
      tipo,
      targetId: etapa.id,
      moduloId: etapa.moduloId,
      totalItens: totalItens > 0 ? totalItens : etapa.totalItens,
      respostas: mapaRespostas,
      foraDaTrilha: modoLivre,
    });

    await adicionarTentativa(novaTentativa);
    setTentativaRecente(novaTentativa);
    setFase('result');
  };

  const handleRevisarSecao = (secaoId: string) => {
    reabrirSecaoAposFalha(etapa.id, secaoId);
    setSelectedSubmodule(etapa.id);
    setActiveView('teoria');
    onClose();
  };

  const handleReiniciar = () => {
    setRespostas({});
    setCurrentIndex(0);
    setTentativaRecente(null);
    setFase('quiz');
  };

  // Avaliação do resultado após o quiz (usa tentativa recém-calculada ou do store)
  const ultimaTentativa = tentativaRecente || etapa.ultimaTentativa;
  const isAprovado = ultimaTentativa?.aprovado ?? false;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/65 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portao-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-editorial-lg overflow-hidden my-auto flex flex-col max-h-[90vh]"
      >
        {/* Top bar com badge do módulo e botão fechar */}
        <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between gap-3 bg-surface-2/40 shrink-0">
          <div className="flex items-center gap-2.5">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono border"
              style={{
                backgroundColor: `${moduleTheme.primaryColor}15`,
                borderColor: `${moduleTheme.primaryColor}30`,
                color: moduleTheme.primaryColor,
              }}
            >
              M{etapa.moduloNumero}
            </span>
            <div>
              <h2 id="portao-modal-title" className="text-base font-serif font-bold text-ink truncate">
                {etapa.titulo}
              </h2>
              <p className="text-[11px] text-ink-2 font-mono">
                {etapa.tipo === 'submodulo'
                  ? 'Verificação de Domínio'
                  : etapa.tipo === 'desafio_modulo'
                  ? 'Desafio do Módulo'
                  : 'Portal de Revisão'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FASE 1: INTRODUÇÃO E REGRAS */}
        {fase === 'intro' && (
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto scrollbar-thin">
            {/* Vinheta Editorial da Etapa */}
            <div className="flex flex-col items-center justify-center py-1 text-accent">
              {etapa.tipo === 'portal_revisao' ? (
                <IllustrationPortal width={130} height={95} ariaLabel="Portal de Revisão Cumulativa" />
              ) : (
                <IllustrationConclusao width={90} height={90} ariaLabel="Verificação de Domínio" />
              )}
            </div>

            {/* Aviso de bloqueio por falta de itens aprovados (Regra D.2) */}
            {etapa.bloqueioPorFaltaDeItens?.bloqueado && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-amber-800 dark:text-amber-200">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-xs uppercase tracking-wide">
                    Itens Aprovados Insuficientes ({etapa.bloqueioPorFaltaDeItens.totalItensAprovados}/
                    {JORNADA_CONFIG.nMinimoVerificacao})
                  </h3>
                  <p className="text-xs leading-relaxed">
                    {etapa.bloqueioPorFaltaDeItens.mensagem}
                  </p>
                </div>
              </div>
            )}

            {/* Aviso de Revisão Dirigida com seções pendentes (Regra D.3) */}
            {etapa.revisaoDirigida && !etapa.revisaoDirigida.podeRefazer && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 space-y-3">
                <div className="flex items-start gap-2.5 text-rose-700 dark:text-rose-300">
                  <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-xs uppercase tracking-wide">
                      Revisão Dirigida Obrigatória
                    </h3>
                    <p className="text-xs leading-relaxed">
                      Para habilitar uma nova tentativa, você precisa reabrir e revisar os tópicos
                      onde errou itens anteriormente:
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {etapa.revisaoDirigida.secoesPendentesRevisao.map((secId) => (
                    <button
                      key={secId}
                      type="button"
                      onClick={() => handleRevisarSecao(secId)}
                      className="px-2.5 py-1.5 rounded-lg bg-surface border border-rose-300 dark:border-rose-800 text-xs font-medium text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Revisar seção: {secId.replace('sec-', '')}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sugestão de releitura após 3 reprovações seguidas (Regra D.3) */}
            {etapa.revisaoDirigida?.sugerirReleitura && (
              <div className="p-3.5 rounded-xl bg-surface-2 border border-border flex items-start gap-2.5 text-ink-2">
                <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-ink-2" />
                <p className="text-xs leading-relaxed">
                  {etapa.revisaoDirigida.mensagemSugerirReleitura}
                </p>
              </div>
            )}

            {/* Cartão explicativo da régua em itens inteiros (Regra D.2) */}
            <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-3">
              <h3 className="font-serif font-bold text-sm text-ink">
                Critérios de Avaliação (Cebraspe)
              </h3>
              <ul className="space-y-2 text-xs text-ink-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>
                    <strong className="text-ink">Regra de Domínio:</strong>{' '}
                    {getDescricaoLimiar(totalItens > 0 ? totalItens : etapa.totalItens)} (aproveitamento ≥ 85%).
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>
                    <strong className="text-ink">Fator Cebraspe:</strong> 1 erro anula 1 acerto (calculado e apresentado à parte como nota líquida C − E).
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>
                    <strong className="text-ink">Tentativas:</strong> Ilimitadas, com composição e rotação de itens a cada execução.
                  </span>
                </li>
              </ul>
            </div>

            {/* Rodapé com botão de iniciar */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <Button variant="ghost" size="md" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                variant="primary"
                size="md"
                disabled={
                  (etapa.revisaoDirigida && !etapa.revisaoDirigida.podeRefazer) ||
                  totalItens === 0
                }
                onClick={() => setFase('quiz')}
                className="flex items-center gap-2"
              >
                <span>Iniciar Verificação</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* FASE 2: QUIZ INTERATIVO */}
        {fase === 'quiz' && currentItem && (
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto scrollbar-thin flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Barra de progresso */}
              <div className="flex items-center justify-between text-xs text-ink-2 font-mono">
                <span>
                  Item {currentIndex + 1} de {totalItens}
                </span>
                <span>
                  {Math.round(((currentIndex + 1) / totalItens) * 100)}% concluído
                </span>
              </div>
              <div className="w-full h-1.5 bg-surface-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-200"
                  style={{ width: `${((currentIndex + 1) / totalItens) * 100}%` }}
                />
              </div>

              {/* Enunciado do Item */}
              <div className="p-4 sm:p-5 rounded-xl bg-surface-2/30 border border-border space-y-2">
                {currentItem.pergunta && (
                  <span className="text-[11px] font-mono text-accent font-semibold tracking-wider uppercase block">
                    {currentItem.pergunta}
                  </span>
                )}
                <p className="text-sm sm:text-base text-ink font-serif leading-relaxed">
                  {currentItem.assertiva}
                </p>
              </div>

              {/* Seleção de Resposta Cebraspe */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleResponder('C')}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    respostas[currentItem.id] === 'C'
                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : 'bg-surface hover:bg-surface-2 border-border text-ink'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>CERTO</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleResponder('E')}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    respostas[currentItem.id] === 'E'
                      ? 'bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300 shadow-2xs'
                      : 'bg-surface hover:bg-surface-2 border-border text-ink'
                  }`}
                >
                  <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>ERRADO</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleResponder('BRANCO')}
                  className={`p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    respostas[currentItem.id] === 'BRANCO'
                      ? 'bg-ink/10 border-ink-2 text-ink'
                      : 'bg-surface hover:bg-surface-2 border-border text-ink-2'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>EM BRANCO</span>
                </button>
              </div>

              {/* Feedback Imediato com Estudo Reverso */}
              {respostas[currentItem.id] && (
                <div className="p-4 rounded-xl border border-border bg-surface-2/40 space-y-3 animate-fadeIn text-xs" aria-live="polite">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      {respostas[currentItem.id] === 'BRANCO' ? (
                        <>
                          <HelpCircle className="w-4 h-4 text-ink-2" />
                          <span className="font-bold text-ink">Item deixado em branco (0 pontos)</span>
                        </>
                      ) : respostas[currentItem.id] === currentItem.gabarito ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-bold text-emerald-700 dark:text-emerald-300">
                            Você acertou! (+1 ponto líquido Cebraspe)
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                          <span className="font-bold text-rose-700 dark:text-rose-300">
                            Você errou! (-1 ponto líquido: anula uma questão certa)
                          </span>
                        </>
                      )}
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] ${
                        currentItem.gabarito === 'C'
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      Gabarito: {currentItem.gabarito === 'C' ? 'CERTO' : 'ERRADO'}
                    </span>
                  </div>

                  {/* Armadilha da Banca */}
                  {currentItem.armadilhaBanca && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/25 space-y-1 text-amber-800 dark:text-amber-200">
                      <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wide text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>Armadilha Cebraspe Identificada</span>
                      </div>
                      <p className="leading-relaxed font-sans">{currentItem.armadilhaBanca}</p>
                    </div>
                  )}

                  {/* Justificativa Técnica */}
                  <div className="p-3 rounded-lg bg-surface border border-border/80 space-y-1 text-ink">
                    <span className="font-bold text-[11px] uppercase tracking-wide text-ink-2 block">
                      Justificativa e Fundamentação Técnica
                    </span>
                    <p className="font-serif leading-relaxed text-xs sm:text-[13px]">{currentItem.justificativa}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Navegação entre itens */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleAnterior}
                disabled={currentIndex === 0}
              >
                Anterior
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={handleProximo}
                disabled={!respostas[currentItem.id]}
                className="flex items-center gap-1.5"
              >
                <span>{currentIndex === totalItens - 1 ? 'Finalizar' : 'Próximo'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* FASE 3: RESULTADO E REVISÃO DIRIGIDA */}
        {fase === 'result' && ultimaTentativa && (
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto scrollbar-thin">
            {/* Carimbo de Conclusão ou Aviso de Revisão Dirigida (Regra E.4) */}
            <div className="text-center space-y-3 py-2">
              <div className="flex justify-center mb-1">
                {isAprovado ? (
                  <IllustrationConclusao width={100} height={100} className="text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <IllustrationBloqueio width={95} height={80} className="text-amber-600 dark:text-amber-400" />
                )}
              </div>
              {isAprovado ? (
                <div className="inline-flex flex-col items-center gap-2">
                  <div
                    className="px-4 py-1.5 rounded-full border-2 text-xs font-bold font-mono tracking-widest uppercase flex items-center gap-2"
                    style={{
                      borderColor: moduleTheme.primaryColor,
                      color: moduleTheme.primaryColor,
                      backgroundColor: `${moduleTheme.primaryColor}10`,
                    }}
                  >
                    <Award className="w-4 h-4" />
                    <span>DOMÍNIO COMPROVADO · CONCLUÍDO</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-ink">
                    Parabéns! Etapa Concluída com Sucesso
                  </h3>
                </div>
              ) : (
                <div className="inline-flex flex-col items-center gap-2">
                  <div className="px-4 py-1.5 rounded-full border-2 border-amber-500 text-amber-700 dark:text-amber-300 bg-amber-500/10 text-xs font-bold font-mono tracking-widest uppercase flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    <span>EM REVISÃO DIRIGIDA</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-ink">
                    Aproveitamento abaixo do limiar de 85%
                  </h3>
                </div>
              )}
            </div>

            {/* Painel de Métricas */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-surface-2/40 border border-border">
                <span className="text-[11px] font-mono text-ink-2 uppercase block">Acertos</span>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {ultimaTentativa.acertos} / {ultimaTentativa.totalItens}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-surface-2/40 border border-border">
                <span className="text-[11px] font-mono text-ink-2 uppercase block">Aproveitamento</span>
                <span className="text-lg font-bold text-ink">
                  {Math.round(ultimaTentativa.aproveitamento * 100)}%
                </span>
              </div>
              <div className="p-3 rounded-xl bg-surface-2/40 border border-border">
                <span className="text-[11px] font-mono text-ink-2 uppercase block">Nota Líquida (C - E)</span>
                <span className="text-lg font-bold text-accent">
                  {ultimaTentativa.notaLiquida} pts
                </span>
              </div>
            </div>

            {/* Lista de itens errados para Revisão Dirigida */}
            {!isAprovado && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-semibold uppercase text-ink-2 tracking-wide">
                  Itens com Incorreções ({ultimaTentativa.erros} erro{ultimaTentativa.erros !== 1 ? 's' : ''})
                </h4>
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
                  {(Object.values(ultimaTentativa.respostas) as RespostaTentativa[])
                    .filter((r) => !r.acertou)
                    .map((item, idx) => (
                      <div
                        key={item.questionId || idx}
                        className="p-3 rounded-xl bg-surface-2/30 border border-border space-y-1.5 text-xs"
                      >
                        <div className="flex items-center justify-between font-mono text-[10px]">
                          <span className="text-rose-600 dark:text-rose-400 font-semibold">
                            Sua Resposta: {item.resposta === 'BRANCO' ? 'Em Branco' : item.resposta === 'C' ? 'Certo' : 'Errado'}
                          </span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            Gabarito: {item.gabarito === 'C' ? 'CERTO' : 'ERRADO'}
                          </span>
                        </div>
                        {item.texto && <p className="text-ink font-serif">{item.texto}</p>}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Ações finais */}
            <div className="pt-3 border-t border-border flex items-center justify-end gap-3">
              {!isAprovado ? (
                <>
                  <Button variant="ghost" size="md" onClick={onClose}>
                    Fechar
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleReiniciar}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Tentar Novamente</span>
                  </Button>
                </>
              ) : (
                <Button variant="primary" size="md" onClick={onClose}>
                  Continuar na Jornada
                </Button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
