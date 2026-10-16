import { describe, it, expect } from 'vitest';
import { executarAuditoriaLegibilidade } from '../../scripts/auditoriaLegibilidadeESecoes';

describe('U3.7 & U3.8: Auditoria de Seções Curtas e Legibilidade', () => {
  const resultado = executarAuditoriaLegibilidade();

  it('U3.7: nenhuma seção teórica deve exceder 900 palavras', () => {
    expect(resultado.secoesExcedem900).toHaveLength(0);
  });

  it('U3.8: média global de palavras por frase deve ser menor ou igual a 30', () => {
    expect(resultado.mediaGeralPalavrasPorFrase).toBeLessThanOrEqual(30);
  });

  it('U3.7: deve analisar todas as seções teóricas do acervo de submodulos', () => {
    expect(resultado.totalSecoes).toBeGreaterThanOrEqual(450);
    expect(resultado.totalSubmodulos).toBeGreaterThanOrEqual(70);
  });
});
