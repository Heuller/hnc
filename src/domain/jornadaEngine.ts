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
  | 'portal_revisao'
  | 'submodulo_revisao';

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

export type MotivoRecomendacao = 'revisao_vencida' | 'ponto_fraco' | 'tema_novo' | 'conclusao';

export interface ProximoPassoInfo {
  etapaId: string;
  tipo: TipoEtapa;
  moduloNumero: number;
  titulo: string;
  descricaoAcao: string;
  status: EtapaStatus;
  motivo?: MotivoRecomendacao;
  explicacaoMotivo?: string;
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
 * U2.5: Ordem de desempate determinística da recomendação principal:
 * 1. revisao_vencida: revisão periódica programada/vencida (prioridade máxima pedagógica)
 * 2. ponto_fraco: tópicos em revisão dirigida ou com erros anteriores (< 85%)
 * 3. tema_novo: primeira etapa sequencial da trilha ainda não concluída
 * 4. conclusao: trilha 100% concluída
 */
export function selecionarProximoPassoComDesempate(
  etapasOrdenadas: EtapaJornadaState[]
): ProximoPassoInfo {
  // 1. Prioridade máxima: Revisão periódica programada
  // Uma revisão só está "vencida/programada" se a etapa de desafio imediatamente anterior foi concluída
  // ou se o usuário já realizou tentativas nela sem concluir
  const revisaoVencida = etapasOrdenadas.find((e, idx) => {
    if (e.tipo !== 'submodulo_revisao' && e.tipo !== 'portal_revisao') return false;
    if (e.status === 'concluida') return false;
    const etapaAnterior = idx > 0 ? etapasOrdenadas[idx - 1] : null;
    const elegivelPorPrecedencia = etapaAnterior ? etapaAnterior.status === 'concluida' : true;
    const jaTentada = e.tentativasCount > 0;
    return elegivelPorPrecedencia || jaTentada;
  });

  if (revisaoVencida) {
    return {
      etapaId: revisaoVencida.id,
      tipo: revisaoVencida.tipo,
      moduloNumero: revisaoVencida.moduloNumero,
      titulo: revisaoVencida.tituloCurto || revisaoVencida.titulo,
      descricaoAcao: `Revisão R${revisaoVencida.moduloNumero}: Retenção Cumulativa (20 itens)`,
      status: revisaoVencida.status,
      motivo: 'revisao_vencida',
      explicacaoMotivo:
        'Revisão periódica programada para consolidar a retenção a longo prazo e combater a curva de esquecimento.',
    };
  }

  // 2. Segunda prioridade: Ponto fraco (em revisão dirigida ou com rendimento < 85%)
  const pontoFraco = etapasOrdenadas.find(
    (e) =>
      e.status === 'em_revisao_dirigida' ||
      (e.tentativasCount > 0 && e.melhorAproveitamentoPercent < 85 && e.status !== 'concluida')
  );

  if (pontoFraco) {
    return {
      etapaId: pontoFraco.id,
      tipo: pontoFraco.tipo,
      moduloNumero: pontoFraco.moduloNumero,
      titulo: pontoFraco.tituloCurto || pontoFraco.titulo,
      descricaoAcao:
        pontoFraco.status === 'em_revisao_dirigida'
          ? 'Revisar seções com erros e refazer verificação'
          : 'Reforçar tópicos com rendimento abaixo de 85%',
      status: pontoFraco.status,
      motivo: 'ponto_fraco',
      explicacaoMotivo:
        'Foco de reforço em tópicos com erros registrados ou aproveitamento abaixo do limiar de 85%.',
    };
  }

  // 3. Terceira prioridade: Tema novo (primeira etapa da trilha ainda não concluída)
  const temaNovo = etapasOrdenadas.find((e) => e.status !== 'concluida');

  if (temaNovo) {
    return {
      etapaId: temaNovo.id,
      tipo: temaNovo.tipo,
      moduloNumero: temaNovo.moduloNumero,
      titulo: temaNovo.tituloCurto || temaNovo.titulo,
      descricaoAcao:
        temaNovo.tipo === 'desafio_modulo'
          ? `Iniciar simulado do M${temaNovo.moduloNumero}`
          : temaNovo.tipo === 'submodulo_revisao' || temaNovo.tipo === 'portal_revisao'
          ? `Revisão R${temaNovo.moduloNumero}: Retenção Cumulativa (20 itens)`
          : temaNovo.status === 'em_andamento'
          ? 'Continuar estudo e realizar verificação'
          : 'Iniciar leitura do submódulo',
      status: temaNovo.status,
      motivo: 'tema_novo',
      explicacaoMotivo:
        'Avanço no edital para cobrir novos conteúdos teóricos e questões da banca Cebraspe.',
    };
  }

  // 4. Trilha 100% concluída
  return {
    etapaId: 'conclusao',
    tipo: 'submodulo',
    moduloNumero: 10,
    titulo: 'Trilha de Domínio Concluída',
    descricaoAcao: 'Mantenha a retenção ativa com as revisões diárias e cadernos de erros',
    status: 'concluida',
    motivo: 'conclusao',
    explicacaoMotivo:
      'Trilha completa! Mantenha a retenção com simulados e cadernos de revisão.',
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
}): JornadaState {
  const {
    modulos,
    tentativas,
    secoesVisualizadas,
    secoesReabertasAposFalha = {},
    modoLivre = true, // Modo livre permanente na Fase U2
    checkpointsRespondidos = {},
  } = params;

  const etapas: Record<string, EtapaJornadaState> = {};
  const etapasOrdenadas: EtapaJornadaState[] = [];

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
      return (num >= 1 && num <= 10) || num === 14;
    })
    .sort((a, b) => extrairNumero(a) - extrairNumero(b));

  for (const macro of modulosTrilha) {
    const k = extrairNumero(macro);
    const submodulos = macro.modulosFilhos || [];

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

      // Fase U2 (U2.2): submódulo concluído = leitura de todas as seções E itens respondidos sem exigir nota mínima
      const temTentativaAprovada = tentativasSub.some((t) => t.aprovado) || temCheckpointsAprovados;
      const todosCheckpointsRespondidos =
        checkpointsCount === 0 || respondidosCheckpoints >= checkpointsCount;
      // Fase P14 (J-03): Separação clara entre leitura e domínio
      // Status 'concluida' = domínio comprovado (aprovado) OU (todas as seções lidas E checkpoints respondidos)
      const isConcluida = temTentativaAprovada || (todasSecoesLidas && todosCheckpointsRespondidos);

      // Status (Fase U2: modo livre permanente, todas as etapas são desbloqueadas)
      const isDesbloqueada = true;

      const revisaoDirigida = avaliarRevisaoDirigida(
        tentativasSub,
        secoesReabertasAposFalha[subId] || []
      );

      let status: EtapaStatus = 'disponivel';
      if (revisaoDirigida) {
        status = 'em_revisao_dirigida';
      } else if (isConcluida) {
        status = 'concluida';
      } else if (secoesLidasCount > 0 || tentativasSub.length > 0 || respondidosCheckpoints > 0) {
        status = 'em_andamento';
      } else {
        status = 'disponivel';
      }

      const requisitoDesbloqueio =
        sIdx === 0
          ? k === 1
            ? 'Primeira etapa do curso — acesso liberado.'
            : k === 2
            ? `Conclua o Desafio M1 com 85% ou mais para liberar ${subId}.`
            : `Conclua o Portal P(${k - 1}) com 85% ou mais para liberar ${subId}.`
          : `Para abrir ${subId}: acerte pelo menos 85% em ${submodulos[sIdx - 1].numero}.`;

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

    const isDesafioDesbloqueado = true;
    const revisaoDirigidaDesafio = avaliarRevisaoDirigida(
      tentativasDesafio,
      secoesReabertasAposFalha[desafioId] || []
    );

    let statusDesafio: EtapaStatus = 'disponivel';
    if (desafioConcluido) {
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
      acertosNecessarios: JORNADA_CONFIG.desafioAcertosMinimo, // 85
      errosMaximos: JORNADA_CONFIG.desafioErrosMaximo, // 15
      descricaoRegra: `${JORNADA_CONFIG.desafioAcertosMinimo} acertos em ${JORNADA_CONFIG.desafioItensTotal} itens (no máximo ${JORNADA_CONFIG.desafioErrosMaximo} erros)`,
      tentativasCount: tentativasDesafio.length,
      ultimaTentativa: ultimaTentativaDesafio,
      melhorAproveitamentoPercent: melhorAprovDesafio,
      aprovado: desafioConcluido,
      revisaoDirigida: revisaoDirigidaDesafio,
      requisitoDesbloqueio: `Conclua todos os ${submodulos.length} submódulos do Módulo ${k} com 85% ou mais para liberar o Desafio.`,
      foraDaTrilha: false,
    };

    // 2. Submódulo de Revisão Científica Rn (U5.3: atividade recomendada sem trava ao fim de cada módulo k)
    // Elegíveis: M1 a M10 e M14
    if ((k >= 1 && k <= 10) || k === 14) {
      const portalId = `portal-${macro.id}`;
      const revisaoId = `revisao-${macro.id}`;

      // Busca tentativas registradas tanto com o novo ID (revisao-mk) quanto com o ID legado (portal-mk)
      const tentativasNovo = filtrarTentativasPorTarget(tentativas, revisaoId, false);
      const tentativasLegado = filtrarTentativasPorTarget(tentativas, portalId, false);
      const tentativasCombinadas = [...tentativasNovo, ...tentativasLegado];
      const ultimaTentativaRevisao =
        obterUltimaTentativa(tentativasCombinadas, revisaoId, false) ||
        obterUltimaTentativa(tentativasCombinadas, portalId, false);
      const revisaoConcluida = tentativasCombinadas.some((t) => t.aprovado);
      const melhorAprovRevisao = tentativasCombinadas.reduce(
        (max, t) => Math.max(max, Math.round(t.aproveitamento * 100)),
        0
      );

      const isRevisaoDesbloqueada = true;
      const revisaoDirigida = avaliarRevisaoDirigida(
        tentativasCombinadas,
        [...(secoesReabertasAposFalha[revisaoId] || []), ...(secoesReabertasAposFalha[portalId] || [])]
      );

      let statusRevisao: EtapaStatus = 'disponivel';
      if (revisaoConcluida) {
        statusRevisao = 'concluida';
      } else if (revisaoDirigida) {
        statusRevisao = 'em_revisao_dirigida';
      } else if (tentativasCombinadas.length > 0) {
        statusRevisao = 'em_andamento';
      } else {
        statusRevisao = 'disponivel';
      }

      const etapaRevisao: EtapaJornadaState = {
        id: revisaoId,
        tipo: 'submodulo_revisao',
        moduloNumero: k,
        moduloId: macro.id,
        titulo: `Submódulo de Revisão Científica R${k}: Retenção Cumulativa`,
        tituloCurto: `Revisão R${k}`,
        status: statusRevisao,
        isDesbloqueada: isRevisaoDesbloqueada,
        totalItens: JORNADA_CONFIG.portalItensTotal, // 20
        acertosNecessarios: JORNADA_CONFIG.portalAcertosMinimo, // 17
        errosMaximos: JORNADA_CONFIG.portalErrosMaximo, // 3
        descricaoRegra: `10 a 20 assertivas intercaladas de todos os submódulos já concluídos até o módulo ${k}`,
        tentativasCount: tentativasCombinadas.length,
        ultimaTentativa: ultimaTentativaRevisao,
        melhorAproveitamentoPercent: melhorAprovRevisao,
        aprovado: revisaoConcluida,
        revisaoDirigida,
        requisitoDesbloqueio: `Atividade recomendada de retenção cumulativa para o Módulo M${k}.`,
        foraDaTrilha: false,
      };

      etapas[revisaoId] = etapaRevisao;
      // Alias legado para compatibilidade bidirecional
      etapas[portalId] = {
        ...etapaRevisao,
        id: portalId,
        tipo: 'portal_revisao',
      };
      // Sugere Rn antes do Desafio do módulo (U5.3)
      etapasOrdenadas.push(etapaRevisao);
    }

    // 3. Desafio do Módulo Mk (100 itens - Regra D.1 e D.2)
    etapas[desafioId] = etapaDesafio;
    etapasOrdenadas.push(etapaDesafio);
  }

  // U2.5: Próxima ação recomendada determinística com explicação pedagógica
  const proximoPasso = selecionarProximoPassoComDesempate(etapasOrdenadas);
  const moduloAtivoNumero = proximoPasso.moduloNumero;
  const etapaAtivaId = proximoPasso.etapaId;

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
    proximoPasso,
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
