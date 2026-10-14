// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActiveRetrievalExercises } from '../components/content-blocks/ActiveRetrievalExercises';
import type { MnemonicoAutorCard } from '../domain/schemas/mnemonico.schema';

describe('ActiveRetrievalExercises - Resolução Dinâmica de Pares (U0.2)', () => {
  it('exibe mensagem correta com 3 pares de autores associados', () => {
    const autores3: MnemonicoAutorCard[] = [
      {
        id: 'a1',
        nome: 'Paul Otlet',
        ano: 1934,
        obraPrincipal: 'Tratado de Documentação',
        ideiaChave: 'Tratado de Documentação',
        chipPegadinha: 'Otlet não criou a CDD',
      },
      {
        id: 'a2',
        nome: 'Suzanne Briet',
        ano: 1951,
        obraPrincipal: 'Qu\'est-ce que la documentation?',
        ideiaChave: 'Antílope como documento',
        chipPegadinha: 'Briet não restringiu a livros',
      },
      {
        id: 'a3',
        nome: 'Harold Borko',
        ano: 1968,
        obraPrincipal: 'Information Science',
        ideiaChave: 'Definição fundacional da CI',
        chipPegadinha: 'Borko em 1968, não 1950',
      },
    ];

    render(
      <ActiveRetrievalExercises
        submoduloNumero="1.1"
        autores={autores3}
        timeline={[]}
        pegadinhas={[]}
      />
    );

    // Associa par 1: Paul Otlet
    fireEvent.click(screen.getByLabelText('Autor Paul Otlet'));
    fireEvent.click(screen.getByLabelText(/Conceito.*Tratado de Documentação/));

    // Associa par 2: Suzanne Briet
    fireEvent.click(screen.getByLabelText('Autor Suzanne Briet'));
    fireEvent.click(screen.getByLabelText(/Conceito.*Antílope como documento/));

    // Associa par 3: Harold Borko
    fireEvent.click(screen.getByLabelText('Autor Harold Borko'));
    fireEvent.click(screen.getByLabelText(/Conceito.*Definição fundacional/));

    // Verifica que a mensagem diz "Todos os 3 pares" e NÃO "4 pares"
    expect(
      screen.getByText(/Excelente! Todos os 3 pares foram associados corretamente\./i)
    ).toBeDefined();
    expect(
      screen.queryByText(/Todos os 4 pares/i)
    ).toBeNull();
  });

  it('exibe mensagem correta com 5 pares de autores associados', () => {
    const autores5: MnemonicoAutorCard[] = [
      {
        id: 'a1',
        nome: 'Autor A',
        ano: 1900,
        obraPrincipal: 'Obra A',
        ideiaChave: 'Conceito Alfa',
        chipPegadinha: 'Chip A',
      },
      {
        id: 'a2',
        nome: 'Autor B',
        ano: 1910,
        obraPrincipal: 'Obra B',
        ideiaChave: 'Conceito Beta',
        chipPegadinha: 'Chip B',
      },
      {
        id: 'a3',
        nome: 'Autor C',
        ano: 1920,
        obraPrincipal: 'Obra C',
        ideiaChave: 'Conceito Gama',
        chipPegadinha: 'Chip C',
      },
      {
        id: 'a4',
        nome: 'Autor D',
        ano: 1930,
        obraPrincipal: 'Obra D',
        ideiaChave: 'Conceito Delta',
        chipPegadinha: 'Chip D',
      },
      {
        id: 'a5',
        nome: 'Autor E',
        ano: 1940,
        obraPrincipal: 'Obra E',
        ideiaChave: 'Conceito Epsilon',
        chipPegadinha: 'Chip E',
      },
    ];

    render(
      <ActiveRetrievalExercises
        submoduloNumero="1.2"
        autores={autores5}
        timeline={[]}
        pegadinhas={[]}
      />
    );

    const pairs = [
      ['Autor A', /Conceito.*Alfa/],
      ['Autor B', /Conceito.*Beta/],
      ['Autor C', /Conceito.*Gama/],
      ['Autor D', /Conceito.*Delta/],
      ['Autor E', /Conceito.*Epsilon/],
    ] as const;

    pairs.forEach(([author, conceptRegex]) => {
      fireEvent.click(screen.getByLabelText(`Autor ${author}`));
      fireEvent.click(screen.getByLabelText(conceptRegex));
    });

    // Verifica que a mensagem diz "Todos os 5 pares" e NÃO "4 pares"
    expect(
      screen.getByText(/Excelente! Todos os 5 pares foram associados corretamente\./i)
    ).toBeDefined();
    expect(
      screen.queryByText(/Todos os 4 pares/i)
    ).toBeNull();
  });
});
