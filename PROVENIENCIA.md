# Relatório Oficial de Proveniência das Questões (P18)

**Concurso:** Câmara dos Deputados · Analista Legislativo · Cargo 5 (Biblioteconomia) · Banca **Cebraspe**  
**Data do Relatório:** 21/10/2026  
**Auditoria e Padronização:** Prompt P18 (Eliminação de `cebraspe-real` indiscriminado e implementação da Proveniência Honesta)  

---

## 1. Resumo Executivo

Antes da intervenção P18, o banco continha 827 questões rotuladas como `cebraspe-real` e todos os 1.999 itens da plataforma traziam o campo `verificado: true`, sem discriminação real entre assertivas auditadas em provas oficiais e questões criadas sem correspondência documental.

Com a aplicação do pareamento sistemático contra o acervo de 2.369 questões reais do Cebraspe (Tec Concursos e cadernos oficiais):

1. **Total de questões auditadas:** **1999 itens**.
2. **Real-Confirmada:** **86 itens** (assertivas comprovadas no acervo Cebraspe com similaridade &ge; 0.75, com `provaId` e `ano` auditados).
3. **Adaptada:** **173 itens** (questões derivadas de provas reais Cebraspe com adaptações textuais ou declaradas como adaptadas, mantendo o `questaoOriginalId` e identificação da prova de origem).
4. **Inédita:** **1740 itens** (questões autorais ou itens sem comprovação documental no acervo até o presente momento).
5. **Itens que citavam banca/ano sem comprovação:** **636 itens** foram reclassificados como `inedita` com `verificado: false`, preservando a declaração legada no campo `declaracaoLegada` para rastreabilidade, mas impedindo que a interface exiba bancas ou anos fictícios.
6. **Resíduo de `cebraspe-real` no código:** **ZERO** (eliminado de todos os 20 arquivos de questões e esquemas).

---

## 2. Distribuição por Estado de Proveniência

| Estado P18 | Quantidade | % do Acervo | Critério e Garantia Zod |
| :-- | :-: | :-: | :-- |
| `real-confirmada` | **86** | 4.3% | Exige obrigatoriamente `provaId` e `ano` batendo com prova real Cebraspe; `verificado: true`. |
| `adaptada` | **173** | 8.7% | Derivada de questão real; exige `provaId` ou `questaoOriginalId`; `verificado: true`. |
| `inedita` | **1740** | 87.0% | Questões autorais; `verificado: false`; interface exibe exclusivamente "Inédita, sem prova de origem". |
| **Total Geral** | **1999** | **100,0%** | **Banco 100% auditado e tipado.** |

---

## 3. Distribuição Detalhada por Arquivo de Banco de Questões

| Arquivo | Total Itens | Real-Confirmada | Adaptada | Inédita | % Comprovada |
| :-- | :-: | :-: | :-: | :-: | :-: |
| `m1-fundamentos-100q.ts` | 100 | 0 | 4 | 96 | 4.0% |
| `m10-legislativo-100q.ts` | 100 | 6 | 5 | 89 | 11.0% |
| `m10a-legislativo-constituicao-100q.ts` | 100 | 0 | 0 | 100 | 0.0% |
| `m10b-regimentos-100q.ts` | 100 | 0 | 0 | 100 | 0.0% |
| `m11-administrativo-100q.ts` | 100 | 0 | 0 | 100 | 0.0% |
| `m12-ingles-100q.ts` | 100 | 0 | 1 | 99 | 1.0% |
| `m13-portugues-100q.ts` | 100 | 0 | 0 | 100 | 0.0% |
| `m14-tecnologia-dados-100q.ts` | 100 | 0 | 0 | 100 | 0.0% |
| `m2-catalogacao-100q.ts` | 100 | 0 | 0 | 100 | 0.0% |
| `m3-classificacao-100q.ts` | 100 | 4 | 18 | 78 | 22.0% |
| `m4-recuperacao-100q.ts` | 100 | 8 | 14 | 78 | 22.0% |
| `m5-gestao-100q.ts` | 100 | 6 | 18 | 76 | 24.0% |
| `m6-digital-ia-100q.ts` | 100 | 2 | 23 | 75 | 25.0% |
| `m7-preservacao-100q.ts` | 100 | 49 | 16 | 35 | 65.0% |
| `m8-normalizacao-100q.ts` | 100 | 0 | 10 | 90 | 10.0% |
| `m9-comunicacao-100q.ts` | 100 | 3 | 14 | 83 | 17.0% |
| `mega-simulado-camara-120q.ts` | 120 | 7 | 41 | 72 | 40.0% |
| `mini-modulo-orgaos-30q.ts` | 30 | 0 | 0 | 30 | 0.0% |
| `questoes-submodulos-ampliados.ts` | 69 | 0 | 0 | 69 | 0.0% |
| `simulado-geral-180q.ts` | 180 | 1 | 9 | 170 | 5.6% |

---

## 4. Regras de Interface e Prevenção de Alucinação

Conforme a Diretriz de Zero Alucinação do projeto e o Prompt P18:
- **Itens `real-confirmada`:** a interface exibe a etiqueta: `"Prova real: [Órgão] [Ano]"` (ex.: `"Prova real: TSE 2024"`, `"Prova real: STJ 2018"`), com selo verde e identificador do caderno.
- **Itens `adaptada`:** a interface exibe a etiqueta: `"Adaptada ([Órgão] [Ano])"` ou `"Adaptada"`, com selo âmbar.
- **Itens `inedita`:** a interface exibe **exclusivamente** `"Inédita, sem prova de origem"` com selo neutro, **NUNCA** exibindo banca ou ano sem confirmação documental.
- **Campo `verificado`:** padronizado como `false` para todas as inéditas, significando rigorosamente "conferido por pessoa em acervo documental".

---

## 5. Lista dos 636 Itens Reclassificados de Fictício "cebraspe-real" para "inedita"

Os itens abaixo citavam órgão/banca/ano anteriormente, mas não possuem correspondente confirmado no acervo oficial de provas. Foram mantidos no acervo com rótulo honesto de `inedita`, guardando a menção prévia em `declaracaoLegada`:

| # | ID da Questão | Arquivo | Declaração Legada Removida da Interface | Novo Rótulo |
| :-: | :-- | :-- | :-- | :-- |
| 1 | `fund-q-2` | `m1-fundamentos-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 2 | `fund-q-3` | `m1-fundamentos-100q.ts` | CEBRASPE / ABIN / 2017 | `inedita (sem prova confirmada)` |
| 3 | `fund-q-5` | `m1-fundamentos-100q.ts` | CEBRASPE / STJ / 2018 | `inedita (sem prova confirmada)` |
| 4 | `fund-q-7` | `m1-fundamentos-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 5 | `fund-q-8` | `m1-fundamentos-100q.ts` | CEBRASPE / MPE-TO / 2024 | `inedita (sem prova confirmada)` |
| 6 | `fund-q-9` | `m1-fundamentos-100q.ts` | CEBRASPE / SUFRAMA / 2014 | `inedita (sem prova confirmada)` |
| 7 | `fund-q-10` | `m1-fundamentos-100q.ts` | CEBRASPE / SEE-PE / 2022 | `inedita (sem prova confirmada)` |
| 8 | `fund-q-11` | `m1-fundamentos-100q.ts` | CEBRASPE / SEE-PE / 2022 | `inedita (sem prova confirmada)` |
| 9 | `fund-q-12` | `m1-fundamentos-100q.ts` | CEBRASPE / ABIN / 2017 | `inedita (sem prova confirmada)` |
| 10 | `fund-q-14` | `m1-fundamentos-100q.ts` | CEBRASPE / FUB / 2022 | `inedita (sem prova confirmada)` |
| 11 | `fund-q-15` | `m1-fundamentos-100q.ts` | CEBRASPE / MPE-CE / 2025 | `inedita (sem prova confirmada)` |
| 12 | `fund-q-16` | `m1-fundamentos-100q.ts` | CEBRASPE / ABIN / 2017 | `inedita (sem prova confirmada)` |
| 13 | `fund-q-17` | `m1-fundamentos-100q.ts` | CEBRASPE / TJ-RR / 2012 | `inedita (sem prova confirmada)` |
| 14 | `fund-q-21` | `m1-fundamentos-100q.ts` | CEBRASPE / Pref Cach Itapemirim / 2024 | `inedita (sem prova confirmada)` |
| 15 | `fund-q-26` | `m1-fundamentos-100q.ts` | CEBRASPE / TCE-MG / 2026 | `inedita (sem prova confirmada)` |
| 16 | `fund-q-28` | `m1-fundamentos-100q.ts` | CEBRASPE / IPHAN / 2018 | `inedita (sem prova confirmada)` |
| 17 | `fund-q-29` | `m1-fundamentos-100q.ts` | CEBRASPE / TJDFT / 2015 | `inedita (sem prova confirmada)` |
| 18 | `fund-q-30` | `m1-fundamentos-100q.ts` | CEBRASPE / STJ / 2018 | `inedita (sem prova confirmada)` |
| 19 | `fund-q-31` | `m1-fundamentos-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 20 | `fund-q-33` | `m1-fundamentos-100q.ts` | CEBRASPE / MPU / 2010 | `inedita (sem prova confirmada)` |
| 21 | `fund-q-34` | `m1-fundamentos-100q.ts` | CEBRASPE / TJDFT / 2015 | `inedita (sem prova confirmada)` |
| 22 | `fund-q-35` | `m1-fundamentos-100q.ts` | CEBRASPE / TJ-PA / 2025 | `inedita (sem prova confirmada)` |
| 23 | `fund-q-38` | `m1-fundamentos-100q.ts` | CEBRASPE / IPHAN / 2018 (Adaptada) | `inedita (sem prova confirmada)` |
| 24 | `fund-q-39` | `m1-fundamentos-100q.ts` | CEBRASPE / TJDFT / 2015 | `inedita (sem prova confirmada)` |
| 25 | `fund-q-42` | `m1-fundamentos-100q.ts` | CEBRASPE / MPU / 2010 | `inedita (sem prova confirmada)` |
| 26 | `fund-q-43` | `m1-fundamentos-100q.ts` | CEBRASPE / TCE-MG / 2026 | `inedita (sem prova confirmada)` |
| 27 | `fund-q-46` | `m1-fundamentos-100q.ts` | CEBRASPE / TJDFT / 2015 | `inedita (sem prova confirmada)` |
| 28 | `fund-q-48` | `m1-fundamentos-100q.ts` | CEBRASPE / TJ-PA / 2025 | `inedita (sem prova confirmada)` |
| 29 | `fund-q-51` | `m1-fundamentos-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 30 | `fund-q-52` | `m1-fundamentos-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 31 | `fund-q-53` | `m1-fundamentos-100q.ts` | CEBRASPE / EBESERH / 2018 | `inedita (sem prova confirmada)` |
| 32 | `fund-q-56` | `m1-fundamentos-100q.ts` | CEBRASPE / TJ-RR / 2012 | `inedita (sem prova confirmada)` |
| 33 | `fund-q-58` | `m1-fundamentos-100q.ts` | CEBRASPE / SUFRAMA / 2014 | `inedita (sem prova confirmada)` |
| 34 | `fund-q-59` | `m1-fundamentos-100q.ts` | CEBRASPE / EBESERH / 2018 | `inedita (sem prova confirmada)` |
| 35 | `fund-q-60` | `m1-fundamentos-100q.ts` | CEBRASPE / EBESERH / 2018 | `inedita (sem prova confirmada)` |
| 36 | `fund-q-63` | `m1-fundamentos-100q.ts` | CEBRASPE / SUFRAMA / 2014 | `inedita (sem prova confirmada)` |
| 37 | `fund-q-72` | `m1-fundamentos-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 38 | `fund-q-76` | `m1-fundamentos-100q.ts` | CEBRASPE / STF / 2008 | `inedita (sem prova confirmada)` |
| 39 | `fund-q-78` | `m1-fundamentos-100q.ts` | CEBRASPE / TCDF / 2014 (Adaptada) | `inedita (sem prova confirmada)` |
| 40 | `fund-q-79` | `m1-fundamentos-100q.ts` | CEBRASPE / STF / 2008 (Adaptada) | `inedita (sem prova confirmada)` |
| 41 | `fund-q-81` | `m1-fundamentos-100q.ts` | CEBRASPE / STF / 2008 | `inedita (sem prova confirmada)` |
| 42 | `fund-q-82` | `m1-fundamentos-100q.ts` | CEBRASPE / TCDF / 2014 | `inedita (sem prova confirmada)` |
| 43 | `fund-q-83` | `m1-fundamentos-100q.ts` | CEBRASPE / TCDF / 2014 (Adaptada) | `inedita (sem prova confirmada)` |
| 44 | `fund-q-85` | `m1-fundamentos-100q.ts` | CEBRASPE / IPHAN / 2018 (Adaptada) | `inedita (sem prova confirmada)` |
| 45 | `fund-q-91` | `m1-fundamentos-100q.ts` | CEBRASPE / STF / 2008 | `inedita (sem prova confirmada)` |
| 46 | `fund-q-96` | `m1-fundamentos-100q.ts` | CEBRASPE / TCDF / 2014 | `inedita (sem prova confirmada)` |
| 47 | `fund-q-99` | `m1-fundamentos-100q.ts` | CEBRASPE / TCDF / 2014 | `inedita (sem prova confirmada)` |
| 48 | `m10-q-11` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 49 | `m10-q-13` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 50 | `m10-q-26` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 51 | `m10-q-33` | `m10-legislativo-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 52 | `m10-q-37` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 53 | `m10-q-38` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 54 | `m10-q-39` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 55 | `m10-q-40` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 56 | `m10-q-41` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 57 | `m10-q-42` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 58 | `m10-q-44` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 59 | `m10-q-45` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 60 | `m10-q-46` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 61 | `m10-q-50` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 62 | `m10-q-51` | `m10-legislativo-100q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) | `inedita (sem prova confirmada)` |
| 63 | `m10-q-59` | `m10-legislativo-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 64 | `m10-q-83` | `m10-legislativo-100q.ts` | STJ/2012 | `inedita (sem prova confirmada)` |
| 65 | `m10-q-90` | `m10-legislativo-100q.ts` | STJ/2012 | `inedita (sem prova confirmada)` |
| 66 | `m10-q-92` | `m10-legislativo-100q.ts` | CADE/2014 | `inedita (sem prova confirmada)` |
| 67 | `m10-q-93` | `m10-legislativo-100q.ts` | CNJ/2013 | `inedita (sem prova confirmada)` |
| 68 | `m10a-q-76` | `m10a-legislativo-constituicao-100q.ts` | Regulamento Administrativo da Câmara dos Deputados / Resolução nº 20/1971 | `inedita (sem prova confirmada)` |
| 69 | `m10a-q-81` | `m10a-legislativo-constituicao-100q.ts` | Portal da Câmara dos Deputados / Biblioteca Pedro Aleixo | `inedita (sem prova confirmada)` |
| 70 | `m10a-q-82` | `m10a-legislativo-constituicao-100q.ts` | Regulamento da Biblioteca Pedro Aleixo / Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 71 | `m10a-q-83` | `m10a-legislativo-constituicao-100q.ts` | Resolução da Câmara dos Deputados nº 20/1971 / CEDI | `inedita (sem prova confirmada)` |
| 72 | `m10a-q-84` | `m10a-legislativo-constituicao-100q.ts` | Lei nº 8.159/1991 / Tabela de Temporalidade da Câmara | `inedita (sem prova confirmada)` |
| 73 | `m10a-q-85` | `m10a-legislativo-constituicao-100q.ts` | Lei nº 12.527/2011, art. 8º | `inedita (sem prova confirmada)` |
| 74 | `m10a-q-86` | `m10a-legislativo-constituicao-100q.ts` | Lei nº 12.527/2011, arts. 23 e 24 | `inedita (sem prova confirmada)` |
| 75 | `m10a-q-87` | `m10a-legislativo-constituicao-100q.ts` | Edições Câmara / Estrutura do CEDI | `inedita (sem prova confirmada)` |
| 76 | `m10a-q-90` | `m10a-legislativo-constituicao-100q.ts` | Especificação do LexML Schema / LC 95/1998 | `inedita (sem prova confirmada)` |
| 77 | `m10a-q-92` | `m10a-legislativo-constituicao-100q.ts` | Ato da Mesa da Câmara dos Deputados / ICP-Brasil | `inedita (sem prova confirmada)` |
| 78 | `m10a-q-93` | `m10a-legislativo-constituicao-100q.ts` | Portal da Câmara dos Deputados / Legislação Compilada | `inedita (sem prova confirmada)` |
| 79 | `m10a-q-94` | `m10a-legislativo-constituicao-100q.ts` | CF/88, art. 37 / Lei 13.709/2018, art. 7º | `inedita (sem prova confirmada)` |
| 80 | `m10a-q-96` | `m10a-legislativo-constituicao-100q.ts` | Resoluções do CONARQ / Diretrizes de Digitalização da Câmara | `inedita (sem prova confirmada)` |
| 81 | `m10a-q-98` | `m10a-legislativo-constituicao-100q.ts` | Diretrizes Técnicas da RVBI / Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 82 | `m10a-q-100` | `m10a-legislativo-constituicao-100q.ts` | Estrutura Administrativa da Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 83 | `m10b-q-14` | `m10b-regimentos-100q.ts` | RICD, Ouvidoria Parlamentar / Resolução da Câmara | `inedita (sem prova confirmada)` |
| 84 | `m10b-q-15` | `m10b-regimentos-100q.ts` | Código de Ética da Câmara dos Deputados / RICD | `inedita (sem prova confirmada)` |
| 85 | `m10b-q-22` | `m10b-regimentos-100q.ts` | Resolução da Câmara nº 1/2013 / RICD | `inedita (sem prova confirmada)` |
| 86 | `m10b-q-88` | `m10b-regimentos-100q.ts` | CF/88, art. 166, § 1º / Resolução nº 1/2006-CN | `inedita (sem prova confirmada)` |
| 87 | `m10b-q-94` | `m10b-regimentos-100q.ts` | Resolução nº 1/2002-CN, art. 2º | `inedita (sem prova confirmada)` |
| 88 | `m10b-q-99` | `m10b-regimentos-100q.ts` | Resolução nº 1/2006-CN | `inedita (sem prova confirmada)` |
| 89 | `m11-q-1` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista Legislativo - Adaptada | `inedita (sem prova confirmada)` |
| 90 | `m11-q-2` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 91 | `m11-q-3` | `m11-administrativo-100q.ts` | STJ / Analista Judiciário - Cebraspe | `inedita (sem prova confirmada)` |
| 92 | `m11-q-4` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 93 | `m11-q-5` | `m11-administrativo-100q.ts` | ANM / Cebraspe - Analista Administrativo | `inedita (sem prova confirmada)` |
| 94 | `m11-q-6` | `m11-administrativo-100q.ts` | SEFAZ-PR / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 95 | `m11-q-7` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 96 | `m11-q-8` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 97 | `m11-q-9` | `m11-administrativo-100q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 98 | `m11-q-10` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 99 | `m11-q-11` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 100 | `m11-q-12` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 101 | `m11-q-13` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 102 | `m11-q-14` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 103 | `m11-q-15` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 104 | `m11-q-16` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 105 | `m11-q-17` | `m11-administrativo-100q.ts` | TJ-PA / Cebraspe | `inedita (sem prova confirmada)` |
| 106 | `m11-q-18` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 107 | `m11-q-19` | `m11-administrativo-100q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 108 | `m11-q-20` | `m11-administrativo-100q.ts` | ANM / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 109 | `m11-q-21` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 110 | `m11-q-22` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 111 | `m11-q-23` | `m11-administrativo-100q.ts` | STJ / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 112 | `m11-q-24` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 113 | `m11-q-25` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 114 | `m11-q-26` | `m11-administrativo-100q.ts` | SEMA-AM / Cebraspe | `inedita (sem prova confirmada)` |
| 115 | `m11-q-27` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 116 | `m11-q-28` | `m11-administrativo-100q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 117 | `m11-q-29` | `m11-administrativo-100q.ts` | ANM / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 118 | `m11-q-30` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 119 | `m11-q-31` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 120 | `m11-q-32` | `m11-administrativo-100q.ts` | SEFAZ-PR / Cebraspe | `inedita (sem prova confirmada)` |
| 121 | `m11-q-33` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 122 | `m11-q-34` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 123 | `m11-q-35` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 124 | `m11-q-36` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 125 | `m11-q-37` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 126 | `m11-q-38` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 127 | `m11-q-39` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 128 | `m11-q-40` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 129 | `m11-q-41` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 130 | `m11-q-42` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 131 | `m11-q-43` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 132 | `m11-q-44` | `m11-administrativo-100q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 133 | `m11-q-45` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 134 | `m11-q-46` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 135 | `m11-q-47` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 136 | `m11-q-48` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 137 | `m11-q-49` | `m11-administrativo-100q.ts` | SEFAZ-PR / Cebraspe | `inedita (sem prova confirmada)` |
| 138 | `m11-q-50` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 139 | `m11-q-51` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 140 | `m11-q-52` | `m11-administrativo-100q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 141 | `m11-q-53` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 142 | `m11-q-54` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 143 | `m11-q-55` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 144 | `m11-q-56` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 145 | `m11-q-57` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 146 | `m11-q-58` | `m11-administrativo-100q.ts` | SEFAZ-PR / Cebraspe | `inedita (sem prova confirmada)` |
| 147 | `m11-q-59` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 148 | `m11-q-60` | `m11-administrativo-100q.ts` | UnB / Administrador - Cebraspe 2025 | `inedita (sem prova confirmada)` |
| 149 | `m11-q-61` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 150 | `m11-q-62` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 151 | `m11-q-63` | `m11-administrativo-100q.ts` | UnB / Cebraspe 2025 | `inedita (sem prova confirmada)` |
| 152 | `m11-q-64` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 153 | `m11-q-65` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 154 | `m11-q-66` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 155 | `m11-q-67` | `m11-administrativo-100q.ts` | UnB / Cebraspe 2025 | `inedita (sem prova confirmada)` |
| 156 | `m11-q-68` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 157 | `m11-q-69` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 158 | `m11-q-70` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 159 | `m11-q-71` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 160 | `m11-q-72` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 161 | `m11-q-73` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 162 | `m11-q-74` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 163 | `m11-q-75` | `m11-administrativo-100q.ts` | SEFAZ-PR / Cebraspe | `inedita (sem prova confirmada)` |
| 164 | `m11-q-76` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 165 | `m11-q-77` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 166 | `m11-q-78` | `m11-administrativo-100q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 167 | `m11-q-79` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 168 | `m11-q-80` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 169 | `m11-q-81` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 170 | `m11-q-82` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 171 | `m11-q-83` | `m11-administrativo-100q.ts` | SEFAZ-PR / Cebraspe | `inedita (sem prova confirmada)` |
| 172 | `m11-q-84` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 173 | `m11-q-85` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 174 | `m11-q-86` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 175 | `m11-q-87` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 176 | `m11-q-88` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 177 | `m11-q-89` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 178 | `m11-q-90` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 179 | `m11-q-91` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 180 | `m11-q-92` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 181 | `m11-q-93` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 182 | `m11-q-94` | `m11-administrativo-100q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 183 | `m11-q-95` | `m11-administrativo-100q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 184 | `m11-q-96` | `m11-administrativo-100q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 185 | `m11-q-97` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Analista - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 186 | `m11-q-98` | `m11-administrativo-100q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 187 | `m11-q-99` | `m11-administrativo-100q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 188 | `m11-q-100` | `m11-administrativo-100q.ts` | Câmara dos Deputados / Técnico - Cebraspe 2026 | `inedita (sem prova confirmada)` |
| 189 | `m12-q-2` | `m12-ingles-100q.ts` | TJDFT/2015 (Cebraspe) | `inedita (sem prova confirmada)` |
| 190 | `m12-q-3` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 191 | `m12-q-4` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 192 | `m12-q-5` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 193 | `m12-q-6` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 194 | `m12-q-7` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 195 | `m12-q-8` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 196 | `m12-q-9` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 197 | `m12-q-10` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 198 | `m12-q-11` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 199 | `m12-q-12` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 200 | `m12-q-13` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 201 | `m12-q-14` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 202 | `m12-q-15` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 203 | `m12-q-16` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 204 | `m12-q-17` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 205 | `m12-q-18` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 206 | `m12-q-19` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 207 | `m12-q-20` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 208 | `m12-q-21` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 209 | `m12-q-22` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 210 | `m12-q-23` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 211 | `m12-q-24` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 212 | `m12-q-25` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 213 | `m12-q-26` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Engenheiro/Engenharia Mecânica/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 214 | `m12-q-27` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 215 | `m12-q-28` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 216 | `m12-q-29` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 217 | `m12-q-30` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 218 | `m12-q-31` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 219 | `m12-q-32` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 220 | `m12-q-33` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 221 | `m12-q-34` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 222 | `m12-q-35` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 223 | `m12-q-36` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 224 | `m12-q-37` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 225 | `m12-q-38` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Registro e Redação/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 226 | `m12-q-39` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 227 | `m12-q-40` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 228 | `m12-q-41` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 229 | `m12-q-42` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 230 | `m12-q-43` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 231 | `m12-q-44` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Registro e Redação/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 232 | `m12-q-45` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 233 | `m12-q-46` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 234 | `m12-q-47` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 235 | `m12-q-48` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 236 | `m12-q-49` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 237 | `m12-q-50` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 238 | `m12-q-51` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 239 | `m12-q-52` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 240 | `m12-q-53` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 241 | `m12-q-54` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 242 | `m12-q-55` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 243 | `m12-q-56` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Engenheiro/Engenharia Mecânica/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 244 | `m12-q-57` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 245 | `m12-q-58` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Engenheiro/Engenharia Mecânica/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 246 | `m12-q-59` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 247 | `m12-q-60` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Engenheiro/Engenharia Mecânica/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 248 | `m12-q-61` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 249 | `m12-q-62` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 250 | `m12-q-63` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 251 | `m12-q-64` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 252 | `m12-q-65` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 253 | `m12-q-66` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 254 | `m12-q-67` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 255 | `m12-q-68` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 256 | `m12-q-69` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 257 | `m12-q-70` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 258 | `m12-q-71` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 259 | `m12-q-72` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 260 | `m12-q-73` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 261 | `m12-q-74` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 262 | `m12-q-75` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 263 | `m12-q-76` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 264 | `m12-q-77` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 265 | `m12-q-78` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 266 | `m12-q-79` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 267 | `m12-q-80` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 268 | `m12-q-81` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 269 | `m12-q-82` | `m12-ingles-100q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 270 | `m12-q-83` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 271 | `m12-q-84` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 272 | `m12-q-85` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 273 | `m12-q-86` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 274 | `m12-q-87` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 275 | `m12-q-88` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 276 | `m12-q-89` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 277 | `m12-q-90` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 278 | `m12-q-91` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 279 | `m12-q-92` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Engenheiro/Engenharia Mecânica/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 280 | `m12-q-93` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 281 | `m12-q-94` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 282 | `m12-q-95` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 283 | `m12-q-96` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 284 | `m12-q-97` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Médico/Neurologia/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 285 | `m12-q-98` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 286 | `m12-q-99` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 287 | `m12-q-100` | `m12-ingles-100q.ts` | AL (CAM DEP)/CAM DEP/Museólogo/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 288 | `cat-q-1` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 289 | `cat-q-4` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 290 | `cat-q-6` | `m2-catalogacao-100q.ts` | CEBRASPE / TJDFT / Bibliotecário | `inedita (sem prova confirmada)` |
| 291 | `cat-q-7` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 292 | `cat-q-9` | `m2-catalogacao-100q.ts` | CEBRASPE / TRE / Bibliotecário | `inedita (sem prova confirmada)` |
| 293 | `cat-q-11` | `m2-catalogacao-100q.ts` | CEBRASPE / Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 294 | `cat-q-12` | `m2-catalogacao-100q.ts` | CEBRASPE / MPU / Bibliotecário | `inedita (sem prova confirmada)` |
| 295 | `cat-q-13` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 296 | `cat-q-14` | `m2-catalogacao-100q.ts` | CEBRASPE / Senado Federal | `inedita (sem prova confirmada)` |
| 297 | `cat-q-17` | `m2-catalogacao-100q.ts` | CEBRASPE / UnB / Bibliotecário | `inedita (sem prova confirmada)` |
| 298 | `cat-q-18` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 299 | `cat-q-19` | `m2-catalogacao-100q.ts` | CEBRASPE / MRE / Diplomacia | `inedita (sem prova confirmada)` |
| 300 | `cat-q-20` | `m2-catalogacao-100q.ts` | CEBRASPE / TCE-PA | `inedita (sem prova confirmada)` |
| 301 | `cat-q-22` | `m2-catalogacao-100q.ts` | CEBRASPE / IPEA / 2024 | `inedita (sem prova confirmada)` |
| 302 | `cat-q-24` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2023 | `inedita (sem prova confirmada)` |
| 303 | `cat-q-26` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 304 | `cat-q-27` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 305 | `cat-q-29` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / Adaptada | `inedita (sem prova confirmada)` |
| 306 | `cat-q-31` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 307 | `cat-q-32` | `m2-catalogacao-100q.ts` | CEBRASPE / TCE-MG / 2026 | `inedita (sem prova confirmada)` |
| 308 | `cat-q-33` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 309 | `cat-q-45` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 310 | `cat-q-50` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 311 | `cat-q-51` | `m2-catalogacao-100q.ts` | CEBRASPE / TCU / 2015 | `inedita (sem prova confirmada)` |
| 312 | `cat-q-52` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / Adaptada | `inedita (sem prova confirmada)` |
| 313 | `cat-q-53` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 314 | `cat-q-55` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 315 | `cat-q-56` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 316 | `cat-q-58` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 317 | `cat-q-60` | `m2-catalogacao-100q.ts` | CEBRASPE / TST / 2024 | `inedita (sem prova confirmada)` |
| 318 | `cat-q-62` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2023 | `inedita (sem prova confirmada)` |
| 319 | `cat-q-65` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 320 | `cat-q-66` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 321 | `cat-q-67` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 322 | `cat-q-73` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 323 | `cat-q-76` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 324 | `cat-q-77` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 325 | `cat-q-78` | `m2-catalogacao-100q.ts` | CEBRASPE / TJDFT / Bibliotecário | `inedita (sem prova confirmada)` |
| 326 | `cat-q-79` | `m2-catalogacao-100q.ts` | CEBRASPE / TJDFT / 2022 | `inedita (sem prova confirmada)` |
| 327 | `cat-q-81` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2023 | `inedita (sem prova confirmada)` |
| 328 | `cat-q-82` | `m2-catalogacao-100q.ts` | CEBRASPE / Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 329 | `cat-q-83` | `m2-catalogacao-100q.ts` | CEBRASPE / Senado Federal | `inedita (sem prova confirmada)` |
| 330 | `cat-q-84` | `m2-catalogacao-100q.ts` | CEBRASPE / TRE / Bibliotecário | `inedita (sem prova confirmada)` |
| 331 | `cat-q-86` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / Adaptada | `inedita (sem prova confirmada)` |
| 332 | `cat-q-87` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 333 | `cat-q-89` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 334 | `cat-q-91` | `m2-catalogacao-100q.ts` | CEBRASPE / TCU / 2015 | `inedita (sem prova confirmada)` |
| 335 | `cat-q-92` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 336 | `cat-q-94` | `m2-catalogacao-100q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 337 | `cat-q-95` | `m2-catalogacao-100q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 338 | `cat-q-98` | `m2-catalogacao-100q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 339 | `m3-q-3` | `m3-classificacao-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 340 | `m3-q-6` | `m3-classificacao-100q.ts` | CNJ/2013 | `inedita (sem prova confirmada)` |
| 341 | `m3-q-7` | `m3-classificacao-100q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 342 | `m3-q-8` | `m3-classificacao-100q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 343 | `m3-q-11` | `m3-classificacao-100q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 344 | `m3-q-13` | `m3-classificacao-100q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 345 | `m3-q-17` | `m3-classificacao-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 346 | `m3-q-19` | `m3-classificacao-100q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 347 | `m3-q-22` | `m3-classificacao-100q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 348 | `m3-q-24` | `m3-classificacao-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 349 | `m3-q-28` | `m3-classificacao-100q.ts` | ANTT/2013 | `inedita (sem prova confirmada)` |
| 350 | `m3-q-29` | `m3-classificacao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 351 | `m3-q-43` | `m3-classificacao-100q.ts` | ANTT/2013 | `inedita (sem prova confirmada)` |
| 352 | `m3-q-45` | `m3-classificacao-100q.ts` | ANTT/2013 | `inedita (sem prova confirmada)` |
| 353 | `m3-q-47` | `m3-classificacao-100q.ts` | ANTT/2013 | `inedita (sem prova confirmada)` |
| 354 | `m3-q-49` | `m3-classificacao-100q.ts` | STM/2011 | `inedita (sem prova confirmada)` |
| 355 | `m3-q-53` | `m3-classificacao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 356 | `m3-q-55` | `m3-classificacao-100q.ts` | CADE/2014 | `inedita (sem prova confirmada)` |
| 357 | `m3-q-67` | `m3-classificacao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 358 | `m3-q-68` | `m3-classificacao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 359 | `m3-q-69` | `m3-classificacao-100q.ts` | STJ/2012 | `inedita (sem prova confirmada)` |
| 360 | `m3-q-82` | `m3-classificacao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 361 | `m3-q-85` | `m3-classificacao-100q.ts` | CADE/2014 | `inedita (sem prova confirmada)` |
| 362 | `m3-q-88` | `m3-classificacao-100q.ts` | CADE/2014 | `inedita (sem prova confirmada)` |
| 363 | `m3-q-94` | `m3-classificacao-100q.ts` | CADE/2014 | `inedita (sem prova confirmada)` |
| 364 | `m3-q-99` | `m3-classificacao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 365 | `m4-q-6` | `m4-recuperacao-100q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 366 | `m4-q-35` | `m4-recuperacao-100q.ts` | ANEEL/2010 | `inedita (sem prova confirmada)` |
| 367 | `m4-q-36` | `m4-recuperacao-100q.ts` | TJDFT/2015 | `inedita (sem prova confirmada)` |
| 368 | `m4-q-37` | `m4-recuperacao-100q.ts` | BASA/2012 | `inedita (sem prova confirmada)` |
| 369 | `m4-q-40` | `m4-recuperacao-100q.ts` | CNJ/2013 | `inedita (sem prova confirmada)` |
| 370 | `m4-q-44` | `m4-recuperacao-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 371 | `m4-q-50` | `m4-recuperacao-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 372 | `m4-q-52` | `m4-recuperacao-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 373 | `m4-q-54` | `m4-recuperacao-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 374 | `m4-q-60` | `m4-recuperacao-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 375 | `m4-q-72` | `m4-recuperacao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 376 | `m4-q-81` | `m4-recuperacao-100q.ts` | ECT/2011 | `inedita (sem prova confirmada)` |
| 377 | `m4-q-88` | `m4-recuperacao-100q.ts` | CAPES/2012 | `inedita (sem prova confirmada)` |
| 378 | `m4-q-97` | `m4-recuperacao-100q.ts` | CAPES/2012 | `inedita (sem prova confirmada)` |
| 379 | `m4-q-99` | `m4-recuperacao-100q.ts` | CAPES/2012 | `inedita (sem prova confirmada)` |
| 380 | `m4-q-100` | `m4-recuperacao-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 381 | `m5-q-3` | `m5-gestao-100q.ts` | ECT/2012 | `inedita (sem prova confirmada)` |
| 382 | `m5-q-8` | `m5-gestao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 383 | `m5-q-12` | `m5-gestao-100q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 384 | `m5-q-17` | `m5-gestao-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 385 | `m5-q-18` | `m5-gestao-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 386 | `m5-q-19` | `m5-gestao-100q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 387 | `m5-q-22` | `m5-gestao-100q.ts` | ECT/2011 | `inedita (sem prova confirmada)` |
| 388 | `m5-q-26` | `m5-gestao-100q.ts` | ECT/2011 | `inedita (sem prova confirmada)` |
| 389 | `m5-q-32` | `m5-gestao-100q.ts` | IPHAN/2018 | `inedita (sem prova confirmada)` |
| 390 | `m5-q-34` | `m5-gestao-100q.ts` | STJ/2012 | `inedita (sem prova confirmada)` |
| 391 | `m5-q-38` | `m5-gestao-100q.ts` | STJ/2012 | `inedita (sem prova confirmada)` |
| 392 | `m5-q-44` | `m5-gestao-100q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 393 | `m5-q-51` | `m5-gestao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 394 | `m5-q-61` | `m5-gestao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 395 | `m5-q-65` | `m5-gestao-100q.ts` | SEGER-ES/2011 | `inedita (sem prova confirmada)` |
| 396 | `m5-q-73` | `m5-gestao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 397 | `m5-q-74` | `m5-gestao-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 398 | `m5-q-76` | `m5-gestao-100q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 399 | `m5-q-80` | `m5-gestao-100q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 400 | `m5-q-81` | `m5-gestao-100q.ts` | STJ/2012 | `inedita (sem prova confirmada)` |
| 401 | `m5-q-87` | `m5-gestao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 402 | `m5-q-91` | `m5-gestao-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 403 | `m5-q-94` | `m5-gestao-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 404 | `m5-q-96` | `m5-gestao-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 405 | `m6-q-6` | `m6-digital-ia-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 406 | `m6-q-7` | `m6-digital-ia-100q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 407 | `m6-q-8` | `m6-digital-ia-100q.ts` | ANTT/2013 | `inedita (sem prova confirmada)` |
| 408 | `m6-q-13` | `m6-digital-ia-100q.ts` | EBESERH/2018 | `inedita (sem prova confirmada)` |
| 409 | `m6-q-17` | `m6-digital-ia-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 410 | `m6-q-23` | `m6-digital-ia-100q.ts` | SEGER-ES/2011 | `inedita (sem prova confirmada)` |
| 411 | `m6-q-26` | `m6-digital-ia-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 412 | `m6-q-36` | `m6-digital-ia-100q.ts` | MPU/2013 | `inedita (sem prova confirmada)` |
| 413 | `m6-q-40` | `m6-digital-ia-100q.ts` | FUB/2011 | `inedita (sem prova confirmada)` |
| 414 | `m6-q-44` | `m6-digital-ia-100q.ts` | FUB/2011 | `inedita (sem prova confirmada)` |
| 415 | `m6-q-45` | `m6-digital-ia-100q.ts` | SEE-DF/2016 | `inedita (sem prova confirmada)` |
| 416 | `m6-q-53` | `m6-digital-ia-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 417 | `m6-q-58` | `m6-digital-ia-100q.ts` | BASA/2012 | `inedita (sem prova confirmada)` |
| 418 | `m6-q-67` | `m6-digital-ia-100q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 419 | `m6-q-70` | `m6-digital-ia-100q.ts` | STF/2008 | `inedita (sem prova confirmada)` |
| 420 | `m6-q-71` | `m6-digital-ia-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 421 | `m6-q-75` | `m6-digital-ia-100q.ts` | STJ/2012 | `inedita (sem prova confirmada)` |
| 422 | `m6-q-86` | `m6-digital-ia-100q.ts` | CAPES/2012 | `inedita (sem prova confirmada)` |
| 423 | `m7-q-2` | `m7-preservacao-100q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 424 | `m7-q-7` | `m7-preservacao-100q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 425 | `m7-q-24` | `m7-preservacao-100q.ts` | STF/2008 (Cebraspe) | `inedita (sem prova confirmada)` |
| 426 | `m7-q-26` | `m7-preservacao-100q.ts` | FUB/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 427 | `m7-q-81` | `m7-preservacao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 428 | `m7-q-86` | `m7-preservacao-100q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 429 | `m7-q-95` | `m7-preservacao-100q.ts` | IPHAN/2018 | `inedita (sem prova confirmada)` |
| 430 | `m8-q-2` | `m8-normalizacao-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 431 | `m8-q-3` | `m8-normalizacao-100q.ts` | ABIN/2017 | `inedita (sem prova confirmada)` |
| 432 | `m8-q-6` | `m8-normalizacao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 433 | `m8-q-7` | `m8-normalizacao-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 434 | `m8-q-23` | `m8-normalizacao-100q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 435 | `m8-q-24` | `m8-normalizacao-100q.ts` | SEDUC-AM/2011 | `inedita (sem prova confirmada)` |
| 436 | `m8-q-32` | `m8-normalizacao-100q.ts` | STJ/2024 (Biblioteconomia) | `inedita (sem prova confirmada)` |
| 437 | `m8-q-35` | `m8-normalizacao-100q.ts` | PC-DF/2025 (Bibliotecário) | `inedita (sem prova confirmada)` |
| 438 | `m8-q-51` | `m8-normalizacao-100q.ts` | CAPES/2012 | `inedita (sem prova confirmada)` |
| 439 | `m8-q-52` | `m8-normalizacao-100q.ts` | MS/2013 | `inedita (sem prova confirmada)` |
| 440 | `m8-q-53` | `m8-normalizacao-100q.ts` | SERPRO/2013 | `inedita (sem prova confirmada)` |
| 441 | `m8-q-55` | `m8-normalizacao-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 442 | `m8-q-61` | `m8-normalizacao-100q.ts` | ANTT/2013 | `inedita (sem prova confirmada)` |
| 443 | `m8-q-63` | `m8-normalizacao-100q.ts` | MS/2013 | `inedita (sem prova confirmada)` |
| 444 | `m8-q-67` | `m8-normalizacao-100q.ts` | ECT/2011 | `inedita (sem prova confirmada)` |
| 445 | `m8-q-70` | `m8-normalizacao-100q.ts` | CPRM/2013 | `inedita (sem prova confirmada)` |
| 446 | `m8-q-74` | `m8-normalizacao-100q.ts` | STM/2011 | `inedita (sem prova confirmada)` |
| 447 | `m8-q-76` | `m8-normalizacao-100q.ts` | ABIN/2017 | `inedita (sem prova confirmada)` |
| 448 | `m8-q-79` | `m8-normalizacao-100q.ts` | ABIN/2017 | `inedita (sem prova confirmada)` |
| 449 | `m8-q-80` | `m8-normalizacao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 450 | `m8-q-81` | `m8-normalizacao-100q.ts` | FUB/2015 | `inedita (sem prova confirmada)` |
| 451 | `m8-q-87` | `m8-normalizacao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 452 | `m8-q-89` | `m8-normalizacao-100q.ts` | ABIN/2017 | `inedita (sem prova confirmada)` |
| 453 | `m8-q-94` | `m8-normalizacao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 454 | `m8-q-98` | `m8-normalizacao-100q.ts` | ECT/2011 | `inedita (sem prova confirmada)` |
| 455 | `m8-q-100` | `m8-normalizacao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 456 | `m9-q-1` | `m9-comunicacao-100q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 457 | `m9-q-2` | `m9-comunicacao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 458 | `m9-q-12` | `m9-comunicacao-100q.ts` | ECT/2011 | `inedita (sem prova confirmada)` |
| 459 | `m9-q-14` | `m9-comunicacao-100q.ts` | FUB/2011 | `inedita (sem prova confirmada)` |
| 460 | `m9-q-16` | `m9-comunicacao-100q.ts` | STM/2011 | `inedita (sem prova confirmada)` |
| 461 | `m9-q-19` | `m9-comunicacao-100q.ts` | CADE/2014 | `inedita (sem prova confirmada)` |
| 462 | `m9-q-23` | `m9-comunicacao-100q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 463 | `m9-q-25` | `m9-comunicacao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 464 | `m9-q-31` | `m9-comunicacao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 465 | `m9-q-32` | `m9-comunicacao-100q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |
| 466 | `m9-q-82` | `m9-comunicacao-100q.ts` | MPU/2013 | `inedita (sem prova confirmada)` |
| 467 | `m9-q-87` | `m9-comunicacao-100q.ts` | TCDF/2014 | `inedita (sem prova confirmada)` |
| 468 | `mega-q-2` | `mega-simulado-camara-120q.ts` | TRE-BA/2010 (Cebraspe) | `inedita (sem prova confirmada)` |
| 469 | `mega-q-3` | `mega-simulado-camara-120q.ts` | TRE-BA/2010 (Cebraspe) | `inedita (sem prova confirmada)` |
| 470 | `mega-q-4` | `mega-simulado-camara-120q.ts` | STF/2008 (Cebraspe) | `inedita (sem prova confirmada)` |
| 471 | `mega-q-5` | `mega-simulado-camara-120q.ts` | ABIN/2017 (Cebraspe) | `inedita (sem prova confirmada)` |
| 472 | `mega-q-7` | `mega-simulado-camara-120q.ts` | ABIN/2017 (Cebraspe) | `inedita (sem prova confirmada)` |
| 473 | `mega-q-8` | `mega-simulado-camara-120q.ts` | ABIN/2017 (Cebraspe) | `inedita (sem prova confirmada)` |
| 474 | `mega-q-9` | `mega-simulado-camara-120q.ts` | ABIN/2017 (Cebraspe) | `inedita (sem prova confirmada)` |
| 475 | `mega-q-10` | `mega-simulado-camara-120q.ts` | ANATEL/2009 (Cebraspe) | `inedita (sem prova confirmada)` |
| 476 | `mega-q-11` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 477 | `mega-q-12` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 478 | `mega-q-13` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 479 | `mega-q-14` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Consultor Legislativo/Área VIII/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 480 | `mega-q-15` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 481 | `mega-q-16` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Arquiteto/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 482 | `mega-q-17` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Contratação e Logística/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 483 | `mega-q-18` | `mega-simulado-camara-120q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 484 | `mega-q-19` | `mega-simulado-camara-120q.ts` | AL (CAM DEP)/CAM DEP/Processo Legislativo e Gestão/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 485 | `mega-q-20` | `mega-simulado-camara-120q.ts` | TL (CAM DEP)/CAM DEP/Policial Legislativo Federal/2026 (Cebraspe) | `inedita (sem prova confirmada)` |
| 486 | `mega-q-21` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / Analista Legislativo - Adaptada | `inedita (sem prova confirmada)` |
| 487 | `mega-q-22` | `mega-simulado-camara-120q.ts` | TCE-MG / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 488 | `mega-q-23` | `mega-simulado-camara-120q.ts` | STJ / Analista Judiciário - Cebraspe | `inedita (sem prova confirmada)` |
| 489 | `mega-q-24` | `mega-simulado-camara-120q.ts` | IBAMA / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 490 | `mega-q-25` | `mega-simulado-camara-120q.ts` | ANM / Cebraspe - Analista Administrativo | `inedita (sem prova confirmada)` |
| 491 | `mega-q-26` | `mega-simulado-camara-120q.ts` | SEFAZ-PR / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 492 | `mega-q-27` | `mega-simulado-camara-120q.ts` | PC-DF / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 493 | `mega-q-28` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 494 | `mega-q-29` | `mega-simulado-camara-120q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 495 | `mega-q-30` | `mega-simulado-camara-120q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 496 | `mega-q-33` | `mega-simulado-camara-120q.ts` | SUFRAMA/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 497 | `mega-q-34` | `mega-simulado-camara-120q.ts` | SUFRAMA/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 498 | `mega-q-35` | `mega-simulado-camara-120q.ts` | CADE/2014 (Cebraspe) | `inedita (sem prova confirmada)` |
| 499 | `mega-q-36` | `mega-simulado-camara-120q.ts` | MPU/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 500 | `mega-q-37` | `mega-simulado-camara-120q.ts` | MPU/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 501 | `mega-q-40` | `mega-simulado-camara-120q.ts` | GAAPC (PC DF)/PC DF/Analista de Informática/Banco de Dados/2025 (Cebraspe) | `inedita (sem prova confirmada)` |
| 502 | `mega-q-43` | `mega-simulado-camara-120q.ts` | CAPES/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 503 | `mega-q-55` | `mega-simulado-camara-120q.ts` | BASA/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 504 | `mega-q-58` | `mega-simulado-camara-120q.ts` | ANTT/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 505 | `mega-q-60` | `mega-simulado-camara-120q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 506 | `mega-q-64` | `mega-simulado-camara-120q.ts` | ANTT/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 507 | `mega-q-65` | `mega-simulado-camara-120q.ts` | TJ-RR/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 508 | `mega-q-71` | `mega-simulado-camara-120q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 509 | `mega-q-72` | `mega-simulado-camara-120q.ts` | ANATEL/2009 (Cebraspe) | `inedita (sem prova confirmada)` |
| 510 | `mega-q-73` | `mega-simulado-camara-120q.ts` | FUB/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 511 | `mega-q-75` | `mega-simulado-camara-120q.ts` | FUB/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 512 | `mega-q-77` | `mega-simulado-camara-120q.ts` | FUB/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 513 | `mega-q-78` | `mega-simulado-camara-120q.ts` | FUB/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 514 | `mega-q-84` | `mega-simulado-camara-120q.ts` | SEE-DF/2016 (Cebraspe) | `inedita (sem prova confirmada)` |
| 515 | `mega-q-86` | `mega-simulado-camara-120q.ts` | ANTT/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 516 | `mega-q-87` | `mega-simulado-camara-120q.ts` | STJ/2012 (Cebraspe) | `inedita (sem prova confirmada)` |
| 517 | `mega-q-89` | `mega-simulado-camara-120q.ts` | SEDUC-AM/2011 (Cebraspe) | `inedita (sem prova confirmada)` |
| 518 | `mega-q-92` | `mega-simulado-camara-120q.ts` | SEDUC-AM/2011 (Cebraspe) | `inedita (sem prova confirmada)` |
| 519 | `mega-q-93` | `mega-simulado-camara-120q.ts` | SEDUC-AM/2011 (Cebraspe) | `inedita (sem prova confirmada)` |
| 520 | `mega-q-95` | `mega-simulado-camara-120q.ts` | ANATEL/2009 (Cebraspe) | `inedita (sem prova confirmada)` |
| 521 | `mega-q-96` | `mega-simulado-camara-120q.ts` | FUB/2011 (Cebraspe) | `inedita (sem prova confirmada)` |
| 522 | `mega-q-97` | `mega-simulado-camara-120q.ts` | ECT/2011 (Cebraspe) | `inedita (sem prova confirmada)` |
| 523 | `mega-q-98` | `mega-simulado-camara-120q.ts` | TRT21/2010 (Cebraspe) | `inedita (sem prova confirmada)` |
| 524 | `mega-q-100` | `mega-simulado-camara-120q.ts` | STF/2008 (Cebraspe) | `inedita (sem prova confirmada)` |
| 525 | `mega-q-101` | `mega-simulado-camara-120q.ts` | STM/2011 (Cebraspe) | `inedita (sem prova confirmada)` |
| 526 | `mega-q-102` | `mega-simulado-camara-120q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 527 | `mega-q-103` | `mega-simulado-camara-120q.ts` | MPU/2011 (Cebraspe) | `inedita (sem prova confirmada)` |
| 528 | `mega-q-104` | `mega-simulado-camara-120q.ts` | CNJ/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 529 | `mega-q-105` | `mega-simulado-camara-120q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 530 | `mega-q-110` | `mega-simulado-camara-120q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 531 | `mega-q-112` | `mega-simulado-camara-120q.ts` | STJ/2018 (Cebraspe) | `inedita (sem prova confirmada)` |
| 532 | `mega-q-113` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) (Cebraspe) | `inedita (sem prova confirmada)` |
| 533 | `mega-q-114` | `mega-simulado-camara-120q.ts` | MPU/2013 (Cebraspe) | `inedita (sem prova confirmada)` |
| 534 | `mega-q-115` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) (Cebraspe) | `inedita (sem prova confirmada)` |
| 535 | `mega-q-116` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) (Cebraspe) | `inedita (sem prova confirmada)` |
| 536 | `mega-q-117` | `mega-simulado-camara-120q.ts` | TRE-BA/2010 (Cebraspe) | `inedita (sem prova confirmada)` |
| 537 | `mega-q-118` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) (Cebraspe) | `inedita (sem prova confirmada)` |
| 538 | `mega-q-119` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) (Cebraspe) | `inedita (sem prova confirmada)` |
| 539 | `mega-q-120` | `mega-simulado-camara-120q.ts` | Câmara dos Deputados / 2014 (Cespe/Cebraspe) (Cebraspe) | `inedita (sem prova confirmada)` |
| 540 | `fund-q-101` | `questoes-submodulos-ampliados.ts` | DCC Curation Lifecycle Model / Higgins (2008) | `inedita (sem prova confirmada)` |
| 541 | `fund-q-102` | `questoes-submodulos-ampliados.ts` | Wilkinson et al. (2016) / Princípios FAIR | `inedita (sem prova confirmada)` |
| 542 | `fund-q-106` | `questoes-submodulos-ampliados.ts` | Princípios FAIR (Wilkinson et al., 2016) | `inedita (sem prova confirmada)` |
| 543 | `fund-q-108` | `questoes-submodulos-ampliados.ts` | Princípios FAIR (Wilkinson et al., 2016) | `inedita (sem prova confirmada)` |
| 544 | `fund-q-109` | `questoes-submodulos-ampliados.ts` | Sayão e Sales (2012) / Curadoria Digital | `inedita (sem prova confirmada)` |
| 545 | `fund-q-111` | `questoes-submodulos-ampliados.ts` | Lei nº 13.709/2018 (LGPD), arts. 1º e 3º | `inedita (sem prova confirmada)` |
| 546 | `fund-q-112` | `questoes-submodulos-ampliados.ts` | Lei nº 13.709/2018, art. 6º, III | `inedita (sem prova confirmada)` |
| 547 | `fund-q-113` | `questoes-submodulos-ampliados.ts` | Lei nº 13.709/2018, art. 6º e 11 | `inedita (sem prova confirmada)` |
| 548 | `fund-q-114` | `questoes-submodulos-ampliados.ts` | Lei nº 13.709/2018, art. 7º, II e III c/c art. 23 | `inedita (sem prova confirmada)` |
| 549 | `fund-q-115` | `questoes-submodulos-ampliados.ts` | Lei nº 13.709/2018, art. 12 | `inedita (sem prova confirmada)` |
| 550 | `fund-q-116` | `questoes-submodulos-ampliados.ts` | Lei nº 13.709/2018, art. 41 | `inedita (sem prova confirmada)` |
| 551 | `fund-q-117` | `questoes-submodulos-ampliados.ts` | ISO/IEC 27001 / DAMA DMBOK | `inedita (sem prova confirmada)` |
| 552 | `fund-q-118` | `questoes-submodulos-ampliados.ts` | CF/88, art. 5º, X / Lei 13.709/2018 / IFLA Statement on Privacy | `inedita (sem prova confirmada)` |
| 553 | `cat-q-206` | `questoes-submodulos-ampliados.ts` | DCMI Metadata Terms / RFC 5013 | `inedita (sem prova confirmada)` |
| 554 | `cat-q-210` | `questoes-submodulos-ampliados.ts` | Tim Berners-Lee (2006) / Linked Data Design Issues | `inedita (sem prova confirmada)` |
| 555 | `m6-q-211` | `questoes-submodulos-ampliados.ts` | Lewis et al. (2020) / Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | `inedita (sem prova confirmada)` |
| 556 | `m6-q-214` | `questoes-submodulos-ampliados.ts` | Vaswani et al. (2017) / Attention Is All You Need | `inedita (sem prova confirmada)` |
| 557 | `m8-q-201` | `questoes-submodulos-ampliados.ts` | Edward Tufte (1983) / The Visual Display of Quantitative Information | `inedita (sem prova confirmada)` |
| 558 | `m8-q-208` | `questoes-submodulos-ampliados.ts` | ISO 14289-1 (PDF/UA) | `inedita (sem prova confirmada)` |
| 559 | `m8-q-210` | `questoes-submodulos-ampliados.ts` | Cairo / The Functional Art / Comunicação Pública da Câmara | `inedita (sem prova confirmada)` |
| 560 | `m13-q-201` | `questoes-submodulos-ampliados.ts` | Manual de Redação da Presidência da República (MRPR, 3ª ed., 2018) | `inedita (sem prova confirmada)` |
| 561 | `m13-q-202` | `questoes-submodulos-ampliados.ts` | Decreto nº 9.758/2019 / MRPR (3ª ed.) | `inedita (sem prova confirmada)` |
| 562 | `m13-q-203` | `questoes-submodulos-ampliados.ts` | MRPR (3ª ed., 2018), item 2.1.2 | `inedita (sem prova confirmada)` |
| 563 | `m13-q-204` | `questoes-submodulos-ampliados.ts` | MRPR (3ª ed., 2018), item 3.1 | `inedita (sem prova confirmada)` |
| 564 | `m13-q-205` | `questoes-submodulos-ampliados.ts` | MRPR (3ª ed., 2018), item 3.2 | `inedita (sem prova confirmada)` |
| 565 | `m13-q-206` | `questoes-submodulos-ampliados.ts` | MRPR (3ª ed., 2018), item 3.2 | `inedita (sem prova confirmada)` |
| 566 | `m13-q-207` | `questoes-submodulos-ampliados.ts` | MRPR (3ª ed., 2018), item 4.1 | `inedita (sem prova confirmada)` |
| 567 | `m13-q-208` | `questoes-submodulos-ampliados.ts` | Lei Complementar nº 95/1998, art. 10, I | `inedita (sem prova confirmada)` |
| 568 | `m13-q-209` | `questoes-submodulos-ampliados.ts` | Lei Complementar nº 95/1998, art. 10, III | `inedita (sem prova confirmada)` |
| 569 | `m13-q-210` | `questoes-submodulos-ampliados.ts` | MRPR (3ª ed., 2018), item 4.2 | `inedita (sem prova confirmada)` |
| 570 | `geral-180q-26` | `simulado-geral-180q.ts` | Câmara dos Deputados / Analista Legislativo - Adaptada | `inedita (sem prova confirmada)` |
| 571 | `geral-180q-27` | `simulado-geral-180q.ts` | STJ / Analista Judiciário - Cebraspe | `inedita (sem prova confirmada)` |
| 572 | `geral-180q-28` | `simulado-geral-180q.ts` | ANM / Cebraspe - Analista Administrativo | `inedita (sem prova confirmada)` |
| 573 | `geral-180q-29` | `simulado-geral-180q.ts` | PC-DF / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 574 | `geral-180q-30` | `simulado-geral-180q.ts` | STJ / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 575 | `geral-180q-31` | `simulado-geral-180q.ts` | ANM / Cebraspe | `inedita (sem prova confirmada)` |
| 576 | `geral-180q-32` | `simulado-geral-180q.ts` | Câmara dos Deputados / Analista - Cebraspe | `inedita (sem prova confirmada)` |
| 577 | `geral-180q-33` | `simulado-geral-180q.ts` | TCE-MG / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 578 | `geral-180q-34` | `simulado-geral-180q.ts` | IBAMA / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 579 | `geral-180q-35` | `simulado-geral-180q.ts` | SEFAZ-PR / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 580 | `geral-180q-36` | `simulado-geral-180q.ts` | Câmara dos Deputados / Cebraspe - Adaptada | `inedita (sem prova confirmada)` |
| 581 | `geral-180q-37` | `simulado-geral-180q.ts` | TCE-MG / Cebraspe | `inedita (sem prova confirmada)` |
| 582 | `geral-180q-38` | `simulado-geral-180q.ts` | IBAMA / Cebraspe | `inedita (sem prova confirmada)` |
| 583 | `geral-180q-39` | `simulado-geral-180q.ts` | PC-DF / Cebraspe | `inedita (sem prova confirmada)` |
| 584 | `geral-180q-40` | `simulado-geral-180q.ts` | STJ / Cebraspe | `inedita (sem prova confirmada)` |
| 585 | `geral-180q-51` | `simulado-geral-180q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 586 | `geral-180q-52` | `simulado-geral-180q.ts` | CEBRASPE / ABIN / 2017 | `inedita (sem prova confirmada)` |
| 587 | `geral-180q-53` | `simulado-geral-180q.ts` | CEBRASPE / STJ / 2018 | `inedita (sem prova confirmada)` |
| 588 | `geral-180q-54` | `simulado-geral-180q.ts` | CEBRASPE / MPE-TO / 2024 | `inedita (sem prova confirmada)` |
| 589 | `geral-180q-55` | `simulado-geral-180q.ts` | CEBRASPE / SEE-PE / 2022 | `inedita (sem prova confirmada)` |
| 590 | `geral-180q-56` | `simulado-geral-180q.ts` | CEBRASPE / ABIN / 2017 | `inedita (sem prova confirmada)` |
| 591 | `geral-180q-57` | `simulado-geral-180q.ts` | CEBRASPE / FUB / 2022 | `inedita (sem prova confirmada)` |
| 592 | `geral-180q-61` | `simulado-geral-180q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 593 | `geral-180q-62` | `simulado-geral-180q.ts` | CEBRASPE / SUFRAMA / 2014 | `inedita (sem prova confirmada)` |
| 594 | `geral-180q-63` | `simulado-geral-180q.ts` | CEBRASPE / SEE-PE / 2022 | `inedita (sem prova confirmada)` |
| 595 | `geral-180q-65` | `simulado-geral-180q.ts` | CEBRASPE / Bibliotecário / 2024 | `inedita (sem prova confirmada)` |
| 596 | `geral-180q-67` | `simulado-geral-180q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 597 | `geral-180q-68` | `simulado-geral-180q.ts` | CEBRASPE / TJDFT / Bibliotecário | `inedita (sem prova confirmada)` |
| 598 | `geral-180q-69` | `simulado-geral-180q.ts` | CEBRASPE / TRE / Bibliotecário | `inedita (sem prova confirmada)` |
| 599 | `geral-180q-73` | `simulado-geral-180q.ts` | CEBRASPE / PC-DF / 2025 | `inedita (sem prova confirmada)` |
| 600 | `geral-180q-75` | `simulado-geral-180q.ts` | CEBRASPE / MPU / Bibliotecário | `inedita (sem prova confirmada)` |
| 601 | `geral-180q-76` | `simulado-geral-180q.ts` | CEBRASPE / STJ / Bibliotecário | `inedita (sem prova confirmada)` |
| 602 | `geral-180q-77` | `simulado-geral-180q.ts` | Caso Integrador CI-1 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 603 | `geral-180q-78` | `simulado-geral-180q.ts` | Caso Integrador CI-1 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 604 | `geral-180q-79` | `simulado-geral-180q.ts` | Caso Integrador CI-1 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 605 | `geral-180q-82` | `simulado-geral-180q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 606 | `geral-180q-83` | `simulado-geral-180q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 607 | `geral-180q-85` | `simulado-geral-180q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 608 | `geral-180q-86` | `simulado-geral-180q.ts` | TRE-BA/2010 | `inedita (sem prova confirmada)` |
| 609 | `geral-180q-89` | `simulado-geral-180q.ts` | CNJ/2013 | `inedita (sem prova confirmada)` |
| 610 | `geral-180q-90` | `simulado-geral-180q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 611 | `geral-180q-92` | `simulado-geral-180q.ts` | Caso Integrador CI-1 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 612 | `geral-180q-93` | `simulado-geral-180q.ts` | Caso Integrador CI-1 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 613 | `geral-180q-103` | `simulado-geral-180q.ts` | DPU/2016 | `inedita (sem prova confirmada)` |
| 614 | `geral-180q-105` | `simulado-geral-180q.ts` | Caso Integrador CI-2 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 615 | `geral-180q-106` | `simulado-geral-180q.ts` | Caso Integrador CI-2 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 616 | `geral-180q-107` | `simulado-geral-180q.ts` | Caso Integrador CI-2 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 617 | `geral-180q-112` | `simulado-geral-180q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 618 | `geral-180q-113` | `simulado-geral-180q.ts` | ECT/2012 | `inedita (sem prova confirmada)` |
| 619 | `geral-180q-116` | `simulado-geral-180q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 620 | `geral-180q-118` | `simulado-geral-180q.ts` | Caso Integrador CI-4 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 621 | `geral-180q-119` | `simulado-geral-180q.ts` | Caso Integrador CI-4 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 622 | `geral-180q-120` | `simulado-geral-180q.ts` | Caso Integrador CI-4 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 623 | `geral-180q-122` | `simulado-geral-180q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 624 | `geral-180q-123` | `simulado-geral-180q.ts` | ANATEL/2009 | `inedita (sem prova confirmada)` |
| 625 | `geral-180q-130` | `simulado-geral-180q.ts` | Caso Integrador CI-5 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 626 | `geral-180q-131` | `simulado-geral-180q.ts` | Caso Integrador CI-5 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 627 | `geral-180q-132` | `simulado-geral-180q.ts` | Caso Integrador CI-5 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 628 | `geral-180q-140` | `simulado-geral-180q.ts` | Caso Integrador CI-3 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 629 | `geral-180q-141` | `simulado-geral-180q.ts` | Caso Integrador CI-3 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 630 | `geral-180q-142` | `simulado-geral-180q.ts` | Caso Integrador CI-3 — Câmara dos Deputados | `inedita (sem prova confirmada)` |
| 631 | `geral-180q-144` | `simulado-geral-180q.ts` | FUB/2013 | `inedita (sem prova confirmada)` |
| 632 | `geral-180q-146` | `simulado-geral-180q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 633 | `geral-180q-148` | `simulado-geral-180q.ts` | ABIN/2017 | `inedita (sem prova confirmada)` |
| 634 | `geral-180q-150` | `simulado-geral-180q.ts` | MPU/2010 | `inedita (sem prova confirmada)` |
| 635 | `geral-180q-153` | `simulado-geral-180q.ts` | TRT21/2010 | `inedita (sem prova confirmada)` |
| 636 | `geral-180q-154` | `simulado-geral-180q.ts` | STJ/2018 | `inedita (sem prova confirmada)` |

---
**Fim do Relatório P18.**