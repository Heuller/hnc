import type { ModuloFilho } from '../../../domain/types';

export const submodulo74: ModuloFilho = {
  id: 'sub-7-4',
  numero: '7.4',
  titulo: 'Intervenções Curativas, Restauração e Planos de Contingência contra Desastres',
  descricaoCurta: 'Princípios éticos da restauração (Brandi: reversibilidade, mínima intervenção e distinguibilidade), testes de solubilidade de tintas, desacidificação, remendos com papel japonês, leafcasting, encadernação de conservação e protocolos de emergência e congelamento em sinistros.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Cesare Brandi', 'Paul Philippot', 'Antônio Celso Ramos Spinelli', 'Norma Cassares', 'Stefan Michalski', 'Robert Waller'],
  alertasCebraspe: [
    'O princípio supremo e inegociável da restauração moderna de documentos gráficos é a REVERSIBILIDADE: qualquer tratamento, adesivo ou reforço aplicado ao documento histórico deve poder ser desfeito a qualquer tempo no futuro sem causar o menor dano ao suporte original.',
    'Princípio da Mínima Intervenção: o restaurador deve intervir apenas o estritamente necessário para garantir a estabilidade física e a legibilidade do texto, sem tentar "embelezar" o documento, criar falsificações históricas (pastiche) ou apagar os traços genuínos de sua história material.',
    'Princípio da Distinguibilidade (Discernibilidade): a intervenção de restauração deve integrar-se harmoniosamente ao conjunto visual, mas deve ser claramente discernível sob o exame técnico atento de especialistas, evitando enganar o observador.',
    'Testes de solubilidade de tintas: antes de qualquer banho de lavagem ou desacidificação aquosa, é OBRIGATÓRIO testar a solubilidade de cada tinta, carimbo ou manuscrito presente na folha com microgotas de água e solventes sob lupa estereoscópica.',
    'Adesivos e papéis de restauração: utilizam-se exclusivamente colas reversíveis à base de amido de trigo purificado ou metilcelulose e reforços de PAPEL JAPONÊS (fibras longas de Kozo/Gampi, pH neutro e alta translucidez). Colas sintéticas irreversíveis (cianoacrilato, PVA escolar e fita adesiva) são terminantemente vedadas.',
    'Sinistros de Alagamento e Inundação: livros encharcados sofrem eclosão massiva de fungos em 48 a 72 horas. A medida técnica emergencial padrão para paralisar o ataque biológico e estabilizar o suporte até a secagem controlada ou liofilização é o CONGELAMENTO RÁPIDO imediato a temperaturas inferiores a -18 °C.',
  ],
  quadroComparativo: {
    titulo: 'Os Quatro Princípios Éticos Fundamentais da Restauração de Documentos Gráficos',
    colunas: ['Princípio Ético', 'Definição e Exigência Teórica', 'Aplicação Prática no Laboratório', 'Erro Frequente em Concursos / Prática Condenada'],
    linhas: [
      ['Reversibilidade', 'Todo material ou adesivo empregado na restauração deve ser passível de remoção futura sem prejuízo ao original', 'Uso estrito de colas solúveis em água (amido de trigo purificado ou metilcelulose) e papéis japoneses finos', 'Emprego de colas sintéticas insolúveis (resinas epóxi, superbonder/cianoacrilato ou cola plástica PVA industrial).'],
      ['Mínima Intervenção', 'Intervir apenas onde houver risco iminente de perda de matéria ou perda de legibilidade estrutural', 'Não preencher margens sadias; limitar o enxerto às áreas com perda de suporte (lacunas e furos de broca)', 'Tentar fazer o livro parecer "novo de fábrica" através de refilamento de margens ou lixamento de cortes.'],
      ['Distinguibilidade', 'A intervenção restauradora deve ser harmoniosa, mas identificável sob olhar técnico atento', 'O papel japonês do remendo possui textura levemente distinta da folha original sob ampliação', 'Falsificar tipografia de época com caneta moderna ou tentar camuflar totalmente a intervenção enganando o leitor.'],
      ['Autenticidade Histórica', 'Respeito absoluto à passagem do tempo e aos testemunhos materiais e culturais da obra', 'Preservação de anotações marginais de posse, carimbos históricos e encadernações primitivas', 'Remover anotações de época de parlamentares ou autores por considerá-las "rabiscos indesejados".'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Teoria da Restauração e a Ética Internacional

A restauração de bens culturais e documentos históricos apoia-se nos pilares conceituais formulados por **Cesare Brandi** (*Teoria da Restauração*, 1963) e nas convenções internacionais do patrimônio (Carta de Veneza de 1964 e Carta do Restauro):

> *"A restauração constitui o momento metodológico de reconhecimento da obra de arte ou documento histórico na sua consistência física e na sua dupla polaridade estética e histórica, com vistas à sua transmissão para o futuro."* — Cesare Brandi

\`\`\`mermaid
graph TD
    A[Princípios Éticos da Restauração - Cesare Brandi] --> B[1. Reversibilidade Plena]
    A --> C[2. Mínima Intervenção]
    A --> D[3. Distinguibilidade / Discernibilidade]
    A --> E[4. Compatibilidade Físico-Química]
    A --> F[5. Respeito à Autenticidade Histórica]
    B --> B1[Adesivos de amido/metilcelulose solúveis em água]
    C --> C1[Intervir apenas onde há risco de perda de suporte]
    D --> D1[Reparo harmonioso, mas sem criar falso histórico]
    E --> E1[Papel japonês kozo compatível com fibras celulósicas]
\`\`\`

#### Os Princípios Deontológicos Inegociáveis:
1. **Reversibilidade:**  
   Todo procedimento químico, reforço mecânico ou adesivo aplicado ao documento deve poder ser desfeito a qualquer momento pelas gerações futuras sem agredir ou arrancar fibras do suporte original.
2. **Mínima Intervenção:**  
   Não se restaura para conferir ao livro aspecto de novidade estética. O foco restringe-se a estabilizar a matéria degradada, restituir a solidez estrutural e devolver a legibilidade textual.
3. **Distinguibilidade (Discernibilidade da Intervenção):**  
   O restauro não pode se constituir em falsificação histórica (*falso histórico* ou *pastiche*). Sob exame aproximado de uma lupa, o especialista deve conseguir distinguir com facilidade a matéria histórica original da intervenção restauradora contemporânea.
4. **Compatibilidade dos Materiais:**  
   Os materiais introduzidos devem possuir características mecânicas e químicas harmoniosas com o documento antigo (não podem ser mais rígidos, mais ácidos ou mais pesados que a folha original).
5. **Respeito à Autenticidade Histórica:**  
   Marcas de proveniência histórica, ex-líbris, carimbos de gabinetes parlamentares antigos e anotações marginais de estadistas são partes integrantes do valor documental da obra e jamais devem ser removidos ou apagados.

---

### 2. O Processo Laboratorial de Restauração em Papel

O fluxo técnico de tratamento em laboratórios de conservação e restauração de obras raras segue etapas científicas sequenciais (Spinelli, 2003; Beck, 1995; Cassares, 2000):

#### A. Diagnóstico e Registro Fotográfico
* Exame organoléptico preliminar, verificação do pH superficial por fitas medidoras de pH ou peagômetro digital de contato, mapeamento de danos e abertura da **Ficha Técnica de Diagnóstico e Tratamento**, acompanhada de registro fotográfico antes, durante e após a intervenção.

#### B. Testes Obrigatórios de Solubilidade das Tintas
* **Procedimento Crítico de Segurança:** Antes de qualquer contato do documento com água ou solventes líquidos, aplica-se uma microgota de água destilada e solventes orgânicos sobre manuscritos, assinaturas, tintas de impressão e carimbos sob lupa estereoscópica, absorvendo com papel de filtro.
* Se a tinta soltar pigmento ou sangrar no papel absorvente, o banho aquoso é expressamente proibido, exigindo fixação prévia temporária com resinas reversíveis (ex.: ciclododecano ou Paraloid B-72).

#### C. Higienização e Desacidificação
* **Banho de Lavagem Aquosa:** Realizado em cubas de aço inoxidável com água desionizada para remoção de produtos solúveis da degradação ácida.
* **Desacidificação e Neutralização:** Aplicação de soluções alcalinas contendo **hidróxido de cálcio [$Ca(OH)_2$], bicarbonato de cálcio [$Ca(HCO_3)_2$] ou bicarbonato de magnésio**. O tratamento eleva o pH para a faixa neutra (7,0 a 7,5) e precipita uma **reserva alcalina protetora de carbonato de cálcio ($CaCO_3$)**, que neutralizará a acidez futura.

#### D. Remendos, Enxertos e Papel Japonês
* **O Papel Japonês (*Washi*):** Confeccionado artesanalmente no Japão a partir das fibras de entrecasca de arbustos nobres: **Kozo** (amoreira-de-papel, de fibras extra-longas e resistentes), **Mitsumata** e **Gampi**. Possui pH neutro, alta flexibilidade, espessura ultrafina (gramaturas de 5 a 20 g/m²) e transparência quase ótica.
* **Adesivos Reversíveis Aprovados:**
  * *Cola de Amido de Trigo Purificado (*Wheat Starch Paste*):* Excelente adesividade mecânica, pH neutro e solubilidade total em água.
  * *Metilcelulose / Carboximetilcelulose (CMC):* Éteres sintéticos de celulose, quimicamente inertes, imunes a ataques de fungos e traças (não possuem nutrientes orgânicos atrativos) e facilmente reversíveis em água fria.
* **Reintegração Mecânica de Suporte (*Leafcasting*):**
  * Para folhas crivadas por centenas de furos de brocas ou com bordas esfaceladas, utiliza-se a máquina de obturação de folhas (*leafcaster*). A folha é disposta sobre uma tela e uma suspensão aquosa de polpa pura de algodão é succionada a vácuo, preenchendo automaticamente com novas fibras apenas as lacunas e furos vazios, sem recobrir nenhuma área com texto.

---

### 3. Encadernação de Conservação

Diferencia-se da encadernação comercial ou artesanal estética comum por priorizar a integridade mecânica permanente da obra:
* **Preservação de Margens Históricas:** É estritamente **proibido guilhotinar, aparar ou refilar os cortes das folhas**. Todas as barbas de papel, cortes irregulares históricos e marcas d'água originais devem ser mantidos intactos.
* **Costura Flexível:** Emprego de fio de linho cru não alvejado costurado manualmente sobre suportes flexíveis (cadarços de linho ou tiras de pergaminho vegetal).
* **Abertura em 180°:** A estrutura permite que o livro se abra em ângulo plano de 180 graus de forma confortável e estável, sem estresse mecânico na lombada e sem quebrar as páginas na canaleta central.

---

### 4. Gestão de Riscos e Planos de Salvaguarda contra Desastres (Michalski, Waller, Conarq)

A preservação preventiva contemporânea adota o método de gerenciamento de riscos patrimoniais desenvolvido pelo *Canadian Conservation Institute* (CCI) e pelo ICCROM (**Stefan Michalski e Robert Waller**), que identifica os **10 Agentes Universais de Deterioração**:
1. Forças Físicas Diretas (impactos, terremotos, manuseio incorreto);
2. Criminosos (furto, roubo, vandalismo);
3. Fogo / Incêndio;
4. Água / Inundações e vazamentos prediais;
5. Pragas Biológicas (insetos, roedores, mofo);
6. Poluentes Atmosféricos;
7. Luz e Radiação UV;
8. Temperatura Inadequada (calor excessivo);
9. Umidade Relativa Inadequada (seca ou umidade excessiva);
10. Dissociação (perda de proveniência, extravio de registros catalográficos e desorganização).

#### Protocolo Emergencial em Caso de Inundação / Grandes Alagamentos:
* **A Janela Crítica das 48 Horas:** Livros e papéis encharcados de água iniciam a proliferação explosiva e incontrolável de fungos filamentosos dentro de **48 a 72 horas**.
* **Medida Técnica Padrão-Ouro de Salvamento:**
  * O acervo alagado deve ser imediatamente embalado em papel manteiga/siliconado e submetido ao **CONGELAMENTO RÁPIDO a temperaturas inferiores a $-18$ °C a $-20$ °C**.
  * O congelamento solidifica a água e **paralisa de forma imediata o crescimento biológico de mofo e a hidrólise**, conferindo à equipe técnica dias, semanas ou meses para planejar a secagem sem perda das coleções.
  * *Técnicas de Secagem Subsequentes:*
    * **Liofilização (*Freeze-Drying* / Sublimação):** Os livros congelados são colocados em câmara de vácuo onde a água congelada passa diretamente do estado sólido para o gasoso (sublimação), secando os livros sem deformar as folhas nem colar as páginas entre si.
    * **Secagem Manual Controlada:** Livros com pouca umidade são postos em pé em leque (*fan-out*) em ambiente com desumidificadores e ventiladores forçados indiretos, intercalando folhas de papel absorvente mata-borrão neutro a cada poucas páginas.`,
  checkpoints: [
    {
      id: 'cp-7-4-1',
      pergunta: 'Micro-Checkpoint 1: Princípio da Reversibilidade',
      item: 'No âmbito da restauração de documentos gráficos e livros raros, o princípio da reversibilidade estabelece que qualquer substância, adesivo ou reforço introduzido no suporte documental deve poder ser desfeito a qualquer tempo sem provocar novas deteriorações à obra original.',
      gabarito: 'C',
      justificativa: 'Correto! A reversibilidade é o mandamento ético fundamental da moderna ciência da conservação e restauração.',
    },
    {
      id: 'cp-7-4-2',
      pergunta: 'Micro-Checkpoint 2: Materiais para Reparo de Rasgos',
      item: 'Para a consolidação de rasgos e preenchimento de perdas de suporte em manuscritos históricos, a prática laboratorial correta prescreve o uso de papel celofane com adesivo de contato instantâneo (cianoacrilato), devido à sua secagem rápida e alta transparência.',
      gabarito: 'E',
      justificativa: 'Errado! Cianoacrilato (superbonder) e celofane são totalmente proibidos e destrutivos. Utilizam-se exclusivamente papéis japoneses de fibras longas (Kozo/Gampi) e colas naturais reversíveis de amido ou metilcelulose.',
    },
    {
      id: 'cp-7-4-3',
      pergunta: 'Micro-Checkpoint 3: Congelamento em Sinistros de Alagamento de Acervos',
      item: 'Em situações de emergência causadas por grandes alagamentos de bibliotecas, o congelamento rápido de livros encharcados a temperaturas inferiores a -18°C é técnica válida para paralisar a proliferação biológica de fungos e retardar a degradação física até o processo de secagem controlada.',
      gabarito: 'C',
      justificativa: 'Certo! O congelamento estabiliza o papel molhado e impede a germinação de esporos fúngicos (que se desenvolvem em 48 a 72 horas em ambiente úmido), concedendo tempo para a liofilização ou secagem técnica planejada.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-7-4-1',
        periodo: '1963 / 1964',
        disciplina: 'Teoria da Restauração',
        focoPrincipal: 'Publicação da Teoria da Restauração de Cesare Brandi e homologação da Carta de Veneza',
        figuraChave: 'Cesare Brandi e Paul Philippot',
      },
      {
        id: 'tl-7-4-2',
        periodo: '1966',
        disciplina: 'A Inundação de Florença',
        focoPrincipal: 'Marco histórico que refinou as técnicas de secagem, liofilização e encadernação de conservação',
        figuraChave: 'Comitê Internacional de Salvamento de Florença',
      },
      {
        id: 'tl-7-4-3',
        periodo: '1995 / 2004',
        disciplina: 'Gestão de Riscos (CCI/ICCROM)',
        focoPrincipal: 'Desenvolvimento do modelo dos 10 Agentes Universais de Deterioração Patrimonial',
        figuraChave: 'Stefan Michalski e Robert Waller',
      },
    ],
    autores: [
      {
        id: 'aut-7-4-1',
        nome: 'Cesare Brandi',
        ano: 1963,
        obraPrincipal: 'Teoria da Restauração',
        ideiaChave: 'Bases éticas da restauração: reversibilidade, distinguibilidade, mínima intervenção e valor histórico.',
        chipPegadinha: 'A restauração nunca deve criar um falso histórico nem falsificar a passagem do tempo.',
      },
      {
        id: 'aut-7-4-2',
        nome: 'Antônio Celso Ramos Spinelli',
        ano: 2003,
        obraPrincipal: 'Cadernos de Conservação e Restauração',
        ideiaChave: 'Sistematização dos testes de solubilidade, lavagem, desacidificação e uso de papel japonês no Brasil.',
        chipPegadinha: 'Antes de qualquer banho úmido, é obrigatório o teste de gota em todas as tintas.',
      },
      {
        id: 'aut-7-4-3',
        nome: 'Stefan Michalski e Robert Waller',
        ano: 2004,
        obraPrincipal: 'The 10 Agents of Deterioration / Risk Management for Cultural Heritage',
        ideiaChave: 'Classificação holística das 10 forças de degradação patrimonial e planos de contingência contra desastres.',
        chipPegadinha: 'Dissociação (perda de dados/inventário) é um dos 10 agentes graves de deterioração patrimonial.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-7-4-1',
        afirmacao: 'Na restauração de um livro raro do século XVIII, o procedimento correto de encadernação exige que suas margens laterais sejam aparadas por guilhotina mecânica para nivelar o corte e torná-lo uniforme.',
        gabarito: 'E',
        porQue: 'Refilar ou guilhotinar margens históricas destrói anotações marginais, barbas de papel e marcas d\'água originais, constituindo mutilação patrimonial inaceitável.',
      },
      {
        id: 'peg-7-4-2',
        afirmacao: 'A realização de banhos de desacidificação aquosa em folhas de livros antigos prescinde da realização prévia de testes de solubilidade em tintas e carimbos.',
        gabarito: 'E',
        porQue: 'O teste de solubilidade de tintas é obrigatório antes de qualquer contato com água; do contrário, tintas ferrogálicas ou anilinas podem dissolver-se e apagar o texto para sempre.',
      },
      {
        id: 'peg-7-4-3',
        afirmacao: 'Em um sinistro de inundação de grandes proporções em uma biblioteca histórica, os livros encharcados devem ser mantidos amontoados em temperatura ambiente aguardando secagem natural ao longo de várias semanas.',
        gabarito: 'E',
        porQue: 'Em 48 a 72 horas em temperatura ambiente, livros encharcados sofrem eclosão massiva e irreversível de fungos (mofo). A medida emergencial imediata é o congelamento rápido (< -18°C) para paralisar a atividade biológica.',
      },
    ],
  },
};
