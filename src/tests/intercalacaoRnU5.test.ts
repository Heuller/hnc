import { describe, it, expect } from 'vitest';
import { comporSubmoduloRevisao, conceitoCorrespondeAoTermo } from '../domain/reviewSubmoduleEngine';
import { PARES_CONCEITUAIS_CONFUNDIVEIS, REVIEW_CONFIG } from '../config/reviewConfig';

describe('U5.5: Intercalação nos Rn e Contraste de Pares Confundíveis', () => {
  it('deve assegurar cobertura de no mínimo 3 submódulos distintos em R1, R2 e R3', () => {
    for (const num of [1, 2, 3]) {
      const sessao = comporSubmoduloRevisao({
        moduloNumero: num,
        moduloId: `m${num}`,
      });

      expect(sessao.submodulosCobertos.length).toBeGreaterThanOrEqual(3);
      expect(sessao.totalItens).toBe(20);
      expect(sessao.totalC).toBe(10);
      expect(sessao.totalE).toBe(10);
    }
  });

  it('deve detectar e contrastar na mesma sessão o par AACR2r vs RDA em R2 (k=2)', () => {
    const sessaoR2 = comporSubmoduloRevisao({
      moduloNumero: 2,
      moduloId: 'm2',
    });

    const parAacr2Rda = PARES_CONCEITUAIS_CONFUNDIVEIS.find((p) => p.id === 'par-aacr2r-rda');
    expect(parAacr2Rda).toBeDefined();

    // Deve constar nos pares contrastados
    expect(sessaoR2.paresContrastados).toBeDefined();
    expect(sessaoR2.paresContrastados).toContain('par-aacr2r-rda');

    // Verifica que itens correspondentes a AACR2 e a RDA estão ambos presentes na sessão
    const temAacr2 = sessaoR2.itens.some((it) =>
      conceitoCorrespondeAoTermo(it.conceito, parAacr2Rda!.termoA, parAacr2Rda!.submoduloIdA)
    );
    const temRda = sessaoR2.itens.some((it) =>
      conceitoCorrespondeAoTermo(it.conceito, parAacr2Rda!.termoB, parAacr2Rda!.submoduloIdB)
    );

    expect(temAacr2).toBe(true);
    expect(temRda).toBe(true);
  });

  it('deve alocar formato cognitivo formativo (F2 a F8) para ao menos um dos itens do par contrastado', () => {
    const sessaoR2 = comporSubmoduloRevisao({
      moduloNumero: 2,
      moduloId: 'm2',
    });

    const parAacr2Rda = PARES_CONCEITUAIS_CONFUNDIVEIS.find((p) => p.id === 'par-aacr2r-rda')!;

    const itemAacr2 = sessaoR2.itens.find((it) =>
      conceitoCorrespondeAoTermo(it.conceito, parAacr2Rda.termoA, parAacr2Rda.submoduloIdA)
    );
    const itemRda = sessaoR2.itens.find((it) =>
      conceitoCorrespondeAoTermo(it.conceito, parAacr2Rda.termoB, parAacr2Rda.submoduloIdB)
    );

    expect(itemAacr2).toBeDefined();
    expect(itemRda).toBeDefined();

    // Regra U5.5: não podem ser ambos F1 puro
    const formatos = [itemAacr2!.formato, itemRda!.formato];
    const aoMenosUmFormativo = formatos.some((f) => f !== 'f1_ce_simples');
    expect(aoMenosUmFormativo).toBe(true);
  });

  it('deve respeitar rigorosamente o teto de F1 (<= 20% / max 4 itens) e simetria Cebraspe 10 C / 10 E', () => {
    const sessao = comporSubmoduloRevisao({
      moduloNumero: 2,
      moduloId: 'm2',
    });

    const itensF1 = sessao.itens.filter((i) => i.formato === 'f1_ce_simples');
    const maxPermitidoF1 = Math.floor(sessao.totalItens * REVIEW_CONFIG.testCeilingPct); // 4

    expect(itensF1.length).toBeLessThanOrEqual(maxPermitidoF1);
    expect(sessao.totalC).toBe(10);
    expect(sessao.totalE).toBe(10);
  });
});
