---
name: token-economy
description: "Corta o consumo de tokens e o custo de contexto escolhendo a operação mais barata que resolve a tarefa: leitura cirúrgica em vez de arquivo inteiro, busca antes de leitura, edição em vez de reescrita, resumo antes de continuar e troca de janela no momento certo. Use quando o usuário pedir para economizar tokens, reduzir custo de uso do Claude, explorar base de código grande, gerar conteúdo longo ou quando a janela estiver ficando pesada. Acionar também quando disser 'está gastando muito', 'a janela está cheia', 'o Claude está lento', 'como reduzo o custo', 'leia só o necessário' ou 'faz um resumo para eu continuar em outra conversa'. NÃO usar como justificativa para entregar trabalho incompleto, pular verificação obrigatória ou deixar de ler o que a tarefa exige."
---

# Economia de tokens (Julius Mode)

Reduzir o consumo de 3 a 10 vezes escolhendo, a cada passo, a operação mais barata que atinge o objetivo. Todo token de entrada e de saída disputa espaço na janela, aumenta a latência e aparece na fatura.

## Função

Governar **como** o trabalho é feito, não **se** é feito. A skill decide ordem de operações, granularidade de leitura, formato de saída e momento de trocar de janela.

Fora de escopo: cortar escopo do trabalho, pular teste, pular verificação, entregar resposta rasa. Economia que produz retrabalho é prejuízo: uma tarefa refeita custa mais do que a leitura que foi evitada.

## Quando acionar

- Início de tarefa em base de código ou acervo grande.
- Exploração ("onde está", "como funciona", "existe X").
- Edição iterativa de artefato longo.
- Geração de conteúdo extenso.
- Sinal de janela pesada: latência subindo, respostas mais genéricas, modelo repetindo pergunta já respondida.

## Quando NÃO acionar

- Tarefa em que a leitura completa é o próprio requisito (revisar contrato inteiro, auditar arquivo de ponta a ponta, conferir compliance linha por linha).
- Depuração em que a causa é desconhecida e o custo de errar supera o custo de ler.
- Quando o usuário pedir explicitamente o arquivo completo.

## Princípios

1. **Pergunta central antes de cada chamada: qual o mínimo que preciso ler ou escrever para resolver isso?** Se existe caminho com menos dado, use esse.
2. **Busca antes de leitura.** Buscar devolve linha e caminho. Ler devolve o arquivo. Buscar primeiro elimina 80% da leitura desnecessária.
3. **Entrada é barata comparada à saída, mas nunca é grátis.** A saída custa múltiplas vezes o preço da entrada, então reescrever um arquivo inteiro é o gasto mais caro que existe.
4. **Ler duas vezes é sinal de plano ruim.** Reler o mesmo arquivo com offset diferente significa que a primeira leitura foi feita sem saber o que se procurava.
5. **Contexto poluído degrada qualidade antes de estourar a janela.** Muito antes do limite, versões antigas do mesmo arquivo e logs inteiros começam a competir com a informação correta.
6. **Prefixo estável vale ouro.** Instruções e contexto fixo no começo podem ser servidos de cache. Mexer no início do contexto invalida esse ganho, então acrescente ao fim.
7. **Chamadas independentes vão juntas.** Três verificações sem dependência entre si em uma mensagem custam menos ciclos e menos repetição de contexto.
8. **Verificação não é opcional.** Economia nunca justifica afirmar que algo funciona sem rodar o comando.

## Fluxo

1. **Enuncie o objetivo em uma linha** e o critério de aceite. Sem isso, a leitura vira passeio.
2. **Localize** com busca estruturada: nome de arquivo, símbolo, string literal. Use contagem quando a pergunta é apenas "existe?".
3. **Decida a granularidade** com a tabela de decisão abaixo.
4. **Leia o menor recorte suficiente**, com deslocamento e limite.
5. **Edite pontualmente.** Bloco alterado, com o contexto mínimo necessário para unicidade.
6. **Verifique** com o comando mais estreito que prova o resultado (um teste, não a suíte inteira, quando o escopo permite).
7. **Comprima** antes de seguir: resumo de estado em poucas linhas, descartando o caminho percorrido.
8. **Troque de janela** quando os sinais de saturação aparecerem, levando o resumo.

## Ler arquivo inteiro ou trecho

| Situação | Decisão |
|---|---|
| Arquivo com menos de 150 linhas | leia inteiro, o recorte não paga o esforço |
| Arquivo de 150 a 500 linhas | busque o alvo, leia a região com folga de 20 linhas |
| Arquivo com mais de 500 linhas | nunca leia inteiro sem antes mapear estrutura ou buscar |
| Configuração, YAML, JSON grande | leia só a seção, por deslocamento |
| Arquivo que você vai reescrever de ponta a ponta | leia inteiro, aqui o recorte gera erro |
| Contrato, peça, documento sob revisão integral | leia inteiro, é requisito da tarefa |
| Log, saída de build, despejo de erro | busque a primeira linha de erro e leia 30 linhas ao redor |

## Estratégias de leitura

| Em vez de | Faça | Economia |
|---|---|---|
| Ler arquivo de 500 linhas | mapear estrutura, abrir só o símbolo alvo | 4 a 8 vezes |
| Ler arquivo para achar uma função | buscar a assinatura, ler as 20 linhas | 5 a 20 vezes |
| Ler 3 arquivos por precaução | buscar nos três, ler só o que tem ocorrência | 2 a 3 vezes |
| Ler configuração inteira | ler com deslocamento e limite na seção | 2 a 5 vezes |
| Ler todos os testes por contexto | ler o teste do módulo alterado | 3 a 10 vezes |

Regras:

1. **Nunca leia arquivo acima de 150 linhas sem estreitar antes.**
2. **Agrupe leituras**: três faixas do mesmo arquivo em uma rodada, não em três idas e voltas.
3. **Use o modo que lista apenas arquivos com ocorrência** para descobrir o que importa antes de abrir qualquer coisa.
4. **Limite o número de resultados**: comece com 5 a 10 e amplie só se insuficiente.

## Estratégias de escrita

1. **Editar em vez de reescrever.** Alterar 5 linhas de um arquivo de 300 economiza cerca de 295 linhas de saída.
2. **Contexto mínimo único**: 3 a 5 linhas de âncora, não a função inteira.
3. **Agrupe edições da mesma região** em uma operação, não em cinco pequenas.
4. **Nunca reescreva um arquivo para mudar uma linha.**
5. **Não devolva o arquivo final por cortesia.** O usuário já tem o arquivo.

## Estratégias de busca

1. **Comece estreito**, em caminho ou tipo específico, e abra só se vier vazio.
2. **Use filtro de tipo**, mais eficiente que varrer tudo.
3. **Contagem primeiro** quando a pergunta é apenas de existência.
4. **Uma expressão com alternativas** vence três buscas sequenciais.
5. **Busca semântica para pergunta de "onde" e "como"**: uma chamada costuma substituir 3 a 5 ciclos de busca e leitura.

## Estratégias de saída

1. **Referência em vez de citação.** `caminho:linha` no lugar do trecho colado.
2. **Não devolva código inalterado.** Só o que mudou.
3. **Sem narração.** "Vou ler o arquivo" antes de ler não agrega nada.
4. **Consolide chamadas** independentes em uma mensagem.
5. **Tabela e lista em vez de prosa.** Mais densidade por token.
6. **Não repita o resultado da ferramenta em texto.** O usuário já viu.

## Higiene de contexto

1. **Divida em fases**: descoberta, implementação, verificação. Cada uma em sessão própria quando a tarefa é grande.
2. **Resuma a cada 4 ou 5 rodadas**: estado atual, decisões tomadas, pendências. Descarte o caminho.
3. **Referencie sem repetir**: "como na cláusula 7.3 acima" em vez de colar de novo.
4. **Desligue ferramenta que não vai usar.** Definição de ferramenta é cobrada em toda requisição, e um conjunto grande de conectores pode custar dezenas de milhares de tokens antes da primeira palavra.
5. **Um assunto por janela.** Duas tarefas sem relação na mesma conversa pagam o contexto uma da outra em cada rodada.

## Quando abrir janela nova

Sinais de saturação, em ordem de aparecimento:

1. O modelo repete pergunta cuja resposta já está na conversa.
2. Reintroduz bug já corrigido, ou volta a uma decisão já descartada.
3. Latência sobe de forma perceptível a cada rodada.
4. Respostas ficam genéricas, com menos referência a detalhe específico do projeto.
5. O histórico já tem 3 ou mais versões do mesmo arquivo.

Procedimento de troca:

```
1. Resuma em até 20 linhas: objetivo, o que foi feito, decisões,
   arquivos tocados, pendências, próximo passo exato.
2. Liste os caminhos dos arquivos relevantes. Não cole o conteúdo.
3. Abra a janela nova com esse resumo como primeira mensagem.
4. Na janela nova, releia apenas o que o próximo passo exige.
```

Para transição longa ou trabalho que vai continuar em outro dia, use um documento de handoff em arquivo, não um resumo dentro do chat.

## Padrão de prompt que evita retrabalho

O retrabalho é o maior gasto de token que existe: refazer uma tarefa custa a tarefa inteira mais a original. Prompt de partida:

```
OBJETIVO: <uma frase, resultado observável>
ARQUIVOS: <caminhos que já sei que importam>
RESTRIÇÕES: <o que não pode mudar, padrão a seguir>
CRITÉRIO DE ACEITE: <como eu sei que ficou pronto>
FORMATO DA SAÍDA: <diff, bloco alterado, tabela, lista>
NÃO FAÇA: <refatorar o resto, criar arquivo novo, mudar dependência>
```

Cinco linhas de especificação evitam duas rodadas de correção. A conta favorece a especificação em qualquer cenário.

## Ordem de grandeza (para estimar antes de gastar)

| Item | Estimativa |
|---|---|
| 1 linha de código | 10 a 15 tokens |
| Arquivo de 500 linhas | 6.000 a 8.000 tokens |
| 1 página A4 de texto em português | 700 a 900 tokens |
| Contrato de 15 páginas | 11.000 a 14.000 tokens |
| Saída de build com erro, completa | 3.000 a 20.000 tokens |
| Definição de 1 ferramenta | 200 a 800 tokens |
| Conjunto de 100 ferramentas conectadas | acima de 50.000 tokens por requisição |

Português consome mais tokens que inglês para o mesmo conteúdo, por causa de acentuação e palavras mais longas. Considere de 10% a 20% a mais nas estimativas de texto em pt-BR.

Estimativa de custo:

```
custo da tarefa = (tokens de entrada x preço de entrada)
                + (tokens de saída x preço de saída)
```

A saída custa várias vezes mais que a entrada, e entrada repetida em prefixo estável pode ser servida de cache por fração do preço. Consulte o preço vigente do modelo em uso: não decore valor.

## Exemplo com número: trocar o texto de um botão

**Caminho caro**

| Passo | Tokens |
|---|---|
| Ler 3 arquivos candidatos, 1.200 linhas | cerca de 16.000 entrada |
| Reescrever o arquivo de 420 linhas | cerca de 5.500 saída |
| Reler o arquivo para conferir | cerca de 5.500 entrada |
| **Total** | **cerca de 27.000** |

**Caminho barato**

| Passo | Tokens |
|---|---|
| Buscar o texto do botão no repositório | cerca de 300 |
| Ler 30 linhas na região encontrada | cerca de 400 |
| Editar 6 linhas | cerca de 150 saída |
| Rodar o teste do componente | cerca de 400 |
| **Total** | **cerca de 1.250** |

Redução de aproximadamente 21 vezes, com o mesmo resultado e uma verificação a mais.

## Exemplo com número: entender um módulo de 800 linhas

- Leitura completa: cerca de 11.000 tokens de entrada, e o modelo carrega 700 linhas irrelevantes pelo resto da conversa.
- Mapear estrutura (cerca de 600 tokens) e abrir 3 símbolos (cerca de 1.400 tokens): total de cerca de 2.000 tokens, com a janela limpa para o trabalho real.

## Matriz de decisão

| Situação | Caminho mais barato |
|---|---|
| "X existe?" | busca em modo contagem |
| "Onde X está definido?" | busca que lista arquivos, depois leitura da região |
| "Como o módulo Y funciona?" | mapa de estrutura, depois 2 ou 3 símbolos |
| "Mude a linha 42 do arquivo Z" | edição com 3 linhas de âncora |
| "Ache todos os usos de F" | busca com filtro de tipo e limite de resultados |
| "Entenda este arquivo de 800 linhas" | estrutura primeiro, símbolos depois |
| "Rode 3 verificações independentes" | chamadas em paralelo na mesma mensagem |
| "Por que o build quebrou?" | buscar a primeira linha de erro, ler 30 linhas ao redor |
| "Revise este contrato inteiro" | leitura completa: aqui o recorte é o erro |

## Armadilhas que queimam contexto

- Colar log, despejo de erro ou saída de build inteiros quando bastam 30 linhas ao redor da falha.
- Imprimir arquivo grande pelo terminal em vez de ler com recorte.
- Varrer diretório de dependências, artefato de build ou pasta de imagens.
- Ler o arquivo de novo depois de editar só para confirmar. A edição falha com erro quando não aplica.
- Deixar 5 versões do mesmo arquivo no histórico.
- Conectores e ferramentas ligados sem uso na tarefa.
- Ecoar o resultado da ferramenta em prosa.
- Buscas sequenciais que caberiam em uma expressão com alternativas.
- Repetir contexto que já está na conversa.
- Duas tarefas sem relação na mesma janela.
- Reescrever arquivo para corrigir erro de digitação.
- Trocar de janela sem levar resumo, e refazer toda a descoberta.

## Checklist final

- [ ] Objetivo e critério de aceite enunciados antes da primeira leitura.
- [ ] Busca feita antes de qualquer leitura de arquivo grande.
- [ ] Nenhum arquivo acima de 150 linhas lido sem estreitamento.
- [ ] Nenhum arquivo lido duas vezes.
- [ ] Edição pontual em vez de reescrita.
- [ ] Chamadas independentes agrupadas.
- [ ] Saída sem código inalterado e sem narração.
- [ ] Verificação executada de fato, com o comando mais estreito que prova o resultado.
- [ ] Resumo de estado feito antes de continuar ou trocar de janela.
- [ ] Ferramentas sem uso desligadas.
