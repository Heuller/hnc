---
name: "Gestão de prazos processuais"
description: "Calcula rascunho de prazo processual com script determinístico (dias úteis ou corridos, feriados nacionais, estaduais e das capitais, recesso do art. 220, prazo em dobro), identifica o termo inicial pelo meio da intimação e organiza alerta em três níveis com rotina diária de conferência. Use quando o usuário pedir cálculo de prazo, contagem processual, controle de intimações, prazo fatal, alerta de vencimento ou rotina de prazos. Acionar também quando disser 'quando vence esse prazo', 'colei a intimação', 'esse prazo é em dias úteis', 'conta em dobro', 'perdi o prazo, e agora' ou 'monta meu controle de prazos'. NÃO usar como fonte oficial de prazo, para redigir a peça em si, nem para consultar andamento em sistema de tribunal."
---

# Gestão de prazos processuais

## ⚠️ Aviso obrigatório (repetir em toda entrega)

> **Esta skill não produz prazo oficial.** A contagem entregue é **rascunho de conferência**.
>
> A fonte oficial é o **sistema do tribunal** (PJe, e-SAJ, Projudi, eproc, Domicílio Judicial Eletrônico do CNJ), o **Diário** e o **calendário forense da comarca**. Toda data precisa ser confirmada nesse sistema e **validada pelo advogado responsável** antes de virar lançamento, peticionamento ou compromisso com o cliente.
>
> A skill também não presta consultoria jurídica e não decide a estratégia processual. Erro de prazo é risco de preclusão e de responsabilidade profissional: **cruze sempre duas fontes**.

## Função

Organizar o levantamento e o rascunho de contagem de prazo a partir de intimação ou publicação, classificar urgência, definir alertas e manter registro de conferência.

Fora de escopo: redigir a peça, consultar andamento diretamente no tribunal, substituir o sistema de controle do escritório e dar parecer sobre cabimento de recurso.

## Quando acionar

- Intimação, publicação ou certidão colada pelo usuário.
- Pergunta de contagem ("é dia útil?", "conta em dobro?", "quando vence?").
- Montagem ou revisão da rotina de prazos do escritório.
- Prazo estourando ou já perdido, para plano de contenção.

## Quando NÃO acionar

- Pedido de redação da peça: outra skill cuida disso.
- Pedido de "quantos dias tem o recurso X" sem nenhum dado do caso: responda pelo instituto e mande conferir o rito.
- Consulta de andamento processual: isso é sistema de tribunal, não contagem.

## Princípios

1. **Rascunho, nunca lançamento.** A saída é uma proposta de contagem com a memória do cálculo. Quem lança é o responsável.
2. **Dado faltante não se preenche por inferência.** Sem data de publicação, sem rito ou sem espécie de decisão, a resposta é a pergunta, não a data.
3. **Dúvida sobe o nível de urgência.** Prazo em dúvida entra como FATAL com a dúvida escrita, nunca como estimativa silenciosa.
4. **Memória de cálculo explícita.** Termo inicial, regime de contagem, dias somados, feriados e suspensões considerados, data final. Sem a memória, ninguém consegue conferir.
5. **Feriado local é a maior fonte de erro.** Feriado municipal, feriado da OAB, ponto facultativo do tribunal e suspensão por portaria não estão em calendário genérico. Sempre marcar como item de conferência.
6. **Duas fontes, sempre.** Sistema do tribunal mais controle interno do escritório. Nunca só a skill, nunca só a agenda.
7. **Prazo fatal tem tratamento diferente de dilatório.** Perder o fatal preclui. Isso muda alerta, antecedência e escalonamento.
8. **Antecipe a entrega, não o vencimento.** Meta interna de conclusão em D-3 do vencimento. Trabalhar no último dia transforma qualquer imprevisto em perda de prazo.
9. **Registro de conferência é parte do trabalho.** Quem conferiu, quando, em qual sistema. É o que protege o escritório em caso de questionamento.
10. **Contagem é de script, não de cabeça.** Atravessar Corpus Christi, feriado estadual e recesso contando mentalmente é onde o erro nasce. Rode `scripts/prazo.js`. Só conte à mão quando não houver como executar, e diga que foi à mão.

## Arquivos da skill

| Arquivo | Quando ler |
|---|---|
| `scripts/prazo.js` | sempre que houver data para contar |
| `references/motor-de-calculo.md` | escolher preset, justificar base legal, explicar o que a tabela de feriados não cobre |
| `references/visualizacao.md` | formatar para WhatsApp, e-mail, planilha ou agenda, e em caso de suspensão, dobro ou dado faltante |

## Motor de cálculo

Havendo execução de código, **conte pelo script**, nunca de cabeça.

```bash
node scripts/prazo.js --data 2025-11-12 --inicio dje-disp --preset apelacao --uf SP --municipio "São Paulo"
```

Parâmetros que mais mudam o resultado:

- `--inicio dje-disp` quando a data é de **disponibilização**; `--inicio dje` quando é de **publicação**. Confundir os dois custa um dia de prazo.
- `--preset <slug>` preenche dias e regime com a base legal. `--presets` lista tudo.
- `--uf` e `--municipio` ligam feriado estadual e da capital. Comarca do interior não está na tabela: entra por `--feriado 2026-03-05="Aniversário da comarca"`.
- `--dobro --dobro-motivo "Fazenda Pública, CPC art. 183"` para prazo em dobro.
- `--sem-recesso` para prazo penal e para prazo material, que não param no art. 220.
- `--nivel fatal|critico|atencao` define as antecedências dos alertas.
- `--formato md|json|ics|data`. O `md` já sai no formato de entrega; o `json` serve para montar linha de planilha; o `ics` gera o vencimento e os D-n para a agenda.

O script cobre feriado nacional fixo e móvel, os 27 estados, as 26 capitais mais o DF, o recesso do art. 220 e as regras de termo inicial por meio de intimação. **Não** cobre feriado de comarca do interior, ponto facultativo, portaria de suspensão nem indisponibilidade de sistema: isso continua sendo conferência humana, e `references/motor-de-calculo.md` traz a lista completa dos limites.

Sem execução de código, conte pelas tabelas deste arquivo e marque a entrega como contagem manual, com confiança reduzida.

## Identificação do ato

Antes de contar, levante:

- **Meio da intimação**: Diário eletrônico, portal do PJe, Domicílio Judicial Eletrônico, carta com AR, oficial de justiça, carga, citação digital, intimação em audiência.
- **Data de disponibilização** e **data de publicação** (não são a mesma coisa) ou data de ciência, com horário quando o portal for relevante.
- **Processo, vara, comarca, tribunal, classe e rito.**
- **Espécie do ato intimado**: sentença, decisão interlocutória, despacho, ato ordinatório, acórdão, laudo, contestação.
- **Parte intimada e polo.** Quem é o cliente, se há litisconsortes.
- **Natureza do prazo**: peremptório (fatal) ou dilatório.
- **Quem representa**: advogado particular, Defensoria, Ministério Público, procuradoria de ente público.

## Regime de contagem

| Ramo | Regime | Base |
|---|---|---|
| Processo civil comum | dias **úteis** para prazos processuais em dias | CPC, art. 219 |
| Prazo material (prescrição, decadência, prazo contratual) | dias **corridos** | art. 219 alcança só prazo processual |
| Trabalhista | dias **úteis** | CLT, art. 775 |
| Juizados Especiais Cíveis | entendimento consolidado nos enunciados do FONAJE é de contagem em **dias corridos**; confirmar orientação do Juizado | conferir |
| Processo penal | prazos **contínuos**, não se interrompem por feriado ou recesso | CPP |
| Infância e juventude, eleitoral, administrativo | regime próprio, variável | conferir a lei específica |

Regras de contagem no processo civil:

- **Exclui o dia do começo e inclui o do vencimento** (CPC, art. 224).
- Vencimento em dia sem expediente, ou em dia com expediente encerrado antes da hora normal, **prorroga para o dia útil seguinte**.
- **Suspensão de 20 de dezembro a 20 de janeiro** (CPC, art. 220). Nesse intervalo o prazo não corre e retoma a contagem depois. Não confundir com férias individuais do advogado.
- **Prazo em dobro** para Fazenda Pública (art. 183), Ministério Público (art. 180) e Defensoria Pública (art. 186). Litisconsortes com procuradores de escritórios distintos têm regra própria e restrita a autos físicos (art. 229): conferir antes de aplicar.
- Prazo fixado pelo juiz em hipótese específica prevalece sobre o prazo legal geral.

## Termo inicial por tipo de intimação

| Meio | Termo inicial (rascunho) | Ponto de conferência |
|---|---|---|
| Diário eletrônico | a publicação se considera realizada no primeiro dia útil seguinte à disponibilização; a contagem começa no dia útil seguinte a essa data | confirmar disponibilização e publicação na certidão |
| Portal eletrônico com consulta | ciência na data da consulta; se não houver consulta, a intimação se considera realizada ao fim do prazo de leitura previsto na Lei 11.419/2006 (dez dias corridos da disponibilização) | verificar log de leitura no sistema |
| Domicílio Judicial Eletrônico (CNJ) | regra de prazo de leitura definida em normativa do CNJ e do tribunal | conferir a normativa vigente, não presumir |
| Carta com AR | data de juntada do AR aos autos | achar a certidão de juntada, não a data de recebimento |
| Oficial de justiça | data de juntada do mandado cumprido | idem |
| Ato do escrivão ou chefe de secretaria | data da ocorrência | certidão nos autos |
| Edital | dia útil seguinte ao fim da dilação fixada pelo juiz | conferir o prazo do edital |
| Intimação em audiência | data da audiência | ata registra a ciência |

Base geral dos termos iniciais: CPC, art. 231. A espécie exata e o rito mudam o resultado, então cada caso volta para conferência no sistema.

## Alerta em três níveis

| Nível | Aplica a | Antecedência dos alertas | Escalonamento |
|---|---|---|---|
| **FATAL** | prazo peremptório cuja perda preclui direito (recurso, contestação, embargos, impugnação, cumprimento) | D-10, D-5, D-3, D-1 e no dia | responsável mais sócio da área desde o D-10; conclusão obrigatória em D-3 |
| **CRÍTICO** | prazo com consequência processual relevante mas sanável, ou prazo curto de cumprimento | D-5, D-2 e no dia | responsável, com aviso ao coordenador em D-2 |
| **ATENÇÃO** | prazo dilatório, mera ciência, providência administrativa, juntada de documento | D-3 e no dia | responsável |

Regras dos alertas:

- D-n conta em **dias úteis** quando o prazo é em dias úteis, e em dias corridos quando o prazo é corrido. Alerta em regime diferente do prazo dispara na hora errada.
- Prazo com **menos de 5 dias úteis** entra sempre como FATAL ou CRÍTICO, mesmo que a natureza seja dilatória, porque não sobra folga para imprevisto.
- Alerta na agenda é **lembrete**, não controle. O controle é o sistema do escritório.
- Prazo suspenso continua com alerta ativo na data de retomada, senão a suspensão vira esquecimento.

## Rotina diária

1. Ler as publicações do dia em todas as fontes usadas pelo escritório (Diário, portais, Domicílio Judicial Eletrônico).
2. Cadastrar cada intimação com meio, data de disponibilização, data de publicação e espécie do ato.
3. Rascunhar a contagem e classificar o nível.
4. Atribuir responsável por prazo. Prazo sem nome é prazo de ninguém.
5. Conferir a fila de FATAL em D-3 e D-1: peça pronta ou plano de contingência.
6. Registrar a conferência (quem, quando, qual sistema).
7. Fechar o dia com a lista de nada a cumprir, se for o caso. Ausência de registro não é prova de ausência de prazo.

## Rotina semanal

1. Cruzar o controle interno com o sistema do tribunal, processo por processo da carteira ativa, ou por amostra quando o volume não permitir.
2. Conferir o calendário do mês seguinte: feriados municipais, feriados forenses, portarias de suspensão.
3. Revisar prazos suspensos e datas de retomada.
4. Checar carga por advogado: acúmulo de FATAL na mesma semana é risco operacional, não só de agenda.
5. Revisar processos sem movimentação há mais de 90 dias, para não perder intimação que passou batida.
6. Em dezembro, revisar tudo que atravessa o período de suspensão do art. 220 e reprogramar as retomadas de janeiro.

## Quando o prazo está estourando

| Situação | Providência imediata |
|---|---|
| Vence hoje, peça não pronta | protocolar o que existe com pedido de juntada de complemento, quando o rito admitir; avisar o responsável e o cliente no mesmo dia |
| Vence hoje, sistema do tribunal fora do ar | capturar a indisponibilidade (print com data e hora, certidão do sistema) e verificar a regra de prorrogação por indisponibilidade do tribunal |
| Vence amanhã, falta documento do cliente | protocolar com o que há e requerer prazo para complementação, com justificativa documentada |
| Prazo perdido | comunicar imediatamente o responsável e o cliente; avaliar a hipótese de justa causa perante o juízo, com prova documental; avaliar medida alternativa (nova ação, incidente, recurso cabível) |
| Dúvida sobre a contagem no último dia | tratar como vencendo hoje. Contagem otimista no último dia não se conserta |

Comunicar prazo perdido ao cliente é obrigação de transparência. Ocultar agrava o problema e a responsabilidade.

## Regras de visualização

Detalhe completo, variantes por canal e anti-padrões em `references/visualizacao.md`.

1. **A data nunca viaja sozinha.** Vencimento sem memória de cálculo não é conferível.
2. **Ordem fixa dos blocos**: aviso de rascunho, vencimento com dia da semana, nível e regime, memória do cálculo, regras aplicadas, calendário, contagem dia a dia, feriados e suspensões, alertas, checklist, rodapé de fonte oficial.
3. **O vencimento é a primeira coisa que aparece.** Nunca abrir pelo calendário.
4. **Marcadores fixos** no calendário: `A` ato, `>` primeiro dia, `.` dia contado, `f` feriado que suspendeu, `~` recesso, `#` vencimento. Não trocar entre entregas e não substituir por emoji.
5. **Só marca o que afetou esta contagem.** Feriado em fim de semana ou fora da janela fica sem marca.
6. **Calendário só em canal monoespaçado.** No WhatsApp, corte o calendário e entregue linhas curtas.
7. **Nível em texto**, nunca só em cor: `Nível FATAL`, `Nível CRÍTICO`, `Nível ATENÇÃO`.
8. **Dado faltante vira `?` na tabela e pergunta no final.** Nunca inferência silenciosa, nunca linha omitida.
9. **Nada de CPF, RG, endereço ou dado bancário** no cartão nem no título do evento de agenda.
10. **Contagem manual se anuncia como manual**, com confiança reduzida no topo da entrega.

## Formato da saída

```
RASCUNHO DE PRAZO (conferência obrigatória no sistema do tribunal)

Processo: <número>          Vara/Comarca: <dados>
Cliente: <nome>             Polo: <ativo/passivo>
Ato intimado: <espécie>     Natureza: <peremptório/dilatório>

MEMÓRIA DO CÁLCULO
Meio da intimação: <meio>
Disponibilização: <dd/mm>   Publicação: <dd/mm>
Termo inicial (1º dia contado): <dd/mm>
Regime: <dias úteis / corridos>   Base: <dispositivo, quando aplicável>
Prazo: <n> dias   Dobro: <sim/não, motivo>
Suspensões consideradas: <lista ou nenhuma>
Feriados considerados: <lista>
VENCIMENTO SUGERIDO: <dd/mm> (a confirmar)

NÍVEL: FATAL | CRÍTICO | ATENÇÃO
Alertas: <datas>
Meta interna de conclusão: <dd/mm> (D-3)

PROVIDÊNCIA
O que fazer: <peça ou ato>
Responsável: <nome ou função>
Documentos necessários: <lista>
Risco se perder: <consequência processual>

PONTOS DE CONFERÊNCIA (obrigatórios antes de lançar)
[ ] Data de publicação conferida na certidão
[ ] Rito e regime de contagem conferidos
[ ] Feriado municipal e portaria do tribunal conferidos
[ ] Prazo em dobro verificado
[ ] Lançado no sistema do escritório por <responsável>

REGISTRO DE CONFERÊNCIA
Conferido por: <nome>   Data/hora: <dd/mm hh:mm>   Sistema: <PJe/e-SAJ/...>
```

## Exemplo completo

Intimação de sentença, procedimento comum, disponibilizada no Diário eletrônico em **quarta-feira, 12/11/2025**. Cliente é a parte autora, representada por advogado particular. Recurso pretendido: apelação.

Comando:

```bash
node scripts/prazo.js --data 2025-11-12 --inicio dje-disp --preset apelacao --nivel fatal
```

Rascunho devolvido:

- Disponibilização: 12/11 (quarta).
- Publicação considerada: 13/11 (quinta), primeiro dia útil seguinte.
- Termo inicial da contagem: 14/11 (sexta), primeiro dia útil após a publicação.
- Regime: dias úteis (CPC, art. 219).
- Prazo de apelação: 15 dias úteis, a conferir no rito.
- Sem prazo em dobro: parte privada com procurador único.
- Feriados a conferir: 20/11 é feriado nacional; conferir também feriado municipal e portaria do tribunal na semana.
- Contagem: 14/11 (1), 17/11 (2), 18/11 (3), 19/11 (4), 20/11 excluído por feriado nacional, 21/11 (5), 24/11 (6), 25/11 (7), 26/11 (8), 27/11 (9), 28/11 (10), 01/12 (11), 02/12 (12), 03/12 (13), 04/12 (14), 05/12 (15).
- **Vencimento sugerido: 05/12/2025**, sujeito à conferência de feriado municipal e de portaria do tribunal na janela.
- Nível: **FATAL**. Alertas em 21/11 (D-10 úteis), 28/11 (D-5), 02/12 (D-3), 04/12 (D-1) e no dia 05/12. Meta interna de conclusão: 02/12.
- Ponto de atenção adicional: se um feriado local empurrar o vencimento para depois de 19/12, a suspensão do art. 220 entra na conta e a retomada precisa ser reprogramada para janeiro.

Entregue com o aviso: data sujeita a confirmação no sistema do tribunal e validação do advogado responsável.

## Erros comuns

- Contar da disponibilização em vez da publicação.
- Aplicar dias úteis em prazo material (prescrição, decadência, prazo de contrato).
- Ignorar feriado municipal e ponto facultativo do tribunal.
- Aplicar prazo em dobro sem verificar a hipótese legal.
- Esquecer de reprogramar prazo suspenso no período de 20/12 a 20/01.
- Tratar evento na agenda como controle oficial.
- Lançar prazo sem responsável nomeado.
- Trabalhar a peça no último dia.
- Entregar data única, sem memória de cálculo e sem ressalva de conferência.
- Presumir a regra de leitura do Domicílio Judicial Eletrônico em vez de conferir a normativa.

## Checklist final

- [ ] Aviso de conferência presente na entrega.
- [ ] Meio da intimação identificado.
- [ ] Disponibilização e publicação distinguidas.
- [ ] Termo inicial justificado.
- [ ] Regime de contagem definido com base.
- [ ] Prazo em dobro avaliado.
- [ ] Suspensões e feriados listados como itens de conferência.
- [ ] Vencimento marcado como sugerido, não como definitivo.
- [ ] Nível de alerta atribuído, com datas.
- [ ] Meta interna em D-3.
- [ ] Responsável nomeado.
- [ ] Risco de perda descrito.
- [ ] Registro de conferência preenchido pelo humano.

## Conectores (se estiverem ativos)

Sem conector, trabalhe com a intimação colada. Com conector, confirme a informação na fonte antes de contar prazo, sem perguntar ao usuário o que a fonte já tem.

**Chat Jurídico (MCP)**

1. `consultar_processo_escritorio` ou `buscar_processos_escritorio` para número, rito, partes e último andamento.
2. `processos_do_contato` para ver todos os prazos abertos do mesmo cliente e detectar acúmulo na mesma semana.
3. `visao_completa_cliente` quando o prazo depende de documento ou informação que o cliente já enviou.
4. `criarAnotacao` na conversa com o prazo calculado, a memória do cálculo e a fonte da intimação, depois de o usuário confirmar.
5. `criarMensagemAgendada` para o lembrete ao cliente sobre documento pendente, somente com texto e data aprovados.

**Google Drive**

1. `search_files` pela planilha de controle de prazos e `read_file_content` para cruzar o que já está lançado.
2. `get_file_metadata` para confirmar qual é a versão vigente da planilha antes de comparar.
3. `create_file` do mapa de prazos apenas na pasta que o usuário indicar. Não altere planilha existente: gere arquivo novo e deixe o lançamento para o humano.

**Google Calendar**

1. `list_events` na janela do prazo antes de escrever qualquer coisa, para não duplicar lançamento que a equipe já fez.
2. `create_event` do vencimento com o número do processo no título, mais os eventos de antecedência do nível atribuído.
3. `update_event` quando a intimação ou a suspensão mudar a data. Evento antigo só sai com confirmação, e nunca por `delete_event` em lote.

**Regras ao usar conector**

- Ler a fonte é livre. Escrever anotação, criar evento, agendar mensagem ou alterar arquivo exige confirmação explícita na mesma conversa.
- Evento na agenda é lembrete, não controle oficial. O lançamento no sistema do escritório continua sendo do responsável.
- Prazo fatal não entra na agenda sem que o usuário confirme a contagem primeiro.
- O conector é a segunda fonte, não a única. Mantenha o cruzamento com o sistema do tribunal e com o advogado responsável.
- Prazo em dúvida entra como FATAL com a dúvida escrita, nunca como estimativa silenciosa.
- Não repita CPF, RG, endereço ou dado bancário na resposta nem no título do evento. Use número de processo e nome do cliente apenas quando necessário.
