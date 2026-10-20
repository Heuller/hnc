# 🏛️ Heuller na Câmara
**Plataforma de Alta Performance para o Concurso da Câmara dos Deputados**  
*Cargo: Analista Legislativo — Área: Bibliotecário | Banca: CEBRASPE (CESPE/UnB)*

[![Deploy with Vercel](https://vercel.com/button)](https://heuller.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tests](https://img.shields.io/badge/Tests-750%20passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

---

## 🎯 Sobre a Plataforma

**Heuller na Câmara** é um ambiente de aprendizagem deliberada e alta densidade técnica desenvolvido especificamente para a preparação ao concurso de **Analista Legislativo (Biblioteconomia)** da **Câmara dos Deputados**, sob as diretrizes rigorosas da banca examinadora **CEBRASPE**.

A plataforma integra teoria canônica, banco exaustivo de questões inéditas, repetição espaçada (algoritmo Leitner), caderno de erros inteligente, avaliador de discursivas com inteligência artificial e simulados adaptativos de fraquezas.

---

## ⚡ Principais Capacidades da Plataforma

### 1. Glossário Vivo Cebraspe & Dicionário Técnico Flutuante
- **Chip Flutuante Global:** Destaque qualquer palavra ou expressão em módulos ou simulados para consultar o verbete imediato.
- **Base Cunha & Lemos:** Conceito canônico, pegadinha clássica do Cebraspe, aplicação prática no acervo parlamentar da Câmara e fontes clássicas.
- **Enriquecimento com IA & Meu Baralho:** Fallback inteligente com Gemini (`/api/dictionary`) e salvamento de cartões de vocabulário pessoal.

### 2. Avaliador Cebraspe de Discursivas (com IA)
- **Fórmulas Oficiais Cebraspe (Edital nº 1/2026):**
  - **Questões Discursivas ($Q_1$ e $Q_2$ — até 20 linhas, máx. 15,00 pts cada):**
    $NQ_i = NC_i - 3 \times \frac{NE_i}{TL_i}$
  - **Peça Técnica ($PT$ — até 50 linhas, máx. 30,00 pts):**
    $NPT = NC - 6 \times \frac{NE}{TL}$
  - **Nota Final da Prova Discursiva (máx. 60,00 pts):**
    $NFPD = NQ_1 + NQ_2 + NPT$
- **Auditoria Gramatical por Linha:** Identificação precisa do número da linha, trecho com erro, correção e regra gramatical infringida.
- **Temas Oficiais:** Desbastamento vs. Descarte (Waldomiro Vergueiro), RDA / IFLA LRM, Lei de Acesso à Informação (LAI) e Peça Técnica OAIS (50 linhas).
- **Padrão Ouro:** Sugestão de reescrita técnica para nota máxima.

### 3. Modo Socrático no Caderno de Erros ("Discuta com a Banca")
- **Tribunal Cebraspe:** Para cada questão errada, o candidato pode acionar *"Recorrer / Discutir com a Banca"*.
- **Desconstrução de Falácias:** Parecer técnico fundamentado nos cânones (Suzanne Briet, Paul Otlet, Harold Borko, Waldomiro Vergueiro, Lancaster, etc.).
- **Diálogo Interativo:** Peticione recursos administrativos diretamente ao examinador titular e enfrente o desafio socrático.

### 4. Gerador Inteligente de Simulados Adaptativos de Fraquezas
- **Diagnóstico Cirúrgico:** O motor analisa os erros em micro-checkpoints e simulados para identificar fraquezas por módulo (*Crítica, Alta ou Moderada*).
- **Sala de Prova:** Baterias de 10, 15 ou 20 itens inéditos concentrados em vulnerabilidades, com cronômetro, atalhos de teclado (`C`, `E`, `B`, setas) e pontuação líquida oficial:
  $$\text{Nota Líquida} = \text{Certos} - \text{Errados}$$
- **Sinergia:** Erros no simulado adaptativo podem ser enviados diretamente para o Modo Socrático.

### 5. Arquitetura 100% *Offline-First*
- Todos os recursos funcionam com zero atraso (0ms) mesmo sem internet ou sem chaves de API, através de geradores determinísticos canônicos locais.

---

## 🛠️ Stack Tecnológica

- **Frontend:** React 19, TypeScript estrito, Vite, Tailwind CSS v4, Motion (Framer Motion), Vaul, Radix UI.
- **Estado & Persistência:** Zustand com middleware de persistência local (`localStorage`) e integração Supabase Auth/PostgreSQL.
- **Matemática & Markdown:** KaTeX (`rehype-katex`), `remark-gfm`, `react-markdown`.
- **Backend Serverless:** Vercel Functions (Node.js/TypeScript) com Google Gen AI SDK (Gemini).
- **PWA & Cache:** `vite-plugin-pwa` com precache de assets e fontes tipográficas locais (Inter, Source Serif 4, JetBrains Mono).
- **Qualidade & Testes:** Vitest, Oxlint e TypeScript compiler (métricas dinâmicas abaixo).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 20+ instalado
- npm ou pnpm

### Passos
```bash
# Clone o repositório
git clone https://github.com/Heuller/hnc.git
cd hnc

# Instale as dependências
npm install

# Execute os testes unitários
npm test

# Valide a qualidade do código
npm run lint

# Inicie o servidor de desenvolvimento
npm run dev
```

---

<!-- METRICAS:INICIO -->
### 📊 Métricas Oficiais da Plataforma (Geradas Automaticamente)

| Indicador | Quantidade | Observações |
| :--- | :---: | :--- |
| **Suíte de Testes Automatizados** | **750 testes** | 100% aprovados em Vitest |
| **Arquivos de Teste** | **93 arquivos** | Cobertura de domínio, páginas e regras de banca |
| **Qualidade e Estilo (Oxlint)** | **8 avisos, 0 erros** | 0 erros impeditivos em 420+ arquivos |
| **Bancos de Simulados Oficiais** | **19 cadernos** | Paridade estrita 50/50 em todos os cadernos |
| **Questões de Simulado (C/E)** | **1.930 itens** | 100% calibrados com justificativa e fonte |
| **Questões nos Submódulos Teóricos** | **69 itens** | Checkpoints e fixação de conteúdo |
| **Total Global de Questões Cebraspe** | **1.999 itens** | Base exaustiva para o concurso |

#### Distribuição dos Bancos de Simulados Cadastrados
| Banco / ID | Título Curto | Total Itens | Gabaritos (C/E) | Paridade |
| :--- | :--- | :---: | :---: | :---: |
| `m1-fundamentos` | M1 - Fundamentos | **100** | 50C / 50E | 100% |
| `m2-catalogacao` | M2 - Catalogação | **100** | 50C / 50E | 100% |
| `m3-classificacao` | M3 - Classificação & Tesauros | **100** | 50C / 50E | 100% |
| `m4-recuperacao` | M4 - Recuperação & Fontes | **100** | 50C / 50E | 100% |
| `m5-gestao` | M5 - Gestão de Unidades & Coleções | **100** | 50C / 50E | 100% |
| `m6-digital-ia` | M6 - Repositórios & IA | **100** | 50C / 50E | 100% |
| `m7-preservacao` | M7 - Preservação & OAIS | **100** | 50C / 50E | 100% |
| `m8-normalizacao` | M8 - Normalização & ABNT | **100** | 50C / 50E | 100% |
| `m9-comunicacao` | M9 - Comunicação & Bibliometria | **100** | 50C / 50E | 100% |
| `m10-legislativo` | M10 - Regimento Interno & CEDI | **100** | 50C / 50E | 100% |
| `m11-administrativo` | M11 - Direito Administrativo | **100** | 50C / 50E | 100% |
| `m12-ingles` | M12 - Língua Inglesa | **100** | 50C / 50E | 100% |
| `m13-portugues` | M13 - Língua Portuguesa | **100** | 50C / 50E | 100% |
| `m14-tecnologia-dados` | M14 - TI & Dados | **100** | 50C / 50E | 100% |
| `mega-simulado-camara` | Mega Simulado 120Q | **120** | 60C / 60E | 100% |
| `mini-modulo-orgaos` | Mini 2.5 - Órgãos & Bib. Câmara | **30** | 15C / 15E | 100% |
| `m10a-legislativo-constituicao` | M10-A - Constituição & CEDI | **100** | 50C / 50E | 100% |
| `m10b-regimentos-camara-congresso` | M10-B - RICD & Regimento Comum | **100** | 50C / 50E | 100% |
| `simulado-geral-180q` | Simulado Geral 180Q | **180** | 90C / 90E | 100% |
| **Submódulos Teóricos** | Questões Ampliadas de Fixação | **69** | Variado | Teoria |
| **TOTAL GERAL** | **19 Bancos + Submódulos** | **1.999** | **Equilibrado** | **Auditado** |
<!-- METRICAS:FIM -->

---

## 🧪 Suíte de Testes Automatizados

A plataforma conta com suíte exaustiva de testes automatizados executados via Vitest:

```bash
npm test
```

- `associacao.test.ts`: Associação e pareamento conceitual.
- `learningEngine.test.ts`: Motor de transição pedagógica e pré-requisitos.
- `leitner.test.ts`: Repetição espaçada e caixas de retenção.
- `cadernoErros.test.ts`: Catalogação e diagnóstico de falhas.
- `contentIntegrity.test.ts`: Integridade de todos os 10 módulos de Biblioteconomia.
- `discursiva.test.ts`: Fórmulas oficiais Cebraspe do Edital nº 1/2026 ($NQ_i = NC_i - 3 \times \frac{NE_i}{TL_i}$ para questões e $NPT = NC - 6 \times \frac{NE}{TL}$ para a peça técnica).
- `socratic.test.ts`: Parecer canônico e réplicas da banca Cebraspe.
- `adaptiveQuiz.test.ts`: Diagnóstico de fraquezas e fórmula líquida ($Nota = C - E$).
- `dicionario.test.ts`: Busca sem acentos, base Cunha & Lemos e Meu Baralho.
- `routes.test.tsx`: Roteamento e renderização de todas as páginas da plataforma.

---

## 🌐 Produção e Deploy

- **Deploy Produção:** [https://heuller.vercel.app/](https://heuller.vercel.app/)
- **Controle de Branches:** `master` e `main` sincronizados com Vercel CI/CD automatizado.

---
*Heuller na Câmara — Compromisso com a Aprovação.*
