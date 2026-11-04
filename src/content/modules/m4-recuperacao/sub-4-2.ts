import type { ModuloFilho } from '../../../domain/types';

export const submodulo42: ModuloFilho = {
  id: 'sub-4-2',
  numero: '4.2',
  editalRef: 'Bloco E - Item 2.1 e 2.2',
  preRequisitos: ["sub-4-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-4-3",
          "titulo": "Fontes Jurídicas e LexML Brasil",
          "motivo": "Pesquisa avançada em diários oficiais e bases governamentais."
      },
      {
          "submoduloId": "sub-11-12",
          "titulo": "Transparência, LAI e LGPD",
          "motivo": "Acesso a informações públicas e sigilo."
      }
  ],
  titulo: 'Fontes de Informação: Tipologia, Literatura Cinzenta e Avaliação',
  antesDeLer: [
  {
    "termo": "Função e circuito",
    "definicao": "Tipologia e circulação editorial são eixos distintos.",
    "exemploBiblioteca": "Relatório cinzento pode ser primário; revisão cinzenta não é automaticamente resultado original."
  },
  {
    "termo": "Denominador",
    "definicao": "O universo de referência determina o significado da proporção.",
    "exemploBiblioteca": "Ruído usa recuperados; fallout usa todos os irrelevantes do conjunto."
  }
],
  descricaoCurta: "Identificar função e proveniência sem usar tipologia como selo de verdade. Classificar fontes segundo uma referência explícita. Distinguir circulação cinzenta e função documental. Avaliar adequação, método, atualização e propósito. Calcular métricas e reconhecer limites dos julgamentos. Detectar troca de denominadores e generalização indevida.",
  tempoEstimadoMinutos: 24,
  autoresChave: [
  "Cunha e Cavalcanti — Dicionário de biblioteconomia e arquivologia (2008)",
  "Biblioteca Nacional de Tecnologia da República Tcheca — Grey literature definition",
  "Manning, Raghavan e Schütze — Evaluation of unranked retrieval sets"
],
  alertasCebraspe: [
  "Originalidade/função não certificam método ou exatidão.",
  "Identificador e publicidade não definem sozinhos o circuito editorial.",
  "O exemplo numérico da aula melhora as duas sem contradição."
],
  teoriaDensaMarkdown: "### Oficina aplicada — Precisão e revocação sem decorar frações\n\n**Situação.** Para uma pesquisa, avaliadores identificam **8 documentos relevantes** em uma coleção. A busca devolve **10 documentos**; ao examiná-los, a equipe considera **4 relevantes**.\n\n**Desenhe quatro grupos:**\n\n| | Relevantes | Não relevantes |\n|---|---:|---:|\n| Recuperados | 4 | 6 |\n| Não recuperados | 4 | Não informado |\n\nO grupo relevante não recuperado é `8 − 4 = 4`. Para saber o último número seria necessário conhecer o tamanho total da coleção; não o invente.\n\n**Precisão pergunta:** “Entre os 10 que vieram, quantos servem?” `4/10 = 40%`. **Revocação pergunta:** “Entre os 8 relevantes existentes no conjunto avaliado, quantos encontramos?” `4/8 = 50%`. O numerador coincide neste exemplo; os denominadores respondem a perguntas distintas.\n\n**Ruído e silêncio.** Os seis não relevantes recuperados ilustram ruído; os quatro relevantes não encontrados ilustram silêncio. Na operação real, conhecer todos os relevantes da coleção pode ser difícil. O cálculo de revocação pressupõe um conjunto e julgamentos de relevância definidos ou um método de estimativa explicitado.\n\n**Agora compare.** Uma nova busca pode encontrar mais relevantes e também mais irrelevantes. Calcule novamente; não suponha que a precisão necessariamente caia sempre que a revocação subir.\n\n### Conceito e Tipologia Epistemológica das Fontes de Informação\n\n**A fonte é o caminho para responder a uma pergunta.** Se uma pessoa quer saber o conteúdo de uma lei, consulte o texto normativo em fonte apropriada; se quer localizar estudos sobre ela, uma base bibliográfica pode apontar artigos; se procura quem pesquisa o tema, um diretório ou uma pessoa especializada pode ajudar. A escolha depende da pergunta, da data e do contexto.\n\nUma fonte pode ser documento, instituição, base ou pessoa. Primária, secundária e terciária são classificações úteis para descrever funções em certos contextos, não notas de qualidade: a fonte original também precisa ser criticamente avaliada.\n\nConforme a síntese doutrinária associada a **Murilo Bastos da Cunha** (*Para Saber Mais: Fontes de Informação em Ciência e Tecnologia*):\n\nUma fonte pode ser documento, pessoa, instituição ou recurso usado para atender uma necessidade. Identifique sua função, proveniência e contexto. A classificação primária/secundária/terciária é instrumento de análise, não selo de confiabilidade ou hierarquia de valor.\nA literatura canônica internacional (**Denis Grogan, 1995; Murilo Bastos da Cunha, 2001; Bernadete Campello, 2000**) categoriza as fontes de informação em três categorias funcionais, com variações entre autores, segundo o grau de originalidade e tratamento documentário:\n\n```timeline\nP | 1. FONTES PRIMÁRIAS | Conhecimento Original e Inédito | Artigos com pesquisa original, teses e relatórios com resultados originais; atos oficiais como evidência do ato publicado\n---> Indexação, Condensação e Organização\nS | 2. FONTES SECUNDÁRIAS | Tratamento e Localização Rápida | Bases referenciais (Scopus, LexML), catálogos OPAC/RVBI, índices, bibliografias, dicionários e enciclopédias\n---> Sinalização e Guias de Rota\nT | 3. FONTES TERCIÁRIAS | Guias e Sinalizadores de Tráfego | Bibliografias de bibliografias, guias de bibliotecas, diretórios de centros de pesquisa e guias de fontes, conforme a classificação adotada\n```\n\n**Aplicação e recuperação:** Um diário oficial é primário para comprovar a publicação de um ato; uma análise comparada desse ato é doutrina. Se a pesquisa é sobre como a imprensa interpretou a norma, o próprio artigo pode ser evidência primária desse discurso. O papel depende da pergunta.\n\n### Tipologia tripartite: explicitar o critério adotado\n\n**Acompanhe o trajeto de uma pesquisa.** Uma equipe faz uma pesquisa de campo e publica resultados originais em um artigo: para estudar esses resultados, o artigo pode funcionar como fonte primária. Uma base de resumos organiza registros e permite localizá-lo: exerce função secundária. Um guia que organiza fontes ou bases pode funcionar como terciário, segundo a tipologia adotada.\n\nO mesmo documento pode cumprir funções diferentes conforme a pergunta. Uma revisão é secundária em relação aos estudos que sintetiza, mas seu próprio método pode ser fonte primária para uma pesquisa sobre revisões. O nome “artigo” sozinho não resolve todos os casos.\n\n| Nível Tipológico | Conceito e Natureza | Características Técnicas | Exemplos Gerais Canônicos | Exemplos no Ambiente Legislativo / Jurídico |\n| :--- | :--- | :--- | :--- | :--- |\n| **Fontes Primárias** | Registram o conhecimento original pela primeira vez; registros ou resultados originais para a finalidade considerada; podem conter análise e interpretação. | Características variáveis conforme o documento e a finalidade da pesquisa. | Artigos, teses, trabalhos de anais e relatórios quando registram pesquisa ou dados originais; patentes como registros de invenções. | **Projetos de Lei (PLs), Diário Oficial da União (DOU), Diário da Justiça (DJe), acórdãos na íntegra, transcrições taquigráficas.** |\n| **Fontes Secundárias** | Documentos que resultam da organização, análise e sumarização das fontes primárias. | Organizam ou analisam fontes; podem envolver contribuição intelectual original. A função de localização não significa ausência de toda novidade. | Bases de resumos/índices (Scopus, Web of Science, BRAPCI), bibliografias temáticas, catálogos OPAC, dicionários, enciclopédias. | **Catálogo da Rede RVBI, Portal LexML Brasil, ementários jurisprudenciais, compilações legislativas consolidadas.** |\n| **Fontes Terciárias** | Recursos concebidos para apontar a localização e instruir o uso de fontes primárias e secundárias. | São \"sinalizadores de tráfego\"; guias de alto nível sobre a literatura existente. | **Bibliografias de bibliografias**, guias de literatura especializada, diretórios de centros de pesquisa, guias de fontes, conforme a classificação adotada. | **Guia do Usuário da Biblioteca Pedro Aleixo, Guia de Fontes Jurídicas do Senado, diretório de comissões temáticas.** |\n\n> [!CAUTION]\n> **Treino autoral no formato certo ou errado:** “Bibliografias de bibliografias e guias de fontes são, necessariamente, fontes secundárias.” Na tipologia tripartite adotada aqui, são **TERCIÁRIAS**; enunciados que indiquem outra classificação precisam ser julgados por essa referência. Já a bibliografia comum (que lista livros ou artigos) é **FONTE SECUNDÁRIA**.\n\n**Aplicação e recuperação:** Um guia que leva a bibliografias é terciário na tipologia adotada. Já uma bibliografia de obras sobre o tema funciona como instrumento secundário de localização. Não deduza confiabilidade maior apenas pelo nível.\n\n### A Literatura Cinzenta (*Grey Literature*)\n\n**Cinzenta descreve circulação, não confiabilidade.** Imagine uma nota técnica produzida por uma biblioteca de tribunal e disponibilizada no repositório institucional fora dos canais editoriais comerciais usuais. Ela pode ser literatura cinzenta e trazer análise útil; é preciso verificar autoria, data e método. Uma tese também pode circular por repositório e apresentar pesquisa original.\n\nTer ISBN, estar na internet ou ser gratuita não decide, isoladamente, se uma obra é cinzenta. Tampouco ser cinzenta significa ser secreta ou obrigatoriamente secundária. A Cebraspe pode misturar o eixo de **circulação** com o da **função da fonte**.\n\nA Literatura Cinzenta compreende a produção documental de caráter técnico, acadêmico, legislativo ou corporativo **não disponibilizada pelos canais comerciais usuais de distribuição editorial e livrarias**:\n* **Características:** Pode circular em redes, repositórios ou instituições fora do circuito editorial comercial usual. **Pode ter ISBN, ampla divulgação e controle bibliográfico**; não é definida por segredo, baixa qualidade ou ausência obrigatória de identificador.\n* **Exemplos no Poder Público:**\n  * Relatórios finais de Comissões Parlamentares de Inquérito (CPIs);\n  * Notas técnicas e estudos de consultoria legislativa e orçamentária da Câmara dos Deputados;\n  * Relatórios técnicos de fiscalização e auditoria do Tribunal de Contas da União (TCU);\n  * *Preprints* acadêmicos, apostilas de treinamento interno e atas de sessões reservadas.\n* **Valor para o Parlamento:** Pode trazer resultados e análises úteis, inclusive anteriores à publicação comercial. **Cinzenta é uma dimensão de circulação/produção; primária ou secundária depende da função e do conteúdo.** Um relatório original e uma revisão institucional não se tornam a mesma categoria apenas por circularem no mesmo repositório.\n\n**Aplicação e recuperação:** Um relatório técnico original aberto e com ISBN pode continuar fora do circuito comercial usual. Uma revisão institucional também pode ser cinzenta, sem se tornar automaticamente pesquisa primária. Formato, acesso e originalidade não são a mesma dimensão.\n\n### Critérios Científicos de Avaliação de Fontes de Informação (Campello, Cendón & Tomaél)\n\n**Como escolher entre duas páginas?** Para responder sobre uma lei, confira quem publicou a informação, a data, a versão, as referências ao texto oficial e se a página cobre o período solicitado. Um texto antigo pode ser adequado para estudar o que vigorava naquela data, embora não sirva sozinho para afirmar a regra atual.\n\nAutoridade, exatidão, atualidade, cobertura e propósito funcionam em conjunto: uma página institucional pode ter erro ou versão desatualizada; um domínio conhecido não dispensa conferência. Registre a data de acesso e as limitações relevantes para o usuário.\n\nDiante da profusão de dados não validados na Internet, o bibliotecário legislativo aplica critérios científicos rigorosos para avaliar adequação e limites das fontes, sem garantia automática por credencial ou domínio institucional:\n\n1. **Autoridade (*Authority*):** Credibilidade científica, titulação e reputação institucional do autor ou órgão emissor. Identificação clara da entidade patrocinadora e comitê editorial.\n2. **Exatidão e Rigor Factual (*Accuracy*):** Isenção de erros factuais, coerência metodológica, citações explícitas de fontes originais e reprodutibilidade dos dados.\n3. **Atualidade (*Currency*):** Frequência de atualização, visibilidade da data da última revisão e validade das remissões a leis que já foram revogadas.\n4. **Cobertura e Escopo (*Coverage*):** Profundidade analítica e abrangência temporal e geográfica condizente com o escopo prometido.\n5. **Propósito e vieses:** identificar finalidade, seleção, perspectiva, método e conflitos de interesse. Uma fonte pode ser útil para estudar um posicionamento mesmo sem neutralidade; transparência não certifica ausência de viés.\n6. **Acessibilidade, Navegabilidade e Usabilidade:** Facilidade de recuperação, estabilidade do servidor e conformidade com as diretrizes de acessibilidade na Web (WCAG/e-MAG).\n\n**Aplicação e recuperação:** A página de um órgão é autêntica, mas a tabela refere-se a 2018. Pode ser fonte adequada para série histórica e inadequada para afirmar o dado atual. Autoridade, atualidade e adequação precisam ser examinadas separadamente.\n\n### Avaliação Científica de Sistemas de Recuperação da Informação: Os Testes de Cranfield (Cyril Cleverdon)\n\n**Do resultado à avaliação: conte quatro grupos.** Em uma coleção avaliada existem 8 documentos relevantes. A busca encontra 10 documentos, dos quais 4 são relevantes. Portanto: 4 relevantes recuperados; 6 não relevantes recuperados; 4 relevantes não recuperados; o número de não relevantes não recuperados exige conhecer o tamanho total da coleção.\n\nPrecisão = `4/10 = 40%`: de tudo que veio, quanto era relevante? Revocação = `4/8 = 50%`: de tudo que era relevante, quanto veio? O julgamento de relevância e a coleção precisam estar definidos; uma busca operacional comum nem sempre conhece todos os relevantes não recuperados.\n\nNa sequência de estudos iniciada no fim da década de 1950 e desenvolvida na década de 1960, na Faculdade de Aeronáutica de Cranfield (Inglaterra), **Cyril Cleverdon** conduziu os célebres **Testes de Cranfield (Cranfield I e Cranfield II)**, que fundaram a metodologia científica moderna de avaliação de sistemas de RI:\n\n```decision\nSTART: Coleção de Teste Controlada | Acervo estático e conhecido de documentos técnicos\nSTEP: Consultas Padronizadas | Conjunto fixo de perguntas formuladas para o teste\nSTEP: Julgamento Humano de Relevância | Especialistas avaliam pertinência prévia documento a documento\nSTEP: Matriz de Contingência 2x2 | Cruzamento: Recuperados vs. Relevantes (Verdadeiros/Falsos Positivos)\nEND: Cálculo das Métricas de Desempenho | Revocação (Recall: % resgatados) e Precisão (Precision: % pertinentes)\n```\n\n#### A. A Matriz de Contingência 2x2\nPara qualquer consulta executada sobre uma base documental, a coleção total divide-se em quatro categorias, assumindo um conjunto fixo e julgamento binário de relevância:\n\n| Situação Documental | Documentos Pertinentes / Relevantes | Documentos Não Relevantes | Total da Situação |\n| :--- | :---: | :---: | :---: |\n| **Documentos Recuperados pelo Sistema** | **$a$** (Verdadeiros Positivos) | **$b$** (Falsos Positivos — **RUÍDO**) | $a + b$ (Total Recuperado) |\n| **Documentos Não Recuperados pelo Sistema** | **$c$** (Falsos Negativos — **SILÊNCIO**) | **$d$** (Verdadeiros Negativos) | $c + d$ (Total Não Recuperado) |\n| **Total da Coleção** | $a + c$ (Total de Relevantes na Base) | $b + d$ (Total de Não Relevantes) | $N = a + b + c + d$ |\n\n#### B. Fórmulas Canônicas Cobradas pelo Cebraspe\n1. **Revocação (*Recall* — $R$):**\n   Mede a capacidade do sistema em encontrar **TODOS os documentos relevantes** existentes na base:\n   $R = \\frac{a}{a + c} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Relevantes Existentes na Base}}$\n2. **Precisão (*Precision* — $P$):**\n   Mede a capacidade do sistema em recuperar **APENAS documentos relevantes**, sem entulhar o usuário com lixo:\n   $P = \\frac{a}{a + b} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Documentos Recuperados pelo Sistema}}$\n3. **Silêncio Documental:**\n   Corresponde aos documentos relevantes que o sistema **deixou de encontrar** ($c$).\n   $\\text{Taxa de Silêncio} = 1 - R = \\frac{c}{a + c}$\n4. **Ruído Documental:**\n   Corresponde aos documentos inúteis que o sistema **entregou por engano** ($b$).\n   $\\text{Taxa de Ruído} = 1 - P = \\frac{b}{a + b}$\n5. **Medida F (*F-Measure / F1-Score*):**\n   F1 é a média harmônica de precisão e revocação com igual peso. F-beta permite pesos diferentes; não se confunde com média aritmética:\n   $F_1 = 2 \\times \\frac{P \\times R}{P + R}$\n6. **Coeficiente de Queda / Ruído Global (*Fallout* — $F$):**\n   A proporção de documentos irrelevantes que foram indevidamente recuperados:\n   $\\text{Fallout} = \\frac{b}{b + d} = \\frac{\\text{Não Relevantes Recuperados}}{\\text{Total de Não Relevantes na Coleção}}$\n\n#### C. Compromisso frequente não é lei universal inversa\n\nExpandir um conjunto pode recuperar relevantes e ruído em proporções diferentes. Há compromissos em certos cortes ou alterações de consulta, mas **não existe proporcionalidade inversa obrigatória** entre precisão e revocação. Um novo método pode melhorar ambas.\n\nExemplo: há 25 relevantes na base. Busca A recupera 20 itens, dos quais 10 relevantes: P=10/20=0,50; R=10/25=0,40. Busca B recupera 20, dos quais 15 relevantes: P=15/20=0,75; R=15/25=0,60. As duas métricas melhoraram. F1 de A é aproximadamente 0,444; de B, aproximadamente 0,667.\n\nBusca exaustiva pode priorizar revocação; uma tarefa rápida pode priorizar precisão nos primeiros resultados. A escolha depende de custo dos erros e necessidade, não de uma superioridade universal. Sem conhecer todos os relevantes, revocação absoluta pode ser difícil de estimar. Julgamentos incompletos, divergência entre avaliadores e recorte temporal limitam a avaliação.\n\n**Casos-limite:** se nada é recuperado, o denominador de precisão é zero; se não há relevantes na coleção, o de revocação é zero. Convenções de cálculo devem ser declaradas, não dividir por zero silenciosamente.\n\n**Aplicação e recuperação:** Se a=12, b=8, c=18, d=62, precisão=12/20=60%; revocação=12/30=40%; ruído=8/20=40%; fallout=8/70≈11,43%. Trocar 20 por 70 no denominador muda a métrica, ainda que ambos envolvam irrelevantes.\n\n### Enunciados autorais: critérios e denominadores\n\n**Uma verificação rápida de denominadores.** Se uma busca encontrou 6 documentos e 3 eram pertinentes, sua precisão é `3/6 = 50%`. Se havia 12 pertinentes no conjunto avaliado, a revocação é `3/12 = 25%`. Ruído são resultados recuperados não relevantes; silêncio são relevantes não recuperados.\n\nEm itens C/E, procure a pergunta escondida no denominador: “entre os recuperados?” indica precisão; “entre todos os relevantes?” indica revocação. Os exemplos a seguir são autorais.\n\n| Afirmação autoral para análise | Gabarito | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"A taxa de revocação mede a proporção de documentos relevantes recuperados em relação ao total de documentos recuperados pela busca.\"* | **ERRADO** | Essa é a definição de **Precisão** ($a / [a+b]$). A Revocação calcula em relação ao total de relevantes existentes na base ($a / [a+c]$). |\n| *\"A literatura cinzenta é classificada epistemologicamente como fonte secundária devido ao seu formato não convencional.\"* | **ERRADO** | Ser cinzenta não define sozinho a categoria: circulação e função são eixos distintos. |\n| *\"Em sistemas de recuperação ideais, é rotineiro alcançar simultaneamente 100% de precisão e 100% de revocação em buscas amplas.\"* | **ERRADO** | Não há proporcionalidade inversa universal. Obter 100% em ambas é possível em um conjunto/teste definido, mas não pode ser presumido rotineiro em toda busca ampla. |\n| *\"O silêncio documental decorre da recuperação de documentos irrelevantes que poluem o resultado da pesquisa.\"* | **ERRADO** | Recuperar itens irrelevantes é **RUÍDO** ($b$). O **SILÊNCIO** ($c$) é a não recuperação de documentos relevantes que existiam na base. |\n\n**Aplicação e recuperação:** Uma busca em pequeno conjunto rotulado encontra exatamente os cinco relevantes e nada mais. P=R=100% nesse teste; o resultado não prova cobertura perfeita de toda internet nem generalização a outras consultas.",
  teoriaDidaticaMarkdown: "Tipologia descreve função; não certifica verdade. Literatura cinzenta não é sinônimo de sigilo, ausência de ISBN ou fonte sempre primária. Avalie propósito, autoria, método e data. Precisão = relevantes recuperados/recuperados; revocação = relevantes recuperados/relevantes. F1 é média harmônica. Ambas podem melhorar; denominadores nulos e julgamentos incompletos exigem tratamento explícito.",
  checkpoints: [
  {
    "id": "cp-4-2-1",
    "pergunta": "Micro-Checkpoint 1: Classificação de Fontes de Informação",
    "item": "Na tipologia tripartite adotada nesta aula, bibliografias de bibliografias e guias de fontes, cuja função é orientar a localização de outros instrumentos, são classificados como fontes primárias.",
    "gabarito": "E",
    "justificativa": "Nesse enquadramento, funcionam como fontes terciárias. Tipologias de autores diferentes podem organizar casos de outro modo.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "versao_correta": "Na tipologia adotada, esses guias são terciários."
  },
  {
    "id": "cp-4-2-2",
    "pergunta": "Micro-Checkpoint 2: Natureza da Literatura Cinzenta",
    "item": "Literatura cinzenta abrange produção fora dos circuitos editoriais comerciais usuais; um relatório de pesquisa original nesse circuito pode constituir fonte primária para a pesquisa científica ou legislativa.",
    "gabarito": "C",
    "justificativa": "A circulação caracteriza a literatura cinzenta; conteúdo e função caracterizam a fonte primária. O exemplo não autoriza dizer que toda literatura cinzenta é primária.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga."
  },
  {
    "id": "cp-4-2-3",
    "pergunta": "Micro-Checkpoint 3: Tipologia das Fontes de Informação de Grogan",
    "item": "Na classificação tripartite em que as bibliografias de bibliografias orientam o acesso a outras fontes, esses documentos são fontes secundárias em vez de terciárias.",
    "gabarito": "E",
    "justificativa": "O critério explicitado é de guia de fontes, enquadrado aqui como terciário; não se deve confundir bibliografia comum e bibliografia de bibliografias.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "versao_correta": "Na classificação explicitada, bibliografias de bibliografias são terciárias."
  },
  {
    "id": "rt-4-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um documento primário é necessariamente verdadeiro e superior a toda fonte secundária.",
    "gabarito": "E",
    "justificativa": "Originalidade/função não certificam método ou exatidão.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "editalRef": "Bloco E - Item 2.1 e 2.2",
    "habilidade": "aplicar",
    "versao_correta": "A qualidade deve ser avaliada independentemente da categoria."
  },
  {
    "id": "rt-4-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na tipologia tripartite adotada, uma bibliografia de bibliografias orienta a localização e é classificada como terciária.",
    "gabarito": "C",
    "justificativa": "O critério é a função de guia de fontes.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "editalRef": "Bloco E - Item 2.1 e 2.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Ter ISBN e acesso aberto exclui necessariamente um relatório da literatura cinzenta.",
    "gabarito": "E",
    "justificativa": "Identificador e publicidade não definem sozinhos o circuito editorial.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "editalRef": "Bloco E - Item 2.1 e 2.2",
    "habilidade": "aplicar",
    "versao_correta": "Literatura cinzenta pode ter ISBN e ampla circulação."
  },
  {
    "id": "rt-4-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma fonte institucional autêntica pode ser inadequada para responder sobre o presente quando seus dados se referem a outro período.",
    "gabarito": "C",
    "justificativa": "Autenticidade e adequação temporal são critérios diferentes.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "editalRef": "Bloco E - Item 2.1 e 2.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-2-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Com 20 recuperados, 10 relevantes recuperados e 25 relevantes na base, precisão é 50% e revocação é 40%.",
    "gabarito": "C",
    "justificativa": "Precisão usa recuperados; revocação usa todos os relevantes.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "editalRef": "Bloco E - Item 2.1 e 2.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-4-2-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "É matematicamente impossível melhorar precisão e revocação ao mesmo tempo.",
    "gabarito": "E",
    "justificativa": "O exemplo numérico da aula melhora as duas sem contradição.",
    "fonte": "Cunha e Cavalcanti, Dicionário de biblioteconomia e arquivologia (2008), PDF do projeto; Lancaster, Indexação e resumos (2004); Manning et al. (2008), capítulo 8; definições de literatura cinzenta Luxemburgo/Praga.",
    "editalRef": "Bloco E - Item 2.1 e 2.2",
    "habilidade": "aplicar",
    "versao_correta": "Métodos ou consultas podem melhorar ambas conforme os itens recuperados."
  },
  {
    "id": "rt-m4-precisao",
    "pergunta": "Aplique o exemplo e julgue a afirmação.",
    "item": "Uma busca encontra 10 documentos, dos quais 4 são relevantes; há 8 relevantes na coleção avaliada. A precisão é 50% e a revocação, 40%.",
    "gabarito": "E",
    "justificativa": "A precisão é 4/10 = 40%, e a revocação é 4/8 = 50%. O item trocou os denominadores.",
    "fonte": "Exemplo autoral elaborado a partir das fontes indicadas na aula.",
    "editalRef": "Bloco E — Recuperação e acesso à informação",
    "habilidade": "aplicar",
    "versao_correta": "A precisão é 40%, e a revocação é 50%."
  },
  {
    "id": "rt-oficina-4-2",
    "pergunta": "Aplique a oficina e julgue a afirmação.",
    "item": "Se 4 dos 10 recuperados são relevantes e há 8 relevantes na coleção avaliada, a precisão é 50% e a revocação é 40%.",
    "gabarito": "E",
    "justificativa": "Precisão = 4/10 = 40%; revocação = 4/8 = 50%. O item trocou os denominadores.",
    "fonte": "Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 8; dados hipotéticos.",
    "editalRef": "Organização, representação, recuperação e mediação da informação",
    "habilidade": "aplicar",
    "versao_correta": "A precisão é 40% e a revocação é 50%."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-4-2-fonte-cunha",
      "nome": "Cunha e Cavalcanti — Dicionário de biblioteconomia e arquivologia (2008)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Cunha e Cavalcanti — Dicionário de biblioteconomia e arquivologia (2008)",
      "ideiaChave": "PDF do projeto; conceitos de fontes e recuperação; respeitar variações tipológicas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-2-fonte-grey",
      "nome": "Biblioteca Nacional de Tecnologia da República Tcheca — Grey literature definition",
      "ano": "Referência de consulta",
      "obraPrincipal": "Biblioteca Nacional de Tecnologia da República Tcheca — Grey literature definition",
      "ideiaChave": "Definições de Luxemburgo e Praga; circuitos de produção e distribuição.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-4-2-fonte-iir",
      "nome": "Manning, Raghavan e Schütze — Evaluation of unranked retrieval sets",
      "ano": "Referência de consulta",
      "obraPrincipal": "Manning, Raghavan e Schütze — Evaluation of unranked retrieval sets",
      "ideiaChave": "Precisão, revocação e F; conjunto, consulta e julgamentos definidos.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-4-2-4",
      "afirmacao": "Uma fonte institucional autêntica pode ser inadequada para responder sobre o presente quando seus dados se referem a outro período.",
      "gabarito": "C",
      "porQue": "Autenticidade e adequação temporal são critérios diferentes."
    },
    {
      "id": "memoria-rt-4-2-5",
      "afirmacao": "Com 20 recuperados, 10 relevantes recuperados e 25 relevantes na base, precisão é 50% e revocação é 40%.",
      "gabarito": "C",
      "porQue": "Precisão usa recuperados; revocação usa todos os relevantes."
    },
    {
      "id": "memoria-rt-4-2-6",
      "afirmacao": "É matematicamente impossível melhorar precisão e revocação ao mesmo tempo.",
      "gabarito": "E",
      "porQue": "O exemplo numérico da aula melhora as duas sem contradição."
    }
  ]
},

versaoTeoria: "2026-11-04.oficinas-2",
unidadesAprendizagem: [
  {
    "id": "sub-4-2-oficina",
    "titulo": "Oficina aplicada — Precisão e revocação sem decorar frações",
    "objetivos": [
      "Aplicar os conceitos em situação concreta e justificar o julgamento."
    ],
    "conteudo": "**Situação.** Para uma pesquisa, avaliadores identificam **8 documentos relevantes** em uma coleção. A busca devolve **10 documentos**; ao examiná-los, a equipe considera **4 relevantes**.\n\n**Desenhe quatro grupos:**\n\n| | Relevantes | Não relevantes |\n|---|---:|---:|\n| Recuperados | 4 | 6 |\n| Não recuperados | 4 | Não informado |\n\nO grupo relevante não recuperado é `8 − 4 = 4`. Para saber o último número seria necessário conhecer o tamanho total da coleção; não o invente.\n\n**Precisão pergunta:** “Entre os 10 que vieram, quantos servem?” `4/10 = 40%`. **Revocação pergunta:** “Entre os 8 relevantes existentes no conjunto avaliado, quantos encontramos?” `4/8 = 50%`. O numerador coincide neste exemplo; os denominadores respondem a perguntas distintas.\n\n**Ruído e silêncio.** Os seis não relevantes recuperados ilustram ruído; os quatro relevantes não encontrados ilustram silêncio. Na operação real, conhecer todos os relevantes da coleção pode ser difícil. O cálculo de revocação pressupõe um conjunto e julgamentos de relevância definidos ou um método de estimativa explicitado.\n\n**Agora compare.** Uma nova busca pode encontrar mais relevantes e também mais irrelevantes. Calcule novamente; não suponha que a precisão necessariamente caia sempre que a revocação subir.",
    "checkpointIds": [
      "rt-oficina-4-2"
    ]
  },
  {
    "id": "sub-4-2-bloco-1",
    "titulo": "Conceito e Tipologia Epistemológica das Fontes de Informação",
    "objetivos": [
      "Identificar função e proveniência sem usar tipologia como selo de verdade."
    ],
    "conteudo": "**A fonte é o caminho para responder a uma pergunta.** Se uma pessoa quer saber o conteúdo de uma lei, consulte o texto normativo em fonte apropriada; se quer localizar estudos sobre ela, uma base bibliográfica pode apontar artigos; se procura quem pesquisa o tema, um diretório ou uma pessoa especializada pode ajudar. A escolha depende da pergunta, da data e do contexto.\n\nUma fonte pode ser documento, instituição, base ou pessoa. Primária, secundária e terciária são classificações úteis para descrever funções em certos contextos, não notas de qualidade: a fonte original também precisa ser criticamente avaliada.\n\nConforme a síntese doutrinária associada a **Murilo Bastos da Cunha** (*Para Saber Mais: Fontes de Informação em Ciência e Tecnologia*):\n\nUma fonte pode ser documento, pessoa, instituição ou recurso usado para atender uma necessidade. Identifique sua função, proveniência e contexto. A classificação primária/secundária/terciária é instrumento de análise, não selo de confiabilidade ou hierarquia de valor.\nA literatura canônica internacional (**Denis Grogan, 1995; Murilo Bastos da Cunha, 2001; Bernadete Campello, 2000**) categoriza as fontes de informação em três categorias funcionais, com variações entre autores, segundo o grau de originalidade e tratamento documentário:\n\n```timeline\nP | 1. FONTES PRIMÁRIAS | Conhecimento Original e Inédito | Artigos com pesquisa original, teses e relatórios com resultados originais; atos oficiais como evidência do ato publicado\n---> Indexação, Condensação e Organização\nS | 2. FONTES SECUNDÁRIAS | Tratamento e Localização Rápida | Bases referenciais (Scopus, LexML), catálogos OPAC/RVBI, índices, bibliografias, dicionários e enciclopédias\n---> Sinalização e Guias de Rota\nT | 3. FONTES TERCIÁRIAS | Guias e Sinalizadores de Tráfego | Bibliografias de bibliografias, guias de bibliotecas, diretórios de centros de pesquisa e guias de fontes, conforme a classificação adotada\n```\n\n**Aplicação e recuperação:** Um diário oficial é primário para comprovar a publicação de um ato; uma análise comparada desse ato é doutrina. Se a pesquisa é sobre como a imprensa interpretou a norma, o próprio artigo pode ser evidência primária desse discurso. O papel depende da pergunta.",
    "checkpointIds": [
      "rt-4-2-1"
    ]
  },
  {
    "id": "sub-4-2-bloco-2",
    "titulo": "Tipologia tripartite: explicitar o critério adotado",
    "objetivos": [
      "Classificar fontes segundo uma referência explícita."
    ],
    "conteudo": "**Acompanhe o trajeto de uma pesquisa.** Uma equipe faz uma pesquisa de campo e publica resultados originais em um artigo: para estudar esses resultados, o artigo pode funcionar como fonte primária. Uma base de resumos organiza registros e permite localizá-lo: exerce função secundária. Um guia que organiza fontes ou bases pode funcionar como terciário, segundo a tipologia adotada.\n\nO mesmo documento pode cumprir funções diferentes conforme a pergunta. Uma revisão é secundária em relação aos estudos que sintetiza, mas seu próprio método pode ser fonte primária para uma pesquisa sobre revisões. O nome “artigo” sozinho não resolve todos os casos.\n\n| Nível Tipológico | Conceito e Natureza | Características Técnicas | Exemplos Gerais Canônicos | Exemplos no Ambiente Legislativo / Jurídico |\n| :--- | :--- | :--- | :--- | :--- |\n| **Fontes Primárias** | Registram o conhecimento original pela primeira vez; registros ou resultados originais para a finalidade considerada; podem conter análise e interpretação. | Características variáveis conforme o documento e a finalidade da pesquisa. | Artigos, teses, trabalhos de anais e relatórios quando registram pesquisa ou dados originais; patentes como registros de invenções. | **Projetos de Lei (PLs), Diário Oficial da União (DOU), Diário da Justiça (DJe), acórdãos na íntegra, transcrições taquigráficas.** |\n| **Fontes Secundárias** | Documentos que resultam da organização, análise e sumarização das fontes primárias. | Organizam ou analisam fontes; podem envolver contribuição intelectual original. A função de localização não significa ausência de toda novidade. | Bases de resumos/índices (Scopus, Web of Science, BRAPCI), bibliografias temáticas, catálogos OPAC, dicionários, enciclopédias. | **Catálogo da Rede RVBI, Portal LexML Brasil, ementários jurisprudenciais, compilações legislativas consolidadas.** |\n| **Fontes Terciárias** | Recursos concebidos para apontar a localização e instruir o uso de fontes primárias e secundárias. | São \"sinalizadores de tráfego\"; guias de alto nível sobre a literatura existente. | **Bibliografias de bibliografias**, guias de literatura especializada, diretórios de centros de pesquisa, guias de fontes, conforme a classificação adotada. | **Guia do Usuário da Biblioteca Pedro Aleixo, Guia de Fontes Jurídicas do Senado, diretório de comissões temáticas.** |\n\n> [!CAUTION]\n> **Treino autoral no formato certo ou errado:** “Bibliografias de bibliografias e guias de fontes são, necessariamente, fontes secundárias.” Na tipologia tripartite adotada aqui, são **TERCIÁRIAS**; enunciados que indiquem outra classificação precisam ser julgados por essa referência. Já a bibliografia comum (que lista livros ou artigos) é **FONTE SECUNDÁRIA**.\n\n**Aplicação e recuperação:** Um guia que leva a bibliografias é terciário na tipologia adotada. Já uma bibliografia de obras sobre o tema funciona como instrumento secundário de localização. Não deduza confiabilidade maior apenas pelo nível.",
    "checkpointIds": [
      "cp-4-2-1",
      "cp-4-2-3",
      "rt-4-2-2"
    ]
  },
  {
    "id": "sub-4-2-bloco-3",
    "titulo": "A Literatura Cinzenta (*Grey Literature*)",
    "objetivos": [
      "Distinguir circulação cinzenta e função documental."
    ],
    "conteudo": "**Cinzenta descreve circulação, não confiabilidade.** Imagine uma nota técnica produzida por uma biblioteca de tribunal e disponibilizada no repositório institucional fora dos canais editoriais comerciais usuais. Ela pode ser literatura cinzenta e trazer análise útil; é preciso verificar autoria, data e método. Uma tese também pode circular por repositório e apresentar pesquisa original.\n\nTer ISBN, estar na internet ou ser gratuita não decide, isoladamente, se uma obra é cinzenta. Tampouco ser cinzenta significa ser secreta ou obrigatoriamente secundária. A Cebraspe pode misturar o eixo de **circulação** com o da **função da fonte**.\n\nA Literatura Cinzenta compreende a produção documental de caráter técnico, acadêmico, legislativo ou corporativo **não disponibilizada pelos canais comerciais usuais de distribuição editorial e livrarias**:\n* **Características:** Pode circular em redes, repositórios ou instituições fora do circuito editorial comercial usual. **Pode ter ISBN, ampla divulgação e controle bibliográfico**; não é definida por segredo, baixa qualidade ou ausência obrigatória de identificador.\n* **Exemplos no Poder Público:**\n  * Relatórios finais de Comissões Parlamentares de Inquérito (CPIs);\n  * Notas técnicas e estudos de consultoria legislativa e orçamentária da Câmara dos Deputados;\n  * Relatórios técnicos de fiscalização e auditoria do Tribunal de Contas da União (TCU);\n  * *Preprints* acadêmicos, apostilas de treinamento interno e atas de sessões reservadas.\n* **Valor para o Parlamento:** Pode trazer resultados e análises úteis, inclusive anteriores à publicação comercial. **Cinzenta é uma dimensão de circulação/produção; primária ou secundária depende da função e do conteúdo.** Um relatório original e uma revisão institucional não se tornam a mesma categoria apenas por circularem no mesmo repositório.\n\n**Aplicação e recuperação:** Um relatório técnico original aberto e com ISBN pode continuar fora do circuito comercial usual. Uma revisão institucional também pode ser cinzenta, sem se tornar automaticamente pesquisa primária. Formato, acesso e originalidade não são a mesma dimensão.",
    "checkpointIds": [
      "cp-4-2-2",
      "rt-4-2-3"
    ]
  },
  {
    "id": "sub-4-2-bloco-4",
    "titulo": "Critérios Científicos de Avaliação de Fontes de Informação (Campello, Cendón & Tomaél)",
    "objetivos": [
      "Avaliar adequação, método, atualização e propósito."
    ],
    "conteudo": "**Como escolher entre duas páginas?** Para responder sobre uma lei, confira quem publicou a informação, a data, a versão, as referências ao texto oficial e se a página cobre o período solicitado. Um texto antigo pode ser adequado para estudar o que vigorava naquela data, embora não sirva sozinho para afirmar a regra atual.\n\nAutoridade, exatidão, atualidade, cobertura e propósito funcionam em conjunto: uma página institucional pode ter erro ou versão desatualizada; um domínio conhecido não dispensa conferência. Registre a data de acesso e as limitações relevantes para o usuário.\n\nDiante da profusão de dados não validados na Internet, o bibliotecário legislativo aplica critérios científicos rigorosos para avaliar adequação e limites das fontes, sem garantia automática por credencial ou domínio institucional:\n\n1. **Autoridade (*Authority*):** Credibilidade científica, titulação e reputação institucional do autor ou órgão emissor. Identificação clara da entidade patrocinadora e comitê editorial.\n2. **Exatidão e Rigor Factual (*Accuracy*):** Isenção de erros factuais, coerência metodológica, citações explícitas de fontes originais e reprodutibilidade dos dados.\n3. **Atualidade (*Currency*):** Frequência de atualização, visibilidade da data da última revisão e validade das remissões a leis que já foram revogadas.\n4. **Cobertura e Escopo (*Coverage*):** Profundidade analítica e abrangência temporal e geográfica condizente com o escopo prometido.\n5. **Propósito e vieses:** identificar finalidade, seleção, perspectiva, método e conflitos de interesse. Uma fonte pode ser útil para estudar um posicionamento mesmo sem neutralidade; transparência não certifica ausência de viés.\n6. **Acessibilidade, Navegabilidade e Usabilidade:** Facilidade de recuperação, estabilidade do servidor e conformidade com as diretrizes de acessibilidade na Web (WCAG/e-MAG).\n\n**Aplicação e recuperação:** A página de um órgão é autêntica, mas a tabela refere-se a 2018. Pode ser fonte adequada para série histórica e inadequada para afirmar o dado atual. Autoridade, atualidade e adequação precisam ser examinadas separadamente.",
    "checkpointIds": [
      "rt-4-2-4"
    ]
  },
  {
    "id": "sub-4-2-bloco-5",
    "titulo": "Avaliação Científica de Sistemas de Recuperação da Informação: Os Testes de Cranfield (Cyril Cleverdon)",
    "objetivos": [
      "Calcular métricas e reconhecer limites dos julgamentos."
    ],
    "conteudo": "**Do resultado à avaliação: conte quatro grupos.** Em uma coleção avaliada existem 8 documentos relevantes. A busca encontra 10 documentos, dos quais 4 são relevantes. Portanto: 4 relevantes recuperados; 6 não relevantes recuperados; 4 relevantes não recuperados; o número de não relevantes não recuperados exige conhecer o tamanho total da coleção.\n\nPrecisão = `4/10 = 40%`: de tudo que veio, quanto era relevante? Revocação = `4/8 = 50%`: de tudo que era relevante, quanto veio? O julgamento de relevância e a coleção precisam estar definidos; uma busca operacional comum nem sempre conhece todos os relevantes não recuperados.\n\nNa sequência de estudos iniciada no fim da década de 1950 e desenvolvida na década de 1960, na Faculdade de Aeronáutica de Cranfield (Inglaterra), **Cyril Cleverdon** conduziu os célebres **Testes de Cranfield (Cranfield I e Cranfield II)**, que fundaram a metodologia científica moderna de avaliação de sistemas de RI:\n\n```decision\nSTART: Coleção de Teste Controlada | Acervo estático e conhecido de documentos técnicos\nSTEP: Consultas Padronizadas | Conjunto fixo de perguntas formuladas para o teste\nSTEP: Julgamento Humano de Relevância | Especialistas avaliam pertinência prévia documento a documento\nSTEP: Matriz de Contingência 2x2 | Cruzamento: Recuperados vs. Relevantes (Verdadeiros/Falsos Positivos)\nEND: Cálculo das Métricas de Desempenho | Revocação (Recall: % resgatados) e Precisão (Precision: % pertinentes)\n```\n\n#### A. A Matriz de Contingência 2x2\nPara qualquer consulta executada sobre uma base documental, a coleção total divide-se em quatro categorias, assumindo um conjunto fixo e julgamento binário de relevância:\n\n| Situação Documental | Documentos Pertinentes / Relevantes | Documentos Não Relevantes | Total da Situação |\n| :--- | :---: | :---: | :---: |\n| **Documentos Recuperados pelo Sistema** | **$a$** (Verdadeiros Positivos) | **$b$** (Falsos Positivos — **RUÍDO**) | $a + b$ (Total Recuperado) |\n| **Documentos Não Recuperados pelo Sistema** | **$c$** (Falsos Negativos — **SILÊNCIO**) | **$d$** (Verdadeiros Negativos) | $c + d$ (Total Não Recuperado) |\n| **Total da Coleção** | $a + c$ (Total de Relevantes na Base) | $b + d$ (Total de Não Relevantes) | $N = a + b + c + d$ |\n\n#### B. Fórmulas Canônicas Cobradas pelo Cebraspe\n1. **Revocação (*Recall* — $R$):**\n   Mede a capacidade do sistema em encontrar **TODOS os documentos relevantes** existentes na base:\n   $R = \\frac{a}{a + c} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Relevantes Existentes na Base}}$\n2. **Precisão (*Precision* — $P$):**\n   Mede a capacidade do sistema em recuperar **APENAS documentos relevantes**, sem entulhar o usuário com lixo:\n   $P = \\frac{a}{a + b} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Documentos Recuperados pelo Sistema}}$\n3. **Silêncio Documental:**\n   Corresponde aos documentos relevantes que o sistema **deixou de encontrar** ($c$).\n   $\\text{Taxa de Silêncio} = 1 - R = \\frac{c}{a + c}$\n4. **Ruído Documental:**\n   Corresponde aos documentos inúteis que o sistema **entregou por engano** ($b$).\n   $\\text{Taxa de Ruído} = 1 - P = \\frac{b}{a + b}$\n5. **Medida F (*F-Measure / F1-Score*):**\n   F1 é a média harmônica de precisão e revocação com igual peso. F-beta permite pesos diferentes; não se confunde com média aritmética:\n   $F_1 = 2 \\times \\frac{P \\times R}{P + R}$\n6. **Coeficiente de Queda / Ruído Global (*Fallout* — $F$):**\n   A proporção de documentos irrelevantes que foram indevidamente recuperados:\n   $\\text{Fallout} = \\frac{b}{b + d} = \\frac{\\text{Não Relevantes Recuperados}}{\\text{Total de Não Relevantes na Coleção}}$\n\n#### C. Compromisso frequente não é lei universal inversa\n\nExpandir um conjunto pode recuperar relevantes e ruído em proporções diferentes. Há compromissos em certos cortes ou alterações de consulta, mas **não existe proporcionalidade inversa obrigatória** entre precisão e revocação. Um novo método pode melhorar ambas.\n\nExemplo: há 25 relevantes na base. Busca A recupera 20 itens, dos quais 10 relevantes: P=10/20=0,50; R=10/25=0,40. Busca B recupera 20, dos quais 15 relevantes: P=15/20=0,75; R=15/25=0,60. As duas métricas melhoraram. F1 de A é aproximadamente 0,444; de B, aproximadamente 0,667.\n\nBusca exaustiva pode priorizar revocação; uma tarefa rápida pode priorizar precisão nos primeiros resultados. A escolha depende de custo dos erros e necessidade, não de uma superioridade universal. Sem conhecer todos os relevantes, revocação absoluta pode ser difícil de estimar. Julgamentos incompletos, divergência entre avaliadores e recorte temporal limitam a avaliação.\n\n**Casos-limite:** se nada é recuperado, o denominador de precisão é zero; se não há relevantes na coleção, o de revocação é zero. Convenções de cálculo devem ser declaradas, não dividir por zero silenciosamente.\n\n**Aplicação e recuperação:** Se a=12, b=8, c=18, d=62, precisão=12/20=60%; revocação=12/30=40%; ruído=8/20=40%; fallout=8/70≈11,43%. Trocar 20 por 70 no denominador muda a métrica, ainda que ambos envolvam irrelevantes.",
    "checkpointIds": [
      "rt-4-2-5",
      "rt-m4-precisao"
    ]
  },
  {
    "id": "sub-4-2-bloco-6",
    "titulo": "Enunciados autorais: critérios e denominadores",
    "objetivos": [
      "Detectar troca de denominadores e generalização indevida."
    ],
    "conteudo": "**Uma verificação rápida de denominadores.** Se uma busca encontrou 6 documentos e 3 eram pertinentes, sua precisão é `3/6 = 50%`. Se havia 12 pertinentes no conjunto avaliado, a revocação é `3/12 = 25%`. Ruído são resultados recuperados não relevantes; silêncio são relevantes não recuperados.\n\nEm itens C/E, procure a pergunta escondida no denominador: “entre os recuperados?” indica precisão; “entre todos os relevantes?” indica revocação. Os exemplos a seguir são autorais.\n\n| Afirmação autoral para análise | Gabarito | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"A taxa de revocação mede a proporção de documentos relevantes recuperados em relação ao total de documentos recuperados pela busca.\"* | **ERRADO** | Essa é a definição de **Precisão** ($a / [a+b]$). A Revocação calcula em relação ao total de relevantes existentes na base ($a / [a+c]$). |\n| *\"A literatura cinzenta é classificada epistemologicamente como fonte secundária devido ao seu formato não convencional.\"* | **ERRADO** | Ser cinzenta não define sozinho a categoria: circulação e função são eixos distintos. |\n| *\"Em sistemas de recuperação ideais, é rotineiro alcançar simultaneamente 100% de precisão e 100% de revocação em buscas amplas.\"* | **ERRADO** | Não há proporcionalidade inversa universal. Obter 100% em ambas é possível em um conjunto/teste definido, mas não pode ser presumido rotineiro em toda busca ampla. |\n| *\"O silêncio documental decorre da recuperação de documentos irrelevantes que poluem o resultado da pesquisa.\"* | **ERRADO** | Recuperar itens irrelevantes é **RUÍDO** ($b$). O **SILÊNCIO** ($c$) é a não recuperação de documentos relevantes que existiam na base. |\n\n**Aplicação e recuperação:** Uma busca em pequeno conjunto rotulado encontra exatamente os cinco relevantes e nada mais. P=R=100% nesse teste; o resultado não prova cobertura perfeita de toda internet nem generalização a outras consultas.",
    "checkpointIds": [
      "rt-4-2-6"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cunha",
    "titulo": "Cunha e Cavalcanti — Dicionário de biblioteconomia e arquivologia (2008)",
    "localizador": "PDF do projeto; conceitos de fontes e recuperação; respeitar variações tipológicas.",
    "url": "https://github.com/Heuller/hnc/tree/auditoria-2026-10/acervo-estudos"
  },
  {
    "id": "grey",
    "titulo": "Biblioteca Nacional de Tecnologia da República Tcheca — Grey literature definition",
    "localizador": "Definições de Luxemburgo e Praga; circuitos de produção e distribuição.",
    "url": "https://nusl.stk.cz/en/grey-literature/grey-literature-definition"
  },
  {
    "id": "iir",
    "titulo": "Manning, Raghavan e Schütze — Evaluation of unranked retrieval sets",
    "localizador": "Precisão, revocação e F; conjunto, consulta e julgamentos definidos.",
    "url": "https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-unranked-retrieval-sets-1.html"
  }
],
};
