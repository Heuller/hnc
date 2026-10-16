import { describe, it, expect } from 'vitest';
import { GLOSSARIO_TECNICO, buscarTermoGlossario } from '../content/glossario-tecnico';
import {
  auditarSubmoduloJargoes,
  auditarTodosSubmodulosJargoes,
} from '../domain/jargonLinter';
import type { ModuloFilho } from '../domain/schemas/modulo.schema';
import { ALL_COURSE_MODULES } from '../content/registry';

describe('U3.2 - Lint de Jargão Técnico e Pré-requisitos Conceituais', () => {
  it('o glossário técnico deve conter os termos obrigatórios estipulados no plano', () => {
    const termosObrigatorios = [
      'SQL',
      'API',
      'REST',
      'JSON',
      'XML',
      'RDF',
      'regex',
      'hash',
      'ETL',
      'LLM',
      'RAG',
      'OCR',
      'HTR',
      'MER',
      'CRUD',
      'URI',
      'URN',
      'OAI-PMH',
      'SPARQL',
    ];

    for (const termo of termosObrigatorios) {
      const encontrado = buscarTermoGlossario(termo);
      expect(encontrado).toBeDefined();
      expect(encontrado?.definicaoCurta.length).toBeGreaterThan(15);
      expect(encontrado?.exemploBiblioteca.length).toBeGreaterThan(15);
    }
    expect(GLOSSARIO_TECNICO.length).toBeGreaterThanOrEqual(19);
  });

  it('deve auditar lote de submódulos com auditarTodosSubmodulosJargoes', () => {
    const todosSubmodulos = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos);
    expect(todosSubmodulos.length).toBeGreaterThan(0);
    const relatorioLote = auditarTodosSubmodulosJargoes(todosSubmodulos);
    expect(relatorioLote.totalSubmodulosAuditados).toBe(todosSubmodulos.length);
    expect(typeof relatorioLote.totalViolacoes).toBe('number');
  });

  it('deve aprovar submódulo quando todos os termos presentes estão definidos em antesDeLer', () => {
    const subValido: ModuloFilho = {
      id: 'sub-teste-valido',
      numero: '99.1',
      titulo: 'Consulta a Bancos de Dados com SQL e APIs',
      descricaoCurta: 'Uso de SQL e API para consultas bibliográficas',
      tempoEstimadoMinutos: 20,
      autoresChave: ['Autor Teste'],
      alertasCebraspe: ['Alerta'],
      teoriaDensaMarkdown: 'Nesta seção aprenderemos comandos de SQL e consumo de API REST para integração.',
      checkpoints: [
        {
          id: 'cp-1',
          pergunta: 'Pergunta 1',
          item: 'Item 1',
          gabarito: 'C',
          justificativa: 'Justificativa',
        },
        {
          id: 'cp-2',
          pergunta: 'Pergunta 2',
          item: 'Item 2',
          gabarito: 'E',
          justificativa: 'Justificativa',
        },
      ],
      mnemonicos: { timeline: [], autores: [], pegadinhas: [] },
      antesDeLer: [
        {
          termo: 'SQL',
          definicao: 'Linguagem para consulta em bancos de dados relacionais.',
          exemploBiblioteca: 'Busca de registros.',
        },
        {
          termo: 'API',
          definicao: 'Interface de comunicação entre sistemas.',
          exemploBiblioteca: 'Integração de acervos.',
        },
        {
          termo: 'REST',
          definicao: 'Estilo arquitetural para APIs web.',
          exemploBiblioteca: 'Protocolo de comunicação.',
        },
      ],
    };

    const map = new Map<string, ModuloFilho>([[subValido.id, subValido]]);
    const rel = auditarSubmoduloJargoes(subValido, map);

    expect(rel.valido).toBe(true);
    expect(rel.violacoes).toHaveLength(0);
    expect(rel.termosPresentes).toContain('SQL');
    expect(rel.termosPresentes).toContain('API');
    expect(rel.termosPresentes).toContain('REST');
  });

  it('deve aprovar submódulo que herda termos definidos nos seus pré-requisitos', () => {
    const subPreReq: ModuloFilho = {
      id: 'sub-prereq',
      numero: '98.1',
      titulo: 'Fundamentos de Redes',
      descricaoCurta: 'Introdução a protocolos',
      tempoEstimadoMinutos: 15,
      autoresChave: [],
      alertasCebraspe: [],
      teoriaDensaMarkdown: 'Fundamentos de rede.',
      checkpoints: [
        { id: 'cp-1', pergunta: 'p', item: 'i', gabarito: 'C', justificativa: 'j' },
        { id: 'cp-2', pergunta: 'p', item: 'i', gabarito: 'E', justificativa: 'j' },
      ],
      mnemonicos: { timeline: [], autores: [], pegadinhas: [] },
      antesDeLer: [
        {
          termo: 'JSON',
          definicao: 'Formato de troca de dados',
          exemploBiblioteca: 'Armazenamento de metadados',
        },
      ],
    };

    const subFilho: ModuloFilho = {
      id: 'sub-filho',
      numero: '98.2',
      titulo: 'Consumo de Dados',
      descricaoCurta: 'Leitura de dados',
      tempoEstimadoMinutos: 15,
      autoresChave: [],
      alertasCebraspe: [],
      teoriaDensaMarkdown: 'Esta rotina lê dados brutos formatados em JSON e exibe na tela.',
      preRequisitos: ['sub-prereq'],
      checkpoints: [
        { id: 'cp-1', pergunta: 'p', item: 'i', gabarito: 'C', justificativa: 'j' },
        { id: 'cp-2', pergunta: 'p', item: 'i', gabarito: 'E', justificativa: 'j' },
      ],
      mnemonicos: { timeline: [], autores: [], pegadinhas: [] },
      antesDeLer: [],
    };

    const map = new Map<string, ModuloFilho>([
      [subPreReq.id, subPreReq],
      [subFilho.id, subFilho],
    ]);

    const rel = auditarSubmoduloJargoes(subFilho, map);
    expect(rel.valido).toBe(true);
    expect(rel.termosHeradosDePreRequisitos).toContain('JSON');
  });

  it('deve falhar e listar violação quando termo técnico aparece sem definição prévia', () => {
    const subSemDefinicao: ModuloFilho = {
      id: 'sub-com-violacao',
      numero: '97.1',
      titulo: 'Relatórios do Acervo',
      descricaoCurta: 'Geração de relatórios',
      tempoEstimadoMinutos: 15,
      autoresChave: [],
      alertasCebraspe: [],
      teoriaDensaMarkdown: 'O bibliotecário precisa redigir uma consulta em SQL para filtrar autores.',
      checkpoints: [
        { id: 'cp-1', pergunta: 'p', item: 'i', gabarito: 'C', justificativa: 'j' },
        { id: 'cp-2', pergunta: 'p', item: 'i', gabarito: 'E', justificativa: 'j' },
      ],
      mnemonicos: { timeline: [], autores: [], pegadinhas: [] },
      antesDeLer: [], // Sem definir SQL!
    };

    const map = new Map<string, ModuloFilho>([[subSemDefinicao.id, subSemDefinicao]]);
    const rel = auditarSubmoduloJargoes(subSemDefinicao, map);

    expect(rel.valido).toBe(false);
    expect(rel.violacoes).toHaveLength(1);
    expect(rel.violacoes[0].termo).toBe('SQL');
    expect(rel.violacoes[0].motivo).toContain("O termo técnico 'SQL' aparece no conteúdo");
  });

  it('deve tolerar dívida conhecida na baseline para submódulo não tratado', () => {
    const subComDivida: ModuloFilho = {
      id: 'sub-legado-com-divida',
      numero: '96.1',
      titulo: 'Submódulo Legado',
      descricaoCurta: 'Texto com SQL',
      tempoEstimadoMinutos: 10,
      autoresChave: [],
      alertasCebraspe: [],
      teoriaDensaMarkdown: 'Este texto usa SQL em rotinas legadas.',
      checkpoints: [
        { id: 'cp-1', pergunta: 'p', item: 'i', gabarito: 'C', justificativa: 'j' },
        { id: 'cp-2', pergunta: 'p', item: 'i', gabarito: 'E', justificativa: 'j' },
      ],
      mnemonicos: { timeline: [], autores: [], pegadinhas: [] },
      antesDeLer: [],
    };

    const map = new Map<string, ModuloFilho>([[subComDivida.id, subComDivida]]);
    const baseline = {
      submodulosTratados: [],
      dividaConhecida: {
        'sub-legado-com-divida': ['SQL'],
      },
    };

    const rel = auditarSubmoduloJargoes(subComDivida, map, baseline);
    expect(rel.valido).toBe(true);
    expect(rel.violacoes).toHaveLength(0);
    expect(rel.dividaRestante).toContain('SQL');
  });

  it('deve reprovar submódulo já marcado como tratado caso contenha termo não conceituado', () => {
    const subTratadoComErro: ModuloFilho = {
      id: 'sub-ja-tratado',
      numero: '95.1',
      titulo: 'Submódulo Tratado',
      descricaoCurta: 'Texto com jargão sem antesDeLer',
      tempoEstimadoMinutos: 10,
      autoresChave: [],
      alertasCebraspe: [],
      teoriaDensaMarkdown: 'Este texto usa API sem definir.',
      checkpoints: [
        { id: 'cp-1', pergunta: 'p', item: 'i', gabarito: 'C', justificativa: 'j' },
        { id: 'cp-2', pergunta: 'p', item: 'i', gabarito: 'E', justificativa: 'j' },
      ],
      mnemonicos: { timeline: [], autores: [], pegadinhas: [] },
      antesDeLer: [],
    };

    const map = new Map<string, ModuloFilho>([[subTratadoComErro.id, subTratadoComErro]]);
    const baseline = {
      submodulosTratados: ['sub-ja-tratado'],
      dividaConhecida: {},
    };

    const rel = auditarSubmoduloJargoes(subTratadoComErro, map, baseline);
    expect(rel.valido).toBe(false);
    expect(rel.violacoes).toHaveLength(1);
    expect(rel.violacoes[0].termo).toBe('API');
    expect(rel.violacoes[0].motivo).toContain('Submódulo já tratado');
  });
});
