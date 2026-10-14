# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE U6 (PLANO v3) — UI/UX profissional, mobile-first

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase U6** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Pré-condição: U0 a U5 concluídas. **Decisão do usuário: manter a identidade visual "Papel e Tinta" e simplificar. Não propor outra identidade. O usuário estuda principalmente no celular.**

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `U6.<n>: <resumo>` (por exemplo `U1.2: instala remark-math nos leitores`).
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
| D6 | Tabela "Distratores" em celular: "GABARI TO" quebrado, texto apertado, botão amarelo "Mnemônicos" cobrindo o texto | Tabela larga em tela estreita; botão flutuante (FAB) sempre sobre a leitura. | Visto nos prints | Componentes de tabela e Mnemônicos | Tabela vira **cartões empilhados** no celular; Mnemônicos vira **aba/gaveta na barra de ações**, não flutuante. |
| D7 | Cabeçalho desktop com "Heuller na Câmara" quebrado em 3 linhas, menu lotado | Largura insuficiente para logo + 5 itens + glossário + busca + 4 ícones | Visto nos prints | `src/components/layout/Header.tsx` | Menu enxuto (U6). |
| D12 | Contagens que não batem: "59 etapas / 40 submódulos" x "Todos os Submódulos (64)"; "10 cadernos da trilha (M1 a M10)" x lista M1 a M14 | Estruturas diferentes (trilha de 10 módulos x acervo de 14) apresentadas sem explicação | Visto nos prints | Painel, Jornada, Radar, Treinos | Rotular claramente "Trilha principal" x "Acervo" (U6). Com o modo livre, simplificar. |

## 5. TAREFAS DESTA FASE
### UI/UX profissional (mobile-first, mantendo "Papel e Tinta")
- **U6.0 Mobile-first obrigatório (decidido: você estuda no celular):** projetar e testar **primeiro** em 360×800 e 412×915, **depois** em desktop. Regras: corpo de texto **≥ 16 px**; alvos de toque **≥ 44 px**; ações principais ao alcance do **polegar** (parte inferior); **gavetas inferiores** em vez de modais centrais; nenhum elemento fixo cobrindo o texto; **modo escuro** com contraste AA (você usa); rolagem **vertical apenas**. **PWA funcionando offline** para estudar sem sinal (**validar** o *service worker*). **Validação:** capturas em 360×800 e 412×915 de Painel, Teoria, Treinos, Simulado e Discursiva, **sem rolagem horizontal** e **sem sobreposição**.
- **U6.1 Sistema de design:** tokens (cores, tipografia, espaçamento, raio, sombra) em **um** arquivo; escala tipográfica fixa; **3 níveis** de superfície. **Validação:** `DesignSystemPage` atualizada e testada.
- **U6.2 Cabeçalho enxuto** (seção 4). **Validação:** sem quebra de logo de 360 a 1920 px.
- **U6.3 Tela de leitura** com índice lateral (≥1280 px), barra de progresso por seção e **callouts** padronizados. **Validação:** sem sobreposição de elementos fixos ao texto.
- **U6.4 Mnemônicos** como aba/gaveta, **não flutuante**. **Validação:** o botão nunca cobre texto.
- **U6.5 Painel** com um cartão "Hoje" e resumo; **Jornada** livre com selos (sem cadeado).
- **U6.6 Estados de carregamento e erro** padronizados.
- **U6.7 Acessibilidade:** auditoria automatizada (contraste AA em todos os temas, foco, `aria`, alvos de 44 px, movimento reduzido). **Validação:** relatório sem falhas críticas.
- **U6.8 Teste em dispositivos:** 360×800, 375×812, 768×1024, 1440×900. **Validação:** capturas anexadas ao relatório.


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_U6_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
