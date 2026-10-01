import type { ModuloFilho } from '../../../domain/types';

export const submodulo101: ModuloFilho = {
  id: 'sub-10-1',
  numero: '10.1',
  titulo: 'Regimento Interno da Câmara dos Deputados (RICD) e a Biblioteca Parlamentar',
  descricaoCurta: 'Estrutura institucional da Câmara dos Deputados, competências da Mesa Diretora e do Plenário, comissões permanentes e temporárias, o Centro de Documentação e Informação (Cedi) e a Biblioteca Pedro Aleixo na Rede Virtual de Bibliotecas (RVBI).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Câmara dos Deputados', 'Regimento Interno da Câmara dos Deputados (RICD)', 'Regimento Comum do Congresso Nacional (RCCN)'],
  alertasCebraspe: [
    'A Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo) integra a estrutura do Centro de Documentação e Informação (Cedi), subordinado à Diretoria-Geral, prestando consultoria e apoio bibliográfico prioritário aos parlamentares, comissões e consultorias legislativas.',
    'A Rede Virtual de Bibliotecas do Congresso Nacional (RVBI): coordenada pela Biblioteca do Senado Federal, congrega bibliotecas dos três Poderes (incluindo Câmara dos Deputados, STF, STJ, TST, TSE, TCU e ministérios) compartilhando base de dados catalográfica e autoridades.',
    'No RICD, as Comissões Permanentes manifestam-se obrigatoriamente sobre as proposições: a Comissão de Constituição e Justiça e de Cidadania (CCJC) examina a admissibilidade jurídica e constitucional de todas as matérias.',
    'Publicações do Congresso Nacional: o Diário da Câmara dos Deputados (DCD) publica os discursos em plenário, projetos apresentados e pareceres das comissões técnicas.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura e Órgãos da Câmara dos Deputados e a Inserção da Informação',
    colunas: ['Órgão / Instância', 'Natureza Institucional', 'Função Constitucional / Regimental', 'Relação com a Biblioteca e Documentação'],
    linhas: [
      ['Mesa Diretora', 'Órgão de Direção Executiva', 'Preside os trabalhos legislativos e administra os serviços da Casa (Presidente e 6 membros)', 'Aprova atos da Mesa sobre estruturação, contratações e preservação patrimonial'],
      ['Plenário', 'Órgão Deliberativo Supremo', 'Reunião de todos os 513 deputados para votação final das proposições', 'Recebe subsídios de pesquisa, notas técnicas e informações das bases da biblioteca'],
      ['Comissões Permanentes', 'Órgãos Temáticos de Instrução', 'Analisam o mérito e a constitucionalidade das proposições (ex.: CCJC, CFT)', 'Consomem acervo doutrinário e jurisprudencial especializado para instruir pareceres'],
      ['Centro de Documentação (Cedi)', 'Órgão Técnico Administrativo', 'Preserva a memória legislativa, gere a biblioteca, o arquivo e as edições da Câmara', 'Abriga a Biblioteca Pedro Aleixo, o Arquivo Histórico e o Museu da Câmara'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Câmara dos Deputados no Ordenamento Constitucional

Conforme a Constituição da República Federativa do Brasil de 1988 (Arts. 44 a 58), o Poder Legislativo da União é exercido pelo **Congresso Nacional**, que se compõe da **Câmara dos Deputados** (representantes do povo, eleitos pelo sistema proporcional em cada Estado e no Distrito Federal) e do **Senado Federal** (representantes dos Estados e do DF, eleitos pelo sistema majoritário):

* **O Bicameralismo Federal:** O processo legislativo brasileiro é bicameral e revisor. A Câmara atua na imensa maioria das vezes como **Casa Iniciadora** dos projetos de lei e das reformas constitucionais apresentadas por deputados, pelo Presidente da República, pelos Tribunais Superiores ou por iniciativa popular.

---

### 2. O Centro de Documentação e Informação (Cedi) e a Biblioteca Pedro Aleixo

A **Biblioteca Pedro Aleixo** da Câmara dos Deputados é uma das maiores e mais ricas bibliotecas parlamentares do mundo:
* **Estrutura Organizacional:** Integra o **Centro de Documentação e Informação (Cedi)**, atuando de forma integrada com a Coordenação de Arquivo, a Coordenação de Preservação e as Edições Câmara.
* **Missão Primordial:** Subsidiar com agilidade, precisão e confidencialidade o trabalho dos parlamentares, das Comissões Técnicas, da Consultoria Legislativa (Conle), da Consultoria de Orçamento (Conof) e oferecer à sociedade transparência e acesso ao patrimônio histórico legislativo brasileiro.
* **A Rede Virtual de Bibliotecas do Congresso Nacional (RVBI):**
  * Criada originariamente na década de 1970 a partir do pioneiro sistema SABI e da cooperação entre Câmara e Senado.
  * É uma rede cooperativa de bibliotecas públicas federais coordenada pela Biblioteca do Senado, adotando a catalogação cooperativa, o formato MARC 21, as regras do AACR2/RDA e a Classificação Decimal de Direito (CDDir).

---

### 3. As Comissões da Câmara e o Ciclo da Informação Regimental

O Regimento Interno da Câmara dos Deputados (RICD) organiza o trabalho parlamentar em Comissões:
1. **Comissões Permanentes:** Colegiados temáticos especializados que instruem as propostas antes da ida a Plenário.
   * *A Comissão de Constituição e Justiça e de Cidadania (CCJC):* É a mais importante, incumbida de emitir parecer sobre a constitucionalidade, legalidade, juridicidade e técnica legislativa de todas as proposições.
   * *A Comissão de Finanças e Tributação (CFT):* Examina a compatibilidade orçamentária e financeira de qualquer projeto com impacto no erário.
2. **Poder Conclusivo das Comissões (Art. 24, II do RICD):**
   * Em muitos casos, os projetos de lei tramitam em caráter conclusivo nas comissões, sendo aprovados definitivamente sem necessidade de votação em Plenário, salvo se houver recurso de 1/10 dos deputados.
   * Nesses cenários, a fundamentação bibliográfica e documental fornecida pela biblioteca aos relatores é decisiva para o texto final da lei.`,
  checkpoints: [
    {
      id: 'cp-10-1-1',
      pergunta: 'Micro-Checkpoint 1: Inserção Institucional da Biblioteca da Câmara',
      item: 'No organograma da Câmara dos Deputados, a Biblioteca Pedro Aleixo está subordinada à estrutura do Centro de Documentação e Informação (Cedi), tendo como uma de suas atribuições precípuas o provimento de subsídios bibliográficos e informacionais ao processo legislativo.',
      gabarito: 'C',
      justificativa: 'Correto! A Biblioteca Pedro Aleixo integra o Cedi e desempenha papel estratégico no suporte técnico e documental aos parlamentares e consultorias.',
    },
    {
      id: 'cp-10-1-2',
      pergunta: 'Micro-Checkpoint 2: Coordenação da Rede Virtual de Bibliotecas (RVBI)',
      item: 'A Rede Virtual de Bibliotecas do Congresso Nacional (RVBI) é uma rede de catalogação cooperativa gerida e coordenada exclusivamente pela Presidência da República.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe cobrou esse item em diversos concursos (ALECE, STJ). A RVBI é coordenada historicamente pela Biblioteca do Senado Federal, em cooperação com a Câmara dos Deputados e demais órgãos.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-1-1',
        periodo: '1823 / 1960',
        disciplina: 'História da Biblioteca da Câmara',
        focoPrincipal: 'Criação da Livraria da Câmara no Rio de Janeiro e posterior transferência para Brasília',
        figuraChave: 'Câmara dos Deputados',
      },
      {
        id: 'tl-10-1-2',
        periodo: '1972 / 2000',
        disciplina: 'Rede Cooperativa do Congresso',
        focoPrincipal: 'Criação do Sistema SABI e consolidação da Rede Virtual de Bibliotecas (RVBI)',
        figuraChave: 'Senado Federal e Câmara dos Deputados',
      },
    ],
    autores: [
      {
        id: 'aut-10-1-1',
        nome: 'Câmara dos Deputados',
        ano: 1989,
        obraPrincipal: 'Regimento Interno da Câmara dos Deputados (RICD)',
        ideiaChave: 'Norma interna de ordem e processo legislativo; funcionamento do Plenário, Comissões e Cedi.',
        chipPegadinha: 'A CCJC analisa constitucionalidade de todas as proposições.',
      },
      {
        id: 'aut-10-1-2',
        nome: 'Biblioteca Pedro Aleixo (Câmara dos Deputados)',
        ano: 2023,
        obraPrincipal: 'Regulamento e Carta de Serviços da Biblioteca da Câmara dos Deputados',
        ideiaChave: 'Subordinação ao Centro de Documentação e Informação (Cedi) da Diretoria Legislativa; atendimento prioritário a parlamentares e comissões.',
        chipPegadinha: 'A Biblioteca da Câmara integra a Rede Virtual de Bibliotecas (RVBI), cuja biblioteca polo/coordenadora é a do Senado Federal.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-1-1',
        afirmacao: 'O acervo da Rede Virtual de Bibliotecas (RVBI) reúne recursos bibliográficos exclusivamente dos órgãos vinculados ao Poder Legislativo Federal.',
        gabarito: 'E',
        porQue: 'A RVBI congrega bibliotecas dos três Poderes da União (Legislativo, Executivo e Judiciário) e do Governo do Distrito Federal.',
      },
      {
        id: 'peg-10-1-2',
        afirmacao: 'Todas as proposições que tramitam na Câmara dos Deputados devem compulsoriamente ser votadas em sessão do Plenário para serem aprovadas.',
        gabarito: 'E',
        porQue: 'Muitas proposições tramitam em caráter conclusivo nas comissões permanentes (Art. 24, II do RICD), sendo dispensada a votação em Plenário se não houver recurso.',
      },
    ],
  },
};
