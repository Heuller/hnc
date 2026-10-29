import type { ModuloFilho } from '../../../domain/types';

export const submodulo133: ModuloFilho = {
  id: 'sub-13-3',
  numero: '13.3',
  editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)',
  preRequisitos: ["sub-13-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-13-4",
          "titulo": "Ortografia, Gêneros Textuais e Colocação Pronominal",
          "motivo": "Sintaxe da pontuação e casos especiais de colocação pronominal."
      }
  ],
  titulo: 'Sintaxe Avançada, Pontuação, Concordância, Regência e Crase',
  antesDeLer: [
  {
    "termo": "Concordância",
    "definicao": "Relação de flexão que exige identificar núcleo e construção.",
    "exemploBiblioteca": "O termo mais próximo do verbo não é necessariamente seu sujeito."
  },
  {
    "termo": "Regência",
    "definicao": "Relação de complementação conforme sentido e construção.",
    "exemploBiblioteca": "O uso da preposição precisa ser confirmado pelo termo regente."
  }
],
  descricaoCurta:
    "Reconhecer núcleo do sujeito, verbo e complementos em construções de prova. Aplicar a regra geral e distinguir haver de existir. Testar transitividade e construção antes de decidir a concordância. Justificar vírgulas por estrutura e distinguir pausas subjetivas de regra. Comparar duas frases gramaticais que não apresentam a mesma informação. Relacionar sentido e complemento, inclusive em reescritas. Explicar a presença ou ausência do acento grave pela construção. Conferir flexão e separar preservação do evento de identidade discursiva.",
  tempoEstimadoMinutos: 30,
  autoresChave: [
  "Manual de Redação da Presidência da República, 3ª edição (2018)",
  "Cunha e Cintra — Nova gramática do português contemporâneo"
],
  alertasCebraspe: [
  "Haver com sentido de existir é impessoal e fica na terceira pessoa do singular. Documentos não é sujeito desse verbo na análise normativa. Com existir, a construção muda: Existiam documentos pendentes.",
  "Precisar de é transitivo indireto nessa acepção; se indetermina o sujeito e o verbo fica no singular: Precisa-se de profissionais. Revisar é transitivo direto no exemplo, admite passiva sintética e concorda com documentos. A comparação erra ao igualar as funções de se.",
  "A expressão a partir contém infinitivo e não recebe artigo feminino nessa construção. Não há os dois elementos necessários à fusão em à. O gênero de maio não produz essa exigência e sequer é o termo imediatamente regido."
],
  secoes: [
    {
      id: 'sec-particula-se',
      nivel: 3,
      titulo: '1. A Bipartição Sintática da Partícula "SE"',
      conteudo:
        'A distinção funcional entre Pronome Apassivador (Voz Passiva Sintética) e Índice de Indeterminação do Sujeito. O teste da conversão analítica e as restrições de concordância.',
    },
    {
      id: 'sec-concordancia-critica',
      nivel: 3,
      titulo: '2. Concordância Verbal Crítica: Sujeitos Partitivos e Expressões Percentuais',
      conteudo:
        'A dupla concordância com expressões partitivas (núcleo singular vs especificador plural), percentuais acompanhados de substantivo e sujeitos compostos antepostos vs pospostos.',
    },
    {
      id: 'sec-regencia-parlamentar',
      nivel: 3,
      titulo: '3. A Regência dos Verbos Parlamentares Segundo Celso Pedro Luft',
      conteudo:
        'O comportamento morfossintático dos verbos implicar, visar, assistir, obedecer, atender, aspirar e esquecer/lembrar na redação formal do Congresso.',
    },
    {
      id: 'sec-algoritmo-crase',
      nivel: 3,
      titulo: '4. O Sistema Algorítmico da Crase',
      conteudo:
        'Casos de proibição categórica, obrigatoriedade estrita e os três casos facultativos clássicos (nomes próprios femininos, possessivos adjetivos femininos singulares e após a preposição até).',
    },
    {
      id: 'sec-pontuacao-sintatica',
      nivel: 3,
      titulo: '5. A Sintaxe da Pontuação: A Vírgula Proibida, Obrigatória e Facultativa',
      conteudo:
        'A interdição da vírgula entre sujeito e predicado, adjuntos adverbiais curtos vs longos, e o isolamento de vocativos e apostos explicativos.',
    },
    {
      id: 'sec-adjetivas-semantica',
      nivel: 3,
      titulo: '6. A Vírgula Semântica nas Orações Subordinadas Adjetivas',
      conteudo:
        'O contraste semântico entre explicitação universal (com vírgulas) e restrição partitiva (sem vírgulas) e o padrão decisório da banca Cebraspe.',
    },
  ],
  teoriaDensaMarkdown: "### Sintaxe como método: localizar relações antes de aplicar regras\n\nSintaxe estuda relações na oração e entre orações. Para a prova, não basta nomear classes de palavras: é preciso explicar por que a flexão, a preposição ou a pontuação se mantém numa reescrita. O primeiro passo é descobrir a estrutura da frase, sem presumir que sujeito é sempre quem pratica uma ação ou que ele aparece antes do verbo.\n\nObserve: **“A equipe de bibliotecários revisou os registros.”** O sujeito é o grupo nominal inteiro A equipe de bibliotecários; seu núcleo é equipe. O verbo revisou concorda com esse núcleo singular. Os registros completa diretamente o sentido de revisar e é objeto direto. Se a frase começar por “Os registros foram revisados”, o sujeito passará a ser os registros, embora eles continuem sendo o elemento que recebe a ação.\n\n**Procedimento de análise:** localize verbos e locuções; identifique que participantes e complementos são exigidos no sentido em uso; delimite o sujeito quando houver; encontre o núcleo; examine os modificadores e relações entre orações. Perguntar apenas “quem?” pode falhar em construções sem agente humano, na voz passiva ou sem sujeito.\n\nCompare **“Chegaram os relatórios.”** A posição posterior não transforma relatórios em objeto: é sujeito e o plural comanda chegaram. Em **“Havia relatórios”**, a acepção existencial de haver produz oração sem sujeito na análise normativa, e não se repete a mesma regra.\n\nUm termo longo não altera automaticamente a estrutura básica. Intercalar informações entre o sujeito e o verbo pode dificultar a leitura, mas não muda, por si, o núcleo que determina concordância. Nos itens de reescrita, preserve o mapa de relações antes de avaliar a alteração sugerida.\n\n### Concordância verbal: sujeito, impessoalidade e locuções\n\nA regra geral da concordância verbal relaciona verbo e sujeito em pessoa e número. Com sujeito simples, identifique seu núcleo; com sujeito composto, examine posição e coordenação, pois existem construções particulares. A presença de palavra plural perto do verbo não basta para exigir plural, nem um nome coletivo torna toda concordância opcional.\n\n**Haver existencial** é impessoal: “Havia livros na mesa”, “Houve alterações” e “Deve haver alternativas”. O auxiliar da locução acompanha essa impessoalidade: não se passa para “devem haver” apenas por alternativas estar no plural. **Existir** é pessoal no mesmo tipo de conteúdo: “Existiam livros”, “Devem existir alternativas”. A reescrita precisa mudar a flexão quando a nova estrutura o exige.\n\n**Exemplo resolvido.** “Pode haver inconsistências” → “Podem existir inconsistências”. No primeiro caso, a locução mantém a forma singular por haver impessoal. No segundo, inconsistências é sujeito plural de existir e a locução concorda. Julgar somente pela semelhança de sentido dos verbos levaria a perder a diferença sintática.\n\n**Fazer indicando tempo transcorrido** também apresenta uso impessoal: “Faz dois anos que o catálogo foi revisto”. Não aplique essa regra a qualquer fazer: “Os técnicos fizeram duas revisões” tem sujeito e outro emprego do verbo. A acepção e a construção decidem.\n\nCom verbos de fenômenos naturais, observe se há uso literal ou figurado e presença de sujeito. Uma regra decorada fora do contexto pode falhar. A pergunta relevante é: qual construção está efetivamente no enunciado? O Manual de Redação da Presidência, seção 11.7, fornece a referência geral e casos de concordância; aqui os exemplos foram construídos para mostrar o caminho de análise.\n\n### A palavra se: passiva sintética ou sujeito indeterminado\n\nDuas estruturas frequentemente confundidas são a **passiva sintética** e a **indeterminação do sujeito**. Não atribua a mesma função a toda ocorrência de se. Primeiro examine o verbo, seu sentido e seus complementos.\n\nEm **“Revisam-se documentos”**, revisar é transitivo direto e documentos é sujeito paciente na análise normativa. Uma transformação ajuda: “Documentos são revisados”. Como o sujeito é plural, o verbo da passiva sintética concorda. Em **“Precisa-se de profissionais”**, precisar de exige complemento preposicionado; a construção indetermina o sujeito e mantém o verbo na terceira pessoa do singular. “Profissionais são precisados” não é transformação equivalente desse uso.\n\n**Exemplo resolvido.** “Aprovou-se as diretrizes.” Verifique a acepção de aprovar: algo é aprovado. Diretrizes admite a posição de sujeito paciente em “As diretrizes foram aprovadas”. Portanto, a forma correspondente é “Aprovaram-se as diretrizes”. A ordem posterior não torna o sujeito indeterminado.\n\nA transformação para passiva é instrumento de análise, não um comando para trocar qualquer frase sem verificar sentido. Em “A equipe se preparou”, há outra construção; em “Não se sabe se haverá reunião”, o segundo se introduz uma relação distinta. Uma partícula pode desempenhar funções diferentes em contextos próximos.\n\n**Quadro de decisão:** verbo transitivo direto e paciente compatível com a passiva → analisar passiva sintética e concordância; verbo transitivo indireto, intransitivo ou de ligação na construção de indeterminação → verificar o se indeterminador e o singular. Compare sempre com a frase completa, sobretudo quando há locuções, pronomes ou orações que funcionam como termos.\n\n### Pontuação: ligações sintáticas e inserções\n\nA vírgula não é simplesmente uma instrução para respirar. Ela organiza relações, intercalações, deslocamentos e enumerações. O Manual de Redação, seção 11.9, destaca o problema de separar termos estreitamente ligados, como sujeito e verbo ou verbo e complemento, sem uma construção que justifique isso.\n\n**“A comissão informou o prazo aos candidatos.”** Não se insere vírgula entre comissão e informou apenas porque o sujeito é longo; tampouco se separa informou de o prazo por uma pausa desejada. Agora compare: **“A comissão, após a reunião, informou o prazo.”** As vírgulas isolam o segmento intercalado após a reunião. O par não tem a função de separar arbitrariamente sujeito e verbo.\n\nEm **“Os relatórios, segundo a equipe, foram revisados”**, a expressão intercalada pede exame como unidade. Retirar apenas uma vírgula deixa a marcação incompleta. Em **“Colegas, revisem os dados”**, colegas é vocativo; em **“Os colegas revisaram os dados”**, integra o sujeito. A diferença de função explica a diferença de pontuação.\n\nO ponto e vírgula pode organizar estruturas coordenadas mais complexas; dois-pontos podem introduzir explicação, especificação ou outra relação cabível. Não são substitutos universais para vírgula ou ponto. A reescrita exige preservar a construção e o sentido solicitado.\n\n**Exemplo de elipse:** “A primeira equipe revisou títulos; a segunda, descritores.” A vírgula após segunda pode marcar o verbo subentendido. Não é caso de proibir toda vírgula depois de um sujeito, pois a análise precisa reconhecer a omissão. Regras de proibição devem ser aplicadas à estrutura real, sem apagar seus contextos.\n\n### Orações relativas: restrição, explicação e sentido\n\nCompare **“Os relatórios que continham anexos foram devolvidos”** e **“Os relatórios, que continham anexos, foram devolvidos.”** Na primeira, a relativa sem vírgulas delimita o grupo de relatórios pela condição de conter anexos. Na segunda, a relativa explicativa acrescenta informação sobre os relatórios já identificados no contexto. A alteração pode preservar correção gramatical, mas mudar o alcance da informação.\n\nÉ preciso evitar outra generalização: a explicativa não afirma necessariamente algo sobre todos os relatórios existentes no mundo. O conjunto é o referente determinado pelo contexto. Na frase da aula, a oposição relevante é entre selecionar um subconjunto e acrescentar informação ao conjunto já referido.\n\n**Exemplo resolvido.** O texto informa que apenas parte da equipe participou do curso: “Os servidores que participaram receberam certificado.” Isolar a relativa por vírgulas pode passar a apresentar a participação como informação atribuída ao grupo referido, alterando a restrição. Para julgar o item, separe dois critérios: a frase nova é gramatical? Ela mantém o mesmo sentido no contexto? Um enunciado pode exigir ambos.\n\nPronome relativo também participa da estrutura interna da oração. Em **“a norma a que a equipe se referiu”**, a preposição vem da regência de referir-se. Em **“a norma que a equipe revisou”**, revisar nessa acepção não exige a mesma preposição. Substituir o verbo pode exigir ajustar a construção relativa.\n\nNão conclua que a retirada de vírgulas sempre muda o sentido de qualquer segmento: vocativo, aposto, oração relativa e adjunto são estruturas distintas. Identificar o papel vem antes de aplicar o diagnóstico. O caso das orações adjetivas é uma situação específica, não uma regra para toda vírgula da língua.\n\n### Regência: a acepção do verbo e a preposição exigida\n\nRegência descreve relações de dependência e complementação. Na regência verbal, examine o verbo no sentido em uso; na nominal, o nome que exige ou admite complemento. O mesmo verbo pode ter construções diferentes conforme a acepção, de modo que decorar uma preposição única para toda ocorrência é um atalho inseguro.\n\n**Aspirar** pode indicar inalar: “Aspirou o ar”. No sentido de almejar, a norma-padrão trabalhada no Manual apresenta complemento com a: “Aspira ao cargo”. **Assistir**, no sentido de presenciar, aparece com a nessa referência: “Assistiu à sessão”. Em outros sentidos, a regência pode variar. O item deve indicar uma frase e um sentido suficientes para análise.\n\n**Exemplo resolvido.** “A norma de que necessitamos” e “A norma a que nos referimos”. A preposição exigida pelo verbo acompanha a construção relativa: necessitar de; referir-se a. Trocar apenas de por a, mantendo necessitamos, não é uma simples variação estética. A mudança afeta a ligação entre verbo e complemento.\n\n**Regência nominal:** “favorável à proposta”, “necessidade de revisão”, “compatível com o sistema”. A preposição não surge apenas porque a palavra seguinte é feminina. Ela decorre da relação do termo regente com o complemento. Isso prepara a análise da crase, que exige distinguir preposição e artigo/demonstrativo.\n\nAo reescrever uma passagem, verifique se a troca lexical alterou a regência, se os pronomes continuam com antecedente claro e se o sentido permaneceu. A sinonímia aproximada de dois verbos não garante que aceitem a mesma construção nem que produzam frase equivalente em qualquer contexto.\n\n### Crase: verificar os dois elementos e os casos de facultatividade\n\nCrase é fusão de vogais em determinadas construções; o acento grave sinaliza situações como a combinação da preposição a com artigo a(s) ou com o a inicial de demonstrativos como aquela. Não é um acento que aparece em qualquer palavra feminina. A análise pede dois passos: o termo anterior exige/admite a preposição? O termo seguinte fornece o segundo elemento?\n\nEm **“A equipe se referiu à norma”**, referir-se a fornece preposição e a norma fornece artigo. Em **“A equipe revisou a norma”**, revisar é transitivo direto nessa acepção; o a é artigo e não recebe acento grave. O teste com masculino pode ajudar: referiu-se ao regulamento versus revisou o regulamento. É uma ferramenta de comparação, não substituto da identificação da construção.\n\nEm **“referiu-se àquela norma”**, o segundo a vem do demonstrativo. Diante de infinitivo na expressão **“a partir”**, não há artigo feminino para essa fusão: o acento não cabe. Também não se acrescenta acento grave por simples proximidade com palavra feminina em “a todas as equipes”, construção em que o a não se funde com todas.\n\nCom possessivo feminino singular acompanhado de substantivo, como **“homenagem a sua equipe”**, o artigo pode ser facultativo no contexto apresentado. Se a regência já fornece a, a presença ou ausência do artigo explica “a sua” e “à sua”. Isso não autoriza omitir preposição obrigatória em outra construção nem estender a facultatividade a todo uso de pronome possessivo.\n\nOutros casos, como locuções femininas, nomes geográficos e expressão à moda de com termo subentendido, exigem regras próprias e contexto. Portanto, “nunca ocorre antes de palavra masculina” é generalização insuficiente quando há uma locução elíptica. Prefira explicar a estrutura a decorar uma proibição sem ressalvas.\n\n### Concordância nominal e reescrita integrada\n\nArtigos, adjetivos, numerais e pronomes adjetivos se relacionam com o substantivo em gênero e número conforme a construção. Em **“As cópias seguem anexas”**, anexas é adjetivo associado a cópias. Em **“As cópias seguem em anexo”**, a locução tem outra estrutura e não se flexiona do mesmo modo. Não basta procurar uma palavra parecida para transportar a regra.\n\nObserve também adjetivo e advérbio. Em **“A equipe ficou meio preocupada”**, meio modifica o adjetivo com valor adverbial; em **“Meia folha foi preenchida”**, meia se relaciona à quantidade do substantivo. O papel sintático-semântico, e não apenas a forma gráfica, explica a flexão.\n\n**Reescrita completa:** “A equipe revisou os registros durante a tarde” → “Os registros foram revisados pela equipe durante a tarde”. O sujeito da nova oração é os registros; foram revisados concorda com ele. A relação principal entre quem revisa e o que é revisado permanece, mas o tópico e o foco informacional podem mudar. Um item que exige manter sentido básico e correção pede análise diferente de um item sobre destaque discursivo.\n\n**Checklist final:** há sujeito ou impessoalidade? Qual o núcleo? O se é passivo ou indeterminador? A nova palavra exige outra preposição? A pontuação delimita a mesma informação? Há os elementos de crase? Os termos nominais concordam conforme seu papel? A frase preserva o alcance solicitado?\n\nResolver por esse encadeamento dá ao aluno uma justificativa recuperável. Uma resposta correta por “soar melhor” pode funcionar em um caso e falhar no seguinte. Nos checkpoints, tente nomear a relação que decide a resposta e depois confronte sua análise com o comentário.",
  teoriaDidaticaMarkdown: "### Revisão: justificar a construção\n\n- Ache o núcleo do sujeito; a palavra plural mais próxima não comanda automaticamente o verbo.\n- Haver existencial: havia documentos, pode haver documentos. Existir: existiam documentos, podem existir documentos.\n- Passiva sintética: revisam-se registros. Indeterminação: precisa-se de profissionais. O sentido e a transitividade decidem a função de se.\n- Não use pausa subjetiva para separar sujeito/verbo ou verbo/complemento. Reconheça inserções e elipses.\n- Relativa restritiva seleciona; explicativa acrescenta informação ao referente. Duas frases corretas podem ter alcances diferentes.\n- Confira regência antes de trocar preposição: necessitar de; referir-se a. A acepção do verbo importa.\n- Crase: preposição mais artigo ou elemento compatível do demonstrativo. Referiu-se à norma; revisou a norma; referiu-se àquela norma; a partir.\n- Artigo facultativo diante de possessivo feminino singular pode explicar a/à sua equipe. Não generalize para todo contexto.\n- Adjetivo e locução não são idênticos: cópias anexas / cópias em anexo.\n\n**Recupere:** explique por que “pode haver” e “podem existir” diferem. Depois transforme uma frase ativa em passiva e confira sujeito, concordância e destaque.\n",
  checkpoints: [
  {
    "id": "chk-13-3-1",
    "pergunta": "Julgue a assertiva referente à concordância verbal com a partícula \"se\" apassivadora:",
    "item": "No trecho \"Aprovou-se, após intensos debates regimentais, as novas diretrizes orçamentárias da União\", a flexão verbal na terceira pessoa do singular justifica-se pelo fato de o sujeito da oração encontrar-se indeterminado pela partícula \"se\".",
    "gabarito": "E",
    "justificativa": "Aprovar é transitivo direto no exemplo. Na passiva sintética, as novas diretrizes orçamentárias da União funciona como sujeito paciente plural, exigindo Aprovaram-se. A posição posterior não torna o sujeito indeterminado. A referência antiga a página de gramática sem edição verificável foi retirada.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "versao_correta": "Aprovaram-se, após intensos debates regimentais, as novas diretrizes orçamentárias da União."
  },
  {
    "id": "chk-13-3-2",
    "pergunta": "Julgue o item quanto à pontuação de orações adjetivas e seu impacto semântico no Cebraspe:",
    "item": "No trecho \"Os técnicos legislativos, que participaram do treinamento de preservação digital, foram certificados pela diretoria\", a supressão de ambas as vírgulas preservaria a correção gramatical do período, mas alteraria os sentidos originais do texto.",
    "gabarito": "C",
    "justificativa": "As vírgulas isolam a relativa explicativa sobre o grupo de técnicos referido. Sem elas, a relativa passa a restringir o referente aos participantes. No contexto apresentado, ambas as estruturas são gramaticais, mas o alcance da informação muda. Não se trata de identificar todos os técnicos existentes fora do contexto.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática."
  },
  {
    "id": "chk-13-3-3",
    "pergunta": "Julgue a assertiva referente ao emprego facultativo do acento grave indicativo de crase:",
    "item": "No trecho \"O deputado prestou homenagem a sua bancada partidária\", a aposição do acento grave na palavra \"a\", resultando em \"à sua bancada partidária\", manteria a correção gramatical e os sentidos originais do texto.",
    "gabarito": "C",
    "justificativa": "Prestar homenagem a fornece a preposição. Diante de sua bancada partidária, o artigo pode ser usado ou omitido no contexto da frase. Com o artigo, a fusão resulta em à sua; sem ele, permanece a sua. A facultatividade do artigo não elimina a preposição.",
    "fonte": "Gramática normativa: regência e artigo facultativo diante de possessivo feminino singular acompanhado de substantivo; análise da construção autoral."
  },
  {
    "id": "rt-13-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “A equipe de bibliotecários revisou os registros”, o verbo concorda com equipe, núcleo do sujeito, e não precisa ir ao plural por causa de bibliotecários.",
    "gabarito": "C",
    "justificativa": "O sujeito é A equipe de bibliotecários, cujo núcleo singular é equipe. O termo preposicionado especifica o coletivo, mas não passa a comandar a concordância nessa construção. Localize o núcleo antes de olhar a palavra mais próxima do verbo.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “Havia documentos pendentes”, o plural documentos exige substituir havia por haviam, mantendo o sentido existencial.",
    "gabarito": "E",
    "justificativa": "Haver com sentido de existir é impessoal e fica na terceira pessoa do singular. Documentos não é sujeito desse verbo na análise normativa. Com existir, a construção muda: Existiam documentos pendentes.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar",
    "versao_correta": "Na acepção existencial, mantém-se Havia documentos pendentes."
  },
  {
    "id": "rt-13-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na norma-padrão, “Precisam-se de profissionais” e “Revisam-se documentos” apresentam, igualmente, sujeito paciente plural e concordância adequada.",
    "gabarito": "E",
    "justificativa": "Precisar de é transitivo indireto nessa acepção; se indetermina o sujeito e o verbo fica no singular: Precisa-se de profissionais. Revisar é transitivo direto no exemplo, admite passiva sintética e concorda com documentos. A comparação erra ao igualar as funções de se.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar",
    "versao_correta": "Precisa-se de profissionais e Revisam-se documentos têm estruturas e funções de se diferentes."
  },
  {
    "id": "rt-13-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “A comissão informou o prazo aos candidatos”, a colocação de uma vírgula entre informou e o prazo não é justificada apenas pelo desejo de marcar uma pausa de leitura.",
    "gabarito": "C",
    "justificativa": "Verbo e seu complemento mantêm ligação sintática. Sem estrutura intercalada ou outra construção que explique a pontuação, a pausa subjetiva não autoriza separar esses termos. Identificar a relação sintática precede a justificativa prosódica.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “Os relatórios que continham anexos foram devolvidos”, as orações permitem restringir a devolução ao grupo de relatórios identificado pela condição de conter anexos.",
    "gabarito": "C",
    "justificativa": "A oração relativa sem vírgulas delimita o referente: relatórios que continham anexos. Não se afirma que todos os relatórios existentes possuíam anexos. Ao isolar a relativa por vírgulas, muda-se seu papel para explicativo no contexto.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-3-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No trecho “A servidora se referiu àquela norma”, o acento grave pode resultar da combinação da preposição exigida por referir-se com o a inicial do demonstrativo aquela.",
    "gabarito": "C",
    "justificativa": "Referir-se exige preposição a; aquela admite a fusão com seu a inicial. O fenômeno não se limita ao artigo feminino a. O teste verifica a regência e o termo seguinte, e não somente o gênero da palavra norma.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-3-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “O trabalho começou a partir de maio”, a inserção de acento grave em a partir seria exigida porque maio é palavra masculina.",
    "gabarito": "E",
    "justificativa": "A expressão a partir contém infinitivo e não recebe artigo feminino nessa construção. Não há os dois elementos necessários à fusão em à. O gênero de maio não produz essa exigência e sequer é o termo imediatamente regido.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar",
    "versao_correta": "Mantém-se a partir, sem acento grave."
  },
  {
    "id": "rt-13-3-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “As cópias seguem anexas”, anexas concorda com cópias; a expressão em anexo teria outra estrutura e não exigiria a mesma flexão.",
    "gabarito": "C",
    "justificativa": "Como adjetivo, anexas acompanha o substantivo feminino plural. Em anexo funciona como locução, e não como o mesmo adjetivo flexionado. Não se deve transportar mecanicamente a flexão de uma construção para outra.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-3-9",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A substituição de uma oração ativa por passiva pode preservar o evento descrito, mas exige conferir concordância e pode alterar o foco informacional da frase.",
    "gabarito": "C",
    "justificativa": "Converter “A equipe revisou os registros” em “Os registros foram revisados pela equipe” conserva participantes e relação principal. O sujeito passa a ser registros e a concordância muda. O destaque discursivo também pode mudar; preservar evento não significa identidade absoluta de todos os efeitos.",
    "fonte": "Manual de Redação da Presidência da República, 3ª ed. (2018), seções 11.7, 11.8 e 11.9; exemplos autorais de análise sintática.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-13-3-fonte-mrpr",
      "nome": "Manual de Redação da Presidência da República, 3ª edição (2018)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Manual de Redação da Presidência da República, 3ª edição (2018)",
      "ideiaChave": "Seções 11.7 (concordância), 11.8 (regência) e 11.9 (pontuação). Os exemplos desta aula são autorais.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-13-3-fonte-gramatica",
      "nome": "Cunha e Cintra — Nova gramática do português contemporâneo",
      "ano": "Referência de consulta",
      "obraPrincipal": "Cunha e Cintra — Nova gramática do português contemporâneo",
      "ideiaChave": "Capítulos de sintaxe, regência e concordância; conferir edição ao consultar. Não se atribui página não verificada à explicação.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-13-3-7",
      "afirmacao": "Em “O trabalho começou a partir de maio”, a inserção de acento grave em a partir seria exigida porque maio é palavra masculina.",
      "gabarito": "E",
      "porQue": "A expressão a partir contém infinitivo e não recebe artigo feminino nessa construção. Não há os dois elementos necessários à fusão em à. O gênero de maio não produz essa exigência e sequer é o termo imediatamente regido."
    },
    {
      "id": "memoria-rt-13-3-8",
      "afirmacao": "Em “As cópias seguem anexas”, anexas concorda com cópias; a expressão em anexo teria outra estrutura e não exigiria a mesma flexão.",
      "gabarito": "C",
      "porQue": "Como adjetivo, anexas acompanha o substantivo feminino plural. Em anexo funciona como locução, e não como o mesmo adjetivo flexionado. Não se deve transportar mecanicamente a flexão de uma construção para outra."
    },
    {
      "id": "memoria-rt-13-3-9",
      "afirmacao": "A substituição de uma oração ativa por passiva pode preservar o evento descrito, mas exige conferir concordância e pode alterar o foco informacional da frase.",
      "gabarito": "C",
      "porQue": "Converter “A equipe revisou os registros” em “Os registros foram revisados pela equipe” conserva participantes e relação principal. O sujeito passa a ser registros e a concordância muda. O destaque discursivo também pode mudar; preservar evento não significa identidade absoluta de todos os efeitos."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-13-3-bloco-1",
    "titulo": "Sintaxe como método: localizar relações antes de aplicar regras",
    "objetivos": [
      "Reconhecer núcleo do sujeito, verbo e complementos em construções de prova."
    ],
    "conteudo": "Sintaxe estuda relações na oração e entre orações. Para a prova, não basta nomear classes de palavras: é preciso explicar por que a flexão, a preposição ou a pontuação se mantém numa reescrita. O primeiro passo é descobrir a estrutura da frase, sem presumir que sujeito é sempre quem pratica uma ação ou que ele aparece antes do verbo.\n\nObserve: **“A equipe de bibliotecários revisou os registros.”** O sujeito é o grupo nominal inteiro A equipe de bibliotecários; seu núcleo é equipe. O verbo revisou concorda com esse núcleo singular. Os registros completa diretamente o sentido de revisar e é objeto direto. Se a frase começar por “Os registros foram revisados”, o sujeito passará a ser os registros, embora eles continuem sendo o elemento que recebe a ação.\n\n**Procedimento de análise:** localize verbos e locuções; identifique que participantes e complementos são exigidos no sentido em uso; delimite o sujeito quando houver; encontre o núcleo; examine os modificadores e relações entre orações. Perguntar apenas “quem?” pode falhar em construções sem agente humano, na voz passiva ou sem sujeito.\n\nCompare **“Chegaram os relatórios.”** A posição posterior não transforma relatórios em objeto: é sujeito e o plural comanda chegaram. Em **“Havia relatórios”**, a acepção existencial de haver produz oração sem sujeito na análise normativa, e não se repete a mesma regra.\n\nUm termo longo não altera automaticamente a estrutura básica. Intercalar informações entre o sujeito e o verbo pode dificultar a leitura, mas não muda, por si, o núcleo que determina concordância. Nos itens de reescrita, preserve o mapa de relações antes de avaliar a alteração sugerida.",
    "checkpointIds": [
      "rt-13-3-1"
    ]
  },
  {
    "id": "sub-13-3-bloco-2",
    "titulo": "Concordância verbal: sujeito, impessoalidade e locuções",
    "objetivos": [
      "Aplicar a regra geral e distinguir haver de existir."
    ],
    "conteudo": "A regra geral da concordância verbal relaciona verbo e sujeito em pessoa e número. Com sujeito simples, identifique seu núcleo; com sujeito composto, examine posição e coordenação, pois existem construções particulares. A presença de palavra plural perto do verbo não basta para exigir plural, nem um nome coletivo torna toda concordância opcional.\n\n**Haver existencial** é impessoal: “Havia livros na mesa”, “Houve alterações” e “Deve haver alternativas”. O auxiliar da locução acompanha essa impessoalidade: não se passa para “devem haver” apenas por alternativas estar no plural. **Existir** é pessoal no mesmo tipo de conteúdo: “Existiam livros”, “Devem existir alternativas”. A reescrita precisa mudar a flexão quando a nova estrutura o exige.\n\n**Exemplo resolvido.** “Pode haver inconsistências” → “Podem existir inconsistências”. No primeiro caso, a locução mantém a forma singular por haver impessoal. No segundo, inconsistências é sujeito plural de existir e a locução concorda. Julgar somente pela semelhança de sentido dos verbos levaria a perder a diferença sintática.\n\n**Fazer indicando tempo transcorrido** também apresenta uso impessoal: “Faz dois anos que o catálogo foi revisto”. Não aplique essa regra a qualquer fazer: “Os técnicos fizeram duas revisões” tem sujeito e outro emprego do verbo. A acepção e a construção decidem.\n\nCom verbos de fenômenos naturais, observe se há uso literal ou figurado e presença de sujeito. Uma regra decorada fora do contexto pode falhar. A pergunta relevante é: qual construção está efetivamente no enunciado? O Manual de Redação da Presidência, seção 11.7, fornece a referência geral e casos de concordância; aqui os exemplos foram construídos para mostrar o caminho de análise.",
    "checkpointIds": [
      "rt-13-3-2"
    ]
  },
  {
    "id": "sub-13-3-bloco-3",
    "titulo": "A palavra se: passiva sintética ou sujeito indeterminado",
    "objetivos": [
      "Testar transitividade e construção antes de decidir a concordância."
    ],
    "conteudo": "Duas estruturas frequentemente confundidas são a **passiva sintética** e a **indeterminação do sujeito**. Não atribua a mesma função a toda ocorrência de se. Primeiro examine o verbo, seu sentido e seus complementos.\n\nEm **“Revisam-se documentos”**, revisar é transitivo direto e documentos é sujeito paciente na análise normativa. Uma transformação ajuda: “Documentos são revisados”. Como o sujeito é plural, o verbo da passiva sintética concorda. Em **“Precisa-se de profissionais”**, precisar de exige complemento preposicionado; a construção indetermina o sujeito e mantém o verbo na terceira pessoa do singular. “Profissionais são precisados” não é transformação equivalente desse uso.\n\n**Exemplo resolvido.** “Aprovou-se as diretrizes.” Verifique a acepção de aprovar: algo é aprovado. Diretrizes admite a posição de sujeito paciente em “As diretrizes foram aprovadas”. Portanto, a forma correspondente é “Aprovaram-se as diretrizes”. A ordem posterior não torna o sujeito indeterminado.\n\nA transformação para passiva é instrumento de análise, não um comando para trocar qualquer frase sem verificar sentido. Em “A equipe se preparou”, há outra construção; em “Não se sabe se haverá reunião”, o segundo se introduz uma relação distinta. Uma partícula pode desempenhar funções diferentes em contextos próximos.\n\n**Quadro de decisão:** verbo transitivo direto e paciente compatível com a passiva → analisar passiva sintética e concordância; verbo transitivo indireto, intransitivo ou de ligação na construção de indeterminação → verificar o se indeterminador e o singular. Compare sempre com a frase completa, sobretudo quando há locuções, pronomes ou orações que funcionam como termos.",
    "checkpointIds": [
      "chk-13-3-1",
      "rt-13-3-3"
    ]
  },
  {
    "id": "sub-13-3-bloco-4",
    "titulo": "Pontuação: ligações sintáticas e inserções",
    "objetivos": [
      "Justificar vírgulas por estrutura e distinguir pausas subjetivas de regra."
    ],
    "conteudo": "A vírgula não é simplesmente uma instrução para respirar. Ela organiza relações, intercalações, deslocamentos e enumerações. O Manual de Redação, seção 11.9, destaca o problema de separar termos estreitamente ligados, como sujeito e verbo ou verbo e complemento, sem uma construção que justifique isso.\n\n**“A comissão informou o prazo aos candidatos.”** Não se insere vírgula entre comissão e informou apenas porque o sujeito é longo; tampouco se separa informou de o prazo por uma pausa desejada. Agora compare: **“A comissão, após a reunião, informou o prazo.”** As vírgulas isolam o segmento intercalado após a reunião. O par não tem a função de separar arbitrariamente sujeito e verbo.\n\nEm **“Os relatórios, segundo a equipe, foram revisados”**, a expressão intercalada pede exame como unidade. Retirar apenas uma vírgula deixa a marcação incompleta. Em **“Colegas, revisem os dados”**, colegas é vocativo; em **“Os colegas revisaram os dados”**, integra o sujeito. A diferença de função explica a diferença de pontuação.\n\nO ponto e vírgula pode organizar estruturas coordenadas mais complexas; dois-pontos podem introduzir explicação, especificação ou outra relação cabível. Não são substitutos universais para vírgula ou ponto. A reescrita exige preservar a construção e o sentido solicitado.\n\n**Exemplo de elipse:** “A primeira equipe revisou títulos; a segunda, descritores.” A vírgula após segunda pode marcar o verbo subentendido. Não é caso de proibir toda vírgula depois de um sujeito, pois a análise precisa reconhecer a omissão. Regras de proibição devem ser aplicadas à estrutura real, sem apagar seus contextos.",
    "checkpointIds": [
      "rt-13-3-4"
    ]
  },
  {
    "id": "sub-13-3-bloco-5",
    "titulo": "Orações relativas: restrição, explicação e sentido",
    "objetivos": [
      "Comparar duas frases gramaticais que não apresentam a mesma informação."
    ],
    "conteudo": "Compare **“Os relatórios que continham anexos foram devolvidos”** e **“Os relatórios, que continham anexos, foram devolvidos.”** Na primeira, a relativa sem vírgulas delimita o grupo de relatórios pela condição de conter anexos. Na segunda, a relativa explicativa acrescenta informação sobre os relatórios já identificados no contexto. A alteração pode preservar correção gramatical, mas mudar o alcance da informação.\n\nÉ preciso evitar outra generalização: a explicativa não afirma necessariamente algo sobre todos os relatórios existentes no mundo. O conjunto é o referente determinado pelo contexto. Na frase da aula, a oposição relevante é entre selecionar um subconjunto e acrescentar informação ao conjunto já referido.\n\n**Exemplo resolvido.** O texto informa que apenas parte da equipe participou do curso: “Os servidores que participaram receberam certificado.” Isolar a relativa por vírgulas pode passar a apresentar a participação como informação atribuída ao grupo referido, alterando a restrição. Para julgar o item, separe dois critérios: a frase nova é gramatical? Ela mantém o mesmo sentido no contexto? Um enunciado pode exigir ambos.\n\nPronome relativo também participa da estrutura interna da oração. Em **“a norma a que a equipe se referiu”**, a preposição vem da regência de referir-se. Em **“a norma que a equipe revisou”**, revisar nessa acepção não exige a mesma preposição. Substituir o verbo pode exigir ajustar a construção relativa.\n\nNão conclua que a retirada de vírgulas sempre muda o sentido de qualquer segmento: vocativo, aposto, oração relativa e adjunto são estruturas distintas. Identificar o papel vem antes de aplicar o diagnóstico. O caso das orações adjetivas é uma situação específica, não uma regra para toda vírgula da língua.",
    "checkpointIds": [
      "chk-13-3-2",
      "rt-13-3-5"
    ]
  },
  {
    "id": "sub-13-3-bloco-6",
    "titulo": "Regência: a acepção do verbo e a preposição exigida",
    "objetivos": [
      "Relacionar sentido e complemento, inclusive em reescritas."
    ],
    "conteudo": "Regência descreve relações de dependência e complementação. Na regência verbal, examine o verbo no sentido em uso; na nominal, o nome que exige ou admite complemento. O mesmo verbo pode ter construções diferentes conforme a acepção, de modo que decorar uma preposição única para toda ocorrência é um atalho inseguro.\n\n**Aspirar** pode indicar inalar: “Aspirou o ar”. No sentido de almejar, a norma-padrão trabalhada no Manual apresenta complemento com a: “Aspira ao cargo”. **Assistir**, no sentido de presenciar, aparece com a nessa referência: “Assistiu à sessão”. Em outros sentidos, a regência pode variar. O item deve indicar uma frase e um sentido suficientes para análise.\n\n**Exemplo resolvido.** “A norma de que necessitamos” e “A norma a que nos referimos”. A preposição exigida pelo verbo acompanha a construção relativa: necessitar de; referir-se a. Trocar apenas de por a, mantendo necessitamos, não é uma simples variação estética. A mudança afeta a ligação entre verbo e complemento.\n\n**Regência nominal:** “favorável à proposta”, “necessidade de revisão”, “compatível com o sistema”. A preposição não surge apenas porque a palavra seguinte é feminina. Ela decorre da relação do termo regente com o complemento. Isso prepara a análise da crase, que exige distinguir preposição e artigo/demonstrativo.\n\nAo reescrever uma passagem, verifique se a troca lexical alterou a regência, se os pronomes continuam com antecedente claro e se o sentido permaneceu. A sinonímia aproximada de dois verbos não garante que aceitem a mesma construção nem que produzam frase equivalente em qualquer contexto.",
    "checkpointIds": []
  },
  {
    "id": "sub-13-3-bloco-7",
    "titulo": "Crase: verificar os dois elementos e os casos de facultatividade",
    "objetivos": [
      "Explicar a presença ou ausência do acento grave pela construção."
    ],
    "conteudo": "Crase é fusão de vogais em determinadas construções; o acento grave sinaliza situações como a combinação da preposição a com artigo a(s) ou com o a inicial de demonstrativos como aquela. Não é um acento que aparece em qualquer palavra feminina. A análise pede dois passos: o termo anterior exige/admite a preposição? O termo seguinte fornece o segundo elemento?\n\nEm **“A equipe se referiu à norma”**, referir-se a fornece preposição e a norma fornece artigo. Em **“A equipe revisou a norma”**, revisar é transitivo direto nessa acepção; o a é artigo e não recebe acento grave. O teste com masculino pode ajudar: referiu-se ao regulamento versus revisou o regulamento. É uma ferramenta de comparação, não substituto da identificação da construção.\n\nEm **“referiu-se àquela norma”**, o segundo a vem do demonstrativo. Diante de infinitivo na expressão **“a partir”**, não há artigo feminino para essa fusão: o acento não cabe. Também não se acrescenta acento grave por simples proximidade com palavra feminina em “a todas as equipes”, construção em que o a não se funde com todas.\n\nCom possessivo feminino singular acompanhado de substantivo, como **“homenagem a sua equipe”**, o artigo pode ser facultativo no contexto apresentado. Se a regência já fornece a, a presença ou ausência do artigo explica “a sua” e “à sua”. Isso não autoriza omitir preposição obrigatória em outra construção nem estender a facultatividade a todo uso de pronome possessivo.\n\nOutros casos, como locuções femininas, nomes geográficos e expressão à moda de com termo subentendido, exigem regras próprias e contexto. Portanto, “nunca ocorre antes de palavra masculina” é generalização insuficiente quando há uma locução elíptica. Prefira explicar a estrutura a decorar uma proibição sem ressalvas.",
    "checkpointIds": [
      "chk-13-3-3",
      "rt-13-3-6",
      "rt-13-3-7"
    ]
  },
  {
    "id": "sub-13-3-bloco-8",
    "titulo": "Concordância nominal e reescrita integrada",
    "objetivos": [
      "Conferir flexão e separar preservação do evento de identidade discursiva."
    ],
    "conteudo": "Artigos, adjetivos, numerais e pronomes adjetivos se relacionam com o substantivo em gênero e número conforme a construção. Em **“As cópias seguem anexas”**, anexas é adjetivo associado a cópias. Em **“As cópias seguem em anexo”**, a locução tem outra estrutura e não se flexiona do mesmo modo. Não basta procurar uma palavra parecida para transportar a regra.\n\nObserve também adjetivo e advérbio. Em **“A equipe ficou meio preocupada”**, meio modifica o adjetivo com valor adverbial; em **“Meia folha foi preenchida”**, meia se relaciona à quantidade do substantivo. O papel sintático-semântico, e não apenas a forma gráfica, explica a flexão.\n\n**Reescrita completa:** “A equipe revisou os registros durante a tarde” → “Os registros foram revisados pela equipe durante a tarde”. O sujeito da nova oração é os registros; foram revisados concorda com ele. A relação principal entre quem revisa e o que é revisado permanece, mas o tópico e o foco informacional podem mudar. Um item que exige manter sentido básico e correção pede análise diferente de um item sobre destaque discursivo.\n\n**Checklist final:** há sujeito ou impessoalidade? Qual o núcleo? O se é passivo ou indeterminador? A nova palavra exige outra preposição? A pontuação delimita a mesma informação? Há os elementos de crase? Os termos nominais concordam conforme seu papel? A frase preserva o alcance solicitado?\n\nResolver por esse encadeamento dá ao aluno uma justificativa recuperável. Uma resposta correta por “soar melhor” pode funcionar em um caso e falhar no seguinte. Nos checkpoints, tente nomear a relação que decide a resposta e depois confronte sua análise com o comentário.",
    "checkpointIds": [
      "rt-13-3-8",
      "rt-13-3-9"
    ]
  }
],
fontesTeoria: [
  {
    "id": "mrpr",
    "titulo": "Manual de Redação da Presidência da República, 3ª edição (2018)",
    "localizador": "Seções 11.7 (concordância), 11.8 (regência) e 11.9 (pontuação). Os exemplos desta aula são autorais.",
    "url": "https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica/manual-de-redacao.pdf"
  },
  {
    "id": "gramatica",
    "titulo": "Cunha e Cintra — Nova gramática do português contemporâneo",
    "localizador": "Capítulos de sintaxe, regência e concordância; conferir edição ao consultar. Não se atribui página não verificada à explicação."
  }
],
};
