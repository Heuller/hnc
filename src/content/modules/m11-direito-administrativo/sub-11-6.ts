import type { ModuloFilho } from '../../../domain/types';

export const submodulo116: ModuloFilho = {
  id: 'sub-11-6',
  numero: '11.6',
  titulo: 'Responsabilidade Civil do Estado: Ação, Omissão e Direito de Regresso',
  titulo_curto: 'Responsabilidade Civil do Estado',
  descricaoCurta: 'Evolução histórica e a Teoria do Risco Administrativo (art. 37, § 6º da CF/88). Responsabilidade por atos comissivos vs. omissivos (falta do serviço e dever de custódia). Excludentes e atenuantes do nexo causal. Teoria do Risco Integral. Ação de regresso e ilegitimidade do servidor (STF Tema 940).',
  tempoEstimadoMinutos: 40,
  autoresChave: [
    'Constituição Federal de 1988 (art. 37, § 6º)',
    'STF (Tema 940 - Dupla Garantia)',
    'STF (Tema 592 - Omissão em Custódia)',
    'Maria Sylvia Zanella Di Pietro',
    'Celso Antônio Bandeira de Mello',
  ],
  alertasCebraspe: [
    'TEMA 940 DO STF (PRINCÍPIO DA DUPLA GARANTIA): A ação indenizatória proposta por particular DEVE ser proposta EXCLUSIVAMENTE contra a pessoa jurídica estatal (ou prestadora de serviço público), sendo o agente público parte passiva manifestamente ilegítima. É terminantemente proibido ao particular processar diretamente o servidor ou incluí-lo em litisconsórcio passivo facultativo!',
    'RESPONSABILIDADE POR ATOS COMISSIVOS VS. OMISSIVOS: Atos comissivos (ações diretas de agentes públicos) atraem responsabilidade OBJETIVA (prescinde de dolo ou culpa). Atos omissivos genéricos atraem a teoria da falta do serviço (faute du service - responsabilidade SUBJETIVA, exigindo prova de que o Estado tinha o dever de agir e não agiu). Omissões específicas (onde o Estado detinha dever de custódia/guarda direta, como em presídios e hospitais) atraem responsabilidade OBJETIVA!',
    'DIREITO DE REGRESSO (ART. 37, § 6º, PARTE FINAL): O Estado responde perante o terceiro objetivamente; contudo, a ação de regresso do Estado contra o servidor causador do dano é estritamente SUBJETIVA, dependendo de demonstração cabal de DOLO ou CULPA do agente.',
    'TEORIA DO RISCO INTEGRAL (SEM EXCLUDENTES): Modalidade excepcionalíssima no ordenamento brasileiro que não admite NENHUMA causa excludente (nem caso fortuito, força maior ou culpa da vítima). Aplica-se taxativamente a: 1) Danos nucleares (art. 21, XXIII, c, CF); 2) Atos terroristas contra aeronaves de matrícula brasileira; 3) Danos ao meio ambiente.',
  ],
  quadroComparativo: {
    titulo: 'Modalidades de Responsabilidade Civil do Poder Público',
    colunas: ['Modalidade / Teoria', 'Fundamento Dogmático', 'Exigência de Dolo ou Culpa', 'Admissão de Excludentes', 'Hipóteses Típicas no Brasil'],
    linhas: [
      ['Risco Administrativo (Regra Geral)', 'Art. 37, § 6º da CF/88 (ação comissiva)', 'Não (Responsabilidade Objetiva)', 'Sim (Culpa exclusiva da vítima, caso fortuito, força maior)', 'Atos de agentes públicos no exercício funcional'],
      ['Culpa Administrativa (Faute du Service)', 'Omissão genérica da Administração Pública', 'Sim (Culpa anônima do serviço: não funcionou ou atrasou)', 'Sim (Comprovação de força maior insuperável)', 'Acidentes em vias públicas por falta de sinalização'],
      ['Risco Suscitado (Custódia Específica)', 'Dever específico de proteção da pessoa sob guarda', 'Não (Responsabilidade Objetiva por omissão qualificada)', 'Sim (Apenas se demonstrado que o evento era inevitável)', 'Morte ou agressão a detentos, alunos ou internados'],
      ['Risco Integral (Excepcionalíssima)', 'Perigo extremo intrínseco à atividade', 'Não (Responsabilidade Objetiva Pura)', 'NÃO admite nenhuma excludente (nem força maior)', 'Danos nucleares e atentados terroristas em aeronaves'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Evolução Histórica da Responsabilidade Civil do Estado

A compreensão da responsabilidade patrimonial extracontratual do Estado passou por quatro fases históricas essenciais:

1. **Teoria da Irresponsabilidade Estatal (*The King Can Do No Wrong*):** Típica dos Estados absolutistas, nos quais a soberania régia era inquestionável e o soberano não respondia civilmente por prejuízos causados aos súditos.
2. **Teoria da Culpa Civilista (Responsabilidade com Culpa):** Com o advento do Estado Liberal, admitiu-se a responsabilidade estatal distinguindo os *atos de império* (praticados com supremacia soberana, irrecorríveis e isentos de indenização) dos *atos de gestão* (praticados em condições de igualdade com os particulares, nos quais o Estado respondia com base na culpa civil subjetiva do seu preposto).
3. **Teoria da Culpa Administrativa (Falta do Serviço / *Faute du Service*):** Rompe com a culpa individual do funcionário. O dever de indenizar surge da falta do serviço público, demonstrada em três hipóteses: o serviço *não funcionou*, funcionou *mal* ou funcionou com *atraso*. É uma teoria de responsabilidade subjetiva, mas de culpa anônima do aparelho estatal.
4. **Teoria do Risco Administrativo (Responsabilidade Objetiva):** Adotada como regra pela Constituição Federal de 1988 (art. 37, § 6º). Assenta-se no princípio da equidade e na repartição dos encargos públicos: a coletividade beneficia-se dos serviços públicos; logo, eventuais prejuízos causados a indivíduos pela atuação estatal devem ser reparados pelo erário, independentemente da demonstração de dolo ou culpa do servidor.

---

### 2. O Regime Constitucional do Art. 37, § 6º da CF/88

> *"As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa."*

* **Pessoas Jurídicas Vinculadas:** 
  1. Todas as pessoas jurídicas de direito público (União, Estados, DF, Municípios, Autarquias e Fundações Públicas de Direito Público);
  2. Pessoas jurídicas de direito privado **prestadoras de serviços públicos** (Empresas Públicas e Sociedades de Economia Mista prestadoras de serviços, bem como concessionárias e permissionárias privadas).
* **Empresas Estatais Exploradoras de Atividade Econômica:** Não se submetem à responsabilidade objetiva do art. 37, § 6º, da CF/88, respondendo sob o regime de direito privado civil comum (art. 173, § 1º, II, CF), salvo em relações de consumo reguladas pelo CDC.

---

### 3. Requisitos para a Configuração da Responsabilidade Objetiva

Para que o particular faça jus à indenização pelo Estado, basta comprovar três elementos:
1. **Conduta Estatal:** Comportamento ativo comissivo do agente público atuando nessa qualidade;
2. **Dano Efetivo:** Lesão material, patrimonial, estética ou moral direta a direito de terceiro;
3. **Nexo de Causalidade:** Relação de causa e efeito direta e imediata entre a conduta do agente público e o dano experimentado (Teoria do Dano Direto e Imediato - art. 403 do Código Civil).

---

### 4. Responsabilidade por Omissão do Estado

* **Omissão Genérica (Regra da Responsabilidade Subjetiva):** Ocorre quando o Estado descumpre um dever genérico de proteção da coletividade (ex.: furto de automóvel estacionado em rua pública, assalto na via comum, chuva torrencial que alaga avenida sem falha construtiva). A responsabilidade é **subjetiva**, exigindo a comprovação da *faute du service* (o particular deve demonstrar que o Estado tinha o dever de agir e foi negligente).
* **Omissão Específica (Responsabilidade Objetiva por Dever de Custódia):** Ocorre quando o Estado detém o dever jurídico individualizado de evitar o dano sobre pessoas ou coisas postas sob sua custódia ou vigilância direta e imediata:
  * Exemplo: Detento assassinado ou que comete suicídio no presídio (STF - Tema 592/RE 841.526); paciente que morre desatendido em hospital público; aluno agredido gravemente em sala de aula de escola pública; acervo raro entregue para restauração sob custódia direta do órgão. Nestes casos, o Estado responde de forma **objetiva**, devendo demonstrar causa de força maior absoluta para elidir o dever de indenizar.

---

### 5. Causas Excludentes e Atenuantes da Responsabilidade

Como a CF/88 adotou a Teoria do Risco Administrativo (e não a Teoria do Risco Integral), admite-se a exclusão ou a redução da responsabilidade estatal quando houver quebra do nexo causal:

* **Causas Excludentes (Isentam o Estado Integralmente):**
  1. **Culpa Exclusiva da Vítima:** O particular causa o evento lesivo por sua própria e exclusiva imprudência ou dolo (ex.: cidadão que se joga intencionalmente sob as rodas de viatura oficial em movimento regular).
  2. **Caso Fortuito ou Força Maior:** Eventos imprevisíveis e inevitáveis da natureza (raio, terremoto, inundação extraordinária sem falha prévia de bueiros).
  3. **Fato Exclusivo de Terceiro:** Evento danoso praticado por terceiro sem nenhuma participação ou negligência de agentes públicos.
* **Causa Atenuante (Reduz a Indenização Proporcionalmente):**
  * **Culpa Concorrente da Vítima:** A vítima e o agente público concorrem simultaneamente para o desfecho danoso (o valor da reparação fixado judicialmente é partilhado proporcionalmente).

---

### 6. Ação Regressiva e a Tese do Tema 940 do STF (Princípio da Dupla Garantia)

O Supremo Tribunal Federal, ao julgar o **Tema 940 da Repercussão Geral (RE 1.027.633/SP)**, fixou tese vinculante:
> *"A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para figurar no polo passivo o agente público, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa."*

* **Princípio da Dupla Garantia:** Protege o cidadão (que terá a certeza de receber a indenização do erário solvente, sem risco de insolvência do agente) e protege o servidor público (que não poderá ser processado diretamente pela vítima, ficando a salvo de pressões ou vinganças pessoais e só respondendo perante o próprio Estado caso comprovado que agiu com dolo ou culpa em ação regressiva).`,
  checkpoints: [
    {
      id: 'cp-11-6-1',
      pergunta: 'Micro-Checkpoint 1: Polo Passivo da Ação Indenizatória (STF Tema 940)',
      item: 'Cidadão que tiver bens pessoais destruídos por negligência comprovada de servidor bibliotecário durante transporte de acervo da Câmara pode ajuizar ação de reparação de danos incluindo o servidor e a União em litisconsórcio passivo facultativo.',
      gabarito: 'E',
      justificativa: 'Errado! De acordo com a tese de repercussão geral fixada pelo STF no Tema 940, o agente público é parte passiva manifestamente ilegítima em ações propostas por particulares. A ação deve ser ajuizada exclusivamente contra o Estado (União Federal), descabendo litisconsórcio passivo com o servidor.',
    },
    {
      id: 'cp-11-6-2',
      pergunta: 'Micro-Checkpoint 2: Responsabilidade Objetiva por Atos Comissivos e Regresso',
      item: 'A responsabilidade civil da União perante terceiros pelos atos comissivos praticados por seus agentes públicos independe da comprovação de culpa ou dolo, ao passo que a ação de regresso movida pela União contra o servidor exige a prova indispensável de conduta dolosa ou culposa.',
      gabarito: 'C',
      justificativa: 'Correto! Perante o administrado lesado a responsabilidade é objetiva (Teoria do Risco Administrativo, dispensando dolo/culpa). Na esfera interna de regresso contra o servidor, a responsabilidade é subjetiva, exigindo dolo ou culpa (art. 37, § 6º da CF).',
    },
    {
      id: 'cp-11-6-3',
      pergunta: 'Micro-Checkpoint 3: Teoria do Risco Integral e Excludentes de Causalidade',
      item: 'No ordenamento jurídico brasileiro, a teoria do risco integral aplica-se como regra geral a toda a Administração Pública direta e indireta, impedindo que o Estado se exima de indenizar mesmo diante de comprovada culpa exclusiva da vítima.',
      gabarito: 'E',
      justificativa: 'Errado! A regra geral é a Teoria do Risco ADMINISTRATIVO, que admite excludentes de nexo causal (como culpa exclusiva da vítima e força maior). A Teoria do Risco Integral é excepcionalíssima no Brasil, aplicando-se apenas a danos nucleares, atos terroristas em aeronaves e dano ambiental.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-6-1',
        periodo: '1873',
        disciplina: 'Direito Administrativo Comparado',
        focoPrincipal: 'Julgamento do Caso Blanco (França): nascimento da responsabilidade pública autônoma do Estado',
        figuraChave: 'Tribunal de Conflitos Francês',
      },
      {
        id: 'tl-11-6-2',
        periodo: '1988',
        disciplina: 'Responsabilidade Constitucional',
        focoPrincipal: 'Consagração do art. 37, § 6º da CF/88: responsabilidade objetiva no Brasil',
        figuraChave: 'Assembleia Constituinte',
      },
      {
        id: 'tl-11-6-3',
        periodo: '2016',
        disciplina: 'Jurisprudência / Custódia',
        focoPrincipal: 'STF - Tema 592 (RE 841.526): responsabilidade objetiva do Estado por omissão em custódia direta',
        figuraChave: 'Supremo Tribunal Federal',
      },
      {
        id: 'tl-11-6-4',
        periodo: '2019',
        disciplina: 'Jurisprudência / Dupla Garantia',
        focoPrincipal: 'STF - Tema 940 (RE 1.027.633): ilegitimidade do servidor público no polo passivo da ação indenizatória',
        figuraChave: 'Supremo Tribunal Federal',
      },
    ],
    autores: [
      {
        id: 'aut-11-6-1',
        nome: 'Celso Antônio Bandeira de Mello',
        ano: '2021',
        obraPrincipal: 'Curso de Direito Administrativo',
        ideiaChave: 'Distinção magistral entre responsabilidade por ato comissivo (objetiva) e responsabilidade por omissão estatal genérica (subjetiva fundada na falta do serviço).',
        chipPegadinha: 'Afirmar que a omissão estatal pura e simples sempre atrai responsabilidade objetiva.',
      },
      {
        id: 'aut-11-6-2',
        nome: 'Maria Sylvia Zanella Di Pietro',
        ano: '2023',
        obraPrincipal: 'Direito Administrativo',
        ideiaChave: 'Aplicação da teoria do risco administrativo e configuração da omissão específica em situações de custódia e guarda estatal.',
        chipPegadinha: 'Confundir omissão genérica comum com omissão qualificada em dever de custódia.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-6-1',
        afirmacao: 'Na hipótese de culpa concorrente da vítima com a conduta do agente público, o Estado fica inteiramente isento do dever de indenizar, por rompimento do nexo causal.',
        gabarito: 'E',
        porQue: 'A culpa concorrente é causa ATENUANTE (o Estado indeniza proporcionalmente à gravidade da sua conduta). Apenas a culpa EXCLUSIVA da vítima isenta totalmente o Estado.',
      },
      {
        id: 'peg-11-6-2',
        afirmacao: 'Concessionária privada de transporte que causa acidente com pedestre responde civilmente perante a vítima de forma objetiva, nos moldes do art. 37, § 6º, da CF/88.',
        gabarito: 'C',
        porQue: 'O art. 37, § 6º aplica-se expressamente às pessoas jurídicas de direito público E às pessoas jurídicas de direito privado prestadoras de serviços públicos (inclusive quanto a terceiros não usuários - STF RE 580.252).',
      },
      {
        id: 'peg-11-6-3',
        afirmacao: 'A condenação judicial transitada em julgado que obriga a União a indenizar particular gera a condenação automática do servidor causador do dano na mesma sentença.',
        gabarito: 'E',
        porQue: 'A condenação do servidor exige AÇÃO DE REGRESSO autônoma movida pelo Estado, na qual deverá ser comprovado cabalmente o dolo ou a culpa do agente público.',
      },
    ],
  },
};
