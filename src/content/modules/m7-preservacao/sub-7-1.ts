import type { ModuloFilho } from '../../../domain/types';

export const submodulo71: ModuloFilho = {
  id: 'sub-7-1',
  numero: '7.1',
  titulo: 'Agentes Ambientais e Físico-Químicos de Degradação de Acervos',
  descricaoCurta: 'A composição físico-química dos suportes documentais, acidez intrínseca do papel industrial, parâmetros de temperatura e umidade relativa (flutuações e estresse mecânico), radiação ultravioleta e poluição atmosférica.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Norma Cassares', 'Ingrid Beck', 'Antônio Celso Ramos Spinelli', 'Garry Thomson', 'Library of Congress Preservation Directorate', 'Conarq'],
  alertasCebraspe: [
    'O pior inimigo ambiental do acervo em suporte papel não é a temperatura ou a umidade alta isolada, mas sim a FLUTUAÇÃO BRUSCA E CONSTANTE de temperatura e umidade relativa, pois provoca ciclos repetidos de dilatação e contração higroscópica que quebram as fibras de celulose.',
    'Parâmetros ideais de climatização para acervos bibliográficos em papel: Temperatura entre 18 °C e 22 °C (tolerância máxima 24 °C) e Umidade Relativa (UR) entre 45% e 55% (tolerância 40% a 60%). Acima de 65% de UR, ocorre a germinação e proliferação imediata de fungos filamentosos (mofo); abaixo de 35%, ocorre dessecação e quebra mecânica.',
    'Radiação Luminosa: a radiação Ultravioleta (UV - abaixo de 400 nm) é a mais energética e destrutiva, provocando fotodegradação, oxidação da lignina (amarelamento) e quebra das cadeias moleculares de celulose. O limite máximo de radiação UV é de 75 µW/lúmen e a intensidade luminosa para obras raras não deve ultrapassar 50 a 100 lux.',
    'Acidez Intrínseca do Papel: papéis industriais fabricados a partir de 1850 (polpa de madeira com sulfato de alumínio / alume de colofônia) sofrem hidrólise ácida contínua com a umidade do ar, tornando-se quebradiços e escurecidos. O papel alcalino (permanente - ISO 9706) possui reserva alcalina (carbonato de cálcio - CaCO3) com pH neutro/básico (7,5 a 10).',
    'Mobiliário e Armazenamento: estantes de aço com pintura eletrostática a pó (epóxi curada a quente) são obrigatórias; móveis de madeira crua são PROIBIDOS para guarda de acervos raros, pois desprendem vapores de lignina e ácidos voláteis (ácido acético e fórmico). A prateleira inferior deve ficar a pelo menos 15 cm do piso e a superior a 50 cm do teto.',
  ],
  quadroComparativo: {
    titulo: 'Agentes Físico-Químicos de Degradação de Papel e Medidas de Controle',
    colunas: ['Agente Degradante', 'Mecanismo de Dano à Celulose', 'Parâmetro de Segurança Recomendado', 'Ação Preventiva na Biblioteca', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Temperatura Elevada', 'Acelera a velocidade de todas as reações químicas de degradação ácida (Lei de Arrhenius)', '18 °C a 22 °C (estável, 24 horas ininterruptas)', 'Climatização contínua (jamais desligar ar-condicionado à noite ou nos finais de semana)', 'Afirmar que o desligamento noturno proporciona repouso higroscópico ao papel (FALSO: gera choque térmico destrutivo).'],
      ['Umidade Relativa (UR)', 'Alta: hidrólise ácida e eclosão de fungos (>65%); Baixa: dessecação e quebra mecânica (<35%)', '45% a 55% de UR (estável)', 'Desumidificadores / umidificadores industriais e monitoramento por termo-higrômetros calibrados', 'Dizer que umidade relativa de 20% é ideal para evitar fungos (FALSO: resseca e quebra o papel e couros).'],
      ['Radiação Luminosa (UV)', 'Foto-oxidação das fibras, quebra de ligações beta-glicosídicas e amarelamento de tintas', 'Máximo 50 a 100 lux para obras raras; radiação UV < 75 µW/lúmen', 'Filtros anti-UV em janelas, persianas e luminárias LED frias sem emissão de radiação UV ou calor', 'Considerar que a luz fluorescente comum sem filtro é inofensiva ao acervo de papel.'],
      ['Poluentes Atmosféricos', 'Gases ácidos (SO2, NOx, ozônio) reagem com a umidade gerando ácido sulfúrico e nítrico nas fibras', 'Ar filtrado por carvão ativado e filtros de partículas finas HEPA', 'Vedação de esquadrias e sistemas centrais de filtragem e pressurização positiva do ar', 'Ignorar que partículas de poeira são higroscópicas e veiculam esporos fúngicos e acidez.'],
      ['Mobiliário de Madeira', 'Desprendimento de ácidos voláteis (ácido acético e fórmico) e lignina que atacam o papel', 'Estantes de aço com pintura eletrostática epóxi a pó; 15 cm do piso', 'Banimento de armários de madeira crua ou compensado em áreas de acervo histórico', 'Afirmar que a madeira nobre é preferível ao aço por ser isolante térmico natural (FALSO).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Estrutura Físico-Química do Livro e da Celulose

Para dominar a preservação de acervos bibliográficos, o profissional deve compreender a natureza química fundamental dos suportes (Cassares, 2000; Beck, 1995; Spinelli, 2003):

* **A Molécula de Celulose:** Polímero linear natural formado por monômeros de glicose unidos por **ligações glicosídicas $\\beta-1,4$**. A resistência mecânica do papel decorre da extensão dessas cadeias poliméricas e da formação de densas pontes de hidrogênio intermoleculares.
* **O Papel Tradicional de Trapos (Pré-1850):**
  * Fabricado a partir de fibras vegetais nobres (algodão e linho), com cadeias de celulose muito longas, baixo teor de impurezas e pH neutro/básico.
  * Por essa razão, incunábulos e obras impressas dos séculos XV a XVIII frequentemente encontram-se em estado material impecável.
* **O Papel Industrial de Polpa de Madeira (Pós-1850):**
  * Com a Revolução Industrial e a impressão de massas, o trapo foi substituído pela polpa de madeira triturada física e quimicamente.
  * *Os Vilões Intrínsecos da Degradação:*
    1. **Lignina:** Polímero amorfo que confere rigidez estrutural às árvores. Sofre **fotoxidação acelerada** sob a luz, formando cromóforos que escurecem e amarelam as páginas.
    2. **Alume de Colofônia (Sulfato de Alumínio - $Al_2(SO_4)_3$):** Aditivo ácido empregado para impermeabilizar o papel contra o borrão de tinta. Em contato com a umidade do ar, o sulfato de alumínio sofre hidrólise, liberando **ácido sulfúrico ($H_2SO_4$)** diretamente no cerne das fibras.
    3. **Hidrólise Ácida da Celulose:** O ácido ataca e rompe as ligações $\\beta-1,4$ glicosídicas, encurtando as cadeias celulósicas. O papel sofre despolimerização, perde a elasticidade, escurece e torna-se tão quebradiço que se esfarela ao toque.
* **O Papel Permanente (Norma ISO 9706):**
  * Papel alcalino fabricado a partir de polpa química purificada sem celulose mecânica.
  * Requisitos normativos: teor de lignina insignificante (número Kappa $< 5$), pH aquoso neutro ou básico entre **7,5 e 10**, e presença obrigatória de **reserva alcalina de pelo menos 2% de carbonato de cálcio ($CaCO_3$)**, que neutraliza ácidos futuros.

---

### 2. Temperatura e Umidade Relativa: A Dinâmica Higroscópica

O papel é um material eminentemente **higroscópico**: ele busca continuamente o equilíbrio higroscópico com o ar circundante, absorvendo ou liberando moléculas de água.

\`\`\`tree
TITLE: Dinâmica Higroscópica e Danos Ambientais ao Papel
- Ambiente de Guarda e Climatização | Fatores físico-ambientais que afetam as fibras celulósicas
  - Flutuação Brusca de Temperatura e UR | Ligar e desligar ar-condicionado gera estresse violento
    - Ciclos de Dilatação e Contração | Movimento higroscópico contínuo na malha fibrosa do papel
    - Ruptura de Pontes de Hidrogênio | Rompimento progressivo das ligações intermoleculares da celulose
    - Fadiga Mecânica e Quebra | Ondulação de folhas, descolamento de lombadas e fragilização permanente
  - Umidade Relativa Elevada (UR > 65% e Calor > 25°C) | Condições críticas para agentes biológicos
    - Proliferação Fúngica (Mofo / Bolor) | Digestão enzimática da celulose e manchas ácidas irreversíveis (*foxing*)
    - Atração e Proliferação de Insetos | Ambiente favorável a brocas, traças e baratas
  - Ar Excessivamente Seco (UR < 35%) | Desidratação acentuada das fibras
    - Dessecação Extrema | Fibras ressecadas perdem flexibilidade e hidratação natural
    - Fragilização Estrutural | Papel torna-se quebradiço e suscetível a rasgos ao simples folhear
\`\`\`

#### A. O Estresse Mecânico das Flutuações Ambientais
* **A Maior Ameaça:** O pior agressor do papel não é uma temperatura alta estável, mas a **oscilação diária violenta**.
* Quando uma biblioteca liga o ar-condicionado às 8h e desliga às 18h (e nos finais de semana), o papel absorve umidade e incha durante a noite quente, e contrai-se bruscamente durante o dia frio e seco.
* Esse movimento contínuo de dilatação e contração desestrutura a malha fibrosa, descola lombadas, empena capas e acelera a fadiga do material.
* *Diretriz Inegociável:* O sistema de climatização de acervos históricos deve operar **24 horas por dia, 365 dias por ano**, sem desligamentos noturnos.

#### B. Parâmetros Ambientais Canônicos (Conarq, Beck, Cassares)
* **Temperatura:** Entre **18 °C e 22 °C** (com flutuação diária máxima tolerada de $\\pm 2$ °C).
* **Umidade Relativa (UR):** Entre **45% e 55%** (tolerância máxima de $40%$ a $60%$, com variação diária não superior a $\\pm 5%$).
* *Riscos Críticos:*
  * $UR > 65%$: Eclosão de esporos fúngicos, desenvolvimento de colônias de fungos filamentosos (mofo) e aceleração de reações hidrolíticas.
  * $UR < 35%$: Dessecação excessiva, tornando o papel rígido, seco e quebradiço, além de retrair e rachar encadernações de couro e pergaminho.

---

### 3. Luz e Radiação Eletromagnética

A luz é uma forma de energia radiante cuja degradação sobre os acervos é **cumulativa e irreversível** (Thomson, 1978; Cassares, 2000):

* **Radiação Ultravioleta (UV - comprimentos de onda $< 400$ nm):**
  * Invisível ao olho humano, mas possui fótons de elevadíssima energia.
  * Atua como catalisador direto da **fotoxidação**, quebrando as moléculas de celulose e promovendo a quebra de corantes e tintas históricas (tintas ferrogálicas).
  * *Limite de Segurança:* A proporção de UV na iluminação não deve ultrapassar **75 $\\mu$W/lúmen**.
* **Radiação Infravermelha ($> 700$ nm):**
  * Emite calor radiante, aquecendo diretamente a superfície das obras e acelerando a perda de umidade intrínseca.
* **Luz Visível (400 a 700 nm):**
  * Também causa desbotamento cumulativo ao longo do tempo.
  * *Níveis Máximos de Iluminamento:*
    * Documentos de alta sensibilidade (aquarelas, manuscritos, obras raras, fotografias): **máximo de 50 lux**.
    * Livros impressos comuns em salas de leitura: **máximo de 150 a 200 lux**.
* **Medidas de Controle:** Banimento da incidência direta de luz solar sobre estantes (uso de persianas e películas de proteção solar anti-UV nas janelas) e adoção de **luminárias LED frias** (que não emitem radiação UV nem calor infravermelho).

---

### 4. Poluentes Atmosféricos e Qualidade do Ar

Os poluentes atmosféricos atacam o acervo em duas frentes:
1. **Poluentes Gasosos Ácidos:**
   * O dióxido de enxofre ($SO_2$) e os óxidos de nitrogênio ($NO_x$) expelidos pela queima de combustíveis fósseis reagem cataliticamente com o oxigênio e a umidade do ar na presença de metais (como o ferro das tintas ferrogálicas), convertendo-se em **ácido sulfúrico ($H_2SO_4$) e ácido nítrico ($HNO_3$)**.
   * O ozônio ($O_3$), gerado por fotocopiadoras antigas e poluição fotoquímica, é um oxidante extremamente agressivo às fibras de celulose.
2. **Poluentes Particulados (Poeira e Fuligem):**
   * A fuligem contém partículas abrasivas de sílica e carbono que riscam mecanicamente as superfícies das obras durante o manuseio.
   * Além disso, a poeira atua como núcleo higroscópico que retém umidade ácida e serve de veículo transportador de nutrientes e esporos de fungos.
* **Medidas Preventivas:** Instalação de sistemas centrais de tratamento de ar dotados de filtros de partículas finas (filtro absoluto HEPA) e filtros químicos de **carvão ativado** para retenção de gases ácidos, com manutenção de pressão positiva no depósito para impedir a entrada de ar externo não tratado.

---

### 5. Mobiliário e Infraestrutura Predial de Guarda (Conarq e IFLA)

As condições físicas de guarda no depósito definem a longevidade dos acervos:
* **Estantes de Aço:** Devem ser confeccionadas em chapa de aço dobrada com tratamento antiferruginoso e acabamento exclusivo em **pintura eletrostática epóxi em pó curada a quente em estufa**. Essa tinta é inerte, resistente e não libera compostos orgânicos voláteis (VOCs).
* **Espaçamentos e Alturas Regulamentares:**
  * Prateleira inferior: situada a pelo menos **15 cm acima do nível do piso**, prevenindo sinistros de alagamento acidental, facilitando a limpeza do chão e impedindo o acesso imediato de insetos rastejantes.
  * Prateleira superior: distante no mínimo **50 cm do teto e das luminárias**, garantindo a circulação adequada de ar e evitando calor focal das lâmpadas.
  * Afastamento das paredes: estantes devem ficar afastadas **de 5 cm a 10 cm das paredes externas**, impedindo a transferência de umidade por capilaridade e condensação.
* **Proibição Absoluta de Mobiliário de Madeira Crua:** Armários, gaveteiros e estantes de madeira não tratada, compensado, aglomerado ou MDF desprendem continuamente **lignina, ácido acético e ácido fórmico**, criando microclimas confinados altamente ácidos que destroem documentos e materiais fotográficos.`,
  checkpoints: [
    {
      id: 'cp-7-1-1',
      pergunta: 'Micro-Checkpoint 1: Parâmetros Ambientais de Preservação',
      item: 'Em unidades de conservação de acervos bibliográficos, a oscilação brusca diária de temperatura e umidade relativa é considerada um dos mais graves agentes mecânicos de deterioração das fibras de celulose.',
      gabarito: 'C',
      justificativa: 'Correto! A higroscopicidade do papel faz com que ele se dilate e se contraia nas variações de umidade, quebrando as cadeias moleculares.',
    },
    {
      id: 'cp-7-1-2',
      pergunta: 'Micro-Checkpoint 2: Armazenamento e Mobiliário',
      item: 'Para a guarda de coleções raras e documentos históricos em bibliotecas, recomenda-se prioritariamente o uso de armários e estantes de madeira nobre crua, tendo em vista que a madeira atua como isolante natural contra a umidade externa.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe cobrou esse item no TJ-AC. Móveis de madeira liberam gases ácidos (ácido acético) e lignina nocivos ao acervo, sendo obrigatório o uso de aço tratado com pintura epóxi.',
    },
    {
      id: 'cp-7-1-3',
      pergunta: 'Micro-Checkpoint 3: Radiação Ultravioleta e Oxidação da Celulose',
      item: 'A radiação luminosa com comprimentos de onda na faixa ultravioleta acelera a quebra fotoquímica das cadeias moleculares de celulose e promove o amarelamento e a fragilização do papel.',
      gabarito: 'C',
      justificativa: 'Certo! A luz ultravioleta (solar ou fluorescente direta) possui alta energia e atua como catalisador direto da fotoxidação e despolimerização do papel.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-7-1-1',
        periodo: '1850',
        disciplina: 'Industrialização do Papel',
        focoPrincipal: 'Substituição do papel de trapos por polpa de madeira com alume de colofônia (início da acidez intrínseca e hidrólise)',
        figuraChave: 'Indústria Papeleira Moderna',
      },
      {
        id: 'tl-7-1-2',
        periodo: '1978',
        disciplina: 'Clima e Conservação',
        focoPrincipal: 'Publicação de "The Museum Environment" de Garry Thomson, padronizando lux e umidade relativa',
        figuraChave: 'Garry Thomson',
      },
      {
        id: 'tl-7-1-3',
        periodo: '1995 / 2000',
        disciplina: 'Preservação no Brasil',
        focoPrincipal: 'Publicação do Plano Nacional de Preservação de Obras Raras (Planor) e manuais de Norma Cassares e Ingrid Beck',
        figuraChave: 'Norma Cassares e Ingrid Beck',
      },
    ],
    autores: [
      {
        id: 'aut-7-1-1',
        nome: 'Norma Cassares',
        ano: 2000,
        obraPrincipal: 'Como fazer conservação preventiva em arquivos e bibliotecas',
        ideiaChave: 'Conservação preventiva como rotina contínua de controle de temperatura, umidade, luz e higienização mecânica.',
        chipPegadinha: 'A conservação preventiva foca nas causas ambientais para evitar que a restauração física seja necessária.',
      },
      {
        id: 'aut-7-1-2',
        nome: 'Ingrid Beck',
        ano: 1995,
        obraPrincipal: 'Manual de Conservação Preventiva de Documentos',
        ideiaChave: 'Parâmetros climáticos rígidos (18-22°C / 45-55% UR), controle integrado de pragas e mobiliário de aço epóxi.',
        chipPegadinha: 'Beck preconiza a intervenção mínima e o monitoramento ambiental ininterrupto 24 horas.',
      },
      {
        id: 'aut-7-1-3',
        nome: 'Antônio Celso Ramos Spinelli',
        ano: 2003,
        obraPrincipal: 'Preservação de Acervos Bibliográficos',
        ideiaChave: 'Química da degradação celulósica, hidrólise ácida e climatização ininterrupta 24 horas.',
        chipPegadinha: 'O ar-condicionado de biblioteca nunca deve ser desligado à noite ou nos fins de semana.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-7-1-1',
        afirmacao: 'O desligamento noturno dos sistemas de climatização de uma biblioteca é uma prática recomendada de conservação, pois proporciona repouso higroscópico ao papel.',
        gabarito: 'E',
        porQue: 'Desligar o ar-condicionado à noite gera picos violentos de elevação de temperatura e umidade relativa, provocando choque térmico e estresse higroscópico destrutivo.',
      },
      {
        id: 'peg-7-1-2',
        afirmacao: 'A presença de lignina em papéis de confecção moderna é desejável por atuar como agente antioxidante que impede a quebra das fibras de celulose.',
        gabarito: 'E',
        porQue: 'A lignina é um agente altamente instável que oxida facilmente na luz, amarelando o papel e acelerando a quebra ácida das cadeias celulósicas.',
      },
      {
        id: 'peg-7-1-3',
        afirmacao: 'Estantes para acervos bibliográficos raros devem ter sua primeira prateleira instalada rente ao chão para maximizar a capacidade de guarda do depósito.',
        gabarito: 'E',
        porQue: 'A prateleira mais baixa deve situar-se a pelo menos 15 cm do piso, resguardando o acervo contra inundações, roedores e permitindo circulação de ar e limpeza.',
      },
    ],
  },
};
