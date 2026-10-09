import { REVIEW_CONFIG, type ExerciseFormatId } from '../config/reviewConfig';
import type { Concept, ConceptState } from './concepts/types';
import { conceptRepository } from './concepts/conceptRepository';

export interface ItemRevisaoSubmodulo {
  conceito: Concept;
  formato: ExerciseFormatId;
  moduloOrigemNumero: number;
  isModuloAtual: boolean;
  scorePrioridade: number;
}

export interface ComposicaoRevisaoSubmodulo {
  revisaoId: string; // Ex: 'revisao-m2'
  moduloNumero: number; // k
  moduloId: string; // 'm2'
  titulo: string;
  tituloCurto: string;
  totalItens: number;
  totalC: number;
  totalE: number;
  itens: ItemRevisaoSubmodulo[];
  acertosNecessarios: number;
  aproveitamentoMinimo: number;
}

/**
 * Motor de Composição Científica dos Submódulos Rn (Marco R4):
 * - N = 20 itens rigorosamente calibrados.
 * - Simetria Cebraspe: exatamente 10 C e 10 E (50% / 50%).
 * - Origem cumulativa:
 *   - Se k = 1: 100% de M1 (10 C / 10 E).
 *   - Se k >= 2: 60% de Mk (12 itens: 6 C / 6 E) e 40% de M1..Mk-1 (8 itens: 4 C / 4 E).
 * - Priorização cognitiva:
 *   1. Itens em estado crítico ou com histórico de erros.
 *   2. Itens vencidos na repetição espaçada.
 *   3. Menos vistos / menos expostos.
 * - Formatos cognitivos:
 *   - Respeita o teto de 20% para o formato F1 (simulado clássico) e distribui os demais em F2 a F8.
 */
export function comporSubmoduloRevisao(params: {
  moduloNumero: number; // k
  moduloId: string; // 'm1', 'm2', etc.
  estadosConceitos?: Record<string, ConceptState>;
  dataAtualIso?: string;
}): ComposicaoRevisaoSubmodulo {
  const {
    moduloNumero,
    moduloId,
    estadosConceitos = {},
    dataAtualIso = new Date().toISOString().split('T')[0],
  } = params;

  const revisaoId = `revisao-${moduloId}`;
  const totalItens = REVIEW_CONFIG.reviewSubmodule.totalItensPorSessao; // 20
  const acertosNecessarios = Math.ceil(totalItens * REVIEW_CONFIG.minPassingRetention); // 17 (85%)

  const todosConceitos = conceptRepository.getTodos();

  const extrairNumeroModulo = (id: string): number => {
    const limpo = id.replace(/\D/g, '');
    return parseInt(limpo, 10) || 1;
  };

  // Separa conceitos do módulo atual e de módulos precedentes
  const conceitosModuloAtual = todosConceitos.filter(
    (c) => extrairNumeroModulo(c.moduloId) === moduloNumero
  );
  const conceitosPrecedentes = todosConceitos.filter(
    (c) => extrairNumeroModulo(c.moduloId) < moduloNumero
  );

  const temPrecedentes = moduloNumero > 1 && conceitosPrecedentes.length > 0;

  // Quotas:
  // Se k = 1: 10 C e 10 E de M1
  // Se k >= 2: 6 C e 6 E de Mk; 4 C e 4 E de precedentes
  const quotaAtualC = temPrecedentes ? 6 : 10;
  const quotaAtualE = temPrecedentes ? 6 : 10;
  const quotaPrecedenteC = temPrecedentes ? 4 : 0;
  const quotaPrecedenteE = temPrecedentes ? 4 : 0;

  const calcularPrioridade = (c: Concept): number => {
    const est = estadosConceitos[c.id];
    let score = 0;
    if (est) {
      if (est.estadoDominio === 'critico') score += 1000;
      if (est.proximaRevisao <= dataAtualIso) score += 500;
      if (est.caixaLeitner === 1) score += 300;
      score += est.totalErros * 50;
    } else {
      score += 100; // Itens novos recebem prioridade base
    }
    return score;
  };

  const selecionarGrupo = (
    candidatos: Concept[],
    quantidade: number,
    gabarito: 'C' | 'E'
  ): Concept[] => {
    const filtrados = candidatos.filter((c) => c.gabaritoCanonic === gabarito);
    filtrados.sort((a, b) => calcularPrioridade(b) - calcularPrioridade(a));
    return filtrados.slice(0, quantidade);
  };

  const selecionadosAtualC = selecionarGrupo(conceitosModuloAtual, quotaAtualC, 'C');
  const selecionadosAtualE = selecionarGrupo(conceitosModuloAtual, quotaAtualE, 'E');
  const selecionadosPrecC = selecionarGrupo(conceitosPrecedentes, quotaPrecedenteC, 'C');
  const selecionadosPrecE = selecionarGrupo(conceitosPrecedentes, quotaPrecedenteE, 'E');

  const itensSelecionados: Array<{ conceito: Concept; isAtual: boolean }> = [
    ...selecionadosAtualC.map((c) => ({ conceito: c, isAtual: true })),
    ...selecionadosAtualE.map((c) => ({ conceito: c, isAtual: true })),
    ...selecionadosPrecC.map((c) => ({ conceito: c, isAtual: false })),
    ...selecionadosPrecE.map((c) => ({ conceito: c, isAtual: false })),
  ];

  // Caso falte algum item em módulos curtos, complementa mantendo simetria
  const idsJaEscolhidos = new Set(itensSelecionados.map((i) => i.conceito.id));
  let countC = itensSelecionados.filter((i) => i.conceito.gabaritoCanonic === 'C').length;
  let countE = itensSelecionados.filter((i) => i.conceito.gabaritoCanonic === 'E').length;

  if (countC < 10) {
    const faltam = 10 - countC;
    const extras = todosConceitos.filter(
      (c) => c.gabaritoCanonic === 'C' && !idsJaEscolhidos.has(c.id)
    );
    for (let i = 0; i < faltam && i < extras.length; i++) {
      itensSelecionados.push({ conceito: extras[i], isAtual: false });
      idsJaEscolhidos.add(extras[i].id);
      countC++;
    }
  }

  if (countE < 10) {
    const faltam = 10 - countE;
    const extras = todosConceitos.filter(
      (c) => c.gabaritoCanonic === 'E' && !idsJaEscolhidos.has(c.id)
    );
    for (let i = 0; i < faltam && i < extras.length; i++) {
      itensSelecionados.push({ conceito: extras[i], isAtual: false });
      idsJaEscolhidos.add(extras[i].id);
      countE++;
    }
  }

  // Embaralha itens mantendo a rastreabilidade
  itensSelecionados.sort(() => 0.5 - Math.random());

  // Distribuição de formatos F1 a F8 respeitando teto de 20% para F1
  const maxF1 = Math.floor(totalItens * REVIEW_CONFIG.testCeilingPct); // 4
  let countF1 = 0;
  const formatosAlternativos: ExerciseFormatId[] = [
    'f2_com_justificativa',
    'f3_identificacao_erro',
    'f4_preenchimento_lacunas',
    'f5_associacao',
    'f6_caso_pratico',
    'f7_flashcard_ativo',
    'f8_inversao_papeis',
  ];

  const itensFinais: ItemRevisaoSubmodulo[] = itensSelecionados.map((item, index) => {
    let formato: ExerciseFormatId;
    if (countF1 < maxF1 && index % 5 === 0) {
      formato = 'f1_ce_simples';
      countF1++;
    } else {
      const disponiveis = item.conceito.formatosDisponiveis.filter((f) => f !== 'f1_ce_simples');
      formato = disponiveis.length > 0
        ? disponiveis[index % disponiveis.length]
        : formatosAlternativos[index % formatosAlternativos.length];
    }

    return {
      conceito: item.conceito,
      formato,
      moduloOrigemNumero: extrairNumeroModulo(item.conceito.moduloId),
      isModuloAtual: item.isAtual,
      scorePrioridade: calcularPrioridade(item.conceito),
    };
  });

  return {
    revisaoId,
    moduloNumero,
    moduloId,
    titulo: `Submódulo de Revisão Científica R${moduloNumero}`,
    tituloCurto: `Revisão R${moduloNumero}`,
    totalItens: itensFinais.length,
    totalC: countC,
    totalE: countE,
    itens: itensFinais,
    acertosNecessarios,
    aproveitamentoMinimo: REVIEW_CONFIG.minPassingRetention,
  };
}
