import type { ModuloFilho } from '../../../domain/types';

export const submodulo121: ModuloFilho = {
  id: 'sub-12-1',
  numero: '12.1',
  editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 1: Compreensão e Vocabulário Técnico Contemporâneo)',
  preRequisitos: [],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-6-7",
          "titulo": "IA Aplicada à Informação",
          "motivo": "Terminologia contemporânea em inglês de inteligência artificial e RAG."
      }
  ],
  titulo: 'Modelo Interativo-Compensatório e Leitura Estratégica (Skimming, Scanning & Ideia Central)',
  antesDeLer: [
    {
      termo: 'Skimming e Scanning',
      definicao: 'Técnicas de leitura rápida: skimming identifica a ideia geral e o tom do texto; scanning localiza informações pontuais específicas (datas, nomes).',
      exemploBiblioteca: 'Localizar rapidamente a data de publicação de uma diretriz da IFLA em inglês sem ler o manual inteiro.',
    },
    {
      termo: 'Tópico Frasal (Topic Sentence)',
      definicao: 'Primeira frase ou oração nuclear de um parágrafo que resume sua ideia central e orienta o desenvolvimento do argumento.',
      exemploBiblioteca: 'Leitura focada dos tópicos frasais de um artigo sobre preservação digital para elaborar resumo executivo para a chefia.',
    },
    {
      termo: 'Gênero Textual Acadêmico em Inglês',
      definicao: 'Estrutura típica de artigos científicos (IMRAD: Introduction, Methods, Results, and Discussion) com linguagem impessoal.',
      exemploBiblioteca: 'Identificação das seções de resultados de um artigo da Journal of the Association for Information Science and Technology (JASIST).',
    },
    {
      termo: 'Inferência Contextual',
      definicao: 'Habilidade de deduzir o significado de vocábulos desconhecidos a partir das pistas sintáticas e do contexto discursivo geral.',
      exemploBiblioteca: 'Compreender o sentido da expressão \'data curation workflow\' em manual técnico da Library of Congress sem usar dicionário.',
    },
  ],
  descricaoCurta: 'O modelo psicocognitivo interativo-compensatório de Keith Stanovich, processamento top-down vs bottom-up, leitura rápida com Skimming e Scanning, e técnicas de apreensão da ideia central e do propósito comunicativo do autor no padrão Cebraspe.',
  tempoEstimadoMinutos: 11,
  autoresChave: ['Keith Stanovich (Interactive-Compensatory Model)', 'David Rumelhart (Schema Theory in Reading)', 'Kenneth Goodman (Psycholinguistic Reading Model)', 'Prof. Gabriela Kruger'],
  alertasCebraspe: [
    'O Cebraspe cobra massivamente a apreensão do objetivo primordial do texto. Assertivas que destacam apenas um detalhe secundário ou um exemplo do 3º parágrafo como "o objetivo principal do autor" são invariavelmente ERRADAS (extrapolação ou redução indevida).',
    'Palavras restritivas na interpretação em inglês: Termos como "solely", "exclusively", "only", "never" e "entirely" devem acender alerta vermelho máximo. Na imensa maioria dos casos, o texto expressa uma visão mais matizada e a assertiva é ERRADA.',
    'Nunca traduza palavra por palavra: A prova do Cebraspe é desenhada para testar a compreensão holística de parágrafos e ideias complexas de artigos de geopolítica, direito internacional e tecnologia. A tradução literal palavra por palavra consome tempo e induz ao erro por falsos amigos.',
  ],
  quadroComparativo: {
    titulo: 'Estratégias Cognitivas de Leitura Instrumental em Provas Cebraspe',
    colunas: ['Técnica de Leitura', 'Operação Mental', 'Foco no Texto', 'Quando Utilizar no Cebraspe'],
    linhas: [
      ['Skimming', 'Leitura panorâmica dinâmica (Top-Down)', 'Título, subtítulo, 1ª frase dos parágrafos (topic sentences) e conclusão', 'Para responder itens sobre ideia central, gênero textual e propósito do autor'],
      ['Scanning', 'Varredura visual seletiva (Bottom-Up direcionado)', 'Palavras-chave, números, datas, nomes próprios e termos técnicos', 'Para responder itens factuais pontuais (ex.: "Segundo o texto, no ano de 2024...")'],
      ['Leitura Detalhada', 'Processamento profundo de microestruturas', 'Um parágrafo ou sentença específica referenciada (ex.: linhas 12 a 15)', 'Para julgar itens de inferência sutil, paráfrase ou referenciação pronominal'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Ciência da Leitura em Segunda Língua: O Modelo Interativo-Compensatório

Pesquisas seminais em psicolinguística cognitiva (**Keith Stanovich**, 1980; **David Rumelhart**, 1977) revolucionaram o ensino de leitura instrumental ao formular o **Modelo Interativo-Compensatório** (*Interactive-Compensatory Model*):

1. **Processamento Ascendente (Bottom-Up):** Decodificação dos elementos visuais, morfológicos e sintáticos da frase (palavra por palavra).
2. **Processamento Descendente (Top-Down):** Mobilização dos conhecimentos prévios do leitor (*background knowledge* / *schemata*) sobre o tema, o gênero discursivo e a macroestrutura do texto.
3. **O Princípio da Compensação:** Quando o candidato encontra uma palavra desconhecida em inglês (déficit *bottom-up*), o cérebro treinado compensa imediatamente utilizando o contexto semântico, os marcadores discursivos e o conhecimento temático (*top-down*).

> **Diretriz de Alta Performance:** Você NÃO precisa conhecer 100% dos vocábulos do texto para gabaritar a prova de inglês do Cebraspe. O segredo reside na compensação estratégica e na identificação da arquitetura argumentativa.

---

### 2. A Sequência de Ataque à Prova Cebraspe de Inglês

A abordagem ingênua de ler o texto completo do início ao fim antes de olhar os itens é a principal responsável pela perda de tempo e fadiga mental. O método científico prescreve a **Sequência Invertida**:

#### Passo 1: Leitura Prévia dos Enunciados e Assertivas
Antes de abrir o texto, leia as 5 ou 10 assertivas da prova. Elas revelam:
* O assunto exato do texto (ex.: inteligência artificial no setor público, comércio internacional, direitos humanos).
* As palavras-âncora que servirão de alvo para o *Scanning*.
* As linhas específicas que serão objeto de cobrança direta.

#### Passo 2: Skimming da Macroestrutura (Leitura Panorâmica)
Faça uma leitura de 90 segundos observando:
* O título e o subtítulo (se houver).
* A fonte original no rodapé (ex.: *The Economist*, *The Guardian*, *Nature*, relatórios da ONU).
* A primeira sentença de cada parágrafo (*Topic Sentence*), que na tradição retórica anglo-saxã carrega 80% da ideia central do parágrafo.

#### Passo 3: Scanning e Checagem Focada das Assertivas
Volte ao texto apenas nas regiões exigidas por cada item para verificar a fidelidade da assertiva frente ao texto original.

---

### 3. As Três Armadilhas Clássicas de Interpretação do Cebraspe

Ao avaliar assertivas de compreensão global, o Cebraspe opera através de 3 desvios conceituais deliberados:

1. **Extrapolação:** A assertiva introduz uma conclusão plausível no mundo real, mas que NÃO está respaldada por nenhuma frase do texto. Lembre-se: no Cebraspe, julga-se estritamente *o que o texto diz ou permite inferir*, e não o que é verdade no senso comum.
2. **Redução / Foco Indevido:** A assertiva toma um exemplo ou dado menor mencionado de passagem e afirma que aquele é o tema principal da obra.
3. **Inversão de Causa e Efeito:** A assertiva inverte quem gerou quem no argumento apresentado pelo autor.

---

### 4. Textos Autênticos em Contexto Contemporâneo: Bibliotecas, Dados e IA

O Cebraspe seleciona textos de periódicos internacionais conceituados (*Journal of Documentation*, *The Economist*, *Communications of the ACM*, *IFLA Journal*). A seguir, dois modelos autênticos de leitura com análise pragmática de itens:

#### Texto I: Artificial Intelligence and Retrieval-Augmented Generation in Parliamentary Libraries

> *"Modern legislative libraries are undergoing a profound paradigm shift driven by the integration of Large Language Models and Retrieval-Augmented Generation (RAG) frameworks. Rather than replacing human information professionals, automated retrieval systems rely heavily on structured metadata, controlled vocabularies, and rigorous cataloguing standards to prevent algorithmic hallucinations. Although automated summarization accelerates bill analysis, parliamentary librarians must retain oversight to ensure that legislative briefs reflect neutral, comprehensive, and legally verifiable evidence."*

* **Análise de Item de Inferência (Cebraspe):**
  * *Assertiva:* *"According to the text, the deployment of generative artificial intelligence in parliamentary libraries eliminates the necessity of human metadata curation and cataloguing."*
  * *Julgamento:* **ERRADO.** O texto estabelece exatamente o oposto: os sistemas automatizados dependem fortemente (*rely heavily on*) de metadados estruturados, vocabulários controlados e curadoria humana para evitar alucinações algorítmicas (*prevent algorithmic hallucinations*).
* **Análise de Item de Reescrita Sintática:**
  * *Assertiva:* *"In the sentence 'Although automated summarization accelerates bill analysis, parliamentary librarians must retain oversight', the conjunction 'Although' could be correctly replaced with 'Even though' without altering the syntactic relationship or the original meaning."*
  * *Julgamento:* **CERTO.** Ambos os conectivos (*although* e *even though*) pertencem à família do contraste/concessão e introduzem orações subordinadas adverbiais concessivas completas (compostas por sujeito e verbo).

#### Texto II: Open Government Data and Long-Term Digital Preservation

> *"The longevity of open parliamentary data depends not merely on cloud-based storage, but on sustainable digital preservation architectures. Formats such as PDF/A and uncompressed TIFF ensure that historical legislative proceedings remain legible across generations without reliance on proprietary software. Nevertheless, without continuous fixity monitoring via cryptographic hashes, digital repositories remain vulnerable to bit-level deterioration and undetected corruption."*

* **Análise de Item de Compreensão Global:**
  * *Assertiva:* *"The author implies that relying solely on cloud storage is insufficient to guarantee the long-term accessibility and integrity of parliamentary records."*
  * *Julgamento:* **CERTO.** O autor afirma categoricamente que a longevidade depende não meramente do armazenamento em nuvem (*depends not merely on cloud-based storage*), mas de arquiteturas sustentáveis e checagem contínua de fixidez.
* **Análise de Item Gramatical de Conectivo:**
  * *Assertiva:* *"The transition marker 'Nevertheless' expresses a causal relationship between digital formats and repository vulnerability."*
  * *Julgamento:* **ERRADO.** *Nevertheless* é um marcador discursivo adversativo/concessivo (equivale a *however*, *nonetheless*, *todavia*), indicando contraste ou quebra de expectativa, e jamais relação de causa e efeito.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **IA Aplicada à Informação (sub-6-7):** Terminologia contemporânea em inglês de inteligência artificial e RAG.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A leitura instrumental em Língua Inglesa no padrão Cebraspe opera pelo **Modelo Interativo-Compensatório (Stanovich)**, combinando técnicas estratégicas de leitura rápida:
1. **O Modelo Interativo-Compensatório (Keith Stanovich):**
   - A leitura eficiente não é puramente *Bottom-up* (decodificação mecânica de letra por letra e palavra por palavra) nem puramente *Top-down* (adivinhação baseada apenas no conhecimento de mundo).
   - É um processo interativo: quando o leitor tem deficiência em um nível (ex.: não conhece o significado de um termo técnico isolado), ele compensa imediatamente utilizando pistas contextuais, morfológicas e conhecimento prévio do assunto.
2. **Técnicas Canônicas de Leitura:**
   - **Skimming (Varredura Panorâmica):** Leitura rápida dos títulos, subtítulos, primeira e última frase dos parágrafos (*topic sentences*) para captar a **ideia central** e o propósito comunicativo geral do texto em menos de 1 minuto.
   - **Scanning (Busca Pontual Específica):** Movimento ocular em zigue-zague à procura de um dado factual isolado (número, data, nome próprio, sigla, termo técnico) sem ler o texto ao redor.
3. **Pistas Tipográficas e Estruturais:**
   - Palavras em negrito, itálico, números, travessões, parênteses e títulos orientam o foco de atenção e revelam a macroestrutura argumentativa.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Scanning em Relatório da OCDE para a Comissão de Finanças):** Um deputado relator precisa saber a alíquota média do IVA praticada nos países da OCDE em 2023. O bibliotecário recebe um relatório em inglês de 200 páginas e aplica o **Scanning**: localiza a tabela com o termo *"Value Added Tax (VAT)"* e a coluna *"Average 2023"*, extraindo o número exato em 30 segundos.
- **Cenário 2 (Skimming em Artigo da IFLA sobre Preservação Digital):** Ao avaliar um artigo internacional recém-publicado pela *IFLA Journal*, o bibliotecário faz **Skimming** no *Abstract* e na *Conclusion*, identificando em 2 minutos que o texto trata da migração de formatos para PDF/A-4, selecionando-o para a base da RVBI.
- **Cenário 3 (Modelo Compensatório em Tradução Jurídica):** Lendo um tratado da União Europeia, o analista depara-se com a expressão arcaica *"heretofore"*. Em vez de travar a leitura, aplica o modelo compensatório de Stanovich: a oração trata de atos anteriores à assinatura do acordo, inferindo perfeitamente o sentido de *"até o presente momento"*.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Técnica / Estratégia | Objetivo Primário | Velocidade | Quando Usar no Cebraspe |
| :--- | :--- | :--- | :--- |
| **Skimming** | Compreender a ideia geral / tese central | Muito rápida | Itens sobre o objetivo principal do autor |
| **Scanning** | Localizar dado isolado (número/nome) | Instantânea | Itens sobre datas, porcentagens e fatos pontuais |
| **Bottom-up** | Decodificação lexical palavra por palavra | Lenta | Itens sobre sinônimos ou regência de preposição |
| **Top-down** | Uso de conhecimento prévio de mundo | Rápida | Inferências e intenções implícitas do autor |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Generalização Indevida da Ideia Central:** A banca pega um detalhe secundário mencionado em uma única linha do terceiro parágrafo e afirma que aquela é a ideia central (*main idea*) de todo o texto. **Gabarito: ERRADO.** A ideia central deve abranger a tese defendida pelo autor do início ao fim.
- **Scanning em Questões de Inferência:** Tentar responder a itens de inferência global apenas buscando palavras idênticas com scanning. O Cebraspe usa paráfrases sinônimas para testar se o candidato realmente compreendeu o sentido.
- **Tradução Palavra por Palavra:** Dizer que a leitura instrumental exige traduzir mentalmente cada palavra para o português antes de responder. **Gabarito: ERRADO.** A leitura instrumental busca a apreensão direta do significado no próprio inglês.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **NATION, I. S. P.** *Teaching ESL/EFL Reading and Writing*. New York: Routledge, 2009. (A principal autoridade em pedagogia e estratégias de leitura em língua inglesa).
- **NUTTALL, Christine.** *Teaching Reading Skills in a Foreign Language*. Oxford: Macmillan, 2005. (A referência clássica das técnicas de skimming e scanning).
- **STANOVICH, Keith E.** Toward an interactive-compensatory model of individual differences in the development of reading fluency. *Reading Research Quarterly*, v. 16, n. 1, p. 32-71, 1980.
- **GRABE, William; STOLLER, Fredricka L.** *Teaching and Researching Reading*. 3. ed. New York: Routledge, 2019.
- **CEBRASPE.** *Caderno de Provas Comentadas de Língua Inglesa — Concursos Públicos Federais*. Brasília: Cebraspe, 2023.`,
  checkpoints: [
    {
      id: 'chk-12-1-1',
      pergunta: 'Julgue o item sobre técnicas de leitura instrumental em língua inglesa para o padrão Cebraspe:',
      item: 'A técnica de leitura conhecida como skimming consiste na busca minuciosa por palavras-chave específicas e dados factuais no texto, como datas, valores e porcentagens, sendo indicada para responder a itens pontuais.',
      gabarito: 'E',
      justificativa: 'Inversão clássica de conceitos! A busca por dados específicos, números e palavras-chave pontuais é o SCANNING. O SKIMMING, por sua vez, é a leitura panorâmica rápida destinada a apreender a ideia geral, a organização estrutural e o objetivo global do texto.',
    },
    {
      id: 'chk-12-1-2',
      pergunta: 'Julgue a assertiva referente ao processamento cognitivo segundo o modelo de Keith Stanovich:',
      item: 'De acordo com o modelo interativo-compensatório, um candidato que desconheça um vocábulo específico no texto em inglês pode compensar essa limitação recorrendo ao contexto global da frase e ao seu conhecimento prévio sobre o tema.',
      gabarito: 'C',
      justificativa: 'Perfeito. O modelo interativo-compensatório de Keith Stanovich postula que a compreensão leitora resulta da interação simultânea de processos ascendentes (bottom-up) e descendentes (top-down), permitindo que lacunas lexicais sejam compensadas por pistas contextuais e esquemas conceituais do leitor.',
    },
    {
      id: 'chk-12-1-3',
      pergunta: 'Julgue o item relativo às armadilhas de extrapolação em interpretação de texto da banca Cebraspe:',
      item: 'Caso uma assertiva da prova apresente uma informação verdadeira e coerente com a realidade contemporânea, o candidato deve julgá-la como CERTA, mesmo que tal afirmação não encontre respaldo direto ou inferencial no texto-base apresentado.',
      gabarito: 'E',
      justificativa: 'Erro gravíssimo de interpretação! No Cebraspe, o julgamento é restrito aos limites textuais e inferenciais do documento fornecido. Afirmar algo verdadeiro no mundo real mas ausente no texto constitui a falácia da EXTRAPOLAÇÃO, e o gabarito oficial é ERRADO.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-12-1-1',
        periodo: '1977',
        disciplina: 'Psicolinguística',
        focoPrincipal: 'Teoria dos Esquemas e o Processamento Interativo na Leitura',
        figuraChave: 'David Rumelhart',
      },
      {
        id: 'tm-12-1-2',
        periodo: '1980',
        disciplina: 'Ciência Cognitiva',
        focoPrincipal: 'O Modelo Interativo-Compensatório de Compreensão Leitora',
        figuraChave: 'Keith Stanovich',
      },
      {
        id: 'tm-12-1-3',
        periodo: '1998 - Atual',
        disciplina: 'Inglês Instrumental para Concursos',
        focoPrincipal: 'Sistematização de Estratégias Skimming/Scanning para Bancas Federais',
        figuraChave: 'Prof. Gabriela Kruger',
      },
    ],
    autores: [
      {
        id: 'aut-12-1-1',
        nome: 'Keith Stanovich',
        ano: 1980,
        obraPrincipal: 'Toward an Interactive-Compensatory Model of Individual Differences in the Development of Reading Fluency',
        ideiaChave: 'Leitores fluentes alternam e compensam pistas lexicais e contextuais de forma interativa.',
        chipPegadinha: 'Modelo Interativo-Compensatório',
      },
      {
        id: 'aut-12-1-2',
        nome: 'David Rumelhart',
        ano: 1977,
        obraPrincipal: 'Toward an Interactive Model of Reading',
        ideiaChave: 'A leitura é um processo de negociação ativa entre os esquemas mentais do leitor e o texto.',
        chipPegadinha: 'Teoria dos Esquemas',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-12-1-1',
        afirmacao: 'Se uma assertiva em inglês contiver a expressão "the author primarily aims to", ela está indagando sobre um exemplo do meio do texto.',
        gabarito: 'E',
        porQue: '"Primarily aims to" exige a identificação do objetivo macro, a tese central defendida pelo autor, e não um detalhe ilustrativo secundário.',
      },
      {
        id: 'peg-12-1-2',
        afirmacao: 'O vocábulo "seldom" em uma sentença inglesa introduz uma ideia de frequência constante e rotineira.',
        gabarito: 'E',
        porQue: '"Seldom" significa "raramente" / "quase nunca" (sinônimo de rarely). O Cebraspe usa advérbios de frequência negativa para inverter o sentido.',
      },
    ],
  },
};
