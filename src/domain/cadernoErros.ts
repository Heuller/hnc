import { respostaDaVersaoAtual } from './versaoConteudoSimulado';
import { COURSE_REGISTRY } from '../content/registry';
import { ALL_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';

import { elegivelParaEstudo } from './questoesElegiveis';
import type { SimuladoFinalizado } from './schemas/progress.schema';
import type { ItemAttempt } from './itemAttempts';
import type { TipoExercicio } from './schemas/modulo.schema';

export interface ItemCadernoErro {
  id: string; // Ex: 'cp-1-1-2' ou 'sim-fund-q-1'
  chaveOriginal: string; // id do checkpoint ou id da questao
  origem: 'checkpoint' | 'simulado' | 'exercicio_secao';
  tipoExercicio?: TipoExercicio | string;
  macroModuloId: string;
  macroModuloTitulo: string;
  submoduloId?: string;
  submoduloNumero?: string;
  tituloContexto: string;
  assertiva: string;
  contexto?: string;
  versao_errada?: string;
  gatilho?: string;
  dataConferencia?: string;
  gabarito: 'C' | 'E';
  respostaUsuario: 'C' | 'E' | null;
  justificativa: string;
  armadilhaBanca?: string;
  versao_correta?: string;
  fonte?: string;
  dataErro?: string;
  certeza?: 'alta' | 'media' | 'baixa';
  prioridadeHipercorrecao?: boolean; // Efeito da Hipercorreção (Butterfield & Metcalfe, 2001)
  pesoRevisao?: number; // 2x se cometido com alta confiança, 1x padrão
}

/**
 * Coleta todos os itens errados pelo usuário em micro-checkpoints, exercícios seccionais
 * e simulados, aplicando o Efeito da Hipercorreção (Butterfield & Metcalfe, 2001):
 * erros com alta confiança recebem prioridade máxima e peso duplicado (2x).
 */
export function getItensCadernoErros(
  checkpointsRespondidos: Record<string, 'C' | 'E'>,
  historicoSimulados: SimuladoFinalizado[],
  attempts?: ItemAttempt[]
): ItemCadernoErro[] {
  const erros: ItemCadernoErro[] = [];

  // Mapeia attempts por item_id para recuperar o nível de certeza / confiança
  const attemptsPorItem = new Map<string, ItemAttempt>();
  if (attempts && attempts.length > 0) {
    // Ordena do mais antigo para o mais recente para capturar a tentativa mais recente
    const ordenadas = [...attempts].sort(
      (a, b) => new Date(a.criado_em).getTime() - new Date(b.criado_em).getTime()
    );
    for (const att of ordenadas) {
      attemptsPorItem.set(att.item_id, att);
    }
  }

  // 1. Erros em Micro-Checkpoints de Teoria
  for (const macro of COURSE_REGISTRY) {
    for (const sub of macro.modulosFilhos) {
      for (const cp of sub.checkpoints) {
        const resp = checkpointsRespondidos[cp.id];
        if (resp && resp !== cp.gabarito) {
          const attempt = attemptsPorItem.get(cp.id);
          const isAltaConfianca = attempt?.certeza === 'alta';

          erros.push({
            id: `cp-${cp.id}`,
            chaveOriginal: cp.id,
            origem: 'checkpoint',
            tipoExercicio: cp.tipo || 'X2',
            macroModuloId: macro.id,
            macroModuloTitulo: macro.titulo,
            submoduloId: sub.id,
            submoduloNumero: sub.numero,
            tituloContexto: `Teoria · Submódulo ${sub.numero} — ${cp.pergunta}`,
            assertiva: cp.item,
            gabarito: cp.gabarito,
            respostaUsuario: resp,
            justificativa: cp.justificativa,
            armadilhaBanca: cp.armadilhaBanca,
            versao_correta: cp.versao_correta,
            fonte: cp.fonte,
            certeza: attempt?.certeza,
            prioridadeHipercorrecao: isAltaConfianca,
            pesoRevisao: isAltaConfianca ? 2.0 : 1.0,
          });
        }
      }
    }
  }

  // 2. Erros em Simulados (do histórico mais recente)
  if (historicoSimulados && historicoSimulados.length > 0) {
    const todasQuestoesSimulados = ALL_SIMULADOS_REGISTRY.flatMap((s) => s.questoes);
    const questoesMap = new Map(todasQuestoesSimulados.map((q) => [q.id, q]));

    for (const sim of historicoSimulados) {
      const simuladoEspecifico = ALL_SIMULADOS_REGISTRY.find(
        (s) => s.id === sim.id || s.macroModuloId?.toLowerCase() === sim.id?.toLowerCase()
      );
      const respostasList = Object.values(sim.respostas || {});
      for (const respItem of respostasList) {
        if (respItem.acertou === false && (respItem.resposta === 'C' || respItem.resposta === 'E')) {
          const questao =
            questoesMap.get(respItem.questionId) ||
            simuladoEspecifico?.questoes.find(
              (q) => q.id === respItem.questionId || q.numero.toString() === respItem.questionId
            ) ||
            simuladoFundamentos100Q.find(
              (q) => q.id === respItem.questionId || q.numero.toString() === respItem.questionId
            ) ||
            todasQuestoesSimulados.find(
              (q) => q.numero.toString() === respItem.questionId || q.id === respItem.questionId
            );

          if (questao && elegivelParaEstudo(questao) && respostaDaVersaoAtual(respItem, questao)) {
            const itemKey = `sim-${questao.id}`;
            if (!erros.some((e) => e.id === itemKey)) {
              const attempt = attemptsPorItem.get(questao.id);
              const isAltaConfianca = attempt?.certeza === 'alta';

              erros.push({
                id: itemKey,
                chaveOriginal: questao.id,
                origem: 'simulado',
                tipoExercicio: 'X2',
                macroModuloId: questao.macroModuloId.toLowerCase(),
                macroModuloTitulo: questao.modulo || (questao.macroModuloId.toLowerCase() === 'm1' ? 'Fundamentos da Biblioteconomia (M1)' : `Módulo ${questao.macroModuloId.toUpperCase()}`),
                submoduloId: questao.submoduloId,
                submoduloNumero: questao.submoduloId,
                tituloContexto: `Simulado 100Q · Questão ${questao.numero}`,
                assertiva: questao.item,
                contexto: questao.contexto,
                gatilho: questao.gatilho,
                versao_errada: questao.versao_errada,
                dataConferencia: questao.dataConferencia,
                gabarito: questao.gabarito,
                respostaUsuario: respItem.resposta,
                justificativa: questao.justificativa,
                armadilhaBanca: questao.armadilhaBanca,
                versao_correta: questao.versao_correta,
                fonte: questao.fonte || questao.fonteOriginal?.descricao,
                dataErro: sim.dataHora,
                certeza: attempt?.certeza,
                prioridadeHipercorrecao: isAltaConfianca,
                pesoRevisao: isAltaConfianca ? 2.0 : 1.0,
              });
            }
          }
        }
      }
    }
  }

  // 3. Ordenação pedagógica: erros com alta confiança (hipercorreção) aparecem primeiro
  return erros.sort((a, b) => {
    if (a.prioridadeHipercorrecao && !b.prioridadeHipercorrecao) return -1;
    if (!a.prioridadeHipercorrecao && b.prioridadeHipercorrecao) return 1;
    return 0;
  });
}

/**
 * Agrupa itens do caderno de erros por macro-módulo.
 */
export function agruparErrosPorModulo(
  erros: ItemCadernoErro[]
): Record<string, ItemCadernoErro[]> {
  const agrupado: Record<string, ItemCadernoErro[]> = {};
  for (const item of erros) {
    const key = item.macroModuloId.toUpperCase();
    if (!agrupado[key]) agrupado[key] = [];
    agrupado[key].push(item);
  }
  return agrupado;
}
