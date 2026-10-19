import type { ModuloFilho } from '../../../domain/types';

export const submodulo106: ModuloFilho = {
  id: 'sub-10-6',
  numero: '10.6',
  editalRef: 'Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)',
  preRequisitos: ["sub-10-1","sub-10-5"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-1",
          "titulo": "Regimento Interno da Câmara dos Deputados",
          "motivo": "Mesa do Congresso Nacional e alternância de cargos."
      },
      {
          "submoduloId": "sub-10-5",
          "titulo": "Poder Legislativo na CF/88",
          "motivo": "Deliberação sobre vetos presidenciais e projetos de lei orçamentária."
      }
  ],
  titulo: 'Regimento Comum do Congresso Nacional (RCCN - Resolução nº 1/1970-CN)',
  antesDeLer: [
    {
      termo: 'Regimento Comum do Congresso Nacional (RCCN)',
      definicao: 'Norma regulamentadora das sessões conjuntas da Câmara e do Senado, das comissões mistas e da deliberação sobre matérias orçamentárias e vetos.',
      exemploBiblioteca: 'Catalogação de pareceres emitidos pela Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO).',
    },
    {
      termo: 'Sessão Conjunta',
      definicao: 'Reunião simultânea dos deputados federais e senadores no plenário da Câmara dos Deputados presidida pelo Presidente do Senado Federal.',
      exemploBiblioteca: 'Catalogação das atas e diários do Congresso Nacional relativos à apreciação de vetos presidenciais.',
    },
    {
      termo: 'Comissão Mista de Orçamento (CMO)',
      definicao: 'Colegiado paritário composto por deputados e senadores encarregado de examinar e emitir parecer sobre o PPA, a LDO e a LOA.',
      exemploBiblioteca: 'Atendimento técnico contínuo à Consultoria de Orçamento da Câmara na análise de emendas parlamentares.',
    },
    {
      termo: 'Apreciação de Vetos em Sessão Conjunta',
      definicao: 'Procedimento regimental em que o veto presidencial só é rejeitado pela maioria absoluta de votos de ambas as Casas legislativas.',
      exemploBiblioteca: 'Registro da derrubada de vetos e a subsequente promulgação de trechos legais pelo Presidente do Congresso Nacional.',
    },
  ],
  descricaoCurta:
    'Mesa do Congresso Nacional, alternância institucional de cargos, sessões conjuntas, quóruns de deliberação, apreciação de vetos presidenciais em 30 dias e tramitação de leis e resoluções no Congresso Nacional.',
  tempoEstimadoMinutos: 17,
  autoresChave: [
    'João Trindade Cavalcante Filho',
    'Paulo Modesto',
    'Kildare Gonçalves Carvalho',
    'Uadi Lammêgo Bulos',
    'Manoel Gonçalves Ferreira Filho',
  ],
  alertasCebraspe: [
    'Presidência e Linha Sucessória da Mesa do Congresso Nacional (CF, art. 57, § 5º c/c RCCN, arts. 2º a 5º): A Mesa do Congresso Nacional é presidida pelo Presidente do Senado Federal. Os demais cargos são preenchidos alternadamente entre a Câmara dos Deputados e o Senado Federal: o 1º Vice-Presidente do CN é o 1º Vice-Presidente da Câmara; o 2º Vice-Presidente do CN é o 2º Vice-Presidente do Senado; o 1º Secretário do CN é o 1º Secretário da Câmara; o 2º Secretário do CN é o 2º Secretário do Senado; o 3º Secretário do CN é o 3º Secretário da Câmara; e o 4º Secretário do CN é o 4º Secretário do Senado. Pegadinha vital Cebraspe: Na ausência do Presidente do Senado, quem assume a Presidência do Congresso Nacional é o 1º Vice-Presidente do CN (1º Vice-Presidente da Câmara dos Deputados) e JAMAIS o Presidente da Câmara dos Deputados!',
    'Sessão Conjunta vs. Parlamentos Unicamerais (CF, art. 57, § 3º c/c RCCN, arts. 42 e segs.): As sessões do Congresso Nacional são conjuntas, reunindo-se senadores e deputados no mesmo recinto físico (Plenário Ulysses Guimarães da Câmara dos Deputados). Contudo, o Congresso NUNCA atua de forma unicameral: a deliberação é bicameral simultânea, computando-se os votos de forma estritamente separada em cada Casa. Deputados e senadores votam na mesma sessão, mas os quóruns de aprovação ou rejeição são aferidos isoladamente perante a Câmara e o Senado!',
    'Apreciação de Vetos Presidenciais (CF, art. 66, §§ 4º a 6º c/c RCCN, arts. 104-A e segs.): O veto total ou parcial é apreciado pelo Congresso Nacional em sessão conjunta dentro do prazo improrrogável de 30 (trinta) dias do recebimento. Esgotado esse prazo sem deliberação, o veto sobresta todas as demais deliberações da sessão conjunta do Congresso Nacional (trancamento de pauta exclusiva do CN). A rejeição do veto exige a maioria absoluta de cada uma das Casas (257 deputados e 41 senadores) em votação nominal e aberta (EC nº 76/2013). Se uma das Casas não atingir a maioria absoluta, o veto do Presidente da República é mantido integralmente.',
    'Sessões Preparatórias e Inaugurais do Congresso Nacional (RCCN, arts. 1º a 3º): A sessão legislativa ordinária do Congresso Nacional tem início em 2 de fevereiro e encerramento em 22 de dezembro (com recesso parlamentar de 18 a 31 de julho). No primeiro ano da legislatura, a posse dos parlamentares e a eleição das Mesas das Casas ocorrem nas sessões preparatórias privativas de cada Casa (1º de fevereiro), realizando-se a sessão conjunta inaugural do Congresso Nacional em 2 de fevereiro para a abertura formal dos trabalhos e recebimento da mensagem presidencial.',
    'Projetos de Lei Orçamentária e Matérias de Resolução (CF, art. 166 c/c RCCN, arts. 98 a 103): O Plano Plurianual (PPA), as Diretrizes Orçamentárias (LDO), o Orçamento Anual (LOA) e os créditos adicionais são examinados obrigatoriamente pela Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO), com parecer final deliberado em sessão conjunta do Congresso Nacional.',
  ],
  quadroComparativo: {
    titulo: 'Regime Jurídico Comparado: Sessões Conjuntas do Congresso Nacional vs. Sessões Isoladas das Casas (CD e SF)',
    colunas: [
      'Dimensão Regimental / Constitucional',
      'Sessão Conjunta do Congresso Nacional (RCCN)',
      'Sessões Isoladas da Câmara dos Deputados (RICD)',
      'Pegadinha Clássica Cebraspe',
    ],
    linhas: [
      [
        'Presidência dos Trabalhos',
        'Presidente do Senado Federal (substituído pelo 1º Vice da Câmara / 1º Vice do CN)',
        'Presidente da Câmara dos Deputados (substituído pelos Vice-Presidentes da CD)',
        'Afirmar que na ausência do Presidente do Senado quem assume a sessão conjunta é o Presidente da Câmara (ERRADO: é o 1º Vice da Câmara)',
      ],
      [
        'Local Físico da Sessão',
        'Plenário da Câmara dos Deputados (Plenário Ulysses Guimarães)',
        'Plenário da Câmara dos Deputados',
        'O Senado cede espaço para a Câmara reunir o CN pelo critério de capacidade de assentos (513 deputados + 81 senadores)',
      ],
      [
        'Contagem e Escrutínio dos Votos',
        'Votação separada por Casa: contam-se os votos da CD e do SF isoladamente',
        'Votação única entre os deputados federais presentes',
        'Dizer que a votação em sessão conjunta é unicameral com maioria aritmética simples da soma de deputados e senadores',
      ],
      [
        'Rejeição de Veto Presidencial',
        'Maioria absoluta de ambas as Casas (257 deputados e 41 senadores), votação aberta',
        'Não aprecia veto presidencial de forma isolada',
        'Basta a rejeição em uma das Casas para derrubar o veto (ERRADO: ambas as Casas precisam derrubar por maioria absoluta)',
      ],
      [
        'Efeito do Sobrestamento por Veto',
        'Tranca a pauta deliberativa das Sessões Conjuntas do Congresso Nacional',
        'Não tranca a pauta deliberativa das sessões ordinárias privativas da Câmara',
        'Afirmar que o atraso na apreciação de veto tranca as sessões legislativas ordinárias e votações de leis na Câmara dos Deputados',
      ],
    ],
  },
  teoriaDensaMarkdown: `
# REGIMENTO COMUM DO CONGRESSO NACIONAL (RCCN - RESOLUÇÃO Nº 1/1970-CN)
*Doutrina de Referência: João Trindade Cavalcante Filho, Paulo Modesto, Kildare Gonçalves Carvalho, Uadi Lammêgo Bulos e Manoel Gonçalves Ferreira Filho.*

---

## 1. NATUREZA JURÍDICA DO CONGRESSO NACIONAL E SEDE DOS TRABALHOS (ARTS. 1º A 3º DO RCCN)

O Poder Legislativo da União é exercido pelo **Congresso Nacional**, que se compõe da **Câmara dos Deputados** e do **Senado Federal** (art. 44 da CF/88). Trata-se do **bicameralismo federativo** (ou congressionismo), modelo concebido pela matriz constitucional norte-americana em que coexistem uma Casa de representação popular (a Câmara dos Deputados) e uma Casa de representação dos entes federados estaduais e distrital (o Senado Federal).

O Congresso Nacional, enquanto órgão complexo de cúpula legislativa, possui funcionamento disciplinado primordialmente pela Constituição Federal de 1988 e, no plano infralegal autônomo, pelo **Regimento Comum do Congresso Nacional (RCCN)**, aprovado pela **Resolução nº 1 de 1970-CN**, recepcionado pela ordem constitucional de 1988 com status normativo equiparado aos atos internos autônomos previstos no art. 57, § 3º, IV, da CF/88.

### 1.1 Sede e Instalações dos Trabalhos
Conforme preceituam os arts. 1º e 3º do RCCN:
- O Congresso Nacional tem sua sede no **Palácio do Congresso Nacional**, em Brasília, Capital Federal.
- As **Sessões Conjuntas** do Congresso Nacional realizam-se no recinto da **Câmara dos Deputados** (Plenário Ulysses Guimarães), em virtude da capacidade instalada de acomodação para comportar simultaneamente os 513 Deputados Federais e os 81 Senadores da República.
- Havendo motivo de força maior, devidamente reconhecido pelas Mesas de ambas as Casas, o Congresso Nacional poderá reunir-se em outro local de Brasília ou, provisoriamente, fora da Capital Federal.

---

## 2. A MESA DO CONGRESSO NACIONAL E A REGRA DA ALTERNÂNCIA DOS CARGOS (ARTS. 4º A 11 DO RCCN)

O comando administrativo e procedimental das atividades comuns do Poder Legislativo federal é atribuído à **Mesa do Congresso Nacional**, cuja conformação é expressamente delineada pelo **art. 57, § 5º, da CF/88** e minuciosamente regulamentada pelos arts. 2º a 11 do RCCN.

### 2.1 Composição Constitucional e Regimental
A Mesa do Congresso Nacional é estruturada com base no princípio da **alternância institucional e paridade funcional** entre as duas Casas legislativas. Sua formação fixa é a seguinte:
1. **Presidente do Congresso Nacional:** Exercido privativamente pelo **Presidente do Senado Federal** (CF, art. 57, § 5º);
2. **1º Vice-Presidente do Congresso Nacional:** Exercido pelo **1º Vice-Presidente da Câmara dos Deputados**;
3. **2º Vice-Presidente do Congresso Nacional:** Exercido pelo **2º Vice-Presidente do Senado Federal**;
4. **1º Secretário do Congresso Nacional:** Exercido pelo **1º Secretário da Câmara dos Deputados**;
5. **2º Secretário do Congresso Nacional:** Exercido pelo **2º Secretário do Senado Federal**;
6. **3º Secretário do Congresso Nacional:** Exercido pelo **3º Secretário da Câmara dos Deputados**;
7. **4º Secretário do Congresso Nacional:** Exercido pelo **4º Secretário do Senado Federal**.

> **ALERTA CRÍTICO CEBRASPE (SUBSTITUIÇÃO E SUCESSÃO):**
> O Presidente da Câmara dos Deputados **NÃO INTEGRA A MESA DO CONGRESSO NACIONAL** como membro titular! Essa é uma das mais reiteradas armadilhas elaboradas pelo Cebraspe.
> Consequentemente:
> - Nos impedimentos ou ausências do Presidente do Senado Federal, a Presidência do Congresso Nacional recai sobre o **1º Vice-Presidente do Congresso Nacional**, que é o **1º Vice-Presidente da Câmara dos Deputados**.
> - O Presidente da Câmara dos Deputados apenas é chamado a presidir a sessão conjunta na hipótese excepcionalíssima de esgotamento e ausência de todos os membros titulares da Mesa do Congresso Nacional e dos parlamentares mais idosos que o precederem regimentalmente, mas ele **não figura na linha de sucessão direta** como 1º Vice da Mesa Comum!

### 2.2 Competências da Mesa do Congresso Nacional
Compete privativamente à Mesa do Congresso Nacional (RCCN, art. 11):
- Promulgar as emendas à Constituição aprovadas por ambas as Casas (CF, art. 60, § 3º);
- Dar posse ao Presidente e ao Vice-Presidente da República eleitos (CF, art. 57, § 3º, I);
- Elaborar e expedir o regulamento dos serviços administrativos comuns a ambas as Casas;
- Decidir sobre questões de ordem relativas às sessões conjuntas;
- Administrar e ordenar as despesas comuns executadas no âmbito orçamentário compartilhado.

---

## 3. SESSÕES CONJUNTAS DO CONGRESSO NACIONAL: TIPOLOGIA, CONVOCAÇÃO, QUÓRUNS E ORDEM DOS TRABALHOS (ARTS. 12 A 34 DO RCCN)

As sessões conjuntas do Congresso Nacional materializam a deliberação consorciada das duas Casas legislativas nos casos estrita e taxativamente previstos no texto constitucional.

### 3.1 Hipóteses Constitucionais de Sessão Conjunta (CF, art. 57, § 3º)
O Congresso Nacional reunir-se-á em sessão conjunta privativa para:
1. **Inaugurar a sessão legislativa** (2 de fevereiro), recebendo a mensagem e o plano de governo do Presidente da República;
2. **Elaborar o Regimento Comum** e regular a criação de serviços comuns às duas Casas;
3. **Receber o compromisso e dar posse** ao Presidente e ao Vice-Presidente da República;
4. **Conhecer do veto presidencial e sobre ele deliberar** (art. 66, § 4º);
5. **Apreciar matérias orçamentárias:** Plano Plurianual (PPA), Diretrizes Orçamentárias (LDO), Orçamento Anual (LOA) e créditos adicionais (art. 166);
6. **Apreciar relatórios sobre a execução dos planos de governo**;
7. **Deliberar sobre a delegação legislativa** solicitada pelo Presidente da República para elaboração de leis delegadas (art. 68).

### 3.2 Tipologia das Sessões Conjuntas
Segundo o RCCN (arts. 12 a 16), as sessões conjuntas podem ser:
- **Ordinárias:** Realizadas nos dias e horários regimentais previstos durante o período de funcionamento regular do Congresso Nacional;
- **Extraordinárias:** Convocadas para dias ou horários diversos dos fixados para as ordinárias, destinando-se exclusivamente ao exame da matéria que motivou a convocação especial;
- **Solenes:** Destinadas a comemorações de alta relevância cívica, homenagens oficiais de vulto internacional ou nacional e posse solene de autoridades da República;
- **Secretas:** Convocadas em situações excepcionais de segurança nacional ou mediante deliberação fundamentada de quórum qualificado, correndo os trabalhos com portas fechadas e restrição absoluta de público externo.

### 3.3 Quórum de Abertura e Quórum de Deliberação
Para a abertura e funcionamento regular dos trabalhos de sessão conjunta do Congresso Nacional, exige-se a presença simultânea mínima de:
- **Quórum de Abertura:** Pelo menos **um décimo (1/10)** dos membros de cada uma das Casas (no mínimo 52 deputados e 9 senadores).
- **Quórum Geral de Deliberação:** Maioria simples de votos, presente a maioria absoluta dos membros de cada Casa legislativa (pelo menos 257 deputados federais e 41 senadores presentes no momento do encerramento da votação), SALVO quando a Constituição exigir quórum qualificado específico (como na rejeição de veto, em que se exige maioria absoluta).

> **REGRA DE OURO CEBRASPE (O CONGRESSO NÃO É UNICAMERAL):**
> Em nenhuma hipótese de sessão conjunta o Congresso Nacional atua como corpo unicameral puro. O cômputo dos votos é **sempre bicameral separado**: colhem-se os votos da Câmara dos Deputados e colhem-se os votos do Senado Federal de forma autônoma. Se uma proposta necessita de maioria simples para aprovação, é imperativo que ela obtenha maioria de votos favoráveis tanto entre os Deputados presentes quanto entre os Senadores presentes!

---

## 4. O PROCESSO DE APRECIAÇÃO DE VETOS PRESIDENCIAIS (CF, ART. 66 E RCCN, TÍTULO IV, CAPÍTULO II)

O controle político preventivo de constitucionalidade e o controle de conveniência política do processo legislativo exercido pelo Chefe do Poder Executivo corporificam-se no instituto do **veto**. O veto presidencial é o ato pelo qual o Presidente da República recusa sanção a projeto de lei aprovado pelo Congresso Nacional, por julgá-lo inconstitucional (veto jurídico) ou contrário ao interesse público (veto político).

### 4.1 Características do Veto e Prazos Constitucionais
- **Prazo para o Executivo:** 15 (quinze) dias úteis a contar do recebimento do projeto aprovado (CF, art. 66, § 1º). O silêncio do Presidente da República no prazo de 15 dias úteis importa **sanção tácita**.
- **Indivisibilidade e Proibição de Veto a Palavras Isoladas:** O veto parcial só pode abranger texto integral de artigo, parágrafo, inciso ou alínea (CF, art. 66, § 2º). É formalmente vedado ao Presidente vetar palavras ou expressões isoladas que alterem o sentido legislativo da norma.
- **Comunicação dos Motivos:** No prazo de **48 horas**, o Presidente da República comunicará ao Presidente do Senado Federal os motivos determinantes do veto.

### 4.2 Tramitação e Deliberação no Congresso Nacional
Conforme o art. 66, § 4º, da CF/88 c/c art. 104-A do RCCN:
1. **Prazo de Apreciação:** O veto será apreciado em sessão conjunta do Congresso Nacional dentro do prazo improrrogável de **30 (trinta) dias** a contar de seu recebimento formal;
2. **Efeito do Transcurso In Albis (Sobrestamento):** Se o veto não for deliberado pelo Congresso no prazo de 30 dias, será incluído com prioridade máxima na ordem do dia da sessão conjunta, **sobrestando as demais proposições até sua votação final**;
   - *Nota Importante:* O sobrestamento restringe-se às matérias a serem apreciadas em **Sessão Conjunta do Congresso Nacional**. Ele **NÃO** tranca a pauta deliberativa das sessões ordinárias privativas da Câmara dos Deputados nem do Senado Federal!
3. **Quórum Qualificado de Rejeição (Derrubada do Veto):** O veto só pode ser rejeitado pelo voto da **MAIORIA ABSOLUTA dos Deputados Federais (257 votos)** E da **MAIORIA ABSOLUTA dos Senadores da República (41 votos)**;
4. **Modalidade de Votação (Votação Aberta):** Desde a promulgação da **Emenda Constitucional nº 76/2013**, a votação de apreciação do veto presidencial é **ABERTA e NOMINAL** (revogou-se expressamente o escrutínio secreto).

### 4.3 Efeitos da Rejeição do Veto e Promulgação
- Se o veto for **REJEITADO** por ambas as Casas, as disposições rejeitadas serão enviadas ao Presidente da República para **promulgação no prazo de 48 horas**.
- Se o Presidente da República não promulgar a lei no prazo de 48 horas, o **Presidente do Senado Federal a promulgará**, e, se este não o fizer em igual prazo (48h), caberá ao **1º Vice-Presidente do Congresso Nacional (1º Vice da Câmara dos Deputados)** fazê-lo compulsoriamente (CF, art. 66, § 7º).
- Se o veto for **MANTIDO** por qualquer uma das duas Casas (isto é, se a Câmara mantiver ou se o Senado mantiver o veto, ou não se alcançar a maioria absoluta em qualquer uma delas), a matéria vetada é arquivada em definitivo.

---

## 5. PROJETOS DE LEI E RESOLUÇÕES NO CONGRESSO NACIONAL: COMPETÊNCIAS E TRAMITAÇÃO ORÇAMENTÁRIA E LEGISLATIVA (RCCN, TÍTULO IV, CAPÍTULO III, ARTS. 98 A 103)

As competências normativas exclusivas do Congresso Nacional que prescindem de sanção presidencial concretizam-se mediante **Decretos Legislativos** (art. 49 da CF/88). Por sua vez, a regulação de matérias de competência comum de ambas as Casas sem eficácia externa realiza-se por meio de **Resoluções do Congresso Nacional** (art. 51, 52 e 59, VII da CF/88).

### 5.1 Tramitação das Matérias Orçamentárias (CF, art. 166 c/c RCCN, arts. 98 a 103)
O processo legislativo orçamentário federal ocorre no âmbito compartilhado do Congresso Nacional:
- Os projetos de lei relativos ao Plano Plurianual (PPA), às Diretrizes Orçamentárias (LDO), ao Orçamento Anual (LOA) e aos créditos adicionais são enviados pelo Presidente da República ao Congresso Nacional.
- São distribuídos imediatamente à **Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO)**, composta por parlamentares de ambas as Casas na proporção das respectivas bancadas.
- Compete à CMO emitir parecer sobre os projetos de leis orçamentárias e examinar as contas apresentadas anualmente pelo Presidente da República antes da apreciação pelo Plenário comum.
- A aprovação das matérias orçamentárias submete-se à deliberação plenária em **Sessão Conjunta do Congresso Nacional**, com quórum de maioria simples presente a maioria absoluta de cada Casa legislativa.

### 5.2 Resoluções do Congresso Nacional e Comissões Mistas
- As Comissões Mistas do Congresso Nacional podem ser permanentes (como a CMO) ou temporárias (comissões especiais para exame de vetos, medidas provisórias ou representações de fiscalização).
- Os projetos de resolução do Congresso Nacional iniciam sua tramitação na Casa do primeiro signatário ou na comissão mista competente, cumprindo prazos e ritos preconizados nos arts. 98 a 103 do RCCN para leitura, apresentação de emendas de senadores e deputados, parecer unificado e votação final em sessão conjunta.


---

### 🔗 Veja Também (Articulação Intermódulos)
* **Regimento Interno da Câmara dos Deputados (sub-10-1):** Mesa do Congresso Nacional e alternância de cargos.
* **Poder Legislativo na CF/88 (sub-10-5):** Deliberação sobre vetos presidenciais e projetos de lei orçamentária.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Fiscalização e Controle, o Orçamento Público e o Ciclo Orçamentário (CF/88, arts. 70 a 75 e 165 a 169)** concretizam o controle democrático dos recursos da sociedade:
1. **O Sistema Tripartite de Leis Orçamentárias (Iniciativa Privativa do Presidente da República):**
   - **Plano Plurianual (PPA):** Planejamento estratégico de médio prazo (vigência de 4 anos, iniciando no 2º ano de mandato do Presidente e terminando no 1º ano do mandato subsequente). Estabelece diretrizes, objetivos e metas para despesas de capital e programas continuados.
   - **Lei de Diretrizes Orçamentárias (LDO):** Anual. Conecta o PPA à LOA; define metas e prioridades da administração, orienta a elaboração da LOA e dispõe sobre alterações tributárias e política de pessoal. **A sessão legislativa não pode ser interrompida em julho sem a aprovação da LDO!**
   - **Lei Orçamentária Anual (LOA):** Anual. Orçamento fiscal, de seguridade social e de investimentos das estatais. Fixa despesas e prevê receitas.
2. **A Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO):**
   - Comissão mista permanente do Congresso Nacional (deputados e senadores) responsável por examinar e emitir parecer sobre o PPA, LDO, LOA, créditos adicionais e contas do Presidente.
3. **O Controle Externo e o Tribunal de Contas da União (TCU - CF art. 70 e 71):**
   - O controle externo é exercido pelo **Congresso Nacional com o auxílio do TCU**.
   - **Julgamento de Contas:**
     - O TCU **julga** as contas dos administradores públicos e demais responsáveis por dinheiros, bens e valores públicos federais (com eficácia de título executivo condenatório).
     - As contas do **Presidente da República**, todavia, o TCU **NÃO julga**: o TCU emite apenas um **Parecer Prévio**, cabendo o julgamento político-financeiro exclusivamente ao **Congresso Nacional**!

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Tramitação Orçamentária na CMO):** Em outubro, a equipe de apoio da Consultoria de Orçamento da Câmara recebe o projeto da LOA do ano seguinte. Os bibliotecários catalogam as emendas parlamentares individuais e de bancada, indexando os programas de saúde e educação para que os relatores setoriais elaborem o relatório geral.
- **Cenário 2 (Parecer Prévio do TCU sobre as Contas Presidenciais):** O TCU conclui a análise das contas do Presidente da República e emite Parecer Prévio recomendando a aprovação com ressalvas. O bibliotecário registra o documento e o encaminha à Comissão Mista de Orçamento (CMO), que emitirá projeto de decreto legislativo para julgamento final pelos 513 deputados e 81 senadores reunidos em sessão conjunta.
- **Cenário 3 (A Regra de Ouro Orçamentária no CEDI):** Ao planejar a contratação de modernização do parque tecnológico do CEDI, os gestores da Câmara observam os limites de despesa de capital e a Lei de Responsabilidade Fiscal (LRF), garantindo que as operações de crédito não superem as despesas de capital (Regra de Ouro - art. 167, III da CF).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Instrumento Orçamentário / Julgamento | Prazo / Vigência | Iniciativa Constitucional | Papel do TCU vs. Congresso |
| :--- | :--- | :--- | :--- |
| **PPA** | 4 anos (ultrapassa mandato) | Presidente da República | Parecer na CMO $\to$ Aprovado no CN |
| **LDO** | Anual (sintoniza PPA e LOA) | Presidente da República | Impede recesso parlamentar de julho se não aprovada |
| **LOA** | Anual (Orçamento formal) | Presidente da República | Fixa despesas e estima receitas públicas |
| **Contas de Administradores** | Anuais | Contas de gestão | **O TCU julga diretamente** |
| **Contas do Presidente** | Anuais | Contas de governo | **O TCU emite parecer; o Congresso julga** |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Quem Julga as Contas do Presidente da República:** O Cebraspe adora afirmar que o TCU julga as contas prestadas anualmente pelo Presidente da República. **Gabarito: ERRADO.** O TCU elabora apenas um **Parecer Prévio conclusivo** em 60 dias; quem **julga** as contas do Presidente da República é o **Congresso Nacional** (CF art. 49, IX e art. 71, I).
- **Recesso Parlamentar e a LDO:** Dizer que o Congresso Nacional entra em recesso em 17 de julho mesmo sem votar a LDO. **Gabarito: ERRADO.** O art. 57, § 2º da CF veda expressamente a interrupção da sessão legislativa sem a aprovação do projeto de LDO.
- **Iniciativa das Leis Orçamentárias:** Afirmar que deputados federais podem propor projeto de lei de iniciativa parlamentar original para criar o PPA. **Gabarito: ERRADO.** PPA, LDO e LOA são de iniciativa privativa do **Presidente da República**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Constituição da República Federativa do Brasil de 1988*. arts. 70 a 75 e 165 a 169.
- **BRASIL.** *Lei Complementar nº 101, de 4 de maio de 2000*. Estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal (Lei de Responsabilidade Fiscal - LRF).
- **PISCITELLI, Roberto Bocaccio; TIMM, Paulo Roberto.** *Contabilidade Pública: uma abordagem da administração financeira pública*. 14. ed. São Paulo: Atlas, 2018.
- **GIACOMONI, James.** *Orçamento público*. 18. ed. São Paulo: Atlas, 2021.
- **TRIBUNAL DE CONTAS DA UNIÃO (TCU).** *Regimento Interno do Tribunal de Contas da União*. Brasília: TCU, 2022.`,
  checkpoints: [
    {
      id: 'cp-10-6-1',
      pergunta: 'Micro-Checkpoint 1: Presidência e Sucessão da Mesa do Congresso Nacional',
      item: 'A Mesa do Congresso Nacional é presidida pelo Presidente do Senado Federal. Em caso de ausência ou impedimento temporário do Presidente do Senado durante a realização de uma sessão conjunta do Congresso Nacional, a presidência dos trabalhos é transferida imediatamente para o Presidente da Câmara dos Deputados, em obediência ao bicameralismo federativo.',
      gabarito: 'E',
      justificativa:
        'Errado! Conforme o art. 57, § 5º da CF/88 e arts. 2º e 4º do RCCN, a Mesa do Congresso Nacional é presidida pelo Presidente do Senado Federal, mas os demais cargos alternam-se entre a Câmara e o Senado. O 1º Vice-Presidente da Mesa do Congresso Nacional é o 1º Vice-Presidente da Câmara dos Deputados, e é a este que cabe substituir o Presidente do Senado na condução das sessões conjuntas. O Presidente da Câmara dos Deputados NÃO é membro nato nem 1º Vice da Mesa do Congresso Nacional, não figurando na linha direta de substituição imediata da presidência da sessão conjunta.',
    },
    {
      id: 'cp-10-6-2',
      pergunta: 'Micro-Checkpoint 2: Quórum de Deliberação em Sessão Conjunta e Vetos',
      item: 'Nas sessões conjuntas do Congresso Nacional convocadas para a apreciação de veto presidencial, os Deputados Federais e Senadores reúnem-se no mesmo recinto físico, ocorrendo a rejeição do veto caso se atinja a maioria absoluta da soma total dos parlamentares presentes à sessão deliberativa.',
      gabarito: 'E',
      justificativa:
        'Errado! Segundo o art. 66, § 4º da CF/88 e disposições do RCCN, o Congresso Nacional delibera em sessão conjunta, mas NUNCA de forma unicameral congregada. Os votos dos Deputados Federais e dos Senadores da República são computados de maneira estritamente SEPARADA. Para a rejeição do veto, é imprescindível alcançar cumulativamente a maioria absoluta dos votos da Câmara dos Deputados (257 deputados) E a maioria absoluta dos votos do Senado Federal (41 senadores). Não existe soma indistinta ou pool unificado de votos entre as duas Casas legislativas.',
    },
    {
      id: 'cp-10-6-3',
      pergunta: 'Micro-Checkpoint 3: Prazo e Efeitos do Sobrestamento por Veto Presidencial',
      item: 'Transcorrido in albis o prazo de trinta dias a contar do recebimento formal do veto presidencial pelo Congresso Nacional sem que haja ocorrido deliberação em sessão conjunta, o veto será colocado na ordem do dia da sessão conjunta imediata, sobrestando as demais proposições no âmbito do Congresso Nacional, sem paralisar, contudo, a pauta de votações legislativas ordinárias das sessões isoladas da Câmara dos Deputados.',
      gabarito: 'C',
      justificativa:
        'Correto! O art. 66, § 6º da CF/88 dispõe que, esgotado sem deliberação o prazo de trinta dias, o veto será colocado na ordem do dia da sessão imediata do Congresso Nacional, sobrestadas as demais proposições, até sua votação final. A doutrina constitucionalista unânime (Michel Temer, Uadi Lammêgo Bulos, João Trindade) e a prática parlamentar consolidada pacificaram que o sobrestamento atinge exclusivamente as deliberações das Sessões Conjuntas do Congresso Nacional (pauta do CN), não tendo o condão de paralisar as deliberações legislativas ordinárias e isoladas das sessões privativas da Câmara dos Deputados ou do Senado Federal.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-6-1',
        periodo: '1970 (Resolução nº 1/1970-CN)',
        disciplina: 'Regimento Comum do Congresso Nacional',
        focoPrincipal: 'Promulgação do RCCN regulamentando a Mesa Comum, comissões mistas e sessões conjuntas',
        figuraChave: 'Congresso Nacional',
      },
      {
        id: 'tl-10-6-2',
        periodo: '1988 (CF/88, Art. 57)',
        disciplina: 'Bicameralismo Federativo',
        focoPrincipal: 'Recepção do RCCN pela ordem constitucional democrática e fixação das hipóteses de sessão conjunta',
        figuraChave: 'Assembleia Nacional Constituinte',
      },
      {
        id: 'tl-10-6-3',
        periodo: '2013 (EC nº 76)',
        disciplina: 'Voto Aberto em Vetos',
        focoPrincipal: 'Fim do escrutínio secreto para deliberação sobre vetos presidenciais em sessão conjunta',
        figuraChave: 'Emenda Constitucional nº 76/2013',
      },
    ],
    autores: [
      {
        id: 'aut-10-6-1',
        nome: 'João Trindade Cavalcante Filho',
        ano: 2022,
        obraPrincipal: 'Processo Legislativo Constitucional',
        ideiaChave: 'A sessão conjunta do Congresso Nacional opera em bicameralismo simultâneo, mantendo contagem de votos estritamente separada.',
        chipPegadinha: 'O Congresso Nacional nunca delibera como parlamento unicameral congregado.',
      },
      {
        id: 'aut-10-6-2',
        nome: 'Paulo Modesto',
        ano: 2020,
        obraPrincipal: 'Direito Parlamentar e Processo Legislativo',
        ideiaChave: 'A alternância da Mesa do CN impede que o Presidente da Câmara substitua diretamente o Presidente do Senado na chefia do Congresso.',
        chipPegadinha: 'Quem substitui o Presidente do CN é o 1º Vice da Câmara (1º Vice do CN), não o Presidente da Câmara.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-6-1',
        afirmacao: 'Na ausência do Presidente do Senado Federal, a presidência da sessão conjunta do Congresso Nacional é exercida pelo Presidente da Câmara dos Deputados.',
        gabarito: 'E',
        porQue: 'Pegadinha fatal do Cebraspe! A Mesa do CN tem como 1º Vice-Presidente o 1º Vice-Presidente da Câmara dos Deputados, e é a este que cabe substituir o Presidente do Senado na presidência do Congresso Nacional. O Presidente da Câmara não é membro titular da Mesa do CN.',
      },
      {
        id: 'peg-10-6-2',
        afirmacao: 'O sobrestamento da pauta decorrente do transcurso do prazo de 30 dias para apreciação de veto presidencial tranca as votações de projetos de lei em tramitação ordinária na Câmara dos Deputados.',
        gabarito: 'E',
        porQue: 'O trancamento decorrente do veto presidencial afeta exclusivamente a pauta deliberativa das Sessões Conjuntas do Congresso Nacional, sem paralisar as deliberações das sessões ordinárias privativas da Câmara dos Deputados ou do Senado Federal.',
      },
    ],
  },
};
