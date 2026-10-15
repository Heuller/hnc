// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TabelaResponsiva } from '../components/common/TabelaResponsiva';
import { extractTableDataFromChildren } from '../utils/tableProcessors';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';
import { MnemonicosDrawerMobile } from '../components/content-blocks/MnemonicosDrawerMobile';

describe('U1.6: TabelaResponsiva e Prevenção de Quebras no Mobile (D6)', () => {
  const mockHeaders = ['Afirmação Típica da Banca', 'Gabarito', 'Erro Crítico / Armadilha Oculta'];
  const mockRows = [
    [
      'A Ciência da Informação surgiu na Antiguidade clássica em Alexandria.',
      'ERRADO',
      'Confunde CI com Biblioteconomia antiga. A CI surgiu após a Segunda Guerra Mundial.',
    ],
    [
      'Harold Borko definiu a Biblioteconomia em 1968.',
      'ERRADO',
      'A definição canônica de Borko (1968) é de Ciência da Informação.',
    ],
  ];

  it('deve renderizar a tabela com cabeçalhos com whitespace-nowrap para prevenir quebras como GABARI TO', () => {
    const { container } = render(
      <TabelaResponsiva
        colunas={mockHeaders}
        linhas={mockRows}
        titulo="Quadro de Distratores Típicos"
      />
    );

    // Verifica que o título está presente
    expect(screen.getByText('Quadro de Distratores Típicos')).toBeTruthy();

    // Verifica que na tabela desktop os cabeçalhos curtos contêm whitespace-nowrap
    const thGabarito = screen.getByRole('columnheader', { name: /Gabarito/i });
    expect(thGabarito).toBeTruthy();
    expect(thGabarito.className).toContain('whitespace-nowrap');

    // Garante que o texto completo 'Gabarito' não foi quebrado
    expect(container.textContent).toContain('Gabarito');
    expect(container.textContent).not.toContain('GABARI TO');
  });

  it('deve gerar cartões empilhados (data-testid="tabela-responsiva-cards") para telas móveis (< 640px)', () => {
    render(
      <TabelaResponsiva
        colunas={mockHeaders}
        linhas={mockRows}
      />
    );

    const mobileCardsContainer = screen.getByTestId('tabela-responsiva-cards');
    expect(mobileCardsContainer).toBeTruthy();
    expect(mobileCardsContainer.className).toContain('sm:hidden');

    // Cada linha deve ser um cartão com os dados rotulados
    const cards = mobileCardsContainer.children;
    expect(cards.length).toBe(2);

    // Primeiro cartão contém a afirmação e os rótulos de coluna
    expect(cards[0].textContent).toContain('Afirmação Típica da Banca');
    expect(cards[0].textContent).toContain('Alexandria');
    expect(cards[0].textContent).toContain('Gabarito');
    expect(cards[0].textContent).toContain('ERRADO');
    expect(cards[0].textContent).toContain('Erro Crítico / Armadilha Oculta');
  });

  it('deve renderizar badges formatados para itens de Gabarito (ERRADO / CERTO)', () => {
    render(
      <TabelaResponsiva
        colunas={['Critério', 'Gabarito', 'Nota']}
        linhas={[
          ['Item 1', 'ERRADO', 'Pegadinha da banca'],
          ['Item 2', 'CERTO', 'Afirmação canônica'],
        ]}
      />
    );

    // Badges no DOM (tanto desktop quanto mobile)
    const errados = screen.getAllByText('ERRADO');
    expect(errados.length).toBeGreaterThanOrEqual(2);

    const certos = screen.getAllByText('CERTO');
    expect(certos.length).toBeGreaterThanOrEqual(2);
  });

  it('deve extrair dados corretamente a partir de JSX nativo de children (thead/tbody/Fragment)', () => {
    const tableJsx = (
      <>
        <thead>
          <tr>
            <th>Coluna A</th>
            <th>Coluna B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dado 1</td>
            <td>Dado 2</td>
          </tr>
        </tbody>
      </>
    );

    const extracted = extractTableDataFromChildren(tableJsx);
    expect(extracted.headers).toEqual(['Coluna A', 'Coluna B']);
    expect(extracted.rows).toEqual([['Dado 1', 'Dado 2']]);
  });

  it('deve renderizar tabelas markdown dentro de ConteudoMarkdown usando TabelaResponsiva', () => {
    const markdownContent = `
### Quadro de Distratores Típicos

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"Otlet propôs manter o livro intacto."* | **ERRADO** | Propunha o Princípio Monográfico (desmembrar o livro). |
| *"Suzanne Briet limitou documento ao papel."* | **ERRADO** | Ampliou para qualquer objeto físico/natural (antílope). |
`;

    const { container } = render(<ConteudoMarkdown content={markdownContent} />);

    // Deve conter a visão mobile em cartões
    const mobileCards = screen.getByTestId('tabela-responsiva-cards');
    expect(mobileCards).toBeTruthy();
    expect(mobileCards.textContent).toContain('Otlet propôs manter o livro intacto');
    expect(mobileCards.textContent).toContain('ERRADO');
    expect(mobileCards.textContent).toContain('Princípio Monográfico');

    // Deve conter a visão desktop em tabela
    const ths = container.querySelectorAll('th');
    expect(ths.length).toBe(3);
    expect(ths[1].textContent).toBe('Gabarito');
    expect(ths[1].className).toContain('whitespace-nowrap');

    // Zero vazamentos de palavras quebradas
    expect(container.textContent).not.toContain('GABARI TO');
  });

  it('deve garantir que MnemonicosDrawerMobile não use FAB flutuante fixo sobre o texto e possua md:hidden', () => {
    const mockMnemonicos = {
      timeline: [
        {
          id: 't1',
          periodo: '1934',
          disciplina: 'Documentação',
          focoPrincipal: 'Tratado de Documentação',
          figuraChave: 'Paul Otlet',
        },
      ],
      autores: [
        {
          id: 'a1',
          nome: 'Paul Otlet',
          ano: '1934',
          obraPrincipal: 'Traité de Documentation',
          ideiaChave: 'Princípio Monográfico',
          chipPegadinha: 'Confundir com enciclopedismo clássico',
        },
      ],
      pegadinhas: [
        {
          id: 'p1',
          afirmacao: 'Otlet defendia manter o livro físico inviolável.',
          gabarito: 'E' as const,
          porQue: 'Propunha o Princípio Monográfico de decomposição.',
        },
      ],
    };

    const { container } = render(
      <MnemonicosDrawerMobile
        mnemonicos={mockMnemonicos}
        tituloModulo="Submódulo 1.1"
      />
    );

    // Deve possuir classe md:hidden para ser exclusivo do mobile
    const rootEl = container.firstElementChild;
    expect(rootEl?.className).toContain('md:hidden');

    // Não deve possuir classes de FAB fixo flutuante sobre a tela
    expect(rootEl?.className).not.toContain('bottom-[calc');
    expect(rootEl?.className).not.toContain('fixed z-30');
    expect(screen.getByRole('button', { name: /Abrir Resumo e Mnemônicos/i })).toBeTruthy();
  });
});
