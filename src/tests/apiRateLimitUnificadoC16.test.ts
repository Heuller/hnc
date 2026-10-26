import { describe, it, expect, vi, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';

const ARQUIVOS = ['dictionary', 'evaluate-discursiva', 'generate-adaptive-quiz', 'socratic-challenge', '_lib/guard'];

function extrairFuncao(arquivo: string): string {
  const src = readFileSync(`api/${arquivo}.ts`, 'utf8');
  const i = src.indexOf('export async function checkRateLimit(');
  expect(i).toBeGreaterThan(-1);
  const fim = src.indexOf('\n}\n', i);
  return src.slice(i, fim + 3);
}

describe('rate limit: o código testado é o código que roda', () => {
  it('os 5 arquivos têm a MESMA função checkRateLimit (sem divergência entre cópias)', () => {
    const base = extrairFuncao(ARQUIVOS[0]);
    for (const a of ARQUIVOS.slice(1)) expect(extrairFuncao(a)).toBe(base);
  });

  it('a função consulta a tabela api_rate_limit (leitura), não só grava', () => {
    expect(extrairFuncao('evaluate-discursiva')).toContain("count: 'exact'");
  });
});

const consultas: { count: number; error: null | object }[] = [];
const inserts: unknown[] = [];

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    from: () => ({
      select: () => {
        const q: any = {
          eq: () => q,
          gte: () => Promise.resolve(consultas.shift() ?? { count: 0, error: null }),
        };
        return q;
      },
      insert: (row: unknown) => {
        inserts.push(row);
        return Promise.resolve({ error: null });
      },
    }),
  }),
}));

describe('rate limit: contagem na tabela vale entre instâncias', () => {
  beforeEach(() => {
    consultas.length = 0;
    inserts.length = 0;
    vi.stubEnv('SUPABASE_URL', 'http://x');
    vi.stubEnv('SUPABASE_SERVICE_ROLE_KEY', 'k');
  });

  it('nega quando a tabela já tem 20 chamadas nos últimos 10 minutos, mesmo com Map vazio', async () => {
    const { checkRateLimit } = await import('../../api/evaluate-discursiva');
    consultas.push({ count: 5, error: null }, { count: 20, error: null }); // 24h, 10m
    const r = await checkRateLimit('u-nova-instancia', 'evaluate-discursiva');
    expect(r.allowed).toBe(false);
    expect(r.retryAfterSeconds).toBe(600);
    expect(inserts).toHaveLength(0);
  });

  it('permite e registra a chamada quando abaixo dos limites', async () => {
    const { checkRateLimit } = await import('../../api/evaluate-discursiva');
    consultas.push({ count: 1, error: null }, { count: 1, error: null });
    const r = await checkRateLimit('u-ok', 'evaluate-discursiva');
    expect(r.allowed).toBe(true);
    expect(inserts).toHaveLength(1);
  });

  it('se a tabela falhar, cai no limite em memória (não derruba o endpoint)', async () => {
    const { checkRateLimit } = await import('../../api/evaluate-discursiva');
    consultas.push({ count: 0, error: { message: 'x' } }, { count: 0, error: { message: 'x' } });
    const r = await checkRateLimit('u-erro', 'evaluate-discursiva');
    expect(r.allowed).toBe(true);
  });
});
