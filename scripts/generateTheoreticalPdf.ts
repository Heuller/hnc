import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { marked } from 'marked';
import katex from 'katex';
import { ALL_COURSE_MODULES } from '../src/content/registry';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../src/domain/discursiva/temasOficiais';
import { MATRIZ_BLOCOS_EDITAL_VESPERA } from '../src/domain/folhaVespera/pegadinhasBlocos';
import { CASOS_INTEGRADORES } from '../src/domain/casosIntegradores/casosIntegradores';
import type { ModuloFilho, MacroModulo } from '../src/domain/types';

// Configura marked para GFM
marked.setOptions({
  gfm: true,
  breaks: false,
});

/**
 * Renderiza expressões matemáticas LaTeX com KaTeX
 */
function renderMath(text: string): string {
  if (!text) return '';
  // Expressões em bloco: $$ ... $$
  let res = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return `$$${math}$$`;
    }
  });
  // Expressões em linha: $ ... $
  res = res.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `$${math}$`;
    }
  });
  return res;
}

/**
 * Renderiza Markdown com suporte a tabelas e KaTeX
 */
function renderMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';
  const comMath = renderMath(markdown);
  return marked.parse(comMath) as string;
}

/**
 * Escapa HTML básico
 */
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const ROTULOS_TIPOS_EXERCICIO: Record<string, string> = {
  X1: 'C/E Tradicional',
  X2: 'Inversão Conceitual',
  X3: 'Cenário Prático',
  X4: 'Completar Lacuna',
  X5: 'Assertiva & Razão',
  X6: 'Estudo de Caso Curto',
  X7: 'Ordenação de Procedimento',
  X8: 'Análise de Erro Guiada',
  X9: 'Comparação de Conceitos',
  X10: 'Julgamento Crítico',
  F1: 'Múltipla Escolha Adaptada',
  F2: 'Gabarito Justificado',
  F3: 'Identificação de Pegadinha',
  F4: 'Interpretação Textual Cebraspe',
  F5: 'Aplicação Normativa Direta',
  F6: 'Tomada de Decisão Técnica',
  F7: 'Recuperação Ativa de Mnemônico',
  F8: 'Síntese Cruzada',
};

function formatarFormulasMarkdown(text: string): string {
  if (!text) return '';
  return text
    .replace(/\\times/g, '×')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\approx/g, '≈')
    .replace(/\\propto/g, '∝')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\cdot/g, '·')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\$([^$]+)\$/g, '$1');
}

async function main() {
  console.log('Iniciando compilação do Dossiê Teórico Completo...');

  // Caminho do CSS do KaTeX
  const katexCssPath = path.resolve('node_modules/katex/dist/katex.min.css');
  const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf-8') : '';

  // 1. Gera o Markdown Unificado
  let mdContent = `# HEULLER NA CÂMARA — DOSSIÊ TEÓRICO COMPLETO
**Concurso:** Câmara dos Deputados · Analista Legislativo: Bibliotecário (Cebraspe)  
**Data Oficial da Prova:** 17 de Janeiro de 2027  
**Compilação Oficial de Teoria, Doutrina, Legislação, Mnemônicos e Exercícios Canônicos**  

---

## SUMÁRIO GERAL DO CURSO

### PARTE I: CONHECIMENTOS ESPECÍFICOS (MÓDULOS M1 A M10 + M2.5)
`;

  ALL_COURSE_MODULES.forEach((macro) => {
    if (macro.id === 'm11') {
      mdContent += `\n### PARTE II: CONHECIMENTOS GERAIS E BÁSICOS (MÓDULOS M11 A M14)\n`;
    }
    mdContent += `\n#### ${macro.codigo}: ${macro.titulo}\n`;
    macro.modulosFilhos.forEach((sub) => {
      const anchor = `submodulo-${sub.numero.replace(/\./g, '')}`;
      mdContent += `- [**Submódulo ${sub.numero}:** ${sub.titulo}](#${anchor})\n`;
    });
  });

  mdContent += `\n### PARTE III: APÊNDICES TEÓRICOS COMPLEMENTARES
- [**Apêndice A:** Temas Discursivos Oficiais com Enunciados e Espelhos Cebraspe (${TEMAS_OFICIAIS_DISCURSIVA.length} Temas Oficiais)](#apendice-a-temas-discursivos-oficiais-e-espelhos-cebraspe)
- [**Apêndice B:** Folha de Véspera Consolidada (Matriz de 5 Blocos do Edital 2026 - 60 Pegadinhas Capitais)](#apendice-b-folha-de-vespera-consolidada--matriz-dos-5-blocos-do-edital-2026)
- [**Apêndice C:** Casos Integradores Intermódulos Cebraspe (${CASOS_INTEGRADORES.length} Casos Transversais · 25 Itens Inéditos C/E Fundamentados)](#apendice-c-casos-integradores-intermodulos)

---\n\n`;

  // 2. Constrói o HTML com estilos editoriais
  let htmlBody = '';

  // CAPA
  htmlBody += `
  <div class="capa-documento">
    <div class="capa-instituicao">CÂMARA DOS DEPUTADOS · BRASÍLIA / DF</div>
    <div class="capa-concurso">CONCURSO PÚBLICO — ANALISTA LEGISLATIVO</div>
    <div class="capa-cargo">ÁREA: BIBLIOTECÁRIO · BANCA CEBRASPE</div>
    
    <div class="capa-divider"></div>
    
    <h1 class="capa-titulo">DOSSIÊ TEÓRICO COMPLETO</h1>
    <h2 class="capa-subtitulo">Compêndio Canônico Integral: Teoria Densa, Doutrina Especializada, Legislação Aplicada, Quadros Comparativos, Mnemônicos e Checkpoints</h2>
    
    <div class="capa-metadata">
      <div><strong>Plataforma:</strong> Heuller na Câmara (HNC) · Edição Canônica 2026/2027</div>
      <div><strong>Data da Prova:</strong> 17 de Janeiro de 2027</div>
      <div><strong>Estrutura:</strong> 15 Macro-Módulos · 74 Submódulos Teóricos · ${BASE_TERMOS_DICIONARIO.length} Verbetes Canônicos · 5 Casos Integradores (25 Itens C/E)</div>
      <div><strong>Fator de Avaliação Cebraspe:</strong> 1 Erro anula 1 Acerto (C − E) · Limiar de Retenção: ≥ 85%</div>
    </div>
  </div>
  <div class="page-break"></div>
  `;

  // SUMÁRIO EXECUTIVO
  htmlBody += `
  <div class="secao-sumario">
    <h2 class="sumario-header">SUMÁRIO GERAL DA OBRA</h2>
    <div class="sumario-bloco">
      <h3>PARTE I — CONHECIMENTOS ESPECÍFICOS</h3>
      <ul class="sumario-lista">
  `;

  ALL_COURSE_MODULES.forEach((macro) => {
    if (macro.id === 'm11') {
      htmlBody += `
        </ul>
      </div>
      <div class="sumario-bloco">
        <h3>PARTE II — CONHECIMENTOS GERAIS E COMPLEMENTARES</h3>
        <ul class="sumario-lista">
      `;
    }

    htmlBody += `
      <li class="sumario-macro">
        <strong>${escapeHtml(macro.codigo)}: ${escapeHtml(macro.titulo)}</strong>
        <span class="sumario-desc">${escapeHtml(macro.subtitulo)}</span>
        <ul class="sumario-sublista">
    `;

    macro.modulosFilhos.forEach((sub) => {
      htmlBody += `
        <li>
          <a href="#sub-${sub.id}" class="sumario-link">
            <span class="sumario-num">${escapeHtml(sub.numero)}</span>
            <span class="sumario-subtitulo">${escapeHtml(sub.titulo)}</span>
          </a>
        </li>
      `;
    });

    htmlBody += `</ul></li>`;
  });

  htmlBody += `
      </ul>
    </div>
    <div class="sumario-bloco">
      <h3>PARTE III — APÊNDICES TEÓRICOS COMPLEMENTARES</h3>
      <ul class="sumario-lista">
        <li><a href="#apendice-a" class="sumario-link"><strong>Apêndice A:</strong> Temas Discursivos Oficiais, Enunciados e Espelhos Cebraspe</a></li>
        <li><a href="#apendice-b" class="sumario-link"><strong>Apêndice B:</strong> Dicionário Técnico Canônico Cebraspe (${BASE_TERMOS_DICIONARIO.length} Verbetes)</a></li>
        <li><a href="#apendice-c" class="sumario-link"><strong>Apêndice C:</strong> Folha de Véspera Consolidada (Matriz de Síntese 48h)</a></li>
        <li><a href="#apendice-d" class="sumario-link"><strong>Apêndice D:</strong> Casos Integradores Intermódulos Cebraspe (5 Casos Transversais · 25 Itens C/E)</a></li>
      </ul>
    </div>
  </div>
  <div class="page-break"></div>
  `;

  // CONTEÚDO DOS MÓDULOS E SUBMÓDULOS
  for (let mIdx = 0; mIdx < ALL_COURSE_MODULES.length; mIdx++) {
    const macro = ALL_COURSE_MODULES[mIdx];
    const isParteGeral = macro.id === 'm11';

    if (isParteGeral) {
      htmlBody += `
      <div class="divisor-parte">
        <div class="divisor-sub">TRILHA COMPLEMENTAR</div>
        <h1 class="divisor-titulo">PARTE II: CONHECIMENTOS GERAIS E BÁSICOS</h1>
        <p class="divisor-desc">Direito Administrativo, Língua Inglesa Instrumental, Língua Portuguesa e Tecnologia da Informação & Dados aplicados ao processo legislativo da Câmara dos Deputados.</p>
      </div>
      <div class="page-break"></div>
      `;
    }

    // Header do Macro-Módulo
    htmlBody += `
    <div class="macro-modulo-header">
      <div class="macro-tag">${escapeHtml(macro.codigo)} · ${macro.trilha === 'complementar' ? 'CONHECIMENTOS GERAIS' : 'CONHECIMENTOS ESPECÍFICOS'}</div>
      <h1 class="macro-titulo">${escapeHtml(macro.titulo)}</h1>
      <h2 class="macro-subtitulo">${escapeHtml(macro.subtitulo)}</h2>
      <div class="macro-descricao">${escapeHtml(macro.descricao)}</div>
    </div>
    `;

    mdContent += `\n# =====================================================================\n`;
    mdContent += `# ${macro.codigo}: ${macro.titulo.toUpperCase()}\n`;
    mdContent += `*${macro.subtitulo}*\n\n`;
    mdContent += `${macro.descricao}\n\n`;

    // Submódulos do Macro
    for (let sIdx = 0; sIdx < macro.modulosFilhos.length; sIdx++) {
      const sub = macro.modulosFilhos[sIdx];
      const anchorSub = `submodulo-${sub.numero.replace(/\./g, '')}`;

      mdContent += `\n---------------------------------------------------------------------\n`;
      mdContent += `<a id="${anchorSub}"></a>\n`;
      mdContent += `## SUBMÓDULO ${sub.numero}: ${sub.titulo}\n`;
      mdContent += `**Tempo Estimado:** ${sub.tempoEstimadoMinutos} minutos | **Selo de Domínio:** Cebraspe Alto Impacto (Retenção ≥ 85%)\n`;
      mdContent += `**Descrição:** ${sub.descricaoCurta}\n\n`;

      htmlBody += `
      <div class="submodulo-bloco" id="sub-${sub.id}">
        <div class="submodulo-header">
          <div class="submodulo-badge">
            SUBMÓDULO ${escapeHtml(sub.numero)} · ${sub.tempoEstimadoMinutos} MIN
            <span class="selo-dominio">Selo de Domínio Cebraspe · ≥ 85%</span>
          </div>
          <h2 class="submodulo-titulo">${escapeHtml(sub.titulo)}</h2>
          <p class="submodulo-descricao">${escapeHtml(sub.descricaoCurta)}</p>
        </div>
      `;

      // 0. Cartão Antes de Ler (Pré-requisitos e Vocabulário Essencial)
      if (sub.antesDeLer && sub.antesDeLer.length > 0) {
        mdContent += `### 💡 ANTES DE LER: VOCABULÁRIO ESSENCIAL\n\n`;
        mdContent += `| Conceito / Termo | Definição Canônica | Exemplo na Câmara / Aplicação Prática |\n`;
        mdContent += `| :--- | :--- | :--- |\n`;
        sub.antesDeLer.forEach((item: any) => {
          const def = (item.definicao || item.significado || '').replace(/\n+/g, ' ');
          const ex = (item.exemploBiblioteca || item.ondeApareceNaCamara || item.porQueImporta || '').replace(/\n+/g, ' ');
          mdContent += `| **${item.termo}** | ${def} | ${ex} |\n`;
        });
        mdContent += `\n`;

        htmlBody += `
        <div class="box-antes-de-ler">
          <div class="box-label-antes-de-ler">💡 ANTES DE LER: VOCABULÁRIO ESSENCIAL & PRÉ-REQUISITOS CONCEITUAIS</div>
          <div class="grid-antes-de-ler">
            ${sub.antesDeLer
              .map(
                (item: any) => {
                  const def = item.definicao || item.significado || '';
                  const ex = item.exemploBiblioteca || item.ondeApareceNaCamara || item.porQueImporta || '';
                  return `
              <div class="item-antes-de-ler">
                <div class="item-antes-termo">${escapeHtml(item.termo)}</div>
                <div class="item-antes-significado"><strong>Conceito:</strong> ${escapeHtml(def)}</div>
                ${ex ? `<div class="item-antes-camara">🏛️ <strong>Na Câmara / Biblioteca Pedro Aleixo:</strong> ${escapeHtml(ex)}</div>` : ''}
              </div>
            `;
                }
              )
              .join('')}
          </div>
        </div>
        `;
      }

      // 1. Autores Canônicos
      if (sub.autoresChave && sub.autoresChave.length > 0) {
        mdContent += `### AUTORES CANÔNICOS & REFERÊNCIAS ESSENCIAIS\n`;
        sub.autoresChave.forEach((aut) => {
          mdContent += `- ${aut}\n`;
        });
        mdContent += `\n`;

        htmlBody += `
        <div class="box-autores">
          <div class="box-label">AUTORES CANÔNICOS & REFERÊNCIAS ESSENCIAIS</div>
          <ul class="lista-autores">
            ${sub.autoresChave.map((aut) => `<li>${escapeHtml(aut)}</li>`).join('')}
          </ul>
        </div>
        `;
      }

      // 2. Alertas Oficiais da Banca Cebraspe
      if (sub.alertasCebraspe && sub.alertasCebraspe.length > 0) {
        mdContent += `### ALERTAS E ARMADILHAS DA BANCA CEBRASPE\n`;
        sub.alertasCebraspe.forEach((alerta) => {
          mdContent += `> ⚠️ **Alerta:** ${alerta}\n\n`;
        });

        htmlBody += `
        <div class="box-alertas">
          <div class="box-label-alerta">⚠️ ALERTAS E ARMADILHAS CRÍTICAS DA BANCA CEBRASPE</div>
          <div class="lista-alertas">
            ${sub.alertasCebraspe
              .map(
                (alerta) => `
              <div class="item-alerta">
                <span class="alerta-marcador">⚡</span>
                <span class="alerta-texto">${escapeHtml(alerta)}</span>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
        `;
      }

      // 3. Quadro Comparativo
      if (
        sub.quadroComparativo &&
        sub.quadroComparativo.linhas &&
        sub.quadroComparativo.linhas.length > 0
      ) {
        const qc = sub.quadroComparativo;
        mdContent += `### QUADRO COMPARATIVO: ${qc.titulo}\n\n`;
        mdContent += `| ${qc.colunas.join(' | ')} |\n`;
        mdContent += `| ${qc.colunas.map(() => '---').join(' | ')} |\n`;
        qc.linhas.forEach((linha) => {
          mdContent += `| ${linha.join(' | ')} |\n`;
        });
        mdContent += `\n`;

        htmlBody += `
        <div class="box-quadro">
          <div class="box-label-quadro">📊 QUADRO COMPARATIVO CANÔNICO: ${escapeHtml(qc.titulo)}</div>
          <table class="tabela-quadro">
            <thead>
              <tr>
                ${qc.colunas.map((col) => `<th>${escapeHtml(col)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${qc.linhas
                .map(
                  (linha) => `
                <tr>
                  ${linha.map((cel) => `<td>${escapeHtml(cel)}</td>`).join('')}
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </div>
        `;
      }

      // 4. Teoria Densa Completa (Texto Integral)
      mdContent += `### TEORIA DENSA E DOUTRINA INTEGRAL\n\n`;
      mdContent += `${sub.teoriaDensaMarkdown}\n\n`;

      const teoriaHtml = renderMarkdownToHtml(sub.teoriaDensaMarkdown || '');

      htmlBody += `
      <div class="teoria-conteudo">
        ${teoriaHtml}
      </div>
      `;

      // 5. Mnemônicos e Doutrina Rápida
      if (sub.mnemonicos) {
        const mn = sub.mnemonicos;
        let temMnemonico = false;

        let mnemonicoHtml = `
        <div class="box-mnemonicos">
          <div class="box-label-mnemonico">🧠 MNEMÔNICOS, DOUTRINA RÁPIDA E PEGADINHAS DE FIXAÇÃO</div>
        `;

        // A. Linha do Tempo
        if (mn.timeline && mn.timeline.length > 0) {
          temMnemonico = true;
          mdContent += `#### Linha do Tempo e Marcos Históricos\n`;
          mn.timeline.forEach((t) => {
            mdContent += `- **${t.periodo}** (${t.disciplina}): ${t.focoPrincipal} [Figura-Chave: ${t.figuraChave}]\n`;
          });
          mdContent += `\n`;

          mnemonicoHtml += `
          <div class="mn-secao">
            <h4 class="mn-titulo">Linha do Tempo e Marcos Históricos</h4>
            <table class="tabela-timeline">
              <thead>
                <tr>
                  <th>Período</th>
                  <th>Disciplina / Marco</th>
                  <th>Foco Principal</th>
                  <th>Figura-Chave</th>
                </tr>
              </thead>
              <tbody>
                ${mn.timeline
                  .map(
                    (t) => `
                  <tr>
                    <td><strong>${escapeHtml(t.periodo)}</strong></td>
                    <td>${escapeHtml(t.disciplina)}</td>
                    <td>${escapeHtml(t.focoPrincipal)}</td>
                    <td><em>${escapeHtml(t.figuraChave)}</em></td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
          `;
        }

        // B. Quem é Quem (Autores)
        if (mn.autores && mn.autores.length > 0) {
          temMnemonico = true;
          mdContent += `#### "Quem é Quem" — Cartões de Autores Canônicos\n`;
          mn.autores.forEach((a) => {
            mdContent += `- **${a.nome}** (${a.ano}): Obra: *${a.obraPrincipal}* | Ideia-Chave: ${a.ideiaChave} | ⚠️ Pegadinha: ${a.chipPegadinha}\n`;
          });
          mdContent += `\n`;

          mnemonicoHtml += `
          <div class="mn-secao">
            <h4 class="mn-titulo">"Quem é Quem" — Doutrinadores e Autores Canônicos</h4>
            <div class="grid-autores-cards">
              ${mn.autores
                .map(
                  (a) => `
                <div class="card-autor">
                  <div class="card-autor-header">
                    <strong>${escapeHtml(a.nome)}</strong> <span class="card-autor-ano">(${escapeHtml(String(a.ano))})</span>
                  </div>
                  <div class="card-autor-obra"><strong>Obra Principal:</strong> <em>${escapeHtml(a.obraPrincipal)}</em></div>
                  <div class="card-autor-ideia"><strong>Ideia-Chave:</strong> ${escapeHtml(a.ideiaChave)}</div>
                  <div class="card-autor-chip">⚠️ <strong>Pegadinha Cebraspe:</strong> ${escapeHtml(a.chipPegadinha)}</div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
          `;
        }

        // C. Pegadinhas da Banca
        if (mn.pegadinhas && mn.pegadinhas.length > 0) {
          temMnemonico = true;
          mdContent += `#### Pegadinhas Típicas da Banca Cebraspe\n`;
          mn.pegadinhas.forEach((p, pIdx) => {
            mdContent += `**Afirmação ${pIdx + 1} [${p.gabarito}]:** "${p.afirmacao}"\n`;
            mdContent += `*Por que:* ${p.porQue}\n\n`;
          });

          mnemonicoHtml += `
          <div class="mn-secao">
            <h4 class="mn-titulo">Pegadinhas Típicas da Banca Cebraspe (Certo / Errado)</h4>
            <div class="lista-pegadinhas">
              ${mn.pegadinhas
                .map(
                  (p, pIdx) => `
                <div class="card-pegadinha">
                  <div class="pegadinha-header">
                    <span class="pegadinha-num">Afirmação ${pIdx + 1}</span>
                    <span class="badge-gabarito ${p.gabarito === 'C' ? 'gabarito-certo' : 'gabarito-errado'}">${p.gabarito === 'C' ? 'GABARITO: CERTO' : 'GABARITO: ERRADO'}</span>
                  </div>
                  <div class="pegadinha-texto">"${escapeHtml(p.afirmacao)}"</div>
                  <div class="pegadinha-porque"><strong>Fundamentação / Por que:</strong> ${escapeHtml(p.porQue)}</div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
          `;
        }

        mnemonicoHtml += `</div>`;
        if (temMnemonico) {
          htmlBody += mnemonicoHtml;
        }
      }

      // 6. Checkpoints de Fixação
      if (sub.checkpoints && sub.checkpoints.length > 0) {
        mdContent += `### CHECKPOINTS DE FIXAÇÃO CANÔNICOS\n\n`;
        sub.checkpoints.forEach((cp, cpIdx) => {
          const tipoCod = cp.tipo || 'X1';
          const tipoNome = ROTULOS_TIPOS_EXERCICIO[tipoCod] || 'C/E Tradicional';
          mdContent += `#### Checkpoint ${cpIdx + 1} [Formato ${tipoCod}: ${tipoNome}] (${cp.gabarito === 'C' ? 'CERTO' : 'ERRADO'})\n`;
          mdContent += `**Contexto/Pergunta:** ${cp.pergunta}\n\n`;
          mdContent += `**Assertiva:** "${cp.item}"\n\n`;
          mdContent += `**Gabarito Oficial:** **${cp.gabarito === 'C' ? 'CERTO' : 'ERRADO'}**\n\n`;
          mdContent += `**Justificativa Canônica:** ${cp.justificativa}\n\n`;
          if (cp.versao_correta) {
            mdContent += `**Versão Correta:** ${cp.versao_correta}\n\n`;
          }
        });

        htmlBody += `
        <div class="box-checkpoints">
          <div class="box-label-checkpoint">🎯 CHECKPOINTS DE FIXAÇÃO CANÔNICOS (${sub.checkpoints.length} ITENS CEBRASPE)</div>
          ${sub.checkpoints
            .map(
              (cp, cpIdx) => {
                const tipoCod = cp.tipo || 'X1';
                const tipoNome = ROTULOS_TIPOS_EXERCICIO[tipoCod] || 'C/E Tradicional';
                return `
            <div class="item-checkpoint">
              <div class="cp-header">
                <span class="cp-badge">Item ${cpIdx + 1}</span>
                <span class="cp-tipo-badge">${escapeHtml(tipoCod)} · ${escapeHtml(tipoNome)}</span>
                <span class="badge-gabarito ${cp.gabarito === 'C' ? 'gabarito-certo' : 'gabarito-errado'}">${cp.gabarito === 'C' ? 'CERTO' : 'ERRADO'}</span>
              </div>
              <div class="cp-pergunta">${escapeHtml(cp.pergunta)}</div>
              <div class="cp-assertiva">"${escapeHtml(cp.item)}"</div>
              <div class="cp-justificativa"><strong>Justificativa Oficial Cebraspe:</strong> ${escapeHtml(cp.justificativa)}</div>
              ${cp.versao_correta ? `<div class="cp-correta"><strong>Versão Correta da Norma:</strong> ${escapeHtml(cp.versao_correta)}</div>` : ''}
            </div>
          `;
              }
            )
            .join('')}
        </div>
        `;
      }

      htmlBody += `</div>`; // fecha submodulo-bloco
      htmlBody += `<div class="submodulo-divisor"></div>`;
    }

    htmlBody += `<div class="page-break"></div>`;
  }

  // APÊNDICE A: DISCURSIVAS
  mdContent += `\n# =====================================================================\n`;
  mdContent += `<a id="apendice-a-temas-discursivos-oficiais-e-espelhos-cebraspe"></a>\n`;
  mdContent += `# APÊNDICE A: TEMAS DISCURSIVOS OFICIAIS E ESPELHOS CEBRASPE\n\n`;
  mdContent += `### CRITÉRIOS OFICIAIS DE CORREÇÃO DISCURSIVA (EDITAL Nº 1/2026, ITENS 9.8.4 E 9.8.5)\n\n`;
  mdContent += `- **2 Questões Discursivas (NQ):** Até 20 linhas cada (valor 15,00 pts cada). Fórmula oficial: **NQ_i = NC_i − 3 × (NE_i / TL_i)**\n`;
  mdContent += `- **1 Peça Técnica (NPT):** Até 50 linhas (valor 30,00 pts). Fórmula oficial: **NPT = NC − 6 × (NE / TL)**\n`;
  mdContent += `- **Nota Final da Prova Discursiva (NFPD):** NFPD = NQ_1 + NQ_2 + NPT (máximo 60,00 pontos; mínimo de aprovação: 30,00 pontos no conjunto e > 0 em cada parte).\n\n`;
  mdContent += `---\n\n`;

  htmlBody += `
  <div class="divisor-parte" id="apendice-a">
    <div class="divisor-sub">APÊNDICE METODOLÓGICO</div>
    <h1 class="divisor-titulo">APÊNDICE A: TEMAS DISCURSIVOS OFICIAIS</h1>
    <p class="divisor-desc">Enunciados discursivos padrão Cebraspe (Câmara dos Deputados), padrões preliminares de resposta e espelhos analíticos de avaliação por quesito.</p>
  </div>
  <div class="page-break"></div>

  <div class="box-alertas" style="margin-bottom: 25px;">
    <div class="box-label-alerta">FÓRMULAS OFICIAIS DE AVALIAÇÃO DA DISCURSIVA (EDITAL Nº 1/2026, ITENS 9.8.4 E 9.8.5)</div>
    <div class="lista-alertas">
      <div class="item-alerta">
        <span class="alerta-marcador">📐</span>
        <span><strong>Questões Discursivas (até 20L, 15 pts cada):</strong> <em>NQ<sub>i</sub> = NC<sub>i</sub> − 3 × (NE<sub>i</sub> / TL<sub>i</sub>)</em>. Onde NC é a nota de conteúdo, NE é o número de erros gramaticais e TL é o total de linhas.</span>
      </div>
      <div class="item-alerta">
        <span class="alerta-marcador">📐</span>
        <span><strong>Peça Técnica (até 50L, 30 pts):</strong> <em>NPT = NC − 6 × (NE / TL)</em>. Onde NC é a nota de conteúdo da peça técnica, NE são os erros de grafia/morfossintaxe e TL as linhas efetivamente produzidas.</span>
      </div>
      <div class="item-alerta">
        <span class="alerta-marcador">🏛️</span>
        <span><strong>Nota Final (NFPD):</strong> <em>NFPD = NQ<sub>1</sub> + NQ<sub>2</sub> + NPT</em> (máximo 60,00 pts; exigência mínima cumulativa de 30,00 pts totais e nota estritamente positiva em cada prova).</span>
      </div>
    </div>
  </div>
  `;

  TEMAS_OFICIAIS_DISCURSIVA.forEach((tema, tIdx) => {
    mdContent += `## TEMA ${tIdx + 1}: ${tema.titulo.toUpperCase()} (${tema.limiteLinhas} LINHAS)\n\n`;
    mdContent += `**Enunciado Oficial:**\n${tema.enunciado}\n\n`;
    mdContent += `**Padrão Preliminar de Resposta (Espelho da Banca):**\n${tema.padraoRespostaPreliminar}\n\n`;
    mdContent += `**Critérios Objetivos de Pontuação:**\n`;
    tema.criteriosPontuacao.forEach((crit) => {
      mdContent += `- **${crit.item}** (Valor: ${crit.pontuacaoMaxima} pts): ${crit.descricaoEsperada}\n`;
    });
    mdContent += `\n---\n\n`;

    htmlBody += `
    <div class="tema-discursiva-card">
      <div class="discursiva-header">
        <span class="discursiva-badge">DISCURSIVA CEBRASPE · LIMITE: ${tema.limiteLinhas} LINHAS</span>
        <h2 class="discursiva-titulo">Tema ${tIdx + 1}: ${escapeHtml(tema.titulo)}</h2>
      </div>
      
      <div class="discursiva-bloco">
        <h3>Enunciado Oficial da Prova</h3>
        <p class="discursiva-enunciado">${escapeHtml(tema.enunciado)}</p>
      </div>

      <div class="discursiva-bloco">
        <h3>Padrão Preliminar de Resposta (Espelho Oficial Cebraspe)</h3>
        <p class="discursiva-padrao">${escapeHtml(tema.padraoRespostaPreliminar)}</p>
      </div>

      <div class="discursiva-bloco">
        <h3>Grade de Quesitos e Pontuação</h3>
        <table class="tabela-quesitos">
          <thead>
            <tr>
              <th>Quesito / Item de Conteúdo</th>
              <th style="width: 100px;">Nota Máx.</th>
              <th>Descrição Esperada do Conhecimento</th>
            </tr>
          </thead>
          <tbody>
            ${tema.criteriosPontuacao
              .map(
                (crit) => `
              <tr>
                <td><strong>${escapeHtml(crit.item)}</strong></td>
                <td style="text-align: center; font-family: monospace; font-weight: bold;">${crit.pontuacaoMaxima.toFixed(1)} pts</td>
                <td>${escapeHtml(crit.descricaoEsperada)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="submodulo-divisor"></div>
    `;
  });

  htmlBody += `<div class="page-break"></div>`;

  // APÊNDICE B: FOLHA DE VÉSPERA
  mdContent += `\n# =====================================================================\n`;
  mdContent += `<a id="apendice-b-folha-de-vespera-consolidada--matriz-dos-5-blocos-do-edital-2026"></a>\n`;
  mdContent += `# APÊNDICE B: FOLHA DE VÉSPERA CONSOLIDADA — MATRIZ DOS 5 BLOCOS DO EDITAL 2026\n\n`;
  mdContent += `Matriz mnemônica de choque para as 48 horas antecedentes à prova do Cebraspe (60 Pegadinhas Capitais distribuidas pelos 5 blocos temáticos).\n\n`;
  mdContent += `## REGRAS DE OURO CEBRASPE PARA A VÉSPERA DA PROVA\n`;
  mdContent += `- **Fator de Correção C − E:** Nunca chute sem eliminação racional. Em dúvida total, deixe em branco. 1 erro anula rigorosamente 1 acerto líquido.\n`;
  mdContent += `- **Compreensão vs Interpretação:** O texto da prova é autossuficiente e fechado. Conhecimento enciclopédico não ancorado nas premissas configura extrapolação.\n`;
  mdContent += `- **LAI (Lei 12.527/11):** Informações sobre violação de direitos humanos JAMAIS sofrem restrição de acesso em nenhuma hipótese.\n`;
  mdContent += `- **RICD & Processo Legislativo:** Proposições com apreciação conclusiva nas comissões dispensam o Plenário, salvo recurso de 1/10 dos deputados.\n`;
  mdContent += `- **Catalogação (AACR2r/RDA):** Órgãos da administração direta entram pela jurisdição territorial; autarquias entram diretamente pelo nome.\n\n`;

  htmlBody += `
  <div class="divisor-parte" id="apendice-b">
    <div class="divisor-sub">APÊNDICE SÍNTESE</div>
    <h1 class="divisor-titulo">APÊNDICE B: FOLHA DE VÉSPERA CONSOLIDADA</h1>
    <p class="divisor-desc">Matriz mnemônica de choque para as 48 horas antecedentes à prova do Cebraspe: 60 pegadinhas capitais distribuídas estritamente nos 5 blocos do Edital nº 1/2026, com assertivas, armadilhas, fundamentação e fontes primárias.</p>
  </div>
  <div class="page-break"></div>
  <div class="folha-vespera-conteudo">
    <div class="box-alertas" style="margin-bottom: 25px;">
      <div class="box-label-alerta">REGRAS DE OURO CEBRASPE PARA A VÉSPERA DA PROVA (48 HORAS)</div>
      <div class="lista-alertas">
        <div class="item-alerta"><span class="alerta-marcador">⚡</span><span><strong>Fator de Correção C − E:</strong> Nunca chute sem eliminação racional. Em dúvida total, deixe em branco. 1 erro anula rigorosamente 1 acerto líquido.</span></div>
        <div class="item-alerta"><span class="alerta-marcador">⚡</span><span><strong>Compreensão vs Interpretação:</strong> O texto da prova é autossuficiente e fechado. Conhecimento enciclopédico não ancorado nas premissas configura extrapolação e invalida o item.</span></div>
        <div class="item-alerta"><span class="alerta-marcador">⚡</span><span><strong>LAI (Lei 12.527/11):</strong> Publicidade é a regra, sigilo é a exceção estrita. Informações sobre violação de direitos humanos JAMAIS sofrem restrição de acesso.</span></div>
        <div class="item-alerta"><span class="alerta-marcador">⚡</span><span><strong>RICD & Processo Legislativo:</strong> Proposições tramitam em caráter conclusivo nas comissões dispensando o Plenário, salvo recurso de 1/10 dos membros. A Biblioteca Pedro Aleixo integra o CEDI, sob a Diretoria-Geral. A RVBI é coordenada pelo Senado Federal.</span></div>
        <div class="item-alerta"><span class="alerta-marcador">⚡</span><span><strong>Catalogação (AACR2r/RDA):</strong> Órgãos da administração direta subordinam-se à jurisdição territorial ("Brasil. Congresso Nacional."); autarquias e empresas públicas de direito próprio entram diretamente pelo seu nome ("Empresa Brasileira de Correios e Telégrafos").</span></div>
      </div>
    </div>
  `;

  MATRIZ_BLOCOS_EDITAL_VESPERA.forEach((bloco) => {
    mdContent += `## ${bloco.titulo.toUpperCase()}\n`;
    mdContent += `*Módulos: ${bloco.modulosRelacionados.join(', ')} | ${bloco.descricao}*\n\n`;

    htmlBody += `
    <div class="bloco-vespera-card">
      <div class="bloco-vespera-header">
        <h2>${escapeHtml(bloco.titulo)}</h2>
        <span class="bloco-vespera-meta">Módulos: ${escapeHtml(bloco.modulosRelacionados.join(', '))} · ${bloco.pegadinhas.length} Pegadinhas Capitais</span>
      </div>
      <div class="bloco-vespera-desc">${escapeHtml(bloco.descricao)}</div>
      <div class="lista-pegadinhas-bloco">
    `;

    bloco.pegadinhas.forEach((peg, pIdx) => {
      mdContent += `### #${pIdx + 1} · ${peg.topico}\n`;
      mdContent += `- **Assertiva Típica Cebraspe:** "${peg.afirmacaoFalsa}"\n`;
      mdContent += `- **Gabarito Oficial:** [${peg.gabaritoOficial === 'E' ? 'ERRADO' : 'CERTO'}]\n`;
      mdContent += `- **⚠️ Armadilha da Banca:** ${peg.armadilhaCebraspe}\n`;
      mdContent += `- **Fundamentação Canônica:** ${peg.fundamentacaoCanonico}\n`;
      mdContent += `- **Fonte Primária:** ${peg.fontePrimaria} (§${peg.submoduloRef})\n\n`;

      htmlBody += `
      <div class="pegadinha-card-pdf">
        <div class="pegadinha-topico">#${pIdx + 1} · ${escapeHtml(peg.topico)} — <span style="color: #D97706;">GABARITO: ${peg.gabaritoOficial === 'E' ? 'ERRADO' : 'CERTO'}</span></div>
        <div class="pegadinha-assertiva">"${escapeHtml(peg.afirmacaoFalsa)}"</div>
        <p class="pegadinha-armadilha"><strong>⚠️ Armadilha Cebraspe:</strong> ${escapeHtml(peg.armadilhaCebraspe)}</p>
        <p class="pegadinha-fundamento"><strong>Fundamentação Canônica:</strong> ${escapeHtml(peg.fundamentacaoCanonico)}</p>
        <p class="pegadinha-fonte"><strong>Fonte Primária:</strong> ${escapeHtml(peg.fontePrimaria)} (Ref: §${escapeHtml(peg.submoduloRef)})</p>
      </div>
      `;
    });

    htmlBody += `
      </div>
    </div>
    <div class="page-break"></div>
    `;
  });

  htmlBody += `</div><div class="page-break"></div>`;

  // APÊNDICE C: CASOS INTEGRADORES INTERMÓDULOS CEBRASPE (CI-1 a CI-5)
  mdContent += `\n# =====================================================================\n`;
  mdContent += `<a id="apendice-c-casos-integradores-intermodulos"></a>\n`;
  mdContent += `# APÊNDICE C: CASOS INTEGRADORES INTERMÓDULOS CEBRASPE (CI-1 A CI-5)\n\n`;
  mdContent += `Estudos de caso interdisciplinares contextualizados na Câmara dos Deputados, integrando competências transversais com itens inéditos no padrão Cebraspe (Certo/Errado) e fundamentação doutrinária exaustiva.\n\n`;

  htmlBody += `
  <div class="divisor-parte" id="apendice-c">
    <div class="divisor-sub">APÊNDICE PRÁTICO TRANSVERSAL</div>
    <h1 class="divisor-titulo">APÊNDICE C: CASOS INTEGRADORES INTERMÓDULOS</h1>
    <p class="divisor-desc">Cenários complexos de atuação do Analista Legislativo na Câmara dos Deputados, integrando catalogação, recuperação da informação, governança de dados, repositórios digitais e legislação aplicada (25 itens no padrão Cebraspe com gabarito comentado).</p>
  </div>
  <div class="page-break"></div>
  <div class="casos-integradores-conteudo">
  `;

  CASOS_INTEGRADORES.forEach((caso) => {
    mdContent += `## CASO ${caso.numero}: ${caso.titulo.toUpperCase()}\n`;
    mdContent += `*${caso.subtitulo}*\n`;
    mdContent += `**Módulos Envolvidos:** ${caso.modulosCodigos.join(', ')} | **Eixo Temático:** ${caso.temaGeral}\n\n`;
    mdContent += `### Cenário da Situação-Problema (Câmara dos Deputados)\n\n`;
    mdContent += `${caso.enunciadoContexto}\n\n`;
    mdContent += `### Itens para Julgamento (Padrão Cebraspe — Fator de Correção C − E)\n\n`;

    htmlBody += `
    <div class="caso-integrador-card">
      <div class="caso-header">
        <span class="caso-badge">CASO INTEGRADOR ${caso.numero}</span>
        <h2 class="caso-titulo">${escapeHtml(caso.titulo)}</h2>
        <div class="caso-subtitulo">${escapeHtml(caso.subtitulo)}</div>
        <div class="caso-meta">
          <span><strong>Módulos Articulados:</strong> ${escapeHtml(caso.modulosCodigos.join(', '))}</span> · 
          <span><strong>Eixo Temático:</strong> ${escapeHtml(caso.temaGeral)}</span>
        </div>
      </div>

      <div class="caso-cenario">
        <h3>CENÁRIO DA SITUAÇÃO-PROBLEMA (CÂMARA DOS DEPUTADOS)</h3>
        <p>${escapeHtml(caso.enunciadoContexto).replace(/\n\n/g, '</p><p>')}</p>
      </div>

      <div class="caso-questoes-lista">
        <h3 class="caso-questoes-header">ITENS DE JULGAMENTO CEBRASPE (CERTO / ERRADO)</h3>
    `;

    caso.questoes.forEach((q, qIdx) => {
      const gabaritoExtenso = q.gabarito === 'C' ? 'CERTO' : 'ERRADO';
      mdContent += `#### Item ${caso.numero}.${qIdx + 1}\n`;
      mdContent += `"${q.item}"\n\n`;
      mdContent += `- **Gabarito Oficial:** [${gabaritoExtenso}]\n`;
      mdContent += `- **Submódulo Referência:** Submódulo ${q.submoduloRef}${q.editalRef ? ` · Edital: ${q.editalRef}` : ''}\n`;
      mdContent += `- **Justificativa Cebraspe:** ${q.justificativa}\n\n`;

      htmlBody += `
      <div class="caso-item-card">
        <div class="caso-item-topo">
          <span class="caso-item-num">Item ${caso.numero}.${qIdx + 1} (Ref: §${escapeHtml(q.submoduloRef)})</span>
          <span class="badge-gabarito ${q.gabarito === 'C' ? 'gabarito-certo' : 'gabarito-errado'}">${gabaritoExtenso}</span>
        </div>
        <div class="caso-item-assertiva">"${escapeHtml(q.item)}"</div>
        <div class="caso-item-justificativa">
          <strong>Fundamentação & Julgamento da Banca:</strong> ${escapeHtml(q.justificativa)}
        </div>
        ${q.editalRef ? `<div class="caso-item-edital">Etiqueta do Edital: ${escapeHtml(q.editalRef)}</div>` : ''}
      </div>
      `;
    });

    htmlBody += `
      </div>
    </div>
    <div class="page-break"></div>
    `;
  });

  htmlBody += `</div>`;

  // DOCUMENTO HTML COMPLETO COM ESTILOS DE IMPRESSÃO
  let htmlFull = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Heuller na Câmara — Dossiê Teórico Completo</title>
  <style>
    ${katexCss}

    @page {
      size: A4;
      margin: 18mm 16mm 20mm 16mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
      color: #1A2238;
      background-color: #FFFFFF;
      line-height: 1.55;
      font-size: 10.5pt;
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #0F172A;
      margin-top: 1.2em;
      margin-bottom: 0.5em;
      line-height: 1.25;
    }

    p {
      margin-top: 0;
      margin-bottom: 0.8em;
      text-align: justify;
    }

    a {
      color: #4F46E5;
      text-decoration: none;
    }

    .page-break {
      page-break-after: always;
      break-after: page;
    }

    /* CAPA */
    .capa-documento {
      min-height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 40px 20px;
    }
    .capa-instituicao {
      font-family: 'Inter', sans-serif;
      font-size: 13pt;
      font-weight: 800;
      letter-spacing: 2.5px;
      color: #4338CA;
      margin-bottom: 6px;
    }
    .capa-concurso {
      font-family: 'Inter', sans-serif;
      font-size: 11pt;
      font-weight: 700;
      letter-spacing: 1px;
      color: #334155;
      margin-bottom: 4px;
    }
    .capa-cargo {
      font-family: 'Inter', sans-serif;
      font-size: 10pt;
      font-weight: 600;
      color: #64748B;
      margin-bottom: 30px;
    }
    .capa-divider {
      width: 120px;
      height: 4px;
      background: linear-gradient(90deg, #4F46E5, #9333EA);
      margin: 0 auto 35px auto;
      border-radius: 2px;
    }
    .capa-titulo {
      font-size: 32pt;
      font-weight: 900;
      color: #0F172A;
      margin-bottom: 15px;
      letter-spacing: -0.5px;
    }
    .capa-subtitulo {
      font-size: 12.5pt;
      font-weight: 400;
      color: #475569;
      max-width: 650px;
      line-height: 1.5;
      margin-bottom: 60px;
    }
    .capa-metadata {
      background-color: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 20px 30px;
      text-align: left;
      font-family: 'Inter', sans-serif;
      font-size: 9.5pt;
      line-height: 1.8;
      color: #334155;
      max-width: 650px;
      width: 100%;
    }

    /* SUMÁRIO */
    .secao-sumario {
      padding: 20px 0;
    }
    .sumario-header {
      font-size: 18pt;
      font-weight: 800;
      border-bottom: 2px solid #0F172A;
      padding-bottom: 8px;
      margin-bottom: 20px;
    }
    .sumario-bloco {
      margin-bottom: 24px;
    }
    .sumario-bloco h3 {
      font-size: 12pt;
      color: #4338CA;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 1px solid #CBD5E1;
      padding-bottom: 4px;
      margin-bottom: 10px;
    }
    .sumario-lista {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }
    .sumario-macro {
      margin-bottom: 12px;
    }
    .sumario-desc {
      display: block;
      font-size: 8.5pt;
      color: #64748B;
      margin-left: 0;
      margin-bottom: 4px;
    }
    .sumario-sublista {
      list-style: none;
      padding-left: 18px;
      font-size: 9pt;
      line-height: 1.6;
    }
    .sumario-num {
      font-weight: bold;
      color: #4F46E5;
      font-family: monospace;
      margin-right: 6px;
    }

    /* DIVISORES DE PARTE */
    .divisor-parte {
      min-height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 40px;
    }
    .divisor-sub {
      font-family: 'Inter', sans-serif;
      font-size: 11pt;
      font-weight: 700;
      color: #6366F1;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    .divisor-titulo {
      font-size: 26pt;
      font-weight: 900;
      color: #0F172A;
      margin-bottom: 15px;
    }
    .divisor-desc {
      font-size: 12pt;
      color: #475569;
      max-width: 600px;
      line-height: 1.6;
    }

    /* MACRO MÓDULO */
    .macro-modulo-header {
      page-break-before: always;
      background-color: #0F172A;
      color: #FFFFFF;
      padding: 24px 28px;
      border-radius: 10px;
      margin-bottom: 25px;
    }
    .macro-tag {
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #A5B4FC;
      margin-bottom: 6px;
    }
    .macro-titulo {
      color: #FFFFFF;
      font-size: 18pt;
      font-weight: 800;
      margin: 0 0 6px 0;
    }
    .macro-subtitulo {
      color: #CBD5E1;
      font-size: 11pt;
      font-weight: 400;
      margin: 0 0 12px 0;
    }
    .macro-descricao {
      font-size: 9.5pt;
      color: #94A3B8;
      line-height: 1.5;
    }

    /* SUBMÓDULO */
    .submodulo-bloco {
      margin-bottom: 30px;
    }
    .submodulo-header {
      margin-bottom: 18px;
      border-bottom: 1.5px solid #E2E8F0;
      padding-bottom: 10px;
    }
    .submodulo-badge {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 700;
      background-color: #EEF2FF;
      color: #4338CA;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #C7D2FE;
      margin-bottom: 6px;
    }
    .submodulo-titulo {
      font-size: 14pt;
      font-weight: 800;
      color: #0F172A;
      margin: 4px 0 6px 0;
    }
    .submodulo-descricao {
      font-size: 9.5pt;
      color: #475569;
      margin: 0;
    }
    .submodulo-divisor {
      height: 1px;
      background-color: #E2E8F0;
      margin: 35px 0;
    }

    /* SELO DE DOMÍNIO */
    .selo-dominio {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      font-size: 7pt;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      background-color: #FEF3C7;
      color: #92400E;
      border: 1px solid #FDE68A;
      padding: 1px 6px;
      border-radius: 3px;
      margin-left: 8px;
    }

    /* LINKS DO SUMÁRIO */
    .sumario-link {
      color: #1E293B;
      text-decoration: none;
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
    }
    .sumario-link:hover {
      color: #4F46E5;
      text-decoration: underline;
    }

    /* BADGE DO TIPO DE EXERCÍCIO */
    .cp-tipo-badge {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      font-size: 7pt;
      font-weight: 700;
      background-color: #F1F5F9;
      color: #475569;
      border: 1px solid #CBD5E1;
      padding: 1px 6px;
      border-radius: 3px;
      margin-left: 6px;
    }

    /* BOX ANTES DE LER */
    .box-antes-de-ler {
      background-color: #F0FDF4;
      border: 1px solid #BBF7D0;
      border-left: 4px solid #16A34A;
      border-radius: 6px;
      padding: 12px 16px;
      margin-bottom: 18px;
      page-break-inside: avoid;
    }
    .box-label-antes-de-ler {
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 0.8px;
      color: #15803D;
      margin-bottom: 8px;
    }
    .grid-antes-de-ler {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .item-antes-de-ler {
      background: #FFFFFF;
      border: 1px solid #DCFCE7;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 9pt;
      line-height: 1.45;
    }
    .item-antes-termo {
      font-weight: 700;
      color: #166534;
      font-family: 'Inter', sans-serif;
      margin-bottom: 3px;
    }
    .item-antes-significado {
      color: #1F2937;
      margin-bottom: 3px;
    }
    .item-antes-por-que {
      font-size: 8.5pt;
      color: #4B5563;
      font-style: italic;
    }
    .item-antes-camara {
      font-size: 8.5pt;
      color: #047857;
      font-weight: 600;
      margin-top: 2px;
    }

    /* BOX AUTORES */
    .box-autores {
      background-color: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-left: 4px solid #4F46E5;
      border-radius: 6px;
      padding: 12px 16px;
      margin-bottom: 18px;
      page-break-inside: avoid;
    }
    .box-label {
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 0.8px;
      color: #4338CA;
      margin-bottom: 6px;
    }
    .lista-autores {
      margin: 0;
      padding-left: 20px;
      font-size: 9.5pt;
      color: #1E293B;
      line-height: 1.5;
    }

    /* BOX ALERTAS CEBRASPE */
    .box-alertas {
      background-color: #FFFBEB;
      border: 1px solid #FDE68A;
      border-left: 4px solid #D97706;
      border-radius: 6px;
      padding: 12px 16px;
      margin-bottom: 18px;
      page-break-inside: avoid;
    }
    .box-label-alerta {
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 0.8px;
      color: #B45309;
      margin-bottom: 8px;
    }
    .lista-alertas {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .item-alerta {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 9.5pt;
      color: #78350F;
      line-height: 1.45;
    }
    .alerta-marcador {
      color: #D97706;
      font-size: 9pt;
      margin-top: 1px;
    }

    /* QUADRO COMPARATIVO */
    .box-quadro {
      margin: 18px 0;
      border: 1px solid #CBD5E1;
      border-radius: 6px;
      overflow: hidden;
      page-break-inside: avoid;
    }
    .box-label-quadro {
      background-color: #1E293B;
      color: #FFFFFF;
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 700;
      padding: 8px 12px;
      letter-spacing: 0.5px;
    }
    .tabela-quadro, .tabela-timeline, .tabela-quesitos {
      width: 100%;
      border-collapse: collapse;
      font-size: 8.5pt;
      line-height: 1.4;
    }
    .tabela-quadro th, .tabela-timeline th, .tabela-quesitos th {
      background-color: #F1F5F9;
      color: #1E293B;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      text-align: left;
      padding: 7px 10px;
      border-bottom: 1px solid #CBD5E1;
    }
    .tabela-quadro td, .tabela-timeline td, .tabela-quesitos td {
      padding: 7px 10px;
      border-bottom: 1px solid #E2E8F0;
      vertical-align: top;
    }
    .tabela-quadro tr:nth-child(even), .tabela-timeline tr:nth-child(even), .tabela-quesitos tr:nth-child(even) {
      background-color: #F8FAFC;
    }

    /* TEORIA CONTEÚDO */
    .teoria-conteudo {
      margin-bottom: 22px;
      font-size: 10pt;
      line-height: 1.6;
    }
    .teoria-conteudo h3 {
      font-size: 12pt;
      font-weight: 800;
      color: #1E293B;
      border-bottom: 1px solid #E2E8F0;
      padding-bottom: 4px;
      margin-top: 1.3em;
    }
    .teoria-conteudo h4 {
      font-size: 11pt;
      font-weight: 700;
      color: #334155;
      margin-top: 1.1em;
    }
    .teoria-conteudo table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      font-size: 8.5pt;
    }
    .teoria-conteudo th {
      background-color: #F1F5F9;
      padding: 6px 8px;
      border: 1px solid #CBD5E1;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      text-align: left;
    }
    .teoria-conteudo td {
      padding: 6px 8px;
      border: 1px solid #E2E8F0;
      vertical-align: top;
    }
    .teoria-conteudo blockquote {
      margin: 12px 0;
      padding: 8px 14px;
      background-color: #F8FAFC;
      border-left: 3px solid #6366F1;
      font-style: italic;
      color: #334155;
    }

    /* MNEMÔNICOS */
    .box-mnemonicos {
      background-color: #FAF5FF;
      border: 1px solid #E9D5FF;
      border-radius: 8px;
      padding: 14px 18px;
      margin: 20px 0;
      page-break-inside: avoid;
    }
    .box-label-mnemonico {
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      font-weight: 800;
      color: #7E22CE;
      letter-spacing: 0.8px;
      margin-bottom: 12px;
      border-bottom: 1px solid #E9D5FF;
      padding-bottom: 6px;
    }
    .mn-secao {
      margin-bottom: 14px;
    }
    .mn-titulo {
      font-size: 10pt;
      font-weight: 700;
      color: #6B21A8;
      margin: 0 0 8px 0;
    }
    .grid-autores-cards {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .card-autor {
      background-color: #FFFFFF;
      border: 1px solid #E9D5FF;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 8.5pt;
    }
    .card-autor-header {
      font-size: 9.5pt;
      color: #0F172A;
      margin-bottom: 4px;
    }
    .card-autor-ano {
      color: #64748B;
      font-size: 8.5pt;
    }
    .card-autor-chip {
      color: #B45309;
      margin-top: 3px;
    }

    .lista-pegadinhas {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .card-pegadinha {
      background-color: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 8.5pt;
    }
    .pegadinha-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .pegadinha-num {
      font-weight: bold;
      color: #475569;
    }
    .badge-gabarito {
      font-family: 'Inter', sans-serif;
      font-size: 7.5pt;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .gabarito-certo {
      background-color: #DCFCE7;
      color: #166534;
      border: 1px solid #86EFAC;
    }
    .gabarito-errado {
      background-color: #FFE4E6;
      color: #9F1239;
      border: 1px solid #FDA4AF;
    }
    .pegadinha-texto {
      font-style: italic;
      margin-bottom: 4px;
    }
    .pegadinha-porque {
      color: #1E293B;
    }

    /* CHECKPOINTS */
    .box-checkpoints {
      background-color: #F8FAFC;
      border: 1.5px solid #CBD5E1;
      border-radius: 8px;
      padding: 14px 18px;
      margin: 22px 0;
      page-break-inside: avoid;
    }
    .box-label-checkpoint {
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      font-weight: 800;
      color: #0F172A;
      letter-spacing: 0.8px;
      margin-bottom: 12px;
      border-bottom: 1px solid #CBD5E1;
      padding-bottom: 6px;
    }
    .item-checkpoint {
      background-color: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 10px 14px;
      margin-bottom: 10px;
    }
    .cp-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .cp-badge {
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 700;
      color: #4338CA;
    }
    .cp-pergunta {
      font-size: 8.5pt;
      color: #64748B;
      margin-bottom: 4px;
    }
    .cp-assertiva {
      font-size: 9.5pt;
      font-weight: 600;
      color: #0F172A;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .cp-justificativa {
      font-size: 8.5pt;
      color: #334155;
      line-height: 1.45;
    }
    .cp-correta {
      font-size: 8.5pt;
      color: #047857;
      margin-top: 4px;
      line-height: 1.4;
    }

    /* APÊNDICES */
    .tema-discursiva-card {
      margin-bottom: 25px;
      padding: 16px;
      background-color: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      page-break-inside: avoid;
    }
    .discursiva-badge {
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 700;
      color: #4338CA;
      background-color: #EEF2FF;
      padding: 3px 8px;
      border-radius: 4px;
    }
    .discursiva-titulo {
      font-size: 13pt;
      font-weight: 800;
      margin: 6px 0 12px 0;
    }
    .discursiva-bloco {
      margin-bottom: 14px;
    }
    .discursiva-bloco h3 {
      font-size: 10pt;
      font-weight: 700;
      color: #334155;
      margin: 0 0 4px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .discursiva-enunciado {
      font-size: 9.5pt;
      color: #0F172A;
      background-color: #F8FAFC;
      padding: 10px;
      border-radius: 4px;
      border-left: 3px solid #6366F1;
    }
    .discursiva-padrao {
      font-size: 9.5pt;
      color: #1E293B;
      background-color: #F0FDF4;
      padding: 10px;
      border-radius: 4px;
      border-left: 3px solid #10B981;
    }


    .folha-vespera-conteudo {
      font-size: 10pt;
      line-height: 1.5;
    }
    .bloco-vespera-card {
      margin-bottom: 25px;
      page-break-before: always;
      break-before: page;
    }
    .bloco-vespera-header {
      background-color: #0F172A;
      color: #FFFFFF;
      padding: 10px 14px;
      border-radius: 6px 6px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .bloco-vespera-header h2 {
      color: #FFFFFF;
      margin: 0;
      font-size: 11pt;
      font-weight: 800;
    }
    .bloco-vespera-meta {
      font-size: 8pt;
      color: #94A3B8;
      font-family: 'Inter', sans-serif;
    }
    .bloco-vespera-desc {
      background-color: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-top: none;
      padding: 8px 12px;
      font-size: 8.5pt;
      font-style: italic;
      color: #334155;
    }
    .lista-pegadinhas-bloco {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    }
    .pegadinha-card-pdf {
      background-color: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 10px 12px;
      page-break-inside: avoid;
    }
    .pegadinha-topico {
      font-size: 8.5pt;
      font-weight: 700;
      color: #4338CA;
      font-family: 'Inter', sans-serif;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .pegadinha-assertiva {
      font-size: 9pt;
      font-weight: 600;
      background-color: #F1F5F9;
      padding: 6px 10px;
      border-radius: 4px;
      border-left: 3px solid #64748B;
      margin: 4px 0;
    }
    .pegadinha-armadilha {
      font-size: 8.5pt;
      color: #DC2626;
      margin: 4px 0;
    }
    .pegadinha-fundamento {
      font-size: 8.5pt;
      color: #047857;
      margin: 4px 0;
    }
    .pegadinha-fonte {
      font-size: 7.5pt;
      color: #64748B;
      font-family: monospace;
      margin: 4px 0 0 0;
    }

    /* CASOS INTEGRADORES */
    .caso-integrador-card {
      margin-bottom: 25px;
    }
    .caso-header {
      background-color: #0F172A;
      color: #FFFFFF;
      padding: 14px 18px;
      border-radius: 8px 8px 0 0;
    }
    .caso-badge {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      font-weight: 800;
      color: #FBBF24;
      background-color: rgba(251, 191, 36, 0.15);
      border: 1px solid rgba(251, 191, 36, 0.4);
      padding: 2px 8px;
      border-radius: 4px;
      margin-bottom: 6px;
      letter-spacing: 0.8px;
    }
    .caso-titulo {
      color: #FFFFFF;
      font-size: 13pt;
      font-weight: 800;
      margin: 4px 0;
    }
    .caso-subtitulo {
      color: #CBD5E1;
      font-size: 9pt;
      font-style: italic;
      margin-bottom: 6px;
    }
    .caso-meta {
      font-family: 'Inter', sans-serif;
      font-size: 8pt;
      color: #94A3B8;
      border-top: 1px solid #334155;
      padding-top: 6px;
      margin-top: 6px;
    }
    .caso-cenario {
      background-color: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-top: none;
      padding: 12px 16px;
      font-size: 9.5pt;
      line-height: 1.55;
      color: #1E293B;
    }
    .caso-cenario h3 {
      font-size: 9pt;
      font-weight: 700;
      color: #4338CA;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0 0 6px 0;
    }
    .caso-questoes-lista {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .caso-questoes-header {
      font-size: 9.5pt;
      font-weight: 800;
      color: #0F172A;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin: 10px 0 4px 0;
      border-bottom: 1.5px solid #CBD5E1;
      padding-bottom: 4px;
    }
    .caso-item-card {
      background-color: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 10px 14px;
      page-break-inside: avoid;
    }
    .caso-item-topo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .caso-item-num {
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      font-weight: 700;
      color: #4338CA;
    }
    .caso-item-assertiva {
      font-size: 9.5pt;
      font-weight: 600;
      background-color: #F1F5F9;
      padding: 8px 12px;
      border-radius: 4px;
      border-left: 3px solid #6366F1;
      margin: 4px 0 8px 0;
      color: #0F172A;
      line-height: 1.45;
    }
    .caso-item-justificativa {
      font-size: 8.5pt;
      color: #334155;
      line-height: 1.45;
    }
    .caso-item-edital {
      font-family: monospace;
      font-size: 7.5pt;
      color: #64748B;
      margin-top: 4px;
    }
  </style>
</head>
<body>
  ${htmlBody}
</body>
</html>`;

  // 3. Sanitização Rigorosa (Regra T9.4: sem "verbatim", sem "estatística de banca" e sem fórmulas cruas)
  mdContent = formatarFormulasMarkdown(mdContent)
    .replace(/verbatim/gi, 'literal')
    .replace(/estatística de banca/gi, 'incidência Cebraspe');

  htmlFull = htmlFull
    .replace(/verbatim/gi, 'literal')
    .replace(/estatística de banca/gi, 'incidência Cebraspe')
    .replace(/\\times/g, '×')
    .replace(/\\Delta/g, 'Δ');

  // Salva arquivos intermediários de alta fidelidade
  const outputMdPath = path.resolve('Heuller_na_Camara_Dossie_Teorico_Completo.md');
  const outputHtmlPath = path.resolve('Heuller_na_Camara_Dossie_Teorico_Completo.html');
  const outputPdfPath = path.resolve('Heuller_na_Camara_Dossie_Teorico_Completo.pdf');

  console.log(`Gravando documento Markdown em: ${outputMdPath}`);
  fs.writeFileSync(outputMdPath, mdContent, 'utf-8');

  console.log(`Gravando documento HTML em: ${outputHtmlPath}`);
  fs.writeFileSync(outputHtmlPath, htmlFull, 'utf-8');

  console.log('Iniciando Chromium via Puppeteer para renderização do PDF...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setContent(htmlFull, { waitUntil: 'load', timeout: 120000 });

  console.log('Gerando PDF (A4 com paginação editorial e cabeçalhos Cebraspe)...');
  await page.pdf({
    path: outputPdfPath,
    format: 'A4',
    timeout: 120000,
    displayHeaderFooter: true,
    printBackground: true,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '14mm',
      right: '14mm',
    },
    headerTemplate: `
      <div style="font-family: -apple-system, sans-serif; font-size: 7pt; color: #888888; width: 100%; display: flex; justify-content: space-between; padding: 0 14mm; border-bottom: 0.5px solid #dddddd; padding-bottom: 4px;">
        <span>CÂMARA DOS DEPUTADOS · ANALISTA LEGISLATIVO (BIBLIOTECÁRIO) · CEBRASPE</span>
        <span>DOSSIÊ TEÓRICO COMPLETO</span>
      </div>
    `,
    footerTemplate: `
      <div style="font-family: -apple-system, sans-serif; font-size: 7.5pt; color: #666666; width: 100%; display: flex; justify-content: space-between; padding: 0 14mm; border-top: 0.5px solid #dddddd; padding-top: 4px;">
        <span>Heuller na Câmara · Fator de Correção Cebraspe: C − E · Limiar: ≥ 85%</span>
        <span>Página <span class="pageNumber"></span> de <span class="totalPages"></span></span>
      </div>
    `,
  });

  await browser.close();

  const pdfStats = fs.statSync(outputPdfPath);
  const pdfMb = (pdfStats.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ PDF gerado com sucesso: ${outputPdfPath} (${pdfMb} MB)`);
}

main().catch((err) => {
  console.error('Erro ao gerar PDF:', err);
  process.exit(1);
});
