// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { Concept } from '../domain/concepts/types';
import { F1CeSimples } from '../components/review/formats/F1CeSimples';
import { F2ComJustificativa } from '../components/review/formats/F2ComJustificativa';
import { F3IdentificacaoErro } from '../components/review/formats/F3IdentificacaoErro';
import { F4PreenchimentoLacunas } from '../components/review/formats/F4PreenchimentoLacunas';
import { F5Associacao } from '../components/review/formats/F5Associacao';
import { F6CasoPratico } from '../components/review/formats/F6CasoPratico';
import { F7FlashcardAtivo } from '../components/review/formats/F7FlashcardAtivo';
import { F8InversaoPapeis } from '../components/review/formats/F8InversaoPapeis';
import { ConfidenceSelector } from '../components/review/ConfidenceSelector';
import { ExerciseRenderer } from '../components/review/ExerciseRenderer';

const mockConceito: Concept = {
  id: 'c_2.5_cp1',
  submoduloId: '2.5',
  moduloId: 'm2',
  topico: 'MARC 21 e Catalogação',
  enunciadoCanonic: 'No formato MARC 21 Bibliográfico, o campo 245 destina-se ao registro do título e da indicação de responsabilidade.',
  gabaritoCanonic: 'C',
  justificativaCanonic: 'O campo 245 é canônico e abriga o título principal e suas indicações de autoria.',
  armadilhaCebraspe: 'A banca costuma inverter 245 (Título) com 260 (Publicação).',
  nivelDificuldade: 'medio',
  formatosDisponiveis: [
    'f1_ce_simples',
    'f2_com_justificativa',
    'f3_identificacao_erro',
    'f4_preenchimento_lacunas',
    'f5_associacao',
    'f6_caso_pratico',
    'f7_flashcard_ativo',
    'f8_inversao_papeis',
  ],
  variantesFormatos: {
    f4_preenchimento_lacunas: {
      formatId: 'f4_preenchimento_lacunas',
      prompt: 'Complete a lacuna',
      respostaCorreta: '245',
      lacunas: {
        textoComLacuna: 'No formato MARC 21, o campo _____ abriga o título.',
        respostaCorreta: '245',
        distratores: ['260', '300', '100'],
      },
    },
  },
};

describe('Componentes dos 8 Formatos de Exercício F1 a F8 (Marco R3)', () => {
  it('F1CeSimples deve renderizar assertiva e botões C/E', () => {
    const onResponder = vi.fn();
    render(
      <F1CeSimples
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    expect(screen.getByText(/campo 245 destina-se/i)).toBeTruthy();
    const btnC = screen.getByRole('button', { name: /Julgar como CERTO/i });
    fireEvent.click(btnC);
    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('F2ComJustificativa deve solicitar julgamento e depois escolha de justificativa', () => {
    const onResponder = vi.fn();
    render(
      <F2ComJustificativa
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    const btnCerto = screen.getByText('CERTO');
    fireEvent.click(btnCerto);

    // Deve exibir o segundo passo
    expect(screen.getByText(/Selecione a justificativa canônica/i)).toBeTruthy();
    const btnJust = screen.getByText(/O campo 245 é canônico/i);
    fireEvent.click(btnJust);

    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('F3IdentificacaoErro deve renderizar caça ao erro', () => {
    const onResponder = vi.fn();
    render(
      <F3IdentificacaoErro
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    expect(screen.getByText(/Caça ao Erro Cebraspe/i)).toBeTruthy();
    const btn = screen.getByText(/A assertiva inverteu ou distorceu/i);
    fireEvent.click(btn);
    expect(onResponder).toHaveBeenCalled();
  });

  it('F4PreenchimentoLacunas deve exibir o texto com lacuna e alternativas', () => {
    const onResponder = vi.fn();
    render(
      <F4PreenchimentoLacunas
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    expect(screen.getByText(/o campo _____ abriga o título/i)).toBeTruthy();
    const btnCorreto = screen.getByText('245');
    fireEvent.click(btnCorreto);
    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('F5Associacao deve renderizar opções de associação conceitual', () => {
    const onResponder = vi.fn();
    render(
      <F5Associacao
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    expect(screen.getByText(/Associação Conceitual/i)).toBeTruthy();
    const btn = screen.getByText('MARC 21 e Catalogação');
    fireEvent.click(btn);
    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('F6CasoPratico deve contextualizar a Biblioteca da Câmara dos Deputados', () => {
    const onResponder = vi.fn();
    render(
      <F6CasoPratico
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    expect(screen.getAllByText(/Biblioteca da Câmara dos Deputados/i).length).toBeGreaterThan(0);
    const btnC = screen.getByRole('button', { name: /CERTO/i });
    fireEvent.click(btnC);
    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('F7FlashcardAtivo deve ocultar assertiva inicialmente e revelar sob demanda', () => {
    const onResponder = vi.fn();
    render(
      <F7FlashcardAtivo
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    // Assertiva não está visível antes de clicar no botão de revelar
    expect(screen.queryByText(/Assertiva da Banca Cebraspe:/i)).toBeNull();

    const btnRevelar = screen.getByRole('button', { name: /Revelar Assertiva/i });
    fireEvent.click(btnRevelar);

    // Agora está visível
    expect(screen.getByText(/Assertiva da Banca Cebraspe:/i)).toBeTruthy();
    const btnC = screen.getByRole('button', { name: /CERTO/i });
    fireEvent.click(btnC);
    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('F8InversaoPapeis deve apresentar alternativas de pegadinha da banca', () => {
    const onResponder = vi.fn();
    render(
      <F8InversaoPapeis
        conceito={mockConceito}
        respondido={false}
        onResponder={onResponder}
      />
    );

    expect(screen.getByText(/Você é o Examinador Cebraspe/i)).toBeTruthy();
    const btnFactual = screen.getByText(/Assertiva factual estritamente aderente/i);
    fireEvent.click(btnFactual);
    expect(onResponder).toHaveBeenCalledWith('C');
  });

  it('ConfidenceSelector deve permitir seleção de Certeza, Dúvida e Chute', () => {
    const onSelecionar = vi.fn();
    render(<ConfidenceSelector onSelecionar={onSelecionar} />);

    fireEvent.click(screen.getByRole('button', { name: /Confiança: Certeza/i }));
    expect(onSelecionar).toHaveBeenCalledWith('certeza');

    fireEvent.click(screen.getByRole('button', { name: /Confiança: Dúvida/i }));
    expect(onSelecionar).toHaveBeenCalledWith('duvida');

    fireEvent.click(screen.getByRole('button', { name: /Confiança: Chute/i }));
    expect(onSelecionar).toHaveBeenCalledWith('chute');
  });

  it('ExerciseRenderer deve orquestrar julgamento, confiança e feedback de avanço', () => {
    const onConcluir = vi.fn();
    render(
      <ExerciseRenderer
        conceito={mockConceito}
        formato="f1_ce_simples"
        indiceAtual={1}
        totalItens={10}
        onConcluirItem={onConcluir}
      />
    );

    // 1. Julgamento
    const btnC = screen.getByRole('button', { name: /Julgar como CERTO/i });
    fireEvent.click(btnC);

    // 2. Feedback deve ser exibido com fator de correção Cebraspe
    expect(screen.getByText(/Julgamento Correto!/i)).toBeTruthy();
    expect(screen.getByText(/\+1,00 pt líq\./i)).toBeTruthy();
    expect(screen.getByText(/Justificativa Canônica/i)).toBeTruthy();

    // 3. Autoverificação de Confiança
    const btnChute = screen.getByRole('button', { name: /Confiança: Certeza/i });
    fireEvent.click(btnChute);

    // 4. Conclusão / Avanço
    const btnAvancar = screen.getByRole('button', { name: /Próximo Item/i });
    fireEvent.click(btnAvancar);

    expect(onConcluir).toHaveBeenCalledWith({
      respostaDada: 'C',
      acertou: true,
      confianca: 'certeza',
      tempoSegundos: expect.any(Number),
    });
  });
});
