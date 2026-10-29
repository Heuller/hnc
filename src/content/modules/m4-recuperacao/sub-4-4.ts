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
    "termo": "Resposta e solução",
    "definicao": "Resultado de busca precisa ser avaliado quanto ao propósito.",
    "exemploBiblioteca": "Grogan recomenda avaliação conjunta, sem declarar exclusividade unilateral."
  },
  {
    "termo": "Demanda e uso",
    "definicao": "Pedido expresso e uso efetivo podem divergir.",
    "exemploBiblioteca": "Download não prova leitura; uso casual pode ocorrer sem pedido à biblioteca."
  }
],
  descricaoCurta: "Reconhecer oito passos didáticos e participação conjunta na avaliação. Relacionar tipo de consulta e complexidade sem automatismos. Distinguir necessidade, desejo, demanda e uso na entrevista. Combinar métodos reconhecendo vieses e limites das evidências. Definir DSI como serviço orientado por perfil, sem exigir uma tecnologia única. Comparar modelos pelo seu foco e pelas hipóteses de comportamento. Aplicar competências em informação e dados sem uma fronteira artificial entre formatos. Julgar afirmações por contexto e referência, evitando exclusividades indevidas.",
  tempoEstimadoMinutos: 37,
  autoresChave: [
  "Denis Grogan — A prática do serviço de referência (1995; reimpressão 2001)",
  "Cunha, Amaral e Dantas — Manual de estudo de usuários da informação (2015)",
  "Robert S. Taylor — Question-Negotiation and Information Seeking in Libraries (1968)",
  "Carol Kuhlthau — Information Search Process",
  "ACRL — Framework for Information Literacy for Higher Education",
  "Calzada Prado e Marzal — Incorporating Data Literacy into Information Literacy Programs (2013)"
],
  alertasCebraspe: [
  "Brevidade não determina complexidade ou risco de erro.",
  "Registro de acesso não comprova identidade, leitura ou utilidade.",
  "A formação informacional possui escopo amplo e interseções com competência em dados."
],
  teoriaDensaMarkdown: "### O Processo de Referência segundo Denis Grogan (1995)\n\nNa obra clássica *A Prática do Serviço de Referência* (presente em nosso acervo em `Recuperação, fontes, referência e usuários`), **Denis Grogan**, ao discutir a assistência pessoal de referência em sentido estrito, retoma formulação de Samuel Rothstein sobre o contato pessoal e a assistência direta prestada pelo bibliotecário ao leitor em busca de conhecimento.\n\n```timeline\nE1 | 1. O Problema | Ator: Usuário | Usuário vivencia um impasse prático, acadêmico ou dilema de trabalho\n---> Tomada de Consciência\nE2 | 2. A Necessidade de Informação | Ator: Usuário | Reconhecimento da lacuna cognitiva: percepção de que precisa de ajuda externa\n---> Expressão Verbal\nE3 | 3. A Questão Inicial | Ator: Usuário | Pergunta verbalizada no balcão de referência — pode exigir esclarecimento, mas não é necessariamente vaga ou distorcida\n---> Entrevista de Referência\nE4 | 4. A Questão Negociada | Atores: Bibliotecário & Usuário | Filtragem de ambiguidades e identificação técnica da real necessidade informacional\n---> Formulação Estruturada\nE5 | 5. A Estratégia de Busca | Ator: Bibliotecário | Tradução na linguagem do sistema: termos, vocabulário controlado e operadores booleanos\n---> Execução Técnica\nE6 | 6. O Processo de Busca | Ator: Bibliotecário | Navegação concreta em catálogos, acervos, bases de dados ou repositórios\n---> Recuperação Documental\nE7 | 7. A Resposta | Ator: Bibliotecário | Entrega física ou digital dos documentos, referências ou dados pertinentes\n---> Validação Pragmática\nE8 | 8. A Solução | Ator: Usuário | Avaliação do produto com o consulente: a resposta atende ao propósito?\n```\n\n#### As Oito Etapas Decisórias e os Papéis dos Atores\nGrogan apresenta os oito passos **para fins didáticos**, advertindo que há retornos, fusões e variações. A descrição não prescreve um ritual linear para toda consulta:\n1. **O Problema:** Situação fática ou dilema intelectual que o usuário precisa resolver em seu trabalho ou estudo. **Ator: Usuário**.\n2. **A Necessidade de Informação:** O reconhecimento interno de que o conhecimento acumulado é insuficiente e que dados externos são necessários. **Ator: Usuário**.\n3. **A Questão Inicial:** A verbalização da dúvida apresentada no balcão de referência, telefone ou chat. Pode ser clara ou exigir esclarecimentos; não se deve presumir incompetência de todo consulente. **Ator: Usuário**.\n4. **A Questão Negociada:** O cerne da mediação do bibliotecário. Por meio da **entrevista de referência**, o profissional filtra ambiguidades e formula a verdadeira questão técnica a ser respondida. **Atores: Bibliotecário e Usuário em cooperação**.\n5. **A Estratégia de Busca:** A tradução da questão negociada na linguagem do sistema (seleção de vocabulários controlados, tesauros, campos e operadores booleanos). **Ator: Bibliotecário**.\n6. **O Processo de Busca:** A navegação concreta em catálogos, estantes, bases de dados comerciais ou repositórios digitais. **Ator: Bibliotecário**.\n7. **A Resposta:** O produto informativo entregue ao usuário (livros, artigos, relatórios ou referências). **Ator: Bibliotecário**.\n8. **A Solução:** A etapa final de validação pragmática. A resposta é solução potencial. Nas pp. 54–55, o autor recomenda que **bibliotecário e consulente avaliem juntos o produto** e cheguem de comum acordo ao encerramento. O uso posterior pelo usuário pode ocorrer fora do controle do profissional. **Não é correto atribuir a Grogan julgamento exclusivamente unilateral**, seja do bibliotecário, seja do usuário.\n\n**Aplicação e recuperação:** O usuário recebe referências tecnicamente corretas, mas explica que precisava de texto vigente em 2020. A resposta ainda não é solução adequada. Profissional e consulente reavaliam o produto e ajustam a busca. Essa volta não viola o modelo de Grogan, que admite retornos.\n\n### Tipologia de consultas: diferenciar tarefa e esforço necessário\n\nUma tipologia difundida na literatura de referência, associada a William Katz, distingue orientação/direção, pronta-referência, busca específica e pesquisa. Os exemplos a seguir são **hipotéticos**. Complexidade e fonte dependem da demanda concreta; uma pergunta aparentemente factual pode exigir verificação extensa:\n\n| Categoria da Questão (Katz) | Complexidade | Fontes Utilizadas | Exemplo Prático na Câmara dos Deputados |\n| :--- | :--- | :--- | :--- |\n| **1. Questões de Direção / Administrativas** | Mínima (não bibliográfica). | Pode exigir guia, mapa ou regulamento atualizado; não significa ausência necessária de documento. | *\"Onde fica o banheiro?\", \"Qual o horário de funcionamento da Seção de Raras?\", \"Onde tiro cópias?\"* |\n| **2. Questões de Pronta-Referência (*Ready Reference*)** | Baixa / Factual pontual. | Obras de referência rápida (dicionários, anuários estatísticos, diretórios). | *\"Qual é o número da Lei de Responsabilidade Fiscal?\", \"Quem é o atual Presidente da Câmara dos Deputados?\"* |\n| **3. Questões de Pesquisa Específica (*Specific Search*)** | Média. | Catálogos em linha (OPAC), bibliografias especializadas e bases referenciais. | *\"Quais monografias a biblioteca possui sobre a reforma tributária aprovada na Emenda Constitucional 132?\"* |\n| **4. Questões de Pesquisa Ampla / Avançada (*Research / Extended*)** | Máxima. | Múltiplas bases heterogêneas, literatura cinzenta, comutação e consulta a especialistas. | *\"Elaborar dossiê bibliográfico e jurisprudencial exaustivo sobre a evolução do controle de constitucionalidade de medidas provisórias nos últimos 20 anos.\"* |\n\n**Aplicação e recuperação:** “Quem ocupava a presidência em determinada sessão?” parece pronta-referência, mas homonímia de datas e substituições pode exigir atas e registros. A forma curta da pergunta não prova esforço mínimo.\n\n### A Entrevista de Referência, Estudos de Usuários e a Tríade de Maurice Line (Edital Bloco E, itens 3.2 e 3.5)\n\nNo serviço de referência moderno, a interação dialógica entre o bibliotecário e o consulente constitui o momento culminante da mediação humana da informação (**Denis Grogan, 1995; William Katz, 2002; Robert S. Taylor, 1968; Maurice Line, 1974; Nice Menezes de Figueiredo, 1994**).\n\n#### A. Os Quatro Níveis de Necessidade de Robert S. Taylor (1968)\nEm seu estudo seminal *Question-Negotiation and Information Seeking in Libraries*, Taylor demonstrou que a dúvida percorre quatro estados cognitivos na mente do usuário antes de alcançar o sistema:\n* **$Q_1$ — Necessidade Visceral:** Necessidade ainda não expressa, percebida como insatisfação ou lacuna; não se converte essa caracterização em diagnóstico psicológico universal de incapacidade total (*informação intangível*).\n* **$Q_2$ — Necessidade Consciente:** A necessidade mentalmente reconhecida e articulada em pensamento interior. O usuário sabe o que quer para si, mas a ideia ainda carece de estruturação formal.\n* **$Q_3$ — Necessidade Formalizada:** A formulação linguística explícita da dúvida comunicada ao bibliotecário. É quase sempre imperfeita, vaga ou distorcida (há aproximação didática com a questão inicial, sem equivalência perfeita entre os modelos).\n* **$Q_4$ — Necessidade Comprometida com o Sistema:** A questão traduzida e adaptada para os termos controlados, campos e operadores do sistema de recuperação da biblioteca (adaptação ao que se acredita que o sistema pode responder; não é sinônimo necessário de uma consulta formal em descritores).\n\n#### B. Roteiro prático de entrevista: síntese didática, não cinco fases canônicas atribuídas a dois autores\n1. **Acolhimento Empático e Abertura:** Estabelecer clima de confiança e receptividade, quebrando a chamada *\"ansiedade de biblioteca\"* (*library anxiety*, Constance Mellon, 1986), fenômeno de ansiedade que pode afetar a interação; não se rotula o usuário como portador de um vício.\n2. **Negociação da Pergunta (Técnica do Funil):** O bibliotecário conduz a entrevista partindo de **perguntas abertas** (*\"Conte-me sobre a finalidade da pesquisa no projeto de lei\"*), passando por **perguntas exploratórias** (*\"Quais correntes doutrinárias ou precedentes já foram mapeados?\"*) e concluindo com **perguntas fechadas** (*\"A busca deve se restringir às decisões do STF dos últimos 5 anos?\"*).\n3. **Tradução e Formulação da Estratégia de Busca:** Conversão da questão negociada ($Q_4$) em descritores de tesauro (ex.: vocabulário controlado pertinente à base; MFN pode designar número de registro em sistemas e não é nome de tesauro), operadores booleanos (AND, OR, NOT) e filtros de data e idioma.\n4. **Execução e Avaliação Preliminar Conjunta:** Apresentação de amostra dos primeiros registros recuperados para verificar a pertinência e calibrar a precisão antes do levantamento exaustivo.\n5. **Retroalimentação (Feedback) e Encerramento:** Confirmação de que o produto informativo atendeu à necessidade visceral ($Q_1$) e disponibilização de canais para desdobramentos adicionais.\n\n#### C. A Tríade Canônica: Necessidade vs. Demanda vs. Uso (Maurice Line, 1974; Nice Figueiredo, 1994)\nO Cebraspe explora sistematicamente a falsa equivalência entre esses três conceitos:\n\n$\\text{Necessidade (Need)} \\neq \\text{Demanda (Demand)} \\neq \\text{Uso (Use)}$\n\n* **Necessidade de Informação (*Information Need*):**\n  * Representa o estado real de carência informacional indispensável para que o indivíduo execute suas tarefas, tome decisões ou resolva impasses de pesquisa.\n  * Pode ser **consciente ou latente/inconsciente**. Muitas vezes o usuário desconhece que precisa de determinada norma ou dado estatístico até que um mediador o alerte.\n* **Demanda de informação (*Demand*), distinta de desejo (*Want*):**\n  * É o que o indivíduo pede. Pode refletir desejo e/ou necessidade, mas também pode ser pedido algo desnecessário. **Desejo** é o que gostaria de ter, ainda que não peça. Demanda não é necessariamente subconjunto fiel de uma necessidade objetiva.\n  * *Por que a demanda difere da necessidade?* Porque o usuário pode subestimar o acervo da biblioteca, sentir vergonha de expor suas dúvidas, usar termos errôneos ou pedir menos do que realmente precisa.\n* **Uso da Informação (*Information Use*):**\n  * É o consumo efetivo, a leitura assimilada e a aplicação prática das fontes recuperadas na tomada de decisão legislativa ou produção acadêmica.\n  * Nem tudo o que foi demandado é de fato usado (livros retirados que não chegam a ser lidos); e muito do que é usado advém de canais informais (conversas com pares em gabinetes) sem ter transitado pela biblioteca.\n\n**Aplicação e recuperação:** Alguém deseja um livro, pede outro por achar que o primeiro não existe e usa uma nota técnica encontrada casualmente. Desejo, demanda, necessidade e uso não formam uma linha obrigatória. O profissional deve esclarecer sem pressupor que sabe unilateralmente toda necessidade.\n\n### Metodologias Diretas e Indiretas de Estudos de Usuários Revelam Necessidades Reais no Legislativo\n\nMétodos podem combinar contato com pessoas e análise de registros. A classificação direto/indireto varia conforme a referência; explicite procedimento, amostra e limites:\n\n| Modalidade | Metodologias Empregadas | Vantagens Principais | Limitações e Riscos Críticos |\n| :--- | :--- | :--- | :--- |\n| **Métodos Diretos**<br>*(Interação ativa com os usuários)* | • **Questionários padronizados** (estruturados ou semiestruturados);<br>• **Entrevistas em profundidade** individuais;<br>• **Grupos Focais (*Focus Groups*)** (6 a 12 participantes);<br>• **Técnica do Incidente Crítico (John C. Flanagan, 1954)**: relato de eventos reais e marcantes de sucesso ou fracasso recente de busca;<br>• **Observação participante / Etnografia**. | Capta motivações subjetivas, percepções de valor, expectativas e sentimentos afetivos (modelo ISP de Kuhlthau). | Baixa taxa de retorno em questionários; viés de complacência (o usuário responde o que acha que o bibliotecário gostaria de ouvir); alto custo e tempo. |\n| **Métodos Indiretos**<br>*(Análise de registros sem contato direto em certos desenhos; análise de logs ainda exige governança e cuidado com privacidade)* | • **Análise de Logs de Busca (*Transaction Log Analysis*)**: registros automáticos de cliques, termos sem recuperação (*zero hits*) e rotas no OPAC;<br>• **Análise de Citações / Bibliometria**: análise das referências citadas nos pareceres e relatórios técnicos das consultorias da Câmara;<br>• **Estatísticas de Circulação e Empréstimo**: taxas de rotação de acervo por classe decimal (CDD/CDU). | Registros de ações que reduzem certas limitações do autorrelato; seleção, instrumentação, bots e ciência do monitoramento podem afetá-los. Custo e objetividade absoluta não são garantidos. | Não revelam o porquê do comportamento; registram o documento baixado, mas não provam se ele foi efetivamente lido ou útil. |\n\n#### Casos hipotéticos de aplicação, sem atribuir atendimentos reais à Câmara\n\n* **Caso 1: Balcão Presencial na Biblioteca Pedro Aleixo (Técnica do Funil)**\n  * *Situação:* Assessor parlamentar chega ao balcão de referência solicitando: *\"Preciso urgentemente de tudo o que a biblioteca tiver sobre reforma tributária\"*.\n  * *Intervenção do Bibliotecário:* O profissional percebe que a questão é excessivamente genérica ($Q_3$) e aplica o funil de perguntas. Pergunta aberta: *\"Qual é o foco da emenda que o deputado apresentará?\"*. O assessor esclarece que a discussão versa sobre a não cumulatividade plena do IBS e da CBS na aquisição de insumos de tecnologia. Pergunta fechada: *\"A pesquisa deve focar a jurisprudência do STF ou doutrina de Direito Tributário comparado?\"*.\n  * *Resultado:* A questão negociada ($Q_4$) é delimitada para *\"precedentes do STF sobre creditamento de ICMS/IBS em insumos digitais\"*, orientando a busca e a verificação do que de fato existe. Não se inventa a existência de três acórdãos específicos nem prazo real de entrega; as competências tributárias e datas devem ser analisadas conforme a norma.\n* **Caso 2: Atendimento Digital Remoto via Intranet / Chat Especializado**\n  * *Situação:* Consultor legislativo lotado em comissão parlamentar abre chamado eletrônico solicitando: *\"Modelos de relatórios sobre inteligência artificial\"*.\n  * *Intervenção do Bibliotecário:* Mediante contato síncrono via chat, o bibliotecário identifica que a demanda visa instruir a Comissão Especial sobre o Marco Regulatório da Inteligência Artificial (PL 2338/2023). O bibliotecário poderia consultar tramitação e documentos oficiais, verificar relações e identificadores, compará-los com fontes europeias pertinentes e elaborar uma **Linha do Tempo Normativa** acompanhada de **Mapa de Atores** dos setores ouvidos nas audiências públicas.\n\n**Aplicação e recuperação:** Um portal registra cem downloads, mas não informa cem leitores satisfeitos. Logs e entrevistas respondem perguntas distintas; cruzá-los melhora interpretação. Participantes que não responderam ao questionário podem ter necessidades diferentes dos que responderam.\n\n### A Disseminação Seletiva da Informação (DSI) de Hans Peter Luhn (1958)\n\nCriada pelo pesquisador da IBM **Hans Peter Luhn**, a DSI é o serviço proativo de alerta corrente no qual o sistema toma a iniciativa de informar o usuário:\n\n```timeline\nP | 1. Perfil de Interesse do Usuário | Mapeamento Temático | Cadastro formal de termos, descritores, operadores booleanos e áreas de pesquisa do leitor\n---> Cruzamento com Novas Entradas\nD | 2. Perfil dos Novos Documentos | Ingestão no Acervo | Metadados e indexação das obras recém-adquiridas incorporadas ao catálogo\n---> Algoritmo de Similaridade\nM | 3. Mecanismo de Casamento (Matching) | Filtro Automatizado | Interseção matemática entre os termos do perfil do usuário e as novas aquisições\n---> Canal Proativo\nN | 4. Notificação Direcionada | Alerta Antecipado | Disparo de avisos eletrônicos (e-mail, RSS, app) com links diretos aos itens pertinentes\n---> Calibração Algorítmica\nF | 5. Retroalimentação (Feedback) | Ajuste Dinâmico | Usuário avalia pertinência (útil vs. inútil), refinando continuamente o perfil cadastrado\n```\n\n#### A. Comparar tecnologias de DSI sem inventar fronteira rígida entre gerações\n* **DSI de 1ª Geração (Tradicional / Analógica / Em Lote):**\n  * Baseada em cartões perfurados ou perfis fixos de interesse preenchidos em formulários em papel;\n  * Cruzamentos periódicos manuais ou em lotes computacionais (*batch processing*);\n  * Alertas físicos encaminhados em fichas impressas ou boletins datilografados;\n  * Feedback lento e baixa flexibilidade de calibração.\n* **DSI de 2ª Geração (Digital / Automatizada / Semântica):**\n  * Perfis podem ser explicitamente declarados ou ajustados com sinais autorizados. DSI digital **não exige machine learning nem coleta irrestrita do histórico**;\n  * Alertas periódicos ou próximos do tempo real, conforme configuração, enviados via feeds RSS, e-mails automatizados, APIs e notificações em aplicativos móveis;\n  * *Feedback* com um único clique (botão de \"relevante/não relevante\"), ajustando os pesos estatísticos do perfil do usuário em tempo de execução.\n\n**Aplicação e recuperação:** Um perfil explícito sobre acessibilidade recebe alerta semanal de novas referências e permite marcar pertinência. Isso pode ser DSI sem IA e sem vigiar toda navegação. Um boletim geral idêntico a todos não ganha seletividade individual apenas por ser eletrônico.\n\n### Modelos Canônicos de Comportamento Informacional (*Information Behavior*)\n\n1. **Modelo de Tom D. Wilson (1981 / 1996):**\n   * A necessidade de informação não nasce no vácuo; ela é uma **necessidade secundária** gerada por necessidades primárias (fisiológicas, afetivas ou cognitivas) no contexto de papéis sociais do indivíduo.\n   * Introduz as **variáveis intervenientes**: barreiras psicológicas, demográficas, ambientais e características da fonte que podem impedir ou desviar o comportamento de busca.\n2. **Abordagem do *Sense-Making* de Brenda Dervin (1983 / 1992):**\n   * O ser humano é visto como um viajante que se desloca no tempo e no espaço construindo sentido para sua vida.\n   * **Elementos para analisar a construção de sentido:** não chamar de triângulo uma enumeração de quatro componentes\n     * **Situação:** O contexto histórico e espaço-temporal onde o indivíduo está inserido;\n     * **Lacuna (*Gap*):** A barreira cognitiva, dúvida ou incerteza que interrompe a sua caminhada;\n     * **Ponte:** As informações, ideias e estratégias mobilizadas para superar a barreira;\n     * **Resultado / Uso:** A nova compreensão alcançada que permite continuar a caminhada.\n3. **Modelo ASK (*Anomalous State of Knowledge*) de Nicholas Belkin (1980):**\n   * O usuário busca informação em um sistema precisamente porque reconhece uma **anomalia ou lacuna em seu estado de conhecimento**. Por não dominar o tema, ele tem extrema dificuldade de formular a consulta exata em termos técnicos no início da interação.\n4. **Modelo ISP (*Information Search Process*) de Carol Kuhlthau (1991):**\n   * Integra três domínios do ser humano na busca: **Sentimentos (afetivo)**, **Pensamentos (cognitivo)** e **Ações (físico)**.\n   * Divide a pesquisa em 6 estágios: Iniciação $\\rightarrow$ Seleção $\\rightarrow$ Exploração $\\rightarrow$ Formulação $\\rightarrow$ Coleta $\\rightarrow$ Apresentação.\n   * Descreve padrões frequentes: exploração pode aumentar incerteza, enquanto formulação de foco pode favorecer confiança. Não prediz sentimentos idênticos nem satisfação obrigatória para toda pessoa.\n\n**Aplicação e recuperação:** Após ler fontes contraditórias, a pessoa fica mais incerta antes de formular foco. Isso é compatível com ISP e não demonstra necessariamente fracasso. ASK focaliza estado de conhecimento; Sense-Making, construção situada de sentido; não se tornam o mesmo modelo por falar em lacuna.\n\n### Competência em Informação (*Information Literacy*) e Competência em Dados (*Data Literacy*)\n\nO edital nº 1/2026 exige explicitamente o domínio de **competência em informação e competência em dados** (item 1.5 do Bloco D). Ambas integram o arcabouço contemporâneo de mediação bibliotecária, mas possuem objetos, métodos e competências nucleares distintas.\n\n#### A. Competência em Informação (*Information Literacy*)\n* **Origem e Marcos Conceituais:** Termo cunhado por Paul Zurkowski em 1974 e consolidado pela *American Library Association* (ALA/ACRL, 1989), além das históricas Declarações de Praga (2003 - Rumo a uma Sociedade Letrada em Informação) e Alexandria (2005 - Farol da Sociedade da Informação).\n* **Definição:** É a capacidade holística de o indivíduo **reconhecer quando necessita de informação, saber localizá-la, avaliá-la criticamente em sua autoridade, exatidão e relevância, e utilizá-la de forma ética, legal e eficaz**.\n* **Aplicação Legislativa:** Em um programa hipotético de formação parlamentar, pode capacitar assessores a identificar fontes doutrinárias fidedignas, avaliar jurisprudência e combater vieses informacionais.\n\n#### B. Competência em Dados (*Data Literacy*): A Nova Fronteira\nCom a proliferação da ciência orientada a dados (*data science*), do governo aberto e da inteligência artificial, emergiu a necessidade de competências especializadas para lidar com dados brutos e semiestruturados.\n* **Autores Canônicos de Referência:** **Javier Calzada Prado e Miguel Ángel Marzal (2013)** (*Incorporating Data Literacy into Information Literacy Programs: Core Competencies and Contents*) e **Tibor Koltay (2017)** (*Data literacy for researchers and data librarians*).\n* **Definição Canônica:** É o conjunto de conhecimentos, habilidades e atitudes que capacitam o cidadão ou profissional a **descobrir, acessar, interpretar criticamente, avaliar, gerenciar, analisar e comunicar dados de forma ética e responsável**, compreendendo o seu ciclo de vida e seu impacto social.\n\n#### C. Competências em dados: categorias e aplicações\n\nCalzada Prado e Marzal (2013) organizam o tema em compreensão dos dados; localização/obtenção; leitura, interpretação e avaliação; gestão; uso. Não se deve atribuir a eles, como transcrição exata, outra lista que omita compreensão e transforme visualização em categoria independente. Para estudar, aplique:\n\n1. **Compreender:** reconhecer tipo, geração, unidade e contexto do dado.\n2. **Obter:** localizar fontes, formatos, licenças e condições de acesso.\n3. **Interpretar e avaliar:** examinar proveniência, amostra, denominadores e limitações.\n4. **Gerenciar:** organizar, documentar, proteger e manter os dados segundo responsabilidades.\n5. **Usar:** analisar, sintetizar e comunicar com ética, incluindo atribuição e visualizações adequadas.\n\nSão exemplos didáticos das categorias, não lista fechada de ferramentas. Não é necessário programar todo tratamento nem supor que apenas dados numéricos sejam dados.\n\n#### D. Matriz Comparativa: Information Literacy versus Data Literacy\n\n| Critério de Comparação | Competência em Informação (*Information Literacy*) | Competência em Dados (*Data Literacy*) |\n| :--- | :--- | :--- |\n| **Escopo** | Informação em diferentes formas, incluindo dados e produção participativa; não se restringe a textos acabados. | Aprofunda compreensão e uso de dados em variados tipos e formas; há interseções com competência em informação. |\n| **Operação Cognitiva Central** | Interpretação textual, hermenêutica, síntese conceitual e julgamento de autoridade. | Raciocínio quantitativo, análise estatística, limpeza de dados e visualização gráfica. |\n| **Ferramentas possíveis** | Busca, leitura, análise e produção, também com recursos computacionais. | Raciocínio, documentação, planilhas ou programação conforme tarefa; uso de algoritmo não é condição exclusiva. |\n| **Padrões de Referência** | Diretrizes da ACRL/ALA, Normas ABNT de citação textual (NBR 10520). | Padrões de metadados de dados (DDI, Frictionless Data), princípios FAIR e W3C CSV on the Web. |\n| **Papel do Bibliotecário** | Mediador da leitura, instrutor de busca bibliográfica e curador de acervos. | *Data Librarian* e *Data Steward*, curador de repositórios de dados de pesquisa e mediador de dados abertos. |\n\n**Aplicação e recuperação:** Uma tabela traz taxa sem informar denominador. A formação deve ensinar a perguntar por população, período, método e licença, além de abrir o CSV. Informação e dados exigem avaliação crítica; um texto pode conter dados e um dataset pode exigir interpretação qualitativa.\n\n### Enunciados autorais: não substituir mediação por regras absolutas\n\n| Afirmação autoral para análise | Gabarito | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"Na oitava etapa do processo de referência de Denis Grogan (A Solução), o bibliotecário decide unilateralmente se a pesquisa foi concluída.\"* | **ERRADO** | Grogan recomenda avaliação conjunta do produto por bibliotecário e consulente; o uso posterior pode escapar ao controle do profissional. |\n| *\"No modelo de Denis Grogan, a formulação da estratégia de busca precede o processo de negociação da questão com o usuário.\"* | **ERRADO** | A Questão Negociada (etapa 4) **antecede** a Estratégia de Busca (etapa 5). A sequência didática coloca negociação antes da estratégia; na prática, pode haver busca exploratória, retornos e reformulação. |\n| *\"Segundo Brenda Dervin, a informação é um objeto físico estático independente do contexto existencial do indivíduo.\"* | **ERRADO** | No *Sense-Making*, a informação é **construída ativamente** pelo sujeito para transpor lacunas cognitivas situadas. |\n| *\"A competência em dados resume-se à busca tradicional de livros em catálogos eletrônicos de bibliotecas.\"* | **ERRADO** | Competência em dados foca em **dados brutos e estruturados (datasets, tabelas, APIs)**, análise quantitativa e curadoria. |\n\n**Aplicação e recuperação:** “Somente o usuário pode participar da avaliação” e “o bibliotecário decide sozinho” exageram em direções distintas. A página 54 de Grogan dá fundamento para rejeitar ambas como descrição fiel do autor.",
  teoriaDidaticaMarkdown: "Grogan: oito passos didáticos, com retornos e avaliação conjunta do produto. Necessidade, desejo, demanda e uso diferem. Logs não provam satisfação; combine métodos e respeite privacidade. DSI depende de perfil e seleção, não necessariamente de IA. Modelos de comportamento têm focos distintos e não predizem toda pessoa. Informação e dados exigem análise crítica, ética e atenção ao contexto.",
  checkpoints: [
  {
    "id": "cp-4-4-1",
    "pergunta": "Micro-Checkpoint 1: As Etapas do Processo de Referência de Grogan",
    "item": "No processo de referência conceituado por Denis Grogan, a sequência lógica de etapas compreende: problema, necessidade de informação, questão inicial, questão negociada, estratégia de busca, processo de busca, resposta e solução.",
    "gabarito": "C",
    "justificativa": "A ordem corresponde à sequência didática. O próprio autor admite vaivéns, fusões e variações; não se transforma a lista em ritual universal.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013)."
  },
  {
    "id": "cp-4-4-2",
    "pergunta": "Micro-Checkpoint 2: Necessidade, Demanda e Uso (Maurice Line e Nice Figueiredo)",
    "item": "No âmbito dos estudos de usuários e do comportamento informacional, os conceitos de necessidade, demanda e uso de informação são perfeitamente sinônimos e equivalentes, uma vez que toda necessidade sentida pelo usuário é exteriorizada de forma fidedigna como demanda e se converte diretamente em uso do acervo.",
    "gabarito": "E",
    "justificativa": "O pedido pode divergir da necessidade e do desejo; uso pode ocorrer casualmente, sem demanda à biblioteca. Consultar as distinções nas pp. 3–5 do manual do projeto.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "versao_correta": "Necessidade, desejo, demanda e uso são conceitos distintos e não se convertem obrigatoriamente uns nos outros."
  },
  {
    "id": "cp-4-4-3",
    "pergunta": "Micro-Checkpoint 3: Competência em Informação versus Competência em Dados",
    "item": "A competência em dados (data literacy) é sinônima da competência informacional tradicional (information literacy), circunscrevendo-se à habilidade de localizar artigos de periódicos científicos em catálogos eletrônicos de bibliotecas.",
    "gabarito": "E",
    "justificativa": "Competência em dados inclui compreender, obter, interpretar/avaliar, gerir e usar dados. Tem interseções com competência em informação, que também não se limita a textos. Não se afirmam dois domínios sem sobreposição.",
    "versao_correta": "Competência em dados aprofunda capacidades relativas a dados e se articula à competência em informação.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013)."
  },
  {
    "id": "rt-4-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Grogan admite retornos e fusões entre passos do processo, embora apresente sequência para fins didáticos.",
    "gabarito": "C",
    "justificativa": "A sequência é instrumento de compreensão, não roteiro inflexível para toda interação.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma pergunta de uma frase garante consulta simples, sem necessidade de verificar contexto ou fonte.",
    "gabarito": "E",
    "justificativa": "Brevidade não determina complexidade ou risco de erro.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar",
    "versao_correta": "A complexidade depende da necessidade e das evidências requeridas."
  },
  {
    "id": "rt-4-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Demanda é o que a pessoa pede e pode divergir do que necessita ou deseja.",
    "gabarito": "C",
    "justificativa": "O manual de Cunha, Amaral e Dantas distingue os conceitos ao discutir Line e Figueiredo.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Cem downloads provam necessariamente cem pessoas que leram e utilizaram a informação.",
    "gabarito": "E",
    "justificativa": "Registro de acesso não comprova identidade, leitura ou utilidade.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar",
    "versao_correta": "Downloads são indicadores de eventos, com limites de interpretação."
  },
  {
    "id": "rt-4-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um serviço com perfil explícito e alertas periódicos pode realizar DSI sem aprendizado de máquina.",
    "gabarito": "C",
    "justificativa": "Seletividade por perfil não exige tecnologia de IA.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-4-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No ISP, mais informação pode aumentar incerteza durante a exploração, sem indicar necessariamente fracasso da busca.",
    "gabarito": "C",
    "justificativa": "É padrão reconhecido pelo modelo, não regra afetiva universal.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-4-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Competência em informação exclui dados, pois se limita obrigatoriamente à leitura de documentos acabados.",
    "gabarito": "E",
    "justificativa": "A formação informacional possui escopo amplo e interseções com competência em dados.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar",
    "versao_correta": "Há interseções; competência em informação não se limita a textos acabados."
  },
  {
    "id": "rt-4-4-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Para Grogan, avaliar a solução é atribuição exclusivamente do usuário, vedada a avaliação conjunta com o bibliotecário.",
    "gabarito": "E",
    "justificativa": "O texto recomenda avaliar juntos o produto e encerrar por entendimento comum.",
    "fonte": "Grogan, A prática do serviço de referência, tradução da 2ª edição, primeira edição brasileira 1995, reimpressão 2001, pp. 50–56; Cunha, Amaral e Dantas, Manual de estudo de usuários (2015), pp. 3–5; Taylor (1968); Kuhlthau, ISP; ACRL Framework; Calzada Prado e Marzal (2013).",
    "editalRef": "Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5",
    "habilidade": "aplicar",
    "versao_correta": "Grogan recomenda avaliação conjunta; uso posterior pode ocorrer fora do controle profissional."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-4-4-fonte-grogan",
      "nome": "Denis Grogan — A prática do serviço de referência (1995; reimpressão 2001)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Denis Grogan — A prática do serviço de referência (1995; reimpressão 2001)",
      "ideiaChave": "PDF do projeto, pp. 50–56: oito passos didáticos, retornos e avaliação conjunta de bibliotecário e consulente.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-4-fonte-manual",
      "nome": "Cunha, Amaral e Dantas — Manual de estudo de usuários da informação (2015)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Cunha, Amaral e Dantas — Manual de estudo de usuários da informação (2015)",
      "ideiaChave": "PDF do projeto, pp. 3–5: necessidade, desejo, demanda, uso e requisito, com Line e Figueiredo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-4-fonte-taylor",
      "nome": "Robert S. Taylor — Question-Negotiation and Information Seeking in Libraries (1968)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Robert S. Taylor — Question-Negotiation and Information Seeking in Libraries (1968)",
      "ideiaChave": "Quatro níveis de necessidade; aproximações com Grogan não são identidade entre modelos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-4-fonte-isp",
      "nome": "Carol Kuhlthau — Information Search Process",
      "ano": "Referência de consulta",
      "obraPrincipal": "Carol Kuhlthau — Information Search Process",
      "ideiaChave": "Dimensões, estágios e incerteza, sem universalizar trajetória afetiva.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-4-fonte-acrl",
      "nome": "ACRL — Framework for Information Literacy for Higher Education",
      "ano": "Referência de consulta",
      "obraPrincipal": "ACRL — Framework for Information Literacy for Higher Education",
      "ideiaChave": "Adotado em 2016, página registra revisão de setembro de 2026; conceitos articulados, sem lista rígida universal.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-4-fonte-data",
      "nome": "Calzada Prado e Marzal — Incorporating Data Literacy into Information Literacy Programs (2013)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Calzada Prado e Marzal — Incorporating Data Literacy into Information Literacy Programs (2013)",
      "ideiaChave": "Competências em dados: compreensão, obtenção, interpretação/avaliação, gestão e uso; sínteses não são transcrições literais.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-4-4-6",
      "afirmacao": "No ISP, mais informação pode aumentar incerteza durante a exploração, sem indicar necessariamente fracasso da busca.",
      "gabarito": "C",
      "porQue": "É padrão reconhecido pelo modelo, não regra afetiva universal."
    },
    {
      "id": "memoria-rt-4-4-7",
      "afirmacao": "Competência em informação exclui dados, pois se limita obrigatoriamente à leitura de documentos acabados.",
      "gabarito": "E",
      "porQue": "A formação informacional possui escopo amplo e interseções com competência em dados."
    },
    {
      "id": "memoria-rt-4-4-8",
      "afirmacao": "Para Grogan, avaliar a solução é atribuição exclusivamente do usuário, vedada a avaliação conjunta com o bibliotecário.",
      "gabarito": "E",
      "porQue": "O texto recomenda avaliar juntos o produto e encerrar por entendimento comum."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-4-4-bloco-1",
    "titulo": "O Processo de Referência segundo Denis Grogan (1995)",
    "objetivos": [
      "Reconhecer oito passos didáticos e participação conjunta na avaliação."
    ],
    "conteudo": "Na obra clássica *A Prática do Serviço de Referência* (presente em nosso acervo em `Recuperação, fontes, referência e usuários`), **Denis Grogan**, ao discutir a assistência pessoal de referência em sentido estrito, retoma formulação de Samuel Rothstein sobre o contato pessoal e a assistência direta prestada pelo bibliotecário ao leitor em busca de conhecimento.\n\n```timeline\nE1 | 1. O Problema | Ator: Usuário | Usuário vivencia um impasse prático, acadêmico ou dilema de trabalho\n---> Tomada de Consciência\nE2 | 2. A Necessidade de Informação | Ator: Usuário | Reconhecimento da lacuna cognitiva: percepção de que precisa de ajuda externa\n---> Expressão Verbal\nE3 | 3. A Questão Inicial | Ator: Usuário | Pergunta verbalizada no balcão de referência — pode exigir esclarecimento, mas não é necessariamente vaga ou distorcida\n---> Entrevista de Referência\nE4 | 4. A Questão Negociada | Atores: Bibliotecário & Usuário | Filtragem de ambiguidades e identificação técnica da real necessidade informacional\n---> Formulação Estruturada\nE5 | 5. A Estratégia de Busca | Ator: Bibliotecário | Tradução na linguagem do sistema: termos, vocabulário controlado e operadores booleanos\n---> Execução Técnica\nE6 | 6. O Processo de Busca | Ator: Bibliotecário | Navegação concreta em catálogos, acervos, bases de dados ou repositórios\n---> Recuperação Documental\nE7 | 7. A Resposta | Ator: Bibliotecário | Entrega física ou digital dos documentos, referências ou dados pertinentes\n---> Validação Pragmática\nE8 | 8. A Solução | Ator: Usuário | Avaliação do produto com o consulente: a resposta atende ao propósito?\n```\n\n#### As Oito Etapas Decisórias e os Papéis dos Atores\nGrogan apresenta os oito passos **para fins didáticos**, advertindo que há retornos, fusões e variações. A descrição não prescreve um ritual linear para toda consulta:\n1. **O Problema:** Situação fática ou dilema intelectual que o usuário precisa resolver em seu trabalho ou estudo. **Ator: Usuário**.\n2. **A Necessidade de Informação:** O reconhecimento interno de que o conhecimento acumulado é insuficiente e que dados externos são necessários. **Ator: Usuário**.\n3. **A Questão Inicial:** A verbalização da dúvida apresentada no balcão de referência, telefone ou chat. Pode ser clara ou exigir esclarecimentos; não se deve presumir incompetência de todo consulente. **Ator: Usuário**.\n4. **A Questão Negociada:** O cerne da mediação do bibliotecário. Por meio da **entrevista de referência**, o profissional filtra ambiguidades e formula a verdadeira questão técnica a ser respondida. **Atores: Bibliotecário e Usuário em cooperação**.\n5. **A Estratégia de Busca:** A tradução da questão negociada na linguagem do sistema (seleção de vocabulários controlados, tesauros, campos e operadores booleanos). **Ator: Bibliotecário**.\n6. **O Processo de Busca:** A navegação concreta em catálogos, estantes, bases de dados comerciais ou repositórios digitais. **Ator: Bibliotecário**.\n7. **A Resposta:** O produto informativo entregue ao usuário (livros, artigos, relatórios ou referências). **Ator: Bibliotecário**.\n8. **A Solução:** A etapa final de validação pragmática. A resposta é solução potencial. Nas pp. 54–55, o autor recomenda que **bibliotecário e consulente avaliem juntos o produto** e cheguem de comum acordo ao encerramento. O uso posterior pelo usuário pode ocorrer fora do controle do profissional. **Não é correto atribuir a Grogan julgamento exclusivamente unilateral**, seja do bibliotecário, seja do usuário.\n\n**Aplicação e recuperação:** O usuário recebe referências tecnicamente corretas, mas explica que precisava de texto vigente em 2020. A resposta ainda não é solução adequada. Profissional e consulente reavaliam o produto e ajustam a busca. Essa volta não viola o modelo de Grogan, que admite retornos.",
    "checkpointIds": [
      "cp-4-4-1",
      "rt-4-4-1"
    ]
  },
  {
    "id": "sub-4-4-bloco-2",
    "titulo": "Tipologia de consultas: diferenciar tarefa e esforço necessário",
    "objetivos": [
      "Relacionar tipo de consulta e complexidade sem automatismos."
    ],
    "conteudo": "Uma tipologia difundida na literatura de referência, associada a William Katz, distingue orientação/direção, pronta-referência, busca específica e pesquisa. Os exemplos a seguir são **hipotéticos**. Complexidade e fonte dependem da demanda concreta; uma pergunta aparentemente factual pode exigir verificação extensa:\n\n| Categoria da Questão (Katz) | Complexidade | Fontes Utilizadas | Exemplo Prático na Câmara dos Deputados |\n| :--- | :--- | :--- | :--- |\n| **1. Questões de Direção / Administrativas** | Mínima (não bibliográfica). | Pode exigir guia, mapa ou regulamento atualizado; não significa ausência necessária de documento. | *\"Onde fica o banheiro?\", \"Qual o horário de funcionamento da Seção de Raras?\", \"Onde tiro cópias?\"* |\n| **2. Questões de Pronta-Referência (*Ready Reference*)** | Baixa / Factual pontual. | Obras de referência rápida (dicionários, anuários estatísticos, diretórios). | *\"Qual é o número da Lei de Responsabilidade Fiscal?\", \"Quem é o atual Presidente da Câmara dos Deputados?\"* |\n| **3. Questões de Pesquisa Específica (*Specific Search*)** | Média. | Catálogos em linha (OPAC), bibliografias especializadas e bases referenciais. | *\"Quais monografias a biblioteca possui sobre a reforma tributária aprovada na Emenda Constitucional 132?\"* |\n| **4. Questões de Pesquisa Ampla / Avançada (*Research / Extended*)** | Máxima. | Múltiplas bases heterogêneas, literatura cinzenta, comutação e consulta a especialistas. | *\"Elaborar dossiê bibliográfico e jurisprudencial exaustivo sobre a evolução do controle de constitucionalidade de medidas provisórias nos últimos 20 anos.\"* |\n\n**Aplicação e recuperação:** “Quem ocupava a presidência em determinada sessão?” parece pronta-referência, mas homonímia de datas e substituições pode exigir atas e registros. A forma curta da pergunta não prova esforço mínimo.",
    "checkpointIds": [
      "rt-4-4-2"
    ]
  },
  {
    "id": "sub-4-4-bloco-3",
    "titulo": "A Entrevista de Referência, Estudos de Usuários e a Tríade de Maurice Line (Edital Bloco E, itens 3.2 e 3.5)",
    "objetivos": [
      "Distinguir necessidade, desejo, demanda e uso na entrevista."
    ],
    "conteudo": "No serviço de referência moderno, a interação dialógica entre o bibliotecário e o consulente constitui o momento culminante da mediação humana da informação (**Denis Grogan, 1995; William Katz, 2002; Robert S. Taylor, 1968; Maurice Line, 1974; Nice Menezes de Figueiredo, 1994**).\n\n#### A. Os Quatro Níveis de Necessidade de Robert S. Taylor (1968)\nEm seu estudo seminal *Question-Negotiation and Information Seeking in Libraries*, Taylor demonstrou que a dúvida percorre quatro estados cognitivos na mente do usuário antes de alcançar o sistema:\n* **$Q_1$ — Necessidade Visceral:** Necessidade ainda não expressa, percebida como insatisfação ou lacuna; não se converte essa caracterização em diagnóstico psicológico universal de incapacidade total (*informação intangível*).\n* **$Q_2$ — Necessidade Consciente:** A necessidade mentalmente reconhecida e articulada em pensamento interior. O usuário sabe o que quer para si, mas a ideia ainda carece de estruturação formal.\n* **$Q_3$ — Necessidade Formalizada:** A formulação linguística explícita da dúvida comunicada ao bibliotecário. É quase sempre imperfeita, vaga ou distorcida (há aproximação didática com a questão inicial, sem equivalência perfeita entre os modelos).\n* **$Q_4$ — Necessidade Comprometida com o Sistema:** A questão traduzida e adaptada para os termos controlados, campos e operadores do sistema de recuperação da biblioteca (adaptação ao que se acredita que o sistema pode responder; não é sinônimo necessário de uma consulta formal em descritores).\n\n#### B. Roteiro prático de entrevista: síntese didática, não cinco fases canônicas atribuídas a dois autores\n1. **Acolhimento Empático e Abertura:** Estabelecer clima de confiança e receptividade, quebrando a chamada *\"ansiedade de biblioteca\"* (*library anxiety*, Constance Mellon, 1986), fenômeno de ansiedade que pode afetar a interação; não se rotula o usuário como portador de um vício.\n2. **Negociação da Pergunta (Técnica do Funil):** O bibliotecário conduz a entrevista partindo de **perguntas abertas** (*\"Conte-me sobre a finalidade da pesquisa no projeto de lei\"*), passando por **perguntas exploratórias** (*\"Quais correntes doutrinárias ou precedentes já foram mapeados?\"*) e concluindo com **perguntas fechadas** (*\"A busca deve se restringir às decisões do STF dos últimos 5 anos?\"*).\n3. **Tradução e Formulação da Estratégia de Busca:** Conversão da questão negociada ($Q_4$) em descritores de tesauro (ex.: vocabulário controlado pertinente à base; MFN pode designar número de registro em sistemas e não é nome de tesauro), operadores booleanos (AND, OR, NOT) e filtros de data e idioma.\n4. **Execução e Avaliação Preliminar Conjunta:** Apresentação de amostra dos primeiros registros recuperados para verificar a pertinência e calibrar a precisão antes do levantamento exaustivo.\n5. **Retroalimentação (Feedback) e Encerramento:** Confirmação de que o produto informativo atendeu à necessidade visceral ($Q_1$) e disponibilização de canais para desdobramentos adicionais.\n\n#### C. A Tríade Canônica: Necessidade vs. Demanda vs. Uso (Maurice Line, 1974; Nice Figueiredo, 1994)\nO Cebraspe explora sistematicamente a falsa equivalência entre esses três conceitos:\n\n$\\text{Necessidade (Need)} \\neq \\text{Demanda (Demand)} \\neq \\text{Uso (Use)}$\n\n* **Necessidade de Informação (*Information Need*):**\n  * Representa o estado real de carência informacional indispensável para que o indivíduo execute suas tarefas, tome decisões ou resolva impasses de pesquisa.\n  * Pode ser **consciente ou latente/inconsciente**. Muitas vezes o usuário desconhece que precisa de determinada norma ou dado estatístico até que um mediador o alerte.\n* **Demanda de informação (*Demand*), distinta de desejo (*Want*):**\n  * É o que o indivíduo pede. Pode refletir desejo e/ou necessidade, mas também pode ser pedido algo desnecessário. **Desejo** é o que gostaria de ter, ainda que não peça. Demanda não é necessariamente subconjunto fiel de uma necessidade objetiva.\n  * *Por que a demanda difere da necessidade?* Porque o usuário pode subestimar o acervo da biblioteca, sentir vergonha de expor suas dúvidas, usar termos errôneos ou pedir menos do que realmente precisa.\n* **Uso da Informação (*Information Use*):**\n  * É o consumo efetivo, a leitura assimilada e a aplicação prática das fontes recuperadas na tomada de decisão legislativa ou produção acadêmica.\n  * Nem tudo o que foi demandado é de fato usado (livros retirados que não chegam a ser lidos); e muito do que é usado advém de canais informais (conversas com pares em gabinetes) sem ter transitado pela biblioteca.\n\n**Aplicação e recuperação:** Alguém deseja um livro, pede outro por achar que o primeiro não existe e usa uma nota técnica encontrada casualmente. Desejo, demanda, necessidade e uso não formam uma linha obrigatória. O profissional deve esclarecer sem pressupor que sabe unilateralmente toda necessidade.",
    "checkpointIds": [
      "cp-4-4-2",
      "rt-4-4-3"
    ]
  },
  {
    "id": "sub-4-4-bloco-4",
    "titulo": "Metodologias Diretas e Indiretas de Estudos de Usuários Revelam Necessidades Reais no Legislativo",
    "objetivos": [
      "Combinar métodos reconhecendo vieses e limites das evidências."
    ],
    "conteudo": "Métodos podem combinar contato com pessoas e análise de registros. A classificação direto/indireto varia conforme a referência; explicite procedimento, amostra e limites:\n\n| Modalidade | Metodologias Empregadas | Vantagens Principais | Limitações e Riscos Críticos |\n| :--- | :--- | :--- | :--- |\n| **Métodos Diretos**<br>*(Interação ativa com os usuários)* | • **Questionários padronizados** (estruturados ou semiestruturados);<br>• **Entrevistas em profundidade** individuais;<br>• **Grupos Focais (*Focus Groups*)** (6 a 12 participantes);<br>• **Técnica do Incidente Crítico (John C. Flanagan, 1954)**: relato de eventos reais e marcantes de sucesso ou fracasso recente de busca;<br>• **Observação participante / Etnografia**. | Capta motivações subjetivas, percepções de valor, expectativas e sentimentos afetivos (modelo ISP de Kuhlthau). | Baixa taxa de retorno em questionários; viés de complacência (o usuário responde o que acha que o bibliotecário gostaria de ouvir); alto custo e tempo. |\n| **Métodos Indiretos**<br>*(Análise de registros sem contato direto em certos desenhos; análise de logs ainda exige governança e cuidado com privacidade)* | • **Análise de Logs de Busca (*Transaction Log Analysis*)**: registros automáticos de cliques, termos sem recuperação (*zero hits*) e rotas no OPAC;<br>• **Análise de Citações / Bibliometria**: análise das referências citadas nos pareceres e relatórios técnicos das consultorias da Câmara;<br>• **Estatísticas de Circulação e Empréstimo**: taxas de rotação de acervo por classe decimal (CDD/CDU). | Registros de ações que reduzem certas limitações do autorrelato; seleção, instrumentação, bots e ciência do monitoramento podem afetá-los. Custo e objetividade absoluta não são garantidos. | Não revelam o porquê do comportamento; registram o documento baixado, mas não provam se ele foi efetivamente lido ou útil. |\n\n#### Casos hipotéticos de aplicação, sem atribuir atendimentos reais à Câmara\n\n* **Caso 1: Balcão Presencial na Biblioteca Pedro Aleixo (Técnica do Funil)**\n  * *Situação:* Assessor parlamentar chega ao balcão de referência solicitando: *\"Preciso urgentemente de tudo o que a biblioteca tiver sobre reforma tributária\"*.\n  * *Intervenção do Bibliotecário:* O profissional percebe que a questão é excessivamente genérica ($Q_3$) e aplica o funil de perguntas. Pergunta aberta: *\"Qual é o foco da emenda que o deputado apresentará?\"*. O assessor esclarece que a discussão versa sobre a não cumulatividade plena do IBS e da CBS na aquisição de insumos de tecnologia. Pergunta fechada: *\"A pesquisa deve focar a jurisprudência do STF ou doutrina de Direito Tributário comparado?\"*.\n  * *Resultado:* A questão negociada ($Q_4$) é delimitada para *\"precedentes do STF sobre creditamento de ICMS/IBS em insumos digitais\"*, orientando a busca e a verificação do que de fato existe. Não se inventa a existência de três acórdãos específicos nem prazo real de entrega; as competências tributárias e datas devem ser analisadas conforme a norma.\n* **Caso 2: Atendimento Digital Remoto via Intranet / Chat Especializado**\n  * *Situação:* Consultor legislativo lotado em comissão parlamentar abre chamado eletrônico solicitando: *\"Modelos de relatórios sobre inteligência artificial\"*.\n  * *Intervenção do Bibliotecário:* Mediante contato síncrono via chat, o bibliotecário identifica que a demanda visa instruir a Comissão Especial sobre o Marco Regulatório da Inteligência Artificial (PL 2338/2023). O bibliotecário poderia consultar tramitação e documentos oficiais, verificar relações e identificadores, compará-los com fontes europeias pertinentes e elaborar uma **Linha do Tempo Normativa** acompanhada de **Mapa de Atores** dos setores ouvidos nas audiências públicas.\n\n**Aplicação e recuperação:** Um portal registra cem downloads, mas não informa cem leitores satisfeitos. Logs e entrevistas respondem perguntas distintas; cruzá-los melhora interpretação. Participantes que não responderam ao questionário podem ter necessidades diferentes dos que responderam.",
    "checkpointIds": [
      "rt-4-4-4"
    ]
  },
  {
    "id": "sub-4-4-bloco-5",
    "titulo": "A Disseminação Seletiva da Informação (DSI) de Hans Peter Luhn (1958)",
    "objetivos": [
      "Definir DSI como serviço orientado por perfil, sem exigir uma tecnologia única."
    ],
    "conteudo": "Criada pelo pesquisador da IBM **Hans Peter Luhn**, a DSI é o serviço proativo de alerta corrente no qual o sistema toma a iniciativa de informar o usuário:\n\n```timeline\nP | 1. Perfil de Interesse do Usuário | Mapeamento Temático | Cadastro formal de termos, descritores, operadores booleanos e áreas de pesquisa do leitor\n---> Cruzamento com Novas Entradas\nD | 2. Perfil dos Novos Documentos | Ingestão no Acervo | Metadados e indexação das obras recém-adquiridas incorporadas ao catálogo\n---> Algoritmo de Similaridade\nM | 3. Mecanismo de Casamento (Matching) | Filtro Automatizado | Interseção matemática entre os termos do perfil do usuário e as novas aquisições\n---> Canal Proativo\nN | 4. Notificação Direcionada | Alerta Antecipado | Disparo de avisos eletrônicos (e-mail, RSS, app) com links diretos aos itens pertinentes\n---> Calibração Algorítmica\nF | 5. Retroalimentação (Feedback) | Ajuste Dinâmico | Usuário avalia pertinência (útil vs. inútil), refinando continuamente o perfil cadastrado\n```\n\n#### A. Comparar tecnologias de DSI sem inventar fronteira rígida entre gerações\n* **DSI de 1ª Geração (Tradicional / Analógica / Em Lote):**\n  * Baseada em cartões perfurados ou perfis fixos de interesse preenchidos em formulários em papel;\n  * Cruzamentos periódicos manuais ou em lotes computacionais (*batch processing*);\n  * Alertas físicos encaminhados em fichas impressas ou boletins datilografados;\n  * Feedback lento e baixa flexibilidade de calibração.\n* **DSI de 2ª Geração (Digital / Automatizada / Semântica):**\n  * Perfis podem ser explicitamente declarados ou ajustados com sinais autorizados. DSI digital **não exige machine learning nem coleta irrestrita do histórico**;\n  * Alertas periódicos ou próximos do tempo real, conforme configuração, enviados via feeds RSS, e-mails automatizados, APIs e notificações em aplicativos móveis;\n  * *Feedback* com um único clique (botão de \"relevante/não relevante\"), ajustando os pesos estatísticos do perfil do usuário em tempo de execução.\n\n**Aplicação e recuperação:** Um perfil explícito sobre acessibilidade recebe alerta semanal de novas referências e permite marcar pertinência. Isso pode ser DSI sem IA e sem vigiar toda navegação. Um boletim geral idêntico a todos não ganha seletividade individual apenas por ser eletrônico.",
    "checkpointIds": [
      "rt-4-4-5"
    ]
  },
  {
    "id": "sub-4-4-bloco-6",
    "titulo": "Modelos Canônicos de Comportamento Informacional (*Information Behavior*)",
    "objetivos": [
      "Comparar modelos pelo seu foco e pelas hipóteses de comportamento."
    ],
    "conteudo": "1. **Modelo de Tom D. Wilson (1981 / 1996):**\n   * A necessidade de informação não nasce no vácuo; ela é uma **necessidade secundária** gerada por necessidades primárias (fisiológicas, afetivas ou cognitivas) no contexto de papéis sociais do indivíduo.\n   * Introduz as **variáveis intervenientes**: barreiras psicológicas, demográficas, ambientais e características da fonte que podem impedir ou desviar o comportamento de busca.\n2. **Abordagem do *Sense-Making* de Brenda Dervin (1983 / 1992):**\n   * O ser humano é visto como um viajante que se desloca no tempo e no espaço construindo sentido para sua vida.\n   * **Elementos para analisar a construção de sentido:** não chamar de triângulo uma enumeração de quatro componentes\n     * **Situação:** O contexto histórico e espaço-temporal onde o indivíduo está inserido;\n     * **Lacuna (*Gap*):** A barreira cognitiva, dúvida ou incerteza que interrompe a sua caminhada;\n     * **Ponte:** As informações, ideias e estratégias mobilizadas para superar a barreira;\n     * **Resultado / Uso:** A nova compreensão alcançada que permite continuar a caminhada.\n3. **Modelo ASK (*Anomalous State of Knowledge*) de Nicholas Belkin (1980):**\n   * O usuário busca informação em um sistema precisamente porque reconhece uma **anomalia ou lacuna em seu estado de conhecimento**. Por não dominar o tema, ele tem extrema dificuldade de formular a consulta exata em termos técnicos no início da interação.\n4. **Modelo ISP (*Information Search Process*) de Carol Kuhlthau (1991):**\n   * Integra três domínios do ser humano na busca: **Sentimentos (afetivo)**, **Pensamentos (cognitivo)** e **Ações (físico)**.\n   * Divide a pesquisa em 6 estágios: Iniciação $\\rightarrow$ Seleção $\\rightarrow$ Exploração $\\rightarrow$ Formulação $\\rightarrow$ Coleta $\\rightarrow$ Apresentação.\n   * Descreve padrões frequentes: exploração pode aumentar incerteza, enquanto formulação de foco pode favorecer confiança. Não prediz sentimentos idênticos nem satisfação obrigatória para toda pessoa.\n\n**Aplicação e recuperação:** Após ler fontes contraditórias, a pessoa fica mais incerta antes de formular foco. Isso é compatível com ISP e não demonstra necessariamente fracasso. ASK focaliza estado de conhecimento; Sense-Making, construção situada de sentido; não se tornam o mesmo modelo por falar em lacuna.",
    "checkpointIds": [
      "rt-4-4-6"
    ]
  },
  {
    "id": "sub-4-4-bloco-7",
    "titulo": "Competência em Informação (*Information Literacy*) e Competência em Dados (*Data Literacy*)",
    "objetivos": [
      "Aplicar competências em informação e dados sem uma fronteira artificial entre formatos."
    ],
    "conteudo": "O edital nº 1/2026 exige explicitamente o domínio de **competência em informação e competência em dados** (item 1.5 do Bloco D). Ambas integram o arcabouço contemporâneo de mediação bibliotecária, mas possuem objetos, métodos e competências nucleares distintas.\n\n#### A. Competência em Informação (*Information Literacy*)\n* **Origem e Marcos Conceituais:** Termo cunhado por Paul Zurkowski em 1974 e consolidado pela *American Library Association* (ALA/ACRL, 1989), além das históricas Declarações de Praga (2003 - Rumo a uma Sociedade Letrada em Informação) e Alexandria (2005 - Farol da Sociedade da Informação).\n* **Definição:** É a capacidade holística de o indivíduo **reconhecer quando necessita de informação, saber localizá-la, avaliá-la criticamente em sua autoridade, exatidão e relevância, e utilizá-la de forma ética, legal e eficaz**.\n* **Aplicação Legislativa:** Em um programa hipotético de formação parlamentar, pode capacitar assessores a identificar fontes doutrinárias fidedignas, avaliar jurisprudência e combater vieses informacionais.\n\n#### B. Competência em Dados (*Data Literacy*): A Nova Fronteira\nCom a proliferação da ciência orientada a dados (*data science*), do governo aberto e da inteligência artificial, emergiu a necessidade de competências especializadas para lidar com dados brutos e semiestruturados.\n* **Autores Canônicos de Referência:** **Javier Calzada Prado e Miguel Ángel Marzal (2013)** (*Incorporating Data Literacy into Information Literacy Programs: Core Competencies and Contents*) e **Tibor Koltay (2017)** (*Data literacy for researchers and data librarians*).\n* **Definição Canônica:** É o conjunto de conhecimentos, habilidades e atitudes que capacitam o cidadão ou profissional a **descobrir, acessar, interpretar criticamente, avaliar, gerenciar, analisar e comunicar dados de forma ética e responsável**, compreendendo o seu ciclo de vida e seu impacto social.\n\n#### C. Competências em dados: categorias e aplicações\n\nCalzada Prado e Marzal (2013) organizam o tema em compreensão dos dados; localização/obtenção; leitura, interpretação e avaliação; gestão; uso. Não se deve atribuir a eles, como transcrição exata, outra lista que omita compreensão e transforme visualização em categoria independente. Para estudar, aplique:\n\n1. **Compreender:** reconhecer tipo, geração, unidade e contexto do dado.\n2. **Obter:** localizar fontes, formatos, licenças e condições de acesso.\n3. **Interpretar e avaliar:** examinar proveniência, amostra, denominadores e limitações.\n4. **Gerenciar:** organizar, documentar, proteger e manter os dados segundo responsabilidades.\n5. **Usar:** analisar, sintetizar e comunicar com ética, incluindo atribuição e visualizações adequadas.\n\nSão exemplos didáticos das categorias, não lista fechada de ferramentas. Não é necessário programar todo tratamento nem supor que apenas dados numéricos sejam dados.\n\n#### D. Matriz Comparativa: Information Literacy versus Data Literacy\n\n| Critério de Comparação | Competência em Informação (*Information Literacy*) | Competência em Dados (*Data Literacy*) |\n| :--- | :--- | :--- |\n| **Escopo** | Informação em diferentes formas, incluindo dados e produção participativa; não se restringe a textos acabados. | Aprofunda compreensão e uso de dados em variados tipos e formas; há interseções com competência em informação. |\n| **Operação Cognitiva Central** | Interpretação textual, hermenêutica, síntese conceitual e julgamento de autoridade. | Raciocínio quantitativo, análise estatística, limpeza de dados e visualização gráfica. |\n| **Ferramentas possíveis** | Busca, leitura, análise e produção, também com recursos computacionais. | Raciocínio, documentação, planilhas ou programação conforme tarefa; uso de algoritmo não é condição exclusiva. |\n| **Padrões de Referência** | Diretrizes da ACRL/ALA, Normas ABNT de citação textual (NBR 10520). | Padrões de metadados de dados (DDI, Frictionless Data), princípios FAIR e W3C CSV on the Web. |\n| **Papel do Bibliotecário** | Mediador da leitura, instrutor de busca bibliográfica e curador de acervos. | *Data Librarian* e *Data Steward*, curador de repositórios de dados de pesquisa e mediador de dados abertos. |\n\n**Aplicação e recuperação:** Uma tabela traz taxa sem informar denominador. A formação deve ensinar a perguntar por população, período, método e licença, além de abrir o CSV. Informação e dados exigem avaliação crítica; um texto pode conter dados e um dataset pode exigir interpretação qualitativa.",
    "checkpointIds": [
      "cp-4-4-3",
      "rt-4-4-7"
    ]
  },
  {
    "id": "sub-4-4-bloco-8",
    "titulo": "Enunciados autorais: não substituir mediação por regras absolutas",
    "objetivos": [
      "Julgar afirmações por contexto e referência, evitando exclusividades indevidas."
    ],
    "conteudo": "| Afirmação autoral para análise | Gabarito | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"Na oitava etapa do processo de referência de Denis Grogan (A Solução), o bibliotecário decide unilateralmente se a pesquisa foi concluída.\"* | **ERRADO** | Grogan recomenda avaliação conjunta do produto por bibliotecário e consulente; o uso posterior pode escapar ao controle do profissional. |\n| *\"No modelo de Denis Grogan, a formulação da estratégia de busca precede o processo de negociação da questão com o usuário.\"* | **ERRADO** | A Questão Negociada (etapa 4) **antecede** a Estratégia de Busca (etapa 5). A sequência didática coloca negociação antes da estratégia; na prática, pode haver busca exploratória, retornos e reformulação. |\n| *\"Segundo Brenda Dervin, a informação é um objeto físico estático independente do contexto existencial do indivíduo.\"* | **ERRADO** | No *Sense-Making*, a informação é **construída ativamente** pelo sujeito para transpor lacunas cognitivas situadas. |\n| *\"A competência em dados resume-se à busca tradicional de livros em catálogos eletrônicos de bibliotecas.\"* | **ERRADO** | Competência em dados foca em **dados brutos e estruturados (datasets, tabelas, APIs)**, análise quantitativa e curadoria. |\n\n**Aplicação e recuperação:** “Somente o usuário pode participar da avaliação” e “o bibliotecário decide sozinho” exageram em direções distintas. A página 54 de Grogan dá fundamento para rejeitar ambas como descrição fiel do autor.",
    "checkpointIds": [
      "rt-4-4-8"
    ]
  }
],
fontesTeoria: [
  {
    "id": "grogan",
    "titulo": "Denis Grogan — A prática do serviço de referência (1995; reimpressão 2001)",
    "localizador": "PDF do projeto, pp. 50–56: oito passos didáticos, retornos e avaliação conjunta de bibliotecário e consulente.",
    "url": "https://github.com/Heuller/hnc/blob/auditoria-2026-10/acervo-estudos/Recupera%C3%A7%C3%A3o%2C%20fontes%2C%20refer%C3%AAncia%20e%20usu%C3%A1rios/a-pratica-do-servio-de-referencia-denis-grogan-p_compress.pdf"
  },
  {
    "id": "manual",
    "titulo": "Cunha, Amaral e Dantas — Manual de estudo de usuários da informação (2015)",
    "localizador": "PDF do projeto, pp. 3–5: necessidade, desejo, demanda, uso e requisito, com Line e Figueiredo.",
    "url": "https://github.com/Heuller/hnc/blob/auditoria-2026-10/acervo-estudos/Livros%20Extras/CUNHA%2C%20Murilo%20Bastos%20da_%20AMARAL%2C%20Sueli%20Ang%C3%A9lica%20do_%20DANTAS%2C%20Edmundo%20Brand%C3%A3o.%20Manual%20de%20estudo%20de%20usu%C3%A1rios%20da%20informa%C3%A7%C3%A3o.%20S%C3%A3o%20Paulo%20Atlas%2C%202015..pdf"
  },
  {
    "id": "taylor",
    "titulo": "Robert S. Taylor — Question-Negotiation and Information Seeking in Libraries (1968)",
    "localizador": "Quatro níveis de necessidade; aproximações com Grogan não são identidade entre modelos.",
    "url": "https://www.ideals.illinois.edu/items/38316"
  },
  {
    "id": "isp",
    "titulo": "Carol Kuhlthau — Information Search Process",
    "localizador": "Dimensões, estágios e incerteza, sem universalizar trajetória afetiva.",
    "url": "https://wp.comminfo.rutgers.edu/ckuhlthau/information-search-process/"
  },
  {
    "id": "acrl",
    "titulo": "ACRL — Framework for Information Literacy for Higher Education",
    "localizador": "Adotado em 2016, página registra revisão de setembro de 2026; conceitos articulados, sem lista rígida universal.",
    "url": "https://www.ala.org/acrl/standards/ilframework"
  },
  {
    "id": "data",
    "titulo": "Calzada Prado e Marzal — Incorporating Data Literacy into Information Literacy Programs (2013)",
    "localizador": "Competências em dados: compreensão, obtenção, interpretação/avaliação, gestão e uso; sínteses não são transcrições literais.",
    "url": "https://doi.org/10.1515/libri-2013-0010"
  }
],
};
