import type { ModuloFilho } from '../../../domain/types';

export const submodulo111: ModuloFilho = {
  id: 'sub-11-1',
  numero: '11.1',
  titulo: 'Estado, Governo, Princípios e Organização Administrativa',
  titulo_curto: 'Estado, Princípios e Organização',
  descricaoCurta: 'Conceito e elementos do Estado, separação de poderes e funções atípicas. Princípios constitucionais (LIMPE) e princípios implícitos da Administração Pública. Organização administrativa: centralização, descentralização, concentração, desconcentração, Administração Direta e Indireta.',
  tempoEstimadoMinutos: 40,
  autoresChave: [
    'Maria Sylvia Zanella Di Pietro',
    'Hely Lopes Meirelles',
    'José dos Santos Carvalho Filho',
    'Otto Gierke (Teoria do Órgão)',
  ],
  alertasCebraspe: [
    'DIFERENÇA CRUCIAL: A Desconcentração é uma divisão interna de competências DENTRO da mesma pessoa jurídica, gerando ÓRGÃOS (desprovidos de personalidade jurídica própria e vinculados por hierarquia). A Descentralização pressupõe DUAS pessoas jurídicas distintas (o Estado transfere competências para a Administração Indireta ou particulares, inexistindo subordinação hierárquica, apenas tutela/controle finalístico).',
    'PRINCÍPIO DA IMPESSOALIDADE: Desdobra-se em duas vertentes cobradas à exaustão pelo Cebraspe: 1) Dever de igualdade e vedação a favoritismos ou perseguições; 2) Imputação dos atos à Administração Pública e não ao agente físico que os praticou, vedando promoção pessoal de agentes ou autoridades em publicidade institucional (art. 37, § 1º, CF/88).',
    'SUPREMACIA VS. INDISPONIBILIDADE: A Supremacia do Interesse Público fundamenta as prerrogativas estatais (ex.: presunção de legitimidade, cláusulas exorbitantes em contratos); a Indisponibilidade fundamenta as restrições estatais (ex.: obrigatoriedade de concurso público e de licitação pública). Ambas formam o regime jurídico-administrativo.',
    'TEORIA DO ÓRGÃO (OU DA IMPUTAÇÃO VOLITIVA): Os órgãos públicos não possuem vontade própria nem personalidade jurídica; a atuação do agente público é imputada diretamente à pessoa jurídica a que ele pertence (Câmara dos Deputados → União Federal).',
  ],
  quadroComparativo: {
    titulo: 'Estruturas da Organização Administrativa Brasileira',
    colunas: ['Critério', 'Administração Direta', 'Autarquias', 'Fundações Públicas (Dir. Público)', 'Empresas Públicas (EP)', 'Sociedades de Economia Mista (SEM)'],
    linhas: [
      ['Personalidade Jurídica', 'Pessoa Política (União, Estados, DF, Municípios)', 'Direito Público', 'Direito Público (Autárquica)', 'Direito Privado', 'Direito Privado'],
      ['Criação / Extinção', 'Constituição / Emenda', 'Criada por Lei Específica', 'Criada por Lei Específica', 'Autorizada por Lei (registro civil)', 'Autorizada por Lei (registro civil)'],
      ['Capital Social', 'Orçamento Geral', 'Público Integral', 'Patrimônio Destinado', '100% Capital Público', 'Maioria Capital Votante Público'],
      ['Forma Societária', 'Ente Político', 'Autarquia', 'Fundacional', 'Qualquer modalidade admitida', 'Exclusivamente Sociedade Anônima (S/A)'],
      ['Regime de Pessoal', 'Estatutário (Lei 8.112/90)', 'Estatutário (Lei 8.112/90)', 'Estatutário (Lei 8.112/90)', 'Celetista (CLT via Concurso)', 'Celetista (CLT via Concurso)'],
      ['Foro Processual (Federal)', 'Justiça Federal (art. 109, I, CF)', 'Justiça Federal (art. 109, I, CF)', 'Justiça Federal (art. 109, I, CF)', 'Justiça Federal (art. 109, I, CF)', 'Justiça Estadual (Súmulas 517/556 STF)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Estado, Governo e Administração Pública: Conceito, Elementos e Funções

O Direito Administrativo rege a atividade da **Administração Pública**, que não se confunde com o conceito de Estado nem com o de Governo:

* **Conceito de Estado:** É a pessoa jurídica territorial e soberana dotada de poder político originário. É composto indissociavelmente por três elementos constitutivos:
  1. **Povo:** Elemento humano, vínculo jurídico-político de cidadania com o Estado;
  2. **Território:** Base física e espacial sob a qual incide a jurisdição soberana estatal;
  3. **Governo Soberano:** Cúpula política independente que conduz as diretrizes e os destinos da nação.
* **Governo vs. Administração Pública:**
  * **Governo:** Exerce função política, discricionária e estratégica, formulando as políticas públicas e as metas governamentais (atos de governo/políticos, dotados de ampla discricionariedade).
  * **Administração Pública:** Exerce função administrativa, técnica, operacional e subordinada, executando com fidelidade as leis e políticas delineadas pelos governantes (atividade neutra, vinculada à lei e ao interesse coletivo).
* **Poderes do Estado e Funções Típicas vs. Atípicas:**
  * No modelo tripartite de Montesquieu agasalhado pela CF/88 (art. 2º), os Poderes Legislativo, Executivo e Judiciário são independentes e harmônicos entre si.
  * Cada Poder possui uma **função típica** preponderante e **funções atípicas** (secundárias):
    * O **Poder Legislativo** tem como função típica **legislar** e **fiscalizar** (controle parlamentar com auxílio do TCU). Exerce, contudo, **função atípica de administrar** (quando a Mesa Diretora da Câmara dos Deputados organiza seus concursos públicos, contrata a manutenção da Biblioteca Pedro Aleixo, adquire acervos ou promove seus servidores) e **função atípica de julgar** (quando o Senado processa e julga o Presidente da República por crime de responsabilidade).

---

### 2. Princípios Constitucionais Expressos e Doutrinários da Administração Pública

O regime jurídico-administrativo assenta-se sobre dois pilares mestres chamados de **supraprincípios**:
1. **Supremacia do Interesse Público sobre o Privado:** Assegura ao Estado prerrogativas especiais (poder de polícia, intervenção estatal, unilateralidade dos atos) para tutelar a coletividade.
2. **Indisponibilidade do Interesse Público pela Administração:** A Administração não é proprietária da coisa pública, mas simples gestora. O administrador só pode atuar quando a lei autoriza ou determina, sujeitando-se a sujeições e controles rigorosos (licitação obrigatória, concurso público, prestação de contas).

#### 2.1 Princípios Expressos no Art. 37, *caput*, da CF/88 (LIMPE)

* **Legalidade:** Enquanto o particular pode fazer tudo o que a lei não proíbe (art. 5º, II, CF), a Administração Pública só pode fazer aquilo que a lei expressamente autoriza ou determina (*legalidade estrita*).
* **Impessoalidade:** Veda a concessão de privilégios ou perseguições pessoais no tratamento aos administrados (princípio da isonomia). Além disso, proíbe que a publicidade de atos, programas, obras e serviços governamentais contenha nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores (art. 37, § 1º, CF/88).
* **Moralidade:** Exige probidade, honestidade, lealdade e boa-fé objetiva na conduta administrativa. A violação à moralidade prescinde de prova de violação direta à lei expressa, ensejando anulação do ato e Ação Popular (art. 5º, LXXIII, CF).
* **Publicidade:** Os atos administrativos devem ser transparentes e acessíveis ao escrutínio dos cidadãos e dos órgãos de controle, ressalvadas exclusivamente as hipóteses de sigilo constitucional imprescindíveis à segurança do Estado e da sociedade ou à intimidade e privacidade dos indivíduos (art. 5º, X e XXXIII, CF).
* **Eficiência (incluído pela EC nº 19/1998):** Impõe a busca constante pelo melhor rendimento funcional, otimização de recursos públicos, redução de desperdícios, celeridade na tramitação processual e qualidade nos serviços prestados.

#### 2.2 Princípios Doutrinários Implícitos Fundamentais

* **Autotutela (Súmulas 346 e 473 do STF):** A Administração Pública tem o poder-dever de rever seus próprios atos, **anulando** os ilegais (com efeito retroativo, *ex tunc*) e **revogando** os inoportunos ou inconvenientes (com efeito prospectivo, *ex nunc*), sem necessidade de provocação do Poder Judiciário.
* **Continuidade dos Serviços Públicos:** Os serviços de utilidade pública não podem ser interrompidos injustificadamente, pois atendem a necessidades primárias e coletivas contínuas.
* **Razoabilidade e Proporcionalidade:** Veda excessos na imposição de restrições ou penalidades, exigindo adequação entre os meios empregados e os fins públicos pretendidos pela lei.
* **Segurança Jurídica e Proteção da Confiança Legítima:** Veda a aplicação retroativa de nova interpretação jurídica da norma pela Administração, tutelando as situações jurídicas consolidadas de boa-fé pelo cidadão perante o Estado (art. 2º, parágrafo único, XIII, Lei 9.784/1999).
* **Motivação:** A Administração deve indicar expressamente os fundamentos fáticos e jurídicos que determinaram a prática de seus atos administrativos decisórios.

---

### 3. Organização Administrativa: Centralização, Descentralização, Concentração e Desconcentração

Para executar suas atribuições, o Estado organiza sua estrutura por meio de técnicas de distribuição de competências que o Cebraspe explora sistematicamente:

#### 3.1 Centralização vs. Descentralização

* **Centralização:** O Estado executa suas atividades administrativas diretamente, por intermédio de seus próprios órgãos e agentes integrantes das pessoas jurídicas federativas (União, Estados, DF e Municípios). Exemplo: a Câmara dos Deputados gerindo sua biblioteca interna.
* **Descentralização:** A execução das atividades é transferida para **outra pessoa jurídica**, distinta do ente político central. Não há hierarquia ou subordinação, mas controle finalístico/tutela/supervisão ministerial. A descentralização pode ser:
  * **Por serviços, funcional, técnica ou outorga:** Realizada por meio de lei para a criação ou autorização de entidades da **Administração Indireta** (Autarquias, Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista). Transfere-se a **titularidade e a execução** do serviço (salvo nas empresas estatais delegatárias, onde se transfere a execução).
  * **Por colaboração ou delegação:** Realizada por **contrato** (concessão ou permissão de serviços públicos) ou **ato unilateral precário** (autorização) para particulares. Transfere-se apenas a **execução** do serviço público, retendo o Estado a titularidade.

#### 3.2 Concentração vs. Desconcentração

* **Concentração:** Todas as atribuições de um órgão ou entidade estão concentradas em um único centro de comando, sem divisão interna.
* **Desconcentração:** Distribuição interna de competências **dentro da mesma pessoa jurídica**. Cria **órgãos públicos**, que não possuem personalidade jurídica própria nem patrimônio próprio. Há vínculo de **hierarquia e subordinação** entre o órgão superior e o órgão subordinado.
  * Mnemônico de Prova: **DESCON-O-CENTRAÇÃO** cria **Ó**rgãos; **DESCENT-E-RALIZAÇÃO** cria **E**ntidades.

---

### 4. Administração Direta e Indireta

* **Administração Direta:** Conjunto de órgãos que integram a estrutura das pessoas políticas constitucionais (União, Estados, Distrito Federal e Municípios). Os Poderes Executivo, Legislativo e Judiciário da União integram a Administração Direta Federal.
* **Administração Indireta:** Conjunto de pessoas jurídicas instituídas pelo Estado para o desempenho descentralizado de atividades de interesse público:
  1. **Autarquias:** Pessoas jurídicas de direito público criadas diretamente por **lei específica** para desempenhar atividades típicas de Estado. Possuem patrimônio e receita próprios, imunidade tributária recíproca (art. 150, § 2º, CF), regime de pessoal estatutário (Lei 8.112/90 na esfera federal) e seus débitos judiciais são pagos por precatórios. Exemplos: INSS, IBAMA, ANATEL, Banco Central.
  2. **Fundações Públicas:** Patrimônio público personalizado afetado a uma finalidade social não lucrativa (saúde, assistência, educação, pesquisa e preservação cultural). Podem ser de direito público (autarquias fundacionais, criadas por lei específica) ou de direito privado (instituição autorizada por lei específica, com inscrição de seus atos constitutivos no cartório de registro de pessoas jurídicas).
  3. **Empresas Públicas (EP):** Pessoas jurídicas de direito privado, cuja criação é **autorizada por lei**, com **capital 100% público** de qualquer ente da Federação. Podem adotar **qualquer forma societária** admitida em direito (S/A, LTDA, etc.). Seu foro processual na Justiça Federal é obrigatório quando federais (art. 109, I, CF). Exemplos: Caixa Econômica Federal (CEF), Correios (ECT), SERPRO.
  4. **Sociedades de Economia Mista (SEM):** Pessoas jurídicas de direito privado, cuja criação é **autorizada por lei**, com **capital misto** (a maioria das ações com direito a voto pertence ao Estado, mas há participação de particulares). Devem adotar **obrigatoriamente a forma de Sociedade Anônima (S/A)**. Seu foro processual perante a Justiça da União Federal é da **Justiça Estadual** (salvo intervenção direta da União na lide), conforme Súmulas 517 e 556 do STF. Exemplos: Petrobras, Banco do Brasil.

---

### 5. Aplicação Prática na Câmara dos Deputados e na Biblioteca Parlamentar

Na Câmara dos Deputados, a **Biblioteca Pedro Aleixo** e o **Centro de Documentação e Informação (Cedi)** são **órgãos públicos** resultantes da **desconcentração administrativa** da União Federal no âmbito do Poder Legislativo:
* Não detêm personalidade jurídica própria: a titularidade das relações jurídicas, responsabilidades civis e orçamentos é da **União Federal**.
* Todos os contratos de aquisição de coleções, assinaturas de periódicos e acordos com a RVBI são celebrados em nome da União/Câmara dos Deputados, subordinando-se estritamente aos princípios constitucionais do art. 37 da CF/88 (especialmente legalidade, impessoalidade e publicidade).`,
  checkpoints: [
    {
      id: 'cp-11-1-1',
      pergunta: 'Micro-Checkpoint 1: Desconcentração vs. Descentralização Administrativa',
      item: 'A criação de um novo departamento especializado em curadoria digital de documentos parlamentares dentro da estrutura do Centro de Documentação e Informação (Cedi) da Câmara dos Deputados consubstancia hipótese de descentralização por serviços, uma vez que confere nova titularidade ao órgão criado.',
      gabarito: 'E',
      justificativa: 'Errado! Trata-se de hipótese típica de DESCONCENTRAÇÃO administrativa (criação interna de órgãos dentro da mesma pessoa jurídica, a União Federal, sem outorga de personalidade jurídica própria nem de nova titularidade). A descentralização exigiria a transferência da competência a uma pessoa jurídica autônoma.',
    },
    {
      id: 'cp-11-1-2',
      pergunta: 'Micro-Checkpoint 2: Princípio da Impessoalidade e Publicidade Governamental',
      item: 'Em consonância com o princípio da impessoalidade e com o art. 37, § 1º, da CF/88, é vedado que informativos oficiais de circulação ampla sobre acervos históricos da Biblioteca da Câmara contenham nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridade ou de parlamentar.',
      gabarito: 'C',
      justificativa: 'Correto! A vertente subjetiva da impessoalidade veda a apropriação ou promoção pessoal de agentes ou mandatários políticos em peças de publicidade e informativos institucionais custeados pelo poder público.',
    },
    {
      id: 'cp-11-1-3',
      pergunta: 'Micro-Checkpoint 3: Regime Jurídico das Sociedades de Economia Mista',
      item: 'As sociedades de economia mista, por integrarem a Administração Pública Indireta, podem adotar qualquer formato societário admitido em direito comercial, a critério da lei instituidora, devendo a integralidade de seu capital ser subscrita pelo poder público.',
      gabarito: 'E',
      justificativa: 'Errado! As sociedades de economia mista adotam OBRIGATORIAMENTE a forma de Sociedade Anônima (S/A) e possuem capital misto (a maioria do capital votante é pública, mas admite-se capital privado). Quem admite qualquer forma societária e exige 100% de capital público é a Empresa Pública.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-1-1',
        periodo: '1887',
        disciplina: 'Direito Administrativo / Teoria Geral',
        focoPrincipal: 'Formulação da Teoria do Órgão (Imputação Volitiva)',
        figuraChave: 'Otto Gierke',
      },
      {
        id: 'tl-11-1-2',
        periodo: '1967',
        disciplina: 'Organização Administrativa',
        focoPrincipal: 'Decreto-Lei nº 200/1967: estruturação da Administração Direta e Indireta no Brasil',
        figuraChave: 'Reforma Administrativa Federal',
      },
      {
        id: 'tl-11-1-3',
        periodo: '1988',
        disciplina: 'Direito Constitucional Administrativo',
        focoPrincipal: 'Promulgação da CF/88: fixação do art. 37 (LIMPE) e autotutela vinculante',
        figuraChave: 'Constituição Cidadã',
      },
      {
        id: 'tl-11-1-4',
        periodo: '1998',
        disciplina: 'Reforma Gerencial',
        focoPrincipal: 'EC nº 19/1998: inclusão do Princípio da Eficiência no caput do art. 37 da CF',
        figuraChave: 'Bresser-Pereira / MARE',
      },
    ],
    autores: [
      {
        id: 'aut-11-1-1',
        nome: 'Maria Sylvia Zanella Di Pietro',
        ano: '2023',
        obraPrincipal: 'Direito Administrativo (36ª edição)',
        ideiaChave: 'Regime jurídico-administrativo estruturado no binômio prerrogativas (supremacia) e restrições (indisponibilidade).',
        chipPegadinha: 'Afirmar que a Administração Pública pode renunciar ao interesse público com base na autonomia da vontade.',
        detalhesOpcionais: 'Referência predileta da banca Cebraspe para conceitos de regime público e autotutela.',
      },
      {
        id: 'aut-11-1-2',
        nome: 'Hely Lopes Meirelles',
        ano: '2020',
        obraPrincipal: 'Direito Administrativo Brasileiro (44ª edição)',
        ideiaChave: 'Conceito clássico de poder de polícia, ato administrativo e distinção estrita entre atos de governo e atos administrativos de gestão.',
        chipPegadinha: 'Confundir ato político discricionário com ato de mera gestão administrativa vinculada.',
      },
      {
        id: 'aut-11-1-3',
        nome: 'Otto Gierke',
        ano: '1887',
        obraPrincipal: 'Teoria da Imputação Volitiva (Teoria do Órgão)',
        ideiaChave: 'A manifestação do agente é a própria manifestação da pessoa jurídica; não há representação nem mandato, mas imputação direta.',
        chipPegadinha: 'Dizer que o servidor público é mandatário ou representante contratual do Estado.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-1-1',
        afirmacao: 'A desconcentração administrativa implica a criação de uma nova pessoa jurídica dotada de autonomia funcional e patrimônio próprio.',
        gabarito: 'E',
        porQue: 'A desconcentração cria ÓRGÃOS despersonalizados dentro da mesma pessoa jurídica. Quem cria nova pessoa jurídica é a descentralização.',
      },
      {
        id: 'peg-11-1-2',
        afirmacao: 'O princípio da autotutela administrativa autoriza a Administração a revogar atos ilegais com efeitos retroativos à data de sua edição.',
        gabarito: 'E',
        porQue: 'Atos ilegais são ANULADOS (efeito ex tunc / retroativo). Atos inoportunos ou inconvenientes são REVOGADOS (efeito ex nunc / prospectivo). Súmula 473 do STF.',
      },
      {
        id: 'peg-11-1-3',
        afirmacao: 'As empresas públicas federais sujeitam-se à jurisdição da Justiça Federal de primeira instância, ao passo que as ações envolvendo sociedades de economia mista federais tramitam, como regra, perante a Justiça Estadual.',
        gabarito: 'C',
        porQue: 'Correto! A CF/88 (art. 109, I) prevê expressamente a competência da Justiça Federal para Empresas Públicas federais, silenciando quanto às Sociedades de Economia Mista (Súmulas 517 e 556 do STF).',
      },
    ],
  },
};
