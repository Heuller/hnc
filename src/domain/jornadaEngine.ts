import type { MacroModulo } from './types';
import {
  JORNADA_CONFIG,
  calcularAcertosNecessarios,
  getDescricaoLimiar,
} from '../config/jornada.config';
import {
  type TentativaRegistro,
  filtrarTentativasPorTarget,
  obterUltimaTentativa,
} from './tentativas';
import { getRequiredSectionsForSubmodule } from './learningEngine';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';

export type EtapaStatus =
  | 'bloqueada'
  | 'disponivel'
  | 'em_andamento'
  | 'em_revisao_dirigida'
  | 'concluida';

export type TipoEtapa =
  | 'submodulo'
  | 'desafio_modulo'
  | 'portal_revisao';

export interface BloqueioFaltaItensInfo {
  bloqueado: boolean;
  totalItensAprovados: number;
  itensFaltantes: number;
  mensagem: string;
}

export interface RevisaoDirigidaInfo {
  secoesComErros: string[];
  secoesPendentesRevisao: string[];
  podeRefazer: boolean;
  consecutivasReprovacoes: number;
  sugerirReleitura: boolean;
  mensagemSugerirReleitura?: string;
}

export interface EtapaJornadaState {
  id: string; // Ex: '1.1', 'desafio-m1', 'portal-m2'
  tipo: TipoEtapa;
  moduloNumero: number;
  moduloId: string;
  titulo: string;
  tituloCurto: string;
  status: EtapaStatus;
  isDesbloqueada: boolean;
  totalItens: number;
  acertosNecessarios: number;
  errosMaximos: number;
  descricaoRegra: string;
  tentativasCount: number;
  ultimaTentativa?: TentativaRegistro;
  melhorAproveitamentoPercent: number;
  aprovado: boolean;
  secoesLidasCount?: number;
  secoesTotalCount?: number;
  todasSecoesLidas?: boolean;
  revisaoDirigida?: RevisaoDirigidaInfo;
  bloqueioPorFaltaDeItens?: BloqueioFaltaItensInfo;
  requisitoDesbloqueio: string;
  foraDaTrilha: boolean;
}

export interface ProximoPassoInfo {
  etapaId: string;
  tipo: TipoEtapa;
  moduloNumero: number;
  titulo: string;
  descricaoAcao: string;
  status: EtapaStatus;
}

export interface MetricasJornada {
  totalEtapas: number;
  etapasConcluidas: number;
  taxaDominioPercent: number; // Etapas concluídas na trilha / total
  prontidaoPercent: number; // Média ponderada de aproveitamento
  totalTentativasNaTrilha: number;
  itensRevisadosTotal: number;
}

export interface JornadaState {
  modoLivreAtivo: boolean;
  moduloAtivoNumero: number;
  etapaAtivaId: string;
  proximoPasso: ProximoPassoInfo;
  etapas: Record<string, EtapaJornadaState>;
  etapasOrdenadas: EtapaJornadaState[];
  metricas: MetricasJornada;
}

/**
 * Conta quantas reprovações consecutivas ocorreram a partir da tentativa mais recente.
 */
function contarReprovacoesConsecutivas(tentativas: TentativaRegistro[]): number {
  let count = 0;
  for (let i = tentativas.length - 1; i >= 0; i--) {
    if (!tentativas[i].aprovado) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

/**
 * Avalia a Revisão Dirigida para uma etapa que falhou na verificação (Regra D.3).
 */
function avaliarRevisaoDirigida(
  tentativas: TentativaRegistro[],
  secoesReabertas: string[] = []
): RevisaoDirigidaInfo | undefined {
  if (tentativas.length === 0) return undefined;
  const ultima = tentativas[tentativas.length - 1];
  if (ultima.aprovado) return undefined;

  const secoesComErros = ultima.secoesComErros || [];
  const reabertasSet = new Set(secoesReabertas);
  const secoesPendentesRevisao = secoesComErros.filter((s) => !reabertasSet.has(s));
  const podeRefazer = secoesPendentesRevisao.length === 0;

  const consecutivasReprovacoes = contarReprovacoesConsecutivas(tentativas);
  const sugerirReleitura = consecutivasReprovacoes >= 3;
  const mensagemSugerirReleitura = sugerirReleitura
    ? 'Você realizou 3 tentativas sem atingir o limiar de 85%. Sugerimos reler atentamente o texto teórico antes da próxima tentativa.'
    : undefined;

  return {
    secoesComErros,
    secoesPendentesRevisao,
    podeRefazer,
    consecutivasReprovacoes,
    sugerirReleitura,
    mensagemSugerirReleitura,
  };
}

/**
 * Função Pura: Deriva todo o estado da Jornada a partir das tentativas e leituras (Regra D.6).
 *
 * Estrutura de Progressão (Regra D.1):
 * Para cada macro-módulo Mk com submódulos Mk.1 … Mk.n:
 * [Mk.1 → Mk.2 → … → Mk.n] → Desafio do Módulo (100 itens) → Portal de Revisão P(k) (se k >= 2) → Mk+1
 *
 * Critérios Estritos (Regra D.2):
 * - aproveitamentoMinimo: 0.85
 * - acertosNecessarios: ceil(0.85 * N)
 * - N mínimo de verificação: 8 itens
 */
export function deriveJornadaState(params: {
  modulos: MacroModulo[];
  tentativas: TentativaRegistro[];
  secoesVisualizadas: Record<string, string[]>;
  secoesReabertasAposFalha?: Record<string, string[]>;
  modoLivre?: boolean;
  checkpointsRespondidos?: Record<string, 'C' | 'E'>;
  flagsLegado?: string[];
}): JornadaState {
  const {
    modulos,
    tentativas,
    secoesVisualizadas,
    secoesReabertasAposFalha = {},
    modoLivre = false,
    checkpointsRespondidos = {},
    flagsLegado = [],
  } = params;

  const etapas: Record<string, EtapaJornadaState> = {};
  const etapasOrdenadas: EtapaJornadaState[] = [];

  let etapaAnteriorConcluida = true; // A primeira etapa (M1.1) inicia liberada
  let proximoPassoEncontrado: ProximoPassoInfo | null = null;
  let moduloAtivoNumero = 1;
  let etapaAtivaId = '1.1';

  // Filtra apenas os módulos de Conhecimentos Específicos M1 a M10 para a trilha de domínio
  // (Conhecimentos Gerais M11/M12 ficam como estrutura paralela aguardando edital - Regra F.4)
  const extrairNumero = (m: MacroModulo): number => {
    if (typeof m.numero === 'number') return m.numero;
    const n = parseInt(String(m.numero).replace(/\D/g, ''), 10);
    return isNaN(n) ? 0 : n;
  };

  const modulosTrilha = modulos
    .filter((m) => {
      const num = extrairNumero(m);
      return num >= 1 && num <= 10;
    })
    .sort((a, b) => extrairNumero(a) - extrairNumero(b));

  for (const macro of modulosTrilha) {
    const k = extrairNumero(macro);
    // Deduplicação canônica por número (Bug 3)
    const subVistos = new Set<string>();
    const submodulos = (macro.modulosFilhos || []).filter((s) => {
      if (!s || !s.numero) return false;
      if (subVistos.has(s.numero)) return false;
      subVistos.add(s.numero);
      return true;
    });

    // 1. Processa cada submódulo sequencialmente: Mk.1 -> Mk.2 -> ... -> Mk.n
    for (let sIdx = 0; sIdx < submodulos.length; sIdx++) {
      const sub = submodulos[sIdx];
      const subId = sub.numero; // Ex: '1.1'
      const tentativasSub = filtrarTentativasPorTarget(tentativas, subId, false);
      const ultimaTentativa = obterUltimaTentativa(tentativas, subId, false);

      const secoesLidas = secoesVisualizadas[sub.id] || secoesVisualizadas[sub.numero] || [];
      const requiredSections = getRequiredSectionsForSubmodule(sub);
      const secoesLidasCount = requiredSections.filter((s) => secoesLidas.includes(s)).length;
      const todasSecoesLidas =
        requiredSections.length > 0 ? secoesLidasCount === requiredSections.length : true;

      // Verificação do N de itens do submódulo (Regra D.2)
      const checkpointsCount = sub.checkpoints?.length || 0;
      const isMock = macro.titulo?.includes('Teste') || sub.titulo?.includes('Teste');
      const questoesSimuladoCount = !isMock
        ? SIMULADOS_REGISTRY.find((s) => s.numero === k)?.questoes.filter((q) => q.submoduloId === sub.numero).length || 0
        : 0;
      const totalItensAprovados = checkpointsCount + questoesSimuladoCount;
      const faltamItens = totalItensAprovados < JORNADA_CONFIG.nMinimoVerificacao;
      const itensFaltantes = Math.max(0, JORNADA_CONFIG.nMinimoVerificacao - totalItensAprovados);

      let bloqueioPorFaltaDeItens: BloqueioFaltaItensInfo | undefined;
      if (faltamItens) {
        bloqueioPorFaltaDeItens = {
          bloqueado: true,
          totalItensAprovados,
          itensFaltantes,
          mensagem: `Faltam ${itensFaltantes} itens aprovados para habilitar a verificação de domínio de ${sub.numero} (mínimo ${JORNADA_CONFIG.nMinimoVerificacao}). Itens adicionais em rascunho aguardam aprovação.`,
        };
      }

      // Regra de acertos
      const nItens = Math.max(checkpointsCount, 1);
      const acertosNecessarios = calcularAcertosNecessarios(nItens);
      const errosMaximos = Math.max(0, nItens - acertosNecessarios);
      const descricaoRegra = getDescricaoLimiar(nItens);

      // Avaliação dos microcheckpoints respondidos pelo aluno na teoria
      let acertosCheckpoints = 0;
      let respondidosCheckpoints = 0;
      for (const cp of sub.checkpoints || []) {
        const resp = checkpointsRespondidos[cp.id];
        if (resp) {
          respondidosCheckpoints++;
          if (resp === cp.gabarito) {
            acertosCheckpoints++;
          }
        }
      }
      const aproveitamentoCheckpoints = checkpointsCount > 0 ? acertosCheckpoints / checkpointsCount : 0;
      const temCheckpointsAprovados =
        checkpointsCount > 0 &&
        respondidosCheckpoints === checkpointsCount &&
        acertosCheckpoints >= acertosNecessarios;

      // Avaliação de aprovação oficial na trilha
      const melhorAprovTentativas = tentativasSub.reduce(
        (max, t) => Math.max(max, Math.round(t.aproveitamento * 100)),
        0
      );
      const melhorAprov = Math.max(
        melhorAprovTentativas,
        temCheckpointsAprovados ? Math.round(aproveitamentoCheckpoints * 100) : 0
      );

      // Uma etapa só pode ser considerada concluída se:
      // 1. Houver itens de verificação (não falta itens)
      // 2. Houver tentativa aprovada com >= 85% OU microcheckpoints respondidos com >= 85%
      // 3. Todas as seções canônicas de teoria tiverem sido lidas
      const temTentativaAprovada = tentativasSub.some((t) => t.aprovado) || temCheckpointsAprovados;
      const isConcluida = !faltamItens && temTentativaAprovada && todasSecoesLidas;

      // Status
      let status: EtapaStatus = 'bloqueada';
      const isGrandfathered = flagsLegado.includes(subId);
      const isDesbloqueada = etapaAnteriorConcluida || modoLivre || isGrandfathered;

      const revisaoDirigida = avaliarRevisaoDirigida(
        tentativasSub,
        secoesReabertasAposFalha[subId] || []
      );

      if (!isDesbloqueada) {
        status = 'bloqueada';
      } else if (isConcluida) {
        status = 'concluida';
      } else if (revisaoDirigida) {
        // REGRA B3 e D.3: "Em revisão dirigida" SÓ existe se a verificação foi realizada com aproveitamento < 85%
        status = 'em_revisao_dirigida';
      } else if (secoesLidasCount > 0 || tentativasSub.length > 0) {
        status = 'em_andamento';
      } else {
        status = 'disponivel';
      }

      const requisitoDesbloqueio =
        isGrandfathered
          ? 'Acesso liberado por continuidade de estudo (exceção legada).'
          : sIdx === 0
          ? k === 1
            ? 'Primeira etapa do curso — acesso liberado.'
            : k === 2
            ? `Conclua o Desafio M1 com ${Math.round(JORNADA_CONFIG.minimoSimuladoModulo * 100)}% ou mais para liberar ${subId}.`
            : `Conclua o Portal P(${k - 1}) com ${Math.round(JORNADA_CONFIG.minimoVerificacao * 100)}% ou mais para liberar ${subId}.`
          : `Para abrir ${subId}: acerte pelo menos ${Math.round(JORNADA_CONFIG.minimoVerificacao * 100)}% em ${submodulos[sIdx - 1].numero}.`;

      const etapaState: EtapaJornadaState = {
        id: subId,
        tipo: 'submodulo',
        moduloNumero: k,
        moduloId: macro.id,
        titulo: sub.titulo,
        tituloCurto: sub.titulo_curto || sub.titulo,
        status,
        isDesbloqueada,
        totalItens: nItens,
        acertosNecessarios,
        errosMaximos,
        descricaoRegra,
        tentativasCount: tentativasSub.length,
        ultimaTentativa,
        melhorAproveitamentoPercent: melhorAprov,
        aprovado: temTentativaAprovada,
        secoesLidasCount,
        secoesTotalCount: requiredSections.length,
        todasSecoesLidas,
        revisaoDirigida,
        bloqueioPorFaltaDeItens,
        requisitoDesbloqueio,
        foraDaTrilha: false,
      };

      etapas[subId] = etapaState;
      etapasOrdenadas.push(etapaState);

      // Define próximo passo prioritário na trilha
      if (!proximoPassoEncontrado && isDesbloqueada && status !== 'concluida') {
        proximoPassoEncontrado = {
          etapaId: subId,
          tipo: 'submodulo',
          moduloNumero: k,
          titulo: `${sub.numero} · ${sub.titulo_curto || sub.titulo}`,
          descricaoAcao:
            status === 'em_revisao_dirigida'
              ? 'Revisar seções com erros e refazer verificação'
              : status === 'em_andamento'
              ? 'Continuar estudo e realizar verificação'
              : 'Iniciar leitura do submódulo',
          status,
        };
        moduloAtivoNumero = k;
        etapaAtivaId = subId;
      }

      // Progressão linear: o próximo submódulo só abre se este foi concluído
      etapaAnteriorConcluida = isConcluida;
    }

    // 2. Desafio do Módulo Mk (100 itens - Regra D.1 e D.2)
    const desafioId = `desafio-${macro.id}`;
    const tentativasDesafio = filtrarTentativasPorTarget(tentativas, desafioId, false);
    const ultimaTentativaDesafio = obterUltimaTentativa(tentativas, desafioId, false);
    const desafioConcluido = tentativasDesafio.some((t) => t.aprovado);
    const melhorAprovDesafio = tentativasDesafio.reduce(
      (max, t) => Math.max(max, Math.round(t.aproveitamento * 100)),
      0
    );

    const isDesafioDesbloqueado = etapaAnteriorConcluida || modoLivre;
    const revisaoDirigidaDesafio = avaliarRevisaoDirigida(
      tentativasDesafio,
      secoesReabertasAposFalha[desafioId] || []
    );

    let statusDesafio: EtapaStatus = 'bloqueada';
    if (!isDesafioDesbloqueado) {
      statusDesafio = 'bloqueada';
    } else if (desafioConcluido) {
      statusDesafio = 'concluida';
    } else if (revisaoDirigidaDesafio) {
      statusDesafio = 'em_revisao_dirigida';
    } else if (tentativasDesafio.length > 0) {
      statusDesafio = 'em_andamento';
    } else {
      statusDesafio = 'disponivel';
    }

    const etapaDesafio: EtapaJornadaState = {
      id: desafioId,
      tipo: 'desafio_modulo',
      moduloNumero: k,
      moduloId: macro.id,
      titulo: `Desafio do Módulo ${k}: ${macro.titulo}`,
      tituloCurto: `Desafio M${k}`,
      status: statusDesafio,
      isDesbloqueada: isDesafioDesbloqueado,
      totalItens: JORNADA_CONFIG.desafioItensTotal, // 100
      acertosNecessarios: JORNADA_CONFIG.desafioAcertosMinimo, // 80
      errosMaximos: JORNADA_CONFIG.desafioErrosMaximo, // 20
      descricaoRegra: `${JORNADA_CONFIG.desafioAcertosMinimo} acertos em ${JORNADA_CONFIG.desafioItensTotal} itens (no máximo ${JORNADA_CONFIG.desafioErrosMaximo} erros)`,
      tentativasCount: tentativasDesafio.length,
      ultimaTentativa: ultimaTentativaDesafio,
      melhorAproveitamentoPercent: melhorAprovDesafio,
      aprovado: desafioConcluido,
      revisaoDirigida: revisaoDirigidaDesafio,
      requisitoDesbloqueio: `Conclua todos os ${submodulos.length} submódulos do Módulo ${k} com ${Math.round(JORNADA_CONFIG.minimoVerificacao * 100)}% ou mais para liberar o Desafio.`,
      foraDaTrilha: false,
    };

    etapas[desafioId] = etapaDesafio;
    etapasOrdenadas.push(etapaDesafio);

    if (!proximoPassoEncontrado && isDesafioDesbloqueado && statusDesafio !== 'concluida') {
      proximoPassoEncontrado = {
        etapaId: desafioId,
        tipo: 'desafio_modulo',
        moduloNumero: k,
        titulo: `Desafio do Módulo M${k}`,
        descricaoAcao: `Realizar simulado de 100 itens (mínimo ${JORNADA_CONFIG.desafioAcertosMinimo} acertos)`,
        status: statusDesafio,
      };
      moduloAtivoNumero = k;
      etapaAtivaId = desafioId;
    }

    etapaAnteriorConcluida = desafioConcluido;

    // 3. Portal de Revisão P(k) (SOMENTE QUANDO k >= 2 — Regra D.1)
    // De M1 para M2 NÃO há portal!
    if (k >= 2) {
      const portalId = `portal-${macro.id}`;
      const moduloRevisado = k - 1;
      const tentativasPortal = filtrarTentativasPorTarget(tentativas, portalId, false);
      const ultimaTentativaPortal = obterUltimaTentativa(tentativas, portalId, false);
      const portalConcluido = tentativasPortal.some((t) => t.aprovado);
      const melhorAprovPortal = tentativasPortal.reduce(
        (max, t) => Math.max(max, Math.round(t.aproveitamento * 100)),
        0
      );

      const isPortalDesbloqueado = etapaAnteriorConcluida || modoLivre;
      const revisaoDirigidaPortal = avaliarRevisaoDirigida(
        tentativasPortal,
        secoesReabertasAposFalha[portalId] || []
      );

      let statusPortal: EtapaStatus = 'bloqueada';
      if (!isPortalDesbloqueado) {
        statusPortal = 'bloqueada';
      } else if (portalConcluido) {
        statusPortal = 'concluida';
      } else if (revisaoDirigidaPortal) {
        statusPortal = 'em_revisao_dirigida';
      } else if (tentativasPortal.length > 0) {
        statusPortal = 'em_andamento';
      } else {
        statusPortal = 'disponivel';
      }

      const etapaPortal: EtapaJornadaState = {
        id: portalId,
        tipo: 'portal_revisao',
        moduloNumero: k,
        moduloId: macro.id,
        titulo: `Portal de Revisão P(${k}): Retenção de M${moduloRevisado}`,
        tituloCurto: `Portal P(${k})`,
        status: statusPortal,
        isDesbloqueada: isPortalDesbloqueado,
        totalItens: JORNADA_CONFIG.portalItensTotal, // 20
        acertosNecessarios: JORNADA_CONFIG.portalAcertosMinimo, // 17
        errosMaximos: JORNADA_CONFIG.portalErrosMaximo, // 3
        descricaoRegra: `${JORNADA_CONFIG.portalAcertosMinimo} acertos em ${JORNADA_CONFIG.portalItensTotal} itens (no máximo ${JORNADA_CONFIG.portalErrosMaximo} erros)`,
        tentativasCount: tentativasPortal.length,
        ultimaTentativa: ultimaTentativaPortal,
        melhorAproveitamentoPercent: melhorAprovPortal,
        aprovado: portalConcluido,
        revisaoDirigida: revisaoDirigidaPortal,
        requisitoDesbloqueio: `Conclua o Desafio do Módulo M${k} com ${Math.round(JORNADA_CONFIG.minimoSimuladoModulo * 100)}% ou mais para liberar o Portal de Revisão P(${k}).`,
        foraDaTrilha: false,
      };

      etapas[portalId] = etapaPortal;
      etapasOrdenadas.push(etapaPortal);

      if (!proximoPassoEncontrado && isPortalDesbloqueado && statusPortal !== 'concluida') {
        proximoPassoEncontrado = {
          etapaId: portalId,
          tipo: 'portal_revisao',
          moduloNumero: k,
          titulo: `Portal de Revisão P(${k})`,
          descricaoAcao: `Revisar M${moduloRevisado} (20 itens, mín. 17 acertos)`,
          status: statusPortal,
        };
        moduloAtivoNumero = k;
        etapaAtivaId = portalId;
      }

      // O próximo módulo Mk+1 só abre após o portal ser concluído
      etapaAnteriorConcluida = portalConcluido;
    }
  }

  // Se todas as etapas foram concluídas
  if (!proximoPassoEncontrado) {
    proximoPassoEncontrado = {
      etapaId: 'conclusao',
      tipo: 'submodulo',
      moduloNumero: 10,
      titulo: 'Trilha de Domínio Concluída',
      descricaoAcao: 'Mantenha a retenção ativa com as revisões diárias e cadernos de erros',
      status: 'concluida',
    };
  }

  // Cálculo de Métricas Globais (Regra D.5: exclui tentativas marcadas foraDaTrilha)
  const totalEtapas = etapasOrdenadas.length;
  const etapasConcluidas = etapasOrdenadas.filter((e) => e.status === 'concluida').length;
  const taxaDominioPercent =
    totalEtapas > 0 ? Math.round((etapasConcluidas / totalEtapas) * 100) : 0;

  const tentativasValidasNaTrilha = tentativas.filter((t) => !t.foraDaTrilha);
  const somaAproveitamentos = etapasOrdenadas.reduce(
    (acc, e) => acc + e.melhorAproveitamentoPercent,
    0
  );
  const prontidaoPercent =
    totalEtapas > 0 ? Math.round(somaAproveitamentos / totalEtapas) : 0;

  const itensRevisadosTotal = tentativasValidasNaTrilha.reduce(
    (acc, t) => acc + t.totalItens,
    0
  );

  return {
    modoLivreAtivo: modoLivre,
    moduloAtivoNumero,
    etapaAtivaId,
    proximoPasso: proximoPassoEncontrado,
    etapas,
    etapasOrdenadas,
    metricas: {
      totalEtapas,
      etapasConcluidas,
      taxaDominioPercent,
      prontidaoPercent,
      totalTentativasNaTrilha: tentativasValidasNaTrilha.length,
      itensRevisadosTotal,
    },
  };
}
