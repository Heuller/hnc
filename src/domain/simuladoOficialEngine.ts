import type { CebraspeQuestion, JulgamentoCebraspe } from './types';
import { EDITAL_CAMARA_2026 } from './edital/matrizEdital2026';

export interface BlocoDesempenho {
  total: number;
  certos: number;
  errados: number;
  emBranco: number;
  notaLiquida: number;
  aproveitamentoPercent: number;
  pisoMinimo: number;
  aprovadoPiso: boolean;
}

export interface ResultadoSimuladoOficial180 {
  isSimuladoOficial180: boolean;
  totalItens: number;
  p1: BlocoDesempenho;
  p2: BlocoDesempenho;
  total: BlocoDesempenho;
  eliminado: boolean;
  motivosEliminacao: string[];
  aprovadoObjetiva: boolean;
  statusTexto: string;
  vagasDiscursivaAmpla: number;
  calibracao: {
    acertoCertezaPercent: number;
    acertoProvavelPercent: number;
    acertoChutePercent: number;
    ganhoPotencialSeChuteBranco: number;
  };
}

export const MACROS_P1_BASICOS = new Set(['M11', 'M12', 'M13', 'M14', 'M10A', 'M10B']);
export const MACROS_P2_ESPECIFICOS = new Set(['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10']);

/**
 * Avalia o desempenho em uma prova de 180 itens segundo as regras oficiais do Cebraspe e Edital nº 1/2026.
 *
 * Pisos eliminatórios (item 8.11.5 do Edital):
 * - P1 (Conhecimentos Básicos): < 18,00 elimina
 * - P2 (Conhecimentos Específicos): < 27,00 elimina
 * - Total (P1 + P2): < 54,00 elimina
 */
export function avaliarDesempenhoSimuladoOficial180(
  questoes: CebraspeQuestion[],
  respostas: Record<string, { resposta: JulgamentoCebraspe; certeza?: 'certeza' | 'provavel' | 'chute' }>
): ResultadoSimuladoOficial180 {
  const is180 = questoes.length === 180;
  const pisos = EDITAL_CAMARA_2026.pisosEliminatorios;

  let p1Certos = 0;
  let p1Errados = 0;
  let p1Branco = 0;
  let p1Total = 0;

  let p2Certos = 0;
  let p2Errados = 0;
  let p2Branco = 0;
  let p2Total = 0;

  let certezaC = 0, certezaTot = 0;
  let provavelC = 0, provavelTot = 0;
  let chuteC = 0, chuteTot = 0;

  questoes.forEach((q, idx) => {
    const isP1 = q.numero ? q.numero <= 90 : (MACROS_P1_BASICOS.has(q.macroModuloId) || idx < 90);
    const respObj = respostas[q.id];
    const resp = respObj?.resposta || 'BRANCO';
    const certeza = respObj?.certeza;

    const isCerto = resp !== 'BRANCO' && resp === q.gabarito;
    const isErrado = resp !== 'BRANCO' && resp !== q.gabarito;

    if (isP1) {
      p1Total++;
      if (isCerto) p1Certos++;
      else if (isErrado) p1Errados++;
      else p1Branco++;
    } else {
      p2Total++;
      if (isCerto) p2Certos++;
      else if (isErrado) p2Errados++;
      else p2Branco++;
    }

    if (certeza === 'certeza') {
      certezaTot++;
      if (isCerto) certezaC++;
    } else if (certeza === 'provavel') {
      provavelTot++;
      if (isCerto) provavelC++;
    } else if (certeza === 'chute') {
      chuteTot++;
      if (isCerto) chuteC++;
    }
  });

  const p1Nota = p1Certos - p1Errados;
  const p2Nota = p2Certos - p2Errados;
  const totalNota = p1Nota + p2Nota;
  const totalCertos = p1Certos + p2Certos;
  const totalErrados = p1Errados + p2Errados;
  const totalBranco = p1Branco + p2Branco;

  const p1Aprovado = p1Nota >= pisos.p1Minimo;
  const p2Aprovado = p2Nota >= pisos.p2Minimo;
  const totalAprovado = totalNota >= pisos.totalMinimo;

  const motivos: string[] = [];
  if (!p1Aprovado) {
    motivos.push(`Nota em Conhecimentos Básicos (P1) foi de ${p1Nota} pts (mínimo exigido: ${pisos.p1Minimo} pts).`);
  }
  if (!p2Aprovado) {
    motivos.push(`Nota em Conhecimentos Específicos (P2) foi de ${p2Nota} pts (mínimo exigido: ${pisos.p2Minimo} pts).`);
  }
  if (!totalAprovado) {
    motivos.push(`Nota Total da Prova Objetiva foi de ${totalNota} pts (mínimo exigido: ${pisos.totalMinimo} pts).`);
  }

  const eliminado = motivos.length > 0;

  const statusTexto = eliminado
    ? `ELIMINADO DO CONCURSO (Edital nº 1/2026, item 8.11.5)`
    : `APROVADO NA PROVA OBJETIVA (Apto à Discursiva)`;

  // Ganhos potenciais se chute fosse deixado em branco
  const chutesErrados = chuteTot - chuteC;
  const ganhoSeBranco = chutesErrados - chuteC;

  return {
    isSimuladoOficial180: is180,
    totalItens: questoes.length,
    p1: {
      total: p1Total,
      certos: p1Certos,
      errados: p1Errados,
      emBranco: p1Branco,
      notaLiquida: p1Nota,
      aproveitamentoPercent: p1Total > 0 ? Math.round((Math.max(0, p1Nota) / p1Total) * 100) : 0,
      pisoMinimo: pisos.p1Minimo,
      aprovadoPiso: p1Aprovado,
    },
    p2: {
      total: p2Total,
      certos: p2Certos,
      errados: p2Errados,
      emBranco: p2Branco,
      notaLiquida: p2Nota,
      aproveitamentoPercent: p2Total > 0 ? Math.round((Math.max(0, p2Nota) / p2Total) * 100) : 0,
      pisoMinimo: pisos.p2Minimo,
      aprovadoPiso: p2Aprovado,
    },
    total: {
      total: questoes.length,
      certos: totalCertos,
      errados: totalErrados,
      emBranco: totalBranco,
      notaLiquida: totalNota,
      aproveitamentoPercent: questoes.length > 0 ? Math.round((Math.max(0, totalNota) / questoes.length) * 100) : 0,
      pisoMinimo: pisos.totalMinimo,
      aprovadoPiso: totalAprovado,
    },
    eliminado,
    motivosEliminacao: motivos,
    aprovadoObjetiva: !eliminado,
    statusTexto,
    vagasDiscursivaAmpla: pisos.vagasAmplaConvocadasDiscursiva,
    calibracao: {
      acertoCertezaPercent: certezaTot > 0 ? Math.round((certezaC / certezaTot) * 100) : 0,
      acertoProvavelPercent: provavelTot > 0 ? Math.round((provavelC / provavelTot) * 100) : 0,
      acertoChutePercent: chuteTot > 0 ? Math.round((chuteC / chuteTot) * 100) : 0,
      ganhoPotencialSeChuteBranco: Math.max(0, ganhoSeBranco),
    },
  };
}


export interface ItensVistosModulosResultado {
  totalVistos: number;
  totalItens: number;
  porcentagemVistos: number;
  detalhes: Array<{
    id: string;
    origemModulo?: string;
    questaoOrigemId?: string;
    jaVisto: boolean;
  }>;
}

/**
 * Conta quantos itens do simulado já foram vistos e respondidos pelo aluno nos módulos de estudo (Prompt C4).
 * Esse cálculo serve para informar a repetição ao estudante sem inflar artificialmente o domínio de novos tópicos.
 */
export function contarItensJaVistosNosModulos(
  questoes: CebraspeQuestion[],
  itemAttempts: Array<{ item_id: string; contexto?: string }> = [],
  checkpoints: Record<string, any> = {}
): ItensVistosModulosResultado {
  const tentativasIds = new Set(
    itemAttempts
      .filter((a) => a.contexto !== 'simulado')
      .map((a) => a.item_id)
  );
  const checkpointIds = new Set(Object.keys(checkpoints));

  const detalhes = questoes.map((q) => {
    const jaVisto =
      tentativasIds.has(q.id) ||
      Boolean(q.questaoOrigemId && tentativasIds.has(q.questaoOrigemId)) ||
      checkpointIds.has(q.id) ||
      Boolean(q.questaoOrigemId && checkpointIds.has(q.questaoOrigemId));

    return {
      id: q.id,
      origemModulo: q.origemModulo,
      questaoOrigemId: q.questaoOrigemId,
      jaVisto,
    };
  });

  const totalVistos = detalhes.filter((d) => d.jaVisto).length;
  const totalItens = questoes.length;
  const porcentagemVistos = totalItens > 0 ? Math.round((totalVistos / totalItens) * 100) : 0;

  return {
    totalVistos,
    totalItens,
    porcentagemVistos,
    detalhes,
  };
}

export function podeSerPromovidoSimuladoOficial(item: { localizadorVerificado?: boolean; statusHomologacao?: string; homologado?: boolean }): boolean {
  return item.localizadorVerificado === true && item.statusHomologacao === 'homologado' && item.homologado === true;
}
