# Relatório de Execução — Missão v2 (Fase 2: W1 e W2)

**Data:** 19/10/2026  
**Candidato:** Richard — Analista Legislativo: Biblioteconomia (Cargo 5, Edital nº 1/2026, Prova: 17/01/2027)  
**Banca:** Cebraspe (Itens C/E com Fator 1:1)  
**Branch:** `ux/plano-v3`  

---

## 1. Resumo Executivo da Fase 2

A **Fase 2** executou com máxima prioridade os dois itens de correção rápida e direta demandados pelo aluno Richard nos pedidos da Missão v2:
- **W1 (Pedido 5):** Correção de questões que já vinham respondidas nos submódulos e na revisão, além do vazamento de gabaritos em formatos interativos.
- **W2 (Pedido 2):** Remoção completa do módulo de Glossário & Dicionário, com arquivamento integral do acervo fora do bundle de produção da aplicação.

Ambas as entregas foram concluídas com sucesso, validadas com testes de regressão específicos e certificadas em suíte de testes (685 testes passando, 80 suítes verdes, TypeScript compilação 100% sem erros, linter limpo e build de produção aprovado no orçamento de pacotes).

---

## 2. Entregas Realizadas

### 2.1 W1 — Correção de Revisões e Questões Pré-Respondidas
*Commit isolado:* `dec5a66` (`fix(review): corrige questoes ja respondidas e vazamento de gabarito (W1)`)

1. **Vazamento de Gabarito em `F5Associacao.tsx`:**
   - As opções da coluna B continham a propriedade canônica `conceitoOriginal` ligada ao objeto, permitindo que ferramentas ou inspeção inferissem o par exato. A estrutura foi refatorada para embaralhar cegamente sem expor metadados de gabarito antes da confirmação do usuário.
2. **Propriedade `forcarRetesteAtivo` em `ItemCE.tsx`:**
   - Adicionada a propriedade `forcarRetesteAtivo`. Em sessões de revisão ativa, treino ou reteste de erros, o componente ignora respostas históricas previamente salvas no store, forçando o estudante a julgar o item novamente em folha limpa.
3. **Limpeza do Estado de Tentativas Pré-Gravadas (`src/domain/migracaoTentativas.ts`):**
   - Implementada migração idempotente que limpa respostas espúrias registradas em módulos nunca iniciados, preservando integralmente o histórico legítimo de estudos do candidato.
4. **Isolamento de Exercícios na Leitura Teórica:**
   - Em `TeoriaPage.tsx` e `ExerciseRenderer.tsx`, os exercícios interativos ao final do submódulo não inicializam mais com estado de acerto/erro herdado de treinos anteriores.
5. **Suíte de Testes:**
   - Criado `src/tests/w1RevisaoQuestoesRespondidas.test.tsx` (4 testes cobrindo julgamento ativo, ausência de gabarito vazado e isolamento de estado).

---

### 2.2 W2 — Remoção e Arquivamento Canônico do Glossário
*Commit em staging para validação:* `refactor(glossario): remove modulo de glossario e arquiva dados (W2)`

1. **Arquivamento Canônico Fora do Bundle (`archive/`):**
   - `archive/glossario-v1.json` (8.15 MB): preservação canônica de todos os 19 termos técnicos do acervo e dos 12.431 verbetes extraídos do *Dicionário de Biblioteconomia e Arquivologia* (Cunha & Cavalcanti, 2008), acompanhados dos índices de ocorrência por submódulo.
   - `archive/baseTermos.ts` e `archive/termosEnriquecimentoFase5.ts`: preservação dos 333 verbetes conceituais do Dicionário Cebraspe (conceito canônico, armadilha Cebraspe, aplicação na Câmara e fontes primárias).
   - `archive/scripts/`: movimentação e preservação dos scripts de extração e cruzamento (`compararAcervos.ts`, `extrairDicionarioCompleto.py`, `gerarIndiceOcorrenciasGlossario.ts`).
2. **Redirecionamento Defensivo de Rotas (Prevenção de 404):**
   - Interceptação de acessos antigos a `#/glossario` ou `#/dicionario` em `src/store/useNavigationStore.ts`, normalizando o redirecionamento imperativo e reativo para `#/painel`.
3. **Desacoplamento e Poda de Código em Runtime:**
   - **Excluídos 10 arquivos e diretórios obsoletos:**
     - `src/pages/GlossarioPage.tsx`
     - `src/components/content-blocks/GlossarioDoModulo.tsx`
     - `src/components/dicionario/` (`GlossarioModal.tsx`, `TextSelectionListener.tsx`)
     - `src/components/glossario/` (`GavetaCurtaDefinicao.tsx`, `VerbeteDetalhesDrawer.tsx`)
     - `src/domain/glossario/` (`destaquesService.tsx`, `glossarioService.ts`, `types.ts`)
     - `src/domain/dicionario/` (`baseTermos.ts`, `dicionarioService.ts`, `termosEnriquecimentoFase5.ts`, `types.ts`)
     - `src/domain/jargonLinter.ts`
     - `src/store/useGlossarioStore.ts`
     - `src/store/useDicionarioStore.ts`
     - `src/content/glossario-tecnico.ts`
     - `src/content/glossario/` (`dicionario.json`, `ocorrencias-termos.json`, `termos-para-submodulos.json`)
   - **Limpeza de Navegação e Layout:**
     - `Sidebar.tsx`: removidos botões de glossário dos modos expandido e colapsado.
     - `AppShell.tsx`: removido atalho de teclado `Alt+G`, listener global de seleção de texto, modal de glossário e botão do rodapé.
     - `UserMenuDropdown.tsx` e `MobileMoreMenu.tsx`: removidos links para glossário.
     - `PainelPage.tsx`: removido atalho de glossário, substituído pelo atalho de alta relevância estratégica **Radar Cebraspe** (`setCurrentRoute('radar')`).
     - `TeoriaPage.tsx`: removidos gaveta de termos, drawer e sumário de glossário do módulo.
     - `CartaoAntesDeLer.tsx`: desacoplado do store de glossário, utilizando estado local simples para conceitos dominados.
     - `ConteudoMarkdown.tsx`: removido o parser de destaques e tooltips intrusivas que causavam poluição visual na leitura.
4. **Tratamento de Menções Textuais na Teoria:**
   - 9 menções textuais em 6 submódulos (`sub-1-6`, `sub-3-4`, `sub-6-1`, `sub-8-3`, `sub-8-5`, `sub-12-4`) foram reescritas com base na terminologia estrita das normas ABNT e doutrina (ex.: *"vocabulário de termos"*, *"lista de termos / vocabulário controlado"*).
   - Zero ocorrências residuais de `glossari` no código de aplicação e nos submódulos teóricos.
5. **Suítes de Testes e Não-Regressão:**
   - Criado `src/tests/w2RemocaoGlossario.test.tsx` (4 testes aprovados: redirecionamento de rota, ausência na Sidebar, ausência no UserMenu, renderização limpa no Markdown).
   - Ajustado `src/tests/rodada5bParte4.test.ts` para validar integridade de acentuação e Suzanne Briet diretamente no arquivo canônico preservado em `archive/`.

---

## 3. Matriz de Verificação de Qualidade e CI

| Verificação | Comando | Status | Observações |
| :--- | :--- | :---: | :--- |
| **Tipagem Estrita** | `npx tsc -b` | **PASSOU (0 erros)** | Zero erros de compilação em 100% do projeto. |
| **Linter de Código** | `npm run lint` | **PASSOU (0 erros)** | 402 arquivos avaliados com 116 regras. |
| **Suíte de Testes** | `npx vitest run --pool=forks` | **PASSOU (685/685)** | 80 arquivos de teste aprovados. |
| **Build de Produção** | `npx vite build` | **PASSOU** | Chunks e PWA gerados com sucesso em 44.6s. |
| **Orçamento de Pacote**| `node scripts/verificarOrcamentoPacote.mjs`| **PASSOU** | Orçamento respeitado em todos os limites. |
| **Varredura `glossari`**| `git grep -i "glossari" -- src/` | **PASSOU** | Restrito apenas a redirecionamento defensivo em `useNavigationStore.ts` e no teste de regressão. |

---

## 4. Próxima Etapa: Fase 3 (W3 e W4)

Com W1 e W2 concluídas e certificadas, a plataforma está pronta para a **Fase 3**:
- **W3 (Auditoria de Cobertura Edital $\times$ Teoria $\times$ Questões):** Mapeamento 1:1 entre cada linha do Edital nº 1/2026, os 75 submódulos teóricos e as questões da plataforma, identificando e sanando lacunas conceituais e temáticas.
- **W4 (Injeção de Questões Reais Cebraspe dos 33 PDFs do Acervo):** Extração, classificação por assunto do edital, higienização dos enunciados e substituição de itens genéricos ou duplicados por questões reais Cebraspe fundamentadas.
