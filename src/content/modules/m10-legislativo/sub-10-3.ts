import type { ModuloFilho } from '../../../domain/types';

export const submodulo103: ModuloFilho = {
  id: 'sub-10-3',
  numero: '10.3',
  titulo: 'Lei de Acesso à Informação (LAI) e LGPD na Gestão Documental Pública',
  descricaoCurta: 'A Lei nº 12.527/2011 (LAI): princípio da publicidade máxima, transparência ativa vs. passiva, prazos do SIC, graus de sigilo (Reservada 5 anos, Secreta 15 anos, Ultrassecreta 25 anos), proteção de dados pessoais (100 anos), a LGPD (Lei 13.709/2018) e a neutralidade técnica na consultoria parlamentar.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Controladoria-Geral da União (CGU)', 'Autoridade Nacional de Proteção de Dados (ANPD)', 'Lei nº 12.527/2011', 'Lei nº 13.709/2018', 'Câmara dos Deputados'],
  alertasCebraspe: [
    'A tríade dos graus de sigilo da LAI (Art. 24 da Lei nº 12.527/2011) e seus prazos MÁXIMOS exatos: 1. Reservada = até 5 anos; 2. Secreta = até 15 anos; 3. Ultrassecreta = até 25 anos (prorrogável uma única vez por mais 25 anos pela CMRI). O Cebraspe troca sistematicamente esses prazos e suas respectivas autoridades!',
    'Informações Pessoais (Art. 31 da LAI): dados relativos à intimidade, vida privada, honra e imagem de pessoas naturais têm acesso restrito por até 100 ANOS contados de sua produção, proteção que independe de classificação prévia de autoridade.',
    'Violação de Direitos Humanos (Art. 21, Parágrafo Único da LAI - regra absoluta): informações ou documentos que versem sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos ou a mando de autoridades NÃO podem ser objeto de restrição de acesso em nenhuma hipótese!',
    'Transparência Passiva (SIC) e Vedação de Motivação (Art. 10, § 3º): o cidadão tem direito de obter a informação pública sem justificar ou fundamentar seu pedido. O prazo de resposta é imediato se disponível, ou de até 20 DIAS (prorrogável por mais 10 DIAS mediante justificativa formal).',
    'LGPD (Lei nº 13.709/2018) no Setor Público: o tratamento de dados pessoais pela Câmara dos Deputados e órgãos estatais dispensa o consentimento do titular quando realizado para o cumprimento de obrigação legal/regulatória ou para a execução de políticas públicas.',
    'Ética e Neutralidade Parlamentar: no atendimento a gabinetes parlamentares e comissões, o bibliotecário legislativo deve pautar sua seleção pela estrita imparcialidade e neutralidade técnica, oferecendo um panorama plural e equilibrado de todas as correntes doutrinárias e jurídicas.',
  ],
  quadroComparativo: {
    titulo: 'Graus de Sigilo, Prazos e Competências de Classificação na LAI (Lei 12.527/2011)',
    colunas: ['Grau de Sigilo', 'Prazo Máximo de Restrição', 'Autoridades Competentes para Classificar', 'Hipóteses Típicas de Salvaguarda'],
    linhas: [
      ['Ultrassecreta', 'Até 25 anos (prorrogável 1x pela CMRI por mais 25)', 'Presidente da República, Vice-Presidente, Ministros de Estado, Comandantes Militares, Embaixadores', 'Ameaça extrema à soberania nacional, planos bélicos e integridade territorial'],
      ['Secreta', 'Até 15 anos', 'As autoridades acima + dirigentes de autarquias, fundações e empresas estatais federais', 'Risco a relações diplomáticas, estabilidade financeira/cambial e espionagem'],
      ['Reservada', 'Até 5 anos', 'As autoridades acima + servidores ocupantes de DAS 101.5 ou equivalentes de direção/chefia', 'Planos estratégicos em curso, operações policiais e projetos antes do anúncio oficial'],
      ['Informações Pessoais', 'Até 100 anos (a contar da produção)', 'Não depende de classificação formal de autoridade (proteção legal automática)', 'Intimidade, vida privada, prontuários de saúde, honra e imagem de indivíduos'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Marco Regulatório da Transparência Pública: A Lei nº 12.527/2011 (LAI)

A Lei de Acesso à Informação regulamenta o direito fundamental consagrado no **Art. 5º, XXXIII**, no **Art. 37, § 3º, II** e no **Art. 216, § 2º** da Constituição Federal de 1988, aplicável a todos os Poderes da União, dos Estados, do Distrito Federal e dos Municípios, bem como a entidades privadas que recebam recursos públicos para realização de ações de interesse coletivo:

\`\`\`tree
TITLE: Princípios Estruturantes da LAI (Lei nº 12.527/2011)
- Direito Constitucional de Acesso (CF/88) | Arts. 5º XXXIII, 37 § 3º II e 216 § 2º
  - Lei de Acesso à Informação (LAI) | Marco regulatório da transparência republicana
    - Publicidade como Regra Geral | Acesso amplo de ofício (transparência ativa) e sob demanda (passiva)
    - Sigilo como Exceção Estrita | Restrição admitida apenas quando indispensável à segurança social e do Estado
    - Gratuidade do Acesso | Isenção total de tarifas, admitida cobrança exclusiva de custos de reprografia
    - Vedação de Exigência de Motivo | Ilegalidade de qualquer exigência sobre os motivos determinantes do pedido
\`\`\`

#### A. Diretrizes Fundamentais (Art. 3º):
1. A **publicidade como preceito geral** e o **sigilo como exceção**;
2. Divulgação de informações de interesse público, independentemente de solicitações;
3. Utilização de meios de comunicação viabilizados pela tecnologia da informação;
4. Fomento ao desenvolvimento da cultura de transparência na administração pública;
5. Desenvolvimento do controle social da administração pública.

#### B. Transparência Ativa vs. Transparência Passiva
* **Transparência Ativa (Art. 8º):**
  * Dever de ofício dos órgãos e entidades públicas de promover a divulgação na Internet de informações de interesse coletivo ou geral produzidas ou custodiadas por eles, **independentemente de qualquer requerimento cidadão**.
  * *Requisitos Mínimos Obrigatórios:* Registro das competências e estrutura organizacional; endereços e telefones das unidades e horários de atendimento; registros de quaisquer repasses ou transferências de recursos financeiros; registros das despesas e receitas; informações concernentes a procedimentos licitatórios (com editais e contratos na íntegra); dados gerais para o acompanhamento de programas, ações, projetos e obras; respostas a perguntas mais frequentes da sociedade (FAQ).
  * *Padrões Tecnológicos:* Formatos abertos, estruturados e legíveis por máquina (ex.: CSV, JSON, XML), garantindo a autenticidade e a integridade das informações sem barreiras proprietárias de software.
* **Transparência Passiva (Serviço de Informações ao Cidadão - SIC - Arts. 9º a 14):**
  * Mecanismo pelo qual o órgão atende a demandas individuais específicas formuladas pela sociedade.
  * *Proibição de Exigência de Motivação (Art. 10, § 3º — Pegadinha Clássica Cebraspe):* **São expressamente vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.** O requerente precisa apenas identificar-se (nome e documento) e especificar a informação pretendida.
  * *Prazos Oficiais de Resposta:*
    * Se a informação requerida estiver disponível, o acesso deve ser concedido de forma **imediata**.
    * Não sendo possível o acesso imediato, o órgão público tem o prazo de **até 20 dias** para responder, prazo este que pode ser prorrogado por mais **10 dias** mediante justificativa expressa encaminhada ao cidadão.

---

### 2. A Classificação de Informações Sigilosas e os Prazos Máximos

Quando a publicidade da informação comprometer a segurança da sociedade e do Estado (Art. 23), ela poderá ser excepcionalmente classificada em um dos três graus de sigilo (Art. 24):

\`\`\`timeline
RES | 1. Grau Reservado | Até 5 Anos de Restrição | Classificável por autoridades até DAS 101.5. Salvaguarda planos estratégicos e operações em andamento.
---> Escalação de Gravidade
SEC | 2. Grau Secreto | Até 15 Anos de Restrição | Classificável por Ministros, Comandantes Militares e dirigentes de estatais/autarquias federais.
---> Grau Máximo
ULTRA | 3. Grau Ultrassecreto | Até 25 Anos de Restrição | Prorrogável 1x pela CMRI (até +25 anos). Competência restrita: Presidência, Ministros, Forças Armadas e Chefes de Missão.
\`\`\`

#### A. A Escala Temporal e Competências de Classificação (Art. 27):
1. **Ultrassecreta (até 25 anos):**
   * Classificada privativamente por: Presidente e Vice-Presidente da República; Ministros de Estado e autoridades com prerrogativas equivalentes; Comandantes da Marinha, do Exército e da Aeronáutica; Chefes de Missões Diplomáticas permanentes no exterior.
   * *Prorrogação Única:* Pode ser prorrogada uma única vez por igual período (mais 25 anos) exclusivamente pela **Comissão Mista de Reavaliação de Informações (CMRI)**.
2. **Secreta (até 15 anos):**
   * Classificada pelas autoridades acima indicadas, acrescidas dos dirigentes de autarquias, fundações públicas e empresas estatais federais.
3. **Reservada (até 5 anos):**
   * Classificada por todas as autoridades precedentes, acrescidas dos agentes públicos que exerçam funções de direção, comando ou chefia de nível DAS 101.5 (ou hierarquicamente equivalentes).

#### B. A Cláusula Absoluta de Proteção aos Direitos Humanos (*⚠️ Pegadinha de Ouro Cebraspe*)
O Art. 21, Parágrafo Único da LAI estabelece uma proibição categórica que não admite exceções ou interpretações flexibilizadoras:
> *"Não poderá ser negado acesso à informação necessária à tutela judicial ou administrativa de direitos fundamentais.*  
> ***As informações ou documentos que versem sobre condutas que impliquem violação dos direitos humanos praticada por agentes públicos ou a mando de autoridades públicas NÃO poderão ser objeto de restrição de acesso em nenhuma hipótese.***"

---

### 3. Proteção das Informações Pessoais (Art. 31 da LAI)

O tratamento de informações pessoais na administração pública obedece ao princípio da transparência com a devida salvaguarda da privacidade:
* **Prazo de Restrição (Art. 31, § 1º, I):** Informações relativas à **intimidade, vida privada, honra e imagem** têm seu acesso restrito, independentemente de classificação de sigilo de qualquer autoridade, pelo **prazo máximo de 100 anos**, a contar da data de sua produção.
* **Divulgação Excepcional sem Consentimento:** As informações pessoais poderão ser acessadas por terceiros sem o consentimento do titular nos casos de:
  1. Prevenção e diagnóstico médico em caso de incapacidade física ou mental do titular;
  2. Instrução de processos judiciais ou administrativos para apuração de irregularidades em que o titular for parte;
  3. Cumprimento de ordem judicial;
  4. Realização de pesquisas científicas e estatísticas de evidente interesse público (garantindo-se a anonimização dos dados);
  5. Preservação de acervos históricos e recuperação da memória nacional de relevante interesse público.

---

### 4. A Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) no Setor Público

A LGPD aplica-se a qualquer operação de tratamento de dados pessoais realizada por pessoa natural ou por pessoa jurídica de direito público ou privado:

\`\`\`tree
TITLE: Conceitos Fundamentais da LGPD (Lei nº 13.709/2018)
- Marco Legal da Proteção de Dados | Aplicação a pessoas naturais e pessoas jurídicas públicas e privadas
  - Dado Pessoal | Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, RG, IP, geolocalização)
  - Dado Pessoal Sensível | Dados sobre origem racial/étnica, convicção religiosa, opinião política, saúde, biometria ou genética
  - Tratamento pelo Setor Público | Dispensa consentimento do titular para cumprimento de obrigação legal ou execução de políticas públicas (Art. 23)
  - Encarregado de Proteção (DPO) | Canal de comunicação institucional entre o controlador dos dados, os titulares e a ANPD
\`\`\`

#### A. Princípios Norteadores do Tratamento (Art. 6º):
* **Finalidade e Adequação:** Propósitos legítimos, específicos e informados ao titular, compatíveis com as atribuições legais da instituição.
* **Necessidade (Minimização):** Limitação do tratamento ao mínimo necessário para a realização das finalidades públicas.
* **Livre Acesso e Qualidade dos Dados:** Garantia aos titulares de consulta facilitada e exatidão dos registros.
* **Segurança e Prevenção:** Adoção de medidas técnicas e organizacionais contra acessos não autorizados, incidentes e vazamentos.

---

### 5. Ética da Informação e Neutralidade Técnica na Pesquisa Parlamentar

No ecossistema de assessoria informacional da Câmara dos Deputados e do Congresso Nacional, a atuação do bibliotecário e do analista documental rege-se por cânones deontológicos e funcionais intransigíveis:

* **Princípio da Imparcialidade e Neutralidade Técnica:**
  * O bibliotecário parlamentar atende a deputados federais de todas as agremiações políticas, ideologias e correntes partidárias (bancadas do governo e da oposição).
  * Em consultas de pesquisa doutrinária, legislativa e jurisprudencial formuladas por parlamentares ou comissões, **é estritamente vedado ao bibliotecário direcionar a seleção informacional** para favorecer a tese política ou a preferência ideológica do solicitante.
  * O dossiê bibliográfico deve refletir com **equidistância técnica e pluralismo científico** o estado da arte do tema em debate, apresentando tanto a corrente doutrinária majoritária quanto os argumentos das correntes minoritárias e dissidentes.
* **Sigilo Profissional da Demanda Parlamentar:** As pesquisas encomendadas por gabinetes parlamentares para embasar projetos de lei em formulação gozam de confidencialidade funcional até que a proposição seja protocolada formalmente pela liderança ou parlamentar no sistema da Casa.`,
  checkpoints: [
    {
      id: 'cp-10-3-1',
      pergunta: 'Micro-Checkpoint 1: Prazos Máximos de Sigilo na LAI',
      item: 'Nos termos da Lei nº 12.527/2011 (LAI), os prazos máximos de restrição de acesso a informações classificadas como reservadas, secretas e ultrassecretas são de cinco, quinze e vinte e cinco anos, respectivamente.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a exata escala temporal de sigilo do Art. 24 da LAI: Reservada (5 anos), Secreta (15 anos) e Ultrassecreta (25 anos).',
    },
    {
      id: 'cp-10-3-2',
      pergunta: 'Micro-Checkpoint 2: Sigilo e Violações de Direitos Humanos',
      item: 'Autoridades públicas competentes podem classificar como ultrassecretos documentos oficiais que contenham relatos e provas de violações de direitos humanos perpetradas por agentes do Estado, com a finalidade de proteger a soberania nacional.',
      gabarito: 'E',
      justificativa: 'Errado! O Art. 21 da LAI proíbe expressamente qualquer restrição de acesso a informações e documentos que versem sobre condutas que impliquem violação de direitos humanos praticada por agentes do Estado.',
    },
    {
      id: 'cp-10-3-3',
      pergunta: 'Micro-Checkpoint 3: Neutralidade Técnica na Pesquisa Legislativa',
      item: 'Na elaboração de pesquisas informacionais solicitadas por gabinetes parlamentares, o bibliotecário legislativo deve selecionar preferencialmente a doutrina alinhada ao posicionamento partidário do solicitante para resguardar a celeridade do trabalho.',
      gabarito: 'E',
      justificativa: 'Errado! O princípio fundamental da atuação do bibliotecário público legislativo é a imparcialidade e a neutralidade técnica e doutrinária, apresentando o panorama plural e equilibrado das correntes jurídicas e doutrinárias vigentes.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-3-1',
        periodo: '2011 / 2012',
        disciplina: 'Lei de Acesso à Informação',
        focoPrincipal: 'Sancionada a Lei nº 12.527/11, consolidando a transparência ativa, passiva e a escala de sigilo',
        figuraChave: 'Congresso Nacional / CGU',
      },
      {
        id: 'tl-10-3-2',
        periodo: '2018 / 2020',
        disciplina: 'Proteção de Dados Pessoais',
        focoPrincipal: 'Promulgação da Lei nº 13.709/18 (LGPD) e criação da Autoridade Nacional de Proteção de Dados (ANPD)',
        figuraChave: 'Congresso Nacional / ANPD',
      },
      {
        id: 'tl-10-3-3',
        periodo: '2024 / 2026',
        disciplina: 'Governança Digital no Parlamento',
        focoPrincipal: 'Regulamentação de diretrizes de proteção de dados e inteligência artificial no âmbito da Câmara dos Deputados',
        figuraChave: 'Mesa Diretora da Câmara dos Deputados',
      },
    ],
    autores: [
      {
        id: 'aut-10-3-1',
        nome: 'Controladoria-Geral da União (CGU)',
        ano: 2012,
        obraPrincipal: 'Guia de Aplicação da Lei de Acesso à Informação na Administração Pública Federal',
        ideiaChave: 'A publicidade é a regra geral; o sigilo é a exceção estrita e temporária.',
        chipPegadinha: 'Dados pessoais têm proteção legal de até 100 anos, independente de sigilo da autoridade.',
      },
      {
        id: 'aut-10-3-2',
        nome: 'Autoridade Nacional de Proteção de Dados (ANPD)',
        ano: 2021,
        obraPrincipal: 'Guia Orientativo: Tratamento de Dados Pessoais pelo Poder Público',
        ideiaChave: 'Princípios de adequação, necessidade e segurança da informação aplicados a arquivos e sistemas públicos.',
        chipPegadinha: 'O poder público não precisa de consentimento para cumprir obrigação legal ou política pública.',
      },
      {
        id: 'aut-10-3-3',
        nome: 'Câmara dos Deputados',
        ano: 2023,
        obraPrincipal: 'Código de Ética e Guia de Atendimento Técnico da Consultoria e Biblioteca',
        ideiaChave: 'A neutralidade técnica e o pluralismo doutrinário garantem a legitimidade democrática do parlamento.',
        chipPegadinha: 'O bibliotecário legislativo não atua como assessor partidário de bancada, mas como servidor público de Estado.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-3-1',
        afirmacao: 'O cidadão que formula um pedido de acesso à informação no âmbito da transparência passiva da LAI deve demonstrar seu legítimo interesse e expor a motivação da consulta como condição para a admissibilidade do pedido.',
        gabarito: 'E',
        porQue: 'A LAI proíbe expressamente exigir do cidadão a motivação ou os motivos de sua solicitação. O acesso à informação pública é um direito fundamental universal.',
      },
      {
        id: 'peg-10-3-2',
        afirmacao: 'O prazo de restrição de acesso a documentos públicos que contenham dados pessoais relativos à intimidade e vida privada de um indivíduo é de no máximo cinco anos.',
        gabarito: 'E',
        porQue: 'Informações pessoais relativas à intimidade, vida privada, honra e imagem têm prazo de proteção de ATÉ 100 ANOS contados de sua produção (Art. 31 da LAI).',
      },
      {
        id: 'peg-10-3-3',
        afirmacao: 'A informação classificada no grau de sigilo reservado pode ter seu acesso restringido pelo prazo máximo improrrogável de até quinze anos.',
        gabarito: 'E',
        porQue: 'O grau RESERVADO tem prazo máximo de ATÉ 5 ANOS. O prazo de até 15 anos aplica-se exclusivamente ao grau SECRETO.',
      },
      {
        id: 'peg-10-3-4',
        afirmacao: 'Para atender com fidelidade aos interesses do parlamentar solicitante, o bibliotecário legislativo deve suprimir doutrinas contrárias ao posicionamento da base governista em pesquisas regimentais.',
        gabarito: 'E',
        porQue: 'A atuação do bibliotecário público legislativo orienta-se pela estrita imparcialidade, neutralidade doutrinária e representação plural das correntes do pensamento jurídico.',
      },
    ],
  },
};
