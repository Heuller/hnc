/** @vitest-environment jsdom */
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';
import { ALL_COURSE_MODULES } from '../content/registry';

describe('U1.5 - Teste de Regressão Visual e Sintática do Motor de Conteúdo', () => {
  it('garante que moeda R$ e US$ permanece como texto literal e não vira fórmula KaTeX', () => {
    const { container } = render(
      <ConteudoMarkdown content="A remuneração inicial é de R$ 32.070,88 ou cerca de US$ 6.500,00." />
    );

    expect(container.querySelector('.katex')).toBeNull();
    expect(container.textContent).toContain('R$ 32.070,88');
    expect(container.textContent).toContain('US$ 6.500,00');
  });

  it('garante que expressões matemáticas com \\Delta, \\times, \\approx viram KaTeX e não expõem comandos crus', () => {
    const { container } = render(
      <ConteudoMarkdown content="Fórmula: $K[S] + \Delta I = K[S+\Delta S]$, além de $a \times b \approx n^2$ e $A \neq B$." />
    );

    expect(container.querySelector('.katex')).not.toBeNull();

    // Remove MathML acessível para validar o texto visível na tela
    const clone = container.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('.katex-mathml').forEach((el) => el.remove());
    const visibleText = clone.textContent || '';

    expect(visibleText).not.toContain('\\Delta');
    expect(visibleText).not.toContain('\\times');
    expect(visibleText).not.toContain('\\approx');
    expect(visibleText).not.toContain('\\neq');
    expect(visibleText).not.toContain('$');
  });

  it('garante que alertas estilo GitHub são convertidos em callouts em português e nenhum [! chega ao DOM', () => {
    const mdAlertas = `
> [!NOTE]
> Esta é uma nota explicativa.

> [!TIP]
> Esta é uma dica de estudo.

> [!IMPORTANT]
> Conteúdo de alta relevância.

> [!WARNING]
> Atenção com o enunciado.

> [!CAUTION]
> Casca de banana clássica da banca Cebraspe!
`;

    const { container } = render(<ConteudoMarkdown content={mdAlertas} />);

    expect(container.innerHTML).not.toContain('[!');
    expect(container.textContent).toContain('Nota');
    expect(container.textContent).toContain('Dica');
    expect(container.textContent).toContain('Importante');
    expect(container.textContent).toContain('Atenção');
    expect(container.textContent).toContain('Casca de banana');
  });

  describe('Varredura e Renderização de Cada Submódulo do Acervo', () => {
    ALL_COURSE_MODULES.forEach((macro) => {
      macro.modulosFilhos.forEach((sub) => {
        it(`[${sub.id}] "${sub.titulo}" deve renderizar sem comandos crus (\\Delta, \\times, \\approx, [!) nem cifrões matemáticos desbalanceados`, () => {
          const { container } = render(<ConteudoMarkdown content={sub.teoriaDensaMarkdown} />);

          // Clona o nó para inspeção sem alterar o container do teste
          const clone = container.cloneNode(true) as HTMLElement;

          // 1. Remove .katex-mathml (mantém o HTML visual de alta fidelidade)
          clone.querySelectorAll('.katex-mathml').forEach((el) => el.remove());

          // 2. Remove blocos e spans de código (exemplos de código MARC ou sintaxe literal)
          clone.querySelectorAll('pre, code').forEach((el) => el.remove());

          const visibleText = clone.textContent || '';

          // Valida que nenhum alerta [! vazou para o texto visível
          expect(visibleText, `Submódulo ${sub.id} não deve expor [!`).not.toContain('[!');

          // Valida que nenhum comando TeX canônico vazou como texto plano não compilado
          expect(visibleText, `Submódulo ${sub.id} não deve expor \\Delta cru`).not.toContain('\\Delta');
          expect(visibleText, `Submódulo ${sub.id} não deve expor \\times cru`).not.toContain('\\times');
          expect(visibleText, `Submódulo ${sub.id} não deve expor \\approx cru`).not.toContain('\\approx');

          // Valida que não há cifrões soltos no texto visível fora de moedas (R$ ou US$)
          // Substitui menções legítimas de moeda (R$ ou US$) antes de checar por cifrão solto
          const textoSemMoeda = visibleText.replace(/(?:R|US)\$\s*[\d.,]+/g, '');
          expect(textoSemMoeda, `Submódulo ${sub.id} não deve conter cifrões soltos`).not.toContain('$');
        });
      });
    });
  });
});
