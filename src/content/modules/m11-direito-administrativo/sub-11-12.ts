import type { ModuloFilho } from '../../../domain/types';

export const submodulo1112: ModuloFilho = {
  id: 'sub-11-12',
  numero: '11.12',
  titulo: 'Transparência e Privacidade: Lei de Acesso à Informação e LGPD',
  titulo_curto: 'LAI e LGPD no Setor Público',
  descricaoCurta: 'A Lei de Acesso à Informação (Lei nº 12.527/2011): transparência ativa vs. passiva, prazos de resposta e graus de sigilo (ultrassecreto, secreto e reservado). A LGPD (Lei nº 13.709/2018) na Administração Pública: dados pessoais sensíveis, bases legais, Encarregado (DPO) e harmonização com a LAI.',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'Lei de Acesso à Informação (Lei nº 12.527/2011)',
    'Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)',
    'Autoridade Nacional de Proteção de Dados (ANPD)',
    'Controladoria-Geral da União (CGU)',
  ],
  alertasCebraspe: [
    'VEDAÇÃO DE MOTIVAÇÃO NA LAI (ART. 10, § 3º): É terminantemente PROIBIDO à Administração Pública exigir que o cidadão justifique ou decline os motivos de seu pedido de acesso à informação. O requerimento exige apenas a identificação do cidadão e a especificação da informação pretendida.',
    'PRAZOS DE RESPOSTA DA LAI: Se a informação estiver disponível, o acesso deve ser concedido de imediato. Não sendo possível, o prazo legal é de 20 DIAS, prorrogável motivadamente por mais 10 DIAS (total de 30 dias).',
    'GRAUS E PRAZOS DE SIGILO DA LAI (ART. 24): 1) Ultrassecreto: até 25 anos (admite uma única prorrogação por igual período); 2) Secreto: até 15 anos; 3) Reservado: até 5 anos. Informações pessoais relativas à intimidade, honra e imagem têm restrição de acesso por até 100 ANOS (art. 31)!',
    'LGPD NO SETOR PÚBLICO E DISPENSA DE CONSENTIMENTO: O tratamento de dados pessoais pela Administração Pública independe do consentimento do titular quando destinado ao cumprimento de obrigação legal ou regulatória pelo controlador ou para a execução de políticas públicas previstas em leis ou regulamentos (art. 7º, II e III da LGPD).',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo: Graus de Sigilo na Lei de Acesso à Informação (Lei nº 12.527/2011)',
    colunas: ['Grau de Sigilo', 'Prazo Máximo de Restrição', 'Prorrogação Admitida', 'Autoridades Competentes para Classificar'],
    linhas: [
      ['Ultrassecreto', 'Até 25 anos', 'Sim, uma única vez por até 25 anos (pela CMRI)', 'Presidente da República, Vice-Presidente, Ministros de Estado e Comandantes'],
      ['Secreto', 'Até 15 anos', 'Não admite prorrogação temporal', 'Autoridades acima + titulares de autarquias, fundações e empresas estatais'],
      ['Reservado', 'Até 5 anos', 'Não admite prorrogação temporal', 'Autoridades acima + ocupantes de cargo de direção superior (DAS 101.5 ou equiv.)'],
      ['Informações Pessoais (Intimidade/Honra)', 'Até 100 anos', 'Restrição direta com acesso assegurado ao titular', 'Não exige termo formal de classificação; decorre da própria natureza do dado'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Lei de Acesso à Informação (Lei nº 12.527/2011 - LAI)

A LAI regulamenta o direito constitucional fundamental de acesso à informação pública consagrado no art. 5º, XXXIII, da CF/88. Estabelece o princípio da **publicidade como preceito geral** e do **sigilo como exceção temporária e rigorosamente motivada**:

#### 1.1 Transparência Ativa vs. Transparência Passiva
* **Transparência Ativa (Art. 8º):** Divulgação obrigatória, sistemática e proativa de informações de interesse geral nos portais institucionais oficiais, **independentemente de requerimento** de qualquer cidadão:
  * Exige ferramentas de pesquisa de conteúdo, formatos abertos não proprietários estruturados e legíveis por máquina (CSV, XML, JSON), acessibilidade a pessoas com deficiência e atualização permanente de despesas, licitações, contratos e tabelas de remunerações.
* **Transparência Passiva (Arts. 10 a 14):** Disponibilização de informações específicas **mediante prévio requerimento** formulado pelo cidadão:
  * O pedido pode ser feito por qualquer meio legítimo (físico ou eletrônico - e-SIC / Fala.BR).
  * **Vedações Estritas à Administração:** É expressamente vedado exigir quaisquer justificativas determinantes da solicitação de informação de interesse público (art. 10, § 3º). O cidadão não precisa explicar por que quer a informação!
  * **Prazos da LAI (Art. 11):** Acesso imediato se disponível; caso contrário, prazo de **20 dias**, prorrogável motivadamente por mais **10 dias** mediante comunicação expressa ao requerente com as razões da dilação.

---

### 2. Classificação de Informações Sigilosas na LAI

São passíveis de classificação temporária as informações cujo sigilo seja comprovadamente imprescindível à segurança da sociedade e do Estado (art. 23):

#### 2.1 Os Três Graus de Sigilo (Art. 24)
$$\\text{Prazos de Sigilo} = \\begin{cases} \\text{Ultrassecreto} & \\longrightarrow \\text{Até 25 anos (prorrogável 1x por igual período pela CMRI)} \\\\ \\text{Secreto} & \\longrightarrow \\text{Até 15 anos (sem prorrogação)} \\\\ \\text{Reservado} & \\longrightarrow \\text{Até 5 anos (sem prorrogação)} \\end{cases}$$

* **Comissão Mista de Reavaliação de Informações (CMRI):** Órgão colegiado que decide, em última instância na esfera do Executivo federal, sobre a prorrogação do prazo de sigilo de documentos ultrassecretos e julga recursos contra negativas de acesso a informações.
* **Informações Pessoais (Art. 31):** Informações relativas à intimidade, vida privada, honra e imagem dos cidadãos têm acesso restrito, independentemente de classificação de sigilo, pelo prazo máximo de **100 anos** a contar da data de sua produção, tendo acesso assegurado o próprio titular e agentes públicos para cumprimento de atribuições legais.

---

### 3. A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)

A LGPD dispõe sobre o tratamento de dados pessoais em meios físicos e digitais com o objetivo de proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade da pessoa natural:

#### 3.1 Conceitos Chave da LGPD
* **Dado Pessoal:** Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, endereço, e-mail, matrícula funcional, geolocalização).
* **Dado Pessoal Sensível:** Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico.
* **Tratamento:** Toda operação realizada com dados pessoais (coleta, classificação, acesso, reprodução, armazenamento, eliminação ou transferência).
* **Figuras / Agentes de Tratamento:**
  * **Controlador:** Pessoa jurídica a quem competem as decisões sobre o tratamento (ex.: a Câmara dos Deputados).
  * **Operador:** Pessoa natural ou jurídica que realiza o tratamento em nome do controlador (ex.: empresa contratada que processa dados de cadastro).
  * **Encarregado pelo Tratamento de Dados (DPO):** Agente formalmente designado pelo controlador para atuar como canal de comunicação entre a instituição, os titulares dos dados e a **Autoridade Nacional de Proteção de Dados (ANPD)**.

---

### 4. O Tratamento de Dados pelo Poder Público (Arts. 23 a 30)

O tratamento de dados pessoais pelas pessoas jurídicas de direito público deve atender à sua **finalidade pública**, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público:

#### 4.1 Bases Legais no Setor Público (Art. 7º da LGPD)
No setor público, a regra geral de tratamento **NÃO é o consentimento**, mas:
1. Cumprimento de **obrigação legal ou regulatória** pelo controlador (ex.: publicação de atos de nomeação e despesas funcionais);
2. Execução de **políticas públicas** previstas em leis, regulamentos ou contratos/convênios (ex.: cadastro de pesquisadores e consulentes na Biblioteca Pedro Aleixo);
3. Proteção da vida ou da incolumidade física do titular ou de terceiros.

---

### 5. Harmonização entre LAI e LGPD na Biblioteca e na Câmara dos Deputados

A jurisprudência do STF (Tema 483 da Repercussão Geral) e as diretrizes conjuntas da CGU e da ANPD fixaram a harmonização dos dois diplomas:
* **Não há contradição:** A LAI garante o acesso à informação pública e governamental; a LGPD protege a privacidade dos dados pessoais de pessoas físicas.
* **Remuneração de Servidores Públicos:** É legítima e obrigatória a divulgação nominal da remuneração, subsídios e lotação dos servidores públicos na internet (princípio da publicidade e LAI), não violando a LGPD.
* **Dados Pessoais em Documentos Públicos:** Devem ser anonimizados ou tarjados em caso de fornecimento de processos a terceiros os dados puramente privados e sensíveis (como CPF pessoal, número de RG, dados bancários, endereço residencial e prontuários médicos).`,
  checkpoints: [
    {
      id: 'cp-11-12-1',
      pergunta: 'Micro-Checkpoint 1: Exigência de Justificativa em Pedido de Acesso (LAI)',
      item: 'Servidor responsável pelo atendimento de serviço de informação ao cidadão (SIC) na Câmara dos Deputados pode condicionar o fornecimento de relatório de gastos com acervo à declaração formal, pelo solicitante, dos motivos determinantes e do interesse jurídico no pedido.',
      gabarito: 'E',
      justificativa: 'Errado! O art. 10, § 3º, da Lei nº 12.527/2011 proíbe expressamente quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público. O cidadão não é obrigado a justificar por que deseja os dados.',
    },
    {
      id: 'cp-11-12-2',
      pergunta: 'Micro-Checkpoint 2: Prazos Máximos de Classificação de Sigilo na LAI',
      item: 'Nos termos da Lei de Acesso à Informação, os documentos classificados no grau de sigilo ultrassecreto têm prazo máximo de restrição de acesso fixado em vinte e cinco anos, admitindo-se uma única prorrogação por igual período por deliberação da Comissão Mista de Reavaliação de Informações.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme o art. 24, § 1º, da LAI, o prazo de ultrassecreto é de até 25 anos. O art. 35, § 1º, confere à CMRI a competência excepcional para prorrogar esse prazo uma única vez por até igual período.',
    },
    {
      id: 'cp-11-12-3',
      pergunta: 'Micro-Checkpoint 3: Base Legal para Tratamento de Dados no Setor Público (LGPD)',
      item: 'Sob a égide da LGPD, a Biblioteca da Câmara dos Deputados só pode tratar os dados cadastrais de pesquisadores externos e parlamentares caso obtenha previamente o consentimento expresso e inequívoco de cada titular.',
      gabarito: 'E',
      justificativa: 'Errado! Na Administração Pública, o tratamento de dados pessoais fundamenta-se precipuamente na execução de políticas públicas previstas em leis e regulamentos e no cumprimento de obrigação legal (art. 7º, II e III da LGPD), dispensando o consentimento prévio do titular.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-12-1',
        periodo: '2011',
        disciplina: 'Transparência Pública',
        focoPrincipal: 'Promulgação da Lei nº 12.527/2011: marco da transparência pública e do acesso à informação no Brasil',
        figuraChave: 'Lei de Acesso à Informação',
      },
      {
        id: 'tl-11-12-2',
        periodo: '2018',
        disciplina: 'Privacidade e Proteção de Dados',
        focoPrincipal: 'Promulgação da Lei nº 13.709/2018: marco geral da proteção de dados pessoais (LGPD)',
        figuraChave: 'LGPD Brasil',
      },
      {
        id: 'tl-11-12-3',
        periodo: '2020',
        disciplina: 'Jurisprudência / Remuneração',
        focoPrincipal: 'STF - Tema 483: constitucionalidade da divulgação nominal das remunerações de servidores na internet',
        figuraChave: 'Supremo Tribunal Federal',
      },
    ],
    autores: [
      {
        id: 'aut-11-12-1',
        nome: 'Autoridade Nacional de Proteção de Dados (ANPD)',
        ano: '2022',
        obraPrincipal: 'Guia Orientativo: Tratamento de Dados Pessoais pelo Poder Público',
        ideiaChave: 'A legitimidade do tratamento de dados pelo setor público com esteio no art. 7º, III da LGPD, e as hipóteses de compartilhamento.',
        chipPegadinha: 'Exigir termo de consentimento do titular para o cumprimento de dever legal pela Administração.',
      },
      {
        id: 'aut-11-12-2',
        nome: 'Danilo Doneda',
        ano: '2021',
        obraPrincipal: 'Da Privacidade à Proteção de Dados Pessoais',
        ideiaChave: 'A harmonização sistemática entre o princípio da publicidade administrativa (LAI) e a tutela da privacidade do indivíduo (LGPD).',
        chipPegadinha: 'Invocar a LGPD para impedir o escrutínio público da remuneração de agentes públicos.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-12-1',
        afirmacao: 'Informações pessoais relativas à honra e à intimidade de indivíduos contidas em acervos públicos subordinam-se ao prazo decadencial de sigilo de 15 anos fixado para os documentos secretos.',
        gabarito: 'E',
        porQue: 'Art. 31, § 1º, I da LAI: informações pessoais sobre intimidade e vida privada têm restrição de acesso por até 100 ANOS contados da data de sua produção.',
      },
      {
        id: 'peg-11-12-2',
        afirmacao: 'O Encarregado pelo Tratamento de Dados Pessoais (DPO) na Administração Pública deve ser necessariamente um profissional externo com certificação internacional privada.',
        gabarito: 'E',
        porQue: 'O Encarregado pode ser servidor público ou terceirizado formalmente designado pelo órgão controlador para atuar como canal de comunicação institucional com os titulares e a ANPD.',
      },
      {
        id: 'peg-11-12-3',
        afirmacao: 'A divulgação em dados abertos pela internet das despesas com viagens e diárias de deputados e servidores da Câmara decorre do cumprimento do princípio da transparência ativa.',
        gabarito: 'C',
        porQue: 'Correto! Transparência ativa é a publicação proativa obrigatória de dados e gastos nos portais oficiais sem necessidade de requerimento de cidadãos (art. 8º da LAI).',
      },
    ],
  },
};
