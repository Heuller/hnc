import type { ModuloFilho } from '../../../domain/types';

export const submodulo43: ModuloFilho = {
  id: 'sub-4-3',
  numero: '4.3',
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

\`\`\`mermaid
graph TD
    IJ["INFORMAÇÃO JURÍDICA INTEGRADA"] --> LEG["1. LEGISLAÇÃO (Normativa / Prescritiva)<br>Atos estatais, normas gerais e processo legislativo"]
    IJ --> JUR["2. JURISPRUDÊNCIA (Interpretativa / Casuística)<br>Decisões reiteradas dos tribunais e súmulas"]
    IJ --> DOU["3. DOUTRINA (Analítica / Científica)<br>Estudos teóricos, teses, tratados e artigos de juristas"]
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
$$\\text{urn:lex:br:federal:lei:1990-12-11;8112}$$
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

### 5. Redes Cooperativas de Bibliotecas Jurídicas no Brasil
O CEBRASPE cobra com regularidade a coordenação institucional e a finalidade de cada rede:

| Rede Cooperativa | Órgão Coordenador | Composição Institucional | Padrões Utilizados |
| :--- | :--- | :--- | :--- |
| **RVBI (Rede Virtual de Bibliotecas)** | **Secretaria de Biblioteca e Arquivo do SENADO FEDERAL** | Bibliotecas dos três Poderes da União e do Distrito Federal (Câmara dos Deputados, STF, STJ, TST, TSE, TCU, Ministérios). | Catálogo Coletivo MARC 21, Classificação Decimal de Direito (CDDir) e Vocabulário Controlado Básico (VCB). |
| **REJE (Rede de Bibliotecas da Justiça Eleitoral)** | **Tribunal Superior Eleitoral (TSE)** | Bibliotecas do TSE e dos 27 Tribunais Regionais Eleitorais (TREs). | Compartilhamento de doutrina e jurisprudência em matéria eleitoral e partidária. |
| **RBMPF (Rede do Ministério Público Federal)** | **Procuradoria-Geral da República (PGR)** | Bibliotecas da PGR e das Procuradorias Regionais da República em todo o país. | Acervos voltados à tutela coletiva, direito ambiental e ciências penais. |
| **Rede BIBLIODATA / CALCO** | **Fundação Getulio Vargas (FGV)** (Marco Histórico - Década de 1970) | Pioneira da catalogação cooperativa em rede no Brasil (liderada por Edson Nery da Fonseca). | Formato CALCO (Catalogação Legível por Computador, adaptação brasileira pioneira do MARC). |

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
| *"A URN Lex empregada no LexML utiliza o endereço físico dos servidores web (IP) para garantir a localização do documento."* | **ERRADO** | A URN Lex é um identificador de **nome persistente abstrato**, completamente independente de servidores IP ou URLs físicas. |
| *"No LexML, o esquema XML flexível é o exigido para a redação formal das proposições legislativas em tramitação no Congresso."* | **ERRADO** | A redação formal de proposições exige o **esquema XML RÍGIDO** (*Strict Schema*); o flexível serve para capturar dados externos. |`,
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
      pergunta: 'Micro-Checkpoint 3: Coordenação da Rede Virtual de Bibliotecas (RVBI)',
      item: 'A Rede Virtual de Bibliotecas do Congresso Nacional (RVBI) tem sua gestão e coordenação técnica exercidas pela biblioteca da Câmara dos Deputados.',
      gabarito: 'E',
      justificativa: 'Errado! Cobrado pelo Cebraspe (STJ 2024). A coordenação da RVBI cabe institucionalmente à Secretaria de Biblioteca e Arquivo do SENADO FEDERAL.',
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
