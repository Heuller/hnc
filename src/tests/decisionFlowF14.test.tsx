/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';
import { DecisionFlow, NodeBox, Arrow } from '../components/common/DecisionFlow';

// Componente pai interativo para testar se re-renders preservam estado e não recriam componentes
const ParentWrapper = ({ initialCode }: { initialCode: string }) => {
  const [count, setCount] = useState(0);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  return (
    <div>
      <button data-testid="re-render-btn" onClick={() => setCount((c) => c + 1)}>
        Forçar Re-render ({count})
      </button>

      <div data-testid="selected-display">Selecionado: {selectedStep || 'nenhum'}</div>

      <div
        onClick={(e) => {
          const target = (e.target as HTMLElement).closest('[role="listitem"]');
          if (target?.textContent) {
            setSelectedStep(target.textContent);
          }
        }}
      >
        <DecisionFlow code={initialCode} />
      </div>
    </div>
  );
};

describe('F-14: Extração de subcomponentes em DecisionFlow e preservação de estado', () => {
  const linearCode = `
STEP: Iniciar Catalogação
DETAIL: Consultar AACR2 e RDA
STEP: Atribuir Ponto de Acesso Principal
DETAIL: Verificar autoria pessoal ou entidade
STEP: Finalizar Registro MARC21
`;

  it('exporta NodeBox e Arrow como componentes de nível de módulo independentes', () => {
    expect(typeof NodeBox).toBe('function');
    expect(typeof Arrow).toBe('function');
  });

  it('renderiza o fluxo de decisões linear e interativo', () => {
    render(<ParentWrapper initialCode={linearCode} />);

    expect(screen.getByText('Iniciar Catalogação')).toBeDefined();
    expect(screen.getByText('Atribuir Ponto de Acesso Principal')).toBeDefined();
    expect(screen.getByText('Finalizar Registro MARC21')).toBeDefined();
  });

  it('preserva a seleção do usuário e integridade visual mesmo após re-renders sucessivos do pai', () => {
    render(<ParentWrapper initialCode={linearCode} />);

    // Seleciona o segundo passo
    const step2 = screen.getByText('Atribuir Ponto de Acesso Principal');
    fireEvent.click(step2);

    expect(screen.getByTestId('selected-display').textContent).toContain('Atribuir Ponto de Acesso Principal');

    // Força 3 re-renders do componente pai
    const btn = screen.getByTestId('re-render-btn');
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(btn.textContent).toContain('Forçar Re-render (3)');
    // A escolha e o estado não são perdidos
    expect(screen.getByTestId('selected-display').textContent).toContain('Atribuir Ponto de Acesso Principal');
    expect(screen.getByText('Finalizar Registro MARC21')).toBeDefined();
  });
});
