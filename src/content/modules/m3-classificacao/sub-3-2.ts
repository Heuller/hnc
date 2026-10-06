import type { ModuloFilho } from '../../../domain/types';

export const submodulo32: ModuloFilho = {
  id: 'sub-3-2',
  numero: '3.2',
  titulo: 'Classificação Decimal de Direito (CDDir) e Notação de Autor (Cutter-Sanborn e PHA)',
  descricaoCurta: 'A Classificação Decimal de Direito de Doris de Queiroz Carvalho (CDDir), classes jurídicas 340 a 349, divisões de forma, a espinha dorsal temática da RVBI e do LexML, e as regras avançadas de Notação de Autor (Cutter-Sanborn e Tabela PHA de Prado).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Doris de Queiroz Carvalho', 'Comissão de Atualização da CDDir / RVBI (Arouck, Jaegger & Pinha)', 'Charles Ammi Cutter', 'Kate Emery Sanborn', 'Heloísa de Almeida Prado'],
  alertasCebraspe: [
    'A CDDir foi criada pela bibliotecária brasileira Doris de Queiroz Carvalho na década de 1940 para superar a inadequação das classificações gerais (CDD e CDU) ao ordenamento jurídico brasileiro. As tabelas universais foram desenhadas sob a tradição da Common Law anglo-americana, ao passo que o Brasil adota a tradição Romano-Germânica (Civil Law), com codificações e ramificações dogmáticas próprias.',
    'A CDDir é o padrão classificatório oficial da Rede Virtual de Bibliotecas do Congresso Nacional (RVBI) — adotada pela Biblioteca da Câmara dos Deputados, pelo Senado Federal, pelo STF, pelo STJ e pela PGR —, servindo também como ontologia temática estruturante do Portal LexML Brasil.',
    'Divisões de Forma na CDDir: são subdivisões decimais (.01 a .09) utilizadas para agrupar obras pelo seu formato de apresentação ou gênero documental (dicionários, códigos comentados, periódicos, projetos de lei, jurisprudência), independentemente do ramo substantivo do Direito.',
    'Notação de Autor para Entidades com Sigla (ex.: OAB, STF, IBGE, IPEA): Na tabela Cutter-Sanborn, a notação numérica é extraída DIRETAMENTE DAS LETRAS DA SIGLA (ex.: primeira letra maiúscula da sigla seguida do código numérico correspondente às letras da sigla), e NUNCA a partir do nome por extenso do órgão. O Cebraspe adora afirmar que se deve decodificar a sigla por extenso para aplicar o Cutter: assertiva totalmente ERRADA!',
    'Notação de Autor em Obras de Entrada por Título (obras com 4 ou mais autores ou anônimas): O código Cutter é extraído da primeira palavra do título (desprezando artigo inicial), e a "workmark" (marca de obra) é a primeira letra minúscula da SEGUNDA palavra do título.',
    'Notação de Autor em Biografias Individuais: Para que todas as biografias de uma personalidade fiquem agrupadas no mesmo ponto da estante, o número de Cutter é atribuído ao BIOGRAFADO, e a workmark minúscula é a inicial do sobrenome do BIÓGRAFO.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura Completa das Classes Jurídicas da CDDir (Doris de Queiroz Carvalho / RVBI)',
    colunas: ['Classe CDDir', 'Ramo Jurídico Canônico', 'Conteúdo Doutrinário e Normativo Abrangido', 'Aplicação Prática no Congresso e Tribunais'],
    linhas: [
      ['340', 'Direito em Geral e Propedêutica', 'Filosofia e Teoria Geral do Direito, Sociologia Jurídica, Hermenêutica, Enciclopédias e Dicionários Jurídicos', 'Obras de introdução ao estudo do Direito e teoria da norma jurídica'],
      ['341', 'Direito Internacional', 'Direito Internacional Público e Privado, Tratados, Organizações Internacionais, Direitos Humanos, Direito Humanitário', 'Acordos internacionais apreciados pela Comissão de Relações Exteriores da Câmara'],
      ['342', 'Direito Constitucional e Administrativo', 'Poder Constituinte, Direitos Fundamentais, Organização do Estado, Processo Legislativo, Atos Administrativos, Licitações, Servidores', 'Projetos de Emenda à Constituição (PECs), regimentos internos e controle de constitucionalidade'],
      ['343', 'Direito Penal e Criminologia', 'Código Penal, Parte Geral e Especial, Criminologia, Execução Penal, Crimes Hediondos, Direito Penal Econômico', 'Projetos de lei de segurança pública e reformas da legislação penal na CCJC'],
      ['344', 'Direito do Trabalho e Previdência Social', 'CLT, Relações de Trabalho, Direito Sindical, Seguridade Social, Previdência Pública e Complementar, Acidentes', 'Reformas trabalhistas e previdenciárias em tramitação no Congresso Nacional'],
      ['345', 'Direito Processual Penal', 'Código de Processo Penal, Inquérito Policial, Ação Penal, Teoria da Prova, Prisão Cautelar, Tribunal do Júri, Recursos Criminais', 'Legislação processual penal e garantias fundamentais da ampla defesa'],
      ['346', 'Direito Civil', 'Código Civil (Pessoas, Bens, Fatos Jurídicos, Obrigações, Contratos, Direitos Reais, Família, Sucessões, Responsabilidade Civil)', 'Projetos de atualização do Código Civil e direito das famílias'],
      ['347', 'Direito Empresarial e Processo Civil', 'Código de Processo Civil (CPC), Falência e Recuperação Judicial, Títulos de Crédito, Sociedades Anônimas, Arbitragem', 'Normas sobre mercado de capitais, processo de conhecimento e execução civil'],
      ['348', 'Leis, Decretos e Jurisprudência', 'Textos legais consolidados, diários oficiais, repertórios de jurisprudência, acórdãos e súmulas de tribunais', 'Bases de jurisprudência do STF, STJ e repositórios da legislação federal'],
      ['349', 'Ramos Especiais do Direito', 'Direito Ambiental, Direito Tributário e Financeiro, Direito Agrário, Direito Sanitário, Direito Urbanístico, Direito Desportivo', 'Códigos de Defesa do Consumidor, Código Tributário e legislação de zoneamento urbano'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Classificação Decimal de Direito (CDDir) de Doris de Queiroz Carvalho

A **Classificação Decimal de Direito (CDDir)**, concebida na década de 1940 pela notável bibliotecária jurídica brasileira **Doris de Queiroz Carvalho**, é o mais respeitado e difundido sistema especializado de classificação jurídica do mundo lusófono (disponível no acervo em \`Classificação e indexação/003017427.pdf\`).

#### A. A Inadequação dos Esquemas Universais e a Gênese da CDDir
Tanto a Classificação Decimal de Dewey (CDD) quanto a Classificação Decimal Universal (CDU) foram arquitetadas nos países centrais sob o prisma do direito anglo-saxônico (*Common Law*), no qual imperam o direito consuetudinário e a força dos precedentes jurisprudenciais judiciais.

O Brasil, em contrapartida, filia-se à tradição romano-germânica (*Civil Law*), caracterizada pela primazia da lei escrita, pela codificação sistemática (Código Civil, Código Penal, CLT, CPC, CPP) e por divisões dogmáticas que não encontravam correspondência harmônica nas tabelas gerais:
* Na CDD, a classe \`340\` dispersava matérias nucleares da tradição brasileira ou as subordinava a categorias exóticas;
* Na CDU, a notação para ramificações jurídicas detalhadas resultava em extensas e convolutas fórmulas notacionais com excesso de pontuação.

Para solucionar essa carência técnica, Doris de Queiroz Carvalho elaborou um esquema decimal autóctone, rigorosamente adaptado ao Direito Positivo Brasileiro e ao Direito Comparado.

#### B. As Quatro Edições Históricas e a Atualização pela RVBI
A evolução da CDDir deu-se ao longo de quatro edições fundamentais:
1. **1ª Edição (1948):** Publicada no Rio de Janeiro pelo Departamento Administrativo do Serviço Público (DASP).
2. **2ª Edição (1953):** Revista e substancialmente ampliada, consolidando a estrutura decimal.
3. **3ª Edição (1977):** Publicada em Brasília pelo Ministério da Justiça.
4. **4ª Edição (2002):** Conduzida pela *Comissão de Atualização da CDDir da Rede Virtual de Bibliotecas do Congresso Nacional (RVBI)*, integrada pelos bibliotecários Osmar Arouck, Fátima Jaegger e Stelina Pinha.

Atualmente, a CDDir é a ferramenta oficial de catalogação e indexação temática das bibliotecas da **Câmara dos Deputados**, do **Senado Federal**, do **Supremo Tribunal Federal (STF)**, do **Superior Tribunal de Justiça (STJ)**, do **Tribunal Superior do Trabalho (TST)**, do **Tribunal de Contas da União (TCU)** e da **Procuradoria-Geral da República (PGR)**, servindo adicionalmente de ontologia classificatória para o **Portal LexML Brasil**.

---

#### C. As Divisões de Forma na CDDir
À semelhança da CDD e da CDU, a CDDir dispõe de **divisões de forma**, representadas por um ponto seguido de dígitos específicos, cuja função precípua é ordenar os documentos de acordo com a forma bibliográfica ou o gênero documental de sua apresentação:

* \`.01\`: Filosofia, teoria e metodologia do ramo jurídico.
* \`.02\`: Compêndios, manuais, tratados gerais e roteiros práticos.
* \`.03\`: Dicionários, enciclopédias, vocabulários e terminologias.
* \`.04\`: Ensaios, conferências, pareceres e artigos avulsos.
* \`.05\`: Publicações periódicas, anais e revistas jurídicas especializadas.
* \`.06\`: Sociedades, associações, congressos, simpósios e encontros jurídicos.
* \`.07\`: Estudo, ensino e formação profissional jurídica.
* \`.08\`: Coletâneas de obras de autores individuais.
* \`.09\`: História do Direito, evolução das instituições e fontes históricas.

*Exemplo Prático de Síntese:*
* \`342.1\`: Teoria Geral do Estado e Direitos Fundamentais.
* \`342.103\`: Dicionário de Direitos Fundamentais.
* \`342.105\`: Revista Periódica sobre Direitos Fundamentais.

---

### 2. Notação de Autor: As Tabelas Cutter-Sanborn e PHA

A notação de autor é o código alfanumérico que complementa a notação de classificação, formando com ela a coluna central do **Número de Chamada (*Call Number*)**, cujo objetivo é individualizar o item na estante e garantir a sua guarda em ordem lógica e alfabética contínua.

#### A. A Tabela Cutter-Sanborn de Três Algarismos
Concebida por Charles Ammi Cutter e ampliada por Kate Emery Sanborn:
* Estrutura básica: Uma letra maiúscula (primeira letra do sobrenome ou da palavra de entrada) seguida de dois ou três algarismos retirados da tabela alfabética.
* **A Marca de Obra (*Work Mark*):** Uma letra minúscula correspondente à primeira letra da primeira palavra do título da obra (excluindo-se os artigos definidos e indefinidos).
  * *Exemplo:* Obra *Teoria Pura do Direito*, de Hans Kelsen (Cutter \`K29\`): o número de Cutter com marca de obra será \`K29t\`.
  * Se o autor tiver duas obras que começam com a mesma letra (ex.: *Teoria Geral do Estado* e *Teoria Pura do Direito*), a segunda obra recebe duas letras minúsculas extraídas do título: \`K29tg\` e \`K29tp\`.

#### B. A Tabela PHA (Heloísa de Almeida Prado)
Criada no Brasil pela bibliotecária Heloísa de Almeida Prado:
* Foi estruturada com base na fonética, nos prefixos silábicos e na morfologia da **língua portuguesa**.
* Elimina o problema da saturação de números de autores idênticos nos sobrenomes mais comuns do Brasil (como Silva, Santos, Souza, Pereira, Oliveira), permitindo uma ordenação homogênea nas bibliotecas nacionais.

---

#### C. Casos Especiais Exigidos em Concursos do Cebraspe

1. **Entidades com Entrada por Sigla:**
   * Quando uma entidade coletiva tem entrada autorizada por sua sigla oficial (ex.: \`IBGE\`, \`IPEA\`, \`OAB\`, \`UNESCO\`), o número de Cutter é retirado **das letras que compõem a sigla**, e NUNCA do nome por extenso do órgão.
   * *Pegadinha Clássica Cebraspe:* A banca costuma afirmar que o catalogador deve converter a sigla em nome por extenso (ex.: "Instituto Brasileiro de...") para buscar o Cutter. **ITEM ERRADO.** O Cutter é composto na letra 'I' com as letras 'B', 'G', 'E'.

2. **Entrada Principal por Título (Obras Anônimas ou com 4 ou mais Autores):**
   * O número de Cutter é gerado a partir da **primeira palavra do título** (desprezando artigo inicial).
   * A **marca de obra** (*work mark*) passa a ser a primeira letra **minúscula da segunda palavra do título**.
   * *Exemplo:* Para a obra de 5 autores intitulada *"A modernização do processo legislativo brasileiro"*:
     * Despreza-se o artigo "A";
     * A entrada é pela palavra "Modernização" -> Letra \`M\` maiúscula + código numérico de "Modernização" (ex.: \`M689\`);
     * A marca de obra é a inicial da segunda palavra ("do") -> \`d\`;
     * Notação final de autor: \`M689d\`.

3. **Biografias Individuais:**
   * Para assegurar que todos os estudos biográficos sobre uma mesma personalidade fiquem agrupados fisicamente no mesmo ponto da estante, o número de Cutter é gerado sobre o sobrenome do **BIOGRAFADO**.
   * A marca de obra minúscula é extraída do sobrenome do **BIÓGRAFO**.
   * *Exemplo:* Uma biografia de Rui Barbosa escrita por Fernando Nagle:
     * Cutter principal: \`B238\` (Barbosa, Rui);
     * Marca de obra: \`n\` (Nagle, Fernando);
     * Notação final: \`B238n\`.

---

### 3. Padrões de Cobrança e Armadilhas do Cebraspe em Provas

| Tema de Prova | Como o Cebraspe Tenta Confundir o Candidato | Fundamentação Técnica Oficial (Gabarito) |
| :--- | :--- | :--- |
| **Gênese da CDDir** | *"A CDDir foi criada com o propósito de adaptar o direito inglês (Common Law) ao acervo da biblioteca do Senado norte-americano."* | **ERRADO.** A CDDir foi criada pela brasileira Doris de Queiroz Carvalho para adaptar o Direito Positivo Brasileiro e a tradição Romano-Germânica (*Civil Law*). |
| **Entrada por Sigla no Cutter** | *"Ao classificar uma publicação oficial da OAB, o catalogador deve extrair o código de Cutter do nome por extenso 'Ordem dos Advogados do Brasil'."* | **ERRADO.** Entidades que entram por sigla têm a notação de Cutter extraída **diretamente das letras da própria sigla**. |
| **Marca de Obra em Entrada por Título** | *"Nas obras com entrada principal pelo título, a marca de obra deve ser a letra minúscula da primeira palavra do título, incluindo os artigos."* | **ERRADO.** Artigos iniciais são sempre desprezados. Quando a entrada é por título, o Cutter vem da 1ª palavra e a marca de obra vem da **2ª palavra**. |
| **Divisões de Forma da CDDir** | *"As divisões de forma da CDDir são usadas exclusivamente para classificar o teor substantivo de crimes previstos no Código Penal."* | **ERRADO.** As divisões de forma (.01 a .09) representam o **gênero documental** (dicionários, códigos, revistas, jurisprudência), aplicáveis a qualquer ramo jurídico. |`,
  checkpoints: [
    {
      id: 'cp-3-2-1',
      pergunta: 'Micro-Checkpoint 1: Origem e Aplicação da CDDir',
      item: 'A Classificação Decimal de Direito (CDDir), concebida por Doris de Queiroz Carvalho, foi estruturada para adaptar a classificação jurídica às particularidades do ordenamento jurídico brasileiro e comparado de matriz romano-germânica (Civil Law).',
      gabarito: 'C',
      justificativa: 'Correto! A CDDir é amplamente utilizada nas bibliotecas jurídicas federais e na RVBI para superar as limitações das tabelas gerais anglo-saxônicas.',
    },
    {
      id: 'cp-3-2-2',
      pergunta: 'Micro-Checkpoint 2: Notação de Autor para Entidades com Sigla',
      item: 'Na composição do número de Cutter segundo a tabela Cutter-Sanborn, caso a autoria de uma obra seja atribuída a uma entidade cuja entrada seja por sigla oficial, a notação numérica deve ser extraída do significado por extenso da denominação do órgão.',
      gabarito: 'E',
      justificativa: 'Errado! A notação numérica de Cutter é extraída diretamente das letras da sigla oficial (ex.: OAB, STF, IPEA), e não do seu significado por extenso.',
    },
    {
      id: 'cp-3-2-3',
      pergunta: 'Micro-Checkpoint 3: Notação de Autor em Biografias Individuais',
      item: 'Na catalogação de biografias individuais, a notação de autor extraída da tabela Cutter é atribuída ao nome do biografado, cabendo ao biógrafo fornecer a letra minúscula representativa da marca de obra.',
      gabarito: 'C',
      justificativa: 'Correto! Essa regra clássica garante que todas as biografias escritas por diferentes autores sobre a mesma pessoa fiquem reunidas fisicamente na mesma estante.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-2-1',
        periodo: '1948 / 1953',
        disciplina: 'Classificação Jurídica Nacional',
        focoPrincipal: 'Publicação da 1ª e 2ª edições da Classificação Decimal de Direito (CDDir) por Doris de Queiroz Carvalho no DASP.',
        figuraChave: 'Doris de Queiroz Carvalho',
      },
      {
        id: 'tl-3-2-2',
        periodo: '1899',
        disciplina: 'Tabela de Notação de Autor',
        focoPrincipal: 'Expansão de Kate Sanborn sobre as tabelas alfanuméricas de Cutter (Tabela Cutter-Sanborn de Três Algarismos).',
        figuraChave: 'Charles Ammi Cutter e Kate Emery Sanborn',
      },
      {
        id: 'tl-3-2-3',
        periodo: '2002',
        disciplina: 'Consolidação na RVBI e LexML',
        focoPrincipal: 'Publicação da 4ª edição da CDDir pela Comissão da RVBI (Arouck, Jaegger e Pinha), consolidando o sistema nas bibliotecas do Congresso e Tribunais.',
        figuraChave: 'Comissão de Atualização da RVBI',
      },
    ],
    autores: [
      {
        id: 'aut-3-2-1',
        nome: 'Doris de Queiroz Carvalho',
        ano: 1948,
        obraPrincipal: 'Classificação Decimal de Direito (CDDir)',
        ideiaChave: 'Bibliotecária pioneira que formulou o esquema especializado de classificação decimal para o ordenamento jurídico brasileiro.',
        chipPegadinha: 'A CDDir baseia-se na Civil Law brasileira, não na Common Law norte-americana.',
      },
      {
        id: 'aut-3-2-2',
        nome: 'Heloísa de Almeida Prado',
        ano: 1955,
        obraPrincipal: 'Tabela de Notação de Autor (PHA)',
        ideiaChave: 'Criadora da tabela alfanumérica de autor adaptada aos sobrenomes em língua portuguesa, evitando concentrações excessivas em sobrenomes ibéricos.',
        chipPegadinha: 'Tabela PHA é notação de autor para estante, e não sistema de classificação temática de assuntos.',
      },
      {
        id: 'aut-3-2-3',
        nome: 'Charles Ammi Cutter',
        ano: 1880,
        obraPrincipal: 'Cutter Author Tables',
        ideiaChave: 'Criador da notação alfanumérica de autor e do conceito de marca de obra (workmark) para ordenação física dos acervos.',
        chipPegadinha: 'Entidades que entram por sigla têm a notação extraída das letras da sigla, nunca do nome por extenso.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-2-1',
        afirmacao: 'Na Classificação Decimal de Direito (CDDir), a classe 342 destina-se a classificar exclusivamente normas de direito penal e penitenciário.',
        gabarito: 'E',
        porQue: 'A classe 342 é dedicada ao Direito Constitucional e ao Direito Administrativo. O Direito Penal e Criminologia pertencem à classe 343.',
      },
      {
        id: 'peg-3-2-2',
        afirmacao: 'Ao elaborar o número de Cutter para uma monografia com cinco autores sem indicação de destaque, o catalogador deve extrair a notação do sobrenome do primeiro autor citado.',
        gabarito: 'E',
        porQue: 'Obras com 4 ou mais autores sem destaque entram OBRIGATORIAMENTE PELO TÍTULO; logo, o número de Cutter é extraído da primeira palavra do título.',
      },
      {
        id: 'peg-3-2-3',
        afirmacao: 'A tabela PHA foi elaborada nos Estados Unidos como uma extensão da Tabela Cutter para atender a imigrantes de origem hispânica.',
        gabarito: 'E',
        porQue: 'A tabela PHA é genuinamente brasileira, desenvolvida por Heloísa de Almeida Prado para a estrutura silábica e fonética dos sobrenomes da língua portuguesa.',
      },
    ],
  },
};
