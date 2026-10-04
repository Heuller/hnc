import type { ModuloFilho } from '../../../domain/types';

export const submodulo114: ModuloFilho = {
  id: 'sub-11-4',
  numero: '11.4',
  titulo: 'Processo Administrativo Federal e Direito Disciplinar (Leis 9.784/99 e 8.112/90)',
  titulo_curto: 'Processo Administrativo e Disciplinar',
  descricaoCurta: 'Princípios do processo administrativo (verdade material, oficialidade, informalismo moderado). Lei nº 9.784/1999: impedimento e suspeição, prazos, delegação/avocação e recursos. Direito disciplinar: sindicância, rito do PAD ordinário e sumário, prescrição e Súmula Vinculante 5 do STF.',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'Lei Geral do Processo Administrativo Federal (Lei nº 9.784/1999)',
    'Regime Jurídico Único (Lei nº 8.112/1990 - Título V)',
    'Maria Sylvia Zanella Di Pietro',
    'Súmula Vinculante 5 do STF',
  ],
  alertasCebraspe: [
    'SÚMULA VINCULANTE 5 DO STF: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição." O servidor pode defender-se pessoalmente ou constituir procurador; a presença de advogado não é condição de validade do PAD.',
    'IMPEDIMENTO VS. SUSPEIÇÃO (LEI Nº 9.784/1999): O impedimento possui natureza objetiva, gerando presunção absoluta de parcialidade (ex.: ter atuado como perito ou testemunha no processo; estar litigando com o interessado). A omissão do dever de comunicar o impedimento constitui falta grave funcional. A suspeição possui natureza subjetiva e presunção relativa (amizade íntima ou inimizade notória).',
    'PRAZOS PRESCRICIONAIS DO DIREITO DISCIPLINAR (ART. 142 DA LEI 8.112/90): 5 anos para infrações puníveis com demissão, cassação de aposentadoria/disponibilidade e destituição de comissão; 2 anos para suspensão; 180 dias para advertência. O termo inicial é a data em que o fato se tornou conhecido da autoridade competente para instaurar o processo, e NÃO a data em que a infração foi consumada!',
    'INTERRUPÇÃO DA PRESCRIÇÃO DISCIPLINAR: A instauração de sindicância punitiva ou de PAD interrompe a prescrição disciplinar. Contudo, essa interrupção perdura por até 140 dias (prazo legal de 60 + 60 dias do PAD + 20 dias para julgamento). Findo o 140º dia sem conclusão, o prazo prescricional recomeça a correr por inteiro.',
  ],
  quadroComparativo: {
    titulo: 'Procedimentos Disciplinares da Lei nº 8.112/1990',
    colunas: ['Critério', 'Sindicância Investigativa', 'Sindicância Punitiva (Acusatória)', 'PAD Ordinário (Rito Geral)', 'PAD Sumário (Rito Especial)'],
    linhas: [
      ['Finalidade', 'Apurar autoria e materialidade de irregularidades desconhecidas', 'Apurar faltas leves/médias com autor já identificado', 'Apurar infrações graves com risco de demissão ou cassação', 'Apurar faltas específicas: abandono de cargo, inassiduidade habitual e acumulação ilegal'],
      ['Penalidades Máximas', 'Nenhuma sanção direta (gera arquivamento ou PAD)', 'Advertência ou Suspensão por até 30 dias', 'Demissão, Cassação, Destituição ou Suspensão de 31 a 90 dias', 'Demissão, Cassação ou Destituição de cargo em comissão'],
      ['Composição da Comissão', 'Comissão ou servidor designado', 'Comissão de 3 servidores estatutários', 'Comissão de 3 servidores estáveis (presidente com nível igual ou superior)', 'Comissão de 2 servidores estáveis'],
      ['Prazo de Conclusão', '30 dias + prorrogação por igual período', '30 dias + prorrogação por igual período', '60 dias + prorrogação por igual período (60 dias)', '30 dias + prorrogação por até 15 dias'],
      ['Contraditório / Ampla Defesa', 'Inexistente (procedimento meramente inquisitório)', 'Obrigatório (contraditório pleno)', 'Obrigatório e substancial (inquérito com fase de defesa formal)', 'Obrigatório (com rito de instrução acelerado)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Princípios Fundamentais do Processo Administrativo Federal (Lei nº 9.784/1999)

A Lei nº 9.784/1999 estabelece as normas básicas sobre o processo administrativo na Administração Pública Federal direta e indireta:

* **Princípio da Oficialidade (Impulso de Ofício):** A Administração pode e deve impulsionar o processo de ofício, sem depender da provocação dos administrados, podendo ordenar a produção de diligências e provas para esclarecer a verdade dos fatos.
* **Princípio da Verdade Material (Verdade Real):** Ao contrário do processo civil tradicional (que se atém à verdade formal constante nos autos), a Administração deve perquirir a verdade material, tendo o dever de acatar documentos e provas idôneas surgidas até a decisão final, ainda que apresentadas intempestivamente.
* **Princípio do Formalismo Moderado (Informalismo):** Exige-se apenas o mínimo de formalidades indispensáveis à segurança jurídica, à certeza das situações e ao exercício pleno do contraditório e da ampla defesa. Formas não essenciais que não causem prejuízo a terceiros são convalidáveis.
* **Gratuidade Processual:** Em regra, os processos administrativos federais não exigem pagamento de taxas ou despesas postais, salvo determinação legal expressa em contrário (art. 2º, parágrafo único, XI).

---

### 2. Impedimento e Suspeição no Processo Administrativo (Arts. 18 a 21)

A autoridade ou servidor público que incorrer em impedimento ou suspeição deve comunicar o fato e abster-se imediatamente de atuar:

#### 2.1 Hipóteses de Impedimento (Critério Objetivo - Nulidade Absoluta)
É **impedido** de atuar no processo administrativo o servidor ou autoridade que:
1. Tenha interesse direto ou indireto na matéria;
2. Tenha participado ou venha a participar como perito, testemunha ou representante, ou se tais situações ocorrerem quanto ao cônjuge, companheiro ou parente até o terceiro grau (consanguíneo ou afim);
3. Esteja litigando judicial ou administrativamente com o interessado ou com o respectivo cônjuge ou companheiro.
* **Alerta Cebraspe:** A omissão do dever de comunicar o impedimento constitui **falta grave funcional** para efeitos disciplinares (art. 19).

#### 2.2 Hipóteses de Suspeição (Critério Subjetivo - Presunção Relativa)
Pode ser arguida a **suspeição** de autoridade ou servidor que tenha **amizade íntima** ou **inimizade notória** com algum dos interessados ou com os respectivos cônjuges, companheiros, parentes e afins até o terceiro grau. O indeferimento da suspeição pelo julgador não admite recurso administrativo isolado com efeito suspensivo.

---

### 3. Competência, Delegação e Avocação

* **Regra Geral:** A competência é irrenunciável e se exerce pelos órgãos administrativos a que foi atribuída como própria.
* **Delegação (Art. 12):** Um órgão administrativo e seu titular podem, se não houver impedimento legal, delegar parte de sua competência a outros órgãos ou titulares, ainda que estes **não lhe sejam hierarquicamente subordinados**, quando for conveniente em razão de circunstâncias técnicas, sociais ou jurídicas.
* **Vedação Absoluta à Delegação (Mnemônico CENORA - Art. 13):**
  1. A edição de atos de caráter **normativo**;
  2. A decisão de **recursos administrativos**;
  3. As matérias de **competência exclusiva** do órgão ou autoridade.
* **Avocação (Art. 15):** É a atração excepcional e temporária de competência do subordinado pelo superior hierárquico, permitida apenas por motivos relevantes devidamente justificados.

---

### 4. Prazos, Decisão e Recursos na Lei nº 9.784/1999

* **Dever de Decidir (Art. 49):** Concluída a instrução processual, a Administração tem o prazo improrrogável de até **30 dias** para emitir a decisão final, prorrogável motivadamente por igual período.
* **Recurso Administrativo (Arts. 56 a 65):**
  * Prazo para interpor recurso: **10 dias**, contados da ciência ou divulgação oficial da decisão.
  * O recurso tramita por no máximo **3 instâncias administrativas**, salvo disposição legal em contrário.
  * **Efeito do Recurso:** Em regra, possui apenas **efeito devolutivo** (a decisão recorrida continua produzindo efeitos). A autoridade pode conceder efeito suspensivo de ofício ou a pedido se houver justo receio de prejuízo de difícil ou incerta reparação.
  * **Vedação à Reformatio in Pejus Surpresa (Art. 64, Parágrafo Único):** O recurso administrativo permite a reforma da decisão para piorar a situação do recorrente (*reformatio in pejus*), MAS a autoridade julgadora é OBRIGADA a intimar previamente o recorrente para que este se manifeste em até 10 dias antes da decisão agravante.

---

### 5. Regime Disciplinar e Procedimentos da Lei nº 8.112/1990

O servidor que cometer ilícito funcional sujeita-se a três sanções principais:
1. **Advertência:** Aplicada por escrito a faltas leves (ex.: ausentar-se do serviço sem autorização, retirar documento ou livro da biblioteca sem prévia anuência). Prescreve em 180 dias; registro cancelado após 3 anos.
2. **Suspensão:** Aplicada em caso de reincidência em faltas punidas com advertência ou faltas médias (máximo de 90 dias). Pode ser convertida em multa de 50% por dia de vencimento, com obrigação de permanecer em serviço. Prescreve em 2 anos; registro cancelado após 5 anos.
3. **Demissão:** Sanção máxima capital aplicada às faltas graves do art. 132 (improbidade administrativa, crime contra a administração pública, abandono de cargo [ausência intencional por mais de 30 dias consecutivos], inassiduidade habitual [falta sem causa justificada por 60 dias interpolados no período de 12 meses], corrupção, aplicação irregular de dinheiros públicos, revelação de segredo conhecido em razão do cargo). Prescreve em 5 anos.

#### Fases do PAD Ordinário (Art. 151 da Lei 8.112/90)
$$\\text{PAD} = \\text{Instauração} \\longrightarrow \\text{Inquérito (Instrução + Defesa + Relatório)} \\longrightarrow \\text{Julgamento}$$

* **Comissão Processante:** Composta por **3 servidores estáveis**, designados pela autoridade instauradora, devendo o presidente ocupar cargo de nível igual ou superior ao do indiciado ou ter escolaridade igual ou superior.
* **Defesa Técnica e Súmula Vinculante 5 do STF:** O indiciado tem o direito de ser pessoalmente citado e intimado para todos os atos, podendo constituir advogado. Contudo, a ausência de advogado não anula o PAD nem viola a ampla defesa constitucional (Súmula Vinculante 5).`,
  checkpoints: [
    {
      id: 'cp-11-4-1',
      pergunta: 'Micro-Checkpoint 1: Delegação de Competências e Limitações Legais',
      item: 'Titular de órgão administrativo federal da Câmara dos Deputados pode delegar legitimamente a um subordinado hierárquico a competência decisória para julgar recurso administrativo interposto contra resultado de pregão eletrônico, desde que tal delegação seja formalmente publicada em veículo oficial.',
      gabarito: 'E',
      justificativa: 'Errado! O julgamento de recursos administrativos é matéria de competência INDELEGÁVEL nos termos expressos do art. 13, inciso II, da Lei nº 9.784/1999 (não se delegam atos normativos, decisões de recursos administrativos nem matérias de competência exclusiva).',
    },
    {
      id: 'cp-11-4-2',
      pergunta: 'Micro-Checkpoint 2: Impedimento Funcional e Dever de Comunicação',
      item: 'O servidor que for designado para compor comissão de processo administrativo disciplinar instaurado contra parente consanguíneo em linha reta de até terceiro grau incorre em impedimento legal, ensejando a omissão do dever de abstenção falta grave para efeitos disciplinares.',
      gabarito: 'C',
      justificativa: 'Correto! Trata-se de hipótese objetiva de impedimento prevista no art. 18, II, da Lei nº 9.784/1999. O art. 19 expressamente comina falta grave disciplinar à autoridade ou servidor que deixar de comunicar o impedimento.',
    },
    {
      id: 'cp-11-4-3',
      pergunta: 'Micro-Checkpoint 3: Prescrição Disciplinar e Termo Inicial',
      item: 'O prazo prescricional para a aplicação da penalidade de demissão a servidor federal prescreve em cinco anos, computando-se o termo inicial a partir da data em que o servidor efetivamente consumou a falta funcional.',
      gabarito: 'E',
      justificativa: 'Errado! Nos termos do art. 142, § 1º, da Lei nº 8.112/1990, o prazo de prescrição começa a correr da data em que o fato se tornou CONHECIDO da autoridade competente para instaurar o processo, e não da data de sua consumação material.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-4-1',
        periodo: '1999',
        disciplina: 'Processo Administrativo',
        focoPrincipal: 'Promulgação da Lei nº 9.784/1999: marco geral da processualística administrativa federal',
        figuraChave: 'Congresso Nacional',
      },
      {
        id: 'tl-11-4-2',
        periodo: '2008',
        disciplina: 'Jurisprudência Vinculante',
        focoPrincipal: 'Edição da Súmula Vinculante 5 do STF: desnecessidade de advogado no PAD',
        figuraChave: 'Supremo Tribunal Federal',
      },
    ],
    autores: [
      {
        id: 'aut-11-4-1',
        nome: 'Maria Sylvia Zanella Di Pietro',
        ano: '2023',
        obraPrincipal: 'Direito Administrativo',
        ideiaChave: 'Teoria da verdade material e distinção entre nulidade do processo por falta de intimação versus regularidade sem defesa técnica.',
        chipPegadinha: 'Afirmar que a falta de intimação prévia do servidor não gera nulidade se não houver advogado constituído.',
      },
      {
        id: 'aut-11-4-2',
        nome: 'José dos Santos Carvalho Filho',
        ano: '2023',
        obraPrincipal: 'Manual de Direito Administrativo',
        ideiaChave: 'A garantia do devido processo legal substantivo no direito disciplinar e a dosimetria proporcional das sanções.',
        chipPegadinha: 'Afirmar que a autoridade julgadora é obrigada a aplicar sempre a penalidade máxima prevista em lei sem motivar a dosimetria.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-4-1',
        afirmacao: 'Em homenagem ao princípio constitucional da ampla defesa, a ausência de advogado devidamente constituído no curso do processo administrativo disciplinar acarreta a nulidade absoluta do procedimento.',
        gabarito: 'E',
        porQue: 'Súmula Vinculante 5 do STF: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição."',
      },
      {
        id: 'peg-11-4-2',
        afirmacao: 'Na Lei nº 9.784/1999, a delegação de competência administrativa exige necessariamente a existência de subordinação hierárquica entre o delegante e o órgão delegado.',
        gabarito: 'E',
        porQue: 'Art. 12 da Lei 9.784/99: pode haver delegação para outros órgãos ou titulares "ainda que estes não lhe sejam hierarquicamente subordinados".',
      },
      {
        id: 'peg-11-4-3',
        afirmacao: 'O recurso administrativo no âmbito federal admite a reforma para pior da situação do recorrente (reformatio in pejus), desde que o interessado seja previamente cientificado para apresentar alegações.',
        gabarito: 'C',
        porQue: 'Art. 64, parágrafo único da Lei nº 9.784/99: permite a reformatio in pejus, exigindo a prévia audiência do recorrente no prazo de 10 dias.',
      },
    ],
  },
};
