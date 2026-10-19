# Registro de Decisões Estratégicas — Fase 1 (MISSÃO v2)
**Plataforma de Estudos: Heuller na Câmara (HNC)**  
**Candidato:** Richard | **Cargo:** Analista Legislativo — Cargo 5 (Biblioteconomia)  
**Banca:** Cebraspe | **Data:** 19/10/2026  
**Status da Fase:** Concluída e Registrada — Pronta para execução da Fase 2 (W1 e W2)

---

## 1. Resumo das Decisões Definidas pelo Usuário

| # | Tópico Decisório | Resposta do Usuário | Implicação Técnica e Pedagógica no HNC |
|---|---|---|---|
| **D1** | **Aproveitamento Atual (65%)** | **Acertos Brutos (`raw_accuracy`)** | Em prova Cebraspe C/E com fator de correção (1 erro anula 1 acerto), 65% de acertos brutos sem marcação em branco resulta em apenas **30% de nota líquida** ($65 - 35 = 30$). A plataforma priorizará o treino de calibragem metacognitiva (certeza vs. dúvida/chute) e abstenção estratégica para proteger o candidato contra a penalização do erro. |
| **D2** | **Vulnerabilidade nos Módulos** | **Todos os módulos** | Todos os módulos (M1 a M14 e M2.5) receberão o tratamento pedagógico completo: ancoragem Cebraspe, erradicação de pegadinhas, densidade de exemplos práticos e questões reais. Nenhum módulo será considerado secundário. |
| **D3** | **Data de Congelamento** | **18/11/2026 (60 dias antes da prova)** | Prazo final para modificações estruturais da plataforma. A partir de 19/11/2026 até o dia da prova (17/01/2027), o sistema entra em modo de estabilidade total: foco exclusivo em simulados, repetição espaçada e treino de discursivas. |
| **D4** | **Escopo da Teoria v2 (W5)** | **Reforma Integral em Todos os Módulos** (em vez de piloto restrito) | O candidato recusou a limitação a dois módulos pilotos e determinou a reestruturação didática e cognitiva de **todos os 75 submódulos** (M1 a M14). O cronograma integrará essa reformulação completa nas Fases 4 e 5. |

---

## 2. Parâmetros de Calibração da Preparação

1. **Meta de Aprovação (W6):**
   - Considerando concurso de alta concorrência para a Câmara dos Deputados (Cargo 5), a nota de corte líquida histórica situa-se tipicamente entre 68% e 76% líquidos dos pontos possíveis.
   - Ponto de partida do Richard: 65% bruto (~30% líquido).
   - Trajetória necessária: elevar a taxa bruta de 65% para $\ge 82\%$ e consolidar a estratégia de deixar em branco as dúvidas reais, atingindo **$\ge 70$ a 75 pontos líquidos** nas 100Q de Conhecimentos Específicos e **$\ge 35$ pontos líquidos** nas 50Q de Básicos.

2. **Transição Imediata para a Fase 2:**
   - **W1:** Correção da persistência em `ItemCE.tsx`, fluxo de autoverificação de confiança em `ExerciseRenderer.tsx` e erradicação do vazamento de gabarito em `F5Associacao.tsx`.
   - **W2:** Remoção e arquivamento completo do Glossário (`archive/glossario-v1.json`), limpando o bundle, schemas e navegação.
