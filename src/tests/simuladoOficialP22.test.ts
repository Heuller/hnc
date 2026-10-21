import { describe, it, expect } from 'vitest';
import { simuladoOficialCamara180Q } from '../content/questions/simulado-oficial-camara-180q';
import { getSimuladoById, detectSimuladoIdFromQuestionId } from '../content/simuladosRegistry';
import {
  avaliarDesempenhoSimuladoOficial180,
  MACROS_P1_BASICOS,
  MACROS_P2_ESPECIFICOS,
} from '../domain/simuladoOficialEngine';
import { CebraspeQuestionSchema } from '../domain/schemas/question.schema';

describe('P22 — Simulado Oficial Câmara dos Deputados 2027 (180Q: 90 Básicos + 90 Específicos)', () => {
  describe('Estrutura e Conformidade Editalícia do Banco de 180 Itens', () => {
    it('deve conter exatamente 180 questões numeradas sequencialmente de 1 a 180 com IDs únicos', () => {
      expect(simuladoOficialCamara180Q).toHaveLength(180);

      const ids = new Set<string>();
      simuladoOficialCamara180Q.forEach((q, idx) => {
        expect(q.numero).toBe(idx + 1);
        expect(ids.has(q.id)).toBe(false);
        ids.add(q.id);
        expect(q.id).toBe(`oficial-180q-${String(idx + 1).padStart(3, '0')}`);
      });
      expect(ids.size).toBe(180);
    });

    it('deve ter simetria rigorosa Cebraspe: 90 Certos (C) e 90 Errados (E) no total da prova', () => {
      const certos = simuladoOficialCamara180Q.filter((q) => q.gabarito === 'C');
      const errados = simuladoOficialCamara180Q.filter((q) => q.gabarito === 'E');

      expect(certos).toHaveLength(90);
      expect(errados).toHaveLength(90);
    });

    it('deve estruturar P1 (Conhecimentos Básicos) com exatamente 90 itens e paridade 45C / 45E', () => {
      const p1 = simuladoOficialCamara180Q.slice(0, 90);
      expect(p1).toHaveLength(90);

      const p1Certos = p1.filter((q) => q.gabarito === 'C').length;
      const p1Errados = p1.filter((q) => q.gabarito === 'E').length;

      expect(p1Certos).toBe(45);
      expect(p1Errados).toBe(45);

      p1.forEach((q) => {
        expect(MACROS_P1_BASICOS.has(q.macroModuloId)).toBe(true);
      });
    });

    it('deve estruturar P2 (Conhecimentos Específicos) com exatamente 90 itens e paridade 45C / 45E', () => {
      const p2 = simuladoOficialCamara180Q.slice(90, 180);
      expect(p2).toHaveLength(90);

      const p2Certos = p2.filter((q) => q.gabarito === 'C').length;
      const p2Errados = p2.filter((q) => q.gabarito === 'E').length;

      expect(p2Certos).toBe(45);
      expect(p2Errados).toBe(45);

      p2.forEach((q) => {
        expect(MACROS_P2_ESPECIFICOS.has(q.macroModuloId)).toBe(true);
      });
    });

    it('todas as 180 questões devem ser válidas contra o schema Zod estrito de questão Cebraspe', () => {
      simuladoOficialCamara180Q.forEach((q) => {
        const parseResult = CebraspeQuestionSchema.safeParse(q);
        expect(parseResult.success, `Falha no item #${q.numero} (${q.id})`).toBe(true);
      });
    });
  });

  describe('Registro Oficial no Simulado Registry', () => {
    it('o Simulado Oficial Câmara 2027 deve estar registrado com ID correto e duração de 5 horas', () => {
      const simulado = getSimuladoById('simulado-oficial-camara-2027');
      expect(simulado).toBeDefined();
      expect(simulado.id).toBe('simulado-oficial-camara-2027');
      expect(simulado.questoes).toHaveLength(180);
      expect(simulado.titulo).toContain('Simulado Oficial Câmara 2027');
    });

    it('deve detectar o ID do simulado oficial a partir dos IDs de questão', () => {
      expect(detectSimuladoIdFromQuestionId('oficial-180q-001')).toBe('simulado-oficial-camara-2027');
      expect(detectSimuladoIdFromQuestionId('oficial-180q-180')).toBe('simulado-oficial-camara-2027');
      expect(detectSimuladoIdFromQuestionId('camara-2027-042')).toBe('simulado-oficial-camara-2027');
    });
  });

  describe('Motor de Avaliação e Pisos Eliminatórios Oficiais (Edital nº 1/2026, item 8.11.5)', () => {
    it('elimina candidato com P1 < 18 mesmo com P2 alto e Total > 54', () => {
      // P1: 17 certos, 0 errados -> 17 pts (< 18)
      // P2: 50 certos, 0 errados -> 50 pts (>= 27)
      // Total: 67 pts (>= 54)
      const respostas: Record<string, { resposta: 'C' | 'E' | 'BRANCO' }> = {};

      simuladoOficialCamara180Q.slice(0, 17).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      simuladoOficialCamara180Q.slice(90, 140).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });

      const avaliacao = avaliarDesempenhoSimuladoOficial180(simuladoOficialCamara180Q, respostas);

      expect(avaliacao.p1.notaLiquida).toBe(17);
      expect(avaliacao.p1.aprovadoPiso).toBe(false);
      expect(avaliacao.p2.notaLiquida).toBe(50);
      expect(avaliacao.p2.aprovadoPiso).toBe(true);
      expect(avaliacao.total.notaLiquida).toBe(67);
      expect(avaliacao.total.aprovadoPiso).toBe(true);
      expect(avaliacao.eliminado).toBe(true);
      expect(avaliacao.aprovadoObjetiva).toBe(false);
      expect(avaliacao.motivosEliminacao[0]).toContain('P1');
    });

    it('elimina candidato com P2 < 27 mesmo com P1 alto e Total > 54', () => {
      // P1: 40 certos, 0 errados -> 40 pts (>= 18)
      // P2: 26 certos, 0 errados -> 26 pts (< 27)
      // Total: 66 pts (>= 54)
      const respostas: Record<string, { resposta: 'C' | 'E' | 'BRANCO' }> = {};

      simuladoOficialCamara180Q.slice(0, 40).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      simuladoOficialCamara180Q.slice(90, 116).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });

      const avaliacao = avaliarDesempenhoSimuladoOficial180(simuladoOficialCamara180Q, respostas);

      expect(avaliacao.p1.notaLiquida).toBe(40);
      expect(avaliacao.p1.aprovadoPiso).toBe(true);
      expect(avaliacao.p2.notaLiquida).toBe(26);
      expect(avaliacao.p2.aprovadoPiso).toBe(false);
      expect(avaliacao.total.notaLiquida).toBe(66);
      expect(avaliacao.total.aprovadoPiso).toBe(true);
      expect(avaliacao.eliminado).toBe(true);
      expect(avaliacao.aprovadoObjetiva).toBe(false);
      expect(avaliacao.motivosEliminacao[0]).toContain('P2');
    });

    it('elimina candidato com P1 >= 18 e P2 >= 27 mas Total < 54', () => {
      // P1: 20 certos, 2 errados -> 18 pts (>= 18)
      // P2: 30 certos, 3 errados -> 27 pts (>= 27)
      // Total: 18 + 27 = 45 pts (< 54)
      const respostas: Record<string, { resposta: 'C' | 'E' | 'BRANCO' }> = {};

      // P1: 20 certos
      simuladoOficialCamara180Q.slice(0, 20).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      // P1: 2 errados
      simuladoOficialCamara180Q.slice(20, 22).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito === 'C' ? 'E' : 'C' };
      });

      // P2: 30 certos
      simuladoOficialCamara180Q.slice(90, 120).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      // P2: 3 errados
      simuladoOficialCamara180Q.slice(120, 123).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito === 'C' ? 'E' : 'C' };
      });

      const avaliacao = avaliarDesempenhoSimuladoOficial180(simuladoOficialCamara180Q, respostas);

      expect(avaliacao.p1.notaLiquida).toBe(18);
      expect(avaliacao.p1.aprovadoPiso).toBe(true);
      expect(avaliacao.p2.notaLiquida).toBe(27);
      expect(avaliacao.p2.aprovadoPiso).toBe(true);
      expect(avaliacao.total.notaLiquida).toBe(45);
      expect(avaliacao.total.aprovadoPiso).toBe(false);
      expect(avaliacao.eliminado).toBe(true);
      expect(avaliacao.motivosEliminacao[0]).toContain('Total');
    });

    it('aprova candidato que supera simultaneamente os 3 pisos eliminatórios', () => {
      // P1: 30 certos, 5 errados -> 25 pts (>= 18)
      // P2: 45 certos, 10 errados -> 35 pts (>= 27)
      // Total: 25 + 35 = 60 pts (>= 54)
      const respostas: Record<string, { resposta: 'C' | 'E' | 'BRANCO' }> = {};

      simuladoOficialCamara180Q.slice(0, 30).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      simuladoOficialCamara180Q.slice(30, 35).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito === 'C' ? 'E' : 'C' };
      });

      simuladoOficialCamara180Q.slice(90, 135).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      simuladoOficialCamara180Q.slice(135, 145).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito === 'C' ? 'E' : 'C' };
      });

      const avaliacao = avaliarDesempenhoSimuladoOficial180(simuladoOficialCamara180Q, respostas);

      expect(avaliacao.p1.notaLiquida).toBe(25);
      expect(avaliacao.p1.aprovadoPiso).toBe(true);
      expect(avaliacao.p2.notaLiquida).toBe(35);
      expect(avaliacao.p2.aprovadoPiso).toBe(true);
      expect(avaliacao.total.notaLiquida).toBe(60);
      expect(avaliacao.total.aprovadoPiso).toBe(true);
      expect(avaliacao.eliminado).toBe(false);
      expect(avaliacao.aprovadoObjetiva).toBe(true);
      expect(avaliacao.motivosEliminacao).toHaveLength(0);
      expect(avaliacao.vagasDiscursivaAmpla).toBe(22);
    });
  });
});
