# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE U7 (PLANO v3) — Desempenho (medir antes de otimizar)

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase U7** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Pré-condição: U0 a U6 concluídas. **Meça antes de otimizar e registre os números.**

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `U7.<n>: <resumo>` (por exemplo `U1.2: instala remark-math nos leitores`).
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
| D5 | Interface "travada" | **[HIPÓTESE]** Três suspeitas, a medir (U7): (a) **3,6 MB de conteúdo** importados de forma eager por `src/content/registry.ts`; (b) o `zustand/persist` regrava **todo** o estado no `localStorage` a cada resposta, e o histórico de tentativas só cresce; (c) bibliotecas pesadas (`mermaid`, `recharts`, `katex`) no carregamento inicial. Além disso, **telas em esqueleto de carregamento** aparecem nos prints de Teoria e Caderno de Erros. | **[HIPÓTESE]** | `src/content/registry.ts`, `src/store/useProgressStore.ts`, `vite.config.ts` (`chunkSizeWarningLimit: 1500`) | Perfilar antes de otimizar (U7). |

## 5. TAREFAS DESTA FASE
### Desempenho (medir antes de otimizar)
- **U7.1 Medição:** Lighthouse (móvel) e perfil do React em **Painel**, **Teoria 1.1**, **Treinos** e **Simulado**; registrar LCP, INP, tamanho de JS inicial. **Validação:** relatório com números.
- **U7.2 Carregar conteúdo sob demanda:** `import()` dinâmico **por módulo/submódulo** em `registry.ts`, mantendo só **metadados** no carregamento inicial. **Validação:** JS inicial reduz; navegação continua offline (PWA).
- **U7.3 Carregar sob demanda** `mermaid`, `recharts` e KaTeX. **Validação:** não aparecem no pacote inicial.
- **U7.4 Gravação do progresso:** **agrupar/atrasar** a gravação (debounce) ou migrar o histórico de tentativas para **IndexedDB**; manter exportação e sincronização. **Validação:** resposta a um item sem atraso perceptível; teste de integridade de dados.
- **U7.5 Memoização** do parse de Markdown por submódulo e **virtualização** de listas longas (Radar, Caderno de Erros). **Validação:** INP dentro de orçamento definido no relatório.


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_U7_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
