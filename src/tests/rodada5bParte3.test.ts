import { describe, it, expect } from 'vitest';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';
import { COURSE_REGISTRY } from '../content/registry';

describe('Rodada 5B — Parte 3: Explicação em Toda Resposta (Estudo Reverso)', () => {
  it('(3.2 + 3.4) Todo item do Simulado M1 possui justificativa fundamentada', () => {
    simuladoFundamentos100Q.forEach((q) => {
      expect(q.justificativa, `Item #${q.numero} (${q.id}) sem justificativa`).toBeDefined();
      expect(q.justificativa.trim().length, `Item #${q.numero} (${q.id}) com justificativa muito curta`).toBeGreaterThanOrEqual(15);
      expect(q.justificativa).not.toMatch(/^(correto!?|certo!?|errado!?|perfeito!?)$/i);
    });
  });

  it('(3.2 + 3.4) Teste de build/integridade: Todo item com gabarito ERRADO (E) no Simulado M1 possui OBRIGATORIAMENTE versao_correta', () => {
    const itensErrados = simuladoFundamentos100Q.filter((q) => q.gabarito === 'E');
    expect(itensErrados.length).toBe(50);

    itensErrados.forEach((q) => {
      expect(
        q.versao_correta,
        `Item ERRADO #${q.numero} (${q.id}) FALHA o build por não conter versao_correta`
      ).toBeDefined();
      expect(
        q.versao_correta!.trim().length,
        `Item ERRADO #${q.numero} (${q.id}) possui versao_correta vazia ou insuficiente`
      ).toBeGreaterThanOrEqual(20);
    });
  });

  it('(3.2) Micro-checkpoints do Módulo 1 possuem justificativas completas e versao_correta nos itens errados', () => {
    const submodulosM1 = COURSE_REGISTRY.find((m) => m.id === 'm1')!.modulosFilhos;
    submodulosM1.forEach((sub) => {
      sub.checkpoints.forEach((cp) => {
        expect(cp.justificativa, `Checkpoint ${cp.id} sem justificativa`).toBeDefined();
        expect(cp.justificativa.length).toBeGreaterThanOrEqual(15);

        if (cp.gabarito === 'E') {
          expect(
            (cp as any).versao_correta,
            `Checkpoint ${cp.id} com gabarito E deve possuir versao_correta`
          ).toBeDefined();
        }
      });
    });
  });

  it('(3.5) Textos dos checkpoints e itens não contêm afirmações subjetivas não medidas como "uma das mais cobradas pelo Cebraspe"', () => {
    const submodulosM1 = COURSE_REGISTRY.find((m) => m.id === 'm1')!.modulosFilhos;
    submodulosM1.forEach((sub) => {
      sub.checkpoints.forEach((cp) => {
        expect(cp.justificativa).not.toContain('uma das mais cobradas pelo Cebraspe');
      });
    });
  });
});
