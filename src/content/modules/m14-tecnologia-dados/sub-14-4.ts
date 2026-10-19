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
      termo: 'Ciência de Dados e Ciclo de Vida dos Dados',
      definicao: 'Campo multidisciplinar que engloba coleta, limpeza, exploração, modelagem estatística e comunicação de insights baseados em dados.',
      exemploBiblioteca: 'Análise da série histórica de 10 anos de empréstimos da biblioteca para prever demanda por novas aquisições.',
    },
    {
      termo: 'Mineração de Texto (Text Mining)',
      definicao: 'Extração de padrões, tendências e relações relevantes a partir de grandes volumes de texto não estruturado.',
      exemploBiblioteca: 'Agrupamento temático automático de discursos proferidos no Plenário da Câmara por análise de frequência de tópicos.',
    },
    {
      termo: 'Visualização de Dados e Storytelling',
      definicao: 'Comunicação de conclusões analíticas complexas por meio de gráficos eficazes (barras, box plots, mapas de calor) e narrativa lógica.',
      exemploBiblioteca: 'Painel em Power BI demonstrando aos diretores o crescimento no uso do repositório digital BDCam por estado brasileiro.',
    },
    {
      termo: 'Box Plot e Histograma',
      definicao: 'Gráficos estatísticos: box plot exibe mediana, quartis e outliers; histograma mostra a distribuição de frequência de variáveis contínuas.',
      exemploBiblioteca: 'Análise da distribuição do tempo de atendimento de solicitações parlamentares com detecção de valores discrepantes (outliers).',
    },
  ],
  descricaoCurta:
    'Tipologia de dados; estatística descritiva e EDA (Tukey); mineração de dados (metodologia CRISP-DM, tarefas descritivas e preditivas); mineração de textos (pipeline de PLN, tokenização, stopwords, stemming vs lematização, TF-IDF e Lei de Zipf/Luhn); pipeline de ETL/ELT; gramática dos gráficos; ferramentas analíticas corporativas (Power BI, Tableau, Looker Studio) e storytelling com dados.',
  tempoEstimadoMinutos: 24,
  autoresChave: [
    'Edward Tufte (Data-Ink Ratio, 1983)',
    'Cole Nussbaumer Knaflic (Storytelling with Data, 2015)',
    'John Tukey (Exploratory Data Analysis, 1977)',
    'CRISP-DM Consortium (Chapman et al., 2000)',
    'Gerard Salton (TF-IDF, 1975)',
    'George Kingsley Zipf (1949)',
    'Google Cloud / Looker Team',
    'Microsoft Power BI Team',
  ],
  alertasCebraspe: [
    'Tipos de Atributos e Variáveis: Qualitativos/Categóricos dividem-se em Nominais (sem hierarquia intrínseca, ex.: partido político, UF) e Ordinais (com ordenação natural, ex.: nível de escolaridade, prioridade de tramitação baixa/média/alta); Quantitativos/Numéricos dividem-se em Discretos (contagens inteiras, ex.: quantidade de votos) e Contínuos (mensurações em escala real contínua, ex.: orçamento público em reais, percentual de tramitação).',
    'Pipeline de Transformação (ETL vs. ELT): No ETL clássico, os dados são extraídos de fontes operacionais, transformados em um servidor intermediário (limpeza, tipagem e modelagem) e posteriormente carregados no Data Warehouse. No ELT contemporâneo em nuvem (Data Lakehouse), os dados brutos são carregados diretamente no repositório central e a transformação ocorre internamente aproveitando o poder computacional do banco de destino.',
    'Diferenciação Crítica de Gráficos: Histograma visualiza a distribuição de frequências de uma variável quantitativa contínua agrupada em intervalos de classes (bins), não havendo espaçamento entre as barras contíguas; o Gráfico de Barras/Colunas destina-se à comparação de categorias discretas qualitativas. O Box Plot (diagrama de caixas) evidencia a mediana, os percentis 25 e 75 (intervalo interquartil IQR) e detecta outliers univariados situados além de 1,5 * IQR das hastes.',
    'Comparativo de Ferramentas de BI (Power BI vs. Tableau vs. Looker Studio): O Cebraspe cobra o reconhecimento das principais plataformas analíticas do mercado. O Power BI (Microsoft) fundamenta-se nas linguagens Power Query (M) e DAX, estruturando-se no Esquema em Estrela; o Tableau (Salesforce) utiliza o motor VizQL e expressões LOD (Level of Detail); e o Google Looker Studio (anteriormente Google Data Studio, renomeado em 2022) destaca-se como ferramenta 100% em nuvem e integrada nativamente ao BigQuery e ao Google Workspace.',
    'Análise Exploratória de Dados (EDA) e Correlação vs. Causalidade: Formulada por John Tukey (1977), a EDA prioriza gráficos e estatísticas descritivas para descobrir padrões e anomalias sem premissas rígidas. Atenção: forte correlação estatística entre duas variáveis nunca implica, por si só, relação de causalidade determinística (perigo de correlações espúrias).',
    'Mineração de Dados e Metodologia CRISP-DM: O processo é cíclico e iterativo em 6 fases: Entendimento do Negócio, Entendimento dos Dados, Preparação dos Dados, Modelagem, Avaliação e Implantação. A fase de Preparação dos Dados absorve de 70% a 80% do esforço global do projeto. Tarefas descritivas (agrupamento K-Means, regras de associação Apriori) não possuem variável-alvo rotulada; tarefas preditivas (classificação com árvores/SVM/Naive Bayes, regressão) visam prever um atributo-meta previamente rotulado.',
    'Text Mining, TF-IDF e Lei de Zipf: No pré-processamento textual, o stemming (ex.: Porter) reduz palavras a radicais por poda heurística rápida que nem sempre gera termos de dicionário; a lematização utiliza morfologia e contexto para obter o lema dicionarizado. A métrica TF-IDF zera o peso de stopwords universais (alto DF, logo IDF nulo). Pela Lei de Zipf e postulados de Luhn, palavras de frequência intermediária concentram a máxima densidade semântica para indexação e busca.',
    'Storytelling com Dados e Edward Tufte: O princípio do Data-Ink Ratio (taxa de tinta de dados) de Edward Tufte prescreve maximizar a proporção de tinta dedicada estritamente à representação de dados quantitativos, eliminando o "chartjunk" (lixo visual: efeitos 3D, sombras, grades densas e decorações que aumentam a carga cognitiva desnecessariamente). Cole Knaflic enfatiza o uso de atributos pré-atencionais (cor deliberada e contraste) para guiar o olhar da audiência.',
  ],
  quadroComparativo: {
    titulo: 'Comparação de Gráficos Estatísticos e suas Aplicações Analíticas',
    colunas: ['Gráfico', 'Tipo de Variável Indicada', 'Objetivo Analítico Primordial', 'Pegadinha Típica Cebraspe'],
    linhas: [
      ['Gráfico de Barras / Colunas', 'Variáveis Categóricas (Nominais ou Ordinais)', 'Comparar magnitudes absolutas ou relativas entre categorias discretas', 'Afirmar que o gráfico de barras é o instrumento adequado para avaliar a densidade de probabilidade de dados contínuos (FALSO: cabe ao Histograma).'],
      ['Histograma', 'Variáveis Numéricas Contínuas', 'Visualizar a forma da distribuição de frequência, simetria e bimodalidade', 'Confundir com gráfico de colunas; no histograma as barras tocam-se indicando continuidade de classes.'],
      ['Box Plot (Diagrama de Caixas)', 'Variáveis Numéricas Contínuas segmentadas por grupos', 'Identificar mediana, dispersão interquartil (IQR), assimetria e valores discrepantes (outliers)', 'Dizer que a linha no meio da caixa representa a média aritmética (FALSO: representa estritamente a MEDIANA).'],
      ['Gráfico de Dispersão (Scatter Plot)', 'Duas Variáveis Numéricas Contínuas (Bivariada)', 'Avaliar correlação, força e direção da associação entre duas variáveis', 'Inferir causalidade determinística imediata a partir de uma forte correlação estatística linear visível.'],
      ['Gráfico de Linhas', 'Variável Numérica Contínua versus Tempo (Temporal)', 'Acompanhar tendências, sazonalidade e ciclos ao longo de séries cronológicas', 'Utilizar linhas contínuas para conectar categorias nominais sem qualquer relação temporal ou sequencial.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Ciência de Dados, Tipologias, Métricas e Análise Exploratória (EDA)

#### A. Estrutura e Formato dos Dados
* **Dados Estruturados:** Dados organizados em esquemas rígidos e relacionais predefinidos, com tabelas bidimensionais de linhas (registros) e colunas (atributos tipados), consultáveis via SQL (ex.: bancos relacionais PostgreSQL e Oracle).
* **Dados Semiestruturados:** Dados que não possuem um esquema rígido relacional, mas contêm marcadores, tags ou hierarquias internas que delimitam seus elementos constituintes (ex.: arquivos **JSON**, **XML**, **YAML**, cabeçalhos MARC 21).
* **Dados Não Estruturados:** Dados desprovidos de modelo formal ou estrutura semântica intrínseca, correspondendo a mais de 80% do acervo parlamentar moderno (ex.: arquivos de texto corrido em PDF de proposições, transcrições taquigráficas de discursos, arquivos de áudio e transmissões de vídeo das sessões da Câmara).

#### B. Classificação Estatística de Variáveis e Atributos
* **Atributos Qualitativos (Categóricos):**
  * **Nominais:** Categorias sem ordenação natural nem hierarquia implícita. Operações matemáticas limitam-se à igualdade/diferença e contagem de frequência / moda (ex.: UF de naturalidade do parlamentar, partido político, tipo documental).
  * **Ordinais:** Categorias que guardam uma ordenação hierárquica intrínseca, embora os intervalos entre posições não sejam necessariamente iguais (ex.: nível de instrução, prioridade de tramitação: urgente > prioritária > ordinária, escala Likert de satisfação).
* **Atributos Quantitativos (Numéricos):**
  * **Discretos:** Valores inteiros finitos ou enumeráveis resultantes de contagens absolutas (ex.: número de emendas apresentadas, total de deputados votantes).
  * **Contínuos:** Valores que podem assumir qualquer número real dentro de um intervalo mensurável contínuo (ex.: dotação orçamentária em reais, tempo de duração de um discurso em minutos e segundos).

#### C. Métricas de Estatística Descritiva
* **Tendência Central:**
  * **Média Aritmética:** Soma de todos os valores dividida pelo número total de elementos. Extremamente **sensível a valores extremos (outliers)**.
  * **Mediana:** Ponto central que divide o conjunto de dados ordenados em duas metades com 50% dos dados cada. É uma medida **robusta e resistente a outliers**.
  * **Moda:** O valor que ocorre com maior frequência na distribuição de dados.
* **Dispersão e Variabilidade:**
  * **Variância ($s^2$):** Média dos desvios quadráticos em relação à média.
  * **Desvio-Padrão ($s$):** Raiz quadrada da variância, expressa na mesma unidade de medida dos dados originais.
  * **Intervalo Interquartil (IQR):** Diferença entre o terceiro quartil (Q3, percentil 75) e o primeiro quartil (Q1, percentil 25): $\\text{IQR} = Q3 - Q1$.

#### D. Análise Exploratória de Dados (EDA - Exploratory Data Analysis)
Formulada por **John Tukey** (1977), a Análise Exploratória de Dados preconiza investigar as características fundamentais de um conjunto de dados por meio de gráficos e medidas sumárias antes de aplicar qualquer modelagem formal:
* **Sumário de Cinco Números de Tukey:** Mínimo, Primeiro Quartil (Q1), Mediana (Q2), Terceiro Quartil (Q3) e Máximo.
* **Detecção de Valores Discrepantes (Outliers):**
  * *Regra de Tukey (IQR):* Observações situadas abaixo de $Q1 - 1,5 \\times \\text{IQR}$ ou acima de $Q3 + 1,5 \\times \\text{IQR}$.
  * *Escore Padrão (Z-Score):* Em distribuições aproximadamente normais, dados com $|Z| > 3$ (afastamento superior a três desvios-padrão da média).
* **Tratamento de Dados Faltantes (Missing Values):**
  * *Exclusão Listwise:* Descarte de registros inteiros incompletos (aceitável apenas se a perda for pequena e aleatória - MCAR).
  * *Imputação:* Substituição de valores ausentes pela mediana (robusta a outliers) ou média da variável, ou por modelos preditivos (K-Nearest Neighbors).
* **Correlação vs. Causalidade:**
  * *Coeficiente de Correlação Linear de Pearson ($r$):* Varia entre $-1$ e $+1$, mensurando a força e a direção da associação linear entre duas variáveis contínuas.
  * *Coeficiente de Postos de Spearman ($\\rho$):* Avalia associações monotônicas entre variáveis ordinais ou contínuas não lineares.
  * **Advertência de Rigor:** Constatar correlação estatística entre dois fenômenos jamais comprova que um causa o outro; podem existir variáveis ocultas intervenientes (*confounding variables*) ou correlações puramente casuais (espúrias).

---

### 2. O Pipeline de Dados: Engenharia de Transformação (ETL vs. ELT)

* **ETL Tradicional (Extract, Transform, Load):**
  1. *Extract:* Extração dos dados de bancos transacionais operacionais (OLTP).
  2. *Transform:* Limpeza, conversão de tipos de dados, desduplicação, normalização e agregação realizadas em uma camada de processamento dedicada (Staging Area).
  3. *Load:* Carga dos dados limpos e prontos diretamente no Data Warehouse (DW) para consultas analíticas (OLAP).
* **ELT Moderno (Extract, Load, Transform):**
  * Utilizado em ecossistemas de Big Data e Data Lakes na nuvem. Os dados brutos são extraídos e carregados diretamente no repositório de destino em seu estado cru; a transformação é executada sob demanda aproveitando o poder massivo de processamento distribuído da infraestrutura de destino.
* **Operações Essenciais de Limpeza e Preparação:**
  * *Normalização e Padronização:* Reescalonamento para intervalos definidos (ex.: Min-Max Scaling entre 0 e 1, ou Z-Score com média zero e variância unitária).
  * *Pivoteamento (*Pivot / Unpivot*):* Transposição de linhas para colunas (ou vice-versa) para transformar tabelas largas em tabelas longas e normalizadas.

---

### 3. Visualização de Dados e Ferramentas Analíticas Corporativas

#### A. A Gramática dos Gráficos e a Escolha da Visualização Apropriada
* **Histograma:** Divide dados numéricos contínuos em faixas contíguas (*bins*) e plota a contagem de ocorrências. As barras tocam-se diretamente, denotando a continuidade da variável. Revela simetria, assimetria positiva/negativa e presença de bimodalidade.
* **Box Plot (Diagrama de Caixas de Tukey):**
  * A linha central da caixa representa a **Mediana** (Q2).
  * As bordas inferior e superior da caixa indicam, respectivamente, o **Primeiro Quartil (Q1 - 25%)** e o **Terceiro Quartil (Q3 - 75%)**.
  * A altura da caixa é a distância interquartil: $\\text{IQR} = Q3 - Q1$.
  * As hastes (*whiskers*) estendem-se até o menor e maior valor dentro do limite de $1,5 \\times \\text{IQR}$.
  * Pontos plotados além dos limites das hastes são formalmente classificados como **outliers** (valores discrepantes).
* **Gráfico de Dispersão (*Scatter Plot*):** Plota pontos de dados ao longo de dois eixos cartesianos ($X$ e $Y$), permitindo identificar correlação linear ou não linear, agrupamentos naturais e dispersão conjunta.
* **Gráficos de Linhas vs. Barras:** Linhas são reservadas exclusivamente para fenômenos contínuos ou temporais. Barras e colunas devem obrigatoriamente iniciar o eixo quantitativo no valor zero para evitar distorção visual de proporções relativas.

#### B. Ferramentas Corporativas: O Ecossistema Microsoft Power BI
* **Power Query e Linguagem M:** Módulo responsável pelo processo de ETL. Cada etapa aplicada gera uma fórmula declarativa na Linguagem M, que é reexecutada a cada atualização do conjunto de dados.
* **DAX (Data Analysis Expressions):** Linguagem de fórmulas analíticas usada para criar:
  * *Colunas Calculadas:* Avaliadas linha a linha durante a carga de dados, ocupando espaço de memória RAM.
  * *Medidas Calculadas:* Fórmulas dinâmicas avaliadas em tempo real durante a renderização do relatório, operando sobre o **Contexto de Filtro** vigente na interação do usuário.
* **Modelagem de Dados e Esquema em Estrela (*Star Schema*):**
  * O padrão-ouro de modelagem dimensional de BI. Composto por uma ou mais tabelas de fatos centrais ligadas em relacionamentos 1 para muitos ($1:*$) com tabelas de dimensões desnormalizadas circundantes, otimizando o desempenho do motor colunar VertiPaq.
* **Recurso "Analisar no Excel":** Permite que usuários conectem planilhas convencionais do Microsoft Excel diretamente a um modelo semântico corporativo hospedado no Serviço Power BI, consultando tabelas dinâmicas com segurança e integridade centralizada.

#### C. Ferramentas Analíticas do Mercado: Tableau e Google Looker Studio (antigo Data Studio)
* **Tableau (Salesforce):**
  * Baseado na tecnologia **VizQL (Visual Query Language)**, que traduz visualmente ações de arrastar e soltar campos em consultas estruturadas de banco de dados.
  * Expressões **LOD (Level of Detail)**: permitem cálculos em granularidades distintas da visualização da tela:
    * \`FIXED\`: calcula o valor em uma dimensão específica, ignorando filtros e granularidade da exibição;
    * \`INCLUDE\`: calcula o valor em um nível de detalhe mais profundo que o da visualização atual;
    * \`EXCLUDE\`: calcula o valor em um nível de detalhe menos granular, agrupando dimensões exibidas.
  * Notável capacidade de exploração visual livre, gráficos avançados (mapas georreferenciados, dispersão multidimensional) e análises estatísticas profundas.
* **Google Looker Studio (anteriormente Google Data Studio):**
  * Lançado como Google Data Studio e **rebatizado oficialmente pelo Google em outubro de 2022 para Looker Studio**, integrando a suíte de dados da Google Cloud.
  * Ferramenta analítica **100% web e nativa na nuvem**, com versão gratuita integrada diretamente à conta Google.
  * Integração nativa e imediata com as fontes de dados do ecossistema Google (Google BigQuery, Google Sheets, Google Analytics, YouTube Analytics e Google Drive), além de conectores para SQL e bases de dados externas.
  * Foco em agilidade, compartilhamento colaborativo na Web e dashboards executivos limpos, sem exigir linguagens complexas de modelagem semântica como DAX.

| Dimensão Comparativa | Microsoft Power BI | Tableau (Salesforce) | Google Looker Studio |
| :--- | :--- | :--- | :--- |
| **Fabricante / Ecossistema** | Microsoft (Windows, Office 365, Fabric) | Salesforce (Tableau Cloud / Server) | Google Cloud (Google Workspace / GCP) |
| **Motor de Consulta / Tecnologia** | VertiPaq (colunar em memória) | VizQL (Visual Query Language) | Conectores diretos em nuvem / BigQuery BI Engine |
| **Linguagem de Cálculo** | DAX (fórmulas analíticas) e M (Power Query) | Cálculos Tableau e Expressões LOD | Campos calculados em sintaxe simplificada |
| **Ambiente de Criação** | Power BI Desktop (aplicativo local Windows) | Tableau Desktop e Tableau Web Authoring | 100% Web no navegador (sem aplicativo local) |
| **Curva de Aprendizado** | Média (exige domínio de DAX e modelo estrela) | Alta (grande flexibilidade visual e cálculos LOD) | Baixa / Acessível (criação rápida de relatórios) |
| **Perfil Típico de Uso** | BI corporativo de larga escala | Análise exploratória científica e visualização complexa | Relatórios operacionais ágeis e dashboards web |

---

### 4. Storytelling com Dados e Princípios Perceptuais

#### A. A Filosofia de Edward Tufte (*Data-Ink Ratio*)
* **Taxa de Tinta de Dados (*Data-Ink Ratio*):**
  $\\text{Data-Ink Ratio} = \\frac{\\text{Tinta dedicada aos dados}}{\\text{Tinta total utilizada no gráfico}}$
  Tufte postula que a meta de qualquer representação gráfica de excelência é aproximar essa taxa de 1,0, eliminando impiedosamente qualquer tinta que não transmita dados objetivos.
* **Eliminação de *Chartjunk* (Lixo Visual):** Remoção de elementos estéticos artificiais que distraem o observador, tais como efeitos 3D falsos em barras ou tortas, fundos coloridos carregados, linhas de grade pesadas e marcadores redundantes.

#### B. Metodologia de Cole Nussbaumer Knaflic (*Storytelling with Data*)
* **Entendimento do Contexto:** Identificar claramente quem é a audiência (gestores, parlamentares, cidadãos), qual a ação requerida e qual a mensagem nuclear do relatório.
* **Atributos Pré-Atencionais:** Propriedades visuais processadas pela memória sensorial humana em frações de segundo antes da atenção consciente: **Cor deliberada** (usar cores neutras/cinzas para dados secundários e uma única cor de destaque saturada para o dado focal), tamanho relativo e espessura de traço.
* **Redução da Carga Cognitiva:** Eliminação de obstáculos perceptuais, alinhamento consistente de textos e inserção de rótulos de dados diretamente sobre as curvas em vez de forçar o leitor a alternar constantemente entre o gráfico e uma legenda distante.

---

### 5. Mineração de Dados (Data Mining) Estrutura Padrões Preditivos e Descritivos pelo Ciclo CRISP-DM

#### A. O Processo de Mineração de Dados: O Ciclo de Vida CRISP-DM
O padrão de fato mais adotado internacionalmente para projetos de mineração de dados é o **CRISP-DM (Cross-Industry Standard Process for Data Mining)**, concebido por um consórcio industrial (Chapman et al., 2000). O modelo é **cíclico, adaptativo e iterativo**, estruturado em seis fases sucessivas:
1. **Entendimento do Negócio (*Business Understanding*):** Compreensão aprofundada dos objetivos institucionais e restrições do projeto sob a perspectiva organizacional (ex.: identificar padrões de emendas orçamentárias ou evasão de usuários na biblioteca), convertendo essas metas em uma definição formal de problema de mineração de dados.
2. **Entendimento dos Dados (*Data Understanding*):** Coleta inicial dos dados brutos, exploração preliminar de sua estrutura, identificação de problemas de qualidade (inconsistências, valores ausentes, duplicidades) e geração de primeiros insights exploratórios.
3. **Preparação dos Dados (*Data Preparation*):** Construção do conjunto de dados final que alimentará as ferramentas de modelagem. Envolve tarefas complexas de limpeza, desduplicação, seleção de atributos (*feature selection*), derivação de novas variáveis (*feature engineering*), transformação de tipos, normalização e integração de múltiplas fontes. **Atenção Cebraspe:** Esta fase consome historicamente cerca de **70% a 80% do tempo e esforço total** de qualquer projeto de mineração de dados.
4. **Modelagem (*Modeling*):** Seleção e aplicação de diversas técnicas algorítmicas de aprendizado de máquina (árvores de decisão, agrupamento k-means, redes neurais, regras de associação) e ajuste fino de seus hiperparâmetros. É comum retornar à fase de Preparação caso o algoritmo exija formatação específica dos dados (ex.: binarização de variáveis categóricas).
5. **Avaliação (*Evaluation*):** Verificação rigorosa se os modelos gerados atendem plenamente aos objetivos de negócio fixados na Fase 1. Analisam-se métricas estatísticas de desempenho (curva ROC/AUC, matriz de confusão, precisão, revocação, F1-score) e eventuais vieses ou falhas antes de aprovar a implantação.
6. **Implantação (*Deployment*):** Operacionalização do modelo no ambiente de produção (ex.: integração a um dashboard executivo do Portal da Câmara, disponibilização de serviço de recomendação de leitura no catálogo da biblioteca ou pipeline automatizado de classificação de discursos).

#### B. Taxonomia de Tarefas de Mineração de Dados
A mineração divide-se fundamentalmente em duas grandes vertentes analíticas:
* **Tarefas Descritivas (Aprendizado Não Supervisionado):**
  * Buscam identificar padrões intrínsecos, correlações, associações ou estruturas ocultas subjacentes aos dados, **sem a presença de uma variável-alvo previamente rotulada**.
  * *Agrupamento (*Clustering*):* Particiona os registros em grupos (clusters) onde a similaridade interna intra-cluster é maximizada e a similaridade inter-clusters é minimizada (ex.: algoritmo **K-Means**, DBSCAN). Aplicação: segmentar parlamentares por perfil de votação ou usuários da biblioteca por áreas de interesse de pesquisa.
  * *Regras de Associação:* Descobre relações de coocorrência e dependência entre itens transacionais (ex.: algoritmo **Apriori**). Fundamenta-se em três métricas canônicas:
    * **Suporte (*Support*):** Frequência relativa em que o conjunto de itens aparece em todas as transações.
    * **Confiança (*Confidence*):** Probabilidade condicional de o item consequente $Y$ ocorrer dado que o item antecedente $X$ ocorreu: $P(Y|X)$.
    * **Lift:** Mede a força da regra comparada à independência estatística dos itens: $\\text{Lift} > 1$ indica associação positiva relevante.
* **Tarefas Preditivas (Aprendizado Supervisionado):**
  * Buscam modelar a relação entre variáveis preditoras (atributos) e uma **variável-alvo (*target*) previamente rotulada**, visando estimar ou prever o valor desse atributo em novos dados não observados.
  * *Classificação:* A variável-alvo é **qualitativa/categórica e discreta** (ex.: prever se uma proposição legislativa será aprovada ou rejeitada; classificar um e-mail como spam ou não spam; classificar documentos em classes da CDD/CDU). Algoritmos: Árvores de Decisão (C4.5, CART), Florestas Aleatórias (*Random Forest*), Máquinas de Vetores de Suporte (SVM), *Naive Bayes* e Regressão Logística.
  * *Regressão:* A variável-alvo é **quantitativa/numérica contínua** (ex.: prever o custo orçamentário futuro de uma emenda parlamentar ou o número de empréstimos que uma obra terá no próximo semestre). Algoritmos: Regressão Linear Simples/Múltipla, Árvores de Regressão e Redes Neurais Artificiais.

### 6. Mineração de Textos (Text Mining) e TF-IDF Operam na Faixa Áurea de Luhn Sob a Lei de Zipf

#### A. Mineração de Textos (*Text Mining*) e Pipeline de Processamento de Linguagem Natural
Enquanto a mineração de dados opera sobre tabelas estruturadas, o *Text Mining* lida com o desafio de extrair conhecimento estruturado e acionável a partir de **textos em linguagem natural não estruturados** (pareceres, discursos, atas, projetos de lei).
* **Pipeline Canônico de Pré-Processamento Textual:**
  1. *Extração e Limpeza do Corpus:* Remoção de tags HTML, marcações XML, caracteres não alfanuméricos e conversão de todo o texto para minúsculas (*case folding*).
  2. *Tokenização (*Tokenization*):* Segmentação do fluxo textual contínuo em unidades atômicas discretas denominadas **tokens** (geralmente palavras isoladas ou termos compostos/n-gramas).
  3. *Remoção de Palavras de Parada (*Stopwords Removal*):* Filtragem e descarte de palavras estritamente gramaticais/funcionais de altíssima ocorrência no idioma (artigos, preposições, conjunções, pronomes como "de", "a", "o", "que", "em"). Tais vocábulos não possuem poder semântico discriminatório para caracterizar o assunto do documento.
  4. *Redução Morfológica do Vocabulário:*
     * **Stemming (Radicalização):** Processo heurístico computacionalmente rápido que decepa e remove prefixos e sufixos morfológicos da palavra, reduzindo-a a um radical básico (*stem*). **Atenção:** O radical resultante não é necessariamente uma palavra válida no dicionário (ex.: o algoritmo canônico de **Porter, 1980** reduz "biblioteca", "bibliotecário" e "biblioteconomia" para o radical comum \`bibliotec\`).
     * **Lemmatization (Lematização):** Processo linguístico muito mais sofisticado e profundo que utiliza tabelas morfológicas e análise do contexto sintático/gramatical (*Part-of-Speech Tagging*) para mapear cada palavra flexionada ao seu **lema canônico de dicionário** (ex.: os verbos "foram", "era", "fui" são reduzidos ao lema verbal "ser"; o substantivo plural "leis" é reduzido ao lema no singular "lei").

#### B. Ponderação Term Frequency – Inverse Document Frequency (TF-IDF)
Desenvolvido por **Gerard Salton** (1975) no âmbito do **Modelo de Espaço Vetorial (*Vector Space Model*)** de Recuperação da Informação, o TF-IDF é a métrica padrão para converter textos em vetores numéricos de pesos semânticos ponderados:
* **Frequência do Termo ($TF_{t,d}$ - Term Frequency):**
  Mede a importância local de um termo $t$ dentro de um documento específico $d$:
  $TF_{t,d} = \\frac{\\text{Contagem de ocorrências do termo } t \\text{ no documento } d}{\\text{Total de termos no documento } d}$
  Quanto mais vezes o termo é repetido no documento, maior tende a ser sua relevância para o assunto tratado naquele texto.
* **Frequência Inversa no Documento ($IDF_t$ - Inverse Document Frequency):**
  Mede a especificidade ou raridade informacional do termo $t$ no conjunto global de documentos (corpus com $N$ documentos):
  $IDF_t = \\log \\left( \\frac{N}{DF_t} \\right)$
  Onde $N$ é o total de documentos do corpus e $DF_t$ (*Document Frequency*) é o número de documentos em que o termo $t$ aparece ao menos uma vez.
  * Termos ubíquos que aparecem em praticamente todos os documentos do acervo (ex.: "Brasil", "artigo", "lei" em uma base legislativa) terão $DF_t \\approx N$, logo $\\frac{N}{DF_t} \\approx 1$ e $IDF_t = \\log(1) = 0$. Ou seja, seu peso global é neutralizado.
  * Termos raros e altamente específicos (ex.: "desregulamentação", "biotecnologia") aparecem em poucos documentos ($DF_t$ baixo), resultando em um valor de $IDF$ elevado.
* **Peso Final TF-IDF:**
  $TF\\text{-}IDF_{t,d} = TF_{t,d} \\times IDF_t$
  O peso é máximo quando um termo ocorre muitas vezes em um documento restrito (alto TF) e raramente no restante da biblioteca (alto IDF).

#### C. Conexão Epistemológica com a Lei de Zipf e os Pontos de Corte de Luhn
A fundamentação teórica que legitima o uso do TF-IDF e da remoção de stopwords no *Text Mining* ancora-se na Bibliometria clássica:
* **A Lei de Zipf (George Kingsley Zipf, 1949):**
  Demonstra que, em qualquer corpus em linguagem natural, a frequência de ocorrência ($f$) de uma palavra é inversamente proporcional ao seu posto de classificação ($r$) no ranking ordenado de frequências:
  $f \\times r = C \\quad \\text{ou} \\quad f \\propto \\frac{1}{r}$
  A palavra mais frequente ocorre aproximadamente o dobro de vezes da segunda mais frequente, o triplo da terceira, e assim sucessivamente.
* **Os Pontos de Corte de H. P. Luhn (1958):**
  O pioneiro da indexação automática H. P. Luhn cruzou a curva hiperbólica de Zipf com o valor informacional das palavras, estabelecendo dois limites fundamentais:
  1. *Ponto de Corte Superior:* Elimina as palavras do topo da distribuição de Zipf. São palavras de altíssima frequência (artigos, preposições, pronomes), porém de **nula carga semântica específica** (as *stopwords*). No TF-IDF, essas palavras recebem $IDF \\approx 0$.
  2. *Ponto de Corte Inferior:* Elimina as palavras da cauda longa da distribuição de Zipf (*hapax legomena* — palavras que ocorrem apenas uma ou duas vezes em todo o acervo). Apresentam frequência tão ínfima que são estatisticamente desprezíveis ou representam erros tipográficos e ruídos.
  3. *Zona de Transição Intermediária (Faixa Áurea de Luhn):* Palavras situadas entre o corte superior e o inferior. Possuem frequência média e concentram a **máxima densidade informacional e poder discriminatório semântico**, sendo os alvos nobres selecionados pelos algoritmos de mineração de textos para classificação automática, extração de tópicos e recuperação em bases legislativas.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Sistemas Informacionais e Bancos de Dados (sub-6-5):** Modelagem relacional (MER) e extração de dados.
* **SQL, Regex e APIs (sub-6-6):** Consultas SQL e filtros de pré-processamento de dados.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Ciência de Dados, a Mineração de Textos (*Text Mining*), a Visualização de Dados e o *Storytelling*** transformam acervos e dados brutos em inteligência acionável:
1. **O Ciclo KDD (*Knowledge Discovery in Databases* - Fayyad et al., 1996):**
   - Processo não trivial de identificação de padrões válidos, novos, potencialmente úteis e compreensíveis em grandes volumes de dados.
   - **As 5 Etapas do KDD:**
     1. *Seleção:* Amostragem e isolamento dos dados relevantes.
     2. *Pré-processamento:* Limpeza de ruídos, tratamento de dados ausentes e inconsistentes.
     3. *Transformação:* Redução de dimensionalidade, normalização e agregação de atributos.
     4. *Mineração de Dados (Data Mining):* Aplicação de algoritmos para extrair padrões (classificação, regressão, agrupamento/clusterização e associação).
     5. *Interpretação e Avaliação:* Análise crítica dos padrões descobertos para tomada de decisão.
2. **Mineração de Textos (*Text Mining*):**
   - Descoberta de conhecimento em dados textuais não estruturados (discursos parlamentares, pareceres, ementas).
   - Técnicas: Reconhecimento de Entidades Nomeadas (NER: identifica pessoas, órgãos e locais); Análise de Sentimento; e Modelagem de Tópicos (*Topic Modeling* - ex.: LDA - Latent Dirichlet Allocation).
3. **Visualização de Dados e Storytelling (Cole Nussbaumer Knaflic):**
   - Comunicação eficaz de dados por meio de gráficos adequados e narrativa visual envolvente.
   - **Princípios do Storytelling com Dados:**
     - Eliminar poluição visual (*clutter*): retirar grades pesadas, bordas 3D e efeitos ornamentais inúteis.
     - Focar a atenção do público utilizando atributos pré-atencionais (cor destacada em um elemento-chave, contraste e tamanho).
     - Escolha correta do gráfico: barras/colunas para comparações categóricas; linhas para séries temporais contínuas; dispersão para correlações. **Gráficos de pizza com muitas fatias são desaconselhados!**

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Modelagem de Tópicos nos Discursos em Plenário):** A equipe do CEDI aplica o algoritmo LDA (*Latent Dirichlet Allocation*) sobre 50.000 discursos proferidos no Plenário Ulysses Guimarães ao longo da legislatura. O modelo agrupa automaticamente os discursos em 10 temas emergentes principais (ex.: transição energética, marco temporal, reforma tributária), permitindo à biblioteca mapear a evolução das preocupações parlamentares ao longo do tempo.
- **Cenário 2 (Storytelling em Painel do Orçamento da União):** Para apresentar a execução das emendas parlamentares aos líderes partidários, o bibliotecário projeta um *dashboard* interativo no Power BI aplicando os princípios de Knaflic: elimina o excesso de linhas de grade, destaca em vermelho apenas as emendas com risco de cancelamento por perda de prazo e utiliza gráfico de barras horizontais ordenadas para visualização instantânea em 5 segundos.
- **Cenário 3 (Reconhecimento de Entidades Nomeadas - NER na Indexação Automática):** Ao receber o texto integral de uma lei ordinária de 100 páginas, um algoritmo de NER varre o documento e extrai automaticamente todas as menções a ministérios, autarquias e municípios, gerando sugestões prontas de pontos de acesso no formato MARC 21 para o catalogador validar.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Etapa KDD / Tipo de Gráfico | Objetivo Prático | Aplicação Recomendada | Conduta Desaconselhada |
| :--- | :--- | :--- | :--- |
| **Pré-processamento** | Limpar ruídos e nulos | Antes da mineração algorítmica | Aplicar algoritmo em dado corrompido |
| **Data Mining** | Extrair padrões matemáticos | Fase 4 do KDD (o núcleo do processo) | Confundir Data Mining com o KDD inteiro |
| **Gráfico de Linhas** | Mostrar evolução contínua no tempo | Séries temporais de votações anuais | Usar linha para variáveis categóricas |
| **Gráfico de Barras** | Comparar grandezas entre categorias | Gastos por comissão parlamentar | Usar 3D com sombras e poluição visual |
| **Gráfico de Pizza** | Mostrar proporção de um todo simples | Máximo de 2 a 3 fatias bem contrastadas | Usar com dezenas de fatias semelhantes |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Data Mining é Sinônimo do Processo KDD Inteiro:** O Cebraspe afirma que Mineração de Dados (Data Mining) e KDD são termos rigorosamente idênticos. **Gabarito: ERRADO.** O KDD é o processo metodológico completo de 5 etapas; o Data Mining é apenas **uma das etapas (a etapa 4)** do ciclo KDD.
- **Uso de Gráficos 3D em Storytelling:** Dizer que gráficos tridimensionais (3D) aumentam a precisão da leitura de dados pelo público. **Gabarito: ERRADO.** Em visualização de dados (Knaflic e Tufte), gráficos em 3D distorcem as proporções visuais e são considerados poluição visual grave (*chartjunk*).
- **Tratamento de Dados Ausentes:** O Cebraspe propõe que na etapa de pré-processamento todos os dados ausentes devem ser obrigatoriamente apagados do banco. **Gabarito: ERRADO.** Dados ausentes podem ser imputados por média, mediana ou modelagem estatística, avaliando-se o impacto no conjunto.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **FAYYAD, Usama; PIATETSKY-SHAPIRO, Gregory; SMYTH, Padhraic.** From data mining to knowledge discovery in databases. *AI Magazine*, v. 17, n. 3, p. 37-54, 1996. (O artigo seminal que definiu as etapas do processo KDD).
- **KNAFLIC, Cole Nussbaumer.** *Storytelling com Dados: um guia sobre visualização de dados para profissionais de negócios*. Rio de Janeiro: Alta Books, 2019. (A principal referência em comunicação e design de dados).
- **PROVOST, Foster; FAWCETT, Tom.** *Data Science para Negócios: o que você precisa saber sobre mineração de dados e pensamento analítico de dados*. Rio de Janeiro: Alta Books, 2016.
- **TUFTE, Edward R.** *The Visual Display of Quantitative Information*. 2. ed. Cheshire: Graphics Press, 2001. (O clássico pioneiro da teoria da visualização de dados).
- **MANNING, Christopher D. et al.** *Foundations of Statistical Natural Language Processing*. Cambridge: MIT Press, 1999.`,
  checkpoints: [
    {
      id: 'cp-14-4-1',
      pergunta: 'Micro-Checkpoint 1: Estatística Descritiva - Box Plot e Outliers',
      item: 'No diagrama de caixas (Box Plot), a linha horizontal situada no interior do retângulo indica a média aritmética da distribuição, enquanto os pontos isolados além das hastes indicam os valores classificados como outliers com base no intervalo interquartil.',
      gabarito: 'E',
      justificativa:
        'Errado! Conforme a gramática gráfica de John Tukey (1977) e Stephen Few (2012), a linha central no interior da caixa do Box Plot representa estritamente a MEDIANA (segundo quartil, Q2), e não a média aritmética.',
    },
    {
      id: 'cp-14-4-2',
      pergunta: 'Micro-Checkpoint 2: Mineração de Dados - Processo CRISP-DM e Tarefas',
      item: 'No modelo de processo CRISP-DM, as tarefas descritivas de mineração, a exemplo do agrupamento (clustering) e das regras de associação, destinam-se a prever o comportamento futuro de uma variável-alvo previamente rotulada a partir do treinamento de atributos preditores.',
      gabarito: 'E',
      justificativa:
        'Errado! Segundo a metodologia do consórcio CRISP-DM (Chapman et al., 2000) e Tanenbaum (2021), a predição de variável-alvo rotulada é atribuição exclusiva das tarefas PREDITIVAS (classificação e regressão). As tarefas DESCRITIVAS (agrupamento/clustering e regras de associação como Apriori) buscam padrões intrínsecos e estruturas subjacentes aos dados sem qualquer variável-alvo prévia (aprendizado não supervisionado).',
    },
    {
      id: 'cp-14-4-3',
      pergunta: 'Micro-Checkpoint 3: Text Mining - TF-IDF e Lei de Zipf',
      item: 'No âmbito da mineração de textos e da recuperação de informações, a métrica TF-IDF penaliza palavras de altíssima frequência no corpus global mediante a aplicação do IDF, convergindo teoricamente com a Lei de Zipf e com os postulados de Luhn, segundo os quais termos de frequência intermediária concentram a máxima capacidade de discriminação semântica.',
      gabarito: 'C',
      justificativa:
        'Certo! Conforme formulado por Gerard Salton (1975), George Kingsley Zipf (1949) e H. P. Luhn (1958), termos onipresentes (stopwords) possuem frequência documental elevada que zera o IDF, enquanto termos de frequência intermediária entre os pontos de corte de Luhn concentram o maior poder discriminante na indexação e recuperação textual.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-14-4-1',
        periodo: '1949 / 1958',
        disciplina: 'Bibliometria e Indexação Automática',
        focoPrincipal: 'Formulação da Lei de Zipf (relação frequência-posto) e dos pontos de corte de frequência de H. P. Luhn',
        figuraChave: 'George Kingsley Zipf e H. P. Luhn',
      },
      {
        id: 'tl-14-4-2',
        periodo: '1975 / 1977',
        disciplina: 'Recuperação da Informação e EDA',
        focoPrincipal: 'Desenvolvimento do Modelo Vetorial e TF-IDF por Gerard Salton e publicação da Análise Exploratória de Dados por John Tukey',
        figuraChave: 'Gerard Salton e John Tukey',
      },
      {
        id: 'tl-14-4-3',
        periodo: '2000 / 2015',
        disciplina: 'Mineração de Dados e BI Moderno',
        focoPrincipal: 'Publicação da metodologia CRISP-DM pelo consórcio industrial e lançamento do Microsoft Power BI',
        figuraChave: 'Consórcio CRISP-DM / Microsoft',
      },
      {
        id: 'tl-14-4-4',
        periodo: '2016 / 2022',
        disciplina: 'BI em Nuvem e Storytelling',
        focoPrincipal: 'Lançamento do Google Data Studio (rebatizado em 2022 como Looker Studio) e obra de Cole Knaflic',
        figuraChave: 'Google Cloud / Cole Nussbaumer Knaflic',
      },
    ],
    autores: [
      {
        id: 'aut-14-4-1',
        nome: 'Edward Tufte',
        ano: 2001,
        obraPrincipal: 'The Visual Display of Quantitative Information (2ª Ed.)',
        ideiaChave: 'Data-Ink Ratio: maximização de tinta dedicada aos dados reais e eliminação de chartjunk.',
        chipPegadinha: 'Gráficos 3D artificiais constituem lixo visual prejudicial.',
      },
      {
        id: 'aut-14-4-2',
        nome: 'John Tukey',
        ano: 1977,
        obraPrincipal: 'Exploratory Data Analysis (EDA)',
        ideiaChave: 'Investigação visual e quantitativa dos dados via Box Plot, sumário de cinco números e busca de padrões sem premissas prévias.',
        chipPegadinha: 'A linha central do Box Plot é a mediana, não a média.',
      },
      {
        id: 'aut-14-4-3',
        nome: 'Gerard Salton / George Kingsley Zipf',
        ano: 1975,
        obraPrincipal: 'A Theory of Indexing / Human Behavior and the Principle of Least Effort (1949)',
        ideiaChave: 'TF-IDF e Modelo Vetorial de Salton ancorados na Lei de Zipf: termos de frequência intermediária concentram máxima carga semântica.',
        chipPegadinha: 'Stopwords têm alto TF no documento, mas IDF nulo por estarem em todo o acervo.',
      },
      {
        id: 'aut-14-4-4',
        nome: 'CRISP-DM Consortium (Chapman et al.)',
        ano: 2000,
        obraPrincipal: 'CRISP-DM 1.0: Step-by-step data mining guide',
        ideiaChave: 'Ciclo de vida de mineração em 6 fases iterativas: a Preparação de Dados consome a maior parcela do esforço (70-80%).',
        chipPegadinha: 'Descritivo não tem variável-alvo; Preditivo exige variável-alvo.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-14-4-1',
        afirmacao: 'Em um gráfico do tipo Box Plot, a extensão das hastes superior e inferior corresponde obrigatoriamente aos valores absolutos máximo e mínimo de todo o conjunto de dados amostrado.',
        gabarito: 'E',
        porQue: 'As hastes estendem-se até o limite máximo de 1,5 * IQR. Quaisquer observações além dessa fronteira são destacadas individualmente como outliers (valores discrepantes).',
      },
      {
        id: 'peg-14-4-2',
        afirmacao: 'O algoritmo de stemming garante que todas as palavras reduzidas ao seu radical tornem-se obrigatoriamente vocábulos gramaticalmente corretos e catalogados no dicionário do idioma.',
        gabarito: 'E',
        porQue: 'O stemming (ex.: algoritmo de Porter) atua por poda heurística de sufixos e afixos, gerando radicais que muitas vezes não são palavras dicionarizadas. Quem garante lema dicionarizado é a LEMATIZAÇÃO.',
      },
      {
        id: 'peg-14-4-3',
        afirmacao: 'Nas tarefas de mineração descritiva por regras de associação (algoritmo Apriori), um valor de Lift menor do que 1 indica que a presença do item antecedente aumenta a probabilidade de compra do item consequente.',
        gabarito: 'E',
        porQue: 'Lift > 1 indica associação positiva; Lift = 1 indica independência estatística; e Lift < 1 indica associação negativa (a presença de um inibe a presença do outro).',
      },
    ],
  },
};

