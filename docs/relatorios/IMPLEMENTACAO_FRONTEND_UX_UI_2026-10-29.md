# Implementação da rodada de front-end, UX e UI

Data: 29/10/2026. Referência anterior: `d792d95`. Branch de trabalho: `feat/frontend-aprendizagem-ux`.

Esta entrega implementa os 13 grupos UX01–UX13 da auditoria de front-end. As modificações preservam o acervo e a regra de pontuação dos cadernos existentes. Não representam uma revisão editorial integral das questões, uma certificação WCAG completa ou uma medida de ganho de aprendizagem.

## Correspondência com a auditoria

| Achado | Implementação |
|---|---|
| UX01 — Diálogos e teclado | `AccessibleModal` usa a primitiva Radix já instalada: portal, nome acessível, foco contido, fundo inerte, Escape e retorno ao acionador. Aplicado à busca, preferências, atalhos, grade móvel, ajuda da Jornada, verificação, revisão diária, adaptativo e folha manuscrita. As preferências da conta reutilizam o mesmo diálogo de leitura. |
| UX02 — Destinos da busca | Edital e seus eixos têm destinos reais. O índice cobre as questões elegíveis de todos os cadernos, sem repetir IDs nem antecipar o gabarito. Abrir uma questão preserva caderno e ID do item; normalização permite buscar sem acentos. |
| UX03 — Tema móvel | Menu móvel e seletor principal usam `useThemeStore`, inclusive o modo automático, persistência e aplicação do tema. |
| UX04 — Filtros do Edital | Contagens derivadas da matriz atual, estado selecionado explícito e eixos com expansão acessível. Isso corrige a interface; não certifica a validade jurídica da matriz. |
| UX05 — Contexto do eixo | “Treinar questões deste eixo” abre sessão própria `treino-eixo-*`, formada apenas por itens elegíveis dos submódulos referenciados no eixo, com IDs deduplicados. Finalização e pontuação consideram o acervo dessa sessão. Sem itens elegíveis, a interface orienta o retorno à teoria. Filtro e eixo aberto são preservados na sessão do navegador. |
| UX06 — Erro escondido na discursiva | Solicitar avaliação abre a aba de resultado da IA e apresenta indisponibilidade e recuperação, inclusive quando a solicitação parte da aba humana. Texto preservado. |
| UX07 — Falso sucesso da cópia | A confirmação só aparece após `writeText` concluir. Falha apresenta prompt selecionável para cópia manual, sem rejeição não tratada. |
| UX08 — Contraste | Tokens semânticos de resultado e alerta, acento mais escuro no tema claro e correção de etiquetas, estados de leitura, cabeçalhos e identificação do mini-módulo. Controle de senha recebe alvo confortável. |
| UX09 — Semântica | Um `main` da aplicação; Teoria e Simulado usam `article`. Hierarquia de títulos corrigida nos elementos detectados e tabelas roláveis recebem foco e nome. Aviso de atualização usa elemento compatível com status. |
| UX10 — Resolver antes de configurar | Catálogo fica recolhido em “Trocar caderno”. Enunciado, modo e progresso ganham prioridade. A troca funciona também após chegar por busca ou eixo. No modo prova, placar, filtros e cores da folha deixam de antecipar acerto/erro; resultados aparecem após finalizar. |
| UX11 — Informação progressiva | Radar com busca, filtros preservados e lotes de resultados, sem a antiga limitação silenciosa a 15 questões. Jornada recolhe módulos distantes; Progresso prioriza dados e backup, com análise detalhada em expansões. Painel começa pela ação de estudo; planejamento e projeções são secundários. Véspera começa em um bloco, mantendo acesso explícito a todos. Discursiva apresenta o editor antes do catálogo no celular. Posição de leitura é retomada na sessão. |
| UX12 — Aviso de versão | Aviso compacto no fluxo da página, sem cobrir ações. Dispensar permanece válido ao navegar. Atualização é adiada durante simulado e na oficina de escrita. A lógica de instalação/caches da PWA não foi reescrita. |
| UX13 — Dados verificáveis | Sem histórico, não aparece retenção pessoal de 83%. Estimativas ficam identificadas como parâmetros do modelo. Ausência de vencimento não equivale a domínio. A nuvem indica pendência, envio, erro e confirmação real do resumo, com proteção contra respostas antigas e troca de conta. Markdown é relatório; a interface descreve exatamente o escopo e as exclusões do JSON. Contagem de itens julgados usa respostas reais, sem multiplicar provas por 100. |

## Decisões e limites

O treino por eixo usa a matriz de submódulos existente e a elegibilidade atual do banco. O registro de cadernos públicos mantém seus IDs e quantidades; os treinos de eixo são resolvidos por destino e possuem sessões independentes. Eles não são provas oficiais adicionais. A dificuldade e a qualidade editorial de todos os itens ainda dependem da revisão de conteúdo da auditoria original.

A navegação expansível usa preferências da sessão separadas por conta. Esse estado não entra nas métricas de aprendizagem. Retomada de posição aguarda a página real substituir o carregamento; destinos diretos de busca têm precedência.

A sincronização instrumentada é o envio parcial já feito a `user_progress`. O indicador não certifica o envio de rascunhos, conceitos, conversas ou sessões em andamento. O backup JSON atual restaura tentativas de itens, checkpoints, leituras concluídas, histórico de simulados e constância; as exclusões estão declaradas na tela. A entrega não deve ser anunciada como solução de todos os achados de persistência da auditoria original.

Os modos de estudo e prova mantêm a organização dos cadernos existentes. O Mega é o percurso de prova com correção ao final; os demais mantêm correção por resposta. A interface informa essa diferença antes do julgamento. O feedback imediato usa as justificativas cadastradas, e os 12 itens revisados da entrega anterior incluem seus passos e fonte. Não houve homologação de todo o banco.

## Verificação e reprodução

- Testes automatizados de domínio e interface, incluindo diálogo, busca, destino da questão, acervo e pontuação de eixo, ausência de retenção inventada, concorrência de sincronização, troca de conta e não antecipação de gabarito na folha de prova.
- Regressões de M13/M14 atualizadas para fechar a introdução modal e expandir o módulo antes de verificar os submódulos. As verificações de conteúdo foram mantidas.
- Roteiros de navegador repetem os 59 cenários locais da auditoria e acrescentam oito cenários de contexto, posição, quantidade carregada, aviso de atualização e fonte ampliada.
- Varredura das 11 áreas em 320, 390, 768 e 1440 px e contraste claro/escuro, com fontes e animações estabilizadas. As medições são por estado; não certificam todas as combinações de conteúdo e dispositivos.
- `npm run verify` reúne lint, suíte, auditoria independente e build com orçamento. A contagem de testes e o resumo são atualizados a partir da execução real.

Os resultados finais, capturas e logs acompanham o pacote de entrega. Não foram usados cookies ou credenciais da conta real na preparação dos cenários locais. Os roteiros impedem que a tela de autenticação seja contada como uma página autenticada do produto.

A validação automatizada não substitui testes assistivos em leitores de tela e dispositivos físicos nem uma avaliação de usabilidade e retenção tardia com alunos. As alterações precisam chegar juntas ao ambiente de homologação para validação da versão publicada, inclusive os ajustes anteriores de cliente e API de discursiva quando ainda não implantados.

## Resultado registrado nesta entrega

- 943 testes aprovados em 121 arquivos na suíte completa; regressões específicas repetidas após os ajustes semânticos finais.
- Lint sem erros nem avisos; TypeScript, auditoria independente e build com orçamento aprovados.
- 67 cenários de interação locais aprovados: os 59 da rodada anterior mais oito de contexto, retomada e organização.
- 44 estados iniciais de rota/largura, sem overflow horizontal no documento, mais quatro estados representativos escuros.
- axe-core 4.10.3: 26 estados iniciais avaliados e 12 estados adicionais com painéis abertos e Caderno de Erros preenchido. O resultado final dos 38 estados não contém violações automáticas. Os retestes da Teoria substituem a medição expandida anterior.
- Os resultados de axe incluem suas verificações inconclusivas: zero violações automáticas nesses estados não é certificação completa de acessibilidade.

O pacote preserva os logs completos, resultados JSON, a matriz de cenários, capturas e meios de importar o commit. Publicação remota e implantação são estados separados da validação local.
