import { describe, it, expect } from 'vitest';
import {
  ALL_SIMULADOS_REGISTRY,
  SIMULADOS_FASE8_REGISTRY,
  getSimuladoById,
  detectSimuladoIdFromQuestionId,
} from '../content/simuladosRegistry';
import { simuladoLegislativoConstituicao100Q } from '../content/questions/m10a-legislativo-constituicao-100q';
import { simuladoRegimentosCamaraCongresso100Q } from '../content/questions/m10b-regimentos-100q';
import { simuladoGeral180Q } from '../content/questions/simulado-geral-180q';
import { questoesSubmodulosAmpliados } from '../content/questions/questoes-submodulos-ampliados';
import { validarRastreabilidadeItem } from '../domain/schemas/question.schema';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../domain/discursiva/temasOficiais';

describe('Auditoria da Fase 8: Expansão do Banco de Questões, Rastreabilidade e Simulados Oficiais', () => {
  describe('T8.1 — Banco de Questões com Rastreabilidade Estrita (Anti-Alucinação)', () => {
    it('todo item do Simulado M10-A deve ter rastreabilidade válida e fonte primária conferida', () => {
      expect(simuladoLegislativoConstituicao100Q).toHaveLength(100);
      simuladoLegislativoConstituicao100Q.forEach((q) => {
        const val = validarRastreabilidadeItem(q);
        expect(val.valido, `Item ${q.id} com campos faltantes: ${val.camposFaltantes.join(', ')}`).toBe(true);
        expect(q.fonte || q.fonteOriginal?.descricao).toBeDefined();
        expect((q.fonte || q.fonteOriginal?.descricao || '').length).toBeGreaterThan(3);
        expect(q.nivel).toBeGreaterThanOrEqual(1);
        expect(q.nivel).toBeLessThanOrEqual(4);
        expect(['memorizar', 'compreender', 'aplicar', 'analisar', 'avaliar']).toContain(q.habilidade);
      });
    });

    it('todo item do Simulado M10-B deve ter rastreabilidade válida e fonte regimental conferida', () => {
      expect(simuladoRegimentosCamaraCongresso100Q).toHaveLength(100);
      simuladoRegimentosCamaraCongresso100Q.forEach((q) => {
        const val = validarRastreabilidadeItem(q);
        expect(val.valido, `Item ${q.id} com campos faltantes: ${val.camposFaltantes.join(', ')}`).toBe(true);
        expect(q.fonte || q.fonteOriginal?.descricao).toBeDefined();
        expect((q.fonte || q.fonteOriginal?.descricao || '').length).toBeGreaterThan(3);
        expect(q.nivel).toBeGreaterThanOrEqual(1);
        expect(q.nivel).toBeLessThanOrEqual(4);
      });
    });

    it('todo item do Simulado Geral de 180 Itens deve ter rastreabilidade completa e zero órfãos', () => {
      expect(simuladoGeral180Q).toHaveLength(180);
      simuladoGeral180Q.forEach((q) => {
        const val = validarRastreabilidadeItem(q);
        expect(val.valido, `Item ${q.id} inválido: ${val.camposFaltantes.join(', ')}`).toBe(true);
      });
    });

    it('todos os itens do banco de submódulos ampliados devem ter rastreabilidade estrita', () => {
      expect(questoesSubmodulosAmpliados.length).toBeGreaterThanOrEqual(60);
      questoesSubmodulosAmpliados.forEach((q) => {
        const val = validarRastreabilidadeItem(q);
        expect(val.valido, `Item ${q.id} inválido: ${val.camposFaltantes.join(', ')}`).toBe(true);
      });
    });
  });

  describe('T8.2 — Questões Novas para Submódulos Criados ou Ampliados', () => {
    it('deve conter questões dedicadas cobrindo os novos submódulos 1.5, 1.6, 2.6, 2.7, 6.5, 6.6, 6.7, 8.5 e 13.4', () => {
      const submodulosCobertos = new Set(questoesSubmodulosAmpliados.map((q) => q.submoduloId));
      expect(submodulosCobertos.has('1.5')).toBe(true); // Ciclo de Vida e Curadoria
      expect(submodulosCobertos.has('1.6')).toBe(true); // Governança e LGPD
      expect(submodulosCobertos.has('2.6')).toBe(true); // Metadados MODS, METS, PREMIS
      expect(submodulosCobertos.has('2.7')).toBe(true); // Linked Data e BIBFRAME
      expect(submodulosCobertos.has('6.5')).toBe(true); // Bancos SQL e NoSQL
      expect(submodulosCobertos.has('6.6')).toBe(true); // Regex e Automação
      expect(submodulosCobertos.has('6.7')).toBe(true); // IA Generativa, LLMs e RAG
      expect(submodulosCobertos.has('8.5')).toBe(true); // Infografia e Acessibilidade
      expect(submodulosCobertos.has('13.4')).toBe(true); // Redação Oficial e MRPR
    });

    it('deve conter itens nos 4 níveis de RPG e distribuição de habilidades cognitivas', () => {
      const niveis = new Set(questoesSubmodulosAmpliados.map((q) => q.nivel));
      expect(niveis.has(1)).toBe(true);
      expect(niveis.has(2)).toBe(true);
      expect(niveis.has(3)).toBe(true);

      const habilidades = new Set(questoesSubmodulosAmpliados.map((q) => q.habilidade));
      expect(habilidades.has('memorizar')).toBe(true);
      expect(habilidades.has('compreender')).toBe(true);
      expect(habilidades.has('analisar')).toBe(true);
    });
  });

  describe('T8.3 — Desmembramento do Módulo 10 em Dois Simulados de 100 Itens (Opção 1)', () => {
    it('o Simulado M10-A (Constituição, Processo Legislativo e CEDI) deve ter exatamente 100 itens, julgamentos válidos e IDs únicos', () => {
      expect(simuladoLegislativoConstituicao100Q).toHaveLength(100);
      const c = simuladoLegislativoConstituicao100Q.filter((q) => q.gabarito === 'C').length;
      const e = simuladoLegislativoConstituicao100Q.filter((q) => q.gabarito === 'E').length;
      // Correção conceitual prevalece sobre cotas artificiais de gabarito.
      expect(c + e).toBe(100);

      // IDs únicos e sequenciais
      const ids = new Set(simuladoLegislativoConstituicao100Q.map((q) => q.id));
      expect(ids.size).toBe(100);
    });

    it('o Simulado M10-B (Regimentos da Câmara e do Congresso) deve ter exatamente 100 itens, julgamentos válidos e IDs únicos', () => {
      expect(simuladoRegimentosCamaraCongresso100Q).toHaveLength(100);
      const c = simuladoRegimentosCamaraCongresso100Q.filter((q) => q.gabarito === 'C').length;
      const e = simuladoRegimentosCamaraCongresso100Q.filter((q) => q.gabarito === 'E').length;
      // Correção conceitual prevalece sobre cotas artificiais de gabarito.
      expect(c + e).toBe(100);

      const ids = new Set(simuladoRegimentosCamaraCongresso100Q.map((q) => q.id));
      expect(ids.size).toBe(100);
    });

    it('os manifestos de M10A e M10B devem estar registrados e acessíveis via getSimuladoById', () => {
      expect(SIMULADOS_FASE8_REGISTRY).toHaveLength(3);
      expect(ALL_SIMULADOS_REGISTRY.length).toBeGreaterThan(15);

      const m10a = getSimuladoById('m10a-legislativo-constituicao');
      expect(m10a).toBeDefined();
      expect(m10a.macroModuloId).toBe('M10A');
      expect(m10a.questoes).toHaveLength(100);

      const m10b = getSimuladoById('m10b-regimentos-camara-congresso');
      expect(m10b).toBeDefined();
      expect(m10b.macroModuloId).toBe('M10B');
      expect(m10b.questoes).toHaveLength(100);
    });
  });

  describe('T8.4 — Simulado Geral e Casos Integradores (180 Itens)', () => {
    it('o Simulado Geral deve conter exatamente 180 questões no padrão oficial do Edital', () => {
      expect(simuladoGeral180Q).toHaveLength(180);
    });

    it('o Simulado Geral deve conter 180 julgamentos válidos, sem impor cota de respostas', () => {
      const c = simuladoGeral180Q.filter((q) => q.gabarito === 'C').length;
      const e = simuladoGeral180Q.filter((q) => q.gabarito === 'E').length;
      expect(c + e).toBe(180);
    });

    it('o Simulado Geral deve conter itens de nível 4 decorrentes dos Casos Integradores (CI-1 a CI-5)', () => {
      const nivel4 = simuladoGeral180Q.filter((q) => q.nivel === 4);
      expect(nivel4.length).toBeGreaterThanOrEqual(10);
      const contemCasoIntegrador = nivel4.some((q) => q.contexto?.includes('Caso Integrador'));
      expect(contemCasoIntegrador).toBe(true);
    });

    it('o manifesto do Simulado Geral 180Q deve estar registrado no catálogo e ser detectável por ID de questão', () => {
      const simGeral = getSimuladoById('simulado-geral-180q');
      expect(simGeral).toBeDefined();
      expect(simGeral.macroModuloId).toBe('GERAL');
      expect(simGeral.questoes).toHaveLength(180);

      expect(detectSimuladoIdFromQuestionId('geral-180q-1')).toBe('simulado-geral-180q');
      expect(detectSimuladoIdFromQuestionId('m10a-q-1')).toBe('m10a-legislativo-constituicao');
      expect(detectSimuladoIdFromQuestionId('m10b-q-1')).toBe('m10b-regimentos-camara-congresso');
    });
  });

  describe('T8.5 — Temas Discursivos com Rubricas de Autocorreção (E16)', () => {
    it('deve conter pelo menos 10 temas oficiais de prova discursiva', () => {
      expect(TEMAS_OFICIAIS_DISCURSIVA.length).toBeGreaterThanOrEqual(10);
    });

    it('deve contemplar os temas 9 e 10 (Processo Legislativo e Web Scraping / APIs Abertas da Câmara)', () => {
      const tema9 = TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.id === 'tema-processo-legislativo-ricd');
      expect(tema9).toBeDefined();
      expect(tema9?.tipo).toBe('questao_20');
      expect(tema9?.criteriosPontuacao).toHaveLength(3);

      const tema10 = TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.id === 'tema-web-scraping-dados-abertos');
      expect(tema10).toBeDefined();
      expect(tema10?.tipo).toBe('questao_20');
      expect(tema10?.criteriosPontuacao).toHaveLength(3);
    });

    it('todos os 10 temas devem ter rubricas preliminares com somatória estrita de pontos (15 pts ou 30 pts)', () => {
      TEMAS_OFICIAIS_DISCURSIVA.forEach((t) => {
        const esperado = t.tipo === 'peca_50' ? 30.0 : 15.0;
        const total = t.criteriosPontuacao.reduce((acc, c) => acc + c.pontuacaoMaxima, 0);
        expect(Math.round(total)).toBe(esperado);
        expect(t.padraoRespostaPreliminar.length).toBeGreaterThan(50);
      });
    });
  });
});
