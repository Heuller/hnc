import type { ModuloFilho } from '../../../domain/types';

export const submodulo15: ModuloFilho = {
  id: 'sub-1-5',
  numero: '1.5',
  editalRef: 'Bloco A - Item 1.2, 1.7 e 1.8',
  preRequisitos: ["sub-1-3"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-6-3",
          "titulo": "Preservação Digital e Repositórios Confiáveis",
          "motivo": "Fixidez, autenticidade e integridade da informação em longo prazo."
      },
      {
          "submoduloId": "sub-1-6",
          "titulo": "Governança da Informação e de Dados",
          "motivo": "Gestão da qualidade e rastreabilidade ao longo do ciclo de vida dos dados."
      }
  ],
  titulo: 'Ciclo de Vida, Qualidade e Memória da Informação',
  titulo_curto: 'Ciclo de Vida e Memória',
  antesDeLer: [
    {
      termo: 'Função Social da Biblioteca',
      definicao: 'Papel das unidades de informação como instrumentos de emancipação cidadã, preservação da memória democrática e redução de desigualdades sociais.',
      exemploBiblioteca: 'Abertura do acervo da Biblioteca Pedro Aleixo à consulta de cidadãos, pesquisadores acadêmicos e movimentos sociais.',
    },
    {
      termo: 'Mediação Cultural',
      definicao: 'Prática que promove a interação reflexiva e dialógica do usuário com as linguagens artísticas, literárias e informacionais no espaço da biblioteca.',
      exemploBiblioteca: 'Exposições temáticas sobre os 200 anos do Parlamento Brasileiro integrando obras raras e documentos do arquivo histórico.',
    },
    {
      termo: 'Letramento Informacional',
      definicao: 'Processo de desenvolvimento de competências para reconhecer a necessidade de informação, localizá-la, avaliá-la criticamente e utilizá-la eticamente.',
      exemploBiblioteca: 'Oficinas de capacitação para servidores e estagiários da Câmara sobre busca avançada em bases legislativas e acadêmicas.',
    },
    {
      termo: 'Democratização do Acesso',
      definicao: 'Garantia de que todo cidadão tenha acesso irrestrito às fontes de informação públicas sem barreiras físicas, econômicas ou tecnológicas.',
      exemploBiblioteca: 'Disponibilização universal das publicações da Edições Câmara em formato digital aberto no portal institucional.',
    },
  ],
  descricaoCurta: 'Modelos de ciclo de vida da informação (McGee & Prusak, Choo), modelo de qualidade de Wang & Strong (1996), graus de estruturação do dado (estruturado, semiestruturado e não estruturado) e memória institucional parlamentar (Cedi e Biblioteca Pedro Aleixo).',
  tempoEstimadoMinutos: 16,
  autoresChave: [
    'James V. McGee',
    'Laurence Prusak',
    'Chun Wei Choo',
    'Richard Y. Wang',
    'Diane M. Strong',
    'Michael Buckland',
  ],
  alertasCebraspe: [
    'O edital lista "qualidade, confiabilidade, autenticidade, integridade, disponibilidade e acessibilidade" como atributos da informação. Não confunda autenticidade (a informação é o que diz ser e provém de quem afirma ser) com integridade (a informação não foi alterada, corrompida ou mutilada de forma não autorizada).',
    'A literatura especializada diverge quanto às etapas exatas do ciclo de vida informacional (McGee e Prusak com seis fases; Choo com abordagem sistêmica integrada à gestão do conhecimento). O Cebraspe cobra a lógica do ciclo (retroalimentação, continuidade e dependência funcional entre as fases), e não uma lista estática e inflexível.',
    'A distinção entre informação estruturada (ex.: registros em MARC 21, tabelas relacionais SQL), semiestruturada (ex.: XML do LexML Brasil, JSON) e não estruturada (ex.: PDF de projeto de lei sem marcação semântica, discursos parlamentares em áudio/vídeo) decorre do grau de organização formal de seu modelo de dados, e não do seu suporte físico ou digital.',
    'Memória institucional não se confunde com mero arquivo morto ou guarda passiva de documentos antigos. Trata-se de um ativo estratégico contínuo que preserva a identidade, a transparência e as decisões do órgão legislativo, articulado na Câmara dos Deputados pelo Centro de Documentação e Informação (Cedi) e pela Biblioteca Pedro Aleixo.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa dos Graus de Estruturação da Informação no Poder Legislativo',
    colunas: ['Critério Ontológico e Técnico', 'Informação Estruturada', 'Informação Semiestruturada', 'Informação Não Estruturada'],
    linhas: [
      [
        'Modelo e Esquema de Dados',
        'Esquema rígido e pré-definido (*schema-first*), com campos normalizados, tipos estritos e relacionamentos explícitos.',
        'Sem esquema rígido prévio, mas provida de marcadores, tags ou hierarquias semânticas autodescritivas (*self-describing*).',
        'Inexistência de esquema de dados ou formato conceitual pré-estabelecido; dados em linguagem natural ou binários brutos.',
      ],
      [
        'Exemplo em Biblioteconomia',
        'Registro bibliográfico em Formato MARC 21 ou tabela relacional de empréstimos em SGBD SQL.',
        'Metadados descritivos codificados em XML/RDF (Dublin Core, MODS, EAD) ou ontologias OWL.',
        'Texto integral de tese em PDF digitalizado, manuscrito raro em microfilme ou gravação analógica em fita.',
      ],
      [
        'Exemplo na Câmara dos Deputados',
        'Base relacional de votações nominais em plenário e cadastro de deputados (SGM/SILEG).',
        'Proposição legislativa codificada segundo o padrão XML do portal LexML Brasil.',
        'Transcrição taquigráfica em texto corrido (Word), vídeo de sessão de comissão parlamentar ou PDF de emenda sem tags.',
      ],
      [
        'Forma de Recuperação e Busca',
        'Consultas determinísticas exatas via SQL ou buscas por índices controlados de cabeçalho.',
        'Consultas semânticas via XPath/XQuery, SPARQL ou parsers de marcação hierárquica.',
        'Processamento de Linguagem Natural (PLN), busca textual livre (*full-text*), OCR/HTR e embeddings vetoriais.',
      ],
      [
        'Tecnologias Típicas',
        'Bancos relacionais (PostgreSQL, Oracle), Formato MARC 21/ISO 2709, planilhas estruturadas.',
        'XML, JSON, YAML, bancos de dados NoSQL orientados a documentos e grafos.',
        'Arquivos TXT, DOCX, PDFs rasterizados, mídias de vídeo/áudio sem transcrição indexada.',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Ciclo de Vida da Informação: Perspectiva Gerencial e Sistêmica

A compreensão da informação como fluxo dinâmico exige o rompimento com visões estáticas ou exclusivamente tecnicistas. Na Ciência da Informação e na Administração, múltiplos teóricos formularam modelos conceituais para mapear o **ciclo de vida da informação** (*information lifecycle*).

\`\`\`timeline
1. NECESSIDADE | Identificação das Necessidades | Mapeamento dos requisitos informacionais dos usuários e tomadores de decisão
---> Prospecção e Coleta
2. AQUISIÇÃO | Aquisição / Coleta | Obtenção de dados e documentos de fontes internas ou externas qualificadas
---> Tratamento Técnico
3. ORGANIZAÇÃO | Organização e Armazenamento | Classificação, indexação, catalogação, modelagem e preservação em repositórios
---> Agregação de Valor
4. PRODUTOS | Desenvolvimento de Produtos e Serviços | Criação de relatórios analíticos, bases de dados, dossiês e boletins temáticos
---> Comunicação Estratégica
5. DISTRIBUIÇÃO | Distribuição e Disseminação | Entrega tempestiva da informação no canal, suporte e formato adequados ao usuário
---> Apropriação Cognitiva
6. USO | Uso e Avaliação | Aplicação prática na tomada de decisão legislativa, com retroalimentação contínua
\`\`\`

#### A. O Modelo de McGee e Prusak (1994)
Na obra seminal *Gerenciamento Estratégico da Informação*, **James V. McGee e Laurence Prusak** sistematizaram o ciclo em seis etapas interdependentes:
1. **Identificação de Necessidades:** Diagnóstico contínuo do que a organização e seus membros realmente necessitam para operar estrategicamente. Em um parlamento, traduz-se no mapeamento das demandas informacionais de deputados, comissões técnicas e cidadãos.
2. **Aquisição:** Obtenção ativa dos dados e documentos relevantes a partir de fontes internas e externas, selecionando materiais de autoridade e confiabilidade.
3. **Organização e Armazenamento:** Tratamento documental clássico e tecnológico (estruturação, catalogação, indexação, armazenamento seguro e controle terminológico) para viabilizar a recuperação posterior.
4. **Desenvolvimento de Produtos e Serviços:** Etapa de agregação de valor intelectual, transformando dados brutos em produtos acabados (dossiês legislativos, notas técnicas, resumos informativos, bases analíticas).
5. **Distribuição:** Disseminação ativa ou passiva, garantindo que o produto informacional alcance tempestivamente o destinatário certo, sem ruídos ou sobrecarga de informação (*information overload*).
6. **Uso:** A aplicação da informação na tomada de decisão, formulação de políticas públicas ou produção de novas proposições legislativas. O uso encerra o ciclo e imediatamente gera **retroalimentação** (*feedback*), identificando novas carências informacionais.

#### B. O Ciclo de Gestão da Informação de Chun Wei Choo (2006)
Em *A Organização do Conhecimento* (visto em detalhe no submódulo 5.4), **Chun Wei Choo** articula o ciclo de gerenciamento da informação a partir de um processo contínuo de seis etapas interdependentes integradas à tomada de decisão e à aprendizagem organizacional:
* Identificação de necessidades de informação;
* Aquisição de informação;
* Organização e armazenamento da informação;
* Desenvolvimento de produtos e serviços de informação;
* Distribuição de informação;
* Uso da informação.

> [!IMPORTANT]
> **Atenção Doutrinária para o Cebraspe:** A doutrina contemporânea enfatiza que **não há consenso absoluto** sobre o número e a nomenclatura exata das etapas do ciclo de vida da informação. Há modelos de 4, 5, 6 ou mais etapas. O que a banca Cebraspe avalia é a **lógica holística de fluxo contínuo, a interdependência funcional entre as fases e a existência mandatória de retroalimentação**, rejeitando concepções lineares que tratem o ciclo como um processo rígido que se encerra sem gerar novos insumos.

---

### 2. Qualidade da Informação: O Modelo de Wang & Strong (1996) e os Atributos do Edital

O edital nº 1/2026 exige a apreensão de **qualidade, confiabilidade, autenticidade, integridade, disponibilidade e acessibilidade da informação** (item 1.8 do Bloco A). A abordagem seminal de mensuração da qualidade de dados e informação é o modelo multidimensional de **Richard Y. Wang e Diane M. Strong (1996)** (*Beyond Accuracy: What Data Quality Means to Data Consumers*).

Wang e Strong demonstraram empiricamente que a qualidade da informação não se resume à "exatidão" (*accuracy*), mas deve ser avaliada a partir da perspectiva do consumidor da informação em **quatro categorias fundamentais e 15 dimensões**:

| Categoria de Qualidade (Wang & Strong, 1996) | Definição Teórica da Categoria | Dimensões Operacionais Componentes | Correspondência com o Edital Cebraspe |
| :--- | :--- | :--- | :--- |
| **1. Qualidade Intrínseca** (*Intrinsic Data Quality*) | Dimensões inerentes aos dados em si, independentemente do contexto de uso pelo consumidor. | • **Exatidão** (*Accuracy*): dados corretos e verossímeis.<br>• **Objetividade** (*Objectivity*): isenção de vieses tendenciosos.<br>• **Credibilidade / Veracidade** (*Believability*): dado crível.<br>• **Reputação** (*Reputation*): prestígio e autoridade da fonte. | **Confiabilidade e Autenticidade:** O dado provém de fonte idônea e espelha fidedignamente o fato documentado. |
| **2. Qualidade Contextual** (*Contextual Data Quality*) | Qualidade que depende diretamente da tarefa e do contexto em que a informação é aplicada. | • **Relevância** (*Relevancy*): pertinência ao problema em análise.<br>• **Valor Agregado** (*Value-added*): vantagem competitiva/cognitiva gerada.<br>• **Atualidade / Tempestividade** (*Timeliness*): disponibilidade no momento certo.<br>• **Completude** (*Completeness*): abrangência sem lacunas críticas.<br>• **Quantidade Apropriada** (*Appropriate Amount*): volume ideal, sem omissão ou sobrecarga. | **Disponibilidade e Confiabilidade:** Informação tempestiva, abrangente e suficiente para embasar pareceres e votos. |
| **3. Qualidade Representacional** (*Representational Data Quality*) | Qualidade relacionada à forma, formato, legibilidade e codificação dos dados no sistema. | • **Interpretabilidade** (*Interpretability*): símbolos claros e inequívocos.<br>• **Facilidade de Compreensão** (*Ease of understanding*): linguagem clara.<br>• **Consistência Representacional** (*Representational consistency*): padronização de formatos.<br>• **Concisão** (*Concise representation*): ausência de redundâncias prolixas. | **Integridade e Acessibilidade:** Uso de vocabulários controlados, normas técnicas (ABNT/ISO) e padrões de metadados. |
| **4. Qualidade de Acessibilidade** (*Accessibility Data Quality*) | Qualidade vinculada à facilidade de obtenção e às salvaguardas de proteção dos dados. | • **Acesso / Acessibilidade** (*Accessibility*): facilidade de recuperação e desobstrução técnica.<br>• **Segurança de Acesso** (*Access security*): controle de privilégios e proteção contra acessos indevidos. | **Acessibilidade, Disponibilidade e Integridade:** Diretrizes da LAI (Lei 12.527/2011), dados abertos e segurança da informação. |

#### Distinção Crítica dos Atributos do Edital (Item 1.8):
* **Autenticidade:** Propriedade que garante que um documento ou registro informacional é exatamente aquilo que afirma ser, livre de adulteração ou falsificação, sendo possível comprovar sua autoria e procedência fidedigna.
* **Integridade:** Propriedade que atesta que a informação não foi modificada, corrompida, suprimida ou acrescida de maneira não autorizada ou acidental ao longo de todo o seu ciclo de vida (desde a criação até a preservação permanente).
* **Confiabilidade:** Capacidade de a informação servir como testemunho fidedigno e base segura para a tomada de decisões, decorrente de sua completude formal, rigor metodológico e competência da autoridade emissora.
* **Disponibilidade:** Propriedade pela qual a informação está pronta para ser acessada e utilizada pelos indivíduos ou sistemas autorizados no momento exato em que for requerida.
* **Acessibilidade:** Condição de facilidade, transparência e inexistência de barreiras físicas, digitais, linguísticas ou jurídicas que permitam a qualquer usuário (inclusive pessoas com deficiência) consultar e compreender o conteúdo informacional.

---

### 3. Informação Estruturada, Semiestruturada e Não Estruturada

O edital exige a distinção das formas de organização da informação (item 1.4 do Bloco A). Essa tipologia ontológica é determinante para definir as técnicas de indexação, armazenamento em bancos de dados e ferramentas de inteligência artificial aplicáveis:

#### A. Informação Estruturada
* **Conceito:** Dados organizados de acordo com um esquema prévio rígido (*schema-first*), com tipos de dados estritamente delimitados (inteiro, texto com tamanho fixo, data, booleano) e armazenados em tabelas de bases de dados relacionais (PostgreSQL, MySQL, Oracle) ou em registros formatados padronizados.
* **No universo bibliográfico:** Um registro no padrão **MARC 21**, onde cada campo de três dígitos possui significado unívoco (campo 100 para autor pessoal, 245 para título, 260/264 para publicação) e subcampos delimitados pelo delimitador subcampo (\`$a\`, \`$b\`, \`$c\`).
* **No universo da Câmara:** As tabelas relacionais do Sistema de Informações Legislativas (SILEG) e os dados brutos de votação nominal de deputados.
* **Vantagens e Limitações:** Alta eficiência de recuperação e consultas analíticas precisas; extrema rigidez e alto custo para acomodar novos atributos não modelados previamente.

#### B. Informação Semiestruturada
* **Conceito:** Dados que não residem em tabelas relacionais fixas, mas contêm marcadores, rótulos (*tags*) ou esquemas hierárquicos autodescritivos (*self-describing*) que separam elementos de conteúdo e estabelecem relações hierárquicas.
* **No universo bibliográfico:** Registros em **XML**, **JSON**, esquemas de metadados **Dublin Core** ou ontologias codificadas em **RDF/OWL**. O documento possui estrutura flexível e pode incluir campos repetitivos ou ausentes sem quebrar a validação global.
* **No universo da Câmara:** Os documentos legislativos estruturados sob a linguagem de marcação XML do **LexML Brasil** (onde artigos, parágrafos, incisos e alíneas são delimitados por tags semânticas formais).
* **Vantagens e Limitações:** Flexibilidade para intercâmbio de dados entre sistemas heterogêneos; exige parsers dedicados e consultas mais complexas (como XPath, XQuery ou SPARQL).

#### C. Informação Não Estruturada
* **Conceito:** Informações que não possuem qualquer modelo de dados formal ou organização pré-concebida. São compostas predominantemente por linguagem natural humana em texto corrido, ou arquivos multimídia binários (imagens rasterizadas, áudio, vídeo).
* **No universo bibliográfico:** O conteúdo textual integral de uma monografia em PDF, artigos de periódicos digitalizados sem metadados estruturados, ou coleções iconográficas e sonoras históricas.
* **No universo da Câmara:** O texto narrativo de discursos proferidos em plenário, o PDF escaneado de um parecer de comissão antigo sem reconhecimento óptico de caracteres (OCR), gravações das transmissões da TV Câmara.
* **Vantagens e Limitações:** É a forma mais rica e comum de expressão humana (representa mais de 80% dos dados organizacionais); todavia, sua recuperação exige técnicas sofisticadas de Processamento de Linguagem Natural (PLN), busca vetorial por proximidade semântica (*embeddings*) e modelos de linguagem generativa (LLMs/RAG).

---

### 4. Memória Institucional, Patrimônio Documental e o Centro de Documentação e Informação (Cedi)

A **memória institucional** constitui a totalidade dos registros materiais, cognitivos e culturais que documentam as origens, o desenvolvimento, os debates políticos e as decisões tomadas por uma organização ao longo de sua existência.

No âmbito da **Câmara dos Deputados**, a salvaguarda e a difusão da memória institucional e do patrimônio documental estão sob a responsabilidade do **Centro de Documentação e Informação (Cedi)**, órgão da Diretoria Técnico-Documental criado historicamente para integrar:
1. **A Biblioteca Pedro Aleixo:** Uma das mais importantes bibliotecas parlamentares da América Latina, depositária do acervo bibliográfico especializado em Direito, Ciência Política, História e Administração Pública, além de abrigar obras raras e a coleção completa das publicações oficiais da Casa.
2. **A Coordenação de Arquivo:** Responsável pela gestão documental, guarda permanente e custódia de projetos de lei, autógrafos, mensagens presidenciais, anais históricos e documentos comissões parlamentares de inquérito (CPIs).
3. **A Coordenação de Museu e Memória:** Responsável pela preservação do patrimônio histórico, artístico e museológico do Palácio do Congresso Nacional e pela salvaguarda do mobiliário, peças de época e acervos orais.
4. **A Coordenação de Publicações e Edições da Câmara (Edições Câmara):** Responsável por disseminar o conhecimento legislativo e histórico da nação brasileira através de obras acadêmicas e reedições de clássicos do pensamento político nacional.

A articulação entre a preservação física desses acervos e a sua disponibilização digital em repositórios confiáveis (conforme preconizado pelos modelos OAIS e pelos padrões internacionais de metadados) assegura que a memória da Casa do Povo permaneça viva, auditável e acessível a todos os cidadãos.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Preservação Digital e Repositórios Confiáveis (sub-6-3):** Fixidez, autenticidade e integridade da informação em longo prazo.
* **Governança da Informação e de Dados (sub-1-6):** Gestão da qualidade e rastreabilidade ao longo do ciclo de vida dos dados.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Para o Cebraspe, a gestão da informação exige governança rigorosa do seu ciclo de vida, padrões internacionais de qualidade de dados e a salvaguarda da memória institucional:
1. **O Ciclo de Vida da Informação e dos Documentos:**
   - **Teoria das Três Idades (Arquivística/Gestão da Informação):**
     - *Corrente (1ª Idade):* Documentos em tramitação, de uso frequente, valor primário (administrativo, legal, fiscal).
     - *Intermediário (2ª Idade):* Aguardando destinação final (guarda temporária/expurgo), uso esporádico, ainda com valor primário.
     - *Permanente/Histórico (3ª Idade):* Imprescritíveis e inalienáveis, valor secundário (histórico, probatório, cultural, de pesquisa). Nunca mais podem ser eliminados!
   - **Fases do Ciclo da Informação:** Criação/Coleta $\to$ Armazenamento/Tratamento $\to$ Disseminação/Acesso $\to$ Uso $\to$ Preservação ou Descarte.
2. **Dimensões da Qualidade de Dados (Wang & Strong, 1996 e DAMA-DMBOK2):**
   - **Intrínseca:** Acurácia (exatidão), credibilidade, reputação.
   - **Contextual:** Relevância, tempestividade (pontualidade/tempo hábil), completude, suficiência.
   - **Representacional:** Interpretabilidade, facilidade de compreensão, consistência de formatos.
   - **Acessibilidade:** Disponibilidade e segurança do acesso.
3. **Memória Institucional:**
   - Patrimônio intangível e tangível acumulado por uma organização. A biblioteca atua como âncora da memória técnica e política, impedindo o esquecimento organizacional e garantindo a continuidade das políticas públicas.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Teoria das Três Idades na Tramitação de Projetos de Lei):** Uma Proposta de Emenda à Constituição (PEC) em debate na Comissão de Constituição e Justiça (CCJ) está na sua **fase corrente**. Quando arquivada ao final da legislatura, aguarda na **fase intermediária**. Ao ser recolhida ao Arquivo Histórico e à Seção de Obras Raras e Memória da Biblioteca da Câmara, atinge a **fase permanente**, tornando-se fonte inalienável de pesquisa sobre a história da democracia brasileira.
- **Cenário 2 (Tempestividade e Acurácia no Plenário):** Durante uma sessão de votação, o presidente da Casa solicita dados históricos sobre votações análogas em legislaturas passadas. Se a informação fornecida pelo CEDI for exata, mas entregue 30 minutos após o encerramento da votação, faltou a dimensão contextual da **tempestividade** (Wang & Strong), invalidando a utilidade da entrega.
- **Cenário 3 (A Biblioteca Pedro Aleixo como Guardiã da Memória):** As coleções de discursos parlamentares, anais históricos do Império e da República e relatórios das Mesas Diretoras catalogados no CEDI compõem o corpus da **memória institucional** da Câmara, disponibilizado no portal aberto para pesquisadores e historiadores.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Idade Documental | Frequência de Uso | Valor Predominante | Destinação Possível |
| :--- | :--- | :--- | :--- |
| **Corrente (1ª Idade)** | Diária / Frequente | Primário (administrativo/legal) | Tramitação / Consulta ativa |
| **Intermediária (2ª Idade)** | Baixa / Esporádica | Primário (aguardando prazo) | Expurgo ou Guarda Permanente |
| **Permanente (3ª Idade)** | Cultural / Pesquisa | Secundário (histórico/probatório) | **Nunca pode ser eliminado!** |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Eliminação de Documentos da 3ª Idade:** Técnica de distrator: sugerir que *"documentos históricos de terceira idade podem ser eliminados caso passem por microfilmagem ou digitalização para economia de espaço predial"*. **Gabarito: ERRADO.** Documentos de valor permanente são imprescritíveis e inalienáveis (art. 10 da Lei Federal nº 8.159/1991); digitalização não autoriza descarte de original permanente.
- **Confusão entre Acurácia e Tempestividade:** Apresentar um dado factual perfeito, mas defasado no tempo, como exemplo de falha de acurácia. **Gabarito: ERRADO.** Trata-se de problema de tempestividade (*timeliness*).
- **Valor Primário vs. Valor Secundário:** Inverter os valores: o valor primário é para a administração criadora; o secundário é para a sociedade e pesquisadores.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **WANG, Richard Y.; STRONG, Diane M.** Beyond accuracy: what data quality means to data consumers. *Journal of Management Information Systems*, v. 12, n. 4, p. 5-33, 1996. (Artigo clássico das 4 categorias de qualidade de dados).
- **DAMA INTERNATIONAL.** *DAMA-DMBOK: Data Management Body of Knowledge*. 2. ed. Basking Ridge: Technics Publications, 2017. (Padrão mundial de governança e qualidade de dados).
- **BRASIL.** *Lei Federal nº 8.159, de 8 de janeiro de 1991*. Dispõe sobre a política nacional de arquivos públicos e privados. (Regime jurídico da Teoria das Três Idades e inalienabilidade do patrimônio permanente).
- **ROUSSEAU, Jean-Yves; COUTURE, Carol.** *Os fundamentos da disciplina arquivística*. Lisboa: Dom Quixote, 1998. (Ciclo vital documental e valores primário e secundário).
- **CHOI, Byounggu; LEE, Heeseok.** Knowledge management strategy and its link to knowledge creation process. *Expert Systems with Applications*, v. 23, n. 3, p. 173-187, 2002.`,
  checkpoints: [
    {
      id: 'cp-1-5-1',
      pergunta: 'Micro-Checkpoint 1: Autenticidade versus Integridade da Informação (Item 1.8)',
      item: 'A distinção entre autenticidade e integridade da informação é relevante porque a primeira diz respeito à identidade e à origem do documento, e a segunda à ausência de alteração não autorizada.',
      gabarito: 'C',
      justificativa:
        'Certo! Conforme a literatura arquivística e de segurança da informação, a autenticidade atesta a proveniência e a legitimidade de autoria de um documento (ele é o que afirma ser), enquanto a integridade certifica que seu conteúdo permaneceu inalterado e completo, sem modificações espúrias ou corrupções.',
    },
    {
      id: 'cp-1-5-2',
      pergunta: 'Micro-Checkpoint 2: Modelos Conceituais de Ciclo de Vida da Informação',
      item: 'Os modelos de ciclo de vida da informação são unânimes quanto ao número e à nomenclatura das etapas, de modo que a sequência de seis fases de determinado autor é a única aceita pela banca.',
      gabarito: 'E',
      justificativa:
        'Errado! A literatura da Ciência da Informação e da Gestão Estratégica diverge amplamente quanto ao número e à nomenclatura das fases do ciclo informacional (comparando-se, por exemplo, os modelos de McGee & Prusak e de Chun Wei Choo). A banca Cebraspe avalia a lógica holística de fluxo contínuo e retroalimentação, e não a imposição dogmática de um modelo numérico único.',
      versao_correta:
        'Os modelos de ciclo de vida da informação apresentam divergências na literatura quanto à quantidade e à nomenclatura das etapas, cabendo ao analista compreender a lógica de fluxo contínuo e retroalimentação sistêmica.',
    },
    {
      id: 'cp-1-5-3',
      pergunta: 'Micro-Checkpoint 3: Classificação Estrutural de Dados Parlamentares (Item 1.4)',
      item: 'Um registro bibliográfico em MARC 21, com campos e subcampos definidos, é um exemplo de informação estruturada, ao passo que o texto integral de um projeto de lei em PDF sem marcação é exemplo de informação não estruturada.',
      gabarito: 'C',
      justificativa:
        'Certo! O registro MARC 21 segue um esquema de metadados rígido e padronizado em campos pré-definidos (informação estruturada), ao passo que o texto integral de uma proposição legislativa em formato PDF sem marcação semântica constitui texto livre em linguagem natural, caracterizando informação não estruturada.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-5-1',
        periodo: '1994',
        disciplina: 'Gestão Estratégica da Informação',
        focoPrincipal: 'As 6 etapas do ciclo de vida da informação (Necessidade, Aquisição, Organização, Produtos, Distribuição e Uso)',
        figuraChave: 'James V. McGee e Laurence Prusak',
      },
      {
        id: 'tl-1-5-2',
        periodo: '1996',
        disciplina: 'Qualidade da Informação (Data Quality)',
        focoPrincipal: 'Modelo multidimensional de qualidade: 4 categorias (Intrínseca, Contextual, Representacional, Acessibilidade) e 15 dimensões',
        figuraChave: 'Richard Y. Wang e Diane M. Strong',
      },
      {
        id: 'tl-1-5-3',
        periodo: '2006',
        disciplina: 'Comportamento e Gestão Informacional',
        focoPrincipal: 'O ciclo integrado de gestão da informação articulado à criação de conhecimento e tomada de decisão',
        figuraChave: 'Chun Wei Choo',
      },
    ],
    autores: [
      {
        id: 'aut-1-5-1',
        nome: 'James V. McGee e Laurence Prusak',
        ano: 1994,
        obraPrincipal: 'Gerenciamento Estratégico da Informação',
        ideiaChave: 'A informação deve ser gerida como um ciclo contínuo de seis etapas interdependentes orientadas ao negócio.',
        chipPegadinha: 'O ciclo não é uma linha reta finita; o uso gera feedback que redefine novas necessidades.',
      },
      {
        id: 'aut-1-5-2',
        nome: 'Richard Y. Wang e Diane M. Strong',
        ano: 1996,
        obraPrincipal: 'Beyond Accuracy: What Data Quality Means to Data Consumers',
        ideiaChave: 'A qualidade da informação é multidimensional e centrada na percepção do usuário (4 categorias e 15 dimensões).',
        chipPegadinha: 'Qualidade não se restringe a exatidão matemática; abrange contexto, representação e acessibilidade.',
      },
      {
        id: 'aut-1-5-3',
        nome: 'Chun Wei Choo',
        ano: 2006,
        obraPrincipal: 'The Knowing Organization (A Organização do Conhecimento)',
        ideiaChave: 'O ciclo informacional alimenta os processos cognitivos de criação de sentido (sense-making), conhecimento e decisão.',
        chipPegadinha: 'Integra a Ciência da Informação à teoria organizacional contemporânea.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-5-1',
        afirmacao: 'A autenticidade de um documento legislativo garante automaticamente que seu conteúdo é verídico, preciso e imparcial.',
        gabarito: 'E',
        porQue: 'Autenticidade garante apenas que o documento é genuíno (provém de quem diz provir e não foi falsificado em sua identidade originária). Um documento pode ser perfeitamente autêntico e conter afirmações falsas, incompletas ou tendenciosas em seu mérito.',
      },
      {
        id: 'peg-1-5-2',
        afirmacao: 'O formato PDF é classificado ontologicamente como informação estruturada por se tratar de um padrão digital moderno e de ampla circulação.',
        gabarito: 'E',
        porQue: 'Estar em suporte digital não torna um arquivo "estruturado". O texto corrido de um PDF sem tags semânticas ou banco de dados relacional é informação NÃO ESTRUTURADA, exigindo PLN ou OCR para ser processado.',
      },
    ],
  },
};
