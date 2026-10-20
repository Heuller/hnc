import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// Rate Limiting em memória (resiliente para testes e instâncias serverless)
// Chave: `userId:endpoint`, Valor: lista de timestamps em ms
const rateLimitCache = new Map<string, number[]>();

export const RATE_LIMIT_10M_MAX = 20;
export const RATE_LIMIT_10M_WINDOW_MS = 10 * 60 * 1000; // 10 minutos
export const RATE_LIMIT_24H_MAX = 200;
export const RATE_LIMIT_24H_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 horas

export interface AuthValidationResult {
  userId: string;
  userEmail?: string;
}

/**
 * Valida autenticação do Supabase exigindo Bearer Token no cabeçalho Authorization.
 */
export async function validateAuth(req: any): Promise<{ auth?: AuthValidationResult; error?: { status: number; message: string; code: string } }> {
  const authHeader = req.headers?.authorization || req.headers?.Authorization;

  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return {
      error: {
        status: 401,
        message: 'Acesso não autorizado. Token de sessão ausente ou inválido.',
        code: 'UNAUTHORIZED',
      },
    };
  }

  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (!token) {
    return {
      error: {
        status: 401,
        message: 'Token de autenticação vazio.',
        code: 'UNAUTHORIZED',
      },
    };
  }

  // Token de teste em ambiente controlado
  if (process.env.NODE_ENV === 'test' && token === 'mock-valid-token') {
    return {
      auth: {
        userId: 'test-user-id',
        userEmail: 'test@hnc.internal',
      },
    };
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !serviceKey) {
    // Se o backend serverless não tiver credenciais configuradas
    if (process.env.NODE_ENV === 'development') {
      return {
        auth: {
          userId: 'dev-local-user',
          userEmail: 'dev@hnc.internal',
        },
      };
    }
    return {
      error: {
        status: 401,
        message: 'Serviço de autenticação do backend não configurado.',
        code: 'AUTH_NOT_CONFIGURED',
      },
    };
  }

  try {
    const supabase = createClient(supabaseUrl, serviceKey);
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return {
        error: {
          status: 401,
          message: 'Sessão inválida ou expirada. Faça login novamente.',
          code: 'INVALID_SESSION',
        },
      };
    }

    return {
      auth: {
        userId: data.user.id,
        userEmail: data.user.email,
      },
    };
  } catch {
    return {
      error: {
        status: 401,
        message: 'Falha ao validar credenciais da sessão.',
        code: 'AUTH_VALIDATION_FAILED',
      },
    };
  }
}

/**
 * Aplica controle de taxa (Rate Limit) por usuário:
 * - Máximo de 20 chamadas a cada 10 minutos
 * - Máximo de 200 chamadas em 24 horas
 */
export async function checkRateLimit(
  userId: string,
  endpoint: string
): Promise<{ allowed: boolean; retryAfterSeconds?: number }> {
  const now = Date.now();
  const key = `${userId}:${endpoint}`;

  const timestamps = rateLimitCache.get(key) || [];
  // Filtra timestamps dentro da janela de 24 horas
  const active24h = timestamps.filter((t) => now - t < RATE_LIMIT_24H_WINDOW_MS);

  if (active24h.length >= RATE_LIMIT_24H_MAX) {
    const oldest = active24h[0];
    const retryAfter = Math.ceil((oldest + RATE_LIMIT_24H_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds: Math.max(1, retryAfter) };
  }

  const active10m = active24h.filter((t) => now - t < RATE_LIMIT_10M_WINDOW_MS);
  if (active10m.length >= RATE_LIMIT_10M_MAX) {
    const oldest = active10m[0];
    const retryAfter = Math.ceil((oldest + RATE_LIMIT_10M_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds: Math.max(1, retryAfter) };
  }

  active24h.push(now);
  rateLimitCache.set(key, active24h);

  // Opcional: Persistência na tabela api_rate_limit se Supabase service role estiver disponível
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && serviceKey) {
    try {
      const supabase = createClient(supabaseUrl, serviceKey);
      await supabase.from('api_rate_limit').insert({
        user_id: userId,
        endpoint,
        created_at: new Date(now).toISOString(),
      });
    } catch {
      // Ignora erro de inserção para não travar o fluxo caso tabela ainda não exista
    }
  }

  return { allowed: true };
}

/**
 * Realiza fetch externo com timeout de 20s via AbortController (Regra F-01.d)
 */
export async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number = 20000
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error(`Timeout de comunicação com o serviço (${timeoutMs / 1000}s excedidos).`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Resposta de erro estruturada padrão sem vazamento de stack trace (Regra F-01.e)
 */
export function sendApiError(
  res: any,
  status: number,
  message: string,
  code: string
) {
  return res.status(status).json({
    error: message,
    code,
  });
}

// Schemas Zod para validação rigorosa de payload (Regra F-01.c e F-07)
export const dictionarySchema = z.object({
  termo: z.string().min(1, 'Termo não pode ser vazio').max(100, 'Termo muito longo (máximo 100 caracteres)'),
  contexto: z.string().max(500, 'Contexto excede 500 caracteres').optional(),
});

export const socraticChallengeSchema = z.object({
  acao: z.enum(['iniciar', 'responder']),
  assertiva: z.string().min(5, 'Assertiva muito curta').max(2000, 'Assertiva muito longa'),
  gabarito: z.enum(['C', 'E']),
  escolhaCandidato: z.enum(['C', 'E', 'BRANCO']),
  argumentoCandidato: z.string().max(1500, 'Argumento excede 1500 caracteres').optional(),
  macroModuloTitulo: z.string().max(200).optional(),
  justificativa: z.string().max(2000).optional(),
  armadilhaBanca: z.string().max(1000).optional(),
});

export const evaluateDiscursivaSchema = z.object({
  titulo: z.string().max(200).optional(),
  tipo: z.enum(['questao_20', 'peca_50']),
  enunciado: z.string().max(2000).optional(),
  limiteLinhas: z.number().min(10).max(60).optional(),
  padraoResposta: z.string().max(4000).optional(),
  criteriosPontuacao: z.array(z.any()).optional(),
  textoCandidato: z.string().min(50, 'Texto da redação insuficiente (mínimo 50 caracteres)').max(6000, 'Texto da redação excede 6.000 caracteres'),
  linhasEstimadas: z.number().min(1).max(60).optional(),
});

export const generateAdaptiveQuizSchema = z.object({
  quantidadeItens: z.number().min(5).max(20).optional(),
  modoFoco: z.enum(['fraquezas_criticas', 'misto', 'chutes_e_erros']).optional(),
  modulosAlvo: z.array(z.string().max(20)).max(15).optional(),
  vulnerabilidades: z.array(z.string().max(100)).max(20).optional(),
});
