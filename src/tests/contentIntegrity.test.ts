import { describe, it, expect } from 'vitest';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';
import { moduloM1Fundamentos } from '../content/modules/m1-fundamentos';
import { CONCURSO_CONFIG } from '../config/concurso.config';
import { CebraspeQuestionSchema } from '../domain/schemas/question.schema';
import { MacroModuloSchema } from '../domain/schemas/modulo.schema';
import { ConcursoConfigSchema } from '../domain/schemas/concurso.schema';

describe('Testes de Integridade de Conteúdo e Metodologia Cebraspe (Seção 5)', () => {
  describe('Simulado de 100 Questões C/E de Fundamentos', () => {
    it('deve conter EXATAMENTE 100 questões no total', () => {
      expect(simuladoFundamentos100Q).toHaveLength(100);
    });

    it('deve ter simetria rigorosa Cebraspe: EXATAMENTE 50 Certas (C) e 50 Erradas (E)', () => {
      const certos = simuladoFundamentos100Q.filter((q) => q.gabarito === 'C');
      const errados = simuladoFundamentos100Q.filter((q) => q.gabarito === 'E');

      expect(certos).toHaveLength(50);
      expect(errados).toHaveLength(50);
    });

    it('deve ter distribuição equitativa entre os módulos-filhos: EXATAMENTE 25 por submódulo', () => {
      const sub11 = simuladoFundamentos100Q.filter((q) => q.submoduloId === '1.1');
      const sub12 = simuladoFundamentos100Q.filter((q) => q.submoduloId === '1.2');
      const sub13 = simuladoFundamentos100Q.filter((q) => q.submoduloId === '1.3');
      const sub14 = simuladoFundamentos100Q.filter((q) => q.submoduloId === '1.4');

      expect(sub11).toHaveLength(25);
      expect(sub12).toHaveLength(25);
      expect(sub13).toHaveLength(25);
      expect(sub14).toHaveLength(25);
    });

    it('deve possuir IDs 100% únicos e números sequenciais de 1 a 100', () => {
      const ids = simuladoFundamentos100Q.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(100);

      simuladoFundamentos100Q.forEach((q, idx) => {
        expect(q.numero).toBe(idx + 1);
      });
    });

    it('deve validar todas as 100 questões contra o schema estrito Zod', () => {
      simuladoFundamentos100Q.forEach((q, idx) => {
        const result = CebraspeQuestionSchema.safeParse(q);
        if (!result.success) {
          console.error(`Falha no item ${idx + 1} (${q.id}):`, result.error.format());
        }
        expect(result.success).toBe(true);
      });
    });

    it('deve ter todos os campos obrigatórios preenchidos sem valores nulos ou vazios', () => {
      simuladoFundamentos100Q.forEach((q) => {
        expect(q.item.trim().length).toBeGreaterThan(10);
        expect(q.justificativa.trim().length).toBeGreaterThan(10);
        expect(q.dificuldade).toMatch(/^(facil|media|dificil)$/);
        expect(q.fonteOriginal.tipo).toMatch(/^(cebraspe-real|inedita)$/);
        expect(q.fonteOriginal.descricao.trim().length).toBeGreaterThan(3);
        expect(typeof q.fonteOriginal.verificado).toBe('boolean');
      });
    });
  });

  describe('Estrutura do Macro-Módulo 1: Fundamentos', () => {
    it('deve validar o Macro-Módulo 1 contra o schema Zod', () => {
      const result = MacroModuloSchema.safeParse(moduloM1Fundamentos);
      if (!result.success) {
        console.error('Falha no MacroModulo M1:', result.error.format());
      }
      expect(result.success).toBe(true);
    });

    it('deve possuir exatamente 4 submódulos previstos no edital', () => {
      expect(moduloM1Fundamentos.modulosFilhos).toHaveLength(4);
      expect(moduloM1Fundamentos.modulosFilhos.map((s) => s.numero)).toEqual(['1.1', '1.2', '1.3', '1.4']);
    });

    it('cada submódulo deve conter entre 2 e 3 micro-checkpoints de recuperação ativa', () => {
      moduloM1Fundamentos.modulosFilhos.forEach((sub) => {
        expect(sub.checkpoints.length).toBeGreaterThanOrEqual(2);
        expect(sub.checkpoints.length).toBeLessThanOrEqual(3);
        sub.checkpoints.forEach((cp) => {
          expect(cp.item.trim().length).toBeGreaterThan(10);
          expect(cp.gabarito).toMatch(/^(C|E)$/);
          expect(cp.justificativa.trim().length).toBeGreaterThan(10);
        });
      });
    });

    it('cada submódulo deve conter os 3 formatos estruturados de mnemônicos', () => {
      moduloM1Fundamentos.modulosFilhos.forEach((sub) => {
        expect(sub.mnemonicos.timeline.length).toBeGreaterThanOrEqual(2);
        expect(sub.mnemonicos.autores.length).toBeGreaterThanOrEqual(2);
        expect(sub.mnemonicos.pegadinhas.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('cada submódulo deve possuir quadro comparativo estruturado', () => {
      moduloM1Fundamentos.modulosFilhos.forEach((sub) => {
        expect(sub.quadroComparativo).toBeDefined();
        expect(sub.quadroComparativo!.colunas.length).toBeGreaterThanOrEqual(3);
        expect(sub.quadroComparativo!.linhas.length).toBeGreaterThanOrEqual(3);
      });
    });
  });

  describe('Configuração do Concurso (concurso.config.ts)', () => {
    it('deve validar a configuração do concurso contra o schema Zod', () => {
      const result = ConcursoConfigSchema.safeParse(CONCURSO_CONFIG);
      expect(result.success).toBe(true);
    });

    it('deve ter os parâmetros oficiais da Câmara e Cebraspe', () => {
      expect(CONCURSO_CONFIG.banca.nome).toBe('CEBRASPE');
      expect(CONCURSO_CONFIG.instituicao.nome).toBe('Câmara dos Deputados');
      expect(CONCURSO_CONFIG.cargo.atribuicao).toBe('Bibliotecário');
      expect(CONCURSO_CONFIG.banca.fatorCorrecao.acertoPontos).toBe(1);
      expect(CONCURSO_CONFIG.banca.fatorCorrecao.erroPontos).toBe(-1);
      expect(CONCURSO_CONFIG.banca.fatorCorrecao.brancoPontos).toBe(0);
    });
  });
});
