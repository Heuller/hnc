import type { ModuloFilho } from '../../../domain/types';

export const submodulo102: ModuloFilho = {
  id: 'sub-10-2',
  numero: '10.2',
  editalRef: 'Conhecimentos Básicos - Processo Legislativo Constitucional',
  preRequisitos: ["sub-10-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-5",
          "titulo": "Poder Legislativo na CF/88",
          "motivo": "Espécies normativas do art. 59 da Constituição Federal."
      }
  ],
  titulo: 'Processo Legislativo Constitucional e Espécies de Proposições',
  antesDeLer: [
  {
    "termo": "Sanção",
    "definicao": "Concordância presidencial com projeto aprovado sujeito a essa fase.",
    "exemploBiblioteca": "O Presidente concorda com um projeto sujeito à sanção; a PEC segue outro procedimento."
  },
  {
    "termo": "Promulgação",
    "definicao": "Ato que atesta a existência da norma nos termos constitucionais; não se confunde com sanção ou publicação.",
    "exemploBiblioteca": "Emenda constitucional é promulgada pelas Mesas das Casas sem sanção presidencial."
  }
],
  descricaoCurta: "Diferenciar espécies normativas e proposições. Aplicar iniciativa, matéria, quóruns e limites das espécies. Aplicar requisitos, vedações e prazos das espécies normativas. Distinguir trâmite bicameral, sanção, veto, promulgação e vigência. Pesquisar tipo e versão do documento sem confundir sistemas.",
  tempoEstimadoMinutos: 23,
  autoresChave: [
  "Constituição Federal",
  "Regimento Interno da Câmara",
  "Senado — RVBI",
  "Projeto LexML"
],
  alertasCebraspe: [
  "Emenda é promulgada pelas Mesas das Casas, sem sanção ou veto presidencial.",
  "A reserva material e o quórum constitucional devem ser respeitados.",
  "A própria norma e as regras aplicáveis definem início de vigência. Publicação e vigência são marcos distintos."
],
  teoriaDensaMarkdown: "### Teoria Geral do Processo Legislativo Federal\n\nO processo legislativo é o conjunto coordenado e sucessivo de atos e procedimentos solenemente prescritos pela Constituição Federal (Arts. 59 a 69) para a elaboração das normas jurídicas estatais primárias (Silva, 2021; Ferreira Filho, 2020):\n\n```tree\nTITLE: Espécies Normativas no Processo Legislativo (Art. 59 da CF/88)\n- Processo Legislativo Constitucional | Artigo 59 da Constituição Federal de 1988\n  - 1. Emendas à Constituição (PECs) | Art. 60 • Reforma constitucional, quórum de 3/5 em 2 turnos, sem sanção presidencial\n  - 2. Leis Complementares (PLPs) | Art. 69 • Matérias taxativas na CF, aprovadas por maioria absoluta (257 CD / 41 SF)\n  - 3. Leis Ordinárias (PLs) | Arts. 61 a 67 • Campo residual/comum, aprovadas por maioria simples (presente maioria absoluta)\n  - 4. Leis Delegadas | Art. 68 • Elaboradas pelo Presidente da República mediante autorização expressa do Congresso\n  - 5. Medidas Provisórias (MPVs) | Art. 62 • Ato do Presidente com força de lei (urgência e relevância), 60+60 dias\n  - 6. Decretos Legislativos (projetos identificados conforme a Casa, como PDL) | Art. 49 • Competência exclusiva do Congresso Nacional (tratados, contas), sem veto\n  - 7. Resoluções (projetos como PRC na Câmara e PRS no Senado) | Arts. 51 e 52 • Competência privativa da Câmara ou do Senado (regimentos, economia interna)\n```\n\n---\n\n\n\nA espécie normativa resulta da competência e da matéria, não apenas da importância política do tema. PEC é proposta de emenda, não emenda já promulgada; PL e PLP também designam proposições. Resoluções podem ser das Casas ou do Congresso, segundo a competência. A numeração e a identificação documental devem acompanhar essa distinção.\n\n**Aplicação e recuperação:** Um tema politicamente importante não exige lei complementar se não houver reserva constitucional. Identifique a matéria e o fundamento.\n\n### Análise Detalhada das Espécies Normativas\n\n#### A. Emendas à Constituição (PECs - Art. 60 da CF/88)\nAs Emendas Constitucionais são fruto do **Poder Constituinte Derivado Reformador**, submetendo-se a limitações estritas impostas pelo Constituinte Originário:\n* **Limitações Circunstanciais (Art. 60, § 1º):** A Constituição não pode ser emendada na vigência de **intervenção federal**, de **estado de defesa** ou de **estado de sítio**.\n* **Limitações Materiais / Cláusulas Pétreas (Art. 60, § 4º — técnica de distrator recorrente):** Não será objeto de deliberação a proposta de emenda tendente a abolir:\n  1. A forma federativa de Estado;\n  2. O voto direto, secreto, universal e periódico;\n  3. A separação dos Poderes;\n  4. Os direitos e garantias individuais.\n  *(Atenção: o voto obrigatório NÃO é cláusula pétrea; a obrigatoriedade do voto pode ser revogada por PEC, pois o que é pétreo é o voto direto, secreto, universal e periódico!).*\n* **Iniciativa Restrita (Art. 60, incisos I a III):**\n  * A proposta só pode ser apresentada por: 1) no mínimo **1/3 dos membros da Câmara** (171 deputados) ou do Senado (27 senadores); 2) o **Presidente da República**; 3) mais da metade das **Assembleias Legislativas** das unidades da Federação, manifestando-se cada uma pela maioria relativa de seus membros.\n  * *⚠️ Alerta Cebraspe:* A CF não prevê iniciativa popular **direta de PEC federal** no rol do art. 60. Isso não impede participação por outros canais nem autoriza generalizar a conclusão para toda Constituição estadual.\n* **Rito de Votação e Quórum Qualificado:** Aprovada em **dois turnos** de votação em cada Casa do Congresso Nacional, exigindo a aprovação de **três quintos dos votos** dos respectivos membros (308 deputados federais e 49 senadores).\n* **Promulgação e Ausência de Sanção Presidencial:**\n  * Aprovada a PEC nas duas Casas, ela é **promulgada pelas Mesas da Câmara dos Deputados e do Senado Federal conjuntamente**, com o respectivo número de ordem.\n  * **O Presidente da República NÃO sanciona nem veta Emendas Constitucionais!**\n* **Irrepetibilidade Absoluta (Art. 60, § 5º):** A matéria constante de PEC rejeitada ou havida por prejudicada **não pode ser objeto de nova proposta na mesma sessão legislativa** em nenhuma hipótese.\n\n#### B. Leis Complementares (PLPs) vs. Leis Ordinárias (PLs)\n* **Distinção Material:** Leis Complementares só são cabíveis quando a Constituição Federal expressamente exige sua edição (ex.: Art. 14, § 9º - inelegibilidades; Art. 163 - finanças públicas). Matérias residuais e comuns são veiculadas por Lei Ordinária.\n* **Hierarquia (Jurisprudência do STF):** Não há hierarquia ontológica entre Lei Complementar e Lei Ordinária no direito brasileiro; ambas têm a mesma estatura de lei formal primária, distinguindo-se principalmente pelo quórum e pela reserva material constitucional; ambas são aprovadas pelo Congresso no processo federal pertinente.\n* **Quóruns de Aprovação:**\n  * **Lei Complementar (Art. 69):** Exige **maioria absoluta** dos membros de cada Casa (primeiro inteiro superior à metade do total de membros: 257 deputados e 41 senadores).\n  * **Lei Ordinária (Art. 47):** Exige **maioria simples (relativa)** dos votos dos presentes na sessão, desde que esteja presente a maioria absoluta da Casa.\n\n### Medidas provisórias, delegação e atos congressuais\n\n#### C. Medidas Provisórias (MPVs - Art. 62 da CF/88)\n* Editadas pelo Presidente da República com força de lei em situações comprovadas de **relevância e urgência**.\n* **Vedações materiais — síntese, sem substituir a leitura integral (Art. 62, § 1º):** É expressamente proibida a edição de MPV sobre:\n  * Nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral;\n  * Direito penal, processual penal e processual civil;\n  * Organização do Poder Judiciário e do Ministério Público;\n  * Planos plurianuais (PPA), diretrizes orçamentárias (LDO), orçamento anual (LOA) e créditos adicionais (ressalvada a abertura de créditos extraordinários nas hipóteses constitucionais de despesas imprevisíveis e urgentes, como guerra, comoção interna ou calamidade pública, Art. 167, § 3º);\n  * Matéria reservada com exclusividade a Lei Complementar.\n* **Prazos e Trancamento de Pauta:**\n  * Vigência de **60 dias**, prorrogável automaticamente uma única vez por mais **60 dias** se não ultimada a votação.\n  * Se não for apreciada em até **45 dias** de sua publicação em Diário Oficial, a MPV entra em **regime de urgência e sobresta a pauta** na Casa em que tramita, com o alcance delimitado pela interpretação do STF. Não alcança indistintamente toda proposição, como PECs e matérias vedadas a MP.\n* **Comissão Mista de Deputados e Senadores:** Obrigatória por imposição constitucional (Art. 62, § 9º) para emissão de parecer prévio sobre os pressupostos de relevância e urgência antes da ida ao Plenário da Câmara.\n\n#### D. Decretos Legislativos e Resoluções\n* **Decretos Legislativos (Art. 49):** Atos normativos primários destinados a regular matérias de **competência exclusiva do Congresso Nacional** (ex.: aprovação de tratados internacionais, concessões de rádio e TV, autorização para o Presidente ausentar-se do país por mais de 15 dias, fiscalização das contas da Presidência). São promulgados pelo Presidente do Senado Federal e dispensam sanção do Presidente da República.\n* **Resoluções (Arts. 51 e 52):** Veículos normativos destinados a regular matérias de **competência privativa da Câmara dos Deputados ou do Senado Federal** (ex.: regimes internos, criação de cargos, polícia interna, fixação de alíquotas de tributos pelo Senado). São promulgadas pelo Presidente da Casa correspondente e dispensam sanção executiva.\n\n---\n\n\n\nOs prazos de vigência da MP são suspensos nos recessos do Congresso (art. 62, § 4º); não confundir vigência, prazo de urgência e prazo de conversão. O § 1º também veda MP sobre hipóteses não reproduzidas nesta síntese, incluindo matéria já disciplinada em projeto aprovado e pendente de sanção/veto. A consulta do dispositivo integral é parte da aplicação. **Lei delegada:** depende de delegação do Congresso por resolução com conteúdo e termos; as matérias vedadas e eventual apreciação congressual obedecem ao art. 68.\n\n**Aplicação e recuperação:** PEC aprovada não vai à sanção. MP e lei delegada têm condições e limites próprios; nenhuma é autorização geral para legislar sobre tudo.\n\n### As Fases da Tramitação do Processo Legislativo Ordinário\n\n```timeline\nF1 | 1. Fase de Iniciativa | Deflagração do Processo | Parlamentar (Deputado/Senador/Comissão), Privativa do Presidente (órgãos, Forças Armadas, orçamento) ou Popular (1% eleitorado nacional em pelo menos 5 estados).\n---> Tramitação Parlamentar\nF2 | 2. Fase Constitutiva (Deliberação) | Câmara dos Deputados & Senado | Casa Iniciadora (comissões e Plenário quando exigido, observada apreciação conclusiva e recurso) e Casa Revisora (aprova, rejeita ou emenda com retorno à iniciadora).\n---> Envio ao Poder Executivo\nF3 | 3. Fase Constitutiva Executiva | Sanção ou Veto Presidencial | Prazo de 15 dias úteis: Sanção (expressa ou tácita) ou Veto (total/parcial; político/jurídico). Rejeição de veto por maioria absoluta dos deputados e dos senadores, separadamente.\n---> Convalidação e Eficácia\nF4 | 4. Fase Complementar | Promulgação e Publicação | Promulgação atesta a existência jurídica da lei; publicação permite conhecimento oficial; início de vigência depende da própria norma e das regras de vacatio legis aplicáveis.\n```\n\n* **Iniciativa Popular de Leis (Art. 61, § 2º da CF/88):**\n  * Pode ser exercida pela subscrição de, no mínimo, **1% (um por cento) do eleitorado nacional**, distribuído por pelo menos **cinco Estados**, com não menos de **0,3% (três décimos por cento) dos eleitores de cada um deles**.\n  * É apresentada perante a **Câmara dos Deputados**, que atua sempre como Casa Iniciadora nesses casos.\n* **Veto Presidencial e Sessão Conjunta do Congresso:**\n  * O Presidente dispõe de **15 dias úteis** para manifestar o veto (fundamentado em inconstitucionalidade — veto jurídico, ou em contrariedade ao interesse público — veto político).\n  * O veto deve ser apreciado em **sessão conjunta do Congresso Nacional dentro de 30 dias** do seu recebimento.\n  * Para derrubar o veto e restabelecer o texto da lei, exige-se o voto da **maioria absoluta dos Deputados (257) e dos Senadores (41)** em escrutínio aberto.\n\n---\n\n\n\nNo rito ordinário, a Casa revisora pode aprovar, rejeitar ou emendar, com retorno na hipótese pertinente (art. 65). Tramitação bicameral não é sessão conjunta. Veto parcial deve abranger integralmente artigo, parágrafo, inciso ou alínea, e não palavras isoladas. Rejeitar o veto não dispensa promulgação nas condições do art. 66. Matéria de projeto rejeitado pode reaparecer na mesma sessão legislativa por proposta da maioria absoluta de membros de qualquer Casa (art. 67); a regra difere da irrepetibilidade da PEC rejeitada.\n\n**Aplicação e recuperação:** Uma lei publicada prevê vigência em noventa dias. Publicação não significa necessariamente início imediato dos efeitos de todas as suas disposições.\n\n### Informação legislativa e controle terminológico\n\nA pesquisa legislativa precisa separar **proposição**, **tramitação**, **norma publicada**, **versão temporal** e **bibliografia**. Um catálogo de biblioteca não substitui a base de tramitação; um repositório com parecer não comprova sozinho a versão vigente de uma lei.\n\n### Sistemas e identificadores\n\nPortais oficiais da Câmara, do Senado e do Congresso oferecem proposições, documentos, votações e acompanhamento. Confira identificadores, origem, mudanças de numeração, apensamentos e correspondência entre Casas. Não se deve ensinar “Sicon = VCB = sistema atual unificado de toda tramitação”, nem atribuir a qualquer ferramenta rastreabilidade integral garantida sem comprovação.\n\nO **LexML** favorece identificação e descoberta de documentos jurídicos de provedores diferentes. Uma URN identifica recurso conforme regras; não garante que qualquer registro contenha o texto integral mais recente. A fonte oficial e a versão temporal continuam necessárias.\n\n### Controle terminológico\n\nO **Vocabulário Controlado Básico (VCB)** está ligado à representação temática na **RVBI**, com coordenação do Senado. Seus termos e relações não se confundem com todos os instrumentos de indexação de proposições e discursos da Câmara. Os instrumentos evoluem; confira o vocabulário e a versão usados pela base consultada.\n\nRelações usuais de um tesauro incluem equivalência (USE/UP), hierarquia (TG/TE) e associação (TR). Padronizar termos ajuda a reduzir dispersão lexical, mas não garante recuperar todo documento pertinente. Cobertura, indexação, formulação da consulta e atualização afetam o resultado.\n\n**Exemplo resolvido:** uma busca por “proteção de dados” retorna estudos bibliográficos, projetos e leis. Primeiro separe tipos; depois identifique a tramitação e a lei dela resultante; por fim, confira a redação aplicável à data da pergunta. Um assunto comum não torna os documentos juridicamente equivalentes.\n\n**Aplicação e recuperação:** Um registro de biblioteca sobre uma lei e o projeto que a originou são objetos diferentes. Anote identificador, tipo, fonte e versão.",
  teoriaDidaticaMarkdown: "Espécie normativa depende de competência e matéria. PEC não tem sanção; LC exige maioria absoluta; MP tem requisitos, vedações e prazos próprios. Publicação não implica sempre vigência imediata. Sessão conjunta difere da tramitação bicameral. VCB/RVBI, portais de tramitação e LexML têm funções distintas; confirme documento e versão.",
  checkpoints: [
  {
    "id": "cp-10-2-1",
    "pergunta": "Micro-Checkpoint 1: Promulgação de Emendas Constitucionais",
    "item": "Aprovada uma Proposta de Emenda à Constituição (PEC) em dois turnos por três quintos dos membros de cada Casa do Congresso Nacional, o texto segue para o Presidente da República para fins de sanção ou veto.",
    "gabarito": "E",
    "justificativa": "Errado! As Emendas Constitucionais NÃO vão para a sanção do Presidente da República. São promulgadas diretamente pelas Mesas da Câmara dos Deputados e do Senado Federal conjuntamente.",
    "fonte": "Constituição Federal — Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.; Regimento Interno da Câmara — Tramitação, apreciação em comissões e deliberação; complementar à CF.; Senado — RVBI — Rede e instrumentos cooperativos de representação bibliográfica.; Projeto LexML — Documentação de identificação e interoperabilidade jurídica.",
    "versao_correta": "A emenda é promulgada pelas Mesas da Câmara e do Senado, sem sanção ou veto presidencial."
  },
  {
    "id": "cp-10-2-2",
    "pergunta": "Micro-Checkpoint 2: Quórum de Aprovação de Leis Complementares",
    "item": "A aprovação de um Projeto de Lei Complementar (PLP) no plenário da Câmara dos Deputados exige o voto favorável da maioria absoluta dos seus membros.",
    "gabarito": "C",
    "justificativa": "Correto! Conforme o Art. 69 da CF/88, leis complementares são aprovadas por maioria absoluta (257 deputados), diferentemente das leis ordinárias que exigem maioria simples.",
    "fonte": "Constituição Federal — Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.; Regimento Interno da Câmara — Tramitação, apreciação em comissões e deliberação; complementar à CF.; Senado — RVBI — Rede e instrumentos cooperativos de representação bibliográfica.; Projeto LexML — Documentação de identificação e interoperabilidade jurídica."
  },
  {
    "id": "cp-10-2-3",
    "pergunta": "Micro-Checkpoint 3: Sistema Sicon e Vocabulário Controlado do Congresso",
    "item": "Vocabulários controlados utilizados na representação temática de documentos podem empregar relações hierárquicas, associativas e de equivalência para apoiar a indexação e a recuperação.",
    "gabarito": "C",
    "justificativa": "Certo. Relações de tesauro auxiliam a representação, mas não garantem recuperação total. VCB/RVBI não deve ser identificado simplesmente como Sicon nem presumido como o instrumento de todas as bases legislativas.",
    "fonte": "Constituição Federal — Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.; Regimento Interno da Câmara — Tramitação, apreciação em comissões e deliberação; complementar à CF.; Senado — RVBI — Rede e instrumentos cooperativos de representação bibliográfica.; Projeto LexML — Documentação de identificação e interoperabilidade jurídica."
  },
  {
    "id": "rt-10-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma PEC aprovada exige sanção do Presidente da República antes da promulgação.",
    "gabarito": "E",
    "justificativa": "Emenda é promulgada pelas Mesas das Casas, sem sanção ou veto presidencial.",
    "fonte": "Constituição Federal — Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.; Regimento Interno da Câmara — Tramitação, apreciação em comissões e deliberação; complementar à CF.; Senado — RVBI — Rede e instrumentos cooperativos de representação bibliográfica.; Projeto LexML — Documentação de identificação e interoperabilidade jurídica.",
    "editalRef": "Conhecimentos Básicos - Processo Legislativo Constitucional",
    "habilidade": "aplicar",
    "versao_correta": "A emenda segue o art. 60, § 3º, sem sanção presidencial."
  },
  {
    "id": "rt-10-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma lei ordinária pode disciplinar qualquer matéria reservada constitucionalmente a lei complementar, desde que obtenha maioria simples.",
    "gabarito": "E",
    "justificativa": "A reserva material e o quórum constitucional devem ser respeitados.",
    "fonte": "Constituição Federal — Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.; Regimento Interno da Câmara — Tramitação, apreciação em comissões e deliberação; complementar à CF.; Senado — RVBI — Rede e instrumentos cooperativos de representação bibliográfica.; Projeto LexML — Documentação de identificação e interoperabilidade jurídica.",
    "editalRef": "Conhecimentos Básicos - Processo Legislativo Constitucional",
    "habilidade": "aplicar",
    "versao_correta": "Matérias reservadas exigem a espécie e o quórum pertinentes."
  },
  {
    "id": "rt-10-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O prazo de vigência de medida provisória é suspenso durante o recesso do Congresso Nacional.",
    "gabarito": "C",
    "justificativa": "O art. 62, § 4º, prevê essa suspensão; não se devem misturar os diferentes prazos do procedimento.",
    "fonte": "Constituição Federal — Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.; Regimento Interno da Câmara — Tramitação, apreciação em comissões e deliberação; complementar à CF.; Senado — RVBI — Rede e instrumentos cooperativos de representação bibliográfica.; Projeto LexML — Documentação de identificação e interoperabilidade jurídica.",
    "editalRef": "Conhecimentos Básicos - Processo Legislativo Constitucional",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Controle terminológico pode favorecer recuperação, sem garantir exaustividade ou atualidade normativa.",
    "gabarito": "C",
    "justificativa": "Vocabulário não substitui cobertura, indexação, busca e verificação da versão.",
    "fonte": "Constituição Federal — Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.; Regimento Interno da Câmara — Tramitação, apreciação em comissões e deliberação; complementar à CF.; Senado — RVBI — Rede e instrumentos cooperativos de representação bibliográfica.; Projeto LexML — Documentação de identificação e interoperabilidade jurídica.",
    "editalRef": "Conhecimentos Básicos - Processo Legislativo Constitucional",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-2-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A publicação de uma lei implica sempre início imediato de vigência, sem possibilidade de vacatio legis.",
    "gabarito": "E",
    "justificativa": "A própria norma e as regras aplicáveis definem início de vigência. Publicação e vigência são marcos distintos.",
    "fonte": "LINDB, art. 1º; CF/88, processo legislativo.",
    "editalRef": "Conhecimentos Básicos - Processo Legislativo Constitucional",
    "habilidade": "aplicar",
    "versao_correta": "O início de vigência depende da norma e das regras aplicáveis."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-10-2-fonte-cf",
      "nome": "Constituição Federal",
      "ano": "Referência de consulta",
      "obraPrincipal": "Constituição Federal",
      "ideiaChave": "Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-2-fonte-ricd",
      "nome": "Regimento Interno da Câmara",
      "ano": "Referência de consulta",
      "obraPrincipal": "Regimento Interno da Câmara",
      "ideiaChave": "Tramitação, apreciação em comissões e deliberação; complementar à CF.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-2-fonte-rvbi",
      "nome": "Senado — RVBI",
      "ano": "Referência de consulta",
      "obraPrincipal": "Senado — RVBI",
      "ideiaChave": "Rede e instrumentos cooperativos de representação bibliográfica.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-2-fonte-lexml",
      "nome": "Projeto LexML",
      "ano": "Referência de consulta",
      "obraPrincipal": "Projeto LexML",
      "ideiaChave": "Documentação de identificação e interoperabilidade jurídica.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-10-2-3",
      "afirmacao": "O prazo de vigência de medida provisória é suspenso durante o recesso do Congresso Nacional.",
      "gabarito": "C",
      "porQue": "O art. 62, § 4º, prevê essa suspensão; não se devem misturar os diferentes prazos do procedimento."
    },
    {
      "id": "memoria-rt-10-2-4",
      "afirmacao": "Controle terminológico pode favorecer recuperação, sem garantir exaustividade ou atualidade normativa.",
      "gabarito": "C",
      "porQue": "Vocabulário não substitui cobertura, indexação, busca e verificação da versão."
    },
    {
      "id": "memoria-rt-10-2-5",
      "afirmacao": "A publicação de uma lei implica sempre início imediato de vigência, sem possibilidade de vacatio legis.",
      "gabarito": "E",
      "porQue": "A própria norma e as regras aplicáveis definem início de vigência. Publicação e vigência são marcos distintos."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-10-2-bloco-1",
    "titulo": "Teoria Geral do Processo Legislativo Federal",
    "objetivos": [
      "Diferenciar espécies normativas e proposições."
    ],
    "conteudo": "O processo legislativo é o conjunto coordenado e sucessivo de atos e procedimentos solenemente prescritos pela Constituição Federal (Arts. 59 a 69) para a elaboração das normas jurídicas estatais primárias (Silva, 2021; Ferreira Filho, 2020):\n\n```tree\nTITLE: Espécies Normativas no Processo Legislativo (Art. 59 da CF/88)\n- Processo Legislativo Constitucional | Artigo 59 da Constituição Federal de 1988\n  - 1. Emendas à Constituição (PECs) | Art. 60 • Reforma constitucional, quórum de 3/5 em 2 turnos, sem sanção presidencial\n  - 2. Leis Complementares (PLPs) | Art. 69 • Matérias taxativas na CF, aprovadas por maioria absoluta (257 CD / 41 SF)\n  - 3. Leis Ordinárias (PLs) | Arts. 61 a 67 • Campo residual/comum, aprovadas por maioria simples (presente maioria absoluta)\n  - 4. Leis Delegadas | Art. 68 • Elaboradas pelo Presidente da República mediante autorização expressa do Congresso\n  - 5. Medidas Provisórias (MPVs) | Art. 62 • Ato do Presidente com força de lei (urgência e relevância), 60+60 dias\n  - 6. Decretos Legislativos (projetos identificados conforme a Casa, como PDL) | Art. 49 • Competência exclusiva do Congresso Nacional (tratados, contas), sem veto\n  - 7. Resoluções (projetos como PRC na Câmara e PRS no Senado) | Arts. 51 e 52 • Competência privativa da Câmara ou do Senado (regimentos, economia interna)\n```\n\n---\n\n\n\nA espécie normativa resulta da competência e da matéria, não apenas da importância política do tema. PEC é proposta de emenda, não emenda já promulgada; PL e PLP também designam proposições. Resoluções podem ser das Casas ou do Congresso, segundo a competência. A numeração e a identificação documental devem acompanhar essa distinção.\n\n**Aplicação e recuperação:** Um tema politicamente importante não exige lei complementar se não houver reserva constitucional. Identifique a matéria e o fundamento.",
    "checkpointIds": [
      "rt-10-2-1"
    ]
  },
  {
    "id": "sub-10-2-bloco-2",
    "titulo": "Análise Detalhada das Espécies Normativas",
    "objetivos": [
      "Aplicar iniciativa, matéria, quóruns e limites das espécies."
    ],
    "conteudo": "#### A. Emendas à Constituição (PECs - Art. 60 da CF/88)\nAs Emendas Constitucionais são fruto do **Poder Constituinte Derivado Reformador**, submetendo-se a limitações estritas impostas pelo Constituinte Originário:\n* **Limitações Circunstanciais (Art. 60, § 1º):** A Constituição não pode ser emendada na vigência de **intervenção federal**, de **estado de defesa** ou de **estado de sítio**.\n* **Limitações Materiais / Cláusulas Pétreas (Art. 60, § 4º — técnica de distrator recorrente):** Não será objeto de deliberação a proposta de emenda tendente a abolir:\n  1. A forma federativa de Estado;\n  2. O voto direto, secreto, universal e periódico;\n  3. A separação dos Poderes;\n  4. Os direitos e garantias individuais.\n  *(Atenção: o voto obrigatório NÃO é cláusula pétrea; a obrigatoriedade do voto pode ser revogada por PEC, pois o que é pétreo é o voto direto, secreto, universal e periódico!).*\n* **Iniciativa Restrita (Art. 60, incisos I a III):**\n  * A proposta só pode ser apresentada por: 1) no mínimo **1/3 dos membros da Câmara** (171 deputados) ou do Senado (27 senadores); 2) o **Presidente da República**; 3) mais da metade das **Assembleias Legislativas** das unidades da Federação, manifestando-se cada uma pela maioria relativa de seus membros.\n  * *⚠️ Alerta Cebraspe:* A CF não prevê iniciativa popular **direta de PEC federal** no rol do art. 60. Isso não impede participação por outros canais nem autoriza generalizar a conclusão para toda Constituição estadual.\n* **Rito de Votação e Quórum Qualificado:** Aprovada em **dois turnos** de votação em cada Casa do Congresso Nacional, exigindo a aprovação de **três quintos dos votos** dos respectivos membros (308 deputados federais e 49 senadores).\n* **Promulgação e Ausência de Sanção Presidencial:**\n  * Aprovada a PEC nas duas Casas, ela é **promulgada pelas Mesas da Câmara dos Deputados e do Senado Federal conjuntamente**, com o respectivo número de ordem.\n  * **O Presidente da República NÃO sanciona nem veta Emendas Constitucionais!**\n* **Irrepetibilidade Absoluta (Art. 60, § 5º):** A matéria constante de PEC rejeitada ou havida por prejudicada **não pode ser objeto de nova proposta na mesma sessão legislativa** em nenhuma hipótese.\n\n#### B. Leis Complementares (PLPs) vs. Leis Ordinárias (PLs)\n* **Distinção Material:** Leis Complementares só são cabíveis quando a Constituição Federal expressamente exige sua edição (ex.: Art. 14, § 9º - inelegibilidades; Art. 163 - finanças públicas). Matérias residuais e comuns são veiculadas por Lei Ordinária.\n* **Hierarquia (Jurisprudência do STF):** Não há hierarquia ontológica entre Lei Complementar e Lei Ordinária no direito brasileiro; ambas têm a mesma estatura de lei formal primária, distinguindo-se principalmente pelo quórum e pela reserva material constitucional; ambas são aprovadas pelo Congresso no processo federal pertinente.\n* **Quóruns de Aprovação:**\n  * **Lei Complementar (Art. 69):** Exige **maioria absoluta** dos membros de cada Casa (primeiro inteiro superior à metade do total de membros: 257 deputados e 41 senadores).\n  * **Lei Ordinária (Art. 47):** Exige **maioria simples (relativa)** dos votos dos presentes na sessão, desde que esteja presente a maioria absoluta da Casa.",
    "checkpointIds": [
      "cp-10-2-1",
      "cp-10-2-2",
      "rt-10-2-2"
    ]
  },
  {
    "id": "sub-10-2-bloco-5",
    "titulo": "Medidas provisórias, delegação e atos congressuais",
    "objetivos": [
      "Aplicar requisitos, vedações e prazos das espécies normativas."
    ],
    "conteudo": "#### C. Medidas Provisórias (MPVs - Art. 62 da CF/88)\n* Editadas pelo Presidente da República com força de lei em situações comprovadas de **relevância e urgência**.\n* **Vedações materiais — síntese, sem substituir a leitura integral (Art. 62, § 1º):** É expressamente proibida a edição de MPV sobre:\n  * Nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral;\n  * Direito penal, processual penal e processual civil;\n  * Organização do Poder Judiciário e do Ministério Público;\n  * Planos plurianuais (PPA), diretrizes orçamentárias (LDO), orçamento anual (LOA) e créditos adicionais (ressalvada a abertura de créditos extraordinários nas hipóteses constitucionais de despesas imprevisíveis e urgentes, como guerra, comoção interna ou calamidade pública, Art. 167, § 3º);\n  * Matéria reservada com exclusividade a Lei Complementar.\n* **Prazos e Trancamento de Pauta:**\n  * Vigência de **60 dias**, prorrogável automaticamente uma única vez por mais **60 dias** se não ultimada a votação.\n  * Se não for apreciada em até **45 dias** de sua publicação em Diário Oficial, a MPV entra em **regime de urgência e sobresta a pauta** na Casa em que tramita, com o alcance delimitado pela interpretação do STF. Não alcança indistintamente toda proposição, como PECs e matérias vedadas a MP.\n* **Comissão Mista de Deputados e Senadores:** Obrigatória por imposição constitucional (Art. 62, § 9º) para emissão de parecer prévio sobre os pressupostos de relevância e urgência antes da ida ao Plenário da Câmara.\n\n#### D. Decretos Legislativos e Resoluções\n* **Decretos Legislativos (Art. 49):** Atos normativos primários destinados a regular matérias de **competência exclusiva do Congresso Nacional** (ex.: aprovação de tratados internacionais, concessões de rádio e TV, autorização para o Presidente ausentar-se do país por mais de 15 dias, fiscalização das contas da Presidência). São promulgados pelo Presidente do Senado Federal e dispensam sanção do Presidente da República.\n* **Resoluções (Arts. 51 e 52):** Veículos normativos destinados a regular matérias de **competência privativa da Câmara dos Deputados ou do Senado Federal** (ex.: regimes internos, criação de cargos, polícia interna, fixação de alíquotas de tributos pelo Senado). São promulgadas pelo Presidente da Casa correspondente e dispensam sanção executiva.\n\n---\n\n\n\nOs prazos de vigência da MP são suspensos nos recessos do Congresso (art. 62, § 4º); não confundir vigência, prazo de urgência e prazo de conversão. O § 1º também veda MP sobre hipóteses não reproduzidas nesta síntese, incluindo matéria já disciplinada em projeto aprovado e pendente de sanção/veto. A consulta do dispositivo integral é parte da aplicação. **Lei delegada:** depende de delegação do Congresso por resolução com conteúdo e termos; as matérias vedadas e eventual apreciação congressual obedecem ao art. 68.\n\n**Aplicação e recuperação:** PEC aprovada não vai à sanção. MP e lei delegada têm condições e limites próprios; nenhuma é autorização geral para legislar sobre tudo.",
    "checkpointIds": [
      "rt-10-2-3"
    ]
  },
  {
    "id": "sub-10-2-bloco-3",
    "titulo": "As Fases da Tramitação do Processo Legislativo Ordinário",
    "objetivos": [
      "Distinguir trâmite bicameral, sanção, veto, promulgação e vigência."
    ],
    "conteudo": "```timeline\nF1 | 1. Fase de Iniciativa | Deflagração do Processo | Parlamentar (Deputado/Senador/Comissão), Privativa do Presidente (órgãos, Forças Armadas, orçamento) ou Popular (1% eleitorado nacional em pelo menos 5 estados).\n---> Tramitação Parlamentar\nF2 | 2. Fase Constitutiva (Deliberação) | Câmara dos Deputados & Senado | Casa Iniciadora (comissões e Plenário quando exigido, observada apreciação conclusiva e recurso) e Casa Revisora (aprova, rejeita ou emenda com retorno à iniciadora).\n---> Envio ao Poder Executivo\nF3 | 3. Fase Constitutiva Executiva | Sanção ou Veto Presidencial | Prazo de 15 dias úteis: Sanção (expressa ou tácita) ou Veto (total/parcial; político/jurídico). Rejeição de veto por maioria absoluta dos deputados e dos senadores, separadamente.\n---> Convalidação e Eficácia\nF4 | 4. Fase Complementar | Promulgação e Publicação | Promulgação atesta a existência jurídica da lei; publicação permite conhecimento oficial; início de vigência depende da própria norma e das regras de vacatio legis aplicáveis.\n```\n\n* **Iniciativa Popular de Leis (Art. 61, § 2º da CF/88):**\n  * Pode ser exercida pela subscrição de, no mínimo, **1% (um por cento) do eleitorado nacional**, distribuído por pelo menos **cinco Estados**, com não menos de **0,3% (três décimos por cento) dos eleitores de cada um deles**.\n  * É apresentada perante a **Câmara dos Deputados**, que atua sempre como Casa Iniciadora nesses casos.\n* **Veto Presidencial e Sessão Conjunta do Congresso:**\n  * O Presidente dispõe de **15 dias úteis** para manifestar o veto (fundamentado em inconstitucionalidade — veto jurídico, ou em contrariedade ao interesse público — veto político).\n  * O veto deve ser apreciado em **sessão conjunta do Congresso Nacional dentro de 30 dias** do seu recebimento.\n  * Para derrubar o veto e restabelecer o texto da lei, exige-se o voto da **maioria absoluta dos Deputados (257) e dos Senadores (41)** em escrutínio aberto.\n\n---\n\n\n\nNo rito ordinário, a Casa revisora pode aprovar, rejeitar ou emendar, com retorno na hipótese pertinente (art. 65). Tramitação bicameral não é sessão conjunta. Veto parcial deve abranger integralmente artigo, parágrafo, inciso ou alínea, e não palavras isoladas. Rejeitar o veto não dispensa promulgação nas condições do art. 66. Matéria de projeto rejeitado pode reaparecer na mesma sessão legislativa por proposta da maioria absoluta de membros de qualquer Casa (art. 67); a regra difere da irrepetibilidade da PEC rejeitada.\n\n**Aplicação e recuperação:** Uma lei publicada prevê vigência em noventa dias. Publicação não significa necessariamente início imediato dos efeitos de todas as suas disposições.",
    "checkpointIds": [
      "rt-10-2-5"
    ]
  },
  {
    "id": "sub-10-2-bloco-4",
    "titulo": "Informação legislativa e controle terminológico",
    "objetivos": [
      "Pesquisar tipo e versão do documento sem confundir sistemas."
    ],
    "conteudo": "A pesquisa legislativa precisa separar **proposição**, **tramitação**, **norma publicada**, **versão temporal** e **bibliografia**. Um catálogo de biblioteca não substitui a base de tramitação; um repositório com parecer não comprova sozinho a versão vigente de uma lei.\n\n### Sistemas e identificadores\n\nPortais oficiais da Câmara, do Senado e do Congresso oferecem proposições, documentos, votações e acompanhamento. Confira identificadores, origem, mudanças de numeração, apensamentos e correspondência entre Casas. Não se deve ensinar “Sicon = VCB = sistema atual unificado de toda tramitação”, nem atribuir a qualquer ferramenta rastreabilidade integral garantida sem comprovação.\n\nO **LexML** favorece identificação e descoberta de documentos jurídicos de provedores diferentes. Uma URN identifica recurso conforme regras; não garante que qualquer registro contenha o texto integral mais recente. A fonte oficial e a versão temporal continuam necessárias.\n\n### Controle terminológico\n\nO **Vocabulário Controlado Básico (VCB)** está ligado à representação temática na **RVBI**, com coordenação do Senado. Seus termos e relações não se confundem com todos os instrumentos de indexação de proposições e discursos da Câmara. Os instrumentos evoluem; confira o vocabulário e a versão usados pela base consultada.\n\nRelações usuais de um tesauro incluem equivalência (USE/UP), hierarquia (TG/TE) e associação (TR). Padronizar termos ajuda a reduzir dispersão lexical, mas não garante recuperar todo documento pertinente. Cobertura, indexação, formulação da consulta e atualização afetam o resultado.\n\n**Exemplo resolvido:** uma busca por “proteção de dados” retorna estudos bibliográficos, projetos e leis. Primeiro separe tipos; depois identifique a tramitação e a lei dela resultante; por fim, confira a redação aplicável à data da pergunta. Um assunto comum não torna os documentos juridicamente equivalentes.\n\n**Aplicação e recuperação:** Um registro de biblioteca sobre uma lei e o projeto que a originou são objetos diferentes. Anote identificador, tipo, fonte e versão.",
    "checkpointIds": [
      "cp-10-2-3",
      "rt-10-2-4"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cf",
    "titulo": "Constituição Federal",
    "localizador": "Arts. 47, 59–69 e 166; leitura temporal conforme corte do HNC.",
    "url": "https://www4.planalto.gov.br/legislacao/legis-federal/constituicao"
  },
  {
    "id": "ricd",
    "titulo": "Regimento Interno da Câmara",
    "localizador": "Tramitação, apreciação em comissões e deliberação; complementar à CF.",
    "url": "https://www2.camara.leg.br/atividade-legislativa/legislacao/regimento-interno-da-camara-dos-deputados"
  },
  {
    "id": "rvbi",
    "titulo": "Senado — RVBI",
    "localizador": "Rede e instrumentos cooperativos de representação bibliográfica.",
    "url": "https://www12.senado.leg.br/institucional/biblioteca/rvbi/a-rvbi"
  },
  {
    "id": "lexml",
    "titulo": "Projeto LexML",
    "localizador": "Documentação de identificação e interoperabilidade jurídica.",
    "url": "https://projeto.lexml.gov.br/"
  }
],
};
