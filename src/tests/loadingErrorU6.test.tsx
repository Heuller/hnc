// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorState } from '../components/common/ErrorState';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

describe('U6.6: Estados de Carregamento e Erro Padronizados', () => {
  it('deve renderizar ErrorState com mensagem clara e acionar retry', () => {
    const handleRetry = vi.fn();

    render(
      <ErrorState
        titulo="Erro de Comunicação"
        descricao="Falha momentânea na conexão com o servidor."
        detalhes="NetworkError: Failed to fetch"
        onRetry={handleRetry}
        retryLabel="Tentar novamente"
      />
    );

    expect(screen.getByRole('alert')).toBeDefined();
    expect(screen.getByText('Erro de Comunicação')).toBeDefined();
    expect(screen.getByText(/Falha momentânea na conexão/i)).toBeDefined();

    // Detalhes recolhíveis
    const botaoDetalhes = screen.getByRole('button', { name: /Ver detalhes técnicos/i });
    expect(botaoDetalhes).toBeDefined();
    fireEvent.click(botaoDetalhes);
    expect(screen.getByText(/NetworkError: Failed to fetch/i)).toBeDefined();

    // Botão de retry
    const botaoRetry = screen.getByRole('button', { name: /Tentar novamente/i });
    expect(botaoRetry).toBeDefined();
    expect(botaoRetry.className).toContain('min-h-[44px]');
    fireEvent.click(botaoRetry);
    expect(handleRetry).toHaveBeenCalledTimes(1);
  });

  it('deve renderizar ErrorBoundary utilizando ErrorState quando houver erro no componente filho', () => {
    const ComponenteComErro = () => {
      throw new Error('Falha simulada para o ErrorBoundary');
    };

    // Suprime erro temporariamente no console do vitest
    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ComponenteComErro />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toBeDefined();
    expect(screen.getByText(/Algo inesperado aconteceu/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Recarregar Página/i })).toBeDefined();

    console.error = originalError;
  });
});
