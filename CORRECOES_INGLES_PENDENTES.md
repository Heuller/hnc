> Atualização de 31/10/2026: este é um registro histórico de divergências de origem. Os itens atuais foram revisados e liberados como adaptações editoriais, com decisões individuais em `docs/revisao-questoes/disposicoes-historicas.json`. Isso não confirma redação nem gabarito da prova originalmente atribuída.

# Relatório de Itens em Conferência — Língua Inglesa (Prompts C2 & C8)

> [!IMPORTANT]
> **Regra de Prudência e Zero Alucinação Cebraspe:** Em estrito cumprimento aos prompts **C2 e C8**, **nenhum gabarito foi invertido unilateralmente**. Todos os **33 itens** listados em `real_confirmada_divergentes.csv` (além dos itens de auditoria C2) foram marcados com:
> - `fonteOriginal.tipo = 'em-conferencia'`
> - `verificado = false`
> - `revisar = true`
> - `statusConferencia = 'em-conferencia'`
> - Justificativa e armadilha padronizadas com texto neutro de advertência: *"Item em conferência: o gabarito desta plataforma diverge do acervo consultado. Consulte o espelho oficial do Cebraspe antes de estudar por este item."*
> - Exclusão garantida do portão de verificação, dos simulados ativos e das filas de revisão espaçada até deliberação humana definitiva via espelho oficial da banca.

---

## 1. Tabela Geral dos Itens em Conferência (33 IDs + Itens C2)

| # | ID | Arquivo de Origem | Gab. Plataforma | Gab. Acervo (Tec) | Similaridade | Já Marcado C2 | Status C8 |
| :-: | :-- | :-- | :---: | :---: | :---: | :---: | :-- |
| 1 | `m12-q-4` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.91 | sim | `em-conferencia`, neutro |
| 2 | `m12-q-9` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.91 | sim | `em-conferencia`, neutro |
| 3 | `m12-q-14` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.89 | sim | `em-conferencia`, neutro |
| 4 | `m12-q-16` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.90 | sim | `em-conferencia`, neutro |
| 5 | `m12-q-19` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.86 | não | `em-conferencia`, neutro |
| 6 | `m12-q-20` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.91 | sim | `em-conferencia`, neutro |
| 7 | `m12-q-22` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.92 | sim | `em-conferencia`, neutro |
| 8 | `m12-q-23` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.96 | sim | `em-conferencia`, neutro |
| 9 | `m12-q-24` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.87 | não | `em-conferencia`, neutro |
| 10 | `m12-q-25` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.90 | sim | `em-conferencia`, neutro |
| 11 | `m12-q-26` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.91 | sim | `em-conferencia`, neutro |
| 12 | `m12-q-27` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.87 | não | `em-conferencia`, neutro |
| 13 | `m12-q-28` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.92 | sim | `em-conferencia`, neutro |
| 14 | `m12-q-29` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.90 | sim | `em-conferencia`, neutro |
| 15 | `m12-q-30` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.88 | não | `em-conferencia`, neutro |
| 16 | `m12-q-35` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.87 | não | `em-conferencia`, neutro |
| 17 | `m12-q-37` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.88 | não | `em-conferencia`, neutro |
| 18 | `m12-q-44` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.90 | sim | `em-conferencia`, neutro |
| 19 | `m12-q-50` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.93 | sim | `em-conferencia`, neutro |
| 20 | `m12-q-53` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.89 | não | `em-conferencia`, neutro |
| 21 | `m12-q-54` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.91 | sim | `em-conferencia`, neutro |
| 22 | `m12-q-55` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.89 | não | `em-conferencia`, neutro |
| 23 | `m12-q-59` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.91 | sim | `em-conferencia`, neutro |
| 24 | `m12-q-68` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.88 | não | `em-conferencia`, neutro |
| 25 | `m12-q-69` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.86 | não | `em-conferencia`, neutro |
| 26 | `m12-q-70` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.91 | sim | `em-conferencia`, neutro |
| 27 | `m12-q-79` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.91 | sim | `em-conferencia`, neutro |
| 28 | `m12-q-89` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.86 | não | `em-conferencia`, neutro |
| 29 | `m12-q-90` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.87 | não | `em-conferencia`, neutro |
| 30 | `m12-q-93` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.96 | sim | `em-conferencia`, neutro |
| 31 | `m12-q-96` | `src/content/questions/m12-ingles-100q.ts` | **E** | **C** | 0.88 | não | `em-conferencia`, neutro |
| 32 | `m12-q-97` | `src/content/questions/m12-ingles-100q.ts` | **C** | **E** | 0.87 | não | `em-conferencia`, neutro |
| 33 | `mega-q-11` | `src/content/questions/mega-simulado-camara-120q.ts` | **C** | **E** | 0.89 | não | `em-conferencia`, neutro |
| 34 | `mega-q-12` | `src/content/questions/mega-simulado-camara-120q.ts` | **E** | **C** | 0.88 | não | `em-conferencia`, neutro |
| 35 | `mega-q-13` | `src/content/questions/mega-simulado-camara-120q.ts` | **C** | **E** | 0.93 | sim | `em-conferencia`, neutro |
| 36 | `mega-q-14` | `src/content/questions/mega-simulado-camara-120q.ts` | **E** | **C** | 0.91 | sim | `em-conferencia`, neutro |
| 37 | `mega-q-15` | `src/content/questions/mega-simulado-camara-120q.ts` | **C** | **E** | 0.88 | não | `em-conferencia`, neutro |
| 38 | `mega-q-16` | `src/content/questions/mega-simulado-camara-120q.ts` | **E** | **C** | 0.91 | sim | `em-conferencia`, neutro |
| 39 | `mega-q-18` | `src/content/questions/mega-simulado-camara-120q.ts` | **E** | **C** | 0.89 | não | `em-conferencia`, neutro |
| 40 | `mega-q-20` | `src/content/questions/mega-simulado-camara-120q.ts` | **E** | **C** | 0.87 | não | `em-conferencia`, neutro |
| 41 | `mega-q-40` | `src/content/questions/mega-simulado-camara-120q.ts` | **E** | **C** | 0.89 | não | `em-conferencia`, neutro |
| 42 | `oficial-180q-028` | `src/content/questions/simulado-oficial-camara-180q.ts` | **E** | **C** | 0.90 | sim | Substituído por reserva |
| 43 | `oficial-180q-033` | `src/content/questions/simulado-oficial-camara-180q.ts` | **C** | **E** | 0.86 | sim | `em-conferencia`, neutro |

---

## 2. Protocolo de Desempate e Homologação Oficial Cebraspe

Para cada item listado:
1. Acesse o repositório oficial de provas do Cebraspe: [`cdn.cebraspe.org.br/concursos/`](https://cdn.cebraspe.org.br/concursos/).
2. Consulte o espelho oficial e gabarito definitivo.
3. Se o gabarito oficial Cebraspe coincidir com a plataforma, mude `statusConferencia` para `'confirmado'`, `verificado: true` e remova a flag `revisar`.
4. Se o gabarito oficial coincidir com o Tec Concursos (divergente da plataforma), altere o gabarito da questão, reescreva a justificativa canônica, defina `statusConferencia: 'corrigido'`, `verificado: true` e remova `revisar`.
