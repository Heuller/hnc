import { describe, it, expect } from 'vitest';
import {
  auditarProveniencia,
  type ErroProveniencia,
  type ResultadoAuditoria,
} from '../../scripts/auditoriaProveniencia.mjs';

describe('C7 — Auditoria Independente de Proveniência e Blindagem contra Falsas Reais', () => {
  const auditResult: ResultadoAuditoria = auditarProveniencia();

  it('auditor independente roda sobre todo o acervo e passa com zero violações', () => {
    if (!auditResult.success) {
      console.error('Erros de proveniência encontrados:', auditResult.errors.slice(0, 10));
    }
    expect(auditResult.errors).toEqual([]);
    expect(auditResult.success).toBe(true);
  });

  it('garante que 100% das questões "real-confirmada" possuem casamento real comprovado (Jaccard >= 0.90)', () => {
    expect(auditResult.stats.realConfirmada).toBe(49);
    expect(auditResult.stats.realConfirmada).toBeGreaterThan(0);
  });

  it('assegura que nenhuma questão da lista sem casamento (114 itens) permaneceu como "real-confirmada"', () => {
    const semCasamentoErrors = auditResult.errors.filter((e: ErroProveniencia) =>
      e.erro.includes('lista de sem casamento')
    );
    expect(semCasamentoErrors).toHaveLength(0);
  });

  it('exige que 100% das questões "real-confirmada" possuam questaoOriginalId numérico estrito', () => {
    const idErrors = auditResult.errors.filter((e: ErroProveniencia) =>
      e.erro.includes('questaoOriginalId numérico')
    );
    expect(idErrors).toHaveLength(0);
  });

  it('garante que nenhum ID interno de acervo local está exposto como questaoOriginalId público', () => {
    const internalErrors = auditResult.errors.filter((e: ErroProveniencia) =>
      e.erro.includes('deve estar em origemAcervoLocal')
    );
    expect(internalErrors).toHaveLength(0);
  });

  it('proíbe expressamente justificativas de questões inéditas contendo alegações de concurso ou gabarito oficial', () => {
    const ineditaErrors = auditResult.errors.filter((e: ErroProveniencia) =>
      e.erro.includes('Item inédito contém termos proibidos')
    );
    expect(ineditaErrors).toHaveLength(0);
  });
});
