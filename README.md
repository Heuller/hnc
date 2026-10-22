# 🏛️ Heuller na Câmara
**Plataforma de Alta Performance para o Concurso da Câmara dos Deputados**  
*Cargo: Analista Legislativo — Área: Bibliotecário | Banca: CEBRASPE (CESPE/UnB)*

[![Deploy with Vercel](https://vercel.com/button)](https://heuller.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tests](https://img.shields.io/badge/Tests-887%20passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

---

## 🎯 Sobre a Plataforma

**Heuller na Câmara** é um ambiente de aprendizagem deliberada e alta densidade técnica desenvolvido especificamente para a preparação ao concurso de **Analista Legislativo (Biblioteconomia)** da **Câmara dos Deputados**, sob as diretrizes rigorosas da banca examinadora **CEBRASPE**.

A plataforma integra teoria canônica, banco integral de questões inéditas, repetição espaçada (algoritmo Leitner), caderno de erros inteligente, avaliador de discursivas com inteligência artificial e simulados adaptativos de fraquezas.

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
| **Suíte de Testes Automatizados** | **887 testes** | 100% aprovados em Vitest (114 arquivos de teste) |
| **Qualidade e Estilo (Oxlint)** | **0 avisos, 0 erros** | 0 erros impeditivos no código-fonte |
| **Cadernos de Simulados Cadastrados** | **20 cadernos** | 2.110 itens em cadernos de prova |
| **Questões nos Submódulos Teóricos** | **69 itens** | Checkpoints e fixação de conteúdo em teoria |
| **Total Global de Questões Cebraspe** | **2.179 itens** | Soma exata de todos os 21 arquivos em `src/content/questions` |
| **Distribuição Global de Gabaritos** | **50,4% Certo** | 1.099 C / 1.080 E (faixa alvo 46–56%) |

#### Rastreabilidade de Proveniência dos Itens
| Tipo de Proveniência | Quantidade de Itens | Percentual | Definição Canônica |
| :--- | :---: | :---: | :--- |
| **Inéditas (`inedita`)** | **1.671** | **76,7%** | Elaboração própria alinhada ao padrão e jurisprudência Cebraspe |
| **Adaptadas (`adaptada`)** | **426** | **19,6%** | Itens de provas anteriores com ajuste factual de assertiva |
| **Reais Confirmadas (`real-confirmada`)** | **49** | **2,2%** | Itens literais de provas anteriores com gabarito oficial e prova identificada |
| **Em Conferência (`em-conferencia`)** | **33** | **1,5%** | Itens de Língua Inglesa isolados para batimento com espelho de prova |
| **SOMA TOTAL DE PROVENIÊNCIA** | **2.179** | **100%** | Validação estrita: soma dos tipos == soma dos arquivos |

#### Distribuição dos Arquivos de Questões Cadastrados
| Banco / Arquivo | Título / Descrição | Total Itens | Gabaritos (C/E) | Proporção Certo |
| :--- | :--- | :---: | :---: | :---: |
| `m1-fundamentos-100q` | M1 - Fundamentos de Biblioteconomia | **100** | 50C / 50E | 50,0% |
| `m10-legislativo-100q` | M10 - Informação Jurídica & CEDI | **100** | 50C / 50E | 50,0% |
| `m10a-legislativo-constituicao-100q` | M10-A - Constituição & CEDI | **100** | 50C / 50E | 50,0% |
| `m10b-regimentos-100q` | M10-B - RICD & Regimento Comum | **100** | 50C / 50E | 50,0% |
| `m11-administrativo-100q` | M11 - Direito Administrativo | **100** | 50C / 50E | 50,0% |
| `m12-ingles-100q` | M12 - Língua Inglesa | **100** | 50C / 50E | 50,0% |
| `m13-portugues-100q` | M13 - Língua Portuguesa & Redação Oficial | **100** | 50C / 50E | 50,0% |
| `m14-tecnologia-dados-100q` | M14 - TI & Ciência de Dados | **100** | 50C / 50E | 50,0% |
| `m2-catalogacao-100q` | M2 - Catalogação & Metadados | **100** | 50C / 50E | 50,0% |
| `m3-classificacao-100q` | M3 - Classificação & Tesauros | **100** | 50C / 50E | 50,0% |
| `m4-recuperacao-100q` | M4 - Recuperação da Informação | **100** | 50C / 50E | 50,0% |
| `m5-gestao-100q` | M5 - Gestão de Unidades & Coleções | **100** | 50C / 50E | 50,0% |
| `m6-digital-ia-100q` | M6 - Bibliotecas Digitais & IA | **100** | 50C / 50E | 50,0% |
| `m7-preservacao-100q` | M7 - Preservação Digital & OAIS | **100** | 50C / 50E | 50,0% |
| `m8-normalizacao-100q` | M8 - Normalização Documentária & ABNT | **100** | 50C / 50E | 50,0% |
| `m9-comunicacao-100q` | M9 - Comunicação Científica & Bibliometria | **100** | 50C / 50E | 50,0% |
| `mega-simulado-camara-120q` | Mega Simulado Câmara 120Q | **120** | 60C / 60E | 50,0% |
| `mini-modulo-orgaos-30q` | Mini 2.5 - Órgãos & Bib. Câmara | **30** | 15C / 15E | 50,0% |
| `questoes-submodulos-ampliados` | Submódulos Teóricos - Fixação | **69** | 44C / 25E | 63,8% |
| `simulado-geral-180q` | Simulado Geral 180Q | **180** | 90C / 90E | 50,0% |
| `simulado-oficial-camara-180q` | Simulado Oficial Câmara 90+90 (180Q) | **180** | 90C / 90E | 50,0% |
| **TOTAL GERAL** | **20 Cadernos + Submódulos** | **2.179** | **1099C / 1080E** | **50,4% Certo (faixa alvo 46–56%)** |
<!-- METRICAS:FIM -->

---

## 🧪 Suíte de Testes Automatizados

A plataforma conta com suíte de testes automatizados executados via Vitest:

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
