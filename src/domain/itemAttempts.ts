import { z } from 'zod';

export type ContextoTentativa =
  | 'teoria'
  | 'jornada'
  | 'treino'
  | 'simulado'
  | 'revisao'
  | 'portal';

export type RespostaCE = 'C' | 'E' | 'BRANCO';

export const ItemAttemptSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().min(1),
  item_id: z.string().min(1),
  submodulo_id: z.string().min(1), // Ex: '1.1'
  modulo_id: z.string().min(1), // Ex: 'm1'
  contexto: z.enum(['teoria', 'jornada', 'treino', 'simulado', 'revisao', 'portal']),
  resposta: z.enum(['C', 'E', 'BRANCO']),
  certeza: z.enum(['alta', 'media', 'baixa']).optional(),
  correto: z.boolean(),
  tentativa_n: z.number().int().positive(), // Contador histórico sequencial
  rodada_n: z.number().int().positive().optional(), // Rodada oficial de verificação (1, 2, ...)
  is_pratica: z.boolean().optional(), // Se true, modo prática que não pontua na verificação oficial
  criado_em: z.string(), // ISO 8601 UTC
});

export type ItemAttempt = z.infer<typeof ItemAttemptSchema>;

export interface CriarItemAttemptParams {
  id?: string;
  userId?: string;
  itemId: string;
  submoduloId: string;
  moduloId: string;
  contexto: ContextoTentativa;
  resposta: RespostaCE;
  gabarito: 'C' | 'E';
  certeza?: 'alta' | 'media' | 'baixa';
  tentativaN?: number;
  rodadaN?: number;
  isPratica?: boolean;
  criadoEm?: string;
}

/**
 * Cria um registro canônico imutável de tentativa de item (Parte 1.2).
 * Gera UUID v4 no cliente para garantia de idempotência no envio ao backend.
 */
export function criarItemAttempt(
  params: CriarItemAttemptParams,
  attemptsExistentes: ItemAttempt[] = []
): ItemAttempt {
  const {
    id = crypto.randomUUID ? crypto.randomUUID() : `att-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    userId = 'usuario-local',
    itemId,
    submoduloId,
    moduloId,
    contexto,
    resposta,
    gabarito,
    certeza,
    criadoEm = new Date().toISOString(),
  } = params;

  const correto = resposta === gabarito;

  // Se tentativaN não for especificado, calcula automaticamente:
  // Se já existe tentativa para este usuário e item, incrementa; senão 1 (primeira tentativa)
  let tentativa_n = params.tentativaN;
  if (!tentativa_n) {
    const anteriores = attemptsExistentes.filter(
      (a) => a.item_id === itemId && a.user_id === userId
    );
    tentativa_n = anteriores.length > 0 ? Math.max(...anteriores.map((a) => a.tentativa_n)) + 1 : 1;
  }

  // Determina rodada_n e is_pratica:
  // Se informado explicitamente, respeita.
  // Caso contrário, mapeamento seguro do legado: tentativa_n === 1 é rodada 1 oficial; tentativa_n > 1 é prática.
  let rodada_n = params.rodadaN;
  let is_pratica = params.isPratica;
  if (rodada_n === undefined && is_pratica === undefined) {
    if (tentativa_n === 1) {
      rodada_n = 1;
      is_pratica = false;
    } else {
      is_pratica = true;
    }
  }

  const attempt: ItemAttempt = {
    id,
    user_id: userId,
    item_id: itemId,
    submodulo_id: submoduloId,
    modulo_id: moduloId,
    contexto,
    resposta,
    certeza,
    correto,
    tentativa_n,
    rodada_n,
    is_pratica,
    criado_em: criadoEm,
  };

  return ItemAttemptSchema.parse(attempt);
}

/**
 * Retorna a primeira tentativa oficial de um item (relevante para o portão - Parte 1.4).
 */
export function obterPrimeiraTentativaItem(
  attempts: ItemAttempt[],
  itemId: string
): ItemAttempt | undefined {
  return attempts.find((a) => a.item_id === itemId && a.tentativa_n === 1);
}

/**
 * Retorna a última tentativa (mais recente) de um item.
 */
export function obterUltimaTentativaItem(
  attempts: ItemAttempt[],
  itemId: string
): ItemAttempt | undefined {
  const list = attempts.filter((a) => a.item_id === itemId);
  if (list.length === 0) return undefined;
  return list.reduce((prev, curr) => (curr.tentativa_n > prev.tentativa_n ? curr : prev));
}

/**
 * Filtra tentativas pertencentes a um submódulo específico.
 */
export function filtrarAttemptsPorSubmodulo(
  attempts: ItemAttempt[],
  submoduloNumero: string
): ItemAttempt[] {
  return attempts.filter(
    (a) => a.submodulo_id === submoduloNumero || a.submodulo_id.replace(/^sub-/, '') === submoduloNumero
  );
}
