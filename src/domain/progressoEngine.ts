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
  totalItensVerificacao: number; // N total
  itensRespondidosCount: number; // X respondidos na 1ª tentativa
  acertosPrimeiraTentativa: number;
  errosPrimeiraTentativa: number;
  aproveitamentoPortaoPercent: number; // % da primeira tentativa
  acertosNecessariosPortao: number; // ceil(minimoVerificacao * N)
  aprovadoNoPortao: boolean;
  secoesLidasCount: number;
  secoesTotalCount: number;
  leituraCompleta: boolean;
  concluido: boolean; // leituraCompleta && aprovadoNoPortao
  emRevisaoDirigida: boolean;
  itensPendentesIds: string[];
  statusTexto: string; // Ex: "3 de 3 respondidos · 100% · Concluído" ou "2 de 3 respondidos · 67% · faltam 1 item"
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

  // 1. Checkpoints canônicos da teoria
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

  // 2. Se N < 6, soma exercícios do Treino de Recuperação Ativa (Regra 1.6)
  if (lista.length < 6 && sub.mnemonicos) {
    // A) Pares de autores
    (sub.mnemonicos.autores || []).slice(0, 3).forEach((a, idx) => {
      const nomeAutor = typeof a === 'string' ? a : a.nome;
      const conceito = typeof a === 'object' ? a.ideiaChave || a.obraPrincipal : 'Doutrina canônica de referência';
      lista.push({
        id: `pair-${sub.numero}-${idx}`,
        submoduloNumero: sub.numero,
        moduloId,
        texto: `Julgue o item a respeito da doutrina e autores de referência: ${nomeAutor} é associado ao seguinte fundamento conceitual ou obra: "${conceito}".`,
        gabarito: 'C',
        tipo: 'treino_par',
        justificativa: typeof a === 'object' ? `${a.nome}${a.ano ? ` (${a.ano})` : ''}: ${a.ideiaChave || a.obraPrincipal}${a.chipPegadinha ? ` · Atenção: ${a.chipPegadinha}` : ''}` : undefined,
      });
    });

    // B) Pegadinhas / Caça-armadilha
    (sub.mnemonicos.pegadinhas || []).slice(0, 3).forEach((peg) => {
      if (typeof peg === 'object') {
        lista.push({
          id: peg.id,
          submoduloNumero: sub.numero,
          moduloId,
          texto: peg.afirmacao,
          gabarito: peg.gabarito,
          tipo: 'treino_armadilha',
          justificativa: peg.porQue,
        });
      }
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
  simuladoTentativas: any[] = []
): ProgressoGlobalDerivado {
  const submodulosMap: Record<string, SubmoduloProgressoDerivado> = {};
  const modulosMap: Record<string, ModuloProgressoDerivado> = {};

  // Mapeia primeiras e últimas tentativas por item
  const primeirasTentativasMap: Record<string, ItemAttempt> = {};
  const ultimasTentativasMap: Record<string, ItemAttempt> = {};

  for (const att of attempts) {
    // 1ª tentativa oficial (portão)
    if (att.tentativa_n === 1) {
      if (!primeirasTentativasMap[att.item_id]) {
        primeirasTentativasMap[att.item_id] = att;
      }
    }
    // Última tentativa (mais recente)
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

      let respondidosCount = 0;
      let acertosPrimeiraTentativa = 0;
      let errosPrimeiraTentativa = 0;
      const itensPendentesIds: string[] = [];

      for (const it of itensVerificacao) {
        const primeira = primeirasTentativasMap[it.id];
        if (primeira && primeira.resposta !== 'BRANCO') {
          respondidosCount++;
          if (primeira.correto) {
            acertosPrimeiraTentativa++;
          } else {
            errosPrimeiraTentativa++;
          }
        } else {
          itensPendentesIds.push(it.id);
        }
      }

      const aproveitamentoPortaoPercent =
        totalN > 0 ? Math.round((acertosPrimeiraTentativa / totalN) * 100) : 0;
      const aprovadoNoPortao =
        respondidosCount === totalN && acertosPrimeiraTentativa >= acertosNecessarios;

      // Avaliação de leitura canônica
      const secoesLidas = secoesVisualizadas[sub.id] || secoesVisualizadas[sub.numero] || [];
      const requiredSections = getRequiredSectionsForSubmodule(sub);
      const secoesLidasCount = requiredSections.filter((s) => secoesLidas.includes(s)).length;
      const leituraCompleta = requiredSections.length > 0 ? secoesLidasCount === requiredSections.length : true;

      const emRevisaoDirigida = respondidosCount === totalN && !aprovadoNoPortao;
      const concluido = leituraCompleta && aprovadoNoPortao;

      if (concluido) {
        submodulosConcluidosDoModulo++;
        totalEtapasConcluidas++;
      }

      // Texto de status honesto (Regra 1.3)
      let statusTexto = '';
      if (concluido) {
        statusTexto = `${respondidosCount} de ${totalN} respondidos · ${aproveitamentoPortaoPercent}% · Concluído`;
      } else if (emRevisaoDirigida) {
        statusTexto = `${acertosPrimeiraTentativa} de ${totalN} acertos (${aproveitamentoPortaoPercent}% · mín. ${Math.round(config.minimoVerificacao * 100)}%) · Revisão dirigida`;
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
        acertosPrimeiraTentativa,
        errosPrimeiraTentativa,
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
