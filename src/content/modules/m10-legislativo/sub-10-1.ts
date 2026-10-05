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
    'A Rede Virtual de Bibliotecas do Congresso Nacional (RVBI): coordenada pela Secretaria de Biblioteca e Arquivo do Senado Federal, congrega bibliotecas dos três Poderes compartilhando base de dados catalográfica e autoridades em formato MARC 21.',
    'Vedação aos membros da Mesa Diretora (Art. 24, § 1º do RICD - Câmara 2026 Técnico): os membros titulares e os suplentes da Mesa Diretora NÃO podem integrar nenhuma Comissão Permanente, Comissão Especial ou Comissão Parlamentar de Inquérito (CPI).',
    'Blocos Parlamentares (Câmara 2026): partidos em bloco perdem atribuições de suas lideranças individuais em favor da liderança unificada do bloco; se a desfiliação de parlamentar reduzir o bloco abaixo do número mínimo, o bloco é extinto de imediato, não perdurando até o fim da legislatura.',
    'Fases da Sessão Ordinária (Arts. 65 a 94 do RICD - Câmara 2026 Técnico): a ordem canônica compreende 1) Pequeno Expediente (60 min); 2) Grande Expediente (50 min); 3) Ordem do Dia (fase deliberativa/votação); e 4) Comunicações Parlamentares.',
    'Regimento Comum do Congresso Nacional (RCCN): a Mesa do Congresso é presidida pelo Presidente do Senado Federal, sendo substituído sucessivamente pelo 1º Vice-Presidente da Câmara dos Deputados.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura e Órgãos da Câmara dos Deputados e a Inserção da Informação (RICD)',
    colunas: ['Órgão / Instância', 'Natureza Institucional', 'Função Constitucional / Regimental', 'Relação com a Biblioteca e Documentação'],
    linhas: [
      ['Mesa Diretora (arts. 1º a 24)', 'Órgão de Direção Executiva', 'Preside os trabalhos legislativos e administra os serviços da Casa (Presidente e 6 secretários/vices)', 'Aprova atos da Mesa sobre estruturação, regulamentos internos e segurança da informação'],
      ['Comissões Permanentes (art. 24)', 'Órgãos Temáticos de Instrução', 'Analisam mérito e juridicidade (ex.: CCJC); membros da Mesa são vedados de participar', 'Consomem acervo doutrinário, notas técnicas e bases legislativas para instruir pareceres'],
      ['Sessão Ordinária (arts. 65 a 94)', 'Instância Deliberativa', 'Sequência: Pequeno Expediente, Grande Expediente, Ordem do Dia e Comunicações Parlamentares', 'Registros taquigráficos integrais e discursos publicados no Diário da Câmara (DCD)'],
      ['Deputados (arts. 226 a 251)', 'Parlamentares Federais', 'Prerrogativas, imunidades, deveres de decoro, licenças e hipóteses de perda de mandato', 'Usuários prioritários da consultoria legislativa, pesquisas e bases documentais'],
      ['Administração Interna (arts. 262 a 273)', 'Estrutura de Apoio e Polícia', 'Polícia da Câmara subordinada ao Presidente; gestão patrimonial e funcional', 'Abriga o Cedi (Biblioteca Pedro Aleixo, Arquivo Histórico e Museu da Câmara)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Câmara dos Deputados e o Regimento Interno (RICD)

O Regimento Interno da Câmara dos Deputados (Resolução nº 17/1989 e alterações) disciplina a organização interna, o processo legislativo e os órgãos colegiados da Casa do Povo:

#### A. Órgãos da Câmara e a Mesa Diretora (Arts. 1º a 24 do RICD)
* **Composição da Mesa:** Composta pelo Presidente, 1º e 2º Vice-Presidentes e por 4 Secretários (com 4 suplentes de secretários).
* **Vedação Absoluta aos Membros da Mesa (*⚠️ Pegadinha Cebraspe - Câmara 2026*):**
  * Conforme o **art. 24, § 1º do RICD**, os membros da Mesa Diretora (titulares e suplentes) **não podem fazer parte de nenhuma Comissão Permanente, Comissão Especial ou Comissão Parlamentar de Inquérito (CPI)**.
* **Lideranças e Blocos Parlamentares (*⚠️ Cobrado na Câmara 2026*):**
  * Os partidos podem se agrupar em **Blocos Parlamentares**.
  * A constituição do bloco importa a **perda das atribuições e prerrogativas das lideranças individuais** de cada partido que o compõe, as quais são exercidas exclusivamente pela liderança do bloco.
  * A desfiliação partidária ou saída de deputados que reduza o bloco a número inferior ao exigido importa a **extinção imediata do bloco**, sendo vedada sua manutenção artificial até o fim da legislatura.

---

### 2. Sessões da Câmara dos Deputados (Arts. 65 a 94 do RICD)

As reuniões do Plenário realizam-se em sessões Ordinárias, Extraordinárias, Solenes ou Preparatórias:

* **Estrutura Cronológica da Sessão Ordinária (*Alerta Cebraspe - Câmara 2026 Técnico*):**
  1. **Pequeno Expediente:** Duração improrrogável de 60 minutos, destinado a oradores previamente inscritos para discursos breves de até 5 minutos.
  2. **Grande Expediente:** Duração improrrogável de 50 minutos, com discursos de até 25 minutos para parlamentares sorteados.
  3. **Ordem do Dia:** Fase deliberativa central e obrigatória da sessão, destinada à discussão e à votação das proposições legislativas constantes da pauta oficial.
  4. **Comunicações Parlamentares:** Período final da sessão para manifestações de líderes partidários e deputados com tempo residual.

---

### 3. Estatuto dos Deputados Federais (Arts. 226 a 251 do RICD)

* **Direitos e Prerrogativas:** Inviolabilidade civil e penal por opiniões, palavras e votos (imunidade material); foro por prerrogativa de função e proteção contra prisão cautelar arbitrária (imunidade formal).
* **Licenças e Vacância:** O deputado pode licenciar-se por motivo de saúde ou para tratar de interesse particular (sem remuneração, por prazo não superior a 120 dias por sessão legislativa). Se o afastamento for superior a 120 dias, convoca-se compulsoriamente o suplente diplomado.
* **Perda do Mandato:** Processada nos termos do art. 55 da CF/88, seja por declaração da Mesa (nos casos de faltas a 1/3 das sessões ordinárias ou perda de direitos políticos) ou por deliberação do Plenário em escrutínio aberto por maioria absoluta (por quebra de decoro ou condenação criminal transitada em julgado).

---

### 4. Administração, Economia Interna e o CEDI (Arts. 262 a 273 do RICD)

* **Polícia da Câmara:** O policiamento do edifício e dependências externas da Câmara dos Deputados compete exclusivamente à sua Polícia Legislativa, subordinada à Mesa Diretora e sob a direção do Presidente da Casa.
* **O Centro de Documentação e Informação (Cedi) e a Biblioteca Pedro Aleixo:**
  * O Cedi integra a estrutura administrativa da Câmara, unificando a gestão documental, arquivística, museológica e bibliotecária.
  * **A Biblioteca Pedro Aleixo:** Uma das maiores bibliotecas parlamentares do mundo. Fornece apoio prioritário às Comissões Técnicas, aos gabinetes de deputados e às Consultorias Legislativa (Conle) e de Orçamento (Conof).
  * **Cooperação RVBI:** A biblioteca integra ativamente a Rede Virtual de Bibliotecas do Congresso Nacional, cuja instituição coordenadora e polo administrativo é a **Secretaria de Biblioteca e Arquivo do Senado Federal**.

---

### 5. Regimento Comum do Congresso Nacional (RCCN)

* **Competência e Sessões Conjuntas:** Aplicável às sessões em que a Câmara dos Deputados e o Senado Federal deliberam em conjunto (abertura do ano legislativo, posse presidencial, apreciação de vetos presidenciais e deliberação sobre leis orçamentárias — PPA, LDO e LOA).
* **Mesa do Congresso:** Presidida pelo Presidente do Senado Federal; o 1º Vice-Presidente da Câmara assume a primeira vice-presidência da Mesa do Congresso, garantindo a paridade bicameral.
* **Comissão Mista de Orçamento (CMO - Art. 166, § 1º da CF/88):** Composta por deputados e senadores, responsável por emitir parecer prévio e emendas a todos os projetos orçamentários da União antes da votação em Plenário conjunto.`,
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
        periodo: '1989',
        disciplina: 'RICD',
        focoPrincipal: 'Promulgação da Resolução nº 17/1989 (Regimento Interno da Câmara dos Deputados)',
        figuraChave: 'Mesa Diretora da Câmara dos Deputados',
      },
      {
        id: 'tl-10-1-2',
        periodo: '1970 / 2000',
        disciplina: 'Rede Cooperativa do Congresso',
        focoPrincipal: 'Criação do Sistema SABI e consolidação da Rede Virtual de Bibliotecas (RVBI polo Senado)',
        figuraChave: 'Senado Federal e Câmara dos Deputados',
      },
      {
        id: 'tl-10-1-3',
        periodo: '2026',
        disciplina: 'Jurisprudência Regimental',
        focoPrincipal: 'Decisões da Presidência da Câmara sobre extinção de blocos partidários e prerrogativas de liderança',
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
    ],
  },
};
