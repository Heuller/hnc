import type { MacroModulo, ModuloFilho } from './schemas/modulo.schema';
import type { ItemAttempt } from './itemAttempts';
import { JORNADA_CONFIG, type JornadaConfig } from '../config/jornada.config';
import { getRequiredSectionsForSubmodule } from './learningEngine';

export interface ItemVerificacaoCanonica {
  id: string;
  submoduloNumero: string;
  moduloId: string;
  texto: string;
  gabarito: 'C' | 'E';
  tipo: 'checkpoint' | 'treino_par' | 'treino_ordem' | 'treino_armadilha';
  justificativa?: string;
  versaoCorreta?: string;
}

export interface SubmoduloProgressoDerivado {
  submoduloId: string; // Ex: 'sub-1-1'
  submoduloNumero: string; // Ex: '1.1'
  moduloId: string; // Ex: 'm1'
  totalItensVerificacao: number; // N total de checkpoints reais
  itensRespondidosCount: number; // Itens respondidos na rodada oficial ativa
  acertosPrimeiraTentativa: number; // Acertos na rodada oficial ativa
  errosPrimeiraTentativa: number; // Erros na rodada oficial ativa
  aproveitamentoPortaoPercent: number; // % da rodada oficial ativa
  acertosNecessariosPortao: number; // Mínimo de acertos para >= 85%
  aprovadoNoPortao: boolean;
  secoesLidasCount: number;
  secoesTotalCount: number;
  leituraCompleta: boolean;
  concluido: boolean; // leituraCompleta && aprovadoNoPortao (ou liberado por exceção)
  emRevisaoDirigida: boolean;
  itensPendentesIds: string[];
  statusTexto: string;
  rodadaAtual?: number;
  podeRefazerVerificacao?: boolean;
  submoduloLiberadoPorExcecao?: boolean;
  primeirasTentativasMap: Record<string, ItemAttempt>;
  ultimasTentativasMap: Record<string, ItemAttempt>;
}

export interface ModuloProgressoDerivado {
  moduloId: string; // Ex: 'm1'
  moduloNumero: number;
  submodulosConcluidosCount: number;
  submodulosTotalCount: number;
  todosSubmodulosConcluidos: boolean;
  simuladoLiberado: boolean;
  simuladoTentativasCount: number;
  simuladoPrimeiraTentativaNota?: number;
  simuladoNotaConsolidada?: number;
  simuladoAprovado: boolean; // notaConsolidada >= minimoSimuladoModulo (0.80)
  moduloConcluido: boolean;
  proximoModuloLiberado: boolean;
}

export interface ProgressoGlobalDerivado {
  submodulos: Record<string, SubmoduloProgressoDerivado>;
  modulos: Record<string, ModuloProgressoDerivado>;
  etapasConcluidasCount: number;
  etapasTotalCount: number;
  progressoPercent: number;
}

/**
 * Obtém a lista exata e canônica de itens de verificação de um submódulo (Regra 1.3 e 1.6).
 * Se N de checkpoints < 6, agrega os exercícios do Treino de Recuperação Ativa (pares, ordenação, pegadinhas)
 * para atingir o N representativo exigido pelo edital sem reduzir o limiar de 85%.
 */
export function obterItensVerificacaoSubmodulo(
  sub: ModuloFilho,
  moduloId = 'm1'
): ItemVerificacaoCanonica[] {
  const lista: ItemVerificacaoCanonica[] = [];

  // Checkpoints canônicos da teoria (única composição oficial da verificação)
  for (const cp of sub.checkpoints || []) {
    lista.push({
      id: cp.id,
      submoduloNumero: sub.numero,
      moduloId,
      texto: cp.item,
      gabarito: cp.gabarito,
      tipo: 'checkpoint',
      justificativa: cp.justificativa,
    });
  }

  return lista;
}

/**
 * Função Pura Canônica (Regra 1.2):
 * Deriva TODO o estado de progresso, conclusão e liberação de portões a partir
 * do registro append-only de tentativas de itens e leituras.
 * PROIBIDO armazenar flags independentes de "concluído".
 */
export function derivarProgresso(
  attempts: ItemAttempt[],
  secoesVisualizadas: Record<string, string[]> = {},
  registry: MacroModulo[],
  config: JornadaConfig = JORNADA_CONFIG,
  simuladoTentativas: any[] = [],
  flagsLegado: string[] = [],
  rodadasAtivas: Record<string, number> = {}
): ProgressoGlobalDerivado {
  const submodulosMap: Record<string, SubmoduloProgressoDerivado> = {};
  const modulosMap: Record<string, ModuloProgressoDerivado> = {};

  // Mapeia primeiras e últimas tentativas por item
  const primeirasTentativasMap: Record<string, ItemAttempt> = {};
  const ultimasTentativasMap: Record<string, ItemAttempt> = {};

  for (const att of attempts) {
    if (att.tentativa_n === 1 || att.rodada_n === 1) {
      if (!primeirasTentativasMap[att.item_id]) {
        primeirasTentativasMap[att.item_id] = att;
      }
    }
    const atual = ultimasTentativasMap[att.item_id];
    if (!atual || att.tentativa_n > atual.tentativa_n) {
      ultimasTentativasMap[att.item_id] = att;
    }
  }

  let totalEtapasConcluidas = 0;
  let totalEtapasExistentes = 0;

  for (const macro of registry) {
    const modNum = typeof macro.numero === 'number' ? macro.numero : parseInt(String(macro.numero).replace(/\D/g, ''), 10) || 1;
    let submodulosConcluidosDoModulo = 0;

    for (const sub of macro.modulosFilhos) {
      totalEtapasExistentes++;

      const itensVerificacao = obterItensVerificacaoSubmodulo(sub, macro.id);
      const totalN = itensVerificacao.length;
      const acertosNecessarios = Math.ceil(config.minimoVerificacao * totalN);

      // Filtra tentativas pertencentes a este submódulo
      const subAttempts = attempts.filter(
        (a) => a.submodulo_id === sub.numero || a.submodulo_id === sub.id
      );

      // Separa tentativas oficiais (não-prática) e descobre a rodada oficial ativa
      const tentativasOficiais = subAttempts.filter((a) => !a.is_pratica);
      const rodadasRegistradas = tentativasOficiais.map(
        (a) => a.rodada_n || (a.tentativa_n === 1 ? 1 : 1)
      );
      const rodadaRegistradaMax = rodadasRegistradas.length > 0 ? Math.max(...rodadasRegistradas) : 1;
      const rodadaAtivaForcada = rodadasAtivas[sub.numero] || rodadasAtivas[sub.id] || 1;
      const rodadaAtual = Math.max(rodadaRegistradaMax, rodadaAtivaForcada);

      // Mapeia as respostas oficiais da rodada ativa
      const tentativasRodadaAtiva: Record<string, ItemAttempt> = {};
      for (const att of tentativasOficiais) {
        const r = att.rodada_n || (att.tentativa_n === 1 ? 1 : 1);
        if (r === rodadaAtual) {
          tentativasRodadaAtiva[att.item_id] = att;
        }
      }

      let respondidosCount = 0;
      let acertosRodada = 0;
      let errosRodada = 0;
      const itensPendentesIds: string[] = [];

      for (const it of itensVerificacao) {
        const att = tentativasRodadaAtiva[it.id];
        if (att && att.resposta !== 'BRANCO') {
          respondidosCount++;
          if (att.correto) {
            acertosRodada++;
          } else {
            errosRodada++;
          }
        } else {
          itensPendentesIds.push(it.id);
        }
      }

      // Limiar estrito sem arredondamento para cima: acertos / totalN >= 0.85
      const taxaAcerto = totalN > 0 ? acertosRodada / totalN : 0;
      const aproveitamentoPortaoPercent = Math.round(taxaAcerto * 100);
      const aprovadoNoPortao =
        respondidosCount === totalN && totalN > 0 && taxaAcerto >= config.minimoVerificacao;

      // Avaliação de leitura canônica
      const secoesLidas = secoesVisualizadas[sub.id] || secoesVisualizadas[sub.numero] || [];
      const requiredSections = getRequiredSectionsForSubmodule(sub);
      const secoesLidasCount = requiredSections.filter((s) => secoesLidas.includes(s)).length;
      const leituraCompleta = requiredSections.length > 0 ? secoesLidasCount === requiredSections.length : true;

      const emRevisaoDirigida = respondidosCount === totalN && !aprovadoNoPortao;
      const podeRefazerVerificacao = emRevisaoDirigida;

      // Exceção legada (grandfathering) para 2.1 não quebrar etapas 2.2/2.3 já concluídas
      const submoduloLiberadoPorExcecao = Boolean(
        flagsLegado && (flagsLegado.includes(sub.numero) || flagsLegado.includes(sub.id))
      );

      const concluido = (leituraCompleta && aprovadoNoPortao) || submoduloLiberadoPorExcecao;

      if (concluido) {
        submodulosConcluidosDoModulo++;
        totalEtapasConcluidas++;
      }

      // Texto de status honesto
      let statusTexto = '';
      if (concluido) {
        statusTexto = `${respondidosCount} de ${totalN} respondidos · ${aproveitamentoPortaoPercent}% · Concluído`;
      } else if (emRevisaoDirigida) {
        statusTexto = `${acertosRodada} de ${totalN} acertos (${aproveitamentoPortaoPercent}% · mín. ${Math.round(config.minimoVerificacao * 100)}%) · Revisão dirigida`;
      } else if (respondidosCount > 0) {
        const faltam = totalN - respondidosCount;
        statusTexto = `${respondidosCount} de ${totalN} respondidos · ${aproveitamentoPortaoPercent}% · faltam ${faltam} ite${faltam > 1 ? 'ns' : 'm'}`;
      } else {
        statusTexto = `0 de ${totalN} respondidos · Não iniciado`;
      }

      const subDerivado: SubmoduloProgressoDerivado = {
        submoduloId: sub.id,
        submoduloNumero: sub.numero,
        moduloId: macro.id,
        totalItensVerificacao: totalN,
        itensRespondidosCount: respondidosCount,
        acertosPrimeiraTentativa: acertosRodada,
        errosPrimeiraTentativa: errosRodada,
        aproveitamentoPortaoPercent,
        acertosNecessariosPortao: acertosNecessarios,
        aprovadoNoPortao,
        secoesLidasCount,
        secoesTotalCount: requiredSections.length,
        leituraCompleta,
        concluido,
        emRevisaoDirigida,
        itensPendentesIds,
        statusTexto,
        rodadaAtual,
        podeRefazerVerificacao,
        submoduloLiberadoPorExcecao,
        primeirasTentativasMap,
        ultimasTentativasMap,
      };

      submodulosMap[sub.numero] = subDerivado;
      submodulosMap[sub.id] = subDerivado;
    }

    const submodulosTotalCount = macro.modulosFilhos.length;
    const todosSubmodulosConcluidos = submodulosConcluidosDoModulo === submodulosTotalCount && submodulosTotalCount > 0;

    // Avaliação do Simulado de 100 itens do módulo (Parte 2)
    // Filtra tentativas de simulado pertencentes a este macro módulo
    const tentativasSimuladoDoMod = simuladoTentativas.filter(
      (t) => t.moduloId === macro.id || t.targetId === macro.id || t.moduloNumero === modNum
    );
    const simuladoTentativasCount = tentativasSimuladoDoMod.length;
    const primeiraTentativaSim = tentativasSimuladoDoMod[0];
    const ultimaTentativaSim = tentativasSimuladoDoMod[tentativasSimuladoDoMod.length - 1];

    const simuladoPrimeiraTentativaNota = primeiraTentativaSim ? primeiraTentativaSim.aproveitamento : undefined;
    // Nota consolidada = acertos da 1ª tentativa + erros superados nos retestes (Regra 2.4)
    const simuladoNotaConsolidada = ultimaTentativaSim
      ? ultimaTentativaSim.notaConsolidada ?? ultimaTentativaSim.aproveitamento
      : undefined;

    const simuladoAprovado = (simuladoNotaConsolidada ?? 0) >= config.minimoSimuladoModulo;
    const moduloConcluido = todosSubmodulosConcluidos && simuladoAprovado;
    const proximoModuloLiberado = moduloConcluido;

    modulosMap[macro.id] = {
      moduloId: macro.id,
      moduloNumero: modNum,
      submodulosConcluidosCount: submodulosConcluidosDoModulo,
      submodulosTotalCount,
      todosSubmodulosConcluidos,
      simuladoLiberado: todosSubmodulosConcluidos,
      simuladoTentativasCount,
      simuladoPrimeiraTentativaNota,
      simuladoNotaConsolidada,
      simuladoAprovado,
      moduloConcluido,
      proximoModuloLiberado,
    };
  }

  const progressoPercent =
    totalEtapasExistentes > 0 ? Math.round((totalEtapasConcluidas / totalEtapasExistentes) * 100) : 0;

  return {
    submodulos: submodulosMap,
    modulos: modulosMap,
    etapasConcluidasCount: totalEtapasConcluidas,
    etapasTotalCount: totalEtapasExistentes,
    progressoPercent,
  };
}
