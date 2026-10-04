import type { ModuloFilho } from '../../../domain/types';

export const submodulo1110: ModuloFilho = {
  id: 'sub-11-10',
  numero: '11.10',
  titulo: 'Licitações Públicas: Nova Lei nº 14.133/2021, ETP e Termo de Referência',
  titulo_curto: 'Licitações na Lei 14.133/2021',
  descricaoCurta: 'Princípios e finalidades licitatórias na Lei nº 14.133/2021. Modalidades taxativas: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. Critérios de julgamento. Contratação direta: Inexigibilidade vs. Dispensa. Fase preparatória: Estudo Técnico Preliminar (ETP) e Termo de Referência (TR).',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'Nova Lei de Licitações e Contratos (Lei nº 14.133/2021)',
    'Marçal Justen Filho',
    'Tribunal de Contas da União (TCU)',
    'Portal Nacional de Contratações Públicas (PNCP)',
  ],
  alertasCebraspe: [
    'MODALIDADES EXTINTAS E NOVAS (ART. 28 DA LEI 14.133/2021): As modalidades Convite e Tomada de Preços foram TOTALMENTE EXTINTAS do ordenamento jurídico brasileiro. O rol das 5 modalidades atuais é taxativo: 1) Pregão; 2) Concorrência; 3) Concurso; 4) Leilão; 5) Diálogo Competitivo. É terminantemente proibido criar outras modalidades ou combinar modalidades!',
    'INVERSÃO DE FASES COMO REGRA GERAL: Na Lei nº 14.133/2021, a regra geral inverteu o rito da Lei antiga: primeiro ocorre o JULGAMENTO das propostas de preços e lances, e SOMENTE DEPOIS se procede à HABILITAÇÃO documental do licitante classificado em primeiro lugar. A habilitação prévia tornou-se exceção excepcionalíssima.',
    'INEXIGIBILIDADE VS. DISPENSA: Na Inexigibilidade (art. 74) a licitação é inviável por ausência fática de competição (fornecedor exclusivo, notória especialização de serviço intelectual, artista consagrado, credenciamento). Na Dispensa (art. 75) a competição seria perfeitamente viável, mas a lei autoriza a não realização (baixo valor, emergência real, licitação deserta ou fracassada).',
    'ETP VS. TERMO DE REFERÊNCIA (TR): O Estudo Técnico Preliminar (ETP) analisa o problema institucional e comprova a viabilidade técnica e econômica da melhor solução disponível no mercado. O Termo de Referência (TR) vem após o ETP e é o caderno de encargos detalhado do objeto, contendo requisitos, modelo de execução, fiscalização e critérios de medição para compras e serviços.',
  ],
  quadroComparativo: {
    titulo: 'As Cinco Modalidades de Licitação da Lei nº 14.133/2021',
    colunas: ['Modalidade', 'Objeto Principal', 'Critérios de Julgamento Permitidos', 'Particularidade Cebraspe'],
    linhas: [
      ['Pregão', 'Bens e serviços comuns (padrões usuais de mercado)', 'Menor preço ou maior desconto', 'Obrigatório para bens comuns; não se aplica a obras de engenharia'],
      ['Concorrência', 'Bens e serviços especiais, obras e serviços de engenharia', 'Menor preço, maior desconto, melhor técnica, técnica e preço, maior retorno econômico', 'Rito procedimental comum unificado com o pregão'],
      ['Concurso', 'Trabalho técnico, científico ou artístico', 'Melhor técnica ou conteúdo artístico', 'Concessão de prêmio ou remuneração previamente fixada em edital'],
      ['Leilão', 'Alienação de bens móveis inservíveis e imóveis', 'Maior lance (igual ou superior à avaliação)', 'Pode ser conduzido por leiloeiro oficial ou servidor designado'],
      ['Diálogo Competitivo', 'Inovações tecnológicas, soluções complexas não disponíveis prontas', 'Proposta mais vantajosa após rodadas de diálogo', 'Administração conversa com licitantes para construir as soluções'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Princípios e Finalidades da Licitação na Nova Lei nº 14.133/2021

A Lei nº 14.133/2021 consolidou o novo marco legal das licitações e contratos administrativos em todo o Brasil. Conforme seu art. 11, o processo licitatório tem por **finalidades precípuas**:
1. Assegurar a seleção da proposta apta a gerar o **resultado de contratação mais vantajoso**, inclusive no que se refere ao ciclo de vida do objeto;
2. Assegurar **tratamento isonômico** entre os licitantes e a justa competição;
3. Evitar contratações com sobrepreço, preços manifestamente inexequíveis ou superfaturamento na execução;
4. Incentivar a **inovação** e o **desenvolvimento nacional sustentável**.

* **O Princípio da Segregação de Funções (Art. 5º):** Veda expressamente a concentração de atribuições críticas em um único servidor. O agente que planeja a compra ou atua como pregoeiro não pode acumular as funções de fiscal do contrato, ordenador de despesas ou membro do controle interno.

---

### 2. As Cinco Modalidades Licitatórias (Rol Taxativo do Art. 28)

$$\\text{Modalidades} = \\text{Pregão} + \\text{Concorrência} + \\text{Concurso} + \\text{Leilão} + \\text{Diálogo Competitivo}$$

* **Pregão (Art. 29):** Modalidade obrigatória para a aquisição de **bens e serviços comuns**, cujos padrões de desempenho e qualidade possam ser objetivamente definidos pelo edital por meio de especificações usuais de mercado. Critérios de julgamento: menor preço ou maior desconto.
* **Concorrência (Art. 30):** Destinada a contratação de **bens e serviços especiais** e de **obras e serviços comuns e especiais de engenharia**. Admite os critérios de menor preço, melhor técnica ou conteúdo artístico, técnica e preço, maior retorno econômico e maior desconto.
* **Concurso (Art. 31):** Destinado à escolha de trabalho técnico, científico ou artístico, mediante concessão de prêmio ou remuneração ao vencedor. O edital deve ser publicado com antecedência mínima de 35 dias úteis.
* **Leilão (Art. 32):** Destinado à alienação de bens móveis inservíveis ou legalmente apreendidos e de bens imóveis da Administração. Critério: exclusivamente **maior lance**.
* **Diálogo Competitivo (Art. 32):** Modalidade inovadora inspirada no direito europeu, restrita a contratações complexas em que o órgão não consegue especificar a solução no mercado:
  * Desenrola-se em duas fases: na primeira, dialoga-se confidencialmente com os licitantes pré-selecionados para desenvolver soluções; na segunda, abre-se a disputa competitiva entre eles sobre a melhor solução consolidada.

---

### 3. Critérios de Julgamento das Propostas (Art. 33)

1. **Menor Preço:** Vence quem oferecer o menor valor nominal para a entrega do objeto;
2. **Maior Desconto:** Vence quem oferecer o maior percentual de desconto sobre tabela de preços de referência oficial;
3. **Melhor Técnica ou Conteúdo Artístico:** Considera exclusivamente a pontuação técnica obtida no concurso;
4. **Técnica e Preço:** Média ponderada de notas atribuídas à qualidade técnica da proposta e ao preço;
5. **Maior Lance:** Utilizado exclusivamente na modalidade Leilão;
6. **Maior Retorno Econômico:** Utilizado nos contratos de eficiência, nos quais a remuneração da empresa é vinculada a percentual da economia financeira gerada para a Administração (ex.: eficiência energética em prédios da Câmara).

---

### 4. Contratação Direta: Inexigibilidade vs. Dispensa de Licitação

A regra constitucional é licitar (art. 37, XXI, CF/88). A contratação direta é exceção estrita que se bifurca em dois institutos inconfundíveis:

#### 4.1 Inexigibilidade de Licitação (Art. 74 - Rol Exemplificativo)
Ocorre quando há **inviabilidade fática ou jurídica de competição**:
1. **Fornecedor Exclusivo:** Aquisição de materiais, equipamentos ou gêneros que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivo (comprovado por atestado de exclusividade emitido por sindicato ou federação);
2. **Serviços Técnicos Especializados de Natureza Predominantemente Intelectual:** Contratação com profissionais ou empresas de **notória especialização** (estudos técnicos, pareceres jurídicos, restauração de obras de arte e acervos históricos, treinamento e aperfeiçoamento de pessoal);
3. **Artista Consagrado:** Profissional do setor artístico, diretamente ou por empresário exclusivo, consagrado pela crítica especializada ou pela opinião pública;
4. **Credenciamento:** Procedimento auxiliar onde a Administração credencia todos os interessados que preencham os requisitos para prestar determinado serviço por preço fixo tabelado (ex.: credenciamento de médicos, peritos ou tradutores);
5. **Aquisição ou Locação de Imóvel:** Cujas características singulares de localização e instalações tornem sua escolha necessária para atender às finalidades do órgão.

#### 4.2 Dispensa de Licitação (Art. 75 - Rol Taxativo)
A competição seria teoricamente possível, mas a lei expressamente autoriza ou impõe a contratação direta por razões de conveniência pública, celeridade ou pequeno valor:
* **Dispensa em Razão do Valor (Inciso I e II):** Obras e serviços de engenharia ou manutenção de veículos até R$ 100.000,00; outros serviços e compras até R$ 50.000,00 (valores atualizados periodicamente por Decreto Federal).
* **Dispensa por Emergência ou Calamidade (Inciso VIII):** Para atendimento imediato de situação emergencial que cause risco a pessoas, obras ou serviços públicos. Limita-se rigorosamente à parcela indispensável ao atendimento do perigo, pelo prazo máximo de **1 ano** (vedada prorrogação contratual).
* **Licitação Deserta ou Fracassada (Inciso III):** Quando não acudirem interessados (deserta) ou quando todos forem desclassificados/inabilitados (fracassada), desde que mantidas todas as condições preestabelecidas no edital anterior.

---

### 5. Fase Preparatória: Estudo Técnico Preliminar (ETP) e Termo de Referência (TR)

A Lei nº 14.133/2021 estabeleceu o **Planejamento** como princípio expresso de observância obrigatória:
* **Estudo Técnico Preliminar (ETP - Art. 18, § 1º):**
  * É a certidão de nascimento da contratação.
  * Avalia o problema a ser resolvido pela biblioteca ou setor da Câmara, estuda as alternativas tecnológicas e de mercado, analisa o ciclo de vida do objeto, calcula os impactos orçamentários e demonstra conclusivamente a viabilidade técnica e econômica da opção escolhida.
* **Termo de Referência (TR - Art. 6º, XXIII):**
  * Elaborado com base no ETP aprovado.
  * Define pormenorizadamente o objeto a ser licitado, os prazos de entrega, o modelo de fiscalização e gestão contratual, os critérios objetivos de medição e recebimento provisório/definitivo e as obrigações das partes.`,
  checkpoints: [
    {
      id: 'cp-11-10-1',
      pergunta: 'Micro-Checkpoint 1: Modalidades Licitatórias na Lei nº 14.133/2021',
      item: 'Para a aquisição emergencial de obras raras para restauração na Biblioteca da Câmara, o administrador público pode utilizar validamente a modalidade convite, desde que o valor total da compra não ultrapasse os limites fixados para contratações de pequeno valor.',
      gabarito: 'E',
      justificativa: 'Errado! A modalidade Convite (assim como a Tomada de Preços) foi EXTINTA pela Lei nº 14.133/2021. As únicas modalidades existentes são: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. Além disso, restauração de obras raras por notória especialização é hipótese de inexigibilidade de licitação.',
    },
    {
      id: 'cp-11-10-2',
      pergunta: 'Micro-Checkpoint 2: Inexigibilidade para Serviços Técnicos Notórios',
      item: 'A contratação direta de renomado especialista em conservação preventiva de pergaminhos históricos para ministrar treinamento aos servidores bibliotecários da Câmara configura hipótese de inexigibilidade de licitação fundada em notória especialização.',
      gabarito: 'C',
      justificativa: 'Correto! Nos termos do art. 74, inciso III, alínea "f", da Lei nº 14.133/2021, é inexigível a licitação para treinamento e aperfeiçoamento de pessoal prestado por profissional ou empresa de notória especialização.',
    },
    {
      id: 'cp-11-10-3',
      pergunta: 'Micro-Checkpoint 3: Inversão de Fases no Rito Procedimental Comum',
      item: 'Na sistemática procedimental da Lei nº 14.133/2021, a fase de habilitação documental dos licitantes antecede obrigatoriamente a abertura e o julgamento das propostas de preços em todas as modalidades de licitação.',
      gabarito: 'E',
      justificativa: 'Errado! A Lei nº 14.133/2021 adotou como regra geral a inversão de fases: primeiro realiza-se o julgamento das propostas de preços e lances, procedendo-se à habilitação unicamente do licitante vencedor da etapa competitiva (art. 17).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-10-1',
        periodo: '1993',
        disciplina: 'Licitações Históricas',
        focoPrincipal: 'Lei nº 8.666/1993: antigo estatuto com Tomada de Preços e Convite',
        figuraChave: 'Lei 8.666',
      },
      {
        id: 'tl-11-10-2',
        periodo: '2002',
        disciplina: 'Compras Eletrônicas',
        focoPrincipal: 'Lei nº 10.520/2002: criação do Pregão para bens e serviços comuns',
        figuraChave: 'Pregão',
      },
      {
        id: 'tl-11-10-3',
        periodo: '2021',
        disciplina: 'Novo Marco das Licitações',
        focoPrincipal: 'Promulgação da Lei nº 14.133/2021: novo estatuto unificado das contratações públicas',
        figuraChave: 'Nova Lei de Licitações',
      },
    ],
    autores: [
      {
        id: 'aut-11-10-1',
        nome: 'Marçal Justen Filho',
        ano: '2023',
        obraPrincipal: 'Comentários à Lei de Licitações e Contratações Administrativas',
        ideiaChave: 'A centralidade do Estudo Técnico Preliminar e a interpretação dos novos tipos de inexigibilidade e diálogo competitivo.',
        chipPegadinha: 'Afirmar que a Administração pode dispensar o ETP em contratações de alta complexidade tecnológica.',
      },
      {
        id: 'aut-11-10-2',
        nome: 'Joel de Menezes Niebuhr',
        ano: '2023',
        obraPrincipal: 'Dispensa e Inexigibilidade de Licitação na Lei nº 14.133/2021',
        ideiaChave: 'Critérios de inviabilidade de competição na inexigibilidade e rigor formal do Estudo Técnico Preliminar (ETP).',
        chipPegadinha: 'Considerar a notória especialização aplicável a serviços corriqueiros sem natureza predominantemente intelectual.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-10-1',
        afirmacao: 'O diálogo competitivo pode ser utilizado para a aquisição de computadores e cadeiras de escritório padronizadas para bibliotecas públicas.',
        gabarito: 'E',
        porQue: 'Computadores e móveis padronizados são BENS COMUNS, licitados obrigatoriamente por Pregão. O Diálogo Competitivo é restrito a inovações técnicas e soluções complexas indisponíveis prontas no mercado.',
      },
      {
        id: 'peg-11-10-2',
        afirmacao: 'O rol de hipóteses de dispensa de licitação previsto na Lei nº 14.133/2021 é exemplificativo, cabendo ao gestor criar novas hipóteses motivadas.',
        gabarito: 'E',
        porQue: 'O rol de DISPENSA é estritamente TAXATIVO (art. 75). Quem possui rol exemplificativo na lei é a Inexigibilidade (art. 74).',
      },
      {
        id: 'peg-11-10-3',
        afirmacao: 'O princípio da segregação de funções veda que o mesmo agente público atue simultaneamente na confecção do termo de referência e na fiscalização financeira do respectivo contrato.',
        gabarito: 'C',
        porQue: 'Correto! A segregação de funções impede a sobreposição de papéis em fases distintas e fiscalizatórias do processo de contratação (art. 5º da Lei 14.133/21).',
      },
    ],
  },
};
