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
  teoriaDensaMarkdown: `### 1. O Tripé Estruturante da Informação Jurídica

A informação jurídica possui natureza formal, técnica e altamente especializada, constituindo-se no sustentáculo direto de bibliotecas parlamentares e tribunais (Miranda, D'Amore & Pinto, 2013):

#### A. O Tripé Informacional
1. **Legislação (Informação Normativa):**
   * O conjunto de atos e normas prescritivas emanadas das autoridades constituídas do Estado no exercício de sua competência legislativa e regulamentar.
   * *Hierarquia Constitucional (Art. 59 da CF/88):* Emendas Constitucionais $\rightarrow$ Leis Complementares $\rightarrow$ Leis Ordinárias e Delegadas $\rightarrow$ Medidas Provisórias $\rightarrow$ Decretos Legislativos $\rightarrow$ Resoluções $\rightarrow$ Atos Infralegais (Decretos, Portarias, Instruções Normativas).
2. **Doutrina (Informação Analítica / Científica):**
   * Produção intelectual, científica e acadêmica de juristas, professores e pesquisadores que interpretam, criticam e sistematizam o Direito.
   * *Veículos:* Tratados, manuais jurídicos, monografias, dissertações, teses e artigos em periódicos especializados (ex.: *Revista de Informação Legislativa da Câmara*).
3. **Jurisprudência (Informação Interpretativa / Casuística):**
   * O conjunto reiterado e uniforme de decisões, acórdãos e sentenças proferidas pelos órgãos jurisdicionais do Poder Judiciário ao aplicarem o ordenamento a casos concretos.
   * *Espécies:* Acórdãos dos Tribunais Superiores (STF, STJ, TST, TSE, STM), súmulas comuns e **súmulas vinculantes** (que vinculam toda a administração pública e o judiciário).

---

### 2. O Diário Oficial da União (DOU) e Publicações Oficiais

O Diário Oficial da União, gerido e editado pela **Imprensa Nacional** (órgão subordinado à Casa Civil da Presidência da República), é o veículo primordial de publicidade dos atos estatais federais para sua vigência e eficácia perante a sociedade:

#### A. A Estrutura das Seções do DOU
* **Seção 1 — Atos Normativos:** Destinada à publicação das normas de caráter abstrato e geral (leis promulgadas, atos do Presidente da República, portarias de ministérios, acórdãos do TCU de interesse geral e tratados internacionais).
* **Seção 2 — Atos de Pessoal:** Publicação obrigatória dos atos administrativos individuais que afetam os servidores públicos civis e militares federais (nomeação, exoneração, promoção, aposentadoria, cessão e concessão de diárias).
* **Seção 3 — Contratos, Editais e Ineditoriais:** Destinada à publicação de extratos de contratos e convênios da administração, avisos de licitações, leilões, editais de concursos públicos e matérias de particulares exigidas por lei (balanços de S.A., convocações de assembleias corporativas).

#### B. A Descontinuidade da Versão Impressa e o DJe
* Em 1º de dezembro de 2017, a Imprensa Nacional extinguiu a edição impressa em papel do DOU, passando a circular exclusivamente na versão digital pela Internet, com assinatura e certificação digital no padrão **ICP-Brasil**, possuindo plena fé pública.
* **O Diário da Justiça Eletrônico (DJe):** Em 2010, o Diário da Justiça deixou de ser publicado de forma centralizada pela Imprensa Nacional; cada tribunal passou a manter seu próprio DJe eletrônico, e o Conselho Nacional de Justiça (CNJ) instituiu o **Diário de Justiça Eletrônico Nacional (DJEN)**.

---

### 3. A Rede e o Portal LexML Brasil

Criado pelo Projeto de Informação Legislativa e Jurídica em 2009 e liderado tecnicamente pelo Senado Federal (Interlegis) e pela Câmara dos Deputados, o **LexML Brasil** (\`https://www.lexml.gov.br\`) é o portal federado unificado de referência nacional:

* **Escopo Abrangente:** Integra proposições legislativas em tramitação, legislação vigente, jurisprudência e doutrina de todos os três Poderes nas esferas Federal, Estadual e Municipal.
* **O Padrão URN Lex (Uniform Resource Name):**
  * Para evitar links quebrados (*dead links*), o LexML não usa URLs tradicionais, mas um identificador persistente e unívoco denominado **URN Lex** (baseado na RFC 2141 do IETF).
  * *Estrutura sintática padronizada:*
    $$\\text{urn:lex:br:federal:lei:1990-12-11;8112}$$
    * \`urn:lex\` (namespace identifier);
    * \`br\` (código de país ISO 3166-1);
    * \`federal\` (esfera de autoridade governamental);
    * \`lei\` (tipo de documento jurídico);
    * \`1990-12-11;8112\` (data de promulgação ISO 8601 e número do ato).
* **Esquemas XML do LexML (*⚠️ Alerta Cebraspe - MPE-CE 2025 / STJ 2024*):**
  * **Esquema Rígido (*Strict Schema*):** Utilizado para a representação formal e estruturada de textos da legislação e proposições do Congresso Nacional, exigindo conformidade semântica exaustiva para cada elemento normativo (artigo, parágrafo, inciso, alínea).
  * **Esquema Flexível (*Flexible Schema*):** Empregado para permitir a ingestão e interoperabilidade de registros de bibliotecas parceiras e órgãos externos cujos dados não possuem o nível máximo de granularidade legislativa.

---

### 4. Redes de Bibliotecas Jurídicas e Cooperação Informacional

1. **Rede Virtual de Bibliotecas (RVBI):**
   * Coordenada institucionalmente pela **Secretaria de Biblioteca e Arquivo do Senado Federal**.
   * Reúne bibliotecas dos três Poderes da União e do GDF (incluindo Câmara dos Deputados, STF, STJ, TST, TSE, TCU e Ministérios).
   * Compartilha catálogo bibliográfico e autoridade no padrão MARC 21, vocabulário VCX e classificação CDDir.
2. **Rede de Bibliotecas da Justiça Eleitoral (REJE):**
   * Coordenada pelo Tribunal Superior Eleitoral (TSE), congrega bibliotecas dos Tribunais Regionais Eleitorais (TREs) de todos os Estados para gestão cooperativa de doutrina e jurisprudência eleitoral.
3. **Rede de Bibliotecas do Ministério Público Federal (RBMPF):**
   * Coordenada pela Procuradoria-Geral da República (PGR), integra bibliotecas das Procuradorias Regionais e da República em todo o país.
4. **Rede BIBLIODATA / CALCO:**
   * Marco histórico pioneiro da catalogação cooperativa no Brasil, criada na década de 1970 pela Fundação Getulio Vargas (FGV) sob a liderança de **Edson Nery da Fonseca**, introduzindo o formato CALCO (baseado no MARC).

---

### 5. Indexação Pós-Coordenada e Método SLIC (J. R. Sharp)

* **Método SLIC (*Selective Listing in Combination* - Sharp, 1965):**
  * Desenvolvido para indexação pós-coordenada em sistemas de recuperação da informação.
  * O método elimina a redundância combinatorial total. Se um documento recebe os termos $A, B, C$, em vez de gerar todas as permutações ($2^n - 1 = 7$ combinações), o SLIC gera apenas combinações ordenadas seletivas que começam com o primeiro elemento alfabético (ex.: $ABC, AB, AC, BC, C$), otimizando índices manuais e mecânicos sem gerar ruído combinatório (*MPE-CE 2025*).`,
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
