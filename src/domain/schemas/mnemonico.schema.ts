import { z } from 'zod';

// Formato 1: Linha do Tempo
export const MnemonicoTimelineItemSchema = z.object({
  id: z.string(),
  periodo: z.string(),
  disciplina: z.string(),
  focoPrincipal: z.string(),
  figuraChave: z.string(),
});

// Formato 2: "Quem é Quem" (Cartões de Autor)
export const MnemonicoAutorCardSchema = z.object({
  id: z.string(),
  nome: z.string(),
  ano: z.union([z.number(), z.string()]),
  obraPrincipal: z.string(),
  ideiaChave: z.string(),
  chipPegadinha: z.string(),
  detalhesOpcionais: z.string().optional(),
});

// Formato 3: Pegadinhas da Banca (Pares de Afirmação Cebraspe)
export const PegadinhaBancaItemSchema = z.object({
  id: z.string(),
  afirmacao: z.string(),
  gabarito: z.enum(['C', 'E']),
  porQue: z.string(),
});

// Estrutura Agregada dos Mnemônicos por Módulo
export const MnemonicosModuloSchema = z.object({
  timeline: z.array(MnemonicoTimelineItemSchema),
  autores: z.array(MnemonicoAutorCardSchema),
  pegadinhas: z.array(PegadinhaBancaItemSchema),
});

export type MnemonicoTimelineItem = z.infer<typeof MnemonicoTimelineItemSchema>;
export type MnemonicoAutorCard = z.infer<typeof MnemonicoAutorCardSchema>;
export type PegadinhaBancaItem = z.infer<typeof PegadinhaBancaItemSchema>;
export type MnemonicosModulo = z.infer<typeof MnemonicosModuloSchema>;
