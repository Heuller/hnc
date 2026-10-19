import type { ModuloFilho } from '../../../domain/types';

export const submodulo44: ModuloFilho = {
  id: 'sub-4-4',
  numero: '4.4',
  editalRef: 'Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5',
  preRequisitos: ["sub-4-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-1-4",
          "titulo": "Ética Profissional e Legislação",
          "motivo": "Conduta e sigilo na entrevista de referência."
      },
      {
          "submoduloId": "sub-5-2",
          "titulo": "Produtos e Serviços Informacionais",
          "motivo": "Conversão da necessidade do usuário em relatórios temáticos e notas informacionais."
      }
  ],
  titulo: 'Serviço de Referência, DSI, Estudos de Usuários e Competência Informacional',
  antesDeLer: [
    {
      termo: 'Processo de Referência (Denis Grogan)',
      definicao: 'Sequência de etapas intelectuais e comunicacionais de atendimento: do problema inicial, negociação da questão, estratégia até a resposta final.',
      exemploBiblioteca: 'Entrevista com assessor parlamentar para filtrar se a demanda por \'impostos\' se refere especificamente à Reforma Tributária de 2023.',
    },
    {
      termo: 'Disseminação Seletiva da Informação (DSI)',
      definicao: 'Serviço que envia alertas periódicos e personalizados de novas publicações a usuários cadastrados com base em seus perfis de interesse.',
      exemploBiblioteca: 'Envio automático aos membros da Comissão de Educação de novas teses e normas sobre financiamento escolar.',
    },
    {
      termo: 'Estudo de Usuários',
      definicao: 'Investigação sistemática sobre o comportamento, as necessidades, os padrões de busca e a satisfação da comunidade atendida.',
      exemploBiblioteca: 'Pesquisa de opinião com deputados federais sobre o uso do acervo digital no aplicativo da Câmara.',
    },
    {
      termo: 'Competência Informacional (Information Literacy)',
      definicao: 'Habilidade dos usuários em identificar, acessar, avaliar e utilizar criticamente a informação no contexto da sociedade do conhecimento.',
      exemploBiblioteca: 'Treinamento oferecido pelo CEDI aos novos servidores sobre como verificar a vigência de leis no portal da Câmara.',
    },
  ],
  descricaoCurta: 'O processo de referência de Denis Grogan (8 etapas), entrevista e mediação, Disseminação Seletiva da Informação (DSI de Luhn), modelos teóricos de comportamento informacional (Wilson, Dervin - Sense Making, Belkin - ASK) e Competência em Informação (Information Literacy).',
  tempoEstimadoMinutos: 24,
  autoresChave: ['Denis Grogan', 'Hans Peter Luhn', 'Tom D. Wilson', 'Brenda Dervin', 'Nicholas Belkin', 'Carol Kuhlthau', 'Maurice Line', 'Nice Menezes de Figueiredo', 'Javier Calzada Prado', 'Tibor Koltay'],
  alertasCebraspe: [
    'A sequência lógica de 8 etapas do processo de referência de Denis Grogan é cobrada literal e repetidamente pelo Cebraspe: 1. O Problema -> 2. A Necessidade de Informação -> 3. A Questão Inicial -> 4. A Questão Negociada -> 5. A Estratégia de Busca -> 6. O Processo de Busca -> 7. A Resposta -> 8. A Solução. Memorize essa ordem exata!',
    'Quem é o ator principal nas primeiras etapas do processo de referência? O USUÁRIO (ele vivencia o problema, a necessidade e formula a questão inicial). A mediação do bibliotecário atua decisivamente a partir da Questão Negociada em diante.',
    'A Disseminação Seletiva da Informação (DSI) é um serviço de NOTIFICAÇÃO CORRENTE ativo e personalizado, criado por Hans Peter Luhn, fundamentado no cruzamento automatizado entre o perfil do usuário e os novos documentos que entram no acervo.',
    'Modelos de Estudos de Usuários: Abordagem Tradicional (centrada no sistema, acervo e métodos quantitativos) vs. Abordagem Alternativa/Moderna (centrada no usuário, fenomenológica, cognitiva e métodos qualitativos).',
    'O modelo Sense-Making de Brenda Dervin estrutura-se na tríade: Situação (o contexto histórico) -> Lacuna / Gap (a incerteza cognitiva) -> Ponte (as estratégias e informações encontradas) -> Uso / Resultado (a superação do problema).',
    'Competência em Informação (Information Literacy) e Competência em Dados (Data Literacy) não são sinônimos. Enquanto a competência informacional foca na busca, avaliação crítica e uso de documentos e fontes textuais, a competência em dados lida especificamente com a descoberta, interpretação quantitativa, análise, curadoria e comunicação ética de conjuntos de dados brutos e estruturados (datasets e tabelas).',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Modelos Seminais de Necessidades e Comportamento Informacional',
    colunas: ['Teórico e Ano', 'Modelo Conceitual', 'Pressuposto Epistemológico Central', 'Conceito Chave Cobrado pelo Cebraspe'],
    linhas: [
      ['Tom D. Wilson (1981 / 1996)', 'Modelo de Comportamento Informacional', 'A necessidade de informação não é primária; decorre de necessidades fisiológicas, afetivas e cognitivas básicas do ser humano', 'Barreiras intervenientes (psicológicas, ambientais) e busca ativa vs. passiva'],
      ['Brenda Dervin (1983 / 1992)', 'Abordagem do Sense-Making', 'A informação não existe isolada no vácuo; ela é construída pelo indivíduo para dar sentido ao seu mundo e transpor incertezas', 'Triângulo do Sense-Making: Situação -> Lacuna (Gap) -> Ponte -> Uso'],
      ['Nicholas Belkin (1980)', 'ASK (Anomalous State of Knowledge)', 'O usuário busca informação precisamente porque seu conhecimento sobre o tema é imperfeito, vago ou incompleto', 'Dificuldade intrínseca do usuário de articular sua dúvida em termos precisos no início'],
      ['Carol Kuhlthau (1991)', 'ISP (Information Search Process)', 'A busca de informação é um processo holístico que combina pensamentos (cognitivo), sentimentos (afetivo) e ações (físico)', 'A ansiedade e a dúvida diminuem à medida que a busca progride da incerteza para a clareza'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Processo de Referência segundo Denis Grogan (1995)
Na obra clássica *A Prática do Serviço de Referência* (presente em nosso acervo em \`Recuperação, fontes, referência e usuários\`), **Denis Grogan** define o serviço de referência como o contato pessoal e a assistência direta prestada pelo bibliotecário ao leitor em busca de conhecimento.

\`\`\`timeline
E1 | 1. O Problema | Ator: Usuário | Usuário vivencia um impasse prático, acadêmico ou dilema de trabalho
---> Tomada de Consciência
E2 | 2. A Necessidade de Informação | Ator: Usuário | Reconhecimento da lacuna cognitiva: percepção de que precisa de ajuda externa
---> Expressão Verbal
E3 | 3. A Questão Inicial | Ator: Usuário | Pergunta verbalizada no balcão de referência — quase sempre vaga ou distorcida
---> Entrevista de Referência
E4 | 4. A Questão Negociada | Atores: Bibliotecário & Usuário | Filtragem de ambiguidades e identificação técnica da real necessidade informacional
---> Formulação Estruturada
E5 | 5. A Estratégia de Busca | Ator: Bibliotecário | Tradução na linguagem do sistema: termos, vocabulário controlado e operadores booleanos
---> Execução Técnica
E6 | 6. O Processo de Busca | Ator: Bibliotecário | Navegação concreta em catálogos, acervos, bases de dados ou repositórios
---> Recuperação Documental
E7 | 7. A Resposta | Ator: Bibliotecário | Entrega física ou digital dos documentos, referências ou dados pertinentes
---> Validação Pragmática
E8 | 8. A Solução | Ator: Usuário | Julgamento exclusivo de valor pelo usuário: o problema foi resolvido?
\`\`\`

#### As Oito Etapas Decisórias e os Papéis dos Atores
A banca **CEBRASPE** cobra a sequência exata e a atribuição de responsabilidades em cada etapa:
1. **O Problema:** Situação fática ou dilema intelectual que o usuário precisa resolver em seu trabalho ou estudo. **Ator: Usuário**.
2. **A Necessidade de Informação:** O reconhecimento interno de que o conhecimento acumulado é insuficiente e que dados externos são necessários. **Ator: Usuário**.
3. **A Questão Inicial:** A verbalização da dúvida apresentada no balcão de referência, telefone ou chat. É quase invariavelmente **imperfeita, distorcida ou excessivamente genérica** em relação à necessidade real. **Ator: Usuário**.
4. **A Questão Negociada:** O cerne da mediação do bibliotecário. Por meio da **entrevista de referência**, o profissional filtra ambiguidades e formula a verdadeira questão técnica a ser respondida. **Atores: Bibliotecário e Usuário em cooperação**.
5. **A Estratégia de Busca:** A tradução da questão negociada na linguagem do sistema (seleção de vocabulários controlados, tesauros, campos e operadores booleanos). **Ator: Bibliotecário**.
6. **O Processo de Busca:** A navegação concreta em catálogos, estantes, bases de dados comerciais ou repositórios digitais. **Ator: Bibliotecário**.
7. **A Resposta:** O produto informativo entregue ao usuário (livros, artigos, relatórios ou referências). **Ator: Bibliotecário**.
8. **A Solução:** A etapa final de validação pragmática. Somente o próprio usuário tem competência epistemológica para determinar se a resposta obtida efetivamente sanou seu problema original. **Ator: Usuário**.

---

### 2. Tipologia das Questões de Referência segundo William Katz (2002)
O autor norte-americano William Katz categorizou as consultas recebidas pelo serviço de referência em quatro classes fundamentais:

| Categoria da Questão (Katz) | Complexidade | Fontes Utilizadas | Exemplo Prático na Câmara dos Deputados |
| :--- | :--- | :--- | :--- |
| **1. Questões de Direção / Administrativas** | Mínima (não bibliográfica). | Nenhuma fonte documental técnica; conhecimento do prédio e regulamento. | *"Onde fica o banheiro?", "Qual o horário de funcionamento da Seção de Raras?", "Onde tiro cópias?"* |
| **2. Questões de Pronta-Referência (*Ready Reference*)** | Baixa / Factual pontual. | Obras de referência rápida (dicionários, anuários estatísticos, diretórios). | *"Qual é o número da Lei de Responsabilidade Fiscal?", "Quem é o atual Presidente da Câmara dos Deputados?"* |
| **3. Questões de Pesquisa Específica (*Specific Search*)** | Média. | Catálogos em linha (OPAC), bibliografias especializadas e bases referenciais. | *"Quais monografias a biblioteca possui sobre a reforma tributária aprovada na Emenda Constitucional 132?"* |
| **4. Questões de Pesquisa Ampla / Avançada (*Research / Extended*)** | Máxima. | Múltiplas bases heterogêneas, literatura cinzenta, comutação e consulta a especialistas. | *"Elaborar dossiê bibliográfico e jurisprudencial exaustivo sobre a evolução do controle de constitucionalidade de medidas provisórias nos últimos 20 anos."* |

---

### 3. A Entrevista de Referência, Estudos de Usuários e a Tríade de Maurice Line (Edital Bloco E, itens 3.2 e 3.5)

No serviço de referência moderno, a interação dialógica entre o bibliotecário e o consulente constitui o momento culminante da mediação humana da informação (**Denis Grogan, 1995; William Katz, 2002; Robert S. Taylor, 1968; Maurice Line, 1974; Nice Menezes de Figueiredo, 1994**).

#### A. Os Quatro Níveis de Necessidade de Robert S. Taylor (1968)
Em seu estudo seminal *Question-Negotiation and Information Seeking in Libraries*, Taylor demonstrou que a dúvida percorre quatro estados cognitivos na mente do usuário antes de alcançar o sistema:
* **$Q_1$ — Necessidade Visceral:** A necessidade vaga, subconsciente e nebulosa de informação. O indivíduo sente que algo lhe falta, mas é totalmente incapaz de expressar isso em palavras (*informação intangível*).
* **$Q_2$ — Necessidade Consciente:** A necessidade mentalmente reconhecida e articulada em pensamento interior. O usuário sabe o que quer para si, mas a ideia ainda carece de estruturação formal.
* **$Q_3$ — Necessidade Formalizada:** A formulação linguística explícita da dúvida comunicada ao bibliotecário. É quase sempre imperfeita, vaga ou distorcida (*a Questão Inicial de Grogan*).
* **$Q_4$ — Necessidade Comprometida com o Sistema:** A questão traduzida e adaptada para os termos controlados, campos e operadores do sistema de recuperação da biblioteca (*a Questão Negociada / Estratégia de Busca*).

#### B. As Cinco Fases Operacionais da Entrevista de Referência (Grogan & Katz)
1. **Acolhimento Empático e Abertura:** Estabelecer clima de confiança e receptividade, quebrando a chamada *"ansiedade de biblioteca"* (*library anxiety*, Constance Mellon, 1986), vício psicológico que inibe o consulente de admitir o desconhecimento.
2. **Negociação da Pergunta (Técnica do Funil):** O bibliotecário conduz a entrevista partindo de **perguntas abertas** (*"Conte-me sobre a finalidade da pesquisa no projeto de lei"*), passando por **perguntas exploratórias** (*"Quais correntes doutrinárias ou precedentes já foram mapeados?"*) e concluindo com **perguntas fechadas** (*"A busca deve se restringir às decisões do STF dos últimos 5 anos?"*).
3. **Tradução e Formulação da Estratégia de Busca:** Conversão da questão negociada ($Q_4$) em descritores de tesauro (ex.: Tesauro do Congresso Nacional / MFN), operadores booleanos (AND, OR, NOT) e filtros de data e idioma.
4. **Execução e Avaliação Preliminar Conjunta:** Apresentação de amostra dos primeiros registros recuperados para verificar a pertinência e calibrar a precisão antes do levantamento exaustivo.
5. **Retroalimentação (Feedback) e Encerramento:** Confirmação de que o produto informativo atendeu à necessidade visceral ($Q_1$) e disponibilização de canais para desdobramentos adicionais.

#### C. A Tríade Canônica: Necessidade vs. Demanda vs. Uso (Maurice Line, 1974; Nice Figueiredo, 1994)
O Cebraspe explora sistematicamente a falsa equivalência entre esses três conceitos:

$\\text{Necessidade (Need)} \\neq \\text{Demanda (Demand)} \\neq \\text{Uso (Use)}$

* **Necessidade de Informação (*Information Need*):**
  * Representa o estado real de carência informacional indispensável para que o indivíduo execute suas tarefas, tome decisões ou resolva impasses de pesquisa.
  * Pode ser **consciente ou latente/inconsciente**. Muitas vezes o usuário desconhece que precisa de determinada norma ou dado estatístico até que um mediador o alerte.
* **Demanda de Informação (*Information Demand / Want*):**
  * É a parcela da necessidade que o usuário consegue efetivamente verbalizar e formalizar como solicitação ao bibliotecário ou ao sistema de busca.
  * *Por que a demanda difere da necessidade?* Porque o usuário pode subestimar o acervo da biblioteca, sentir vergonha de expor suas dúvidas, usar termos errôneos ou pedir menos do que realmente precisa.
* **Uso da Informação (*Information Use*):**
  * É o consumo efetivo, a leitura assimilada e a aplicação prática das fontes recuperadas na tomada de decisão legislativa ou produção acadêmica.
  * Nem tudo o que foi demandado é de fato usado (livros retirados que não chegam a ser lidos); e muito do que é usado advém de canais informais (conversas com pares em gabinetes) sem ter transitado pela biblioteca.

### 4. Metodologias Diretas e Indiretas de Estudos de Usuários Revelam Necessidades Reais no Legislativo

A investigação sistemática do comportamento informacional da comunidade classifica-se em dois grandes paradigmas metodológicos:
A investigação sistemática do comportamento informacional da comunidade classifica-se em dois grandes paradigmas metodológicos:

| Modalidade | Metodologias Empregadas | Vantagens Principais | Limitações e Riscos Críticos |
| :--- | :--- | :--- | :--- |
| **Métodos Diretos**<br>*(Interação ativa com os usuários)* | • **Questionários padronizados** (estruturados ou semiestruturados);<br>• **Entrevistas em profundidade** individuais;<br>• **Grupos Focais (*Focus Groups*)** (6 a 12 participantes);<br>• **Técnica do Incidente Crítico (John C. Flanagan, 1954)**: relato de eventos reais e marcantes de sucesso ou fracasso recente de busca;<br>• **Observação participante / Etnografia**. | Capta motivações subjetivas, percepções de valor, expectativas e sentimentos afetivos (modelo ISP de Kuhlthau). | Baixa taxa de retorno em questionários; viés de complacência (o usuário responde o que acha que o bibliotecário gostaria de ouvir); alto custo e tempo. |
| **Métodos Indiretos**<br>*(Análise de registros sem interferir nos sujeitos)* | • **Análise de Logs de Busca (*Transaction Log Analysis*)**: registros automáticos de cliques, termos sem recuperação (*zero hits*) e rotas no OPAC;<br>• **Análise de Citações / Bibliometria**: análise das referências citadas nos pareceres e relatórios técnicos das consultorias da Câmara;<br>• **Estatísticas de Circulação e Empréstimo**: taxas de rotação de acervo por classe decimal (CDD/CDU). | Dados estritamente objetivos, não reativos (não alteram o comportamento observado), baixo custo de coleta em sistemas automatizados. | Não revelam o porquê do comportamento; registram o documento baixado, mas não provam se ele foi efetivamente lido ou útil. |

#### E. Casos Concretos Aplicados ao Universo Legislativo

* **Caso 1: Balcão Presencial na Biblioteca Pedro Aleixo (Técnica do Funil)**
  * *Situação:* Assessor parlamentar chega ao balcão de referência solicitando: *"Preciso urgentemente de tudo o que a biblioteca tiver sobre reforma tributária"*.
  * *Intervenção do Bibliotecário:* O profissional percebe que a questão é excessivamente genérica ($Q_3$) e aplica o funil de perguntas. Pergunta aberta: *"Qual é o foco da emenda que o deputado apresentará?"*. O assessor esclarece que a discussão versa sobre a não cumulatividade plena do IBS e da CBS na aquisição de insumos de tecnologia. Pergunta fechada: *"A pesquisa deve focar a jurisprudência do STF ou doutrina de Direito Tributário comparado?"*.
  * *Resultado:* A questão negociada ($Q_4$) é delimitada para *"precedentes do STF sobre creditamento de ICMS/IBS em insumos digitais"*, viabilizando a entrega de 3 acórdãos precisos em 30 minutos, evitando a entrega de dezenas de manuais irrelevantes.
* **Caso 2: Atendimento Digital Remoto via Intranet / Chat Especializado**
  * *Situação:* Consultor legislativo lotado em comissão parlamentar abre chamado eletrônico solicitando: *"Modelos de relatórios sobre inteligência artificial"*.
  * *Intervenção do Bibliotecário:* Mediante contato síncrono via chat, o bibliotecário identifica que a demanda visa instruir a Comissão Especial sobre o Marco Regulatório da Inteligência Artificial (PL 2338/2023). O bibliotecário acessa o Portal LexML, recupera as proposições apensadas com identificadores URN LEX, cruza com a legislação da União Europeia (*EU AI Act*) e elabora uma **Linha do Tempo Normativa** acompanhada de **Mapa de Atores** dos setores ouvidos nas audiências públicas.

---

### 5. A Disseminação Seletiva da Informação (DSI) de Hans Peter Luhn (1958)
Criada pelo pesquisador da IBM **Hans Peter Luhn**, a DSI é o serviço proativo de alerta corrente no qual o sistema toma a iniciativa de informar o usuário:

\`\`\`timeline
P | 1. Perfil de Interesse do Usuário | Mapeamento Temático | Cadastro formal de termos, descritores, operadores booleanos e áreas de pesquisa do leitor
---> Cruzamento com Novas Entradas
D | 2. Perfil dos Novos Documentos | Ingestão no Acervo | Metadados e indexação das obras recém-adquiridas incorporadas ao catálogo
---> Algoritmo de Similaridade
M | 3. Mecanismo de Casamento (Matching) | Filtro Automatizado | Interseção matemática entre os termos do perfil do usuário e as novas aquisições
---> Canal Proativo
N | 4. Notificação Direcionada | Alerta Antecipado | Disparo de avisos eletrônicos (e-mail, RSS, app) com links diretos aos itens pertinentes
---> Calibração Algorítmica
F | 5. Retroalimentação (Feedback) | Ajuste Dinâmico | Usuário avalia pertinência (útil vs. inútil), refinando continuamente o perfil cadastrado
\`\`\`

#### A. As Duas Gerações de DSI Cobradas pelo Cebraspe (*Prova STJ 2024*)
* **DSI de 1ª Geração (Tradicional / Analógica / Em Lote):**
  * Baseada em cartões perfurados ou perfis fixos de interesse preenchidos em formulários em papel;
  * Cruzamentos periódicos manuais ou em lotes computacionais (*batch processing*);
  * Alertas físicos encaminhados em fichas impressas ou boletins datilografados;
  * Feedback lento e baixa flexibilidade de calibração.
* **DSI de 2ª Geração (Digital / Automatizada / Semântica):**
  * Perfis dinâmicos alimentados continuamente por algoritmos de aprendizado de máquina (*machine learning*) e rastreamento do histórico de consultas do usuário;
  * Alertas instantâneos disparados em tempo real via feeds RSS, e-mails automatizados, APIs e notificações em aplicativos móveis;
  * *Feedback* com um único clique (botão de "relevante/não relevante"), ajustando os pesos estatísticos do perfil do usuário em tempo de execução.

---

### 6. Modelos Canônicos de Comportamento Informacional (*Information Behavior*)

1. **Modelo de Tom D. Wilson (1981 / 1996):**
   * A necessidade de informação não nasce no vácuo; ela é uma **necessidade secundária** gerada por necessidades primárias (fisiológicas, afetivas ou cognitivas) no contexto de papéis sociais do indivíduo.
   * Introduz as **variáveis intervenientes**: barreiras psicológicas, demográficas, ambientais e características da fonte que podem impedir ou desviar o comportamento de busca.
2. **Abordagem do *Sense-Making* de Brenda Dervin (1983 / 1992):**
   * O ser humano é visto como um viajante que se desloca no tempo e no espaço construindo sentido para sua vida.
   * **O Triângulo do Sense-Making:**
     * **Situação:** O contexto histórico e espaço-temporal onde o indivíduo está inserido;
     * **Lacuna (*Gap*):** A barreira cognitiva, dúvida ou incerteza que interrompe a sua caminhada;
     * **Ponte:** As informações, ideias e estratégias mobilizadas para superar a barreira;
     * **Resultado / Uso:** A nova compreensão alcançada que permite continuar a caminhada.
3. **Modelo ASK (*Anomalous State of Knowledge*) de Nicholas Belkin (1980):**
   * O usuário busca informação em um sistema precisamente porque reconhece uma **anomalia ou lacuna em seu estado de conhecimento**. Por não dominar o tema, ele tem extrema dificuldade de formular a consulta exata em termos técnicos no início da interação.
4. **Modelo ISP (*Information Search Process*) de Carol Kuhlthau (1991):**
   * Integra três domínios do ser humano na busca: **Sentimentos (afetivo)**, **Pensamentos (cognitivo)** e **Ações (físico)**.
   * Divide a pesquisa em 6 estágios: Iniciação $\\rightarrow$ Seleção $\\rightarrow$ Exploração $\\rightarrow$ Formulação $\\rightarrow$ Coleta $\\rightarrow$ Apresentação.
   * Revela que os sentimentos de incerteza, confusão e frustração são máximos no início e na fase de exploração, convertendo-se em confiança e satisfação após a formulação do foco.

---

### 6. Competência em Informação (*Information Literacy*) e Competência em Dados (*Data Literacy*)

O edital nº 1/2026 exige explicitamente o domínio de **competência em informação e competência em dados** (item 1.5 do Bloco D). Ambas integram o arcabouço contemporâneo de mediação bibliotecária, mas possuem objetos, métodos e competências nucleares distintas.

#### A. Competência em Informação (*Information Literacy*)
* **Origem e Marcos Conceituais:** Termo cunhado por Paul Zurkowski em 1974 e consolidado pela *American Library Association* (ALA/ACRL, 1989), além das históricas Declarações de Praga (2003 - Rumo a uma Sociedade Letrada em Informação) e Alexandria (2005 - Farol da Sociedade da Informação).
* **Definição:** É a capacidade holística de o indivíduo **reconhecer quando necessita de informação, saber localizá-la, avaliá-la criticamente em sua autoridade, exatidão e relevância, e utilizá-la de forma ética, legal e eficaz**.
* **Aplicação Legislativa:** Na Câmara dos Deputados, manifesta-se nos programas de formação da Biblioteca Pedro Aleixo e do Cefor voltados a capacitar assessores parlamentares a identificar fontes doutrinárias fidedignas, avaliar jurisprudência e combater vieses informacionais.

#### B. Competência em Dados (*Data Literacy*): A Nova Fronteira
Com a proliferação da ciência orientada a dados (*data science*), do governo aberto e da inteligência artificial, emergiu a necessidade de competências especializadas para lidar com dados brutos e semiestruturados.
* **Autores Canônicos de Referência:** **Javier Calzada Prado e Miguel Ángel Marzal (2013)** (*Incorporating Data Literacy into Information Literacy Programs: Core Competencies and Contents*) e **Tibor Koltay (2017)** (*Data literacy for researchers and data librarians*).
* **Definição Canônica:** É o conjunto de conhecimentos, habilidades e atitudes que capacitam o cidadão ou profissional a **descobrir, acessar, interpretar criticamente, avaliar, gerenciar, analisar e comunicar dados de forma ética e responsável**, compreendendo o seu ciclo de vida e seu impacto social.

#### C. As Cinco Dimensões da Competência em Dados (Calzada Prado & Marzal, 2013):
1. **Descoberta e Acesso (*Finding & Accessing Data*):** Saber navegar em repositórios de dados abertos (ex.: Portal de Dados Abertos da Câmara, dados.gov.br), consultar APIs governamentais e recuperar datasets de pesquisas em formatos padronizados (CSV, JSON).
2. **Avaliação Crítica de Dados (*Critical Data Evaluation*):** Capacidade de analisar a proveniência dos dados, a integridade da amostra, a representatividade estatística, a autoridade da agência coletora e eventuais vieses algorítmicos ou distorções metodológicas.
3. **Gestão e Curadoria de Dados (*Data Management & Curation*):** Habilidades para organizar tabelas, aplicar metadados padronizados, elaborar Planos de Gestão de Dados (PGD), garantir a segurança e conformidade com a LGPD (Lei 13.709/2018) e assegurar a preservação perene.
4. **Análise e Interpretação de Dados (*Data Analysis & Interpretation*):** Domínio de noções fundamentais de estatística descritiva (média, mediana, desvio-padrão), capacidade de ler e cruzar tabelas e habilidade de não confundir mera correlação com causalidade.
5. **Visualização e Comunicação Ética (*Ethical Data Communication & Visualization*):** Capacidade de produzir gráficos honestos (evitando escalas truncadas e distorções gráficas manipuladoras), criar narrativas orientadas por dados (*data storytelling*) e citar formalmente datasets atribuindo identificadores persistentes (como DOIs).

#### D. Matriz Comparativa: Information Literacy versus Data Literacy

| Critério de Comparação | Competência em Informação (*Information Literacy*) | Competência em Dados (*Data Literacy*) |
| :--- | :--- | :--- |
| **Objeto Primordial** | Textos, artigos, livros, relatórios e documentos bibliográficos acabados. | Dados brutos, numéricos, tabulares, datasets, logs e fluxos de APIs. |
| **Operação Cognitiva Central** | Interpretação textual, hermenêutica, síntese conceitual e julgamento de autoridade. | Raciocínio quantitativo, análise estatística, limpeza de dados e visualização gráfica. |
| **Processamento Típico** | Leitura analítica humana de argumentos e ideias. | Processamento computacional por algoritmos, planilhas, scripts e consultas SQL. |
| **Padrões de Referência** | Diretrizes da ACRL/ALA, Normas ABNT de citação textual (NBR 10520). | Padrões de metadados de dados (DDI, Frictionless Data), princípios FAIR e W3C CSV on the Web. |
| **Papel do Bibliotecário** | Mediador da leitura, instrutor de busca bibliográfica e curador de acervos. | *Data Librarian* e *Data Steward*, curador de repositórios de dados de pesquisa e mediador de dados abertos. |

---

### 7. Quadro Sinóptico de Cascas de Banana do Cebraspe em Referência e Usuários

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"Na oitava etapa do processo de referência de Denis Grogan (A Solução), o bibliotecário decide unilateralmente se a pesquisa foi concluída."* | **ERRADO** | A Solução é uma avaliação de competência **EXCLUSIVA DO USUÁRIO** (somente ele sabe se seu problema foi resolvido). |
| *"No modelo de Denis Grogan, a formulação da estratégia de busca precede o processo de negociação da questão com o usuário."* | **ERRADO** | A Questão Negociada (etapa 4) **antecede** a Estratégia de Busca (etapa 5). Não se pode planejar a busca antes de negociar a dúvida. |
| *"Segundo Brenda Dervin, a informação é um objeto físico estático independente do contexto existencial do indivíduo."* | **ERRADO** | No *Sense-Making*, a informação é **construída ativamente** pelo sujeito para transpor lacunas cognitivas situadas. |
| *"A competência em dados resume-se à busca tradicional de livros em catálogos eletrônicos de bibliotecas."* | **ERRADO** | Competência em dados foca em **dados brutos e estruturados (datasets, tabelas, APIs)**, análise quantitativa e curadoria. |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Ética Profissional e Legislação (sub-1-4):** Conduta e sigilo na entrevista de referência.
* **Produtos e Serviços Informacionais (sub-5-2):** Conversão da necessidade do usuário em relatórios temáticos e notas informacionais.
`,
  checkpoints: [
    {
      id: 'cp-4-4-1',
      pergunta: 'Micro-Checkpoint 1: As Etapas do Processo de Referência de Grogan',
      item: 'No processo de referência conceituado por Denis Grogan, a sequência lógica de etapas compreende: problema, necessidade de informação, questão inicial, questão negociada, estratégia de busca, processo de busca, resposta e solução.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a exata ordenação de 8 passos formulada por Grogan e sistematicamente exigida pela banca Cebraspe.',
    },
    {
      id: 'cp-4-4-2',
      pergunta: 'Micro-Checkpoint 2: Necessidade, Demanda e Uso (Maurice Line e Nice Figueiredo)',
      item: 'No âmbito dos estudos de usuários e do comportamento informacional, os conceitos de necessidade, demanda e uso de informação são perfeitamente sinônimos e equivalentes, uma vez que toda necessidade sentida pelo usuário é exteriorizada de forma fidedigna como demanda e se converte diretamente em uso do acervo.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme Maurice Line (1974) e Nice Menezes de Figueiredo (1994), necessidade, demanda e uso constituem categorias conceituais distintas: a necessidade é a carência cognitiva real (muitas vezes latente ou inconsciente); a demanda é o que o usuário efetivamente formaliza e solicita ao sistema ou bibliotecário; e o uso é a leitura, assimilação e aplicação prática real da informação recuperada.',
    },
    {
      id: 'cp-4-4-3',
      pergunta: 'Micro-Checkpoint 3: Competência em Informação versus Competência em Dados',
      item: 'A competência em dados (data literacy) é sinônima da competência informacional tradicional (information literacy), circunscrevendo-se à habilidade de localizar artigos de periódicos científicos em catálogos eletrônicos de bibliotecas.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme a literatura especializada (Calzada Prado & Marzal; Koltay) e o edital Cebraspe (item 1.5 do Bloco D), a competência em dados (data literacy) diferencia-se da competência informacional: lida com a capacidade específica de descobrir, avaliar criticamente, gerenciar, analisar e comunicar conjuntos de dados brutos e estruturados (datasets, tabelas, dados abertos e APIs), demandando raciocínio quantitativo e curadoria que transcendem a busca de fontes textuais bibliográficas.',
      versao_correta: 'A competência em dados difere da competência informacional por lidar com a descoberta, avaliação crítica, gestão, análise quantitativa e visualização ética de conjuntos de dados brutos e estruturados.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-4-4-1',
        periodo: '1958',
        disciplina: 'DSI (Disseminação Seletiva)',
        focoPrincipal: 'Criação do conceito de Selective Dissemination of Information com cruzamento automatizado de perfis',
        figuraChave: 'Hans Peter Luhn',
      },
      {
        id: 'tl-4-4-2',
        periodo: '1979 / 1995',
        disciplina: 'Serviço de Referência',
        focoPrincipal: 'Sistematização do processo de referência em 8 etapas e a prática da entrevista',
        figuraChave: 'Denis Grogan',
      },
      {
        id: 'tl-4-4-3',
        periodo: '1981 / 1983',
        disciplina: 'Comportamento Informacional',
        focoPrincipal: 'Ruptura com o modelo tradicional: modelos de Wilson e teoria do Sense-Making de Dervin',
        figuraChave: 'Tom Wilson e Brenda Dervin',
      },
      {
        id: 'tl-4-4-4',
        periodo: '2013 / 2017',
        disciplina: 'Letramento em Dados (Data Literacy)',
        focoPrincipal: 'Estruturação das 5 dimensões de competência em dados e formação de data librarians',
        figuraChave: 'Javier Calzada Prado e Tibor Koltay',
      },
    ],
    autores: [
      {
        id: 'aut-4-4-1',
        nome: 'Denis Grogan',
        ano: 1995,
        obraPrincipal: 'A prática do serviço de referência',
        ideiaChave: 'As 8 etapas do processo de referência, a dinâmica da entrevista e a mitigação da ansiedade informacional.',
        chipPegadinha: 'A questão inicial quase nunca expressa a necessidade real do usuário; a questão negociada resulta da entrevista.',
      },
      {
        id: 'aut-4-4-2',
        nome: 'Brenda Dervin',
        ano: 1983,
        obraPrincipal: 'An overview of sense-making research: concepts, methods, and results',
        ideiaChave: 'A abordagem do Sense-Making: o usuário construindo pontes para superar lacunas de incerteza no mundo.',
        chipPegadinha: 'Sense-Making usa métodos qualitativos, não quantitativos.',
      },
      {
        id: 'aut-4-4-3',
        nome: 'Hans Peter Luhn',
        ano: 1958,
        obraPrincipal: 'A Business Intelligence System',
        ideiaChave: 'Criador da DSI: perfil do usuário, perfil dos documentos, matching e feedback contínuo.',
        chipPegadinha: 'DSI é serviço de alerta/notificação corrente personalizado, não mera lista geral de novidades.',
      },
      {
        id: 'aut-4-4-4',
        nome: 'Javier Calzada Prado e Miguel Ángel Marzal',
        ano: 2013,
        obraPrincipal: 'Incorporating Data Literacy into Information Literacy Programs',
        ideiaChave: 'As 5 dimensões da competência em dados: acesso, avaliação, curadoria, análise e visualização ética.',
        chipPegadinha: 'Data Literacy transcende textos; lida com datasets, tabelas e raciocínio estatístico.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-4-4-1',
        afirmacao: 'O serviço de referência é considerado uma atividade meramente intermediária e de apoio administrativo em uma biblioteca, similar à encadernação e ao reparo físico de obras.',
        gabarito: 'E',
        porQue: 'O serviço de referência é a atividade-fim primordial da biblioteca, onde se concretiza a mediação humana direta entre o conhecimento e o usuário.',
      },
      {
        id: 'peg-4-4-2',
        afirmacao: 'A competência em dados exclui qualquer preocupação ética com privacidade ou transparência, concentrando-se exclusivamente em comandos matemáticos de software estatístico.',
        gabarito: 'E',
        porQue: 'A dimensão ética, a conformidade legal (LGPD), a proveniência e a responsabilidade social são pilares centrais da competência em dados.',
      },
    ],
  },
};
