import { describe, it, expect } from 'vitest';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { simuladoClassificacao100Q } from '../content/questions/m3-classificacao-100q';
import { simuladoRecuperacao100Q } from '../content/questions/m4-recuperacao-100q';
import { simuladoGestao100Q } from '../content/questions/m5-gestao-100q';
import { simuladoDigitalIA100Q } from '../content/questions/m6-digital-ia-100q';
import { simuladoPreservacao100Q } from '../content/questions/m7-preservacao-100q';
import { simuladoNormalizacao100Q } from '../content/questions/m8-normalizacao-100q';
import { simuladoComunicacao100Q } from '../content/questions/m9-comunicacao-100q';
import { simuladoLegislativo100Q } from '../content/questions/m10-legislativo-100q';
import { validarSimetriaCebraspe } from '../domain/edital/engenhariaCebraspeService';

describe('Auditoria de Integridade dos Cadernos da Fase E5 (Ondas M, P, X - M3 a M10)', () => {
  const cadernosE5 = [
    { id: 'M3', nome: 'Classificação e Indexação', questoes: simuladoClassificacao100Q },
    { id: 'M4', nome: 'Recuperação da Informação e Fontes', questoes: simuladoRecuperacao100Q },
    { id: 'M5', nome: 'Gestão de Unidades de Informação', questoes: simuladoGestao100Q },
    { id: 'M6', nome: 'Bibliotecas Digitais, Repositórios e IA', questoes: simuladoDigitalIA100Q },
    { id: 'M7', nome: 'Preservação, Conservação e Memória', questoes: simuladoPreservacao100Q },
    { id: 'M8', nome: 'Normalização Documental e ABNT', questoes: simuladoNormalizacao100Q },
    { id: 'M9', nome: 'Comunicação Científica e Bibliometria', questoes: simuladoComunicacao100Q },
    { id: 'M10', nome: 'Legislação Federal, Regimento e RVBI', questoes: simuladoLegislativo100Q },
  ];

  describe('Auditoria Quantitativa e Simetria Cebraspe 50/50', () => {
    it('deve validar que existem exatamente 8 cadernos de Conhecimentos Específicos produzidos na Fase E5', () => {
      expect(cadernosE5).toHaveLength(8);
    });

    cadernosE5.forEach(({ id, nome, questoes }) => {
      it(`[${id}] ${nome} deve conter rigorosamente 100 itens`, () => {
        expect(questoes).toHaveLength(100);
      });

      it(`[${id}] ${nome} deve ter simetria Cebraspe perfeita: 50 Certos (C) e 50 Errados (E)`, () => {
        const simetria = validarSimetriaCebraspe(questoes);
        expect(simetria.total).toBe(100);
        expect(simetria.certos).toBe(50);
        expect(simetria.errados).toBe(50);
        expect(simetria.isSimetrico5050).toBe(true);
        expect(simetria.diferenca).toBe(0);
      });
    });
  });

  describe('Auditoria de Qualidade Estrutural e Doutrinária dos 800 Itens', () => {
    cadernosE5.forEach(({ id, nome, questoes }) => {
      describe(`[${id}] ${nome} - Validação de Campos Obrigatórios`, () => {
        it('todos os itens devem possuir enunciados densos e gabarito C ou E', () => {
          questoes.forEach(q => {
            expect(q.id).toBeDefined();
            expect(q.id.trim()).not.toBe('');
            expect(q.item).toBeDefined();
            expect(q.item.trim().length).toBeGreaterThanOrEqual(30);
            expect(['C', 'E']).toContain(q.gabarito);
          });
        });

        it('todos os itens devem conter justificativas aprofundadas e armadilhas da banca mapeadas', () => {
          questoes.forEach(q => {
            expect(q.justificativa).toBeDefined();
            expect(q.justificativa.trim().length).toBeGreaterThanOrEqual(40);
            expect(q.armadilhaBanca).toBeDefined();
            expect(q.armadilhaBanca?.trim().length).toBeGreaterThanOrEqual(15);
          });
        });

        it('todos os itens devem conter fontes originais/normativas e dificuldade calibrada', () => {
          questoes.forEach(q => {
            expect(q.fonteOriginal).toBeDefined();
            expect(q.fonteOriginal.descricao).toBeDefined();
            expect(q.fonteOriginal?.descricao?.trim().length).toBeGreaterThanOrEqual(5);
            expect(['facil', 'media', 'dificil']).toContain(q.dificuldade);
          });
        });

        it('deve cobrir os 4 submódulos correspondentes com distribuição equilibrada', () => {
          const submodulos = new Set(questoes.map(q => q.submoduloId));
          expect(submodulos.size).toBe(4);
          submodulos.forEach(subId => {
            const count = questoes.filter(q => q.submoduloId === subId).length;
            expect(count).toBeGreaterThanOrEqual(20);
          });
        });

        it('deve ter IDs únicos dentro do próprio caderno', () => {
          const ids = questoes.map(q => q.id);
          const uniqueIds = new Set(ids);
          expect(uniqueIds.size).toBe(100);
        });
      });
    });
  });

  describe('Auditoria Global do Catálogo de Simulados (SIMULADOS_REGISTRY)', () => {
    it('deve conter 15 manifestos de simulados registrados (M1 a M14 + Mega Simulado)', () => {
      expect(SIMULADOS_REGISTRY).toHaveLength(15);
      const codigos = SIMULADOS_REGISTRY.map(s => s.macroModuloId);
      for (let i = 1; i <= 14; i++) {
        expect(codigos).toContain(`M${i}`);
      }
      expect(codigos).toContain('MEGA');
    });

    it('deve totalizar exatamente 1.520 questões ativas no registro de simulados', () => {
      const totalQuestoes = SIMULADOS_REGISTRY.reduce((acc, s) => acc + s.questoes.length, 0);
      expect(totalQuestoes).toBe(1520);
    });

    it('todos os 1.520 identificadores de questões no sistema de simulados devem ser globalmente únicos', () => {
      const allIds: string[] = [];
      SIMULADOS_REGISTRY.forEach(s => {
        s.questoes.forEach(q => {
          allIds.push(q.id);
        });
      });
      const uniqueIds = new Set(allIds);
      expect(uniqueIds.size).toBe(1520);
    });
  });
});
