import type { ModuloFilho } from '../../../domain/types';

export const submodulo71: ModuloFilho = {
  id: 'sub-7-1',
  numero: '7.1',
  titulo: 'Agentes Ambientais e Físico-Químicos de Degradação de Acervos',
  descricaoCurta: 'A composição físico-química dos suportes documentais, acidez intrínseca do papel industrial, parâmetros de temperatura e umidade relativa (flutuações e estresse mecânico), radiação ultravioleta e poluição atmosférica.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Ingrid Beck', 'Antônio Celso Ramos Spinelli', 'Garry Thomson', 'Library of Congress Preservation Directorate'],
  alertasCebraspe: [
    'O pior inimigo ambiental do acervo não é a temperatura ou a umidade alta isolada, mas sim a FLUTUAÇÃO BRUSCA E CONSTANTE de temperatura e umidade relativa, pois provoca ciclos repetidos de dilatação e contração higroscópica que quebram as fibras de celulose.',
    'Parâmetros ideais de climatização para acervos bibliográficos em papel: Temperatura entre 18 °C e 22 °C (máximo 24 °C) e Umidade Relativa (UR) entre 45% e 55% (tolerância 40% a 60%). Acima de 65% de UR, ocorre a germinação e proliferação imediata de fungos.',
    'Radiação Luminosa: a radiação Ultravioleta (UV) é a mais energética e destrutiva, provocando fotodegradação, oxidação da lignina (amarelamento) e quebra das cadeias moleculares de celulose. A luz deve ser filtrada por películas anti-UV.',
    'Acidez Intrínseca do Papel: papéis industriais fabricados a partir de 1850 (polpa de madeira tratada com alume de colofônia / sulfato de alumínio) sofrem hidrólise ácida contínua, tornando-se quebradiços e escurecidos. O papel alcalino (permanente - ISO 9706) possui reserva alcalina (carbonato de cálcio) com pH neutro/básico (7,5 a 10).',
    'Mobiliário: estantes de aço com pintura eletrostática a pó (epóxi) são recomendadas; móveis de madeira crua são PROIBIDOS para guarda de acervos raros, pois liberam vapores de lignina e ácidos voláteis (ácido acético e fórmico).',
  ],
  quadroComparativo: {
    titulo: 'Agentes Físico-Químicos de Degradação de Papel e Medidas de Controle',
    colunas: ['Agente Degradante', 'Mecanismo de Dano à Celulose', 'Parâmetro de Segurança Recomendado', 'Ação Preventiva na Biblioteca'],
    linhas: [
      ['Temperatura Elevada', 'Acelera a velocidade de todas as reações químicas de degradação (Lei de Arrhenius)', '18 °C a 22 °C (estável, 24h por dia)', 'Climatização ininterrupta (não desligar ar-condicionado à noite ou fins de semana)'],
      ['Umidade Relativa (UR)', 'Alta: hidrólise ácida e fungos (>65%); Baixa: dessecação e quebra mecânica (<35%)', '45% a 55% de UR', 'Desumidificadores / umidificadores e monitoramento por termo-higrômetros calibrados'],
      ['Radiação Luminosa (Luz/UV)', 'Foto-oxidação das fibras, desbotamento de tintas e fragilização molecular', 'Nível máximo de 50 lux para obras raras; radiação UV < 75 µW/lúmen', 'Filtros anti-UV em janelas e luminárias LED frias sem emissão de calor ou UV'],
      ['Poluentes Atmosféricos', 'Gases ácidos (dióxido de enxofre, óxidos de nitrogênio, ozônio) geram ácido sulfúrico', 'Ar filtrado com carvão ativado e filtros de partículas finas', 'Vedações em esquadrias e sistemas centrais de filtragem e purificação de ar'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Estrutura Físico-Química do Livro e da Celulose

Para compreender a conservação preventiva de acervos, o bibliotecário deve dominar a constituição material dos suportes bibliográficos (Beck, 1995; Spinelli, 2003, referências do nosso acervo em \`Preservação física\`):

* **O Papel Tradicional de Trapos (Pré-1850):** Produzido a partir de fibras de algodão e linho, com fibras longas, pH neutro e alta pureza. Obras do século XVI ao XVIII encontram-se em excelente estado de conservação por essa razão.
* **O Papel Industrial de Polpa de Madeira (Pós-1850):**  
  * A explosão da imprensa de massa levou à substituição dos trapos pela pasta mecânica e química de madeira.
  * *Os Dois Grandes Vilões Internos:*
    1. **Lignina:** Polímero vegetal que confere rigidez às árvores, mas que oxida rapidamente na presença de luz e oxigênio, tornando o papel amarelo e escuro.
    2. **Sulfato de Alumínio (Alume de Colofônia):** Adicionado na colagem para evitar que a tinta borrasse. Na presença da umidade do ar, o alume reage gerando **ácido sulfúrico**, deflagrando a **hidrólise ácida** da celulose (o papel se autodestrói, quebrando em pedaços ao toque).

---

### 2. Temperatura e Umidade Relativa: A Dinâmica Higroscópica

O papel é um material **higroscópico**: ele absorve e perde água constantemente para o ambiente em busca de equilíbrio termodinâmico:

* **O Estresse Mecânico das Flutuações:**
  * Quando o ar-condicionado é ligado pela manhã e desligado à noite, o papel expande e contrai bruscamente todos os dias. Essa oscilação rompe as pontes de hidrogênio entre as microfibras celulósicas, provocando ondulações no bloco de folhas e descolamento da encadernação.
* **O Risco da Umidade Elevada:**
  * Umidade Relativa acima de 65% combinada com calor ($> 25$ °C) cria o ecossistema perfeito para a eclosão de esporos de **fungos filamentosos (mofo)**, que se alimentam da celulose e da cola animal das lombadas, causando manchas irreversíveis (*foxing*) e perda total do suporte.

---

### 3. Luz e Radiação Eletromagnética

A luz é uma forma de energia radiante que degrada a matéria orgânica de forma cumulativa e irreversível:
* **Radiação Ultravioleta (UV - abaixo de 400 nm):** Invisível ao olho humano, mas possui os fótons de maior energia. Rompe ligações químicas intramoleculares da celulose e pigmentos.
* **Radiação Infravermelha (acima de 700 nm):** Emite calor, elevando a temperatura de superfície das folhas e acelerando o ressecamento do papel.
* **Controle da Iluminação:** As áreas de guarda e consulta de obras raras devem priorizar iluminação artificial por lâmpadas LED frias, mantendo intensidade luminosa baixa (entre 50 e 100 lux para materiais raros) e ausência de luz solar direta.

---

### 4. Mobiliário e Infraestrutura Predial

Conforme normas técnicas do Conselho Nacional de Arquivos (CONARQ) e da IFLA:
* **Estantes de Aço:** Devem possuir acabamento em tinta epóxi curada a quente em pó (atóxica e sem desprendimento de vapores). As prateleiras mais baixas devem ficar a pelo menos **15 cm do piso** para evitar danos por inundações e facilitar a circulação de ar e limpeza.
* **Proibição de Madeira Crua:** A madeira natural e compensados de baixa qualidade desprendem lignina e ácidos orgânicos voláteis (ácido fórmico e acético) que atacam diretamente papéis e fotografias.`,
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
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-7-1-1',
        periodo: '1850',
        disciplina: 'Industrialização do Papel',
        focoPrincipal: 'Substituição do papel de trapos por polpa de madeira com alume de colofônia (início da acidez intrínseca)',
        figuraChave: 'Indústria Papeleira Moderna',
      },
      {
        id: 'tl-7-1-2',
        periodo: '1978',
        disciplina: 'O Museu e o Clima',
        focoPrincipal: 'Publicação de "The Museum Environment" e padronização dos limites de lux e umidade relativa',
        figuraChave: 'Garry Thomson',
      },
      {
        id: 'tl-7-1-3',
        periodo: '1995 / 2003',
        disciplina: 'Conservação no Brasil',
        focoPrincipal: 'Sistematização de manuais de conservação preventiva pela Fundação Biblioteca Nacional e Arquivo Nacional',
        figuraChave: 'Ingrid Beck e Antônio Celso Spinelli',
      },
    ],
    autores: [
      {
        id: 'aut-7-1-1',
        nome: 'Ingrid Beck',
        ano: 1995,
        obraPrincipal: 'Manual de Conservação Preventiva de Documentos',
        ideiaChave: 'Parâmetros climáticos rígidos (18-22°C / 45-55% UR), controle integrado e higienização mecânica.',
        chipPegadinha: 'Beck preconiza a conservação preventiva diária em detrimento de intervenções restauradoras tardias.',
      },
      {
        id: 'aut-7-1-2',
        nome: 'Antônio Celso Ramos Spinelli',
        ano: 2003,
        obraPrincipal: 'Preservação de Acervos Bibliográficos',
        ideiaChave: 'Química da degradação celulósica, hidrólise ácida e climatização ininterrupta 24 horas.',
        chipPegadinha: 'O ar-condicionado de biblioteca nunca deve ser desligado à noite.',
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
        porQue: 'A lignina é um agente altamente ácido e instável que oxida facilmente na luz, amarelando o papel e acelerando a hidrólise ácida.',
      },
    ],
  },
};
