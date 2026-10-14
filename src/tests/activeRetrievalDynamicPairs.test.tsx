// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActiveRetrievalExercises } from '../components/content-blocks/ActiveRetrievalExercises';

describe('ActiveRetrievalExercises - Resolução Dinâmica de Pares (U0.2)', () => {
  it('exibe mensagem correta com 3 pares de autores associados', () => {
    const autores3 = [
      { nome: 'Paul Otlet', ideiaChave: 'Tratado de Documentação' },
      { nome: 'Suzanne Briet', ideiaChave: 'Antílope como documento' },
      { nome: 'Harold Borko', ideiaChave: 'Definição fundacional da CI' },
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
    const autores5 = [
      { nome: 'Autor A', ideiaChave: 'Conceito Alfa' },
      { nome: 'Autor B', ideiaChave: 'Conceito Beta' },
      { nome: 'Autor C', ideiaChave: 'Conceito Gama' },
      { nome: 'Autor D', ideiaChave: 'Conceito Delta' },
      { nome: 'Autor E', ideiaChave: 'Conceito Epsilon' },
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
