import React, { useState, useEffect } from 'react';
import { useNavigationStore } from '../store/useNavigationStore';
import { useProgressStore } from '../store/useProgressStore';
import { ALL_COURSE_MODULES } from '../content/registry';
import { AutoresCanonicos } from '../components/content-blocks/AutoresCanonicos';
import { AlertaCebraspe } from '../components/content-blocks/AlertaCebraspe';
import { TabelaComparativa } from '../components/content-blocks/TabelaComparativa';
import { ItemCE } from '../components/common/ItemCE';
import { MarkdownRenderer } from '../components/common/MarkdownRenderer';
import { MnemonicosTabs } from '../components/content-blocks/MnemonicosTabs';
import { MnemonicosDrawerMobile } from '../components/content-blocks/MnemonicosDrawerMobile';
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
} from 'lucide-react';
import { getModuleTheme } from '../domain/moduleThemes';
import { ModuleBadge } from '../components/common/ModuleBadge';
import { GlossarioDoModulo } from '../components/content-blocks/GlossarioDoModulo';
import { dicionarioService } from '../domain/dicionario/dicionarioService';
import { TeoriaStickyBar } from '../components/layout/TeoriaStickyBar';
import { calculateSubmoduleStatus, getRequiredSectionsForSubmodule } from '../domain/learningEngine';
import { ActiveRetrievalExercises } from '../components/content-blocks/ActiveRetrievalExercises';
import { useReaderPreferencesStore } from '../store/useReaderPreferencesStore';
import { ReaderPreferencesModal } from '../components/common/ReaderPreferencesModal';
import { SIMULADOS_REGISTRY, getSimuladoById } from '../content/simuladosRegistry';
import {
  verificarAcessoModulo,
  verificarNavegacaoRodapeSubmodulo,
} from '../domain/portaoSimuladoEngine';
import { TelaBloqueioModulo } from '../components/common/TelaBloqueioModulo';
import { ExLibrisCamaraIllustration } from '../components/common/Illustrations';

export const TeoriaPage: React.FC = () => {
  const { selectedSubmodule, setSelectedSubmodule, navigateToSimulado } =
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
    devBypassSimuladoLock,
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
  const totalTermosModulo = React.useMemo(() => {
    return dicionarioService.obterTermosPorModulo(currentMacro.id).length;
  }, [currentMacro.id]);
  const moduleTheme = getModuleTheme(currentMacro.id);

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

  // Verificação de Acesso Global ao Módulo (Regra 2.2)
  const statusAcesso =
    currentMacro.id === 'm2-5'
      ? { moduloId: 'm2-5', moduloNumero: 2.5, liberado: true }
      : verificarAcessoModulo(
          currentMacro.id,
          progressoGlobal,
          historicoSimulados || [],
          devBypassSimuladoLock
        );

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

  // Se o módulo estiver bloqueado pedagogicamente (Regra 2.2)
  if (!statusAcesso.liberado) {
    return (
      <TelaBloqueioModulo
        moduloNumero={statusAcesso.moduloNumero}
        moduloAnteriorNumero={statusAcesso.moduloAnteriorNumero || 1}
        simuladoAnteriorId={statusAcesso.simuladoAnteriorId || 'm1-fundamentos'}
        notaConsolidadaAtual={statusAcesso.notaConsolidadaAnterior}
        motivo={statusAcesso.motivoBloqueio}
      />
    );
  }

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
              className="px-2 py-0.5 rounded text-[11px] font-mono font-bold shrink-0 shadow-2xs"
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
            <span className="font-mono text-[10px] text-ink-2 bg-surface-2 px-2 py-0.5 rounded border border-border">
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
              <span className="px-1 py-0.2 rounded text-[10px] font-mono bg-black/20 text-white ml-0.5">
                Esc
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex gap-8 items-start">
        {/* Coluna Central de Leitura com largura configurável */}
        <main className={`flex-1 min-w-0 ${columnWidthClass} mx-auto space-y-6 sm:space-y-8`}>
          {/* Regra B6: No desktop mantenha só a sidebar; no mobile, um único seletor limpo sem redundâncias */}
          <div className="block lg:hidden space-y-1.5 mb-2.5">
            <label
              htmlFor="mobile-submodule-selector"
              className="text-[11px] font-mono text-ink-2 font-semibold uppercase tracking-wider flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                Submódulo Ativo
              </span>
              <span className="text-[10px] text-accent font-sans font-semibold">
                {currentMacro.codigo} • {currentSub.numero}
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
                className="w-full py-2 pl-3 pr-9 rounded-xl bg-surface border border-border text-ink text-xs font-sans font-medium focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer shadow-editorial-xs"
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
          <header className="border-b border-border pb-4 sm:pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <ModuleBadge moduleId={currentMacro.id} size="sm" />
                <span className="font-mono text-[11px] sm:text-xs text-ink font-semibold uppercase tracking-wider">
                  {currentMacro.titulo_curto || currentMacro.titulo} • Submódulo {currentSub.numero}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] sm:text-xs text-ink-2 hidden sm:flex items-center gap-1">
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
                  <span className="hidden sm:inline-block px-1 py-0.2 rounded text-[10px] font-mono bg-black/10 dark:bg-white/10 ml-0.5">
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
              className="h-1 w-16 sm:w-20 rounded-full mb-2.5 sm:mb-3"
              style={{ backgroundColor: moduleTheme.solidVar }}
            />

            <div className="flex items-start justify-between gap-4 mb-2.5 sm:mb-3">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-ink tracking-tight flex-1 leading-tight">
                {currentSub.titulo}
              </h1>
              <div className="hidden lg:block shrink-0 opacity-80 hover:opacity-100 transition-opacity" title="Biblioteca da Câmara dos Deputados · Acervo Canônico">
                <ExLibrisCamaraIllustration className="w-14 h-14 text-accent" />
              </div>
            </div>

            {/* Chip Unificado Soberano de Status (D13) */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              {learningState.status === 'concluida' || (learningState.status as string) === 'concluido' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 bg-ok-soft border border-ok text-ok shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Submódulo Concluído ({learningState.taxaAcertoPercent}% de acertos · mín. 85%)</span>
                </div>
              ) : learningState.status === 'em_revisao_dirigida' || (learningState.status as string) === 'em_revisao' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 text-amber-500 shadow-2xs">
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
          <nav
            aria-label="Etapas pedagógicas deste submódulo"
            className="hidden md:block bg-surface-2/70 border border-border rounded-xl p-3 shadow-2xs"
          >
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-2">
                Jornada do Submódulo (Ciclo de Domínio)
              </span>
              <span className="text-[11px] font-mono text-ink-2">
                4 Etapas Obrigatórias
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-teoria')}
                className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border/80 hover:border-accent hover:bg-accent-soft/30 transition-all text-ink font-semibold group cursor-pointer text-left"
              >
                <div className="w-6 h-6 rounded-md bg-accent-soft text-accent flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  1
                </div>
                <div className="min-w-0">
                  <span className="block font-bold text-xs text-ink group-hover:text-accent leading-none">
                    1. Ler
                  </span>
                  <span className="text-[10px] text-ink-2 truncate block mt-1">
                    Teoria & Doutrina
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => scrollToAnchor('sec-recuperacao-ativa')}
                className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border/80 hover:border-accent hover:bg-accent-soft/30 transition-all text-ink font-semibold group cursor-pointer text-left"
              >
                <div className="w-6 h-6 rounded-md bg-accent-soft text-accent flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  2
                </div>
                <div className="min-w-0">
                  <span className="block font-bold text-xs text-ink group-hover:text-accent leading-none">
                    2. Praticar
                  </span>
                  <span className="text-[10px] text-ink-2 truncate block mt-1">
                    Recuperação Ativa
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => scrollToAnchor('sec-mnemonicos')}
                className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border/80 hover:border-accent hover:bg-accent-soft/30 transition-all text-ink font-semibold group cursor-pointer text-left"
              >
                <div className="w-6 h-6 rounded-md bg-accent-soft text-accent flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  3
                </div>
                <div className="min-w-0">
                  <span className="block font-bold text-xs text-ink group-hover:text-accent leading-none">
                    3. Revisar
                  </span>
                  <span className="text-[10px] text-ink-2 truncate block mt-1">
                    Mnemônicos & Síntese
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => scrollToAnchor('sec-checkpoints')}
                className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border/80 hover:border-accent hover:bg-accent-soft/30 transition-all text-ink font-semibold group cursor-pointer text-left"
              >
                <div className="w-6 h-6 rounded-md bg-accent-soft text-accent flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  4
                </div>
                <div className="min-w-0">
                  <span className="block font-bold text-xs text-ink group-hover:text-accent leading-none">
                    4. Verificar
                  </span>
                  <span className="text-[10px] text-ink-2 truncate block mt-1">
                    Micro-Checkpoints
                  </span>
                </div>
              </button>
            </div>

            {/* Acesso rápido às seções complementares sem separadores soltos */}
            <div className="flex flex-wrap items-center gap-2 pt-2.5 mt-2.5 border-t border-border/60 text-[11px] text-ink-2">
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
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-glossario-modulo')}
                className="hover:text-accent px-1.5 py-0.5 rounded hover:bg-surface transition-colors cursor-pointer text-accent font-semibold ml-auto"
              >
                Glossário do Bloco ({totalTermosModulo})
              </button>
            </div>
          </nav>

          {/* Bloco 1: Autores Canônicos */}
          <div id="sec-autores">
            <AutoresCanonicos autores={currentSub.mnemonicos.autores} />
          </div>

          {/* Bloco 2: Alertas Cebraspe da Banca */}
          {currentSub.alertasCebraspe.length > 0 && (
            <div id="sec-alertas" className="my-6">
              <AlertaCebraspe alertas={currentSub.alertasCebraspe} />
            </div>
          )}

          {/* Bloco 3: Matriz Comparativa (Zero Rolagem Horizontal) */}
          {currentSub.quadroComparativo && (
            <div id="sec-quadro" className="my-8">
              <TabelaComparativa quadro={currentSub.quadroComparativo} />
            </div>
          )}

          {/* Bloco 4: Teoria Editorial */}
          <article id="sec-teoria" className="border-t border-border pt-6">
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-2 font-semibold">
                Doutrina e Bibliografia Especializada
              </span>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-tight mt-1">
                Fundamentação Teórica
              </h2>
            </div>

            <MarkdownRenderer content={currentSub.teoriaDensaMarkdown} />
          </article>

          {/* Bloco 5: Checkpoints de Recuperação Ativa */}
          <section
            id="sec-checkpoints"
            aria-labelledby="checkpoints-title"
            className="border-t border-border pt-8 my-8 space-y-6"
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
                className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-tight"
              >
                Micro-Checkpoints de Fixação
              </h2>
              <p className="text-xs sm:text-sm text-ink-2 font-serif mt-1">
                Responda antes de consultar a justificativa. Julgue como a banca julgaria.
              </p>
            </div>

            <div className="space-y-4">
              {currentSub.checkpoints.map((cp, idx) => (
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
                    versaoCorreta: (cp as any).versao_correta,
                  }}
                  contexto="teoria"
                  contadorTexto={`Checkpoint ${idx + 1} de ${currentSub.checkpoints.length}`}
                />
              ))}
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
            className="border-t border-border pt-8 my-8 space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                  MNEMÔNICOS E SÍNTESE
                </span>
              </div>
              <h2
                id="mnemonicos-title"
                className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-tight"
              >
                Resumo Rápido e Armadilhas
              </h2>
              <p className="text-xs sm:text-sm text-ink-2 font-serif mt-1">
                Linha do tempo histórica, ficha dos autores canônicos e pegadinhas da banca.
              </p>
            </div>

            <MnemonicosTabs mnemonicos={currentSub.mnemonicos} />
          </section>

          {/* Bloco 7: Glossário Canônico do Módulo */}
          <section id="sec-glossario-modulo" className="border-t border-border pt-8 my-8">
            <GlossarioDoModulo
              moduloId={currentMacro.id}
              moduloCodigo={currentMacro.codigo}
              moduloTitulo={currentMacro.titulo_curto || currentMacro.titulo}
            />
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
                        {isMini
                          ? 'Pronto para o Simulado Especial de 30 Questões Cebraspe?'
                          : 'Pronto para o Simulado de 100 Questões Cebraspe?'}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-2 font-serif max-w-2xl leading-relaxed">
                        {isMini ? (
                          <>
                            Você completou o estudo essencial sobre os <strong>órgãos públicos</strong>, regras de <strong>catalogação governamental</strong> e a <strong>Biblioteca Pedro Aleixo</strong>. Teste sua retenção agora no caderno com <strong>30 assertivas C/E inéditas</strong> comentadas item a item.
                          </>
                        ) : (
                          <>
                            Você completou toda a base teórica de <strong>{currentMacro.titulo_curto || currentMacro.titulo}</strong>. Agora aplique o <strong>Estudo Reverso imediato</strong> no caderno com 100 assertivas comentadas item a item.
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
                    <span>{isMini ? 'Iniciar Simulado Especial (30Q)' : 'Iniciar Simulado 100Q'}</span>
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
                <div className="py-2 px-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-sans text-xs flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4 shrink-0 text-amber-500" />
                  <span>{rodapeNav.motivoBloqueioSubmodulo}</span>
                </div>
              ) : (
                <div className="py-2 px-3.5 rounded-xl bg-surface-2 border border-border text-ink-2 font-sans text-xs flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Conclua a leitura e atinja 85% na verificação para concluir</span>
                </div>
              )}
            </div>

            {/* Ação Principal Direita: Próximo Submódulo ou Portão do Simulado (Regra 2.1) */}
            {rodapeNav.isUltimoDoModulo ? (
              // ÚLTIMO SUBMÓDULO DO MÓDULO (ex: 1.4): NUNCA avança para 2.1 sem simulado!
              rodapeNav.simuladoAprovado ? (
                <button
                  type="button"
                  onClick={() => {
                    const proximoModNum = rodapeNav.moduloNumero + 1;
                    setSelectedSubmodule(`${proximoModNum}.1`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-ok text-white font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer hover:bg-ok/90"
                >
                  <span>Começar Módulo {rodapeNav.moduloNumero + 1}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : rodapeNav.todosSubmodulosDoModuloConcluidos ? (
                <div className="flex flex-col items-center sm:items-end gap-1 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => navigateToSimulado(rodapeNav.simuladoModuloId)}
                    className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-accent text-accent-contrast font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer hover:bg-accent/90"
                  >
                    <span>Ir ao simulado do M{rodapeNav.moduloNumero} (100 itens)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-serif text-ink-2">
                    O M{rodapeNav.moduloNumero + 1} será liberado ao atingir 80% no simulado
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center sm:items-end gap-1 w-full sm:w-auto">
                  <button
                    type="button"
                    disabled
                    className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-surface-2 border border-border text-ink-2 font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                    title="Conclua todos os submódulos para desbloquear o simulado"
                  >
                    <Lock className="w-4 h-4 text-ink-2" />
                    <span>Ir ao simulado do M{rodapeNav.moduloNumero} (100 itens)</span>
                  </button>
                  <span className="text-[11px] font-serif text-ink-2">
                    Conclua todos os submódulos para liberar o simulado
                  </span>
                </div>
              )
            ) : (
              // SUBMÓDULOS INTERMEDIÁRIOS (ex: 1.1, 1.2, 1.3)
              <button
                type="button"
                disabled={!rodapeNav.podeAvancarProximoSubmodulo}
                onClick={() => {
                  if (rodapeNav.proximoSubmoduloNumero) {
                    setSelectedSubmodule(rodapeNav.proximoSubmoduloNumero);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`w-full sm:w-auto py-2.5 px-4 rounded-lg font-sans text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                  rodapeNav.podeAvancarProximoSubmodulo
                    ? 'bg-surface border border-border text-ink hover:border-accent cursor-pointer'
                    : 'bg-surface-2 border border-border text-ink-2 opacity-60 cursor-not-allowed'
                }`}
                title={
                  !rodapeNav.podeAvancarProximoSubmodulo
                    ? rodapeNav.motivoBloqueioSubmodulo || 'Conclua este submódulo para avançar'
                    : undefined
                }
              >
                <span>Submódulo {rodapeNav.proximoSubmoduloNumero}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </footer>
        </main>

        {/* Coluna Lateral Direita Fixa no Desktop Largo (>= 1440px / 3 colunas fluídas) */}
        <aside
          aria-label="Resumo rápido lateral"
          className="hidden 2xl:block w-80 sticky top-20 bg-surface rounded-xl border border-border p-4.5 shadow-xs max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin"
        >
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border">
            <Sparkles className="w-4 h-4 text-accent" />
            <h3 className="font-sans font-bold text-ink text-sm">Resumo Rápido</h3>
          </div>
          <MnemonicosTabs mnemonicos={currentSub.mnemonicos} isCompact />
        </aside>
      </div>

      {/* Espaçador de segurança para evitar que a barra e botão flutuante cubram texto no mobile */}
      <div className="h-28 md:hidden w-full shrink-0" aria-hidden="true" />

      {/* Botão Flutuante + Bottom Sheet no Mobile */}
      <MnemonicosDrawerMobile
        mnemonicos={currentSub.mnemonicos}
        tituloModulo={`Submódulo ${currentSub.numero}: ${currentSub.titulo}`}
      />

      {/* Modal de Preferências de Leitura */}
      <ReaderPreferencesModal
        isOpen={isReaderPrefsOpen}
        onClose={() => setIsReaderPrefsOpen(false)}
      />
    </div>
  );
};
