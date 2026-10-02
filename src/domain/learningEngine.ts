import type { ModuloFilho } from './types';
import {
  JORNADA_CONFIG,
  calcularAcertosNecessarios,
} from '../config/jornada.config';

/**
 * Estados estritos da Jornada e Submódulos (Regra B3 e D.1):
 * - bloqueada: etapa bloqueada até que o pré-requisito seja concluído
 * - disponivel: desbloqueada, mas ainda sem nenhuma atividade registrada
 * - em_andamento: iniciada (leitura em curso ou verificação incompleta)
 * - em_revisao_dirigida: verificação realizada COM APROVEITAMENTO ABAIXO DO MÍNIMO (85%)
 * - concluida: leitura e verificação concluídas com aproveitamento >= 85%
 */
export type SubmoduleStatus =
  | 'bloqueada'
  | 'disponivel'
  | 'em_andamento'
  | 'em_revisao_dirigida'
  | 'concluida';

export function isSubmoduleConcluido(status: SubmoduleStatus | string): boolean {
  return status === 'concluida' || status === 'concluido';
}

export interface SubmoduleLearningState {
  submoduloId: string;
  submoduloNumero: string;
  status: SubmoduleStatus;
  secoesLidasCount: number;
  secoesTotalCount: number;
  todasSecoesLidas: boolean;
  checkpointsTotal: number;
  checkpointsRespondidosCount: number;
  checkpointsAcertosCount: number;
  taxaAcertoPercent: number;
  atingiuCriterioAcerto: boolean; // >= 85%
  acertosNecessarios: number;
  errosMaximos: number;
  aproveitamentoMinimoPercent: number;
  explicacaoStatus: string;
  badgeLabel: string;
}

export const CANONICAL_SECTIONS = [
  'sec-autores',
  'sec-alertas',
  'sec-teoria',
  'sec-checkpoints',
  'sec-mnemonicos',
] as const;

/**
 * Retorna a lista de seções canônicas de um submódulo.
 * Se o submódulo possuir quadro comparativo, 'sec-quadro' é incluído.
 */
export function getRequiredSectionsForSubmodule(submodulo: ModuloFilho): string[] {
  const sections: string[] = ['sec-autores', 'sec-alertas'];
  if (submodulo.quadroComparativo) {
    sections.push('sec-quadro');
  }
  sections.push('sec-teoria', 'sec-checkpoints', 'sec-mnemonicos');
  return sections;
}

/**
 * Calcula o status de aprendizagem estrito de um submódulo (Regra B3):
 * - bloqueada: se isBloqueada for true (etapa anterior não concluída)
 * - disponivel: seções e checkpoints zerados
 * - em_andamento: leitura em curso ou verificação em andamento (nem todos os checkpoints respondidos)
 * - em_revisao_dirigida: SÓ EXISTE se a verificação foi realizada integralmente E o aproveitamento < 85%
 * - concluida: todas as seções visualizadas E aproveitamento na verificação >= 85%
 */
export function calculateSubmoduleStatus(
  submodulo: ModuloFilho,
  secoesVisualizadasIds: string[] = [],
  checkpointsRespondidos: Record<string, 'C' | 'E'> = {},
  isBloqueada = false
): SubmoduleLearningState {
  const requiredSections = getRequiredSectionsForSubmodule(submodulo);
  const secoesLidasSet = new Set(secoesVisualizadasIds);
  const secoesLidasCount = requiredSections.filter((s) => secoesLidasSet.has(s)).length;
  const todasSecoesLidas = requiredSections.length > 0 ? secoesLidasCount === requiredSections.length : true;

  const checkpoints = submodulo.checkpoints || [];
  const checkpointsTotal = checkpoints.length;

  let checkpointsRespondidosCount = 0;
  let checkpointsAcertosCount = 0;

  for (const cp of checkpoints) {
    const resposta = checkpointsRespondidos[cp.id];
    if (resposta) {
      checkpointsRespondidosCount++;
      if (resposta === cp.gabarito) {
        checkpointsAcertosCount++;
      }
    }
  }

  const aproveitamentoMinimo = JORNADA_CONFIG.aproveitamentoMinimo; // 0.85
  const aproveitamentoMinimoPercent = Math.round(aproveitamentoMinimo * 100); // 85%
  const acertosNecessarios = calcularAcertosNecessarios(checkpointsTotal);
  const errosMaximos = Math.max(0, checkpointsTotal - acertosNecessarios);

  const taxaAcertoPercent =
    checkpointsTotal > 0
      ? Math.round((checkpointsAcertosCount / checkpointsTotal) * 100)
      : 100;

  const atingiuCriterioAcerto =
    checkpointsTotal === 0 || checkpointsAcertosCount >= acertosNecessarios;

  // Verificação realizada: todos os checkpoints existentes foram respondidos
  const verificacaoRealizada =
    checkpointsTotal > 0 && checkpointsRespondidosCount >= checkpointsTotal;

  let status: SubmoduleStatus = 'disponivel';
  let explicacaoStatus = '';
  let badgeLabel = 'Disponível';

  if (isBloqueada) {
    status = 'bloqueada';
    badgeLabel = 'Bloqueada';
    explicacaoStatus = `Submódulo bloqueado. Conclua a etapa anterior com aproveitamento mínimo de ${aproveitamentoMinimoPercent}%.`;
  } else if (secoesLidasCount === 0 && checkpointsRespondidosCount === 0) {
    status = 'disponivel';
    badgeLabel = 'Disponível';
    explicacaoStatus = 'Disponível para estudo. Inicie pela leitura dos fundamentos teóricos.';
  } else if (todasSecoesLidas && verificacaoRealizada && atingiuCriterioAcerto) {
    status = 'concluida';
    badgeLabel = 'Concluída';
    explicacaoStatus = `Submódulo concluído com domínio! ${checkpointsAcertosCount} acertos em ${checkpointsTotal} itens (${taxaAcertoPercent}%, mínimo de ${aproveitamentoMinimoPercent}%).`;
  } else if (verificacaoRealizada && !atingiuCriterioAcerto) {
    // REGRA B3: "Em revisão dirigida" SÓ existe após a verificação ser feita com aproveitamento abaixo do mínimo.
    status = 'em_revisao_dirigida';
    badgeLabel = 'Em Revisão Dirigida';
    explicacaoStatus = `Aproveitamento de ${taxaAcertoPercent}% (${checkpointsAcertosCount}/${checkpointsTotal} acertos) abaixo do mínimo exigido de ${aproveitamentoMinimoPercent}% (${acertosNecessarios} acertos, máx. ${errosMaximos} erros). Releia os tópicos associados aos erros antes de nova tentativa.`;
  } else {
    status = 'em_andamento';
    badgeLabel = 'Em Andamento';
    const faltamSecoes = Math.max(0, requiredSections.length - secoesLidasCount);
    const pendenciaCheckpoints = checkpointsTotal - checkpointsRespondidosCount;
    explicacaoStatus = `Em andamento: ${secoesLidasCount}/${requiredSections.length} seções lidas (${faltamSecoes} pendente${faltamSecoes !== 1 ? 's' : ''}); ${pendenciaCheckpoints} item(ns) de verificação pendente(s).`;
  }

  return {
    submoduloId: submodulo.id,
    submoduloNumero: submodulo.numero,
    status,
    secoesLidasCount,
    secoesTotalCount: requiredSections.length,
    todasSecoesLidas,
    checkpointsTotal,
    checkpointsRespondidosCount,
    checkpointsAcertosCount,
    taxaAcertoPercent,
    atingiuCriterioAcerto,
    acertosNecessarios,
    errosMaximos,
    aproveitamentoMinimoPercent,
    explicacaoStatus,
    badgeLabel,
  };
}

export interface SimuladoAccessControl {
  isUnlocked: boolean;
  totalSubmodulosExigidos: number;
  totalSubmodulosConcluidos: number;
  percentualLiberacao: number;
  submodulosPendentes: { id: string; numero: string; titulo: string; status: SubmoduleStatus }[];
  mensagemBloqueio: string;
}

/**
 * Avalia se o Simulado de 100 Questões está liberado.
 * Para o Simulado Geral de Fundamentos (ou Geral do Curso), exige que os submódulos
 * estejam no status 'concluida' (ou ativação de bypass em desenvolvimento).
 */
export function checkSimuladoAccess(
  allSubmodules: ModuloFilho[],
  secoesPorSubmodulo: Record<string, string[]>,
  checkpointsRespondidos: Record<string, 'C' | 'E'>,
  devBypass = false
): SimuladoAccessControl {
  if (devBypass) {
    return {
      isUnlocked: true,
      totalSubmodulosExigidos: allSubmodules.length,
      totalSubmodulosConcluidos: allSubmodules.length,
      percentualLiberacao: 100,
      submodulosPendentes: [],
      mensagemBloqueio: 'Simulado desbloqueado via Modo Desenvolvedor (Bypass ativo).',
    };
  }

  const pendentes: { id: string; numero: string; titulo: string; status: SubmoduleStatus }[] = [];
  let concluidosCount = 0;

  for (const sub of allSubmodules) {
    const secoesVistas = secoesPorSubmodulo[sub.id] || [];
    const state = calculateSubmoduleStatus(sub, secoesVistas, checkpointsRespondidos);
    if (isSubmoduleConcluido(state.status)) {
      concluidosCount++;
    } else {
      pendentes.push({
        id: sub.id,
        numero: sub.numero,
        titulo: sub.titulo,
        status: state.status,
      });
    }
  }

  const isUnlocked = concluidosCount === allSubmodules.length;
  const percentualLiberacao =
    allSubmodules.length > 0
      ? Math.round((concluidosCount / allSubmodules.length) * 100)
      : 0;

  const minPercent = Math.round(JORNADA_CONFIG.aproveitamentoMinimo * 100);
  const mensagemBloqueio = isUnlocked
    ? 'Parabéns! Todos os requisitos pedagógicos foram cumpridos. Simulado liberado.'
    : `Simulado bloqueado. Você concluiu ${concluidosCount} de ${allSubmodules.length} submódulos exigidos. Conclua a leitura integral e atinja ao menos ${minPercent}% de acerto nos checkpoints dos submódulos pendentes para liberar.`;

  return {
    isUnlocked,
    totalSubmodulosExigidos: allSubmodules.length,
    totalSubmodulosConcluidos: concluidosCount,
    percentualLiberacao,
    submodulosPendentes: pendentes,
    mensagemBloqueio,
  };
}
