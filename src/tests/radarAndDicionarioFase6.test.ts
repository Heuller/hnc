import { describe, it, expect } from 'vitest';
import { dicionarioService } from '../domain/dicionario/dicionarioService';
import { COURSE_REGISTRY } from '../content/registry';

describe('T6.5 — Validação do Radar Cebraspe e Resolução Bidirecional do Glossário', () => {
  describe('Resolução Bidirecional de Submódulo de Origem no Glossário', () => {
    it('deve resolver submódulo exato para termos que possuem modulo_ref com prefixo sub- (98 verbetes Fase 5)', () => {
      const termoGov = dicionarioService.buscarTermoLocal('Governança de Dados');
      expect(termoGov, 'Termo Governança de Dados deve existir no glossário').toBeTruthy();
      if (termoGov) {
        const origem = dicionarioService.resolverSubmoduloOrigem(termoGov);
        expect(origem, 'Deve resolver a origem do termo').not.toBeNull();
        expect(origem?.moduloCodigo).toBe('M1');
        expect(origem?.subNumero).toBe('1.6');
        expect(origem?.subTitulo).toContain('Governança de Dados');
      }
    });

    it('deve resolver submódulo de origem para protocolos e metadados tecnológicos (OAI-PMH, Dublin Core, PREMIS)', () => {
      const termoOai = dicionarioService.buscarTermoLocal('OAI-PMH');
      expect(termoOai, 'Termo OAI-PMH deve existir').toBeTruthy();
      if (termoOai) {
        const origem = dicionarioService.resolverSubmoduloOrigem(termoOai);
        expect(origem).not.toBeNull();
        expect(origem?.moduloCodigo).toBe('M6');
        expect(origem?.subNumero).toBe('6.2');
        expect(origem?.subTitulo).toContain('OAI-PMH');
      }
    });

    it('deve resolver termos legados referenciados por macro-módulo (M1 a M14)', () => {
      const termoCatalogacao = dicionarioService.buscarTermoLocal('Catalogação Descritiva');
      if (termoCatalogacao) {
        const origem = dicionarioService.resolverSubmoduloOrigem(termoCatalogacao);
        expect(origem).not.toBeNull();
        expect(origem?.moduloCodigo).toBe('M2');
      }
    });

    it('deve garantir que termos ausentes respeitam a Regra D.3 (sem IA em runtime)', async () => {
      const termoInexistente = await dicionarioService.buscarOuGerarDefinicao('termo_completamente_inexistente_xyz_123');
      expect(termoInexistente.ausente).toBe(true);
      expect(termoInexistente.geradoPorIA).toBe(false);
      expect(dicionarioService.resolverSubmoduloOrigem(termoInexistente)).toBeNull();
    });
  });

  describe('Radar Cebraspe e Mapeamento dos 5 Blocos Oficiais do Edital 2026', () => {
    const BLOCOS_ESPERADOS = [
      { id: 'A', modulos: ['M1', 'M2', 'M3'] },
      { id: 'B', modulos: ['M4', 'M5'] },
      { id: 'C', modulos: ['M6', 'M7', 'M8'] },
      { id: 'D', modulos: ['M9', 'M10'] },
      { id: 'E', modulos: ['M11', 'M12', 'M13'] },
      { id: 'BAS', modulos: ['M14'] },
    ];

    it('todos os 14 macro-módulos devem estar distribuídos nos blocos oficiais do Edital', () => {
      const todosCodigos = COURSE_REGISTRY.map((m) => m.codigo);
      const modulosAlocados = BLOCOS_ESPERADOS.flatMap((b) => b.modulos);

      expect(modulosAlocados.sort()).toEqual(todosCodigos.sort());
    });

    it('cada macro-módulo no COURSE_REGISTRY deve ter blocoEdital correspondente ao seu bloco oficial', () => {
      const m1 = COURSE_REGISTRY.find((m) => m.codigo === 'M1')!;
      expect(m1.blocoEdital).toContain('Bloco A');

      const m4 = COURSE_REGISTRY.find((m) => m.codigo === 'M4')!;
      expect(m4.blocoEdital).toContain('Bloco B');

      const m6 = COURSE_REGISTRY.find((m) => m.codigo === 'M6')!;
      expect(m6.blocoEdital).toMatch(/Bloco.*C/);

      const m9 = COURSE_REGISTRY.find((m) => m.codigo === 'M9')!;
      expect(m9.blocoEdital).toContain('Bloco D');

      const m11 = COURSE_REGISTRY.find((m) => m.codigo === 'M11')!;
      expect(m11.blocoEdital).toContain('Conhecimentos Básicos');

      const m14 = COURSE_REGISTRY.find((m) => m.codigo === 'M14')!;
      expect(m14.blocoEdital).toContain('Conhecimentos Básicos');
    });

    it('o acervo total de submódulos do curso deve totalizar exatamente 74 submódulos', () => {
      const totalSubs = COURSE_REGISTRY.reduce((acc, m) => acc + m.modulosFilhos.length, 0);
      expect(totalSubs).toBe(74);
    });
  });
});
