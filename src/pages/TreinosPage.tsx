import React from 'react';
import {
  RotateCcw,
  BookMarked,
  PenTool,
  FileText,
  ArrowRight,
  CheckCircle2,
  Dumbbell,
} from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { getItensPendentesRevisao } from '../domain/leitner';
import { getItensCadernoErros } from '../domain/cadernoErros';
import { Button } from '../components/common/Button';
import { IllustrationDiscursiva } from '../components/illustrations/ContextualIllustrations';
import { EmblemaM8 } from '../components/illustrations/ModuleEmblems';

export const TreinosPage: React.FC = () => {
  const {
    leitnerDeck,
    checkpointsRespondidos,
    historicoSimulados,
    modulosLidosIds,
  } = useProgressStore();

  const { setActiveView } = useNavigationStore();

  const todayIso = new Date().toISOString().split('T')[0];
  const deckList = Object.values(leitnerDeck || {});
  const pendentesHoje = getItensPendentesRevisao(deckList, todayIso);

  const itensErros = getItensCadernoErros(
    checkpointsRespondidos || {},
    historicoSimulados || []
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      {/* Cabeçalho */}
      <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-2">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
            <Dumbbell className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink">
              Hub de Treinos e Recuperação Ativa
            </h1>
            <p className="text-xs sm:text-sm text-ink-2">
              Prática deliberada: repetição espaçada, superação de erros e ferramentas de retenção de longo prazo.
            </p>
          </div>
        </div>
      </div>

      {/* Grade de Cartões de Treino (Regra F.1) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 1. REVISÃO DO DIA (LEITNER) */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-editorial-sm flex flex-col justify-between gap-5 relative overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-surface-2 border border-border text-ink">
                {pendentesHoje.length} ite{pendentesHoje.length !== 1 ? 'ns' : 'm'} hoje
              </span>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-ink">Revisão do Dia</h2>
              <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                Algoritmo de repetição espaçada por Caixas de Leitner. Revisa apenas os conceitos que alcançaram sua janela de esquecimento para consolidar na memória de longo prazo.
              </p>
            </div>

            {pendentesHoje.length === 0 ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Nenhuma revisão pendente para hoje. Sua retenção está em dia!</span>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-surface-2/40 border border-border text-xs text-ink-2 flex items-center justify-between">
                <span>Itens com vencimento hoje:</span>
                <span className="font-mono font-bold text-ink">{pendentesHoje.length}</span>
              </div>
            )}
          </div>

          <Button
            variant="primary"
            size="md"
            disabled={pendentesHoje.length === 0}
            onClick={() => setActiveView('painel')}
            className="w-full flex items-center justify-center gap-2"
          >
            <span>Iniciar Revisão Espaçada</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 2. CADERNO DE ERROS */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-editorial-sm flex flex-col justify-between gap-5 relative overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <BookMarked className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
                {itensErros.length} falha{itensErros.length !== 1 ? 's' : ''} ativa{itensErros.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-ink">Caderno de Erros</h2>
              <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                Repositório de todas as assertivas incorretas em verificações e simulados, acompanhadas de justificativa e armadilha da banca para erradicação definitiva de pontos cegos.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-surface-2/40 border border-border text-xs text-ink-2 flex items-center justify-between">
              <span>Assertivas pendentes de reteste:</span>
              <span className="font-mono font-bold text-ink">{itensErros.length}</span>
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={() => setActiveView('caderno-erros')}
            className="w-full flex items-center justify-center gap-2"
          >
            <span>Abrir Caderno de Erros</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 3. DISCURSIVA COM IA CEBRASPE */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-editorial-sm flex flex-col justify-between gap-5 relative overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <PenTool className="w-5 h-5" />
                </div>
                <IllustrationDiscursiva width={38} height={30} className="text-purple-600/70 dark:text-purple-400/70 hidden sm:block" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                Banca Cebraspe IA
              </span>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-ink">Avaliador Cebraspe de Discursiva</h2>
              <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                Ambiente de redação com correção automatizada pela fórmula oficial Cebraspe NC = NCP - 2×(NE/TL), espelho preliminar de notas, auditoria gramatical por linha e reescrita padrão ouro.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 text-[11px] text-purple-900 dark:text-purple-300">
              <span className="font-semibold">Temas oficiais disponíveis: </span>
              <span>Desbastamento (Vergueiro), RDA/IFLA LRM, LAI e Peça Técnica OAIS (50L).</span>
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={() => setActiveView('discursiva')}
            className="w-full flex items-center justify-center gap-2 border-purple-300 dark:border-purple-800 text-purple-800 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/30"
          >
            <span>Abrir Laboratório de Discursiva</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 4. FOLHA DE VÉSPERA */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-editorial-sm flex flex-col justify-between gap-5 relative overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <EmblemaM8 size={32} className="text-emerald-600/70 dark:text-emerald-400/70 hidden sm:block" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-surface-2 border border-border text-ink">
                {modulosLidosIds.length} módulos concluídos
              </span>
            </div>

            <div>
              <h2 className="text-lg font-serif font-bold text-ink">Folha de Véspera</h2>
              <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                Resumo hiperdenso de revisão final gerado dinamicamente e exclusivamente com base no conteúdo dos módulos que você concluiu na plataforma.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-surface-2/40 border border-border text-xs text-ink-2 flex items-center justify-between">
              <span>Pronto para impressão / PDF (formato A4)</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">Ativo</span>
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={() => setActiveView('folha-vespera')}
            className="w-full flex items-center justify-center gap-2"
          >
            <span>Abrir Folha de Véspera</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
