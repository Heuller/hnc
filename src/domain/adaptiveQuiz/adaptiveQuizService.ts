import type {
  ConfiguracaoSimuladoAdaptativo,
  ItemSimuladoAdaptativo,
  ResultadoSimuladoAdaptativo,
  RespostaItemAdaptativo,
} from './types';
import { diagnosticarVulnerabilidades } from './diagnosticEngine';
import { BASE_QUESTOES_ADAPTATIVAS } from './baseQuestoesAdaptativas';
import { getItensCadernoErros } from '../cadernoErros';
import type { SimuladoFinalizado } from '../schemas/progress.schema';

import { filtrarItensSegurosIA } from '../antiHallucinationGuard';

/**
 * Gera um simulado adaptativo equilibrando o diagnóstico de fraquezas
 * com geração via IA (quando online) ou seleção heurística (0ms offline).
 */
export async function gerarSimuladoAdaptativo(
  config: ConfiguracaoSimuladoAdaptativo,
  checkpointsRespondidos: Record<string, 'C' | 'E'>,
  historicoSimulados: SimuladoFinalizado[]
): Promise<ItemSimuladoAdaptativo[]> {
  const vulnerabilidades = diagnosticarVulnerabilidades(
    checkpointsRespondidos,
    historicoSimulados
  );

  const modulosAlvo =
    config.modulosSelecionados && config.modulosSelecionados.length > 0
      ? config.modulosSelecionados
      : vulnerabilidades.map((v) => v.macroModuloId);

  // 1. Tenta gerar via IA no backend
  try {
    const res = await fetch('/api/generate-adaptive-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantidadeItens: config.quantidadeItens,
        modoFoco: config.modoFoco,
        modulosAlvo,
        vulnerabilidades: vulnerabilidades.slice(0, 4),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.itens) && data.itens.length > 0) {
        // Bloqueio rigoroso contra alucinações de IA (Fontes primárias obrigatórias)
        const { aprovados } = filtrarItensSegurosIA(data.itens);
        if (aprovados.length >= Math.min(3, config.quantidadeItens || 5)) {
          return aprovados.map((it: any, idx: number) => ({
            ...it,
            numero: idx + 1,
          }));
        }
      }
    }
  } catch {
    // Falha silenciosa para fallback offline
  }

  // 2. Fallback heurístico inteligente offline
  return montarSimuladoOffline(config, checkpointsRespondidos, historicoSimulados);
}

/**
 * Montagem de simulado adaptativo em 0ms no cliente
 */
export function montarSimuladoOffline(
  config: ConfiguracaoSimuladoAdaptativo,
  checkpointsRespondidos: Record<string, 'C' | 'E'>,
  historicoSimulados: SimuladoFinalizado[]
): ItemSimuladoAdaptativo[] {
  const vulnerabilidades = diagnosticarVulnerabilidades(
    checkpointsRespondidos,
    historicoSimulados
  );
  const errosCaderno = getItensCadernoErros(checkpointsRespondidos, historicoSimulados);

  const selecionadas: ItemSimuladoAdaptativo[] = [];
  const qtdAlvo = config.quantidadeItens || 10;

  // Prioriza módulos com fraquezas identificadas
  const modulosPrioritarios = new Set(
    vulnerabilidades.length > 0
      ? vulnerabilidades.slice(0, 3).map((v) => v.macroModuloId.toLowerCase())
      : ['m1', 'm2', 'm3', 'm4', 'm5']
  );

  // 1. Primeiro adiciona variantes dos erros do próprio caderno se modo for 'erros_caderno'
  if (config.modoFoco === 'erros_caderno' && errosCaderno.length > 0) {
    for (const err of errosCaderno) {
      if (selecionadas.length >= qtdAlvo) break;

      selecionadas.push({
        id: `adp-reteste-${err.id}`,
        numero: selecionadas.length + 1,
        macroModuloId: err.macroModuloId,
        submoduloId: err.submoduloId || '1.1',
        topicoNome: `Reteste de Ponto Cego: ${err.tituloContexto}`,
        item: err.assertiva,
        gabarito: err.gabarito,
        justificativa: err.justificativa,
        armadilhaBanca: err.armadilhaBanca || 'Atenção aos distratores conceituais do Cebraspe.',
        autorOuNormaReferencia: 'Doutrina canônica de Biblioteconomia (Vergueiro, 1989 / Lancaster, 2004)',
      });
    }
  }

  // 2. Completa com itens da base de questões adaptativas priorizando fraquezas
  const questoesPrioritarias = BASE_QUESTOES_ADAPTATIVAS.filter((q) =>
    modulosPrioritarios.has(q.macroModuloId.toLowerCase())
  );
  const outrasQuestoes = BASE_QUESTOES_ADAPTATIVAS.filter(
    (q) => !modulosPrioritarios.has(q.macroModuloId.toLowerCase())
  );

  const pool = [...questoesPrioritarias, ...outrasQuestoes];

  for (const q of pool) {
    if (selecionadas.length >= qtdAlvo) break;
    if (!selecionadas.some((s) => s.id === q.id || s.item === q.item)) {
      selecionadas.push({
        ...q,
        numero: selecionadas.length + 1,
      });
    }
  }

  // Se ainda faltar, completa repetindo variantes com numeração ajustada
  let idx = 0;
  while (selecionadas.length < qtdAlvo && pool.length > 0) {
    const base = pool[idx % pool.length];
    selecionadas.push({
      ...base,
      id: `${base.id}-rep-${selecionadas.length + 1}`,
      numero: selecionadas.length + 1,
    });
    idx++;
  }

  return selecionadas;
}

/**
 * Calcula a pontuação e métricas de desempenho sob a regra estrita do Cebraspe
 * (1 questão errada anula 1 questão certa: Nota = C - E)
 */
export function calcularResultadoSimuladoAdaptativo(
  itens: ItemSimuladoAdaptativo[],
  respostas: Record<string, RespostaItemAdaptativo>,
  tempoGastoSegundos: number
): ResultadoSimuladoAdaptativo {
  let certos = 0;
  let errados = 0;
  let emBranco = 0;

  const lacunasSuperadas: string[] = [];
  const lacunasPersistentes: string[] = [];

  for (const item of itens) {
    const r = respostas[item.id];
    const escolha = r?.resposta || 'BRANCO';

    if (escolha === 'BRANCO') {
      emBranco += 1;
      lacunasPersistentes.push(item.topicoNome);
    } else if (escolha === item.gabarito) {
      certos += 1;
      lacunasSuperadas.push(item.topicoNome);
    } else {
      errados += 1;
      lacunasPersistentes.push(item.topicoNome);
    }
  }

  const totalItens = itens.length;
  // Regra Cebraspe: Nota líquida = Certos - Errados
  const notaLiquidaCebraspe = certos - errados;
  const aproveitamentoLiquidoPercentual =
    totalItens > 0
      ? Math.max(0, Math.round((notaLiquidaCebraspe / totalItens) * 100))
      : 0;

  return {
    id: `res-adp-${Date.now()}`,
    dataHora: new Date().toISOString(),
    totalItens,
    certos,
    errados,
    emBranco,
    notaLiquidaCebraspe,
    aproveitamentoLiquidoPercentual,
    tempoGastoSegundos,
    lacunasSuperadas: Array.from(new Set(lacunasSuperadas)),
    lacunasPersistentes: Array.from(new Set(lacunasPersistentes)),
    respostas,
    itens,
  };
}
