import { COURSE_REGISTRY } from '../content/registry';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';
import type { SimuladoFinalizado } from './schemas/progress.schema';

export interface ItemCadernoErro {
  id: string; // Ex: 'cp-1-1-2' ou 'sim-fund-q-1'
  chaveOriginal: string; // id do checkpoint ou id da questao
  origem: 'checkpoint' | 'simulado';
  macroModuloId: string;
  macroModuloTitulo: string;
  submoduloId?: string;
  submoduloNumero?: string;
  tituloContexto: string;
  assertiva: string;
  gabarito: 'C' | 'E';
  respostaUsuario: 'C' | 'E' | null;
  justificativa: string;
  armadilhaBanca?: string;
  dataErro?: string;
}

/**
 * Coleta todos os itens errados pelo usuário tanto em micro-checkpoints de teoria
 * quanto no histórico de simulados realizados.
 */
export function getItensCadernoErros(
  checkpointsRespondidos: Record<string, 'C' | 'E'>,
  historicoSimulados: SimuladoFinalizado[]
): ItemCadernoErro[] {
  const erros: ItemCadernoErro[] = [];

  // 1. Erros em Micro-Checkpoints de Teoria
  for (const macro of COURSE_REGISTRY) {
    for (const sub of macro.modulosFilhos) {
      for (const cp of sub.checkpoints) {
        const resp = checkpointsRespondidos[cp.id];
        if (resp && resp !== cp.gabarito) {
          erros.push({
            id: `cp-${cp.id}`,
            chaveOriginal: cp.id,
            origem: 'checkpoint',
            macroModuloId: macro.id,
            macroModuloTitulo: macro.titulo,
            submoduloId: sub.id,
            submoduloNumero: sub.numero,
            tituloContexto: `Teoria · Submódulo ${sub.numero} — ${cp.pergunta}`,
            assertiva: cp.item,
            gabarito: cp.gabarito,
            respostaUsuario: resp,
            justificativa: cp.justificativa,
          });
        }
      }
    }
  }

  // 2. Erros em Simulados (do histórico mais recente)
  if (historicoSimulados && historicoSimulados.length > 0) {
    // Indexa as questões do simulado por ID
    const questoesMap = new Map(simuladoFundamentos100Q.map((q) => [q.id, q]));

    // Percorre cada sessão de simulado do mais recente para o mais antigo
    for (const sim of historicoSimulados) {
      const respostasList = Object.values(sim.respostas || {});
      for (const respItem of respostasList) {
        if (respItem.acertou === false && (respItem.resposta === 'C' || respItem.resposta === 'E')) {
          // Apenas se o usuário respondeu errado (não deixou em branco)
          const questao = questoesMap.get(respItem.questionId) ||
            simuladoFundamentos100Q.find((q) => q.numero.toString() === respItem.questionId || q.id === respItem.questionId);

          if (questao) {
            // Evita duplicação se a mesma questão já foi adicionada de um simulado anterior
            const itemKey = `sim-${questao.id}`;
            if (!erros.some((e) => e.id === itemKey)) {
              erros.push({
                id: itemKey,
                chaveOriginal: questao.id,
                origem: 'simulado',
                macroModuloId: questao.macroModuloId.toLowerCase(),
                macroModuloTitulo: 'Fundamentos da Biblioteconomia (M1)',
                submoduloId: questao.submoduloId,
                submoduloNumero: questao.submoduloId,
                tituloContexto: `Simulado 100Q · Questão ${questao.numero}`,
                assertiva: questao.item,
                gabarito: questao.gabarito,
                respostaUsuario: respItem.resposta,
                justificativa: questao.justificativa,
                armadilhaBanca: questao.armadilhaBanca,
                dataErro: sim.dataHora,
              });
            }
          }
        }
      }
    }
  }

  return erros;
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
