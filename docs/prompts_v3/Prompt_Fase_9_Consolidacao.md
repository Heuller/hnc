# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE 9 (REVISADA) (PLANO v3) — Consolidação pós-correções

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase 9 (REVISADA)** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Pré-condição: **U0 a U9 concluídas e aprovadas** pelo usuário. Esta fase **substitui** o prompt antigo da Fase 9.

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `T9.<n>: <resumo>` (por exemplo `T9.2: gera a matriz viva do edital`).
5. **Nunca destrua o progresso do usuário.** Sem migração destrutiva. Antes e depois de qualquer mudança no modelo de progresso, **exporte o progresso** e compare. O estado "bloqueado" vira "disponível"; **nada** que o usuário já fez pode ser perdido.
6. **Modo livre (decisão do usuário):** **nenhuma trava** de submódulo, módulo, portal, desafio ou simulado. A "Próxima ação recomendada" e os **selos de domínio** continuam, **sem bloquear**. Antes de U2, **não crie travas novas**.
7. **Identidade visual:** manter **"Papel e Tinta"** (editorial, serifada, creme/azul-marinho/âmbar) e **simplificar**. **Mobile-first:** o usuário estuda no **celular**, muitas vezes em **modo escuro**. Corpo ≥ 16 px, alvos de toque ≥ 44 px, contraste WCAG 2.2 AA, sem elemento fixo cobrindo texto, sem rolagem horizontal da página.
8. **Honestidade:** não invente fatos, citações, estatísticas, dados de prova ou referências. **Nenhum rótulo pode afirmar dado real da banca sem fonte.** Onde não conseguir conferir algo, marque `[VERIFICAR]` e **liste no relatório**. Números exibidos na tela devem **vir dos dados**, não digitados.
9. **Idioma:** textos de interface em **português do Brasil**. Termos em inglês só quando forem o nome técnico, com explicação.
10. **Desempenho:** meça antes de otimizar e **registre os números** (antes e depois).
11. **Evidência pedagógica:** cada recurso pedagógico novo declara **qual princípio científico o sustenta** (ver seção 3 do plano). Não use "estilos de aprendizagem".

## 4. Problemas observados que esta fase trata
| # | O que foi observado | Causa | Status | Onde | Correção |
|---|---|---|---|---|---|
| D1 | Códigos como `$K[S] + \Delta I = K[S+\Delta S]$` e `$n^2$` no meio do texto | A fórmula usa a sintaxe `$...$`, mas **nenhum dos dois leitores de Markdown carrega o plugin `remark-math`** (que transforma `$...$` em fórmula). O `rehype-katex` sozinho não faz nada sem ele. O `remark-math` **nem está no `package.json`**. | **[CONFIRMADO]** | `src/components/MarkdownViewer.tsx` (só `remarkGfm`); `src/components/common/MarkdownRenderer.tsx` (`rehypeKatex` sem `remark-math`); `package.json` | Instalar `remark-math`, usar nos dois leitores, e **unificar os dois leitores em um só**. Cerca de **267 linhas em 45 arquivos** de conteúdo têm essa sintaxe. |
| D2 | `[!CAUTION]` em inglês, entre colchetes | O conteúdo usa a sintaxe de alertas do GitHub (`> [!CAUTION]`), mas o leitor não a interpreta; o `blockquote` só detecta palavras ("Atenção", "ERRADO", emoji). | **[CONFIRMADO]** | 10 ocorrências em `src/content/modules/**` (por exemplo `m1-fundamentos/sub-1-1.ts`) | Criar plugin que converta `[!NOTE\|TIP\|IMPORTANT\|WARNING\|CAUTION]` em **callout em português** (Nota, Dica, Importante, Atenção, Casca de banana) com ícone. |
| D3 | "Excelente! Todos os **4** pares" com só 3 pares na tela | O texto está **fixo** no código ("4 pares"). | **[CONFIRMADO]** | `src/components/content-blocks/ActiveRetrievalExercises.tsx`, linha ~303 | Usar `authorCards.length`. Teste de regressão. |
| D4 | Respondeu os 3 checkpoints e o 1.3 não libera: "Responda os 5 itens de verificação pendentes" | O motor soma aos checkpoints **itens escondidos** do "Treino de Recuperação Ativa" (pares de autores e pegadinhas dos Mnemônicos) para chegar a um N mínimo. O esquema limita checkpoints a **3** (`.min(2).max(3)`), então o motor **sempre** completa com itens que o aluno nem vê na leitura. A configuração pede **8** itens (`nMinimoVerificacao: 8`) e 85%. | **[CONFIRMADO]** | `src/domain/progressoEngine.ts` (`obterItensVerificacaoSubmodulo`), `src/domain/portaoSimuladoEngine.ts` (~linha 281), `src/config/jornada.config.ts`, `src/domain/schemas/modulo.schema.ts` | Sua decisão resolve: **remover as travas** (Fase U2). O bug de contagem deixa de bloquear, mas o contador também deve parar de mostrar pendências fantasma. |
| D5 | Interface "travada" | **[HIPÓTESE]** Três suspeitas, a medir (U7): (a) **3,6 MB de conteúdo** importados de forma eager por `src/content/registry.ts`; (b) o `zustand/persist` regrava **todo** o estado no `localStorage` a cada resposta, e o histórico de tentativas só cresce; (c) bibliotecas pesadas (`mermaid`, `recharts`, `katex`) no carregamento inicial. Além disso, **telas em esqueleto de carregamento** aparecem nos prints de Teoria e Caderno de Erros. | **[HIPÓTESE]** | `src/content/registry.ts`, `src/store/useProgressStore.ts`, `vite.config.ts` (`chunkSizeWarningLimit: 1500`) | Perfilar antes de otimizar (U7). |
| D6 | Tabela "Distratores" em celular: "GABARI TO" quebrado, texto apertado, botão amarelo "Mnemônicos" cobrindo o texto | Tabela larga em tela estreita; botão flutuante (FAB) sempre sobre a leitura. | Visto nos prints | Componentes de tabela e Mnemônicos | Tabela vira **cartões empilhados** no celular; Mnemônicos vira **aba/gaveta na barra de ações**, não flutuante. |
| D7 | Cabeçalho desktop com "Heuller na Câmara" quebrado em 3 linhas, menu lotado | Largura insuficiente para logo + 5 itens + glossário + busca + 4 ícones | Visto nos prints | `src/components/layout/Header.tsx` | Menu enxuto (U6). |
| D8 | "Doutrina Canônica **Verbatim**" e "texto original preservado verbatim" | O texto é **redigido por IA**. "Verbatim" sugere citação literal de livros; isso é **arriscado** (citação inventada com aparência de literal). | **[CONFIRMADO]** (`modulo.schema.ts` comenta "verbatim"; a tela diz "Citações de autores clássicos... sem paráfrases vagas") | Esquema e telas | Trocar o rótulo e **auditar citações contra o seu acervo** (U8). |
| D9 | "Radar Cebraspe: Estatística e Incidência de Banca", "Itens da Banca (1520)", "Padrão preliminar baseado em editais reais" | Esses números descrevem **itens escritos pela plataforma**, não dados reais de provas da banca. Rótulo sugere estatística empírica que **não existe**. | Visto nos prints | Telas Radar, Simulados, Discursiva | Reescrever rótulos (U8): "Itens autorais no estilo Cebraspe". |
| D10 | Fórmula da discursiva **errada em dois lugares e certa em outros** | **[CONFIRMADO no edital, itens 9.8.5.1(d) e 9.8.5.2(d)]**: `NQi = NCi − 3 × NEi ÷ TLi` (questões) e `NPT = NC − 6 × NE ÷ TL` (peça técnica). O código ainda tem `NC = NCP − 2×(NE/TL)` em `src/pages/TreinosPage.tsx` (~linha 206) e, **pior**, dentro do **prompt do avaliador de IA** em `src/pages/DiscursivaPage.tsx` (~linha 24), que manda o modelo aplicar a fórmula errada | **[CONFIRMADO]** | Os dois arquivos citados | Fase U8.4: fórmula única centralizada, com testes numéricos. **A correção por IA hoje usa a fórmula errada.** |
| D11 | Progresso diz "dados **100% no navegador**, sem servidores externos", mas o projeto tem sincronização com Supabase | Texto desatualizado ou funcionalidade inativa | **[CONFIRMADO]** (existem `src/services/*SyncService.ts`) | `ProgressoPage` | Decidir qual é verdade e alinhar o texto (U8). |
| D12 | Contagens que não batem: "59 etapas / 40 submódulos" x "Todos os Submódulos (64)"; "10 cadernos da trilha (M1 a M10)" x lista M1 a M14 | Estruturas diferentes (trilha de 10 módulos x acervo de 14) apresentadas sem explicação | Visto nos prints | Painel, Jornada, Radar, Treinos | Rotular claramente "Trilha principal" x "Acervo" (U6). Com o modo livre, simplificar. |
| D13 | Pré-requisito de vocabulário: "SQL" aparece no meio de frase sem explicação | O conteúdo foi escrito para quem já conhece o termo; não há camada de pré-requisitos conceituais | Seu relato | Todo o conteúdo | Pedagogia (seção 3) e Fase U3. |
| D14 | Os checkpoints são sempre iguais (3 itens Certo/Errado) | **[CONFIRMADO]** O esquema só admite Certo/Errado e no máximo 3. Já existem **8 formatos de exercício** (F1 a F8) em `reviewConfig.ts`, mas só nas **revisões**, não na leitura. | **[CONFIRMADO]** | `modulo.schema.ts`, `src/config/reviewConfig.ts` | Fase U4: levar a variedade para dentro da leitura. |

## 5. TAREFAS DESTA FASE
### Fase 9 (revisada): Consolidação pós-correções
**Ordem:** esta fase vem **depois de U9**. O conteúdo de edital (Fases 0 a 8 do plano anterior) já está implementado; aqui se **fecha e se audita**.

**T9.1 Cobertura por habilidade e por tipo de exercício.** Classificar **todos** os exercícios (checkpoints, itens por seção, revisões Rn, simulados) por **habilidade** (item 14.1.1 do edital: memorizar, compreender, aplicar, analisar, avaliar) e por **tipo** (X1 a X10 e F1 a F8). Meta mínima: **≥ 30%** de aplicação ou análise por módulo; **nenhum tipo** acima de 40% dos exercícios de um módulo. **Validação:** relatório por módulo, gerado por script.

**T9.2 Matriz viva do edital.** Gerar `docs/matriz_edital_cargo5.md` **automaticamente** a partir de `registry.ts` e do banco de itens: tópico do edital (Blocos A a E e Básicos) → submódulo(s) → número de exercícios por tipo → número de itens de simulado → situação. **Validação:** **zero** tópico sem submódulo; **zero** tópico sem ao menos 1 item de simulado; lista dos tópicos com cobertura fraca (< 3 exercícios).

**T9.3 Contagens e rótulos gerados.** Varrer todas as telas e confirmar que **nenhum número exibido está digitado à mão** (submódulos, etapas, cadernos, itens, padrões). **Validação:** teste que compara cada número da interface com o valor calculado a partir dos dados.

**T9.4 Regeneração do dossiê.** Gerar de novo `Heuller_na_Camara_Dossie_Teorico_Completo.md` e `.pdf`, agora com: cartões "Antes de ler", tipos de exercício, selos de domínio e **sem** as expressões "verbatim" e "estatística de banca". **Linha de base anterior:** 13.155 linhas e 281 páginas. **Validação:** sumário e índice clicáveis; nenhuma página em branco; **nenhuma fórmula crua** (`$`, `\Delta`, `\times`).

**T9.5 Verificações finais de conteúdo.** (a) Nenhum `[VERIFICAR]` remanescente em `src/content` (os que restarem vão para uma **lista pendente ao usuário**, **não** para a build publicada); (b) nenhuma NBR sem ano; (c) nenhuma citação literal sem correspondência no acervo (U8.2); (d) fórmulas da discursiva conforme o edital (U8.4).

**T9.6 Relatório de prontidão.** Gerar `docs/prontidao_final.md` com: tópicos do edital mais frágeis, tempo estimado de estudo restante por bloco até **17/01/2027**, e uma **sugestão de calendário** (apenas dias úteis, mais de 3 h líquidas/dia) distribuindo **teoria, revisão e simulado**, com a **rodada cumulativa nas 3 últimas semanas**. **Validação:** o calendário **soma** o tempo disponível sem ultrapassar o teto diário de revisão.


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_fase9_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
