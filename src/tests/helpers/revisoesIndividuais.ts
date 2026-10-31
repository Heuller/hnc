import fs from 'node:fs';
import path from 'node:path';
import type { CebraspeQuestion } from '../../domain/types';

interface RevisaoIndividual {
  id: string;
  patch: Partial<CebraspeQuestion>;
  nota: string;
  fonteIds: string[];
}

/** Uma adaptação registrada não transforma a origem legada em prova confirmada. */
export const revisoesIndividuais = new Map<string, RevisaoIndividual>(
  fs.readdirSync('docs/revisao-questoes/lotes').filter(file => file.endsWith('.json'))
    .flatMap(file => JSON.parse(fs.readFileSync(path.join('docs/revisao-questoes/lotes', file), 'utf8')) as RevisaoIndividual[])
    .map(registro => [registro.id, registro]),
);
