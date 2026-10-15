// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useProgressStore } from '../store/useProgressStore';
import { ProgressoPage } from '../pages/ProgressoPage';
import type { SimuladoFinalizado } from '../domain/types';

describe('U0.4 - Backup Lógico do Progresso e Exportação', () => {
  beforeEach(() => {
    act(() => {
      useProgressStore.getState().limparTodoProgresso();
    });

    class MockIntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver as any;

    if (!window.URL.createObjectURL) {
      window.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
    }
    if (!window.URL.revokeObjectURL) {
      window.URL.revokeObjectURL = vi.fn();
    }
  });

  describe('Motor lógico de exportação e importação (useProgressStore)', () => {
    it('deve gerar export JSON válido com campos fundamentais de progresso', () => {
      act(() => {
        useProgressStore.getState().marcarModuloConcluido('1.1');
        useProgressStore.getState().marcarModuloConcluido('1.2');
        useProgressStore.getState().salvarCheckpoint('cp_test_1', 'C');
      });

      const jsonStr = useProgressStore.getState().exportarProgressoJson();
      expect(typeof jsonStr).toBe('string');

      const parsed = JSON.parse(jsonStr);
      expect(parsed).toBeDefined();
      expect(parsed.versao).toBe(3);
      expect(parsed.exportadoEm).toBeDefined();
      expect(parsed.modulosLidosIds).toContain('1.1');
      expect(parsed.modulosLidosIds).toContain('1.2');
      expect(parsed.checkpointsRespondidos['cp_test_1']).toBe('C');
      expect(parsed.constancia).toBeDefined();
    });

    it('deve realizar ciclo completo de exportação e importação (round-trip) sem perda de dados', () => {
      const simuladoMock: SimuladoFinalizado = {
        id: 'sim_u0_test',
        simuladoId: 'sim_1',
        tituloSimulado: 'Simulado Diagnóstico U0',
        dataHora: '2026-10-14T20:00:00.000Z',
        tempoGastoSegundos: 3600,
        certos: 4,
        errados: 1,
        emBranco: 0,
        notaLiquida: 3,
        aproveitamentoPercent: 60,
        respostas: {},
        calibracao: {
          acertoCertezaPercent: 100,
          acertoProvavelPercent: 50,
          acertoChutePercent: 0,
          ganhoPotencialSeChuteBranco: 1,
        },
      };

      act(() => {
        useProgressStore.getState().marcarModuloConcluido('1.1');
        useProgressStore.getState().marcarModuloConcluido('2.1');
        useProgressStore.getState().salvarCheckpoint('cp_alpha', 'E');
        useProgressStore.setState((prev) => ({
          ...prev,
          historicoSimulados: [simuladoMock],
        }));
      });

      // Exporta backup
      const backupJson = useProgressStore.getState().exportarProgressoJson();

      // Limpa estado para provar que a restauração é real
      act(() => {
        useProgressStore.getState().limparTodoProgresso();
      });
      expect(useProgressStore.getState().modulosLidosIds).toEqual([]);
      expect(useProgressStore.getState().historicoSimulados).toEqual([]);
      expect(useProgressStore.getState().checkpointsRespondidos).toEqual({});

      // Restaura a partir do backup JSON
      let res: { success: boolean; error?: string } = { success: false };
      act(() => {
        res = useProgressStore.getState().importarProgressoJson(backupJson);
      });

      expect(res.success).toBe(true);
      const stateDepois = useProgressStore.getState();
      expect(stateDepois.modulosLidosIds).toContain('1.1');
      expect(stateDepois.modulosLidosIds).toContain('2.1');
      expect(stateDepois.checkpointsRespondidos['cp_alpha']).toBe('E');
      expect(stateDepois.historicoSimulados.length).toBe(1);
      expect(stateDepois.historicoSimulados[0].id).toBe('sim_u0_test');
      expect(stateDepois.historicoSimulados[0].notaLiquida).toBe(3);
    });

    it('deve rejeitar e tratar com segurança arquivos JSON corrompidos ou malformatados', () => {
      const invalidJson = '{ "modulosLidosIds": [ broken json...';
      const res = useProgressStore.getState().importarProgressoJson(invalidJson);
      expect(res.success).toBe(false);
      expect(res.error).toBeDefined();
    });

    it('deve gerar relatório de resumo Markdown formatado com dados reais', () => {
      act(() => {
        useProgressStore.getState().marcarModuloConcluido('1.1');
      });

      const md = useProgressStore.getState().exportarResumoMarkdown();
      expect(md).toContain('# Relatório de Estudos e Desempenho · Heuller na Câmara');
      expect(md).toContain('Progresso Geral (Câmara dos Deputados)');
      expect(md).toContain('Submódulos Lidos:');
    });
  });

  describe('Interface do Usuário (ProgressoPage)', () => {
    it('deve renderizar botões de exportação e acionar download ao clicar', () => {
      const createObjectURLSpy = vi.spyOn(window.URL, 'createObjectURL');
      const clickSpy = vi.fn();
      const originalCreateElement = document.createElement.bind(document);

      vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
        const el = originalCreateElement(tagName);
        if (tagName.toLowerCase() === 'a') {
          el.click = clickSpy;
        }
        return el;
      });

      render(<ProgressoPage />);

      const btnExportJson = screen.getByRole('button', { name: /Exportar Progresso \(JSON\)/i });
      expect(btnExportJson).toBeDefined();

      const btnExportMd = screen.getByRole('button', { name: /Exportar Relatório \(Markdown\)/i });
      expect(btnExportMd).toBeDefined();

      fireEvent.click(btnExportJson);
      expect(createObjectURLSpy).toHaveBeenCalled();
      expect(clickSpy).toHaveBeenCalled();
    });
  });
});
