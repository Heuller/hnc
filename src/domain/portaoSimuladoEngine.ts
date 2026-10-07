import { JORNADA_CONFIG } from '../config/jornada.config';
import type { SimuladoFinalizado } from './schemas/progress.schema';
import type { ProgressoGlobalDerivado } from './progressoEngine';
import { COURSE_REGISTRY } from '../content/registry';

export interface NotaConsolidadaSimulado {
  simuladoId: string;
  moduloNumero: number;
  totalQuestoes: number;
  acertosPrimeiraTentativa: number;
  primeiraTentativaPercent: number; // Ex: 72
  errosCorrigidosReteste: number;
  notaConsolidadaPercent: number; // Ex: 83
  aprovado: boolean; // notaConsolidadaPercent >= 80%
  itensErradosIds: string[];
  itensPendentesRetesteIds: string[];
  totalTentativas: number;
}

export interface StatusAcessoModulo {
  moduloId: string;
  moduloNumero: number;
  liberado: boolean;
  motivoBloqueio?: string;
  moduloAnteriorNumero?: number;
  simuladoAnteriorId?: string;
  notaConsolidadaAnterior?: number;
}

/**
 * Calcula a nota consolidada de um simulado conforme a Regra 2.4:
 * Nota CONSOLIDADA = acertos da 1ª tentativa + erros corrigidos no reteste (opções B ou C).
 * O módulo seguinte libera quando a consolidada >= 80%.
 */
export function calcularNotaConsolidadaSimulado(
  simuladoId: string,
  historicoSimulados: SimuladoFinalizado[],
  retestesAcertosMap: Record<string, boolean> = {}
): NotaConsolidadaSimulado {
  const tentativasDoSimulado = (historicoSimulados || []).filter(
    (s) => s.simuladoId === simuladoId || s.id === simuladoId
  );

  const modNumMatch = simuladoId.match(/m(\d+)/i);
  const moduloNumero = modNumMatch ? parseInt(modNumMatch[1], 10) : 1;

  if (tentativasDoSimulado.length === 0) {
    return {
      simuladoId,
      moduloNumero,
      totalQuestoes: 100,
      acertosPrimeiraTentativa: 0,
      primeiraTentativaPercent: 0,
      errosCorrigidosReteste: 0,
      notaConsolidadaPercent: 0,
      aprovado: false,
      itensErradosIds: [],
      itensPendentesRetesteIds: [],
      totalTentativas: 0,
    };
  }

  // 1ª tentativa oficial
  const primeiraTentativa = tentativasDoSimulado[0];
  const totalQuestoes = Object.keys(primeiraTentativa.respostas || {}).length || 100;
  const acertos1 = primeiraTentativa.certos;
  const primeiraTentativaPercent = Math.round((acertos1 / totalQuestoes) * 100);

  // Mapeia quais itens foram errados na 1ª tentativa
  const itensErradosNaPrimeira: string[] = [];
  for (const [qId, r] of Object.entries(primeiraTentativa.respostas || {})) {
    if (r.resposta !== 'BRANCO' && !r.acertou) {
      itensErradosNaPrimeira.push(qId);
    }
  }

  // Identifica erros corrigidos nas tentativas subsequentes ou no reteste
  let errosCorrigidos = 0;
  const itensPendentes: string[] = [];

  for (const qId of itensErradosNaPrimeira) {
    let corrigido = false;

    // Checa retestes diretos (modo B ou C)
    if (retestesAcertosMap[qId]) {
      corrigido = true;
    } else {
      // Checa se acertou em alguma tentativa posterior
      for (let i = 1; i < tentativasDoSimulado.length; i++) {
        const respSub = tentativasDoSimulado[i].respostas?.[qId];
        if (respSub && respSub.acertou) {
          corrigido = true;
          break;
        }
      }
    }

    if (corrigido) {
      errosCorrigidos++;
    } else {
      itensPendentes.push(qId);
    }
  }

  const notaConsolidadaPercent = Math.min(
    100,
    Math.round(((acertos1 + errosCorrigidos) / totalQuestoes) * 100)
  );

  const limiarMinimo = Math.round(JORNADA_CONFIG.minimoSimuladoModulo * 100); // 80%
  const aprovado = notaConsolidadaPercent >= limiarMinimo;

  return {
    simuladoId,
    moduloNumero,
    totalQuestoes,
    acertosPrimeiraTentativa: acertos1,
    primeiraTentativaPercent,
    errosCorrigidosReteste: errosCorrigidos,
    notaConsolidadaPercent,
    aprovado,
    itensErradosIds: itensErradosNaPrimeira,
    itensPendentesRetesteIds: itensPendentes,
    totalTentativas: tentativasDoSimulado.length,
  };
}

/**
 * Verifica o acesso a um macro-módulo conforme a Regra 2.2:
 * Módulo 1 é sempre acessível.
 * Módulo N (N > 1) requer aprovação consolidada (>= 80%) no Simulado do Módulo N-1.
 */
export function verificarAcessoModulo(
  moduloId: string,
  progressoGlobal: ProgressoGlobalDerivado,
  historicoSimulados: SimuladoFinalizado[] = [],
  devBypass = false
): StatusAcessoModulo {
  if (devBypass) {
    return { moduloId, moduloNumero: 1, liberado: true };
  }

  // Mini-Módulo Especial 2.5 é sempre liberado para estudo
  if (moduloId === 'm2-5' || moduloId === 'm2.5') {
    return {
      moduloId,
      moduloNumero: 2.5,
      liberado: true,
    };
  }

  const modNumMatch = moduloId.match(/m(\d+)/i) || moduloId.match(/^(\d+)$/);
  const moduloNumero = modNumMatch ? parseInt(modNumMatch[1], 10) : 1;

  // M1 (Fundamentos) é sempre liberado
  if (moduloNumero <= 1) {
    return {
      moduloId,
      moduloNumero,
      liberado: true,
    };
  }

  // Módulos da trilha complementar (ex: M13 Língua Portuguesa) são de acesso livre
  const macroObj = COURSE_REGISTRY.find(
    (m) =>
      m.codigo?.toLowerCase() === moduloId.toLowerCase() ||
      m.id?.toLowerCase() === moduloId.toLowerCase() ||
      m.numero === moduloNumero
  );
  if (macroObj && macroObj.trilha === 'complementar') {
    return {
      moduloId,
      moduloNumero,
      liberado: true,
    };
  }

  // Para Módulo N > 1, verifica aprovação no simulado do Módulo anterior (N - 1)
  const moduloAnteriorNumero = moduloNumero - 1;
  const simuladoAnteriorId = `m${moduloAnteriorNumero}-fundamentos`;

  // Calcula nota consolidada do simulado anterior
  const consolidada = calcularNotaConsolidadaSimulado(
    simuladoAnteriorId,
    historicoSimulados
  );

  // Checa também via progresso derivado puro
  const moduloAnteriorDerivado = progressoGlobal.modulos[`m${moduloAnteriorNumero}`];
  const liberadoPorProgresso = moduloAnteriorDerivado?.simuladoAprovado ?? false;

  const liberado = consolidada.aprovado || liberadoPorProgresso;

  if (!liberado) {
    const notaAtual = consolidada.notaConsolidadaPercent;
    const minimo = Math.round(JORNADA_CONFIG.minimoSimuladoModulo * 100);
    return {
      moduloId,
      moduloNumero,
      liberado: false,
      moduloAnteriorNumero,
      simuladoAnteriorId,
      notaConsolidadaAnterior: notaAtual,
      motivoBloqueio: `Requer ${minimo}% de aproveitamento consolidado no simulado do Módulo ${moduloAnteriorNumero} (atual: ${notaAtual}%).`,
    };
  }

  return {
    moduloId,
    moduloNumero,
    liberado: true,
    moduloAnteriorNumero,
    simuladoAnteriorId,
    notaConsolidadaAnterior: consolidada.notaConsolidadaPercent,
  };
}

/**
 * Verifica o status de navegação do rodapé do submódulo conforme Regra 2.1:
 * - Último submódulo (ex: 1.4) NUNCA leva ao próximo módulo.
 * - Submódulos intermediários (ex: 1.1) habilitam avanço quando o atual estiver concluído.
 * - Ajuste 7: O destino do botão de avanço é a PRÓXIMA ETAPA RECOMENDADA NÃO CONCLUÍDA.
 */
export function verificarNavegacaoRodapeSubmodulo(
  submoduloNumero: string,
  progressoGlobal: ProgressoGlobalDerivado,
  historicoSimulados: SimuladoFinalizado[] = []
): {
  isUltimoDoModulo: boolean;
  moduloNumero: number;
  moduloId: string;
  submoduloConcluido: boolean;
  motivoBloqueioSubmodulo?: string;
  todosSubmodulosDoModuloConcluidos: boolean;
  simuladoModuloId: string;
  simuladoAprovado: boolean;
  notaConsolidadaSimulado: number;
  podeAvancarProximoSubmodulo: boolean;
  proximoSubmoduloNumero?: string;
  podeRefazerVerificacao?: boolean;
  rodadaAtual?: number;
} {
  if (submoduloNumero === '2.5' || submoduloNumero === 'sub-2-5') {
    return {
      isUltimoDoModulo: true,
      moduloNumero: 2.5,
      moduloId: 'm2-5',
      submoduloConcluido: true,
      todosSubmodulosDoModuloConcluidos: true,
      simuladoModuloId: 'mini-modulo-orgaos',
      simuladoAprovado: true,
      notaConsolidadaSimulado: 100,
      podeAvancarProximoSubmodulo: true,
      proximoSubmoduloNumero: '3.1',
      podeRefazerVerificacao: false,
      rodadaAtual: 1,
    };
  }

  const macroAtual = COURSE_REGISTRY.find((m) =>
    m.modulosFilhos.some((s) => s.numero === submoduloNumero || s.id === submoduloNumero)
  ) || COURSE_REGISTRY[0];

  const modNum = typeof macroAtual.numero === 'number'
    ? macroAtual.numero
    : parseInt(String(macroAtual.numero).replace(/\D/g, ''), 10) || 1;

  const submodulosDoMacro = macroAtual.modulosFilhos;
  const indexNoMacro = submodulosDoMacro.findIndex(
    (s) => s.numero === submoduloNumero || s.id === submoduloNumero
  );

  const isUltimoDoModulo = indexNoMacro === submodulosDoMacro.length - 1;

  // Ajuste 7: O destino do avanço é a PRÓXIMA ETAPA RECOMENDADA NÃO CONCLUÍDA
  // Exemplo: se 2.2 e 2.3 já estão concluídos, ao aprovar 2.1 avança direto para 2.4
  const proximoSubRecomendado = submodulosDoMacro
    .slice(indexNoMacro + 1)
    .find((s) => !progressoGlobal.submodulos[s.numero]?.concluido);
  const proximoSubNoMacro = proximoSubRecomendado || (!isUltimoDoModulo ? submodulosDoMacro[indexNoMacro + 1] : undefined);

  const subProg = progressoGlobal.submodulos[submoduloNumero];
  const submoduloConcluido = subProg?.concluido ?? false;

  let motivoBloqueioSubmodulo: string | undefined;
  if (!submoduloConcluido && subProg) {
    const pendentes = subProg.itensPendentesIds.length;
    if (!subProg.leituraCompleta) {
      motivoBloqueioSubmodulo = 'Conclua a leitura de todas as seções deste submódulo.';
    } else if (pendentes > 0) {
      motivoBloqueioSubmodulo = `Responda os ${pendentes} itens de verificação pendentes.`;
    } else if (!subProg.aprovadoNoPortao) {
      motivoBloqueioSubmodulo = `Aproveitamento insuficiente (${subProg.aproveitamentoPortaoPercent}%). Mínimo exigido: ${Math.round(JORNADA_CONFIG.minimoVerificacao * 100)}%. Revise os pontos com erro e refaça a verificação.`;
    }
  }

  // Verifica se todos os submódulos deste macro estão concluídos
  const todosSubmodulosDoModuloConcluidos = submodulosDoMacro.every(
    (s) => progressoGlobal.submodulos[s.numero]?.concluido
  );

  const simuladoModuloId = `m${modNum}-fundamentos`;
  const consolidada = calcularNotaConsolidadaSimulado(
    simuladoModuloId,
    historicoSimulados
  );

  return {
    isUltimoDoModulo,
    moduloNumero: modNum,
    moduloId: macroAtual.id,
    submoduloConcluido,
    motivoBloqueioSubmodulo,
    todosSubmodulosDoModuloConcluidos,
    simuladoModuloId,
    simuladoAprovado: consolidada.aprovado,
    notaConsolidadaSimulado: consolidada.notaConsolidadaPercent,
    podeAvancarProximoSubmodulo: !isUltimoDoModulo && submoduloConcluido,
    proximoSubmoduloNumero: proximoSubNoMacro?.numero,
    podeRefazerVerificacao: subProg?.podeRefazerVerificacao ?? false,
    rodadaAtual: subProg?.rodadaAtual ?? 1,
  };
}
