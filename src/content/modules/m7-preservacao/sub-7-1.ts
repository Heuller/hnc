import type { ModuloFilho } from '../../../domain/types';

export const submodulo71: ModuloFilho = {
  id: 'sub-7-1',
  numero: '7.1',
  editalRef: 'Bloco D - Item 4.8',
  preRequisitos: ["sub-5-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-7-3",
          "titulo": "Suportes e Condições Ambientais",
          "motivo": "Controle de temperatura e umidade relativa no arquivo da Câmara."
      }
  ],
  titulo: 'Agentes Ambientais e Físico-Químicos de Degradação de Acervos',
  antesDeLer: [
  {
    "termo": "Higroscopicidade",
    "definicao": "Resposta do material às condições de umidade do ambiente.",
    "exemploBiblioteca": "A média da sala pode ocultar microambiente junto a parede úmida."
  },
  {
    "termo": "Dose de luz",
    "definicao": "Iluminância e tempo são dimensões da exposição, além de espectro e sensibilidade.",
    "exemploBiblioteca": "Baixa emissão UV não elimina o dano por luz visível."
  }
],
  descricaoCurta: "Relacionar composição do suporte e mecanismos de degradação sem garantias por idade. Interpretar temperatura, umidade e duração como fatores relacionados. Controlar dose de luz, UV e aquecimento segundo sensibilidade. Distinguir partículas e gases para selecionar controles. Avaliar mobiliário e arranjo com base em riscos e projeto.",
  tempoEstimadoMinutos: 21,
  prioridade: 'normal',
  autoresChave: [
  "Norma Cianflone Cassares — Como fazer conservação preventiva em arquivos e bibliotecas (2000)",
  "Canadian Conservation Institute — Caring for paper objects"
],
  alertasCebraspe: [
  "Composição é apenas parte do diagnóstico; danos ambientais e mecânicos continuam possíveis.",
  "Estabilidade não anula aceleração de reações associada ao calor.",
  "Luz visível também pode produzir dano cumulativo."
],
  teoriaDensaMarkdown: "### A Estrutura Físico-Química do Livro e da Celulose\n\nPara dominar a preservação de acervos bibliográficos, o profissional deve compreender a natureza química fundamental dos suportes (Cassares, 2000; Beck, 1995; Spinelli, 2003):\n\n* **A Molécula de Celulose:** Polímero linear natural formado por monômeros de glicose unidos por **ligações glicosídicas $\\beta-1,4$**. A resistência mecânica do papel decorre da extensão dessas cadeias poliméricas e da formação de densas pontes de hidrogênio intermoleculares.\n* **O Papel Tradicional de Trapos (Pré-1850):**\n  * Fabricado a partir de fibras vegetais nobres (algodão e linho), com cadeias de celulose muito longas, baixo teor de impurezas e pH neutro/básico.\n  * Por essa razão, incunábulos e obras impressas dos séculos XV a XVIII podem apresentar boa resistência, sem que idade ou fibra garantam estado impecável; uso, tratamentos, encolagem e ambiente também contam.\n* **O Papel Industrial de Polpa de Madeira (Pós-1850):**\n  * Com a Revolução Industrial e a impressão de massas, o trapo foi substituído pela polpa de madeira triturada física e quimicamente.\n  * *Os Vilões Intrínsecos da Degradação:*\n    1. **Lignina:** Polímero amorfo que confere rigidez estrutural às árvores. Sofre **fotoxidação acelerada** sob a luz, formando cromóforos que escurecem e amarelam as páginas.\n    2. **Encolagem de colofônia e alúmen:** processos históricos empregaram colofônia e sais de alumínio, componentes distintos. A hidrólise de espécies de alumínio pode acidificar o papel. Não se deve chamar a mistura inteira de sulfato de alumínio nem reduzir todo mecanismo à liberação direta de ácido sulfúrico.\n    3. **Hidrólise Ácida da Celulose:** O ácido ataca e rompe as ligações $\\beta-1,4$ glicosídicas, encurtando as cadeias celulósicas. O papel sofre despolimerização, perde a elasticidade, escurece e torna-se tão quebradiço que se esfarela ao toque.\n* **Papel permanente e papel durável:** permanência química e resistência ao uso não são sinônimos. A ISO 9706 trata de requisitos de permanência do papel para documentos, incluindo resistência, reserva alcalina, limitação de substâncias oxidáveis e pH. Não basta o rótulo “sem ácido” para provar atendimento a todos os requisitos, nem se deve usar automaticamente essa norma de papel como especificação completa de qualquer caixa de guarda. A edição e os ensaios aplicáveis precisam ser consultados para certificar conformidade.\n\n**Aplicação e recuperação:** Um livro de trapo está mais frágil que outro de polpa química. Isso não refuta a importância das fibras: encolagem, acidez, uso e história ambiental também influem. Idade, sozinha, não é diagnóstico de estado nem de raridade.\n\n### Temperatura e Umidade Relativa: A Dinâmica Higroscópica\n\nO papel é um material eminentemente **higroscópico**: ele busca continuamente o equilíbrio higroscópico com o ar circundante, absorvendo ou liberando moléculas de água.\n\n| Condição | Mecanismo e decisão |\n| --- | --- |\n| Umidade elevada por tempo suficiente | Favorece reações e crescimento biológico, conforme espécie e substrato. |\n| Variações grandes de umidade | Produzem mudanças dimensionais e tensões em materiais higroscópicos. |\n| Temperatura elevada | Pode acelerar degradação química; não é inofensiva por estar estável. |\n| Ambiente excessivamente seco | Pode fragilizar ou deformar certos componentes; avaliar material e história ambiental. |\n\n#### A. O Estresse Mecânico das Flutuações Ambientais\n* **Riscos diferentes:** calor contínuo e flutuações podem causar danos por mecanismos distintos; não há hierarquia universal que torne um deles sempre o pior.\n* Quando uma biblioteca liga o ar-condicionado às 8h e desliga às 18h (e nos finais de semana), as condições podem oscilar e produzir movimentos higroscópicos; o sentido e a magnitude dependem da umidade relativa efetiva, do edifício e da inércia do material, não apenas do relógio ou da temperatura.\n* Esse movimento contínuo de dilatação e contração desestrutura a malha fibrosa, descola lombadas, empena capas e acelera a fadiga do material.\n* **Decisão de projeto:** a estabilidade é objetivo a monitorar. Operação contínua pode ser necessária em um projeto, mas não constitui obrigação universal deduzida de qualquer acervo. Edifício, clima, energia, equipamentos e risco devem fundamentar a solução.\n\n#### B. Parâmetros de referência não são limiares universais\n* **Temperatura:** Faixas como **18–22 °C** aparecem em orientações para determinados acervos, mas precisam de fonte e contexto. Materiais fotográficos e outros suportes podem exigir condições distintas.\n* **Umidade Relativa (UR):** Faixas moderadas e estáveis são referências de projeto; **45–55%** não é norma universal para todo suporte. Monitore o ambiente e considere material, clima e risco, sem inventar uma tolerância obrigatória única.\n* *Riscos Críticos:*\n  * Umidade elevada persistente aumenta risco de mofo, mas **65% não é gatilho instantâneo ou suficiente**. Tempo, substrato, espécie e condições locais influem; um microambiente pode divergir do sensor da sala.\n  * Umidade muito baixa pode afetar flexibilidade e dimensões de componentes; não transforma todo papel instantaneamente em quebradiço ao cruzar um número.\n\n**Aplicação e recuperação:** Uma sala registra 55% de UR ao centro e condensação junto a uma parede fria. A média da sala não exclui risco local. Posicionar sensores, examinar a infiltração e acompanhar séries temporais é melhor que declarar o acervo seguro por um único número.\n\n### Luz e Radiação Eletromagnética\n\nA luz é uma forma de energia radiante cuja degradação sobre os acervos é **cumulativa e irreversível** (Thomson, 1978; Cassares, 2000):\n\n* **Radiação Ultravioleta (UV - comprimentos de onda $< 400$ nm):**\n  * Invisível ao olho humano, mas possui fótons de elevadíssima energia.\n  * Pode desencadear e intensificar processos de **fotoxidação**, quebrando as moléculas de celulose e promovendo a quebra de corantes e tintas históricas (tintas ferrogálicas).\n  * **Controle de UV:** minimizar a componente ultravioleta. O valor histórico de **75 µW/lm** é referência em orientações tradicionais, não garantia de ausência de dano abaixo dele.\n* **Radiação Infravermelha ($> 700$ nm):**\n  * Emite calor radiante, aquecendo diretamente a superfície das obras e acelerando a perda de umidade intrínseca.\n* **Luz Visível (400 a 700 nm):**\n  * Também causa desbotamento cumulativo ao longo do tempo.\n  * *Níveis Máximos de Iluminamento:*\n    * Documentos de alta sensibilidade (aquarelas, manuscritos, obras raras, fotografias): referência tradicional de **50 lux**, com dose e tempo limitados conforme sensibilidade.\n    * Livros impressos comuns em salas de leitura: níveis de trabalho dependentes da tarefa; **150–200 lux** não é limite universal de conservação de todo impresso.\n* **Medidas de Controle:** Banimento da incidência direta de luz solar sobre estantes (uso de persianas e películas de proteção solar anti-UV nas janelas) e adoção de **luminárias LED frias** (com baixa emissão UV conforme o produto; LED ainda gera calor e luz visível capaz de degradar materiais sensíveis).\n\n**Aplicação e recuperação:** A 50 lux por 100 horas, a exposição é 5.000 lux-hora; a 100 lux por 50 horas, a dose nominal é igual. Sensibilidade, espectro e outras condições ainda importam. Reduzir UV não elimina o efeito da luz visível.\n\n### Poluentes Atmosféricos e Qualidade do Ar\n\nOs poluentes atmosféricos atacam o acervo em duas frentes:\n1. **Poluentes Gasosos Ácidos:**\n   * O dióxido de enxofre ($SO_2$) e os óxidos de nitrogênio ($NO_x$) expelidos pela queima de combustíveis fósseis reagem cataliticamente com o oxigênio e a umidade do ar na presença de metais (como o ferro das tintas ferrogálicas), convertendo-se em **ácido sulfúrico ($H_2SO_4$) e ácido nítrico ($HNO_3$)**.\n   * O ozônio ($O_3$), gerado por fotocopiadoras antigas e poluição fotoquímica, é um oxidante extremamente agressivo às fibras de celulose.\n2. **Poluentes Particulados (Poeira e Fuligem):**\n   * A fuligem contém partículas abrasivas de sílica e carbono que riscam mecanicamente as superfícies das obras durante o manuseio.\n   * Além disso, a poeira atua como núcleo higroscópico que retém umidade ácida e serve de veículo transportador de nutrientes e esporos de fungos.\n* **Medidas Preventivas:** Instalação de sistemas centrais de tratamento de ar dotados de filtros de partículas finas (filtro absoluto HEPA) e filtros químicos de **carvão ativado** para retenção de gases ácidos, e controle de infiltrações conforme o projeto. Pressão positiva e filtros específicos exigem dimensionamento e manutenção; não se prescrevem automaticamente a todo edifício.\n\n**Aplicação e recuperação:** Um filtro HEPA retém partículas segundo sua classificação, mas não resolve sozinho todo poluente gasoso. Carvão ativado atende outro tipo de problema, com capacidade e vida útil a acompanhar. Nome de filtro não substitui diagnóstico.\n\n### Mobiliário e Infraestrutura Predial de Guarda (Conarq e IFLA)\n\nAs condições físicas de guarda no depósito definem a longevidade dos acervos:\n* **Estantes de Aço:** Devem ser confeccionadas em chapa de aço dobrada com tratamento antiferruginoso e acabamento estável, resistente, sem bordas cortantes e compatível com a coleção. Pintura em pó adequadamente curada é uma opção; a palavra epóxi sozinha não certifica inércia ou ausência de emissão.\n* **Dimensões de projeto a justificar:** os números seguintes são referências de arranjo, não regra legal universal. Considerar acessibilidade, estabilidade, incêndio e características do espaço.\n  * Prateleira inferior: situada a pelo menos **15 cm acima do nível do piso**, prevenindo sinistros de alagamento acidental, facilitando a limpeza do chão e impedindo o acesso imediato de insetos rastejantes.\n  * Prateleira superior: distante no mínimo **50 cm do teto e das luminárias**, garantindo a circulação adequada de ar e evitando calor focal das lâmpadas.\n  * Afastamento das paredes: estantes devem ficar afastadas **de 5 cm a 10 cm das paredes externas**, impedindo a transferência de umidade por capilaridade e condensação.\n* **Risco de mobiliário inadequado:** Armários, gaveteiros e estantes de madeira não tratada, compensado, aglomerado ou MDF podem emitir compostos voláteis, inclusive ácidos orgânicos e componentes de adesivos. **Lignina não é gás volátil emitido como vapor**; distinguir constituição da madeira e emissões, criando microclimas confinados altamente ácidos que destroem documentos e materiais fotográficos.\n\n**Aplicação e recuperação:** Uma caixa encostada em parede com infiltração pode criar microambiente úmido. Afastar o mobiliário ajuda, mas não corrige a origem da água. A prevenção articula manutenção predial, monitoramento e acondicionamento.",
  teoriaDidaticaMarkdown: "Composição, ambiente, luz, poluentes e manuseio atuam em conjunto. Separe estabilidade de temperatura baixa, média de microambiente, UV de luz visível, partículas de gases e indicação técnica de obrigação universal. Nenhum número ambiental isolado garante preservação. A decisão precisa de diagnóstico, monitoramento e compatibilidade com o suporte.",
  checkpoints: [
  {
    "id": "cp-7-1-1",
    "pergunta": "Micro-Checkpoint 1: Parâmetros Ambientais de Preservação",
    "item": "Variações bruscas da umidade relativa podem provocar tensões e alterações dimensionais em materiais de acervos bibliográficos, contribuindo para sua deterioração mecânica.",
    "gabarito": "C",
    "justificativa": "O papel e outros materiais respondem à umidade, podendo expandir ou contrair de modos diferentes. Variações grandes podem gerar tensões, deformações e danos nas estruturas. A avaliação considera amplitude, frequência, materiais e histórico; calor elevado também pode acelerar reações químicas mesmo sem oscilações.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto."
  },
  {
    "id": "cp-7-1-2",
    "pergunta": "Micro-Checkpoint 2: Armazenamento e Mobiliário",
    "item": "Para a guarda de coleções raras e documentos históricos em bibliotecas, recomenda-se prioritariamente o uso de armários e estantes de madeira nobre crua, tendo em vista que a madeira atua como isolante natural contra a umidade externa.",
    "gabarito": "E",
    "justificativa": "Madeira crua e materiais inadequados podem emitir compostos nocivos; avaliam-se mobiliário e acabamento compatíveis. Não se atribui a lignina emissão gasosa nem se inventa ocorrência específica de prova.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto.",
    "versao_correta": "Recomenda-se mobiliário e acabamento estáveis e compatíveis, sem priorizar madeira crua como proteção contra umidade."
  },
  {
    "id": "cp-7-1-3",
    "pergunta": "Micro-Checkpoint 3: Radiação Ultravioleta e Oxidação da Celulose",
    "item": "A radiação luminosa com comprimentos de onda na faixa ultravioleta acelera a quebra fotoquímica das cadeias moleculares de celulose e promove o amarelamento e a fragilização do papel.",
    "gabarito": "C",
    "justificativa": "UV pode desencadear reações fotoquímicas e degradação. A intensidade do efeito depende de dose, material e condições; luz visível também pode causar danos.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto."
  },
  {
    "id": "rt-7-1-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um exemplar fabricado com fibras de trapo está necessariamente em estado impecável, independentemente de uso e ambiente.",
    "gabarito": "E",
    "justificativa": "Composição é apenas parte do diagnóstico; danos ambientais e mecânicos continuam possíveis.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto.",
    "editalRef": "Bloco D - Item 4.8",
    "habilidade": "aplicar",
    "versao_correta": "Fibras e história de uso/ambiente devem ser avaliadas em conjunto."
  },
  {
    "id": "rt-7-1-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Temperatura estável elevada não representa risco químico apenas por não oscilar.",
    "gabarito": "E",
    "justificativa": "Estabilidade não anula aceleração de reações associada ao calor.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto.",
    "editalRef": "Bloco D - Item 4.8",
    "habilidade": "aplicar",
    "versao_correta": "Temperatura e flutuação geram riscos distintos, ambos a avaliar."
  },
  {
    "id": "rt-7-1-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Controlar UV dispensa limitar tempo de exposição de materiais sensíveis à luz visível.",
    "gabarito": "E",
    "justificativa": "Luz visível também pode produzir dano cumulativo.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto.",
    "editalRef": "Bloco D - Item 4.8",
    "habilidade": "aplicar",
    "versao_correta": "Tempo, iluminância, espectro e sensibilidade devem ser controlados."
  },
  {
    "id": "rt-7-1-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um filtro particulado eficiente não demonstra, por si, remoção equivalente de gases ácidos.",
    "gabarito": "C",
    "justificativa": "Partículas e gases exigem tecnologias e dimensionamentos diferentes.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto.",
    "editalRef": "Bloco D - Item 4.8",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-7-1-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Lignina é um gás emitido continuamente pela madeira das estantes.",
    "gabarito": "E",
    "justificativa": "Lignina é componente polimérico, não gás volátil; outros compostos podem ser emitidos.",
    "fonte": "Cassares, Como fazer conservação preventiva em arquivos e bibliotecas (2000), seções 1–3 e 6–8; CCI, Caring for paper objects; recomendações ambientais dependem do material e do contexto.",
    "editalRef": "Bloco D - Item 4.8",
    "habilidade": "aplicar",
    "versao_correta": "A madeira pode emitir compostos voláteis; lignina não é um gás."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-7-1-fonte-cassares",
      "nome": "Norma Cianflone Cassares — Como fazer conservação preventiva em arquivos e bibliotecas (2000)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Norma Cianflone Cassares — Como fazer conservação preventiva em arquivos e bibliotecas (2000)",
      "ideiaChave": "PDF teórico do projeto; capítulos 1, 2, 6 e 8; colaboração de Cláudia Moi.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-7-1-fonte-cci",
      "nome": "Canadian Conservation Institute — Caring for paper objects",
      "ano": "Referência de consulta",
      "obraPrincipal": "Canadian Conservation Institute — Caring for paper objects",
      "ideiaChave": "Riscos e cuidados por materiais; distinguir recomendação contextual de norma universal.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-7-1-3",
      "afirmacao": "Controlar UV dispensa limitar tempo de exposição de materiais sensíveis à luz visível.",
      "gabarito": "E",
      "porQue": "Luz visível também pode produzir dano cumulativo."
    },
    {
      "id": "memoria-rt-7-1-4",
      "afirmacao": "Um filtro particulado eficiente não demonstra, por si, remoção equivalente de gases ácidos.",
      "gabarito": "C",
      "porQue": "Partículas e gases exigem tecnologias e dimensionamentos diferentes."
    },
    {
      "id": "memoria-rt-7-1-5",
      "afirmacao": "Lignina é um gás emitido continuamente pela madeira das estantes.",
      "gabarito": "E",
      "porQue": "Lignina é componente polimérico, não gás volátil; outros compostos podem ser emitidos."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-7-1-bloco-1",
    "titulo": "A Estrutura Físico-Química do Livro e da Celulose",
    "objetivos": [
      "Relacionar composição do suporte e mecanismos de degradação sem garantias por idade."
    ],
    "conteudo": "Para dominar a preservação de acervos bibliográficos, o profissional deve compreender a natureza química fundamental dos suportes (Cassares, 2000; Beck, 1995; Spinelli, 2003):\n\n* **A Molécula de Celulose:** Polímero linear natural formado por monômeros de glicose unidos por **ligações glicosídicas $\\beta-1,4$**. A resistência mecânica do papel decorre da extensão dessas cadeias poliméricas e da formação de densas pontes de hidrogênio intermoleculares.\n* **O Papel Tradicional de Trapos (Pré-1850):**\n  * Fabricado a partir de fibras vegetais nobres (algodão e linho), com cadeias de celulose muito longas, baixo teor de impurezas e pH neutro/básico.\n  * Por essa razão, incunábulos e obras impressas dos séculos XV a XVIII podem apresentar boa resistência, sem que idade ou fibra garantam estado impecável; uso, tratamentos, encolagem e ambiente também contam.\n* **O Papel Industrial de Polpa de Madeira (Pós-1850):**\n  * Com a Revolução Industrial e a impressão de massas, o trapo foi substituído pela polpa de madeira triturada física e quimicamente.\n  * *Os Vilões Intrínsecos da Degradação:*\n    1. **Lignina:** Polímero amorfo que confere rigidez estrutural às árvores. Sofre **fotoxidação acelerada** sob a luz, formando cromóforos que escurecem e amarelam as páginas.\n    2. **Encolagem de colofônia e alúmen:** processos históricos empregaram colofônia e sais de alumínio, componentes distintos. A hidrólise de espécies de alumínio pode acidificar o papel. Não se deve chamar a mistura inteira de sulfato de alumínio nem reduzir todo mecanismo à liberação direta de ácido sulfúrico.\n    3. **Hidrólise Ácida da Celulose:** O ácido ataca e rompe as ligações $\\beta-1,4$ glicosídicas, encurtando as cadeias celulósicas. O papel sofre despolimerização, perde a elasticidade, escurece e torna-se tão quebradiço que se esfarela ao toque.\n* **Papel permanente e papel durável:** permanência química e resistência ao uso não são sinônimos. A ISO 9706 trata de requisitos de permanência do papel para documentos, incluindo resistência, reserva alcalina, limitação de substâncias oxidáveis e pH. Não basta o rótulo “sem ácido” para provar atendimento a todos os requisitos, nem se deve usar automaticamente essa norma de papel como especificação completa de qualquer caixa de guarda. A edição e os ensaios aplicáveis precisam ser consultados para certificar conformidade.\n\n**Aplicação e recuperação:** Um livro de trapo está mais frágil que outro de polpa química. Isso não refuta a importância das fibras: encolagem, acidez, uso e história ambiental também influem. Idade, sozinha, não é diagnóstico de estado nem de raridade.",
    "checkpointIds": [
      "rt-7-1-1"
    ]
  },
  {
    "id": "sub-7-1-bloco-2",
    "titulo": "Temperatura e Umidade Relativa: A Dinâmica Higroscópica",
    "objetivos": [
      "Interpretar temperatura, umidade e duração como fatores relacionados."
    ],
    "conteudo": "O papel é um material eminentemente **higroscópico**: ele busca continuamente o equilíbrio higroscópico com o ar circundante, absorvendo ou liberando moléculas de água.\n\n| Condição | Mecanismo e decisão |\n| --- | --- |\n| Umidade elevada por tempo suficiente | Favorece reações e crescimento biológico, conforme espécie e substrato. |\n| Variações grandes de umidade | Produzem mudanças dimensionais e tensões em materiais higroscópicos. |\n| Temperatura elevada | Pode acelerar degradação química; não é inofensiva por estar estável. |\n| Ambiente excessivamente seco | Pode fragilizar ou deformar certos componentes; avaliar material e história ambiental. |\n\n#### A. O Estresse Mecânico das Flutuações Ambientais\n* **Riscos diferentes:** calor contínuo e flutuações podem causar danos por mecanismos distintos; não há hierarquia universal que torne um deles sempre o pior.\n* Quando uma biblioteca liga o ar-condicionado às 8h e desliga às 18h (e nos finais de semana), as condições podem oscilar e produzir movimentos higroscópicos; o sentido e a magnitude dependem da umidade relativa efetiva, do edifício e da inércia do material, não apenas do relógio ou da temperatura.\n* Esse movimento contínuo de dilatação e contração desestrutura a malha fibrosa, descola lombadas, empena capas e acelera a fadiga do material.\n* **Decisão de projeto:** a estabilidade é objetivo a monitorar. Operação contínua pode ser necessária em um projeto, mas não constitui obrigação universal deduzida de qualquer acervo. Edifício, clima, energia, equipamentos e risco devem fundamentar a solução.\n\n#### B. Parâmetros de referência não são limiares universais\n* **Temperatura:** Faixas como **18–22 °C** aparecem em orientações para determinados acervos, mas precisam de fonte e contexto. Materiais fotográficos e outros suportes podem exigir condições distintas.\n* **Umidade Relativa (UR):** Faixas moderadas e estáveis são referências de projeto; **45–55%** não é norma universal para todo suporte. Monitore o ambiente e considere material, clima e risco, sem inventar uma tolerância obrigatória única.\n* *Riscos Críticos:*\n  * Umidade elevada persistente aumenta risco de mofo, mas **65% não é gatilho instantâneo ou suficiente**. Tempo, substrato, espécie e condições locais influem; um microambiente pode divergir do sensor da sala.\n  * Umidade muito baixa pode afetar flexibilidade e dimensões de componentes; não transforma todo papel instantaneamente em quebradiço ao cruzar um número.\n\n**Aplicação e recuperação:** Uma sala registra 55% de UR ao centro e condensação junto a uma parede fria. A média da sala não exclui risco local. Posicionar sensores, examinar a infiltração e acompanhar séries temporais é melhor que declarar o acervo seguro por um único número.",
    "checkpointIds": [
      "cp-7-1-1",
      "rt-7-1-2"
    ]
  },
  {
    "id": "sub-7-1-bloco-3",
    "titulo": "Luz e Radiação Eletromagnética",
    "objetivos": [
      "Controlar dose de luz, UV e aquecimento segundo sensibilidade."
    ],
    "conteudo": "A luz é uma forma de energia radiante cuja degradação sobre os acervos é **cumulativa e irreversível** (Thomson, 1978; Cassares, 2000):\n\n* **Radiação Ultravioleta (UV - comprimentos de onda $< 400$ nm):**\n  * Invisível ao olho humano, mas possui fótons de elevadíssima energia.\n  * Pode desencadear e intensificar processos de **fotoxidação**, quebrando as moléculas de celulose e promovendo a quebra de corantes e tintas históricas (tintas ferrogálicas).\n  * **Controle de UV:** minimizar a componente ultravioleta. O valor histórico de **75 µW/lm** é referência em orientações tradicionais, não garantia de ausência de dano abaixo dele.\n* **Radiação Infravermelha ($> 700$ nm):**\n  * Emite calor radiante, aquecendo diretamente a superfície das obras e acelerando a perda de umidade intrínseca.\n* **Luz Visível (400 a 700 nm):**\n  * Também causa desbotamento cumulativo ao longo do tempo.\n  * *Níveis Máximos de Iluminamento:*\n    * Documentos de alta sensibilidade (aquarelas, manuscritos, obras raras, fotografias): referência tradicional de **50 lux**, com dose e tempo limitados conforme sensibilidade.\n    * Livros impressos comuns em salas de leitura: níveis de trabalho dependentes da tarefa; **150–200 lux** não é limite universal de conservação de todo impresso.\n* **Medidas de Controle:** Banimento da incidência direta de luz solar sobre estantes (uso de persianas e películas de proteção solar anti-UV nas janelas) e adoção de **luminárias LED frias** (com baixa emissão UV conforme o produto; LED ainda gera calor e luz visível capaz de degradar materiais sensíveis).\n\n**Aplicação e recuperação:** A 50 lux por 100 horas, a exposição é 5.000 lux-hora; a 100 lux por 50 horas, a dose nominal é igual. Sensibilidade, espectro e outras condições ainda importam. Reduzir UV não elimina o efeito da luz visível.",
    "checkpointIds": [
      "cp-7-1-3",
      "rt-7-1-3"
    ]
  },
  {
    "id": "sub-7-1-bloco-4",
    "titulo": "Poluentes Atmosféricos e Qualidade do Ar",
    "objetivos": [
      "Distinguir partículas e gases para selecionar controles."
    ],
    "conteudo": "Os poluentes atmosféricos atacam o acervo em duas frentes:\n1. **Poluentes Gasosos Ácidos:**\n   * O dióxido de enxofre ($SO_2$) e os óxidos de nitrogênio ($NO_x$) expelidos pela queima de combustíveis fósseis reagem cataliticamente com o oxigênio e a umidade do ar na presença de metais (como o ferro das tintas ferrogálicas), convertendo-se em **ácido sulfúrico ($H_2SO_4$) e ácido nítrico ($HNO_3$)**.\n   * O ozônio ($O_3$), gerado por fotocopiadoras antigas e poluição fotoquímica, é um oxidante extremamente agressivo às fibras de celulose.\n2. **Poluentes Particulados (Poeira e Fuligem):**\n   * A fuligem contém partículas abrasivas de sílica e carbono que riscam mecanicamente as superfícies das obras durante o manuseio.\n   * Além disso, a poeira atua como núcleo higroscópico que retém umidade ácida e serve de veículo transportador de nutrientes e esporos de fungos.\n* **Medidas Preventivas:** Instalação de sistemas centrais de tratamento de ar dotados de filtros de partículas finas (filtro absoluto HEPA) e filtros químicos de **carvão ativado** para retenção de gases ácidos, e controle de infiltrações conforme o projeto. Pressão positiva e filtros específicos exigem dimensionamento e manutenção; não se prescrevem automaticamente a todo edifício.\n\n**Aplicação e recuperação:** Um filtro HEPA retém partículas segundo sua classificação, mas não resolve sozinho todo poluente gasoso. Carvão ativado atende outro tipo de problema, com capacidade e vida útil a acompanhar. Nome de filtro não substitui diagnóstico.",
    "checkpointIds": [
      "rt-7-1-4"
    ]
  },
  {
    "id": "sub-7-1-bloco-5",
    "titulo": "Mobiliário e Infraestrutura Predial de Guarda (Conarq e IFLA)",
    "objetivos": [
      "Avaliar mobiliário e arranjo com base em riscos e projeto."
    ],
    "conteudo": "As condições físicas de guarda no depósito definem a longevidade dos acervos:\n* **Estantes de Aço:** Devem ser confeccionadas em chapa de aço dobrada com tratamento antiferruginoso e acabamento estável, resistente, sem bordas cortantes e compatível com a coleção. Pintura em pó adequadamente curada é uma opção; a palavra epóxi sozinha não certifica inércia ou ausência de emissão.\n* **Dimensões de projeto a justificar:** os números seguintes são referências de arranjo, não regra legal universal. Considerar acessibilidade, estabilidade, incêndio e características do espaço.\n  * Prateleira inferior: situada a pelo menos **15 cm acima do nível do piso**, prevenindo sinistros de alagamento acidental, facilitando a limpeza do chão e impedindo o acesso imediato de insetos rastejantes.\n  * Prateleira superior: distante no mínimo **50 cm do teto e das luminárias**, garantindo a circulação adequada de ar e evitando calor focal das lâmpadas.\n  * Afastamento das paredes: estantes devem ficar afastadas **de 5 cm a 10 cm das paredes externas**, impedindo a transferência de umidade por capilaridade e condensação.\n* **Risco de mobiliário inadequado:** Armários, gaveteiros e estantes de madeira não tratada, compensado, aglomerado ou MDF podem emitir compostos voláteis, inclusive ácidos orgânicos e componentes de adesivos. **Lignina não é gás volátil emitido como vapor**; distinguir constituição da madeira e emissões, criando microclimas confinados altamente ácidos que destroem documentos e materiais fotográficos.\n\n**Aplicação e recuperação:** Uma caixa encostada em parede com infiltração pode criar microambiente úmido. Afastar o mobiliário ajuda, mas não corrige a origem da água. A prevenção articula manutenção predial, monitoramento e acondicionamento.",
    "checkpointIds": [
      "cp-7-1-2",
      "rt-7-1-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cassares",
    "titulo": "Norma Cianflone Cassares — Como fazer conservação preventiva em arquivos e bibliotecas (2000)",
    "localizador": "PDF teórico do projeto; capítulos 1, 2, 6 e 8; colaboração de Cláudia Moi.",
    "url": "https://github.com/Heuller/hnc/blob/auditoria-2026-10/acervo-estudos/Preserva%C3%A7%C3%A3o%20f%C3%ADsica/cf5.pdf"
  },
  {
    "id": "cci",
    "titulo": "Canadian Conservation Institute — Caring for paper objects",
    "localizador": "Riscos e cuidados por materiais; distinguir recomendação contextual de norma universal.",
    "url": "https://www.canada.ca/en/conservation-institute/services/preventive-conservation/guidelines-collections/paper-objects.html"
  }
],
};
