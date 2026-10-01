import type { ModuloFilho } from '../../../domain/types';

export const submodulo102: ModuloFilho = {
  id: 'sub-10-2',
  numero: '10.2',
  titulo: 'Processo Legislativo Constitucional e Espécies de Proposições',
  descricaoCurta: 'O Art. 59 da CF/88, as 7 espécies normativas, o rito das Emendas Constitucionais (quórum de 3/5 em 2 turnos sem sanção presidencial), Leis Complementares vs. Ordinárias, Medidas Provisórias e o ciclo completo de tramitação legislativa.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Constituição Federal de 1988', 'Manoel Gonçalves Ferreira Filho', 'José Afonso da Silva', 'Regimento Comum do Congresso Nacional'],
  alertasCebraspe: [
    'Emendas Constitucionais (PECs): NÃO são sancionadas nem vetadas pelo Presidente da República! As emendas promulgadas são assinadas e promulgadas exclusivamente pelas Mesas da Câmara dos Deputados e do Senado Federal conjuntamente.',
    'Quóruns de votação: Emenda Constitucional (3/5 dos votos dos membros de cada Casa em dois turnos); Lei Complementar (maioria absoluta de ambas as Casas, isto é, 257 deputados e 41 senadores); Lei Ordinária (maioria simples dos votos, presente a maioria absoluta).',
    'Medidas Provisórias (MPVs): editadas pelo Presidente da República sob relevância e urgência com vigência imediata de 60 dias (prorrogáveis por mais 60); apreciadas inicialmente por Comissão Mista de deputados e senadores.',
    'Decretos Legislativos (competência exclusiva do Congresso Nacional, como ratificação de tratados e julgamento das contas do Presidente) e Resoluções (competência privativa da Câmara ou do Senado) NÃO vão à sanção presidencial; são promulgados pelo Presidente do Congresso ou da Mesa da Casa.',
  ],
  quadroComparativo: {
    titulo: 'Comparação das Principais Espécies Normativas do Processo Legislativo Federal (Art. 59 CF/88)',
    colunas: ['Espécie Normativa', 'Quórum de Aprovação Exigido', 'Sujeito a Sanção/Veto Presidencial?', 'Órgão Competente para Promulgação'],
    linhas: [
      ['Emenda à Constituição (PEC)', '3/5 dos membros em 2 turnos em cada Casa (308 na Câmara / 49 no Senado)', 'NÃO (vedado sanção ou veto presidencial)', 'Mesas da Câmara dos Deputados e do Senado Federal conjuntamente'],
      ['Lei Complementar (PLP)', 'Maioria Absoluta de ambas as Casas (257 deputados / 41 senadores)', 'SIM (sujeita a sanção ou veto no prazo de 15 dias úteis)', 'Presidente da República (ou Presidente do Senado se houver omissão)'],
      ['Lei Ordinária (PL)', 'Maioria Simples (relativa), presente a maioria absoluta dos membros', 'SIM (sujeita a sanção ou veto presidencial)', 'Presidente da República (ou Presidente do Senado se houver omissão)'],
      ['Medida Provisória (MPV)', 'Maioria Simples em cada Casa após relatório da Comissão Mista', 'SIM se for aprovada com alterações (PLV); NÃO se aprovada na íntegra', 'Presidente da Mesa do Congresso Nacional (se aprovada integralmente)'],
      ['Decreto Legislativo (PDC)', 'Maioria Simples das duas Casas reunidas ou sucessivas', 'NÃO (matéria exclusiva do Congresso Nacional)', 'Presidente do Senado Federal (Presidente do Congresso Nacional)'],
      ['Resolução da Câmara (PRS)', 'Maioria Simples na Câmara dos Deputados', 'NÃO (matéria privativa interna da Casa)', 'Presidente da Mesa Diretora da Câmara dos Deputados'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Dinâmica do Processo Legislativo Federal

O processo legislativo é o conjunto ordenado de atos e procedimentos previstos na Constituição Federal (Arts. 59 a 69) para a elaboração das normas jurídicas estatais que regem a sociedade brasileira (Ferreira Filho, 2020; Silva, 2018):

#### As Sete Espécies Normativas do Art. 59 da CF/88:
1. **Emendas à Constituição (PECs):**
   * *Iniciativa Restrita:* Exige 1/3, no mínimo, dos membros da Câmara ou do Senado; o Presidente da República; ou mais da metade das Assembleias Legislativas dos Estados.
   * *Quórum e Rito:* Votação em **dois turnos** em cada Casa do Congresso Nacional, exigindo aprovação por **três quintos dos votos** dos respectivos membros (308 deputados federais e 49 senadores).
   * *Promulgação:* É promulgada pelas **Mesas da Câmara dos Deputados e do Senado Federal**, com o respectivo número de ordem. **Não há qualquer intervenção de sanção ou veto do Presidente da República**.
2. **Leis Complementares (PLPs):**
   * Reservadas taxativamente pelo constituinte para matérias de especial envergadura (ex.: organização do Ministério Público, normas gerais de finanças públicas, Código Tributário Nacional).
   * Exigem aprovação por **maioria absoluta** (metade mais um de todos os membros que compõem a Casa legislativa: 257 na Câmara e 41 no Senado).
3. **Leis Ordinárias (PLs):**
   * O veículo legislativo de competência residual e comum.
   * Exigem aprovação por **maioria simples** dos votos presentes, desde que esteja instalada a sessão com quórum de maioria absoluta de deputados.
4. **Leis Delegadas:**
   * Elaboradas pelo Presidente da República após autorização e delegação expressa do Congresso Nacional através de Resolução específica.
5. **Medidas Provisórias (MPVs):**
   * Editadas com força de lei pelo Presidente da República em casos de **relevância e urgência** (Art. 62 da CF/88).
   * Têm vigência imediata de 60 dias, prorrogáveis uma única vez por igual período caso a votação não se conclua.
   * Se não forem votadas em até 45 dias da publicação, entram em regime de urgência, trancando a pauta de votações da Casa em que se encontrarem.
6. **Decretos Legislativos (PDCs):**
   * Destinados a regular as matérias de **competência exclusiva do Congresso Nacional** (Art. 49 da CF/88), como a ratificação de tratados e convenções internacionais, autorização de ausência do país do Presidente por mais de 15 dias e fiscalização das contas presidenciais com apoio do TCU.
7. **Resoluções (PRSs):**
   * Destinadas a regular as matérias de competência privativa de cada Casa legislativa (como o Regimento Interno, a criação de cargos e a concessão de licenças parlamentares).

---

### 2. O Ciclo da Tramitação de Projetos de Lei Ordinária

A tramitação típica segue as fases sequenciais:
$$\\text{Iniciativa} \\rightarrow \\text{Distribuição} \\rightarrow \\text{Instrução em Comissões} \\rightarrow \\text{Plenário} \\rightarrow \\text{Revisão na Casa Revisora} \\rightarrow \\text{Sanção/Veto} \\rightarrow \\text{Promulgação e Publicação}$$

* **Fase Deliberativa e Bicameralismo:**  
  Se um projeto iniciado na Câmara for emendado no Senado (Casa Revisora), ele retorna compulsoriamente à Câmara para que esta delibere sobre as emendas do Senado. A Câmara pode aceitar as emendas ou rejeitá-las mantendo o texto original que havia aprovado.
* **Fase Executiva (Sanção e Veto):**
  * O Presidente tem **15 dias úteis** para sancionar ou vetar (veto total ou parcial).
  * O veto só pode ser derrubado pela **maioria absoluta conjunta** de deputados e senadores em sessão do Congresso Nacional.`,
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
      pergunta: "Micro-Checkpoint 3: Sistema Sicon e Vocabulário Controlado do Congresso",
      item: "O Vocabulário Controlado Básico do Congresso Nacional (Sicon) utiliza estruturas hierárquicas e sinonímicas para padronizar a indexação de matérias legislativas e discursos proferidos em plenário.",
      gabarito: 'C',
      justificativa: "Certo! O Tesauro do Sicon padroniza a indexação legislativa conjunta da Câmara dos Deputados e do Senado Federal, viabilizando a busca temática precisa por assuntos das proposições.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-2-1',
        periodo: '1988',
        disciplina: 'Constituição Cidadã',
        focoPrincipal: 'Estruturação do Art. 59 da CF/88 e das 7 espécies normativas do processo legislativo',
        figuraChave: 'Assembleia Nacional Constituinte',
      },
      {
        id: 'tl-10-2-2',
        periodo: '2001',
        disciplina: 'Emenda Constitucional nº 32',
        focoPrincipal: 'Reforma do rito das Medidas Provisórias (vedações temáticas, prazos de 60+60 dias e trancamento de pauta)',
        figuraChave: 'Congresso Nacional',
      },
    ],
    autores: [
      {
        id: 'aut-10-2-1',
        nome: 'José Afonso da Silva',
        ano: 2018,
        obraPrincipal: 'Curso de Direito Constitucional Positivo',
        ideiaChave: 'Classificação dogmática do processo legislativo, quóruns qualificados e bicameralismo federativo.',
        chipPegadinha: 'A Câmara representa o povo (proporcional); o Senado representa os Estados (majoritário).',
      },
      {
        id: 'aut-10-2-2',
        nome: 'Gilmar Mendes e Paulo Gustavo Gonet Branco',
        ano: 2022,
        obraPrincipal: 'Curso de Direito Constitucional',
        ideiaChave: 'Limitações materiais (cláusulas pétreas), circunstanciais e formais do poder constituinte derivado reformador (PEC).',
        chipPegadinha: 'Emenda Constitucional não é sancionada nem vetada pelo Presidente; sua promulgação cabe às Mesas da Câmara e do Senado.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-2-1',
        afirmacao: 'O veto presidencial a um projeto de lei aprovado pelo Congresso Nacional é irrevogável e definitivo, não podendo ser reapreciado pelos parlamentares.',
        gabarito: 'E',
        porQue: 'O veto presidencial pode ser apreciado e rejeitado (derrubado) pelo voto da maioria absoluta dos deputados e senadores em sessão conjunta do Congresso Nacional.',
      },
      {
        id: 'peg-10-2-2',
        afirmacao: 'Um decreto legislativo promulgado pelo Congresso Nacional necessita de sanção do Presidente da República para começar a produzir efeitos jurídicos válidos.',
        gabarito: 'E',
        porQue: 'Decretos legislativos tratam de competência exclusiva do Congresso e NÃO passam por sanção ou veto presidencial; são promulgados pelo Presidente do Senado.',
      },
    ],
  },
};
