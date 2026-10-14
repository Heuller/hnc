import type { ModuloFilho } from '../../../domain/types';

export const submodulo43: ModuloFilho = {
  id: 'sub-4-3',
  numero: '4.3',
  editalRef: 'Bloco E - Item 2.3 a 2.5',
  preRequisitos: ["sub-2-4","sub-3-4"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-1",
          "titulo": "Regimento Interno da Câmara dos Deputados",
          "motivo": "Classificação de proposições e atos do processo legislativo."
      },
      {
          "submoduloId": "sub-2-6",
          "titulo": "Metadados, Dublin Core e Crosswalks",
          "motivo": "Esquema XML LexML e interoperabilidade com catálogos MARC 21."
      }
  ],
  titulo: 'Fontes de Informação Jurídica, Diários Oficiais e o Portal LexML Brasil',
  descricaoCurta: 'O tripé da informação jurídica (Legislação, Doutrina e Jurisprudência), a estrutura tripartite do Diário Oficial da União (Seções 1, 2 e 3 da Imprensa Nacional), o Diário da Justiça Eletrônico (DJe) e a arquitetura do LexML Brasil (padrão URN Lex).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Edilenice Jovelina de Miranda Passos', 'João Alberto de Oliveira Lima (idealizador da URN LexML)', 'Ana Cláudia Carvalho de Miranda', 'LexML Brasil (Comitê Gestor)', 'Imprensa Nacional'],
  alertasCebraspe: [
    'O tripé canônico da informação jurídica: Legislação (atos normativos estatais), Doutrina (estudos, livros e teses de juristas) e Jurisprudência (conjunto de decisões reiteradas dos tribunais). O Cebraspe adora trocar as funções (ex.: dizer que doutrina são as decisões judiciais: ERRADO!).',
    'Estrutura estrita do Diário Oficial da União (DOU - Imprensa Nacional): Seção 1 (Leis, decretos e atos normativos gerais); Seção 2 (Atos de pessoal: nomeação, exoneração, aposentadoria); Seção 3 (Contratos, editais, licitações e ineditoriais). A pegadinha clássica é inverter as Seções 2 e 3!',
    'A edição eletrônica do DOU assinada digitalmente com certificado ICP-Brasil possui a mesma validade jurídica oficial da antiga versão impressa (encerrada em 2017).',
    'O Diário da Justiça (DJe): os atos judiciais e decisões dos tribunais NÃO saem no DOU, mas no Diário da Justiça Eletrônico de cada tribunal ou no Diário de Justiça Eletrônico Nacional (DJEN/CNJ).',
    'LexML Brasil: portal unificado coordenado no âmbito do Senado Federal que reúne os três Poderes (Executivo, Legislativo e Judiciário) de todas as esferas federativas. Utiliza identificador unívoco persistente no formato URN Lex (Uniform Resource Name) com sintaxe: urn:lex:país:autoridade:tipo_documento:data;número.',
    'Esquemas XML do LexML (MPE-CE 2025 / STJ 2024): o LexML opera com dois esquemas de metadados XML: o esquema XML RÍGIDO (utilizado para a publicação e validação formal de proposições legislativas e atos oficiais) e o esquema XML FLEXÍVEL (empregado para a ingestão distribuída e captura de metadados de acervos heterogêneos de colaboradores externos).',
    'Coordenação das Redes Jurídicas (STJ 2024): a RVBI (Rede Virtual de Bibliotecas) é coordenada administrativamente pela Secretaria de Biblioteca e Arquivo do SENADO FEDERAL (e não pela Câmara dos Deputados nem pelo STF). A REJE é a rede da Justiça Eleitoral (liderada pelo TSE); a RBMPF é a rede do Ministério Público Federal (liderada pela PGR); e a Rede BIBLIODATA foi a rede cooperativa pioneira brasileira da FGV.',
    'Indexação Pós-Coordenada e Método SLIC (MPE-CE 2025): o método SLIC (Selective Listing in Combination), desenvolvido por J. R. Sharp, seleciona combinações de descritores em ordem alfabética estrita para evitar a explosão combinatória desnecessária de termos compostos.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura Canônica das Três Seções do Diário Oficial da União (DOU)',
    colunas: ['Seção do DOU', 'Conteúdo Oficial Obrigatório', 'Exemplos Práticos no Serviço Público', 'Armadilha Cebraspe Mapeada'],
    linhas: [
      ['Seção 1', 'Atos normativos de interesse geral dos Poderes Executivo, Legislativo e Judiciário', 'Leis ordinárias sancionadas, decretos presidenciais, medidas provisórias, resoluções', 'Afirmar que atos de nomeação e posse de servidores são publicados na Seção 1 (FALSO).'],
      ['Seção 2', 'Atos de administração de recursos humanos e de pessoal da União', 'Nomeações, exonerações, aposentadorias, cessões, férias de ministros e dirigentes', 'Dizer que contratos de prestação de serviços ou licitações saem na Seção 2 (FALSO).'],
      ['Seção 3', 'Contratos, convênios, avisos de licitação, editais de concursos e matérias ineditoriais', 'Extratos de contratos públicos, pregões eletrônicos, avisos de leilão, editais da Câmara', 'Afirmar que a Seção 3 é restrita a atos confidenciais de governo (FALSO).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Tripé Estruturante da Informação Jurídica no Parlamento
A informação jurídica possui natureza formal, técnica e altamente especializada, constituindo-se no sustentáculo da tomada de decisão e do controle de constitucionalidade no Congresso Nacional (**Edilenice Passos, 2014; Ana Cláudia Carvalho de Miranda, 2013**):

\`\`\`tree
TITLE: Tripé Estruturante da Informação Jurídica
- Informação Jurídica Integrada | Sustentáculo da tomada de decisão e do controle de constitucionalidade
  - 1. Legislação (Normativa / Prescritiva) | Atos estatais, normas gerais e processo legislativo (CF, leis, MPs, decretos)
  - 2. Jurisprudência (Interpretativa / Casuística) | Decisões reiteradas dos tribunais, acórdãos e súmulas vinculantes do STF
  - 3. Doutrina (Analítica / Científica) | Estudos teóricos, teses, tratados e artigos de juristas especializados
\`\`\`

#### A. O Tripé Informacional Canônico
1. **Legislação (Informação Normativa):**
   * O conjunto de atos e normas prescritivas emanadas das autoridades constituídas do Estado no exercício de sua competência legislativa e regulamentar.
   * *Hierarquia Constitucional (Art. 59 da CF/88):* Emendas Constitucionais $\\rightarrow$ Leis Complementares $\\rightarrow$ Leis Ordinárias e Delegadas $\\rightarrow$ Medidas Provisórias $\\rightarrow$ Decretos Legislativos $\\rightarrow$ Resoluções $\\rightarrow$ Atos Infralegais (Decretos Regulamentares, Portarias, Instruções Normativas).
2. **Doutrina (Informação Analítica / Científica):**
   * Produção intelectual, científica e acadêmica de juristas, professores e pesquisadores que interpretam, criticam, contextualizam e sistematizam o ordenamento jurídico.
   * *Veículos Típicos:* Tratados, manuais jurídicos, monografias, dissertações, teses e artigos em periódicos especializados (como a *Revista de Informação Legislativa do Senado* e a *Revista da EJE*).
3. **Jurisprudência (Informação Interpretativa / Casuística):**
   * O conjunto reiterado e uniforme de decisões, acórdãos e sentenças proferidas pelos órgãos jurisdicionais do Poder Judiciário ao aplicarem as leis a controvérsias concretas.
   * *Espécies Principais:* Acórdãos dos Tribunais Superiores (STF, STJ, TST, TSE, STM), súmulas comuns, repercussão geral e **Súmulas Vinculantes do STF** (Art. 103-A da CF/88 — vinculam toda a Administração Pública e os demais órgãos do Judiciário).

---

### 2. A Informática Jurídica: Dimensões Documentária, Decisória e de Gestão
A literatura de Informática Jurídica (**Edilenice Passos & Celso Cândido**) classifica a aplicação da computação ao Direito em três ramos distintos intensamente cobrados pelo Cebraspe:

1. **Informática Jurídica Documentária (ou Documental):**
   * Foca na coleta, indexação, armazenamento e recuperação automatizada de documentos jurídicos (legislação, jurisprudência e doutrina). É a base do **Portal LexML Brasil** e dos sistemas de busca de jurisprudência dos tribunais.
2. **Informática Jurídica Decisória (ou Metadocumentária / IA Aplicada):**
   * Utiliza sistemas especialistas, ontologias formais e inteligência artificial para auxiliar o operador do direito na tomada de decisões ou sugerir minutas de sentenças com base em padrões precedentes (ex.: Projeto Victor no STF, Projeto Sócrates no STJ).
3. **Informática Jurídica de Gestão (ou Operacional / Telemática):**
   * Ocupa-se da automação dos fluxos de trabalho e da administração das unidades jurídicas e gabinetes parlamentares (processo judicial eletrônico - PJe, tramitação eletrônica de proposições e controle de prazos).

---

### 3. O Diário Oficial da União (DOU) e Publicações Oficiais
O Diário Oficial da União, gerido e editado pela **Imprensa Nacional** (órgão subordinado à Casa Civil da Presidência da República), é o veículo primordial de publicidade dos atos estatais federais para sua vigência e eficácia perante a sociedade:

#### A. A Estrutura Rígida das Seções do DOU
* **Seção 1 — Atos Normativos:** Destinada à publicação das normas de caráter abstrato e geral (leis sancionadas, promulgações do Congresso Nacional, atos do Presidente da República, portarias de ministérios, instruções normativas, acórdãos do TCU de interesse geral e tratados internacionais ratificados).
* **Seção 2 — Atos de Pessoal:** Publicação obrigatória dos atos administrativos individuais que afetam os servidores públicos civis e militares federais (nomeações, exonerações, posses, promoções, aposentadorias, concessões de diárias e viagens oficiais).
* **Seção 3 — Contratos, Editais e Ineditoriais:** Destinada à publicação de extratos de contratos e convênios públicos federais, avisos de licitações, leilões, **editais de concursos públicos** e matérias de particulares exigidas por lei (balanços de sociedades anônimas, atas de assembleias corporativas e editais de falência).

#### B. A Descontinuidade da Versão Impressa e o Diário da Justiça (DJe)
* Em **1º de dezembro de 2017**, a Imprensa Nacional encerrou definitivamente a circulação impressa em papel do DOU, passando a circular exclusivamente na versão digital na Internet, assinada digitalmente no padrão da **Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)**, conferindo-lhe plena fé pública e validade jurídica.
* **O Diário da Justiça Eletrônico (DJe):** Desde 2010, os atos jurisdicionais (acórdãos, intimações e despachos) deixaram de sair no DOU. Cada tribunal mantém seu próprio DJe eletrônico, centralizado nacionalmente pelo Conselho Nacional de Justiça no **Diário de Justiça Eletrônico Nacional (DJEN)**.

---

### 4. A Rede e o Portal LexML Brasil: Padrão URN Lex e Esquemas XML
Criado em 2009 sob a coordenação técnica do Senado Federal (Interlegis) e da Câmara dos Deputados, o **Portal LexML Brasil** (\`https://www.lexml.gov.br\`) é a rede federada de informação legislativa e jurídica mais avançada do país:

#### A. O Padrão URN Lex (Uniform Resource Name - RFC 2141 / IETF)
Para evitar que alterações nos servidores ou arquiteturas de URL quebrem os links (*link rot*), o LexML adota identificadores persistentes e unívocos globais através da **URN Lex**:
$\\text{urn:lex:br:federal:lei:1990-12-11;8112}$
* **Sintaxe Decomposta:**
  * \`urn:lex\`: Prefixo identificador de namespace (*Namespace Identifier - NID*);
  * \`br\`: Código de país segundo a norma internacional ISO 3166-1;
  * \`federal\`: Esfera de autoridade governamental (federal, estadual, distrital ou municipal);
  * \`lei\`: Espécie de documento jurídico (lei, decreto, medida.provisoria, acordao);
  * \`1990-12-11;8112\`: Data de promulgação (ISO 8601) e número oficial do ato.
* **Versionamento e Retificação:** A sintaxe permite expressar versões históricas consolidadas de um texto legal ou fragmentos pontuais (ex.: \`urn:lex:br:federal:lei:1990-12-11;8112@versao:2026-01-01~art5_par1\`).

#### B. Os Dois Esquemas XML do LexML (*Questão MPE-CE 2025 / STJ 2024*)
* **Esquema Rígido (*Strict Schema*):**
  * Utilizado para a publicação, validação sintática e estruturação formal de textos da legislação e proposições em tramitação direta no Congresso Nacional.
  * Exige conformidade semântica exaustiva para cada elemento da Lei Complementar nº 95/1998 (epígrafe, ementa, preâmbulo, artigos, parágrafos, incisos, alíneas e itens).
* **Esquema Flexível (*Flexible Schema*):**
  * Empregado para a colheita (*harvesting*) e interoperabilidade distribuída de acervos heterogêneos fornecidos por tribunais estaduais, câmaras municipais e bibliotecas parceiras que não possuem o nível de detalhamento do esquema rígido.

---

### 5. Redes Cooperativas de Bibliotecas Jurídicas e Parlamentares no Brasil

A cooperação técnica e o compartilhamento de recursos informacionais constituem diretrizes centrais no universo jurídico nacional, frequentemente cobradas pelo Cebraspe quanto à governança, finalidade e histórico:

#### A. A Rede Virtual de Bibliotecas (RVBI) do Congresso Nacional
* **Órgão Coordenador:** Secretaria de Biblioteca e Arquivo do **SENADO FEDERAL**.
* **Composição:** Congrega bibliotecas dos três Poderes da União e da Administração Pública Federal no Distrito Federal (Câmara dos Deputados, Senado Federal, Supremo Tribunal Federal, Superior Tribunal de Justiça, Tribunal Superior do Trabalho, Tribunal Superior Eleitoral, Tribunal de Contas da União, Ministério da Justiça, Advocacia-Geral da União, entre outras).
* **Instrumentos Padronizados:**
  * **Catálogo Coletivo Integrado:** Base bibliográfica compartilhada no formato MARC 21;
  * **Vocabulário Controlado Básico (VCB):** Tesauro setorial coordenado pelo Senado Federal para indexação de doutrina, legislação e atos normativos;
  * **Classificação Decimal de Direito (CDDir):** Tabela especializada desenvolvida pela bibliotecária Doris de Queiroz Carvalho;
  * **Alimentação do LexML Brasil:** As bibliotecas da RVBI alimentam a base referencial e doutrinária que subsidia a URN Lex.

#### B. A Rede de Bibliotecas da Justiça Eleitoral (REJE)
* **Órgão Coordenador:** Biblioteca Professor Aliomar Baleeiro do **Tribunal Superior Eleitoral (TSE)**.
* **Composição:** Bibliotecas do TSE e dos 27 Tribunais Regionais Eleitorais (TREs).
* **Missão e Foco:** Especializada em Direito Eleitoral, Direito Partidário, Ciência Política e Jurisprudência Eleitoral.
* **Serviços:** Catálogo unificado de doutrina eleitoral, empréstimo entre bibliotecas da rede e compartilhamento de artigos da Revista de Jurisprudência Eleitoral.

#### C. A Rede de Bibliotecas do Ministério Público Federal (RBMPF)
* **Órgão Coordenador:** Biblioteca da **Procuradoria-Geral da República (PGR)**.
* **Composição Institucional:** Instituída por ato normativo da PGR/MPF, integra a Biblioteca Central da Procuradoria-Geral da República (em Brasília), as bibliotecas das cinco Procuradorias Regionais da República (PRRs nas 5 regiões) e os centros de documentação e bibliotecas das Procuradorias da República nos 26 Estados e no Distrito Federal (PRs/PRMs).
* **Missão e Escopo Especializado:** Fornecer suporte bibliográfico e doutrinário intensivo à atuação dos Procuradores da República nas funções constitucionais do Ministério Público:
  * Tutela coletiva e direitos difusos (direitos indígenas, meio ambiente, patrimônio histórico e cultural);
  * Defesa da ordem jurídica, do regime democrático e da probidade administrativa (combate à corrupção);
  * Ciências penais, processo penal e cooperação jurídica internacional.
* **Serviços em Rede:** Catálogo bibliográfico compartilhado, padronização da catalogação em MARC 21, serviço unificado de comutação bibliográfica e circulação de acervos entre as unidades regionais do MPF em todo o território nacional.

#### D. A Rede BIBLIODATA / CALCO (Marco Histórico Pioneiro no Brasil)
* **Instituição Mantenedora e Origem:** Criada em 1976 sob a liderança técnica da **Fundação Getulio Vargas (FGV)** e do **IBICT (Instituto Brasileiro de Informação em Ciência e Tecnologia)**, no Rio de Janeiro, com papel pioneiro da bibliotecária **Alice Príncipe Barbosa**.
* **Natureza Histórica:** Foi a **primeira e mais importante rede cooperativa de catalogação automatizada do Brasil**, precursora direta de todas as redes automatizadas contemporâneas no país, estabelecida décadas antes da difusão da Internet comercial.
* **O Formato CALCO (*Catalogação Legível por Computador*):**
  * Adaptação oficial brasileira do padrão MARC da Library of Congress;
  * Desenvolvido para superar a incompatibilidade dos sistemas locais e viabilizar o intercâmbio de dados em fitas magnéticas.
* **Dinâmica Operacional da Rede:** As bibliotecas cooperantes em todo o país (universidades federais, centros de pesquisa e órgãos públicos) alimentavam o banco central da FGV no Rio de Janeiro, que produzia e remetia às unidades participantes **fichas catalográficas impressas padronizadas** e matrizes de microfichas, evitando a catalogação redundante do mesmo livro em múltiplos estados.
* **Legado para o Concurso:** A BIBLIODATA consolidou a cultura de cooperação técnica, precedendo a transição para o MARC 21 e para a RVBI.

---

#### E. Quadro Sinóptico Comparativo das Redes de Bibliotecas Jurídicas e Parlamentares

| Rede Cooperativa | Instituição Coordenadora | Marco Cronológico | Foco Temático Central | Padrões Tecnológicos / Vocabulário | Relação com a Câmara dos Deputados |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RVBI** | **Senado Federal** (Sec. de Biblioteca e Arquivo) | Década de 1970 (antiga Rede Sabin) / 2000 (RVBI) | Direito, Processo Legislativo, Ciência Política e Administração Pública | Catálogo Coletivo MARC 21, Tesauro VCB e CDDir | A Câmara dos Deputados é membro cooperante cofundador de primeiro escalão. |
| **REJE** | **Tribunal Superior Eleitoral (TSE)** | Anos 2000 (Consolidação em rede) | Direito Eleitoral, Partidário e Jurisprudência dos Tribunais Regionais | Base compartilhada de decisões eleitorais e periódicos jurídicos | Intercâmbio de doutrina eleitoral e projetos de reforma política. |
| **RBMPF** | **Procuradoria-Geral da República (PGR)** | Portaria PGR/MPF | Tutela coletiva, Direitos Humanos, Meio Ambiente e Ciências Penais | Catálogo unificado MPF em MARC 21 e empréstimo entre sedes regionais | Cooperação e intercâmbio de pesquisas com as consultorias legislativas. |
| **BIBLIODATA** | **Fundação Getulio Vargas (FGV)** / IBICT | 1976 (Pioneira nacional) | Ciências Sociais, Economia, Administração e Acervos Universitários | Formato **CALCO** (MARC brasileiro) e distribuição de fichas impressas | Marco precursor da catalogação cooperativa que estruturou as bibliotecas públicas brasileiras. |

---

### 6. Indexação Pós-Coordenada e o Método SLIC (J. R. Sharp, 1965)
Cobrado nas provas recentes de alto nível do Cebraspe (MPE-CE 2025), o **Método SLIC (*Selective Listing in Combination*)** foi concebido por J. R. Sharp para índices impressos e mecânicos pós-coordenados:
* **Problema Resolvido:** Se um documento recebe 5 descritores ($A, B, C, D, E$), o número total de combinações possíveis é $2^n - 1 = 31$ permutações. Para 10 descritores, o índice explodiria para mais de 1.000 entradas redundantes.
* **A Solução do SLIC:** O método estabelece uma **ordenação alfabética rígida dos termos** e gera apenas combinações que mantêm a ordem alfabética estrita, selecionando sequências que não repetem termos menores já cobertos.
* **Resultado:** Reduz drasticamente o tamanho dos índices mantendo 100% da capacidade de recuperação de qualquer subconjunto conceitual.

---

### 7. Quadro Sinóptico de Cascas de Banana do Cebraspe em Informação Jurídica

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"No Diário Oficial da União, os editais de abertura de concursos públicos para a Câmara dos Deputados são veiculados na Seção 1."* | **ERRADO** | Editais de concursos saem na **Seção 3** (editais, contratos e licitações). A Seção 1 veicula atos normativos gerais. |
| *"A coordenação administrativa e técnica da Rede Virtual de Bibliotecas (RVBI) é de responsabilidade da Câmara dos Deputados."* | **ERRADO** | A coordenação da RVBI é privativa da **Secretaria de Biblioteca e Arquivo do SENADO FEDERAL**. |
| *"A Rede BIBLIODATA/CALCO foi instituída recentemente pela PGR para compartilhamento exclusivo de acórdãos judiciais em formato Dublin Core."* | **ERRADO** | A BIBLIODATA foi criada na década de 1970 pela **FGV/IBICT**, pioneira na catalogação cooperativa no Brasil com o formato **CALCO** (MARC brasileiro). |
| *"A URN Lex empregada no LexML utiliza o endereço físico dos servidores web (IP) para garantir a localização do documento."* | **ERRADO** | A URN Lex é um identificador de **nome persistente abstrato**, completamente independente de servidores IP ou URLs físicas. |
| *"No LexML, o esquema XML flexível é o exigido para a redação formal das proposições legislativas em tramitação no Congresso."* | **ERRADO** | A redação formal de proposições exige o **esquema XML RÍGIDO** (*Strict Schema*); o flexível serve para capturar dados externos. |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Regimento Interno da Câmara dos Deputados (sub-10-1):** Classificação de proposições e atos do processo legislativo.
* **Metadados, Dublin Core e Crosswalks (sub-2-6):** Esquema XML LexML e interoperabilidade com catálogos MARC 21.
`,
  checkpoints: [
    {
      id: 'cp-4-3-1',
      pergunta: 'Micro-Checkpoint 1: Seções do Diário Oficial da União (DOU)',
      item: 'No Diário Oficial da União (DOU), a publicação de editais de concurso público e de extratos de contratos administrativos deve ser realizada obrigatoriamente na Seção 2.',
      gabarito: 'E',
      justificativa: 'Errado! Editais de concurso, licitações e contratos são publicados na Seção 3 do DOU. A Seção 2 é reservada exclusivamente aos atos de pessoal (servidores).',
    },
    {
      id: 'cp-4-3-2',
      pergunta: 'Micro-Checkpoint 2: Identificador Persistente do LexML Brasil',
      item: 'O portal LexML Brasil adota a notação URN (Uniform Resource Name) para atribuir identificadores persistentes e independentes de localização aos documentos legislativos e jurídicos em sua base de dados.',
      gabarito: 'C',
      justificativa: 'Correto! A URN Lex assegura a persistência e a unicidade da referência documental jurídica no LexML.',
    },
    {
      id: 'cp-4-3-3',
      pergunta: 'Micro-Checkpoint 3: Redes Cooperativas Brasileiras (RVBI, RBMPF e BIBLIODATA)',
      item: 'A Rede Virtual de Bibliotecas (RVBI) tem sua gestão técnica e coordenação centralizadas na Secretaria de Biblioteca e Arquivo do Senado Federal, ao passo que a Rede BIBLIODATA, criada na década de 1970 sob coordenação da FGV com apoio do IBICT, consolidou-se como o marco pioneiro da catalogação cooperativa automatizada no Brasil com o uso do formato CALCO.',
      gabarito: 'C',
      justificativa: 'Certo! O Cebraspe exige o domínio institucional e histórico das redes nacionais: a RVBI é liderada pelo Senado Federal (com participação da Câmara e tribunais), e a pioneira BIBLIODATA/CALCO foi liderada pela FGV/IBICT a partir de 1976 como primeira rede nacional de catalogação cooperativa.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-4-3-1',
        periodo: '1862 / 1925',
        disciplina: 'Publicações Oficiais no Brasil',
        focoPrincipal: 'Criação do Diário Oficial e, posteriormente, do Diário da Justiça pela Imprensa Nacional',
        figuraChave: 'Imprensa Nacional',
      },
      {
        id: 'tl-4-3-2',
        periodo: '1970 / 1980',
        disciplina: 'Redes Cooperativas',
        focoPrincipal: 'Desenvolvimento do formato CALCO e criação da Rede BIBLIODATA pela FGV',
        figuraChave: 'Edson Nery da Fonseca / FGV',
      },
      {
        id: 'tl-4-3-3',
        periodo: '2009 / 2026',
        disciplina: 'LexML Brasil',
        focoPrincipal: 'Lançamento e consolidação do portal LexML Brasil com padrão URN Lex e esquemas XML rígido/flexível',
        figuraChave: 'Comitê Gestor LexML / Senado Federal (Interlegis)',
      },
    ],
    autores: [
      {
        id: 'aut-4-3-1',
        nome: 'Edilenice Jovelina Passos',
        ano: 2008,
        obraPrincipal: 'Informação jurídica: teoria e prática em bibliotecas parlamentares',
        ideiaChave: 'Sistematização do tripé legislação, doutrina e jurisprudência e rotinas de compilação normativa.',
        chipPegadinha: 'Informação legislativa é subconjunto formal da informação jurídica voltado ao processo legislativo.',
      },
      {
        id: 'aut-4-3-2',
        nome: 'John R. Sharp',
        ano: 1965,
        obraPrincipal: 'Some Fundamentals of Information Retrieval (Método SLIC)',
        ideiaChave: 'Método SLIC (Selective Listing in Combination) para indexação pós-coordenada sem redundância combinatória.',
        chipPegadinha: 'O SLIC gera apenas combinações ordenadas seletivas alfabeticamente, e não todas as permutações possíveis.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-4-3-1',
        afirmacao: 'A governança e a coordenação geral da Rede Virtual de Bibliotecas (RVBI) estão centralizadas na Mesa Diretora da Câmara dos Deputados.',
        gabarito: 'E',
        porQue: 'Cobrada no STJ 2024! A coordenação técnica da RVBI é de atribuição exclusiva da Secretaria de Biblioteca e Arquivo do SENADO FEDERAL.',
      },
      {
        id: 'peg-4-3-2',
        afirmacao: 'O padrão LexML de representação documental utiliza um esquema XML único e inflexível que impede a participação de acervos heterogêneos de órgãos externos.',
        gabarito: 'E',
        porQue: 'Cobrada no MPE-CE 2025! O LexML adota esquemas rígidos (para proposições oficiais) e esquemas flexíveis (para ingestão distribuída de dados heterogêneos).',
      },
    ],
  },
};
