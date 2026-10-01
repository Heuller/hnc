import type { ModuloFilho } from '../../../domain/types';

export const submodulo32: ModuloFilho = {
  id: 'sub-3-2',
  numero: '3.2',
  titulo: 'Classificação Decimal de Direito (CDDir) e Notação de Autor (Cutter-Sanborn e PHA)',
  descricaoCurta: 'A Classificação Decimal de Direito de Doris de Queiroz Carvalho (CDDir), classes jurídicas 340 a 349, divisões de forma, composição do número de chamada e as tabelas de notação de autor (Cutter, Cutter-Sanborn e PHA).',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Doris de Queiroz Carvalho', 'Charles Ammi Cutter', 'Kate Emery Sanborn', 'Paulo Henrique de Assis (PHA)'],
  alertasCebraspe: [
    'A CDDir foi criada pela bibliotecária brasileira Doris de Queiroz Carvalho para suprir a deficiência das tabelas gerais (CDD e CDU) no tratamento das ramificações específicas do Direito brasileiro e comparado.',
    'Divisões de Forma na CDDir: servem para reunir obras que tratam do mesmo assunto sob uma forma de apresentação documental idêntica (ex.: dicionários, códigos, anteprojetos de lei, comentários legislativos).',
    'Cutter para entidades com sigla (ex.: IBGE, IPEA, OAB): a notação de autor é montada a partir da própria sigla (primeira letra maiúscula seguida do código numérico das letras da sigla), e NUNCA a partir do significado por extenso da sigla. O Cebraspe adora afirmar que se usa o nome por extenso!',
    'Número de chamada completo: compõe-se da Notação de Classificação (assunto) + Notação de Autor (Cutter) + título distintivo (primeira letra minúscula do título da obra) + ano de publicação e número do exemplar/volume.',
    'Tabela PHA vs. Cutter-Sanborn: a tabela PHA foi desenvolvida no Brasil por Paulo Henrique de Assis para atender à fonética e à frequência dos sobrenomes luso-brasileiros (Silva, Santos, Oliveira, Souza).',
  ],
  quadroComparativo: {
    titulo: 'Estrutura das Classes Principais da CDDir (Doris de Queiroz Carvalho)',
    colunas: ['Classe CDDir', 'Ramo do Direito', 'Conteúdo Abrangido', 'Aplicação na Biblioteca da Câmara'],
    linhas: [
      ['341', 'Direito Internacional', 'Direito Internacional Público, Privado, Tratados e Organizações Internacionais', 'Tratados e acordos internacionais apreciados pelo Congresso Nacional'],
      ['342', 'Direito Constitucional e Administrativo', 'Poderes do Estado, Direitos Fundamentais, Processo Legislativo, Atos da Administração', 'Projetos de Emenda à Constituição (PECs), estrutura dos órgãos públicos federais'],
      ['343', 'Direito Penal e Criminologia', 'Código Penal, crimes comuns e especiais, penas e medidas de segurança', 'Legislação penal e segurança pública em tramitação na CCJC'],
      ['344', 'Direito do Trabalho e Previdência Social', 'CLT, relações laborais, seguridade e benefícios previdenciários', 'Reformas trabalhistas e previdenciárias'],
      ['345', 'Direito Processual Penal', 'Código de Processo Penal, inquérito, competência criminal, júri, recursos penais', 'Processos de julgamento de parlamentares e garantias processuais'],
      ['346', 'Direito Civil', 'Direito de Família, Sucessões, Obrigações, Coisas, Contratos civis', 'Código Civil e suas reformas legislativas'],
      ['347', 'Direito Comercial / Empresarial e Proc. Civil', 'Código de Processo Civil (CPC), falências, títulos de crédito, direito societário', 'Normas sobre mercado de capitais e procedimentos judiciais cíveis'],
      ['348', 'Leis, Decretos, Jurisprudência', 'Textos legais consolidados, repertórios jurisprudenciais, acórdãos e súmulas', 'Publicações oficiais e bases de dados jurisprudenciais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Classificação Decimal de Direito (CDDir) de Doris de Queiroz Carvalho

A Classificação Decimal de Direito (CDDir), publicada originalmente na década de 1940 e ampliada sucessivamente por **Doris de Queiroz Carvalho**, é o mais importante e consagrado sistema especializado de classificação jurídica em língua portuguesa (presente na pasta \`Classificação e indexação/003017427.pdf\`):

#### A. Razão Histórica e Epistemológica
Os sistemas universais de classificação (como a CDD e a CDU) foram estruturados a partir da tradição jurídica anglo-saxônica (*Common Law*), apresentando profundas deficiências para classificar o ordenamento jurídico de tradição romano-germânica (*Civil Law*) vigente no Brasil.
A CDDir resolveu esse problema ao criar uma hierarquia detalhada para o Direito Positivo Brasileiro, sendo adotada como padrão na **Rede Virtual de Bibliotecas (RVBI)**, na Biblioteca da Câmara dos Deputados, no Senado Federal, no STF, no STJ e na Procuradoria-Geral da República.

#### B. As Divisões de Forma na CDDir
Para além do assunto substantivo (as classes 341 a 349), a CDDir introduz **divisões de forma**, que permitem categorizar o formato de apresentação ou tratamento do documento:
* Textos de leis originais e compiladas;
* Projetos e anteprojetos de lei acompanhados de justificativa;
* Códigos anotados e comentados;
* Dicionários e enciclopédias jurídicas;
* Coletâneas de jurisprudência (acórdãos, repertórios e súmulas).

---

### 2. Notação de Autor e o Número de Chamada

O número de chamada (*call number*) é a notação alfanumérica que individualiza o documento na biblioteca e define sua localização física unívoca nas estantes:
$$\\text{Número de Chamada} = \\text{Classificação (Assunto)} + \\text{Notação de Autor (Cutter)} + \\text{Workmark (Letra do Título)} + \\text{Ano} + \\text{Exemplar}$$

#### A. A Tabela Cutter-Sanborn
Desenvolvida por Charles Ammi Cutter e expandida por Kate Emery Sanborn:
* Atribui uma **letra maiúscula** inicial (a primeira letra do sobrenome do autor ou da primeira palavra do título se a entrada for pelo título) seguida de **dois ou três dígitos numéricos** ordenados alfabeticamente.
* *A "Workmark" (Marca de Trabalho):* Para diferenciar obras distintas do mesmo autor classificadas sob o mesmo assunto, acrescenta-se uma **letra minúscula** correspondente à primeira letra do título da obra (desprezando-se artigos iniciais).
  * *Exemplo:* Obra *Dom Casmurro* de Machado de Assis (Cutter \`M149\`): o número de Cutter será \`M149d\`.

#### B. A Tabela PHA (Paulo Henrique de Assis)
Criada especificamente no Brasil para contornar as limitações da tabela Cutter-Sanborn na representação de sobrenomes lusófonos:
* Adapta os intervalos numéricos à alta incidência de sobrenomes como Silva, Santos, Souza, Pereira, Rodrigues, Ferreira e Oliveira, evitando acúmulo de obras com números de chamada idênticos.

#### C. Regras Cruciais Cobradas pelo Cebraspe
1. **Entidades com Sigla:** O código numérico do Cutter é extraído das letras da **sigla** (ex.: Petrobras, IPEA, CNJ), e NUNCA do nome por extenso do órgão.
2. **Entrada por Título (Obras com 4 ou mais autores ou anônimas):** O Cutter é extraído da **primeira palavra do título** (excluindo-se o artigo inicial). A workmark será a letra minúscula da segunda palavra do título.
3. **Autores com o mesmo sobrenome:** A tabela Cutter-Sanborn prevê distinções alfanuméricas crescentes para garantir que autores homônimos não colidam nas estantes.`,
  checkpoints: [
    {
      id: 'cp-3-2-1',
      pergunta: 'Micro-Checkpoint 1: Origem e Aplicação da CDDir',
      item: 'A Classificação Decimal de Direito (CDDir), concebida por Doris de Queiroz Carvalho, foi estruturada para adaptar a classificação jurídica às particularidades do ordenamento jurídico brasileiro e comparado de matriz romano-germânica.',
      gabarito: 'C',
      justificativa: 'Correto! A CDDir é amplamente utilizada nas bibliotecas jurídicas do Brasil para superar as deficiências das tabelas anglo-saxônicas.',
    },
    {
      id: 'cp-3-2-2',
      pergunta: 'Micro-Checkpoint 2: Notação de Autor para Entidades com Sigla',
      item: 'Na composição do número de Cutter segundo a tabela Cutter-Sanborn, caso a autoria de uma obra seja atribuída a uma entidade cuja entrada seja por sigla, a notação numérica deve ser extraída do significado por extenso da primeira palavra que compõe a referida sigla.',
      gabarito: 'E',
      justificativa: 'Errado! A notação numérica de Cutter é extraída diretamente das letras da sigla (ex.: OAB, IPEA), e não do seu significado por extenso.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-2-1',
        periodo: '1899',
        disciplina: 'Tabela de Notação de Autor',
        focoPrincipal: 'Expansão de Kate Sanborn sobre as tabelas alfanuméricas de Cutter (Tabela Cutter-Sanborn)',
        figuraChave: 'Charles Ammi Cutter e Kate Emery Sanborn',
      },
      {
        id: 'tl-3-2-2',
        periodo: '1948 / 1977',
        disciplina: 'Classificação Especializada em Direito',
        focoPrincipal: 'Criação e expansão da Classificação Decimal de Direito (CDDir) para a biblioteconomia brasileira',
        figuraChave: 'Doris de Queiroz Carvalho',
      },
      {
        id: 'tl-3-2-3',
        periodo: '1970',
        disciplina: 'Tabela de Notação Brasileira',
        focoPrincipal: 'Desenvolvimento da Tabela PHA adaptada à onomástica luso-brasileira',
        figuraChave: 'Paulo Henrique de Assis',
      },
    ],
    autores: [
      {
        id: 'aut-3-2-1',
        nome: 'Doris de Queiroz Carvalho',
        ano: 1977,
        obraPrincipal: 'Classificação Decimal de Direito',
        ideiaChave: 'Estruturação das classes 340 a 349 da CDDir e divisões de forma para o Direito Positivo.',
        chipPegadinha: 'A CDDir é adotada na RVBI e na Biblioteca da Câmara dos Deputados.',
      },
      {
        id: 'aut-3-2-2',
        nome: 'Paulo Henrique de Assis (PHA)',
        ano: 1970,
        obraPrincipal: 'Tabela PHA para notação de autor',
        ideiaChave: 'Distribuição estatística dos sobrenomes brasileiros para individualização precisa na estante.',
        chipPegadinha: 'PHA foi criada para nomes brasileiros; Cutter-Sanborn foi criada para a língua inglesa.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-2-1',
        afirmacao: 'Na Classificação Decimal de Direito de Doris de Queiroz Carvalho, a classe 342 destina-se ao tratamento do Direito Penal e Processual Penal.',
        gabarito: 'E',
        porQue: 'A classe 342 é Direito Constitucional e Administrativo. Direito Penal fica na classe 343, e Processo Penal na 345.',
      },
      {
        id: 'peg-3-2-2',
        afirmacao: 'O número de chamada de um livro prescinde da notação de autor, sendo composto unicamente pelo código de classificação de assunto e o ano de publicação.',
        gabarito: 'E',
        porQue: 'O número de chamada exige a notação de autor (Cutter ou PHA) para permitir o ordenamento topográfico individualizado das obras na mesma estante.',
      },
    ],
  },
};
