import type { ModuloFilho } from '../../../domain/types';

export const submodulo134: ModuloFilho = {
  id: 'sub-13-4',
  numero: '13.4',
  editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)',
  preRequisitos: ["sub-13-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-13-1",
          "titulo": "Compreensão e Interpretação Textual",
          "motivo": "Classificação de gêneros em correspondências e normas legislativas."
      }
  ],
  titulo: 'Ortografia Oficial, Tipologia e Gêneros Textuais, Tempos Verbais e Colocação Pronominal',
  antesDeLer: [
    {
      termo: 'Manual de Redação da Presidência da República (MRPR)',
      definicao: 'Documento normativo que padroniza a redação dos atos e comunicações oficiais do Poder Executivo e do serviço público federal.',
      exemploBiblioteca: 'Redação de memorandos, ofícios e notas técnicas da biblioteca de acordo com os atributos da redação oficial.',
    },
    {
      termo: 'Atributos da Redação Oficial',
      definicao: 'Clareza, precisão, concisão, impessoalidade, formalidade e padronização, e uso do padrão culto da língua.',
      exemploBiblioteca: 'Eliminação de jargões desnecessários e adjetivações emocionais em relatórios dirigidos à Mesa Diretora.',
    },
    {
      termo: 'Pronomes de Tratamento no MRPR (3ª Edição)',
      definicao: 'Simplificação oficial: \'Vossa Excelência\' reservada aos chefes de poder, parlamentares e ministros; \'Vossa Senhoria\' para as demais autoridades e cidadãos.',
      exemploBiblioteca: 'Endereçamento correto em ofício: \'A Sua Excelência o Senhor Deputado Federal...\'.',
    },
    {
      termo: 'Colocação Pronominal (Próclise, Mesóclise e Ênclise)',
      definicao: 'Regras de posicionamento do pronome átono: atrativos de próclise (palavras negativas, advérbios, pronomes relativos) e proibição de iniciar frase com pronome.',
      exemploBiblioteca: 'Emprego mesoclítico em tempos de futuro: \'Apresentar-se-á o novo relatório em plenário\' quando não houver termo atrativo.',
    },
  ],
  descricaoCurta:
    'Acordo Ortográfico (acentuação e hífen), a distinção teórico-empírica entre tipos e gêneros textuais segundo Marcuschi, semântica e correlação dos tempos e modos verbais, e sintaxe rigorosa de colocação pronominal (próclise, mesóclise e ênclise).',
  tempoEstimadoMinutos: 19,
  autoresChave: [
    'Luiz Antônio Marcuschi (Da Fala para a Escrita / Gêneros Textuais e Ensino)',
    'Ingedore Villaça Koch (A Coesão Textual / Desvendando os Segredos do Texto)',
    'Evanildo Bechara (Moderna Gramática Portuguesa)',
    'Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo)',
    'Domingos Paschoal Cegalla (Novíssima Gramática da Língua Portuguesa)',
  ],
  alertasCebraspe: [
    'Acentuação e o Acordo Ortográfico: Os ditongos abertos "éi" e "ói" em palavras PAROXÍTONAS perderam o acento gráfico (ideia, plateia, heroico, paranoico, jiboia, assembleia). Contudo, em palavras OXÍTONAS e MONOSSÍLABOS TÔNICOS, o acento PERMANECE OBRIGATÓRIO (herói, troféu, pastéis, coronéis, dói, céu). O Cebraspe frequentemente afirma que palavras como "herói" e "ideia" obedecem à mesma regra de acentuação ou que "herói" perdeu o acento gráfico com o Acordo Ortográfico. Assertiva categoricamente ERRADA!',
    'Tipos Textuais vs. Gêneros Textuais (Luiz Antônio Marcuschi): Tipos textuais constituem constructos teóricos finitos e invariáveis (narração, descrição, dissertação expositiva, dissertação argumentativa e injunção), definidos por propriedades linguísticas intrínsecas (tempos verbais, conectivos, relações lógicas). Gêneros textuais, ao revés, são realizações empíricas infinitas, fluidas, históricas e ancoradas em práticas sociocomunicativas (parecer técnico, ata de sessão legislativa, edital, relatório, memorando, crônica, artigo de opinião). Confundir tipo textual com gênero textual é o erro conceitual clássico que a banca explora!',
    'Semântica e Aspecto dos Tempos Verbais: O Pretérito Perfeito traduz fato pontual, circunscrito e plenamente concluído no passado ("O relator apresentou o parecer"). O Pretérito Imperfeito expressa ação durativa, habitual, incompleta ou em desenvolvimento no passado ("Enquanto os deputados debatiam..."), funcionando também como recurso de cortesia ou polidez ("Queria solicitar vista dos autos"). O Pretérito Mais-que-perfeito marca um fato passado anterior a outro fato passado ("Quando o presidente chegou, a comissão já iniciara a votação"). Alterações propostas pelo Cebraspe entre esses tempos mudam o aspecto e o sentido original do texto!',
    'Correlação (Harmonia) Verbal: O Cebraspe propõe reescritas que quebram a articulação lógica entre orações subordinadas e principais. A harmonia verbal impõe correspondências canônicas: "Se o quórum for atingido [futuro do subjuntivo], a sessão será aberta [futuro do presente do indicativo]"; "Se o quórum fosse atingido [pretérito imperfeito do subjuntivo], a sessão seria aberta [futuro do pretérito do indicativo]"; "Caso tivesse havido impugnação [pretérito mais-que-perfeito composto do subjuntivo], o presidente teria suspenso os trabalhos [futuro do pretérito composto do indicativo]". A quebra dessa correspondência acarreta incorreção gramatical.',
    'Colocação Pronominal e Fatores de Atração: Havendo palavra atrativa (palavras de sentido negativo, advérbios sem vírgula, pronomes relativos, indefinidos e demonstrativos, e conjunções subordinativas), a PRÓCLISE É OBRIGATÓRIA ("Não se admitirão emendas", "Tudo se encaminhou conforme o regimento", "O projeto que se votou ontem", "Embora se alegasse urgência"). Não se admite ênclise na presença de elemento atrativo. Ademais, NUNCA se inicia período com pronome oblíquo átono na norma culta ("Me pareceu oportuno" = ERRADO; "Pareceu-me oportuno" = CERTO) e NUNCA se usa ênclise com particípio ("Tinha expressado-se" = ERRADO; "Tinha-se expressado" ou "Tinha se expressado" = CERTO).',
  ],
  quadroComparativo: {
    titulo: 'Quadro Sinótico de Gramática Aplicada: Ortografia, Verbos, Tipologia e Colocação Pronominal',
    colunas: [
      'Eixo Gramatical',
      'Regra Geral da Norma Culta',
      'Exceção / Particularidade Crítica',
      'Armadilha Típica do Cebraspe',
    ],
    linhas: [
      [
        'Acentuação (Ditongos Abertos)',
        'Ditongos abertos ÉI e ÓI em paroxítonas NÃO são acentuados (ideia, assembleia)',
        'Em oxítonas e monossílabos tônicos o acento É MANTIDO (herói, pastéis, dói, céu)',
        'Dizer que "herói" e "ideia" perderam o acento pela mesma regra após o Acordo Ortográfico',
      ],
      [
        'Emprego do Hífen (Prefixos)',
        'Letras iguais separam com hífen (micro-ondas); letras diferentes unem-se (autoescola)',
        'Se o segundo elemento inicia com R ou S, duplicam-se as consoantes sem hífen (antirreligioso, minissaia)',
        'Afirmar que "anti-inflamatório" não tem hífen ou grafar "anti-social" com hífen e um só "s"',
      ],
      [
        'Tipos vs. Gêneros Textuais',
        'Tipos textuais são finitos e estruturais (narração, descrição, dissertação, injunção)',
        'Gêneros textuais são infinitos e sociocomunicativos (ata, parecer, ofício, lei)',
        'Classificar um "parecer legislativo" como "tipo de texto" em vez de "gênero textual"',
      ],
      [
        'Correlação Verbal Condicional',
        'Imperfeito do Subjuntivo ("se fizesse") correlaciona-se com Futuro do Pretérito ("faria")',
        'Futuro do Subjuntivo ("se fizer") correlaciona-se com Futuro do Presente ("fará")',
        'Misturar modos e tempos criando frases anômalas como "Se ele fizesse, eu farei"',
      ],
      [
        'Colocação Pronominal',
        'Palavra atrativa exige próclise ("Não se disse", "Quem me chamou?")',
        'Verbos no futuro do indicativo sem atração exigem mesóclise ("Dir-se-ia", "Aprovar-se-á")',
        'Colocar pronome átono iniciando período ("Me parece") ou usar ênclise após advérbio atrativo',
      ],
    ],
  },
  teoriaDensaMarkdown: `
# LÍNGUA PORTUGUESA: ORTOGRAFIA, TIPOLOGIA TEXTUAL, VERBOS E COLOCAÇÃO PRONOMINAL
*Doutrina de Referência: Luiz Antônio Marcuschi, Ingedore Koch, Evanildo Bechara, Celso Cunha & Lindley Cintra e Domingos Paschoal Cegalla.*

---

## 1. ORTOGRAFIA OFICIAL E ACENTUAÇÃO GRÁFICA (ACORDO ORTOGRÁFICO)

O Acordo Ortográfico da Língua Portuguesa de 1990 (de vigência definitiva e obrigatória no Brasil a partir de 2016) buscou unificar a grafia nos países lusófonos, simplificando normas e eliminando incongruências históricas da acentuação e do emprego de sinais gráficos.

### 1.1 Regras Gerais de Acentuação Gráfica
A acentuação gráfica na língua portuguesa apoia-se na posição da sílaba tônica e no timbre das vogais:
1. **Proparoxítonas (Sílaba tônica na antepenúltima):** TODAS são obrigatoriamente acentuadas (ex: *legislativo*, *quórum*, *público*, *parlâmentares*, *hipótese*, *bélico*).
2. **Oxítonas (Sílaba tônica na última sílaba):** Acentuam-se as oxítonas terminadas em:
   - **-A(S), -E(S), -O(S):** *sofá, sofás, café, cafés, cipó, cipós*;
   - **-EM, -ENS:** *também, porém, armazém, vinténs*;
   - Formas verbais com pronomes enclíticos terminadas em vogal tônica aberta: *amá-lo, retê-lo, repô-lo*.
3. **Monossílabos Tônicos:** Acentuam-se os monossílabos tônicos terminados em:
   - **-A(S), -E(S), -O(S):** *pá, pás, pé, pés, dó, dós, nós, mês*.
4. **Paroxítonas (Sílaba tônica na penúltima sílaba):** Acentuam-se as paroxítonas com as seguintes terminações mnemônicas (**ROUXINOL / PS / DITONGO**):
   - **-R, -X, -N, -L:** *caráter, tórax, pólen, hífen, fácil*;
   - **-I(S), -US:** *júri, júris, vírus, ônus*;
   - **-UM, -UNS:** *álbum, álbuns, fórum, quóruns*;
   - **-PS:** *bíceps, fórceps*;
   - **-Ã(S), -ÃO(S):** *órfã, órfãs, órfão, bênção, órgãos*;
   - **Ditongos orais (crescentes ou decrescentes), seguidos ou não de S:** *relatório, câmara, secretária, competência, pátria, água, área, série*.

### 1.2 Alterações Cruciais Introduzidas pelo Novo Acordo Ortográfico
O Cebraspe explora sistematicamente as palavras cuja grafia foi alterada pelo Acordo:
1. **Fim do Acento nos Ditongos Abertos "ÉI" e "ÓI" em Paroxítonas:**
   - As palavras paroxítonas que possuem ditongo aberto "éi" ou "ói" NÃO recebem mais acento gráfico: *ideia, plateia, geleia, assembleia, heroico, paranoico, jiboia, epopeia*.
   - **ATENÇÃO MÁXIMA:** As palavras **OXÍTONAS** e os **MONOSSÍLABOS TÔNICOS** mantêm o acento gráfico nos ditongos abertos: *herói, constrói, troféu, pastéis, coronéis, chapéu, céu, dói, sóis*.
2. **Fim do Acento no "I" e "U" Tônicos de Paroxítonas Precedidos de Ditongo:**
   - Palavras paroxítonas com "i" ou "u" tônicos antecedidos de ditongo na mesma palavra não são mais acentuadas: *feiura, baiuca, bocaiuva*.
   - *Ressalva:* Se a palavra for oxítona e terminar em "i" ou "u" tônico após ditongo, o acento permanece: *Piauí, tuiuiú*.
3. **Fim do Acento nos Hiatos "OO" e "EEM":**
   - Formas verbais na 3ª pessoa do plural com hiato "eem" perderam o acento circunflexo: *eles veem, eles leem, eles creem, eles deem*.
   - Substantivos e formas verbais com "oo" perderam o circunflexo: *voo, enjoo, perdoo, abençoo*.
4. **Acentos Diferenciais Remanescentes:**
   - O Acordo extinguiu a maioria dos acentos diferenciais (*pára/para, péla/pela, pólo/polo*), mas PRESERVOU expressamente:
     - **Pôde** (pretérito perfeito do indicativo) vs. **Pode** (presente do indicativo);
     - **Pôr** (verbo) vs. **Por** (preposição);
     - **Têm / Vêm** (3ª pessoa do plural dos verbos ter e vir) vs. **Tem / Vem** (3ª pessoa do singular);
     - Formas derivadas de ter e vir: oxítonas com acento agudo no singular e circunflexo no plural (*ele contém / eles contêm; ele intervém / eles intervêm; ele mantém / eles mantêm*);
     - Acento facultativo em **fôrma** (substantivo) para distinguir de **forma** (substantivo/verbo).

---

## 2. EMPREGO DO HÍFEN COM PREFIXOS E ELEMENTOS DE COMPOSIÇÃO

A regra geral do hífen sob o Acordo Ortográfico norteia-se pelo princípio da **atração dos opostos e repulsão dos iguais**:

### 2.1 Regra Básica dos Prefixos
1. **Letras Iguais se Separam com Hífen:** Quando o prefixo termina com a mesma vogal com que se inicia o segundo elemento, usa-se o hífen:
   - *micro-ondas, anti-inflamatório, contra-ataque, sobre-elevação, auto-observação, arqui-inimigo*.
2. **Letras Diferentes se Unem sem Hífen:** Quando o prefixo termina com vogal e o segundo elemento principia com vogal diferente, os elementos aglutinam-se:
   - *autoescola, infraestrutura, contraindicação, semiárido, extraoficial, plurianual, coautor, reescrever*.
3. **Segundo Elemento com "R" ou "S" (Dobram-se as Consoantes):** Quando o prefixo termina em vogal e o segundo elemento se inicia pelas consoantes "r" ou "s", NÃO há hífen, dobrando-se a consoante ("rr" ou "ss"):
   - *antirreflexo, antissocial, minissaia, ultrassom, microssistema, biorritmo, contrarregra, semirreta*.
4. **Segundo Elemento Iniciado por "H":** O hífen é sempre obrigatório diante de palavra iniciada por "h":
   - *anti-higiênico, super-homem, sobre-humano, contra-habitual, macro-história*.

### 2.2 Prefixos Específicos e Casos Notáveis
- Prefixos **SUB-** e **SOB-**: exigem hífen diante de palavras iniciadas por "b", "r" e "h" (*sub-base, sub-bloco, sub-região, sub-reitor, sub-humano*); diante de vogal ou outras consoantes, aglutina-se (*subchefe, subdiretor, subdelegado, subitem, suboficial*).
- Prefixos **EX-** (cessação), **VICE-**, **ALÉM-**, **AQUÉM-**, **RECÉM-**, **SEM-**: SEMPRE exigem hífen (*ex-presidente, vice-líder, além-mar, recém-eleito, sem-terra*).
- Prefixos **CO-**, **PRO-**, **PRE-**, **RE-** (inacentuados e átonos): tendem a aglutinar-se mesmo diante de letras iguais (*coordenar, cooperação, coabitar, preencher, reeleger, reescrever*).

---

## 3. TIPOLOGIA TEXTUAL VS. GÊNEROS TEXTUAIS (LUIZ ANTÔNIO MARCUSCHI E INGEDORE KOCH)

A distinção teórica e aplicada entre **tipos textuais** e **gêneros textuais** fundamenta-se nos trabalhos seminais do linguista brasileiro **Luiz Antônio Marcuschi** (*Gêneros Textuais: Definição e Funcionalidade*) e de **Ingedore Villaça Koch**.

### 3.1 Tipologia Textual (Forma e Estrutura Linguística Intrínseca)
Os tipos textuais (ou sequências textuais de Jean-Michel Adam) são constructos teóricos conceituais, definidos pela composição estritamente interna de seus elementos linguísticos e gramaticais. São finitos (geralmente agrupados em cinco modalidades básicas):
1. **Texto Narrativo:** Caracteriza-se pela sucessão cronológica de eventos (progressão temporal dinâmica) em que atuam personagens situados em determinado espaço. Elementos nucleares: verbos de ação predominantes no pretérito perfeito do indicativo, relato fático e encadeamento causa-efeito.
2. **Texto Descritivo:** Caracteriza-se pela apresentação espacial simultânea de características, propriedades, atributos ou aspectos de um ser, objeto, cena ou paisagem. Elementos nucleares: ausência de progressão temporal sucessiva, predomínio de adjetivos e locuções adjetivas, verbos de ligação ou de estado, e pretérito imperfeito do indicativo.
3. **Texto Dissertativo-Expositivo:** Caracteriza-se pela apresentação, explicação, ordenação e esclarecimento de dados, ideias, teorias ou conceitos para o leitor, sem o intuito precípuo de persuadir ou converter opiniões. Elementos nucleares: linguagem referencial, clareza lógica, verbos no presente do indicativo com valor de verdade atemporal e marcadores elucidativos (*isto é, por exemplo, em outros termos*).
4. **Texto Dissertativo-Argumentativo:** Caracteriza-se pela defesa sistemática de uma tese (ponto de vista) fundamentada em argumentos lógicos, evidências empíricas, dados estatísticos e citações de autoridade, visando ao convencimento, à persuasão ou à adesão do interlocutor. Elementos nucleares: presença de modalizadores discursivos (*inegavelmente, é mister, faz-se imperioso*), operadores argumentativos (*além disso, com efeito, não obstante, por conseguinte*) e encadeamento dialético (premissas e conclusão).
5. **Texto Injuntivo (ou Instrucional):** Caracteriza-se pela orientação, ordenação, prescrição ou instrução sobre como proceder ou executar determinadas ações. Elementos nucleares: verbos no modo imperativo, no infinitivo com sentido de comando ou locuções de obrigatoriedade (*deve-se, cumpre, é vedado*).

### 3.2 Gêneros Textuais (Práticas Sociocomunicativas Empíricas)
Ao contrário dos tipos textuais, os **gêneros textuais** são fenômenos empíricos, históricos, dinâmicos e essencialmente comunicativos. Surgem a partir das necessidades cotidianas de interação social e institucional da atividade humana.
- **Natureza Aberta e Infinita:** Os gêneros multiplicam-se infinitamente à medida que a sociedade evolui tecnologicamente e institucionalmente.
- **Exemplos no Âmbito Parlamentar e Administrativo:**
  - *Parecer da Comissão de Constituição e Justiça (CCJC)*;
  - *Ata de Sessão Deliberativa Plenária*;
  - *Relatório de Auditoria Governamental*;
  - *Ofício e Memorando Circular*;
  - *Projeto de Lei Ordinária e Emenda Constitucional*;
  - *Discurso Parlamentar em Grande Expediente*.
- **Heterogeneidade Tipológica dos Gêneros:** Um único gênero textual pode agregar múltiplos tipos textuais. Por exemplo, um *Parecer Legislativo* (gênero textual) contém uma seção inicial de **relatório** (predominantemente narrativa e descritiva dos fatos tramitados) e uma seção final de **voto do relator** (predominantemente dissertativa-argumentativa, concluindo pelo acolhimento ou rejeição da matéria).

---

## 4. MORFOLOGIA, SEMÂNTICA E CORRELAÇÃO DOS TEMPOS E MODOS VERBAIS

O verbo é o núcleo predicativo da oração, articulando o tempo cronológico (passado, presente, futuro) ao modo discursivo (certeza, hipótese, ordem) e ao aspecto verbal (ação concluída, durativa ou habitual).

### 4.1 Modos Verbais e suas Matizes Semânticas
- **Modo Indicativo:** Expressa certeza fática, assertividade, objetividade e fatos consumados ou tidos por reais no discurso.
- **Modo Subjuntivo:** Expressa incerteza, dúvida, eventualidade, possibilidade, desejo, hipótese ou condição de irrealidade.
- **Modo Imperativo:** Expressa comando, prescrição, exortação, pedido, orientação ou advertência.

### 4.2 Tempos do Indicativo e Aspecto Discursivo
1. **Presente do Indicativo:** Fato simultâneo ao momento da enunciação (*"O presidente abre a sessão"*), mas também usado como:
   - *Presente Universal / Atemporal:* Expressão de leis científicas ou máximas doutrinárias (*"A soberania reside no povo"*);
   - *Presente Histórico:* Narração de fatos passados com vivacidade (*"Em 1988, o constituinte promulga a Carta Cidadã"*);
   - *Futuro Iminente:* Fato futuro considerado certo (*"Amanhã os relatores apresentam o texto final"*).
2. **Pretérito Perfeito do Indicativo:** Ação inteiramente concluída em momento anterior à fala, apresentando aspecto **perfectivo** (pontual, acabado): *"A Câmara aprovou o projeto de lei orçamentária"*.
3. **Pretérito Imperfeito do Indicativo:** Ação contínua, habitual ou repetitiva no passado, apresentando aspecto **imperfectivo** (processo em curso ou não finalizado): *"Os deputados discutiam a matéria quando ocorreu a interrupção"*. Usado também com valor modal de **polidez/atenuação**: *"Queria sugerir uma emenda de redação"*.
4. **Pretérito Mais-que-perfeito do Indicativo:** Expressa fato passado anterior a outro acontecimento também pretérito: *"Quando a sessão começou, o relator já concluíra o voto"*. Frequentemente substituído na linguagem moderna pela forma composta (*tinha/havia concluído*).
5. **Futuro do Presente do Indicativo:** Fato certo ou de realização provável em tempo posterior: *"O Congresso Nacional apreciará o veto na próxima terça-feira"*.
6. **Futuro do Pretérito do Indicativo:** Ação futura condicionada a um fato hipotético no passado, ou atenuador de delicadeza/polidez: *"O plenário rejeitaria a proposta se houvesse quórum suficiente"* / *"Gostaria de solicitar a palavra pela ordem"*.

### 4.3 A Correlação (Harmonia) Verbal em Questões Cebraspe
A harmonia verbal disciplina a coerência temporal entre a oração principal e a oração subordinada, especialmente em estruturas condicionais, conformativas e concessivas:
- **Hipótese Provável (Futuro):**
  - Oração subordinada condicional no **Futuro do Subjuntivo** $\rightarrow$ Oração principal no **Futuro do Presente do Indicativo**.
  - *Exemplo:* "Se o relator **acolher** as emendas, a comissão **aprovará** o texto."
- **Hipótese Improvável ou Contrafactual (Presente/Passado):**
  - Oração subordinada condicional no **Pretérito Imperfeito do Subjuntivo** $\rightarrow$ Oração principal no **Futuro do Pretérito do Indicativo**.
  - *Exemplo:* "Se o relator **acolhesse** as emendas, a comissão **aprovaria** o texto."
- **Hipótese Não Realizada no Passado (Irrealidade Pretérica):**
  - Oração condicional no **Pretérito Mais-que-perfeito Composto do Subjuntivo** $\rightarrow$ Oração principal no **Futuro do Pretérito Composto do Indicativo**.
  - *Exemplo:* "Se o relator **tivesse acolhido** as emendas, a comissão **teria aprovado** o texto."

---

## 5. SINTAXE DE COLOCAÇÃO PRONOMINAL (PRÓCLISE, MESÓCLISE E ÊNCLISE)

A colocação dos pronomes pessoais oblíquos átonos (*me, te, se, o, a, lhe, nos, vos, os, as, lhes*) subordina-se à eufonia e às regras estritas da sintaxe de regência oracional na norma culta padrão.

### 5.1 As Três Posições Pronominais
- **Próclise:** O pronome situa-se antes do verbo (*"Não **se** deve aceitar emendas intempestivas"*).
- **Mesóclise:** O pronome é intercalado no corpo do verbo (*"Apresentar-**se**-á o relatório conclusivo"*).
- **Ênclise:** O pronome posiciona-se após o verbo (*"Aprovou-**se** a proposta sem ressalvas"*).

### 5.2 Fatores de Atração Proclítica (Próclise Obrigatória)
A presença de qualquer palavra atrativa anterior ao verbo atrai compulsoriamente o pronome oblíquo átono para antes dele, vedando a ênclise:
1. **Palavras de Sentido Negativo:** *não, nunca, jamais, ninguém, nada, nenhum, de modo algum*.
   - *Exemplo:* "Ninguém **o** advertiu sobre o prazo regimental." (Inadmissível: "Ninguém advertiu-o").
2. **Advérbios e Locuções Adverbiais (sem pausa por vírgula):** *já, sempre, talvez, hoje, bem, aqui*.
   - *Exemplo:* "Sempre **se** respeitaram as prerrogativas dos parlamentares."
   - *Ressalva da Vírgula:* Se o advérbio estiver isolado por vírgula, a atração cessa e usa-se a ênclise: *"Ontem, pronunciou-**se** o líder do partido"*.
3. **Pronomes Relativos:** *que, quem, cujo(a), onde, o qual, como*.
   - *Exemplo:* "A matéria **que** **se** discutiu ontem obteve votação expressiva."
4. **Pronomes Indefinidos:** *tudo, alguém, outrem, algo, cada, muitos, poucos*.
   - *Exemplo:* "Tudo **se** resolveu conforme o regimento."
5. **Pronomes Demonstrativos:** *isso, aquilo, este, esse, aquele*.
   - *Exemplo:* "Aquilo **nos** surpreendeu durante a sessão."
6. **Conjunções Subordinativas (Integrantes e Adverbiais):** *que, se, quando, embora, caso, como, para que, visto que*.
   - *Exemplo:* "Embora **se** soubesse do resultado, a votação transcorreu normalmente."
7. **Frases Optativas (Desejo), Interrogativas ou Exclamativas:**
   - *Exemplo:* "Deus **o** abençoe!" / "Quem **te** autorizou a intervir?"
8. **Preposição "Em" + Verbo no Gerúndio:**
   - *Exemplo:* "**Em se tratando** de matéria orçamentária, a CMO é soberana."

### 5.3 Regras Restritivas e Vedações Absolutas na Norma Culta
1. **Vedação de Iniciar Frase ou Período com Pronome Oblíquo Átono:**
   - Na modalidade padrão formal, é erro crasso iniciar período com pronome oblíquo: *"Me falaram sobre o relatório"* (ERRADO); o correto é: *"Falaram-me sobre o relatório"*.
2. **Vedação de Ênclise com Verbos no Futuro do Presente ou do Pretérito:**
   - Verbos flexionados no futuro do presente ou do pretérito do indicativo REJEITAM a ênclise em qualquer situação (*"Aprovará-se"* ou *"Aprovaria-se"* são formas inexistentes e agramaticais!).
   - Se houver fator de próclise: **PRÓCLISE** (*"Não se aprovará o texto"*);
   - Se NÃO houver fator de próclise e o verbo iniciar o período: **MESÓCLISE OBRIGATÓRIA** (*"Aprovar-se-á o texto"*; *"Apresentar-se-ia o voto caso houvesse quórum"*).
3. **Vedação de Ênclise após Particípio:**
   - NUNCA se coloca pronome oblíquo átono enclítico a particípio: *"O presidente tinha manifestado-se"* (ERRADO); o correto é: *"O presidente tinha-se manifestado"* ou *"O presidente tinha se manifestado"*.

### 5.4 Colocação Pronominal em Locuções Verbais (Verbo Auxiliar + Verbo Principal)
- **Verbo Auxiliar + Infinitivo:**
  - Sem palavra atrativa: o pronome pode ligar-se ao auxiliar (próclise ou ênclise) ou ao infinitivo (ênclise): *"Quero-lhe dizer"*, *"Quero dizer-lhe"*.
  - Com palavra atrativa: próclise ao auxiliar ou ênclise ao infinitivo: *"Não lhe quero dizer"* ou *"Não quero dizer-lhe"*.
- **Verbo Auxiliar + Gerúndio:**
  - Sem palavra atrativa: próclise/ênclise ao auxiliar ou ênclise ao gerúndio: *"Estava-se preparando"*, *"Estava preparando-se"*.
  - Com palavra atrativa: próclise ao auxiliar ou ênclise ao gerúndio: *"Não se estava preparando"* ou *"Não estava preparando-se"*.
- **Verbo Auxiliar + Particípio:**
  - Sem palavra atrativa: próclise ou ênclise ao verbo auxiliar: *"Haviam-me alertado"*, *"Ele havia me alertado"*.
  - Com palavra atrativa: próclise obrigatória ao verbo auxiliar: *"Não me haviam alertado"*.


---

### 🔗 Veja Também (Articulação Intermódulos)
* **Compreensão e Interpretação Textual (sub-13-1):** Classificação de gêneros em correspondências e normas legislativas.
`,
  checkpoints: [
    {
      id: 'cp-13-4-1',
      pergunta: 'Micro-Checkpoint 1: Ditongos Abertos no Acordo Ortográfico',
      item: 'Com a vigência do Acordo Ortográfico da Língua Portuguesa, palavras como "ideia", "plateia" e "herói" deixaram de ser grafadas com acento agudo, em razão da regra de simplificação que extinguiu o acento gráfico sobre os ditongos abertos "ei" e "oi".',
      gabarito: 'E',
      justificativa:
        'Errado! O Acordo Ortográfico extinguiu o acento agudo nos ditongos abertos "éi" e "ói" exclusivamente nas palavras PAROXÍTONAS (como "ideia", "plateia", "heroico", "jiboia", "assembleia"). Nas palavras OXÍTONAS e nos MONOSSÍLABOS TÔNICOS terminados nesses ditongos, o acento gráfico PERMANECE OBRIGATÓRIO (como "herói", "troféu", "pastéis", "coronéis", "dói", "céu"). Portanto, "herói" continua sendo obrigatoriamente acentuada.',
    },
    {
      id: 'cp-13-4-2',
      pergunta: 'Micro-Checkpoint 2: Tipos vs. Gêneros Textuais segundo Luiz Antônio Marcuschi',
      item: 'Na teoria linguística moderna sistematizada por Luiz Antônio Marcuschi, os tipos textuais constituem constructos teóricos definidos por traços linguísticos intrínsecos e formam um conjunto finito de categorias (como narração e dissertação), ao passo que os gêneros textuais são realizações discursivas empíricas, ilimitadas e fluidas, historicamente vinculadas a práticas sociocomunicativas (como ata, edital e parecer legislativo).',
      gabarito: 'C',
      justificativa:
        'Correto! A assertiva reflete com exatidão a clássica distinção cunhada por Luiz Antônio Marcuschi. Os tipos textuais (ou sequências tipológicas) são categorias teóricas finitas (narração, descrição, dissertação expositiva, dissertação argumentativa e injunção) identificadas pela estrutura interna léxico-gramatical e temporal. Já os gêneros textuais são formas empíricas infinitas de comunicação social, mutáveis no tempo, que cumprem funções pragmáticas específicas nas diversas esferas da atividade humana (por exemplo, ofício, parecer, ata, editorial).',
    },
    {
      id: 'cp-13-4-3',
      pergunta: 'Micro-Checkpoint 3: Colocação Pronominal e Palavra Atrativa',
      item: 'No trecho "Não se admitirão emendas fora dos prazos estabelecidos", a alteração da colocação pronominal para "Não admitir-se-ão emendas fora dos prazos estabelecidos" preservaria a correção gramatical do texto, por se tratar de verbo conjugado no futuro do presente do indicativo, tempo verbal que exige prioritariamente a mesóclise.',
      gabarito: 'E',
      justificativa:
        'Errado! Conforme as lições gramaticais canônicas de Evanildo Bechara (2019) e Celso Cunha & Lindley Cintra (2013), a mesóclise com verbos no futuro do presente ou do pretérito só é empregada quando o verbo inicia a oração ou quando NÃO houver palavra atrativa antes dele. No trecho apresentado, a presença da palavra de sentido negativo "Não" constitui fator de atração proclítica MANDATÓRIO e absoluto. Havendo fator de atração, a próclise prevalece sempre sobre a mesóclise ("Não se admitirão"). A estrutura "Não admitir-se-ão" acarreta erro gramatical crasso perante a norma culta padrão.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-13-4-1',
        periodo: '1990 (Acordo Ortográfico)',
        disciplina: 'Ortografia Oficial',
        focoPrincipal: 'Assinatura do Acordo Ortográfico unificando as regras nos países de língua portuguesa',
        figuraChave: 'Academia Brasileira de Letras / ACL',
      },
      {
        id: 'tl-13-4-2',
        periodo: '2002 (Marcuschi: Gêneros Textuais)',
        disciplina: 'Linguística Textual',
        focoPrincipal: 'Publicação de "Gêneros Textuais: Definição e Funcionalidade", consolidando a distinção entre tipos e gêneros',
        figuraChave: 'Luiz Antônio Marcuschi',
      },
      {
        id: 'tl-13-4-3',
        periodo: '2016 (Obrigatoriedade no Brasil)',
        disciplina: 'Ortografia Oficial',
        focoPrincipal: 'Entrada em vigor em caráter obrigatório e definitivo do Acordo Ortográfico de 1990 no Brasil',
        figuraChave: 'Decreto nº 6.583/2008 e Decreto nº 7.875/2012',
      },
    ],
    autores: [
      {
        id: 'aut-13-4-1',
        nome: 'Luiz Antônio Marcuschi',
        ano: 2008,
        obraPrincipal: 'Da Fala para a Escrita / Produção Textual, Análise de Gêneros e Compreensão',
        ideiaChave: 'Tipos textuais são finitos e teóricos; gêneros textuais são infinitos, dinâmicos e sociocomunicativos.',
        chipPegadinha: 'Classificar ata, parecer ou relatório como tipo textual em vez de gênero textual.',
      },
      {
        id: 'aut-13-4-2',
        nome: 'Evanildo Bechara',
        ano: 2019,
        obraPrincipal: 'Moderna Gramática Portuguesa',
        ideiaChave: 'Sintaxe rigorosa de colocação pronominal com primazia absoluta da próclise diante de fatores de atração.',
        chipPegadinha: 'Usar mesóclise com verbo no futuro quando houver palavra atrativa anterior.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-13-4-1',
        afirmacao: 'O Acordo Ortográfico extinguiu o acento gráfico de todas as palavras terminadas no ditongo aberto "ói", como "heroico" e "herói".',
        gabarito: 'E',
        porQue: 'Pegadinha manjada do Cebraspe! O acento caiu apenas nas PAROXÍTONAS ("heroico", "jiboia"). Nas OXÍTONAS e monossílabos ("herói", "dói"), o acento permanece obrigatório.',
      },
      {
        id: 'peg-13-4-2',
        afirmacao: 'Um parecer legislativo emitido pela CCJC é classificado como um tipo textual dissertativo.',
        gabarito: 'E',
        porQue: 'Parecer legislativo é GÊNERO TEXTUAL, e não tipo textual. O parecer mobiliza sequências tipológicas dissertativas, mas sua categoria pragmática é gênero.',
      },
    ],
  },
};
