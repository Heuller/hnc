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
  teoriaDensaMarkdown: `### 1. A Hierarquia Conceitual Ontológica: Dado, Informação, Conhecimento e Sabedoria (DIKW)
A fundamentação epistemológica da Ciência da Informação inicia-se pela diferenciação rigorosa dos quatro níveis da pirâmide ontológica de **Russell Ackoff (1989)**:

\`\`\`timeline
D | 1. DADO (Data) | Nível Base | Registros brutos, símbolos desconexos, sinais neutros sem semântica intrínseca
---> Contextualização e Estruturação
I | 2. INFORMAÇÃO (Information) | Nível Intermediário | Dados contextualizados, dotados de significado e redutores de incerteza
---> Internalização e Compreensão
K | 3. CONHECIMENTO (Knowledge) | Nível Avançado | Apropriação cognitiva, estruturas mentais, compreensão e "saber-fazer"
---> Juízo Ético e Discernimento
S | 4. SABEDORIA (Wisdom) | Nível Superior | Julgamento de valor humano, ação prudente e tomada de decisão de longo prazo
\`\`\`

1. **Dado (*Data*):** Representação bruta, discreta e desprovida de contexto de um fato ou evento. Não possui significado inerente nem capacidade de direcionar ações por si só (ex.: o registro isolado \`PL 1234/2026\`).
2. **Informação (*Information*):** Conjunto estruturado, processado e contextualizado de dados dotado de relevância e propósito, capaz de transmitir uma mensagem e diminuir a incerteza no receptor (ex.: \`O Projeto de Lei 1234/2026, de autoria da Comissão de Educação da Câmara dos Deputados, institui o Plano Nacional de Letramento Informacional em Bibliotecas Escolares\`).
3. **Conhecimento (*Knowledge*):** Informação internalizada, interpretada, processada e integrada às estruturas mentais de um indivíduo ou de uma comunidade. O conhecimento envolve crença justificada, experiência prática (*know-how*), juízo de valor e capacidade analítica de resolver problemas.
4. **Sabedoria (*Wisdom*):** O nível mais elevado da cognição humana. Envolve o discernimento moral, ético e teleológico sobre a aplicação do conhecimento para o bem comum e a tomada de decisões de longo prazo no Estado democrático de direito.

---

### 2. A Teoria da Informação de Michael Buckland (1991): "Information as Thing"
No clássico ensaio *Information as Thing* (1991), o professor e pesquisador **Michael Buckland** (Universidade da Califórnia, Berkeley) desmistificou o uso polissêmico do vocábulo "informação", categorizando-o em três manifestações ontológicas fundamentais:

| Manifestação de Buckland | Natureza Ontológica | Ocorrência / Localização | Pode ser Processada por Sistemas? | Exemplo Típico |
| :--- | :--- | :--- | :--- | :--- |
| **1. Informação como Processo** (*Information-as-process*) | Dinâmica comunicativa e psicológica; ato de transmitir e receber dados. | Evento interpessoal ou cognitivo transitório. | **NÃO** (é uma ação subjetiva). | O ato de um parlamentar ouvir a sustentação de um bibliotecário durante uma reunião. |
| **2. Informação como Conhecimento** (*Information-as-knowledge*) | Intangível e imaterial; crença internalizada que altera a estrutura mental. | Exclusivamente na mente humana (cognição). | **NÃO** (máquinas não pensam nem sentem). | O domínio que o analista legislativo adquire sobre a jurisprudência da Casa. |
| **3. Informação como Coisa** (*Information-as-thing*) | **Tangível, física ou digitalmente inscrita**; suportes materiais e registros de dados. | Em documentos, bases de dados, livros, mídias e artefatos materiais. | **SIM (É a ÚNICA que sistemas de informação operam!)** | Arquivos digitais (PDF, XML), livros impressos, microfilmes e artefatos físicos. |

#### O Conceito Fundamental para a Prática Documentária:
* Buckland demonstra que **nenhum sistema de recuperação da informação (computador, base de dados ou catálogo em fichas) é capaz de armazenar ou manipular "conhecimento" ou "processo"**.
* Sistemas de informação lidam **estritamente com Informação como Coisa** (*Information-as-thing*): bits gravados em disco magnético, caracteres impressos em papel, códigos de barras, imagens e espécimes físicos.
* **Ampliação para Objetos Tridimensionais:** Buckland defende que objetos físicos e naturais (como fósseis de dinossauro em um museu, sementes em bancos agronômicos ou peças de evidência criminal) são "informação-como-coisa" tão legítimos quanto relatórios em papel, desde que portadores de evidência informativa.

---

### 3. O Estatuto Ontológico do Documento: De Otlet a Suzanne Briet
O que transforma uma entidade qualquer do universo em um **documento**? A resposta foi construída pioneiramente por Paul Otlet (1934) e consolidada de forma brilhante por **Suzanne Briet (1951)** em *Qu'est-ce que la documentation?*:

\`\`\`timeline
O | Objeto da Natureza ou Artefato | Ponto de Partida | Entidade física ou ideia dispersa no universo sem destinação informacional prévia
---> Fixação em Suporte
C1 | 1. Materialidade | Condição Física ou Digital | Inscrição material tangível ou dados codificados em papel, película ou suporte eletrônico
---> Finalidade Comunicacional
C2 | 2. Intencionalidade | Registro Deliberado | Criação ou coleta orientada pelo propósito de comunicar, testemunhar ou preservar
---> Custódia e Representação
C3 | 3. Tratamento Institucional | Mediação Documentária | Classificação, catalogação e indexação perante instituição de guarda (biblioteca, arquivo ou museu)
---> Evidência Social
C4 | 4. Valor Probatório | Estatuto de Documento Pleno | O objeto atua como indício ou testemunho para comprovar e reconstituir fatos
\`\`\`

#### A. As Quatro Condições de Briet
1. **Materialidade:** Deve haver uma inscrição física tangível ou codificação digital em suporte de dados magnético, óptico ou em papel. Ideias puras sem fixação material não são documentos.
2. **Intencionalidade:** O objeto foi concebido, selecionado ou isolado com o objetivo deliberado de comunicar ou preservar um testemunho.
3. **Tratamento Documentário / Institucional:** O item foi indexado, inserido em uma coleção organizada, classificado e catalogado perante uma instituição de custódia (biblioteca, arquivo ou museu).
4. **Valor de Indício / Prova:** O objeto tem a capacidade de servir de testemunho objetivo para comprovar, reconstituir ou atestar um fenômeno físico, intelectual ou histórico.

#### B. A Hermenêutica do "Antílope de Briet":
* Um antílope correndo selvagem nas planícies africanas é apenas um ser vivo; **não** é documento.
* Se esse mesmo animal for capturado por expedição científica, transportado para Paris, estudado por biólogos, receber uma placa identificadora no Jardim das Plantas e sua ficha for tombada no catálogo do Museu de História Natural, ele **torna-se um documento primário**.
* As fotografias do animal, os artigos publicados e os relatórios de autópsia constituem documentos secundários derivados.

---

### 4. Os Três Paradigmas Epistemológicos de Rafael Capurro (2003)
No seminal artigo *Epistemology and Information Science* (2003), o filósofo e cientista da informação teuto-uruguaio **Rafael Capurro** propôs uma estrutura de três paradigmas históricos para classificar as teorias e práticas da Ciência da Informação:

#### A. O Paradigma Físico (Décadas de 1940 a 1960)
* **Raiz Teórica:** Teoria Matemática da Comunicação de Claude Shannon e Warren Weaver (1949).
* **Conceito de Informação:** A informação é tratada como uma **quantidade física mensurável** (bits) ou sinal que viaja através de um canal transmissor neutro de um emissor A até um receptor B (*Conduit Metaphor* - metáfora do duto).
* **Foco da Pesquisa:** A física do sinal, largura de banda, capacidade de canal, redução da entropia e eliminação de ruído técnico na transmissão mecânica.
* **Limitação Epistemológica:** Ignora por completo a semântica, o significado da mensagem, o contexto cultural e a subjetividade humana do receptor.

#### B. Paradigma Cognitivo (Décadas de 1970 a 1980)
* **Raiz Teórica:** Teoria do Conhecimento, Psicologia Cognitiva e Inteligência Artificial, liderado por Bertram Brookes, Nicholas Belkin e Peter Ingwersen.
* **Conceito de Informação:** A informação é um **processo cognitivo que modifica estruturas mentais**. Não é o sinal físico em si, mas aquilo que transforma os estados de conhecimento do usuário.
* **A Equação Fundamental da Ciência da Informação (Bertram Brookes, 1980):**
  $$K[S] + \\Delta I = K[S + \\Delta S]$$
  *Onde $K[S]$ representa a estrutura cognitiva inicial do sujeito, $\\Delta I$ é o incremento informacional assimilado, e $K[S + \\Delta S]$ é a estrutura de conhecimento alterada e enriquecida.*
* **O Modelo ASK (*Anomalous State of Knowledge*) de Nicholas Belkin (1980):** O usuário não busca informação porque sabe exatamente o que deseja, mas porque vivencia um "Estado Anômalo de Conhecimento" — uma lacuna, incerteza ou dúvida que ele é incapaz de articular perfeitamente em linguagem de busca.
* **Brenda Dervin e o Modelo *Sense-Making*:** O usuário encontra uma "brecha" cognitiva (*gap*) e busca pontes informacionais para dar sentido ao seu mundo e continuar sua caminhada.

#### C. Paradigma Social ou Hermenêutico-Pragmático (Década de 1990 em diante)
* **Raiz Teórica:** Hermenêutica filosófica, semiótica social, sociologia do conhecimento e pragmatismo, liderado por Rafael Capurro, **Birger Hjørland** e Bernd Frohmann.
* **Conceito de Informação:** A informação não reside nem no canal físico nem na mente isolada do sujeito; ela é **socialmente construída e situada historicamente** dentro de comunidades discursivas de prática.
* **A Análise de Domínio (*Domain Analysis*) de Birger Hjørland (1995/2002):**
  * O sentido, relevância e valor de qualquer documento são determinados pela **comunidade de especialistas (domínio)** que o utiliza.
  * A melhor maneira de compreender a informação é estudar as comunidades discursivas, suas linguagens técnicas, seus critérios de verdade e seus instrumentos de comunicação científica.
* **Bernd Frohmann e a Materialidade da Informação:** A informação não é uma entidade etérea transcendental; é o produto concreto de práticas documentárias e institucionais reguladas por relações de poder social.

---

### 5. Aplicação no Parlamento e na Câmara dos Deputados
No contexto legislativo da Câmara dos Deputados:
* No **Paradigma Físico**, a Câmara preocupa-se com a robustez dos servidores, APIs de dados abertos e a integridade da transmissão das votações eletrônicas sem corrupção de pacotes.
* No **Paradigma Cognitivo**, o serviço de referência legislativa ajuda o assessor parlamentar a sair de um Estado Anômalo de Conhecimento (ASK), traduzindo uma demanda vaga de formulação de política pública em termos técnicos precisos.
* No **Paradigma Social (Análise de Domínio)**, a Biblioteca Pedro Aleixo estrutura vocabulários e tesauros especializados (como o VCB da RVBI) moldados exatamente às práticas discursivas do Direito Constitucional e do Processo Legislativo brasileiro.

---

### 6. Quadro de Distratores Típicos do Cebraspe em Ontologia e Paradigmas

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"Segundo Michael Buckland, os sistemas informatizados de bibliotecas são capazes de armazenar tanto informação como coisa quanto informação como processo."* | **ERRADO** | Sistemas só podem armazenar e processar **informação como coisa**. O processo é a dinâmica subjetiva do ato de informar. |
| *"A equação fundamental de Bertram Brookes pertence epistemologicamente ao paradigma físico de Shannon e Weaver."* | **ERRADO** | A equação de Brookes pertence expressamente ao **paradigma cognitivo**, pois modela a transformação das estruturas mentais do sujeito ($K[S]$). |
| *"No paradigma social da Ciência da Informação, a relevância de um documento é uma medida matemática universal invariável no tempo e no espaço."* | **ERRADO** | No paradigma social (Hjørland), a relevância é **situada, contextual e relativa** à comunidade de domínio que avalia o documento. |
| *"Para Suzanne Briet, a intencionalidade de registro é irrelevante para que um objeto material seja elevado à categoria de documento."* | **ERRADO** | A **intencionalidade** é um dos 4 requisitos cumulativos obrigatórios estabelecidos por Briet (materialidade, intencionalidade, tratamento e valor probatório). |`,
  checkpoints: [
    {
      id: 'cp-1-3-1',
      pergunta: 'Micro-Checkpoint 1: Buckland e a Informação como Coisa',
      item: "Para Michael Buckland, a dimensão da 'informação como coisa' exclui qualquer objeto tridimensional ou artefato da natureza, aplicando-se apenas a livros impressos.",
      gabarito: 'E',
      justificativa: 'Errado! Buckland enfatiza que qualquer entidade física tangível (inclusive fósseis, esculturas, gravações) é informação como coisa quando portadora de evidência informativa.',
      versao_correta: "Para Michael Buckland, a dimensão da 'informação como coisa' abrange qualquer entidade física tangível portadora de evidência informativa, inclusive objetos tridimensionais, documentos e fósseis.",
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
