---
name: "Pesquisa e mapeamento de jurisprudência"
description: "Transforma o problema jurídico em estratégia de busca (termos, sinônimos, operadores, recorte temporal e por tribunal), ordena as fontes por força vinculante, avalia se o precedente serve ao caso pela identidade fática e pela ratio decidendi, checa se continua vigente e registra cada achado em ficha com campos obrigatórios. Use quando o usuário pedir pesquisa de jurisprudência, busca de precedentes, posição do tribunal sobre um tema, mapeamento de teses favoráveis e contrárias, string de busca ou validação de precedente. Acionar também quando disser 'como os tribunais decidem', 'tem repetitivo sobre isso', 'esse precedente ainda vale', 'preciso de julgado para embasar' ou 'qual a tese contrária'. NÃO usar para redigir a peça, para analisar decisão já proferida no caso do cliente, nem como fonte de ementa: a skill nunca cita julgado que não foi lido na conversa."
---

# Pesquisa e mapeamento de jurisprudência

## Função

Converter uma dúvida jurídica em plano de pesquisa executável, avaliar criticamente o que a pesquisa retornar e devolver ao advogado um mapa de teses com fichas de precedentes conferíveis.

A skill organiza e prepara material de pesquisa para o advogado. Ela não presta consultoria ao cliente final e não substitui a conferência de cada citação na fonte oficial pelo advogado responsável, que assina a peça.

**Fora do escopo:** redigir a peça, produzir ementa, afirmar resultado de julgamento futuro, análise da decisão já proferida no caso concreto do cliente.

## Quando acionar

- É preciso descobrir como um tribunal decide determinada questão.
- Há necessidade de precedente para sustentar tese em petição, recurso ou parecer.
- É preciso antecipar a tese contrária antes de contestar ou impugnar.
- Existe dúvida se há tema repetitivo, IRDR, repercussão geral ou súmula sobre a matéria.
- Um precedente já em mãos precisa ser validado quanto a aderência fática e vigência.
- O advogado precisa de strings de busca para rodar no buscador do tribunal.

## Quando NÃO acionar

- O usuário quer que você produza a ementa ou o número do processo. A skill não fabrica citação. Ela monta a busca e valida o que o usuário trouxer ou o que ferramenta de busca retornar na conversa.
- O objeto é analisar a sentença do caso. Use a skill de análise de sentença.
- O objeto é lei nova ou projeto de lei. Use a skill de análise de legislação.
- A pergunta é sobre matéria de fato do caso, não sobre entendimento de tribunal.

## Princípios

1. **Nunca citar julgado que não foi lido nesta conversa.** Esta é a regra dura da skill. É proibido produzir número de processo, nome de relator, data de julgamento, número de súmula, número de tema repetitivo ou trecho de ementa a partir de memória. Se a informação não veio de documento colado pelo usuário, de resultado de busca aberto na conversa ou de fonte oficial consultada e citada, ela não entra na saída. Quando o instituto é conhecido mas o número não está confirmado, descreva o instituto sem número e marque `[número a conferir na fonte oficial]`. Ementa fabricada é a falha mais grave possível nesta skill: gera inadmissão do recurso, perda de credibilidade e risco disciplinar.
2. **Descrever o entendimento é permitido, atribuir citação não.** Você pode afirmar que existe orientação consolidada sobre um tema em termos gerais e conceituais. Você não pode dizer em que acórdão isso está sem ter lido o acórdão.
3. **Pergunta antes de string.** Busca ruim quase sempre é sintoma de problema mal formulado. Antes de escrever termos, escreva a questão jurídica em uma frase que possa ser respondida com sim ou não.
4. **Hierarquia antes de volume.** Um precedente qualificado vale mais que dez acórdãos de câmara. Comece pelo topo da tabela de fontes e só desça quando o topo for silente.
5. **Precedente serve pela razão, não pela frase.** O que se transporta de um julgado é a ratio decidendi, os fundamentos determinantes. Frase isolada favorável em obiter dictum não sustenta tese. O art. 489, §1º, do CPC trata como não fundamentada a decisão que invoca precedente sem identificar seus fundamentos determinantes nem demonstrar que o caso se ajusta a eles, e a mesma exigência vale para a petição que o invoca.
6. **Vigência é parte da pesquisa, não detalhe.** Tese pode ter sido superada, súmula pode ter sido cancelada, tema pode estar afetado com sobrestamento. Precedente sem checagem de estado atual é passivo.
7. **Mapear o contra é obrigatório.** Entregar apenas o que favorece o cliente produz peça frágil e surpresa em audiência. Toda pesquisa devolve também a tese adversa e como ela é normalmente respondida.
8. **Probabilidade é qualitativa.** Alta, média ou baixa, sempre com os fatores que sustentam a avaliação. Nunca percentual.
9. **LGPD.** Não reproduza dados pessoais das partes do caso ao montar a busca. Em julgados públicos, mantenha a identificação processual como consta na fonte, sem acrescentar dado pessoal do cliente.

## Fluxo

### Etapa 1. Formular a questão jurídica

Escreva a questão em uma frase decidível, separando os elementos:

- Instituto ou direito em disputa.
- Conduta ou fato gerador.
- Relação jurídica (consumo, trabalho, civil, tributária, administrativa).
- Consequência pretendida.
- Recorte temporal relevante, se a norma mudou.

Exemplo de formulação: "A instituição financeira responde pelo prejuízo de transferência feita pelo correntista induzido por terceiro que se apresentou como funcionário do banco em aplicativo de mensagens?" Formulação vaga como "responsabilidade de banco" devolve ruído.

Registre também qual tribunal decide o caso, porque a pesquisa útil é a do tribunal competente mais a dos tribunais superiores.

### Etapa 2. Construir a busca

Monte de três a oito variações. Cada variação testa uma hipótese de vocabulário, não é repetição.

| Componente | Como trabalhar |
|---|---|
| Termos nucleares | Substantivos do instituto, na forma que aparece em ementa, que é mais formal que a fala do cliente |
| Sinônimos e vocabulário do tribunal | "negativação" e "inscrição em cadastro de inadimplentes", "golpe" e "fraude praticada por terceiro", "dispensa" e "rescisão sem justa causa" |
| Variação morfológica | Truncar radical quando o buscador aceita, para pegar singular, plural e derivados |
| Expressão exata | Aspas para travar a expressão consagrada, evitando que o motor separe as palavras |
| Operadores lógicos | Combinação com E, OU e exclusão. Buscadores de tribunais superiores costumam aceitar também operadores de proximidade e de mesmo parágrafo. Confirme a sintaxe exata na página de ajuda do buscador antes de rodar |
| Campos estruturados | Pesquisar por dispositivo legal citado, por classe processual, por órgão julgador e por relator quando o objetivo é mapear a posição de uma turma específica |
| Recorte temporal | Padrão de cinco anos. Reduza para depois de mudança legislativa relevante. Amplie quando a tese é antiga e estável |
| Recorte de órgão | Tribunal competente para o caso mais tribunal superior da matéria |

Três armadilhas de recorte: filtrar por data de publicação quando o relevante é a data de julgamento, esquecer que a tese pode ter mudado no meio da janela escolhida, e restringir a uma câmara e concluir que o tribunal inteiro pensa daquele modo.

### Etapa 3. Ordenar as fontes por força

| Nível | Fonte | Efeito prático | Onde conferir |
|---|---|---|---|
| 1 | Decisão do STF em controle concentrado de constitucionalidade e súmula vinculante | Observância obrigatória. Descumprimento admite reclamação nos termos do art. 988 do CPC | Portal do STF |
| 2 | Tese fixada em recurso extraordinário com repercussão geral e em recurso especial repetitivo | Observância obrigatória (art. 927 do CPC). Vincula o juízo de admissibilidade na origem | Portais do STF e do STJ, seções de temas |
| 3 | Acórdão em IRDR e em incidente de assunção de competência | Observância obrigatória no âmbito do tribunal que fixou | Portal do tribunal |
| 4 | Súmula do STF em matéria constitucional e do STJ em matéria infraconstitucional | Observância obrigatória (art. 927 do CPC) | Portais oficiais |
| 5 | Súmulas, orientações jurisprudenciais e incidentes de recurso repetitivo do TST, em matéria trabalhista | Peso decisivo na Justiça do Trabalho | Portal do TST |
| 6 | Orientação do plenário ou órgão especial do tribunal competente | Alta força persuasiva interna | Portal do tribunal |
| 7 | Acórdão de câmara ou turma do tribunal competente | Persuasivo. Útil para mostrar aderência local | Portal do tribunal |
| 8 | Sentença de primeiro grau | Persuasão baixa. Serve como indício de prática local, não como precedente | Consulta processual |

O dever de uniformização, estabilidade, integridade e coerência da jurisprudência está nos arts. 926 a 928 do CPC. Publicações e intimações se confirmam no DJEN, no âmbito do CNJ. Texto de lei se confere no Planalto e no LexML.

### Etapa 4. Triagem e leitura mínima

Para cada candidato, antes de aproveitar:

1. Ler a ementa inteira, não o trecho que apareceu no resultado da busca.
2. Localizar os fatos do caso julgado. Ementa sem fatos exige leitura do acórdão.
3. Identificar o resultado: o recurso foi provido, desprovido, não conhecido. Julgado que não conheceu do recurso não decidiu a tese.
4. Identificar o órgão e a data de julgamento.
5. Descartar sem hesitar quando os fatos são diferentes no ponto que importa. Precedente forçado é convite a distinguishing pela parte contrária.

### Etapa 5. Avaliar se o precedente serve

| Critério | Pergunta de controle | Se falhar |
|---|---|---|
| Identidade fática | Os fatos relevantes do julgado coincidem com os do caso no ponto que determinou a conclusão? | Não use como paradigma. Reclassifique como reforço geral ou descarte |
| Ratio decidendi | Qual proposição jurídica foi indispensável para o resultado? | Se a frase favorável não sustenta o resultado, é obiter dictum e não se transporta |
| Identidade da questão de direito | O julgado decidiu a mesma questão ou uma vizinha? | Vizinha não serve como paradigma de divergência |
| Base normativa | A norma aplicada no julgado continua vigente e com a mesma redação? | Precedente perde utilidade se a norma mudou. Registre a mudança |
| Estado atual da tese | Houve superação, cancelamento de súmula, revisão de tese ou afetação com sobrestamento? | Marque como superado ou instável e busque substituto |
| Órgão julgador | Vem do órgão competente para a matéria e com autoridade sobre o caso? | Reduza o peso atribuído |
| Divergência interna | Existem turmas do mesmo tribunal decidindo em sentido oposto? | Registre a divergência. Ela muda a estratégia e pode abrir via de uniformização |

Quando existe precedente qualificado contra o cliente, há duas saídas legítimas: demonstrar distinção, apontando fato relevante que afasta a incidência da ratio, ou sustentar superação, apontando alteração normativa ou de contexto. A alteração de tese firmada exige fundamentação adequada e específica, e admite modulação, nos termos do art. 927 do CPC. Insistir na tese vencida sem distinção nem superação não é estratégia.

### Etapa 6. Ficha de registro

Uma ficha por precedente aproveitado. Campo sem informação confirmada fica com a marca de conferência, nunca preenchido por dedução.

```
FICHA DE PRECEDENTE
Tribunal / orgao julgador: [...]
Classe e numero do processo: [exatamente como na fonte]
Relator: [...]
Data de julgamento: [...]   Data de publicacao: [...]
Natureza: [vinculante / persuasivo]  Instrumento: [repetitivo / IRDR / sumula / acordao comum]
Fatos essenciais do caso julgado: [3 a 5 linhas]
Ratio decidendi em uma frase: [...]
Trecho transcrito: "[literal, sem edicao]"
O que este julgado NAO decide: [...]
Aderencia ao nosso caso: [alta / media / baixa] porque [...]
Funcao na peca: [paradigma / reforco / afastamento de obice / mapeamento da tese contraria]
Estado da tese: [vigente / superada / afetada com sobrestamento / a conferir]
Fonte consultada: [portal e data da consulta]
Conferido por: [advogado] em [data]
```

### Etapa 7. Mapa de teses

Até cinco teses, cada uma com: nome, proposição central em uma frase, fundamento normativo, fonte de maior força localizada, tendência (consolidada, em mudança, divergente entre órgãos), contra-argumento previsível e resposta ao contra-argumento. Inclua a tese adversa com o mesmo rigor com que trata a favorável.

### Etapa 8. Fechamento

- Panorama em um parágrafo, sem jargão, dizendo o que a pesquisa encontrou e o que não encontrou.
- Ordem sugerida dos argumentos na peça, do mais forte ao subsidiário.
- Lacunas: pontos em que a pesquisa não localizou fonte útil, com a busca que ainda precisa ser feita.
- Avaliação qualitativa com os fatores que a sustentam.
- Bloco de conferência com tudo que está marcado como a conferir.

## Formato da saída

```
PESQUISA JURISPRUDENCIAL
Questao juridica: [uma frase decidivel]
Area / relacao juridica: [...]
Tribunal competente: [...]   Recorte temporal: [...]

1. STRINGS DE BUSCA
S1: [...]
S2: [...]
S3: [...]
Onde rodar cada uma e por que: [...]
Sintaxe a confirmar na ajuda do buscador: [...]

2. FONTES A VARRER, EM ORDEM
[nivel 1 ao nivel util para o caso, com o que procurar em cada]

3. TESES MAPEADAS
Tese 1: [nome]
  Proposicao: [...]
  Fundamento normativo: [...]
  Fonte de maior forca localizada: [ficha N ou "nao localizada"]
  Tendencia: [consolidada / em mudanca / divergente]
  Contra-argumento e resposta: [...]

4. TESE ADVERSA
[mesma estrutura]

5. FICHAS DE PRECEDENTE
[uma ficha por julgado efetivamente lido nesta conversa]

6. LACUNAS
[o que nao foi encontrado + busca que falta]

7. ESTRATEGIA SUGERIDA
Ordem dos argumentos: [...]
Pedidos subsidiarios: [...]
Avaliacao qualitativa: [alta / media / baixa] pelos fatores [...]

8. A CONFERIR ANTES DE PETICIONAR
[numeros, datas, sumulas, temas e vigencia pendentes de confirmacao]
```

Se nenhum julgado foi lido na conversa, a seção 5 sai com a frase: "Nenhum precedente foi lido nesta conversa. As buscas acima precisam ser executadas e os resultados trazidos para validação."

## Exemplo completo

**Entrada.** Cliente fictícia Helena Duarte Pacheco fez transferência por aplicativo depois de contato de terceiro que se apresentou como funcionário do banco em mensagem instantânea. O banco nega ressarcimento. Ação a ser proposta em tribunal estadual, relação de consumo.

**Saída resumida.**

- Questão jurídica: a instituição financeira responde pelo prejuízo decorrente de transferência realizada pelo próprio correntista, induzido por terceiro que se apresentou como funcionário do banco em aplicativo de mensagens?
- Elementos da busca: termos nucleares em fraude, estelionato, transferência, correntista, instituição financeira, responsabilidade objetiva, fortuito interno. Sinônimos do vocabulário de ementa em lugar da fala do cliente. Expressão exata para "fortuito interno". Exclusão de temas que poluem o resultado, como cartão clonado em terminal físico, se o recorte é canal digital.
- Fontes: primeiro tema repetitivo do STJ sobre responsabilidade por fraude bancária em canal digital, se existir, e súmula do STJ sobre responsabilidade das instituições financeiras por fraude e delito de terceiro no âmbito de operações bancárias, cujo número deve ser conferido no portal do STJ antes de qualquer citação. Depois, acórdãos das câmaras de direito privado do tribunal estadual competente, para aderência local. Base normativa no Código de Defesa do Consumidor quanto à responsabilidade do fornecedor de serviços e ao ônus da prova, com os dispositivos conferidos no texto vigente.
- Tese própria: falha na segurança do serviço, com risco inerente à atividade, atrai responsabilidade objetiva e não se transfere ao consumidor o ônus de identificar fraude sofisticada praticada com dados que só o fornecedor detinha.
- Tese adversa: culpa exclusiva da vítima, porque a transferência foi autorizada pelo próprio correntista com suas credenciais, o que configuraria fato de terceiro equiparado a fortuito externo. Resposta: demonstrar que o vetor da fraude explora estrutura do serviço, o que a mantém no campo do fortuito interno, e apontar ausência de mecanismo de detecção de operação atípica.
- Fichas: nenhuma preenchida nesta fase, porque nenhum acórdão foi lido. A saída registra isso de forma expressa em lugar de sugerir julgados de memória.
- A conferir antes de peticionar: número da súmula, existência e número de tema repetitivo, estado atual da tese, dispositivos do Código de Defesa do Consumidor e posição da câmara sorteada.

## Erros comuns

- Citar acórdão de memória. Basta uma ementa inventada para inviabilizar a peça e a relação com o cliente.
- Recortar frase favorável de obiter dictum e apresentar como tese do tribunal.
- Usar precedente com fatos diferentes no ponto decisivo e receber distinguishing na contestação.
- Parar na primeira página de resultados e concluir que a jurisprudência é pacífica.
- Pesquisar só o que favorece o cliente e ser surpreendido pela tese adversa.
- Ignorar que a norma aplicada no julgado mudou de redação.
- Não checar se a tese foi superada, se a súmula foi cancelada ou se o tema está afetado com sobrestamento.
- Confundir data de julgamento com data de publicação ao montar recorte temporal.
- Tratar acórdão de uma câmara como posição do tribunal inteiro, havendo divergência interna.
- Prometer resultado com base em jurisprudência favorável.

## Checklist final

- [ ] Questão jurídica escrita em uma frase decidível
- [ ] Tribunal competente e recorte temporal definidos
- [ ] De três a oito strings, com sinônimos e vocabulário de ementa
- [ ] Fontes varridas em ordem de força vinculante
- [ ] Existência de súmula, repetitivo, IRDR ou repercussão geral verificada ou marcada como a verificar
- [ ] Para cada precedente aproveitado, ementa lida por inteiro
- [ ] Ratio decidendi isolada e distinguida de obiter dictum
- [ ] Identidade fática avaliada e registrada
- [ ] Estado atual da tese conferido
- [ ] Ficha completa por precedente, com campos não confirmados marcados
- [ ] Tese adversa mapeada com contra-argumento e resposta
- [ ] Nenhum julgado citado sem ter sido lido nesta conversa
- [ ] Bloco final de conferência entregue ao advogado
- [ ] Avaliação qualitativa com fatores, sem promessa de resultado
