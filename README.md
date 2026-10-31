# 🏛️ Heuller na Câmara
**Plataforma de Alta Performance para o Concurso da Câmara dos Deputados**  
*Cargo: Analista Legislativo — Área: Bibliotecário | Banca: CEBRASPE (CESPE/UnB)*

[![Deploy with Vercel](https://vercel.com/button)](https://heuller.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tests](https://img.shields.io/badge/Tests-990%20passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

---

## 🎯 Sobre a Plataforma

**Heuller na Câmara** é um ambiente de aprendizagem deliberada e alta densidade técnica desenvolvido especificamente para a preparação ao concurso de **Analista Legislativo (Biblioteconomia)** da **Câmara dos Deputados**, sob as diretrizes rigorosas da banca examinadora **CEBRASPE**.

A plataforma integra teoria, banco de questões com proveniência identificada, repetição espaçada (algoritmo Leitner), caderno de erros, avaliador de discursivas com inteligência artificial e simulados adaptativos.

A reforma teórica abrange 75 aulas, 429 blocos e 669 microcheckpoints, com explicações, aplicações, revisão essencial e fontes. [Registro da implementação e limites da conferência](docs/reforma-teoria/FECHAMENTO.md). A revisão individual integral das questões dos simulados é uma etapa posterior.

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

### 5. Estudo local e avaliação disponível
- Teoria e questões usam o conteúdo local da plataforma, conforme a disponibilidade do cache.
- A correção automática de discursivas exige serviço disponível. Na indisponibilidade, o texto permanece no editor e o aluno pode usar a rubrica de autoavaliação; não são geradas notas sintéticas.

### 6. Estudo reverso por questões
- Em Treinos, sessões de até seis itens de um lote de 12 questões autorais revisadas.
- Julgamento, confiança opcional e explicação antes do feedback; passos de resolução, fonte e aplicação em outro cenário depois.
- Sugestões de revisão pelo histórico e exportação das tentativas no backup de progresso.
- [Pesquisa científica, análise de provas e limites da implementação](docs/PESQUISA_APRENDIZAGEM_E_RACIOCINIO_CEBRASPE.md).

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
| **Suíte de Testes Automatizados** | **990 testes** | 100% aprovados em Vitest (126 arquivos de teste) |
| **Qualidade e Estilo (Oxlint)** | **0 avisos, 0 erros** | 0 erros impeditivos no código-fonte |
| **Cadernos de Simulados Cadastrados** | **20 cadernos** | 2.110 itens em cadernos de prova |
| **Fixação no Banco Complementar** | **69 itens** | Arquivo de questões complementares; não inclui os microcheckpoints das aulas |
| **Itens no Banco de Questões** | **2.179 itens** | Soma exata de todos os 21 arquivos em `src/content/questions` |
| **Distribuição Global de Gabaritos** | **48,8% Certo** | 1.063 C / 1.116 E; distribuição observada, sem cota da banca |

#### Rastreabilidade de Proveniência dos Itens
| Tipo de Proveniência | Quantidade de Itens | Percentual | Definição Canônica |
| :--- | :---: | :---: | :--- |
| **Inéditas (`inedita`)** | **1.670** | **76,6%** | Elaboração própria; o rótulo não certifica estilo ou correção conceitual |
| **Adaptadas (`adaptada`)** | **509** | **23,4%** | Adaptações editoriais; a confirmação da prova de origem é indicada separadamente |
| **Reais Confirmadas (`real-confirmada`)** | **0** | **0,0%** | Itens declarados reais no cadastro; a verificação documental de origem é distinta da revisão conceitual |
| **Em Conferência (`em-conferencia`)** | **0** | **0,0%** | Itens de Língua Inglesa isolados para batimento com espelho de prova |
| **SOMA TOTAL DE PROVENIÊNCIA** | **2.179** | **100%** | Validação estrita: soma dos tipos == soma dos arquivos |

#### Distribuição dos Arquivos de Questões Cadastrados
| Banco / Arquivo | Título / Descrição | Total Itens | Gabaritos (C/E) | Proporção Certo |
| :--- | :--- | :---: | :---: | :---: |
| `m1-fundamentos-100q` | M1 - Fundamentos de Biblioteconomia | **100** | 50C / 50E | 50,0% |
| `m10-legislativo-100q` | M10 - Informação Jurídica & CEDI | **100** | 45C / 55E | 45,0% |
| `m10a-legislativo-constituicao-100q` | M10-A - Constituição & CEDI | **100** | 49C / 51E | 49,0% |
| `m10b-regimentos-100q` | M10-B - RICD & Regimento Comum | **100** | 39C / 61E | 39,0% |
| `m11-administrativo-100q` | M11 - Direito Administrativo | **100** | 49C / 51E | 49,0% |
| `m12-ingles-100q` | M12 - Língua Inglesa | **100** | 58C / 42E | 58,0% |
| `m13-portugues-100q` | M13 - Língua Portuguesa & Redação Oficial | **100** | 49C / 51E | 49,0% |
| `m14-tecnologia-dados-100q` | M14 - TI & Ciência de Dados | **100** | 45C / 55E | 45,0% |
| `m2-catalogacao-100q` | M2 - Catalogação & Metadados | **100** | 49C / 51E | 49,0% |
| `m3-classificacao-100q` | M3 - Classificação & Tesauros | **100** | 47C / 53E | 47,0% |
| `m4-recuperacao-100q` | M4 - Recuperação da Informação | **100** | 50C / 50E | 50,0% |
| `m5-gestao-100q` | M5 - Gestão de Unidades & Coleções | **100** | 50C / 50E | 50,0% |
| `m6-digital-ia-100q` | M6 - Bibliotecas Digitais & IA | **100** | 50C / 50E | 50,0% |
| `m7-preservacao-100q` | M7 - Preservação Digital & OAIS | **100** | 46C / 54E | 46,0% |
| `m8-normalizacao-100q` | M8 - Normalização Documentária & ABNT | **100** | 49C / 51E | 49,0% |
| `m9-comunicacao-100q` | M9 - Comunicação Científica & Bibliometria | **100** | 52C / 48E | 52,0% |
| `mega-simulado-camara-120q` | Mega Simulado Câmara 120Q | **120** | 64C / 56E | 53,3% |
| `mini-modulo-orgaos-30q` | Mini 2.5 - Órgãos & Bib. Câmara | **30** | 14C / 16E | 46,7% |
| `questoes-submodulos-ampliados` | Submódulos Teóricos - Fixação | **69** | 42C / 27E | 60,9% |
| `simulado-geral-180q` | Simulado Geral 180Q | **180** | 84C / 96E | 46,7% |
| `simulado-oficial-camara-180q` | Simulado Oficial Câmara 90+90 (180Q) | **180** | 82C / 98E | 45,6% |
| **TOTAL GERAL** | **20 Cadernos + Submódulos** | **2.179** | **1063C / 1116E** | **48,8% Certo; dado descritivo** |
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
