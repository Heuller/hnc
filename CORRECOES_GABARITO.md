# Relatório de Auditoria e Correção de Gabaritos Cebraspe (P17)
**Data:** 21 de Outubro de 2026  
**Status:** Concluído com Sucesso e Travado por Teste Automatizado de Regressão  
**Documento de Referência:** Auditoria de 2.369 Itens Cebraspe & `erratas_gabarito_candidatas.csv`  

---

## 1. Diagnóstico da Causa-Raiz (Root Cause)

Nas iterações anteriores de balanceamento estatístico dos simulados (para atender à exigência de 50% C / 50% E da banca Cebraspe), o algoritmo ou mantenedor anterior forçou a simetria invertendo artificialmente gabaritos de questões reais de concursos anteriores, em vez de balancear o caderno por meio da redação de distratores de itens inéditos.

Essa prática gerou aberrações pedagógicas graves no Módulo M7 (**Preservação, Conservação, Restauração & Modelo OAIS**):
1. **Item `m7-q-39` (IPHAN/2018):** Ensinava erroneamente que o modelo internacional OAIS (ISO 14721) era o "sistema brasileiro de gestão da propriedade intelectual", marcando o item como **Certo** quando a banca oficial o julgou **Errado**.
2. **Item `m7-q-40` (UNEAL/2026):** Ensinava que backups em disco rígido externo garantem a preservação digital de longo prazo e dispensam outras estratégias (marcado como **Certo** quando é patentemente **Errado**).
3. **Resíduos de Extração:** Itens reais continham cabeçalhos residuais de extração de PDF (como `Biblioteconomia - ...`, sequências de números de linhas `132) 141) ...`) e quebras de sílabas (`extrapo lam`, `instit ucionais`, `racional ização`, `doc umento`, etc.).

---

## 2. A Solução Arquitetural P17

1. **Restauração Integral dos 20 Gabaritos Oficiais Cebraspe:** Todas as 20 questões reais do M7 tiveram seus gabaritos oficiais definitivos restaurados com justificativas canônicas e dissecação da pegadinha da banca.
2. **Preservação da Simetria (50 C / 50 E):** As 72 questões reais do M7 contêm naturalmente 42 itens **Certos** e 30 itens **Errados**. Para atingir a paridade exata de 50/50 no caderno de 100 itens, os 28 itens **inéditos** foram balanceados para 8 Certos e 20 Errados, utilizando distratores técnicos sofisticados segundo as diretrizes de `ESPECIFICACAO_ITENS.md` §3 (sem recorrer a caricaturas ou termos extremistas).
3. **Limpeza Profunda de Resíduos de PDF:** 100% dos cabeçalhos de extração e palavras quebradas foram limpos em `m7-preservacao-100q.ts`, `mega-simulado-camara-120q.ts` e `m10-legislativo-100q.ts`.
4. **Isolamento de Itens Divergentes:** `m7-q-21` e `mega-q-85` foram marcados com o atributo tipado `revisar: true` no schema Zod (`CebraspeQuestionSchema`).
5. **Confirmação de Falso Positivo:** `m10-q-94` foi mantido inalterado com seu gabarito correto **E** (IPHAN/2018).
6. **Trava de Regressão Permanente:** Criação da suíte de teste Vitest `src/tests/gabaritosOficiaisM7.test.ts`.

---

## 3. Matriz Completa das 20 Correções em M7

| # | ID do Item | Concurso / Órgão | Gabarito Anterior | **Gabarito Oficial (Correto)** | Fundamentação Técnica e Justificativa Doutrinária |
|---|---|---|:---:|:---:|---|
| 1 | `m7-q-33` | AJ TSE / 2024 | C | **E** | Múltiplos acessos e exportação para gestores bibliográficos (Zotero, Mendeley) atendem a uso/disseminação imediata, não sendo requisitos essenciais de preservação de longo prazo. |
| 2 | `m7-q-58` | AJ TSE / 2024 | C | **E** | Idem ao item anterior. Funcionalidades da camada de aplicação e recuperação não se confundem com a custódia e fixidez da preservação arquivística digital. |
| 3 | `m7-q-15` | SUFRAMA / 2014 | E | **C** | Doutrina canônica de Nice Figueiredo (1994) sobre estudos de usuários: necessidades em função do conhecimento (saber) vs em função da ação (fazer material). |
| 4 | `m7-q-20` | SEE DF / 2017 | E | **C** | Conceito amplo e operacional de preservação digital admitido pelo Cebraspe como processo de armazenamento adequado para assegurar o uso contínuo de objetos digitais. |
| 5 | `m7-q-22` | STJ / 2012 | E | **C** | Tríade clássica de Paul Conway e da arquivologia/ciência da informação: preservação física (suportes), lógica (formatos contra obsolescência) e intelectual (autenticidade/integridade). |
| 6 | `m7-q-25` | UNEAL / 2026 | E | **C** | Crítica universal na literatura à "preservação tecnológica" (museu de tecnologia): manter hardware/software originais é economicamente inviável a longo prazo. |
| 7 | `m7-q-29` | STJ / 2024 | C | **E** | A rede LexML Brasil adota padrões abertos, sendo interoperável e perfeitamente compatível com o Dublin Core (DC) e OAI-PMH, nunca utilizando esquemas proprietários. |
| 8 | `m7-q-46` | SUFRAMA / 2014 | E | **C** | Taxonomia clássica de Nice Figueiredo: necessidade para o conhecimento versus necessidade material para a ação. |
| 9 | `m7-q-49` | SEE DF / 2017 | E | **C** | Validação conceitual da preservação digital como armazenamento planejado para viabilizar o acesso continuado. |
| 10 | `m7-q-50` | STJ / 2012 | E | **C** | Confirmação da tríade de Conway (física, lógica e intelectual) no ecossistema de preservação de documentos digitais. |
| 11 | `m7-q-52` | UNEAL / 2026 | E | **C** | Preservação de tecnologia / retenção de equipamentos legados inviabiliza-se pelos custos operacionais proibitivos de manutenção e obsolescência. |
| 12 | `m7-q-53` | STJ / 2024 | C | **E** | O LexML Brasil é um integrador de metadados legislativos e jurídicos; o papel legal de biblioteca depositária do patrimônio cultural nacional cabe à Biblioteca Nacional (Depósito Legal). |
| 13 | `m7-q-40` | UNEAL / 2026 | C | **E** | O backup em HD externo é contingência para restauração operacional contra sinistros, mas NÃO assegura preservação a longo prazo e NÃO dispensa migração, emulação e validação criptográfica. |
| 14 | `m7-q-32` | SUFRAMA / 2014 | E | **C** | A governança e cultura informacional da preservação de objetos digitais exige o controle integral do ciclo de vida documental, desde a concepção/produção até o descarte/guarda permanente. |
| 15 | `m7-q-59` | SUFRAMA / 2014 | E | **C** | Reafirmação da indispensabilidade de política informacional articulada desde a fase de produção até o recolhimento ou eliminação do documento digital. |
| 16 | `m7-q-43` | SERPRO / 2013 | E | **C** | Na e-Science e ciência orientada a dados, as bibliotecas de pesquisa assumem papel ativo na gestão de dados (RDM), segurança, padronização de metadados e preservação digital. |
| 17 | `m7-q-42` | TRT 17 / 2013 | E | **C** | Conceituação estrita da técnica de preservação tecnológica: manutenção dos ambientes e sistemas computacionais originais para suportar o acesso ao objeto. |
| 18 | `m7-q-39` | IPHAN / 2018 | C | **E** | O OAIS (ISO 14721) é um modelo conceitual internacional de arquivos abertos para preservação digital, e NÃO um "sistema brasileiro de propriedade intelectual". |
| 19 | `m7-q-36` | STJ / 2024 | E | **C** | Definição canônica do Digital Curation Centre (DCC): curadoria digital abrange seleção, preservação, manutenção, coleção e arquivamento de ativos digitais. |
| 20 | `m7-q-44` | TRT 17 / 2013 | C | **E** | Bibliografias comerciais possuem natureza mercadológica; a preservação da herança cultural de um país é finalidade pública exclusiva da Bibliografia Nacional (Depósito Legal). |

---

## 4. Itens com Divergência Cadastral (`revisar: true`)

| ID do Item | Caderno | Prova | Texto Resumido | Status / Tratamento |
|---|---|---|---|---|
| `m7-q-21` | M7 Preservação | DPU / 2016 | "A preservação digital não é garantia para as bibliotecas digitais, visto que a preservação depende de métodos, estratégias e políticas que não antecedem e que extrapolam as características das bibliotecas digitais." | Gabarito mantido em **C**; corrigida quebra de sílaba `extrapo lam` -> `extrapolam`; adicionado atributo `"revisar": true` para aferição direta no espelho de prova da DPU/2016. |
| `mega-q-85` | Mega Simulado Câmara 120Q | DPU / 2016 | "Apenas obras de domínio público ou publicações institucionais podem ser digitalizadas e disponibilizadas em biblioteca digital de organizações para fins de disseminação da informação." | Gabarito mantido em **C**; corrigido `instit ucionais` -> `institucionais` e `fontes de infor -` -> `fontes de informação`; adicionado `"revisar": true`. |

---

## 5. Falso Positivo Verificado

- **Item `m10-q-94` (IPHAN/2018):**  
  A assertiva ("O Catálogo Coletivo Nacional de Publicações Seriadas (CCN) é um sistema de acesso público que reúne informações sobre as coleções de publicações seriadas exclusivamente nacionais...") já estava cadastrada com o gabarito oficial **E** (o CCN inclui também publicações internacionais presentes em bibliotecas cooperantes). O item foi preservado com gabarito **E** e foram corrigidos os erros de digitação residuais (`disp disponíveis` -> `disponíveis` e `di s-` -> `disseminação da informação`).

---

## 6. Balanceamento Matemático do Simulado M7

- **Total de Itens:** 100
- **Questões Reais Cebraspe:** 72 (42 Certas / 30 Erradas)
- **Questões Inéditas:** 28 (8 Certas / 20 Erradas)
- **Gabarito Global M7:** **50 Certas (50.0%) / 50 Erradas (50.0%)**
- **Intervalo Regulamentar do Edital:** [48%, 52%] — **Conformidade de 100.0%**.

---

## 7. Garantias Automatizadas de Qualidade

1. **Testes Unitários e de Regressão:** `npx vitest run src/tests/gabaritosOficiaisM7.test.ts` (5 testes passando com 100% de sucesso).
2. **Suíte Geral Vitest:** 98 suítes / 777 testes passando em verde.
3. **TypeScript:** Compilação estrita com `tsc -b` concluída com 0 erros.
4. **Linter:** `oxlint` validando 444 arquivos sem erros.
5. **Orçamento de Pacote:** `npm run check:budget` aprovado (Entry Chunk 219 kB <= 220 kB, Precache 4.7 MB <= 5.0 MB).
6. **Auditoria Móvel:** `npm run audit:mobile` com 0 horizontal overflow nas resoluções mobile (375px) e altura de header de 56px.
