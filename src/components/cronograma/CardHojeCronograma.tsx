import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Flame,
  Check,
} from 'lucide-react';
import {
  CRONOGRAMA_DIAS,
  calcularDiagnosticoCronograma,
  obterCronogramaDia,
  type CronogramaDia,
} from '../../config/cronograma';
import { useProgressStore } from '../../store/useProgressStore';
import { useConceptStore } from '../../store/useConceptStore';
import { useNavigationStore } from '../../store/useNavigationStore';
import { getModuleTheme } from '../../domain/moduleThemes';
import { ModuleBadge } from '../common/ModuleBadge';
import { getItensCadernoErros } from '../../domain/cadernoErros';

interface CardHojeCronogramaProps {
  className?: string;
}

export const CardHojeCronograma: React.FC<CardHojeCronogramaProps> = ({ className = '' }) => {
  const { modulosLidosIds, checkpointsRespondidos, historicoSimulados } = useProgressStore();
  const { estados, getFilaRevisaoHoje } = useConceptStore();
  const { setCurrentRoute, setSelectedSubmodule } = useNavigationStore();

  // Data atual real ou data inicial do cronograma se anterior
  const hojeRealIso = useMemo(() => {
    return new Date().toISOString().split('T')[0];
  }, []);

  const [dataSelecionadaIso, setDataSelecionadaIso] = useState<string>(() => {
    const primeiraData = CRONOGRAMA_DIAS[0].dataIso;
    const ultimaData = CRONOGRAMA_DIAS[CRONOGRAMA_DIAS.length - 1].dataIso;
    if (hojeRealIso < primeiraData) return primeiraData;
    if (hojeRealIso > ultimaData) return ultimaData;
    return hojeRealIso;
  });

  const [mostrarModalPlanoB, setMostrarModalPlanoB] = useState(false);

  // Diagnóstico baseado nos submódulos lidos
  const diagnostico = useMemo(() => {
    return calcularDiagnosticoCronograma(dataSelecionadaIso, modulosLidosIds);
  }, [dataSelecionadaIso, modulosLidosIds]);

  const diaAtual: CronogramaDia | undefined = diagnostico.diaAtual;

  // Repetição Espaçada e Abertura de Recuperação (ao menos 4 módulos)
  const filaHoje = useMemo(() => {
    if (estados) { /* invalidação reativa */ }
    return getFilaRevisaoHoje();
  }, [estados, getFilaRevisaoHoje]);

  const itensErros = useMemo(() => {
    return getItensCadernoErros(checkpointsRespondidos || {}, historicoSimulados || []);
  }, [checkpointsRespondidos, historicoSimulados]);

  // Contagem de módulos distintos na recuperação ativa
  const modulosDiferentesRecuperacao = useMemo(() => {
    const modulosSet = new Set<string>();
    filaHoje.itensNaFila.forEach((item) => {
      if (item.conceito?.moduloId) {
        modulosSet.add(item.conceito.moduloId);
      }
    });
    itensErros.forEach((item) => {
      if (item.macroModuloId) {
        modulosSet.add(item.macroModuloId);
      }
    });
    return modulosSet.size;
  }, [filaHoje.itensNaFila, itensErros]);

  const totalItensAbertura = Math.max(8, Math.min(10, filaHoje.totalPendentes || 8));

  // Navegação de dias
  const indiceAtual = useMemo(() => {
    return CRONOGRAMA_DIAS.findIndex((d) => d.dataIso === dataSelecionadaIso);
  }, [dataSelecionadaIso]);

  const handleDiaAnterior = () => {
    if (indiceAtual > 0) {
      setDataSelecionadaIso(CRONOGRAMA_DIAS[indiceAtual - 1].dataIso);
    }
  };

  const handleProximoDia = () => {
    if (indiceAtual < CRONOGRAMA_DIAS.length - 1) {
      setDataSelecionadaIso(CRONOGRAMA_DIAS[indiceAtual + 1].dataIso);
    }
  };

  const handleIrParaHoje = () => {
    const primeiraData = CRONOGRAMA_DIAS[0].dataIso;
    const ultimaData = CRONOGRAMA_DIAS[CRONOGRAMA_DIAS.length - 1].dataIso;
    if (hojeRealIso < primeiraData) {
      setDataSelecionadaIso(primeiraData);
    } else if (hojeRealIso > ultimaData) {
      setDataSelecionadaIso(ultimaData);
    } else {
      // Se hoje for fim de semana, busca o dia do cronograma mais próximo
      const encontrado = obterCronogramaDia(hojeRealIso);
      if (encontrado) {
        setDataSelecionadaIso(hojeRealIso);
      } else {
        const prox = CRONOGRAMA_DIAS.find((d) => d.dataIso >= hojeRealIso) || CRONOGRAMA_DIAS[0];
        setDataSelecionadaIso(prox.dataIso);
      }
    }
  };

  const handleAbrirSubmodulo = (subId: string) => {
    setSelectedSubmodule(subId);
    setCurrentRoute('teoria');
  };

  const dataFormatada = useMemo(() => {
    if (!diaAtual) return dataSelecionadaIso;
    const partes = diaAtual.dataIso.split('-');
    const diasExtenso = {
      seg: 'Segunda-feira',
      ter: 'Terça-feira',
      qua: 'Quarta-feira',
      qui: 'Quinta-feira',
      sex: 'Sexta-feira',
    };
    return `${partes[2]}/${partes[1]}/${partes[0]} (${diasExtenso[diaAtual.diaSemana]})`;
  }, [diaAtual, dataSelecionadaIso]);

  return (
    <div className={`space-y-4 ${className}`} data-testid="cartao-hoje-cronograma">
      {/* ALERTA DE PLANO B SE HOUVER ATRASO CRÍTICO ATÉ 06/11 */}
      {diagnostico.sugerirPlanoB && (
        <div
          data-testid="alerta-plano-b"
          className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-950 dark:text-amber-100 shadow-editorial-sm space-y-2 animate-fadeIn"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-accent dark:text-amber-300 font-bold text-sm">
              <ShieldAlert className="w-5 h-5 shrink-0 text-accent" />
              <span>Gatilho de Salvaguarda: Plano B Recomendado</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/30">
              {diagnostico.atrasoSubmodulos} submódulos em atraso
            </span>
          </div>

          <p className="text-xs sm:text-sm font-serif leading-relaxed text-amber-900 dark:text-amber-200">
            {diagnostico.mensagemPlanoB}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setMostrarModalPlanoB(true)}
              className="py-1.5 px-3 rounded-lg bg-primary hover:opacity-95 text-white font-sans text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              Ver Detalhes do Plano B (Comprimir M7)
            </button>
            <span className="text-xs text-accent dark:text-amber-300 font-sans">
              Base: M7 representa apenas 0,7% das questões Cebraspe
            </span>
          </div>
        </div>
      )}

      {/* BLOCO PRINCIPAL DO CRONOGRAMA "HOJE" */}
      <div className="bg-surface rounded-2xl border border-border p-5 sm:p-6 shadow-editorial-sm space-y-5">
        {/* CABEÇALHO COM CONTROLES DE DATA E STATUS DO ATRASO */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/70">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20">
                Fase {diagnostico.faseAtual}: {diagnostico.faseAtual === 1 ? 'Cobertura Intercalada' : diagnostico.faseAtual === 2 ? 'Simulados e Lacunas' : 'Fechamento'}
              </span>

              {/* Status de Atraso Acumulado */}
              {diagnostico.atrasoSubmodulos === 0 ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-sans font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Em dia com o cronograma</span>
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-sans font-bold bg-amber-500/10 text-accent dark:text-amber-300 border border-amber-500/20 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{diagnostico.atrasoSubmodulos} {diagnostico.atrasoSubmodulos === 1 ? 'submódulo pendente' : 'submódulos pendentes'}</span>
                </span>
              )}

              <span className="text-xs font-mono text-ink-3">
                Dia {diaAtual?.diaIndice || 1} de 62 úteis
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-ink mt-1 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent shrink-0" />
              <span>{dataFormatada}</span>
            </h2>
          </div>

          {/* Navegador de Dias */}
          <div className="flex items-center gap-1 self-start sm:self-auto bg-surface-2 p-1 rounded-xl border border-border">
            <button
              type="button"
              onClick={handleDiaAnterior}
              disabled={indiceAtual <= 0}
              className="p-1.5 rounded-lg hover:bg-surface text-ink-2 hover:text-ink disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Dia anterior do cronograma"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleIrParaHoje}
              className="px-2.5 py-1 rounded-lg text-xs font-sans font-semibold hover:bg-surface text-ink transition-colors cursor-pointer"
              title="Ir para o dia atual"
            >
              Hoje
            </button>
            <button
              type="button"
              onClick={handleProximoDia}
              disabled={indiceAtual >= CRONOGRAMA_DIAS.length - 1}
              className="p-1.5 rounded-lg hover:bg-surface text-ink-2 hover:text-ink disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Próximo dia do cronograma"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. SEÇÃO DOS SUBMÓDULOS DO DIA (OU ATIVIDADE DA FASE) */}
        {diaAtual?.tipo === 'reserva' ? (
          <div className="p-4 sm:p-5 rounded-xl bg-surface-2/60 border border-border space-y-2">
            <div className="flex items-center gap-2 text-ink font-bold font-serif">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{diaAtual.feriadoNome || 'Dia de Reserva'}</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
              {diaAtual.atividadePrincipal || 'Dia reservado para descanso ou como colchão de recuperação para absorver imprevistos sem comprometer a sequência das frentes.'}
            </p>
          </div>
        ) : diaAtual && diaAtual.submodulos.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-2">
                Submódulos Programados para Hoje ({diaAtual.submodulos.length})
              </span>
              <span className="text-xs text-ink-3 font-sans">
                Meta: 75 min cada (leitura, checkpoints e Verificar)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {diaAtual.submodulos.map((sub) => {
                const isConcluido = modulosLidosIds.includes(sub.id);
                const themeId = sub.tipo === 'especifico'
                  ? `m${sub.codigo.split('.')[0]}`
                  : `m${sub.codigo.split('.')[0]}`;
                const theme = getModuleTheme(themeId);

                return (
                  <div
                    key={sub.id}
                    className={`p-4 rounded-xl border transition-all flex flex-col justify-between gap-3 ${
                      isConcluido
                        ? 'bg-ok-soft/30 border-ok/40 hover:border-ok'
                        : 'bg-surface-2/40 border-border hover:border-accent/40'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <ModuleBadge moduleId={theme.id} size="sm" />
                          <span
                            className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: `${theme.solidVar}15`,
                              color: theme.solidVar,
                            }}
                          >
                            {sub.tipo === 'especifico' ? 'Específico (P2)' : 'Básico (P1)'} · {sub.codigo}
                          </span>
                        </div>

                        {isConcluido ? (
                          <span className="text-xs font-sans font-bold text-ok flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>Concluído</span>
                          </span>
                        ) : (
                          <span className="text-xs font-sans text-ink-3">Pendente</span>
                        )}
                      </div>

                      <h3 className="text-sm font-serif font-bold text-ink leading-snug line-clamp-2">
                        {sub.titulo}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAbrirSubmodulo(sub.id)}
                      className={`w-full py-2 px-3 rounded-lg font-sans font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                        isConcluido
                          ? 'bg-surface hover:bg-surface-2 text-ink border border-border'
                          : 'bg-accent hover:bg-accent-hover text-white'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{isConcluido ? 'Revisar Submódulo' : 'Estudar Agora (75 min)'}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Atividades de Fase 2 ou Fase 3 */
          <div className="p-4 rounded-xl bg-surface-2/50 border border-border space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
              Atividade Programada da Fase
            </span>
            <p className="text-sm font-serif font-bold text-ink">
              {diaAtual?.atividadePrincipal || 'Sessão de simulados e consolidação de lacunas.'}
            </p>
          </div>
        )}

        {/* ATIVIDADE DE SEXTA: DISCURSIVA E REVISÃO SEMANAL INTERCALADA */}
        {diaAtual?.revisaoSemanal && (
          <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300">
                  Sexta-feira · Revisão Semanal Intercalada & Discursiva
                </span>
              </div>
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">
                75 a 90 min de treino
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-serif font-bold text-ink">
                {diaAtual.discursivaTitulo || 'Sessão Semanal de Discursiva'}
              </h4>
              <p className="text-xs text-ink-2 font-serif leading-relaxed">
                60 min de revisão intercalada dos módulos da semana + treino de discursiva com aplicação da rubrica de autocorreção 11/3/1.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCurrentRoute('discursiva')}
              className="py-2 px-4 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-sans font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Abrir Sessão de Discursiva ({diaAtual.discursivaId || 'Trilha'})</span>
            </button>
          </div>
        )}

        {/* 2. SEÇÃO DE ABERTURA DE RECUPERAÇÃO (0:00–0:25) */}
        <div className="pt-2 border-t border-border/70">
          <div className="p-4 rounded-xl bg-surface-2/40 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                  Abertura de Recuperação (0:00–0:25)
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-accent/10 text-accent border border-accent/20">
                  {totalItensAbertura} itens · ≥ 4 módulos
                </span>
              </div>

              <p className="text-xs text-ink-2 font-serif leading-relaxed">
                Prática distribuída nos primeiros 25 minutos: itens de módulos diferentes (vencidos do Leitner e Caderno de Erros), sem consulta. Atualmente cobrindo {modulosDiferentesRecuperacao || 4} frentes temáticas.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCurrentRoute('treinos')}
              className="py-2.5 px-4 rounded-xl bg-surface hover:bg-surface-2 border border-border hover:border-accent text-ink font-sans font-semibold text-xs flex items-center justify-center gap-2 shrink-0 transition-all cursor-pointer shadow-2xs"
            >
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>Iniciar Abertura (25 min)</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL / PAINEL DO PLANO B SE SOLICITADO */}
      {mostrarModalPlanoB && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-surface border border-border rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center gap-2 text-accent dark:text-amber-300 font-bold font-serif">
                <ShieldAlert className="w-5 h-5 text-accent" />
                <h3 className="text-base font-bold text-ink">Diretriz do Plano B (Seção 3.4)</h3>
              </div>
              <button
                type="button"
                onClick={() => setMostrarModalPlanoB(false)}
                className="text-ink-3 hover:text-ink text-sm p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
              <p>
                <strong>Quando aplicar:</strong> Se você acumular 3 ou mais submódulos de atraso até o dia <strong>06/11/2026</strong>.
              </p>
              <div className="p-3 rounded-xl bg-surface-2 border border-border space-y-1.5">
                <span className="font-sans font-bold text-ink text-xs uppercase block">
                  Ação Recomendada pelo Documento:
                </span>
                <p>
                  Comprima o <strong>Módulo 7 (Preservação e Conservação, 4 submódulos)</strong> em <strong>um único dia</strong> de leitura e questões.
                </p>
              </div>
              <p>
                <strong>Fundamentação Empírica:</strong> Nas 2.200 questões de Biblioteconomia da banca Cebraspe classificadas no acervo, o M7 representa apenas <strong>0,7% dos itens</strong> (16 itens), apesar de deter 9,2% dos itens na plataforma. O edital cita preservação, então não zere — apenas comprima.
              </p>
              <p className="text-amber-800 dark:text-amber-200 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 text-xs">
                ⚠️ <strong>Aviso Crítico:</strong> Nunca corte Português e Inglês dos Básicos. Eles são altamente treináveis por questões e protegem o piso eliminatório mandatório de 18 pontos em P1.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setMostrarModalPlanoB(false)}
                className="py-2 px-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-sans text-xs font-bold transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
