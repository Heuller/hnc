import { describe, it, expect } from 'vitest';
import { SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY, ALL_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoIngles100Q } from '../content/questions/m12-ingles-100q';
import { simuladoPreservacao100Q } from '../content/questions/m7-preservacao-100q';
import { gerarMatrizViva } from '../../scripts/gerarMatrizVivaEdital';

describe('Missão v2 — Fase 3: W3 (Auditoria e Matriz de Cobertura) & W4/P18 (Proveniência Honesta e Questões Reais)', () => {
  const todosSimulados = [...SIMULADOS_REGISTRY, ...MINI_SIMULADOS_REGISTRY];
  const todasQuestoes = todosSimulados.flatMap((s) => s.questoes);

  describe('W3: Higienização de Anacronismos, Quebras de OCR e Cobertura do Edital', () => {
    it('garante que ZERO item do acervo cita concurso futuro ou anacrônico "Câmara 2026"', () => {
      const anacronicos = todasQuestoes.filter((q) => {
        const s = JSON.stringify(q);
        return s.includes('Câmara dos Deputados/2026') || s.includes('Câmara/2026') || s.includes('CD/2026');
      });
      expect(anacronicos).toHaveLength(0);
    });

    it('garante que ZERO item do acervo possui palavras quebradas por fim de linha em extração de OCR', () => {
      const regexQuebra = /\b(classific\s*a-\s*ções|ra\s+mos|bibliote\s+co\s+nomia|documen\s+ta\s+ção|informa\s*-\s*ção|[a-zà-ú]{2,}-\s+[a-zà-ú]{2,})\b/i;
      const quebrados = todasQuestoes.filter((q) => regexQuebra.test(q.item || ''));
      expect(quebrados).toHaveLength(0);
    });

    it('valida que a Matriz Viva do Edital nº 1/2026 mantém 100% de cobertura nos 64 tópicos oficiais', () => {
      const matriz = gerarMatrizViva();
      expect(matriz.totalTopicos).toBe(64);
      expect(matriz.topicosSemSubmodulo).toHaveLength(0);
      expect(matriz.topicosSemSimulado).toHaveLength(0);
    });
  });

  describe('W4/P18: Proveniência Honesta e Injeção de Questões Reais Cebraspe', () => {
    it('assegura que o Mega Simulado 120Q possui simetria rigorosa 60C / 60E e metadados de proveniência válidos', () => {
      expect(megaSimuladoCamara120Q).toHaveLength(120);

      const certos = megaSimuladoCamara120Q.filter((q) => q.gabarito === 'C').length;
      const errados = megaSimuladoCamara120Q.filter((q) => q.gabarito === 'E').length;
      expect(certos).toBe(60);
      expect(errados).toBe(60);

      // Metadados de proveniência preenchidos no padrão P18
      megaSimuladoCamara120Q.forEach((q) => {
        expect(q.fonteOriginal?.descricao).toBeDefined();
        expect(q.fonteOriginal?.descricao.length).toBeGreaterThanOrEqual(5);
        expect(q.justificativa.length).toBeGreaterThanOrEqual(30);
        expect(q.armadilhaBanca).toBeDefined();
        expect(['real-confirmada', 'adaptada', 'inedita']).toContain(q.fonteOriginal.tipo);
      });
    });

    it('assegura que o Simulado de Língua Inglesa (M12) possui simetria 50C / 50E e proveniência transparente', () => {
      expect(simuladoIngles100Q).toHaveLength(100);

      const certos = simuladoIngles100Q.filter((q) => q.gabarito === 'C').length;
      const errados = simuladoIngles100Q.filter((q) => q.gabarito === 'E').length;
      expect(certos).toBe(50);
      expect(errados).toBe(50);

      simuladoIngles100Q.forEach((q) => {
        expect(q.contexto).toBeDefined();
        expect(q.contexto!.length).toBeGreaterThanOrEqual(20);
        expect(q.item.length).toBeGreaterThanOrEqual(25);
        expect(['real-confirmada', 'adaptada', 'inedita']).toContain(q.fonteOriginal.tipo);
      });
    });

    it('assegura que o Simulado de Preservação (M7) possui alta densidade de questões confirmadas no acervo com simetria 50C / 50E', () => {
      expect(simuladoPreservacao100Q).toHaveLength(100);

      const confirmadasAcervo = simuladoPreservacao100Q.filter(
        (q) => q.fonteOriginal?.tipo === 'real-confirmada' || q.fonteOriginal?.tipo === 'adaptada'
      );
      expect(confirmadasAcervo.length).toBeGreaterThanOrEqual(60);

      const certos = simuladoPreservacao100Q.filter((q) => q.gabarito === 'C').length;
      const errados = simuladoPreservacao100Q.filter((q) => q.gabarito === 'E').length;
      expect(certos).toBe(50);
      expect(errados).toBe(50);
    });

    it('assegura que ZERO questão do acervo vivo possui o rótulo legado "cebraspe-real"', () => {
      const allQuestoes = ALL_SIMULADOS_REGISTRY.flatMap((s) => s.questoes);
      // @ts-expect-error verificação contra tipo legado
      const legados = allQuestoes.filter((q) => q.fonteOriginal?.tipo === 'cebraspe-real');
      expect(legados).toHaveLength(0);
    });
  });
});
