import type { ModuloFilho } from '../../../domain/types';

export const submodulo144: ModuloFilho = {
  id: 'sub-14-4',
  numero: '14.4',
  editalRef: 'Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)',
  preRequisitos: ["sub-6-5","sub-6-6"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-6-5",
          "titulo": "Sistemas Informacionais e Bancos de Dados",
          "motivo": "Modelagem relacional (MER) e extração de dados."
      },
      {
          "submoduloId": "sub-6-6",
          "titulo": "SQL, Regex e APIs",
          "motivo": "Consultas SQL e filtros de pré-processamento de dados."
      }
  ],
  titulo: 'Ciência de Dados, Mineração de Dados/Textos, Visualização e Storytelling',
  antesDeLer: [
  {
    "termo": "Variável e escala",
    "definicao": "O tipo de dado e sua escala limitam operações e interpretações.",
    "exemploBiblioteca": "Código numérico de categoria não se torna medida quantitativa por usar algarismos."
  },
  {
    "termo": "TF-IDF",
    "definicao": "Ponderação que depende da fórmula e do corpus definidos.",
    "exemploBiblioteca": "Um termo raro pode ser discriminativo, mas também pode ser erro de grafia."
  }
],
  descricaoCurta:
    "Distinguir formato, tipo de variável e significado de códigos numéricos. Calcular medidas e explicitar o critério usado. Justificar limpeza e distinguir ausência, duplicidade e transformação de escala. Escolher representação e evitar conclusões que o desenho não sustenta. Distinguir Power Query/M, DAX e níveis de cálculo. Distinguir tarefas preditivas e descritivas e reconhecer iteração entre fases. Separar frequência no documento e frequência documental e reconhecer variantes.",
  tempoEstimadoMinutos: 29,
  autoresChave: [
  "NIST/SEMATECH e-Handbook — Box Plot",
  "Manning, Raghavan e Schütze — Introduction to Information Retrieval",
  "scikit-learn — Feature extraction",
  "Microsoft — DAX overview",
  "Tableau — Filters and Level of Detail Expressions",
  "IBM — CRISP-DM Help Overview"
],
  alertasCebraspe: [
  "Ausência e valor zero têm significados diferentes. A substituição muda distribuição e medidas em geral e precisa de justificativa conforme o mecanismo de ausência e a tarefa.",
  "O algoritmo encontra uma estrutura conforme representação, métrica e parâmetros. A interpretação jurídica e a validade da categoria requerem avaliação adicional.",
  "A negação pode alterar radicalmente a proposição. Frequência global não torna um termo semanticamente inútil para toda tarefa. Stopwords devem ser avaliadas no domínio e no objetivo."
],
  quadroComparativo: {
  "titulo": "Dados: distinguir operação e conclusão",
  "colunas": [
    "Operação",
    "O que descreve",
    "Não prova"
  ],
  "linhas": [
    [
      "Média",
      "Centro aritmético",
      "Valor típico robusto a todo extremo"
    ],
    [
      "Box plot",
      "Resumo por convenção",
      "Que todo ponto externo é erro"
    ],
    [
      "Correlação",
      "Associação",
      "Causalidade isoladamente"
    ],
    [
      "Agrupamento",
      "Estrutura por similaridade",
      "Categoria jurídica validada"
    ],
    [
      "TF-IDF",
      "Peso conforme corpus e fórmula",
      "Relevância semântica universal"
    ]
  ]
},
  teoriaDensaMarkdown: "### Dados e variáveis: representar antes de calcular\n\nDados **estruturados** têm organização explícita adequada a operações como consultas e agregações; **semiestruturados** podem usar marcadores e hierarquias, como JSON e XML. **Não estruturados**, numa tarefa analítica, não seguem o mesmo esquema de campos. Isso não significa ausência de linguagem, estrutura interna de arquivo ou significado. Não há aqui uma porcentagem verificada do acervo parlamentar em cada formato.\n\nUma variável **nominal** distingue categorias sem ordem, como tipo documental; uma **ordinal** inclui ordem, como graus de prioridade, sem garantir intervalos iguais. Variáveis **quantitativas** expressam contagens ou medidas. Um código 1, 2, 3 atribuído a categorias não se transforma automaticamente em quantidade com média significativa.\n\n**Exemplo:** registrar “alta=3, média=2, baixa=1” não prova que a distância entre alta e média é igual à distância entre média e baixa em termos de risco real. Multiplicar esses códigos exige método e interpretação definidos. O número impresso não cria escala métrica por si.\n\n**Contagem e medida:** número de solicitações é discreto; duração pode ser modelada como medida contínua, embora a coleta seja arredondada. Valores monetários também exigem atenção à unidade e precisão do registro. A classificação estatística descreve a representação e o fenômeno, não apenas o tipo do arquivo no computador.\n\nAntes de calcular, documente cada campo, unidade, valores permitidos, significado de ausências e chave de identificação. A mesma coluna chamada data pode conter publicação, acesso ou entrada no sistema. Somar ou comparar campos sem esclarecer esse significado pode produzir resultado exato de uma pergunta errada.\n\n### Estatística descritiva: centro, dispersão e observações discrepantes\n\nPara os valores **2, 3, 3, 4, 18**, a soma é 30, a média é 6, a mediana é o terceiro valor, 3, e a moda é 3. A presença de 18 desloca a média; a mediana descreve o centro posicional e é menos sensível nesse exemplo. Menos sensível não significa que toda alteração no conjunto seja irrelevante.\n\n**Variância** mede dispersão quadrática; é preciso distinguir fórmula populacional e amostral. **Desvio-padrão** é sua raiz e retorna à unidade da medida. **IQR** é Q3-Q1. Métodos de cálculo de quartis podem variar; um exercício deve fornecer o método ou os quartis quando a diferença de convenção muda a resposta.\n\nNo box plot usual, a linha da caixa representa a mediana e as bordas, Q1 e Q3. Há variantes de hastes: algumas mostram extremos; outras adotam cercas como 1,5 IQR e destacam observações externas. A interpretação depende da convenção indicada no gráfico, conforme exemplifica o NIST.\n\n**Exemplo resolvido:** Q1=4, Q3=8. IQR=4. As cercas de 1,5 IQR são -2 e 14. Um valor 15 é candidato a observação discrepante por esse critério. Isso não o transforma automaticamente em erro: pode ser uma ocorrência real importante. Investigue antes de excluir.\n\n**Correlação** descreve associação. Pearson focaliza associação linear no uso pertinente; Spearman trabalha com postos e associação monotônica. Uma associação pode decorrer de outras variáveis ou seleção. Uso da biblioteca e desempenho estudantil, isoladamente, não demonstram causalidade.\n\n### Preparação e fluxo: ETL, ELT e qualidade\n\n**ETL** organiza extração, transformação e carga no destino considerado. **ELT** coloca a transformação depois da carga nesse destino. São descrições de arquitetura; não significam que todo sistema só terá uma transformação nem que um formato seja automaticamente mais moderno ou correto em qualquer cenário.\n\nNa preparação, verifique unidades, tipos, duplicidades, codificação, chaves e valores ausentes. **Zero** pode ser uma medida válida; **ausente** pode significar que não se coletou, não se aplica ou o valor é desconhecido. Substituir todos os ausentes por zero pode criar viés. Excluir linhas ou imputar média/mediana também tem consequências e precisa de justificativa.\n\n**Padronização/normalização de escala** transforma representações. Em um exemplo min-max com limites observados 10 e 30, o valor 20 vira (20-10)/(30-10)=0,5. Isso não significa que o fenômeno se tornou “meio verdadeiro” nem resolve erro de unidade ou significado. Em avaliação de modelos, parâmetros de preparação devem ser tratados para evitar vazamento de informação do teste.\n\n**Pivot/unpivot** reorganiza tabelas conforme a tarefa. Transformar colunas de meses em linhas com mês e valor pode facilitar séries e agregações, mas a operação não certifica integridade. É preciso verificar chaves e totais depois.\n\n**Caso:** a mesma solicitação aparece em duas bases com identificadores relacionados. Unir dados sem reconciliar o registro pode duplicar a contagem e produzir falsa melhora de produtividade. A decisão sobre duplicidade depende da unidade de análise e da proveniência, não apenas da igualdade de duas palavras.\n\n### Visualização e comunicação: o gráfico responde a qual pergunta?\n\n**Barras** apoiam comparação de categorias; **linhas** evidenciam sequência, frequentemente temporal; **histograma** distribui observações em intervalos; **dispersão** relaciona pares de valores. Nenhuma seleção elimina a necessidade de rótulos, unidades, fonte, período e indicação de incerteza quando pertinente.\n\nEm barras que codificam magnitude por comprimento, o zero é uma referência importante: truncar o eixo pode exagerar diferenças. Outros gráficos podem usar escalas diferentes com justificativa e clareza. Uma recomendação visual deve ser conectada à forma de codificação, não apresentada como proibição universal de toda escala não iniciada em zero.\n\n**Histograma:** a escolha de intervalos muda a aparência. Um gráfico muito agregado pode esconder grupos; um excesso de intervalos pode enfatizar ruído. **Box plot:** compara centro e dispersão, mas não revela toda forma da distribuição. Dois conjuntos podem ter resumos parecidos e padrões distintos.\n\n**Exemplo próprio:** atendimentos passaram de 98 para 100. Um eixo que inicia em 97 pode fazer duas unidades parecerem enorme crescimento. O leitor precisa conhecer denominador, escala e período. Se houve mudança na definição de atendimento, a comparação também precisa ser explicitada.\n\nStorytelling com dados organiza uma mensagem para um público e uma decisão. Orientações de Tufte e Knaflic ajudam a reduzir distrações e direcionar leitura; não exigem apagar todo rótulo, contexto ou elemento que não represente um ponto numérico. A cor deve comunicar sem ser o único canal, e o destaque não deve ocultar resultados que contrariem a narrativa.\n\n### Ferramentas analíticas: transformação, modelo e contexto\n\nNo ecossistema Microsoft, **Power Query/M** descreve operações de obtenção e transformação; **DAX** apoia cálculos sobre modelos. Uma **coluna calculada** e uma **medida** têm contextos e usos distintos conforme o modo de armazenamento e a configuração. Não se deve afirmar que toda coluna de todo modelo é sempre materializada em RAM da mesma forma.\n\n**Exemplo:** uma medida de total de solicitações pode somar valores no subconjunto selecionado por um filtro de mês e unidade. Mudar o filtro altera o contexto. A expressão pode também modificar o contexto, de modo que o resultado não depende apenas da aparência da tabela. Relações entre fatos e dimensões precisam representar corretamente as chaves e cardinalidades.\n\nUm **esquema em estrela** organiza fatos e dimensões para análise; não é um selo de desempenho ótimo universal. Uma relação mal definida pode duplicar resultados ou impedir propagação adequada de filtros. O objetivo é modelar a unidade de análise e as perguntas.\n\nNo Tableau, expressões **FIXED, INCLUDE e EXCLUDE** trabalham níveis de detalhe. **FIXED não ignora todo filtro sem exceção**: filtros de contexto, fonte e extração participam de sua ordem de operações. A conclusão depende da etapa e da expressão. Em ferramentas como Looker Studio, conectores, campos calculados e permissões também precisam ser considerados no contexto de produto/versão.\n\nO estudo deve comparar tarefas, não ranquear produtos por “curva fácil/média/difícil” como se fosse propriedade objetiva de todos os usuários. Criar um painel, consultar um modelo e publicar acesso são operações diferentes que podem exigir permissões e licenças próprias.\n\n### Mineração e CRISP-DM: objetivo, processo e avaliação\n\n**CRISP-DM** organiza entendimento do negócio, entendimento dos dados, preparação, modelagem, avaliação e implantação. As fases se relacionam e permitem retorno. Entender a tarefa precede escolher uma técnica: um projeto pode descobrir que a decisão útil depende de qualidade da coleta, não de um modelo mais complexo.\n\n**Classificação** e **regressão** são tarefas preditivas usuais com alvo no treinamento supervisionado. **Agrupamento** e **associação** podem explorar estruturas e coocorrências sem o mesmo alvo. Um agrupamento não vem automaticamente com rótulos jurídicos corretos; a interpretação exige avaliar o domínio.\n\n**Caso:** um sistema busca priorizar solicitações urgentes. A tarefa pode usar rótulos fornecidos por equipe especializada; é preciso avaliar custos de falsos positivos e negativos. Outro sistema agrupa textos para explorar temas: encontrar grupos não demonstra que eles correspondem às classes oficiais de assunto.\n\nAvaliação precisa separar dados de treino e teste conforme o desenho e evitar vazamento, inclusive entre documentos quase duplicados. Um modelo pode parecer ótimo ao rever a mesma família de exemplos. Implantação demanda observar mudança de dados, monitoramento e critérios de retirada ou atualização.\n\nNão existe neste capítulo uma regra de que preparação consuma obrigatoriamente 70–80% de qualquer projeto. O esforço depende da tarefa e do acervo. A relevância da etapa é demonstrada pelos problemas que resolve, e não por um percentual sem corpus ou método.\n\n### Mineração de textos e TF-IDF: calcular com a fórmula declarada\n\nTexto pode ser convertido em representações para busca ou modelos. **Tokenização** define unidades; **stemming** aplica procedimentos para reduzir formas; **lematização** busca formas de dicionário conforme análise e recursos. O resultado depende da língua e da ferramenta: “foram” pode ter análises diferentes conforme o contexto. Não há garantia de que um radical seja palavra completa.\n\n**TF** descreve ocorrência do termo no documento, com diferentes normalizações. **DF** conta em quantos documentos ele ocorre; não quantas vezes aparece no corpus. Na formulação simples **IDF=log10(N/DF)**, um termo em 10 de 100 documentos tem IDF=1; em todos os 100, IDF=0. O produto TF×IDF combina frequência local e discriminação no conjunto.\n\nEsse cálculo não descreve toda implementação. A documentação scikit-learn apresenta variantes com suavização e constante adicional; um termo presente em todos os documentos pode não receber zero naquela definição. Por isso, o item deve fornecer a fórmula quando pede valor exato.\n\n**Stopwords** são escolhidas conforme tarefa; não são palavras sem significado em qualquer contexto. Remover “não” pode inverter uma proposição jurídica. Termo raro também pode ser nome próprio ou conceito decisivo, e não apenas erro. A lei de Zipf descreve uma regularidade aproximada de frequência/posto em corpora, não igualdade exata para toda palavra de todo texto; a hipótese de seleção por frequência associada a Luhn não é garantia universal de máxima relevância semântica numa faixa.\n\n**Exemplo:** em documentos sobre acesso, um termo comum pode discriminar pouco dentro desse corpus e muito em outro. Os pesos dependem da coleção, do pré-processamento e da consulta. Calcular peso não substitui julgar a relevância para a necessidade de informação.",
  teoriaDidaticaMarkdown: "### Revisão: representar, calcular e interpretar\n\nFormato não define sozinho significado ou variável. Categorias numéricas não se tornam métricas automaticamente. Média, mediana e moda respondem a perguntas distintas; quartis exigem convenção. Outlier pede investigação, não exclusão automática. Ausência não é zero; limpeza e imputação precisam de critério. ETL/ELT distinguem posição da transformação. Gráfico precisa de escala, unidade, fonte e contexto. Medidas em modelos dependem do contexto e da expressão. CRISP-DM é iterativo; predição e descrição têm objetivos diferentes. TF, DF e IDF não são a mesma frequência; forneça fórmula para cálculo exato. Stopwords e raridade dependem da tarefa, e correlação não demonstra sozinha causalidade.\n\n**Recupere:** calcule média e mediana de 2,3,3,4,18; calcule a cerca superior com Q1=4 e Q3=8; explique o efeito de tirar não de um texto; descreva uma situação em que o filtro muda uma medida sem alterar os registros originais.\n",
  checkpoints: [
  {
    "id": "cp-14-4-1",
    "pergunta": "Micro-Checkpoint 1: Estatística Descritiva - Box Plot e Outliers",
    "item": "Num box plot cuja caixa representa Q1 a Q3 e cujas observações além das cercas de 1,5 IQR são destacadas, a linha interna da caixa indica necessariamente a média aritmética.",
    "gabarito": "E",
    "justificativa": "Na representação descrita, a linha da caixa indica mediana, não média. A convenção de cercas foi explicitada porque há variantes de hastes. Um ponto destacado é observação a investigar, não prova automática de erro.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot.",
    "versao_correta": "Na representação descrita, a linha interna da caixa indica a mediana."
  },
  {
    "id": "cp-14-4-2",
    "pergunta": "Micro-Checkpoint 2: Mineração de Dados - Processo CRISP-DM e Tarefas",
    "item": "No modelo de processo CRISP-DM, as tarefas descritivas de mineração, a exemplo do agrupamento (clustering) e das regras de associação, destinam-se a prever o comportamento futuro de uma variável-alvo previamente rotulada a partir do treinamento de atributos preditores.",
    "gabarito": "E",
    "justificativa": "O item atribui objetivo preditivo com alvo rotulado às tarefas descritivas mencionadas. Agrupamento e associação, nesse enquadramento, procuram estruturas e relações. O processo CRISP-DM não exige essa troca de tarefas.",
    "fonte": "CRISP-DM — distinção de objetivos e tarefas; exemplos de agrupamento e associação.",
    "versao_correta": "Agrupamento e associação podem explorar padrões sem uma variável-alvo rotulada para a mesma tarefa preditiva."
  },
  {
    "id": "cp-14-4-3",
    "pergunta": "Micro-Checkpoint 3: Text Mining - TF-IDF e Lei de Zipf",
    "item": "Na fórmula IDF=log10(N/DF), em que DF é o número de documentos que contêm o termo, o peso IDF é zero quando o termo aparece em todos os N documentos. A conclusão depende dessa fórmula e não se aplica automaticamente a variantes suavizadas.",
    "gabarito": "C",
    "justificativa": "Se DF=N, a razão é 1 e log10(1)=0. Variantes que somam constante ou suavizam a razão podem produzir outro valor. O item declara a definição em vez de associar todo termo frequente a uma garantia semântica de inutilidade.",
    "fonte": "Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn sobre variantes TF-IDF."
  },
  {
    "id": "rt-14-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um PDF de texto corrido pode ter estrutura interna de arquivo e de linguagem, embora seu conteúdo seja tratado como não estruturado para determinada análise tabular.",
    "gabarito": "C",
    "justificativa": "Não estruturado é uma classificação relativa à representação e ao uso analítico. Não significa ausência de toda organização, sintaxe ou semântica intrínseca.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Para os valores ordenados 2, 3, 3, 4 e 18, a mediana é 3 e a média é 6.",
    "gabarito": "C",
    "justificativa": "A mediana é o terceiro valor; a soma é 30 e o total é 5, então a média é 6. O valor 18 desloca a média sem alterar o centro posicional nessa lista.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Se Q1=4 e Q3=8, o limite superior Q3+1,5 IQR é 14; um valor 15 fica além desse limite no procedimento indicado.",
    "gabarito": "C",
    "justificativa": "IQR=8-4=4; 1,5*4=6; 8+6=14. O critério identifica observação a examinar, sem provar automaticamente erro de coleta.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Substituir todos os dados ausentes por zero é uma limpeza neutra que preserva qualquer média.",
    "gabarito": "E",
    "justificativa": "Ausência e valor zero têm significados diferentes. A substituição muda distribuição e medidas em geral e precisa de justificativa conforme o mecanismo de ausência e a tarefa.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar",
    "versao_correta": "A escolha do tratamento de ausências exige justificativa e pode alterar as medidas."
  },
  {
    "id": "rt-14-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No ETL, a transformação antecede a carga no destino considerado; no ELT, ela ocorre depois da carga nesse destino, sem que isso determine por si a qualidade dos dados.",
    "gabarito": "C",
    "justificativa": "A distinção é a posição relativa das operações no enquadramento. A ordem não certifica conteúdo limpo, nem obriga que toda transformação de todo sistema siga uma arquitetura única.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-4-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um agrupamento por similaridade textual garante que cada grupo corresponde a uma categoria jurídica correta e previamente validada.",
    "gabarito": "E",
    "justificativa": "O algoritmo encontra uma estrutura conforme representação, métrica e parâmetros. A interpretação jurídica e a validade da categoria requerem avaliação adicional.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar",
    "versao_correta": "Os grupos precisam de interpretação e avaliação para uso como categorias jurídicas."
  },
  {
    "id": "rt-14-4-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No esquema IDF=log10(N/df), com N=100, um termo presente em 10 documentos tem IDF=1, e um presente nos 100 tem IDF=0.",
    "gabarito": "C",
    "justificativa": "As razões são 100/10=10 e 100/100=1; log10(10)=1 e log10(1)=0. O cálculo depende da fórmula explicitada e não abrange automaticamente variantes suavizadas.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-4-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Remover não de um corpus é sempre inofensivo porque palavras frequentes nunca participam do sentido.",
    "gabarito": "E",
    "justificativa": "A negação pode alterar radicalmente a proposição. Frequência global não torna um termo semanticamente inútil para toda tarefa. Stopwords devem ser avaliadas no domínio e no objetivo.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar",
    "versao_correta": "A remoção de palavras frequentes precisa considerar a tarefa e efeitos como perda de negação."
  },
  {
    "id": "rt-14-4-9",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma medida de total de solicitações num relatório Power BI pode apresentar resultados diferentes conforme os filtros ativos e a expressão definida.",
    "gabarito": "C",
    "justificativa": "Medidas são avaliadas no contexto pertinente. Mudar filtros pode alterar o subconjunto sobre o qual o cálculo opera, conforme a expressão e os relacionamentos.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-4-10",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A correlação observada entre uso da biblioteca e desempenho dos estudantes demonstra, isoladamente, que o uso causou o desempenho.",
    "gabarito": "E",
    "justificativa": "Pode haver confundimento, seleção e outras explicações. A associação não basta para identificar efeito causal sem desenho e pressupostos adicionais.",
    "fonte": "NIST/SEMATECH e-Handbook, Box Plot; Manning, Raghavan e Schütze, Introduction to Information Retrieval, cap. 6; documentação scikit-learn, Microsoft Power BI e Tableau; CRISP-DM. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)",
    "habilidade": "aplicar",
    "versao_correta": "A associação observada exige análise adicional para sustentar uma conclusão causal."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-14-4-fonte-nist-box",
      "nome": "NIST/SEMATECH e-Handbook — Box Plot",
      "ano": "Referência de consulta",
      "obraPrincipal": "NIST/SEMATECH e-Handbook — Box Plot",
      "ideiaChave": "Mediana, quartis e variantes de hastes/cercas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-4-fonte-irbook",
      "nome": "Manning, Raghavan e Schütze — Introduction to Information Retrieval",
      "ano": "Referência de consulta",
      "obraPrincipal": "Manning, Raghavan e Schütze — Introduction to Information Retrieval",
      "ideiaChave": "Capítulo 6: frequência documental, IDF e ponderação.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-4-fonte-sklearn",
      "nome": "scikit-learn — Feature extraction",
      "ano": "Referência de consulta",
      "obraPrincipal": "scikit-learn — Feature extraction",
      "ideiaChave": "Representações e variantes de TF-IDF; observar parâmetros e versão.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-4-fonte-dax",
      "nome": "Microsoft — DAX overview",
      "ano": "Referência de consulta",
      "obraPrincipal": "Microsoft — DAX overview",
      "ideiaChave": "Medidas e contexto de avaliação.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-4-fonte-tableau",
      "nome": "Tableau — Filters and Level of Detail Expressions",
      "ano": "Referência de consulta",
      "obraPrincipal": "Tableau — Filters and Level of Detail Expressions",
      "ideiaChave": "Ordem de filtros e efeitos em FIXED.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-4-fonte-crisp",
      "nome": "IBM — CRISP-DM Help Overview",
      "ano": "Referência de consulta",
      "obraPrincipal": "IBM — CRISP-DM Help Overview",
      "ideiaChave": "Fases, relações e iteração do processo.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-14-4-8",
      "afirmacao": "Remover não de um corpus é sempre inofensivo porque palavras frequentes nunca participam do sentido.",
      "gabarito": "E",
      "porQue": "A negação pode alterar radicalmente a proposição. Frequência global não torna um termo semanticamente inútil para toda tarefa. Stopwords devem ser avaliadas no domínio e no objetivo."
    },
    {
      "id": "memoria-rt-14-4-9",
      "afirmacao": "Uma medida de total de solicitações num relatório Power BI pode apresentar resultados diferentes conforme os filtros ativos e a expressão definida.",
      "gabarito": "C",
      "porQue": "Medidas são avaliadas no contexto pertinente. Mudar filtros pode alterar o subconjunto sobre o qual o cálculo opera, conforme a expressão e os relacionamentos."
    },
    {
      "id": "memoria-rt-14-4-10",
      "afirmacao": "A correlação observada entre uso da biblioteca e desempenho dos estudantes demonstra, isoladamente, que o uso causou o desempenho.",
      "gabarito": "E",
      "porQue": "Pode haver confundimento, seleção e outras explicações. A associação não basta para identificar efeito causal sem desenho e pressupostos adicionais."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-14-4-bloco-1",
    "titulo": "Dados e variáveis: representar antes de calcular",
    "objetivos": [
      "Distinguir formato, tipo de variável e significado de códigos numéricos."
    ],
    "conteudo": "Dados **estruturados** têm organização explícita adequada a operações como consultas e agregações; **semiestruturados** podem usar marcadores e hierarquias, como JSON e XML. **Não estruturados**, numa tarefa analítica, não seguem o mesmo esquema de campos. Isso não significa ausência de linguagem, estrutura interna de arquivo ou significado. Não há aqui uma porcentagem verificada do acervo parlamentar em cada formato.\n\nUma variável **nominal** distingue categorias sem ordem, como tipo documental; uma **ordinal** inclui ordem, como graus de prioridade, sem garantir intervalos iguais. Variáveis **quantitativas** expressam contagens ou medidas. Um código 1, 2, 3 atribuído a categorias não se transforma automaticamente em quantidade com média significativa.\n\n**Exemplo:** registrar “alta=3, média=2, baixa=1” não prova que a distância entre alta e média é igual à distância entre média e baixa em termos de risco real. Multiplicar esses códigos exige método e interpretação definidos. O número impresso não cria escala métrica por si.\n\n**Contagem e medida:** número de solicitações é discreto; duração pode ser modelada como medida contínua, embora a coleta seja arredondada. Valores monetários também exigem atenção à unidade e precisão do registro. A classificação estatística descreve a representação e o fenômeno, não apenas o tipo do arquivo no computador.\n\nAntes de calcular, documente cada campo, unidade, valores permitidos, significado de ausências e chave de identificação. A mesma coluna chamada data pode conter publicação, acesso ou entrada no sistema. Somar ou comparar campos sem esclarecer esse significado pode produzir resultado exato de uma pergunta errada.",
    "checkpointIds": [
      "rt-14-4-1"
    ]
  },
  {
    "id": "sub-14-4-bloco-2",
    "titulo": "Estatística descritiva: centro, dispersão e observações discrepantes",
    "objetivos": [
      "Calcular medidas e explicitar o critério usado."
    ],
    "conteudo": "Para os valores **2, 3, 3, 4, 18**, a soma é 30, a média é 6, a mediana é o terceiro valor, 3, e a moda é 3. A presença de 18 desloca a média; a mediana descreve o centro posicional e é menos sensível nesse exemplo. Menos sensível não significa que toda alteração no conjunto seja irrelevante.\n\n**Variância** mede dispersão quadrática; é preciso distinguir fórmula populacional e amostral. **Desvio-padrão** é sua raiz e retorna à unidade da medida. **IQR** é Q3-Q1. Métodos de cálculo de quartis podem variar; um exercício deve fornecer o método ou os quartis quando a diferença de convenção muda a resposta.\n\nNo box plot usual, a linha da caixa representa a mediana e as bordas, Q1 e Q3. Há variantes de hastes: algumas mostram extremos; outras adotam cercas como 1,5 IQR e destacam observações externas. A interpretação depende da convenção indicada no gráfico, conforme exemplifica o NIST.\n\n**Exemplo resolvido:** Q1=4, Q3=8. IQR=4. As cercas de 1,5 IQR são -2 e 14. Um valor 15 é candidato a observação discrepante por esse critério. Isso não o transforma automaticamente em erro: pode ser uma ocorrência real importante. Investigue antes de excluir.\n\n**Correlação** descreve associação. Pearson focaliza associação linear no uso pertinente; Spearman trabalha com postos e associação monotônica. Uma associação pode decorrer de outras variáveis ou seleção. Uso da biblioteca e desempenho estudantil, isoladamente, não demonstram causalidade.",
    "checkpointIds": [
      "cp-14-4-1",
      "rt-14-4-2",
      "rt-14-4-3",
      "rt-14-4-10"
    ]
  },
  {
    "id": "sub-14-4-bloco-3",
    "titulo": "Preparação e fluxo: ETL, ELT e qualidade",
    "objetivos": [
      "Justificar limpeza e distinguir ausência, duplicidade e transformação de escala."
    ],
    "conteudo": "**ETL** organiza extração, transformação e carga no destino considerado. **ELT** coloca a transformação depois da carga nesse destino. São descrições de arquitetura; não significam que todo sistema só terá uma transformação nem que um formato seja automaticamente mais moderno ou correto em qualquer cenário.\n\nNa preparação, verifique unidades, tipos, duplicidades, codificação, chaves e valores ausentes. **Zero** pode ser uma medida válida; **ausente** pode significar que não se coletou, não se aplica ou o valor é desconhecido. Substituir todos os ausentes por zero pode criar viés. Excluir linhas ou imputar média/mediana também tem consequências e precisa de justificativa.\n\n**Padronização/normalização de escala** transforma representações. Em um exemplo min-max com limites observados 10 e 30, o valor 20 vira (20-10)/(30-10)=0,5. Isso não significa que o fenômeno se tornou “meio verdadeiro” nem resolve erro de unidade ou significado. Em avaliação de modelos, parâmetros de preparação devem ser tratados para evitar vazamento de informação do teste.\n\n**Pivot/unpivot** reorganiza tabelas conforme a tarefa. Transformar colunas de meses em linhas com mês e valor pode facilitar séries e agregações, mas a operação não certifica integridade. É preciso verificar chaves e totais depois.\n\n**Caso:** a mesma solicitação aparece em duas bases com identificadores relacionados. Unir dados sem reconciliar o registro pode duplicar a contagem e produzir falsa melhora de produtividade. A decisão sobre duplicidade depende da unidade de análise e da proveniência, não apenas da igualdade de duas palavras.",
    "checkpointIds": [
      "rt-14-4-4",
      "rt-14-4-5"
    ]
  },
  {
    "id": "sub-14-4-bloco-4",
    "titulo": "Visualização e comunicação: o gráfico responde a qual pergunta?",
    "objetivos": [
      "Escolher representação e evitar conclusões que o desenho não sustenta."
    ],
    "conteudo": "**Barras** apoiam comparação de categorias; **linhas** evidenciam sequência, frequentemente temporal; **histograma** distribui observações em intervalos; **dispersão** relaciona pares de valores. Nenhuma seleção elimina a necessidade de rótulos, unidades, fonte, período e indicação de incerteza quando pertinente.\n\nEm barras que codificam magnitude por comprimento, o zero é uma referência importante: truncar o eixo pode exagerar diferenças. Outros gráficos podem usar escalas diferentes com justificativa e clareza. Uma recomendação visual deve ser conectada à forma de codificação, não apresentada como proibição universal de toda escala não iniciada em zero.\n\n**Histograma:** a escolha de intervalos muda a aparência. Um gráfico muito agregado pode esconder grupos; um excesso de intervalos pode enfatizar ruído. **Box plot:** compara centro e dispersão, mas não revela toda forma da distribuição. Dois conjuntos podem ter resumos parecidos e padrões distintos.\n\n**Exemplo próprio:** atendimentos passaram de 98 para 100. Um eixo que inicia em 97 pode fazer duas unidades parecerem enorme crescimento. O leitor precisa conhecer denominador, escala e período. Se houve mudança na definição de atendimento, a comparação também precisa ser explicitada.\n\nStorytelling com dados organiza uma mensagem para um público e uma decisão. Orientações de Tufte e Knaflic ajudam a reduzir distrações e direcionar leitura; não exigem apagar todo rótulo, contexto ou elemento que não represente um ponto numérico. A cor deve comunicar sem ser o único canal, e o destaque não deve ocultar resultados que contrariem a narrativa.",
    "checkpointIds": []
  },
  {
    "id": "sub-14-4-bloco-5",
    "titulo": "Ferramentas analíticas: transformação, modelo e contexto",
    "objetivos": [
      "Distinguir Power Query/M, DAX e níveis de cálculo."
    ],
    "conteudo": "No ecossistema Microsoft, **Power Query/M** descreve operações de obtenção e transformação; **DAX** apoia cálculos sobre modelos. Uma **coluna calculada** e uma **medida** têm contextos e usos distintos conforme o modo de armazenamento e a configuração. Não se deve afirmar que toda coluna de todo modelo é sempre materializada em RAM da mesma forma.\n\n**Exemplo:** uma medida de total de solicitações pode somar valores no subconjunto selecionado por um filtro de mês e unidade. Mudar o filtro altera o contexto. A expressão pode também modificar o contexto, de modo que o resultado não depende apenas da aparência da tabela. Relações entre fatos e dimensões precisam representar corretamente as chaves e cardinalidades.\n\nUm **esquema em estrela** organiza fatos e dimensões para análise; não é um selo de desempenho ótimo universal. Uma relação mal definida pode duplicar resultados ou impedir propagação adequada de filtros. O objetivo é modelar a unidade de análise e as perguntas.\n\nNo Tableau, expressões **FIXED, INCLUDE e EXCLUDE** trabalham níveis de detalhe. **FIXED não ignora todo filtro sem exceção**: filtros de contexto, fonte e extração participam de sua ordem de operações. A conclusão depende da etapa e da expressão. Em ferramentas como Looker Studio, conectores, campos calculados e permissões também precisam ser considerados no contexto de produto/versão.\n\nO estudo deve comparar tarefas, não ranquear produtos por “curva fácil/média/difícil” como se fosse propriedade objetiva de todos os usuários. Criar um painel, consultar um modelo e publicar acesso são operações diferentes que podem exigir permissões e licenças próprias.",
    "checkpointIds": [
      "rt-14-4-9"
    ]
  },
  {
    "id": "sub-14-4-bloco-6",
    "titulo": "Mineração e CRISP-DM: objetivo, processo e avaliação",
    "objetivos": [
      "Distinguir tarefas preditivas e descritivas e reconhecer iteração entre fases."
    ],
    "conteudo": "**CRISP-DM** organiza entendimento do negócio, entendimento dos dados, preparação, modelagem, avaliação e implantação. As fases se relacionam e permitem retorno. Entender a tarefa precede escolher uma técnica: um projeto pode descobrir que a decisão útil depende de qualidade da coleta, não de um modelo mais complexo.\n\n**Classificação** e **regressão** são tarefas preditivas usuais com alvo no treinamento supervisionado. **Agrupamento** e **associação** podem explorar estruturas e coocorrências sem o mesmo alvo. Um agrupamento não vem automaticamente com rótulos jurídicos corretos; a interpretação exige avaliar o domínio.\n\n**Caso:** um sistema busca priorizar solicitações urgentes. A tarefa pode usar rótulos fornecidos por equipe especializada; é preciso avaliar custos de falsos positivos e negativos. Outro sistema agrupa textos para explorar temas: encontrar grupos não demonstra que eles correspondem às classes oficiais de assunto.\n\nAvaliação precisa separar dados de treino e teste conforme o desenho e evitar vazamento, inclusive entre documentos quase duplicados. Um modelo pode parecer ótimo ao rever a mesma família de exemplos. Implantação demanda observar mudança de dados, monitoramento e critérios de retirada ou atualização.\n\nNão existe neste capítulo uma regra de que preparação consuma obrigatoriamente 70–80% de qualquer projeto. O esforço depende da tarefa e do acervo. A relevância da etapa é demonstrada pelos problemas que resolve, e não por um percentual sem corpus ou método.",
    "checkpointIds": [
      "cp-14-4-2",
      "rt-14-4-6"
    ]
  },
  {
    "id": "sub-14-4-bloco-7",
    "titulo": "Mineração de textos e TF-IDF: calcular com a fórmula declarada",
    "objetivos": [
      "Separar frequência no documento e frequência documental e reconhecer variantes."
    ],
    "conteudo": "Texto pode ser convertido em representações para busca ou modelos. **Tokenização** define unidades; **stemming** aplica procedimentos para reduzir formas; **lematização** busca formas de dicionário conforme análise e recursos. O resultado depende da língua e da ferramenta: “foram” pode ter análises diferentes conforme o contexto. Não há garantia de que um radical seja palavra completa.\n\n**TF** descreve ocorrência do termo no documento, com diferentes normalizações. **DF** conta em quantos documentos ele ocorre; não quantas vezes aparece no corpus. Na formulação simples **IDF=log10(N/DF)**, um termo em 10 de 100 documentos tem IDF=1; em todos os 100, IDF=0. O produto TF×IDF combina frequência local e discriminação no conjunto.\n\nEsse cálculo não descreve toda implementação. A documentação scikit-learn apresenta variantes com suavização e constante adicional; um termo presente em todos os documentos pode não receber zero naquela definição. Por isso, o item deve fornecer a fórmula quando pede valor exato.\n\n**Stopwords** são escolhidas conforme tarefa; não são palavras sem significado em qualquer contexto. Remover “não” pode inverter uma proposição jurídica. Termo raro também pode ser nome próprio ou conceito decisivo, e não apenas erro. A lei de Zipf descreve uma regularidade aproximada de frequência/posto em corpora, não igualdade exata para toda palavra de todo texto; a hipótese de seleção por frequência associada a Luhn não é garantia universal de máxima relevância semântica numa faixa.\n\n**Exemplo:** em documentos sobre acesso, um termo comum pode discriminar pouco dentro desse corpus e muito em outro. Os pesos dependem da coleção, do pré-processamento e da consulta. Calcular peso não substitui julgar a relevância para a necessidade de informação.",
    "checkpointIds": [
      "cp-14-4-3",
      "rt-14-4-7",
      "rt-14-4-8"
    ]
  }
],
fontesTeoria: [
  {
    "id": "nist-box",
    "titulo": "NIST/SEMATECH e-Handbook — Box Plot",
    "localizador": "Mediana, quartis e variantes de hastes/cercas.",
    "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/boxplot.htm"
  },
  {
    "id": "irbook",
    "titulo": "Manning, Raghavan e Schütze — Introduction to Information Retrieval",
    "localizador": "Capítulo 6: frequência documental, IDF e ponderação.",
    "url": "https://nlp.stanford.edu/IR-book/html/htmledition/inverse-document-frequency-1.html"
  },
  {
    "id": "sklearn",
    "titulo": "scikit-learn — Feature extraction",
    "localizador": "Representações e variantes de TF-IDF; observar parâmetros e versão.",
    "url": "https://scikit-learn.org/stable/modules/feature_extraction.html"
  },
  {
    "id": "dax",
    "titulo": "Microsoft — DAX overview",
    "localizador": "Medidas e contexto de avaliação.",
    "url": "https://learn.microsoft.com/en-us/dax/dax-overview"
  },
  {
    "id": "tableau",
    "titulo": "Tableau — Filters and Level of Detail Expressions",
    "localizador": "Ordem de filtros e efeitos em FIXED.",
    "url": "https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod_filters.htm"
  },
  {
    "id": "crisp",
    "titulo": "IBM — CRISP-DM Help Overview",
    "localizador": "Fases, relações e iteração do processo.",
    "url": "https://www.ibm.com/docs/en/spss-modeler/18.6.0?topic=dm-crisp-help-overview"
  }
],
};

