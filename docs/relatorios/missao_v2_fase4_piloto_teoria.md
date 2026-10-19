# Relatório de Execução — Missão v2 (Fase 4)
**Piloto do Modelo Teórico Dual, Metadados e Aplicação na Vida Real (W5)**

- **Aluno:** Richard
- **Cargo-Alvo:** Analista Legislativo — Biblioteconomia (Cargo 5)
- **Banca Avaliadora:** Cebraspe (Edital nº 1/2026 — Câmara dos Deputados)
- **Data da Prova:** 17/01/2027
- **Data de Congelamento da Plataforma:** 18/11/2026 (60 dias antes da prova)
- **Data da Execução:** 19/10/2026
- **Branch Ativa:** `ux/plano-v3`

---

## 1. Sumário Executivo

A **Fase 4** cumpriu integralmente os objetivos pedagógicos e técnicos do pacote **W5**, atendendo à diretriz de ouro solicitada pelo aluno: **não substituir a teoria em bloco**, mas criar um **dispositivo de alternância (seletor dual)** por módulo/submódulo para que o estudante possa escolher livremente entre a **Teoria Canônica (Doutrina Densa Institucional)** e o **Modo Prático & Didático (Vida Real / Câmara dos Deputados)**, com persistência automática no estado do perfil.

Além disso, foi erradicada a lacuna histórica de metadados teóricos: **100% dos 75 submódulos** agora contam com o cartão `antesDeLer` preenchido com termos conceituais e aplicações na biblioteca da Câmara, e os tempos estimados de estudo foram recalculados dinamicamente com base na contagem real de palavras e checkpoints.

---

## 2. Entregas Realizadas

### 2.1 Dispositivo de Alternância Teórica Dual (W5 / Diretriz do Aluno)
- **Modelagem de Dados e Schemas Zod:**
  - `ModuloFilhoSchema` (`src/domain/schemas/modulo.schema.ts`): adicionado o campo opcional `teoriaDidaticaMarkdown: z.string().optional()`.
  - `UserProgressSchema` (`src/domain/schemas/progress.schema.ts`): adicionado `preferenciaModoTeoria: z.record(z.string(), z.enum(['canonica', 'didatica'])).default({})`.
- **Gerenciamento de Estado (`src/store/useProgressStore.ts`):**
  - Implementadas as ações `setModoTeoria(id: string, modo: 'canonica' | 'didatica')` e `obterModoTeoria(id: string): 'canonica' | 'didatica'`.
  - Persistência local transparente integrada ao middleware do Zustand (`heuller_camara_v2_progress`).
- **Interface Editorial na Página de Leitura (`src/pages/TeoriaPage.tsx`):**
  - Segmented Control responsivo posicionado no topo da seção de fundamentação teórica (`#sec-teoria`):
    - `[📖 Teoria Canônica]` (Doutrina e Bibliografia Especializada para aprofundamento).
    - `[⚡ Modo Prático & Vida Real]` (Didático, enxuto, com casos práticos da Câmara dos Deputados e foco em armadilhas Cebraspe).
  - Badge informativa `[Piloto]` exibida nos submódulos onde a versão prática já está ativa.
  - Alerta amigável e automático caso o aluno selecione o modo didático em um submódulo em expansão futura, garantindo fallback elegante para a teoria canônica sem quebras de navegação.

### 2.2 Preenchimento Universal de `antesDeLer` (De 6 para 75 Submódulos)
- **Diagnóstico Prévio:** 69 das 75 unidades estavam com `antesDeLer` ausente ou vazio.
- **Ação:** Criação do banco canônico `scripts/dados_antes_de_ler.py` e injeção sistemática de **3 a 5 conceitos essenciais** em cada um dos 69 submódulos.
- **Padrão dos Metadados:** Cada termo obedece estritamente ao schema:
  - `termo`: Conceito nuclear indispensável à fluência de leitura.
  - `definicao`: Conceituação rigorosa no padrão Cebraspe.
  - `exemploBiblioteca`: Aplicação concreta e cotidiana na Biblioteca Pedro Aleixo, no CEDI, na Rede Virtual de Bibliotecas (RVBI) ou no Plenário da Câmara.
- **Resultado:** **75 de 75 submódulos (100%)** possuem o cartão de pré-requisitos funcional na UI com os botões interativos *"Já sei"* e *"Reabrir"*.

### 2.3 Recalibração Dinâmica dos Tempos Estimados de Estudo (`tempoEstimadoMinutos`)
- **Problema Anterior:** Tempos estáticos e arbitrários (maioria fixada cegamente em 45 ou 50 min), descolados do tamanho real dos textos.
- **Fórmula Calibrada:**
  $$\text{tempoEstimadoMinutos} = \max\left(5, \operatorname{round}\left(\frac{\text{palavras}}{180}\right) + \text{checkpoints} \times 2\right)$$
  - Considera taxa média de leitura com absorção técnica ($\approx 180\text{ palavras/min}$) somada a 2 minutos por checkpoint Cebraspe resolvido e analisado.
- **Resultado:** Valores realistas distribuídos entre **7 min** (submódulos mais enxutos) e **27 min** (submódulos densos com mais de 3.700 palavras), permitindo que o aluno Richard planeje suas sessões diárias com exatidão.

### 2.4 Piloto da Teoria Didática / Vida Real nos 5 Submódulos Estratégicos
Foram redigidos e injetados textos didáticos completos estruturados em 5 blocos cognitivos de alta eficácia (*Visão Direta em 3 Minutos*, *Vida Real na Câmara*, *Quadro de Contraste*, *Como o Cebraspe Cobra na Prova* e *Micro-Pausa Ativa*):
1. **Submódulo 1.1:** Biblioteconomia, Documentação e Ciência da Informação (A Tríade na rotina da Biblioteca Pedro Aleixo e CEDI).
2. **Submódulo 1.2:** As Cinco Leis de Ranganathan (A 4ª Lei no atendimento a deputados em plenário e a 5ª Lei na expansão da BDCam).
3. **Submódulo 2.1:** Princípios Internacionais de Catalogação (ICP) e AACR2r (Catalogação cooperativa na RVBI e relatórios de CPI).
4. **Submódulo 7.1:** Agentes Físico-Químicos e Hidrólise Ácida (Controle termo-higrométrico e iluminação LED no cofre de obras raras da Câmara).
5. **Submódulo 10.1:** Regimento Interno da Câmara dos Deputados - RICD (O CEDI e a Biblioteca na estrutura regimental, Mesa Diretora e Ordem do Dia).

---

## 3. Matriz de Validação e Testes Automatizados

- **Nova Suíte de Testes da Fase 4:** `src/tests/fase4ModeloTeoricoDual.test.tsx` (6 testes, 100% aprovados):
  1. *Validação de Schemas Zod:* Aceitação de `teoriaDidaticaMarkdown` opcional e `preferenciaModoTeoria` no progresso.
  2. *Gerenciamento de Estado e Persistência:* `setModoTeoria` e `obterModoTeoria` no Zustand.
  3. *Censo de 100% em `antesDeLer`:* Validação programática de que todos os 75 submódulos possuem $\ge 3$ termos com termo, definição e exemplo prático.
  4. *Coerência de `tempoEstimadoMinutos`:* Todos os 75 submódulos com tempo dinâmico entre 5 e 45 min.
  5. *Piloto Didático nos Submódulos Estratégicos:* Presença dos 5 blocos didáticos obrigatórios nos submódulos pilotos (M1, M2, M7, M10).
  6. *Renderização e Interatividade na `TeoriaPage`:* Funcionamento dos botões `btn-modo-canonica` e `btn-modo-didatica`, alteração de estado e renderização condicional do markdown.
- **Lint e Análise Estática:** `npm run lint` aprovado com 0 erros.

---

## 4. Próximos Passos (Transição para a Fase 5)

Com o modelo didático dual validado e aprovado em piloto e os metadados saneados em 100% do curso:
1. **Fase 5 (Expansão e Discursiva):**
   - Expansão gradual do formato didático/vida real para os demais módulos específicos.
   - Módulo preparatório de Prova Discursiva com espelhos Cebraspe estruturados para o Cargo 5.
   - Ajuste final do agendador contínuo de revisões (W6).
