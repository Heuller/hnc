import { describe, it, expect } from 'vitest';
import { REVIEW_CONFIG } from '../config/reviewConfig';
import fs from 'node:fs';

describe('C5 — Limpeza de Configuração Legada e Alinhamento Editalício', () => {
  describe('1. Distribuição Oficial de Questões da Reta Final (Edital nº 1/2026)', () => {
    it('deve ter exatamente 90 Conhecimentos Básicos (P1) e 90 Conhecimentos Específicos (P2)', () => {
      const dist = REVIEW_CONFIG.retaFinal.distribuicaoQuestoes;
      expect(dist).toBeDefined();
      expect(dist.conhecimentosBasicos).toBe(90);
      expect(dist.conhecimentosEspecificos).toBe(90);
      expect(dist.conhecimentosBasicos + dist.conhecimentosEspecificos).toBe(180);

      // Não deve existir a chave legada 'conhecimentosEspecializados'
      expect((dist as any).conhecimentosEspecializados).toBeUndefined();
    });

    it('o arquivo reviewConfig.ts não contém a string "50/70/60" nem "45 min de 3 h/dia"', () => {
      const content = fs.readFileSync('src/config/reviewConfig.ts', 'utf8');
      expect(content).not.toContain('50/70/60');
      expect(content).not.toContain('45 min de 3 h/dia');
      expect(content).toContain('60 min de 4 a 5 h/dia');
    });

    it('o orçamento de tempo de revisão e teto diário estão coerentes com a rotina de 4 a 5h/dia', () => {
      expect(REVIEW_CONFIG.orcamentoTempoRevisaoPct).toBe(0.25);
      expect(REVIEW_CONFIG.dailyReviewCap).toBe(30);
      expect(REVIEW_CONFIG.scheduleDays).toBe('weekdays-only');
    });
  });

  describe('2. Verificação de Ausência de Menções Legadas no Código Fonte', () => {
    it('nenhum arquivo em src/ possui a partição legada "50/70/60"', () => {
      const reviewConfig = fs.readFileSync('src/config/reviewConfig.ts', 'utf8');
      const projections = fs.readFileSync('src/domain/projectionsEngine.ts', 'utf8');
      const scheduler = fs.readFileSync('src/domain/scheduler/unifiedScheduler.ts', 'utf8');

      expect(reviewConfig).not.toContain('50/70/60');
      expect(projections).not.toContain('50/70/60');
      expect(scheduler).not.toContain('50/70/60');
    });
  });
});
