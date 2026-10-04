import type { ModuloFilho } from '../../../domain/types';

export const submodulo1111: ModuloFilho = {
  id: 'sub-11-11',
  numero: '11.11',
  titulo: 'Contratos Administrativos, Gestão e Fiscalização Contratual',
  titulo_curto: 'Contratos e Fiscalização Contratual',
  descricaoCurta: 'Características do contrato administrativo e cláusulas exorbitantes (art. 104). Duração dos contratos (até 10 anos em contínuos). Gestão vs. Fiscalização técnica e administrativa. Recebimento provisório e definitivo. Alterações contratuais e equilíbrio econômico-financeiro. Sanções.',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'Nova Lei de Licitações e Contratos (Lei nº 14.133/2021)',
    'Tribunal de Contas da União (TCU)',
    'Súmula 331 do Tribunal Superior do Trabalho (TST)',
    'Marçal Justen Filho',
  ],
  alertasCebraspe: [
    'PRAZO MÁXIMO DE SERVIÇOS CONTÍNUOS (LEI 14.133/2021): A regra da nova lei ampliou substancialmente o prazo! Contratos de serviços e fornecimentos contínuos podem ser celebrados pelo prazo inicial de até 5 anos, prorrogáveis sucessivamente até o LIMITE MÁXIMO DE 10 ANOS (art. 107). Na lei antiga eram 60 meses prorrogáveis por 12.',
    'GESTOR VS. FISCAL TÉCNICO: O Cebraspe diferencia rigorosamente as duas funções no art. 117 da Lei: O Fiscal Técnico acompanha dia a dia a conformidade técnica, prazos e quantidades do objeto entregue; o Gestor do Contrato cuida dos aspectos administrativos gerais, coordena os fiscais, formaliza termos aditivos e instrui pedidos de reajuste ou sanção.',
    'EXCEÇÃO DE CONTRATO NÃO CUMPRIDO (ART. 137, § 2º, IV): Se a Administração atrasar os pagamentos, o contratado particular NÃO pode paralisar imediatamente os serviços. Ele só pode suspender a execução ou pleitear rescisão se o atraso estatal for SUPERIOR A 2 MESES (60 dias) corridos!',
    'SANÇÕES DA LEI 14.133/2021: 1) Advertência; 2) Multa (de 0,5% a 30%); 3) Impedimento de licitar (atinge a Administração Direta e Indireta do respectivo ente federativo - ex.: União, por até 3 anos); 4) Declaração de inidoneidade (atinge TODA a Administração Pública brasileira - União, Estados, DF e Municípios, de 3 a 6 anos).',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo: Atribuições da Equipe de Gestão e Fiscalização Contratual',
    colunas: ['Função Legal', 'Perfil do Agente', 'Atribuição Central', 'Documento Emitido / Instrumento'],
    linhas: [
      ['Gestor do Contrato', 'Servidor designado com visão gerencial', 'Coordena fiscais, instrui prorrogações, aditamentos e reequilíbrios', 'Termos aditivos, apostilamentos e relatórios gerenciais'],
      ['Fiscal Técnico', 'Servidor com conhecimento específico do objeto (ex.: Bibliotecário)', 'Verifica a qualidade, especificações, quantidades e prazos das entregas', 'Termo de Recebimento Provisório e ateste de notas fiscais'],
      ['Fiscal Administrativo', 'Servidor da área de logística / pessoal', 'Verifica recolhimento de FGTS, INSS e obrigações trabalhistas da contratada', 'Planilha de conferência de encargos e certidões negativas'],
      ['Fiscal Setorial', 'Servidor da unidade descentralizada', 'Acompanha a prestação no local físico da execução', 'Registro diário de ocorrências em livro próprio'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Natureza Jurídica e Características dos Contratos Administrativos

O contrato administrativo é o ajuste bilateral consensual celebrado entre a Administração Pública (agindo com supremacia de poder público) e um particular ou outra entidade, regulado substancialmente pelo direito administrativo:
* **Características Canônicas:**
  * **Consensual:** Aperfeiçoa-se com o acordo formal de vontades;
  * **Formal:** Exige instrumento escrito e publicação oficial obrigatória no Portal Nacional de Contratações Públicas (PNCP - art. 94) como condição inafastável de sua eficácia jurídica;
  * **Oneroso:** Envolve contraprestação pecuniária do poder público;
  * **Comutativo:** Direitos e deveres equivalentes e previamente estabelecidos;
  * *Intuitu Personae* (Personalíssimo): Celebrado em razão das qualificações específicas do licitante vencedor (a subcontratação só é admitida se expressamente autorizada em edital, nos limites fixados pelo órgão).

---

### 2. As Cláusulas Exorbitantes (Art. 104 da Lei nº 14.133/2021)

São prerrogativas especiais da Administração Pública que exorbitam do direito privado comum, justificadas pela supremacia do interesse público:

1. **Modificação Unilateral do Contrato:** A Administração pode alterar unilateralmente o contrato para melhor adequação técnica aos fins de interesse público (**alteração qualitativa**) ou para acréscimo ou supressão de até **25%** do valor inicial atualizado (**alteração quantitativa**), limite que se eleva a até **50%** no caso particular de reformas de edifícios ou equipamentos. O particular é obrigado a aceitar essas alterações, mantendo-se o equilíbrio econômico-financeiro original.
2. **Extinção Unilateral:** Possibilidade de a Administração extinguir o contrato sem necessidade de intervenção judicial em casos de inadimplemento grave da contratada ou por razões de conveniência e interesse público superveniente.
3. **Fiscalização Permanente:** O dever-poder de acompanhar pari passu a execução das obras e serviços por fiscais designados.
4. **Aplicação Direta de Sanções:** Imposição de advertências, multas e impedimentos sem intervenção do Judiciário.
5. **Ocupação Provisória e Retenção:** Direito de ocupar bens móveis, imóveis e utilizar pessoal da contratada para garantir a continuidade imediata de serviços públicos essenciais.
6. **Mitigação da *Exceptio Non Adimpleti Contractus* (Art. 137, § 2º, IV):** O particular só pode suspender o cumprimento de suas obrigações se a Administração atrasar os pagamentos por prazo **superior a 2 meses (60 dias)**, salvo em situações de calamidade ou grave perturbação da ordem.

---

### 3. Duração e Vigência dos Contratos na Nova Lei

* **Regra Geral:** A vigência do contrato administrativo é adstrita ao exercício financeiro respectivo ou aos créditos orçamentários previstos.
* **Serviços e Fornecimentos Contínuos (Art. 106 e 107):**
  * Podem ser celebrados com prazo inicial de até **5 anos**;
  * Podem ser prorrogados sucessivamente por termos aditivos até o limite improrrogável de **10 anos**, desde que demonstrada a vantajosa economicidade para a Administração.
* **Contratos com Receita / Eficiência (Art. 110):** Podem ter prazo de até **10 anos** (sem investimento) ou até **35 anos** (com realização de benfeitorias e investimentos vultosos pelo contratado).

---

### 4. Gestão e Fiscalização Contratual (Arts. 117 e seguintes)

A execução do contrato deverá ser acompanhada e fiscalizada por **1 ou mais fiscais do contrato**, representantes da Administração especialmente designados:

#### 4.1 O Papel do Fiscal Técnico (Bibliotecário)
* Acompanha a execução técnica direta do objeto contratual (ex.: desenvolvimento do sistema Koha/FOLIO, assinatura de bases jurídicas, restauração de obras raras do acervo);
* Registra todas as ocorrências em livro ou sistema digital oficial e determina à empresa a correção imediata de defeitos verificados;
* Emite o **Termo de Recebimento Provisório** após atestar a conformidade física e técnica dos itens entregues.

#### 4.2 O Papel do Fiscal Administrativo
* Acompanha os aspectos legais e burocráticos do contrato, conferindo o recolhimento das guias de FGTS, INSS, salários e encargos trabalhistas de empresas que fornecem mão de obra terceirizada para evitar a responsabilização subsidiária da União (Súmula 331 do TST).

#### 4.3 O Papel do Gestor do Contrato
* Coordena as atividades de todos os fiscais, consolida as avaliações de desempenho, instrui a formalização de aditivos contratuais, pedidos de reequilíbrio econômico-financeiro (reajuste em sentido estrito, repactuação e revisão) e encaminha relatórios para instauração de processos sancionatórios quando houver infração.

---

### 5. Recebimento do Objeto Contratual (Art. 140)

O recebimento de compras e serviços desdobra-se em duas etapas cronológicas obrigatórias:
1. **Recebimento Provisório:** Realizado pelo **fiscal técnico**, mediante termo circunstanciado ou recibo provisório, no ato da entrega, para posterior verificação minuciosa da conformidade do material com as especificações exigidas no Termo de Referência.
2. **Recebimento Definitivo:** Realizado pelo **gestor do contrato** ou por comissão designada, após a verificação da qualidade e do funcionamento dos produtos ou serviços, mediante termo detalhado que comprova a aceitação integral da entrega, liberando o processo para ateste e liquidação da despesa.

---

### 6. Sistema Sancionatório da Lei nº 14.133/2021 (Art. 156)

Pela prática de infrações licitatórias e contratuais, aplicam-se quatro sanções graduadas:
1. **Advertência:** Aplicada exclusivamente por infrações de menor gravidade que não justifiquem imposição de penalidade mais severa;
2. **Multa:** Cobrada nos percentuais previstos no edital (entre **0,5% e 30%** do valor contratual);
3. **Impedimento de Licitar e Contratar (Inciso III):** Prazo máximo de até **3 anos**, impedindo o fornecedor de licitar e contratar com **toda a Administração Pública Direta e Indireta do mesmo ente federativo** que aplicou a sanção (ex.: se aplicada pela Câmara dos Deputados, impede de licitar em toda a União Federal);
4. **Declaração de Inidoneidade para Licitar ou Contratar (Inciso IV):** Sanção mais gravosa da lei, com prazo de **3 a 6 anos**, impedindo o infrator de licitar e contratar perante **TODA a Administração Pública brasileira** (União, todos os Estados, DF e todos os Municípios). Exige competência exclusiva de Ministro de Estado ou autoridade máxima da Casa Legislativa.`,
  checkpoints: [
    {
      id: 'cp-11-11-1',
      pergunta: 'Micro-Checkpoint 1: Limites de Duração de Contratos Contínuos na Lei 14.133/21',
      item: 'Contrato de assinatura e suporte técnico continuado de sistema integrado de gestão de bibliotecas (SIGB) celebrado pela Câmara dos Deputados pode ter vigência prorrogada sucessivamente por aditivos até o limite máximo de dez anos.',
      gabarito: 'C',
      justificativa: 'Correto! Nos termos do art. 107 da Lei nº 14.133/2021, os contratos de serviços e fornecimentos contínuos podem ser prorrogados sucessivamente, respeitada a vigência máxima decenal (10 anos), desde que vantajosa a prorrogação.',
    },
    {
      id: 'cp-11-11-2',
      pergunta: 'Micro-Checkpoint 2: Exceção de Contrato não Cumprido contra a Administração',
      item: 'Diante de atraso injustificado de trinta dias nos pagamentos devidos pela Administração Pública, a empresa fornecedora de livros pode paralisar imediatamente a entrega das obras com amparo na exceção de contrato não cumprido.',
      gabarito: 'E',
      justificativa: 'Errado! Nos contratos administrativos vigora a mitigação da exceptio non adimpleti contractus (art. 137, § 2º, IV da Lei nº 14.133/2021): o contratado só tem direito de paralisar a execução ou pedir a rescisão contratual caso os atrasos de pagamento ultrapassem dois meses (60 dias).',
    },
    {
      id: 'cp-11-11-3',
      pergunta: 'Micro-Checkpoint 3: Alcance da Declaração de Inidoneidade',
      item: 'A declaração de inidoneidade para licitar ou contratar aplicada a um fornecedor por fraude comprovada impede a empresa de participar de licitações exclusivamente no âmbito do órgão sancionador, preservada sua participação nos demais órgãos da União.',
      gabarito: 'E',
      justificativa: 'Errado! A declaração de inidoneidade (art. 156, IV da Lei 14.133/2021) produz efeitos amplos e irrestritos perante TODA a Administração Pública Direta e Indireta de todos os entes federativos (União, Estados, DF e Municípios). Quem atua restrito ao mesmo ente é a sanção de impedimento.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-11-1',
        periodo: '2011',
        disciplina: 'Trabalhista / Contratual',
        focoPrincipal: 'Súmula 331 do TST: fiscalização das obrigações trabalhistas para afastar culpa in vigilando',
        figuraChave: 'TST',
      },
      {
        id: 'tl-11-11-2',
        periodo: '2021',
        disciplina: 'Direito Contratual Público',
        focoPrincipal: 'Lei nº 14.133/2021: unificação dos prazos de 10 anos para contratos contínuos e novo rito de fiscalização',
        figuraChave: 'Nova Lei de Licitações',
      },
    ],
    autores: [
      {
        id: 'aut-11-11-1',
        nome: 'Marçal Justen Filho',
        ano: '2023',
        obraPrincipal: 'Comentários à Lei de Licitações e Contratações Administrativas',
        ideiaChave: 'A separação funcional estrita entre o Gestor do Contrato e os Fiscais Técnico e Administrativo.',
        chipPegadinha: 'Atribuir a elaboração de aditivos contratuais ao fiscal técnico da contratação.',
      },
      {
        id: 'aut-11-11-2',
        nome: 'Ronny Charles Lopes de Torres',
        ano: '2023',
        obraPrincipal: 'Leis de Licitações Públicas Comentadas (14ª edição)',
        ideiaChave: 'O regime jurídico das alterações unilaterais, limites de aditamento e a responsabilidade funcional dos fiscais de contrato.',
        chipPegadinha: 'Permitir que o fiscal técnico altere unilateralmente cláusulas financeiras ou de prazo do contrato.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-11-1',
        afirmacao: 'O fiscal técnico do contrato administrativo é o agente responsável exclusivo por julgar recursos administrativos contra penalidades aplicadas à empresa contratada.',
        gabarito: 'E',
        porQue: 'O fiscal técnico apenas anota ocorrências materiais e atesta a conformidade técnica. A decisão e aplicação de penalidades cabe à autoridade superior competente, ouvida a assessoria jurídica.',
      },
      {
        id: 'peg-11-11-2',
        afirmacao: 'A sanção de declaração de inidoneidade para licitar ou contratar possui prazo fixo de vigência de 1 ano improrrogável.',
        gabarito: 'E',
        porQue: 'A declaração de inidoneidade tem prazo mínimo de 3 anos e máximo de 6 anos (art. 156, § 5º da Lei nº 14.133/2021).',
      },
      {
        id: 'peg-11-11-3',
        afirmacao: 'O recebimento provisório do objeto de um contrato administrativo não exime o fornecedor de responsabilidades por vícios ocultos ou defeitos posteriores do bem entregue.',
        gabarito: 'C',
        porQue: 'Correto! O recebimento provisório e até o definitivo não excluem a responsabilidade civil do contratado pela solidez, segurança e defeitos ocultos (art. 140, § 2º da Lei 14.133/21).',
      },
    ],
  },
};
