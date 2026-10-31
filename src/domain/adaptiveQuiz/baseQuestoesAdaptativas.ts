import { ALL_SIMULADOS_REGISTRY } from '../../content/simuladosRegistry';
import type { ItemSimuladoAdaptativo } from './types';

/** Fonte única: adaptações antigas independentes deram lugar ao banco revisado e elegível. */
export const BASE_QUESTOES_ADAPTATIVAS: ItemSimuladoAdaptativo[] = [...new Map(
  ALL_SIMULADOS_REGISTRY.flatMap(s => s.questoes).map(q => [q.id, q])
).values()].map(q => ({
  ...q,
  armadilhaBanca: q.armadilhaBanca || '',
  topicoNome: `Submódulo ${q.submoduloId}`,
  autorOuNormaReferencia: q.fonte || q.fonteOriginal.descricao,
}));
