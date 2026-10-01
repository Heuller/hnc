import { z } from 'zod';
import { MnemonicosModuloSchema } from './mnemonico.schema';

export const AlertaBancaItemSchema = z.object({
  texto: z.string().min(5),
  fonte: z.string().optional(),
  verificado: z.boolean().default(true),
});

export const QuadroComparativoSchema = z.object({
  titulo: z.string(),
  colunas: z.array(z.string()).min(2),
  linhas: z.array(z.array(z.string())),
});

export const CheckpointSchema = z.object({
  id: z.string(),
  pergunta: z.string(),
  item: z.string(),
  gabarito: z.enum(['C', 'E']),
  justificativa: z.string(),
});

export const SecaoTeoriaSchema = z.object({
  id: z.string(),
  nivel: z.union([z.literal(3), z.literal(4)]),
  titulo: z.string(),
  conteudo: z.string(),
});

export const ModuloFilhoSchema = z.object({
  id: z.string(),
  numero: z.string(), // ex: '1.1'
  titulo: z.string(),
  descricaoCurta: z.string(),
  tempoEstimadoMinutos: z.number(),
  autoresChave: z.array(z.string()),
  alertasCebraspe: z.array(z.string()),
  quadroComparativo: QuadroComparativoSchema.optional(),
  teoriaDensaMarkdown: z.string(), // Texto original preservado verbatim
  secoes: z.array(SecaoTeoriaSchema).optional(),
  checkpoints: z.array(CheckpointSchema).min(2).max(3),
  mnemonicos: MnemonicosModuloSchema,
});

export const MacroModuloSchema = z.object({
  id: z.string(), // ex: 'm1'
  codigo: z.string(), // ex: 'M1'
  numero: z.number().min(1).max(20),
  titulo: z.string(),
  subtitulo: z.string(),
  descricao: z.string(),
  status: z.enum(['disponivel', 'planejado']),
  modulosFilhos: z.array(ModuloFilhoSchema),
  simuladoDisponivel: z.boolean(),
});

export type AlertaBancaItem = z.infer<typeof AlertaBancaItemSchema>;
export type QuadroComparativo = z.infer<typeof QuadroComparativoSchema>;
export type Checkpoint = z.infer<typeof CheckpointSchema>;
export type SecaoTeoria = z.infer<typeof SecaoTeoriaSchema>;
export type ModuloFilho = z.infer<typeof ModuloFilhoSchema>;
export type MacroModulo = z.infer<typeof MacroModuloSchema>;
