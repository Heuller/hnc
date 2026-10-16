// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  ExercicioRenderer,
  ExercicioX1PreTeste,
  ExercicioX2CertoErrado,
  ExercicioX3Correcao,
  ExercicioX4BrainDump,
  ExercicioX5ParConfundivel,
  ExercicioX6CompletarExemplo,
  ExercicioX7OrdenarProcedimento,
  ExercicioX8ItensSuporte,
  ExercicioX9CacaErro,
  ExercicioX10Associacao,
} from '../components/exercicios';
import type {
  ExercicioX1,
  ExercicioX2,
  ExercicioX3,
  ExercicioX4,
  ExercicioX5,
  ExercicioX6,
  ExercicioX7,
  ExercicioX8,
  ExercicioX9,
  ExercicioX10,
  Checkpoint,
} from '../domain/schemas/modulo.schema';

describe('U4.2: Componentes de Exercícios de Interface (X1 a X10)', () => {
  // -------------------------------------------------------------
  // X1: Pré-teste
  // -------------------------------------------------------------
  it('X1: Renderiza pré-teste sem nota e exibe feedback de ativação', () => {
    const onResponder = vi.fn();
    const x1: ExercicioX1 = {
      id: 'x1-1',
      tipo: 'X1',
      enunciado: 'Qual a diferença central entre metadado e dado?',
      gabarito: 'C',
      justificativa: 'Metadados são dados estruturados sobre outros dados.',
      fonte: 'Manual de Catalogação',
      editalRef: 'Item 4.1',
      semNota: true,
      conceitoChave: 'Metadados estruturados',
    };

    render(<ExercicioX1PreTeste exercicio={x1} onResponder={onResponder} />);

    expect(screen.getByText(/Pré-teste de Ativação/i)).toBeTruthy();
    expect(screen.getByText(/Sem nota nem penalidade/i)).toBeTruthy();

    // Clica em CERTO
    const btnCerto = screen.getByRole('button', { name: /CERTO/i });
    fireEvent.click(btnCerto);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x1-1',
        tipo: 'X1',
        acertou: true,
        respostaDada: 'C',
      })
    );
    expect(screen.getByText(/dados estruturados sobre outros dados/i)).toBeTruthy();
  });

  // -------------------------------------------------------------
  // X2: Certo / Errado com confiança
  // -------------------------------------------------------------
  it('X2: Renderiza item Certo/Errado com atalhos de teclado e seletor de confiança', () => {
    const onResponder = vi.fn();
    const x2: ExercicioX2 = {
      id: 'x2-1',
      tipo: 'X2',
      enunciado: 'No Cebraspe, a regra de descarte dispensa autorização prévia da comissão de avaliação.',
      gabarito: 'E',
      justificativa: 'O descarte documental exige autorização prévia por instrumento legal de avaliação.',
      versao_correta: 'O descarte documental exige obrigatoriamente a autorização da comissão permanente.',
      armadilhaBanca: 'Inversão da obrigatoriedade do termo de eliminação.',
      fonte: 'Lei nº 8.159/1991',
      editalRef: 'Item 2.3',
      nivelConfianca: true,
    };

    render(<ExercicioX2CertoErrado exercicio={x2} onResponder={onResponder} />);

    expect(screen.getByText(/Padrão Cebraspe/i)).toBeTruthy();

    // Julgamento via clique em ERRADO
    const btnErrado = screen.getByLabelText(/Julgar assertiva como Errado/i);
    fireEvent.click(btnErrado);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x2-1',
        tipo: 'X2',
        acertou: true,
        respostaDada: 'E',
      })
    );

    // Verifica que exibiu a justificativa e armadilha da banca
    expect(screen.getByText(/Armadilha da Banca:/i)).toBeTruthy();
    expect(screen.getByText(/Inversão da obrigatoriedade/i)).toBeTruthy();
    expect(screen.getByText(/Como ficaria correto:/i)).toBeTruthy();
  });

  // -------------------------------------------------------------
  // X3: Corrija a assertiva
  // -------------------------------------------------------------
  it('X3: Permite selecionar a versão canônica correta de uma assertiva errada', () => {
    const onResponder = vi.fn();
    const x3: ExercicioX3 = {
      id: 'x3-1',
      tipo: 'X3',
      enunciado: 'O princípio da proveniência determina a reunião de documentos por assunto temático.',
      gabarito: 'O princípio da proveniência determina a reunião de documentos segundo a sua origem e produtor.',
      justificativa: 'Proveniência diz respeito à origem produtora, nunca a agrupamento por assunto.',
      fonte: 'Dicionário de Terminologia Arquivística',
      editalRef: 'Item 1.2',
      trechoIncorreto: 'por assunto temático',
      opcoesCorrecao: [
        'O princípio da proveniência determina a reunião de documentos segundo a sua origem e produtor.',
        'O princípio da proveniência determina o descarte de fundos fechados.',
        'O princípio da proveniência estabelece a preservação temática dos arquivos.',
      ],
    };

    render(<ExercicioX3Correcao exercicio={x3} onResponder={onResponder} />);

    expect(screen.getByText(/Corrija a Assertiva Incorreta/i)).toBeTruthy();
    expect(screen.getByText(/Ponto crítico:/i)).toBeTruthy();
    expect(screen.getAllByText(/por assunto temático/i).length).toBeGreaterThanOrEqual(1);

    // Seleciona a opção 1 (correta)
    const btnOpcao1 = screen.getByText(/segundo a sua origem e produtor/i);
    fireEvent.click(btnOpcao1);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x3-1',
        tipo: 'X3',
        acertou: true,
      })
    );
    expect(screen.getByText(/Excelente identificação!/i)).toBeTruthy();
  });

  // -------------------------------------------------------------
  // X4: Brain dump (recuperação livre cronometrada)
  // -------------------------------------------------------------
  it('X4: Permite digitação livre e conferência por checklist', () => {
    const onResponder = vi.fn();
    const x4: ExercicioX4 = {
      id: 'x4-1',
      tipo: 'X4',
      enunciado: 'Escreva as principais funções dos metadados descritivos.',
      pontosChave: ['Identificação do recurso', 'Descoberta e busca', 'Diferenciação de edições'],
      gabarito: ['Identificação', 'Busca', 'Edições'],
      justificativa: 'Metadados descritivos suportam a identificação e acesso ao recurso.',
      fonte: 'IFLA LRM',
      editalRef: 'Item 5.1',
      tempoSegundos: 60,
    };

    render(<ExercicioX4BrainDump exercicio={x4} onResponder={onResponder} />);

    expect(screen.getByText(/Brain Dump · Recuperação Livre/i)).toBeTruthy();

    const textarea = screen.getByPlaceholderText(/Digite aqui livremente/i);
    fireEvent.change(textarea, { target: { value: 'Identificação e busca de recursos bibliográficos' } });

    // Avança para checklist
    const btnConcluir = screen.getByText(/Concluir e Comparar com Checklist/i);
    fireEvent.click(btnConcluir);

    // Marca 2 dos 3 pontos
    const ponto1 = screen.getByText(/Identificação do recurso/i);
    fireEvent.click(ponto1);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x4-1',
        tipo: 'X4',
      })
    );
  });

  // -------------------------------------------------------------
  // X5: Par confundível lado a lado
  // -------------------------------------------------------------
  it('X5: Diferencia conceitos contrastantes (A vs B)', () => {
    const onResponder = vi.fn();
    const x5: ExercicioX5 = {
      id: 'x5-1',
      tipo: 'X5',
      enunciado: 'Classifique a técnica aplicada.',
      conceitoA: 'Crosswalk de Metadados',
      conceitoB: 'Conversão de Formato',
      afirmacao: 'Mapeamento semântico que preserva os registros originais sem transformá-los fisicamente.',
      gabarito: 'A',
      justificativa: 'Crosswalk é mapeamento lógico; conversão altera a representação binária.',
      distincoesChave: 'Crosswalk mapeia campos; conversão traduz e grava dados em outro formato.',
      fonte: 'Elings & Waibel (2007)',
      editalRef: 'Item 7.2',
    };

    render(<ExercicioX5ParConfundivel exercicio={x5} onResponder={onResponder} />);

    expect(screen.getByText(/Par Confundível/i)).toBeTruthy();

    const btnA = screen.getByRole('button', { name: /Opção A:/i });
    fireEvent.click(btnA);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x5-1',
        tipo: 'X5',
        acertou: true,
        respostaDada: 'A',
      })
    );
    expect(screen.getByText(/Distinção Dogmática Crucial:/i)).toBeTruthy();
  });

  // -------------------------------------------------------------
  // X6: Completar exemplo (SQL/código com esmaecimento)
  // -------------------------------------------------------------
  it('X6: Completa a lacuna de código SQL e exibe pré-visualização sintática', () => {
    const onResponder = vi.fn();
    const x6: ExercicioX6 = {
      id: 'x6-1',
      tipo: 'X6',
      enunciado: 'Complete a cláusula SQL para filtrar livros publicados após o ano 2020.',
      linguagem: 'sql',
      codigoComLacuna: 'SELECT titulo, ano FROM acervo ___ ano > 2020;',
      gabarito: 'WHERE',
      justificativa: 'A cláusula WHERE aplica condições booleanas sobre as tuplas.',
      fonte: 'Silberschatz et al.',
      editalRef: 'Item 8.1',
      opcoesLacuna: ['WHERE', 'HAVING', 'GROUP BY', 'ORDER BY'],
      resultadoEsperado: 'Retorna tuplas onde o atributo ano é estritamente maior que 2020.',
    };

    render(<ExercicioX6CompletarExemplo exercicio={x6} onResponder={onResponder} />);

    expect(screen.getByText(/Completar o Exemplo · SQL/i)).toBeTruthy();

    const btnWhere = screen.getByRole('button', { name: /WHERE/i });
    fireEvent.click(btnWhere);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x6-1',
        tipo: 'X6',
        acertou: true,
        respostaDada: 'WHERE',
      })
    );
    expect(screen.getByText(/Sintaxe correta!/i)).toBeTruthy();
  });

  // -------------------------------------------------------------
  // X7: Ordenar procedimento
  // -------------------------------------------------------------
  it('X7: Reordena etapas de processo de forma acessível', () => {
    const onResponder = vi.fn();
    const x7: ExercicioX7 = {
      id: 'x7-1',
      tipo: 'X7',
      enunciado: 'Ordene as idades do ciclo de vida documental.',
      etapas: ['Arquivo Corrente', 'Arquivo Intermediário', 'Arquivo Permanente'],
      gabarito: [0, 1, 2],
      justificativa: 'Teoria das três idades: corrente -> intermediário -> permanente.',
      fonte: 'Rousseau & Couture',
      editalRef: 'Item 2.1',
    };

    render(<ExercicioX7OrdenarProcedimento exercicio={x7} onResponder={onResponder} />);

    expect(screen.getByText(/Ordenar o Procedimento/i)).toBeTruthy();

    const btnVerificar = screen.getByText(/Verificar Sequência/i);
    fireEvent.click(btnVerificar);

    expect(onResponder).toHaveBeenCalled();
  });

  // -------------------------------------------------------------
  // X8: Itens-suporte vinculados a texto-base
  // -------------------------------------------------------------
  it('X8: Julga múltiplos itens vinculados a um texto-base e sumariza pontuação', () => {
    const onResponder = vi.fn();
    const x8: ExercicioX8 = {
      id: 'x8-1',
      tipo: 'X8',
      textoBase: 'Uma biblioteca parlamentar recebeu coleção de pareceres técnicos legislativos.',
      enunciado: 'Julgue os itens subsequentes acerca do tratamento documental:',
      itensVinculados: [
        {
          id: 'x8-sub-1',
          enunciado: 'Os pareceres devem ser integrados à base de dados sob controle de autoridades.',
          gabarito: 'C',
          justificativa: 'Controle de autoridades padroniza autores e assuntos.',
        },
        {
          id: 'x8-sub-2',
          enunciado: 'O descarte sumário sem registro é admitido para pareceres sem número.',
          gabarito: 'E',
          justificativa: 'Todo documento público oficial exige registro e avaliação.',
        },
      ],
      gabarito: 'C/E',
      justificativa: 'A biblioteca parlamentar obedece ao rigor de custódia e controle de autoridades.',
      fonte: 'Regimento Interno CD',
      editalRef: 'Item 3.4',
    };

    render(<ExercicioX8ItensSuporte exercicio={x8} onResponder={onResponder} />);

    expect(screen.getByText(/Itens-Suporte com Texto-Base/i)).toBeTruthy();
    expect(screen.getByText(/Uma biblioteca parlamentar recebeu coleção/i)).toBeTruthy();

    const btnsCerto = screen.getAllByRole('button', { name: /CERTO/i });
    const btnsErrado = screen.getAllByRole('button', { name: /ERRADO/i });

    // Item 1 -> Certo
    fireEvent.click(btnsCerto[0]);
    // Item 2 -> Errado
    fireEvent.click(btnsErrado[1]);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x8-1',
        tipo: 'X8',
        acertou: true,
      })
    );
  });

  // -------------------------------------------------------------
  // X9: Caça ao erro no parágrafo
  // -------------------------------------------------------------
  it('X9: Identifica a frase com a armadilha no parágrafo', () => {
    const onResponder = vi.fn();
    const x9: ExercicioX9 = {
      id: 'x9-1',
      tipo: 'X9',
      enunciado: 'Identifique o deslize doutrinário no parágrafo abaixo:',
      paragrafo: 'A catalogação cooperativa reduz custos. Entretanto, dispensa normas internacionais.',
      frases: [
        'A catalogação cooperativa reduz a duplicidade de esforços entre bibliotecas congêneres.',
        'Entretanto, esse modelo dispensa a aplicação de normas e códigos padronizados.',
        'Por fim, amplia a visibilidade de acervos públicos compartilhados.',
      ],
      gabarito: 1,
      indiceFraseIncorreta: 1,
      explicacaoErro: 'A cooperação EXIGE estrita adesão a normas internacionais (ISBD, MARC21, RDA).',
      justificativa: 'Sem normas padronizadas, a interoperabilidade cooperativa é inviabilizada.',
      fonte: 'Mey & Silveira',
      editalRef: 'Item 6.1',
    };

    render(<ExercicioX9CacaErro exercicio={x9} onResponder={onResponder} />);

    expect(screen.getByText(/Caça ao Erro no Parágrafo/i)).toBeTruthy();

    // Clica na frase 2 (índice 1)
    const btnFraseErro = screen.getByText(/Entretanto, esse modelo dispensa/i);
    fireEvent.click(btnFraseErro);

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x9-1',
        tipo: 'X9',
        acertou: true,
      })
    );
    expect(screen.getByText(/Mecanismo da Armadilha Cebraspe:/i)).toBeTruthy();
  });

  // -------------------------------------------------------------
  // X10: Associação (com teste de regressão D3 dinâmico)
  // -------------------------------------------------------------
  it('X10: Associa pares dinamicamente e resolve o bug D3 (com 3 pares)', () => {
    const onResponder = vi.fn();
    const x10: ExercicioX10 = {
      id: 'x10-1',
      tipo: 'X10',
      enunciado: 'Associe os teóricos às suas respectivas obras e ideias canônicas:',
      pares: [
        { id: 'p1', termo: 'Paul Otlet', definicao: 'Tratado de Documentação (1934)' },
        { id: 'p2', termo: 'Suzanne Briet', definicao: 'O que é a documentação? (1951)' },
        { id: 'p3', termo: 'Harold Borko', definicao: 'Definição fundacional da Ciência da Informação (1968)' },
      ],
      gabarito: {},
      justificativa: 'Otlet, Briet e Borko constituem a trindade clássica dos fundamentos da CI.',
      fonte: 'Fundamentos da Ciência da Informação',
      editalRef: 'Item 1.1',
    };

    render(<ExercicioX10Associacao exercicio={x10} onResponder={onResponder} />);

    expect(screen.getByText(/Associação Conceitual/i)).toBeTruthy();

    // Associa Par 1: Paul Otlet
    fireEvent.click(screen.getByLabelText('Termo: Paul Otlet'));
    fireEvent.click(screen.getByLabelText(/Definição: Tratado de Documentação/i));

    // Associa Par 2: Suzanne Briet
    fireEvent.click(screen.getByLabelText('Termo: Suzanne Briet'));
    fireEvent.click(screen.getByLabelText(/Definição: O que é a documentação\?/i));

    // Associa Par 3: Harold Borko
    fireEvent.click(screen.getByLabelText('Termo: Harold Borko'));
    fireEvent.click(screen.getByLabelText(/Definição: Definição fundacional/i));

    // Regressão D3: texto deve dizer "Todos os 3 pares" e não "4 pares"
    expect(
      screen.getByText(/Excelente! Todos os 3 pares foram associados corretamente\./i)
    ).toBeTruthy();
    expect(screen.queryByText(/Todos os 4 pares/i)).toBeNull();

    expect(onResponder).toHaveBeenCalledWith(
      expect.objectContaining({
        exercicioId: 'x10-1',
        tipo: 'X10',
        acertou: true,
      })
    );
  });

  // -------------------------------------------------------------
  // ExercicioRenderer: Despacho e Compatibilidade com Checkpoint Legado
  // -------------------------------------------------------------
  it('ExercicioRenderer despacha checkpoints legados como X2 sem quebras', () => {
    const cp: Checkpoint = {
      id: 'cp-legado-1',
      pergunta: 'Julgamento Conceitual',
      item: 'A indexação por atribuicão requer vocabulário controlado.',
      gabarito: 'C',
      justificativa: 'Atribuição utiliza termos pré-estabelecidos de tesauro ou lista.',
    };

    render(<ExercicioRenderer exercicio={cp} />);

    expect(screen.getByText(/A indexação por atribuicão requer vocabulário controlado\./i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /CERTO/i })).toBeTruthy();
  });
});
