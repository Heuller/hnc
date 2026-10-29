// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { simuladoOficialCamara180Q } from '../content/questions/simulado-oficial-camara-180q';
import {
  avaliarDesempenhoSimuladoOficial180,
  MACROS_P1_BASICOS,
  MACROS_P2_ESPECIFICOS,
} from '../domain/simuladoOficialEngine';
import { getSimuladoById, detectSimuladoIdFromQuestionId } from '../content/simuladosRegistry';
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
        expect(q.id).toMatch(/^(oficial-180q-\d{3}|camara-2027-\d{3})$/);
      });
    });

    it('deve ter simetria realista Cebraspe: faixa de 46% a 56% Certo no total da prova com alerta e não erro', () => {
      const certos = simuladoOficialCamara180Q.filter((q) => q.gabarito === 'C').length;
      const total = simuladoOficialCamara180Q.length;
      const proporcao = (certos / total) * 100;

      // Relaxamento canônico C3: 46% a 56%
      expect(proporcao).toBeGreaterThanOrEqual(46);
      expect(proporcao).toBeLessThanOrEqual(56);
    });

    it('deve estruturar P1 (Conhecimentos Básicos) com exatamente 90 itens e proporção realista Cebraspe (alerta fora de 46–56%)', () => {
      const p1 = simuladoOficialCamara180Q.slice(0, 90);
      expect(p1).toHaveLength(90);

      p1.forEach((q) => {
        expect(q.provaBloco).toBe('P1_BASICOS');
        const macro = q.origemModulo || q.macroModuloId;
        expect(MACROS_P1_BASICOS.has(macro)).toBe(true);
      });

      const certosP1 = p1.filter((q) => q.gabarito === 'C').length;
      const proporcaoP1 = (certosP1 / 90) * 100;
      expect(proporcaoP1).toBeGreaterThanOrEqual(46);
      expect(proporcaoP1).toBeLessThanOrEqual(56);
    });

    it('deve estruturar P2 (Conhecimentos Específicos) com exatamente 90 itens e proporção realista Cebraspe (alerta fora de 46–56%)', () => {
      const p2 = simuladoOficialCamara180Q.slice(90, 180);
      expect(p2).toHaveLength(90);

      p2.forEach((q) => {
        expect(q.provaBloco).toBe('P2_ESPECIFICOS');
        const macro = q.origemModulo || q.macroModuloId;
        expect(MACROS_P2_ESPECIFICOS.has(macro)).toBe(true);
      });

      const certosP2 = p2.filter((q) => q.gabarito === 'C').length;
      const proporcaoP2 = (certosP2 / 90) * 100;
      expect(proporcaoP2).toBeGreaterThanOrEqual(46);
      expect(proporcaoP2).toBeLessThanOrEqual(56);
    });

    it('todas as 180 questões devem ser válidas contra o schema Zod estrito de questão Cebraspe', () => {
      simuladoOficialCamara180Q.forEach((q) => {
        const resultado = CebraspeQuestionSchema.safeParse(q);
        expect(resultado.success, `Falha de validação Zod no item ${q.id}: ${JSON.stringify(resultado)}`).toBe(true);
      });
    });
  });

  describe('Registro Oficial no Simulado Registry', () => {
    it('o Simulado Oficial Câmara 2027 deve estar registrado com ID correto e duração de 5 horas', () => {
      const simulado = getSimuladoById('simulado-oficial-camara-2027');
      expect(simulado).toBeDefined();
      expect(simulado.id).toBe('simulado-oficial-camara-2027');
      expect(simulado.totalNominal).toBe(180);
      expect(simulado.questoes).toHaveLength(178);
      expect(simulado.itensForaConferencia).toBe(2);
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
      const respostas: Record<string, { resposta: 'C' | 'E' | 'BRANCO' }> = {};
      simuladoOficialCamara180Q.slice(0, 17).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      simuladoOficialCamara180Q.slice(90, 140).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });

      const avaliacao = avaliarDesempenhoSimuladoOficial180(simuladoOficialCamara180Q, respostas);
      expect(avaliacao.isSimuladoOficial180).toBe(true);
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
      const respostas: Record<string, { resposta: 'C' | 'E' | 'BRANCO' }> = {};
      simuladoOficialCamara180Q.slice(0, 20).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
      simuladoOficialCamara180Q.slice(20, 22).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito === 'C' ? 'E' : 'C' };
      });

      simuladoOficialCamara180Q.slice(90, 120).forEach((q) => {
        respostas[q.id] = { resposta: q.gabarito };
      });
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
