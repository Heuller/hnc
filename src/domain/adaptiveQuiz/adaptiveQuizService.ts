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


/**
 * Gera um simulado adaptativo equilibrando o diagnóstico de fraquezas
 * com seleção de itens cadastrados, respeitando o escopo solicitado.
 */
export async function gerarSimuladoAdaptativo(
  config: ConfiguracaoSimuladoAdaptativo,
  checkpointsRespondidos: Record<string, 'C' | 'E'>,
  historicoSimulados: SimuladoFinalizado[]
): Promise<ItemSimuladoAdaptativo[]> {
  // Itens de treino devem ter identidade e comentário cadastrados; geração é rascunho editorial.
  return montarSimuladoOffline(config, checkpointsRespondidos, historicoSimulados);

}

/**
 * Montagem de treino adaptativo no cliente
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

  const escopo = config.modulosSelecionados?.map(m => m.toLowerCase());
  const baseNoEscopo = BASE_QUESTOES_ADAPTATIVAS.filter(q => !escopo?.length || escopo.includes(q.macroModuloId.toLowerCase()));

  // Prioriza módulos com fraquezas identificadas
  const modulosPrioritarios = new Set(
    vulnerabilidades.length > 0
      ? vulnerabilidades.slice(0, 3).map((v) => v.macroModuloId.toLowerCase())
      : ['m1', 'm2', 'm3', 'm4', 'm5']
  );

  // 1. Primeiro adiciona variantes dos erros do próprio caderno se modo for 'erros_caderno'
  if (config.modoFoco === 'erros_caderno' && errosCaderno.length > 0) {
    for (const err of errosCaderno.filter(e => !escopo?.length || escopo.includes(e.macroModuloId.toLowerCase()))) {
      if (selecionadas.length >= qtdAlvo) break;
      if (selecionadas.some(q => q.item === err.assertiva)) continue;

      selecionadas.push({
        id: `adp-reteste-${err.id}`,
        numero: selecionadas.length + 1,
        macroModuloId: err.macroModuloId,
        submoduloId: err.submoduloId || '1.1',
        topicoNome: `Reteste de Ponto Cego: ${err.tituloContexto}`,
        item: err.assertiva,
        contexto: err.contexto,
        versao_correta: err.versao_correta,
        versao_errada: err.versao_errada,
        gatilho: err.gatilho,
        fonte: err.fonte,
        dataConferencia: err.dataConferencia,
        gabarito: err.gabarito,
        justificativa: err.justificativa,
        armadilhaBanca: err.armadilhaBanca || 'Atenção aos distratores conceituais do Cebraspe.',
        autorOuNormaReferencia: 'Comentário cadastrado no caderno; confira a referência do item de origem.',
      });
    }
  }

  // 2. Completa com itens da base de questões adaptativas priorizando fraquezas
  const questoesPrioritarias = baseNoEscopo.filter((q) =>
    modulosPrioritarios.has(q.macroModuloId.toLowerCase())
  );
  const outrasQuestoes = baseNoEscopo.filter(
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

  // A quantidade devolvida é a disponível; nunca duplicar texto com outro ID para completar a meta.
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
