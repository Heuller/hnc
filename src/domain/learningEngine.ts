import type { ModuloFilho } from './types';

export type SubmoduleStatus = 'nao_iniciado' | 'em_andamento' | 'em_revisao' | 'concluido';

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
  atingiuCriterioAcerto: boolean; // >= 70%
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
 * Calcula o status de aprendizagem estrito de um submódulo:
 * - nao_iniciado: nenhuma seção visualizada E nenhum checkpoint respondido
 * - em_andamento: pelo menos 1 seção visualizada, mas nem todas as seções vistas (ou checkpoints em aberto)
 * - em_revisao: todas as seções visualizadas MAS taxa de acerto nos checkpoints < 70%
 * - concluido: todas as seções visualizadas E taxa de acerto nos checkpoints >= 70%
 */
export function calculateSubmoduleStatus(
  submodulo: ModuloFilho,
  secoesVisualizadasIds: string[] = [],
  checkpointsRespondidos: Record<string, 'C' | 'E'> = {}
): SubmoduleLearningState {
  const requiredSections = getRequiredSectionsForSubmodule(submodulo);
  const secoesLidasSet = new Set(secoesVisualizadasIds);
  const secoesLidasCount = requiredSections.filter((s) => secoesLidasSet.has(s)).length;
  const todasSecoesLidas = secoesLidasCount === requiredSections.length;

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

  const taxaAcertoPercent =
    checkpointsTotal > 0
      ? Math.round((checkpointsAcertosCount / checkpointsTotal) * 100)
      : 100;

  const atingiuCriterioAcerto = checkpointsTotal === 0 || taxaAcertoPercent >= 70;

  let status: SubmoduleStatus = 'nao_iniciado';
  let explicacaoStatus = 'Submódulo ainda não iniciado. Inicie pela fundamentação teórica e autores.';
  let badgeLabel = 'Não Iniciado';

  const temAlgumaAtividade = secoesLidasCount > 0 || checkpointsRespondidosCount > 0;

  if (!temAlgumaAtividade) {
    status = 'nao_iniciado';
    explicacaoStatus = 'Ainda não iniciado. Acesse o conteúdo para começar.';
    badgeLabel = 'Não Iniciado';
  } else if (todasSecoesLidas && atingiuCriterioAcerto && checkpointsRespondidosCount === checkpointsTotal) {
    status = 'concluido';
    explicacaoStatus = `Submódulo dominado! Todas as seções foram estudadas com ${taxaAcertoPercent}% de aproveitamento nos checkpoints.`;
    badgeLabel = 'Concluído';
  } else if (todasSecoesLidas && (!atingiuCriterioAcerto || checkpointsRespondidosCount < checkpointsTotal)) {
    status = 'em_revisao';
    explicacaoStatus = `Todas as seções foram lidas, mas o aproveitamento nos itens de fixação é de ${taxaAcertoPercent}% (mínimo exigido: 70%). Revise os pontos fracos.`;
    badgeLabel = 'Em Revisão';
  } else {
    status = 'em_andamento';
    const faltamSecoes = requiredSections.length - secoesLidasCount;
    explicacaoStatus = `Em andamento: ${secoesLidasCount} de ${requiredSections.length} seções lidas (${faltamSecoes} pendente${faltamSecoes > 1 ? 's' : ''}).`;
    badgeLabel = 'Em Andamento';
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
 * estejam no status 'concluido' (ou ativação de bypass em desenvolvimento).
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
    if (state.status === 'concluido') {
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

  const mensagemBloqueio = isUnlocked
    ? 'Parabéns! Todos os requisitos pedagógicos foram cumpridos. Simulado 100Q liberado.'
    : `Simulado bloqueado. Você concluiu ${concluidosCount} de ${allSubmodules.length} submódulos exigidos. Conclua a leitura integral e atinja ao menos 70% de acerto nos checkpoints dos submódulos pendentes para liberar.`;

  return {
    isUnlocked,
    totalSubmodulosExigidos: allSubmodules.length,
    totalSubmodulosConcluidos: concluidosCount,
    percentualLiberacao,
    submodulosPendentes: pendentes,
    mensagemBloqueio,
  };
}
