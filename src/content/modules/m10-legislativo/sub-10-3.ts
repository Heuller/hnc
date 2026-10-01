import type { ModuloFilho } from '../../../domain/types';

export const submodulo103: ModuloFilho = {
  id: 'sub-10-3',
  numero: '10.3',
  titulo: 'Lei de Acesso à Informação (LAI) e LGPD na Gestão Documental Pública',
  descricaoCurta: 'A Lei nº 12.527/2011 (LAI): princípio da publicidade máxima, transparência ativa vs. passiva, prazos do SIC, graus de sigilo (Reservada 5 anos, Secreta 15 anos, Ultrassecreta 25 anos), proteção de dados pessoais (100 anos) e a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Controladoria-Geral da União (CGU)', 'Autoridade Nacional de Proteção de Dados (ANPD)', 'Lei 12.527/2011', 'Lei 13.709/2018'],
  alertasCebraspe: [
    'A tríade dos graus de sigilo da LAI (Art. 24 da Lei 12.527/11) e seus prazos MÁXIMOS exatos: 1. Reservada = até 5 anos; 2. Secreta = até 15 anos; 3. Ultrassecreta = até 25 anos. O Cebraspe troca sistematicamente esses prazos e seus respectivos prazos!',
    'Informações Pessoais (Art. 31 da LAI): dados relativos à intimidade, vida privada, honra e imagem de pessoas têm acesso restrito por até 100 ANOS contados de sua produção, independentemente de classificação de sigilo.',
    'Informações sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos ou a mando de autoridades NÃO podem ser objeto de restrição de acesso em nenhuma hipótese!',
    'Prazos de atendimento ao cidadão no SIC (Transparência Passiva): resposta imediata se a informação estiver disponível; não sendo possível, resposta em até 20 DIAS, prorrogável por mais 10 DIAS mediante justificativa formal.',
    'LGPD (Lei 13.709/18) no setor público: o tratamento de dados pessoais por órgãos como a Câmara dos Deputados deve ter como finalidade o cumprimento de obrigação legal ou regulatória e a execução de políticas públicas, com estrita observância da transparência e segurança.',
  ],
  quadroComparativo: {
    titulo: 'Graus de Sigilo e Prazos Máximos de Restrição segundo a LAI (Lei 12.527/2011)',
    colunas: ['Grau de Sigilo', 'Prazo Máximo de Restrição', 'Autoridades Competentes para Classificar', 'Hipóteses de Proteção'],
    linhas: [
      ['Ultrassecreta', 'Até 25 anos (renovável uma única vez por mais 25)', 'Presidente da República, Vice-Presidente, Ministros de Estado, Comandantes das Forças Armadas', 'Ameaça extrema à soberania nacional, planos militares e defesa do Estado'],
      ['Secreta', 'Até 15 anos', 'As autoridades acima + titulares de autarquias, fundações e empresas estatais', 'Risco a relações internacionais, espionagem, estabilidade financeira e econômica'],
      ['Reservada', 'Até 5 anos', 'As autoridades acima + ocupantes de cargo de direção e chefia intermediária (DAS 101.5)', 'Planos estratégicos em andamento, projetos em elaboração e operações pontuais'],
      ['Informações Pessoais', 'Até 100 anos (a contar da produção)', 'Não depende de classificação formal de autoridade (proteção legal automática)', 'Intimidade, vida privada, honra e imagem de pessoas naturais identificadas'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Lei de Acesso à Informação (LAI - Lei nº 12.527/2011)

A LAI regulamenta o direito constitucional fundamental de acesso a informações públicas previsto no Art. 5º, XXXIII da Constituição de 1988, estabelecendo uma mudança cultural paradigmática no Estado brasileiro:
* **A Publicidade como Regra Geral:** Toda informação produzida ou custodiada por órgãos públicos dos três Poderes da União, Estados e Municípios é de livre acesso público.
* **O Sigilo como Exceção Estrita:** O segredo só é admitido em hipóteses expressas e taxativas de segurança da sociedade ou do Estado e na proteção de dados pessoais.

#### A. Transparência Ativa vs. Transparência Passiva
* **Transparência Ativa (Art. 8º):**
  * Dever compulsório de todo órgão público de divulgar, em seus portais oficiais da Internet, informações de interesse geral, independentemente de qualquer requerimento cidadão.
  * *Obrigações Mínimas:* Estrutura organizacional, endereços, telefones, horários de atendimento, repasses e transferências de recursos, execuções orçamentárias e financeiras, licitações abertas e em andamento, contratos administrativos e respostas a perguntas mais frequentes da sociedade (FAQ).
* **Transparência Passiva (Serviço de Informação ao Cidadão - SIC):**
  * Atendimento a requerimentos individualizados de cidadãos.
  * Qualquer pessoa (física ou jurídica) pode requerer informações sem necessidade de apresentar justificação ou motivação.
  * **Prazos Oficiais:** Se a informação estiver disponível, o acesso deve ser **imediato**. Caso contrário, o órgão dispõe de **até 20 dias**, prazo que pode ser prorrogado por mais **10 dias** mediante justificativa expressa comunicada ao requerente.

---

### 2. A Classificação de Informações Sigilosas

Conforme o Art. 24 da LAI, a restrição de acesso pode durar no máximo:
1. **Ultrassecreta:** Prazo de até **25 anos**.
   * Matérias que ponham em risco a defesa nacional, integridade territorial ou relações diplomáticas graves.
   * Pode ser prorrogada uma única vez pela Comissão Mista de Reavaliação de Informações (CMRI).
2. **Secreta:** Prazo de até **15 anos**.
3. **Reservada:** Prazo de até **5 anos**.

> **⚠️ Exceção Absoluta de Sigilo (Art. 21, Parágrafo Único):**  
> *"Não poderá ser negado acesso à informação necessária à tutela judicial ou administrativa de direitos fundamentais. As informações ou documentos que versem sobre condutas que impliquem violação dos direitos humanos praticada por agentes públicos ou a mando de autoridades públicas não poderão ser objeto de restrição de acesso."*

---

### 3. A Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)

A LGPD dispõe sobre o tratamento de dados pessoais em meios físicos e digitais:
* **Dado Pessoal:** Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, RG, endereço, e-mail, biometria).
* **Dado Pessoal Sensível:** Dado que exige maior rigor de proteção por envolver riscos de discriminação: origem racial ou étnica, convicção religiosa, opinião política, filiação sindical ou a partido, dado referente à saúde ou à vida sexual, dado genético ou biométrico.
* **O Tratamento pelo Poder Público (Art. 23):**
  * A administração pública pode tratar dados pessoais para o atendimento de sua finalidade pública, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público.
  * Exige a nomeação do **Encarregado de Proteção de Dados (DPO)** e a adoção de medidas técnicas de segurança e integridade de dados na biblioteca e nos repositórios digitais institucionais.`,
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
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-3-1',
        periodo: '2011 / 2012',
        disciplina: 'Lei de Acesso à Informação',
        focoPrincipal: 'Sancionada a Lei nº 12.527/11, consolidando a transparência ativa, passiva e os prazos de sigilo',
        figuraChave: 'Congresso Nacional / CGU',
      },
      {
        id: 'tl-10-3-2',
        periodo: '2018 / 2020',
        disciplina: 'Proteção de Dados Pessoais',
        focoPrincipal: 'Promulgação da Lei nº 13.709/18 (LGPD) e criação da Autoridade Nacional de Proteção de Dados (ANPD)',
        figuraChave: 'Congresso Nacional / ANPD',
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
    ],
  },
};
