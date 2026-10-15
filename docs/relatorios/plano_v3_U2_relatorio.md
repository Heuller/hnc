# Relatório de Execução — Fase U2 (Plano v3)
**Plataforma de Estudos: "Heuller na Câmara" (HNC)**  
**Cargo:** Analista Legislativo — Documentação e Informação Legislativa (Cargo 5), Câmara dos Deputados  
**Banca:** Cebraspe | **Edital:** nº 1, de 02/10/2026 | **Prova:** 17/01/2027  
**Data:** 15 de outubro de 2026  
**Branch de Trabalho:** `ux/plano-v3` (Origem sincronizada e atualizada: commit `29a35bc`)  

---

## 1. Resumo Executivo da Fase U2

A **Fase U2** do **Plano v3** implementou a transição definitiva para o **Modo Livre Permanente** e o **Modelo de Progresso Sem Travas**, atendendo à decisão soberana do estudante de ter acesso desimpedido a qualquer módulo, submódulo, simulado ou portal de verificação, sem a interferência de bloqueios artificiais ou cadeados pedagógicos rígidos.

Todos os objetivos estabelecidos pelo prompt foram cumpridos rigorosamente:
1. **Remoção Integral de Travas e Bloqueios:** Eliminação do `PortaoVerificacaoModal` como barreira impeditiva, da tela `TelaBloqueioModulo`, de restrições de navegação nos simulados e dos ícones de cadeado na Jornada. Os portais e verificações foram preservados como **atividades opcionais de consolidação**.
2. **Redefinição Pura de "Conclusão":** Um submódulo é considerado concluído quando todas as seções foram lidas e os microcheckpoints foram respondidos, **sem exigir nota de corte para liberar o fluxo**. O aproveitamento qualitativo foi desacoplado da trava e transferido para **Selos de Proficiência/Domínio** (*Em andamento*, *Consolidado* &ge; 85%, *Dominado* &ge; 85% retido após 7 dias).
3. **Extinção de Pendências Fantasma (Bug D4):** A função `obterItensVerificacaoSubmodulo` foi higienizada para contabilizar estritamente os checkpoints canônicos de leitura, eliminando a soma indevida de mnemônicos e pares de autores.
4. **Recomendação Inteligente Determinística com Desempate (U2.5):** O motor de `proximoPasso` passou a prover exatamente uma ação prioritária acompanhada de justificativa pedagógica explícita, resolvendo empates na ordem: `revisao_vencida` > `ponto_fraco` > `tema_novo` > `conclusao`.
5. **Migração Aditiva Sem Perda de Progresso (Versão 3):** O schema Zustand foi elevado para a `versao: 3` via migração não destrutiva, garantindo que nenhum dado histórico (leituras, checkpoints, tentativas Cebraspe e simulados) fosse degradado. Estados anteriormente marcados como "bloqueados" passaram automaticamente para "disponíveis".
6. **Higiene e Governança:** Raiz limpa de relatórios, GitHub Pages verificado como desativado, repositório estritamente privado, e zero alterações enviadas para `main`/`master`.

---

## 2. Tarefas Concluídas

| ID Tarefa | Commit | Arquivos Alterados | Resumo da Implementação |
|---|---|---|---|
| **U2.0** | `36ccc6c` | `relatorio_execucao_hnc.txt`, `docs/relatorios/relatorio_execucao_hnc.txt`, `docs/relatorios/plano_v3_U2_auditoria_inicial.md` | Higiene da raiz (relatório movido para `docs/relatorios/`); verificação de GitHub Pages (desativado/404); verificação de repositório privado; confirmação de linha de base de 535 testes em 51 suítes. |
| **U2.3** | `48c6e9b` | `src/domain/progressoEngine.ts`, `src/tests/rodada5bParte1.test.ts` | Eliminação das pendências fantasma (Bug D4): remoção da injeção de pares de autores e armadilhas em `obterItensVerificacaoSubmodulo`. Criação de teste provando contagem 3 de 3. |
| **U2.4** | `2ac6b02` | `src/config/jornada.config.ts` | Configuração com `modoLivreDefault: true`, `simuladoObrigatorioParaAvancar: false`, `nMinimoVerificacao: 3`, e criação da constante `SELO_CONFIG` com limiares (Consolidado: 85%, Dominado: retenção após 7 dias). |
| **U2.2** | `3a1a86c` | `src/domain/progressoEngine.ts`, `src/tests/rodada5bParte1.test.ts` | Redefinição do conceito de conclusão (`leituraCompleta && todosItensRespondidos` sem exigência de corte). Implementação de `calcularSeloDominio` retornando níveis `em_andamento`, `consolidado` e `dominado`. Derivação de progresso mantida como função pura. |
| **U2.1** | `2ef5262` | `src/domain/learningEngine.ts`, `src/domain/portaoSimuladoEngine.ts`, `src/pages/TeoriaPage.tsx`, `src/pages/SimuladoPage.tsx`, `src/pages/JornadaPage.tsx`, `src/tests/learningEngine.test.ts`, `src/tests/rodada5bParte2.test.ts`, `src/tests/rodada5bReproduction.test.ts` | Remoção de travas de progressão: `isSubmoduleAccessible` retorna sempre `true`; remoção de `TelaBloqueioModulo`; remoção de bloqueio em `SimuladoPage`; remoção de cadeados e tags "Bloqueado" na Jornada. Portais e simulados mantidos como atividades opcionais. |
| **U2.5** | `8fcda79` | `src/domain/jornadaEngine.ts`, `src/pages/PainelPage.tsx`, `src/pages/JornadaPage.tsx`, `src/tests/jornada.test.ts` | Algoritmo determinístico de recomendação inteligente com critério de desempate ordenado (`revisao_vencida` > `ponto_fraco` > `tema_novo` > `conclusao`) e exibição de badges informativas com justificativa na UI. Suíte de jornada ampliada para 21 testes. |
| **U2.6** | `a927928`<br>`3f6966a` | `src/domain/schemas/progress.schema.ts`, `src/store/useProgressStore.ts`, `src/tests/migracaoProgressoV3.test.ts`, `src/tests/backupProgresso.test.tsx` | Migração aditiva para versão 3: preservação integral de campos legados, fixação de `modoLivre: true`, conversão de estados bloqueados em disponíveis. Verificação de segurança de sync do Supabase. |
| **U2.7** | `b31de1f`<br>`cf32124` | `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `src/components/jornada/ComoFuncionaJornadaModal.tsx` | Atualização da Seção 11 das Diretrizes Técnicas e do Modal "Como Funciona a Jornada", explicando o Modo Livre Permanente, a inexistência de cadeados, os Selos de Domínio e a Recomendação Inteligente. |
| **Ajustes Finais** | `29a35bc` | `src/pages/JornadaPage.tsx`, `src/pages/TeoriaPage.tsx`, `src/tests/rodada5bParte1.test.ts`, `src/tests/rodada5bParte2.test.ts` | Limpeza de imports não utilizados gerados após remoção de componentes de bloqueio e refinamento de tipagem TypeScript estrita nos testes de selos. |

---

## 3. Tarefas Não Concluídas ou Parciais

*Nenhuma tarefa ficou pendente ou parcial.* Todas as tarefas de U2.0 a U2.7 foram finalizadas e testadas com 100% de sucesso.

---

## 4. Itens `[VERIFICAR]` Pendentes

| Arquivo | Linha / Contexto | O que falta conferir | Fonte de Verificação |
|---|---|---|---|
| `src/domain/progressoEngine.ts` | L140–L185 (`calcularSeloDominio`) | Na U2, a conclusão e o selo consideram os microcheckpoints do submódulo (máximo 3). O cálculo de retenção espaçada avalia tentativas em contexto `revisao` ou `simulado` &ge; 7 dias. Com a chegada da Fase U3/U4 (onde cada seção terá seus próprios itens analíticos `secoes[].itens`), avaliar a agregação ponderada para selos com maior base amostral. | Fase U3/U4 do Plano v3. |
| `src/domain/learningEngine.ts` | L180–L200 | Mapeamento de `secoes[].itens` ainda não existe fisicamente no schema de módulos nesta fase (Dívida pedagógica A1 registrada para a Fase U3.1). | Fase U3.1 do Plano v3. |

---

## 5. Medições e Desempenho

| Métrica | Antes de U2 (Linha de Base U1) | Após Conclusão de U2 | Variação / Status |
|---|---|---|---|
| **Testes Automatizados (Vitest)** | 535 testes (51 suítes) | **545 testes (52 suítes)** | **+10 testes (+1 nova suíte `migracaoProgressoV3.test.ts`)** |
| **Taxa de Sucesso nos Testes** | 100% aprovados | **100% aprovados** (545/545) | Zero regressões |
| **Checagem de Tipos (`tsc -b`)** | 0 erros | **0 erros** | Tipagem 100% estrita |
| **Linter (`oxlint`)** | 0 erros (33 warnings de estilo) | **0 erros** (32 warnings de estilo) | Limpo e otimizado |
| **Tempo de Build de Produção** | ~11m (Windows / PWA Bundle) | **12m15s** (incluindo suíte completa vitest + tsc + rolldown + PWA workbox) | Estável e dentro do esperado para o ambiente Windows |
| **Bloqueios/Travas em Rota** | 4 barreiras ativas (Teoria, Simulado, Portais, Jornada) | **0 barreiras ativas** (Nenhuma trava) | 100% livre |

---

## 6. Capturas de Tela da Interface

As capturas foram realizadas via automação de navegação nas resoluções mobile-first obrigatórias (360×800 e 412×915) e salvas no diretório de artefatos da sessão:

### Viewport Mobile Compacto (360×800 px)

1. **Painel do Estudante — Próxima Ação Recomendada Sem Travas:**
   ![Painel do Estudante com Recomendação Inteligente (360x800)](C:/Users/bibli/.gemini/antigravity-ide/brain/c087edda-9f95-4e40-95d0-466d2fe762b7/painel_360x800_1792081491050.png)

2. **Jornada de Estudos — Módulos Desbloqueados e Selos de Domínio:**
   ![Jornada de Estudos Livre sem Cadeados (360x800)](C:/Users/bibli/.gemini/antigravity-ide/brain/c087edda-9f95-4e40-95d0-466d2fe762b7/jornada_360x800_1792081647131.png)

3. **Leitor Teórico — Leitura Direta sem Tela de Bloqueio:**
   ![Leitor Teórico Aberto sem Tela de Bloqueio (360x800)](C:/Users/bibli/.gemini/antigravity-ide/brain/c087edda-9f95-4e40-95d0-466d2fe762b7/teoria_360x800_1792081855118.png)

---

### Viewport Mobile Padrão (412×915 px)

4. **Jornada de Estudos em Tela Expandida:**
   ![Jornada de Estudos com Selos e Navegação Irrestrita (412x915)](C:/Users/bibli/.gemini/antigravity-ide/brain/c087edda-9f95-4e40-95d0-466d2fe762b7/jornada_412x915_1792081912914.png)

5. **Painel do Estudante — Card de Ação Prioritária Determinística:**
   ![Painel do Estudante com Ação Recomendada (412x915)](C:/Users/bibli/.gemini/antigravity-ide/brain/c087edda-9f95-4e40-95d0-466d2fe762b7/painel_412x915_1792082012852.png)

---

## 7. Análise de Riscos e Decisões que Dependem do Usuário

1. **Aprovação para Merge em `main` / Publicação na Vercel:**
   - **Regra Respeitada:** O código e os 11 commits da Fase U2 encontram-se **estritamente na branch `ux/plano-v3`**.
   - **Ação Requerida do Usuário:** Avaliar se deseja inspecionar a branch no ambiente de testes antes de autorizar o merge em `master`/`main`.
2. **Avaliação dos Limiares de Selo (Decisão A3):**
   - Os limiares de selo foram estabelecidos de forma configurável em `src/config/jornada.config.ts`:
     - *Em andamento:* leitura ou checkpoints iniciados;
     - *Consolidado:* acerto &ge; 85% nos checkpoints (ex.: 3 de 3);
     - *Dominado:* acerto &ge; 85% + retenção confirmada em revisão espaçada ou simulado realizada após um intervalo &ge; 7 dias.
   - O usuário pode confirmar se concorda com esta régua pedagógica ou se deseja calibrar o intervalo de dias.
3. **Comportamento do Sync Remoto Supabase (Decisão A2):**
   - Foi auditado o `src/services/progressSyncService.ts`. Ele sincroniza apenas coleções de itens (`modulos_lidos`, `checkpoints_respondidos`, `secoes_visualizadas`, `leitner_deck`, `constancia`). Campos estruturais como `versao`, `modoLivre` e status de travas não são baixados nem sobrescritos pelo Supabase. Dessa forma, dispositivos sincronizados permanecem permanentemente em Modo Livre.

---

*Fase U2 concluída com êxito. Aguardando comando do usuário para a próxima etapa.*
