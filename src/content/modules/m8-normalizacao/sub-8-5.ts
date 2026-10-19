import type { ModuloFilho } from '../../../domain/types';

export const submodulo85: ModuloFilho = {
  id: 'sub-8-5',
  numero: '8.5',
  editalRef: 'Bloco D - Item 5.6 e 5.7',
  preRequisitos: ["sub-8-3"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-1",
          "titulo": "AACR2r e Fichas Catalográficas",
          "motivo": "Elaboração técnica de fichas no verso da folha de rosto."
      },
      {
          "submoduloId": "sub-6-1",
          "titulo": "Acessibilidade Digital",
          "motivo": "Diretrizes WCAG 2.2 e formatos acessíveis (EPUB, PDF/A)."
      }
  ],
  titulo: 'Editoração, Fichas Catalográficas, Índices, Infografia e Acessibilidade',
  antesDeLer: [
    {
      termo: 'Ficha Catalográfica (CIP)',
      definicao: 'Catalogação na Publicação impressa no verso da folha de rosto de livros conforme padrão do AACR2 e regras da NBR 14724.',
      exemploBiblioteca: 'Elaboração pelo bibliotecário da Câmara da ficha catalográfica para as publicações da Edições Câmara com número de chamada e ISBN.',
    },
    {
      termo: 'ISBN e ISSN',
      definicao: 'Padrões numéricos internacionais de identificação unívoca de publicações: ISBN para monografias/livros e ISSN para publicações seriadas.',
      exemploBiblioteca: 'Gestão e solicitação de novos prefixos ISBN junto à Câmara Brasileira do Livro (CBL) para relatórios parlamentares.',
    },
    {
      termo: 'ABNT NBR 6034:2004 (Índice)',
      definicao: 'Norma que estabelece os requisitos para apresentação de índices remissivos, onomásticos e temáticos em publicações.',
      exemploBiblioteca: 'Criação do índice remissivo analítico ao final da edição anotada do Regimento Interno da Câmara dos Deputados.',
    },
    {
      termo: 'Acessibilidade Editorial',
      definicao: 'Práticas de design e diagramação que garantem o acesso a pessoas com deficiência (descrição de imagens, contraste, fontes legíveis).',
      exemploBiblioteca: 'Adaptação das publicações institucionais da Câmara para formatos acessíveis em áudio e ePub compatíveis com leitores de tela.',
    },
  ],
  descricaoCurta: 'Elaboração da ficha catalográfica (ABNT NBR 14724:2011 e CIP); índices e instrumentos auxiliares (ABNT NBR 6034:2004); formatos digitais de editoração (EPUB, PDF/A); infografia funcional (Alberto Cairo, Edward Tufte) e acessibilidade de produtos informacionais.',
  tempoEstimadoMinutos: 15,
  autoresChave: ['Alberto Cairo', 'Edward Tufte', 'ABNT', 'W3C'],
  alertasCebraspe: [
    'Posição Canônica da Ficha Catalográfica (ABNT NBR 14724:2011, item 4.1.5): Em trabalhos acadêmicos e monografias, a ficha catalográfica é elemento PRÉ-TEXTUAL OBRIGATÓRIO e deve constar impreterivelmente no VERSO da folha de rosto, na sua metade inferior. O Cebraspe adora afirmar que ela fica no anverso da folha de rosto, no verso da capa ou que é elemento textual: ERRADO!',
    'Índice (NBR 6034:2004) vs. Sumário (NBR 6027:2012): Não confunda as duas normas! O Sumário é elemento PRÉ-TEXTUAL OBRIGATÓRIO que enumera as seções e capítulos na EXATA ORDEM e grafia em que se sucedem no texto. O Índice é elemento PÓS-TEXTUAL OPCIONAL que consiste em uma listagem detalhada de termos, nomes ou assuntos, ordenados alfabética, cronológica ou sistematicamente, com remissão para as páginas onde ocorrem.',
    'Infografia Funcional de Alberto Cairo (The Functional Art, 2012): Um infográfico não é mera arte decorativa, adorno estético ou ilustração cosmética para preencher espaço em publicações. É uma ferramenta cognitiva rigorosa e funcional de representação visual de dados, cuja estética deve submeter-se estritamente à clareza, à veracidade factual e à compreensão do leitor.',
    'Formato PDF/A (ISO 19005) para Preservação Editorial: O PDF/A é um subconjunto restrito do formato PDF desenvolvido para preservação e arquivamento digital de longo prazo. Proíbe estritamente: recursos externos dependentes da rede, criptografia, senhas, código executável/JavaScript e áudio/vídeo dinâmicos embutidos. Exige obrigatoriamente: incorporação integral de fontes tipográficas e metadados descritivos no padrão XMP.',
    'Acessibilidade em Publicações e Infográficos (WCAG e PDF/UA - ISO 14289): Infográficos, tabelas e gráficos em publicações digitais governamentais exigem texto alternativo (alt text) descritivo completo que transmita o mesmo valor informativo aos leitores de tela, ordem de leitura lógica e contraste mínimo de cor (4,5:1 para texto normal e 3:1 para elementos gráficos essenciais).',
  ],
  quadroComparativo: {
    titulo: 'Comparativo Técnico: Instrumentos de Editoração, Padrões Normativos e Formatos Digitais',
    colunas: ['Elemento / Padrão', 'Norma Técnica / Referência', 'Natureza e Localização no Documento', 'Armadilha Canônica Cebraspe'],
    linhas: [
      ['Ficha Catalográfica (CIP)', 'ABNT NBR 14724:2011 / AACR2 / RDA', 'Elemento pré-textual obrigatório; verso da folha de rosto, metade inferior', 'Afirmar que a ficha é elemento textual ou que pode ser impressa no anverso da folha de rosto.'],
      ['Sumário', 'ABNT NBR 6027:2012', 'Elemento pré-textual obrigatório; enumeração na ordem sequencial do texto', 'Confundir com índice ou afirmar que a ordenação do sumário é alfabética (Errado: segue a ordem do texto).'],
      ['Índice Remissivo', 'ABNT NBR 6034:2004', 'Elemento pós-textual opcional; ordenação alfabética ou sistemática com localização pontual', 'Afirmar que o índice é elemento pré-textual obrigatório substituível pelo sumário.'],
      ['EPUB 3 (Electronic Publication)', 'W3C / IDPF', 'Formato digital aberto baseado em HTML5/CSS; texto reformatável (reflowable)', 'Afirmar que o EPUB possui paginação estática fixa idêntica à impressão gráfica tradicional.'],
      ['PDF/A (Archival)', 'ISO 19005 (Preservação Digital)', 'Formato de arquivamento digital independente de software e plataformas de terceiros', 'Afirmar que o PDF/A aceita criptografia por senha e scripts interativos de automação.'],
      ['Infografia de Dados', 'Alberto Cairo / Edward Tufte', 'Representação gráfica funcional de informações complexas; data-ink ratio', 'Considerar a infografia mero recurso estético-publicitário desprovido de rigor analítico.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Elaboração da Ficha Catalográfica na Publicação (CIP) e a NBR 14724

A editoração de publicações institucionais, relatórios técnicos, livros do Poder Legislativo e trabalhos acadêmicos no Brasil é regulada pelas normas da ABNT e pela legislação profissional da Biblioteconomia:

#### A. Conceito e Marco Legal da Catalogação na Fonte (CIP)
* **Catalogação na Publicação (*Cataloging in Publication* - CIP):** Prática biblioteconômica internacional que consiste em elaborar a ficha catalográfica de um livro ou documento antes de sua impressão ou publicação digital final, incorporando-a ao próprio corpo da obra.
* **Competência Legal Exclusiva:** Nos termos da **Lei Federal nº 4.084/1962** (que dispõe sobre a profissão de Bibliotecário) e da **Lei Federal nº 10.753/2003** (Política Nacional do Livro, art. 6º), a elaboração da ficha catalográfica é ato privativo de bibliotecário devidamente registrado no Conselho Regional de Biblioteconomia (CRB), devendo conter o nome e o número de registro profissional do responsável técnico.

#### B. Posição e Formatação segundo a ABNT NBR 14724:2011
A **ABNT NBR 14724:2011** (*Informação e documentação — Trabalhos acadêmicos — Apresentação*) disciplina rigorosamente a disposição da ficha:
1. **Classificação Estrutural:** É um **elemento pré-textual OBRIGATÓRIO**.
2. **Localização Exata:** Deve figurar impressa no **VERSO da folha de rosto**, ocupando preferencialmente a **metade inferior** da página.
3. **Enquadramento Físico:** É apresentada tradicionalmente circunscrita em um retângulo de dimensões aproximadas de $12{,}5 \\text{ cm} \\times 7{,}5 \\text{ cm}$ (dimensão física padrão da histórica ficha catalográfica impressa internacional de 3x5 polegadas).
4. **Elementos Canônicos Obrigatórios:**
   * Notação de autor (Cutter-Sanborn ou PHA) no canto superior esquerdo;
   * Entrada principal (autor pessoal ou entidade) em conformidade com o código de catalogação (AACR2 ou RDA);
   * Título propriamente dito, subtítulo (se houver), edição, local de publicação, editora e ano;
   * Descrição física (número de páginas ou volumes, ilustrações);
   * Notas de tese/dissertação ou notas de série e ISBN/ISSN;
   * Pontos de acesso de assunto (rastreamento numérico: 1. Assunto 1. 2. Assunto 2.) e pontos de acesso secundários (algarismos romanos: I. Orientador. II. Título.);
   * Notações de classificação temática (CDD e/ou CDU) na margem inferior direita;
   * Código de identificação do bibliotecário responsável (CRB).

---

### 2. Índices e Instrumentos Auxiliares (ABNT NBR 6034:2004)

O Cebraspe frequentemente explora o confronto conceitual e estrutural entre os instrumentos de acesso rápido ao conteúdo:

#### A. A Definição de Índice segundo a ABNT NBR 6034:2004
* **Conceito Normativo:** "Relação de palavras ou frases, ordenadas segundo determinado critério, que localiza e remete para informações contidas em um texto ou em documentos".
* **Posicionamento Estrutural:** É um **elemento PÓS-TEXTUAL OPCIONAL**. Localiza-se no final da publicação (após os elementos textuais e após referências, vocabulário de termos, apêndices e anexos).
* **Tipologia de Índices:**
  1. *Índice Geral / Remissivo:* Reúne autores, assuntos e títulos em sequência alfabética única;
  2. *Índice Especial:* Dedicado a uma única categoria de informação (ex.: índice onomástico/de autores, índice cronológico de leis, índice geográfico, índice sistemático de assuntos);
  3. *Índice Cumulativo:* Reúne em ordem única as entradas de múltiplos volumes de uma coleção ou vários anos de um periódico parlamentar.

#### B. Distinção Obrigatória: Índice (NBR 6034:2004) vs. Sumário (NBR 6027:2012)

\`\`\`tree
TITLE: Confronto Estrutural: Sumário (NBR 6027) vs. Índice (NBR 6034)
- Instrumentos de Acesso ao Conteúdo | Normas distintas com papéis complementares
  - Sumário (ABNT NBR 6027:2012) | Visão macro e estrutural do documento
    - Posição Estrutural | Elemento PRÉ-TEXTUAL OBRIGATÓRIO (antepenúltimo pré-textual)
    - Princípio de Ordenação | Exata ordem cronológica e sequencial em que as partes aparecem no texto
    - Fidelidade de Grafia | Reproduz rigorosamente a redação, numeração e tipografia dos capítulos
    - Granularidade | Seções primárias, secundárias, terciárias e quaternárias (não detalha termos isolados)
  - Índice (ABNT NBR 6034:2004) | Acesso micro e pontual a conceitos específicos
    - Posição Estrutural | Elemento PÓS-TEXTUAL OPCIONAL (último elemento do trabalho)
    - Princípio de Ordenação | Alfabético, cronológico ou sistemático (independe da ordem física do texto)
    - Remissões Pontuais | Remete diretamente ao número da página ou parágrafo onde o vocábulo ocorre
    - Elaboração | Exige análise conceitual aprofundada e indexação terminológica de substantivos
\`\`\`

---

### 3. Editoração Digital: Formatos, Preservação e Metadados (EPUB, PDF/A)

Na editoração contemporânea de órgãos governamentais e bibliotecas parlamentares, a disseminação eletrônica exige a seleção de formatos adequados para leitura dinâmica e arquivamento de longo prazo:

#### A. O Padrão EPUB 3 (Electronic Publication)
Padronizado internacionalmente pelo W3C (antigo IDPF - *International Digital Publishing Forum*):
* **Arquitetura Base:** O arquivo \`.epub\` é um pacote compactado em formato ZIP que encapsula conteúdos estruturados em **XHTML/HTML5, folhas de estilo CSS, fontes OpenType/WOFF e imagens/áudio**.
* **Texto Reformatável (*Reflowable Text*):** O layout adapta-se dinamicamente às dimensões da tela de qualquer dispositivo (smartphones, e-readers e computadores), permitindo ao usuário alterar o tamanho da fonte, o espaçamento e as cores sem perder a continuidade da leitura.
* **Metadados:** Adota metadados no padrão **Dublin Core (DCMI)** embutidos no arquivo descritor de pacote (\`package.opf\`).

#### B. O Padrão PDF/A (ISO 19005) para Preservação e Arquivamento Digital
O PDF/A (*Portable Document Format for Archival*) é a especificação formal mandatória para salvaguarda de publicações legislativas e documentos históricos digitais:
* **Princípio da Autossuficiência (*Self-containment*):** O documento deve conter em si mesmo todas as informações necessárias para ser renderizado de forma visualmente idêntica daqui a décadas ou séculos, independentemente do sistema operacional, hardware ou fontes instaladas.
* **Proibições Rígidas do PDF/A:**
  * Proibição de **criptografia e proteção por senha** (senhas inviabilizam o acesso em preservação digital de longo prazo);
  * Proibição de **código dinâmico executável e scripts (JavaScript)**;
  * Proibição de **referências externas dependentes de rede** (fontes ou imagens hospedadas fora do arquivo);
  * Proibição de elementos multimídia proprietários dependentes de codecs voláteis (áudio, animações Flash/vídeo).
* **Obrigatoriedades do PDF/A:**
  * **Incorporação Integral de Fontes Tipográficas (*Embedded Fonts*):** Todos os glifos utilizados no texto devem estar incorporados no próprio arquivo binário;
  * **Metadados em Padrão XMP (*Extensible Metadata Platform*):** Metadados descritivos e administrativos serializados em RDF/XML embutidos no cabeçalho do documento;
  * **Espaço de Cores Independente de Dispositivo:** Gerenciamento baseado em perfis ICC.

---

### 4. Infografia e Visualização de Dados (Alberto Cairo e Edward Tufte)

A comunicação da informação em bibliotecas legislativas e portais institucionais faz uso massivo de **infográficos e visualizações de dados** para traduzir proposições complexas, orçamentos públicos e estatísticas sociais em interfaces compreensíveis para o cidadão:

#### A. A Arte Funcional de Alberto Cairo (*The Functional Art*, 2012)
O jornalista e designer espanhol Alberto Cairo, referência mundial em visualização da informação, formulou a teoria da **infografia funcional**:
* **A Falácia da Cosmética:** Um infográfico **não é ilustração estética**, arte ornamental ou desenho decorativo destinado a "embelezar" o documento.
* **Natureza Cognitiva e Ferramental:** A infografia é uma **ferramenta funcional de cognição visual**. Assim como um martelo ou um microscópio, sua qualidade mede-se pela eficiência com que permite ao cérebro humano extrair padrões, entender relacionamentos e tomar decisões a partir de dados complexos.
* **Princípio da Forma que Segue a Função:** Em visualização de dados, a estética é consequência do rigor estrutural. Gráficos 3D desnecessários, cores berrantes sem propósito semântico e efeitos gráficos que mascaram proporções reais distorcem a verdade factual dos dados.

#### B. Edward Tufte e o *Data-Ink Ratio*
Edward Tufte (*The Visual Display of Quantitative Information*, 1983) estabeleceu postulados canônicos de excelência gráfica:
* **Maximização da Taxa Tinta-Dado (*Data-Ink Ratio*):**
  $\\text{Data-Ink Ratio} = \\frac{\\text{Tinta usada para exibir dados informativos}}{\\text{Tinta total utilizada para imprimir o gráfico}}$
  O designer deve maximizar essa fração, eliminando todo e qualquer traço que não represente dados reais.
* **Eliminação de *Chartjunk* (Lixo Gráfico):** Elementos decorativos inúteis, tais como grades densas de fundo, texturas ópticas vibrantes, sombras artificiais e ilustrações redundantes devem ser eliminados sem hesitação.
* **Fator de Distorção (*Lie Factor*):** Mede a fidelidade matemática do gráfico:
  $\\text{Lie Factor} = \\frac{\\text{Tamanho do efeito exibido no gráfico}}{\\text{Tamanho do efeito real nos dados}}$
  Se o fator for significativamente diferente de 1, o gráfico está enganando o leitor.

---

### 5. Acessibilidade de Produtos Informacionais Digitais (WCAG e PDF/UA)

Publicações governamentais e materiais editoriais no Poder Público submetem-se imperativamente à **Lei Brasileira de Inclusão (Lei nº 13.146/2015, art. 63)** e às diretrizes internacionais do W3C:

#### A. Diretrizes WCAG Aplicadas à Editoração
1. **Texto Alternativo Descritivo (*Alt Text*):** Toda imagem, infográfico, fluxograma ou tabela renderizada como imagem deve possuir um atributo \`alt\` ou descrição textual longa que transmita o conteúdo semântico essencial para usuários que utilizam sintetizadores de voz / leitores de tela (NVDA, JAWS, VoiceOver).
2. **Estrutura Semântica de Cabeçalhos:** Utilização rigorosa das tags de hierarquia (\`h1\` para título do documento, \`h2\` para capítulos, \`h3\` para subseções), permitindo que o leitor cego navegue rapidamente pelos blocos lógicos do texto com atalhos de teclado.
3. **Contraste Cromático:** Razão mínima de contraste entre o texto e o fundo de **4,5:1** para texto normal e **3:1** para texto grande (18pt ou 14pt em negrito) no Nível AA da WCAG. A cor jamais deve ser o único meio visual de transmitir informação ou indicar ação.

#### B. O Padrão PDF/UA (Universal Accessibility - ISO 14289)
O padrão internacional **PDF/UA (ISO 14289-1)** define os requisitos técnicos para que arquivos PDF sejam integralmente acessíveis:
* Exige **estrutura de tags semânticas completas** (*Tagged PDF*), que espelham a árvore lógica de leitura (parágrafos, listas numeradas, tabelas e títulos);
* Proíbe elementos gráficos desprovidos de texto equivalente ou marcados indevidamente como conteúdo quando se tratam de meros artefatos de decoração (*artifacts*);
* Exige que tabelas de dados contenham cabeçalhos explícitos (\`<th>\`) associados às suas respectivas células (\`<td>\`).

---

### 🔗 Veja Também (Articulação Intermódulos)
* **AACR2r e Fichas Catalográficas (sub-2-1):** Elaboração técnica de fichas no verso da folha de rosto.
* **Acessibilidade Digital (sub-6-1):** Diretrizes WCAG 2.2 e formatos acessíveis (EPUB, PDF/A).
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Editoração, a Catalogação na Publicação (CIP), os Índices (NBR 6034) e a Acessibilidade Documental** completam a cadeia de produção editorial técnica:
1. **Catalogação na Publicação (Ficha Catalográfica / CIP):**
   - Elaborada exclusivamente por **bibliotecário habilitado e registrado no CRB** (Lei nº 4.084/62 e Lei nº 10.753/2003 - Lei do Livro).
   - Deve ser impressa no verso da folha de rosto das publicações monográficas, na metade inferior da página.
   - Contém: Cabeçalho de autor, título, subtítulo, edição, local, editora, ano, paginação, série, notas, pontos de acesso de assunto (CDU/CDD) e número de registro CIP.
2. **Índices (ABNT NBR 6034:2004):**
   - Relação de palavras ou frases ordenadas alfabética, cronológica ou sistematicamente, localizadas ao final do documento (**elemento pós-textual**), que remete com precisão às páginas onde o assunto ou autor é tratado no texto.
   - Tipos: Onomástico (nomes de pessoas), Topográfico (geográfico), Cronológico, Temático/Assunto e Remissivo.
   - Remissivas obrigatórias: *Ver* (exclusiva/preferencial) e *Ver também* (associativa/complementar).
3. **Infografia e Design Editorial:**
   - Representação visual e sintética de dados complexos (gráficos, esquemas, mapas e diagramas) para otimizar a velocidade de absorção do leitor.
4. **Acessibilidade Documental (Lei nº 13.146/2015 e WCAG 2.1):**
   - O dever do poder público de garantir formatos acessíveis (DAISY, Braille, audiolivros, texto com descrição de imagens *alt-text*, fontes legíveis e contraste adequado) para cidadãos com deficiência visual ou motora.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Elaboração de Ficha CIP para as Edições Câmara):** A Coordenação de Edições Câmara vai publicar uma obra histórica sobre Rui Barbosa. A Seção de Catalogação da Biblioteca Pedro Aleixo elabora a ficha CIP oficial contendo: classificação CDDir, CDU e CDD, pontos de acesso autorizados da RVBI e código de registro no CRB-1.
- **Cenário 2 (Elaboração de Índice Onomástico para a História dos Deputados):** Em um livro biográfico de 600 páginas que cita 3.000 parlamentares, o bibliotecário aplica a NBR 6034 e cria o **Índice Onomástico** ao final da publicação, permitindo ao leitor encontrar instantaneamente em quais páginas cada deputado é mencionado.
- **Cenário 3 (Acessibilidade Digital no Portal da BDCam conforme WCAG 2.1):** Ao disponibilizar os relatórios parlamentares em PDF na internet, os bibliotecários garantem que o PDF/A contenha a camada de texto selecionável (OCR de alta acurácia), *tags* de leitura estruturadas e texto alternativo (*alt-text*) em todas as tabelas e gráficos, permitindo que deputados e cidadãos com deficiência visual utilizem leitores de tela como NVDA e JAWS.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Elemento Editorial | Localização Canônica | Responsável Técnico | Norma ou Base Legal |
| :--- | :--- | :--- | :--- |
| **Ficha CIP** | Verso da Folha de Rosto | Bibliotecário com CRB ativo | Lei do Livro (Lei nº 10.753/2003) |
| **Índice (NBR 6034)** | Final do livro (Pós-textual) | Bibliotecário / Indexador | ABNT NBR 6034:2004 |
| **Sumário (NBR 6027)** | Início do livro (Pré-textual) | Autor / Editor | ABNT NBR 6027:2012 |
| **Acessibilidade Digital** | Em todo o código e arquivo | Equipe Editorial / TI | Lei nº 13.146/2015 / WCAG 2.1 |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Quem pode Assinar Ficha Catalográfica CIP:** O Cebraspe sugere que qualquer profissional de letras ou editor gráfico pode confeccionar e assinar a ficha catalográfica. **Gabarito: ERRADO.** A elaboração da ficha CIP é ato privativo do profissional Bibliotecário devidamente registrado no Conselho Regional (Leis 4.084/62 e 10.753/2003).
- **Remissivas em Índices (Ver vs. Ver Também):**
  - *Ver:* Remete de um termo não adotado/sinônimo para o termo adotado (exclusão).
  - *Ver também:* Conecta termos afins correlatos que também possuem ocorrências no texto. A banca adora inverter essas duas remissivas.
- **Posicionamento da Ficha CIP:** Afirmar que a ficha catalográfica deve ser impressa na contracapa do livro. **Gabarito: ERRADO.** Deve figurar no **verso da folha de rosto**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 6034:2004: Informação e documentação — Índice — Apresentação*. Rio de Janeiro: ABNT, 2004.
- **BRASIL.** *Lei Federal nº 10.753, de 30 de outubro de 2003*. Institui a Política Nacional do Livro. (Obrigatoriedade da Ficha CIP com indicação de bibliotecário registrado).
- **BRASIL.** *Lei Federal nº 13.146, de 6 de julho de 2015*. Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).
- **W3C.** *Web Content Accessibility Guidelines (WCAG) 2.1*. W3C Recommendation, 2018.
- **ARAÚJO, Emanuel.** *A construção do livro: princípios da técnica de editoração*. Rio de Janeiro: Nova Fronteira; INL, 1986. (O clássico mais respeitado da história editorial brasileira).`,
  checkpoints: [
    {
      id: 'cp-8-5-1',
      pergunta: 'Micro-Checkpoint 1: Localização da Ficha Catalográfica segundo a NBR 14724:2011',
      item: 'Em trabalhos acadêmicos e monografias formatados segundo a ABNT NBR 14724:2011, a ficha catalográfica constitui elemento pré-textual obrigatório e deve figurar impressa no verso da folha de rosto, em sua metade inferior.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme o item 4.1.5 da ABNT NBR 14724:2011, a ficha catalográfica (elaborada em conformidade com o código de catalogação vigente por bibliotecário registrado no CRB) deve constar obrigatoriamente no VERSO da folha de rosto, ocupando a sua metade inferior.',
    },
    {
      id: 'cp-8-5-2',
      pergunta: 'Micro-Checkpoint 2: Diferença Estrutural entre Índice e Sumário',
      item: 'Segundo as normas da ABNT, o sumário (NBR 6027:2012) e o índice (NBR 6034:2004) constituem elementos pré-textuais obrigatórios que ordenam alfabeticamente os termos e assuntos abordados no corpo do documento.',
      gabarito: 'E',
      justificativa: 'Errado! O sumário (NBR 6027) é elemento PRÉ-TEXTUAL OBRIGATÓRIO que enumera as divisões na EXATA ORDEM sequencial em que aparecem no texto; já o índice (NBR 6034) é elemento PÓS-TEXTUAL OPCIONAL que organiza termos de forma alfabética, cronológica ou sistemática com remissão pontual às páginas.',
    },
    {
      id: 'cp-8-5-3',
      pergunta: 'Micro-Checkpoint 3: Teoria da Infografia Funcional e Preservação em PDF/A (Caso)',
      item: 'Ao planejar a publicação digital acessível de um relatório orçamentário da Câmara dos Deputados contendo infográficos complexos, o bibliotecário deve adotar a perspectiva da infografia funcional de Alberto Cairo — na qual a visualização atua como ferramenta cognitiva submetida à clareza factual — e selecionar o padrão PDF/A (ISO 19005), o qual veda criptografia e scripts externos e exige a incorporação integral de fontes e metadados XMP.',
      gabarito: 'C',
      justificativa: 'Certo! A teoria de Alberto Cairo postula que o infográfico é instrumento funcional de cognição e raciocínio analítico (não mero adorno estético), e a norma ISO 19005 (PDF/A) proíbe recursos dinâmicos/senhas para garantir a preservação digital autossuficiente com fontes embutidas e metadados XMP.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-8-5-1',
        periodo: '1983 / 2012',
        disciplina: 'Visualização da Informação',
        focoPrincipal: 'Edward Tufte formula o princípio do Data-Ink Ratio e Alberto Cairo publica The Functional Art sobre infografia cognitiva.',
        figuraChave: 'Edward Tufte e Alberto Cairo',
      },
      {
        id: 'tl-8-5-2',
        periodo: '2004 / 2005',
        disciplina: 'Normatização e Preservação Digital',
        focoPrincipal: 'Publicação da ABNT NBR 6034 (Índices) e publicação da norma internacional ISO 19005-1 (Padrão PDF/A para arquivamento).',
        figuraChave: 'ABNT e ISO TC 171',
      },
      {
        id: 'tl-8-5-3',
        periodo: '2011 / 2012',
        disciplina: 'Normalização Documental Brasileira',
        focoPrincipal: 'Revisão da ABNT NBR 14724 (Trabalhos acadêmicos) e da ABNT NBR 6027 (Sumários), fixando a posição canônica da ficha no verso da folha de rosto.',
        figuraChave: 'ABNT Comitê Brasileiro CB-014',
      },
    ],
    autores: [
      {
        id: 'aut-8-5-1',
        nome: 'Alberto Cairo',
        ano: 2012,
        obraPrincipal: 'The Functional Art: An Introduction to Information Graphics and Visualization',
        ideiaChave: 'A infografia é uma ferramenta funcional de cognição visual orientada à clareza e veracidade, e não uma arte ornamental estética.',
        chipPegadinha: 'A estética visual deve ser consequência do rigor factual e da funcionalidade cognitiva.',
      },
      {
        id: 'aut-8-5-2',
        nome: 'Edward Tufte',
        ano: 1983,
        obraPrincipal: 'The Visual Display of Quantitative Information',
        ideiaChave: 'Pioneiro da visualização de dados; formulou a maximização do Data-Ink Ratio e o combate irrestrito ao Chartjunk.',
        chipPegadinha: 'Eliminar qualquer traço de tinta que não represente diretamente dados informativos.',
      },
      {
        id: 'aut-8-5-3',
        nome: 'ABNT / Comitê CB-014',
        ano: 2011,
        obraPrincipal: 'Série de Normas de Informação e Documentação (NBR 14724, NBR 6034, NBR 6027)',
        ideiaChave: 'Padroniza a apresentação estrutural e a tipologia de elementos pré, textuais e pós-textuais no Brasil.',
        chipPegadinha: 'Ficha catalográfica: verso da folha de rosto, metade inferior; Sumário: pré-textual; Índice: pós-textual.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-5-1',
        afirmacao: 'A ficha catalográfica em trabalhos acadêmicos é elemento pós-textual opcional que pode ser substituída pelo índice onomástico.',
        gabarito: 'E',
        porQue: 'A ficha catalográfica é elemento PRÉ-TEXTUAL OBRIGATÓRIO impresso estritamente no VERSO da folha de rosto, na sua metade inferior (NBR 14724).',
      },
      {
        id: 'peg-8-5-2',
        afirmacao: 'O formato PDF/A permite o uso de criptografia por senha e scripts interativos em JavaScript para assegurar a inviolabilidade dos arquivos arquivados.',
        gabarito: 'E',
        porQue: 'O PDF/A (ISO 19005) PROÍBE expressamente criptografia, senhas e scripts executáveis, pois comprometem a longevidade e a preservação digital.',
      },
      {
        id: 'peg-8-5-3',
        afirmacao: 'O sumário segundo a NBR 6027 ordena os capítulos de um livro em ordem alfabética para facilitar a localização rápida por palavras-chave.',
        gabarito: 'E',
        porQue: 'O sumário reflete estritamente a MESMA ORDEM E SEQUÊNCIA em que as partes se sucedem no documento. Quem ordena alfabeticamente é o índice (NBR 6034).',
      },
    ],
  },
};
