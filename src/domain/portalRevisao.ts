import { JORNADA_CONFIG } from '../config/jornada.config';
import type { LeitnerItem } from './leitner';

export interface ItemCandidatoPortal {
  id: string;
  moduloNumero: number; // k (ex: 1 para M1, 2 para M2)
  moduloId: string; // 'm1', 'm2'
  submoduloId: string; // '1.1', '2.1'
  assertiva: string;
  gabarito: 'C' | 'E';
  justificativa: string;
  armadilhaBanca?: string;
  secaoId?: string;
}

export interface SelecaoPortalParams {
  moduloAlvoNumero: number; // k (o módulo recém-concluído, k >= 2)
  bancoItens: ItemCandidatoPortal[];
  leitnerDeck?: Record<string, LeitnerItem>;
  cadernoErrosIds?: Set<string>;
  dataAtualIso: string;
  tentativaAnteriorItemIds?: string[];
}

export interface ResultadoSelecaoPortal {
  moduloRevisadoPrincipal: number; // Mk-1
  modulosPrecedentes: number[]; // M1 .. Mk-2
  totalItens: number;
  totalC: number;
  totalE: number;
  itens: ItemCandidatoPortal[];
  itensModuloAnteriorCount: number;
  itensModulosPrecedentesCount: number;
}

/**
 * Motor de Seleção do Portal de Revisão P(k) (Regra D.2):
 * - Disponível somente quando k >= 2.
 * - Revisa o módulo Mk-1 e módulos anteriores.
 * - N = 20 itens.
 * - Exatamente 50% CERTO e 50% ERRADO (10 C / 10 E).
 * - Proporção de origem:
 *   - Se k = 2 (sem módulos anteriores a M1): 100% de M1 (10 C / 10 E).
 *   - Se k >= 3: 70% de Mk-1 (14 itens: 7 C / 7 E) e 30% de módulos anteriores (6 itens: 3 C / 3 E).
 * - Prioridade de seleção:
 *   1. Itens vencidos na repetição espaçada (Leitner)
 *   2. Itens já errados anteriormente (caderno de erros / histórico)
 *   3. Menos vistos recentemente / menos expostos
 * - Anti-repetição: não repete itens da tentativa anterior enquanto houver alternativas.
 */
export function selecionarItensPortal(params: SelecaoPortalParams): ResultadoSelecaoPortal {
  const {
    moduloAlvoNumero,
    bancoItens,
    leitnerDeck = {},
    cadernoErrosIds = new Set(),
    dataAtualIso,
    tentativaAnteriorItemIds = [],
  } = params;

  if (moduloAlvoNumero < 2) {
    throw new Error('Portal de Revisão só existe para módulos k >= 2 (Regra D.1).');
  }

  const moduloPrincipal = moduloAlvoNumero - 1; // Mk-1
  const modulosPrecedentes: number[] = [];
  for (let m = 1; m < moduloPrincipal; m++) {
    modulosPrecedentes.push(m);
  }

  const temPrecedentes = modulosPrecedentes.length > 0;

  // Quotas exatas de C e E:
  // Se não há precedentes (k = 2): 100% de Mk-1 (10 C / 10 E)
  // Se há precedentes (k >= 3): 70% de Mk-1 (7 C / 7 E) e 30% precedentes (3 C / 3 E)
  const quotaPrincipalC = temPrecedentes
    ? Math.round(JORNADA_CONFIG.portalItensTotal * JORNADA_CONFIG.portalProporcaoModuloAnterior * 0.5) // 7
    : 10;
  const quotaPrincipalE = temPrecedentes
    ? Math.round(JORNADA_CONFIG.portalItensTotal * JORNADA_CONFIG.portalProporcaoModuloAnterior * 0.5) // 7
    : 10;

  const quotaPrecedenteC = temPrecedentes
    ? Math.round(JORNADA_CONFIG.portalItensTotal * JORNADA_CONFIG.portalProporcaoModulosPrecedentes * 0.5) // 3
    : 0;
  const quotaPrecedenteE = temPrecedentes
    ? Math.round(JORNADA_CONFIG.portalItensTotal * JORNADA_CONFIG.portalProporcaoModulosPrecedentes * 0.5) // 3
    : 0;

  // Função interna de pontuação/prioridade
  const calcularScorePrioridade = (item: ItemCandidatoPortal): number => {
    const leitner = leitnerDeck[item.id];
    let score = 0;

    // Prioridade 1: Vencido no Leitner (peso 1000)
    if (leitner && leitner.proximaRevisao <= dataAtualIso) {
      score += 1000;
    }

    // Prioridade 2: Errado anteriormente (peso 500)
    if (cadernoErrosIds.has(item.id) || (leitner && leitner.historicoErros > 0)) {
      score += 500;
    }

    // Prioridade 3: Menos visto / exposto (inverso de vezesExposto, até 100 pts)
    const exp = leitner?.vezesExposto || 0;
    score += Math.max(0, 100 - exp);

    return score;
  };

  const selecionarSubConjunto = (
    candidatos: ItemCandidatoPortal[],
    quantidadeDesejada: number
  ): ItemCandidatoPortal[] => {
    if (quantidadeDesejada <= 0) return [];
    if (candidatos.length <= quantidadeDesejada) return [...candidatos];

    // Separa em candidatos que não estavam na tentativa anterior e os que estavam
    const anteriorSet = new Set(tentativaAnteriorItemIds);
    const semRepeticao = candidatos.filter((c) => !anteriorSet.has(c.id));
    const comRepeticao = candidatos.filter((c) => anteriorSet.has(c.id));

    // Ordena ambos por prioridade decrescente
    const ordenar = (arr: ItemCandidatoPortal[]) =>
      [...arr].sort((a, b) => calcularScorePrioridade(b) - calcularScorePrioridade(a));

    const semRepeticaoOrdenados = ordenar(semRepeticao);
    const comRepeticaoOrdenados = ordenar(comRepeticao);

    const selecionados: ItemCandidatoPortal[] = [];

    // Prioriza candidatos sem repetição
    for (const c of semRepeticaoOrdenados) {
      if (selecionados.length < quantidadeDesejada) {
        selecionados.push(c);
      }
    }

    // Se faltou preencher a quota por falta de itens alternativos, recorre com repetição
    for (const c of comRepeticaoOrdenados) {
      if (selecionados.length < quantidadeDesejada) {
        selecionados.push(c);
      }
    }

    return selecionados;
  };

  // Separa o banco em categorias
  const itensPrincipalC = bancoItens.filter(
    (i) => i.moduloNumero === moduloPrincipal && i.gabarito === 'C'
  );
  const itensPrincipalE = bancoItens.filter(
    (i) => i.moduloNumero === moduloPrincipal && i.gabarito === 'E'
  );

  const itensPrecedentesC = bancoItens.filter(
    (i) => modulosPrecedentes.includes(i.moduloNumero) && i.gabarito === 'C'
  );
  const itensPrecedentesE = bancoItens.filter(
    (i) => modulosPrecedentes.includes(i.moduloNumero) && i.gabarito === 'E'
  );

  const selecionadosPrincipalC = selecionarSubConjunto(itensPrincipalC, quotaPrincipalC);
  const selecionadosPrincipalE = selecionarSubConjunto(itensPrincipalE, quotaPrincipalE);
  const selecionadosPrecedentesC = selecionarSubConjunto(itensPrecedentesC, quotaPrecedenteC);
  const selecionadosPrecedentesE = selecionarSubConjunto(itensPrecedentesE, quotaPrecedenteE);

  const todosSelecionados: ItemCandidatoPortal[] = [
    ...selecionadosPrincipalC,
    ...selecionadosPrincipalE,
    ...selecionadosPrecedentesC,
    ...selecionadosPrecedentesE,
  ];

  // Caso algum subgrupo tenha tido déficit de itens no banco de testes ou módulo inicial,
  // preenche com quaisquer outros itens disponíveis para garantir o total de 20 com 10C/10E
  const idsJaEscolhidos = new Set(todosSelecionados.map((i) => i.id));
  let countC = todosSelecionados.filter((i) => i.gabarito === 'C').length;
  let countE = todosSelecionados.filter((i) => i.gabarito === 'E').length;

  if (countC < 10) {
    const faltamC = 10 - countC;
    const extrasC = bancoItens.filter((i) => i.gabarito === 'C' && !idsJaEscolhidos.has(i.id));
    const adicionados = selecionarSubConjunto(extrasC, faltamC);
    todosSelecionados.push(...adicionados);
    adicionados.forEach((i) => idsJaEscolhidos.add(i.id));
    countC += adicionados.length;
  }

  if (countE < 10) {
    const faltamE = 10 - countE;
    const extrasE = bancoItens.filter((i) => i.gabarito === 'E' && !idsJaEscolhidos.has(i.id));
    const adicionados = selecionarSubConjunto(extrasE, faltamE);
    todosSelecionados.push(...adicionados);
    adicionados.forEach((i) => idsJaEscolhidos.add(i.id));
    countE += adicionados.length;
  }

  const itensModuloAnteriorCount = todosSelecionados.filter(
    (i) => i.moduloNumero === moduloPrincipal
  ).length;
  const itensModulosPrecedentesCount = todosSelecionados.filter((i) =>
    modulosPrecedentes.includes(i.moduloNumero)
  ).length;

  return {
    moduloRevisadoPrincipal: moduloPrincipal,
    modulosPrecedentes,
    totalItens: todosSelecionados.length,
    totalC: countC,
    totalE: countE,
    itens: todosSelecionados,
    itensModuloAnteriorCount,
    itensModulosPrecedentesCount,
  };
}
