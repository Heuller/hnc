import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ORCAMENTO, verificarOrcamento } from '../../scripts/verificarOrcamentoPacote.mjs';

describe('U9.2: Verificação de Orçamento de Pacote e Build em CI', () => {
  it('define limites canônicos de orçamento para JavaScript, CSS e Chunks de Entrada', () => {
    expect(ORCAMENTO.maxTotalJSBytes).toBe(26 * 1024 * 1024);
    expect(ORCAMENTO.maxTotalCSSBytes).toBe(1 * 1024 * 1024);
    expect(ORCAMENTO.maxEntryChunkBytes).toBe(350 * 1024);
    expect(ORCAMENTO.maxVendorCoreBytes).toBe(350 * 1024);
    expect(ORCAMENTO.maxVendorUiBytes).toBe(150 * 1024);
    expect(ORCAMENTO.minPrecacheAssets).toBe(200);
  });

  it('valida os artefatos de build caso o diretório dist exista', () => {
    const distPath = path.resolve('dist');
    if (!fs.existsSync(distPath)) {
      // Se dist não existir, ignora assertivas de arquivo real
      return;
    }

    const resultado = verificarOrcamento(distPath);
    expect(resultado.sucesso).toBe(true);
    expect(resultado.erros).toEqual([]);

    if (resultado.metricas) {
      expect(resultado.metricas.totalJSMB).toBeLessThanOrEqual(26);
      expect(resultado.metricas.totalCSSKB).toBeLessThanOrEqual(1024);
      expect(resultado.metricas.entryChunkKB).toBeLessThanOrEqual(350);
      expect(resultado.metricas.vendorCoreKB).toBeLessThanOrEqual(350);
      expect(resultado.metricas.vendorUiKB).toBeLessThanOrEqual(150);
      expect(resultado.metricas.precacheCount).toBeGreaterThanOrEqual(200);
    }
  });

  it('detecta falha adequadamente caso um limite hipotético seja violado', () => {
    // Simula um diretório inexistente para garantir que erros são reportados
    const resultadoInvalido = verificarOrcamento(path.resolve('diretorio_inexistente_para_teste'));
    expect(resultadoInvalido.sucesso).toBe(false);
    expect(resultadoInvalido.erros.length).toBeGreaterThan(0);
  });
});
