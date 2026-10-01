import type { ModuloFilho } from '../../../domain/types';

export const submodulo41: ModuloFilho = {
  id: 'sub-4-1',
  numero: '4.1',
  titulo: 'Recuperação da Informação, Álgebra Booleana e Mecanismos de Busca',
  descricaoCurta: 'Fundamentos de Information Retrieval (Mooers, Salton), álgebra booleana (AND, OR, NOT), operadores de proximidade e truncagem, modelos de recuperação (booleano, vetorial e probabilístico), arquivo invertido, motores de busca e metabuscadores.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Calvin Mooers', 'Gerard Salton', 'George Boole', 'Ricardo Baeza-Yates', 'Cyril Cleverdon'],
  alertasCebraspe: [
    'Operadores Booleanos e seus impactos em Revocação e Precisão: o operador AND (interseção) restringe a busca e AUMENTA A PRECISÃO; o operador OR (união) amplia a busca e AUMENTA A REVOCAÇÃO; o operador NOT (exclusão) restringe a busca e aumenta a precisão (mas com risco de eliminar documentos relevantes que abordem o termo secundariamente).',
    'Arquivo Invertido (Inverted Index): é a estrutura interna de dados padrão utilizada por praticamente todos os motores de busca e sistemas de RI para viabilizar buscas rápidas em grandes massas textuais, mapeando cada palavra/termo único a uma lista dos documentos onde ele ocorre.',
    'Metabuscador (Metamecanismo de busca / Busca Federada): NÃO possui base de dados própria! Ele envia a consulta simultaneamente a múltiplos motores ou bases de dados externas, coleta os resultados, elimina duplicatas e apresenta uma lista unificada.',
    'O Google NÃO é um metabuscador; o Google é um motor de busca direto que possui seus próprios robôs rastreadores (spiders/crawlers) e constrói seu próprio índice.',
    'Modelo Vetorial (Salton): representa documentos e consultas como vetores em um espaço multidimensional, calculando a relevância através do cosseno do ângulo entre os vetores (TF-IDF), permitindo recuperação parcial e ranqueamento por similaridade.',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Modelos Clássicos de Recuperação da Informação (RI)',
    colunas: ['Critério', 'Modelo Booleano Clássico', 'Modelo Vetorial (Salton - TF-IDF)', 'Modelo Probabilístico (Robertson)'],
    linhas: [
      ['Base Matemática', 'Teoria dos Conjuntos e Lógica Booleana', 'Álgebra Linear e Geometria Espacial (Espaço Vetorial)', 'Teoria da Probabilidade e Teorema de Bayes'],
      ['Tipo de Casamento', 'Binário e exato (Tudo ou Nada: pertence ou não pertence)', 'Gradual / Parcial baseado em pesos numéricos (Similaridade de Cosseno)', 'Probabilidade estatística de um documento ser relevante para a consulta'],
      ['Ranqueamento de Resultados', 'Não ranqueia (resultados não ordenados por grau de relevância)', 'Excelente ranqueamento contínuo por escore decrescente de similaridade', 'Ranqueamento decrescente por probabilidade de relevância estimada'],
      ['Ponderação de Termos', 'Não pondera (termos têm peso 1 ou 0)', 'Ponderação apurada: Frequência do Termo (TF) × Inverso da Frequência no Documento (IDF)', 'Pesos atribuídos a partir de parâmetros estatísticos da coleção'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Gênese da Recuperação da Informação (*Information Retrieval - IR*)

O termo **Recuperação da Informação** foi cunhado em 1950 pelo pioneiro da computação **Calvin Mooers**:
> *"A recuperação da informação abrange os aspectos intelectuais da descrição das informações e de suas especificações para a busca, assim como os sistemas, técnicas ou máquinas que são empregados para executar a operação."*

Conforme Ricardo Baeza-Yates e Berthier Ribeiro-Neto (*Modern Information Retrieval*), o objetivo primordial de um sistema de RI é recuperar informações de natureza não estruturada ou semiestruturada (documentos textuais) que satisfaçam uma **necessidade de informação** do usuário.

---

### 2. Estratégias de Busca e a Álgebra Booleana

A formulação da consulta (*query*) envolve a combinação lógica de termos representativos:

#### A. Operadores Lógicos Booleanos (George Boole)
1. **Operador AND (E) — Interseção:**
   * Exige a ocorrência simultânea de todos os termos vinculados.
   * *Efeito:* Restringe o escopo da pesquisa, reduz o volume de resultados recuperados e **aumenta a Precisão**.
2. **Operador OR (OU) — União:**
   * Exige a ocorrência de pelo menos um dos termos combinados. Utilizado para agrupar sinônimos, variantes linguísticas e termos correlatos.
   * *Efeito:* Amplia a pesquisa, traz maior volume de documentos e **aumenta a Revocação**.
3. **Operador NOT / AND NOT (NÃO) — Exclusão:**
   * Elimina os documentos que contenham determinado termo indesejado.
   * *Efeito:* Aumenta a precisão, mas deve ser usado com extremo cuidado para evitar a perda de itens pertinentes.

#### B. Operadores Sintáticos Complementares
* **Truncagem (*Wildcards*):** Permite recuperar variações morfológicas de uma raiz com o uso de caracteres coringa como \`*\` ou \`?\` (ex.: \`bibliotec*\` recupera biblioteca, bibliotecas, bibliotecário, biblioteconomia).
* **Operadores de Proximidade e Adjacência:** Exigem que os termos apareçam próximos dentro de uma determinada distância de palavras ou na mesma sentença (\`NEAR\`, \`ADJ\`, \`WITH\`).
* **Busca por Frase Exata:** Uso de aspas duplas \`"..."\` para recuperar a sequência literal e exata de palavras (ex.: \`"processo legislativo brasileiro"\`).

---

### 3. A Estrutura do Arquivo Invertido (*Inverted Index*)

O **Arquivo Invertido** é a estrutura de indexação computacional fundamental que torna viável a busca instantânea em sistemas com milhões de registros:
* Ao processar a coleção documental, o sistema decompõe os textos em termos individuais (removendo *stop words* como preposições e artigos).
* Cria-se um dicionário ordenado de termos únicos, onde cada termo aponta para uma lista encadeada (*postings list*) dos identificadores dos documentos onde ele ocorre e a posição das palavras.
* Quando o usuário executa uma busca booleana, o computador não lê os documentos inteiros; ele simplesmente cruza as listas de ponteiros do arquivo invertido na memória RAM em milissegundos.

---

### 4. Mecanismos de Busca vs. Metabuscadores

* **Mecanismos de Busca Diretos (Motores de Busca / Search Engines):**
  * Possuem três módulos estruturais:
    1. *Rastreador / Coletor (Crawler / Spider):* Robô que navega continuamente pela rede coletando páginas e links;
    2. *Módulo de Indexação:* Processa o texto coletado e constrói o arquivo invertido;
    3. *Módulo de Consulta e Ranqueamento:* Interface que recebe a pergunta do usuário e devolve os links ranqueados por algoritmos como PageRank e TF-IDF.
* **Metabuscadores (Metamecanismos / Busca Federada):**
  * **Não mantêm base de dados própria de documentos nem coletam a rede!**
  * Atuam como intermediários: recebem a consulta do usuário, traduzem-na e transmitem-na simultaneamente a múltiplos motores de busca ou catálogos externos (ex.: Google, Yahoo, Scopus, catálogos OPAC).
  * Coletam as respostas dessas fontes, eliminam as duplicatas, unificam o ranqueamento e apresentam um único resultado consolidado.`,
  checkpoints: [
    {
      id: 'cp-4-1-1',
      pergunta: 'Micro-Checkpoint 1: Operadores Booleanos e Desempenho de RI',
      item: 'Na formulação de uma estratégia de busca em base de dados documental, o emprego do operador booleano OR visa restringir a quantidade de resultados para aumentar a precisão da pesquisa.',
      gabarito: 'E',
      justificativa: 'Errado! O operador OR é de união; ele amplia a pesquisa agrupando termos e sinônimos, com a finalidade precípua de elevar a REVOCAÇÃO (e não a precisão).',
    },
    {
      id: 'cp-4-1-2',
      pergunta: 'Micro-Checkpoint 2: Funcionamento dos Metabuscadores',
      item: 'Os metabuscadores caracterizam-se por realizar buscas federadas em múltiplos sistemas e bases de dados heterogêneas a partir de uma interface única, sem a necessidade de manterem um repositório próprio de documentos.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a definição conceitual de metabuscador: um provedor de serviço que pesquisa em fontes distribuídas sem ter base de dados própria.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-4-1-1',
        periodo: '1854',
        disciplina: 'Lógica Matemática',
        focoPrincipal: 'Formulação da Álgebra Booleana por George Boole (Leis do Pensamento)',
        figuraChave: 'George Boole',
      },
      {
        id: 'tl-4-1-2',
        periodo: '1950',
        disciplina: 'Information Retrieval',
        focoPrincipal: 'Criação do termo "Recuperação da Informação" (Information Retrieval)',
        figuraChave: 'Calvin Mooers',
      },
      {
        id: 'tl-4-1-3',
        periodo: '1968 / 1975',
        disciplina: 'Modelo Vetorial e SMART',
        focoPrincipal: 'Desenvolvimento do Modelo do Espaço Vetorial e da métrica TF-IDF na Universidade de Cornell',
        figuraChave: 'Gerard Salton',
      },
    ],
    autores: [
      {
        id: 'aut-4-1-1',
        nome: 'Calvin Mooers',
        ano: 1950,
        obraPrincipal: 'Information retrieval viewed as a temporal signalling process',
        ideiaChave: 'Cunhador da expressão Information Retrieval; pioneiro dos sistemas de cartões perfurados (Zatocoding).',
        chipPegadinha: 'Mooers é o pai do termo "Recuperação da Informação".',
      },
      {
        id: 'aut-4-1-2',
        nome: 'Gerard Salton',
        ano: 1975,
        obraPrincipal: 'A Vector Space Model for Automatic Indexing',
        ideiaChave: 'Pai da moderna recuperação da informação, criador do modelo vetorial, similaridade por cosseno e do sistema SMART.',
        chipPegadinha: 'O modelo vetorial permite correspondência parcial e ranqueamento por relevância, superando o booleano exato.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-4-1-1',
        afirmacao: 'O mecanismo de busca Google é um exemplo clássico de metabuscador disponível na Web.',
        gabarito: 'E',
        porQue: 'O Google é um motor de busca direto com crawlers e base de dados própria de índices, não um metabuscador.',
      },
      {
        id: 'peg-4-1-2',
        afirmacao: 'O arquivo invertido é uma técnica ultrapassada que foi totalmente abolida dos sistemas informatizados de recuperação de informação.',
        gabarito: 'E',
        porQue: 'O arquivo invertido continua sendo a estrutura de dados mais rápida, eficiente e amplamente empregada na engenharia de motores de busca.',
      },
    ],
  },
};
