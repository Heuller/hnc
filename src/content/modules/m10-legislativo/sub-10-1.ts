import type { ModuloFilho } from '../../../domain/types';

export const submodulo101: ModuloFilho = {
  id: 'sub-10-1',
  numero: '10.1',
  titulo: 'Regimento Interno da Câmara dos Deputados (RICD) e a Biblioteca Parlamentar',
  descricaoCurta: 'Estrutura institucional da Câmara dos Deputados, competências da Mesa Diretora e do Plenário, comissões permanentes e temporárias, o Centro de Documentação e Informação (Cedi) e a Biblioteca Pedro Aleixo na Rede Virtual de Bibliotecas (RVBI).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Câmara dos Deputados', 'Regimento Interno da Câmara dos Deputados (RICD)', 'Regimento Comum do Congresso Nacional (RCCN)', 'Centro de Documentação e Informação (Cedi)'],
  alertasCebraspe: [
    'A Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo) integra a estrutura do Centro de Documentação e Informação (Cedi), subordinado à Diretoria-Geral, prestando consultoria e apoio bibliográfico prioritário aos parlamentares, comissões e consultorias legislativas.',
    'A Rede Virtual de Bibliotecas (RVBI): coordenada pela Secretaria de Biblioteca e Arquivo do Senado Federal, congrega bibliotecas dos três Poderes da União, compartilhando base de dados catalográfica e autoridades em formato MARC 21 e vocabulário controlado (VCB/Sicon).',
    'Vedação aos membros da Mesa Diretora (Art. 24, § 1º do RICD - questão literal da Câmara 2026 Técnico): os membros titulares e os suplentes da Mesa Diretora NÃO podem integrar nenhuma Comissão Permanente, Comissão Especial ou Comissão Parlamentar de Inquérito (CPI).',
    'Blocos Parlamentares (cobrado na Câmara 2026): partidos reunidos em bloco perdem as prerrogativas de suas lideranças individuais em favor da liderança unificada do bloco; se a desfiliação de deputados reduzir o bloco abaixo do número mínimo exigido, o bloco é EXTINTO DE IMEDIATO, sendo vedada sua manutenção artificial até o fim da legislatura.',
    'Fases cronológicas da Sessão Ordinária (Arts. 65 a 94 do RICD - Câmara 2026 Técnico): a ordem canônica compreende: 1) Pequeno Expediente (60 min improrrogáveis); 2) Grande Expediente (50 min improrrogáveis); 3) Ordem do Dia (fase deliberativa/votação); e 4) Comunicações Parlamentares.',
    'Regimento Comum do Congresso Nacional (RCCN): a Mesa do Congresso é presidida pelo Presidente do Senado Federal, sendo substituído sucessivamente pelo 1º Vice-Presidente da Câmara dos Deputados, assegurando a harmonia bicameral.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura Institucional da Câmara dos Deputados e a Inserção da Informação (RICD)',
    colunas: ['Órgão / Instância', 'Natureza Institucional', 'Função Constitucional / Regimental', 'Relação com a Biblioteca e Informação Legislativa'],
    linhas: [
      ['Mesa Diretora (arts. 1º a 24)', 'Órgão de Direção Executiva', 'Preside os trabalhos legislativos e administra os serviços da Casa (Presidente e 6 secretários/vices)', 'Aprova atos da Mesa sobre estruturação do Cedi, regulamentos e segurança da informação'],
      ['Comissões Permanentes (art. 24)', 'Órgãos Temáticos de Instrução', 'Analisam mérito e juridicidade (ex.: CCJC, CFT); membros da Mesa são vedados de participar', 'Consomem acervo doutrinário, notas técnicas e bases legislativas para instruir pareceres'],
      ['Sessão Ordinária (arts. 65 a 94)', 'Instância Deliberativa', 'Sequência: Pequeno Expediente (60m), Grande Expediente (50m), Ordem do Dia e Comunicações', 'Registros taquigráficos integrais e discursos publicados no Diário da Câmara (DCD)'],
      ['Deputados Federais (arts. 226-251)', 'Parlamentares Eleitos', 'Prerrogativas, imunidades, deveres de decoro, licenças e hipóteses de perda de mandato', 'Usuários prioritários de consultorias, levantamentos temáticos e coleções raras'],
      ['Administração / Cedi (arts. 262-273)', 'Estrutura de Apoio e Memória', 'Polícia da Câmara subordinada ao Presidente; gestão documental, histórica e bibliotecária', 'Abriga a Biblioteca Pedro Aleixo, a Coordenação de Arquivo e o Museu da Câmara'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Bicameralismo Federal e a Câmara dos Deputados na CF/88

O Poder Legislativo da União é exercido pelo **Congresso Nacional**, que se estrutura sob o modelo de **Bicameralismo Federativo (Bicameralismo Mitigado ou Desigual)**, composto por duas Casas legislativas autônomas (Arts. 44 a 58 da CF/88):

\`\`\`tree
TITLE: Bicameralismo Federativo Brasileiro (CF/88, Arts. 44 a 58)
- Congresso Nacional (CF/88, Art. 44) | Poder Legislativo da União sob modelo bicameral mitigado
  - Câmara dos Deputados (Art. 45) | Representantes do POVO eleitos pelo sistema proporcional
    - Bancada Federativa | 513 Deputados Federais (mínimo de 8 e máximo de 70 por Estado/DF)
    - Mandato Eletivo | 4 anos de duração (coincide com a Legislatura)
  - Senado Federal (Art. 46) | Representantes dos ESTADOS e do DF eleitos pelo sistema majoritário
    - Bancada Paritária | 81 Senadores (3 senadores por unidade federativa, de forma fixa e igualitária)
    - Mandato Eletivo | 8 anos de duração (equivale a duas Legislaturas, com renovação alternada de 1/3 e 2/3)
\`\`\`

* **Legislatura (Art. 44, Parágrafo Único):** Período de 4 anos que coincide com a duração do mandato dos deputados federais.
* **Sessão Legislativa Ordinária (Art. 57):** Corresponde ao ano legislativo de trabalho parlamentar, estendendo-se de **2 de fevereiro a 17 de julho** e de **1º de agosto a 22 de dezembro**. A sessão legislativa não pode ser interrompida sem a aprovação do projeto de Lei de Diretrizes Orçamentárias (LDO).
* **Períodos Legislativos:** São os dois semestres de funcionamento da Casa legislativa dentro de uma mesma Sessão Legislativa Ordinária.
* **Sessão Legislativa Extraordinária:** Convocada durante o recesso parlamentar pelo Presidente do Senado (em caso de decretação de estado de defesa, estado de sítio ou intervenção federal) ou pelo Presidente da República, pelos Presidentes das Casas ou pela maioria dos membros de ambas as Casas para apreciação de matérias urgentes. É vedado o pagamento de parcela indenizatória por convocação extraordinária (Emenda Constitucional nº 50/2006).

---

### 2. A Mesa Diretora e as Lideranças no Regimento Interno (RICD)

O Regimento Interno da Câmara dos Deputados (Resolução nº 17/1989 e atualizações) disciplina a organização e o processo deliberativo da Casa:

#### A. A Mesa Diretora (Arts. 1º a 24 do RICD)
* **Composição:** O Presidente, o 1º e 2º Vice-Presidentes e 4 Secretários, além de 4 suplentes de secretários. O mandato é de **2 anos**, sendo vedada a recondução para o mesmo cargo na eleição imediatamente subsequente dentro da mesma legislatura.
* **Competências da Mesa:** Órgão diretor colegiado dos trabalhos legislativos e dos serviços administrativos da Casa. Promulga emendas ao Regimento Interno, aprova o orçamento da Câmara e edita Atos da Mesa com força regulamentar interna.
* **O Presidente da Câmara dos Deputados:**
  * Segunda autoridade na linha de sucessão da Presidência da República (assume após o Vice-Presidente da República e antes do Presidente do Senado Federal e do Presidente do STF, conforme o Art. 80 da CF/88);
  * Define, ouvido o Colégio de Líderes, a pauta da Ordem do Dia do Plenário.
* **Vedação Absoluta aos Membros da Mesa (*⚠️ Pegadinha Cebraspe - Câmara 2026 Técnico*):**
  > Conforme o **art. 24, § 1º do RICD**, os membros da Mesa Diretora (tanto os titulares quanto os suplentes) **não podem fazer parte de nenhuma Comissão Permanente, Comissão Especial ou Comissão Parlamentar de Inquérito (CPI)**.

#### B. Lideranças e Blocos Parlamentares (Arts. 12 e 13 do RICD)
* **Liderança Partidária:** Os deputados são agrupados por representações partidárias, cabendo ao Líder falar pela bancada e indicar os membros de seu partido nas comissões.
* **Blocos Parlamentares (*⚠️ Cobrado na prova da Câmara 2026*):**
  * Duas ou mais legendas partidárias podem associar-se para constituir um Bloco Parlamentar sob liderança única;
  * A constituição do bloco acarreta a **perda das prerrogativas das lideranças individuais** de cada partido integrante, passando a bancada a ser representada coletivamente pelo Líder do Bloco;
  * Se a desfiliação ou afastamento de parlamentares reduzir a bancada do bloco a número inferior ao quórum mínimo regimental, **o bloco parlamentar é extinto de imediato**, sendo expressamente proibida a sua subsistência artificial até o encerramento da legislatura.

---

### 3. As Comissões da Câmara e o Poder Deliberativo Conclusivo

As comissões são órgãos colegiados formados por parlamentares para instruir e deliberar sobre matérias legislativas com base na especialização temática:

\`\`\`tree
TITLE: Tipologia das Comissões da Câmara dos Deputados
- Comissões da Câmara dos Deputados | Órgãos colegiados de especialização temática e instrução legislativa
  - Comissões Permanentes (Art. 24 do RICD) | Subsistem através das diferentes legislaturas com campos temáticos próprios
    - Comissão de Constituição e Justiça e de Cidadania (CCJC) | Controle prévio de constitucionalidade e juridicidade
    - Comissão de Finanças e Tributação (CFT) | Análise de compatibilidade e adequação financeira e orçamentária
    - Comissões de Mérito Temático | Educação, Saúde, Cultura, Meio Ambiente, Segurança Pública, etc.
  - Comissões Temporárias | Criadas para finalidade específica e extintas ao término do prazo ou missão
    - Comissões Especiais | Instituídas para examinar Propostas de Emenda à Constituição (PECs) ou projetos complexos
    - Comissões Externas | Designadas para cumprir missões temporárias e vistorias fora da sede da Câmara
    - Comissões Parlamentares de Inquérito (CPIs) | Apuração de fato determinado por prazo certo, com poderes de investigação judiciais
  - Comissões Mistas (Art. 58 da CF/88) | Integradas paritariamente por Deputados Federais e Senadores da República
    - Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO) | Exame do PPA, LDO e LOA
    - Comissões Mistas de Medidas Provisórias | Emissão de parecer prévio antes da votação nos plenários
\`\`\`

#### A. A Tramitação e a Competência Conclusiva das Comissões (Art. 24, II do RICD)
* Em regra, as comissões técnicas emitem pareceres que instruem a votação final pelo Plenário.
* **Apreciação Conclusiva (*Terminativa*):** Por delegação regimental e constitucional (Art. 58, § 2º, I da CF/88), determinados projetos de lei são **aprovados definitivamente pelas comissões**, sem necessidade de ir ao Plenário da Câmara;
* *Atenção Cebraspe:* O projeto aprovado conclusivamente só irá ao Plenário se houver **recurso assinado por 1/10 (um décimo) dos membros da Câmara** (52 deputados) no prazo regimental.

#### B. As Comissões Parlamentares de Inquérito (CPIs - Art. 58, § 3º da CF/88)
* Criadas mediante requerimento de **pelo menos 1/3 dos membros da Câmara** (171 deputados) ou do Senado, ou de ambas as Casas em conjunto (CPMI).
* Requisitos constitucionais: apuração de **fato determinado** e por **prazo certo**.
* **Poderes de Investigação Próprios das Autoridades Judiciais:**
  * *Podem:* Quebrar sigilo bancário, fiscal e telemático de investigados; convocar testemunhas sob pena de condução coercitiva; requisitar documentos sigilosos de órgãos públicos.
  * *NÃO Podem (Reserva de Jurisdição do Poder Judiciário — Cobrança Frequente Cebraspe):* Uma CPI **não pode determinar interceptação telefônica (escuta de chamadas em tempo real)**, não pode decretar prisão preventiva (salvo em flagrante delito) e não pode determinar busca e apreensão domiciliar noturna, atos restritos a mandados expedidos por juízes togados!

---

### 4. As Sessões da Câmara dos Deputados e sua Sequência Cronológica

As sessões plenárias realizam-se em dias úteis e dividem-se em Preparatórias, Ordinárias, Extraordinárias e Solenes:

#### A Estrutura em 4 Fases da Sessão Ordinária (*⚠️ Cobrado na Prova Câmara 2026 Técnico*):
O Regimento Interno (Arts. 65 a 94) impõe a seguinte sequência rígida:

\`\`\`timeline
P1 | 1. Pequeno Expediente | Duração: 60 minutos | Discursos de até 5 minutos por parlamentar inscrito; quórum de abertura de 1/10 da Casa
---> Transição Imediata
P2 | 2. Grande Expediente | Duração: 50 minutos | Pronunciamentos aprofundados de até 25 minutos para oradores sorteados sobre temas de relevância nacional
---> Deliberação Central
P3 | 3. Ordem do Dia | Fase Deliberativa das Votações | Discussão e votação de matérias pautadas; exige quórum de maioria absoluta (257 deputados registrados)
---> Encerramento
P4 | 4. Comunicações Parlamentares | Fase Final Residual | Manifestação breve de deputados e líderes partidários antes do término oficial da sessão do dia
\`\`\`

1. **Pequeno Expediente:** Duração improrrogável de **60 minutos**, iniciado pontualmente com o quórum de abertura (presença de pelo menos 1/10 dos deputados). Destina-se a breves comunicações de parlamentares previamente inscritos, com tempo de fala de até 5 minutos por orador.
2. **Grande Expediente:** Duração improrrogável de **50 minutos**. Oradores sorteados dispõem de até 25 minutos para pronunciamentos aprofundados sobre temas de relevância política nacional.
3. **Ordem do Dia:** A fase central e **deliberativa** da sessão. Para iniciar a votação de proposições legislativas, exige-se a presença da **maioria absoluta dos membros da Casa** (257 deputados registrados no painel eletrônico).
4. **Comunicações Parlamentares:** Fase final e residual, destinada à manifestação de deputados e líderes partidários antes do encerramento oficial dos trabalhos do dia.

---

### 5. A Gestão Documental no Parlamento: O CEDI e a Biblioteca Pedro Aleixo

A administração da Câmara dos Deputados (Arts. 262 a 273 do RICD) conta com estruturas especializadas de apoio técnico, consultivo e informacional:

#### A. O Centro de Documentação e Informação (Cedi)
Subordinado à Diretoria-Geral da Câmara dos Deputados, o Cedi é o órgão central responsável pela preservação da memória parlamentar e pelo suprimento de informações para o processo legislativo. Congrega:
* **Coordenação de Arquivo:** Guarda e organiza os documentos históricos do Parlamento desde a Assembleia Geral Constituinte do Império de 1823;
* **Coordenação de Museu:** Preserva o acervo museológico, histórico e de artes visuais da Câmara;
* **Coordenação de Publicações:** Responsável pela editoração das publicações oficiais, das Edições Câmara e do Diário da Câmara dos Deputados (DCD);
* **Coordenação de Biblioteca (Biblioteca Pedro Aleixo).**

#### B. A Biblioteca Pedro Aleixo
Criada originalmente em 1826 na cidade do Rio de Janeiro e transferida para Brasília na inauguração da capital em 1960:
* **Missão Institucional:** Prover suporte bibliográfico, doutrinário e referencial prioritário aos Deputados Federais, às Mesas Diretoras, às Comissões Técnicas e aos órgãos de inteligência da Casa — em especial à **Consultoria Legislativa (Conle)** e à **Consultoria de Orçamento e Fiscalização Financeira (Conof)**.
* **Serviços Prestados:** Disseminação Seletiva da Informação (DSI legislativa), levantamentos temáticos de doutrina jurídica, compilação de atos normativos, preservação de coleções de obras raras e atendimento ao público geral.
* **A Rede Virtual de Bibliotecas (RVBI):**
  * A Biblioteca Pedro Aleixo é um dos nós fundamentais da **RVBI**;
  * A coordenação central e polo administrativo da RVBI localiza-se na **Secretaria de Biblioteca e Arquivo do Senado Federal**;
  * A RVBI utiliza base compartilhada de catalogação cooperativa no formato **MARC 21**, adotando o **Vocabulário Controlado Básico (VCB / Tesauro Sicon)** para a representação padronizada de assuntos legislativos, jurídicos e doutrinários.`,
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
      pergunta: 'Micro-Checkpoint 2: Vedação de Membros da Mesa em Comissões (RICD)',
      item: 'De acordo com o Regimento Interno da Câmara dos Deputados, os membros que compõem a Mesa Diretora podem exercer simultaneamente a presidência de comissões permanentes e participar como membros titulares de comissões parlamentares de inquérito.',
      gabarito: 'E',
      justificativa: 'Errado! Item cobrado na prova da Câmara 2026 Técnico. O art. 24, § 1º do RICD proíbe expressamente que membros titulares e suplentes da Mesa façam parte de comissões permanentes, especiais ou de CPI.',
    },
    {
      id: 'cp-10-1-3',
      pergunta: 'Micro-Checkpoint 3: Dissolução de Blocos Parlamentares',
      item: 'Na hipótese de desfiliação de deputados que reduza a composição de um bloco parlamentar a número inferior ao exigido no regimento, o bloco é extinto de imediato.',
      gabarito: 'C',
      justificativa: 'Certo! Questão cobrada na prova da Câmara 2026. A perda de integrantes que deixe o bloco abaixo do limite legal extingue-o sumariamente, não subsistindo até o término da legislatura.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-1-1',
        periodo: '1826 / 1960',
        disciplina: 'História da Biblioteca Parlamentar',
        focoPrincipal: 'Criação da Biblioteca da Câmara no Império e sua transferência solene para o Palácio do Congresso Nacional em Brasília',
        figuraChave: 'Câmara dos Deputados / Pedro Aleixo',
      },
      {
        id: 'tl-10-1-2',
        periodo: '1989',
        disciplina: 'Regimento Interno da Câmara',
        focoPrincipal: 'Promulgação da Resolução nº 17/1989 (Regimento Interno da Câmara dos Deputados - RICD)',
        figuraChave: 'Mesa Diretora da Câmara dos Deputados',
      },
      {
        id: 'tl-10-1-3',
        periodo: '1970 / 2000',
        disciplina: 'Rede Cooperativa do Congresso',
        focoPrincipal: 'Criação do Sistema SABI e consolidação da Rede Virtual de Bibliotecas (RVBI polo Senado)',
        figuraChave: 'Senado Federal e Câmara dos Deputados',
      },
      {
        id: 'tl-10-1-4',
        periodo: '2026',
        disciplina: 'Jurisprudência Regimental Cebraspe',
        focoPrincipal: 'Aplicação das regras de extinção imediata de blocos partidários e vedação a membros da Mesa em CPI',
        figuraChave: 'Plenário da Câmara dos Deputados',
      },
    ],
    autores: [
      {
        id: 'aut-10-1-1',
        nome: 'Câmara dos Deputados',
        ano: 1989,
        obraPrincipal: 'Regimento Interno da Câmara dos Deputados (RICD)',
        ideiaChave: 'Norma interna de ordem e processo legislativo; funcionamento do Plenário, Comissões e Cedi.',
        chipPegadinha: 'Membros da Mesa Diretora não podem participar de comissões permanentes, especiais ou CPI.',
      },
      {
        id: 'aut-10-1-2',
        nome: 'Congresso Nacional',
        ano: 1970,
        obraPrincipal: 'Regimento Comum do Congresso Nacional (RCCN)',
        ideiaChave: 'Disciplina as sessões conjuntas de deputados e senadores, apreciação de vetos e a CMO.',
        chipPegadinha: 'A Presidência da Mesa do Congresso cabe ao Presidente do Senado Federal.',
      },
      {
        id: 'aut-10-1-3',
        nome: 'Centro de Documentação e Informação (Cedi)',
        ano: 2024,
        obraPrincipal: 'Regulamento da Biblioteca Pedro Aleixo e Gestão Documental',
        ideiaChave: 'Prover subsídios de pesquisa bibliográfica e arquivística de alta relevância estratégica ao parlamento.',
        chipPegadinha: 'A RVBI é coordenada pelo Senado Federal, e não administrativamente pela Câmara.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-1-1',
        afirmacao: 'Os integrantes da Mesa Diretora da Câmara dos Deputados podem participar normalmente de Comissões Parlamentares de Inquérito (CPI) na condição de membros titulares.',
        gabarito: 'E',
        porQue: 'Cobrada na Câmara 2026 Técnico! Conforme o art. 24, § 1º do RICD, os membros da Mesa não podem fazer parte de nenhuma comissão permanente, especial ou de CPI.',
      },
      {
        id: 'peg-10-1-2',
        afirmacao: 'Caso a desfiliação de deputados reduza a representação de um bloco parlamentar para aquém do quórum mínimo, o bloco subsistirá até o final da legislatura em respeito à vontade popular.',
        gabarito: 'E',
        porQue: 'Cobrada na Câmara 2026! A redução de deputados abaixo do limite mínimo exigido extingue imediatamente o bloco parlamentar no âmbito da Câmara dos Deputados.',
      },
      {
        id: 'peg-10-1-3',
        afirmacao: 'A comissão parlamentar de inquérito possui autorização constitucional para determinar diretamente a interceptação de comunicações telefônicas (escuta em tempo real) de investigados.',
        gabarito: 'E',
        porQue: 'A interceptação telefônica submete-se à cláusula de estrita reserva de jurisdição do Poder Judiciário. CPI pode apenas quebrar sigilo de registros telefônicos pretéritos.',
      },
      {
        id: 'peg-10-1-4',
        afirmacao: 'Na sessão ordinária da Câmara dos Deputados, a Ordem do Dia precede o Pequeno Expediente para garantir a prioridade na deliberação das matérias de urgência.',
        gabarito: 'E',
        porQue: 'A sequência cronológica rígida do RICD é: 1) Pequeno Expediente (60m); 2) Grande Expediente (50m); 3) Ordem do Dia (votação); e 4) Comunicações Parlamentares.',
      },
    ],
  },
};
