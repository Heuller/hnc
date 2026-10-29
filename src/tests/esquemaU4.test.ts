import { describe, it, expect } from 'vitest';
import {
  ExercicioSchema,
  ModuloFilhoSchema,
} from '../domain/schemas/modulo.schema';

describe('U4.1 - Esquema Unificado de Exercícios (ExercicioSchema X1 a X10)', () => {
  const commonMetadata = {
    justificativa: 'Justificativa fundamentada em doutrina canônica da Biblioteconomia e documentação.',
    fonte: 'Edital nº 1/2026 - Conhecimentos Específicos',
    editalRef: 'Cargo 5 - Biblioteconomia, item 9',
    nivelConfianca: true,
  };

  it('deve validar X1 (Pré-teste): tentar antes de aprender sem nota', () => {
    const x1 = {
      id: 'ex-x1-1',
      tipo: 'X1' as const,
      enunciado: 'O Princípio Monográfico de Paul Otlet propunha o desmembramento do livro em fichas móveis.',
      gabarito: 'C',
      semNota: true,
      conceitoChave: 'Princípio Monográfico',
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x1);
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.tipo).toBe('X1');
    }
  });

  it('deve validar X2 (Certo/Errado com confiança): calibração e hipercorreção', () => {
    const x2 = {
      id: 'ex-x2-1',
      tipo: 'X2' as const,
      enunciado: 'A biblioteconomia dos livros foca na gestão técnica e preservação do acervo.',
      gabarito: 'C' as const,
      versao_correta: 'Correto conforme Yves-François Le Coadic.',
      armadilhaBanca: 'Inversão com a biblioteconomia dos leitores.',
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x2);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X3 (Corrija a assertiva): interrogação elaborativa', () => {
    const x3 = {
      id: 'ex-x3-1',
      tipo: 'X3' as const,
      enunciado: 'Harold Borko definiu a Biblioteconomia como a ciência que investiga as propriedades e fluxos da informação.',
      trechoIncorreto: 'Biblioteconomia',
      gabarito: 'Ciência da Informação',
      opcoesCorrecao: ['Ciência da Informação', 'Arquivologia', 'Documentação'],
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x3);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X4 (Brain dump): recuperação livre cronometrada', () => {
    const x4 = {
      id: 'ex-x4-1',
      tipo: 'X4' as const,
      enunciado: 'Em 60 segundos, cite as quatro condições cumulativas de Suzanne Briet para que um objeto seja documento.',
      tempoSegundos: 60,
      pontosChave: ['Materialidade', 'Intencionalidade', 'Processamento/Tratamento', 'Valor de indício/prova'],
      gabarito: ['Materialidade', 'Intencionalidade', 'Processamento/Tratamento', 'Valor de indício/prova'],
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x4);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X5 (Par confundível lado a lado): contraste e intercalação', () => {
    const x5 = {
      id: 'ex-x5-1',
      tipo: 'X5' as const,
      enunciado: 'Identifique se a afirmação refere-se a Crosswalk ou a Conversão de Metadados.',
      conceitoA: 'Crosswalk',
      conceitoB: 'Conversão',
      afirmacao: 'Mapeamento semântico de equivalência campo a campo mantendo os esquemas originais intactos.',
      gabarito: 'A' as const,
      distincoesChave: 'Crosswalk mapeia equivalências; Conversão transforma fisicamente os dados.',
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x5);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X6 (Completar o exemplo): esmaecimento em SQL/regex/MER', () => {
    const x6 = {
      id: 'ex-x6-1',
      tipo: 'X6' as const,
      enunciado: 'Complete a cláusula SQL que filtra grupos com pelo menos 2 obras.',
      linguagem: 'sql' as const,
      codigoComLacuna: 'SELECT assunto, COUNT(id) FROM livro GROUP BY assunto ___ COUNT(id) >= 2;',
      opcoesLacuna: ['HAVING', 'WHERE', 'ORDER BY'],
      gabarito: 'HAVING',
      resultadoEsperado: 'Filtra pós-agregação via HAVING.',
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x6);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X7 (Ordenar o procedimento): recuperação de processos', () => {
    const x7 = {
      id: 'ex-x7-1',
      tipo: 'X7' as const,
      enunciado: 'Ordene as etapas do ciclo de vida dos dados segundo o DMBOK2.',
      etapas: ['Coleta e Criação', 'Armazenamento e Manutenção', 'Uso e Compartilhamento', 'Descarte ou Arquivamento'],
      gabarito: [0, 1, 2, 3],
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x7);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X8 (Itens-suporte): texto-base no estilo Cebraspe', () => {
    const x8 = {
      id: 'ex-x8-1',
      tipo: 'X8' as const,
      textoBase: 'Considerando o Manifesto da Biblioteca Pública IFLA/UNESCO (Dublin, 2022), julgue os itens a seguir.',
      enunciado: 'Julgue os itens vinculados ao texto-base.',
      itensVinculados: [
        {
          id: 'x8-item-1',
          enunciado: 'A biblioteca pública deve cobrar taxas módicas como condição de acesso ao acervo.',
          gabarito: 'E' as const,
          justificativa: 'Os serviços básicos devem ser inteiramente gratuitos.',
        },
        {
          id: 'x8-item-2',
          enunciado: 'A alfabetização midiática e digital contra a desinformação foi reforçada em 2022.',
          gabarito: 'C' as const,
          justificativa: 'Inovação explícita da atualização de 2022 em Dublin.',
        },
      ],
      gabarito: 'E, C',
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x8);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X9 (Caça ao erro no parágrafo): detecção de armadilha Cebraspe', () => {
    const x9 = {
      id: 'ex-x9-1',
      tipo: 'X9' as const,
      enunciado: 'Identifique o período que contém o erro conceitual deliberado.',
      paragrafo: 'A IFLA foi fundada em 1927 em Edimburgo. Sua sede atual fica na Haia, Países Baixos. O Manifesto da UNESCO estabelece que bibliotecas públicas devem cobrar mensalidades de usuários adultos.',
      frases: [
        'A IFLA foi fundada em 1927 em Edimburgo.',
        'Sua sede atual fica na Haia, Países Baixos.',
        'O Manifesto da UNESCO estabelece que bibliotecas públicas devem cobrar mensalidades de usuários adultos.',
      ],
      gabarito: 2,
      indiceFraseIncorreta: 2,
      explicacaoErro: 'Serviços básicos são gratuitos.',
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x9);
    expect(parsed.success).toBe(true);
  });

  it('deve validar X10 (Associação): pares termo ↔ definição', () => {
    const x10 = {
      id: 'ex-x10-1',
      tipo: 'X10' as const,
      enunciado: 'Associe os teóricos fundacionais às suas respectivas contribuições.',
      pares: [
        { id: 'p1', termo: 'Paul Otlet', definicao: 'Princípio Monográfico e criador da CDU com La Fontaine' },
        { id: 'p2', termo: 'Suzanne Briet', definicao: 'Ontologia do documento como indício físico e o antílope' },
      ],
      gabarito: {
        p1: 'Princípio Monográfico e criador da CDU com La Fontaine',
        p2: 'Ontologia do documento como indício físico e o antílope',
      },
      ...commonMetadata,
    };

    const parsed = ExercicioSchema.safeParse(x10);
    expect(parsed.success).toBe(true);
  });

  it('deve rejeitar exercício com campos obrigatórios ausentes (fonte, justificativa ou editalRef)', () => {
    const invalido = {
      id: 'ex-inv-1',
      tipo: 'X2' as const,
      enunciado: 'Enunciado de teste.',
      gabarito: 'C' as const,
      // Faltam: justificativa, fonte, editalRef
    };

    const parsed = ExercicioSchema.safeParse(invalido);
    expect(parsed.success).toBe(false);
  });

  it('deve exigir no mínimo 3 checkpoints e admitir expansão por unidades', () => {
    const submoduloMock = {
      id: 'sub-teste-u4',
      numero: '99.1',
      titulo: 'Submódulo de Teste U4',
      descricaoCurta: 'Testando checkpoints distribuídos em unidades.',
      tempoEstimadoMinutos: 30,
      autoresChave: ['Otlet'],
      alertasCebraspe: ['Alerta 1'],
      teoriaDensaMarkdown: 'Texto de teoria para validação.',
      checkpoints: [
        {
          id: 'cp-1',
          item: 'Assertiva 1',
          gabarito: 'C' as const,
          justificativa: 'Justificativa 1',
        },
        {
          id: 'cp-2',
          item: 'Assertiva 2',
          gabarito: 'E' as const,
          justificativa: 'Justificativa 2',
        },
        {
          id: 'cp-3',
          item: 'Assertiva 3',
          gabarito: 'C' as const,
          justificativa: 'Justificativa 3',
        },
        {
          id: 'cp-4',
          item: 'Assertiva 4',
          gabarito: 'E' as const,
          justificativa: 'Justificativa 4',
        },
        {
          id: 'cp-5',
          item: 'Assertiva 5',
          gabarito: 'C' as const,
          justificativa: 'Justificativa 5',
        },
      ],
      mnemonicos: {
        timeline: [],
        autores: [],
        pegadinhas: [],
      },
    };

    const parsed = ModuloFilhoSchema.safeParse(submoduloMock);
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.checkpoints).toHaveLength(5);
    }

    // Com menos de 3 checkpoints, deve falhar
    const subCom2 = {
      ...submoduloMock,
      checkpoints: submoduloMock.checkpoints.slice(0, 2),
    };
    expect(ModuloFilhoSchema.safeParse(subCom2).success).toBe(false);

    // A aula ampliada pode conter mais de oito checkpoints.
    const subCom9 = {
      ...submoduloMock,
      checkpoints: [
        ...submoduloMock.checkpoints,
        ...submoduloMock.checkpoints.slice(0, 4).map((cp, i) => ({...cp, id: `cp-extra-${i}`})),
      ], // total 9
    };
    expect(ModuloFilhoSchema.safeParse(subCom9).success).toBe(true);
  });
});
