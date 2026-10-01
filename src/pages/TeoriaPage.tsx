import React, { useState, useEffect } from 'react';
import { useNavigationStore } from '../store/useNavigationStore';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { AutoresCanonicos } from '../components/content-blocks/AutoresCanonicos';
import { AlertaCebraspe } from '../components/content-blocks/AlertaCebraspe';
import { TabelaComparativa } from '../components/content-blocks/TabelaComparativa';
import { CheckpointCard } from '../components/content-blocks/CheckpointCard';
import { MarkdownRenderer } from '../components/common/MarkdownRenderer';
import { MnemonicosTabs } from '../components/content-blocks/MnemonicosTabs';
import { MnemonicosDrawerMobile } from '../components/content-blocks/MnemonicosDrawerMobile';
import {
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  List,
  ArrowRight,
  Sparkles,
  BookOpen,
  RotateCcw,
  ShieldCheck,
  Sliders,
} from 'lucide-react';
import { getModuleTheme } from '../domain/moduleThemes';
import { ModuleBadge } from '../components/common/ModuleBadge';
import { TeoriaStickyBar } from '../components/layout/TeoriaStickyBar';
import { calculateSubmoduleStatus, getRequiredSectionsForSubmodule } from '../domain/learningEngine';
import { ActiveRetrievalExercises } from '../components/content-blocks/ActiveRetrievalExercises';
import { useReaderPreferencesStore } from '../store/useReaderPreferencesStore';
import { ReaderPreferencesModal } from '../components/common/ReaderPreferencesModal';

export const TeoriaPage: React.FC = () => {
  const { selectedSubmodule, setSelectedSubmodule, setCurrentRoute } =
    useNavigationStore();
  const {
    modulosLidosIds,
    checkpointsRespondidos,
    secoesVisualizadas,
    registrarSecaoVisualizada,
    salvarCheckpoint,
    resetarCheckpoint,
    setUltimoModuloAcessado,
  } = useProgressStore();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReaderPrefsOpen, setIsReaderPrefsOpen] = useState(false);
  const { columnWidth } = useReaderPreferencesStore();

  const columnWidthClass =
    columnWidth === 'focus'
      ? 'max-w-2xl'
      : columnWidth === 'wide'
      ? 'max-w-4xl'
      : 'max-w-3xl';

  // Lista plana de todos os submódulos do curso (40 submódulos, 1.1 a 10.4)
  const allSubmodules = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);

  // Submódulo ativo selecionado
  const currentSub =
    allSubmodules.find(
      (s) => s.numero === selectedSubmodule || s.id === selectedSubmodule
    ) || allSubmodules[0];

  // Macro-módulo pai correspondente
  const currentMacro =
    COURSE_REGISTRY.find((m) =>
      m.modulosFilhos.some((s) => s.id === currentSub.id)
    ) || COURSE_REGISTRY[0];

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
  }, [currentSub.id, registrarSecaoVisualizada]);

  // Índices para navegação sequencial contínua (atravessa submódulos e blocos)
  const currentIndex = allSubmodules.findIndex((s) => s.id === currentSub.id);
  const prevSub = currentIndex > 0 ? allSubmodules[currentIndex - 1] : null;
  const nextSub =
    currentIndex < allSubmodules.length - 1 ? allSubmodules[currentIndex + 1] : null;

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

      {/* Sticky Context Bar Mobile (Abaixo do Header no Mobile - Parte F) */}
      <TeoriaStickyBar
        macroId={currentMacro.id}
        submodulo={currentSub}
        scrollProgress={scrollProgress}
      />

      <div className="max-w-7xl mx-auto flex gap-8 items-start">
        {/* Coluna Central de Leitura com largura configurável */}
        <main className={`flex-1 min-w-0 ${columnWidthClass} mx-auto space-y-8`}>
          {/* Seletor de Macro-Módulos (Blocos A a J / M1 a M10) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-sans text-ink-2 px-1">
              <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                Blocos Curriculares da Câmara
              </span>
              <span className="font-mono">
                {currentMacro.codigo} ({currentMacro.modulosFilhos.length} subtópicos)
              </span>
            </div>

            {/* Scroll horizontal com os 10 blocos */}
            <div className="flex items-center gap-1.5 p-1.5 bg-surface-2/70 rounded-xl border border-border overflow-x-auto no-scrollbar">
              {COURSE_REGISTRY.map((macro) => {
                const isCurrentMacro = macro.id === currentMacro.id;
                const subsLidosCount = macro.modulosFilhos.filter((s) =>
                  modulosLidosIds.includes(s.id)
                ).length;
                const isMacroFullCompleted =
                  subsLidosCount === macro.modulosFilhos.length;

                return (
                  <button
                    key={macro.id}
                    type="button"
                    onClick={() => {
                      setSelectedSubmodule(macro.modulosFilhos[0].numero);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`shrink-0 py-1.5 px-3 rounded-lg text-xs font-sans font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                      isCurrentMacro
                        ? 'bg-surface text-ink shadow-xs border border-border/80'
                        : 'text-ink-2 hover:text-ink hover:bg-surface/50'
                    }`}
                  >
                    <span>{macro.codigo}</span>
                    <span className="hidden sm:inline text-[11px] font-normal opacity-80">
                      {macro.titulo.split(' ')[0]}
                    </span>
                    {isMacroFullCompleted && (
                      <CheckCircle2 className="w-3 h-3 text-ok shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Seletor Segmentado de Submódulos do Macro-Módulo Ativo (Grid 2x2 no mobile, 4 colunas em sm+ - Parte F) */}
            <nav
              aria-label={`Submódulos de ${currentMacro.titulo}`}
              className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-surface-2 rounded-xl border border-border"
            >
              {currentMacro.modulosFilhos.map((sub) => {
                const active = sub.id === currentSub.id;
                const completed = modulosLidosIds.includes(sub.id);

                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => {
                      setSelectedSubmodule(sub.numero);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`min-h-[44px] py-2 px-2.5 rounded-lg text-xs font-sans font-semibold flex items-center justify-between gap-1.5 transition-colors cursor-pointer ${
                      active
                        ? 'bg-surface text-ink shadow-xs border border-border/80'
                        : 'text-ink-2 hover:text-ink hover:bg-surface/50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="font-mono text-xs shrink-0 font-bold">{sub.numero}</span>
                      <span className="truncate text-[11px] font-normal text-left">
                        {sub.titulo}
                      </span>
                    </div>
                    {completed && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-ok shrink-0 ml-1" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Cabeçalho do Submódulo */}
          <header className="border-b border-border pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <ModuleBadge moduleId={currentMacro.id} size="sm" />
                <span className="font-mono text-xs text-ink font-semibold uppercase tracking-wider">
                  {currentMacro.titulo} • Submódulo {currentSub.numero}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-2 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  ~{currentSub.tempoEstimadoMinutos} min de leitura profunda
                </span>
                <button
                  type="button"
                  onClick={() => setIsReaderPrefsOpen(true)}
                  className="px-2 py-1 rounded-md bg-surface-2 border border-border text-ink hover:border-accent text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Preferências de leitura (fonte, largura, tamanho)"
                >
                  <Sliders className="w-3.5 h-3.5 text-accent" />
                  <span>Leitura</span>
                </button>
              </div>
            </div>

            {/* Faixa fina plana (4px, sem gradiente) do cabeçalho da Teoria (Parte C) */}
            <div
              className="h-1 w-20 rounded-full mb-3"
              style={{ backgroundColor: moduleTheme.solidVar }}
            />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-ink tracking-tight mb-3">
              {currentSub.titulo}
            </h1>

            <div className="flex items-center justify-between pt-2">
              {learningState.status === 'concluido' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 bg-ok-soft border border-ok text-ok shadow-2xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submódulo Concluído ({learningState.taxaAcertoPercent}% de acertos)</span>
                </div>
              ) : learningState.status === 'em_revisao' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 text-amber-500 shadow-2xs">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Em Revisão ({learningState.taxaAcertoPercent}% nos checkpoints · mínimo 70%)</span>
                </div>
              ) : learningState.status === 'em_andamento' ? (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-medium flex items-center gap-1.5 bg-surface-2 border border-border text-ink-2 shadow-2xs">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>
                    Em Leitura ({learningState.secoesLidasCount}/{learningState.secoesTotalCount} seções)
                  </span>
                </div>
              ) : (
                <div className="py-1.5 px-3 rounded-lg text-xs font-sans font-medium flex items-center gap-1.5 bg-surface-2 border border-border text-ink-2 shadow-2xs">
                  <span>Não Iniciado</span>
                </div>
              )}

              <span className="text-xs font-mono text-ink-2">
                Leitura: {scrollProgress}%
              </span>
            </div>
          </header>

          {/* Sumário Rápido de Seções (Desktop apenas - no mobile usa TeoriaStickyBar - A11) */}
          <section
            aria-label="Sumário da Página"
            className="hidden md:block p-3.5 bg-surface-2/60 border border-border rounded-xl text-xs font-sans"
          >
            <div className="flex items-center gap-1.5 font-bold text-ink mb-2">
              <List className="w-4 h-4 text-accent" />
              <span>Navegação Rápida neste Submódulo</span>
            </div>
            <div className="flex flex-wrap gap-2 text-ink-2">
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-autores')}
                className="hover:text-accent hover:underline py-0.5"
              >
                1. Autores Canônicos
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-alertas')}
                className="hover:text-accent hover:underline py-0.5"
              >
                2. Alertas Cebraspe
              </button>
              <span>•</span>
              {currentSub.quadroComparativo && (
                <>
                  <button
                    type="button"
                    onClick={() => scrollToAnchor('sec-quadro')}
                    className="hover:text-accent hover:underline py-0.5"
                  >
                    3. Matriz Comparativa
                  </button>
                  <span>•</span>
                </>
              )}
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-teoria')}
                className="hover:text-accent hover:underline py-0.5"
              >
                4. Teoria Detalhada
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-checkpoints')}
                className="hover:text-accent hover:underline py-0.5"
              >
                5. Checkpoints
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => scrollToAnchor('sec-mnemonicos')}
                className="hover:text-accent hover:underline py-0.5"
              >
                6. Resumo e Mnemônicos
              </button>
            </div>
          </section>

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
              {currentSub.checkpoints.map((cp) => (
                <CheckpointCard
                  key={cp.id}
                  checkpoint={cp}
                  userAnswer={checkpointsRespondidos[cp.id]}
                  onAnswer={(resp: 'C' | 'E') => salvarCheckpoint(cp.id, resp)}
                  onReset={() => resetarCheckpoint(cp.id)}
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

          {/* Rodapé de Navegação do Submódulo */}
          <footer className="border-t border-border pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevSub ? (
              <button
                type="button"
                onClick={() => {
                  setSelectedSubmodule(prevSub.numero);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Submódulo {prevSub.numero}</span>
              </button>
            ) : (
              <div />
            )}

            {/* Indicador de Conclusão Pedagógica (Conquistado, não marcado livremente) */}
            <div className="w-full sm:w-auto text-center sm:text-left">
              {learningState.status === 'concluido' ? (
                <div className="py-2.5 px-4 rounded-xl bg-ok-soft border border-ok text-ok font-sans text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Domínio Conquistado ({learningState.taxaAcertoPercent}% de acertos)</span>
                </div>
              ) : learningState.status === 'em_revisao' ? (
                <div className="py-2 px-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-sans text-xs flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>Em Revisão: Refaça os checkpoints para atingir ao menos 70%</span>
                </div>
              ) : (
                <div className="py-2 px-3.5 rounded-xl bg-surface-2 border border-border text-ink-2 font-sans text-xs flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    Faltam {learningState.secoesTotalCount - learningState.secoesLidasCount} seções e 70% nos checkpoints
                  </span>
                </div>
              )}
            </div>

            {nextSub ? (
              <button
                type="button"
                onClick={() => {
                  setSelectedSubmodule(nextSub.numero);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all"
              >
                <span>Submódulo {nextSub.numero}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentRoute('simulado')}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-accent text-accent-text font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>Ir para o Simulado 100Q</span>
                <ArrowRight className="w-4 h-4" />
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
