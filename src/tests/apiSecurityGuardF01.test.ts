import { describe, it, expect, beforeEach } from 'vitest';
import {
  validateAuth,
  checkRateLimit,
  RATE_LIMIT_10M_MAX,
  dictionarySchema,
  socraticChallengeSchema,
  evaluateDiscursivaSchema,
  generateAdaptiveQuizSchema,
} from '../../api/_lib/guard';
import dictionaryHandler from '../../api/dictionary';
import socraticHandler from '../../api/socratic-challenge';

describe('F-01 / F-05 / F-06: Proteção dos Endpoints Serverless (api/_lib/guard)', () => {
  beforeEach(() => {
    process.env.NODE_ENV = 'test';
  });

  it('Chamada sem token Authorization deve retornar 401', async () => {
    const req = {
      headers: {},
      method: 'POST',
      body: { termo: 'Catalogação' },
    };

    const result = await validateAuth(req);
    expect(result.error).toBeDefined();
    expect(result.error?.status).toBe(401);
    expect(result.error?.code).toBe('UNAUTHORIZED');
  });

  it('Chamada com header Authorization Bearer mock-valid-token passa na validação em teste', async () => {
    const req = {
      headers: {
        authorization: 'Bearer mock-valid-token',
      },
    };

    const result = await validateAuth(req);
    expect(result.auth).toBeDefined();
    expect(result.auth?.userId).toBe('test-user-id');
  });

  it('Handler de /api/dictionary rejeita requisição sem token com status 401', async () => {
    let statusCode = 0;
    let responseBody: any = null;

    const req = {
      method: 'POST',
      headers: {},
      body: { termo: 'Indexação' },
    };

    const res = {
      setHeader: () => {},
      status: (code: number) => {
        statusCode = code;
        return {
          json: (body: any) => {
            responseBody = body;
            return body;
          },
        };
      },
    };

    await dictionaryHandler(req, res);
    expect(statusCode).toBe(401);
    expect(responseBody.code).toBe('UNAUTHORIZED');
  });

  it('Controle de taxa (Rate Limit): 21ª chamada na janela de 10 min retorna 429', async () => {
    const userId = `rate-limit-test-${Date.now()}`;
    const endpoint = 'dictionary';

    // 20 chamadas permitidas
    for (let i = 0; i < RATE_LIMIT_10M_MAX; i++) {
      const res = await checkRateLimit(userId, endpoint);
      expect(res.allowed).toBe(true);
    }

    // 21ª chamada deve ser bloqueada
    const blockedRes = await checkRateLimit(userId, endpoint);
    expect(blockedRes.allowed).toBe(false);
    expect(blockedRes.retryAfterSeconds).toBeGreaterThan(0);
  });

  it('Validação Zod de payload: rejeita entradas malformadas ou com excesso de tamanho', () => {
    // Termo vazio
    expect(dictionarySchema.safeParse({ termo: '' }).success).toBe(false);
    // Termo excessivamente longo (> 100 caracteres)
    expect(dictionarySchema.safeParse({ termo: 'a'.repeat(101) }).success).toBe(false);
    // Termo válido
    expect(dictionarySchema.safeParse({ termo: 'Classificação Decimal de Dewey' }).success).toBe(true);

    // Socrático: acao inválida
    expect(socraticChallengeSchema.safeParse({ acao: 'invalida' }).success).toBe(false);

    // Discursiva: texto com menos de 50 caracteres é recusado
    expect(evaluateDiscursivaSchema.safeParse({ tipo: 'questao_20', textoCandidato: 'muito curto' }).success).toBe(false);

    // Adaptive Quiz: quantidade válida
    expect(generateAdaptiveQuizSchema.safeParse({ quantidadeItens: 10 }).success).toBe(true);
  });

  it('F-06: Fallback offline de desafio socrático retorna texto neutro e marca modo offline', async () => {
    delete process.env.GEMINI_API_KEY;
    delete process.env.GOOGLE_API_KEY;

    let statusCode = 0;
    let responseBody: any = null;

    const req = {
      method: 'POST',
      headers: {
        authorization: 'Bearer mock-valid-token',
      },
      body: {
        acao: 'responder',
        assertiva: 'O documento para Suzanne Briet compreende qualquer indício registrado.',
        gabarito: 'C',
        escolhaCandidato: 'E',
        argumentoCandidato: 'Acredito que Briet restringia o conceito a suportes impressos.',
      },
    };

    const res = {
      setHeader: () => {},
      status: (code: number) => {
        statusCode = code;
        return {
          json: (body: any) => {
            responseBody = body;
            return body;
          },
        };
      },
    };

    await socraticHandler(req, res);
    expect(statusCode).toBe(200);
    expect(responseBody.modo).toBe('offline');
    expect(responseBody.respostaBanca).toContain('A IA está indisponível; este é um roteiro de autoanálise');
    expect(responseBody.respostaBanca).not.toContain('O recurso administrativo NÃO PROSPERA');
  });
});
