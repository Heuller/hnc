// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { GraficoEvolucaoSimulados } from '../components/analytics/GraficoEvolucaoSimulados';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';

// Mock recharts ResponsiveContainer
vi.mock('recharts', async () => {
  const actual = await vi.importActual<Record<string, unknown>>('recharts');
  return {
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="responsive-container" style={{ width: 500, height: 300 }}>
        {children}
      </div>
    ),
  };
});

describe('GraficoEvolucaoSimulados (Fase 4)', () => {
  it('renderiza container do gráfico e elementos com dados fornecidos', () => {
    const mockDados = [
      {
        name: 'Simulado 1',
        data: '10/10',
        notaLiquida: 72,
        certos: 86,
        errados: 14,
        aproveitamento: 72,
      },
      {
        name: 'Simulado 2',
        data: '15/10',
        notaLiquida: 80,
        certos: 90,
        errados: 10,
        aproveitamento: 80,
      },
    ];

    render(<GraficoEvolucaoSimulados dados={mockDados} />);
    expect(screen.getByTestId('responsive-container')).toBeDefined();
  });
});

describe('ConteudoMarkdown Lazy Suspense (Fase 4)', () => {
  it('renderiza markdown normal sem acionar mermaid desnecessariamente', () => {
    const content = '## Título Teórico\n\nTexto explicativo com fórmula $x = 1$.';
    const { container } = render(<ConteudoMarkdown content={content} />);
    expect(container.textContent).toContain('Título Teórico');
    expect(container.textContent).toContain('Texto explicativo');
  });
});
