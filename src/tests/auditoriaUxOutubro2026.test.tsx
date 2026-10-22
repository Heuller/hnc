/** @vitest-environment jsdom */
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { F1CeSimples } from '../components/review/formats/F1CeSimples';
import { getBreadcrumb } from '../config/rotas';
import type { Concept } from '../domain/concepts/types';

const conceito: Concept = {
  id: 'cp-1-1-1',
  topico: 'Conceito de Borko',
  submoduloId: '1.1',
  moduloId: 'm1',
  enunciadoCanonic: 'A Ciência da Informação investiga as propriedades e o fluxo da informação.',
  gabaritoCanonic: 'C',
  justificativaCanonic: 'Definição clássica de Borko (1968).',
  armadilhaCebraspe: 'Inversão com Biblioteconomia tradicional.',
  nivelDificuldade: 'medio',
  formatosDisponiveis: ['f1_ce_simples'],
};

describe('Auditoria UX outubro/2026', () => {
  it('atalho C julga o item, mas Ctrl/Cmd+C (copiar) não', () => {
    const onResponder = vi.fn();
    render(<F1CeSimples conceito={conceito} respondido={false} onResponder={onResponder} />);

    fireEvent.keyDown(window, { key: 'c', ctrlKey: true });
    fireEvent.keyDown(window, { key: 'c', metaKey: true });
    expect(onResponder).not.toHaveBeenCalled();

    fireEvent.keyDown(window, { key: 'c' });
    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('breadcrumb da teoria exibe módulo e submódulo quando há contexto', () => {
    const itens = getBreadcrumb('teoria', '1.1', {
      modulo: 'M1 Fundamentos',
      submodulo: '1.1 Biblioteconomia',
    });
    expect(itens.map((i) => i.rotulo)).toEqual([
      'Início',
      'Teoria',
      'M1 Fundamentos',
      '1.1 Biblioteconomia',
    ]);
    expect(itens[itens.length - 1].isAtual).toBe(true);
  });

  it('breadcrumb da teoria mantém o fallback sem contexto', () => {
    const itens = getBreadcrumb('teoria', '1.1');
    expect(itens[itens.length - 1].rotulo).toBe('Submódulo 1.1');
  });
});
