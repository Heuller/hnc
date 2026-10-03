import type { CebraspeQuestion } from '../../domain/types';

export const prototipoM8Normalizacao: CebraspeQuestion[] = [
  {
    id: 'e4-m8-01',
    numero: 1,
    macroModuloId: 'M8',
    submoduloId: '8.1',
    item: 'Na elaboração de referências conforme a ABNT NBR 6023:2018, quando uma publicação possui até três autores, todos devem ser indicados na referência, separados entre si por ponto e vírgula seguido de espaço.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme o item 7.1 da ABNT NBR 6023:2018, quando houver até três autores, todos devem ser indicados na referência, na ordem em que figuram no documento, separados por ponto e vírgula, seguido de espaço.',
    armadilhaBanca: 'Assertiva correta literal sobre a regra de autoria para até 3 autores na NBR 6023:2018.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-02',
    numero: 2,
    macroModuloId: 'M8',
    submoduloId: '8.1',
    item: 'Segundo a ABNT NBR 6023:2018, nas obras que possuam quatro ou mais autores, é expressamente vedada a indicação de todos os autores na referência, sendo imperativo indicar apenas o primeiro seguido da expressão et al.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Categórico Absoluto]: A NBR 6023:2018 estabelece que, quando houver quatro ou mais autores, convém indicar todos. Permite-se que se indique apenas o primeiro, seguido da expressão et al., mas NÃO é vedado indicar todos os autores. A faculdade é expressamente assegurada pela norma.',
    armadilhaBanca: 'Emprego do termo "expressamente vedada" para uma faculdade admitida pela NBR 6023:2018.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-03',
    numero: 3,
    macroModuloId: 'M8',
    submoduloId: '8.1',
    item: 'De acordo com a ABNT NBR 6023:2018, o destaque tipográfico (negrito, itálico ou sublinhado) utilizado para identificar o documento deve ser aplicado uniformemente em todas as referências da lista e restringe-se exclusivamente ao título da obra, mantendo-se o subtítulo em fonte normal após dois pontos.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme o item 7.3 da NBR 6023:2018, o destaque tipográfico deve ser uniforme em todo o trabalho e aplica-se estritamente ao título da publicação. O subtítulo, que vem precedido de dois pontos, deve permanecer sempre em caracteres normais, sem qualquer destaque tipográfico.',
    armadilhaBanca: 'Assertiva precisa sobre a restrição de destaque ao título, excluindo o subtítulo.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-04',
    numero: 4,
    macroModuloId: 'M8',
    submoduloId: '8.1',
    item: 'Conforme a ABNT NBR 6023:2018, quando uma obra possui título e subtítulo, o recurso tipográfico de destaque deve ser aplicado preferencialmente sobre o subtítulo caso este descreva com maior especificidade a temática legislativa tratada.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Inversão de Elementos]: A NBR 6023:2018 proíbe terminantemente aplicar destaque tipográfico ao subtítulo, independentemente de sua importância descritiva ou especificidade temático-legislativa. O destaque recai exclusivamente sobre o título.',
    armadilhaBanca: 'Tentativa de justificar destaque no subtítulo por relevância semântica.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-05',
    numero: 5,
    macroModuloId: 'M8',
    submoduloId: '8.2',
    item: 'Em conformidade com a ABNT NBR 10520:2023, a indicação da autoria de uma citação, seja ela incluída no texto corrido ou inserida entre parênteses, deve ser grafada obrigatoriamente com a primeira letra maiúscula e as demais minúsculas, como no exemplo: (Brasil, 2024) ou conforme Brasil (2024).',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Essa é a grande inovação da ABNT NBR 10520:2023! A norma padronizou universalmente as chamadas: tanto dentro quanto fora dos parênteses, a indicação de autoria deve ser em maiúsculas e minúsculas, extinguindo-se a obrigatoriedade da CAIXA ALTA entre parênteses.',
    armadilhaBanca: 'Conceito canônico sobre a nova regra de chamadas em minúsculas da NBR 10520:2023.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-06',
    numero: 6,
    macroModuloId: 'M8',
    submoduloId: '8.2',
    item: 'Na vigência da ABNT NBR 10520:2023, permanece como regra obrigatória grafar o sobrenome do autor em letras maiúsculas quando a citação figurar entre parênteses no final do parágrafo, a exemplo de (ALMEIDA, 2024, p. 45), reservando-se as minúsculas apenas para chamadas no corpo do texto.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Anacronismo Normativo]: A regra que exigia autoria em CAIXA ALTA entre parênteses pertencia à superada NBR 10520:2002. A nova edição vigente (NBR 10520:2023) aboliu expressamente a caixa alta em chamadas, devendo ser grafado (Almeida, 2024, p. 45). Grafar em caixa alta hoje constitui erro formal.',
    armadilhaBanca: 'Tentativa de aplicar a regra revogada de 2002 na vigência da NBR 10520:2023.',
    dificuldade: 'dificil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-07',
    numero: 7,
    macroModuloId: 'M8',
    submoduloId: '8.2',
    item: 'As citações diretas com mais de três linhas devem ser apresentadas com recuo de 4 cm da margem esquerda, com tamanho de fonte menor que o do texto principal, espaçamento simples entre linhas e sem a aposição de aspas.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme o item 5.3 da ABNT NBR 10520:2023, as citações diretas longas (com mais de 3 linhas) devem ser destacadas com recuo de 4 cm da margem esquerda, fonte menor, entrelinhamento simples e SEM aspas.',
    armadilhaBanca: 'Regra de apresentação clássica e invariável da citação direta longa.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-08',
    numero: 8,
    macroModuloId: 'M8',
    submoduloId: '8.2',
    item: 'De acordo com a NBR 10520:2023, nas citações diretas longas com recuo de 4 cm, o texto citado deve ser encerrado entre aspas duplas sempre que contiver palavras estrangeiras ou termos técnicos inovadores.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Regra de Pontuação Inexistente]: A NBR 10520 estabelece de forma categórica que a citação direta com mais de três linhas é apresentada sem aspas. Termos estrangeiros no interior da citação podem ser destacados em itálico, mas jamais se colocam aspas abrindo e fechando o bloco com recuo de 4 cm.',
    armadilhaBanca: 'Inserção indevida de aspas em citação direta longa recuada.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-09',
    numero: 9,
    macroModuloId: 'M8',
    submoduloId: '8.3',
    item: 'Conforme a ABNT NBR 6028:2021, o resumo informativo tem como característica essencial descrever as finalidades, a metodologia, os resultados e as conclusões do documento, de modo que o leitor possa dispensar a consulta ao texto original.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme a NBR 6028:2021 (item 3.3), o resumo informativo informa ao leitor finalidades, metodologia, resultados e conclusões do documento, de tal forma que possa, inclusive, dispensar a consulta ao original.',
    armadilhaBanca: 'Definição canônica literal da NBR 6028:2021 para o resumo informativo.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
  {
    id: 'e4-m8-10',
    numero: 10,
    macroModuloId: 'M8',
    submoduloId: '8.3',
    item: 'O resumo indicativo, segundo a ABNT NBR 6028:2021, distingue-se do resumo informativo por apresentar detalhadamente dados quantitativos, coeficientes estatísticos e a interpretação crítica das conclusões obtidas na pesquisa.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Inversão Tipológica]: O resumo indicativo indica apenas os pontos principais do documento, NÃO apresentando dados qualitativos, quantitativos ou conclusões detalhadas, de modo que NÃO dispensa a consulta ao original. A apresentação de resultados e conclusões cabe ao resumo informativo.',
    armadilhaBanca: 'Inversão das características do resumo indicativo com o informativo.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M8)',
      verificado: true,
    },
  },
];
