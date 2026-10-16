# Relatório de Execução — Fase U3 (Plano v3)
**Plataforma de Estudos "Heuller na Câmara" (HNC)**  
**Cargo:** Analista Legislativo — Documentação e Informação Legislativa (Cargo 5)  
**Banca:** Cebraspe | **Edital:** nº 1, de 02/10/2026 | **Data da Prova:** 17/01/2027  
**Branch de Trabalho:** `ux/plano-v3`  
**Data:** 16 de outubro de 2026  

---

## 1. Resumo Executivo da Fase U3

A Fase U3 teve como objetivo eliminar as barreiras conceituais e o atrito cognitivo gerado por termos técnicos não explicados no momento da leitura (problema **D13** do diagnóstico pedagógico), implementando uma arquitetura de suporte conceitual em camadas:

1. **Esquemas Rígidos:** Suporte formal a `antesDeLer` no tipo `ModuloFilho` e `secoes[].itens` com validação Zod.
2. **Linter de Jargão com Linha de Base:** Script e suíte de testes que asseguram que termos técnicos essenciais sejam apresentados com definição prévia ou no glossário integrado.
3. **Pipeline de Extração de Dicionário Reproduzível (U3.9):** Extração de **12.431 verbetes** da obra canônica *Dicionário de Biblioteconomia e Arquivologia* (Murilo Bastos da Cunha & Cordélia Robalinho de Oliveira Cavalcanti, 2008, Briquet de Lemos / Thesaurus).
4. **Serviço de Glossário Unificado e Store Zustand (U3.10):** Fusão sem emendas do acervo técnico (19 conceitos prioritários do Edital Cargo 5) e do acervo bibliográfico (12.431 verbetes), com busca indexada e filtros por acervo e inicial A-Z.
5. **Página Dedicada `/glossario` (U3.11):** Interface editorial no estilo "Papel e Tinta", lista virtualizada de altíssimo desempenho (60 fps), busca com destaque e gaveta de detalhes acessível em 1 toque.
6. **Casamento de Termos em Build-Time, Cartão "Antes de Ler" e Gaveta Curta (U3.12 / U3.4 / U3.5):** Destaque sublinhado editorial exclusivamente na primeira ocorrência de cada conceito por submódulo (1.315 ocorrências pré-indexadas sem custo de processamento em runtime), cartão introdutório de pré-requisitos nos submódulos prioritários e gaveta adaptativa com persistência de preferências ("Já sei" / reabertura).
7. **Exemplos Resolvidos com Esmaecimento (U3.6):** Implementação de 3 degraus pedagógicos (Completo -> Parcial com lacuna -> Aplicação autônoma) em SQL, Expressões Regulares, MER/Normalização e APIs REST/JSON. **Validação:** todos os exemplos foram testados contra executores reais (SQLite em memória, motor RegExp e JSON parser) com 100% de paridade com o declarado.
8. **Seções Curtas e Legibilidade Simples (U3.7 / U3.8):** Reestruturação das seções teóricas do acervo para a faixa ideal pedagógica (400 a 700 palavras), títulos que enunciam a conclusão e eliminação de todas as seções > 900 palavras no acervo. Auditoria automatizada atesta média global de **25,4 palavras por frase** (alvo: ≤ 30).

---

## 2. Tarefas Concluídas

| ID | Tarefa | Commit | Arquivos Alterados |
| :--- | :--- | :--- | :--- |
| **U3.1** | Esquema Zod de `antesDeLer` e `secoes[].itens` | `22614f8` | `src/domain/schemas/modulo.schema.ts`, `src/domain/types.ts`, `src/tests/esquemaU3.test.ts` |
| **U3.2** | Linter de Jargão Técnico com Baseline | `e0c68d9` | `src/content/glossario-tecnico.ts`, `src/domain/jargonLinter.ts`, `scripts/gerarJargonBaseline.ts`, `src/content/jargon-baseline.json`, `src/tests/jargonLinter.test.ts` |
| **U3.9** | Pipeline de Extração do Dicionário (Cunha & Cavalcanti) | `8679c59` | `scripts/extrairDicionarioCompleto.py`, `src/content/glossario/dicionario.json`, `src/tests/dicionario.test.ts` |
| **U3.10** | Serviço de Glossário Unificado e Store Zustand | `9db1a3f` | `src/domain/glossario/types.ts`, `src/domain/glossario/glossarioService.ts`, `src/store/useGlossarioStore.ts`, `src/tests/glossarioService.test.ts` |
| **U3.11** | Página `/glossario`, Lista Virtualizada e Gaveta de Detalhes | `6c7d065` | `src/pages/GlossarioPage.tsx`, `src/components/glossario/VerbeteDetalhesDrawer.tsx`, `src/store/useNavigationStore.ts`, `src/App.tsx`, `src/components/layout/Sidebar.tsx`, `src/components/layout/UserMenuDropdown.tsx`, `src/components/layout/MobileMoreMenu.tsx`, `src/tests/glossarioPage.test.tsx` |
| **U3.12**<br>*(U3.4 / U3.5)* | Casamento em Build-time, Cartão "Antes de Ler" e Gaveta Curta Adaptativa | `c6d24bb` | `scripts/gerarIndiceOcorrenciasGlossario.ts`, `src/content/dominio-conhecido.ts`, `src/content/glossario/ocorrencias-termos.json`, `src/content/glossario/termos-para-submodulos.json`, `src/domain/glossario/destaquesService.tsx`, `src/components/content-blocks/CartaoAntesDeLer.tsx`, `src/components/glossario/GavetaCurtaDefinicao.tsx`, `src/components/common/ConteudoMarkdown.tsx`, `src/pages/TeoriaPage.tsx`, submódulos prioritários (`sub-6-6`, `sub-6-2`, `sub-6-4`, `sub-14-2`, `sub-10-1`, `sub-13-1`), `src/tests/destaquesGlossario.test.tsx` |
| **U3.6** | Exemplos Resolvidos com Esmaecimento (SQL, Regex, MER, API) | `071b65c` | `src/content/modules/m6-digital-ia/sub-6-6.ts`, `src/content/modules/m6-digital-ia/sub-6-5.ts`, `scripts/aplicarExemplosResolvidos.ts`, `src/tests/exemplosResolvidosExecucao.test.ts` |
| **U3.7**<br>*(U3.8)* | Seções Curtas (400-700 palavras, títulos com conclusão) e Auditoria de Legibilidade | `ab09ab8`<br>`0c930fe` | `scripts/auditoriaLegibilidadeESecoes.ts`, `scripts/aplicarSecoesCurtas.ts`, `docs/relatorios/auditoria_legibilidade_secoes_u3.md`, `src/tests/auditoriaLegibilidadeESecoes.test.ts`, `sub-4-4.ts`, `sub-5-2.ts`, `sub-5-3.ts`, `sub-9-3.ts`, `sub-14-2.ts`, `sub-14-4.ts`, `src/tests/backupProgresso.test.tsx`, `src/tests/routes.test.tsx` |
| **Validação** | Script de Capturas Mobile e Consolidação da Suíte Completa | `4ca7704` | `scripts/capturarScreenshotsU3.mjs`, `docs/relatorios/screenshots/` |

---

## 3. Tarefas Não Concluídas ou Parciais

*Nenhuma.* Todas as tarefas previstas para a Fase U3 (U3.1 a U3.8, ampliadas pelas tarefas U3.9 a U3.12) foram integralmente concluídas e testadas.

---

## 4. Itens `[VERIFICAR]` Registrados

1. **Decisão D1 — Direitos Autorais do Dicionário de Biblioteconomia e Arquivologia:**
   - *Arquivo:* `src/content/glossario/dicionario.json` (6,7 MB, 12.431 verbetes).
   - *Autoria comprovada na folha de rosto:* Murilo Bastos da Cunha & Cordélia Robalinho de Oliveira Cavalcanti, 2008, Briquet de Lemos / Thesaurus Editora (ISBN 978-85-85637-35-4).
   - *Situação:* Desenvolvido e testado com sucesso localmente. O carregamento é desacoplado via *dynamic import*; caso o arquivo não seja comitado no repositório público ou seja removido, a aplicação entra em fallback elegante sem quebrar o build ou os testes (exibindo os 19 termos técnicos prioritários autorais). **Pendente de decisão formal do usuário sobre inclusão definitiva no repositório remoto**.

---

## 5. Medições Antes e Depois

| Métrica | Linha de Base (Início U3) | Estado Atual (Fim U3) | Delta / Impacto |
| :--- | :--- | :--- | :--- |
| **Suíte de Testes Automatizados** | 535 testes em 51 suítes | **598 testes em 60 suítes** | **+63 testes novos**, 0 regressões |
| **Seções Teóricas > 900 palavras** | 6 seções longas identificadas | **0 seções > 900 palavras** | **100% de conformidade** com o teto estrito |
| **Média de Palavras por Frase** | Não mensurada | **25,4 palavras/frase** | Conforme à meta pedagógica (≤ 30) |
| **Termos com Destaque em Build-Time** | 0 (pesquisa manual no leitor) | **1.315 ocorrências pré-indexadas** | 0 ms de atraso em tempo de execução |
| **Verbetes Disponíveis no Glossário** | 0 termos estruturados | **12.450 verbetes integrados** | 19 termos do Edital + 12.431 do Dicionário |
| **Exemplos Resolvidos com Esmaecimento** | 0 degraus estruturados | **12 exemplos executados em 4 domínios** | SQL, Regex, MER e APIs validados |

---

## 6. Resultado dos Testes e Qualidade

- **`npm test` (Vitest):** ✅ 60 suítes passaram, 598 testes passaram, 0 falhas.
- **`npx tsc -b` (TypeScript 6):** ✅ 0 erros de compilação.
- **`npm run lint` (Oxlint):** ✅ 0 erros (apenas warnings informativos do compilador React em componentes de terceiros).
- **`npm run build` (Vite + Rolldown + Workbox PWA):** ✅ Compilação de produção concluída com sucesso em 40s; chunks divididos dinamicamente (dicionário em chunk assíncrono isolado de 5,6 MB).

---

## 7. Capturas de Tela em Dispositivos Móveis

As capturas de tela foram geradas via Puppeteer nos viewports obrigatórios (360×800 e 412×915):

1. **Página de Glossário Unificado (`/glossario`):**
   - `docs/relatorios/screenshots/u3_glossario_360x800.png`
   - `docs/relatorios/screenshots/u3_glossario_412x915.png`
   - *Descrição:* Exibe a barra de busca rápida, filtros por acervo ("Todos", "Edital Cargo 5", "Dicionário Cunha & Cavalcanti"), contadores de termos e a lista virtualizada com rolagem fluida.

2. **Cartão "Antes de Ler" e Destaques de Termos na Teoria (`sub-6-6`):**
   - `docs/relatorios/screenshots/u3_teoria_sub66_360x800.png`
   - `docs/relatorios/screenshots/u3_teoria_sub66_412x915.png`
   - *Descrição:* Apresenta o Cartão "Antes de Ler" com os 5 conceitos-chave (SQL, API, REST, JSON, Web Scraping) e o sublinhado pontual no primeiro uso dos termos na teoria.

3. **Gaveta Curta de Definição (Bottom Drawer):**
   - `docs/relatorios/screenshots/u3_gaveta_curta_360x800.png`
   - *Descrição:* Ao tocar no termo sublinhado, abre-se a gaveta curta inferior (ocupando ~25% da tela), exibindo a definição em 2 linhas, o exemplo contextual legislativo e o botão de ação "Já sei".

---

## 8. Riscos e Decisões que Dependem do Usuário

1. **Decisão D1 (Repositório do Dicionário):** O usuário deve confirmar se autoriza a manutenção do arquivo `dicionario.json` no repositório Git ou se prefere mantê-lo apenas no ambiente local/distribuição privada. O código foi desenvolvido para ser totalmente resiliente à ausência do arquivo.
2. **Próxima Fase (Fase U4):** Preparação do simulado adaptativo, refinamento das trilhas de revisão espaçada e cadernos de erros.
