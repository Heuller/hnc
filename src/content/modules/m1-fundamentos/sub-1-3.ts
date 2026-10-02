import type { ModuloFilho } from '../../../domain/types';

export const submodulo13: ModuloFilho = {
  id: 'sub-1-3',
  numero: '1.3',
  titulo: 'Conceitos de Informação, Conhecimento e Documento: Ontologia e Dimensões',
  titulo_curto: 'Informação, Conhecimento e Documento',
  descricaoCurta: 'A pirâmide informacional (Dado, Informação, Conhecimento, Sabedoria), Michael Buckland e a Informação como Coisa, o conceito de documento segundo Briet, Mey e Le Coadic.',
  tempoEstimadoMinutos: 25,
  autoresChave: ['Michael Buckland', 'Suzanne Briet', 'Rafael Capurro', 'Birger Hjørland', 'Russell Ackoff', 'Claude Shannon'],
  alertasCebraspe: [
    'Michael Buckland classifica a informação em: (1) Informação como Processo; (2) Informação como Conhecimento; (3) Informação como Coisa. O Cebraspe tenta restringir "informação como coisa" a papéis e livros, quando abrange QUALQUER entidade tangível (incluindo fósseis, esculturas, gravações).',
    'Segundo Rafael Capurro, a Ciência da Informação evoluiu por três paradigmas epistemológicos: (1) Físico (sinal e transmissão neutra); (2) Cognitivo (estruturas mentais do indivíduo, Brookes e Belkin); (3) Social (informação situada em comunidades de prática e análise de domínio de Hjørland). O Cebraspe adora inverter o paradigma cognitivo com o social.',
    'Suzanne Briet definiu documento a partir de quatro condições necessárias: materialidade, intencionalidade, tratamento e capacidade de servir de prova/indício.',
    'Dado é um registro bruto desprovido de contexto; Informação é o dado dotado de significado e relevância; Conhecimento é a apropriação cognitiva pelo ser humano.',
  ],
  quadroComparativo: {
    titulo: 'A Tríade de Michael Buckland (1991) e os Paradigmas de Capurro (2003)',
    colunas: ['Perspectiva Teórica', 'Conceito Central', 'Foco de Investigação', 'Exemplo Prático na Câmara'],
    linhas: [
      ['Buckland: Informação-como-coisa', 'Tangível / Suporte físico ou digital', 'Documentos, registros e artefatos operáveis por sistemas', 'O PDF do Diário da Câmara ou o texto impresso de um projeto de lei'],
      ['Buckland: Informação-como-conhecimento', 'Intangível / Cognitivo', 'Crença justificada internalizada na mente humana', 'O domínio conceitual do regimento interno pelo bibliotecário legislativo'],
      ['Capurro: Paradigma Físico', 'Transmissão objetiva de sinais (conduíte)', 'Sistemas de transmissão, canal e redução de ruído técnico', 'Envio de dados brutos de votações via API semântica'],
      ['Capurro: Paradigma Cognitivo', 'Transformação de estados de conhecimento', 'Usuário individual, modelo ASK (Belkin) e equação de Brookes', 'O pesquisador formulando sua dúvida e alterando sua estrutura mental'],
      ['Capurro: Paradigma Social', 'Informação situada e compartilhada', 'Comunidades de prática, análise de domínio e linguagem coletiva', 'O trabalho informacional focado nas bancadas, comissões e debate público'],
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
* **O Antílope de Suzanne Briet:** Um antílope correndo livre na savana africana não é um documento; porém, quando capturado, descrito por zoólogos, exposto em um jardim zoológico e classificado em uma ficha taxonômica, transforma-se em documento!

---

### 4. Os Três Paradigmas Epistemológicos de Rafael Capurro (2003)
Em seu influente estudo epistemológico, Rafael Capurro analisa a evolução teórica da Ciência da Informação através de três paradigmas fundamentais, frequentemente cobrados pela banca:

#### A. Paradigma Físico
* **Origem:** Teoria Matemática da Comunicação de Claude Shannon e Warren Weaver (1949).
* **Conceito de Informação:** A informação é vista como um **objeto físico** ou sinal que viaja através de um canal transmissor de um ponto A (emissor) a um ponto B (receptor).
* **Premissa:** A informação existe de forma objetiva e independente dos sujeitos que a processam. O foco é a integridade do sinal, velocidade da linha e eliminação de ruídos no canal (*conduit metaphor*).

#### B. Paradigma Cognitivo
* **Origem:** Décadas de 1970 e 1980, impulsionado por Bertram Brookes, Nicholas Belkin e Peter Ingwersen.
* **Conceito de Informação:** A informação deixa de ser um mero sinal e passa a ser compreendida como um **processo que modifica as estruturas cognitivas** do indivíduo.
* **A Equação Fundamental de Brookes:**
  $$K[S] + \\Delta I = K[S + \\Delta S]$$
  *(Uma estrutura de conhecimento $K[S]$ ao receber um incremento informacional $\\Delta I$ transforma-se em uma nova estrutura $K[S + \\Delta S]$).*
* **O Modelo ASK de Belkin:** O usuário busca informação a partir de um *Anomalous State of Knowledge* (Estado Anômalo de Conhecimento), uma lacuna ou incerteza em sua mente.

#### C. Paradigma Social (Hermenêutico-Pragmático)
* **Origem:** Década de 1990 em diante, com Rafael Capurro e Birger Hjørland.
* **Conceito de Informação:** A informação não reside apenas no objeto físico nem na mente isolada do indivíduo; ela é **situada em um contexto histórico, social e cultural**.
* **Análise de Domínio (*Domain Analysis*) de Hjørland:** O significado e a relevância da informação dependem da comunidade discursiva e dos grupos profissionais que a compartilham.
* **Relevância para a Câmara:** Documentos legislativos possuem significados específicos para a comunidade parlamentar, operadores do direito e sociedade civil, dependendo de seus códigos culturais e finalidades políticas.`,
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
    {
      id: 'cp-1-3-3',
      pergunta: 'Micro-Checkpoint 3: Paradigmas Epistemológicos de Capurro',
      item: 'No paradigma social da Ciência da Informação, proposto por teóricos como Capurro e Hjørland, a informação é analisada a partir de sua inserção em comunidades discursivas e contextos históricos específicos, superando o foco estritamente individualista do paradigma cognitivo.',
      gabarito: 'C',
      justificativa: 'Certo! O paradigma social (ou hermenêutico-pragmático) coloca a comunidade de conhecimento e o contexto sócio-histórico como eixos centrais da interpretação informacional.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-3-1',
        periodo: '1949 / 1951',
        disciplina: 'Paradigmas Iniciais e Documento',
        focoPrincipal: 'Teoria Matemática (Shannon/Weaver, Paradigma Físico) e as 4 condições do documento (Briet)',
        figuraChave: 'Claude Shannon e Suzanne Briet',
      },
      {
        id: 'tl-1-3-2',
        periodo: '1980 / 1991',
        disciplina: 'Cognitivismo e Ontologia',
        focoPrincipal: 'Paradigma Cognitivo (Brookes e Belkin) e a Tríade de Buckland (Processo, Conhecimento, Coisa)',
        figuraChave: 'Bertram Brookes e Michael Buckland',
      },
      {
        id: 'tl-1-3-3',
        periodo: '2003',
        disciplina: 'Epistemologia Social',
        focoPrincipal: 'Os 3 Paradigmas de Capurro (Físico, Cognitivo e Social) e Análise de Domínio (Hjørland)',
        figuraChave: 'Rafael Capurro e Birger Hjørland',
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
        nome: 'Rafael Capurro',
        ano: 2003,
        obraPrincipal: 'The Foundation of Information Science',
        ideiaChave: 'Tripartição paradigmática: Paradigma Físico (sinal), Cognitivo (mente individual) e Social (comunidade/domínio).',
        chipPegadinha: 'O paradigma social não nega os anteriores, mas insere a informação nas práticas coletivas.',
      },
      {
        id: 'aut-1-3-4',
        nome: 'Birger Hjørland',
        ano: 1995,
        obraPrincipal: 'Domain Analysis in Information Science',
        ideiaChave: 'A análise de domínio: a melhor forma de entender a informação é analisar os campos de conhecimento e discurso.',
        chipPegadinha: 'Pilar fundamental do paradigma social da Ciência da Informação.',
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
        afirmacao: 'O paradigma cognitivo da Ciência da Informação concebe a informação como um sinal objetivo transferido por meio de canais físicos, desconsiderando as estruturas mentais do usuário.',
        gabarito: 'E',
        porQue: 'Essa é a definição do paradigma FÍSICO (Shannon/Weaver). O paradigma cognitivo (Brookes, Belkin) foca justamente nas estruturas mentais e na alteração do estado de conhecimento do sujeito.',
      },
    ],
  },
};
