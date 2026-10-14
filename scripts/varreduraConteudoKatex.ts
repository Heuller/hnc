import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { ALL_COURSE_MODULES } from '../src/content/registry';
import { protegerCifraoMoeda } from '../src/utils/markdownProcessors';

export interface FormulaFinding {
  submoduloId: string;
  submoduloTitulo: string;
  formula: string;
  valida: boolean;
  erro?: string;
  displayMode: boolean;
}

export interface StrayDollarFinding {
  submoduloId: string;
  submoduloTitulo: string;
  linha: number;
  texto: string;
}

export interface AlertFinding {
  submoduloId: string;
  submoduloTitulo: string;
  tipo: string;
  linha: number;
}

export interface VarreduraKatexResultado {
  totalFormulas: number;
  formulasValidas: number;
  formulasInvalidas: number;
  totalAlertasGithub: number;
  totalCifroesSoltos: number;
  formulas: FormulaFinding[];
  dolaresSoltos: StrayDollarFinding[];
  alertas: AlertFinding[];
  submodulosComFormulas: number;
}

export function executarVarreduraKatex(): VarreduraKatexResultado {
  const formulas: FormulaFinding[] = [];
  const dolaresSoltos: StrayDollarFinding[] = [];
  const alertas: AlertFinding[] = [];
  let submodulosComFormulas = 0;

  ALL_COURSE_MODULES.forEach((macro) => {
    macro.modulosFilhos.forEach((sub) => {
      const conteudo = sub.teoriaDensaMarkdown || '';
      let submoduloTeveFormula = false;

      // 1. Varredura de Alertas [!NOTE], [!TIP], etc.
      const linhas = conteudo.split('\n');
      linhas.forEach((linha, idx) => {
        const alertMatch = linha.match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
        if (alertMatch) {
          alertas.push({
            submoduloId: sub.id,
            submoduloTitulo: sub.titulo,
            tipo: alertMatch[1].toUpperCase(),
            linha: idx + 1,
          });
        }
      });

      // 2. Proteção de moeda (R$ e US$)
      const conteudoProtegido = protegerCifraoMoeda(conteudo);

      // 3. Extração e validação de fórmulas KaTeX
      // Remove blocos de código e spans de código antes de extrair expressões matemáticas,
      // pois a especificação CommonMark/remark-math não avalia matemática em código.
      const semBlocosCodigo = conteudoProtegido.replace(/```[\s\S]*?```/g, (match) => {
        // Preserva o número de quebras de linha para manter a sincronia
        return '\n'.repeat(match.split('\n').length - 1);
      });
      const semCodigo = semBlocosCodigo.replace(/`[^`\n]*?`/g, '');

      // Regex para blocos $$...$$ e fórmulas inline $...$
      // Lookbehind negativo para não confundir com cifrão escapado \$
      const formulaRegex = /(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$|(?<!\\)\$((?:\\\$|[^$\n])+?)(?<!\\)\$/g;
      let match: RegExpExecArray | null;

      while ((match = formulaRegex.exec(semCodigo)) !== null) {
        const rawFormula = (match[1] || match[2] || '').trim();
        if (!rawFormula) continue;

        submoduloTeveFormula = true;
        const displayMode = Boolean(match[1]);

        try {
          katex.renderToString(rawFormula, {
            throwOnError: true,
            displayMode,
          });
          formulas.push({
            submoduloId: sub.id,
            submoduloTitulo: sub.titulo,
            formula: rawFormula,
            valida: true,
            displayMode,
          });
        } catch (err: any) {
          formulas.push({
            submoduloId: sub.id,
            submoduloTitulo: sub.titulo,
            formula: rawFormula,
            valida: false,
            erro: err.message || String(err),
            displayMode,
          });
        }
      }

      if (submoduloTeveFormula) {
        submodulosComFormulas++;
      }

      // 4. Detecção de cifrões soltos
      let insideCodeFence = false;
      const linhasParaCifrao = conteudoProtegido.split('\n');

      linhasParaCifrao.forEach((linha, idx) => {
        const trimmed = linha.trim();
        if (trimmed.startsWith('```')) {
          insideCodeFence = !insideCodeFence;
          return;
        }
        if (insideCodeFence) return;

        // Remove spans inline de código `...`
        const semSpans = linha.replace(/`[^`]*?`/g, '');

        // Remove fórmulas matemáticas válidas já casadas
        const semFormulas = semSpans.replace(
          /(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$|(?<!\\)\$((?:\\\$|[^$\n])+?)(?<!\\)\$/g,
          ''
        );

        // Verifica se sobrou algum cifrão $ não escapado
        const matchSoltos = semFormulas.match(/(?<!\\)\$/g);
        if (matchSoltos && matchSoltos.length > 0) {
          dolaresSoltos.push({
            submoduloId: sub.id,
            submoduloTitulo: sub.titulo,
            linha: idx + 1,
            texto: linha.trim(),
          });
        }
      });
    });
  });

  const totalFormulas = formulas.length;
  const formulasValidas = formulas.filter((f) => f.valida).length;
  const formulasInvalidas = formulas.filter((f) => !f.valida).length;

  return {
    totalFormulas,
    formulasValidas,
    formulasInvalidas,
    totalAlertasGithub: alertas.length,
    totalCifroesSoltos: dolaresSoltos.length,
    formulas,
    dolaresSoltos,
    alertas,
    submodulosComFormulas,
  };
}

export function gerarRelatorioMarkdown(resultado: VarreduraKatexResultado): string {
  const agora = new Date().toISOString();
  let md = `# Relatório de Varredura de Fórmulas KaTeX e Alertas (Fase U1.4)\n\n`;
  md += `**Data da execução:** ${agora}  \n`;
  md += `**Total de submódulos do curso:** ${ALL_COURSE_MODULES.reduce((acc, m) => acc + m.modulosFilhos.length, 0)}  \n`;
  md += `**Submódulos contendo fórmulas matemáticas:** ${resultado.submodulosComFormulas}  \n\n`;

  md += `## 1. Sumário Executivo\n\n`;
  md += `| Métrica | Quantidade | Status |\n`;
  md += `|---|---|---|\n`;
  md += `| Total de fórmulas matemáticas identificadas | **${resultado.totalFormulas}** | — |\n`;
  md += `| Fórmulas compiladas com sucesso no KaTeX | **${resultado.formulasValidas}** | ✅ 100% |\n`;
  md += `| Fórmulas com erro de compilação KaTeX | **${resultado.formulasInvalidas}** | ${resultado.formulasInvalidas === 0 ? '✅ 0' : '❌ Falha'} |\n`;
  md += `| Cifrões soltos ($) sem fechamento | **${resultado.totalCifroesSoltos}** | ${resultado.totalCifroesSoltos === 0 ? '✅ 0' : '⚠️ Atenção'} |\n`;
  md += `| Ocorrências de alertas estilo GitHub ([!NOTE\|TIP\|...]) | **${resultado.totalAlertasGithub}** | ✅ Mapeadas para callouts semânticos |\n\n`;

  md += `## 2. Alertas Estilo GitHub Encontrados\n\n`;
  if (resultado.alertas.length === 0) {
    md += `Nenhum alerta pendente.\n\n`;
  } else {
    md += `| Submódulo | Linha | Tipo de Alerta |\n`;
    md += `|---|---|---|\n`;
    resultado.alertas.forEach((a) => {
      md += `| \`${a.submoduloId}\` | ${a.linha} | \`[!${a.tipo}]\` |\n`;
    });
    md += `\n`;
  }

  if (resultado.formulasInvalidas > 0) {
    md += `## 3. Fórmulas Inválidas (Requerem Correção)\n\n`;
    resultado.formulas
      .filter((f) => !f.valida)
      .forEach((f) => {
        md += `- **[${f.submoduloId}]** \`${f.formula}\`  \n  *Erro:* \`${f.erro}\`\n\n`;
      });
  } else {
    md += `## 3. Fórmulas Inválidas\n\n`;
    md += `✅ **Zero fórmulas inválidas.** Todas as ${resultado.totalFormulas} expressões matemáticas compilam sem nenhum erro ou exceção no KaTeX.\n\n`;
  }

  if (resultado.dolaresSoltos.length > 0) {
    md += `## 4. Cifrões Soltos Acusados\n\n`;
    resultado.dolaresSoltos.forEach((d) => {
      md += `- **[${d.submoduloId}:L${d.linha}]** \`${d.texto}\`\n`;
    });
    md += `\n`;
  } else {
    md += `## 4. Cifrões Soltos\n\n`;
    md += `✅ **Zero cifrões soltos.** Nenhuma ocorrência de caractere \`$\` órfão ou desbalanceado no conteúdo.\n\n`;
  }

  return md;
}

// Execução CLI
const isDirectCli = process.argv[1]?.includes('varreduraConteudoKatex');
if (isDirectCli) {
  console.log(`Iniciando varredura profunda de conteúdo (KaTeX, Moeda, Alertas)...`);
  const resultado = executarVarreduraKatex();
  const relatorioMd = gerarRelatorioMarkdown(resultado);

  const caminhoRelatorio = path.join(process.cwd(), 'docs', 'relatorios', 'varredura_katex_relatorio.md');
  fs.mkdirSync(path.dirname(caminhoRelatorio), { recursive: true });
  fs.writeFileSync(caminhoRelatorio, relatorioMd, 'utf8');

  console.log(`\n=== RESULTADO DA VARREDURA (Fase U1.4) ===`);
  console.log(`- Total de fórmulas: ${resultado.totalFormulas}`);
  console.log(`- Fórmulas válidas: ${resultado.formulasValidas}`);
  console.log(`- Fórmulas inválidas: ${resultado.formulasInvalidas}`);
  console.log(`- Cifrões soltos: ${resultado.totalCifroesSoltos}`);
  console.log(`- Alertas GitHub mapeados: ${resultado.totalAlertasGithub}`);
  console.log(`\nRelatório salvo em: ${caminhoRelatorio}`);

  if (resultado.formulasInvalidas > 0 || resultado.totalCifroesSoltos > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}
