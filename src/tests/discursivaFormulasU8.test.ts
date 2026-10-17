import { describe, it, expect } from 'vitest';
import {
  notaQuestao,
  notaPeca,
  notaFinalDiscursiva,
  isAprovadoDiscursiva,
  obterDetalheCalculoDiscursiva,
} from '../domain/discursiva/formulas';

describe('U8.4 - Fórmulas Oficiais da Prova Discursiva (Edital nº 1/2026)', () => {
  describe('notaQuestao (NQi = NCi − 3 × NEi ÷ TLi)', () => {
    it('deve calcular corretamente o caso de teste canônico: NC=12, NE=6, TL=20 → NQ=11.1', () => {
      // 12 - (3 * 6 / 20) = 12 - 0.9 = 11.1
      const nq = notaQuestao(12, 6, 20);
      expect(nq).toBe(11.1);
    });

    it('deve zerar a nota caso o desconto resulte em valor negativo', () => {
      // NC=1, NE=10, TL=20 -> 1 - (30/20) = 1 - 1.5 = -0.5 -> 0
      const nq = notaQuestao(1, 10, 20);
      expect(nq).toBe(0);
    });

    it('deve retornar zero se o total de linhas for zero (ausência de texto)', () => {
      expect(notaQuestao(10, 0, 0)).toBe(0);
      expect(notaQuestao(15, 2, -1)).toBe(0);
    });

    it('deve respeitar a nota máxima de 15.00 pontos da questão', () => {
      const nq = notaQuestao(18, 0, 20);
      expect(nq).toBe(15);
    });
  });

  describe('notaPeca (NPT = NC − 6 × NE ÷ TL)', () => {
    it('deve calcular corretamente o caso de teste canônico: NC=24, NE=10, TL=50 → NPT=22.8', () => {
      // 24 - (6 * 10 / 50) = 24 - 1.2 = 22.8
      const npt = notaPeca(24, 10, 50);
      expect(npt).toBe(22.8);
    });

    it('deve zerar a nota caso o desconto supere a nota de conteúdo', () => {
      // NC=2, NE=20, TL=50 -> 2 - (120/50) = 2 - 2.4 = -0.4 -> 0
      const npt = notaPeca(2, 20, 50);
      expect(npt).toBe(0);
    });

    it('deve retornar zero se o total de linhas for zero', () => {
      expect(notaPeca(25, 0, 0)).toBe(0);
    });

    it('deve respeitar a nota máxima de 30.00 pontos da peça técnica', () => {
      const npt = notaPeca(35, 0, 50);
      expect(npt).toBe(30);
    });
  });

  describe('Aprovação no concurso (NFPD ≥ 30,00 pontos)', () => {
    it('aprova exatamente em 30,00 pontos', () => {
      expect(isAprovadoDiscursiva(30.0)).toBe(true);
      expect(isAprovadoDiscursiva(30.01)).toBe(true);
    });

    it('reprova com 29,99 pontos', () => {
      expect(isAprovadoDiscursiva(29.99)).toBe(false);
      expect(isAprovadoDiscursiva(28.5)).toBe(false);
    });

    it('soma adequadamente as duas questões e a peça técnica (NFPD = NQ1 + NQ2 + NPT)', () => {
      const nq1 = notaQuestao(12, 6, 20); // 11.1
      const nq2 = notaQuestao(10, 2, 20); // 10 - 0.3 = 9.7
      const npt = notaPeca(24, 10, 50); // 22.8
      const nfpd = notaFinalDiscursiva(nq1, nq2, npt); // 11.1 + 9.7 + 22.8 = 43.6
      expect(nfpd).toBe(43.6);
      expect(isAprovadoDiscursiva(nfpd)).toBe(true);
    });
  });

  describe('obterDetalheCalculoDiscursiva', () => {
    it('gera fórmula explícita correta para questão com fator 3', () => {
      const detalhe = obterDetalheCalculoDiscursiva({
        isPecaTecnica: false,
        notaConteudo: 12,
        errosGramaticais: 6,
        linhasEfetivas: 20,
      });

      expect(detalhe.fatorDesconto).toBe(3);
      expect(detalhe.notaFinal).toBe(11.1);
      expect(detalhe.descontoGramatical).toBe(0.9);
      expect(detalhe.formulaExplicita).toContain('NQ = NC − 3 × (NE ÷ TL)');
    });

    it('gera fórmula explícita correta para peça técnica com fator 6', () => {
      const detalhe = obterDetalheCalculoDiscursiva({
        isPecaTecnica: true,
        notaConteudo: 24,
        errosGramaticais: 10,
        linhasEfetivas: 50,
      });

      expect(detalhe.fatorDesconto).toBe(6);
      expect(detalhe.notaFinal).toBe(22.8);
      expect(detalhe.descontoGramatical).toBe(1.2);
      expect(detalhe.formulaExplicita).toContain('NPT = NC − 6 × (NE ÷ TL)');
    });
  });
});
