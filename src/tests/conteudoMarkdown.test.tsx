// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';

describe('U1.1 - Unificação de Leitores em ConteudoMarkdown', () => {
  it('deve renderizar títulos com hierarquia correta', () => {
    const md = `
# Título Principal H1
## Seção H2
### Subseção H3
#### Tópico H4
Texto normal de parágrafo explicativo.
    `;

    render(<ConteudoMarkdown content={md} />);

    expect(screen.getByRole('heading', { level: 1, name: /Título Principal H1/i })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Seção H2/i })).toBeDefined();
    expect(screen.getByRole('heading', { level: 3, name: /Subseção H3/i })).toBeDefined();
    expect(screen.getByRole('heading', { level: 4, name: /Tópico H4/i })).toBeDefined();
    expect(screen.getByText(/Texto normal de parágrafo explicativo/i)).toBeDefined();
  });

  it('deve renderizar listas ordenadas e não ordenadas', () => {
    const md = `
* Item A
* Item B

1. Primeiro passo
2. Segundo passo
    `;

    render(<ConteudoMarkdown content={md} />);

    expect(screen.getByText('Item A')).toBeDefined();
    expect(screen.getByText('Item B')).toBeDefined();
    expect(screen.getByText('Primeiro passo')).toBeDefined();
    expect(screen.getByText('Segundo passo')).toBeDefined();
  });

  it('deve renderizar tabelas e código inline', () => {
    const md = `
| Critério | Cebraspe | Doutrina |
| :--- | :--- | :--- |
| Escopo | Estrito | Amplo |

Use a variável \`CDD_23\` para classificação.
    `;

    render(<ConteudoMarkdown content={md} />);

    expect(screen.getByText('Critério')).toBeDefined();
    expect(screen.getByText('Cebraspe')).toBeDefined();
    expect(screen.getByText('Doutrina')).toBeDefined();
    expect(screen.getByText('CDD_23')).toBeDefined();
  });
});
