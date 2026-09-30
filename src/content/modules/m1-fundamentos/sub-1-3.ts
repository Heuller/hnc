import type { ModuloFilho } from '../../../domain/types';

export const submodulo13: ModuloFilho = {
  id: 'sub-1-3',
  numero: '1.3',
  titulo: 'Conceitos de Informação, Conhecimento e Documento: Ontologia e Dimensões',
  descricaoCurta: 'A pirâmide informacional (Dado, Informação, Conhecimento, Sabedoria), Michael Buckland e a Informação como Coisa, o conceito de documento segundo Briet, Mey e Le Coadic.',
  tempoEstimadoMinutos: 25,
  autoresChave: ['Michael Buckland', 'Suzanne Briet', 'Eliane Mey', 'Russell Ackoff', 'Claude Shannon'],
  alertasCebraspe: [
    'Michael Buckland classifica a informação em: (1) Informação como Processo; (2) Informação como Conhecimento; (3) Informação como Coisa. O Cebraspe tenta restringir "informação como coisa" a papéis e livros, quando abrange QUALQUER entidade tangível (incluindo fósseis, esculturas, gravações).',
    'Suzanne Briet definiu documento a partir de quatro condições necessárias: materialidade, intencionalidade, tratamento e capacidade de servir de prova/indício.',
    'Dado é um registro bruto desprovido de contexto; Informação é o dado dotado de significado e relevância; Conhecimento é a apropriação cognitiva pelo ser humano.',
  ],
  quadroComparativo: {
    titulo: 'A Tríade de Michael Buckland (1991): Information as Thing',
    colunas: ['Dimensão de Buckland', 'Natureza Ontológica', 'Características', 'Exemplo Prático na Câmara'],
    linhas: [
      ['1. Informação-como-processo', 'Intangível / Ação', 'O ato de informar; a mudança de estado cognitivo de quem recebe uma mensagem', 'O assessor legislativo lendo uma nota técnica e assimilando seus argumentos'],
      ['2. Informação-como-conhecimento', 'Intangível / Cognitivo', 'Aquilo que é apreendido; crença justificada incorporada à estrutura mental do sujeito', 'O saber acumulado pelo analista legislativo sobre o regimento interno'],
      ['3. Informação-como-coisa', 'Tangível / Físico / Digital', 'Dados, registros, textos, suportes materiais que podem ser processados em sistemas', 'O arquivo em PDF do Diário da Câmara, um livro impresso ou um áudio de audiência pública'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Hierarquia Conceitual: Dado, Informação e Conhecimento

A Ciência da Informação estabelece distinções fundamentais na cadeia ontológica:

1. **Dado (*Data*):** Elemento quantitativo ou qualitativo isolado, registro bruto, sem contexto ou valor semântico intrínseco (ex.: o número \`2026\`).
2. **Informação (*Information*):** Conjunto estruturado e contextualizado de dados que possui significado, transmitindo uma mensagem e reduzindo a incerteza no receptor (ex.: \`Ano de realização do concurso da Câmara dos Deputados: 2026\`).
3. **Conhecimento (*Knowledge*):** Informação internalizada, interpretada, confrontada com experiências prévias e compreendida pelo intelecto humano (estruturas mentais cognitivas).
4. **Sabedoria (*Wisdom*):** O uso ético e prudente do conhecimento acumulado para a tomada de decisões estratégicas em sociedade.

---

### 2. A Teoria da Informação de Michael Buckland (1991)
No clássico ensaio *"Information as Thing"* (disponível em \`Fundamentos/Informacao como Coisa (thing).pdf\`), Michael Buckland desmistifica o uso polissêmico da palavra "informação", categorizando-a em três noções fundamentais:

* **Informação como Processo (*Information-as-process*):** Refere-se à dinâmica comunicativa, ao ato de informar e ser informado. É uma experiência psicológica subjetiva e intangível.
* **Informação como Conhecimento (*Information-as-knowledge*):** Refere-se àquilo que foi compreendido e retido. Reduz a incerteza, mas também é intangível e reside exclusivamente na mente humana.
* **Informação como Coisa (*Information-as-thing*):** É a única dimensão que pode ser armazenada, catalogada, transferida, duplicada e recuperada por **sistemas de informação**. Abrange:
  * Textos, números, imagens e sons.
  * Artefatos materiais, espécimes biológicos e fósseis em museus.
  * Objetos físicos que contêm evidências informativas (o chamado documento tridimensional).

*(Ponto Crítico Cebraspe: A banca adora afirmar que objetos tridimensionais ou artefatos não são considerados "informação-como-coisa". Isso é FALSO!)*.

---

### 3. O Conceito Canônico de Documento
Para que um objeto seja caracterizado como **Documento**, a tradição que une Paul Otlet, Suzanne Briet (1951) e Eliane Mey estabelece quatro atributos essenciais:

1. **Materialidade (Suporte Físico ou Eletrônico):** Deve haver um suporte físico tangível ou suporte de dados magnético/digital registrando signos.
2. **Intencionalidade:** O objeto foi produzido, coletado ou selecionado com o propósito deliberado de comunicar ou preservar um registro.
3. **Tratamento Documentário:** O objeto foi inserido em um sistema ou coleção (catalogado, indexado, conservado).
4. **Valor Probatório / Evidencial:** O objeto funciona como indício, testemunho ou prova de um fato perante uma comunidade social.
* **O Antílope de Suzanne Briet:** Um antílope correndo livre na savana africana não é um documento; porém, quando capturado, descrito por zoólogos, exposto em um jardim zoológico e classificado em uma ficha taxonômica, transforma-se em documento!`,
  checkpoints: [
    {
      id: 'cp-1-3-1',
      pergunta: 'Micro-Checkpoint 1: Buckland e a Informação como Coisa',
      item: "Para Michael Buckland, a dimensão da 'informação como coisa' exclui qualquer objeto tridimensional ou artefato da natureza, aplicando-se apenas a livros impressos.",
      gabarito: 'E',
      justificativa: 'Errado! Buckland enfatiza que qualquer entidade física tangível (inclusive fósseis, esculturas, gravações) é informação como coisa quando portadora de evidência informativa.',
    },
    {
      id: 'cp-1-3-2',
      pergunta: 'Micro-Checkpoint 2: Requisitos do Documento (Briet)',
      item: 'Suzanne Briet definiu documento como todo indício ou suporte material conservado ou registrado com o fim de representar, reconstituir ou provar um fenômeno.',
      gabarito: 'C',
      justificativa: 'Correto! A célebre definição de Briet (1951) exige materialidade, intencionalidade e capacidade de funcionar como indício ou prova.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-3-1',
        periodo: '1951',
        disciplina: 'Documentação Conceitual',
        focoPrincipal: 'Quatro condições do documento e o clássico exemplo do antílope na savana vs zoológico',
        figuraChave: 'Suzanne Briet',
      },
      {
        id: 'tl-1-3-2',
        periodo: '1989',
        disciplina: 'Pirâmide DIKW',
        focoPrincipal: 'Hierarquia ontológica: Dado -> Informação -> Conhecimento -> Sabedoria',
        figuraChave: 'Russell Ackoff',
      },
      {
        id: 'tl-1-3-3',
        periodo: '1991',
        disciplina: 'Ontologia da Informação',
        focoPrincipal: 'A Tríade de Buckland: Informação como Processo, Conhecimento e Coisa (thing)',
        figuraChave: 'Michael Buckland',
      },
    ],
    autores: [
      {
        id: 'aut-1-3-1',
        nome: 'Michael Buckland',
        ano: 1991,
        obraPrincipal: 'Information as Thing',
        ideiaChave: 'Informação como Coisa é a única dimensão tangível operável por sistemas documentais.',
        chipPegadinha: 'Abarca objetos físicos, artefatos tridimensionais, amostras e fósseis, não apenas papel.',
      },
      {
        id: 'aut-1-3-2',
        nome: 'Suzanne Briet',
        ano: 1951,
        obraPrincipal: "Qu'est-ce que la documentation?",
        ideiaChave: 'Documento como indício físico com função probatória perante a sociedade.',
        chipPegadinha: 'Um animal solto na natureza não é documento; catalogado e exposto, torna-se documento.',
      },
      {
        id: 'aut-1-3-3',
        nome: 'Russell Ackoff',
        ano: 1989,
        obraPrincipal: 'From Data to Wisdom',
        ideiaChave: 'Cadeia de agregação de valor semântico e cognitivo (Pirâmide DIKW).',
        chipPegadinha: 'Dado é bruto sem contexto; informação possui significado; conhecimento é assimilado.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-3-1',
        afirmacao: 'Para Michael Buckland, artefatos tridimensionais e espécimes biológicos são desprovidos de natureza documental, estando excluídos da categoria de informação-como-coisa.',
        gabarito: 'E',
        porQue: 'Falso! Buckland defende categoricamente que qualquer objeto físico com capacidade de testemunho é informação-como-coisa e pode ser operado em sistemas.',
      },
      {
        id: 'peg-1-3-2',
        afirmacao: 'Conforme Suzanne Briet, qualquer objeto da natureza em seu estado silvestre original é considerado documento pela simples existência no mundo físico.',
        gabarito: 'E',
        porQue: 'Falso! Briet exige intencionalidade, tratamento e valor de prova. O antílope solto na savana não é documento; passa a sê-lo quando capturado e submetido a tratamento documentário.',
      },
    ],
  },
};
