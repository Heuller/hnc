import { describe, it, expect } from 'vitest';
import { simuladoAdministrativo100Q } from '../content/questions/m11-administrativo-100q';
import { simuladoIngles100Q } from '../content/questions/m12-ingles-100q';
import { simuladoPortugues100Q } from '../content/questions/m13-portugues-100q';
import { simuladoTecnologiaDados100Q } from '../content/questions/m14-tecnologia-dados-100q';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { validarSimetriaCebraspe } from '../domain/edital/engenhariaCebraspeService';

describe('Auditoria Rigorosa dos Simulados Básicos (M11 a M14) e do Mega Simulado 120Q', () => {
  const simulados100Q = [
    { id: 'M11', nome: 'Direito Administrativo', questoes: simuladoAdministrativo100Q, prefix: 'm11-q-' },
    { id: 'M12', nome: 'Língua Inglesa', questoes: simuladoIngles100Q, prefix: 'm12-q-' },
    { id: 'M13', nome: 'Língua Portuguesa', questoes: simuladoPortugues100Q, prefix: 'm13-q-' },
    { id: 'M14', nome: 'Tecnologia da Informação e Dados', questoes: simuladoTecnologiaDados100Q, prefix: 'm14-q-' },
  ];

  describe('Auditoria dos 4 Simulados de 100 Questões de Conhecimentos Básicos (M11 a M14)', () => {
    simulados100Q.forEach(({ id, nome, questoes, prefix }) => {
      describe(`[${id}] ${nome}`, () => {
        it('deve conter exatamente 100 itens com numeração sequencial de 1 a 100', () => {
          expect(questoes).toHaveLength(100);
          questoes.forEach((q, idx) => {
            expect(q.numero).toBe(idx + 1);
            expect(q.id).toBe(`${prefix}${idx + 1}`);
          });
        });

        it('deve apresentar simetria Cebraspe rigorosa: 50 Certos (C) e 50 Errados (E)', () => {
          const simetria = validarSimetriaCebraspe(questoes);
          expect(simetria.total).toBe(100);
          expect(simetria.certos).toBe(50);
          expect(simetria.errados).toBe(50);
          expect(simetria.isSimetrico5050).toBe(true);
        });

        it('todos os itens devem cumprir os padrões de qualidade e validação de campos', () => {
          questoes.forEach(q => {
            expect(q.item.trim().length).toBeGreaterThanOrEqual(25);
            expect(q.justificativa.trim().length).toBeGreaterThanOrEqual(30);
            expect(q.armadilhaBanca).toBeDefined();
            expect(typeof q.armadilhaBanca).toBe('string');
            expect(q.armadilhaBanca!.trim().length).toBeGreaterThanOrEqual(10);
            expect(['C', 'E']).toContain(q.gabarito);
            expect(['facil', 'media', 'dificil']).toContain(q.dificuldade);
            expect(q.fonteOriginal?.descricao).toBeDefined();
          });
        });
      });
    });
  });

  describe('Auditoria Estrutural do Mega Simulado Oficial da Câmara dos Deputados (120Q)', () => {
    it('deve conter exatamente 120 itens com IDs sequenciais de mega-q-1 a mega-q-120', () => {
      expect(megaSimuladoCamara120Q).toHaveLength(120);
      megaSimuladoCamara120Q.forEach((q, idx) => {
        expect(q.numero).toBe(idx + 1);
        expect(q.id).toBe(`mega-q-${idx + 1}`);
      });
    });

    it('deve apresentar simetria global Cebraspe perfeita: exatamente 60 Certos (C) e 60 Errados (E)', () => {
      const simetria = validarSimetriaCebraspe(megaSimuladoCamara120Q);
      expect(simetria.total).toBe(120);
      expect(simetria.certos).toBe(60);
      expect(simetria.errados).toBe(60);
      expect(simetria.isSimetrico5050).toBe(true);
    });

    it('deve estruturar a Parte 1 (Conhecimentos Básicos - Itens 1 a 40) com exatamente 20 C e 20 E', () => {
      const basicos = megaSimuladoCamara120Q.slice(0, 40);
      expect(basicos).toHaveLength(40);
      const certos = basicos.filter(q => q.gabarito === 'C').length;
      const errados = basicos.filter(q => q.gabarito === 'E').length;
      expect(certos).toBe(20);
      expect(errados).toBe(20);
    });

    it('deve estruturar a Parte 2 (Conhecimentos Específicos - Itens 41 a 120) com exatamente 40 C e 40 E', () => {
      const especificos = megaSimuladoCamara120Q.slice(40);
      expect(especificos).toHaveLength(80);
      const certos = especificos.filter(q => q.gabarito === 'C').length;
      const errados = especificos.filter(q => q.gabarito === 'E').length;
      expect(certos).toBe(40);
      expect(errados).toBe(40);
    });

    it('deve cobrir todos os 10 módulos de Conhecimentos Específicos (M1 a M10) com 8 questões cada', () => {
      for (let i = 1; i <= 10; i++) {
        const modId = i < 10 ? `M0${i}` : `M${i}`;
        const count = megaSimuladoCamara120Q.filter(q => q.macroModuloId === modId).length;
        expect(count).toBe(8);
      }
    });

    it('todos os 120 itens do Mega Simulado devem conter armadilhas e justificativas profundas', () => {
      megaSimuladoCamara120Q.forEach(q => {
        expect(q.item.trim().length).toBeGreaterThanOrEqual(30);
        expect(q.justificativa.trim().length).toBeGreaterThanOrEqual(30);
        expect(q.armadilhaBanca).toBeDefined();
        expect(typeof q.armadilhaBanca).toBe('string');
        expect(q.armadilhaBanca!.trim().length).toBeGreaterThanOrEqual(10);
      });
    });
  });
});
