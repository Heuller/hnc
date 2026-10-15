// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';
import { protegerCifraoMoeda, normalizarAlertasGithub } from '../utils/markdownProcessors';

describe('U1.1 & U1.2 & U1.3 - ConteudoMarkdown: KaTeX, Moeda e Callouts', () => {
  describe('Renderização Estrutural de Títulos e Listas (U1.1)', () => {
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

    it('deve renderizar tabelas e código inline', () => {
      const md = `
| Critério | Cebraspe | Doutrina |
| :--- | :--- | :--- |
| Escopo | Estrito | Amplo |

Use a variável \`CDD_23\` para classificação.
      `;

      render(<ConteudoMarkdown content={md} />);

      expect(screen.getAllByText('Critério').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Cebraspe').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Doutrina').length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText('CDD_23')).toBeDefined();
    });
  });

  describe('Renderização de KaTeX e Proteção a Moeda Real (U1.2)', () => {
    it('deve proteger R$ e US$ para que apareçam como texto literal sem virar KaTeX', () => {
      const md = 'A remuneração inicial é de R$ 32.070,88 e a taxa é de R$ 130,00.';
      const { container } = render(<ConteudoMarkdown content={md} />);

      // Não pode haver span .katex envolvendo o valor monetário
      expect(screen.getByText(/32\.070,88/)).toBeDefined();
      expect(screen.getByText(/130,00/)).toBeDefined();
      expect(container.querySelectorAll('.katex').length).toBe(0);
    });

    it('deve renderizar fórmulas matemáticas com KaTeX (.katex)', () => {
      const md = 'A complexidade algorítmica é $n^2$ e a equação é $K[S] + \\Delta I = K[S+\\Delta S]$.';
      const { container } = render(<ConteudoMarkdown content={md} />);

      const katexElements = container.querySelectorAll('.katex');
      expect(katexElements.length).toBeGreaterThanOrEqual(2);
    });

    it('utilitário protegerCifraoMoeda deve manter fórmulas LaTeX e proteger moedas', () => {
      const raw = 'Salário R$ 32.070,88, custo US$ 45 e fórmula $E = mc^2$.';
      const protegido = protegerCifraoMoeda(raw);
      expect(protegido).toContain('R\\$ 32.070,88');
      expect(protegido).toContain('US\\$ 45');
      expect(protegido).toContain('$E = mc^2$');
    });
  });

  describe('Callouts estilo GitHub em Português (U1.3)', () => {
    it('deve renderizar [!CAUTION] como "Casca de banana" e nunca exibir "[!" no DOM', () => {
      const md = `
> [!CAUTION]
> Cuidado com a pegadinha da banca sobre Briet e o antílope!
      `;

      const { container } = render(<ConteudoMarkdown content={md} />);

      expect(screen.getByText('Casca de banana')).toBeDefined();
      expect(screen.getByText(/Cuidado com a pegadinha da banca sobre Briet e o antílope!/i)).toBeDefined();
      expect(container.textContent).not.toContain('[!');
      expect(container.textContent).not.toContain('CAUTION');
    });

    it('deve renderizar [!NOTE], [!TIP], [!IMPORTANT] e [!WARNING] com títulos em português', () => {
      const md = `
> [!NOTE]
> Esta é uma nota técnica importante.

> [!TIP]
> Dica para memorizar os princípios de Ranganathan.

> [!IMPORTANT]
> A ABNT NBR 6023 foi atualizada em 2025.

> [!WARNING]
> Atenção aos critérios eliminatórios da prova discursiva.
      `;

      const { container } = render(<ConteudoMarkdown content={md} />);

      expect(screen.getByText('Nota')).toBeDefined();
      expect(screen.getByText('Dica')).toBeDefined();
      expect(screen.getByText('Importante')).toBeDefined();
      expect(screen.getByText('Atenção')).toBeDefined();
      expect(container.textContent).not.toContain('[!');
    });

    it('normalizarAlertasGithub converte todos os tipos esperados', () => {
      const text = '> [!NOTE]\n> [!TIP]\n> [!IMPORTANT]\n> [!WARNING]\n> [!CAUTION]';
      const res = normalizarAlertasGithub(text);
      expect(res).toContain('[[CALLOUT:note]]');
      expect(res).toContain('[[CALLOUT:tip]]');
      expect(res).toContain('[[CALLOUT:important]]');
      expect(res).toContain('[[CALLOUT:warning]]');
      expect(res).toContain('[[CALLOUT:caution]]');
    });
  });
});
