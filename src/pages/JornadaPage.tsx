import React, { useState, useEffect } from 'react';
import {
  Compass,
  CheckCircle2,
  Lock,
  Play,
  RotateCcw,
  BookOpen,
  Award,
  DoorOpen,
  HelpCircle,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { COURSE_REGISTRY } from '../content/registry';
import { getModuleTheme } from '../domain/moduleThemes';
import { ComoFuncionaJornadaModal } from '../components/jornada/ComoFuncionaJornadaModal';
import { PortaoVerificacaoModal } from '../components/jornada/PortaoVerificacaoModal';
import { Button } from '../components/common/Button';

export const JornadaPage: React.FC = () => {
  const {
    getJornadaState,
    modoLivre,
    setModoLivre,
  } = useProgressStore();

  const { setSelectedSubmodule, setActiveView } = useNavigationStore();

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [activePortaoId, setActivePortaoId] = useState<string | null>(null);
  const [showModoLivreConfirm, setShowModoLivreConfirm] = useState(false);

  // Exibe modal explicativo no primeiro acesso
  useEffect(() => {
    const seen = localStorage.getItem('hnc_jornada_intro_seen');
    if (!seen) {
      setIsHelpOpen(true);
    }
  }, []);

  const jornada = getJornadaState();
  const { etapas, metricas, proximoPasso } = jornada;

  const handleOpenPortao = (etapaId: string) => {
    setActivePortaoId(etapaId);
  };

  const handleOpenTeoria = (subNumero: string) => {
    setSelectedSubmodule(subNumero);
    setActiveView('teoria');
  };

  const handleToggleModoLivre = () => {
    if (!modoLivre) {
      setShowModoLivreConfirm(true);
    } else {
      setModoLivre(false);
    }
  };

  const confirmarAtivacaoModoLivre = () => {
    setModoLivre(true);
    setShowModoLivreConfirm(false);
  };

  // Módulos M1 a M10 de Conhecimentos Específicos
  const modulosEstatisticos = COURSE_REGISTRY.filter((m) => {
    const num = typeof m.numero === 'number' ? m.numero : parseInt(String(m.numero).replace(/\D/g, ''), 10);
    return !isNaN(num) && num >= 1 && num <= 10;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      {/* CABEÇALHO DA JORNADA */}
      <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink">
                  Jornada de Domínio Cebraspe
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-surface-2 border border-border text-ink-2">
                  Trilha Sequencial
                </span>
                {modoLivre && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300">
                    Modo Livre Ativo (Fora da Trilha)
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-ink-2">
                Progressão sequencial por macro-módulo com verificação de 85% e Portais de Revisão cumulativos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsHelpOpen(true)}
              className="flex items-center gap-1.5 text-xs"
            >
              <HelpCircle className="w-4 h-4 text-ink-2" />
              <span>Como funciona</span>
            </Button>

            <Button
              variant={modoLivre ? 'primary' : 'ghost'}
              size="sm"
              onClick={handleToggleModoLivre}
              className={`text-xs ${modoLivre ? 'bg-amber-600 hover:bg-amber-700 text-white' : ''}`}
            >
              {modoLivre ? 'Desativar Modo Livre' : 'Modo Livre'}
            </Button>
          </div>
        </div>

        {/* CHIPS DE MÉTRICAS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-border/80">
          <div className="p-3 rounded-xl bg-surface-2/40 border border-border">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Taxa de Domínio</span>
            <span className="text-base sm:text-lg font-bold text-ink font-mono">
              {metricas.taxaDominioPercent}%
            </span>
          </div>
          <div className="p-3 rounded-xl bg-surface-2/40 border border-border">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Etapas Concluídas</span>
            <span className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              {metricas.etapasConcluidas} / {metricas.totalEtapas}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-surface-2/40 border border-border">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Prontidão Estimada</span>
            <span className="text-base sm:text-lg font-bold text-accent font-mono">
              {metricas.prontidaoPercent}%
            </span>
          </div>
          <div className="p-3 rounded-xl bg-surface-2/40 border border-border">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Itens Resolvidos</span>
            <span className="text-base sm:text-lg font-bold text-ink-2 font-mono">
              {metricas.itensRevisadosTotal}
            </span>
          </div>
        </div>

        {/* PRÓXIMO PASSO SUGERIDO */}
        {proximoPasso && proximoPasso.status !== 'concluida' && (
          <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-accent block tracking-wider">
                  Próximo Passo Recomendado
                </span>
                <span className="text-sm font-semibold text-ink">
                  {proximoPasso.titulo}
                </span>
              </div>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleOpenPortao(proximoPasso.etapaId)}
              className="flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>{proximoPasso.descricaoAcao}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* MAPA DA TRILHA DE MÓDULOS */}
      <div className="space-y-12 relative">
        {modulosEstatisticos.map((macro) => {
          const k = typeof macro.numero === 'number' ? macro.numero : parseInt(String(macro.numero).replace(/\D/g, ''), 10);
          const theme = getModuleTheme(macro.id);
          const submodulos = macro.modulosFilhos || [];
          const desafioId = `desafio-${macro.id}`;
          const portalId = `portal-${macro.id}`;
          const etapaDesafio = etapas[desafioId];
          const etapaPortal = etapas[portalId];

          return (
            <div
              key={macro.id}
              className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-6 relative overflow-hidden"
            >
              {/* Barra lateral temática */}
              <div
                className="absolute top-0 left-0 bottom-0 w-1.5"
                style={{ backgroundColor: theme.primaryColor }}
              />

              {/* Título do Macro-Módulo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-sm border shadow-2xs"
                    style={{
                      backgroundColor: `${theme.primaryColor}15`,
                      borderColor: `${theme.primaryColor}30`,
                      color: theme.primaryColor,
                    }}
                  >
                    M{k}
                  </span>
                  <div>
                    <h2 className="text-lg font-serif font-bold text-ink">
                      Módulo {k}: {macro.titulo}
                    </h2>
                    <p className="text-xs text-ink-2">{macro.descricao}</p>
                  </div>
                </div>

                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold self-start sm:self-auto border"
                  style={{
                    backgroundColor: `${theme.primaryColor}10`,
                    borderColor: `${theme.primaryColor}25`,
                    color: theme.primaryColor,
                  }}
                >
                  {submodulos.length} Submódulos + Desafio
                </span>
              </div>

              {/* GRADE DE SUBMÓDULOS (Nós da Trilha) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {submodulos.map((sub) => {
                  const etapaSub = etapas[sub.numero];
                  const isBloqueada = etapaSub?.status === 'bloqueada';
                  const isConcluida = etapaSub?.status === 'concluida';
                  const isRevisaoDirigida = etapaSub?.status === 'em_revisao_dirigida';
                  const isAtiva = proximoPasso?.etapaId === sub.numero;

                  return (
                    <div
                      key={sub.id}
                      className={`rounded-xl border p-4 flex flex-col justify-between gap-3 transition-all relative ${
                        isConcluida
                          ? 'bg-surface-2/30 border-emerald-500/30'
                          : isRevisaoDirigida
                          ? 'bg-amber-500/5 border-amber-500/30'
                          : isBloqueada
                          ? 'bg-surface-2/20 border-border/50 opacity-60'
                          : 'bg-surface hover:bg-surface-2/40 border-border shadow-2xs'
                      }`}
                    >
                      {/* Marcador "Você está aqui" */}
                      {isAtiva && (
                        <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-accent text-accent-text font-mono text-[9px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>Você está aqui</span>
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold font-mono text-ink">
                            {sub.numero}
                          </span>

                          {/* Badge de status */}
                          {isConcluida ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Concluída</span>
                            </span>
                          ) : isRevisaoDirigida ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-[10px] font-semibold">
                              <RotateCcw className="w-3 h-3" />
                              <span>Revisão Dirigida</span>
                            </span>
                          ) : isBloqueada ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-2 border border-border text-ink-2 text-[10px] font-semibold">
                              <Lock className="w-3 h-3" />
                              <span>Bloqueada</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-[10px] font-semibold">
                              <Play className="w-3 h-3" />
                              <span>Disponível</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-xs sm:text-sm font-serif font-bold text-ink line-clamp-2">
                          {sub.titulo_curto || sub.titulo}
                        </h3>

                        {/* Requisito de desbloqueio quando bloqueada */}
                        {isBloqueada && etapaSub?.requisitoDesbloqueio && (
                          <p className="text-[11px] text-ink-2 leading-snug">
                            {etapaSub.requisitoDesbloqueio}
                          </p>
                        )}
                      </div>

                      {/* Botões de Ação */}
                      <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-border/60">
                        <button
                          type="button"
                          onClick={() => handleOpenTeoria(sub.numero)}
                          disabled={isBloqueada && !modoLivre}
                          className="px-2 py-1.5 rounded-lg border border-border text-[11px] font-medium text-ink hover:bg-surface-2 transition-colors flex items-center justify-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <BookOpen className="w-3 h-3 text-ink-2" />
                          <span>Teoria</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleOpenPortao(sub.numero)}
                          disabled={isBloqueada && !modoLivre}
                          className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                            isConcluida
                              ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                              : isRevisaoDirigida
                              ? 'bg-amber-500 hover:bg-amber-600 text-white'
                              : 'bg-accent hover:bg-accent/90 text-accent-text'
                          }`}
                        >
                          <ShieldCheck className="w-3 h-3" />
                          <span>{isConcluida ? 'Refazer' : 'Verificar'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* DESAFIO DO MÓDULO (Simulado de 100 itens) */}
              {etapaDesafio && (
                <div
                  className={`p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    etapaDesafio.status === 'concluida'
                      ? 'bg-surface-2/40 border-emerald-500/30'
                      : etapaDesafio.status === 'bloqueada'
                      ? 'bg-surface-2/20 border-border/60 opacity-70'
                      : 'bg-accent/5 border-accent/25 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
                      style={{
                        backgroundColor: `${theme.primaryColor}15`,
                        borderColor: `${theme.primaryColor}30`,
                        color: theme.primaryColor,
                      }}
                    >
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif font-bold text-sm sm:text-base text-ink">
                          {etapaDesafio.titulo}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-surface border border-border text-ink-2">
                          100 Itens · Mín. 85 Acertos
                        </span>
                      </div>
                      <p className="text-xs text-ink-2">
                        {etapaDesafio.status === 'bloqueada'
                          ? etapaDesafio.requisitoDesbloqueio
                          : 'Simulado completo com 25 assertivas por submódulo e feedback guiado imediato.'}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant={etapaDesafio.status === 'concluida' ? 'outline' : 'primary'}
                    size="sm"
                    disabled={etapaDesafio.status === 'bloqueada' && !modoLivre}
                    onClick={() => handleOpenPortao(desafioId)}
                    className="self-start sm:self-auto flex items-center gap-1.5"
                  >
                    <span>{etapaDesafio.status === 'concluida' ? 'Revisar Desafio' : 'Iniciar Desafio'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* PORTAL DE REVISÃO P(k) (SOMENTE PARA k >= 2 — Regra D.1) */}
              {etapaPortal && (
                <div
                  className={`p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    etapaPortal.status === 'concluida'
                      ? 'bg-purple-500/5 border-purple-500/30'
                      : etapaPortal.status === 'bloqueada'
                      ? 'bg-surface-2/20 border-border/60 opacity-70'
                      : 'bg-purple-500/10 border-purple-500/30 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                      <DoorOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif font-bold text-sm sm:text-base text-ink">
                          {etapaPortal.titulo}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-surface border border-purple-500/30 text-purple-700 dark:text-purple-300">
                          Portal P({k}) · 20 Itens (10C / 10E)
                        </span>
                      </div>
                      <p className="text-xs text-ink-2">
                        {etapaPortal.status === 'bloqueada'
                          ? etapaPortal.requisitoDesbloqueio
                          : `Revisão cumulativa: 70% de M${k - 1} e 30% de módulos anteriores. Mínimo 17 acertos para liberar o próximo módulo.`}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant={etapaPortal.status === 'concluida' ? 'outline' : 'primary'}
                    size="sm"
                    disabled={etapaPortal.status === 'bloqueada' && !modoLivre}
                    onClick={() => handleOpenPortao(portalId)}
                    className="self-start sm:self-auto flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <span>{etapaPortal.status === 'concluida' ? 'Portal Vencido' : 'Entrar no Portal'}</span>
                    <DoorOpen className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          );
        })}

        {/* ESTRUTURA PARALELA: CONHECIMENTOS GERAIS (Regra F.4) */}
        <div className="bg-surface-2/30 border border-dashed border-border rounded-2xl p-6 text-center space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-surface border border-border text-ink-2">
            Macro-Bloco G · Conhecimentos Gerais
          </span>
          <h3 className="text-base font-serif font-bold text-ink">
            Língua Portuguesa, Raciocínio Lógico e Inglês
          </h3>
          <p className="text-xs text-ink-2 max-w-md mx-auto">
            Trilha paralela aguardando a publicação do edital da Câmara dos Deputados para parametrização oficial. Não bloqueia a progressão de M1 a M10.
          </p>
        </div>
      </div>

      {/* MODAL COMO FUNCIONA A JORNADA */}
      <ComoFuncionaJornadaModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* MODAL PORTÃO DE VERIFICAÇÃO */}
      {activePortaoId && (
        <PortaoVerificacaoModal
          isOpen={Boolean(activePortaoId)}
          onClose={() => setActivePortaoId(null)}
          etapaId={activePortaoId}
        />
      )}

      {/* DIÁLOGO DE CONFIRMAÇÃO DO MODO LIVRE (Regra D.5) */}
      {showModoLivreConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-surface border border-border rounded-2xl p-6 shadow-editorial-lg space-y-4">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="font-serif font-bold text-base text-ink">
                Ativar Navegação em Modo Livre?
              </h3>
            </div>
            <p className="text-xs text-ink-2 leading-relaxed">
              O Modo Livre permite navegar e responder etapas fora de ordem. No entanto, qualquer progresso obtido nesse modo será marcado como <strong className="text-ink">fora da trilha</strong> e não contará para os requisitos de desbloqueio formal nem para os indicadores oficiais de domínio.
            </p>
            <div className="pt-2 flex items-center justify-end gap-3">
              <Button variant="ghost" size="sm" onClick={() => setShowModoLivreConfirm(false)}>
                Cancelar
              </Button>
              <Button variant="primary" size="sm" onClick={confirmarAtivacaoModoLivre} className="bg-amber-600 hover:bg-amber-700 text-white">
                Confirmar Ativação
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
