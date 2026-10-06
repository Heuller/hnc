import type { ModuloFilho } from '../../../domain/types';

export const submodulo102: ModuloFilho = {
  id: 'sub-10-2',
  numero: '10.2',
  titulo: 'Processo Legislativo Constitucional e Espécies de Proposições',
  descricaoCurta: 'O Art. 59 da CF/88, as 7 espécies normativas primárias, o rito das Emendas Constitucionais (quórum de 3/5 em 2 turnos sem sanção presidencial), Leis Complementares vs. Ordinárias, Medidas Provisórias e o Vocabulário Controlado do Congresso (Sicon/VCB).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Constituição Federal de 1988', 'José Afonso da Silva', 'Manoel Gonçalves Ferreira Filho', 'Gilmar Mendes & Paulo Gonet', 'Sistema Sicon / VCB'],
  alertasCebraspe: [
    'Emendas Constitucionais (PECs - Art. 60 da CF/88): NÃO são sancionadas nem vetadas pelo Presidente da República! As emendas aprovadas são promulgadas exclusivamente pelas Mesas da Câmara dos Deputados e do Senado Federal conjuntamente, com o respectivo número de ordem.',
    'Quóruns de votação no Congresso Nacional: Emenda Constitucional (3/5 dos membros de cada Casa em dois turnos: 308 deputados e 49 senadores); Lei Complementar (maioria absoluta de ambas as Casas: 257 deputados e 41 senadores); Lei Ordinária (maioria simples dos votos, presente a maioria absoluta).',
    'Princípio da Irrepetibilidade: no caso de Emenda Constitucional (Art. 60, § 5º), a matéria rejeitada ou havida por prejudicada NÃO PODE ser reapresentada na mesma sessão legislativa (irrepetibilidade absoluta). No caso de Lei Ordinária ou Complementar (Art. 67), a matéria rejeitada pode ser reapresentada na mesma sessão legislativa se houver proposta da maioria absoluta dos membros de qualquer das Casas (irrepetibilidade relativa).',
    'Medidas Provisórias (MPVs - Art. 62): editadas pelo Presidente sob relevância e urgência; vigência de 60 dias prorrogáveis por mais 60; apreciadas preliminarmente por Comissão Mista. Se não apreciadas em até 45 dias da publicação, trancam a pauta de votações da Casa em que estiverem tramitando.',
    'Decretos Legislativos (PDCs - Art. 49) e Resoluções (PRSs - Arts. 51 e 52): NÃO se sujeitam a sanção ou veto do Presidente da República. Os Decretos Legislativos são promulgados pelo Presidente do Senado (Presidente da Mesa do Congresso), e as Resoluções, pelo Presidente da Casa respectiva.',
    'Vocabulário Controlado Básico do Congresso Nacional (Sicon / VCB): tesauro facetado e estruturado que padroniza os descritores de matérias legislativas, pronunciamentos e normas nas bases de dados da Câmara e do Senado.',
  ],
  quadroComparativo: {
    titulo: 'Comparação das Principais Espécies Normativas Federais (Art. 59 da CF/88)',
    colunas: ['Espécie Normativa', 'Quórum de Aprovação Exigido', 'Sujeito a Sanção/Veto Presidencial?', 'Autoridade Competente para Promulgação', 'Iniciativa Popular Permitida?'],
    linhas: [
      ['Emenda à Constituição (PEC)', '3/5 dos membros em 2 turnos (308 CD / 49 SF)', 'NÃO (vedada intervenção do Executivo)', 'Mesas da Câmara e do Senado conjuntamente', 'NÃO (apenas 1/3 CD/SF, Presidente ou maioria ALs)'],
      ['Lei Complementar (PLP)', 'Maioria Absoluta de ambas as Casas (257 CD / 41 SF)', 'SIM (prazo de 15 dias úteis para sanção/veto)', 'Presidente da República (ou Pres. Senado se omisso)', 'SIM (1% eleitorado nacional em 5 estados)'],
      ['Lei Ordinária (PL)', 'Maioria Simples (presente a maioria absoluta)', 'SIM (prazo de 15 dias úteis para sanção/veto)', 'Presidente da República (ou Pres. Senado se omisso)', 'SIM (1% eleitorado nacional em 5 estados)'],
      ['Medida Provisória (MPV)', 'Maioria Simples em cada Casa legislativa', 'SIM se aprovada com alteração (PLV); NÃO se na íntegra', 'Presidente da Mesa do Congresso Nacional (se na íntegra)', 'NÃO (iniciativa privativa do Presidente da República)'],
      ['Decreto Legislativo (PDC)', 'Maioria Simples de deputados e senadores', 'NÃO (competência exclusiva do Congresso Nacional)', 'Presidente do Senado Federal (Presidente do Congresso)', 'NÃO'],
      ['Resolução (PRS)', 'Maioria Simples da respectiva Casa legislativa', 'NÃO (competência privativa da Câmara ou do Senado)', 'Presidente da Mesa da respectiva Casa', 'NÃO'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Teoria Geral do Processo Legislativo Federal

O processo legislativo é o conjunto coordenado e sucessivo de atos e procedimentos solenemente prescritos pela Constituição Federal (Arts. 59 a 69) para a elaboração das normas jurídicas estatais primárias (Silva, 2021; Ferreira Filho, 2020):

\`\`\`mermaid
flowchart TD
    CF["Processo Legislativo Constitucional (Art. 59 da CF/88)"]
    CF --> E1["1. Emendas à Constituição (PECs - Art. 60)"]
    CF --> E2["2. Leis Complementares (PLPs - Art. 69)"]
    CF --> E3["3. Leis Ordinárias (PLs - Arts. 61 a 67)"]
    CF --> E4["4. Leis Delegadas (Art. 68)"]
    CF --> E5["5. Medidas Provisórias (MPVs - Art. 62)"]
    CF --> E6["6. Decretos Legislativos (PDCs - Art. 49)"]
    CF --> E7["7. Resoluções (PRSs - Arts. 51 e 52)"]
\`\`\`

---

### 2. Análise Detalhada das Espécies Normativas

#### A. Emendas à Constituição (PECs - Art. 60 da CF/88)
As Emendas Constitucionais são fruto do **Poder Constituinte Derivado Reformador**, submetendo-se a limitações estritas impostas pelo Constituinte Originário:
* **Limitações Circunstanciais (Art. 60, § 1º):** A Constituição não pode ser emendada na vigência de **intervenção federal**, de **estado de defesa** ou de **estado de sítio**.
* **Limitações Materiais / Cláusulas Pétreas (Art. 60, § 4º — Pegadinha Clássica Cebraspe):** Não será objeto de deliberação a proposta de emenda tendente a abolir:
  1. A forma federativa de Estado;
  2. O voto direto, secreto, universal e periódico;
  3. A separação dos Poderes;
  4. Os direitos e garantias individuais.
  *(Atenção: o voto obrigatório NÃO é cláusula pétrea; a obrigatoriedade do voto pode ser revogada por PEC, pois o que é pétreo é o voto direto, secreto, universal e periódico!).*
* **Iniciativa Restrita (Art. 60, incisos I a III):**
  * A proposta só pode ser apresentada por: 1) no mínimo **1/3 dos membros da Câmara** (171 deputados) ou do Senado (27 senadores); 2) o **Presidente da República**; 3) mais da metade das **Assembleias Legislativas** das unidades da Federação, manifestando-se cada uma pela maioria relativa de seus membros.
  * *⚠️ Alerta Cebraspe:* **NÃO EXISTE iniciativa popular de PEC** no ordenamento jurídico brasileiro! Cidadãos não podem apresentar PEC diretamente.
* **Rito de Votação e Quórum Qualificado:** Aprovada em **dois turnos** de votação em cada Casa do Congresso Nacional, exigindo a aprovação de **três quintos dos votos** dos respectivos membros (308 deputados federais e 49 senadores).
* **Promulgação e Ausência de Sanção Presidencial:**
  * Aprovada a PEC nas duas Casas, ela é **promulgada pelas Mesas da Câmara dos Deputados e do Senado Federal conjuntamente**, com o respectivo número de ordem.
  * **O Presidente da República NÃO sanciona nem veta Emendas Constitucionais!**
* **Irrepetibilidade Absoluta (Art. 60, § 5º):** A matéria constante de PEC rejeitada ou havida por prejudicada **não pode ser objeto de nova proposta na mesma sessão legislativa** em nenhuma hipótese.

#### B. Leis Complementares (PLPs) vs. Leis Ordinárias (PLs)
* **Distinção Material:** Leis Complementares só são cabíveis quando a Constituição Federal expressamente exige sua edição (ex.: Art. 14, § 9º - inelegibilidades; Art. 163 - finanças públicas). Matérias residuais e comuns são veiculadas por Lei Ordinária.
* **Hierarquia (Jurisprudência do STF):** Não há hierarquia ontológica entre Lei Complementar e Lei Ordinária no direito brasileiro; ambas têm a mesma estatura de lei formal primária, distinguindo-se pelo órgão competente, quórum de aprovação e campo material reservado pela Constituição.
* **Quóruns de Aprovação:**
  * **Lei Complementar (Art. 69):** Exige **maioria absoluta** dos membros de cada Casa (metade mais um do total de componentes: 257 deputados e 41 senadores).
  * **Lei Ordinária (Art. 47):** Exige **maioria simples (relativa)** dos votos dos presentes na sessão, desde que esteja presente a maioria absoluta da Casa.

#### C. Medidas Provisórias (MPVs - Art. 62 da CF/88)
* Editadas pelo Presidente da República com força de lei em situações comprovadas de **relevância e urgência**.
* **Vedações Materiais Taxativas (Art. 62, § 1º):** É expressamente proibida a edição de MPV sobre:
  * Nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral;
  * Direito penal, processual penal e processual civil;
  * Organização do Poder Judiciário e do Ministério Público;
  * Planos plurianuais (PPA), diretrizes orçamentárias (LDO), orçamento anual (LOA) e créditos adicionais (ressalvada a abertura de crédito extraordinário por calamidade pública, Art. 167, § 3º);
  * Matéria reservada com exclusividade a Lei Complementar.
* **Prazos e Trancamento de Pauta:**
  * Vigência de **60 dias**, prorrogável automaticamente uma única vez por mais **60 dias** se não ultimada a votação.
  * Se não for apreciada em até **45 dias** de sua publicação em Diário Oficial, a MPV entra em **regime de urgência e tranca a pauta** de votações de todas as demais matérias na Casa em que estiver tramitando até que ocorra sua deliberação final.
* **Comissão Mista de Deputados e Senadores:** Obrigatória por imposição constitucional (Art. 62, § 9º) para emissão de parecer prévio sobre os pressupostos de relevância e urgência antes da ida ao Plenário da Câmara.

#### D. Decretos Legislativos e Resoluções
* **Decretos Legislativos (Art. 49):** Atos normativos primários destinados a regular matérias de **competência exclusiva do Congresso Nacional** (ex.: aprovação de tratados internacionais, concessões de rádio e TV, autorização para o Presidente ausentar-se do país por mais de 15 dias, fiscalização das contas da Presidência). São promulgados pelo Presidente do Senado Federal e dispensam sanção do Presidente da República.
* **Resoluções (Arts. 51 e 52):** Veículos normativos destinados a regular matérias de **competência privativa da Câmara dos Deputados ou do Senado Federal** (ex.: regimes internos, criação de cargos, polícia interna, fixação de alíquotas de tributos pelo Senado). São promulgadas pelo Presidente da Casa correspondente e dispensam sanção executiva.

---

### 3. As Fases da Tramitação do Processo Legislativo Ordinário

\`\`\`mermaid
flowchart TD
    F1["1. FASE DE INICIATIVA<br/>• Parlamentar (Deputado / Senador / Comissão)<br/>• Privativa do Presidente (Servidores / Forças Armadas / Orçamento)<br/>• Popular (1% eleitorado em 5 estados com 0,3% cada)"]
    F2["2. FASE CONSTITUTIVA (Deliberação Parlamentar)<br/>• Casa Iniciadora (Câmara) -> Comissões (CCJC, Mérito) -> Plenário<br/>• Casa Revisora (Senado) -> Aprova, Rejeita ou Emenda<br/>• Se emendado no Senado -> Retorna à Câmara exclusivamente para avaliar emendas"]
    F3["3. FASE CONSTITUTIVA EXECUTIVA (Sanção ou Veto)<br/>• Sanção (Expressa ou Tácita em 15 dias úteis)<br/>• Veto (Total ou Parcial / Jurídico ou Político)<br/>• Derrubada de Veto: Maioria Absoluta Conjunta de Deputados e Senadores"]
    F4["4. FASE COMPLEMENTAR<br/>• Promulgação (Atesta existência e validade formal da lei)<br/>• Publicação no DOU (Garante vigência e eficácia perante a sociedade)"]
    F1 --> F2 --> F3 --> F4
\`\`\`

* **Iniciativa Popular de Leis (Art. 61, § 2º da CF/88):**
  * Pode ser exercida pela subscrição de, no mínimo, **1% (um por cento) do eleitorado nacional**, distribuído por pelo menos **cinco Estados**, com não menos de **0,3% (três décimos por cento) dos eleitores de cada um deles**.
  * É apresentada perante a **Câmara dos Deputados**, que atua sempre como Casa Iniciadora nesses casos.
* **Veto Presidencial e Sessão Conjunta do Congresso:**
  * O Presidente dispõe de **15 dias úteis** para manifestar o veto (fundamentado em inconstitucionalidade — veto jurídico, ou em contrariedade ao interesse público — veto político).
  * O veto deve ser apreciado em **sessão conjunta do Congresso Nacional dentro de 30 dias** do seu recebimento.
  * Para derrubar o veto e restabelecer o texto da lei, exige-se o voto da **maioria absoluta dos Deputados (257) e dos Senadores (41)** em escrutínio aberto.

---

### 4. A Informação Legislativa: O Sistema Sicon e o Vocabulário Controlado (VCB)

Para viabilizar a rastreabilidade e a recuperação de proposições, pareceres, discursos e atos normativos produzidos ao longo do processo legislativo, o Congresso Nacional utiliza uma infraestrutura cooperativa de informação documentária:

#### A. O Sistema de Informações do Congresso Nacional (Sicon)
Desenvolvido originariamente sob o sistema SABI e modernizado pelas equipes de informática e documentação da Câmara e do Senado, o Sicon integra os acervos legislativos das duas Casas:
* Permite o acompanhamento unificado da tramitação de Projetos de Lei desde sua apresentação na Casa Iniciadora até a promulgação pelo Poder Executivo;
* Vincula os textos das proposições originais com suas respectivas emendas de Plenário, notas taquigráficas e relatórios das comissões temáticas.

#### B. O Vocabulário Controlado Básico (VCB / Tesauro Sicon)
O **Vocabulário Controlado Básico (VCB)** é a ferramenta de controle terminológico e linguagem documentária padronizada utilizada pelas bibliotecas parlamentares da RVBI:
* **Estrutura Relacional:** Organiza os conceitos da legislação e da doutrina através de relações de:
  * **Equivalência:** Termos Autorizados (*USE*) e Termos Não Autorizados (*UP - Usado Para / Sinônimos*);
  * **Hierarquia:** Termo Geral (*TG*) e Termo Específico (*TE*);
  * **Associação:** Termo Relacionado (*TR*).
* **Finalidade no Processo Legislativo:** Garante a exatidão semântica na indexação de projetos e discursos, permitindo que consultores legislativos e cidadãos encontrem todas as proposições correlatas a um mesmo assunto (ex.: "Reforma Tributária", "Inteligência Artificial", "Proteção de Dados") independentemente dos termos coloquiais empregados pelos diferentes parlamentares.`,
  checkpoints: [
    {
      id: 'cp-10-2-1',
      pergunta: 'Micro-Checkpoint 1: Promulgação de Emendas Constitucionais',
      item: 'Aprovada uma Proposta de Emenda à Constituição (PEC) em dois turnos por três quintos dos membros de cada Casa do Congresso Nacional, o texto segue para o Presidente da República para fins de sanção ou veto.',
      gabarito: 'E',
      justificativa: 'Errado! As Emendas Constitucionais NÃO vão para a sanção do Presidente da República. São promulgadas diretamente pelas Mesas da Câmara dos Deputados e do Senado Federal conjuntamente.',
    },
    {
      id: 'cp-10-2-2',
      pergunta: 'Micro-Checkpoint 2: Quórum de Aprovação de Leis Complementares',
      item: 'A aprovação de um Projeto de Lei Complementar (PLP) no plenário da Câmara dos Deputados exige o voto favorável da maioria absoluta dos seus membros.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme o Art. 69 da CF/88, leis complementares são aprovadas por maioria absoluta (257 deputados), diferentemente das leis ordinárias que exigem maioria simples.',
    },
    {
      id: 'cp-10-2-3',
      pergunta: 'Micro-Checkpoint 3: Sistema Sicon e Vocabulário Controlado do Congresso',
      item: 'O Vocabulário Controlado Básico do Congresso Nacional (Sicon) utiliza estruturas hierárquicas e sinonímicas para padronizar a indexação de matérias legislativas e discursos proferidos em plenário.',
      gabarito: 'C',
      justificativa: 'Certo! O Tesauro do Sicon padroniza a indexação legislativa conjunta da Câmara dos Deputados e do Senado Federal, viabilizando a busca temática precisa por assuntos das proposições.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-2-1',
        periodo: '1988',
        disciplina: 'Constituição Federal',
        focoPrincipal: 'Estruturação do Art. 59 da CF/88 e das 7 espécies normativas do processo legislativo',
        figuraChave: 'Assembleia Nacional Constituinte',
      },
      {
        id: 'tl-10-2-2',
        periodo: '1990 / 2000',
        disciplina: 'Controle Terminológico Parlamentar',
        focoPrincipal: 'Desenvolvimento do Vocabulário Controlado Básico (VCB/Sicon) para indexação legislativa conjunta',
        figuraChave: 'Equipes Técnicas da Câmara dos Deputados e Senado Federal',
      },
      {
        id: 'tl-10-2-3',
        periodo: '2001',
        disciplina: 'Emenda Constitucional nº 32',
        focoPrincipal: 'Reforma do rito das Medidas Provisórias: prazo de 60+60 dias, vedações materiais e trancamento de pauta aos 45 dias',
        figuraChave: 'Congresso Nacional',
      },
    ],
    autores: [
      {
        id: 'aut-10-2-1',
        nome: 'José Afonso da Silva',
        ano: 2021,
        obraPrincipal: 'Curso de Direito Constitucional Positivo',
        ideiaChave: 'Classificação dogmática do processo legislativo, quóruns qualificados e bicameralismo federativo.',
        chipPegadinha: 'A Câmara representa o povo (proporcional); o Senado representa os Estados (majoritário).',
      },
      {
        id: 'aut-10-2-2',
        nome: 'Manoel Gonçalves Ferreira Filho',
        ano: 2020,
        obraPrincipal: 'Do Processo Legislativo',
        ideiaChave: 'Teoria pura das espécies normativas primárias e análise dos atos parlamentares de controle.',
        chipPegadinha: 'A irrepetibilidade de PEC é absoluta; a irrepetibilidade de leis é relativa (maioria absoluta).',
      },
      {
        id: 'aut-10-2-3',
        nome: 'Gilmar Mendes e Paulo Gonet',
        ano: 2022,
        obraPrincipal: 'Curso de Direito Constitucional',
        ideiaChave: 'Limitações materiais (cláusulas pétreas), circunstanciais e formais do poder constituinte derivado reformador.',
        chipPegadinha: 'Emenda Constitucional não é sancionada nem vetada pelo Presidente; promulgação é das Mesas da CD e SF.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-2-1',
        afirmacao: 'O veto presidencial a um projeto de lei aprovado pelo Congresso Nacional é irrevogável e definitivo, não podendo ser reapreciado pelos parlamentares.',
        gabarito: 'E',
        porQue: 'O veto presidencial pode ser apreciado e rejeitado (derrubado) pelo voto da maioria absoluta dos deputados (257) e senadores (41) em sessão conjunta do Congresso Nacional.',
      },
      {
        id: 'peg-10-2-2',
        afirmacao: 'Um decreto legislativo promulgado pelo Congresso Nacional necessita de sanção do Presidente da República para começar a produzir efeitos jurídicos válidos.',
        gabarito: 'E',
        porQue: 'Decretos legislativos tratam de competência exclusiva do Congresso (art. 49) e NÃO passam por sanção ou veto presidencial; são promulgados pelo Presidente do Senado.',
      },
      {
        id: 'peg-10-2-3',
        afirmacao: 'Cidadãos brasileiros podem apresentar Proposta de Emenda à Constituição (PEC) diretamente à Câmara dos Deputados mediante a subscrição de 1% do eleitorado nacional.',
        gabarito: 'E',
        porQue: 'NÃO existe iniciativa popular para Emendas Constitucionais no Brasil! A iniciativa popular aplica-se estritamente a Leis Ordinárias e Leis Complementares.',
      },
      {
        id: 'peg-10-2-4',
        afirmacao: 'O voto obrigatório constitui cláusula pétrea explícita da Constituição Federal de 1988, sendo vedada qualquer emenda que institua o voto facultativo universal.',
        gabarito: 'E',
        porQue: 'A cláusula pétrea (Art. 60, § 4º, II) protege o voto direto, secreto, universal e periódico. O caráter OBRIGATÓRIO do voto não é pétreo e pode ser alterado por PEC.',
      },
    ],
  },
};
