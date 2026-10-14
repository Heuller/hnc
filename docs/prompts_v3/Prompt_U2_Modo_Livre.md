# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE U2 (PLANO v3) — Modo livre permanente e progresso sem trava

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase U2** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Pré-condição: U0 e U1 concluídas. **Esta fase mexe no modelo de progresso: faça o backup lógico (U0.4) antes de qualquer migração e aplique a regra 5.**

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `U2.<n>: <resumo>` (por exemplo `U1.2: instala remark-math nos leitores`).
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
| D4 | Respondeu os 3 checkpoints e o 1.3 não libera: "Responda os 5 itens de verificação pendentes" | O motor soma aos checkpoints **itens escondidos** do "Treino de Recuperação Ativa" (pares de autores e pegadinhas dos Mnemônicos) para chegar a um N mínimo. O esquema limita checkpoints a **3** (`.min(2).max(3)`), então o motor **sempre** completa com itens que o aluno nem vê na leitura. A configuração pede **8** itens (`nMinimoVerificacao: 8`) e 85%. | **[CONFIRMADO]** | `src/domain/progressoEngine.ts` (`obterItensVerificacaoSubmodulo`), `src/domain/portaoSimuladoEngine.ts` (~linha 281), `src/config/jornada.config.ts`, `src/domain/schemas/modulo.schema.ts` | Sua decisão resolve: **remover as travas** (Fase U2). O bug de contagem deixa de bloquear, mas o contador também deve parar de mostrar pendências fantasma. |
| D12 | Contagens que não batem: "59 etapas / 40 submódulos" x "Todos os Submódulos (64)"; "10 cadernos da trilha (M1 a M10)" x lista M1 a M14 | Estruturas diferentes (trilha de 10 módulos x acervo de 14) apresentadas sem explicação | Visto nos prints | Painel, Jornada, Radar, Treinos | Rotular claramente "Trilha principal" x "Acervo" (U6). Com o modo livre, simplificar. |

## 5. TAREFAS DESTA FASE
### Modo livre permanente e modelo de progresso sem trava
- **U2.1 Remover as travas:** deixar `modoLivre` **sempre ativo**; remover `PortaoVerificacaoModal` como bloqueio, `TelaBloqueioModulo`, o texto de bloqueio no simulado e o cadeado da Jornada. Manter os **componentes** como **atividades opcionais** (sem cadeado). **Validação:** nenhuma rota exibe "bloqueado".
- **U2.2 Redefinir "concluído":** submódulo **concluído** = leitura de todas as seções (ou marcação manual) **e** itens da seção respondidos **sem** exigir nota mínima. O **domínio** passa a ser um **selo** com níveis (Em andamento, Consolidado, Dominado), calculado por acerto e retenção, **sem bloqueio**. **Validação:** `derivarProgresso` continua função pura; testes cobrindo os três estados.
- **U2.3 Eliminar pendências fantasma:** `obterItensVerificacaoSubmodulo` não pode mais somar itens dos Mnemônicos à contagem de checkpoints. **Validação:** teste: um submódulo com 3 checkpoints respondidos mostra 3 de 3.
- **U2.4 Config:** em `jornada.config.ts`, remover `simuladoObrigatorioParaAvancar` e `minimoVerificacao` como **gates**; manter os **limiares** só como critérios de **selo**.
- **U2.5 Próxima ação recomendada** continua, com explicação de **por que** ("revisão vencida", "tema novo", "ponto fraco"). **Validação:** sempre há exatamente uma recomendação principal.
- **U2.6 Migração do progresso:** **nenhum progresso se perde**. O que estava "bloqueado" vira "disponível". **Validação:** comparar o estado exportado antes e depois.
- **U2.7 Atualizar a documentação** (`DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, seção 11) e o modal "Como funciona".


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_U2_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
