import { describe, it, expect } from 'vitest';
import { simuladoOficialCamara180Q } from '../content/questions/simulado-oficial-camara-180q';
import {
  contarItensJaVistosNosModulos,
  MACROS_P1_BASICOS,
  MACROS_P2_ESPECIFICOS,
  podeSerPromovidoSimuladoOficial
} from '../domain/simuladoOficialEngine';
import { simuladoOficialReserva60Q } from '../content/drafts/simuladoOficialReserva60Q';
import { CebraspeQuestionSchema } from '../domain/schemas/question.schema';

describe('C4 — Simulado Oficial com Rastreabilidade de Origem e Reserva Fresca (60Q)', () => {
  describe('1. Rastreabilidade dos 180 Itens do Simulado Oficial (origemModulo e questaoOrigemId)', () => {
    it('todos os 180 itens devem possuir origemModulo e questaoOrigemId definidos', () => {
      expect(simuladoOficialCamara180Q).toHaveLength(180);

      simuladoOficialCamara180Q.forEach((q, idx) => {
        expect(q.origemModulo, `Item #${idx + 1} (${q.id}) deve ter origemModulo`).toBeDefined();
        expect(q.origemModulo?.length).toBeGreaterThanOrEqual(2);

        expect(q.questaoOrigemId, `Item #${idx + 1} (${q.id}) deve ter questaoOrigemId`).toBeDefined();
        expect(q.questaoOrigemId?.length).toBeGreaterThanOrEqual(3);
      });
    });

    it('todos os 180 itens continuam estritamente válidos pelo schema Zod CebraspeQuestionSchema', () => {
      simuladoOficialCamara180Q.forEach((q) => {
        const parseResult = CebraspeQuestionSchema.safeParse(q);
        expect(parseResult.success, `Falha no item ${q.id}: ${JSON.stringify(parseResult)}`).toBe(true);
      });
    });

    it('os 90 itens de P1 pertencem aos módulos básicos e os 90 de P2 aos específicos', () => {
      const p1 = simuladoOficialCamara180Q.slice(0, 90);
      const p2 = simuladoOficialCamara180Q.slice(90, 180);

      p1.forEach((q) => {
        expect(MACROS_P1_BASICOS.has(q.origemModulo || q.macroModuloId)).toBe(true);
      });

      p2.forEach((q) => {
        expect(MACROS_P2_ESPECIFICOS.has(q.origemModulo || q.macroModuloId)).toBe(true);
      });
    });
  });

  describe('2. Motor de Contagem de Itens Já Vistos nos Módulos (contarItensJaVistosNosModulos)', () => {
    it('retorna 0 itens vistos quando o histórico de tentativas do aluno estiver vazio', () => {
      const resultado = contarItensJaVistosNosModulos(simuladoOficialCamara180Q, [], {});
      expect(resultado.totalVistos).toBe(0);
      expect(resultado.totalItens).toBe(180);
      expect(resultado.porcentagemVistos).toBe(0);
    });

    it('reconhece itens respondidos nos módulos por questaoOrigemId ou id original', () => {
      const mockAttempts = [
        { item_id: 'm13-q-1', contexto: 'jornada' },
        { item_id: 'm13-q-2', contexto: 'teoria' },
        { item_id: 'oficial-180q-003', contexto: 'treino' },
      ];

      const resultado = contarItensJaVistosNosModulos(simuladoOficialCamara180Q, mockAttempts, {});
      expect(resultado.totalVistos).toBe(3);
      expect(resultado.porcentagemVistos).toBe(2);
    });

    it('ignora tentativas cujo contexto seja "simulado" para não auto-inflar itens vistos', () => {
      const mockAttempts = [
        { item_id: 'oficial-180q-001', contexto: 'simulado' },
        { item_id: 'm13-q-1', contexto: 'simulado' },
      ];

      const resultado = contarItensJaVistosNosModulos(simuladoOficialCamara180Q, mockAttempts, {});
      expect(resultado.totalVistos).toBe(0);
    });

    it('reconhece checkpoints respondidos na teoria como itens vistos', () => {
      const mockCheckpoints = {
        'm13-q-1': { resposta: 'C' },
        'm13-q-5': { resposta: 'E' },
      };

      const resultado = contarItensJaVistosNosModulos(simuladoOficialCamara180Q, [], mockCheckpoints);
      expect(resultado.totalVistos).toBe(2);
    });
  });

  describe('3. Banco de Reserva Fresco para Homologação Manual (60Q em src/content/drafts)', () => {
    it('o banco de reserva deve conter exatamente 60 itens', () => {
      expect(simuladoOficialReserva60Q).toHaveLength(60);
    });

    it('deve conter exatamente 30 itens de P1 (Básicos) e 30 itens de P2 (Específicos)', () => {
      const p1 = simuladoOficialReserva60Q.filter((q) => q.bloco === 'P1_BASICOS');
      const p2 = simuladoOficialReserva60Q.filter((q) => q.bloco === 'P2_ESPECIFICOS');

      expect(p1).toHaveLength(30);
      expect(p2).toHaveLength(30);

      // Itens 1 a 30 são P1
      simuladoOficialReserva60Q.slice(0, 30).forEach((q) => {
        expect(q.bloco).toBe('P1_BASICOS');
        expect(MACROS_P1_BASICOS.has(q.macroModuloId)).toBe(true);
      });

      // Itens 31 a 60 são P2
      simuladoOficialReserva60Q.slice(30, 60).forEach((q) => {
        expect(q.bloco).toBe('P2_ESPECIFICOS');
        expect(MACROS_P2_ESPECIFICOS.has(q.macroModuloId)).toBe(true);
      });
    });

    it('todos os 60 itens possuem fonte primária e localizador explícito e verificável', () => {
      simuladoOficialReserva60Q.forEach((q) => {
        expect(q.fontePrimaria, `Item ${q.id} deve ter fontePrimaria`).toBeDefined();
        expect(q.fontePrimaria.length).toBeGreaterThan(10);
        expect(q.fontePrimaria).not.toContain('sem fonte confiável');

        expect(q.localizador, `Item ${q.id} deve ter localizador`).toBeDefined();
        expect(q.localizador.length).toBeGreaterThan(3);

        expect(q.statusHomologacao).toBe('pendente_homologacao');
        expect(q.homologado).toBe(false);
      });
    });

    it('todos os 60 itens possuem extensão Cebraspe de 25 a 60 palavras', () => {
      simuladoOficialReserva60Q.forEach((q) => {
        const words = q.item.trim().split(/\s+/).length;
        expect(
          words,
          `Item ${q.id} possui ${words} palavras (esperado 25 a 60)`
        ).toBeGreaterThanOrEqual(25);
        expect(
          words,
          `Item ${q.id} possui ${words} palavras (esperado 25 a 60)`
        ).toBeLessThanOrEqual(60);
      });
    });

    it('todos os 60 itens possuem gabarito equilibrado (entre 45% e 55% Certos)', () => {
      const certos = simuladoOficialReserva60Q.filter((q) => q.gabarito === 'C').length;
      expect(certos).toBeGreaterThanOrEqual(27);
      expect(certos).toBeLessThanOrEqual(33);
    });

    it('todos os 60 itens são válidos pelo CebraspeQuestionSchema', () => {
      simuladoOficialReserva60Q.forEach((q) => {
        const parseResult = CebraspeQuestionSchema.safeParse(q);
        expect(parseResult.success, `Item ${q.id} inválido: ${JSON.stringify(parseResult)}`).toBe(true);
      });
    });
  });

  describe('4. Homologação da Reserva de 60Q e Critérios de Localizador (Prompt C11)', () => {
    it('itens que citam página ou seção possuem localizadorVerificado = false', () => {
      const itensComPaginaOuSecao = simuladoOficialReserva60Q.filter((q) =>
        /(?:p\.|pág|página|seção|secao|section|capítulo|capitulo|chapter)/i.test(q.localizador)
      );

      expect(itensComPaginaOuSecao.length).toBeGreaterThanOrEqual(40);
      itensComPaginaOuSecao.forEach((q) => {
        expect(
          q.localizadorVerificado,
          `Item ${q.id} cita página/seção mas está como localizadorVerificado = true`
        ).toBe(false);
        expect(q.statusHomologacao).toBe('pendente_homologacao');
        expect(q.homologado).toBe(false);
      });
    });

    it('itens com número de artigo de lei/regimento possuem localizadorVerificado = true', () => {
      const itensArtigo = simuladoOficialReserva60Q.filter((q) => q.localizadorVerificado === true);
      expect(itensArtigo.length).toBe(14);
      itensArtigo.forEach((q) => {
        expect(q.localizador).toMatch(/art\.|artigo/i);
      });
    });

    it('itens sem localizador verificável têm statusHomologacao = "pendente_homologacao" e não entram no simulado', () => {
      const itensNaoVerificados = simuladoOficialReserva60Q.filter((q) => !q.localizadorVerificado);
      expect(itensNaoVerificados.length).toBe(46);
      itensNaoVerificados.forEach((q) => {
        expect(q.statusHomologacao).toBe('pendente_homologacao');
        expect(q.homologado).toBe(false);
        expect(podeSerPromovidoSimuladoOficial(q)).toBe(false);
      });
    });

    it('nenhum item sem localizadorVerificado = true pode ser promovido ao simulado oficial', () => {
      simuladoOficialReserva60Q.forEach((q) => {
        if (!q.localizadorVerificado) {
          expect(podeSerPromovidoSimuladoOficial(q)).toBe(false);
        }
      });

      // Verifica que nenhum item no simulado oficial de 180q é um item de reserva não homologado
      const idsReservaNaoVerificados = new Set(
        simuladoOficialReserva60Q.filter((q) => !q.localizadorVerificado).map((q) => q.id)
      );
      simuladoOficialCamara180Q.forEach((q) => {
        expect(idsReservaNaoVerificados.has(q.id)).toBe(false);
        if (q.questaoOrigemId) {
          expect(idsReservaNaoVerificados.has(q.questaoOrigemId)).toBe(false);
        }
      });
    });
  });

});
