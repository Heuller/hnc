import { REVIEW_CONFIG, PARES_CONCEITUAIS_CONFUNDIVEIS, type ExerciseFormatId } from '../config/reviewConfig';
import type { Concept, ConceptState } from './concepts/types';
import { conceptRepository } from './concepts/conceptRepository';
import { CASOS_INTEGRADORES } from './casosIntegradores/casosIntegradores';
import type { CasoIntegrador } from './casosIntegradores/types';
import { somarDiasUteis, ajustarParaDiaUtil } from './scheduler/unifiedScheduler';

export const EVIDENCIA_CIENTIFICA_FORMATOS: Record<
  ExerciseFormatId,
  { evidencia: string; referencia: string; utilidade: 'alta' | 'moderada' }
> = {
  f1_ce_simples: {
    evidencia: 'Julgamento factual direto simulando a pressão de prova da banca Cebraspe (sem pistas adicionais).',
    referencia: 'Roediger & Karpicke (2006); Dunlosky et al. (2013) - Practice testing has high utility.',
    utilidade: 'alta',
  },
  f2_com_justificativa: {
    evidencia: 'Interrogação elaborativa com justificação explícita do porquê o item é verdadeiro ou falso.',
    referencia: 'Dunlosky et al. (2013) - Elaborative interrogation has moderate utility for factual integration.',
    utilidade: 'moderada',
  },
  f3_identificacao_erro: {
    evidencia: 'Discriminação de contraste cirúrgico para suprimir falsas ilusões de competência e identificar armadilhas.',
    referencia: 'Kornell & Bjork (2008); Dunlosky et al. (2013) - Category induction and interleaved contrast have moderate utility.',
    utilidade: 'moderada',
  },
  f4_preenchimento_lacunas: {
    evidencia: 'Recordação com pistas (cued recall / Cloze): força a recuperação ativa da terminologia normativa exata.',
    referencia: 'Taylor (1953); Roediger & Butler (2011); Dunlosky et al. (2013) - Practice testing via cued recall has high utility.',
    utilidade: 'alta',
  },
  f5_associacao: {
    evidencia: 'Mapeamento relacional de esquemas e padrões de metadados para consolidação de estruturas conceituais.',
    referencia: 'Dunlosky et al. (2013) - Organizing information into conceptual schemas has moderate utility.',
    utilidade: 'moderada',
  },
  f6_caso_pratico: {
    evidencia: 'Aprendizagem contextual e aplicação transferencial a cenários práticos da Câmara dos Deputados.',
    referencia: 'Pashler et al. (2007); Dunlosky et al. (2013) - Transfer to novel contexts has moderate utility.',
    utilidade: 'moderada',
  },
  f7_flashcard_ativo: {
    evidencia: 'Recordação livre com elaborative retrieval (recuperar mentalmente antes de ler o gabarito).',
    referencia: 'Pressley et al. (1987); Roediger & Karpicke (2006); Dunlosky et al. (2013) - Active retrieval practice testing has high utility.',
    utilidade: 'alta',
  },
  f8_inversao_papeis: {
    evidencia: 'Metacognição crítica e análise da ótica do examinador: desmascara os 4 padrões de armadilha Cebraspe.',
    referencia: 'Dunlosky et al. (2013); Flavell (1979) - Metacognitive monitoring has moderate utility.',
    utilidade: 'moderada',
  },
};

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
  submodulosCobertos: string[];
  paresContrastados?: string[]; // Marco U5.5: IDs dos pares conceituais confundíveis contrastados na sessão
  dataProximaRevisaoSugerida: string;
  casoIntegradorDestaque?: CasoIntegrador;
  fundamentacaoCientificaFormatos: typeof EVIDENCIA_CIENTIFICA_FORMATOS;
}

export function normalizarTextoComparacao(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function conceitoCorrespondeAoTermo(
  c: Concept,
  termoCompleto: string,
  submoduloId?: string
): boolean {
  const norm = normalizarTextoComparacao;
  const palavraChave = norm(termoCompleto.split(' ')[0].replace(/[^a-z0-9]/g, ''));
  const texto = norm(
    `${c.id} ${c.submoduloId} ${c.topico} ${c.enunciadoCanonic} ${c.justificativaCanonic} ${c.armadilhaCebraspe || ''}`
  );

  if (submoduloId && (c.submoduloId === submoduloId || norm(c.submoduloId).includes(norm(submoduloId)))) {
    return true;
  }

  if (palavraChave.startsWith('aacr2') && (texto.includes('aacr2') || texto.includes('aacr 2'))) return true;
  if (palavraChave === 'rda' && texto.includes('rda')) return true;
  if (palavraChave === 'cdd' && (texto.includes('cdd') || texto.includes('dewey'))) return true;
  if (palavraChave === 'cdu' && texto.includes('cdu')) return true;
  if (palavraChave === 'crosswalk' && texto.includes('crosswalk')) return true;
  if (palavraChave === 'conversao' && texto.includes('conversao')) return true;
  if (palavraChave === 'owner' && (texto.includes('owner') || texto.includes('proprietario'))) return true;
  if (palavraChave === 'steward' && (texto.includes('steward') || texto.includes('custodiante') || texto.includes('curador'))) return true;
  if (palavraChave === 'acoplamento' && texto.includes('acoplamento')) return true;
  if (palavraChave.includes('citacao') && (texto.includes('co-citacao') || texto.includes('cocitacao'))) return true;
  if (palavraChave === 'precisao' && texto.includes('precisao')) return true;
  if (palavraChave === 'revocacao' && (texto.includes('revocacao') || texto.includes('recall'))) return true;
  if (palavraChave === 'proveniencia' && texto.includes('proveniencia')) return true;
  if (palavraChave === 'linhagem' && (texto.includes('linhagem') || texto.includes('lineage'))) return true;

  return texto.includes(palavraChave);
}

/**
 * Motor de Composição Científica dos Submódulos Rn (Marco R4 / U5.5):
 * - N = 20 itens rigorosamente calibrados.
 * - Simetria Cebraspe: exatamente 10 C e 10 E (50% / 50%).
 * - Origem cumulativa:
 *   - Se k = 1: 100% de M1 (10 C / 10 E).
 *   - Se k >= 2: 60% de Mk (12 itens: 6 C / 6 E) e 40% de M1..Mk-1 (8 itens: 4 C / 4 E).
 * - Priorização cognitiva:
 *   1. Itens em estado crítico ou com histórico de erros.
 *   2. Itens vencidos na repetição espaçada.
 *   3. Contraste de pares conceituais confundíveis (Kornell & Bjork, 2008).
 * - Intercalação:
 *   - Cobertura de ao menos 3 submódulos distintos por sessão quando houver conceitos disponíveis.
 * - Formatos cognitivos:
 *   - Respeita o teto de 20% para o formato F1 (simulado clássico) e distribui os demais em F2 a F8.
 *   - Garante formato formativo (F2 a F8) para ao menos um dos itens de cada par contrastado.
 */
export function comporSubmoduloRevisao(params: {
  moduloNumero: number; // k
  moduloId: string; // 'm1', 'm2', etc.
  estadosConceitos?: Record<string, ConceptState>;
  dataAtualIso?: string;
  itensExcluidosIds?: Set<string>;
}): ComposicaoRevisaoSubmodulo {
  const {
    moduloNumero,
    moduloId,
    estadosConceitos = {},
    dataAtualIso = new Date().toISOString().split('T')[0],
    itensExcluidosIds,
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

  const poolCumulativo = [...conceitosModuloAtual, ...conceitosPrecedentes];
  const todosSubmodulosNoPool = Array.from(new Set(poolCumulativo.map((c) => c.submoduloId)));

  const temPrecedentes = moduloNumero > 1 && conceitosPrecedentes.length > 0;

  // Quotas proporcionais baseadas em totalItens (padrão 20)
  const metaC = Math.ceil(totalItens / 2);
  const metaE = Math.floor(totalItens / 2);

  const quotaAtualC = temPrecedentes ? Math.min(metaC, Math.max(1, Math.round(metaC * 0.6))) : metaC;
  const quotaAtualE = temPrecedentes ? Math.min(metaE, Math.max(1, Math.round(metaE * 0.6))) : metaE;
  const quotaPrecedenteC = Math.max(0, metaC - quotaAtualC);
  const quotaPrecedenteE = Math.max(0, metaE - quotaAtualE);

  // Pares no escopo cumulativo do submódulo Rn (ambos os módulos <= moduloNumero)
  const paresNoEscopo = PARES_CONCEITUAIS_CONFUNDIVEIS.filter((par) => {
    const numA = extrairNumeroModulo(par.moduloIdA);
    const numB = extrairNumeroModulo(par.moduloIdB);
    return numA <= moduloNumero && numB <= moduloNumero;
  });

  const calcularPrioridade = (c: Concept): number => {
    const est = estadosConceitos[c.id];
    let score = 0;
    if (est) {
      // Se já foi revisado hoje com sucesso, reduz prioridade drasticamente
      if (est.dataUltimaRevisao === dataAtualIso && est.proximaRevisao > dataAtualIso) {
        score -= 5000;
      }
      if (est.estadoDominio === 'critico') score += 1000;
      if (est.proximaRevisao <= dataAtualIso) score += 500;
      if (est.caixaLeitner === 1) score += 300;
      score += est.totalErros * 50;
    } else {
      score += 100; // Itens novos recebem prioridade base
    }

    // Bônus para conceitos que compõem pares conceituais confundíveis no escopo
    for (const par of paresNoEscopo) {
      if (
        conceitoCorrespondeAoTermo(c, par.termoA, par.submoduloIdA) ||
        conceitoCorrespondeAoTermo(c, par.termoB, par.submoduloIdB)
      ) {
        score += 400;
        break;
      }
    }

    // Penaliza itens explicitamente excluídos (ex: já agendados na fila diária do mesmo dia)
    if (itensExcluidosIds && itensExcluidosIds.has(c.id)) {
      score -= 10000;
    }

    return score;
  };

  const selecionarGrupo = (
    candidatos: Concept[],
    quantidade: number,
    gabarito: 'C' | 'E'
  ): Concept[] => {
    if (quantidade <= 0) return [];
    const filtrados = candidatos.filter((c) => c.gabaritoCanonic === gabarito);
    // Prioriza estritamente não excluídos e não revisados hoje
    const naoExcluidos = filtrados.filter(
      (c) =>
        (!itensExcluidosIds || !itensExcluidosIds.has(c.id)) &&
        !(estadosConceitos[c.id]?.dataUltimaRevisao === dataAtualIso && estadosConceitos[c.id]?.proximaRevisao > dataAtualIso)
    );
    // Usa os não-excluídos se existirem; nunca inclui itens de itensExcluidosIds ou revisados hoje com sucesso
    const pool = naoExcluidos.length > 0
      ? naoExcluidos
      : filtrados.filter(
          (c) =>
            (!itensExcluidosIds || !itensExcluidosIds.has(c.id)) &&
            !(estadosConceitos[c.id]?.dataUltimaRevisao === dataAtualIso && estadosConceitos[c.id]?.proximaRevisao > dataAtualIso)
        );
    pool.sort((a, b) => calcularPrioridade(b) - calcularPrioridade(a));
    return pool.slice(0, quantidade);
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

  if (countC < metaC) {
    const faltam = metaC - countC;
    const extras = todosConceitos.filter(
      (c) =>
        c.gabaritoCanonic === 'C' &&
        !idsJaEscolhidos.has(c.id) &&
        (!itensExcluidosIds || !itensExcluidosIds.has(c.id)) &&
        !(estadosConceitos[c.id]?.dataUltimaRevisao === dataAtualIso && estadosConceitos[c.id]?.proximaRevisao > dataAtualIso)
    );
    for (let i = 0; i < faltam && i < extras.length; i++) {
      itensSelecionados.push({ conceito: extras[i], isAtual: false });
      idsJaEscolhidos.add(extras[i].id);
      countC++;
    }
  }

  if (countE < metaE) {
    const faltam = metaE - countE;
    const extras = todosConceitos.filter(
      (c) =>
        c.gabaritoCanonic === 'E' &&
        !idsJaEscolhidos.has(c.id) &&
        (!itensExcluidosIds || !itensExcluidosIds.has(c.id)) &&
        !(estadosConceitos[c.id]?.dataUltimaRevisao === dataAtualIso && estadosConceitos[c.id]?.proximaRevisao > dataAtualIso)
    );
    for (let i = 0; i < faltam && i < extras.length; i++) {
      itensSelecionados.push({ conceito: extras[i], isAtual: false });
      idsJaEscolhidos.add(extras[i].id);
      countE++;
    }
  }

  const naoExcluidoOuRevisadoHoje = (c: Concept): boolean => {
    if (itensExcluidosIds && itensExcluidosIds.has(c.id)) return false;
    const est = estadosConceitos[c.id];
    if (est && est.dataUltimaRevisao === dataAtualIso && est.proximaRevisao > dataAtualIso) return false;
    return true;
  };

  // 1. Contraste de Pares Conceituais Confundíveis (Kornell & Bjork, 2008 / U5.5)
  const paresContrastados: string[] = [];
  const conceitosParesContrastadosIds = new Set<string>();

  for (const par of paresNoEscopo) {
    const candA = poolCumulativo.filter((c) => naoExcluidoOuRevisadoHoje(c) && conceitoCorrespondeAoTermo(c, par.termoA, par.submoduloIdA));
    const candB = poolCumulativo.filter((c) => naoExcluidoOuRevisadoHoje(c) && conceitoCorrespondeAoTermo(c, par.termoB, par.submoduloIdB));

    if (candA.length > 0 && candB.length > 0) {
      let itemA = itensSelecionados.find((i) => conceitoCorrespondeAoTermo(i.conceito, par.termoA, par.submoduloIdA));
      let itemB = itensSelecionados.find((i) => conceitoCorrespondeAoTermo(i.conceito, par.termoB, par.submoduloIdB));

      if (!itemA) {
        candA.sort((a, b) => calcularPrioridade(b) - calcularPrioridade(a));
        const escolhidoA = candA.find((c) => !itensSelecionados.some((it) => it.conceito.id === c.id));
        if (escolhidoA) {
          const gab = escolhidoA.gabaritoCanonic;
          const isAtualA = extrairNumeroModulo(escolhidoA.moduloId) === moduloNumero;
          let idxSubst = itensSelecionados.findIndex(
            (it) =>
              it.conceito.gabaritoCanonic === gab &&
              it.isAtual === isAtualA &&
              !conceitosParesContrastadosIds.has(it.conceito.id) &&
              (estadosConceitos[it.conceito.id]?.estadoDominio !== 'critico')
          );
          if (idxSubst < 0 && !temPrecedentes) {
            idxSubst = itensSelecionados.findIndex(
              (it) =>
                it.conceito.gabaritoCanonic === gab &&
                !conceitosParesContrastadosIds.has(it.conceito.id) &&
                (estadosConceitos[it.conceito.id]?.estadoDominio !== 'critico')
            );
          }
          if (idxSubst >= 0) {
            itensSelecionados[idxSubst] = {
              conceito: escolhidoA,
              isAtual: isAtualA,
            };
            itemA = itensSelecionados[idxSubst];
          }
        }
      }

      if (!itemB) {
        candB.sort((a, b) => calcularPrioridade(b) - calcularPrioridade(a));
        const escolhidoB = candB.find((c) => !itensSelecionados.some((it) => it.conceito.id === c.id));
        if (escolhidoB) {
          const gab = escolhidoB.gabaritoCanonic;
          const isAtualB = extrairNumeroModulo(escolhidoB.moduloId) === moduloNumero;
          let idxSubst = itensSelecionados.findIndex(
            (it) =>
              it.conceito.gabaritoCanonic === gab &&
              it.isAtual === isAtualB &&
              !conceitosParesContrastadosIds.has(it.conceito.id) &&
              (estadosConceitos[it.conceito.id]?.estadoDominio !== 'critico')
          );
          if (idxSubst < 0 && !temPrecedentes) {
            idxSubst = itensSelecionados.findIndex(
              (it) =>
                it.conceito.gabaritoCanonic === gab &&
                !conceitosParesContrastadosIds.has(it.conceito.id) &&
                (estadosConceitos[it.conceito.id]?.estadoDominio !== 'critico')
            );
          }
          if (idxSubst >= 0) {
            itensSelecionados[idxSubst] = {
              conceito: escolhidoB,
              isAtual: isAtualB,
            };
            itemB = itensSelecionados[idxSubst];
          }
        }
      }

      if (itemA && itemB) {
        paresContrastados.push(par.id);
        conceitosParesContrastadosIds.add(itemA.conceito.id);
        conceitosParesContrastadosIds.add(itemB.conceito.id);
      }
    }
  }

  // 2. Intercalação de Submódulos (assegura cobertura de ao menos 3 submódulos distintos se houver disponíveis)
  if (todosSubmodulosNoPool.length >= 3) {
    const submodulosPresentes = new Set(itensSelecionados.map((i) => i.conceito.submoduloId));
    if (submodulosPresentes.size < 3) {
      const faltantes = todosSubmodulosNoPool.filter((s) => !submodulosPresentes.has(s));
      // Prioriza submódulos do módulo atual para manter a quota
      const faltantesModuloAtual = faltantes.filter(
        (s) => poolCumulativo.some((c) => c.submoduloId === s && extrairNumeroModulo(c.moduloId) === moduloNumero)
      );
      const faltantesPrecedentes = faltantes.filter((s) => !faltantesModuloAtual.includes(s));
      const faltantesOrdenados = [...faltantesModuloAtual, ...faltantesPrecedentes];

      for (const subFaltante of faltantesOrdenados) {
        if (submodulosPresentes.size >= 3) break;
        const candidatosSub = poolCumulativo.filter(
          (c) =>
            naoExcluidoOuRevisadoHoje(c) &&
            c.submoduloId === subFaltante &&
            !itensSelecionados.some((it) => it.conceito.id === c.id)
        );
        if (candidatosSub.length === 0) continue;
        candidatosSub.sort((a, b) => calcularPrioridade(b) - calcularPrioridade(a));
        const escolhido = candidatosSub[0];
        const gab = escolhido.gabaritoCanonic;
        const isCandidatoAtual = extrairNumeroModulo(escolhido.moduloId) === moduloNumero;

        const contagemPorSubmodulo = itensSelecionados.reduce((acc, it) => {
          acc[it.conceito.submoduloId] = (acc[it.conceito.submoduloId] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        let idxSubst = itensSelecionados.findIndex(
          (it) =>
            it.conceito.gabaritoCanonic === gab &&
            it.isAtual === isCandidatoAtual &&
            !conceitosParesContrastadosIds.has(it.conceito.id) &&
            contagemPorSubmodulo[it.conceito.submoduloId] > 1 &&
            (estadosConceitos[it.conceito.id]?.estadoDominio !== 'critico')
        );

        if (idxSubst < 0 && !temPrecedentes) {
          idxSubst = itensSelecionados.findIndex(
            (it) =>
              it.conceito.gabaritoCanonic === gab &&
              !conceitosParesContrastadosIds.has(it.conceito.id) &&
              contagemPorSubmodulo[it.conceito.submoduloId] > 1 &&
              (estadosConceitos[it.conceito.id]?.estadoDominio !== 'critico')
          );
        }

        if (idxSubst >= 0) {
          itensSelecionados[idxSubst] = {
            conceito: escolhido,
            isAtual: isCandidatoAtual,
          };
          submodulosPresentes.add(subFaltante);
        }
      }
    }
  }

  // Embaralha itens mantendo a rastreabilidade
  itensSelecionados.sort(() => 0.5 - Math.random());

  // 3. Distribuição de formatos F1 a F8 respeitando teto de 20% para F1
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

  // U5.5: Assegura que para cada par contrastado, ao menos um dos itens use formato formativo F2 a F8
  // (evitando que ambos sejam F1 puro)
  for (const parId of paresContrastados) {
    const par = PARES_CONCEITUAIS_CONFUNDIVEIS.find((p) => p.id === parId);
    if (!par) continue;

    const itemA = itensFinais.find((it) => conceitoCorrespondeAoTermo(it.conceito, par.termoA, par.submoduloIdA));
    const itemB = itensFinais.find((it) => conceitoCorrespondeAoTermo(it.conceito, par.termoB, par.submoduloIdB));

    if (itemA && itemB) {
      if (itemA.formato === 'f1_ce_simples' && itemB.formato === 'f1_ce_simples') {
        const novoFormato: ExerciseFormatId =
          itemB.conceito.gabaritoCanonic === 'E' ? 'f3_identificacao_erro' : 'f2_com_justificativa';
        itemB.formato = novoFormato;
        countF1 = Math.max(0, countF1 - 1);
      }
    }
  }

  const submodulosCobertos = Array.from(new Set(itensFinais.map((i) => i.conceito.submoduloId)));
  const totalC = itensFinais.filter((i) => i.conceito.gabaritoCanonic === 'C').length;
  const totalE = itensFinais.filter((i) => i.conceito.gabaritoCanonic === 'E').length;
  const dataBase = ajustarParaDiaUtil(dataAtualIso);
  const dataProximaRevisaoSugerida = somarDiasUteis(dataBase, REVIEW_CONFIG.intervalsDaysByBox[1]);

  // Associação de Casos Integradores a módulos de fechamento de ciclo interdisciplinar
  const mapaCasoIntegradorModulo: Record<number, string> = {
    3: 'ci-1',
    6: 'ci-2',
    8: 'ci-3',
    10: 'ci-4',
    14: 'ci-5',
  };
  const casoIdDestaque = mapaCasoIntegradorModulo[moduloNumero];
  const casoIntegradorDestaque = casoIdDestaque
    ? CASOS_INTEGRADORES.find((ci) => ci.id === casoIdDestaque)
    : undefined;

  return {
    revisaoId,
    moduloNumero,
    moduloId,
    titulo: `Submódulo de Revisão Científica R${moduloNumero}`,
    tituloCurto: `Revisão R${moduloNumero}`,
    totalItens: itensFinais.length,
    totalC,
    totalE,
    itens: itensFinais,
    acertosNecessarios,
    aproveitamentoMinimo: REVIEW_CONFIG.minPassingRetention,
    submodulosCobertos,
    paresContrastados,
    dataProximaRevisaoSugerida,
    casoIntegradorDestaque,
    fundamentacaoCientificaFormatos: EVIDENCIA_CIENTIFICA_FORMATOS,
  };
}

