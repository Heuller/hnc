import type { QuestaoReal } from './questoesReais';

// Os arquivos de cada lote são preservados, inclusive para auditoria e reimportação.
const arquivos = import.meta.glob<QuestaoReal[]>('./questoesReaisLote*.json', { eager: true, import: 'default' });
export const QUESTOES_LOTES_REAIS: QuestaoReal[] = Object.keys(arquivos).sort().flatMap(nome => arquivos[nome]);
