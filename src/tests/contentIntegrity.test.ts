import { describe, it, expect } from 'vitest';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';
import { COURSE_REGISTRY } from '../content/registry';
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

  describe('Estrutura e Integridade Curricular dos Macro-Módulos (COURSE_REGISTRY)', () => {
    it('deve conter 11 Macro-Módulos registrados (M1-M10 Específicos + M11 Raciocínio Lógico)', () => {
      expect(COURSE_REGISTRY).toHaveLength(11);
      const expectedIds = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11'];
      expect(COURSE_REGISTRY.map((m) => m.id)).toEqual(expectedIds);
    });

    it('deve validar todos os 11 Macro-Módulos contra o schema estrito Zod', () => {
      COURSE_REGISTRY.forEach((modulo) => {
        const result = MacroModuloSchema.safeParse(modulo);
        if (!result.success) {
          console.error(`Falha no Macro-Módulo ${modulo.id} (${modulo.titulo}):`, result.error.format());
        }
        expect(result.success).toBe(true);
      });
    });

    it('deve totalizar exatamente 44 submódulos (4 por macro-módulo)', () => {
      const totalSubmodulos = COURSE_REGISTRY.reduce((acc, m) => acc + m.modulosFilhos.length, 0);
      expect(totalSubmodulos).toBe(44);

      COURSE_REGISTRY.forEach((m) => {
        expect(m.modulosFilhos).toHaveLength(4);
      });
    });

    it('todos os 44 submódulos devem possuir IDs únicos, títulos substantivos e autores-chave', () => {
      const allSubIds = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos.map((s) => s.id));
      const uniqueSubIds = new Set(allSubIds);
      expect(uniqueSubIds.size).toBe(44);

      COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).forEach((sub) => {
        expect(sub.id.trim().length).toBeGreaterThan(2);
        expect(sub.titulo.trim().length).toBeGreaterThan(5);
        expect(sub.autoresChave.length).toBeGreaterThanOrEqual(1);
        expect(sub.alertasCebraspe.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('todos os 40 submódulos devem conter micro-checkpoints de recuperação ativa válidos (>= 3)', () => {
      COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).forEach((sub) => {
        expect(sub.checkpoints.length).toBeGreaterThanOrEqual(3);
        sub.checkpoints.forEach((cp) => {
          expect(cp.id.trim().length).toBeGreaterThan(2);
          expect(cp.pergunta.trim().length).toBeGreaterThan(10);
          expect(cp.item.trim().length).toBeGreaterThan(10);
          expect(cp.gabarito).toMatch(/^(C|E)$/);
          expect(cp.justificativa.trim().length).toBeGreaterThan(15);
        });
      });
    });

    it('todos os 40 submódulos devem conter os 3 formatos estruturados de mnemônicos (timeline, autores, pegadinhas)', () => {
      COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).forEach((sub) => {
        if (sub.mnemonicos.timeline.length < 2) {
          console.warn(`[Submódulo com timeline < 2]: ${sub.id} - ${sub.titulo}`);
        }
        if (sub.mnemonicos.autores.length < 2) {
          console.warn(`[Submódulo com autores < 2]: ${sub.id} - ${sub.titulo}`);
        }
        if (sub.mnemonicos.pegadinhas.length < 2) {
          console.warn(`[Submódulo com pegadinhas < 2]: ${sub.id} - ${sub.titulo}`);
        }
        expect(sub.mnemonicos.timeline.length).toBeGreaterThanOrEqual(2);
        expect(sub.mnemonicos.autores.length).toBeGreaterThanOrEqual(2);
        expect(sub.mnemonicos.pegadinhas.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('todos os 40 submódulos devem possuir quadro comparativo estruturado com colunas e linhas', () => {
      COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).forEach((sub) => {
        expect(sub.quadroComparativo).toBeDefined();
        expect(sub.quadroComparativo!.colunas.length).toBeGreaterThanOrEqual(3);
        expect(sub.quadroComparativo!.linhas.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('todos os 40 submódulos devem possuir teoria densa em markdown substantiva (> 1000 caracteres)', () => {
      COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).forEach((sub) => {
        expect(sub.teoriaDensaMarkdown.trim().length).toBeGreaterThan(1000);
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
