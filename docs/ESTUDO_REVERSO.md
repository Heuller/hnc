# Arquitetura e Engenharia de Conteúdo: Estudo Reverso (HNC)

O **Estudo Reverso** é a metodologia pedagógica central da plataforma **Heuller na Câmara (HNC)** para preparação de alta performance ao concurso de Analista Legislativo da Câmara dos Deputados (Cargo 5 — Biblioteconomia, banca Cebraspe, prova em 17/01/2027).

---

## 1. O que é o Estudo Reverso?

Diferente do método passivo tradicional (ler teoria e resolver questões apenas para aferir acertos), o Estudo Reverso inverte a dinâmica cognitiva de resolução:
1. **Pausa de Autoexplicação:** Antes de expor a fundamentação, o candidato é convidado a responder mentalmente qual palavra ou trecho torna a assertiva Certa ou Errada (*efeito da geração e do teste*, Richland et al., 2009; Rowland, 2014).
2. **Trecho Decisório (`gatilho`):** A plataforma destaca exatamente a expressão ou cláusula do item que determina o julgamento, ensinando o candidato a escanear a assertiva com precisão cirúrgica.
3. **Fundamentação Técnica Substantiva (`justificativa`):** Uma explicação dogmática de 2 a 5 frases fundamentada diretamente na teoria do módulo, sem jargões ocos nem modelos genéricos.
4. **Versão Contrastante (`versao_correta` / `versao_errada`):**
   - Para itens **ERRADOS**, exibe a assertiva reescrita de forma a torná-la **CERTA**.
   - Para itens **CERTOS**, exibe a modificação que a banca examinadora faria para torná-la **ERRADA**.
   A comparação direta entre o original e a versão contrastante evidencia o núcleo normativo exigido.
5. **Técnica da Banca (`armadilhaBanca`):** Classificação objetiva da técnica de elaboração de distratores utilizada pelo Cebraspe (`Técnica: <Nome>. <Como a assertiva opera>`), tais como inversão conceitual, restrição indevida, substituição de normas/autores ou paráfrase fidedigna.
6. **Remissão à Teoria:** Atalho direto para o submódulo específico de teoria para aprofundamento imediato da lacuna identificada.

---

## 2. Especificação dos Campos Canônicos

| Campo | Tipo | Obrigatoriedade | Regra de Engenharia |
| :--- | :---: | :---: | :--- |
| `gatilho` | `string` | **Obrigatório** | Substring exata e contígua do `item`, com no máximo 14 palavras. Identifica o ponto de virada decisório da assertiva. |
| `justificativa` | `string` | **Obrigatório** | 220 a 700 caracteres. Inicia com `Gabarito CERTO.` ou `Gabarito ERRADO.`. Proibido uso de modelos genéricos ou ausência de fundamentação. |
| `armadilhaBanca`| `string` | **Obrigatório** | Formato estrito: `Técnica: <Nome Curto>. <Explicação substantiva de 40+ caracteres sobre a mecânica do distrator>`. |
| `versao_correta`| `string` | **Obrigatório (itens E)** | Assertiva original reescrita minimamente para se tornar verdadeira. |
| `versao_errada` | `string` | **Obrigatório (itens C)** | Modificação verossímil da assertiva original para ilustrar como a banca a tornaria falsa. |

---

## 3. Estado Atual de Implantação e Cobertura

- **Data da Medição:** Outubro de 2026.
- **Itens Analisados no Acervo:** 2.080 questões em 19 cadernos oficiais.
- **Cobertura de `gatilho`:** **100,0%** (2.080 de 2.080 questões).
- **Justificativas Fracas/Modelos:** **0** (0,0%).
- **Armadilhas Fracas/Genéricas:** **0** (0,0%).
- **Itens ERRADOS com `versao_correta`:** **100,0%** (1.040 de 1.040 itens).
- **Itens CERTOS com `versao_errada`:** **100,0%** (1.040 de 1.040 itens).

---

## 4. Pipeline de Manutenção

- `scripts/estudoReverso/comum.mjs`: Utilitários centrais de parsing, identificação de modelos e caminhos de arquivos.
- `scripts/estudoReverso/exportarLotes.mjs`: Exportação do acervo em lotes JSON por módulo.
- `scripts/estudoReverso/validarSaida.mjs`: Validador estrito de conformidade sintática e pedagógica.
- `scripts/estudoReverso/aplicarLote.mjs`: Aplicação segura das saídas ao banco de questões sem tocar em gabaritos ou proveniência.
