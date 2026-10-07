import type { MacroModulo, ModuloFilho } from './types';
import type { TentativaRegistro } from './tentativas';
import type { ItemAttempt } from './itemAttempts';
import type { SimuladoFinalizado } from './schemas/progress.schema';
import { COURSE_REGISTRY } from '../content/registry';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import {
  deriveJornadaState,
  type JornadaState,
  type EtapaJornadaState,
  type ProximoPassoInfo,
} from './jornadaEngine';
import { JORNADA_CONFIG } from '../config/jornada.config';
import { getCheckpointsTotalCurso, getCheckpointsFeitosCurso } from './metrics';

/**
 * Remove submódulos duplicados preservando a primeira ocorrência canônica.
 * Garante unicidade estável por `numero` e `id` (Bug 3).
 */
export function deduplicarSubmodulos(submodulos: ModuloFilho[]): ModuloFilho[] {
  if (!Array.isArray(submodulos)) return [];
  const vistosNumeros = new Set<string>();
  const vistosIds = new Set<string>();
  const resultado: ModuloFilho[] = [];

  for (const sub of submodulos) {
    if (!sub || !sub.numero) continue;
    const chaveNum = String(sub.numero).trim();
    const chaveId = String(sub.id || sub.numero).trim();

    if (!vistosNumeros.has(chaveNum) && !vistosIds.has(chaveId)) {
      vistosNumeros.add(chaveNum);
      vistosIds.add(chaveId);
      resultado.push(sub);
    }
  }

  return resultado;
}

export interface ProgressCoreInput {
  modulos?: MacroModulo[];
  tentativas?: TentativaRegistro[];
  itemAttempts?: ItemAttempt[];
  checkpointsRespondidos?: Record<string, 'C' | 'E'>;
  secoesVisualizadas?: Record<string, string[]>;
  secoesReabertasAposFalha?: Record<string, string[]>;
  historicoSimulados?: SimuladoFinalizado[];
  modulosLidosIds?: string[];
  modoLivre?: boolean;
  flagsLegado?: string[];
}

export interface ModuloProgressoStatus {
  id: string;
  numero: number;
  codigo: string;
  titulo: string;
  isBloqueado: boolean;
  progressoPercent: number;
  submodulosConcluidos: number;
  submodulosTotal: number;
  desafioConcluido: boolean;
  isCompleto: boolean;
}

export interface ContagensCanonicas {
  // Trilha de Domínio Específica (M1 a M10)
  totalEtapasTrilha: number;          // 59 etapas (40 sub + 10 desafios + 9 portais)
  etapasTrilhaConcluidas: number;
  taxaDominioTrilhaPercent: number;

  totalSubmodulosTrilha: number;      // 40 submódulos
  submodulosTrilhaConcluidos: number;

  totalDesafiosTrilha: number;        // 10 desafios de módulo
  desafiosTrilhaConcluidos: number;

  totalPortaisTrilha: number;         // 9 portais cumulativos
  portaisTrilhaConcluidos: number;

  // Cadernos de Simulado
  cadernosTrilhaTotal: number;        // 10 cadernos temáticos da trilha
  cadernosTrilhaAprovados: number;    // aprovados com >= 80% (mín. 80 acertos)
  cadernosPlataformaTotal: number;    // 15 cadernos no acervo completo da plataforma
  cadernosPlataformaAprovados: number; // aprovados na plataforma com >= 80%

  // Catálogo Geral de Submódulos (Específicos + Complementares)
  totalSubmodulosCurso: number;       // 64 submódulos
  submodulosCursoConcluidos: number;
  progressoGlobalCursoPercent: number;

  // Checkpoints Globais
  totalCheckpointsGlobal: number;
  totalCheckpointsFeitos: number;
}

export interface ProgressCoreState {
  jornada: JornadaState;
  etapas: Record<string, EtapaJornadaState>;
  etapasOrdenadas: EtapaJornadaState[];
  proximoPasso: ProximoPassoInfo;
  contagens: ContagensCanonicas;
  modulosStatus: Record<string, ModuloProgressoStatus>;
  isSubmoduloBloqueado: (subNumero: string) => boolean;
  isModuloBloqueado: (moduloId: string) => boolean;
}

/**
 * Função Pura Canônica Centralizadora de Progresso e Métricas (progressCore).
 * Fonte Única de Verdade consumida por Painel, Jornada, Sidebar/Grade, Treinos, Radar e Progresso.
 */
export function deriveProgressCore(input: ProgressCoreInput = {}): ProgressCoreState {
  const modulosBrutos = input.modulos || COURSE_REGISTRY;
  const tentativas = input.tentativas || [];
  const historicoSimulados = input.historicoSimulados || [];
  const modulosLidosIds = input.modulosLidosIds || [];
  const flagsLegado = input.flagsLegado || ['2.1'];
  const modoLivre = input.modoLivre || false;
  const secoesVisualizadas = input.secoesVisualizadas || {};
  const secoesReabertasAposFalha = input.secoesReabertasAposFalha || {};
  const checkpointsRespondidos = input.checkpointsRespondidos || {};

  // 1. Sanitização e deduplicação canônica de submódulos em cada módulo (Bug 3)
  const modulosSanitizados: MacroModulo[] = modulosBrutos.map((m) => ({
    ...m,
    modulosFilhos: deduplicarSubmodulos(m.modulosFilhos || []),
  }));

  // 2. Deriva o estado oficial da Jornada via motor linear
  const jornada = deriveJornadaState({
    modulos: modulosSanitizados,
    tentativas,
    secoesVisualizadas,
    secoesReabertasAposFalha,
    modoLivre,
    checkpointsRespondidos,
    flagsLegado,
  });

  const { etapas, etapasOrdenadas, proximoPasso, metricas } = jornada;

  // 3. Contagens da Trilha Específica (M1 a M10)
  const submodulosTrilhaEtapas = etapasOrdenadas.filter((e) => e.tipo === 'submodulo');
  const desafiosTrilhaEtapas = etapasOrdenadas.filter((e) => e.tipo === 'desafio_modulo');
  const portaisTrilhaEtapas = etapasOrdenadas.filter((e) => e.tipo === 'portal_revisao');

  const totalSubmodulosTrilha = submodulosTrilhaEtapas.length; // 40
  const submodulosTrilhaConcluidos = submodulosTrilhaEtapas.filter(
    (e) => e.status === 'concluida'
  ).length;

  const totalDesafiosTrilha = desafiosTrilhaEtapas.length; // 10
  const desafiosTrilhaConcluidos = desafiosTrilhaEtapas.filter(
    (e) => e.status === 'concluida'
  ).length;

  const totalPortaisTrilha = portaisTrilhaEtapas.length; // 9
  const portaisTrilhaConcluidos = portaisTrilhaEtapas.filter(
    (e) => e.status === 'concluida'
  ).length;

  // 4. Cadernos de Simulado: aprovação exige >= 80% (Regra canônica do Cebraspe)
  const simuladosAprovadosIds = new Set<string>();

  // Via tentativas da trilha (desafio-m1 a desafio-m10)
  for (const d of desafiosTrilhaEtapas) {
    if (d.status === 'concluida') {
      const matched = SIMULADOS_REGISTRY.find((s) => s.numero === d.moduloNumero);
      if (matched) simuladosAprovadosIds.add(matched.id);
    }
  }

  // Via histórico de simulados (aproveitamento >= 80% ou certos >= 80)
  for (const sim of historicoSimulados) {
    const isAprovado =
      sim.aproveitamentoPercent >= Math.round(JORNADA_CONFIG.minimoSimuladoModulo * 100) ||
      sim.certos >= JORNADA_CONFIG.desafioAcertosMinimo;
    const simId = sim.simuladoId || sim.id;
    if (isAprovado && simId) {
      simuladosAprovadosIds.add(simId);
    }
  }

  const cadernosTrilhaTotal = 10;
  const cadernosTrilhaAprovados = SIMULADOS_REGISTRY.slice(0, 10).filter((s) =>
    simuladosAprovadosIds.has(s.id)
  ).length;

  const cadernosPlataformaTotal = SIMULADOS_REGISTRY.length; // 15
  const cadernosPlataformaAprovados = SIMULADOS_REGISTRY.filter((s) =>
    simuladosAprovadosIds.has(s.id)
  ).length;

  // 5. Submódulos globais do catálogo completo (M1 a M14)
  const todosSubmodulosCurso = modulosSanitizados.flatMap((m) => m.modulosFilhos);
  const totalSubmodulosCurso = todosSubmodulosCurso.length; // 44

  const submodulosCursoConcluidos = todosSubmodulosCurso.filter((sub) => {
    const etapa = etapas[sub.numero];
    if (etapa && etapa.status === 'concluida') return true;
    return modulosLidosIds.includes(sub.id);
  }).length;

  const progressoGlobalCursoPercent =
    totalSubmodulosCurso > 0
      ? Math.round((submodulosCursoConcluidos / totalSubmodulosCurso) * 100)
      : 0;

  // 6. Status por módulo para Sidebar e Grade Curricular (Bug 1)
  const modulosStatus: Record<string, ModuloProgressoStatus> = {};

  for (const modulo of modulosSanitizados) {
    const k =
      typeof modulo.numero === 'number'
        ? modulo.numero
        : parseInt(String(modulo.numero).replace(/\D/g, ''), 10) || 0;

    const submodulosModulo = modulo.modulosFilhos || [];
    const totalSubs = submodulosModulo.length;

    const concluidosCount = submodulosModulo.filter((sub) => {
      const etapa = etapas[sub.numero];
      const etapaConcluida = etapa && etapa.status === 'concluida';
      const lido = modulosLidosIds.includes(sub.id) || modulosLidosIds.includes(sub.numero);
      return Boolean(etapaConcluida || lido);
    }).length;

    const desafioId = `desafio-${modulo.id}`;
    const etapaDesafio = etapas[desafioId];
    const temDesafioTrilha = k >= 1 && k <= 10;
    const tentativaDesafioAprovada = tentativas.some(
      (t) =>
        (t.targetId === desafioId ||
          t.targetId === `desafio-m${k}` ||
          (t.moduloId === modulo.id && (t.tipo === 'desafio_modulo' || (t as any).targetTipo === 'desafio_modulo'))) &&
        t.aprovado
    );
    const desafioConcluido = temDesafioTrilha
      ? Boolean(etapaDesafio?.status === 'concluida' || tentativaDesafioAprovada)
      : true;

    // Cálculo integrado: submódulos + desafio (elimina 100% indevido com desafio pendente)
    let progressoPercent = 0;
    if (temDesafioTrilha) {
      const totalComponentes = totalSubs + 1; // Submódulos + 1 Desafio de 100Q
      const concluidosComponentes = concluidosCount + (desafioConcluido ? 1 : 0);
      progressoPercent =
        totalComponentes > 0 ? Math.round((concluidosComponentes / totalComponentes) * 100) : 0;
    } else {
      progressoPercent = totalSubs > 0 ? Math.round((concluidosCount / totalSubs) * 100) : 0;
    }

    const isCompleto = temDesafioTrilha
      ? concluidosCount === totalSubs && desafioConcluido
      : concluidosCount === totalSubs;

    // Avaliação de bloqueio do módulo
    let isBloqueado = false;
    if (modoLivre) {
      isBloqueado = false;
    } else if (k === 1) {
      isBloqueado = false;
    } else if (k >= 2 && k <= 10) {
      const primeiroSubNumero = submodulosModulo[0]?.numero;
      const isGrandfathered =
        (primeiroSubNumero && flagsLegado.includes(primeiroSubNumero)) || false;

      if (isGrandfathered) {
        isBloqueado = false;
      } else {
        const etapaPrimeiroSub = primeiroSubNumero ? etapas[primeiroSubNumero] : undefined;
        isBloqueado = etapaPrimeiroSub ? etapaPrimeiroSub.status === 'bloqueada' : false;
      }
    } else {
      // M11 a M14: Conhecimentos Gerais abertos para consulta autônoma
      isBloqueado = false;
    }

    modulosStatus[modulo.id] = {
      id: modulo.id,
      numero: k,
      codigo: modulo.codigo,
      titulo: modulo.titulo_curto || modulo.titulo,
      isBloqueado,
      progressoPercent,
      submodulosConcluidos: concluidosCount,
      submodulosTotal: totalSubs,
      desafioConcluido,
      isCompleto,
    };
  }

  // 7. Helpers rápidos
  const isSubmoduloBloqueado = (subNumero: string): boolean => {
    if (modoLivre) return false;
    if (flagsLegado.includes(subNumero)) return false;
    const etapa = etapas[subNumero];
    return etapa ? etapa.status === 'bloqueada' : false;
  };

  const isModuloBloqueado = (moduloId: string): boolean => {
    return modulosStatus[moduloId]?.isBloqueado ?? false;
  };

  const totalCheckpointsGlobal = getCheckpointsTotalCurso(modulosSanitizados);
  const totalCheckpointsFeitos = getCheckpointsFeitosCurso(
    modulosSanitizados,
    checkpointsRespondidos as Record<string, string>
  );

  const contagens: ContagensCanonicas = {
    totalEtapasTrilha: metricas.totalEtapas,
    etapasTrilhaConcluidas: metricas.etapasConcluidas,
    taxaDominioTrilhaPercent: metricas.taxaDominioPercent,
    totalSubmodulosTrilha,
    submodulosTrilhaConcluidos,
    totalDesafiosTrilha,
    desafiosTrilhaConcluidos,
    totalPortaisTrilha,
    portaisTrilhaConcluidos,
    cadernosTrilhaTotal,
    cadernosTrilhaAprovados,
    cadernosPlataformaTotal,
    cadernosPlataformaAprovados,
    totalSubmodulosCurso,
    submodulosCursoConcluidos,
    progressoGlobalCursoPercent,
    totalCheckpointsGlobal,
    totalCheckpointsFeitos,
  };

  return {
    jornada,
    etapas,
    etapasOrdenadas,
    proximoPasso,
    contagens,
    modulosStatus,
    isSubmoduloBloqueado,
    isModuloBloqueado,
  };
}
