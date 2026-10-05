import type { ModuloFilho } from '../../../domain/types';

export const submodulo144: ModuloFilho = {
  id: 'sub-14-4',
  numero: '14.4',
  titulo: 'Ciência de Dados, Transformação, Visualização e Storytelling',
  descricaoCurta: 'Tipologia de dados (estruturados, semiestruturados e não estruturados); atributos categóricos e numéricos, métricas estatísticas e pipeline de ETL/ELT; gramática de gráficos (histograma, boxplot, dispersão); ferramentas analíticas (Power BI, DAX, Power Query) e storytelling com dados.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Edward Tufte', 'Cole Nussbaumer Knaflic', 'Stephen Few', 'Alberto Cairo', 'Microsoft Power BI Team'],
  alertasCebraspe: [
    'Tipos de Atributos e Variáveis: Qualitativos/Categóricos dividem-se em Nominais (sem hierarquia intrínseca, ex.: partido político, UF) e Ordinais (com ordenação natural, ex.: nível de escolaridade, prioridade de tramitação baixa/média/alta); Quantitativos/Numéricos dividem-se em Discretos (contagens inteiras, ex.: quantidade de votos) e Contínuos (mensurações em escala real contínua, ex.: orçamento público em reais, percentual de tramitação).',
    'Pipeline de Transformação (ETL vs. ELT): No ETL clássico, os dados são extraídos de fontes operacionais, transformados em um servidor intermediário (limpeza, tipagem e modelagem) e posteriormente carregados no Data Warehouse. No ELT contemporâneo em nuvem (Data Lakehouse), os dados brutos são carregados diretamente no repositório central e a transformação ocorre internamente aproveitando o poder computacional do banco de destino.',
    'Diferenciação Crítica de Gráficos: Histograma visualiza a distribuição de frequências de uma variável quantitativa contínua agrupada em intervalos de classes (bins), não havendo espaçamento entre as barras contíguas; o Gráfico de Barras/Colunas destina-se à comparação de categorias discretas qualitativas. O Box Plot (diagrama de caixas) evidencia a mediana, os percentis 25 e 75 (intervalo interquartil IQR) e detecta outliers univariados situados além de 1,5 * IQR das hastes.',
    'Microsoft Power BI e Modelagem Semântica: O Power Query (baseado na Linguagem M) é o motor de extração e transformação de dados; o DAX (Data Analysis Expressions) é a linguagem analítica para cálculo de medidas dinâmicas em tempo de consulta e colunas calculadas. A modelagem recomendada para BI corporativo é o Esquema em Estrela (Star Schema), composto por tabelas Fato centrais (contendo métricas quantitativas) conectadas diretamente a tabelas Dimensão (contendo atributos de contexto e filtros).',
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
  teoriaDensaMarkdown: `### 1. Ciência de Dados, Tipologias e Métricas Fundamentais

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

---

### 2. O Pipeline de Dados: Engenharia de Transformação (ETL vs. ELT)

* **ETL Tradicional (Extract, Transform, Load):**
  1. *Extract:* Extração dos dados de bancos transacionais operacionais (OLTP).
  2. *Transform:* Limpeza, conversão de tipos de dados, desduplicação, normalização e agregação realizadas em uma camada de processamento dedicada (Staging Area).
  3. *Load:* Carga dos dados limpos e prontos diretamente no Data Warehouse (DW) para consultas analíticas (OLAP).
* **ELT Moderno (Extract, Load, Transform):**
  * Utilizado em ecossistemas de Big Data e Data Lakes na nuvem. Os dados brutos são extraídos e carregados diretamente no repositório de destino em seu estado cru; a transformação é executada sob demanda aproveitando o poder massivo de processamento distribuído da infraestrutura de destino.
* **Operações Essenciais de Limpeza e Preparação:**
  * *Tratamento de Dados Faltantes (Missing Values):* Exclusão de linhas/colunas incompletas ou imputação (preenchimento por média, mediana ou modelo preditivo).
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

---

### 4. Storytelling com Dados e Princípios Perceptuais

#### A. A Filosofia de Edward Tufte (*Data-Ink Ratio*)
* **Taxa de Tinta de Dados (*Data-Ink Ratio*):**
  $$\\text{Data-Ink Ratio} = \\frac{\\text{Tinta dedicada aos dados}}{\\text{Tinta total utilizada no gráfico}}$$
  Tufte postula que a meta de qualquer representação gráfica de excelência é aproximar essa taxa de 1,0, eliminando impiedosamente qualquer tinta que não transmita dados objetivos.
* **Eliminação de *Chartjunk* (Lixo Visual):** Remoção de elementos estéticos artificiais que distraem o observador, tais como efeitos 3D falsos em barras ou tortas, fundos coloridos carregados, linhas de grade pesadas e marcadores redundantes.

#### B. Metodologia de Cole Nussbaumer Knaflic (*Storytelling with Data*)
* **Entendimento do Contexto:** Identificar claramente quem é a audiência (gestores, parlamentares, cidadãos), qual a ação requerida e qual a mensagem nuclear do relatório.
* **Atributos Pré-Atencionais:** Propriedades visuais processadas pela memória sensorial humana em frações de segundo antes da atenção consciente: **Cor deliberada** (usar cores neutras/cinzas para dados secundários e uma única cor de destaque saturada para o dado focal), tamanho relativo e espessura de traço.
* **Redução da Carga Cognitiva:** Eliminação de obstáculos perceptuais, alinhamento consistente de textos e inserção de rótulos de dados diretamente sobre as curvas em vez de forçar o leitor a alternar constantemente entre o gráfico e uma legenda distante.`,
  checkpoints: [
    {
      id: 'cp-14-4-1',
      pergunta: 'Micro-Checkpoint 1: Estatística Descritiva - Box Plot e Outliers',
      item: 'No diagrama de caixas (Box Plot), a linha horizontal situada no interior do retângulo indica a média aritmética da distribuição, enquanto os pontos isolados além das hastes indicam os valores classificados como outliers com base no intervalo interquartil.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme a gramática gráfica de John Tukey (1977) e Stephen Few (2012), a linha central no interior da caixa do Box Plot representa estritamente a MEDIANA (segundo quartil, Q2), e não a média aritmética.',
    },
    {
      id: 'cp-14-4-2',
      pergunta: 'Micro-Checkpoint 2: Visualização de Dados - Histograma vs. Gráfico de Colunas',
      item: 'O histograma diferencia-se do gráfico de colunas convencional por ser a ferramenta gráfica destinada a representar a distribuição de frequência de uma variável quantitativa contínua agrupada em classes, razão pela qual suas colunas são contíguas, sem espaçamento.',
      gabarito: 'C',
      justificativa: 'Certo! Segundo as diretrizes de visualização de Stephen Few (2012) e Tukey (1977), o histograma representa dados numéricos contínuos divididos em intervalos de classes (bins), tocando-se as barras consecutivas para evidenciar a continuidade do domínio.',
    },
    {
      id: 'cp-14-4-3',
      pergunta: 'Micro-Checkpoint 3: Storytelling com Dados - Princípio de Edward Tufte',
      item: 'Conforme os postulados de Edward Tufte sobre a visualização quantitativa de dados, a taxa de tinta de dados (data-ink ratio) deve ser maximizada, suprimindo-se elementos ornamentais conhecidos como chartjunk para reduzir a carga cognitiva do observador.',
      gabarito: 'C',
      justificativa: 'Certo! Segundo a obra seminal de Edward Tufte (2001), deve-se maximizar o data-ink ratio e eliminar rigorosamente chartjunk (linhas de grade supérfluas, 3D ilusório, sombras ornamentais).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-14-4-1',
        periodo: '1983',
        disciplina: 'Visualização de Dados',
        focoPrincipal: 'Publicação de "The Visual Display of Quantitative Information" por Edward Tufte, instituindo o conceito de data-ink ratio',
        figuraChave: 'Edward Tufte',
      },
      {
        id: 'tl-14-4-2',
        periodo: '2015 / Presente',
        disciplina: 'Business Intelligence & Storytelling',
        focoPrincipal: 'Lançamento do Microsoft Power BI e consolidação da metodologia "Storytelling with Data" de Cole Knaflic',
        figuraChave: 'Cole Nussbaumer Knaflic / Microsoft',
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
        nome: 'Cole Nussbaumer Knaflic',
        ano: 2015,
        obraPrincipal: 'Storytelling com Dados: Um Guia sobre Visualização de Dados para Profissionais de Negócios',
        ideiaChave: 'Uso de atributos pré-atencionais (cores focais deliberadas) e redução da carga cognitiva na comunicação de insights.',
        chipPegadinha: 'Uso consciente de cinza + cor de destaque para direcionar o foco.',
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
        afirmacao: 'Nas medidas calculadas desenvolvidas em DAX no Microsoft Power BI, os valores são pré-calculados e gravados fisicamente em disco durante o processo de atualização da tabela, funcionando de forma idêntica às colunas calculadas.',
        gabarito: 'E',
        porQue: 'Medidas DAX são calculadas dinamicamente EM TEMPO DE EXECUÇÃO sob o contexto de filtro da visualização. Quem consome espaço físico de disco/RAM são as colunas calculadas.',
      },
    ],
  },
};
