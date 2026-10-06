import type { ModuloFilho } from '../../../domain/types';

export const submodulo42: ModuloFilho = {
  id: 'sub-4-2',
  numero: '4.2',
  titulo: 'Fontes de Informação: Tipologia, Literatura Cinzenta e Avaliação',
  descricaoCurta: 'Tipologia das fontes de informação (Cunha, Grogan): fontes primárias, secundárias e terciárias, literatura cinzenta, bases de dados especializadas e critérios de avaliação de fontes analógicas e digitais.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Murilo Bastos da Cunha', 'Denis Grogan', 'Bernadete Campello', 'Nice Menezes de Figueiredo'],
  alertasCebraspe: [
    'A classificação tripartite das fontes de informação segundo Murilo Bastos da Cunha: Primárias (conhecimento original e novo), Secundárias (informação organizada que remete às primárias) e Terciárias (guias que apontam para as primárias e secundárias).',
    'Exemplos canônicos de Fontes Terciárias muito cobrados: bibliografia de bibliografias, guias de fontes de informação, diretórios de bibliotecas e centros de documentação, e revisões de literatura.',
    'Literatura Cinzenta (Grey Literature): literatura não convencional produzida por órgãos governamentais, acadêmicos ou corporativos que não passa pelos canais comerciais habituais de distribuição editorial (relatórios técnicos, notas taquigráficas, preprints, apostilas). É fonte PRIMÁRIA de altíssimo valor informativo.',
    'Critérios de avaliação de fontes de informação na Internet: Autoridade (credibilidade do autor/instituição), Atualidade (frequência de revisão), Cobertura (amplitude temática), Exatidão (isenção de erros factuais) e Usabilidade (interface amigável e acessibilidade).',
    'As bibliografias são consideradas documentos SECUNDÁRIOS no controle bibliográfico, pois referenciam e organizam documentos primários preexistentes.',
  ],
  quadroComparativo: {
    titulo: 'Tipologia Tripartite das Fontes de Informação (Cunha & Grogan)',
    colunas: ['Categoria', 'Definição e Propósito', 'Exemplos Canônicos Tradicionais', 'Exemplos no Ambiente Legislativo / Jurídico'],
    linhas: [
      ['Fontes Primárias', 'Registram o conhecimento original pela primeira vez; informações novas sem condensação ou interpretação prévia', 'Artigos de periódicos, teses e dissertações, patentes, anais de congressos, relatórios de pesquisa', 'Projetos de Lei, Diário Oficial da União (DOU), acórdãos, transcrições de discursos e pronunciamentos'],
      ['Fontes Secundárias', 'Contêm informações reorganizadas e selecionadas a partir das fontes primárias para facilitar sua localização', 'Bibliografias especializadas, catálogos de bibliotecas, bases de dados de resumos/índices, enciclopédias, dicionários', 'Portal da Câmara (pesquisa de proposições), LexML, RVBI, ementários de jurisprudência e códigos comentados'],
      ['Fontes Terciárias', 'Funcionam como sinalizadores de rota, direcionando o pesquisador para fontes primárias e secundárias', 'Bibliografias de bibliografias, guias de bibliotecas, diretórios de instituições e pesquisadores, revisões de literatura', 'Guia da Biblioteca da Câmara, diretórios de comissões parlamentares, catálogos de bases jurídicas disponíveis'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Conceito e Tipologia Epistemológica das Fontes de Informação
Conforme a definição seminal de **Murilo Bastos da Cunha** (*Para Saber Mais: Fontes de Informação em Ciência e Tecnologia*), uma **fonte de informação** compreende:
> *"Qualquer recurso, documento, pessoa, instituição ou sistema eletrônico capaz de responder a uma necessidade de informação do usuário, atuando como veículo transmissor de dados, ideias ou conhecimentos."*

A literatura canônica internacional (**Denis Grogan, 1995; Murilo Bastos da Cunha, 2001; Bernadete Campello, 2000**) categoriza as fontes de informação em três grandes níveis hierárquicos, segundo o grau de originalidade e tratamento documentário:

\`\`\`mermaid
graph TD
    P["1. FONTES PRIMÁRIAS<br>Conhecimento original, inédito e não filtrado<br>(Artigos, Teses, Patentes, Diários Oficiais, Leis, Relatórios Técnicos)"] -->|Indexação, Condensação e Organização| S["2. FONTES SECUNDÁRIAS<br>Reorganização das primárias para localização rápida<br>(Bases Referenciais, Índices, Bibliografias, OPACs, Dicionários, Enciclopédias)"]
    S -->|Sinalização e Guias de Rota| T["3. FONTES TERCIÁRIAS<br>Guias que direcionam para fontes primárias e secundárias<br>(Bibliografias de Bibliografias, Guias de Bibliotecas, Diretórios de Pesquisadores)"]
\`\`\`

---

### 2. Detalhamento da Tipologia Tripartite (Grogan & Cunha)

| Nível Tipológico | Conceito e Natureza | Características Técnicas | Exemplos Gerais Canônicos | Exemplos no Ambiente Legislativo / Jurídico |
| :--- | :--- | :--- | :--- | :--- |
| **Fontes Primárias** | Registram o conhecimento original pela primeira vez; dados novos e não interpretados. | Grande dispersão física; terminologia especializada; ausência de condensação prévia. | Artigos de periódicos, teses e dissertações, patentes, anais de congressos, relatórios científicos. | **Projetos de Lei (PLs), Diário Oficial da União (DOU), Diário da Justiça (DJe), acórdãos na íntegra, transcrições taquigráficas.** |
| **Fontes Secundárias** | Documentos que resultam da organização, análise e sumarização das fontes primárias. | Não contêm conhecimento inédito; servem como instrumentos de busca e filtragem. | Bases de resumos/índices (Scopus, Web of Science, BRAPCI), bibliografias temáticas, catálogos OPAC, dicionários, enciclopédias. | **Catálogo da Rede RVBI, Portal LexML Brasil, ementários jurisprudenciais, compilações legislativas consolidadas.** |
| **Fontes Terciárias** | Recursos concebidos para apontar a localização e instruir o uso de fontes primárias e secundárias. | São "sinalizadores de tráfego"; guias de alto nível sobre a literatura existente. | **Bibliografias de bibliografias**, guias de literatura especializada, diretórios de centros de pesquisa, revisões do estado da arte. | **Guia do Usuário da Biblioteca Pedro Aleixo, Guia de Fontes Jurídicas do Senado, diretório de comissões temáticas.** |

> [!CAUTION]
> **Casca de Banana Cebraspe nº 1:** A banca afirma que *"as bibliografias de bibliografias e os guias de bibliotecas são fontes secundárias"*. Isso é **ERRADO**! Ambas são exemplos clássicos de **FONTES TERCIÁRIAS**. Já a bibliografia comum (que lista livros ou artigos) é **FONTE SECUNDÁRIA**.

---

### 3. A Literatura Cinzenta (*Grey Literature*)
A Literatura Cinzenta compreende a produção documental de caráter técnico, acadêmico, legislativo ou corporativo **não disponibilizada pelos canais comerciais usuais de distribuição editorial e livrarias**:
* **Características:** Tiragem restrita ou circulação interna; ausência de controle bibliográfico comercial (frequentemente sem ISBN); elaboração rápida para atender demandas imediatas.
* **Exemplos no Poder Público:**
  * Relatórios finais de Comissões Parlamentares de Inquérito (CPIs);
  * Notas técnicas e estudos de consultoria legislativa e orçamentária da Câmara dos Deputados;
  * Relatórios técnicos de fiscalização e auditoria do Tribunal de Contas da União (TCU);
  * *Preprints* acadêmicos, apostilas de treinamento interno e atas de sessões reservadas.
* **Valor para o Parlamento:** É fonte primária de elevadíssimo valor contemporâneo, pois carrega dados factuais inéditos e análises de políticas públicas meses ou anos antes de qualquer publicação formal em livro.

---

### 4. Critérios Científicos de Avaliação de Fontes de Informação (Campello, Cendón & Tomaél)
Diante da profusão de dados não validados na Internet, o bibliotecário legislativo aplica critérios científicos rigorosos para atestar a higidez das fontes:

1. **Autoridade (*Authority*):** Credibilidade científica, titulação e reputação institucional do autor ou órgão emissor. Identificação clara da entidade patrocinadora e comitê editorial.
2. **Exatidão e Rigor Factual (*Accuracy*):** Isenção de erros factuais, coerência metodológica, citações explícitas de fontes originais e reprodutibilidade dos dados.
3. **Atualidade (*Currency*):** Frequência de atualização, visibilidade da data da última revisão e validade das remissões a leis que já foram revogadas.
4. **Cobertura e Escopo (*Coverage*):** Profundidade analítica e abrangência temporal e geográfica condizente com o escopo prometido.
5. **Objetividade e Neutralidade (*Objectivity*):** Isenção partidária ou ideológica, transparência na metodologia e declaração de conflitos de interesse.
6. **Acessibilidade, Navegabilidade e Usabilidade:** Facilidade de recuperação, estabilidade do servidor e conformidade com as diretrizes de acessibilidade na Web (WCAG/e-MAG).

---

### 5. Avaliação Científica de Sistemas de Recuperação da Informação: Os Testes de Cranfield (Cyril Cleverdon)
Entre 1957 e 1966, na Faculdade de Aeronáutica de Cranfield (Inglaterra), **Cyril Cleverdon** conduziu os célebres **Testes de Cranfield (Cranfield I e Cranfield II)**, que fundaram a metodologia científica moderna de avaliação de sistemas de RI:

\`\`\`mermaid
graph TD
    COL["Coleção de Teste Controlada"] --> QUERIES["Conjunto Padronizado de Consultas"]
    QUERIES --> REL["Julgamento Humano Exaustivo de Relevância"]
    REL --> CONTINGENCIA["Matriz de Contingência 2x2"]
    CONTINGENCIA --> REC["REVOCAÇÃO (Recall): Proporção de Relevantes Resgatados"]
    CONTINGENCIA --> PREC["PRECISÃO (Precision): Proporção de Relevantes nos Recuperados"]
\`\`\`

#### A. A Matriz de Contingência 2x2
Para qualquer consulta executada sobre uma base documental, a coleção total divide-se em quatro quadrantes absolutos:

| Situação Documental | Documentos Pertinentes / Relevantes | Documentos Não Relevantes | Total da Situação |
| :--- | :---: | :---: | :---: |
| **Documentos Recuperados pelo Sistema** | **$a$** (Verdadeiros Positivos) | **$b$** (Falsos Positivos — **RUÍDO**) | $a + b$ (Total Recuperado) |
| **Documentos Não Recuperados pelo Sistema** | **$c$** (Falsos Negativos — **SILÊNCIO**) | **$d$** (Verdadeiros Negativos) | $c + d$ (Total Não Recuperado) |
| **Total da Coleção** | $a + c$ (Total de Relevantes na Base) | $b + d$ (Total de Não Relevantes) | $N = a + b + c + d$ |

#### B. Fórmulas Canônicas Cobradas pelo Cebraspe
1. **Revocação (*Recall* — $R$):**
   Mede a capacidade do sistema em encontrar **TODOS os documentos relevantes** existentes na base:
   $$R = \\frac{a}{a + c} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Relevantes Existentes na Base}}$$
2. **Precisão (*Precision* — $P$):**
   Mede a capacidade do sistema em recuperar **APENAS documentos relevantes**, sem entulhar o usuário com lixo:
   $$P = \\frac{a}{a + b} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Documentos Recuperados pelo Sistema}}$$
3. **Silêncio Documental:**
   Corresponde aos documentos relevantes que o sistema **deixou de encontrar** ($c$).
   $$\\text{Taxa de Silêncio} = 1 - R = \\frac{c}{a + c}$$
4. **Ruído Documental:**
   Corresponde aos documentos inúteis que o sistema **entregou por engano** ($b$).
   $$\\text{Taxa de Ruído} = 1 - P = \\frac{b}{a + b}$$
5. **Medida F (*F-Measure / F1-Score*):**
   É a média harmônica ponderada entre Precisão e Revocação, equilibrando as duas métricas em uma única pontuação:
   $$F_1 = 2 \\times \\frac{P \\times R}{P + R}$$
6. **Coeficiente de Queda / Ruído Global (*Fallout* — $F$):**
   A proporção de documentos irrelevantes que foram indevidamente recuperados:
   $$\\text{Fallout} = \\frac{b}{b + d} = \\frac{\\text{Não Relevantes Recuperados}}{\\text{Total de Não Relevantes na Coleção}}$$

#### C. O Compromisso Estrutural Inverso entre Revocação e Precisão
Os experimentos de Cranfield demonstraram uma lei empírica universal da Ciência da Informação:
* **Relação Inversa:** Em qualquer sistema de busca, **quando se tenta aumentar a Revocação, a Precisão cai; e quando se força a Precisão ao máximo, a Revocação diminui**.
* *Busca de Alta Revocação:* Típica de um advogado que precisa de todos os precedentes possíveis ou de um historiador em pesquisa exaustiva (usa muitos operadores OR e truncagens).
* *Busca de Alta Precisão:* Típica de um parlamentar que precisa de um dado numérico imediato para discursar em 5 minutos (usa termos exatos entre aspas e operador AND restritivo).

---

### 6. Quadro Sinóptico de Cascas de Banana do Cebraspe em Fontes e Avaliação

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"A taxa de revocação mede a proporção de documentos relevantes recuperados em relação ao total de documentos recuperados pela busca."* | **ERRADO** | Essa é a definição de **Precisão** ($a / [a+b]$). A Revocação calcula em relação ao total de relevantes existentes na base ($a / [a+c]$). |
| *"A literatura cinzenta é classificada epistemologicamente como fonte secundária devido ao seu formato não convencional."* | **ERRADO** | A literatura cinzenta é **FONTE PRIMÁRIA**, pois contém dados originais e inéditos. |
| *"Em sistemas de recuperação ideais, é rotineiro alcançar simultaneamente 100% de precisão e 100% de revocação em buscas amplas."* | **ERRADO** | Revocação e Precisão são grandezas **inversamente proporcionais**; maximizar uma penaliza a outra. |
| *"O silêncio documental decorre da recuperação de documentos irrelevantes que poluem o resultado da pesquisa."* | **ERRADO** | Recuperar itens irrelevantes é **RUÍDO** ($b$). O **SILÊNCIO** ($c$) é a não recuperação de documentos relevantes que existiam na base. |`,
  checkpoints: [
    {
      id: 'cp-4-2-1',
      pergunta: 'Micro-Checkpoint 1: Classificação de Fontes de Informação',
      item: 'Bibliografia de bibliografias, guias de centros de documentação e diretórios de pesquisadores são classificados, quanto à tipologia documental, como fontes de informação secundárias.',
      gabarito: 'E',
      justificativa: 'Errado! Bibliografia de bibliografias, guias de bibliotecas e diretórios são fontes TERCIÁRIAS, pois servem para guiar o usuário na localização das fontes primárias e secundárias.',
    },
    {
      id: 'cp-4-2-2',
      pergunta: 'Micro-Checkpoint 2: Natureza da Literatura Cinzenta',
      item: 'A literatura cinzenta refere-se a documentos de circulação não comercial produzidos no âmbito acadêmico, empresarial ou governamental, sendo considerada fonte primária de informação relevante para a pesquisa científica e legislativa.',
      gabarito: 'C',
      justificativa: 'Correto! A literatura cinzenta compreende relatórios técnicos, notas técnicas parlamentares e teses não publicadas comercialmente, constituindo fonte primária essencial.',
    },
      {
      id: 'cp-4-2-3',
      pergunta: "Micro-Checkpoint 3: Tipologia das Fontes de Informação de Grogan",
      item: "Segundo a clássica classificação de Denis Grogan, as bibliografias de bibliografias e os guias de literatura especializada enquadram-se na categoria de fontes de informação secundárias.",
      gabarito: 'E',
      justificativa: "Errado! Conforme a tipologia tripartite de Grogan, bibliografias de bibliografias e guias de literatura são fontes TERCIÁRIAS, pois servem primordialmente para localizar fontes secundárias e primárias.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-4-2-1',
        periodo: '1979',
        disciplina: 'Estudo de Fontes',
        focoPrincipal: 'Publicação de "Practical Reference Work" e sistematização das fontes de informação',
        figuraChave: 'Denis Grogan',
      },
      {
        id: 'tl-4-2-2',
        periodo: '2001 / 2010',
        disciplina: 'Fontes de Informação no Brasil',
        focoPrincipal: 'Sistematização de fontes gerais, especializadas e digitais no Brasil',
        figuraChave: 'Murilo Bastos da Cunha e Bernadete Campello',
      },
    ],
    autores: [
      {
        id: 'aut-4-2-1',
        nome: 'Murilo Bastos da Cunha',
        ano: 2001,
        obraPrincipal: 'Para saber mais: fontes de informação em ciência e tecnologia',
        ideiaChave: 'Classificação estruturada de fontes primárias, secundárias e terciárias; critérios de avaliação de bases digitais.',
        chipPegadinha: 'Cunha é a autoridade canônica nacional em tipologia e avaliação de fontes de informação.',
      },
      {
        id: 'aut-4-2-2',
        nome: 'Denis Grogan',
        ano: 1979,
        obraPrincipal: 'Practical Reference Work',
        ideiaChave: 'Distinção funcional das fontes como ferramentas de trabalho no serviço de referência.',
        chipPegadinha: 'Grogan associa as fontes às categorias de perguntas do usuário.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-4-2-1',
        afirmacao: 'As fontes primárias de informação caracterizam-se por apresentarem o conhecimento já selecionado, sintetizado e de localização imediata e simples.',
        gabarito: 'E',
        porQue: 'Essa definição refere-se às fontes secundárias. As fontes primárias contêm o conhecimento inédito, porém frequentemente disperso e difícil de localizar.',
      },
      {
        id: 'peg-4-2-2',
        afirmacao: 'O Diário Oficial da União (DOU) é considerado uma fonte terciária de informação jurídica e administrativa.',
        gabarito: 'E',
        porQue: 'O DOU publica os atos normativos, contratos e despachos originais em sua primeira manifestação formal, constituindo fonte PRIMÁRIA autêntica.',
      },
    ],
  },
};
