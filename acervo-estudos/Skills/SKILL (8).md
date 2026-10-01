---
name: "Dashboard de métricas do escritório"
description: "Transforma dados de CRM, atendimento e financeiro em painel de indicadores com fórmula explícita, comparação com o período anterior, leitura do número e plano de ação. Use quando o usuário pedir dashboard, métricas, KPI, relatório semanal ou mensal de gestão, análise de funil, ticket médio, taxa de conversão, tempo de resposta, inadimplência ou produtividade por advogado. Acionar também quando disser 'como foi o mês', 'quantos leads entraram', 'por que caiu a conversão', 'monta o relatório da reunião de sócios' ou 'que números eu deveria acompanhar'. NÃO usar para precificar um caso específico, cobrar um cliente individual, fechamento contábil ou projeção fiscal."
---

# Dashboard de métricas do escritório

## Função

Transformar dado bruto (CRM, atendimento, financeiro) em painel narrativo com plano de ação. A entrega tem três camadas, sempre na mesma ordem: **o número**, **a leitura do número**, **a ação da semana**.

Fora de escopo: fechamento contábil, apuração de imposto, valuation, auditoria de recebíveis e diagnóstico jurídico de caso. Benchmark externo é **ilustrativo**, salvo se o usuário fornecer a fonte.

## Quando acionar

- Pedido de relatório, painel, KPI, "como foi o mês", "por que caiu".
- Reunião de sócios, revisão de meta, definição do que acompanhar.
- Queda percebida sem causa clara ("está entrando menos gente").
- Antes de contratar advogado ou aumentar verba de mídia: os dois pedem base numérica.

## Quando NÃO acionar

- Precificação de um caso: use a skill de honorários.
- Cobrança de um cliente específico ou negociação de dívida individual.
- Pergunta sobre um único processo ou prazo.
- Pedido de opinião sem nenhum dado disponível e sem acesso a conector: nesse caso, entregue a lista de campos a preencher, não um painel inventado.

## Princípios

1. **Número sem fonte não entra.** Todo indicador vem marcado com origem (conector, planilha do usuário, hipótese). Indicador sem fonte gera decisão errada e queima a confiança no painel inteiro.
2. **Fórmula explícita sempre.** Escreva a conta usada. "Conversão de 18%" sem denominador não é métrica, é opinião.
3. **Nunca invente dado.** Faltando o campo, marque `HIPÓTESE` ou `PENDENTE` e diga qual campo do CRM precisa ser preenchido.
4. **Comparação ou nada.** Número isolado não informa. Todo indicador aparece com período anterior e variação.
5. **Máximo 8 indicadores no painel principal.** Painel com 30 linhas não é lido. O resto vai para anexo.
6. **Base pequena invalida percentual.** Abaixo de 30 eventos no período, mostre o valor absoluto e marque `base pequena`. Conversão de 2 em 5 não é 40%, é ruído.
7. **Agregado, sempre.** Métrica de gestão não expõe pessoa identificável. Relatório não carrega CPF, telefone, e-mail nem endereço. Lista nominal só quando o usuário pedir e só para uso interno.
8. **Métrica sem dono não muda nada.** Cada gargalo sai do painel com responsável (função, não nome pessoal, salvo pedido do usuário), prazo e métrica de sucesso.
9. **Diferencie contratado de recebido.** Receita assinada, faturada e recebida são três números diferentes. Misturar os três é o erro mais comum em painel de escritório.

## Fluxo

1. **Defina a janela.** Período atual, período anterior comparável (mesmo número de dias úteis) e mesmo mês do ano anterior quando houver série.
2. **Levante a fonte.** Conector ativo? Puxe. Sem conector, peça a exportação ou a planilha. Registre o que não veio.
3. **Deduplique.** Mesmo telefone contado duas vezes infla lead e destrói a conversão. Cheque duplicata antes de contar.
4. **Calcule na ordem do funil**, de entrada até caixa. Erro de etapa inicial contamina tudo abaixo.
5. **Compare** com o período anterior e calcule a variação.
6. **Leia o número.** Para cada indicador fora da meta, liste a causa provável em ordem de probabilidade e a primeira verificação a fazer.
7. **Priorize 3 gargalos**, não 10. Escolha por impacto em receita, não por facilidade.
8. **Feche com plano de ação** e com a lista do que ficou pendente de dado.

## Métricas do funil comercial

| Indicador | Fórmula | Meta de referência | Leitura |
|---|---|---|---|
| Leads no período | contatos novos com primeira mensagem na janela, sem telefone duplicado | crescimento vs período anterior | volume de topo, não mede qualidade |
| Taxa de qualificação | leads qualificados / leads no período | 40% a 60% | abaixo disso, o problema é a origem do lead |
| Conversão da etapa | quem avançou da etapa / quem entrou na etapa | por etapa | mostra ONDE trava, não SE trava |
| Conversão ponta a ponta | contratos assinados / leads no período | 8% a 15% em canal orgânico | cair sem cair volume indica queda de qualidade |
| Ciclo de venda | soma(data do contrato menos data do 1º contato) / contratos | por área | ciclo subindo antecipa queda de receita |
| No-show de consulta | consultas marcadas sem comparecimento / consultas marcadas | abaixo de 20% | atacar com confirmação em D-1 |
| Aging do pipeline | dias médios parados por etapa | por etapa | oportunidade parada há mais de 2x a média entra em lista de resgate |
| Taxa de perda por motivo | perdidos com motivo X / total de perdidos | distribuição | exige motivo obrigatório no CRM, senão vira "sem motivo: 70%" |

## Métricas de atendimento

| Indicador | Fórmula | Observação |
|---|---|---|
| Tempo médio de primeira resposta | soma(hora da 1ª resposta menos hora da 1ª mensagem do lead) / conversas iniciadas | reporte **mediana junto com a média**, porque um caso de 14 horas distorce a média do dia |
| Taxa de resposta dentro de 5 minutos | conversas respondidas em até 5 min / conversas iniciadas | é o indicador que mais move conversão em captação por WhatsApp |
| Conversas sem resposta | conversas com última mensagem do cliente e sem resposta há mais de 24h | número absoluto, não percentual |
| Tempo até primeiro atendimento humano | quando há triagem por agente, medir separado do tempo total | separa falha de robô de falha de equipe |

## Métricas financeiras e de produtividade

| Indicador | Fórmula | Observação |
|---|---|---|
| Ticket médio | receita **contratada** no período / contratos assinados no período | por área também, senão a média esconde a área que sustenta o caixa |
| Receita recorrente mensal | soma do valor mensal dos contratos ativos de assinatura ou consultivo | o número mais importante de um escritório que quer previsibilidade |
| Receita eventual | honorários de caso avulso mais êxito recebido no período | volátil por natureza |
| Índice de previsibilidade | recorrente / (recorrente mais eventual) | abaixo de 30% o escritório vive de caça |
| Inadimplência | valor vencido há mais de 30 dias e não pago / valor faturado no período | inadimplência de 12% costuma valer mais que 12% de novos leads, e custa menos |
| CAC | (mídia mais comissão mais ferramenta de aquisição) / clientes novos assinados | inclua o custo do tempo de quem atende, se houver rateio |
| LTV | receita total do cliente ao longo do relacionamento (ou ticket médio x número médio de contratações) | com base pequena, use ticket médio e marque como aproximação |
| Relação LTV/CAC | LTV / CAC | abaixo de 3 o crescimento pago fica frágil |
| Casos ativos por advogado | casos em andamento / advogados produtivos | acima da média histórica do escritório é sinal de gargalo de entrega, não de sucesso |
| Horas faturáveis | horas lançadas em caso / horas trabalhadas | só use se o escritório lança hora de verdade |

## Comparação com o período anterior

```
variação % = (valor atual menos valor anterior) / valor anterior x 100
```

Regras:

- Compare **mesmo número de dias úteis**. Mês com 22 dias úteis contra mês com 18 gera queda falsa de 18%.
- Sazonalidade brasileira real: janeiro e a segunda quinzena de dezembro caem por recesso, julho oscila por férias escolares. Compare com o mesmo mês do ano anterior quando existir série.
- Variação abaixo de 10% com base pequena entra como estável, não como tendência.
- Tendência só a partir de 3 períodos na mesma direção.

## Leitura do número: o que fazer quando cai

| Caiu | Causas em ordem de probabilidade | Primeira verificação | Ação |
|---|---|---|---|
| Leads | canal de origem parado, verba pausada, número de WhatsApp com problema | status da integração e volume por origem | reativar a origem antes de mexer em copy |
| Taxa de qualificação | mudança de público na mídia, promessa errada no anúncio | motivo de desqualificação dos últimos 20 leads | ajustar segmentação e critério de triagem |
| Conversão de consulta para proposta | proposta lenta, preço apresentado sem contexto de valor | tempo entre consulta e envio da proposta | padronizar proposta e enviar em até 24h |
| Conversão ponta a ponta com volume estável | qualidade do lead caiu ou follow-up parou | conversas sem resposta e aging por etapa | rotina de follow-up antes de comprar mais lead |
| Ticket médio | mix de área mudou, desconto virou hábito | ticket por área e percentual de propostas com desconto | política de desconto com alçada definida |
| Receita recorrente | churn de contrato mensal | contratos encerrados no período e motivo | conversa de retenção com os 5 maiores |
| Tempo de resposta piorou | equipe sobrecarregada, plantão sem cobertura | carga por atendente e horário das mensagens sem resposta | escala e resposta automática de primeiro contato |
| Inadimplência subiu | falha de cobrança, não crise do cliente | idade da dívida e existência de régua de cobrança | régua ativa antes de renegociar |

## O que não vira métrica de vaidade

Fora do painel principal, porque não decide nada:

- Total de mensagens enviadas ou recebidas.
- Seguidores, curtidas, alcance, visualização de vídeo.
- Visitas ao site sem conversão associada.
- "Leads" contados com duplicata de telefone.
- Horas trabalhadas sem vínculo com caso ou fatura.
- NPS com menos de 10 respostas no período.
- Número de processos ativos usado como prova de saúde: processo antigo sem movimentação é custo, não patrimônio.

## Formato da saída

Relatório semanal, operacional, 1 tela:

```
PAINEL SEMANAL | <dd/mm> a <dd/mm>
Fonte: <conector | planilha | hipótese>

SEMÁFORO
🟢 <indicador> <valor> (meta <valor>)
🟡 <indicador> <valor> (meta <valor>) | var. <±%> vs semana anterior
🔴 <indicador> <valor> (meta <valor>) | var. <±%> vs semana anterior

FILA QUE PRECISA DE AÇÃO HOJE
- Conversas sem resposta há mais de 24h: <n>
- Propostas enviadas sem retorno há mais de 5 dias: <n>
- Oportunidades paradas na etapa <x> há mais de <n> dias: <n>

AÇÃO DA SEMANA (máx. 3)
1. <ação> | dono: <função> | até <data> | sucesso: <métrica>

PENDÊNCIA DE DADO
- <campo do CRM que precisa ser preenchido para o indicador existir>
```

Relatório mensal, de gestão:

```
PAINEL MENSAL | <mês/ano>
Dias úteis: <n> (mês anterior: <n>)

1. FUNIL
| Etapa | Entraram | Avançaram | Conversão | Mês anterior | Var. |

2. RECEITA
Contratada R$ <valor> | Faturada R$ <valor> | Recebida R$ <valor>
Recorrente R$ <valor> | Eventual R$ <valor> | Previsibilidade <%>
Ticket médio R$ <valor> (por área: <lista>)
Inadimplência <%> (valor vencido R$ <valor>)

3. ENTREGA
Casos ativos por advogado: <n> | Casos encerrados: <n>

4. TRÊS FORÇAS
5. TRÊS GARGALOS (com hipótese de causa e primeira verificação)
6. TRÊS OPORTUNIDADES

7. PLANO DE AÇÃO
| Gargalo | Ação | Dono (função) | Prazo | Métrica de sucesso | Impacto |

8. FONTES E LACUNAS
Veio do conector: <lista> | Hipótese: <lista> | Não medido: <lista>
```

## Exemplo completo

Escritório de família e cível, 3 advogados, captação por WhatsApp. Julho contra junho.

Dados: 148 leads em julho (junho: 132), 61 qualificados, 34 consultas realizadas, 26 propostas, 11 contratos, receita contratada R$ 74.800, 4 contratos mensais de R$ 1.200 ativos, valor vencido acima de 30 dias R$ 18.400 sobre R$ 92.000 faturados, mediana de primeira resposta 22 minutos.

Contas:

- Qualificação: 61 / 148 = 41,2% (junho 46,9%, queda de 5,7 pontos).
- Consulta para proposta: 26 / 34 = 76,5%, saudável.
- Proposta para contrato: 11 / 26 = 42,3%.
- Ponta a ponta: 11 / 148 = 7,4% (junho 9,1%).
- Ticket médio: 74.800 / 11 = R$ 6.800.
- Recorrente: 4 x 1.200 = R$ 4.800/mês. Previsibilidade: 4.800 / (4.800 mais 70.000) = 6,4%.
- Inadimplência: 18.400 / 92.000 = 20%.

Leitura: o volume subiu 12% e a conversão caiu. O gargalo não é topo de funil, é qualificação e caixa. R$ 18.400 vencidos equivalem a 2,7 contratos de ticket médio, sem custo de aquisição nenhum.

Ação da semana: (1) régua de cobrança nos 6 maiores vencidos, dono sócio administrador, sucesso reduzir vencido para R$ 11.000; (2) revisar critério de qualificação sobre os 20 últimos desqualificados; (3) confirmação de consulta em D-1 por WhatsApp.

Marcado como pendência: motivo de perda ausente em 14 dos 15 leads perdidos, o que impede priorizar a causa.

## Erros comuns

- Somar receita contratada com receita recebida no mesmo total.
- Percentual sobre base minúscula apresentado sem ressalva.
- Comparar mês cheio com mês parcial.
- Contar o mesmo cliente como lead novo a cada nova demanda.
- Painel com 25 indicadores e nenhuma ação.
- Colocar nome e telefone de cliente dentro de relatório que vai circular.
- Tratar benchmark de internet como meta do escritório.
- Reportar média de tempo de resposta sem a mediana.

## Checklist final

- [ ] Janela e janela de comparação declaradas, com dias úteis.
- [ ] Toda métrica com fórmula visível.
- [ ] Fonte marcada por indicador (conector, planilha, hipótese).
- [ ] Base menor que 30 sinalizada.
- [ ] Nenhum dado pessoal identificável no relatório.
- [ ] Máximo 8 indicadores no painel principal.
- [ ] Três gargalos com causa provável e primeira verificação.
- [ ] Plano de ação com dono, prazo e métrica de sucesso.
- [ ] Lista de campos pendentes no CRM.

## Conectores (se estiverem ativos)

Esta skill vive de dado. Antes de perguntar número ao usuário, verifique se o conector está disponível nesta conversa. Sem conector, peça os números ao escritório.

**Chat Jurídico (MCP)**

1. `metricas_leads` e `metricas_conversoes` para volume e taxa por etapa.
2. `resumo_pipeline` e `valores_funil` para o valor parado em cada etapa e o aging.
3. `carga_equipe` para gargalo de atendimento e distribuição por atendente.
4. `resumo_financeiro` e `cobrancas_vencidas` quando a conversa for de caixa e inadimplência.
5. `conversas_pendentes` para a fila de quem está sem resposta agora.
6. `resumo_diario` quando o pedido for acompanhamento do dia, não do mês.
7. `listarEtapasFunil` antes de calcular conversão por etapa: a nomenclatura do funil é do escritório, não sua.
8. `buscarContatosDuplicados` antes de contar lead: telefone repetido infla o topo do funil.

**Regras ao usar conector**

- Ler a fonte é livre. Escrever no CRM (tag, etapa, anotação) exige confirmação explícita na mesma conversa.
- Separe na entrega o que veio do conector do que é hipótese sua.
- Indicador que o conector não trouxer entra como pendência, com o campo que precisa ser preenchido no CRM.
- Resposta em números agregados. Nome e telefone só quando o usuário pedir a lista, e nunca dentro de relatório que vai circular fora do escritório.
- Se o escritório tiver mais de um número de WhatsApp, verifique se a métrica cobre todos ou apenas um.
