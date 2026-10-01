# Motor de cálculo: presets, feriados e limites

Referência de `scripts/prazo.js`. Carregue quando precisar escolher preset,
justificar base legal ou explicar o que a tabela de feriados não cobre.

## Presets

`--preset <slug>` preenche quantidade de dias e regime. Preset é ponto de
partida, não é o rito: prazo fixado pelo juiz vence o prazo legal geral, e
rito especial muda a conta.

### Cível (`--ramo civel`, padrão dias úteis)

| slug | Peça | Dias | Base |
|---|---|---|---|
| `contestacao` | Contestação | 15 úteis | CPC art. 335 |
| `replica` | Réplica | 15 úteis | CPC art. 351 |
| `apelacao` | Apelação | 15 úteis | CPC art. 1.003 §5º |
| `embargos-declaracao` | Embargos de declaração | 5 úteis | CPC art. 1.023 |
| `agravo-instrumento` | Agravo de instrumento | 15 úteis | CPC art. 1.003 §5º |
| `agravo-interno` | Agravo interno | 15 úteis | CPC art. 1.070 |
| `recurso-especial` | RE / REsp | 15 úteis | CPC art. 1.003 §5º |
| `cumprimento-sentenca` | Cumprimento de sentença | 15 úteis | CPC art. 523 |

### Trabalhista (`--ramo trabalhista`, dias úteis por CLT art. 775)

| slug | Peça | Dias | Base |
|---|---|---|---|
| `contestacao-clt` | Contestação | 5 úteis | CLT + CPC supletivo |
| `recurso-ordinario` | Recurso ordinário | 8 úteis | CLT art. 895 |
| `recurso-revista` | Recurso de revista | 8 úteis | CLT art. 896 |
| `embargos-clt` | Embargos de declaração | 5 úteis | CPC art. 1.023 + CLT art. 775 |
| `agravo-peticao` | Agravo de petição | 8 úteis | CLT art. 897 |

### Penal (`--ramo penal`, dias corridos e contínuos)

| slug | Peça | Dias | Base |
|---|---|---|---|
| `resposta-acusacao` | Resposta à acusação | 10 corridos | CPP art. 396/406 |
| `defesa-previa` | Defesa prévia | 10 corridos | CPP art. 396 |
| `alegacoes-finais` | Alegações finais | 5 corridos | CPP art. 403 §3º |
| `apelacao-penal` | Apelação | 5 corridos | CPP art. 593 |
| `rese` | Recurso em sentido estrito | 5 corridos | CPP art. 586 |
| `embargos-penal` | Embargos de declaração | 2 corridos | CPP art. 619 |

Prazo penal não se suspende no recesso do CPC art. 220. Use `--sem-recesso`.

### Juizado (`--ramo jec`)

| slug | Peça | Dias | Base |
|---|---|---|---|
| `recurso-inominado` | Recurso inominado | 10 corridos | Lei 9.099/95 art. 42 |
| `embargos-jec` | Embargos de declaração | 5 corridos | Lei 9.099/95 art. 49 |
| `contestacao-jec` | Defesa após audiência | 15 úteis | CPC art. 335, I (rito local) |

A contagem em dias corridos no JEC segue o entendimento consolidado nos
enunciados do FONAJE. Confirme a orientação do Juizado antes de lançar.

## Termo inicial (`--inicio`)

| Valor | O que a data significa | Regra aplicada |
|---|---|---|
| `dje-disp` | disponibilização no Diário | publicação no 1º dia útil seguinte (Lei 11.419/2006 art. 4º §3º), contagem no útil seguinte a ela |
| `dje` | publicação no Diário | contagem no 1º dia útil seguinte (CPC art. 224 §3º) |
| `pessoal` | ciência da intimação pessoal | contagem no útil seguinte |
| `mandado` | juntada do mandado cumprido | CPC art. 231, contagem no útil seguinte |
| `saj-citacao` | ciência da citação no e-SAJ | 5 dias úteis de carência, depois o útil seguinte |
| `saj-intimacao` | disponibilização no portal | ciência presumida em 10 dias corridos, depois o útil seguinte |
| `ciencia-autos` | ciência nos autos | contagem no útil seguinte |
| `manual` | termo inicial já definido | a data informada é o dia 1 |

Confundir `dje` com `dje-disp` custa um dia inteiro de prazo. Se a certidão
não distinguir com clareza, pergunte antes de contar.

## Cobertura de feriados

**Coberto:**

- Feriados nacionais fixos, incluindo 20 de novembro.
- Feriados móveis calculados pela Páscoa: Carnaval (segunda e terça), Sexta-feira Santa e Corpus Christi.
- Feriados estaduais das 27 unidades da federação.
- Feriados municipais das 26 capitais e do Distrito Federal.
- Suspensão de 20 de dezembro a 20 de janeiro (CPC art. 220), ligada por padrão.

**Não coberto, e é aqui que o prazo se perde:**

- Feriado municipal de comarca fora das capitais.
- Ponto facultativo e feriado forense do tribunal.
- Portaria de suspensão de prazos (greve, mudança de sistema, calamidade).
- Suspensão por indisponibilidade do sistema eletrônico.
- Dia do advogado e feriados da OAB, quando o tribunal adere.
- Expediente encerrado antes da hora normal, que prorroga o vencimento.
- Regra de prazo de leitura do Domicílio Judicial Eletrônico, que segue normativa do CNJ e do tribunal.

Feriado local conhecido entra na conta com `--feriado`, repetível:

```bash
node scripts/prazo.js --data 2026-03-02 --preset embargos-declaracao \
  --feriado 2026-03-05="Aniversário da comarca" \
  --feriado 2026-03-06="Ponto facultativo TJ"
```

Feriado informado pelo usuário vence a tabela embutida.

## Prazo em dobro

`--dobro` multiplica os dias por dois antes de contar, e `--dobro-motivo`
registra a hipótese na memória do cálculo.

| Hipótese | Base |
|---|---|
| Fazenda Pública | CPC art. 183 |
| Ministério Público | CPC art. 180 |
| Defensoria Pública e escritório de prática jurídica | CPC art. 186 |
| Litisconsortes com procuradores de escritórios distintos | CPC art. 229, restrito a autos físicos |

O art. 229 quase nunca se aplica em processo eletrônico. Confirme antes de dobrar.

## Alertas

`--nivel` define as antecedências, contadas no mesmo regime do prazo.

| Nível | Antecedências |
|---|---|
| `fatal` (padrão) | D-10, D-5, D-3, D-1 e o dia |
| `critico` | D-5, D-2 e o dia |
| `atencao` | D-3 e o dia |

Alerta em regime diferente do prazo dispara na data errada. Por isso o D-n de
prazo em dias úteis pula fim de semana, feriado e recesso.

## Limites do motor

- Não consulta tribunal, não lê processo e não sabe se houve suspensão no caso concreto.
- Não decide o rito nem a espécie do ato: isso entra por parâmetro.
- Não conhece feriado de comarca do interior.
- Não trata prorrogação por indisponibilidade do sistema.
- Não substitui o lançamento no sistema do escritório.

A saída é rascunho de conferência. Quem valida é o advogado responsável.
