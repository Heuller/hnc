import { z } from 'zod';

export const FonteOriginalSchema = z.object({
  tipo: z.enum(['cebraspe-real', 'inedita']),
  descricao: z.string(),
  verificado: z.boolean(),
});

export const CebraspeQuestionSchema = z.object({
  id: z.string(),
  numero: z.number().min(1).max(200),
  macroModuloId: z.string().default('M1'),
  submoduloId: z.string(), // ex: '1.1', '1.2'
  contexto: z.string().optional(),
  item: z.string().min(10), // assertiva
  gabarito: z.enum(['C', 'E']),
  justificativa: z.string().min(10),
  versao_correta: z.string().optional(),
  secao_ref: z.string().optional(),
  armadilhaBanca: z.string().optional(),
  dificuldade: z.enum(['facil', 'media', 'dificil']),
  fonteOriginal: FonteOriginalSchema,
});

export type FonteOriginal = z.infer<typeof FonteOriginalSchema>;
export type CebraspeQuestion = z.infer<typeof CebraspeQuestionSchema>;
export type JulgamentoCebraspe = 'C' | 'E' | 'BRANCO';
export type GrauCertezaCebraspe = 'certeza' | 'provavel' | 'chute';
