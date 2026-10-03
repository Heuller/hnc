import React, { useEffect } from 'react';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { COURSE_REGISTRY } from '../content/registry';
import { CONCURSO_CONFIG } from '../config/concurso.config';
import {
  getCheckpointsTotalCurso,
  getCheckpointsFeitosCurso,
  getCursoProgressoPercent,
} from '../domain/metrics';
import {
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  RotateCcw,
  BookMarked,
  Zap,
  Compass,
  PenTool,
  BookOpen,
  HelpCircle,
} from 'lucide-react';

import { getModuleTheme } from '../domain/moduleThemes';
import { ModuleBadge } from '../components/common/ModuleBadge';
import { getItensPendentesRevisao } from '../domain/leitner';
import { getItensCadernoErros } from '../domain/cadernoErros';
import { useDicionarioStore } from '../store/useDicionarioStore';
import { IllustrationLogin, IllustrationVazio } from '../components/illustrations/ContextualIllustrations';

export const PainelPage: React.FC = () => {
  const {
    constancia,
    modulosLidosIds,
    checkpointsRespondidos,
    leitnerDeck,
    historicoSimulados,
    registrarAcessoHoje,
    getJornadaState,
  } = useProgressStore();

  const { setCurrentRoute, setSelectedSubmodule } = useNavigationStore();

  useEffect(() => {
    registrarAcessoHoje();
  }, [registrarAcessoHoje]);

  // Estatísticas Globais Derivadas de Específicos e Geral
  const allSubmodules = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
  const totalSubmodulosGlobal = allSubmodules.length;
  const submodulosGlobalLidos = allSubmodules.filter((s) =>
    modulosLidosIds.includes(s.id)
  ).length;
  const progressoGlobalPercent = getCursoProgressoPercent(COURSE_REGISTRY, modulosLidosIds);
  const totalCheckpointsGlobal = getCheckpointsTotalCurso(COURSE_REGISTRY);
  const totalCheckpointsFeitos = getCheckpointsFeitosCurso(COURSE_REGISTRY, checkpointsRespondidos);

  // Repetição Espaçada (Sistema Leitner)
  const todayIso = new Date().toISOString().split('T')[0];
  const deckList = Object.values(leitnerDeck || {});
  const pendentesHoje = getItensPendentesRevisao(deckList, todayIso);

  // Caderno de Erros
  const itensErros = getItensCadernoErros(checkpointsRespondidos || {}, historicoSimulados || []);
  const totalErrosAtivos = itensErros.length;

  // Estado da Jornada e Próximo Passo
  const jornadaState = getJornadaState();
  const { proximoPasso, metricas } = jornadaState;
  const targetTheme = getModuleTheme(`m${proximoPasso?.moduloNumero || 1}`);

  // Histórico de constância dos últimos 7 dias (Sóbrio, sem confetes)
  const ultimos7DiasArray: { data: string; ativo: boolean; label: string }[] = [];
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayLabel = diasSemana[d.getDay()];
    ultimos7DiasArray.push({
      data: dateStr,
      ativo: constancia.historicoUltimos7Dias.includes(dateStr),
      label: dayLabel,
    });
  }

  // Data formatada para o cabeçalho "Hoje"
  const dataHojeExtenso = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  const handleExecutarAcaoPrincipal = () => {
    if (proximoPasso?.tipo === 'submodulo') {
      setSelectedSubmodule(proximoPasso.etapaId);
      setCurrentRoute('teoria');
    } else {
      setCurrentRoute('jornada');
    }
  };

  return (
    <div className="space-y-7 animate-fadeIn max-w-5xl mx-auto select-none">
      {/* CABEÇALHO DO PAINEL "HOJE" (Regras C5, C6 e U.3) */}
      <section className="border-b border-border pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs text-accent font-semibold tracking-wide capitalize">
              {dataHojeExtenso}
            </span>
            <span className="text-border">•</span>
            <span className="font-sans text-xs text-ink-2">
              {CONCURSO_CONFIG.instituicao.nome} · {CONCURSO_CONFIG.cargo.titulo}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink tracking-tight">
            Hoje · Sessão de Estudos
          </h1>

          <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
            Plano diário de estudos com revisões programadas e avanço contínuo na trilha.
          </p>
        </div>

        <div className="hidden md:block w-32 shrink-0 text-accent opacity-80 dark:opacity-70">
          <IllustrationLogin width="100%" height="auto" aria-hidden="true" />
        </div>
      </section>

      {/* BLOCO HERÓI: CONTINUAR DE ONDE PAROU (Regra U.3 e C4) */}
      <section aria-labelledby="heroi-continuar-title">
        <div className="bg-surface rounded-2xl border border-border p-6 shadow-editorial-sm relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: targetTheme.solidVar }}
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2">
                <ModuleBadge moduleId={targetTheme.id} size="sm" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-ink-2">
                  Próxima Ação Recomendada
                </span>
                <span
                  className="text-[10px] font-sans font-bold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${targetTheme.solidVar}15`,
                    color: targetTheme.solidVar,
                  }}
                >
                  Módulo {proximoPasso?.moduloNumero || 1}
                </span>
              </div>

              <h2 id="heroi-continuar-title" className="text-xl sm:text-2xl font-serif font-bold text-ink leading-snug">
                {proximoPasso?.titulo || 'Módulo 1.1 · Fundamentos da Biblioteconomia'}
              </h2>

              <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
                {proximoPasso?.tipo === 'submodulo'
                  ? 'Texto canônico estruturado com autores clássicos, alertas de distratores da banca e micro-checkpoints formativos.'
                  : proximoPasso?.tipo === 'desafio_modulo'
                  ? 'Simulado de consolidação com 100 itens inéditos no padrão Cebraspe (mínimo de 85 acertos).'
                  : 'Portal de retenção cumulativa com 20 itens sobre módulos anteriores.'}
              </p>

              <div className="flex items-center gap-4 text-xs font-sans text-ink-2 pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>Sessão estimada: ~25 min</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-accent" />
                  <span>Trilha de Domínio Cebraspe</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
              <button
                type="button"
                onClick={handleExecutarAcaoPrincipal}
                className="py-3 px-6 rounded-xl font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 active:scale-98 transition-all shadow-editorial-sm cursor-pointer"
                style={{
                  backgroundColor: targetTheme.solidVar,
                  color: targetTheme.textVar,
                }}
              >
                <span>
                  {proximoPasso?.status === 'em_revisao_dirigida'
                    ? 'Revisar Tópicos Pendentes'
                    : proximoPasso?.tipo === 'submodulo'
                    ? 'Continuar Leitura'
                    : 'Iniciar Verificação'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setCurrentRoute('jornada')}
                className="py-2.5 px-4 rounded-xl font-sans text-xs text-ink-2 hover:text-ink hover:bg-surface-2 border border-border transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Ver Mapa Completo da Jornada</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE CARDS MENORES: REVISÃO DO DIA, CONSTÂNCIA E RESUMO DA JORNADA (Regra U.3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Bloco 1: Revisão do Dia (Leitner) */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-sans text-ink-2">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Revisão do Dia</span>
              <Calendar className="w-4 h-4 text-accent" />
            </div>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-3xl font-sans font-bold tabular-nums text-ink">
                {pendentesHoje.length}
              </span>
              <span className="text-xs text-ink-2 font-sans">
                {pendentesHoje.length === 1 ? 'item vencido para hoje' : 'itens vencidos para hoje'}
              </span>
            </div>

            {pendentesHoje.length === 0 ? (
              <div className="py-2 text-center">
                <IllustrationVazio width={70} height={45} className="mx-auto text-ink-2 opacity-60" ariaLabel="Sem revisões pendentes hoje" />
                <p className="text-xs text-ink-2 font-serif mt-1">
                  Retenção em dia. Nenhum cartão venceu hoje.
                </p>
              </div>
            ) : (
              <p className="text-xs text-ink-2 font-serif leading-relaxed">
                Cartões ativos na curva de esquecimento. Pratique a recuperação espaçada.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setCurrentRoute('treinos')}
            className="w-full mt-4 py-2 px-3 rounded-lg bg-surface-2 hover:bg-surface-3 border border-border text-ink hover:border-accent font-sans font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-accent" />
            <span>{pendentesHoje.length > 0 ? 'Iniciar Sessão de Revisão' : 'Abrir Treinos'}</span>
          </button>
        </div>

        {/* Bloco 2: Constância de Estudo (Mapa de calor sóbrio, sem confetes) */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-sans text-ink-2">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Constância</span>
              <span className="text-xs font-sans font-bold tabular-nums text-accent">
                {constancia.diasConsecutivos} {constancia.diasConsecutivos === 1 ? 'dia ativo' : 'dias ativos'}
              </span>
            </div>

            <p className="text-xs text-ink-2 font-serif leading-relaxed">
              Histórico de dedicação dos últimos 7 dias. O estudo diário espaçado maximiza a consolidação mnemônica.
            </p>

            <div className="grid grid-cols-7 gap-1.5 pt-2 border-t border-border">
              {ultimos7DiasArray.map((dia, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-sans text-ink-2">{dia.label}</span>
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center border transition-colors ${
                      dia.ativo
                        ? 'bg-ok-soft border-ok text-ok'
                        : 'bg-surface-2 border-border text-ink-2/40'
                    }`}
                    title={dia.data}
                  >
                    {dia.ativo ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-ink-2 font-sans pt-2 text-center">
            Meta diária: ao menos 1 sessão curta concluída
          </div>
        </div>

        {/* Bloco 3: Miniatura da Jornada */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-sans text-ink-2">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Trilha da Jornada</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold bg-ok-soft text-ok border border-ok/30">
                {metricas.taxaDominioPercent}% Domínio
              </span>
            </div>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-3xl font-sans font-bold tabular-nums text-ink">
                {metricas.etapasConcluidas}
              </span>
              <span className="text-xs font-sans text-ink-2">/ {metricas.totalEtapas} etapas concluídas</span>
            </div>

            <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden border border-border mt-1">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${metricas.taxaDominioPercent}%` }}
              />
            </div>

            <p className="text-xs text-ink-2 font-serif pt-1">
              Prontidão global calculada:{' '}
              <strong className="text-ink font-sans font-semibold tabular-nums">
                {metricas.prontidaoPercent}%
              </strong>
            </p>
          </div>

          <button
            type="button"
            onClick={() => setCurrentRoute('jornada')}
            className="w-full mt-4 py-2 px-3 rounded-lg bg-surface-2 hover:bg-surface-3 border border-border text-ink hover:border-accent font-sans font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>Abrir Trilha de Domínio</span>
          </button>
        </div>
      </div>

      {/* ATALHOS COMPACTOS (Caderno de Erros, Folha de Véspera, Discursiva e Dicionário - Regra U.3) */}
      <section aria-labelledby="atalhos-title" className="space-y-3">
        <h3 id="atalhos-title" className="text-xs font-sans font-semibold uppercase tracking-wider text-ink-2">
          Ferramentas de Apoio
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Atalho 1: Caderno de Erros */}
          <button
            type="button"
            onClick={() => setCurrentRoute('caderno-erros')}
            className="p-3.5 rounded-xl bg-surface hover:bg-surface-2/60 border border-border hover:border-err/40 transition-all text-left flex items-center gap-3 cursor-pointer group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-err-soft text-err border border-err/20 flex items-center justify-center shrink-0">
              <BookMarked className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-sans font-bold text-ink text-xs truncate">Caderno de Erros</span>
                <span className="text-[10px] font-sans font-semibold text-err tabular-nums">
                  {totalErrosAtivos}
                </span>
              </div>
              <span className="text-[11px] text-ink-2 font-serif truncate block">
                Itens errados para refazer
              </span>
            </div>
          </button>

          {/* Atalho 2: Folha de Véspera */}
          <button
            type="button"
            onClick={() => setCurrentRoute('folha-vespera')}
            className="p-3.5 rounded-xl bg-surface hover:bg-surface-2/60 border border-border hover:border-accent/40 transition-all text-left flex items-center gap-3 cursor-pointer group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent border border-accent/20 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-sans font-bold text-ink text-xs block truncate">Folha de Véspera</span>
              <span className="text-[11px] text-ink-2 font-serif truncate block">
                Síntese esquemática 48h
              </span>
            </div>
          </button>

          {/* Atalho 3: Treino Discursivo */}
          <button
            type="button"
            onClick={() => setCurrentRoute('discursiva')}
            className="p-3.5 rounded-xl bg-surface hover:bg-surface-2/60 border border-border hover:border-accent/40 transition-all text-left flex items-center gap-3 cursor-pointer group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-surface-2 text-ink border border-border flex items-center justify-center shrink-0">
              <PenTool className="w-4 h-4 text-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-sans font-bold text-ink text-xs block truncate">Discursiva</span>
              <span className="text-[11px] text-ink-2 font-serif truncate block">
                Padrão espelho Cebraspe
              </span>
            </div>
          </button>

          {/* Atalho 4: Dicionário Técnico Cebraspe */}
          <button
            type="button"
            onClick={() => useDicionarioStore.getState().abrirBuscaVazia()}
            className="p-3.5 rounded-xl bg-surface hover:bg-surface-2/60 border border-border hover:border-accent/40 transition-all text-left flex items-center gap-3 cursor-pointer group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-surface-2 text-ink border border-border flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4 text-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-sans font-bold text-ink text-xs block truncate">Dicionário</span>
              <span className="text-[11px] text-ink-2 font-serif truncate block">
                Terminologia & Doutrina
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* BLOCO PROGRESSO GERAL (C1: Renomeado de 'Cobertura do edital' para 'Progresso geral') */}
      <section aria-labelledby="progresso-geral-title" className="bg-surface rounded-xl border border-border p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-sans text-[10px] font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20 uppercase tracking-wider">
              Progresso Geral
            </span>
            <h3 id="progresso-geral-title" className="text-base sm:text-lg font-serif font-bold text-ink mt-1">
              Visão Consolidada de Conteúdo e Checkpoints
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-ink-2">
            <span>
              <strong className="text-ink font-semibold tabular-nums">{submodulosGlobalLidos}</strong> de {totalSubmodulosGlobal} submódulos lidos
            </span>
            <span>•</span>
            <span>
              <strong className="text-ink font-semibold tabular-nums">{totalCheckpointsFeitos}</strong> de {totalCheckpointsGlobal} checkpoints
            </span>
          </div>
        </div>

        {/* Barra de Progresso Global */}
        <div>
          <div className="flex items-center justify-between text-xs font-sans text-ink-2 mb-1.5">
            <span>Total da Teoria Concluída</span>
            <span className="font-bold text-accent tabular-nums">{progressoGlobalPercent}% concluído</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden border border-border">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${progressoGlobalPercent}%` }}
            />
          </div>
        </div>

        <div className="pt-2 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ink-2">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-ink-2 shrink-0" />
            <span className="font-serif">
              O catálogo detalhado e o fluxo de desbloqueio sequencial dos 10 blocos residem na <strong>Jornada</strong>.
            </span>
          </div>

          <button
            type="button"
            onClick={() => setCurrentRoute('jornada')}
            className="text-accent hover:underline font-semibold flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Acessar Jornada por Domínio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
