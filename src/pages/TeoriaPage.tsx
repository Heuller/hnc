import React, { useState, useEffect } from 'react';
import { useNavigationStore } from '../store/useNavigationStore';
import { useProgressStore } from '../store/useProgressStore';
import { ALL_COURSE_MODULES } from '../content/registry';
import { AutoresCanonicos } from '../components/content-blocks/AutoresCanonicos';
import { AlertaCebraspe } from '../components/content-blocks/AlertaCebraspe';
import { TabelaComparativa } from '../components/content-blocks/TabelaComparativa';
import { ItemCE } from '../components/common/ItemCE';
import { ExercicioRenderer } from '../components/exercicios';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';
import { MnemonicosTabs } from '../components/content-blocks/MnemonicosTabs';
import {
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  BookOpen,
  RotateCcw,
  ChevronDown,
  Lock,
  Eye,
  EyeOff,
  Type,
  Sliders,
  ShieldCheck,
  List,
} from 'lucide-react';
import { getModuleTheme } from '../domain/moduleThemes';
import { ModuleBadge } from '../components/common/ModuleBadge';
import { TeoriaStickyBar } from '../components/layout/TeoriaStickyBar';
import { calculateSubmoduleStatus, getRequiredSectionsForSubmodule } from '../domain/learningEngine';
import { ActiveRetrievalExercises } from '../components/content-blocks/ActiveRetrievalExercises';
import { useReaderPreferencesStore } from '../store/useReaderPreferencesStore';
import { ReaderPreferencesModal } from '../components/common/ReaderPreferencesModal';
import { SIMULADOS_REGISTRY, getSimuladoById } from '../content/simuladosRegistry';
import {
  verificarNavegacaoRodapeSubmodulo,
} from '../domain/portaoSimuladoEngine';
import { ExLibrisCamaraIllustration } from '../components/common/Illustrations';
import { CartaoAntesDeLer } from '../components/content-blocks/CartaoAntesDeLer';

export const TeoriaPage: React.FC = () => {
  const { selectedSubmodule, setSelectedSubmodule, navigateToSimulado, setContextoTeoria } =
    useNavigationStore();
  const {
    modulosLidosIds,
    checkpointsRespondidos,
    secoesVisualizadas,
    registrarSecaoVisualizada,
    ultimoModuloAcessado,
    setUltimoModuloAcessado,
    getProgressoGlobal,
    historicoSimulados,
    preferenciaModoTeoria,
    setModoTeoria,
  } = useProgressStore();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReaderPrefsOpen, setIsReaderPrefsOpen] = useState(false);
  const { columnWidth, isFocusMode, toggleFocusMode } = useReaderPreferencesStore();

  const columnWidthClass =
    columnWidth === 'focus'
      ? 'max-w-2xl'
      : columnWidth === 'wide'
      ? 'max-w-4xl'
      : 'max-w-3xl';

  // Lista plana de todos os submódulos do curso (incluindo mini-módulos especiais)
  const allSubmodules = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos);

  // Submódulo ativo selecionado (com recuperação resiliente de sessão)
  const targetSubId =
    selectedSubmodule !== '1.1'
      ? selectedSubmodule
      : (ultimoModuloAcessado || selectedSubmodule);

  const currentSub =
    allSubmodules.find(
      (s) => s.numero === targetSubId || s.id === targetSubId
    ) || allSubmodules[0];

  // Macro-módulo pai correspondente
  const currentMacro =
    ALL_COURSE_MODULES.find((m) =>
      m.modulosFilhos.some((s) => s.id === currentSub.id)
    ) || ALL_COURSE_MODULES[0];

  useEffect(() => {
    setUltimoModuloAcessado(currentSub.numero);
  }, [currentSub.numero, setUltimoModuloAcessado]);

  // Breadcrumb do cabeçalho: Teoria > M1 Fundamentos > 1.1 Biblioteconomia
  const rotuloModulo = `${currentMacro.codigo} ${currentMacro.titulo_curto || currentMacro.titulo}`;
  const rotuloSubmodulo = `${currentSub.numero} ${currentSub.titulo_curto || currentSub.titulo}`;
  useEffect(() => {
    setContextoTeoria({ modulo: rotuloModulo, submodulo: rotuloSubmodulo });
  }, [rotuloModulo, rotuloSubmodulo, setContextoTeoria]);
  useEffect(() => () => setContextoTeoria(undefined), [setContextoTeoria]);

  // Monitoramento do progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, Math.round((window.scrollY / totalHeight) * 100))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const secoesVistas = secoesVisualizadas?.[currentSub.id] || [];
  const learningState = calculateSubmoduleStatus(
    currentSub,
    secoesVistas,
    checkpointsRespondidos || {}
  );
  const moduleTheme = getModuleTheme(currentMacro.id);

  const [activeSectionId, setActiveSectionId] = useState<string>('sec-teoria');
  const [lateralTab, setLateralTab] = useState<'sumario' | 'mnemonicos'>('sumario');

  const modoTeoriaAtivo =
    preferenciaModoTeoria?.[currentSub.id] ||
    preferenciaModoTeoria?.[currentMacro.id] ||
    'canonica';

  const alternarModoTeoria = (modo: 'canonica' | 'didatica') => {
    setModoTeoria(currentSub.id, modo);
    setModoTeoria(currentMacro.id, modo);
  };

  const readingSections = [
    { id: 'sec-autores', numero: '1', titulo: 'Autores Canônicos' },
    ...(currentSub.alertasCebraspe && currentSub.alertasCebraspe.length > 0
      ? [{ id: 'sec-alertas', numero: '2', titulo: 'Alertas Cebraspe' }]
      : []),
    ...(currentSub.quadroComparativo
      ? [{ id: 'sec-quadro', numero: '3', titulo: 'Matriz Comparativa' }]
      : []),
    ...(currentSub.antesDeLer && currentSub.antesDeLer.length > 0
      ? [{ id: 'sec-antes-de-ler', numero: '4', titulo: 'Pré-requisitos' }]
      : []),
    {
      id: 'sec-teoria',
      numero: '5',
      titulo:
        modoTeoriaAtivo === 'didatica' && currentSub.teoriaDidaticaMarkdown
          ? 'Teoria Didática & Prática'
          : 'Fundamentação Teórica',
    },
    { id: 'sec-checkpoints', numero: '6', titulo: `Checkpoints (${currentSub.checkpoints.length})` },
    { id: 'sec-mnemonicos', numero: '7', titulo: 'Mnemônicos e Síntese' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -50% 0px' }
    );

    const sectionIds = [
      'sec-autores',
      'sec-alertas',
      'sec-quadro',
      'sec-antes-de-ler',
      'sec-teoria',
      'sec-checkpoints',
      'sec-mnemonicos',
    ];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentSub.id, modoTeoriaAtivo]);

  // Monitoramento de seções para conquista estrita de conclusão (Parte G)
  useEffect(() => {
    const required = getRequiredSectionsForSubmodule(currentSub);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            registrarSecaoVisualizada(currentSub.id, entry.target.id);
          }
        }
      },
      { threshold: [0.2] }
    );

    required.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentSub, registrarSecaoVisualizada]);

  const progressoGlobal = getProgressoGlobal();


  // Submódulos pertencentes estritamente a este macro-módulo
  const submodulosDoMacro = currentMacro.modulosFilhos;
  const indexNoMacro = submodulosDoMacro.findIndex((s) => s.id === currentSub.id);
  const prevSubNoMacro =
    currentSub.numero === '2.5'
      ? allSubmodules.find((s) => s.numero === '2.4') || null
      : indexNoMacro > 0
      ? submodulosDoMacro[indexNoMacro - 1]
      : null;

  // Status de navegação do rodapé
  const rodapeNav = verificarNavegacaoRodapeSubmodulo(
    currentSub.numero,
    progressoGlobal,
    historicoSimulados || []
  );

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="relative animate-fadeIn">
      {/* Barra de Progresso de Leitura no topo (na cor do módulo - Parte C) */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
            backgroundColor: moduleTheme.solidVar,
          }}
        />
      </div>

      {/* Indicador sutil de seções lidas/total: linha fina âmbar no topo */}
      <div
        role="progressbar"
        aria-label="Seções lidas do submódulo"
        aria-valuemin={0}
        aria-valuemax={learningState.secoesTotalCount || 0}
        aria-valuenow={learningState.secoesLidasCount || 0}
        aria-valuetext={`${learningState.secoesLidasCount || 0} de ${learningState.secoesTotalCount || 0} seções lidas`}
        className="fixed top-0 inset-x-0 h-[3px] z-[60] pointer-events-none print:hidden"
      >
        <div
          className="h-full bg-accent transition-[width] duration-300 ease-out motion-reduce:transition-none"
          style={{
            width: `${Math.round(((learningState.secoesLidasCount || 0) / (learningState.secoesTotalCount || 1)) * 100)}%`,
          }}
        />
      </div>

      {/* Sticky Context Bar Mobile (Abaixo do Header no Mobile - Parte F) */}
      <TeoriaStickyBar
        macroId={currentMacro.id}
        submodulo={currentSub}
        scrollProgress={scrollProgress}
      />

      {/* Barra de Foco Flutuante no Modo Foco (Regra U.2) */}
      {isFocusMode && (
        <div className="sticky top-2 z-40 bg-surface/95 backdrop-blur-md border border-border py-2 px-4 mb-4 flex items-center justify-between shadow-editorial-sm rounded-xl max-w-4xl mx-auto animate-fadeIn">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="px-2 py-0.5 rounded text-xs font-mono font-bold shrink-0 shadow-2xs"
              style={{
                backgroundColor: moduleTheme.solidVar,
                color: moduleTheme.textVar,
              }}
            >
              {currentMacro.codigo} • {currentSub.numero}
            </span>
            <span className="text-xs font-serif font-bold text-ink truncate">
              {currentSub.titulo_curto || currentSub.titulo}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-xs text-ink-2 bg-surface-2 px-2 py-0.5 rounded border border-border">
              {scrollProgress}% lido
            </span>

            <button
              type="button"
              onClick={() => setIsReaderPrefsOpen(true)}
              className="p-1 rounded-md bg-surface-2 hover:bg-surface-2/80 text-ink-2 hover:text-ink border border-border cursor-pointer transition-colors"
              title="Ajustar preferências de leitura"
            >
              <Sliders className="w-3.5 h-3.5 text-accent" />
            </button>

            <button
              type="button"
              onClick={toggleFocusMode}
              className="px-2.5 py-1 rounded-md bg-accent text-accent-text text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Sair do Modo Foco (Esc ou F)"
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Sair do Foco</span>
              <span className="px-1 py-0.2 rounded text-xs font-mono bg-black/20 text-white ml-0.5">
                Esc
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex gap-8 items-start">
        {/* Coluna Central de Leitura com largura configurável */}
        <article className={`flex-1 min-w-0 ${columnWidthClass} mx-auto space-y-6 sm:space-y-8`}>
          {/* Regra B6: No desktop mantenha só a sidebar; no mobile, um único seletor limpo sem redundâncias */}
          <div className="block lg:hidden space-y-2 mb-6 sm:mb-8 p-3.5 rounded-2xl bg-surface-2/60 border border-border/80 shadow-2xs">
            <label
              htmlFor="mobile-submodule-selector"
              className="text-xs font-mono text-ink-2 font-semibold uppercase tracking-wider flex items-center justify-between px-0.5"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent shrink-0" />
                Alternar Submódulo
              </span>
              <span className="text-xs text-ink-2 font-mono">
                {currentMacro.codigo} · {currentMacro.modulosFilhos.length} tópicos
              </span>
            </label>
            <div className="relative">
              <select
                id="mobile-submodule-selector"
                value={currentSub.numero}
                onChange={(e) => {
                  setSelectedSubmodule(e.target.value);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 pl-3.5 pr-9 rounded-xl bg-surface border border-border text-ink text-xs font-sans font-medium foco focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 appearance-none cursor-pointer shadow-editorial-xs"
              >
                {ALL_COURSE_MODULES.map((macro) => (
                  <optgroup
                    key={macro.id}
                    label={`${macro.id === 'm2-5' ? '⭐ ' : ''}${macro.codigo} — ${macro.titulo_curto || macro.titulo}${macro.id === 'm2-5' ? ' (Mini-Módulo Especial)' : ''}`}
                  >
                    {macro.modulosFilhos.map((sub) => {
                      const completed = modulosLidosIds.includes(sub.id);
                      return (
                        <option key={sub.id} value={sub.numero}>
                          {completed ? '✓ ' : ''}{sub.numero} — {sub.titulo_curto || sub.titulo}
                        </option>
                      );
                    })}
                  </optgroup>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-ink-2 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Cabeçalho do Submódulo */}
          <header className="border-b border-border pb-5 sm:pb-7 mb-6 sm:mb-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <ModuleBadge moduleId={currentMacro.id} size="sm" />
                <span className="font-mono text-xs text-ink font-semibold uppercase tracking-wider">
                  {currentMacro.titulo_curto || currentMacro.titulo} • Submódulo {currentSub.numero}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-ink-2 hidden sm:flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  ~{currentSub.tempoEstimadoMinutos} min
                </span>
                <button
                  type="button"
                  onClick={toggleFocusMode}
                  className="px-2 py-1 rounded-md bg-surface-2 border border-border text-ink hover:border-accent text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Modo Foco imersivo (Atalho: F | Sair: Esc)"
                  aria-label="Modo Foco"
                >
                  <Eye className="w-3.5 h-3.5 text-accent" />
                  <span className="hidden xs:inline">Foco</span>
                  <span className="hidden sm:inline-block px-1 py-0.2 rounded text-xs font-mono bg-black/10 dark:bg-white/10 ml-0.5">
                    F
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsReaderPrefsOpen(true)}
                  className="px-2 sm:px-2.5 py-1 rounded-md bg-surface-2 border border-border text-ink hover:border-accent text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                  title="Preferências de leitura e tipografia (fonte, largura, tamanho)"
                  aria-label="Abrir preferências de leitura e tipografia"
                >
                  <Type className="w-3.5 h-3.5 text-accent" />
                  <span>Aa Leitura</span>
                </button>
              </div>
            </div>

            {/* Faixa fina plana (4px, sem gradiente) do cabeçalho da Teoria (Parte C) */}
            <div
              className="h-1 w-16 sm:w-20 rounded-full"
              style={{ backgroundColor: moduleTheme.solidVar }}
            />

            <div className="flex items-start justify-between gap-4">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-ink tracking-normal flex-1 leading-snug">
                {currentSub.titulo}
              </h1>
              <div className="hidden lg:block shrink-0 opacity-80 hover:opacity-100 transition-opacity" title="Biblioteca da Câmara dos Deputados · Acervo Canônico">
                <ExLibrisCamaraIllustration className="w-14 h-14 text-accent" />
              </div>
            </div>

            {/* Chip Unificado Soberano de Status (D13) */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/50">
              {learningState.status === 'concluida' || (learningState.status as string) === 'concluido' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 bg-ok-soft border border-ok text-ok shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Submódulo Concluído ({learningState.taxaAcertoPercent}% de acertos · mín. 85%)</span>
                </div>
              ) : learningState.status === 'em_revisao_dirigida' || (learningState.status as string) === 'em_revisao' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 text-accent shadow-2xs">
                  <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                  <span>Em Revisão Dirigida ({learningState.taxaAcertoPercent}% nos checkpoints · mín. 85%)</span>
                </div>
              ) : learningState.status === 'em_andamento' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-medium flex items-center gap-1.5 bg-surface-2 border border-border text-ink-2 shadow-2xs">
                  <BookOpen className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>
                    Em Leitura ({learningState.secoesLidasCount}/{learningState.secoesTotalCount} seções · {Math.round(((learningState.secoesLidasCount || 0) / (learningState.secoesTotalCount || 1)) * 100)}%)
                  </span>
                </div>
              ) : learningState.status === 'bloqueada' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-medium flex items-center gap-1.5 bg-surface-2 border border-border text-ink-2 shadow-2xs">
                  <Lock className="w-3.5 h-3.5 text-ink-2 shrink-0" />
                  <span>Bloqueada (conclua o submódulo anterior)</span>
                </div>
              ) : (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-medium flex items-center gap-1.5 bg-surface-2 border border-border text-ink-2 shadow-2xs">
                  <span>Disponível para Estudo</span>
                </div>
              )}

              {/* Indicador suplementar discreto se ainda não concluído */}
              {learningState.status !== 'concluida' && (learningState.status as string) !== 'concluido' && (
                <span className="text-xs font-sans tabular-nums text-ink-2 hidden sm:inline">
                  Meta de aprovação: 85% nos checkpoints
                </span>
              )}
            </div>
          </header>

          {/* Barra de Etapas do Submódulo Estruturada (U1 / D6) */}
          {(() => {
            const etapasBarra = [
              { id: 'sec-teoria', num: 1, rotulo: '1. Ler', desc: 'Teoria & Doutrina' },
              { id: 'sec-recuperacao-ativa', num: 2, rotulo: '2. Praticar', desc: 'Recuperação Ativa' },
              { id: 'sec-mnemonicos', num: 3, rotulo: '3. Revisar', desc: 'Mnemônicos & Síntese' },
              { id: 'sec-checkpoints', num: 4, rotulo: '4. Verificar', desc: 'Micro-Checkpoints' },
            ];
            return (
              <nav
                aria-label="Etapas pedagógicas deste submódulo"
                className="hidden md:block bg-surface-2/70 border border-border rounded-xl p-3 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-2">
                    Jornada do Submódulo (Ciclo de Domínio)
                  </span>
                  <span className="text-xs font-mono text-ink-2">
                    {etapasBarra.length} Etapas Recomendadas
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {etapasBarra.map((etapa) => (
                    <button
                      key={etapa.id}
                      type="button"
                      onClick={() => scrollToAnchor(etapa.id)}
                      className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border/80 hover:border-accent hover:bg-accent-soft/30 transition-all text-ink font-semibold group cursor-pointer text-left"
                    >
                      <div className="w-6 h-6 rounded-md bg-accent-soft text-accent flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                        {etapa.num}
                      </div>
                      <div className="min-w-0">
                        <span className="block font-bold text-xs text-ink group-hover:text-accent leading-none">
                          {etapa.rotulo}
                        </span>
                        <span className="text-xs text-ink-2 truncate block mt-1">
                          {etapa.desc}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

            {/* Acesso rápido às seções complementares sem separadores soltos */}
            <div className="flex flex-wrap items-center gap-2 pt-2.5 mt-2.5 border-t border-border/60 text-xs text-ink-2">
              <span className="font-semibold text-ink">Seções:</span>
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-autores')}
                className="hover:text-accent px-1.5 py-0.5 rounded hover:bg-surface transition-colors cursor-pointer"
              >
                Autores Canônicos
              </button>
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-alertas')}
                className="hover:text-accent px-1.5 py-0.5 rounded hover:bg-surface transition-colors cursor-pointer"
              >
                Alertas Cebraspe
              </button>
              {currentSub.quadroComparativo && (
                <button
                  type="button"
                  onClick={() => scrollToAnchor('sec-quadro')}
                  className="hover:text-accent px-1.5 py-0.5 rounded hover:bg-surface transition-colors cursor-pointer"
                >
                  Matriz Comparativa
                </button>
              )}
            </div>
          </nav>
        );
      })()}

          {/* Bloco 1: Autores Canônicos */}
          <div id="sec-autores" className="scroll-mt-28">
            <AutoresCanonicos autores={currentSub.mnemonicos.autores} />
          </div>

          {/* Bloco 2: Alertas Cebraspe da Banca */}
          {currentSub.alertasCebraspe.length > 0 && (
            <div id="sec-alertas" className="my-6 scroll-mt-28">
              <AlertaCebraspe alertas={currentSub.alertasCebraspe} />
            </div>
          )}

          {/* Bloco 3: Matriz Comparativa (Zero Rolagem Horizontal) */}
          {currentSub.quadroComparativo && (
            <div id="sec-quadro" className="my-8 scroll-mt-28">
              <TabelaComparativa quadro={currentSub.quadroComparativo} />
            </div>
          )}

          {/* Bloco Antes de Ler: Pré-requisitos Conceituais (U3.4 / U3.1) */}
          {currentSub.antesDeLer && currentSub.antesDeLer.length > 0 && (
            <div id="sec-antes-de-ler" className="scroll-mt-28">
              <CartaoAntesDeLer termos={currentSub.antesDeLer} />
            </div>
          )}

          {/* Bloco 4: Teoria Editorial (Dual: Canônica vs Prática / Vida Real) */}
          <article id="sec-teoria" className="border-t border-border pt-6 scroll-mt-28">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-2 font-semibold">
                  {modoTeoriaAtivo === 'didatica' && currentSub.teoriaDidaticaMarkdown
                    ? 'Modo Prático & Didático • Vida Real / Câmara dos Deputados'
                    : 'Doutrina e Bibliografia Especializada'}
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-normal mt-1">
                  {modoTeoriaAtivo === 'didatica' && currentSub.teoriaDidaticaMarkdown
                    ? 'Teoria Didática & Aplicação Prática'
                    : 'Fundamentação Teórica Canônica'}
                </h2>
              </div>

              {/* Seletor Dual de Formato de Estudo (W5) */}
              <div
                className="flex items-center p-1 rounded-xl bg-surface-2 border border-border shadow-2xs w-full sm:w-auto"
                role="group"
                aria-label="Alternar formato de estudo da teoria"
              >
                <button
                  type="button"
                  data-testid="btn-modo-canonica"
                  onClick={() => alternarModoTeoria('canonica')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    modoTeoriaAtivo === 'canonica'
                      ? 'bg-surface text-ink shadow-xs border border-border font-bold'
                      : 'text-ink-2 hover:text-ink'
                  }`}
                  aria-pressed={modoTeoriaAtivo === 'canonica'}
                  title="Estudar pela teoria canônica e aprofundada institucional"
                >
                  <BookOpen className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="whitespace-nowrap">Teoria Canônica</span>
                </button>

                <button
                  type="button"
                  data-testid="btn-modo-didatica"
                  onClick={() => alternarModoTeoria('didatica')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    modoTeoriaAtivo === 'didatica'
                      ? 'bg-accent text-accent-contrast shadow-xs font-bold'
                      : 'text-ink-2 hover:text-ink'
                  }`}
                  aria-pressed={modoTeoriaAtivo === 'didatica'}
                  title="Estudar pelo formato didático com foco na vida real e rotina da Câmara"
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">
                    Modo Prático<span className="hidden sm:inline"> & Vida Real</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Aviso informativo quando Modo Prático é acionado mas ainda não há markdown didático */}
            {modoTeoriaAtivo === 'didatica' && !currentSub.teoriaDidaticaMarkdown && (
              <div className="mb-6 p-4 rounded-xl border border-accent/30 bg-accent-soft/30 text-ink flex items-start gap-3 animate-fadeIn">
                <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-ink">
                    Modo Prático em Expansão Gradual
                  </p>
                  <p className="text-ink-2">
                    A versão didática deste submódulo está em elaboração. Exibindo a Teoria Canônica Densa integral para manter a cobertura total do edital.
                  </p>
                </div>
              </div>
            )}

            <ConteudoMarkdown
              content={
                modoTeoriaAtivo === 'didatica' && currentSub.teoriaDidaticaMarkdown
                  ? currentSub.teoriaDidaticaMarkdown
                  : currentSub.teoriaDensaMarkdown
              }
              submoduloId={currentSub.id}
            />

            {/* Itens Seccionais de Recuperação Ativa (U4.3: 1 item por seção) */}
            {currentSub.secoes && currentSub.secoes.some((s) => s.itens && s.itens.length > 0) && (
              <div className="space-y-6 mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                    EXERCÍCIOS POR SEÇÃO
                  </span>
                  <span className="text-xs text-ink-2 font-mono">
                    Fixação Imediata ao Longo da Leitura
                  </span>
                </div>
                {currentSub.secoes.map((secao) => (
                  secao.itens && secao.itens.length > 0 ? (
                    <div key={secao.id} className="p-4 rounded-xl border border-border/70 bg-surface-2/40 space-y-3">
                      <h4 className="text-sm font-bold font-sans text-ink">{secao.titulo}</h4>
                      {secao.itens.map((it) => (
                        <ExercicioRenderer
                          key={it.id}
                          exercicio={it}
                          onResponder={async (res) => {
                            await useProgressStore.getState().adicionarItemAttempt({
                              itemId: it.id,
                              submoduloId: currentSub.numero,
                              moduloId: currentMacro.id,
                              contexto: 'teoria',
                              resposta: res.respostaDada === 'C' ? 'C' : res.respostaDada === 'E' ? 'E' : (res.acertou ? 'C' : 'E'),
                              gabarito: 'gabarito' in it && typeof it.gabarito === 'string' && (it.gabarito === 'C' || it.gabarito === 'E') ? it.gabarito : (res.acertou ? 'C' : 'E'),
                            });
                          }}
                        />
                      ))}
                    </div>
                  ) : null
                ))}
              </div>
            )}
          </article>

          {/* Bloco 5: Checkpoints de Recuperação Ativa */}
          <section
            id="sec-checkpoints"
            aria-labelledby="checkpoints-title"
            className="border-t border-border pt-8 my-8 space-y-6 scroll-mt-28"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                  RECUPERAÇÃO ATIVA
                </span>
                <span className="text-xs text-ink-2 font-mono">
                  {currentSub.checkpoints.length} itens no estilo Cebraspe
                </span>
              </div>
              <h2
                id="checkpoints-title"
                className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-normal"
              >
                Micro-Checkpoints de Fixação
              </h2>
              <p className="text-xs sm:text-sm text-ink-2 font-serif mt-1">
                Responda antes de consultar a justificativa. Julgue como a banca julgaria.
              </p>
            </div>

            <div className="space-y-4">
              {currentSub.checkpoints.map((cp, idx) => {
                const isRevisaoDirigida = learningState.status === 'em_revisao_dirigida' || (learningState.status as string) === 'em_revisao';
                return (
                  <ItemCE
                    key={cp.id}
                    item={{
                      id: cp.id,
                      numero: idx + 1,
                      submoduloId: currentSub.numero,
                      moduloId: currentMacro.id,
                      enunciado: cp.item,
                      gabarito: cp.gabarito,
                      justificativa: cp.justificativa,
                      versaoCorreta: cp.versao_correta,
                      armadilha: cp.armadilhaBanca,
                      fonte: cp.fonte,
                    }}
                    contexto="teoria"
                    contadorTexto={`Checkpoint ${idx + 1} de ${currentSub.checkpoints.length}`}
                    forcarRetesteAtivo={isRevisaoDirigida}
                  />
                );
              })}
            </div>

            {/* Treino de Recuperação Ativa (Associação, Cronologia e Caça-Armadilha - Parte G) */}
            <div className="mt-8">
              <ActiveRetrievalExercises
                submoduloNumero={currentSub.numero}
                autores={currentSub.mnemonicos.autores}
                timeline={currentSub.mnemonicos.timeline}
                pegadinhas={currentSub.mnemonicos.pegadinhas}
              />
            </div>
          </section>

          {/* Bloco 6: Resumo e Mnemônicos Estruturados */}
          <section
            id="sec-mnemonicos"
            aria-labelledby="mnemonicos-title"
            className="border-t border-border pt-8 my-8 space-y-6 scroll-mt-28"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                  MNEMÔNICOS E SÍNTESE
                </span>
              </div>
              <h2
                id="mnemonicos-title"
                className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-normal"
              >
                Resumo Rápido e Armadilhas
              </h2>
              <p className="text-xs sm:text-sm text-ink-2 font-serif mt-1">
                Linha do tempo histórica, ficha dos autores canônicos e pegadinhas da banca.
              </p>
            </div>

            <MnemonicosTabs mnemonicos={currentSub.mnemonicos} />
          </section>

          {/* Card Prominente no Final do Último Submódulo Filho (Atalho Direto para o Simulado 100Q ou 30Q) */}
          {(() => {
            const isUltimoSubmoduloDoMacro =
              currentMacro.modulosFilhos.length > 0 &&
              currentMacro.modulosFilhos[currentMacro.modulosFilhos.length - 1].id === currentSub.id;
            const simuladoDoMacro =
              currentMacro.id === 'm2-5'
                ? getSimuladoById('mini-modulo-orgaos')
                : SIMULADOS_REGISTRY.find((s) => s.numero === currentMacro.numero);

            if (!isUltimoSubmoduloDoMacro || !simuladoDoMacro) return null;

            const isMini = currentMacro.id === 'm2-5';

            return (
              <section
                aria-label={`Conclusão do Módulo e Simulado ${isMini ? '30Q' : '100Q'}`}
                className="my-8 p-6 sm:p-7 rounded-2xl bg-accent-soft/40 border-2 border-accent/40 shadow-editorial-sm space-y-4 animate-fadeIn"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent text-accent-text flex items-center justify-center font-mono font-bold text-xl shrink-0 shadow-xs">
                      {isMini ? 'M2.5' : `M${currentMacro.numero}`}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25 uppercase tracking-wider">
                          {isMini ? 'Mini-Módulo Especial Concluído' : `Teoria Concluída · Módulo ${currentMacro.numero}`}
                        </span>
                        <span className="text-xs text-ink-2 font-mono">
                          {currentMacro.modulosFilhos.length} {currentMacro.modulosFilhos.length === 1 ? 'submódulo lido' : 'submódulos lidos'}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-ink">
                        Pronto para o Simulado de {simuladoDoMacro.questoes.length} Questões Cebraspe?
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-2 font-serif max-w-2xl leading-relaxed">
                        {isMini ? (
                          <>
                            Você completou o estudo essencial sobre os <strong>órgãos públicos</strong>, regras de <strong>catalogação governamental</strong> e a <strong>Biblioteca Pedro Aleixo</strong>. Teste sua retenção agora no caderno com <strong>{simuladoDoMacro.questoes.length} assertivas C/E inéditas</strong> comentadas item a item.
                          </>
                        ) : (
                          <>
                            Você completou toda a base teórica de <strong>{currentMacro.titulo_curto || currentMacro.titulo}</strong>. Agora aplique o <strong>Estudo Reverso imediato</strong> no caderno com {simuladoDoMacro.questoes.length} assertivas comentadas item a item.
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateToSimulado(simuladoDoMacro.id)}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-accent hover:bg-accent/90 text-accent-text font-sans font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 cursor-pointer shrink-0"
                  >
                    <span>Iniciar Simulado ({simuladoDoMacro.questoes.length}Q)</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </section>
            );
          })()}

          {/* Rodapé de Navegação do Submódulo (Regra 2.1) */}
          <footer className="border-t border-border pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevSubNoMacro ? (
              <button
                type="button"
                onClick={() => {
                  setSelectedSubmodule(prevSubNoMacro.numero);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Submódulo {prevSubNoMacro.numero}</span>
              </button>
            ) : (
              <div />
            )}

            {/* Indicador de Conclusão Pedagógica Sóbrio (Defeito D13) */}
            <div className="w-full sm:w-auto text-center sm:text-left">
              {rodapeNav.submoduloConcluido ? (
                <div className="py-2 px-3.5 rounded-xl bg-ok-soft border border-ok text-ok font-sans text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submódulo Concluído ({learningState.taxaAcertoPercent}% de acertos)</span>
                </div>
              ) : rodapeNav.motivoBloqueioSubmodulo ? (
                <div className="py-2 px-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-accent dark:text-amber-300 font-sans text-xs flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4 shrink-0 text-accent" />
                  <span>{rodapeNav.motivoBloqueioSubmodulo}</span>
                </div>
              ) : (
                <div className="py-2 px-3.5 rounded-xl bg-surface-2 border border-border text-ink-2 font-sans text-xs flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Conclua a leitura e responda os checkpoints para registrar conclusão</span>
                </div>
              )}
            </div>

            {/* Ação Principal Direita: Próximo Submódulo ou Portão do Simulado (Fase U2) */}
            {rodapeNav.isUltimoDoModulo ? (
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => navigateToSimulado(rodapeNav.simuladoModuloId)}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-accent text-accent-contrast font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer hover:bg-accent/90"
                >
                  <span>
                    Ir ao simulado do M{rodapeNav.moduloNumero} ({getSimuladoById(rodapeNav.simuladoModuloId)?.questoes.length || 100} itens)
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const proximoModNum = rodapeNav.moduloNumero + 1;
                    setSelectedSubmodule(`${proximoModNum}.1`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-surface border border-border text-ink font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer hover:border-accent"
                >
                  <span>Começar Módulo {rodapeNav.moduloNumero + 1}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              // SUBMÓDULOS INTERMEDIÁRIOS (ex: 1.1, 1.2, 1.3)
              <button
                type="button"
                onClick={() => {
                  if (rodapeNav.proximoSubmoduloNumero) {
                    setSelectedSubmodule(rodapeNav.proximoSubmoduloNumero);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg font-sans text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all bg-surface border border-border text-ink hover:border-accent cursor-pointer"
              >
                <span>Submódulo {rodapeNav.proximoSubmoduloNumero}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </footer>
        </article>

        {/* Coluna Lateral Direita no Desktop (>= 1280px / telas xl+) */}
        <aside
          aria-label="Índice da Leitura e Resumo"
          className="hidden xl:flex flex-col w-80 shrink-0 sticky top-20 bg-surface rounded-2xl border border-border p-4 shadow-editorial-xs max-h-[calc(100dvh-6rem)] overflow-hidden"
        >
          {/* Alternador de Abas: Índice vs. Mnemônicos */}
          <div className="flex items-center p-1 rounded-xl bg-surface-2 border border-border/80 mb-3 shrink-0">
            <button
              type="button"
              onClick={() => setLateralTab('sumario')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                lateralTab === 'sumario'
                  ? 'bg-surface text-ink shadow-2xs border border-border/60'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              <List className="w-3.5 h-3.5 text-accent" />
              <span>Índice</span>
            </button>
            <button
              type="button"
              onClick={() => setLateralTab('mnemonicos')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                lateralTab === 'mnemonicos'
                  ? 'bg-surface text-ink shadow-2xs border border-border/60'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Mnemônicos</span>
            </button>
          </div>

          {/* Barra de Progresso do Submódulo */}
          <div className="pb-3 mb-3 border-b border-border/70 shrink-0">
            <div className="flex items-center justify-between text-xs font-mono text-ink-2 mb-1.5">
              <span>Progresso da Leitura</span>
              <span className="font-bold text-accent">{scrollProgress}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-border/60 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-200"
                style={{
                  width: `${scrollProgress}%`,
                  backgroundColor: moduleTheme.solidVar,
                }}
              />
            </div>
          </div>

          {/* Conteúdo da Aba */}
          <div className="flex-1 overflow-y-auto scrollbar-thin pr-1 space-y-1">
            {lateralTab === 'sumario' ? (
              <nav aria-label="Seções da Leitura" className="space-y-1">
                {readingSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  const isRead = secoesVistas.includes(sec.id);

                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToAnchor(sec.id)}
                      className={`w-full text-left p-2 rounded-xl text-xs font-sans flex items-center justify-between gap-2 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-accent-soft text-accent font-bold border-l-2 border-accent'
                          : 'text-ink-2 hover:text-ink hover:bg-surface-2'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-xs w-4 text-center shrink-0">
                          {sec.numero}
                        </span>
                        <span className="truncate">{sec.titulo}</span>
                      </div>
                      {isRead ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-ok shrink-0" />
                      ) : isActive ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      ) : null}
                    </button>
                  );
                })}
              </nav>
            ) : (
              <MnemonicosTabs mnemonicos={currentSub.mnemonicos} isCompact />
            )}
          </div>
        </aside>
      </div>

      {/* Espaçador de segurança para o BottomNav no mobile */}
      <div className="h-16 md:hidden w-full shrink-0" aria-hidden="true" />

      {/* Modal de Preferências de Leitura */}
      <ReaderPreferencesModal
        isOpen={isReaderPrefsOpen}
        onClose={() => setIsReaderPrefsOpen(false)}
      />
    </div>
  );
};
