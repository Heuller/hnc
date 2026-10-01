---
name: "Análise de sentença e viabilidade recursal"
description: "Decompõe sentença ou decisão judicial pedido por pedido, mapeia sucumbência, coisa julgada, vícios para embargos de declaração e teses recursais com o dispositivo que sustenta cada uma, e entrega nota técnica para a equipe mais resumo em linguagem simples para o cliente. Use quando o usuário pedir análise de sentença, leitura de decisão, viabilidade recursal, pontos de recurso, estratégia de apelação, cabimento de embargos de declaração ou resumo de sentença para o cliente. Acionar também quando disser 'saiu a sentença', 'perdemos em parte', 'vale a pena recorrer', 'o juiz não analisou meu pedido', 'quanto ficou de honorários' ou 'o que virou coisa julgada'. NÃO usar para redigir a peça recursal pronta, para analisar contrato ou lei em abstrato, nem para prometer resultado de recurso ao cliente."
---

# Análise de sentença e viabilidade recursal

## Função

Ler uma decisão judicial de forma estruturada e devolver ao advogado um diagnóstico operacional: o que foi decidido em cada capítulo, onde a decisão é atacável, com qual remédio, em que prazo e com qual fundamento normativo.

A skill organiza e prepara material de trabalho. Ela não presta consultoria ao cliente final, não decide se o recurso será interposto e não substitui a conferência do advogado responsável, que responde pela peça assinada.

**Fora do escopo:** redação final da peça recursal, cálculo de liquidação, análise de contrato isolado, parecer sobre tese em abstrato sem decisão concreta.

## Quando acionar

- Chegou sentença, acórdão, decisão interlocutória ou decisão monocrática e o advogado precisa saber o que fazer.
- O cliente pergunta "ganhei ou perdi" e é preciso traduzir o dispositivo.
- Há suspeita de omissão, contradição, obscuridade ou erro material.
- É necessário decidir entre recorrer, negociar, cumprir ou executar.
- Precisa-se de inventário do que ficou precluso ou coberto por coisa julgada.

## Quando NÃO acionar

- Não há texto de decisão disponível. Sem o texto, ou pelo menos o dispositivo transcrito, a análise vira especulação. Peça o documento.
- O pedido é a peça pronta. Encaminhe para a skill de redação recursal correspondente.
- O pedido é pesquisa de precedentes sem decisão concreta. Use a skill de pesquisa de jurisprudência.
- O usuário quer garantia de êxito. Não existe.

## Princípios

1. **Nunca fabricar citação.** É proibido inventar número de artigo, súmula, tema repetitivo, número de processo, nome de relator ou ementa. Se a decisão citou algo que você não leu na conversa, reproduza exatamente como aparece e marque `[a conferir na fonte oficial]`. Se você quer invocar um instituto e não tem certeza do número, descreva o instituto sem número. Citação errada em recurso gera inadmissão e risco disciplinar, e é o risco número um desta skill.
2. **Trabalhar só com o texto fornecido.** Distinga sempre três camadas: o que a decisão diz, o que o usuário informou fora da decisão e o que é inferência sua. Marque a terceira camada como hipótese.
3. **Analisar pedido por pedido.** Sentença não se resolve em "procedente" ou "improcedente". Cada pedido é um capítulo autônomo, com sucumbência, preclusão e recorribilidade próprias. Capítulo não impugnado transita em julgado sozinho.
4. **Vício de fundamentação antes de mérito.** Antes de discutir se o juiz errou, verifique se ele fundamentou. O art. 489, §1º, do CPC lista situações em que a decisão não se considera fundamentada, entre elas não enfrentar todos os argumentos capazes de infirmar a conclusão e deixar de seguir precedente invocado pela parte sem demonstrar distinção ou superação.
5. **Prazo é dado crítico, e você não o conhece.** Você não sabe a data da publicação, se houve suspensão de prazo, feriado local ou prazo em dobro. Informe a regra de contagem aplicável e devolva ao advogado a tarefa de confirmar o termo inicial no sistema do tribunal. Nunca afirme uma data de vencimento como certa.
6. **Separar remédio integrativo de remédio impugnativo.** Embargos de declaração servem para sanar vício da decisão, não para rediscutir o mérito. Usar embargos como recurso disfarçado atrasa e pode gerar multa por caráter protelatório.
7. **Duas saídas, dois públicos.** A nota técnica para a equipe é densa, com dispositivo e folha dos autos. O resumo para o cliente é curto, sem jargão, sem promessa de resultado e sem número de artigo.
8. **LGPD.** Não reproduza CPF, RG, endereço, telefone, e-mail, dado bancário ou dado de saúde. Refira as partes por qualificação processual ("a parte autora", "o réu"). Em exemplos, use partes fictícias.
9. **Sem promessa de resultado.** Probabilidade é qualitativa (alta, média, baixa), sempre acompanhada dos fatores que a sustentam. Nunca percentual inventado.

## Fluxo

### Etapa 0. Coleta mínima

Extraia do contexto antes de perguntar. Só pergunte o que faltar, no máximo dois itens por vez.

| Dado | Por que importa |
|---|---|
| Texto da decisão | Sem ele não há análise |
| Tipo de decisão e órgão | Define recurso cabível e prazo |
| Rito (comum, JEC, trabalhista, criminal, execução) | Define prazo e sistema recursal |
| Polo do cliente | Define o que é derrota |
| Petição inicial e contestação, se houver | Necessárias para conferir omissão sobre pedido |
| Data de disponibilização ou intimação | Termo inicial do prazo, a confirmar no sistema |
| Objetivo do cliente | Recorrer, encerrar, negociar ou executar |

### Etapa 1. Decomposição estrutural

Separe a decisão nas três partes do art. 489 do CPC e avalie cada uma:

- **Relatório (inciso I).** Confira se o histórico registra os pedidos e as defesas. Relatório que omite pedido é o primeiro indício de omissão no dispositivo.
- **Fundamentação (inciso II).** Isole a razão de decidir de cada capítulo. Anote qual prova o juiz considerou decisiva, qual argumento ele enfrentou e qual ignorou.
- **Dispositivo (inciso III).** Transcreva o dispositivo literalmente. Ele é o que executa, o que transita e o que se recorre. Fundamentação favorável com dispositivo desfavorável não beneficia o cliente.

### Etapa 2. Inventário de pedidos

Monte a tabela com um pedido por linha, na ordem da inicial. Nada de agrupar.

| Pedido | Resultado | Fundamento usado pelo juiz | Prova decisiva | Recorrível pelo cliente | Observação |
|---|---|---|---|---|---|
| Declaração de inexigibilidade | Acolhido | Ausência de prova da contratação | Documental | Não | Interessa manter |
| Dano moral | Acolhido em valor inferior ao pedido | Quantum por razoabilidade | Presumido | Sim, quanto ao valor | Verificar parâmetro do tribunal |
| Repetição em dobro | Rejeitado | Ausência de má-fé | Documental | Sim | Discutir tese aplicável |
| Obrigação de fazer | Não apreciado | Nenhum | Nenhuma | Embargos primeiro | Omissão pura |

Regra de decisão: pedido não apreciado vai para a trilha de embargos de declaração, não para a trilha de apelação. Pedido apreciado e rejeitado vai para a trilha recursal.

### Etapa 3. Fundamentação, ônus da prova e precedentes

Para cada capítulo desfavorável, verifique:

- **Distribuição do ônus da prova.** O art. 373 do CPC atribui ao autor o fato constitutivo e ao réu o fato impeditivo, modificativo ou extintivo. Confira se o juiz cobrou de quem não devia provar. Se houve distribuição dinâmica, ela exige decisão fundamentada e não pode surpreender a parte na sentença.
- **Precedente invocado e ignorado.** Se a parte invocou súmula, tese de repetitivo, IRDR ou decisão vinculante e a sentença silenciou ou afastou sem demonstrar distinção, há vício de fundamentação. O dever de estabilidade, integridade e coerência está nos arts. 926 a 928 do CPC, e o dever de observância está no art. 927.
- **Precedente contrário.** Se existe tese vinculante contra o cliente, a via não é insistir na tese vencida, e sim demonstrar distinção fática ou superação. Registre isso como estratégia, não como certeza.
- **Prova ignorada.** Aponte folha ou identificador do documento que a sentença não menciona. Sem localização nos autos, o argumento não se sustenta em recurso.

### Etapa 4. Sucumbência, honorários e custas

Leia o capítulo de condenação em despesas como um capítulo autônomo, porque ele é recorrível por si só.

- Sucumbência recíproca é distribuída proporcionalmente (art. 86 do CPC), e o vencido em parte mínima responde por inteiro pelas despesas (parágrafo único).
- Honorários seguem o art. 85 do CPC. Confira a base de cálculo usada (condenação, proveito econômico ou valor da causa), o percentual, e se houve fixação equitativa quando a lei não autorizava.
- Se o cliente é beneficiário de gratuidade, a exigibilidade dos honorários fica suspensa nas condições do art. 98, §3º, do CPC. Isso muda a leitura de risco.
- Registre que a interposição de recurso pode levar a majoração de honorários na instância superior (art. 85, §11), porque isso entra no custo-benefício.
- Anote custas e preparo. Recurso sem preparo comprovado é deserto (art. 1.007 do CPC).

### Etapa 5. O que virou coisa julgada

- Coisa julgada alcança a questão principal expressamente decidida (art. 503 do CPC), não os motivos nem a verdade dos fatos (art. 504).
- Capítulo favorável ao cliente e não impugnado pela parte contrária tende a estabilizar. Capítulo desfavorável não impugnado pelo cliente estabiliza contra ele.
- Questões resolvidas no curso do processo que não comportavam agravo de instrumento não precluem e devem ser suscitadas na apelação (art. 1.009, §1º, do CPC). Liste essas questões, porque é aqui que se perde matéria por esquecimento.
- Marque explicitamente: "capítulos que só se preservam se houver recurso próprio".

### Etapa 6. Triagem de embargos de declaração

Embargos cabem contra qualquer decisão judicial nas hipóteses do art. 1.022 do CPC. Prazo de 5 dias (art. 1.023), e a oposição interrompe o prazo do recurso principal (art. 1.026). Use a matriz:

| Vício | Como identificar | O que pedir | Risco |
|---|---|---|---|
| Omissão | Pedido, argumento relevante ou prova constam da inicial ou da contestação e não aparecem na fundamentação nem no dispositivo | Integração com apreciação expressa do ponto, indicando folha | Baixo, se o ponto realmente existe nos autos |
| Contradição | Fundamentação afirma A e dispositivo determina não A, ou dois trechos se excluem | Definição de qual proposição prevalece | Baixo |
| Obscuridade | Dispositivo não permite cumprimento sem interpretação: índice, termo inicial, base de cálculo ou obrigação indefinida | Esclarecimento com critério objetivo | Baixo |
| Erro material | Nome, valor, número de autos ou data manifestamente equivocados | Correção | Muito baixo |
| Mera discordância | O ponto foi enfrentado e decidido contra o cliente | Nada. Vá de recurso | Alto, caráter protelatório |

Critério de decisão: se a resposta ao vício não muda o dispositivo nem prepara a instância superior, não oponha embargos. Quando a omissão é relevante para levar a matéria a instância superior, os embargos deixam de ser opção e passam a ser etapa necessária.

### Etapa 7. Matriz de teses recursais

Para cada tese, uma linha. Tese sem dispositivo de apoio não entra na matriz.

| Tese | Natureza do erro | Capítulo atacado | Dispositivo de apoio | Prova ou folha que sustenta | Força | Efeito prático se vencer |
|---|---|---|---|---|---|---|
| Ausência de fundamentação sobre precedente invocado | Processual | Rejeição do pedido X | Art. 489, §1º, e art. 927 do CPC | Petição de folha Y | Média | Anulação do capítulo ou novo julgamento |
| Ônus da prova invertido | Direito | Improcedência | Art. 373 do CPC | Contestação de folha Z | Alta | Reforma |
| Quantum indenizatório aviltado | Direito e fato | Dano moral | Parâmetro do tribunal, a conferir | Documental | Média | Majoração |

Natureza do erro: processual (nulidade, fundamentação, cerceamento), de direito (norma mal aplicada, precedente ignorado), de fato (valoração da prova produzida) ou de inexistência de prova. Diferenciar importa porque instâncias extraordinárias não reexaminam prova.

### Etapa 8. Cabimento, prazo e efeitos

Confirme o rito antes de escolher o recurso. Prazos processuais civis contam em dias úteis (art. 219 do CPC) e o prazo é de 15 dias para os recursos em geral, exceto embargos de declaração (art. 1.003, §5º). Nos ritos abaixo a contagem e o prazo mudam.

| Decisão | Recurso típico | Prazo | Observações |
|---|---|---|---|
| Sentença cível, rito comum | Apelação (art. 1.009 do CPC) | 15 dias úteis | Regra geral de efeito suspensivo no art. 1.012, com exceções listadas no §1º, que devem ser conferidas no texto do artigo |
| Decisão interlocutória cível | Agravo de instrumento nas hipóteses legais | 15 dias úteis | Fora das hipóteses, a questão vai na apelação (art. 1.009, §1º). A tese de taxatividade mitigada firmada pelo STJ em recurso repetitivo deve ser conferida na fonte oficial |
| Qualquer decisão com vício do art. 1.022 | Embargos de declaração | 5 dias | Interrompem o prazo do recurso principal |
| Sentença em Juizado Especial Cível | Recurso inominado (art. 42 da Lei 9.099/1995) | 10 dias | Conferir regras locais de preparo |
| Sentença trabalhista | Recurso ordinário (art. 895 da CLT) | 8 dias úteis | Contagem em dias úteis por força do art. 775 da CLT. Embargos de declaração pelo art. 897-A da CLT |
| Sentença criminal | Apelação (art. 593 do CPP) | 5 dias para interpor, com razões em prazo próprio | Prazos penais em dias corridos (art. 798 do CPP) |

Para cada opção, registre: efeito suspensivo, necessidade de preparo, exigência de prequestionamento se a intenção é chegar a instância extraordinária, e o que acontece se nada for feito.

### Etapa 9. Recomendação

Feche com uma recomendação única e explícita entre recorrer, opor embargos antes de recorrer, cumprir, executar ou negociar. Apresente custo-benefício qualitativo: valor em disputa por capítulo, custo de preparo e honorários recursais, tempo estimado de tramitação, risco de majoração de honorários e risco de piora prática. Liste as perguntas que o advogado precisa fazer ao cliente antes de protocolar.

## Formato da saída

```
ANALISE DE DECISAO
Processo: [numero conforme informado, ou "nao informado"]
Orgao / rito: [...]
Tipo de decisao: [sentenca / interlocutoria / acordao]
Resultado global para o cliente: [favoravel / parcial / desfavoravel]

1. DISPOSITIVO (transcricao literal)
"[...]"

2. INVENTARIO DE PEDIDOS
| Pedido | Resultado | Fundamento | Recorrivel | Observacao |

3. FUNDAMENTACAO
Razao de decidir por capitulo: [...]
Onus da prova: [regular / questionavel, com motivo]
Precedentes citados na decisao: [reproduzidos como constam + [a conferir]]
Argumentos da parte nao enfrentados: [lista com folha]

4. SUCUMBENCIA E HONORARIOS
Distribuicao: [...]
Base de calculo e percentual: [...]
Gratuidade: [sim / nao / nao informado]
Custas e preparo: [...]

5. COISA JULGADA E PRECLUSAO
Capitulos que estabilizam sem recurso: [...]
Questoes a suscitar obrigatoriamente na apelacao: [...]

6. EMBARGOS DE DECLARACAO
Vicios identificados: [omissao / contradicao / obscuridade / erro material / nenhum]
Recomendacao: [opor / nao opor] porque [...]

7. MATRIZ DE TESES RECURSAIS
| Tese | Natureza | Capitulo | Dispositivo de apoio | Forca | Efeito se vencer |

8. CABIMENTO E PRAZO
Recurso indicado: [...]
Prazo legal: [...] contados em [dias uteis / corridos]
Termo inicial: A CONFERIR no sistema do tribunal
Preparo: [...]
Efeito: [...]

9. RECOMENDACAO
[recorrer / embargar antes / cumprir / executar / negociar] porque [...]
Perguntas ao cliente antes de protocolar: [...]

10. PONTOS A CONFERIR
[toda citacao, valor, tema e data marcados como a conferir]

11. RESUMO PARA O CLIENTE (linguagem simples, sem artigos)
[3 a 6 frases: o que o juiz decidiu, o que isso significa na pratica,
o que pode ser feito, o que depende de decisao do cliente]
```

## Exemplo completo

**Entrada.** Sentença em ação de indenização. Autora Joana Ribeiro Alencar contra Banco Aurora S.A. Pedidos: declaração de inexigibilidade de débito de R$ 1.280,00, exclusão do apontamento em cadastro de inadimplentes, restituição em dobro do valor cobrado e dano moral de R$ 20.000,00. Dispositivo declara a inexigibilidade, condena o réu em R$ 4.000,00 de dano moral, rejeita a restituição em dobro por ausência de má-fé, é silente quanto à exclusão do apontamento e distribui as despesas de forma recíproca, com honorários de 10% para cada patrono.

**Saída resumida.**

- Inventário: inexigibilidade acolhida. Dano moral acolhido em valor inferior ao pedido. Restituição em dobro rejeitada com fundamento em ausência de má-fé. Obrigação de excluir o apontamento não apreciada, embora conste do relatório.
- Vício: omissão quanto à obrigação de fazer. Cabe embargos de declaração em 5 dias, pedindo integração do dispositivo para determinar a exclusão. Sem isso, a autora fica com título declaratório sem ordem de cumprimento, e a interrupção do prazo pelos embargos preserva a apelação.
- Teses recursais: majoração do dano moral, com apoio no parâmetro do tribunal de origem, a conferir na fonte oficial antes de citar. Cabimento da restituição em dobro, a partir da leitura da regra do Código de Defesa do Consumidor sobre cobrança indevida, cujo dispositivo e cuja interpretação atual devem ser conferidos, inclusive quanto à exigência de má-fé. Redistribuição da sucumbência, se a autora obtiver reforma em capítulo relevante.
- Sucumbência: a reciprocidade decorre da rejeição parcial. Se a apelação reverter a restituição em dobro, o capítulo de despesas deve ser redistribuído. Registrar que a interposição pode gerar majoração de honorários na instância superior.
- Coisa julgada: o capítulo da inexigibilidade não é impugnado pela autora e estabiliza se o réu também não recorrer. O capítulo do quantum só se preserva com recurso próprio.
- Recomendação: opor embargos para sanar a omissão e, no mesmo movimento, preparar apelação sobre quantum e restituição em dobro. Perguntar à cliente se aceita proposta de acordo acima de determinado piso antes de assumir o custo recursal.
- Resumo para a cliente: "A Justiça reconheceu que a dívida não existe e determinou indenização de R$ 4.000,00. O pedido de devolver em dobro o valor cobrado foi negado, e o pedido de retirar seu nome do cadastro não foi analisado. Vamos pedir ao juiz que complete a decisão nesse ponto e podemos recorrer para aumentar a indenização. Recorrer tem custo e prazo próprio, e a decisão sobre recorrer é sua."

## Erros comuns

- Ler só o dispositivo e perder o vício de fundamentação. Ou ler só a fundamentação e recorrer de capítulo que o dispositivo não contém.
- Tratar sentença parcialmente procedente como vitória e deixar capítulo desfavorável transitar por falta de recurso próprio.
- Confundir omissão com discordância e opor embargos protelatórios.
- Citar súmula, tema ou acórdão de memória. Se não veio da decisão nem de fonte lida na conversa, não existe para a análise.
- Afirmar data de vencimento de prazo sem conferir a publicação e as suspensões no sistema do tribunal.
- Esquecer as questões interlocutórias não agraváveis, que precisam ser repetidas na apelação para não se perderem.
- Ignorar o capítulo de honorários, que muitas vezes é o maior valor econômico em disputa.
- Entregar ao cliente a nota técnica da equipe, com jargão e artigos, em lugar do resumo simples.
- Prometer êxito ou percentual de chance.

## Checklist final

- [ ] Dispositivo transcrito literalmente
- [ ] Cada pedido da inicial tem uma linha e um resultado
- [ ] Ônus da prova conferido contra o art. 373 do CPC
- [ ] Vícios do art. 489, §1º, do CPC verificados um a um
- [ ] Triagem de embargos concluída, com decisão de opor ou não e o motivo
- [ ] Capítulo de sucumbência e honorários analisado como capítulo autônomo
- [ ] Lista do que estabiliza sem recurso e das questões a suscitar na apelação
- [ ] Recurso, prazo e regra de contagem indicados, com termo inicial marcado como a conferir
- [ ] Nenhuma citação inventada. Tudo que não veio de fonte lida está marcado como a conferir
- [ ] Nenhum dado pessoal identificável reproduzido
- [ ] Duas saídas entregues: nota técnica e resumo para o cliente
- [ ] Recomendação única e explícita, sem promessa de resultado
