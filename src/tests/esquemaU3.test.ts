import { describe, it, expect } from 'vitest';
import {
  TermoAntesDeLerSchema,
  SecaoTeoriaSchema,
  ModuloFilhoSchema,
} from '../domain/schemas/modulo.schema';

describe('U3.1 - Esquema Zod: antesDeLer e secoes[].itens', () => {
  it('deve validar um termo individual de antesDeLer com campos obrigatorios', () => {
    const termoValido = {
      termo: 'SQL',
      definicao: 'Linguagem padrão para consulta e manipulação de bancos de dados relacionais.',
      exemploBiblioteca: 'Utilizado no software Koha para emitir relatórios de circulação de acervo.',
    };

    const parsed = TermoAntesDeLerSchema.safeParse(termoValido);
    expect(parsed.success).toBe(true);

    const termoInvalido = {
      termo: '',
      definicao: 'Curta',
      exemploBiblioteca: '',
    };
    const parsedInvalido = TermoAntesDeLerSchema.safeParse(termoInvalido);
    expect(parsedInvalido.success).toBe(false);
  });

  it('deve validar secoes com e sem o campo itens (itens por secao)', () => {
    const secaoSemItens = {
      id: 'sec-1',
      nivel: 3 as const,
      titulo: 'Fundamentos de Metadados',
      conteudo: 'Texto explicativo sobre metadados.',
    };
    expect(SecaoTeoriaSchema.safeParse(secaoSemItens).success).toBe(true);

    const secaoComItens = {
      ...secaoSemItens,
      itens: [
        {
          id: 'cp-sec-1',
          pergunta: 'Julgue o item a seguir:',
          item: 'Metadados descritivos facilitam a recuperação da informação pelo usuário.',
          gabarito: 'C' as const,
          justificativa: 'Metadados descritivos como autor e título viabilizam busca e recuperação.',
        },
      ],
    };
    const parsedComItens = SecaoTeoriaSchema.safeParse(secaoComItens);
    expect(parsedComItens.success).toBe(true);
    if (parsedComItens.success) {
      expect(parsedComItens.data.itens?.length).toBe(1);
      expect(parsedComItens.data.itens?.[0].gabarito).toBe('C');
    }
  });

  it('deve validar ModuloFilho com o campo antesDeLer preenchido', () => {
    const moduloMock = {
      id: 'sub-u3-test',
      numero: '15.1',
      titulo: 'Bancos de Dados para Bibliotecas',
      descricaoCurta: 'Introdução a SGBD e SQL',
      tempoEstimadoMinutos: 25,
      autoresChave: ['Date, C. J.', 'Elmasri, R.'],
      alertasCebraspe: ['Atenção à diferença entre DDL e DML'],
      teoriaDensaMarkdown: '# Teoria sobre SQL\n\nTexto denso.',
      checkpoints: [
        {
          id: 'cp-test-1',
          pergunta: 'Julgue o item:',
          item: 'SQL é uma linguagem declarativa para SGBDs relacionais.',
          gabarito: 'C' as const,
          justificativa: 'Correto.',
        },
        {
          id: 'cp-test-2',
          pergunta: 'Julgue o item:',
          item: 'O comando DROP TABLE é uma instrução DML.',
          gabarito: 'E' as const,
          justificativa: 'DROP TABLE é instrução DDL (Data Definition Language).',
        },
        {
          id: 'cp-test-3',
          pergunta: 'Julgue o item:',
          item: 'A instrução SELECT realiza recuperação de dados.',
          gabarito: 'C' as const,
          justificativa: 'SELECT é a instrução canônica de DQL/DML.',
        },
      ],
      mnemonicos: {
        timeline: [],
        autores: [],
        pegadinhas: [],
      },
      antesDeLer: [
        {
          termo: 'SGBD',
          definicao: 'Sistema de Gerenciamento de Banco de Dados.',
          exemploBiblioteca: 'O PostgreSQL é o SGBD que hospeda o catálogo bibliográfico.',
        },
        {
          termo: 'SQL',
          definicao: 'Structured Query Language, linguagem para consultas a tabelas.',
          exemploBiblioteca: 'Consultar no banco todos os empréstimos ativos de servidores da Câmara.',
        },
      ],
    };

    const parsed = ModuloFilhoSchema.safeParse(moduloMock);
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.antesDeLer?.length).toBe(2);
      expect(parsed.data.antesDeLer?.[0].termo).toBe('SGBD');
    }
  });
});
