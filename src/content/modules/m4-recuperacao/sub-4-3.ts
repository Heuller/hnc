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
  antesDeLer: [
  {
    "termo": "Identidade e localização",
    "definicao": "Identificador persistente não é o endereço de um servidor.",
    "exemploBiblioteca": "Mudança de URL exige manter a resolução; URN não torna o serviço infalível."
  },
  {
    "termo": "Validação de esquema",
    "definicao": "Conferência das restrições da representação XML.",
    "exemploBiblioteca": "Passar no XSD não certifica constitucionalidade ou vigência."
  }
],
  descricaoCurta: "Distinguir legislação, doutrina, decisão e orientação jurisprudencial. Separar gestão, documentação e apoio decisório sem atribuir julgamento autônomo à IA. Localizar publicação e distinguir veículo, versão e comunicação dirigida. Interpretar URN e restrições de esquema sem garantias jurídicas automáticas. Relacionar rede, coordenação, histórico e finalidade. Distinguir contagem de combinações e técnica de indexação. Conferir afirmações por fonte, competência e recorte.",
  tempoEstimadoMinutos: 30,
  autoresChave: [
  "Constituição Federal — arts. 59 e 103-A",
  "Decreto 9.215/2017 — publicação do DOU",
  "CNJ — Comunicações Processuais",
  "Projeto LexML — Parte 2: URN",
  "Projeto LexML — Parte 3: XML Schema",
  "Senado Federal — A RVBI",
  "IBICT — Histórico da Bibliodata",
  "Cunha e Cavalcanti — Dicionário (2008)"
],
  alertasCebraspe: [
  "A enumeração não forma essa escada linear; competência e reserva material importam.",
  "Classificação e decisão jurisdicional são funções diferentes.",
  "O art. 3º prevê exemplar para guarda; publicação eletrônica não significa inexistência de toda impressão."
],
  teoriaDensaMarkdown: "### Oficina aplicada — Da pergunta jurídica ao documento e à versão\n\n**Situação.** Uma assessora precisa saber o texto aplicável de uma norma em uma data passada e localizar uma decisão judicial relacionada. A pesquisa exige mais do que digitar palavras em um buscador.\n\n**1. Separe as perguntas.** Para o texto normativo, procure legislação em fonte oficial e verifique a data e a versão. Para saber como um tribunal decidiu, procure decisões na fonte jurisprudencial adequada. Para análise acadêmica, consulte doutrina. Um tipo não substitui automaticamente o outro.\n\n**2. Identifique e localize.** Uma URN Lex pode identificar um documento conforme regras de construção; uma URL aponta para um endereço de acesso. A URL pode mudar; a URN não prova que a página esteja ativa ou que a versão exibida corresponda à data solicitada.\n\n**3. Acompanhe versões.** A publicação original, uma alteração e o texto consolidado têm funções diferentes. Registre a referência, a fonte, a data da consulta e os limites da consolidação. Confirme vigência e efeitos no caso, inclusive regras transitórias quando pertinentes.\n\n**4. Organize a resposta.** Entregue os links, descreva quais documentos foram encontrados e diferencie texto, decisão e comentário. Se algo não pôde ser confirmado, diga isso.\n\n**Conexão com SLIC.** Um índice pode oferecer caminhos por termos de assunto, como o exemplo detalhado nesta aula; ele ajuda a localizar registros, mas não verifica sozinho a versão jurídica ou a pertinência do documento.\n\n### O Tripé Estruturante da Informação Jurídica no Parlamento\n\n**Três perguntas jurídicas diferentes.** Uma assessora precisa verificar uma regra, saber como um tribunal a interpretou e estudar opiniões de especialistas. O texto da lei integra a legislação; decisões e entendimentos judiciais são objeto da pesquisa jurisprudencial; livros e artigos de juristas compõem exemplos de doutrina.\n\nUm acórdão é uma decisão colegiada concreta; jurisprudência costuma referir-se ao conjunto ou orientação das decisões, e o uso do termo depende do contexto. Os três tipos de fonte se complementam, mas um comentário doutrinário não substitui a leitura do texto normativo aplicável.\n\nA informação jurídica possui natureza formal, técnica e altamente especializada, constituindo-se no sustentáculo da tomada de decisão e do controle de constitucionalidade no Congresso Nacional (**Edilenice Passos, 2014; Ana Cláudia Carvalho de Miranda, 2013**):\n\n```tree\nTITLE: Tripé Estruturante da Informação Jurídica\n- Informação Jurídica Integrada | Sustentáculo da tomada de decisão e do controle de constitucionalidade\n  - 1. Legislação (Normativa / Prescritiva) | Atos estatais, normas gerais e processo legislativo (CF, leis, MPs, decretos)\n  - 2. Jurisprudência (Interpretativa / Casuística) | Decisões reiteradas dos tribunais, acórdãos e súmulas vinculantes do STF\n  - 3. Doutrina (Analítica / Científica) | Estudos teóricos, teses, tratados e artigos de juristas especializados\n```\n\n#### A. O Tripé Informacional Canônico\n1. **Legislação (Informação Normativa):**\n   * O conjunto de atos e normas prescritivas emanadas das autoridades constituídas do Estado no exercício de sua competência legislativa e regulamentar.\n   * **Espécies do art. 59 da CF:** emendas, leis complementares, ordinárias, delegadas, medidas provisórias, decretos legislativos e resoluções. **A lista não estabelece uma escada linear de hierarquia entre todas elas.** Lei complementar e lei ordinária possuem campos e procedimentos próprios; não se presume superioridade universal apenas pelo nome. Decreto regulamentar é ato infralegal e não se confunde com decreto legislativo.\n\n2. **Doutrina (Informação Analítica / Científica):**\n   * Produção intelectual, científica e acadêmica de juristas, professores e pesquisadores que interpretam, criticam, contextualizam e sistematizam o ordenamento jurídico.\n   * *Veículos Típicos:* Tratados, manuais jurídicos, monografias, dissertações, teses e artigos em periódicos especializados (como a *Revista de Informação Legislativa do Senado* e a *Revista da EJE*).\n3. **Jurisprudência (Informação Interpretativa / Casuística):**\n   * A orientação extraída de decisões, considerada sua consistência, contexto e força no regime aplicável. Bases jurisprudenciais também recuperam decisões individuais, que não são automaticamente orientação pacificada. O conjunto de decisões, acórdãos e sentenças proferidas pelos órgãos jurisdicionais do Poder Judiciário ao aplicarem as leis a controvérsias concretas.\n   * *Espécies Principais:* Acórdãos dos Tribunais Superiores (STF, STJ, TST, TSE, STM), súmulas comuns, repercussão geral e **Súmulas Vinculantes do STF** (Art. 103-A da CF/88 — têm o âmbito definido no art. 103-A: demais órgãos do Judiciário e administração direta/indireta nas esferas federal, estadual e municipal. Não vinculam o próprio STF da mesma maneira nem impedem a função legislativa de produzir normas).\n\n**Aplicação e recuperação:** Uma medida provisória é relevante para a pesquisa normativa, mas sua existência não a torna hierarquicamente superior a uma lei ordinária. Para responder sobre vigência e efeitos, consulte o regime constitucional, as conversões e os atos pertinentes.\n\n### A Informática Jurídica: Dimensões Documentária, Decisória e de Gestão\n\n**A tecnologia muda conforme a tarefa.** Uma ferramenta que indexa acórdãos para pesquisa apoia a informática jurídica documentária. Um sistema que sugere documentos ou apoia análise de casos pode ilustrar a dimensão decisória; um sistema de acompanhamento de prazos ilustra gestão. O exemplo classifica a finalidade, não assegura que uma ferramenta real faça todas essas funções.\n\nEncontrar uma decisão não é decidir o caso. Identifique se o enunciado fala de armazenamento e busca, apoio à decisão ou organização do trabalho.\n\nA literatura de Informática Jurídica (**Edilenice Passos & Celso Cândido**) classifica a aplicação da computação ao Direito em dimensões úteis para análise, sem medir frequência de prova nesta aula:\n\n1. **Informática Jurídica Documentária (ou Documental):**\n   * Foca na coleta, indexação, armazenamento e recuperação automatizada de documentos jurídicos (legislação, jurisprudência e doutrina). É a base do **Portal LexML Brasil** e dos sistemas de busca de jurisprudência dos tribunais.\n2. **Informática Jurídica Decisória (ou Metadocumentária / IA Aplicada):**\n   * Utiliza sistemas especialistas, ontologias formais e inteligência artificial para auxiliar o operador do direito na tomada de decisões ou sugerir minutas de sentenças com base em padrões precedentes (ex.: ferramentas de classificação e apoio à análise; reconhecer padrões processuais não é delegar decisão jurisdicional autônoma a uma máquina).\n3. **Informática Jurídica de Gestão (ou Operacional / Telemática):**\n   * Ocupa-se da automação dos fluxos de trabalho e da administração das unidades jurídicas e gabinetes parlamentares (processo judicial eletrônico - PJe, tramitação eletrônica de proposições e controle de prazos).\n\n**Aplicação e recuperação:** Um algoritmo separa processos por tema para facilitar a análise. Isso é apoio ao fluxo, não prova de que a máquina profere sentença. Nome de projeto não basta para afirmar uma capacidade decisória que a fonte não descreve.\n\n### Publicação oficial, versões e comunicação processual\n\n**Publicar, vigorar e comunicar são perguntas diferentes.** Ao pesquisar uma lei, localize a publicação oficial, verifique quando começou a vigorar e confira alterações ou revogação conforme a data relevante. A publicação pode ser necessária, mas não autoriza presumir que todo ato vigore imediatamente: pode haver prazo de vacância ou regra própria.\n\nNo exemplo didático das seções do DOU, uma norma geral, um ato de pessoal e um edital costumam exigir verificação de seções distintas, conforme as regras aplicáveis. DJEN e Domicílio Judicial Eletrônico têm funções processuais diferentes; consulte a disciplina vigente para o caso.\n\nO Diário Oficial da União, gerido e editado pela **Imprensa Nacional** (órgão subordinado à Casa Civil da Presidência da República), é o veículo primordial de publicidade dos atos estatais federais para sua vigência e eficácia perante a sociedade:\n\n#### A. Seções do DOU: classificar pela matéria\n* **Seção 1 — Atos Normativos:** Destinada à publicação das normas de caráter abstrato e geral (leis sancionadas, promulgações do Congresso Nacional, atos do Presidente da República, portarias de ministérios, instruções normativas, acórdãos do TCU de interesse geral e tratados internacionais ratificados).\n* **Seção 2 — Atos de Pessoal:** Publicação obrigatória dos atos administrativos individuais que afetam os servidores públicos civis e militares federais (nomeações, exonerações, promoções e aposentadorias, conforme regras de publicação. Não se presume que todo evento de pessoal, posse, diária ou viagem tenha idêntica obrigatoriedade e seção sem consultar a disciplina específica).\n* **Seção 3 — Contratos, Editais e Ineditoriais:** Destinada à publicação de extratos de contratos e convênios públicos federais, avisos de licitações, leilões, **editais de concursos públicos** e matérias de particulares exigidas por lei (balanços de sociedades anônimas, atas de assembleias corporativas e editais de falência).\n\n#### B. A Descontinuidade da Versão Impressa e o Diário da Justiça (DJe)\n* Em **1º de dezembro de 2017**, a Imprensa Nacional adotou publicação exclusivamente eletrônica do DOU. O Decreto 9.215/2017 ainda determina impressão e guarda de ao menos um exemplar para arquivo; isso difere de circulação comercial impressa. A versão eletrônica passou a atender aos requisitos da **Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)**, conferindo-lhe plena fé pública e validade jurídica.\n* **O Diário da Justiça Eletrônico (DJe):** Não se deve fixar uma migração universal em 2010. A publicação judicial e a comunicação processual têm regras próprias. O **DJEN** e o **Domicílio Judicial Eletrônico**, regulados pelo CNJ, não são sinônimos: o primeiro é diário de publicação; o segundo atende comunicações dirigidas nos casos previstos. Conferir ato, tribunal, data e regime aplicável evita contar prazo por mera página de notícia.\n\n**Aplicação e recuperação:** O usuário encontrou uma notícia sobre julgamento. Para comprovar o ato e seu conteúdo, busque a decisão/publicação oficial e verifique datas. Um extrato no portal não substitui automaticamente o documento integral ou a regra de intimação.\n\n### A Rede e o Portal LexML Brasil: Padrão URN Lex e Esquemas XML\n\n**Identidade e endereço não são a mesma coisa.** O LexML ajuda a localizar informação jurídica em fontes participantes. Uma URN Lex é um identificador construído segundo regras para identificar um documento ou versão; uma URL aponta para um endereço de acesso. Um endereço pode mudar, e o uso de URN não garante, por si só, que o documento esteja disponível ou juridicamente atualizado.\n\nXML estrutura dados de acordo com um esquema; passar na validação sintática não prova que o conteúdo de uma norma esteja correto. Ao estudar, pergunte: trata-se de identificação, localização ou estrutura do documento?\n\nLançado em 2009 e desenvolvido por iniciativa cooperativa de instituições públicas, com atuação do Senado Federal, o **Portal LexML Brasil** (`https://www.lexml.gov.br`) integra acesso à informação legislativa e jurídica de diferentes fontes, sem que essa descrição constitua ranking de superioridade:\n\n#### A. URN Lex: identidade não é localização\nPara evitar que alterações nos servidores ou arquiteturas de URL quebrem os links (*link rot*), o LexML adota identificadores persistentes e unívocos globais através da **URN Lex**:\n$\\text{urn:lex:br:federal:lei:1990-12-11;8112}$\n* **Sintaxe Decomposta:**\n  * `urn`: esquema; `lex`: identificador do namespace na construção usada;\n  * `br`: Código de país segundo a norma internacional ISO 3166-1;\n  * `federal`: componente de autoridade do exemplo; localidade e autoridade são componentes distintos na sintaxe completa;\n  * `lei`: Espécie de documento jurídico (lei, decreto, medida.provisoria, acordao);\n  * `1990-12-11;8112`: Data de identificação do ato no exemplo; não se generaliza toda data de toda espécie como data de promulgação e número oficial do ato.\n* **Resolução e versões:** identificação e localização são separadas, mas a disponibilidade exige manutenção do serviço e dos vínculos. A URN não garante que um servidor jamais falhe. O manual possui regras específicas para componentes, versões e fragmentos; não se deve inventar um sufixo e apresentá-lo como validado.\n\n#### B. Esquemas rígido e flexível não são formatos de colheita\n\nA Parte 3, seção 2, explica: o rígido brasileiro modela articulação conforme a LC 95/1998; o flexível admite combinações mais amplas, inclusive normas que não seguem aquela técnica. No modelo documentado, **válido no rígido implica válido no flexível**, mas a recíproca não é garantida. Flexível não significa exclusivamente “coleta de metadados externos”; há esquema próprio `oai_lexml`. Validação XML verifica restrições do esquema, **não legalidade, constitucionalidade ou verdade integral** do ato.\n\n**Aplicação e recuperação:** A URN da Lei 8.112 identifica o ato; um endereço pode levar ao texto em um servidor. Ao mudar a URL, a manutenção da resolução preserva a utilidade do identificador. Passar num XSD não prova vigência ou constitucionalidade.\n\n### Redes Cooperativas de Bibliotecas Jurídicas e Parlamentares no Brasil\n\n**Cooperar é compartilhar trabalho e instrumentos.** Imagine duas bibliotecas que precisam catalogar a mesma obra: uma pode aproveitar e adaptar um registro produzido na rede, sujeito às regras e à revisão locais. Um catálogo coletivo facilita localizar onde há exemplares; ele não transfere automaticamente a propriedade dos livros nem garante que todas as instituições tenham o mesmo acervo.\n\nNa RVBI, confira a fonte institucional quanto à coordenação e às instituições participantes. Distinguir rede, catálogo e formato de intercâmbio evita atribuir a um deles a função dos outros.\n\nA cooperação técnica e o compartilhamento de recursos informacionais constituem diretrizes centrais no universo jurídico nacional, frequentemente cobradas pelo Cebraspe quanto à governança, finalidade e histórico:\n\n#### A. A Rede Virtual de Bibliotecas (RVBI) do Congresso Nacional\n* **Órgão Coordenador:** Secretaria de Biblioteca e Arquivo do **SENADO FEDERAL**.\n* **Composição:** Congrega bibliotecas dos três Poderes da União e da Administração Pública Federal no Distrito Federal (Câmara dos Deputados, Senado Federal, Supremo Tribunal Federal, Superior Tribunal de Justiça, Tribunal Superior do Trabalho, Tribunal Superior Eleitoral, Tribunal de Contas da União, Ministério da Justiça, Advocacia-Geral da União, entre outras).\n* **Instrumentos Padronizados:**\n  * **Catálogo Coletivo Integrado:** Base bibliográfica compartilhada no formato MARC 21;\n  * **Vocabulário Controlado Básico (VCB):** Tesauro setorial coordenado pelo Senado Federal para indexação de doutrina, legislação e atos normativos;\n  * **Classificação Decimal de Direito (CDDir):** Tabela especializada desenvolvida pela bibliotecária Doris de Queiroz Carvalho;\n  * **Alimentação do LexML Brasil:** As bibliotecas da RVBI alimentam a base referencial e doutrinária que subsidia a URN Lex.\n\n#### B. A Rede de Bibliotecas da Justiça Eleitoral (REJE)\n* **Órgão Coordenador:** Biblioteca Professor Aliomar Baleeiro do **Tribunal Superior Eleitoral (TSE)**.\n* **Composição:** Bibliotecas do TSE e dos 27 Tribunais Regionais Eleitorais (TREs).\n* **Missão e Foco:** Especializada em Direito Eleitoral, Direito Partidário, Ciência Política e Jurisprudência Eleitoral.\n* **Serviços:** Catálogo unificado de doutrina eleitoral, empréstimo entre bibliotecas da rede e compartilhamento de artigos da Revista de Jurisprudência Eleitoral.\n\n### Outras redes e instrumentos de cooperação\n\n#### C. A Rede de Bibliotecas do Ministério Público Federal (RBMPF)\n* **Órgão Coordenador:** Biblioteca da **Procuradoria-Geral da República (PGR)**.\n* **Composição Institucional:** Instituída por ato normativo da PGR/MPF, integra a Biblioteca Central da Procuradoria-Geral da República (em Brasília), as bibliotecas das unidades regionais pertinentes à organização vigente e os centros de documentação e bibliotecas das Procuradorias da República nos 26 Estados e no Distrito Federal (PRs/PRMs).\n* **Missão e Escopo Especializado:** Fornecer suporte bibliográfico e doutrinário intensivo à atuação dos Procuradores da República nas funções constitucionais do Ministério Público:\n  * Tutela coletiva e direitos difusos (direitos indígenas, meio ambiente, patrimônio histórico e cultural);\n  * Defesa da ordem jurídica, do regime democrático e da probidade administrativa (combate à corrupção);\n  * Ciências penais, processo penal e cooperação jurídica internacional.\n* **Serviços em Rede:** Catálogo bibliográfico compartilhado, padronização da catalogação em MARC 21, serviço unificado de comutação bibliográfica e circulação de acervos entre as unidades regionais do MPF em todo o território nacional.\n\n#### D. A Rede BIBLIODATA / CALCO (Marco Histórico Pioneiro no Brasil)\n* **Instituição Mantenedora e Origem:** Desenvolvida na **Fundação Getulio Vargas (FGV)** na década de 1970; o histórico do IBICT registra termo de cessão da Bibliodata para o instituto em **2009**. Não se confunde a origem com a responsabilidade atual, no Rio de Janeiro, com papel pioneiro da bibliotecária **Alice Príncipe Barbosa**.\n* **Natureza Histórica:** Foi **pioneira na catalogação cooperativa automatizada no Brasil**, sem demonstrar por isso ser origem direta de toda rede posterior, estabelecida décadas antes da difusão da Internet comercial.\n* **O Formato CALCO (*Catalogação Legível por Computador*):**\n  * Adaptação oficial brasileira do padrão MARC da Library of Congress;\n  * Desenvolvido para superar a incompatibilidade dos sistemas locais e viabilizar o intercâmbio de dados em fitas magnéticas.\n* **Dinâmica Operacional da Rede:** As bibliotecas cooperantes em todo o país (universidades federais, centros de pesquisa e órgãos públicos) alimentavam o banco central da FGV no Rio de Janeiro, que produzia e remetia às unidades participantes **fichas catalográficas impressas padronizadas** e matrizes de microfichas, evitando a catalogação redundante do mesmo livro em múltiplos estados.\n* **Legado para o Concurso:** A BIBLIODATA consolidou a cultura de cooperação técnica, precedendo a transição para o MARC 21 e para a RVBI.\n\n---\n\n#### E. Quadro Sinóptico Comparativo das Redes de Bibliotecas Jurídicas e Parlamentares\n\n| Rede Cooperativa | Instituição Coordenadora | Marco Cronológico | Foco Temático Central | Padrões Tecnológicos / Vocabulário | Relação com a Câmara dos Deputados |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **RVBI** | **Senado Federal** (Sec. de Biblioteca e Arquivo) | Década de 1970 (antiga Rede Sabin) / 2000 (RVBI) | Direito, Processo Legislativo, Ciência Política e Administração Pública | Catálogo Coletivo MARC 21, Tesauro VCB e CDDir | A Câmara dos Deputados integra a cooperação; não se cria categoria institucional de “primeiro escalão”. |\n| **REJE** | **Tribunal Superior Eleitoral (TSE)** | Anos 2000 (Consolidação em rede) | Direito Eleitoral, Partidário e Jurisprudência dos Tribunais Regionais | Base compartilhada de decisões eleitorais e periódicos jurídicos | Intercâmbio de doutrina eleitoral e projetos de reforma política. |\n| **RBMPF** | **Procuradoria-Geral da República (PGR)** | Portaria PGR/MPF | Tutela coletiva, Direitos Humanos, Meio Ambiente e Ciências Penais | Catálogo unificado MPF em MARC 21 e empréstimo entre sedes regionais | Cooperação e intercâmbio de pesquisas com as consultorias legislativas. |\n| **BIBLIODATA** | FGV na origem; IBICT após cessão | Década de 1970; cessão em 2009 | Ciências Sociais, Economia, Administração e Acervos Universitários | Formato **CALCO** (MARC brasileiro) e distribuição de fichas impressas | Marco precursor da catalogação cooperativa que estruturou as bibliotecas públicas brasileiras. |\n\n**Aplicação e recuperação:** Senado e Câmara cooperam, mas isso não torna a Câmara coordenadora da RVBI. Bibliodata ter origem na FGV também não permite congelar sua gestão em 1976. Separe origem, cessão, membros e serviços.\n\n### SLIC: como um índice ajuda a encontrar documentos por combinações de assuntos\n\n**Retomada:** o SLIC é uma técnica histórica para construir entradas de índice por combinações selecionadas de assuntos. A demonstração a seguir mostra como o leitor encontra um documento; acompanhe cada entrada antes de tirar conclusões sobre contagem ou recuperação.\n\n#### 1. O problema: uma única ordem nem sempre atende a todos\n\nImagine um artigo sobre **acervos, bibliotecas e conservação**. Um leitor procura “acervos e conservação”; outro procura “bibliotecas e conservação”. Como representar o mesmo artigo em um índice de assuntos para que ambos o encontrem sem examinar todos os registros?\n\nUm **índice de assuntos** é uma lista organizada de pontos de acesso que encaminham a documentos ou registros. **SLIC** significa *Selective Listing in Combination*, ou **listagem seletiva em combinação**. É uma técnica histórica de construção de índice que combina, em ordem definida, termos atribuídos a um documento e seleciona entradas para reduzir repetições. Seu resultado pode ser um índice impresso consultado por assunto. A técnica organiza caminhos de busca; ela não escolhe sozinha os melhores assuntos nem substitui a análise do documento.\n\n#### 2. Do documento às entradas\n\nPara este exemplo **hipotético**, atribua ao documento D17 os termos em ordem alfabética:\n\n- **A = acervos**;\n- **B = bibliotecas**;\n- **C = conservação**.\n\nPrimeiro considere as combinações não vazias, sem inverter a ordem: **A, B, C, AB, AC, BC e ABC**. São sete possibilidades iniciais. Depois elimine as entradas que já aparecem como **início de uma entrada mais longa** do mesmo documento: `A` e `AB` já iniciam `ABC`; `B` já inicia `BC`. O exemplo final fica assim:\n\n| Entrada | Termos exibidos no índice | Documento |\n| :--- | :--- | :--- |\n| **ABC** | Acervos — Bibliotecas — Conservação | D17 |\n| **AC** | Acervos — Conservação | D17 |\n| **BC** | Bibliotecas — Conservação | D17 |\n| **C** | Conservação | D17 |\n\nO leitor que procura **acervos e bibliotecas** pode percorrer o índice em `A` e encontrar `ABC`, cujo começo é `AB`. Quem procura **acervos e conservação** encontra `AC`; quem procura **bibliotecas e conservação**, `BC`. Quem procura **conservação** encontra `C`. O ponteiro D17 identifica o mesmo documento em todas as entradas.\n\n**Por que não há uma entrada isolada `A`?** Neste exemplo, quem percorre a seção `A` encontra entradas mais longas que começam por esse termo. A economia depende da consulta ao índice ordenado; não quer dizer que uma busca eletrônica por correspondência exata encontre automaticamente todos esses prefixos. A entrada `AC` também **não afirma que o documento não trate de bibliotecas**: ela oferece outro caminho para o mesmo D17.\n\n#### 3. Combinar não é permutar\n\nNo exemplo, `AC` mantém a ordem adotada; `CA` é outra ordem e não foi criada como uma entrada final. O SLIC não produz todas as permutações possíveis. Ele parte de combinações ordenadas e elimina certas entradas redundantes. Em um sistema com a mesma regra de eliminação, três termos distintos geram sete combinações iniciais e quatro entradas finais. Para quatro termos distintos, há 15 combinações iniciais e oito entradas finais. Esses números descrevem esse procedimento, não a relevância ou a qualidade da recuperação.\n\n**Pré e pós-coordenação:** aqui os termos são combinados na construção das entradas, antes da consulta. Em uma busca pós-coordenada, o usuário pode combinar termos separados no momento da pesquisa, por exemplo `acervos AND conservação`. São operações em momentos diferentes; um sistema real pode oferecer recursos de ambos os tipos.\n\n#### 4. Como a Cebraspe cobrou\n\nNo concurso **MPCE/2025, Analista Ministerial — Biblioteconomia, item 120**, a banca apresentou uma afirmação sobre gerar entradas a partir de uma sequência de termos e manter a ordem alfabética. O **gabarito definitivo foi certo**. Confira a redação exata no [caderno oficial](https://cdn.cebraspe.org.br/concursos/mp_ce_25_servidor/arquivos/055_MPCE_003_01.pdf) e o [gabarito definitivo](https://cdn.cebraspe.org.br/concursos/mp_ce_25_servidor/arquivos/Gab_Definitivo_055_MPCE_003_01.PDF).\n\n**Como raciocinar:** a ordem alfabética é central, mas “todas as justaposições” na questão não deve ser confundida com manter todas as permutações ou todas as combinações como linhas finais independentes. A descrição de Souza mostra as combinações iniciais e a posterior supressão de entradas que já iniciam outras. O gabarito é o resultado daquela prova; não demonstra que todo índice siga a mesma implementação ou que uma busca sempre recupere tudo o que o usuário deseja.\n\n#### 5. Experimente antes de olhar\n\nUsando a tabela acima, onde você procuraria o documento ao pesquisar **acervos e bibliotecas**? E se procurasse **bibliotecas e conservação**?\n\n**Resposta comentada:** `ABC` começa por `AB`, de modo que a primeira consulta pode encontrar D17 nessa entrada. A segunda corresponde ao início `BC`, também associado a D17. A primeira resposta não é uma entrada separada `AB`: ela é encontrada como início da entrada mais longa `ABC`.\n\n**Fonte da explicação:** Glaucia H. B. P. de Souza, “Indexação: economizando na entrada e na saída”, *Revista da Escola de Biblioteconomia da UFMG*, 5(2), 1976, pp. 227–229, com exemplos de combinações e eliminação de entradas iniciais redundantes. As palavras e o documento D17 são didáticos.\n\n### Enunciados autorais de aplicação: documento, identidade e responsabilidade\n\n**Faça o diagnóstico antes do julgamento.** Se o item mistura URN e URL, separe identidade de endereço. Se troca RVBI por instituição coordenadora diferente, procure a fonte institucional. Se compara publicação com vigência, peça a data e a regra aplicável. As afirmações a seguir são exemplos autorais, não reproduções de provas oficiais.\n\n| Afirmação autoral para análise | Gabarito | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"No Diário Oficial da União, os editais de abertura de concursos públicos para a Câmara dos Deputados são veiculados na Seção 1.\"* | **ERRADO** | Editais de concursos saem na **Seção 3** (editais, contratos e licitações). A Seção 1 veicula atos normativos gerais. |\n| *\"A coordenação administrativa e técnica da Rede Virtual de Bibliotecas (RVBI) é de responsabilidade da Câmara dos Deputados.\"* | **ERRADO** | A coordenação da RVBI é exercida pelo Senado, por meio de sua biblioteca, conforme a organização institucional vigente. |\n| *\"A Rede BIBLIODATA/CALCO foi instituída recentemente pela PGR para compartilhamento exclusivo de acórdãos judiciais em formato Dublin Core.\"* | **ERRADO** | A BIBLIODATA foi criada na década de 1970 na **FGV**, com posterior cessão ao IBICT, pioneira na catalogação cooperativa no Brasil com o formato **CALCO** (MARC brasileiro). |\n| *\"A URN Lex empregada no LexML utiliza o endereço físico dos servidores web (IP) para garantir a localização do documento.\"* | **ERRADO** | A URN Lex é um identificador de **nome persistente abstrato**, completamente independente de servidores IP ou URLs físicas. |\n| *\"No LexML, o esquema XML flexível é o exigido para a redação formal das proposições legislativas em tramitação no Congresso.\"* | **ERRADO** | A distinção documentada é de restrições de articulação. Não se deduz que toda proposição usa o mesmo esquema nem que flexível seja apenas colheita externa. |\n\n**Aplicação e recuperação:** “Tem identificador persistente” não significa “nunca ficará indisponível”. “É válido no rígido” tem uma implicação específica no modelo de esquemas; não autoriza inverter a relação ou afirmar validade jurídica.",
  teoriaDidaticaMarkdown: "Pesquise fonte oficial, espécie, versão e data. O art. 59 não é escada linear entre todas as espécies. DOU, DJEN e Domicílio Judicial Eletrônico têm funções distintas. URN separa identidade de localização; manutenção continua necessária. Esquema XML não certifica constitucionalidade. RVBI é coordenada pelo Senado; Bibliodata tem origem na FGV e cessão ao IBICT. Não confunda subconjuntos com permutações.",
  checkpoints: [
  {
    "id": "cp-4-3-1",
    "pergunta": "Micro-Checkpoint 1: Seções do Diário Oficial da União (DOU)",
    "item": "No Diário Oficial da União (DOU), a publicação de editais de concurso público e de extratos de contratos administrativos deve ser realizada obrigatoriamente na Seção 2.",
    "gabarito": "E",
    "justificativa": "Editais de concurso e extratos contratuais são matérias da Seção 3, não da Seção 2, destinada a pessoal. Conferir a disciplina de publicação específica.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "versao_correta": "Essas matérias são publicadas na Seção 3, conforme as regras aplicáveis."
  },
  {
    "id": "cp-4-3-2",
    "pergunta": "Micro-Checkpoint 2: Identificador Persistente do LexML Brasil",
    "item": "O portal LexML Brasil adota a notação URN (Uniform Resource Name) para atribuir identificadores persistentes e independentes de localização aos documentos legislativos e jurídicos em sua base de dados.",
    "gabarito": "C",
    "justificativa": "O identificador separa identidade e localização. Persistência é objetivo apoiado em manutenção e resolução, não garantia automática de disponibilidade perpétua.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination."
  },
  {
    "id": "cp-4-3-3",
    "pergunta": "Micro-Checkpoint 3: Redes Cooperativas Brasileiras (RVBI, RBMPF e BIBLIODATA)",
    "item": "A RVBI é coordenada pelo Senado Federal; a Bibliodata teve origem na FGV na década de 1970 e seu histórico registra cessão ao IBICT em 2009.",
    "gabarito": "C",
    "justificativa": "A afirmação distingue coordenação da RVBI, origem da Bibliodata e responsabilidade posterior; não as funde numa criação conjunta atemporal.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination."
  },
  {
    "id": "rt-4-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O art. 59 estabelece superioridade hierárquica universal da lei complementar sobre toda lei ordinária, independentemente da matéria.",
    "gabarito": "E",
    "justificativa": "A enumeração não forma essa escada linear; competência e reserva material importam.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar",
    "versao_correta": "É preciso examinar campo material e procedimento constitucional."
  },
  {
    "id": "rt-4-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um sistema que classifica documentos processuais prova, por esse fato, que decide autonomamente o mérito de toda ação.",
    "gabarito": "E",
    "justificativa": "Classificação e decisão jurisdicional são funções diferentes.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar",
    "versao_correta": "A capacidade do sistema deve ser verificada, sem inferir julgamento autônomo."
  },
  {
    "id": "rt-4-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A publicação exclusivamente eletrônica do DOU exclui até a impressão de exemplar para arquivo prevista no decreto.",
    "gabarito": "E",
    "justificativa": "O art. 3º prevê exemplar para guarda; publicação eletrônica não significa inexistência de toda impressão.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar",
    "versao_correta": "Circulação eletrônica e impressão para arquivo são situações distintas."
  },
  {
    "id": "rt-4-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No modelo LexML documentado, validade no esquema rígido implica validade no flexível, sem garantir a recíproca.",
    "gabarito": "C",
    "justificativa": "As restrições do rígido são mais estreitas no modelo descrito.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A origem da Bibliodata na FGV permite afirmar que sua gestão nunca foi objeto de cessão ao IBICT.",
    "gabarito": "E",
    "justificativa": "O histórico registra termo de cessão em 2009.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar",
    "versao_correta": "Origem e gestão posterior devem ser distinguidas."
  },
  {
    "id": "rt-4-3-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Para cinco elementos distintos, 2⁵−1 conta subconjuntos não vazios, e não permutações completas.",
    "gabarito": "C",
    "justificativa": "Há 31 subconjuntos não vazios; permutações completas são 5!=120.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-3-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Validação XML de um texto legislativo certifica automaticamente sua constitucionalidade.",
    "gabarito": "E",
    "justificativa": "O esquema valida restrições formais de representação, não substitui controle jurídico.",
    "fonte": "CF, arts. 59 e 103-A; Decreto 9.215/2017; CNJ, Resoluções 455/2022 e 569/2024; Projeto LexML, Partes 2 e 3; Senado, RVBI; IBICT, histórico Bibliodata; Cunha e Cavalcanti (2008), verbete Selective Listing in Combination.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar",
    "versao_correta": "Validade sintática e validade jurídica são dimensões distintas."
  },
  {
    "id": "rt-4-3-slic-busca",
    "pergunta": "Aplique a técnica apresentada ao exemplo do índice.",
    "item": "No índice hipotético ABC, AC, BC e C, associado ao mesmo documento, quem procura A e B pode localizar esse documento sob a entrada ABC.",
    "gabarito": "C",
    "justificativa": "ABC começa por AB; ao percorrer as entradas em ordem, o leitor encontra o mesmo documento. A ausência de uma linha separada AB não impede a consulta por esse início no índice.",
    "fonte": "Souza (1976), Indexação: economizando na entrada e na saída, pp. 227–229; exemplo de documento e letras adaptado para fins didáticos.",
    "editalRef": "Bloco E - Item 2.3 a 2.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-m4-urn",
    "pergunta": "Aplique o exemplo e julgue a afirmação.",
    "item": "Uma URN Lex identifica um documento segundo uma convenção; isso, por si só, não garante sua disponibilidade em determinado endereço ou sua atualidade.",
    "gabarito": "C",
    "justificativa": "Identificação, localização e verificação da versão são operações distintas. Uma URN não substitui a consulta à fonte e à data pertinente.",
    "fonte": "Exemplo autoral elaborado a partir das fontes indicadas na aula.",
    "editalRef": "Bloco E — Recuperação e acesso à informação",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-oficina-4-3",
    "pergunta": "Aplique a oficina e julgue a afirmação.",
    "item": "Uma URN pode identificar um documento, mas não garante por si que sua versão esteja atualizada ou acessível em determinado endereço.",
    "gabarito": "C",
    "justificativa": "Identificação, localização e conferência da versão são tarefas distintas.",
    "fonte": "Projeto LexML, Parte 2: URN; situação hipotética.",
    "editalRef": "Organização, representação, recuperação e mediação da informação",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-4-3-fonte-cf",
      "nome": "Constituição Federal — arts. 59 e 103-A",
      "ano": "Referência de consulta",
      "obraPrincipal": "Constituição Federal — arts. 59 e 103-A",
      "ideiaChave": "Espécies normativas não são uma escada linear de hierarquia; âmbito de súmula vinculante.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-3-fonte-dou",
      "nome": "Decreto 9.215/2017 — publicação do DOU",
      "ano": "Referência de consulta",
      "obraPrincipal": "Decreto 9.215/2017 — publicação do DOU",
      "ideiaChave": "Arts. 2º–4º; consultar texto vigente no corte. Há exemplar impresso para arquivo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-3-fonte-cnj",
      "nome": "CNJ — Comunicações Processuais",
      "ano": "Referência de consulta",
      "obraPrincipal": "CNJ — Comunicações Processuais",
      "ideiaChave": "DJEN e Domicílio Judicial Eletrônico possuem funções distintas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-3-fonte-lex-urn",
      "nome": "Projeto LexML — Parte 2: URN",
      "ano": "Referência de consulta",
      "obraPrincipal": "Projeto LexML — Parte 2: URN",
      "ideiaChave": "Identificação, componentes, versões e resolução.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-3-fonte-lex-xml",
      "nome": "Projeto LexML — Parte 3: XML Schema",
      "ano": "Referência de consulta",
      "obraPrincipal": "Projeto LexML — Parte 3: XML Schema",
      "ideiaChave": "Seção 2: esquemas rígido e flexível; validação sintática não é certificação jurídica.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-3-fonte-rvbi",
      "nome": "Senado Federal — A RVBI",
      "ano": "Referência de consulta",
      "obraPrincipal": "Senado Federal — A RVBI",
      "ideiaChave": "Coordenação, cooperação e instrumentos compartilhados.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-3-fonte-bibliodata",
      "nome": "IBICT — Histórico da Bibliodata",
      "ano": "Referência de consulta",
      "obraPrincipal": "IBICT — Histórico da Bibliodata",
      "ideiaChave": "Origem na FGV e termo de cessão de 2009; não atribuir gestão atual exclusivamente à FGV.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-3-fonte-cunha",
      "nome": "Cunha e Cavalcanti — Dicionário (2008)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Cunha e Cavalcanti — Dicionário (2008)",
      "ideiaChave": "PDF do projeto; verbete Selective Listing in Combination.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-4-3-5",
      "afirmacao": "A origem da Bibliodata na FGV permite afirmar que sua gestão nunca foi objeto de cessão ao IBICT.",
      "gabarito": "E",
      "porQue": "O histórico registra termo de cessão em 2009."
    },
    {
      "id": "memoria-rt-4-3-6",
      "afirmacao": "Para cinco elementos distintos, 2⁵−1 conta subconjuntos não vazios, e não permutações completas.",
      "gabarito": "C",
      "porQue": "Há 31 subconjuntos não vazios; permutações completas são 5!=120."
    },
    {
      "id": "memoria-rt-4-3-7",
      "afirmacao": "Validação XML de um texto legislativo certifica automaticamente sua constitucionalidade.",
      "gabarito": "E",
      "porQue": "O esquema valida restrições formais de representação, não substitui controle jurídico."
    }
  ]
},

versaoTeoria: "2026-11-04.oficinas-1",
unidadesAprendizagem: [
  {
    "id": "sub-4-3-oficina",
    "titulo": "Oficina aplicada — Da pergunta jurídica ao documento e à versão",
    "objetivos": [
      "Aplicar os conceitos em situação concreta e justificar o julgamento."
    ],
    "conteudo": "**Situação.** Uma assessora precisa saber o texto aplicável de uma norma em uma data passada e localizar uma decisão judicial relacionada. A pesquisa exige mais do que digitar palavras em um buscador.\n\n**1. Separe as perguntas.** Para o texto normativo, procure legislação em fonte oficial e verifique a data e a versão. Para saber como um tribunal decidiu, procure decisões na fonte jurisprudencial adequada. Para análise acadêmica, consulte doutrina. Um tipo não substitui automaticamente o outro.\n\n**2. Identifique e localize.** Uma URN Lex pode identificar um documento conforme regras de construção; uma URL aponta para um endereço de acesso. A URL pode mudar; a URN não prova que a página esteja ativa ou que a versão exibida corresponda à data solicitada.\n\n**3. Acompanhe versões.** A publicação original, uma alteração e o texto consolidado têm funções diferentes. Registre a referência, a fonte, a data da consulta e os limites da consolidação. Confirme vigência e efeitos no caso, inclusive regras transitórias quando pertinentes.\n\n**4. Organize a resposta.** Entregue os links, descreva quais documentos foram encontrados e diferencie texto, decisão e comentário. Se algo não pôde ser confirmado, diga isso.\n\n**Conexão com SLIC.** Um índice pode oferecer caminhos por termos de assunto, como o exemplo detalhado nesta aula; ele ajuda a localizar registros, mas não verifica sozinho a versão jurídica ou a pertinência do documento.",
    "checkpointIds": [
      "rt-oficina-4-3"
    ]
  },
  {
    "id": "sub-4-3-bloco-1",
    "titulo": "O Tripé Estruturante da Informação Jurídica no Parlamento",
    "objetivos": [
      "Distinguir legislação, doutrina, decisão e orientação jurisprudencial."
    ],
    "conteudo": "**Três perguntas jurídicas diferentes.** Uma assessora precisa verificar uma regra, saber como um tribunal a interpretou e estudar opiniões de especialistas. O texto da lei integra a legislação; decisões e entendimentos judiciais são objeto da pesquisa jurisprudencial; livros e artigos de juristas compõem exemplos de doutrina.\n\nUm acórdão é uma decisão colegiada concreta; jurisprudência costuma referir-se ao conjunto ou orientação das decisões, e o uso do termo depende do contexto. Os três tipos de fonte se complementam, mas um comentário doutrinário não substitui a leitura do texto normativo aplicável.\n\nA informação jurídica possui natureza formal, técnica e altamente especializada, constituindo-se no sustentáculo da tomada de decisão e do controle de constitucionalidade no Congresso Nacional (**Edilenice Passos, 2014; Ana Cláudia Carvalho de Miranda, 2013**):\n\n```tree\nTITLE: Tripé Estruturante da Informação Jurídica\n- Informação Jurídica Integrada | Sustentáculo da tomada de decisão e do controle de constitucionalidade\n  - 1. Legislação (Normativa / Prescritiva) | Atos estatais, normas gerais e processo legislativo (CF, leis, MPs, decretos)\n  - 2. Jurisprudência (Interpretativa / Casuística) | Decisões reiteradas dos tribunais, acórdãos e súmulas vinculantes do STF\n  - 3. Doutrina (Analítica / Científica) | Estudos teóricos, teses, tratados e artigos de juristas especializados\n```\n\n#### A. O Tripé Informacional Canônico\n1. **Legislação (Informação Normativa):**\n   * O conjunto de atos e normas prescritivas emanadas das autoridades constituídas do Estado no exercício de sua competência legislativa e regulamentar.\n   * **Espécies do art. 59 da CF:** emendas, leis complementares, ordinárias, delegadas, medidas provisórias, decretos legislativos e resoluções. **A lista não estabelece uma escada linear de hierarquia entre todas elas.** Lei complementar e lei ordinária possuem campos e procedimentos próprios; não se presume superioridade universal apenas pelo nome. Decreto regulamentar é ato infralegal e não se confunde com decreto legislativo.\n\n2. **Doutrina (Informação Analítica / Científica):**\n   * Produção intelectual, científica e acadêmica de juristas, professores e pesquisadores que interpretam, criticam, contextualizam e sistematizam o ordenamento jurídico.\n   * *Veículos Típicos:* Tratados, manuais jurídicos, monografias, dissertações, teses e artigos em periódicos especializados (como a *Revista de Informação Legislativa do Senado* e a *Revista da EJE*).\n3. **Jurisprudência (Informação Interpretativa / Casuística):**\n   * A orientação extraída de decisões, considerada sua consistência, contexto e força no regime aplicável. Bases jurisprudenciais também recuperam decisões individuais, que não são automaticamente orientação pacificada. O conjunto de decisões, acórdãos e sentenças proferidas pelos órgãos jurisdicionais do Poder Judiciário ao aplicarem as leis a controvérsias concretas.\n   * *Espécies Principais:* Acórdãos dos Tribunais Superiores (STF, STJ, TST, TSE, STM), súmulas comuns, repercussão geral e **Súmulas Vinculantes do STF** (Art. 103-A da CF/88 — têm o âmbito definido no art. 103-A: demais órgãos do Judiciário e administração direta/indireta nas esferas federal, estadual e municipal. Não vinculam o próprio STF da mesma maneira nem impedem a função legislativa de produzir normas).\n\n**Aplicação e recuperação:** Uma medida provisória é relevante para a pesquisa normativa, mas sua existência não a torna hierarquicamente superior a uma lei ordinária. Para responder sobre vigência e efeitos, consulte o regime constitucional, as conversões e os atos pertinentes.",
    "checkpointIds": [
      "rt-4-3-1"
    ]
  },
  {
    "id": "sub-4-3-bloco-2",
    "titulo": "A Informática Jurídica: Dimensões Documentária, Decisória e de Gestão",
    "objetivos": [
      "Separar gestão, documentação e apoio decisório sem atribuir julgamento autônomo à IA."
    ],
    "conteudo": "**A tecnologia muda conforme a tarefa.** Uma ferramenta que indexa acórdãos para pesquisa apoia a informática jurídica documentária. Um sistema que sugere documentos ou apoia análise de casos pode ilustrar a dimensão decisória; um sistema de acompanhamento de prazos ilustra gestão. O exemplo classifica a finalidade, não assegura que uma ferramenta real faça todas essas funções.\n\nEncontrar uma decisão não é decidir o caso. Identifique se o enunciado fala de armazenamento e busca, apoio à decisão ou organização do trabalho.\n\nA literatura de Informática Jurídica (**Edilenice Passos & Celso Cândido**) classifica a aplicação da computação ao Direito em dimensões úteis para análise, sem medir frequência de prova nesta aula:\n\n1. **Informática Jurídica Documentária (ou Documental):**\n   * Foca na coleta, indexação, armazenamento e recuperação automatizada de documentos jurídicos (legislação, jurisprudência e doutrina). É a base do **Portal LexML Brasil** e dos sistemas de busca de jurisprudência dos tribunais.\n2. **Informática Jurídica Decisória (ou Metadocumentária / IA Aplicada):**\n   * Utiliza sistemas especialistas, ontologias formais e inteligência artificial para auxiliar o operador do direito na tomada de decisões ou sugerir minutas de sentenças com base em padrões precedentes (ex.: ferramentas de classificação e apoio à análise; reconhecer padrões processuais não é delegar decisão jurisdicional autônoma a uma máquina).\n3. **Informática Jurídica de Gestão (ou Operacional / Telemática):**\n   * Ocupa-se da automação dos fluxos de trabalho e da administração das unidades jurídicas e gabinetes parlamentares (processo judicial eletrônico - PJe, tramitação eletrônica de proposições e controle de prazos).\n\n**Aplicação e recuperação:** Um algoritmo separa processos por tema para facilitar a análise. Isso é apoio ao fluxo, não prova de que a máquina profere sentença. Nome de projeto não basta para afirmar uma capacidade decisória que a fonte não descreve.",
    "checkpointIds": [
      "rt-4-3-2"
    ]
  },
  {
    "id": "sub-4-3-bloco-3",
    "titulo": "Publicação oficial, versões e comunicação processual",
    "objetivos": [
      "Localizar publicação e distinguir veículo, versão e comunicação dirigida."
    ],
    "conteudo": "**Publicar, vigorar e comunicar são perguntas diferentes.** Ao pesquisar uma lei, localize a publicação oficial, verifique quando começou a vigorar e confira alterações ou revogação conforme a data relevante. A publicação pode ser necessária, mas não autoriza presumir que todo ato vigore imediatamente: pode haver prazo de vacância ou regra própria.\n\nNo exemplo didático das seções do DOU, uma norma geral, um ato de pessoal e um edital costumam exigir verificação de seções distintas, conforme as regras aplicáveis. DJEN e Domicílio Judicial Eletrônico têm funções processuais diferentes; consulte a disciplina vigente para o caso.\n\nO Diário Oficial da União, gerido e editado pela **Imprensa Nacional** (órgão subordinado à Casa Civil da Presidência da República), é o veículo primordial de publicidade dos atos estatais federais para sua vigência e eficácia perante a sociedade:\n\n#### A. Seções do DOU: classificar pela matéria\n* **Seção 1 — Atos Normativos:** Destinada à publicação das normas de caráter abstrato e geral (leis sancionadas, promulgações do Congresso Nacional, atos do Presidente da República, portarias de ministérios, instruções normativas, acórdãos do TCU de interesse geral e tratados internacionais ratificados).\n* **Seção 2 — Atos de Pessoal:** Publicação obrigatória dos atos administrativos individuais que afetam os servidores públicos civis e militares federais (nomeações, exonerações, promoções e aposentadorias, conforme regras de publicação. Não se presume que todo evento de pessoal, posse, diária ou viagem tenha idêntica obrigatoriedade e seção sem consultar a disciplina específica).\n* **Seção 3 — Contratos, Editais e Ineditoriais:** Destinada à publicação de extratos de contratos e convênios públicos federais, avisos de licitações, leilões, **editais de concursos públicos** e matérias de particulares exigidas por lei (balanços de sociedades anônimas, atas de assembleias corporativas e editais de falência).\n\n#### B. A Descontinuidade da Versão Impressa e o Diário da Justiça (DJe)\n* Em **1º de dezembro de 2017**, a Imprensa Nacional adotou publicação exclusivamente eletrônica do DOU. O Decreto 9.215/2017 ainda determina impressão e guarda de ao menos um exemplar para arquivo; isso difere de circulação comercial impressa. A versão eletrônica passou a atender aos requisitos da **Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)**, conferindo-lhe plena fé pública e validade jurídica.\n* **O Diário da Justiça Eletrônico (DJe):** Não se deve fixar uma migração universal em 2010. A publicação judicial e a comunicação processual têm regras próprias. O **DJEN** e o **Domicílio Judicial Eletrônico**, regulados pelo CNJ, não são sinônimos: o primeiro é diário de publicação; o segundo atende comunicações dirigidas nos casos previstos. Conferir ato, tribunal, data e regime aplicável evita contar prazo por mera página de notícia.\n\n**Aplicação e recuperação:** O usuário encontrou uma notícia sobre julgamento. Para comprovar o ato e seu conteúdo, busque a decisão/publicação oficial e verifique datas. Um extrato no portal não substitui automaticamente o documento integral ou a regra de intimação.",
    "checkpointIds": [
      "cp-4-3-1",
      "rt-4-3-3"
    ]
  },
  {
    "id": "sub-4-3-bloco-4",
    "titulo": "A Rede e o Portal LexML Brasil: Padrão URN Lex e Esquemas XML",
    "objetivos": [
      "Interpretar URN e restrições de esquema sem garantias jurídicas automáticas."
    ],
    "conteudo": "**Identidade e endereço não são a mesma coisa.** O LexML ajuda a localizar informação jurídica em fontes participantes. Uma URN Lex é um identificador construído segundo regras para identificar um documento ou versão; uma URL aponta para um endereço de acesso. Um endereço pode mudar, e o uso de URN não garante, por si só, que o documento esteja disponível ou juridicamente atualizado.\n\nXML estrutura dados de acordo com um esquema; passar na validação sintática não prova que o conteúdo de uma norma esteja correto. Ao estudar, pergunte: trata-se de identificação, localização ou estrutura do documento?\n\nLançado em 2009 e desenvolvido por iniciativa cooperativa de instituições públicas, com atuação do Senado Federal, o **Portal LexML Brasil** (`https://www.lexml.gov.br`) integra acesso à informação legislativa e jurídica de diferentes fontes, sem que essa descrição constitua ranking de superioridade:\n\n#### A. URN Lex: identidade não é localização\nPara evitar que alterações nos servidores ou arquiteturas de URL quebrem os links (*link rot*), o LexML adota identificadores persistentes e unívocos globais através da **URN Lex**:\n$\\text{urn:lex:br:federal:lei:1990-12-11;8112}$\n* **Sintaxe Decomposta:**\n  * `urn`: esquema; `lex`: identificador do namespace na construção usada;\n  * `br`: Código de país segundo a norma internacional ISO 3166-1;\n  * `federal`: componente de autoridade do exemplo; localidade e autoridade são componentes distintos na sintaxe completa;\n  * `lei`: Espécie de documento jurídico (lei, decreto, medida.provisoria, acordao);\n  * `1990-12-11;8112`: Data de identificação do ato no exemplo; não se generaliza toda data de toda espécie como data de promulgação e número oficial do ato.\n* **Resolução e versões:** identificação e localização são separadas, mas a disponibilidade exige manutenção do serviço e dos vínculos. A URN não garante que um servidor jamais falhe. O manual possui regras específicas para componentes, versões e fragmentos; não se deve inventar um sufixo e apresentá-lo como validado.\n\n#### B. Esquemas rígido e flexível não são formatos de colheita\n\nA Parte 3, seção 2, explica: o rígido brasileiro modela articulação conforme a LC 95/1998; o flexível admite combinações mais amplas, inclusive normas que não seguem aquela técnica. No modelo documentado, **válido no rígido implica válido no flexível**, mas a recíproca não é garantida. Flexível não significa exclusivamente “coleta de metadados externos”; há esquema próprio `oai_lexml`. Validação XML verifica restrições do esquema, **não legalidade, constitucionalidade ou verdade integral** do ato.\n\n**Aplicação e recuperação:** A URN da Lei 8.112 identifica o ato; um endereço pode levar ao texto em um servidor. Ao mudar a URL, a manutenção da resolução preserva a utilidade do identificador. Passar num XSD não prova vigência ou constitucionalidade.",
    "checkpointIds": [
      "cp-4-3-2",
      "rt-4-3-4",
      "rt-m4-urn"
    ]
  },
  {
    "id": "sub-4-3-bloco-5",
    "titulo": "Redes Cooperativas de Bibliotecas Jurídicas e Parlamentares no Brasil",
    "objetivos": [
      "Relacionar rede, coordenação, histórico e finalidade."
    ],
    "conteudo": "**Cooperar é compartilhar trabalho e instrumentos.** Imagine duas bibliotecas que precisam catalogar a mesma obra: uma pode aproveitar e adaptar um registro produzido na rede, sujeito às regras e à revisão locais. Um catálogo coletivo facilita localizar onde há exemplares; ele não transfere automaticamente a propriedade dos livros nem garante que todas as instituições tenham o mesmo acervo.\n\nNa RVBI, confira a fonte institucional quanto à coordenação e às instituições participantes. Distinguir rede, catálogo e formato de intercâmbio evita atribuir a um deles a função dos outros.\n\nA cooperação técnica e o compartilhamento de recursos informacionais constituem diretrizes centrais no universo jurídico nacional, frequentemente cobradas pelo Cebraspe quanto à governança, finalidade e histórico:\n\n#### A. A Rede Virtual de Bibliotecas (RVBI) do Congresso Nacional\n* **Órgão Coordenador:** Secretaria de Biblioteca e Arquivo do **SENADO FEDERAL**.\n* **Composição:** Congrega bibliotecas dos três Poderes da União e da Administração Pública Federal no Distrito Federal (Câmara dos Deputados, Senado Federal, Supremo Tribunal Federal, Superior Tribunal de Justiça, Tribunal Superior do Trabalho, Tribunal Superior Eleitoral, Tribunal de Contas da União, Ministério da Justiça, Advocacia-Geral da União, entre outras).\n* **Instrumentos Padronizados:**\n  * **Catálogo Coletivo Integrado:** Base bibliográfica compartilhada no formato MARC 21;\n  * **Vocabulário Controlado Básico (VCB):** Tesauro setorial coordenado pelo Senado Federal para indexação de doutrina, legislação e atos normativos;\n  * **Classificação Decimal de Direito (CDDir):** Tabela especializada desenvolvida pela bibliotecária Doris de Queiroz Carvalho;\n  * **Alimentação do LexML Brasil:** As bibliotecas da RVBI alimentam a base referencial e doutrinária que subsidia a URN Lex.\n\n#### B. A Rede de Bibliotecas da Justiça Eleitoral (REJE)\n* **Órgão Coordenador:** Biblioteca Professor Aliomar Baleeiro do **Tribunal Superior Eleitoral (TSE)**.\n* **Composição:** Bibliotecas do TSE e dos 27 Tribunais Regionais Eleitorais (TREs).\n* **Missão e Foco:** Especializada em Direito Eleitoral, Direito Partidário, Ciência Política e Jurisprudência Eleitoral.\n* **Serviços:** Catálogo unificado de doutrina eleitoral, empréstimo entre bibliotecas da rede e compartilhamento de artigos da Revista de Jurisprudência Eleitoral.\n\n### Outras redes e instrumentos de cooperação\n\n#### C. A Rede de Bibliotecas do Ministério Público Federal (RBMPF)\n* **Órgão Coordenador:** Biblioteca da **Procuradoria-Geral da República (PGR)**.\n* **Composição Institucional:** Instituída por ato normativo da PGR/MPF, integra a Biblioteca Central da Procuradoria-Geral da República (em Brasília), as bibliotecas das unidades regionais pertinentes à organização vigente e os centros de documentação e bibliotecas das Procuradorias da República nos 26 Estados e no Distrito Federal (PRs/PRMs).\n* **Missão e Escopo Especializado:** Fornecer suporte bibliográfico e doutrinário intensivo à atuação dos Procuradores da República nas funções constitucionais do Ministério Público:\n  * Tutela coletiva e direitos difusos (direitos indígenas, meio ambiente, patrimônio histórico e cultural);\n  * Defesa da ordem jurídica, do regime democrático e da probidade administrativa (combate à corrupção);\n  * Ciências penais, processo penal e cooperação jurídica internacional.\n* **Serviços em Rede:** Catálogo bibliográfico compartilhado, padronização da catalogação em MARC 21, serviço unificado de comutação bibliográfica e circulação de acervos entre as unidades regionais do MPF em todo o território nacional.\n\n#### D. A Rede BIBLIODATA / CALCO (Marco Histórico Pioneiro no Brasil)\n* **Instituição Mantenedora e Origem:** Desenvolvida na **Fundação Getulio Vargas (FGV)** na década de 1970; o histórico do IBICT registra termo de cessão da Bibliodata para o instituto em **2009**. Não se confunde a origem com a responsabilidade atual, no Rio de Janeiro, com papel pioneiro da bibliotecária **Alice Príncipe Barbosa**.\n* **Natureza Histórica:** Foi **pioneira na catalogação cooperativa automatizada no Brasil**, sem demonstrar por isso ser origem direta de toda rede posterior, estabelecida décadas antes da difusão da Internet comercial.\n* **O Formato CALCO (*Catalogação Legível por Computador*):**\n  * Adaptação oficial brasileira do padrão MARC da Library of Congress;\n  * Desenvolvido para superar a incompatibilidade dos sistemas locais e viabilizar o intercâmbio de dados em fitas magnéticas.\n* **Dinâmica Operacional da Rede:** As bibliotecas cooperantes em todo o país (universidades federais, centros de pesquisa e órgãos públicos) alimentavam o banco central da FGV no Rio de Janeiro, que produzia e remetia às unidades participantes **fichas catalográficas impressas padronizadas** e matrizes de microfichas, evitando a catalogação redundante do mesmo livro em múltiplos estados.\n* **Legado para o Concurso:** A BIBLIODATA consolidou a cultura de cooperação técnica, precedendo a transição para o MARC 21 e para a RVBI.\n\n---\n\n#### E. Quadro Sinóptico Comparativo das Redes de Bibliotecas Jurídicas e Parlamentares\n\n| Rede Cooperativa | Instituição Coordenadora | Marco Cronológico | Foco Temático Central | Padrões Tecnológicos / Vocabulário | Relação com a Câmara dos Deputados |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **RVBI** | **Senado Federal** (Sec. de Biblioteca e Arquivo) | Década de 1970 (antiga Rede Sabin) / 2000 (RVBI) | Direito, Processo Legislativo, Ciência Política e Administração Pública | Catálogo Coletivo MARC 21, Tesauro VCB e CDDir | A Câmara dos Deputados integra a cooperação; não se cria categoria institucional de “primeiro escalão”. |\n| **REJE** | **Tribunal Superior Eleitoral (TSE)** | Anos 2000 (Consolidação em rede) | Direito Eleitoral, Partidário e Jurisprudência dos Tribunais Regionais | Base compartilhada de decisões eleitorais e periódicos jurídicos | Intercâmbio de doutrina eleitoral e projetos de reforma política. |\n| **RBMPF** | **Procuradoria-Geral da República (PGR)** | Portaria PGR/MPF | Tutela coletiva, Direitos Humanos, Meio Ambiente e Ciências Penais | Catálogo unificado MPF em MARC 21 e empréstimo entre sedes regionais | Cooperação e intercâmbio de pesquisas com as consultorias legislativas. |\n| **BIBLIODATA** | FGV na origem; IBICT após cessão | Década de 1970; cessão em 2009 | Ciências Sociais, Economia, Administração e Acervos Universitários | Formato **CALCO** (MARC brasileiro) e distribuição de fichas impressas | Marco precursor da catalogação cooperativa que estruturou as bibliotecas públicas brasileiras. |\n\n**Aplicação e recuperação:** Senado e Câmara cooperam, mas isso não torna a Câmara coordenadora da RVBI. Bibliodata ter origem na FGV também não permite congelar sua gestão em 1976. Separe origem, cessão, membros e serviços.",
    "checkpointIds": [
      "cp-4-3-3",
      "rt-4-3-5"
    ]
  },
  {
    "id": "sub-4-3-bloco-6",
    "titulo": "SLIC: como um índice ajuda a encontrar documentos por combinações de assuntos",
    "objetivos": [
      "Explicar o que o SLIC faz e localizar um documento a partir das entradas de um índice."
    ],
    "conteudo": "**Retomada:** o SLIC é uma técnica histórica para construir entradas de índice por combinações selecionadas de assuntos. A demonstração a seguir mostra como o leitor encontra um documento; acompanhe cada entrada antes de tirar conclusões sobre contagem ou recuperação.\n\n#### 1. O problema: uma única ordem nem sempre atende a todos\n\nImagine um artigo sobre **acervos, bibliotecas e conservação**. Um leitor procura “acervos e conservação”; outro procura “bibliotecas e conservação”. Como representar o mesmo artigo em um índice de assuntos para que ambos o encontrem sem examinar todos os registros?\n\nUm **índice de assuntos** é uma lista organizada de pontos de acesso que encaminham a documentos ou registros. **SLIC** significa *Selective Listing in Combination*, ou **listagem seletiva em combinação**. É uma técnica histórica de construção de índice que combina, em ordem definida, termos atribuídos a um documento e seleciona entradas para reduzir repetições. Seu resultado pode ser um índice impresso consultado por assunto. A técnica organiza caminhos de busca; ela não escolhe sozinha os melhores assuntos nem substitui a análise do documento.\n\n#### 2. Do documento às entradas\n\nPara este exemplo **hipotético**, atribua ao documento D17 os termos em ordem alfabética:\n\n- **A = acervos**;\n- **B = bibliotecas**;\n- **C = conservação**.\n\nPrimeiro considere as combinações não vazias, sem inverter a ordem: **A, B, C, AB, AC, BC e ABC**. São sete possibilidades iniciais. Depois elimine as entradas que já aparecem como **início de uma entrada mais longa** do mesmo documento: `A` e `AB` já iniciam `ABC`; `B` já inicia `BC`. O exemplo final fica assim:\n\n| Entrada | Termos exibidos no índice | Documento |\n| :--- | :--- | :--- |\n| **ABC** | Acervos — Bibliotecas — Conservação | D17 |\n| **AC** | Acervos — Conservação | D17 |\n| **BC** | Bibliotecas — Conservação | D17 |\n| **C** | Conservação | D17 |\n\nO leitor que procura **acervos e bibliotecas** pode percorrer o índice em `A` e encontrar `ABC`, cujo começo é `AB`. Quem procura **acervos e conservação** encontra `AC`; quem procura **bibliotecas e conservação**, `BC`. Quem procura **conservação** encontra `C`. O ponteiro D17 identifica o mesmo documento em todas as entradas.\n\n**Por que não há uma entrada isolada `A`?** Neste exemplo, quem percorre a seção `A` encontra entradas mais longas que começam por esse termo. A economia depende da consulta ao índice ordenado; não quer dizer que uma busca eletrônica por correspondência exata encontre automaticamente todos esses prefixos. A entrada `AC` também **não afirma que o documento não trate de bibliotecas**: ela oferece outro caminho para o mesmo D17.\n\n#### 3. Combinar não é permutar\n\nNo exemplo, `AC` mantém a ordem adotada; `CA` é outra ordem e não foi criada como uma entrada final. O SLIC não produz todas as permutações possíveis. Ele parte de combinações ordenadas e elimina certas entradas redundantes. Em um sistema com a mesma regra de eliminação, três termos distintos geram sete combinações iniciais e quatro entradas finais. Para quatro termos distintos, há 15 combinações iniciais e oito entradas finais. Esses números descrevem esse procedimento, não a relevância ou a qualidade da recuperação.\n\n**Pré e pós-coordenação:** aqui os termos são combinados na construção das entradas, antes da consulta. Em uma busca pós-coordenada, o usuário pode combinar termos separados no momento da pesquisa, por exemplo `acervos AND conservação`. São operações em momentos diferentes; um sistema real pode oferecer recursos de ambos os tipos.\n\n#### 4. Como a Cebraspe cobrou\n\nNo concurso **MPCE/2025, Analista Ministerial — Biblioteconomia, item 120**, a banca apresentou uma afirmação sobre gerar entradas a partir de uma sequência de termos e manter a ordem alfabética. O **gabarito definitivo foi certo**. Confira a redação exata no [caderno oficial](https://cdn.cebraspe.org.br/concursos/mp_ce_25_servidor/arquivos/055_MPCE_003_01.pdf) e o [gabarito definitivo](https://cdn.cebraspe.org.br/concursos/mp_ce_25_servidor/arquivos/Gab_Definitivo_055_MPCE_003_01.PDF).\n\n**Como raciocinar:** a ordem alfabética é central, mas “todas as justaposições” na questão não deve ser confundida com manter todas as permutações ou todas as combinações como linhas finais independentes. A descrição de Souza mostra as combinações iniciais e a posterior supressão de entradas que já iniciam outras. O gabarito é o resultado daquela prova; não demonstra que todo índice siga a mesma implementação ou que uma busca sempre recupere tudo o que o usuário deseja.\n\n#### 5. Experimente antes de olhar\n\nUsando a tabela acima, onde você procuraria o documento ao pesquisar **acervos e bibliotecas**? E se procurasse **bibliotecas e conservação**?\n\n**Resposta comentada:** `ABC` começa por `AB`, de modo que a primeira consulta pode encontrar D17 nessa entrada. A segunda corresponde ao início `BC`, também associado a D17. A primeira resposta não é uma entrada separada `AB`: ela é encontrada como início da entrada mais longa `ABC`.\n\n**Fonte da explicação:** Glaucia H. B. P. de Souza, “Indexação: economizando na entrada e na saída”, *Revista da Escola de Biblioteconomia da UFMG*, 5(2), 1976, pp. 227–229, com exemplos de combinações e eliminação de entradas iniciais redundantes. As palavras e o documento D17 são didáticos.",
    "checkpointIds": [
      "rt-4-3-slic-busca",
      "rt-4-3-6"
    ]
  },
  {
    "id": "sub-4-3-bloco-7",
    "titulo": "Enunciados autorais de aplicação: documento, identidade e responsabilidade",
    "objetivos": [
      "Conferir afirmações por fonte, competência e recorte."
    ],
    "conteudo": "**Faça o diagnóstico antes do julgamento.** Se o item mistura URN e URL, separe identidade de endereço. Se troca RVBI por instituição coordenadora diferente, procure a fonte institucional. Se compara publicação com vigência, peça a data e a regra aplicável. As afirmações a seguir são exemplos autorais, não reproduções de provas oficiais.\n\n| Afirmação autoral para análise | Gabarito | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"No Diário Oficial da União, os editais de abertura de concursos públicos para a Câmara dos Deputados são veiculados na Seção 1.\"* | **ERRADO** | Editais de concursos saem na **Seção 3** (editais, contratos e licitações). A Seção 1 veicula atos normativos gerais. |\n| *\"A coordenação administrativa e técnica da Rede Virtual de Bibliotecas (RVBI) é de responsabilidade da Câmara dos Deputados.\"* | **ERRADO** | A coordenação da RVBI é exercida pelo Senado, por meio de sua biblioteca, conforme a organização institucional vigente. |\n| *\"A Rede BIBLIODATA/CALCO foi instituída recentemente pela PGR para compartilhamento exclusivo de acórdãos judiciais em formato Dublin Core.\"* | **ERRADO** | A BIBLIODATA foi criada na década de 1970 na **FGV**, com posterior cessão ao IBICT, pioneira na catalogação cooperativa no Brasil com o formato **CALCO** (MARC brasileiro). |\n| *\"A URN Lex empregada no LexML utiliza o endereço físico dos servidores web (IP) para garantir a localização do documento.\"* | **ERRADO** | A URN Lex é um identificador de **nome persistente abstrato**, completamente independente de servidores IP ou URLs físicas. |\n| *\"No LexML, o esquema XML flexível é o exigido para a redação formal das proposições legislativas em tramitação no Congresso.\"* | **ERRADO** | A distinção documentada é de restrições de articulação. Não se deduz que toda proposição usa o mesmo esquema nem que flexível seja apenas colheita externa. |\n\n**Aplicação e recuperação:** “Tem identificador persistente” não significa “nunca ficará indisponível”. “É válido no rígido” tem uma implicação específica no modelo de esquemas; não autoriza inverter a relação ou afirmar validade jurídica.",
    "checkpointIds": [
      "rt-4-3-7"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cf",
    "titulo": "Constituição Federal — arts. 59 e 103-A",
    "localizador": "Espécies normativas não são uma escada linear de hierarquia; âmbito de súmula vinculante.",
    "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },
  {
    "id": "dou",
    "titulo": "Decreto 9.215/2017 — publicação do DOU",
    "localizador": "Arts. 2º–4º; consultar texto vigente no corte. Há exemplar impresso para arquivo.",
    "url": "https://www2.camara.leg.br/legin/fed/decret/2017/decreto-9215-29-novembro-2017-785835-normaatualizada-pe.html"
  },
  {
    "id": "cnj",
    "titulo": "CNJ — Comunicações Processuais",
    "localizador": "DJEN e Domicílio Judicial Eletrônico possuem funções distintas.",
    "url": "https://www.cnj.jus.br/programas-e-acoes/processo-judicial-eletronico-pje/comunicacoes-processuais/"
  },
  {
    "id": "lex-urn",
    "titulo": "Projeto LexML — Parte 2: URN",
    "localizador": "Identificação, componentes, versões e resolução.",
    "url": "https://projeto.lexml.gov.br/documentacao/Parte-2-LexML-URN.pdf"
  },
  {
    "id": "lex-xml",
    "titulo": "Projeto LexML — Parte 3: XML Schema",
    "localizador": "Seção 2: esquemas rígido e flexível; validação sintática não é certificação jurídica.",
    "url": "https://projeto.lexml.gov.br/documentacao/Parte-3-XML-Schema.pdf"
  },
  {
    "id": "rvbi",
    "titulo": "Senado Federal — A RVBI",
    "localizador": "Coordenação, cooperação e instrumentos compartilhados.",
    "url": "https://www12.senado.leg.br/institucional/biblioteca/rvbi/a-rvbi"
  },
  {
    "id": "bibliodata",
    "titulo": "IBICT — Histórico da Bibliodata",
    "localizador": "Origem na FGV e termo de cessão de 2009; não atribuir gestão atual exclusivamente à FGV.",
    "url": "https://www.gov.br/ibict/pt-br/site-ibict-2025/assuntos/informacao-cientifica/bibliodata/historico"
  },
  {
    "id": "cunha",
    "titulo": "Cunha e Cavalcanti — Dicionário (2008)",
    "localizador": "PDF do projeto; verbete Selective Listing in Combination.",
    "url": "https://github.com/Heuller/hnc/tree/auditoria-2026-10/acervo-estudos"
  },
  {
    "id": "souza-slic-1976",
    "titulo": "Souza — Indexação: economizando na entrada e na saída (1976)",
    "localizador": "Revista da Escola de Biblioteconomia da UFMG, 5(2), pp. 227–229: combinações ordenadas e seleção de entradas.",
    "url": "https://periodicos.ufmg.br/index.php/reb/article/download/36198/28332/108877"
  },
  {
    "id": "mpce-slic-2025",
    "titulo": "Cebraspe — MPCE 2025, Biblioteconomia, item 120",
    "localizador": "Caderno oficial, item 120; gabarito definitivo C no caderno 055_MPCE_003_01.",
    "url": "https://cdn.cebraspe.org.br/concursos/mp_ce_25_servidor/arquivos/055_MPCE_003_01.pdf"
  }
],
};
