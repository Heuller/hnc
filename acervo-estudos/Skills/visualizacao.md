# Regras de visualização

Como a contagem aparece para o usuário. Carregue este arquivo quando precisar
formatar a entrega em canal diferente do chat, ou quando a contagem tiver
suspensão, prazo em dobro ou dado faltante.

## Princípio

**A data nunca viaja sozinha.** Data sem memória de cálculo não é conferível, e
prazo não conferível é prazo perdido com aparência de resolvido. Toda entrega
carrega, no mínimo: vencimento, termo inicial, regime, e o aviso de conferência.

## Ordem canônica dos blocos

Sempre nesta ordem. O leitor decora a posição e para de caçar informação.

| # | Bloco | Obrigatório | Corta quando |
|---|---|---|---|
| 1 | Aviso de rascunho | sempre | nunca |
| 2 | Título com vencimento e dia da semana | sempre | nunca |
| 3 | Nível, quantidade de dias, regime, ramo | sempre | nunca |
| 4 | Memória do cálculo (tabela) | sempre | nunca |
| 5 | Regras aplicadas (passos numerados) | sempre | nunca |
| 6 | Calendário | chat e e-mail | canal sem monoespaçado, ou janela > 3 meses |
| 7 | Contagem dia a dia | chat e e-mail | prazo > 40 dias contados (mostrar 5 primeiros e 5 últimos) |
| 8 | Feriados e suspensões | quando existirem | quando a janela não tiver nenhum |
| 9 | Alertas por nível | sempre | nunca |
| 10 | Checklist de conferência | sempre | nunca |
| 11 | Rodapé de fonte oficial | sempre | nunca |

Inverter a ordem, ou abrir com o calendário, empurra o vencimento para baixo da
dobra. O número que importa é o primeiro que aparece.

## Marcadores do calendário

Semântica fixa. Não inventar emoji, não trocar símbolo entre entregas: o
advogado lê o mesmo mapa toda vez.

| Marca | Significado |
|---|---|
| `A` | data do ato (publicação, ciência, juntada) |
| `>` | primeiro dia contado |
| `.` | dia computado no prazo |
| `f` | feriado que suspendeu a contagem |
| `~` | dia dentro da suspensão do art. 220 |
| `#` | último dia do prazo |
| (vazio) | dia sem efeito nesta contagem |

Só se marca o que afeta **esta** contagem. Feriado em fim de semana e feriado
fora da janela ficam sem marca: marca sem efeito faz o leitor procurar
consequência onde não há.

O calendário vai em bloco de código para preservar o alinhamento. Fora do
monoespaçado a grade desmonta e vira ruído: nesse caso, corte o calendário e
mantenha a contagem dia a dia.

## Nível de alerta

Prefixo textual, nunca só cor. O canal pode não ter cor, e daltônico não lê
semáforo.

| Nível | Prefixo | Quando |
|---|---|---|
| FATAL | `Nível FATAL` | peremptório, a perda preclui |
| CRÍTICO | `Nível CRÍTICO` | consequência relevante mas sanável, ou prazo curto |
| ATENÇÃO | `Nível ATENÇÃO` | dilatório, ciência, providência administrativa |

Prazo em dúvida sobe para FATAL com a dúvida escrita ao lado. Nunca desce de
nível por falta de informação.

## Variantes por canal

**Chat (padrão).** Markdown completo, calendário em bloco de código, tabela de
memória. É a saída de `--formato md`.

**WhatsApp.** Sem tabela markdown e sem bloco de código largo: o cliente quebra
linha e a grade desmonta. Linhas curtas, no máximo 45 caracteres, uma
informação por linha. Blocos 1 a 5, 9 e 11 apenas. Sem calendário.

```
*Prazo: apelação*
Vence 05/12/2025 (sexta) — FATAL

Publicação: 13/11
1º dia contado: 14/11
15 dias úteis (CPC 1.003 §5º)
Feriado no meio: 20/11

Alertas: 21/11, 28/11, 02/12, 04/12
Meta de conclusão: 02/12

Rascunho. Conferir no sistema do tribunal
antes de lançar.
```

**E-mail.** Igual ao chat, com o vencimento também no assunto:
`Prazo FATAL 05/12 — apelação — proc. 0000000-00.0000.0.00.0000`.

**Planilha de controle.** Uma linha por prazo, colunas nesta ordem: processo,
cliente, ato, meio, data do ato, primeiro dia, regime, dias, vencimento, nível,
responsável, conferido por, conferido em. Datas em `AAAA-MM-DD` para ordenar.
Use `--formato json` e monte a linha a partir dele.

**Evento de agenda.** Título `Prazo <nível>: <peça> — proc. <número>`. Sem CPF,
sem RG, sem endereço, sem dado bancário: agenda costuma ser compartilhada. Use
`--formato ics`, que já emite o vencimento e os D-n do nível.

## Dado faltante

Campo desconhecido aparece como `?` na memória do cálculo e vira pergunta ao
final. Nunca preencher por inferência e nunca omitir a linha: linha ausente
some da conferência, `?` não.

```
| Meio / termo inicial | ? — informe se a data é de disponibilização ou de publicação |
```

## Confiança da contagem

Se o script rodou, a entrega sai como está. Se não havia como executar
(ambiente sem Node), marque no topo:

> Contagem feita manualmente, sem o motor de cálculo. Confiança reduzida:
> confira feriado local e dia útil antes de qualquer lançamento.

Nunca apresentar contagem manual com a mesma segurança da contagem do script.

## Anti-padrões

- Entregar só a data, sem memória de cálculo.
- Abrir pelo calendário e enterrar o vencimento.
- Trocar os marcadores entre uma entrega e outra.
- Marcar feriado que não afetou a contagem.
- Usar emoji no lugar do nível textual.
- Repetir CPF, endereço ou dado bancário no cartão ou no título do evento.
- Apresentar o vencimento como definitivo, sem o aviso de conferência.
- Calendário em canal que não preserva monoespaçado.
