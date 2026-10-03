import { describe, it, expect } from 'vitest';
import {
  validarItemAntiAlucinacao,
  filtrarItensSegurosIA,
  type ItemCandidatoIA,
} from '../domain/antiHallucinationGuard';

describe('Guarda Anti-Alucinação de IA para Itens Cebraspe (antiHallucinationGuard)', () => {
  it('deve aprovar item com fonte primária canônica e formato assertivo Cebraspe', () => {
    const itemValido: ItemCandidatoIA = {
      item: 'Segundo S. R. Ranganathan, a Primeira Lei da Biblioteconomia estabelece que os livros são para usar, devendo a biblioteca franquear o livre acesso às estantes.',
      gabarito: 'C',
      justificativa: 'A Primeira Lei preconiza que os livros não devem ficar enclausurados como relíquias, mas sim disponibilizados amplamente ao leitor.',
      fontePrimaria: 'S. R. Ranganathan (1931) - The Five Laws of Library Science',
    };

    const resultado = validarItemAntiAlucinacao(itemValido);
    expect(resultado.valido).toBe(true);
    expect(resultado.bloqueadoPorAlucinacao).toBe(false);
    expect(resultado.erros).toHaveLength(0);
  });

  it('deve bloquear item com fonte genérica ou sem lastro (ex.: Jurisprudência Cebraspe)', () => {
    const itemGenerico: ItemCandidatoIA = {
      item: 'A catalogação cooperativa reduz custos operacionais das redes de bibliotecas.',
      gabarito: 'C',
      justificativa: 'Redes cooperativas evitam duplicidade de esforço entre instituições participantes.',
      fontePrimaria: 'Jurisprudência Cebraspe / Edital Câmara dos Deputados',
    };

    const resultado = validarItemAntiAlucinacao(itemGenerico);
    expect(resultado.valido).toBe(false);
    expect(resultado.bloqueadoPorAlucinacao).toBe(true);
    expect(resultado.erros.some((e) => e.includes('genérica'))).toBe(true);
  });

  it('deve bloquear item formulado como pergunta interrogativa', () => {
    const itemInterrogativo: ItemCandidatoIA = {
      item: 'Qual é o prazo máximo de classificação de documentos ultrassecretos pela LAI?',
      gabarito: 'E',
      justificativa: 'O prazo máximo é de 25 anos conforme preconizado pelo artigo 24 da Lei 12.527.',
      fontePrimaria: 'Lei nº 12.527/2011, art. 24',
    };

    const resultado = validarItemAntiAlucinacao(itemInterrogativo);
    expect(resultado.valido).toBe(false);
    expect(resultado.erros.some((e) => e.includes('perguntas interrogativas'))).toBe(true);
  });

  it('deve bloquear item formatado como alternativa de múltipla escolha A/B/C/D/E', () => {
    const itemMultiplaEscolha: ItemCandidatoIA = {
      item: 'A) O desbastamento e o descarte são processos idênticos na gestão de coleções.',
      gabarito: 'E',
      justificativa: 'Desbastamento é a retirada física da coleção principal para depósito, enquanto descarte é o expurgo definitivo.',
      fontePrimaria: 'Waldomiro Vergueiro (1989) - Desenvolvimento de Coleções',
    };

    const resultado = validarItemAntiAlucinacao(itemMultiplaEscolha);
    expect(resultado.valido).toBe(false);
    expect(resultado.erros.some((e) => e.includes('múltipla escolha'))).toBe(true);
  });

  it('deve bloquear item cujo trecho âncora não conste literalmente no texto base', () => {
    const itemAncoraInvalida: ItemCandidatoIA = {
      item: 'O vocábulo "portanto" no texto expressa conclusão.',
      gabarito: 'C',
      justificativa: 'Conjunção coordenativa conclusiva típica da norma culta.',
      fontePrimaria: 'Evanildo Bechara (2019) - Moderna Gramática Portuguesa',
      textoBase: 'O parlamento votou a matéria com rapidez e eficácia.',
      trechoAncora: 'portanto o parlamento',
    };

    const resultado = validarItemAntiAlucinacao(itemAncoraInvalida);
    expect(resultado.valido).toBe(false);
    expect(resultado.erros.some((e) => e.includes('trecho âncora'))).toBe(true);
  });

  it('deve filtrar lote separando aprovados e rejeitados', () => {
    const lote: ItemCandidatoIA[] = [
      {
        item: 'Segundo a Lei nº 12.527/2011, o prazo de resposta a pedidos de informação é de até vinte dias, prorrogável por dez mediante justificativa.',
        gabarito: 'C',
        justificativa: 'Disposição literal do art. 11, §§ 1º e 2º da Lei de Acesso à Informação.',
        fontePrimaria: 'Lei nº 12.527/2011, art. 11',
      },
      {
        item: 'A documentação foi criada na França sem relação com a biblioteconomia.',
        gabarito: 'E',
        justificativa: 'Paul Otlet e Henri La Fontaine fundaram a documentação na Bélgica.',
        fontePrimaria: 'Internet / Google',
      },
    ];

    const { aprovados, rejeitados } = filtrarItensSegurosIA(lote);
    expect(aprovados).toHaveLength(1);
    expect(rejeitados).toHaveLength(1);
    expect(rejeitados[0].erros.length).toBeGreaterThan(0);
  });

  it('deve aprovar itens fundamentados em autores canônicos de RLM e gramática normativa', () => {
    const itemRLM: ItemCandidatoIA = {
      item: 'Na lógica proposicional clássica de George Boole, a disjunção inclusiva entre duas proposições p e q só assume valor falso quando ambas as proposições componentes forem falsas.',
      gabarito: 'C',
      justificativa: 'Pela tabela-verdade booleana da disjunção inclusiva (p v q), a proposição só é falsa se p e q forem concomitantemente falsas.',
      fontePrimaria: 'George Boole (1854) - An Investigation of the Laws of Thought',
    };
    expect(validarItemAntiAlucinacao(itemRLM).valido).toBe(true);

    const itemGramatica: ItemCandidatoIA = {
      item: 'Segundo Celso Cunha e Lindley Cintra, a próclise pronominal é obrigatória quando o verbo vier precedido de palavras de sentido negativo, desde que não haja pausa.',
      gabarito: 'C',
      justificativa: 'Palavras de sentido negativo funcionam como fatores atrativos invariáveis do pronome oblíquo átono.',
      fontePrimaria: 'Celso Cunha & Lindley Cintra (2017) - Nova Gramática do Português Contemporâneo',
    };
    expect(validarItemAntiAlucinacao(itemGramatica).valido).toBe(true);
  });

  it('deve identificar a técnica de distrator Cebraspe (generalização ou restrição indevida)', () => {
    const itemGeneralizacao: ItemCandidatoIA = {
      item: 'O acesso a documentos públicos no Brasil é sempre franqueado sem qualquer hipótese de restrição ou sigilo.',
      gabarito: 'E',
      justificativa: 'A Constituição Federal de 1988 e a LAI estabelecem ressalvas expressas para documentos imprescindíveis à segurança da sociedade e do Estado.',
      fontePrimaria: 'Constituição Federal de 1988, art. 5º, XXXIII',
    };
    const res = validarItemAntiAlucinacao(itemGeneralizacao);
    expect(res.valido).toBe(true);
    expect(res.tecnicaDistratorDetectada).toContain('Generalização');
  });
});

