/** @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExerciseRenderer } from '../components/review/ExerciseRenderer';
import { F5Associacao } from '../components/review/formats/F5Associacao';
import { ItemCE } from '../components/common/ItemCE';
import type { Concept } from '../domain/concepts/types';
import { migrarReviewPrefilledAttempts } from '../domain/migracaoTentativas';
import type { ItemAttempt } from '../domain/itemAttempts';
import { useProgressStore } from '../store/useProgressStore';

describe('W1 - Bug de Revisão com Questões Já Respondidas e Vazamento de Gabarito', () => {
  const mockConceito: Concept = {
    id: 'cp-1-1-1',
    topico: 'Conceito de Borko',
    submoduloId: '1.1',
    moduloId: 'm1',
    enunciadoCanonic: 'A Ciência da Informação é definida como a disciplina que investiga as propriedades e o fluxo.',
    gabaritoCanonic: 'C',
    justificativaCanonic: 'Definição clássica de Borko (1968).',
    armadilhaCebraspe: 'Inversão com Biblioteconomia tradicional.',
    nivelDificuldade: 'medio',
    formatosDisponiveis: ['f1_ce_simples', 'f5_associacao'],
    variantesFormatos: { f5_associacao: {formatId:'f5_associacao',prompt:'Associe',respostaCorreta:'todos',associacao:{pares:[{ladoA:'Autor',ladoB:'Borko'},{ladoA:'Campo',ladoB:'Ciência da Informação'}]}} },
  };

  beforeEach(() => {
    useProgressStore.getState().limparTodoProgresso();
  });

  it('Correção 1: F5Associacao NUNCA deve expor "Gabarito Oficial Canônico" nas opções antes da resposta', () => {
    const onResponder = vi.fn();
    render(
      <F5Associacao
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    // O texto "Gabarito Oficial Canônico" ou o gabarito literal CERTO/ERRADO não pode estar visível como resposta nas opções
    const gabaritoVazado = screen.queryByText(/Gabarito Oficial Canônico/i);
    expect(gabaritoVazado).toBeNull();

    // Deve exibir rótulos pedagógicos conceituais seguros
    expect(screen.getByRole('combobox',{name:'Associação 1: Autor'})).toBeDefined();
    expect(screen.getByRole('combobox',{name:'Associação 2: Campo'})).toBeDefined();
  });

  it('Correção 2: ExerciseRenderer deve abrir SEM feedback ou resposta prévia e registrar confiança', () => {
    const onConcluir = vi.fn();
    render(
      <ExerciseRenderer
        conceito={mockConceito}
        formato="f1_ce_simples"
        indiceAtual={1}
        totalItens={5}
        onConcluirItem={onConcluir}
      />
    );

    // 1. O item abre sem resposta prévia e sem feedback (não pré-respondido)
    expect(screen.queryByText(/Julgamento Correto/i)).toBeNull();
    expect(screen.queryByText(/Julgamento Incorreto/i)).toBeNull();
    expect(screen.queryByText(/Definição clássica de Borko/i)).toBeNull();
    expect(screen.queryByText(/Aferição Metacognitiva de Confiança/i)).toBeNull();

    fireEvent.click(screen.getByRole('button', {name:/Confiança: Certeza/i}));
    // 2. Aluno clica em CERTO
    const botaoCerto = screen.getByRole('button', { name: /CERTO/i });
    fireEvent.click(botaoCerto);

    // 3. Após responder, a autoverificação de confiança e o feedback são exibidos
    expect(screen.queryByRole('button',{name:/Confiança: Certeza/i})).toBeNull();
    expect(screen.getByText(/Resposta correta!/i)).toBeDefined();
    expect(screen.getByText(/Definição clássica de Borko/i)).toBeDefined();

    // 4. Aluno calibra a confiança (ex: Certeza)
    // Confiança já registrada antes do resultado.

    // 5. Aluno avança para o próximo item
    const botaoAvancar = screen.getByRole('button', { name: /Próximo Item/i });
    fireEvent.click(botaoAvancar);

    expect(onConcluir).toHaveBeenCalledWith(
      expect.objectContaining({
        respostaDada: 'C',
        acertou: true,
        confianca: 'certeza',
      })
    );
  });

  it('Correção 3: ItemCE com forcarRetesteAtivo abre limpo para recuperação ativa mesmo havendo tentativa anterior', async () => {
    // Registra tentativa prévia simulando o bug
    await useProgressStore.getState().adicionarItemAttempt({
      itemId: 'cp-1-1-1',
      submoduloId: '1.1',
      moduloId: 'm1',
      contexto: 'teoria',
      resposta: 'C',
      gabarito: 'C',
    });

    render(
      <ItemCE
        item={{
          id: 'cp-1-1-1',
          numero: 1,
          submoduloId: '1.1',
          moduloId: 'm1',
          enunciado: 'A Ciência da Informação investiga as propriedades e fluxos.',
          gabarito: 'C',
          justificativa: 'Definição clássica de Borko.',
        }}
        contexto="revisao"
        forcarRetesteAtivo={true}
      />
    );

    // O item não deve exibir feedback nem justificativa imediatamente
    expect(screen.queryByText(/Definição clássica de Borko/i)).toBeNull();
    expect(screen.queryByText(/Você acertou/i)).toBeNull();
  });

  it('Correção 4: migrarReviewPrefilledAttempts marca tentativas anteriores sem apagar o histórico do aluno', () => {
    const attemptsLegadas: ItemAttempt[] = [
      {
        id: 'att-1',
        user_id: 'user-1',
        item_id: 'item-1',
        submodulo_id: '1.1',
        modulo_id: 'm1',
        contexto: 'revisao',
        resposta: 'C',
        correto: true,
        tentativa_n: 1,
        criado_em: '2026-10-18T10:00:00Z',
      },
      {
        id: 'att-2',
        user_id: 'user-1',
        item_id: 'item-2',
        submodulo_id: '1.1',
        modulo_id: 'm1',
        contexto: 'simulado',
        resposta: 'E',
        correto: false,
        tentativa_n: 1,
        criado_em: '2026-10-18T11:00:00Z',
      },
    ];

    const resultado = migrarReviewPrefilledAttempts(attemptsLegadas);

    expect(resultado.migrado).toBe(true);
    expect(resultado.totalMarcados).toBe(1);
    expect(resultado.attemptsAtualizadas[0].review_prefilled).toBe(true);
    // Preserva a tentativa de simulado inalterada
    expect(resultado.attemptsAtualizadas[1].review_prefilled).toBeUndefined();
    // Preserva 100% dos dados originais
    expect(resultado.attemptsAtualizadas.length).toBe(2);
  });
});
