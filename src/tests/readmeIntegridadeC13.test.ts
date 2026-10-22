import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import {
  coletarMetricasQuestoes,
  gerarConteudoReadme,
  validarReadmeSincronizado,
} from '../../scripts/gerarMetricasReadme';

describe('C13 — Integridade Estrita do README.md e Métricas Derivadas do Código', () => {
  it('o total de questões lido de src/content/questions deve ser a soma exata dos tipos e dos arquivos', () => {
    const metricas = coletarMetricasQuestoes();

    expect(metricas.totalQuestoes).toBeGreaterThanOrEqual(2000);

    const somaTipos =
      metricas.porTipo.inedita +
      metricas.porTipo.adaptada +
      metricas.porTipo['real-confirmada'] +
      metricas.porTipo['em-conferencia'];

    expect(somaTipos).toBe(metricas.totalQuestoes);

    const somaArquivos = metricas.arquivos.reduce((acc, a) => acc + a.total, 0);
    expect(somaArquivos).toBe(metricas.totalQuestoes);

    // Soma C + E deve bater com o total
    expect(metricas.totalCertos + metricas.totalErrados).toBe(metricas.totalQuestoes);

    // Proporção de Certos deve estar na faixa alvo do edital (46-56%)
    const pctCertoNum = (metricas.totalCertos / metricas.totalQuestoes) * 100;
    expect(pctCertoNum).toBeGreaterThanOrEqual(46);
    expect(pctCertoNum).toBeLessThanOrEqual(56);
  });

  it('README.md não deve conter termos adjetivos ou hiperbólicos banidos pelo Prompt C13', () => {
    const readmePath = path.resolve('README.md');
    const conteudo = fs.readFileSync(readmePath, 'utf-8');

    const termosProibidos = [
      { nome: '100% calibrados', regex: /100%\s*calibrados/i },
      { nome: 'Paridade estrita 50/50', regex: /Paridade\s*estrita\s*50\/50/i },
      { nome: 'Auditado', regex: /\bAuditado\b/i },
      { nome: 'exaustiva / exaustivo', regex: /\bexaustiv[ao]s?\b/i },
      { nome: 'Equilibrado', regex: /\bEquilibrado\b/i },
    ];

    termosProibidos.forEach(({ nome, regex }) => {
      const match = conteudo.match(regex);
      expect(
        match,
        `README.md não deve conter a expressão "${nome}". Substitua por dados numéricos factuais.`
      ).toBeNull();
    });
  });

  it('README.md no disco deve estar perfeitamente sincronizado com o gerador (CI gate)', () => {
    const status = validarReadmeSincronizado();
    expect(status.erros, `Divergências no README.md: ${status.erros.join('; ')}`).toEqual([]);
    expect(status.sincronizado).toBe(true);

    const readmePath = path.resolve('README.md');
    const conteudoAtual = fs.readFileSync(readmePath, 'utf-8').replace(/\r\n/g, '\n').trim();
    const conteudoGerado = gerarConteudoReadme().replace(/\r\n/g, '\n').trim();

    expect(conteudoAtual).toBe(conteudoGerado);
  });
});
