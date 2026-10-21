import { z } from 'zod';

export const FonteOriginalSchema = z.object({
  tipo: z.enum(['cebraspe-real', 'inedita']),
  descricao: z.string(),
  verificado: z.boolean(),
});

export const NivelRPGSchema = z.union([
  z.literal(1), // Fixação
  z.literal(2), // Compreensão
  z.literal(3), // Aplicação
  z.literal(4), // Prova Real
]);
export type NivelRPG = z.infer<typeof NivelRPGSchema>;

export const HabilidadeCognitivaSchema = z.enum([
  'memorizar',
  'compreender',
  'aplicar',
  'analisar',
  'avaliar',
]);
export type HabilidadeCognitiva = z.infer<typeof HabilidadeCognitivaSchema>;

export const CebraspeQuestionSchema = z.object({
  id: z.string(),
  numero: z.number().min(1).max(250),
  macroModuloId: z.string().default('M1'),
  submoduloId: z.string(), // ex: '1.1', '1.2'
  modulo: z.string().optional(), // alias canônico T8.1
  submodulo: z.string().optional(), // alias canônico T8.1
  editalRef: z.string().optional(),
  nivel: NivelRPGSchema.optional(),
  habilidade: HabilidadeCognitivaSchema.optional(),
  contexto: z.string().optional(),
  item: z.string().min(10), // assertiva
  gabarito: z.enum(['C', 'E']),
  justificativa: z.string().min(10),
  versao_correta: z.string().optional(),
  secao_ref: z.string().optional(),
  armadilhaBanca: z.string().optional(),
  ehPegadinha: z.boolean().optional(),
  revisar: z.boolean().optional(),
  dificuldade: z.enum(['facil', 'media', 'dificil']),
  fonteOriginal: FonteOriginalSchema,
  fonte: z.string().optional(), // Fonte primária direta obrigatória
  dataConferencia: z.string().optional(),
});

export type FonteOriginal = z.infer<typeof FonteOriginalSchema>;
export type CebraspeQuestion = z.infer<typeof CebraspeQuestionSchema>;
export type JulgamentoCebraspe = 'C' | 'E' | 'BRANCO';
export type GrauCertezaCebraspe = 'certeza' | 'provavel' | 'chute';

/**
 * Validador estrito de rastreabilidade editalícia de item do banco de questões (T8.1):
 * Nenhum item entra sem fonte conferida e campos obrigatórios.
 */
export function validarRastreabilidadeItem(q: CebraspeQuestion): {
  valido: boolean;
  camposFaltantes: string[];
} {
  const camposFaltantes: string[] = [];

  const moduloValido = q.modulo || q.macroModuloId;
  if (!moduloValido) camposFaltantes.push('modulo');

  const submoduloValido = q.submodulo || q.submoduloId;
  if (!submoduloValido) camposFaltantes.push('submodulo');

  if (!q.editalRef) camposFaltantes.push('editalRef');
  if (q.nivel === undefined) camposFaltantes.push('nivel');
  if (!q.habilidade) camposFaltantes.push('habilidade');
  if (!q.gabarito) camposFaltantes.push('gabarito');
  if (!q.justificativa || q.justificativa.trim().length < 10) camposFaltantes.push('justificativa');

  const fonteValida = q.fonte || q.fonteOriginal?.descricao;
  if (!fonteValida || fonteValida.trim().length < 3) camposFaltantes.push('fonte');

  if (q.ehPegadinha === undefined) camposFaltantes.push('ehPegadinha');
  if (!q.dataConferencia) camposFaltantes.push('dataConferencia');

  return {
    valido: camposFaltantes.length === 0,
    camposFaltantes,
  };
}

