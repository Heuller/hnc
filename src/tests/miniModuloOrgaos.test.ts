import { describe, it, expect } from 'vitest';
import { submodulo25 } from '../content/modules/m2-5-orgaos-gov/sub-2-5';
import { moduloM25OrgaosGov } from '../content/modules/m2-5-orgaos-gov';
import { simuladoOrgaosGov30Q } from '../content/questions/mini-modulo-orgaos-30q';
import {
  ALL_COURSE_MODULES,
  MINI_MODULOS_REGISTRY,
} from '../content/registry';
import {
  getSimuladoById,
  detectSimuladoIdFromQuestionId,
} from '../content/simuladosRegistry';
import { CebraspeQuestionSchema } from '../domain/schemas/question.schema';
import { ModuloFilhoSchema, MacroModuloSchema } from '../domain/schemas/modulo.schema';

describe('Auditoria do Mini-Módulo Especial 2.5: Órgãos Públicos, Catalogação Governamental & Bib. Câmara', () => {
  describe('Integridade Pedagógica e Teórica do Submódulo 2.5', () => {
    it('deve validar o submódulo 2.5 contra o schema estrito Zod', () => {
      const result = ModuloFilhoSchema.safeParse(submodulo25);
      if (!result.success) {
        console.error('Falha na validação do Submódulo 2.5:', result.error.format());
      }
      expect(result.success).toBe(true);
    });

    it('deve conter teoria densa markdown substancial (> 5.000 caracteres)', () => {
      expect(submodulo25.teoriaDensaMarkdown.trim().length).toBeGreaterThan(5000);
      expect(submodulo25.teoriaDensaMarkdown).toContain('Supremo Tribunal Federal');
      expect(submodulo25.teoriaDensaMarkdown).toContain('Tribunal de Contas da União');
      expect(submodulo25.teoriaDensaMarkdown).toContain('Ministério Público');
      expect(submodulo25.teoriaDensaMarkdown).toContain('AACR2r');
      expect(submodulo25.teoriaDensaMarkdown).toContain('MARC 21');
      expect(submodulo25.teoriaDensaMarkdown).toContain('Biblioteca Pedro Aleixo');
      expect(submodulo25.teoriaDensaMarkdown).toContain('BDCam');
      expect(submodulo25.teoriaDensaMarkdown).toContain('DSpace');
      expect(submodulo25.teoriaDensaMarkdown).toContain('RVBI');
    });

    it('deve conter quadro comparativo com cabeçalhos e linhas consistentes', () => {
      expect(submodulo25.quadroComparativo).toBeDefined();
      expect(submodulo25.quadroComparativo!.colunas.length).toBeGreaterThanOrEqual(3);
      expect(submodulo25.quadroComparativo!.linhas.length).toBeGreaterThanOrEqual(4);
    });

    it('deve conter mnemônicos nos 3 formatos (timeline, autores e pegadinhas)', () => {
      expect(submodulo25.mnemonicos.timeline.length).toBeGreaterThanOrEqual(3);
      expect(submodulo25.mnemonicos.autores.length).toBeGreaterThanOrEqual(2);
      expect(submodulo25.mnemonicos.pegadinhas.length).toBeGreaterThanOrEqual(3);
    });

    it('deve conter exatamente 3 checkpoints de recuperação ativa válidos', () => {
      expect(submodulo25.checkpoints).toHaveLength(3);
      submodulo25.checkpoints.forEach((cp) => {
        expect(cp.pergunta.trim().length).toBeGreaterThan(10);
        expect(cp.item.trim().length).toBeGreaterThan(10);
        expect(cp.justificativa.trim().length).toBeGreaterThan(20);
        expect(['C', 'E']).toContain(cp.gabarito);
      });
    });

    it('deve possuir alertas Cebraspe críticos para a prova da Câmara', () => {
      expect(submodulo25.alertasCebraspe.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Integridade do Macro-Módulo Especial M2.5', () => {
    it('deve validar moduloM25OrgaosGov contra o schema estrito Zod', () => {
      const result = MacroModuloSchema.safeParse(moduloM25OrgaosGov);
      expect(result.success).toBe(true);
    });

    it('deve estar registrado em MINI_MODULOS_REGISTRY', () => {
      expect(MINI_MODULOS_REGISTRY).toContain(moduloM25OrgaosGov);
    });

    it('deve estar posicionado entre M2 e M3 em ALL_COURSE_MODULES', () => {
      const idxM2 = ALL_COURSE_MODULES.findIndex((m) => m.id === 'm2');
      const idxM25 = ALL_COURSE_MODULES.findIndex((m) => m.id === 'm2-5');
      const idxM3 = ALL_COURSE_MODULES.findIndex((m) => m.id === 'm3');

      expect(idxM2).toBeGreaterThanOrEqual(0);
      expect(idxM25).toBe(idxM2 + 1);
      expect(idxM3).toBe(idxM25 + 1);
    });
  });

  describe('Auditoria do Simulado Especial de 30 Questões C/E', () => {
    it('deve conter EXATAMENTE 30 questões no caderno', () => {
      expect(simuladoOrgaosGov30Q).toHaveLength(30);
    });

    it('deve possuir simetria estrita Cebraspe: EXATAMENTE 15 Certas (C) e 15 Erradas (E)', () => {
      const certos = simuladoOrgaosGov30Q.filter((q) => q.gabarito === 'C');
      const errados = simuladoOrgaosGov30Q.filter((q) => q.gabarito === 'E');

      expect(certos).toHaveLength(15);
      expect(errados).toHaveLength(15);
    });

    it('deve possuir IDs únicos sequenciais de 1 a 30', () => {
      const ids = simuladoOrgaosGov30Q.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(30);

      simuladoOrgaosGov30Q.forEach((q, idx) => {
        expect(q.numero).toBe(idx + 1);
        expect(q.id).toBe(`orgaos-q-${String(idx + 1).padStart(3, '0')}`);
      });
    });

    it('deve validar todas as 30 questões contra o schema estrito CebraspeQuestionSchema', () => {
      simuladoOrgaosGov30Q.forEach((q) => {
        const result = CebraspeQuestionSchema.safeParse(q);
        expect(result.success).toBe(true);
      });
    });

    it('deve cobrir os três eixos temáticos com profundidade', () => {
      // Eixo 1: Órgãos e Funções Constitucionais (itens 1 a 10)
      const bloco1 = simuladoOrgaosGov30Q.slice(0, 10);
      expect(bloco1.filter((q) => q.gabarito === 'C')).toHaveLength(5);
      expect(bloco1.filter((q) => q.gabarito === 'E')).toHaveLength(5);

      // Eixo 2: Catalogação Governamental e MARC 21 (itens 11 a 20)
      const bloco2 = simuladoOrgaosGov30Q.slice(10, 20);
      expect(bloco2.filter((q) => q.gabarito === 'C')).toHaveLength(5);
      expect(bloco2.filter((q) => q.gabarito === 'E')).toHaveLength(5);

      // Eixo 3: Biblioteca da Câmara dos Deputados (itens 21 a 30)
      const bloco3 = simuladoOrgaosGov30Q.slice(20, 30);
      expect(bloco3.filter((q) => q.gabarito === 'C')).toHaveLength(5);
      expect(bloco3.filter((q) => q.gabarito === 'E')).toHaveLength(5);
    });

    it('deve estar registrado no catálogo com lookup bidirecional funcional', () => {
      const manifesto = getSimuladoById('mini-modulo-orgaos');
      expect(manifesto).toBeDefined();
      expect(manifesto.questoes).toHaveLength(30);
      expect(manifesto.numero).toBe(2.5);

      expect(detectSimuladoIdFromQuestionId('orgaos-q-001')).toBe('mini-modulo-orgaos');
      expect(detectSimuladoIdFromQuestionId('orgaos-q-030')).toBe('mini-modulo-orgaos');
    });
  });
});
