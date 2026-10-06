import type { ModuloFilho } from '../../../domain/types';

export const submodulo24: ModuloFilho = {
  id: 'sub-2-4',
  numero: '2.4',
  titulo: 'Notação de Autor, Formato MARC 21 e Padrão Dublin Core',
  descricaoCurta: 'Composição do Número de Chamada, tabelas Cutter-Sanborn e PHA; arquitetura do MARC 21 (ISO 2709, Líder, Diretório, campo 008, campo 264 no RDA e autoridades) e padrão Dublin Core (15 elementos simples e qualificados).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Henriette Avram', 'Charles Ammi Cutter', 'Kate E. Sanborn', 'Heloísa de Almeida Prado', 'Stuart Weibel', 'Library of Congress'],
  alertasCebraspe: [
    'Número de Chamada (Call Number): É o código alfanumérico que determina de forma inequívoca a localização física do item no acervo. Sua estrutura canônica compõe-se de quatro elementos sobrepostos na lombada: (1) Notação de Classificação (CDD, CDU ou LC); (2) Notação de Autor (Tabela Cutter-Sanborn ou PHA); (3) Marca de Obra (letra minúscula do título) e/ou ano/edição; (4) Notação de Volume e Exemplar (ex.: v. 1, ex. 2).',
    'Tabela Cutter-Sanborn vs Tabela PHA: A Cutter-Sanborn de 3 algarismos foi desenhada para a língua inglesa e utiliza a letra inicial maiúscula do sobrenome seguida de 2 ou 3 dígitos numéricos. A Tabela PHA, criada pela bibliotecária brasileira Heloísa de Almeida Prado, foi elaborada especificamente para sobrenomes da língua portuguesa, estruturando prefixos silábicos e fonéticos para evitar as saturações que a Cutter gera em nomes frequentes no Brasil (Silva, Santos, Oliveira).',
    'Regras de Notação de Autor Cutter-Sanborn: Se o sobrenome inicia por consoante (exceto S), usa-se a primeira letra maiúscula + código numérico (ex.: Machado -> M149). Se inicia por vogal, usa-se a primeira letra maiúscula + segunda letra minúscula + código (ex.: Andrade -> An24). Se inicia pela letra S, usa-se "S" maiúsculo + segunda letra minúscula + código (ex.: Silva -> Si38). Para diferenciar títulos do mesmo autor, acrescenta-se a "marca de obra" (work mark): letra minúscula da primeira palavra do título que não seja artigo.',
    'Campos de Controle 00X do MARC 21: Não possuem indicadores e não possuem subcampos delimitados por $. O campo 008 possui 40 posições fixas (00 a 39). Posições cruciais para concurso: 00-05 (data de entrada), 06 (tipo de data: s = data única, m = datas múltiplas), 07-10 (data principal), 15-17 (país de publicação em 3 caracteres), 35-37 (idioma do texto em 3 caracteres, ex.: por = português).',
    'Campo 264 no RDA vs Campo 260 no AACR2: No RDA, a publicação/imprenta é registrada no campo 264, onde o 2º INDICADOR define a função da entidade: 0 = Produção, 1 = Publicação, 2 = Distribuição, 3 = Fabricação/Manufatura, 4 = Aviso de Direitos Autorais (Copyright notice).',
    'Dublin Core Simples (ISO 15836): É composto por 15 elementos básicos universais. Regra absoluta da banca: TODOS os 15 elementos são estritamente OPCIONAIS e TODOS são REPETÍVEIS. Além disso, o Dublin Core é nativo da Web e perfeitamente compatível com sintaxes XML, HTML e representações em grafos RDF.',
  ],
  quadroComparativo: {
    titulo: 'Comparação Técnica: Notação de Autor e Padrões de Metadados',
    colunas: ['Elemento / Padrão', 'Origem e Finalidade', 'Estrutura / Sintaxe Canônica', 'Casca de Banana Cebraspe'],
    linhas: [
      ['Tabela Cutter-Sanborn', 'Charles A. Cutter e Kate Sanborn (EUA)', '1 letra maiúscula + 2-3 algarismos + marca de obra minúscula (ex.: M149d)', 'A banca afirma que a letra da marca de obra deve ser maiúscula (Errado: é minúscula) ou que inclui artigos (Errado: despreza artigos).'],
      ['Tabela PHA', 'Heloísa de Almeida Prado (Brasil)', 'Adaptada à fonética e morfologia dos sobrenomes em língua portuguesa', 'A banca afirma que a tabela PHA substitui a CDD na classificação (Errado: PHA é notação de autor, não sistema de classificação).'],
      ['MARC 21 Bibliográfico', 'Henriette Avram / Library of Congress', 'ISO 2709: Líder (24 posições), Diretório (12 posições por campo) e Tags 001-8XX', 'Afirmar que campos 00X possuem subcampos $a ou indicadores (Errado: campos 00X são puramente caracteres fixos).'],
      ['MARC 21 de Autoridades', 'Library of Congress', 'Tags 1XX (autorizado), 4XX (remissiva "ver" / variante), 5XX (remissiva "ver também")', 'Inverter 4XX e 5XX: 4XX é forma variante NÃO autorizada; 5XX é termo relacionado JÁ autorizado.'],
      ['Dublin Core (15 Elementos)', 'Stuart Weibel / DCMI (ISO 15836)', 'Title, Creator, Subject, Description, Publisher, Contributor, Date, Type, Format, Identifier, Source, Language, Relation, Coverage, Rights', 'Afirmar que o elemento "Title" ou "Identifier" é de preenchimento obrigatório pelo padrão (Errado: nenhum é obrigatório no padrão básico).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Notação de Autor e a Composição do Número de Chamada

Nas bibliotecas organizadas de forma sistemática com livre acesso ou acervo fechado, cada documento necessita de uma marcação física que defina com precisão sua posição relativa nas estantes e permita sua rápida recuperação e rearquivamento. Essa marcação denomina-se **Número de Chamada (*Call Number*)** (Mey & Silveira, 2009).

#### A. A Anatomia Canônica do Número de Chamada
O número de chamada é habitualmente gravado na etiqueta colada na lombada do livro, estruturado em quatro linhas sobrepostas:
1. **Notação de Classificação:** Notação obtida pelo sistema de classificação adotado pela biblioteca (Classificação Decimal de Dewey - CDD, Classificação Decimal Universal - CDU ou Classificação da Library of Congress - LC). Representa o **assunto** do documento.
2. **Notação de Autor:** Código alfanumérico que representa o **autor** ou a entrada principal da obra, derivado de tabelas padronizadas (Cutter-Sanborn ou PHA).
3. **Marca de Obra (*Work Mark*) e/ou Ano/Edição:** 
   * A **marca de obra** é uma letra minúscula representativa do título, utilizada para diferenciar várias obras do mesmo autor com o mesmo assunto.
   * O **ano de publicação** ou número da **edição** (ex.: \`2.ed.\`, \`2024\`) individualiza revisões e tiragens sucessivas.
4. **Notação de Volume e Exemplar:** Indicação do volume físico (\`v.1\`, \`t.2\`) e do número do exemplar possuído pela biblioteca (\`ex.1\`, \`ex.2\`, \`c.1\`).

*Exemplo de Etiqueta de Lombada:*
\`\`\`text
  341.2         <-- Classificação (CDU: Direito Internacional)
  M149d         <-- Notação de Autor (Cutter-Sanborn: Machado) + Marca de Obra (d)
  2.ed. 2024    <-- Edição e Ano
  v. 1 ex. 2    <-- Volume 1, Exemplar 2
\`\`\`

---

#### B. A Tabela Cutter-Sanborn de Três Algarismos
Criada pelo bibliotecário norte-americano Charles Ammi Cutter e posteriormente expandida pela bibliotecária Kate E. Sanborn, a **Cutter-Sanborn** organiza os sobrenomes alfabeticamente e atribui a cada agrupamento um número de dois ou três algarismos:
* **Regra Geral para Consoantes (exceto S):** Primeira letra do sobrenome em maiúscula, seguida do número da tabela correspondente ao nome.  
  *Exemplo:* Machado -> \`M149\`.
* **Regra para Nomes Iniciados por Vogal:** Primeira letra em maiúscula, seguida da segunda letra em minúscula e do número da tabela.  
  *Exemplo:* Andrade -> \`An24\`.
* **Regra para Nomes Iniciados pela Letra 'S':** Letra 'S' maiúscula, seguida da segunda letra em minúscula e do número da tabela.  
  *Exemplo:* Silva -> \`Si38\`; Santos -> \`Sa59\`.
* **A Marca de Obra (*Work Mark*):**
  * Consiste na primeira letra em **minúscula** da primeira palavra do título do documento, excluindo-se os artigos definidos e indefinidos no idioma da obra.
  * *Exemplo:* Para a obra *Dom Casmurro* de Machado de Assis (\`M149\`), a notação de autor com marca de obra será: \`M149d\`.  
  * *Exemplo:* Para a obra *A Semana* de Machado de Assis, despreza-se o artigo "A" e toma-se a letra inicial de "Semana": \`M149s\`.
* **Casos Especiais de Notação de Autor:**
  * **Biografias Individuais:** A notação de autor é atribuída ao **biografado** (para que todas as biografias sobre a mesma pessoa fiquem reunidas na estante), e a marca de obra é a inicial maiúscula ou minúscula do sobrenome do biógrafo.
  * **Obras de Autoria Desconhecida / Anônimas / Entrada por Título:** A notação de autor é atribuída à primeira palavra do **título** (desprezando artigo inicial).

---

#### C. A Tabela PHA (Heloísa de Almeida Prado)
No Brasil, a utilização direta da tabela Cutter-Sanborn gera distorções sistemáticas devido à alta concentração de sobrenomes de origem ibérica (como *Silva*, *Santos*, *Souza*, *Oliveira*, *Pereira*), que na tabela norte-americana acabavam recebendo o mesmo número ou gerando longas extensões decimais de desempate.

Para sanar esse problema, a bibliotecária brasileira **Heloísa de Almeida Prado** publicou em meados do século XX a **Tabela PHA (Tabela de Notação de Autor de Prado-Heloísa-Almeida)**:
* É baseada nas combinações fonéticas e silábicas mais comuns da **língua portuguesa**.
* Distribui equilibradamente os códigos alfanuméricos entre os sobrenomes brasileiros.
* Sua regra básica combina a inicial maiúscula do sobrenome com os números atribuídos às sílabas subsequentes da tabela nacional.

---

### 2. A Arquitetura Profunda do Formato MARC 21 (ISO 2709)

Criado na década de 1960 por **Henriette Avram** na Library of Congress, o formato MARC (*Machine-Readable Cataloging*) baseia-se na norma técnica internacional **ISO 2709** (no Brasil, ABNT NBR 14599) para estruturação física de dados bibliográficos intercambiáveis em fita magnética e rede.

#### A. Os Três Componentes Estruturais da ISO 2709
1. **Líder (*Leader*):** 
   * Exatamente **24 posições fixas** de caracteres (posições 00 a 23).
   * Fornece parâmetros estruturais do processamento:
     * \`Posições 00-04\`: Tamanho total lógico do registro em caracteres.
     * \`Posição 05\`: Status do registro (\`n\` = novo, \`c\` = corrigido, \`d\` = deletado).
     * \`Posição 06\`: Tipo de registro (\`a\` = material textual/livro, \`c\` = música notada, \`e\` = material cartográfico, \`m\` = arquivo de computador).
     * \`Posição 07\`: Nível bibliográfico (\`m\` = monografia/item avulso, \`s\` = recurso contínuo/periódico, \`a\` = parte componente analítica).
     * \`Posição 09\`: Esquema de codificação de caracteres (em branco = MARC-8; \`a\` = UTF-8 Unicode).
2. **Diretório (*Directory*):**
   * Tabela gerada automaticamente pelo sistema, imediatamente subsequente ao Líder.
   * Não possui subcampos nem indicadores. É formado por uma sequência contínua de blocos fixos de **12 caracteres** para cada campo variável:
     * **3 posições:** Tag do campo (ex.: \`245\`).
     * **4 posições:** Comprimento total do campo em caracteres.
     * **5 posições:** Posição inicial relativa do campo a partir da área de dados.
3. **Campos Variáveis de Controle (001 a 008):**
   * Campos sem indicadores e sem códigos de subcampo delimitados por \`$\`.
   * **Campo 001:** Número de controle do registro no sistema local.
   * **Campo 003:** Identificador da agência do número de controle.
   * **Campo 005:** Data e hora da última transação (AAAAMMDDhhmmss.f).
   * **Campo 008 — Elementos de Comprimento Fixo:** Possui exatamente **40 posições de caracteres (00 a 39)** com dados críticos de pesquisa e filtragem:
     * \`00-05\`: Data em que o registro foi inserido no catálogo (formato AAMMDD).
     * \`06\`: Tipo de data / status de publicação (\`s\` = data única conhecida; \`m\` = datas múltiplas; \`r\` = reimpressão; \`c\` = recurso contínuo corrente).
     * \`07-10\`: Data 1 (ano de publicação principal, ex.: \`2024\`).
     * \`11-14\`: Data 2 (data de término ou ano original da publicação).
     * \`15-17\`: Código do local de publicação em 3 letras (ex.: \`bl \` para Brasil, \`alu\` para Alabama/EUA).
     * \`35-37\`: Código do idioma do documento em 3 letras (ex.: \`por\` para português, \`eng\` para inglês, \`spa\` para espanhol).
     * \`38\`: Código de registro modificado.
     * \`39\`: Fonte de catalogação (agência nacional ou cooperativa).

---

#### B. Campos Variáveis de Dados e seus Indicadores
Possuem dois dígitos inaugurais denominados **indicadores** (posições 0 e 1 de cada campo de dados) e subcampos identificados pelo caractere delimitador \`$\` seguido de letra ou algarismo:

* **Campo 245 (Título e Indicação de Responsabilidade):**
  * **1º Indicador:** Entrada secundária de título:
    * \`0\`: Não gera entrada secundária (quando a obra não tem autor principal no campo 1XX e entra diretamente por título).
    * \`1\`: Gera entrada secundária de título (quando há autor pessoal ou entidade no campo 100/110/111).
  * **2º Indicador:** Quantidade de caracteres a desprezar na ordenação/alfabetação em razão de **artigos iniciais**:
    * \`0\`: Nenhum caractere a desprezar.
    * \`2\`: Despreza 2 caracteres (ex.: artigo "A " ou "O ").
    * \`3\`: Despreza 3 caracteres (ex.: artigo "As " ou "Os " ou "Um ").
    * \`4\`: Despreza 4 caracteres (ex.: artigo em inglês "The ").
  * **Subcampos:** \`$a\` Título propriamente dito; \`$b\` Restante do título / subtítulo; \`$c\` Indicação de responsabilidade.

* **Campo 260 vs. Campo 264 no RDA:**
  * O campo \`260\` era a imprenta tradicional do AACR2r (\`$a\` lugar, \`$b\` editora, \`$c\` data).
  * No RDA, adota-se o **Campo 264**, onde o **2º Indicador** discrimina a função específica da menção:
    * \`0\`: Produção (recursos inéditos, manuscritos, obras de arte).
    * \`1\`: Publicação (recurso publicado comercialmente).
    * \`2\`: Distribuição (distribuidor ou agente comercial).
    * \`3\`: Fabricação / Manufatura (impressor, fundição, tipografia).
    * \`4\`: Aviso de Direitos Autorais (*Copyright notice*, ex.: \`$c ©2024\`).

* **O Formato MARC 21 de Autoridades:**
  * Estrutura o controle normativo de nomes e termos temáticos:
    * **Bloco 1XX:** Cabeçalho autorizado e padronizado (\`100\` Pessoa, \`110\` Entidade Coletiva, \`150\` Termo Tópico de Assunto).
    * **Bloco 4XX:** Remissiva "Ver" (*See from*) — Forma não autorizada que conduz para o 1XX (ex.: \`400 $a Assis, Machado de\` remete para \`100 $a Machado de Assis\`).
    * **Bloco 5XX:** Remissiva "Ver também" (*See also from*) — Termo ou nome relacionado que já é uma forma autorizada independente.

---

### 3. O Padrão Dublin Core (DCMI / ISO 15836)

Surgido em 1995 no simpósio de Dublin (Ohio), patrocinado pela OCLC e NCSA, o **Dublin Core Metadata Element Set** foi projetado para viabilizar a descrição de recursos na Web por criadores de conteúdo não bibliotecários e facilitar a interoperabilidade na Web Semântica.

#### A. Os 15 Elementos Básicos Universais (Simple Dublin Core)
Todos os elementos do Dublin Core Simples compartilham duas características fundamentais:
* **Todos são opcionais:** O padrão não exige a obrigatoriedade estrita de nenhum elemento para validar a conformidade sintática.
* **Todos são repetíveis:** Qualquer elemento pode ser invocado múltiplas vezes em um mesmo registro (por exemplo, múltiplos \`dc:creator\` ou múltiplos \`dc:subject\`).

| Elemento DCMI | Definição Canônica | Mapeamento no MARC 21 |
| :--- | :--- | :--- |
| **Title** | O nome formal atribuído ao recurso. | Campo 245 $a |
| **Creator** | Entidade primariamente responsável pela criação intelectual do conteúdo. | Campos 100 / 110 / 111 $a |
| **Subject** | O tópico, tema ou palavras-chave que descrevem o conteúdo do recurso. | Campo 650 $a (Assunto) |
| **Description** | Um resumo explicativo, sumário ou descrição textual livre do recurso. | Campo 520 (Resumo) ou 500 (Nota) |
| **Publisher** | A entidade responsável por disponibilizar ou publicar o recurso. | Campo 260 / 264 $b |
| **Contributor** | Entidade responsável por contribuições secundárias ao recurso. | Campo 700 / 710 $a |
| **Date** | Um ponto ou período de tempo associado a um evento do ciclo de vida. | Campo 260 / 264 $c |
| **Type** | A natureza ou gênero abstrato do conteúdo (ex.: \`dataset\`, \`image\`, \`text\`). | Líder pos. 06 / Campo 655 |
| **Format** | A manifestação física ou digital (tipo de mídia MIME, ex.: \`application/pdf\`). | Campo 856 $q / Campo 300 |
| **Identifier** | Referência inequívoca ao recurso em um dado contexto (URI, DOI, ISBN). | Campo 020 (ISBN) / 024 (DOI) |
| **Source** | Recurso original do qual o presente recurso é derivado. | Campo 786 (Fonte de dados) |
| **Language** | O idioma ou código linguístico do conteúdo intelectual. | Campo 008 pos. 35-37 / Campo 041 |
| **Relation** | Uma referência a um recurso correlato ou conectado. | Blocos 76X-78X de ligação |
| **Coverage** | O escopo espacial (geográfico) ou temporal (cronológico) do conteúdo. | Campo 651 (Geográfico) / 648 (Tempo) |
| **Rights** | Informações sobre direitos de propriedade intelectual, licenças ou Creative Commons. | Campo 540 (Termos de uso) |

#### B. Dublin Core Qualificado (Qualified Dublin Core)
O Dublin Core Qualificado refina os 15 elementos básicos sem violar o princípio da compatibilidade descendente (*dumb-down principle*), utilizando:
1. **Refinadores de Elemento (*Element Refinements*):** Tornam o significado do elemento mais restrito e específico (ex.: \`date.created\`, \`date.issued\`, \`title.alternative\`).
2. **Esquemas de Codificação (*Encoding Schemes*):** Indicam esquemas formais, vocabulários controlados ou regras de sintaxe que disciplinam o valor do dado (ex.: \`date\` com esquema **W3CDTF** no padrão ISO 8601 \`AAAA-MM-DD\`; \`subject\` com esquema **LCSH** ou **VCB**).`,
  checkpoints: [
    {
      id: 'cp-2-4-1',
      pergunta: 'Micro-Checkpoint 1: Estrutura Física do MARC 21 e Campos 00X',
      item: 'No formato MARC 21, o Líder é um campo de tamanho fixo com 24 posições de caracteres, e os campos variáveis de controle 00X não admitem o emprego de indicadores nem de códigos de subcampos delimitados por $.',
      gabarito: 'C',
      justificativa: 'Correto! Os campos 00X são estritamente de controle e posições fixas, sem os 2 indicadores e sem os códigos de subcampo ($a, $b) característicos dos campos de dados variáveis 010 a 8XX.',
    },
    {
      id: 'cp-2-4-2',
      pergunta: 'Micro-Checkpoint 2: Campo 264 no Padrão RDA',
      item: 'Na catalogação em formato MARC 21 sob as diretrizes do RDA, o campo 264 utiliza o segundo indicador para definir a função da menção, sendo o indicador 4 reservado para registrar a data e o aviso de direitos autorais (copyright).',
      gabarito: 'C',
      justificativa: 'Certo! No campo 264 do RDA: 0 = Produção, 1 = Publicação, 2 = Distribuição, 3 = Fabricação e 4 = Aviso de Direitos Autorais (Copyright notice).',
    },
    {
      id: 'cp-2-4-3',
      pergunta: 'Micro-Checkpoint 3: Notação de Autor e Marca de Obra',
      item: 'Ao utilizar a tabela Cutter-Sanborn para compor a notação de autor, a marca de obra deve ser representada por uma letra maiúscula extraída do primeiro vocábulo do título da publicação, incluindo artigos definidos.',
      gabarito: 'E',
      justificativa: 'Errado! A marca de obra é sempre redigida em letra MINÚSCULA e extraída do primeiro vocábulo do título EXCLUINDO-SE expressamente artigos definidos ou indefinidos.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-4-1',
        periodo: '1880 / 1899',
        disciplina: 'Classificação e Notação',
        focoPrincipal: 'Criação da Tabela de Dois Algarismos por Charles Cutter e sua expansão para Três Algarismos por Kate Sanborn.',
        figuraChave: 'Charles Ammi Cutter e Kate E. Sanborn',
      },
      {
        id: 'tl-2-4-2',
        periodo: '1965 / 1968',
        disciplina: 'Automação Bibliográfica',
        focoPrincipal: 'Desenvolvimento do formato MARC I e II e adoção da estrutura física internacional da norma ISO 2709.',
        figuraChave: 'Henriette Avram e Library of Congress',
      },
      {
        id: 'tl-2-4-3',
        periodo: '1995 / 1999',
        disciplina: 'Metadados na Web',
        focoPrincipal: 'Conferência de Dublin (Ohio) criando o Dublin Core (15 elementos) e unificação do USMARC e CAN/MARC no MARC 21.',
        figuraChave: 'Stuart Weibel e DCMI',
      },
    ],
    autores: [
      {
        id: 'aut-2-4-1',
        nome: 'Henriette Avram',
        ano: 1968,
        obraPrincipal: 'The MARC Pilot Project: Information Systems Office',
        ideiaChave: 'Cientista da computação da Library of Congress que projetou o formato MARC, permitindo o intercâmbio automatizado global de registros.',
        chipPegadinha: 'A ISO 2709 rege a estrutura do MARC 21, mas não define os conteúdos catalográficos (que vêm do AACR2/RDA).',
      },
      {
        id: 'aut-2-4-2',
        nome: 'Heloísa de Almeida Prado',
        ano: 1955,
        obraPrincipal: 'Tabela de Notação de Autor (PHA)',
        ideiaChave: 'Bibliotecária brasileira que desenvolveu a tabela nacional de autor, adaptada à estrutura silábica e à frequência de sobrenomes em língua portuguesa.',
        chipPegadinha: 'A Tabela PHA não é sistema de classificação temática; é tabela de notação de autor para número de chamada.',
      },
      {
        id: 'aut-2-4-3',
        nome: 'Stuart Weibel',
        ano: 1995,
        obraPrincipal: 'The Dublin Core: A simple content description format',
        ideiaChave: 'Pesquisador da OCLC que liderou a criação do Dublin Core como padrão universal de metadados para a Web.',
        chipPegadinha: 'O Dublin Core opera com qualquer sintaxe da Web (HTML meta tags, XML e RDF) e nenhum de seus 15 elementos é obrigatório.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-4-1',
        afirmacao: 'No campo 245 do formato MARC 21, o segundo indicador deve ser preenchido com o número de exemplares que a biblioteca possui da referida obra.',
        gabarito: 'E',
        porQue: 'O segundo indicador do campo 245 define a quantidade de caracteres a desprezar na ordenação alfabética em virtude de artigos iniciais (ex.: 2 para "A ", 4 para "The "). O número de exemplares fica nos dados de coleção (Holdings).',
      },
      {
        id: 'peg-2-4-2',
        afirmacao: 'Em um registro MARC 21 de autoridade, a tag 4XX é utilizada para registrar um termo relacionado que já foi adotado como autorizado pelo catálogo.',
        gabarito: 'E',
        porQue: 'A tag 4XX é reservada para a remissiva "Ver" (See from), isto é, variantes NÃO autorizadas. Termos relacionados já autorizados recebem a tag 5XX (remissiva "Ver também").',
      },
      {
        id: 'peg-2-4-3',
        afirmacao: 'Pela especificação normativa do Dublin Core Simples, o elemento Title é o único de preenchimento obrigatório para a validação do registro.',
        gabarito: 'E',
        porQue: 'No Dublin Core Simples, rigorosamente todos os 15 elementos são opcionais e todos são repetíveis.',
      },
    ],
  },
};
