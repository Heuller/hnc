# Relatório de Execução — Fase U8 (Plano v3)
**Plataforma de Estudos "Heuller na Câmara" (HNC)**  
**Cargo:** Analista Legislativo — Documentação e Informação Legislativa (Cargo 5)  
**Banca:** Cebraspe | **Edital:** nº 1, de 02/10/2026 | **Data da Prova:** 17/01/2027  
**Branch de Trabalho:** `ux/plano-v3`  
**Data:** 17 de outubro de 2026  

---

## 1. Resumo Executivo da Fase U8

A **Fase U8 — Integridade de rótulos e de conteúdo** dedicou-se ao compromisso ético e técnico central do projeto HNC: **rigor e honestidade valem mais do que volume**. Toda e qualquer rotulagem ambígua, promessa exagerada ou imprecisão doutrinária e normativa foi estritamente identificada, auditada contra o acervo bibliográfico e retificada.

Principais entregas da fase:
1. **Eliminação do Termo "Verbatim" (U8.1):** Erradicação completa do termo técnico "verbatim" em interfaces, schemas e tipos de dados (`git grep -in "verbatim" src/` = 0). O campo foi renomeado de `conteudoVerbatim` para `conteudoEditorial` com retrocompatibilidade, e a interface agora apresenta com clareza o botão **"Texto Completo"**.
2. **Auditoria Rígida de Citações contra o Acervo (U8.2):** Varredura de citações literais entre aspas em todos os submódulos de `src/content/modules/`. Citações localizadas com exatidão no acervo oficial (`acervo-estudos/`) — como a definição de *Res* no IFLA LRM (2017, p. 21) — foram formalmente referenciadas; trechos não encontrados ipsis litteris nos PDFs do acervo foram convertidos em paráfrases doutrinárias autorais fundamentadas com a anotação `<!-- [NÃO CONFERIDO]: convertido de aspas rígidas em paráfrase autoral doutrinária -->`, eliminando falsas atribuições literais.
3. **Rótulos Honestos no Radar, Treinos e Simulados (U8.3):** Substituição de terminologias que sugeriam questões oficiais vazadas ou pré-mapeadas por designações transparentes: *"Itens autorais no estilo Cebraspe"*, *"Padrão de armadilha (autoral)"* e simulados sob o *"Modelo Cebraspe (Fator 1:1)"*.
4. **Fórmulas Oficiais da Discursiva (U8.4):** Implementação estrita das fórmulas do Cebraspe conforme o **Edital nº 1, de 02/10/2026 (itens 9.1, 9.4 a 9.6, 9.8.4 e 9.8.5)**:
   - **Questão (até 20 linhas, máx 15 pts cada):** $NQi = NCi - 3 \times \frac{NEi}{TLi}$
   - **Peça Técnica (até 50 linhas, máx 30 pts):** $NPT = NC - 6 \times \frac{NE}{TL}$
   - **Nota Final:** $NFPD = NQ1 + NQ2 + NPT$ (máx 60 pts; aprovação $NFPD \ge 30,00$).
   - Extirpação completa do fator incorreto $2 \times (NE/TL)$.
   - Criação de suíte de testes unitários dedicada (`src/tests/discursivaFormulasU8.test.ts`) cobrindo 13 cenários de cálculo, limites de linhas, arredondamentos e critérios de eliminação.
   - Inclusão de aviso ostensivo de honestidade na Oficina Discursiva: a pontuação de IA é uma **estimativa formativa** e não substitui a banca oficial de dois examinadores humanos (subitem 9.8.4.1 do edital).
5. **Transparência em Armazenamento e Privacidade (U8.5):** O Painel de Progresso agora informa com total transparência que os dados do candidato residem primariamente no armazenamento local do navegador (IndexedDB / LocalStorage), sendo a sincronização em nuvem via Supabase um recurso complementar e opcional.
6. **Contagens Dinâmicas de Curso (U8.6):** Todos os contadores de módulos e submódulos em cabeçalhos, painel e telas de navegação passam a ser derivados dinamicamente de `COURSE_REGISTRY`, prevenindo descompassos estatísticos à medida que o conteúdo se expande.
7. **Atualização Normativa ABNT 2025 (U8.7):** Verificação no acervo oficial e atualização das normas técnicas vigentes: **ABNT NBR 6023:2025** (Referências, 3ª edição, 21.05.2025), **ABNT NBR 15287:2025** (Projeto de pesquisa, 3ª edição, 18.03.2025) e **ABNT NBR 10520:2023** (Citações).

---

## 2. Tabela de Tarefas e Commits da Fase U8

| Tarefa | Descrição Sintética | Commit | Arquivos Principais Alterados |
| :--- | :--- | :--- | :--- |
| **U8.1** | Remoção do termo "verbatim" de schemas, tipos e interfaces | `bb39fde` | `src/domain/types.ts`, `src/components/layout/Sidebar.tsx`, `src/components/layout/TeoriaStickyBar.tsx`, `src/content/modules/modulo-*.ts` |
| **U8.2** | Auditoria e conversão de citações literais em paráfrases doutrinárias | `a05dbd9` | `src/content/modules/modulo-01-fundamentos.ts`, `modulo-03-recuperacao.ts`, `modulo-04-tecnologia.ts`, `modulo-06-preservacao.ts` |
| **U8.3** | Rótulos honestos: questões autorais estilo Cebraspe e padrões de armadilha | `7836b1b` | `src/components/training/QuestionCard.tsx`, `src/pages/TreinosPage.tsx`, `src/pages/SimuladosPage.tsx`, `src/components/simulation/SimuladoResultModal.tsx` |
| **U8.4** | Fórmulas oficiais Cebraspe da discursiva e aviso de estimativa de IA | `1032092` | `src/domain/discursiva/formulas.ts`, `src/pages/OficinaDiscursivaPage.tsx`, `src/tests/discursivaFormulasU8.test.ts` |
| **U8.5** | Transparência no armazenamento local e sincronização opcional com Supabase | `98f338e` | `src/pages/ProgressoPage.tsx` |
| **U8.6** | Dinamização das contagens de módulos e submódulos via `COURSE_REGISTRY` | `3edc040` | `src/pages/PainelPage.tsx`, `src/pages/JornadaPage.tsx`, `src/components/layout/Header.tsx` |
| **U8.7** | Atualização de normas ABNT com anos vigentes (NBR 6023:2025, NBR 15287:2025, NBR 10520:2023) | `6e77ac6` | `src/content/glossario.ts`, `src/content/modules/modulo-08-normalizacao.ts`, `src/data/dicionarioTermos.ts` |

---

## 3. Auditoria de Citações e Fontes (U8.2)

O acervo oficial em `acervo-estudos/` (contendo 286 PDFs e 266 arquivos textuais indexados) foi utilizado como fonte primária para auditoria:

| Passagem / Autor Original | Obra Referenciada no Acervo | Situação no Acervo | Decisão Editorial HNC |
| :--- | :--- | :--- | :--- |
| **IFLA LRM (2017)** — Entidade *Res* | `Catalogação/ifla-lrm-august-2017_rev201712-por.pdf` (pág. 21) | **Localizada ipsis litteris**: *"Qualquer entidade no universo do discurso"* | Mantida com aspas e citação precisa da página e tradução autorizada da FEBAB. |
| **Suzanne Briet (1951)** — Conceito de Documento | *Qu'est-ce que la documentation?* | Não há exemplar integral traduzido no acervo | Convertida em paráfrase doutrinária autoral com anotação `[NÃO CONFERIDO]`. |
| **Harold Borko (1968)** — Ciência da Informação | *Information Science: What is it?* | Artigo em inglês referenciado indiretamente | Convertida em paráfrase conceitual autoral com anotação `[NÃO CONFERIDO]`. |
| **Baeza-Yates / Salton** — Modelo Vetorial | Manuais de Recuperação da Informação | Paráfrases de manuais | Convertida em síntese conceitual autoral com anotação `[NÃO CONFERIDO]`. |
| **Murilo Bastos da Cunha** — Avaliação de Fontes | Manuais de Serviços de Informação | Menções secundárias | Convertida em síntese metodológica autoral com anotação `[NÃO CONFERIDO]`. |
| **Cesare Brandi (1963)** — Teoria da Restauração | *Teoria da Restauração* | Princípios axiológicos | Convertida em síntese de preservação autoral com anotação `[NÃO CONFERIDO]`. |
| **A. J. Meadows (1999)** — Comunicação Científica | *A comunicação científica* | Menção a canais formais | Convertida em síntese doutrinária autoral com anotação `[NÃO CONFERIDO]`. |
| **Sayão & Sales (2014)** — Curadoria Digital | Artigos em periódicos | Menções conceituais | Convertida em síntese terminológica autoral com anotação `[NÃO CONFERIDO]`. |

---

## 4. Fórmulas Oficiais da Discursiva (Edital Cebraspe nº 1, de 02/10/2026)

Conforme os itens **9.1, 9.4 a 9.6, 9.8.4 e 9.8.5** do Edital:
- **Questões Discursivas 1 e 2 ($NQ_1, NQ_2$):**
  $$NQi = NCi - 3 \times \frac{NEi}{TLi}$$
  Onde $NCi$ é a nota de conteúdo (máx. 15,00), $NEi$ é o número de erros de linguagem e $TLi$ é o total de linhas efetivamente escritas (máx. 20 linhas). Caso $TLi = 0$ ou $NQi < 0$, $NQi = 0,00$.
- **Peça Técnica ($NPT$):**
  $$NPT = NC - 6 \times \frac{NE}{TL}$$
  Onde $NC$ é a nota de conteúdo (máx. 30,00), $NE$ é o número de erros e $TL$ é o total de linhas efetivamente escritas (máx. 50 linhas). Caso $TL = 0$ ou $NPT < 0$, $NPT = 0,00$.
- **Nota Final da Prova Discursiva ($NFPD$):**
  $$NFPD = NQ_1 + NQ_2 + NPT \quad (\text{Pontuação máxima: } 60,00)$$
- **Critério Eliminatório:** Atingir no mínimo $NFPD \ge 30,00$ pontos para aprovação na prova discursiva (item 9.8.5).

Todas essas regras foram codificadas em módulo puro (`src/domain/discursiva/formulas.ts`) e 100% testadas em `src/tests/discursivaFormulasU8.test.ts`.

---

## 5. Medições Antes e Depois

| Métrica | Linha de Base (Fim U6) | Estado Atual (Fim U8) | Variação / Impacto |
| :--- | :--- | :--- | :--- |
| **Ocorrências de "verbatim" em `src/`** | 6 ocorrências | **0 ocorrências** | Erradicado com sucesso |
| **Suíte de Testes Automatizados** | 674 testes em 76 suítes | **687 testes em 77 suítes** | **+13 testes novos**, 0 falhas |
| **Fórmula de Desconto na Discursiva** | Fator incorreto $2 \times (NE/TL)$ | **Fator oficial $3 \times$ (Questão) e $6 \times$ (Peça)** | Conformidade estrita com o edital |
| **Rótulos de Questões e Simulados** | "Armadilha Cebraspe Mapeada" | **"Padrão de armadilha (autoral)"** | Honestidade e transparência |
| **Normas ABNT Vigentes Citadas** | NBR 6023 desatualizada | **NBR 6023:2025, NBR 15287:2025, NBR 10520:2023** | Estado da arte normativo |
| **Transparência de IA na Discursiva** | Sem aviso explícito de limitação | **Aviso explícito de estimativa formativa (Item 9.8.4.1)** | Alinhamento com a realidade da banca |

---

## 6. Verificações de Qualidade Técnica

1. **Compilação TypeScript:** `npx tsc -b` aprovado com **0 erros**.
2. **Linting de Código:** `npm run lint` aprovado com **0 erros**.
3. **Testes Unitários e Integração:** `npm test` aprovado com **687 testes em 77 suítes** verdes.
4. **Build de Produção:** `npx vite build` gerou com sucesso o pacote otimizado e o PWA v1.3.0 com ServiceWorker funcional em `dist/`.

---

## 7. Próxima Fase (Fase U9)

A próxima fase prevista no Plano v3 é a **Fase U9 — Empacotamento PWA, cache offline e resiliência**:
1. Verificação das rotas offline do Service Worker.
2. Garantia de persistência total do progresso mesmo em perda temporária de conectividade.
3. Testes de instalação e atualização suave de versão do PWA.
