import { describe, it, expect } from 'vitest';
import { executarVarreduraKatex } from '../../scripts/varreduraConteudoKatex';

describe('Varredura e Auditoria KaTeX no Conteúdo (U1.4)', () => {
  it('deve compilar 100% das fórmulas matemáticas do acervo sem nenhum erro', () => {
    const resultado = executarVarreduraKatex();

    // A quantidade de fórmulas muda com a revisão; todas as existentes devem compilar.
    expect(resultado.totalFormulas).toBeGreaterThan(0);
    expect(resultado.formulasInvalidas).toBe(0);
    expect(resultado.formulasValidas).toBe(resultado.totalFormulas);
  });

  it('não deve conter nenhum cifrão solto ou desbalanceado no conteúdo', () => {
    const resultado = executarVarreduraKatex();

    expect(resultado.totalCifroesSoltos).toBe(0);
    expect(resultado.dolaresSoltos).toHaveLength(0);
  });

  it('deve mapear todos os alertas estilo GitHub existentes', () => {
    const resultado = executarVarreduraKatex();

    expect(resultado.totalAlertasGithub).toBeGreaterThan(0);
  });
});
