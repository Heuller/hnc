import fs from 'node:fs';
import path from 'node:path';
import { ALL_COURSE_MODULES } from '../src/content/registry';
import {
  analisarHabilidadesModulo,
  HABILIDADES_ORDEM,
  type AnaliseHabilidadesModulo,
} from '../src/domain/exercicios/classificacaoHabilidades';

/**
 * T9.1: Script de Auditoria de Cobertura por Habilidade Cognitiva e Tipo de Exercício
 * Edital nº 1/2026, Item 14.1.1 (Memorizar, Compreender, Aplicar, Analisar, Avaliar)
 * Metas:
 * - Aplicação ou Análise >= 30% em cada módulo
 * - Nenhum tipo de exercício individual acima de 40% em cada módulo
 */
export function executarAuditoriaHabilidades(): {
  analises: AnaliseHabilidadesModulo[];
  todasConformes: boolean;
  totalGeralExercicios: number;
} {
  const analises: AnaliseHabilidadesModulo[] = [];
  let todasConformes = true;
  let totalGeralExercicios = 0;

  ALL_COURSE_MODULES.forEach((mod) => {
    const analise = analisarHabilidadesModulo(mod);
    analises.push(analise);
    totalGeralExercicios += analise.totalExercicios;

    if (!analise.conformeMetaAplicacaoAnalise || !analise.conformeMetaMaxTipo) {
      todasConformes = false;
    }
  });

  return {
    analises,
    todasConformes,
    totalGeralExercicios,
  };
}

export function gerarRelatorioMarkdown(analises: AnaliseHabilidadesModulo[]): string {
  let md = '# Auditoria de Cobertura por Habilidade Cognitiva e Tipo de Exercício (Fase T9.1)\n';
  md += `**Data da Auditoria:** ${new Date().toLocaleDateString('pt-BR')}  \n`;
  md += `**Referência:** Edital nº 1/2026 da Câmara dos Deputados (Item 14.1.1)  \n`;
  md += `**Metas Pedagógicas:**\n`;
  md += `- **Aplicação + Análise:** Mínimo de **30,0%** dos exercícios de cada módulo.\n`;
  md += `- **Diversidade de Tipos:** Nenhum tipo individual (X1 a X10, F1 a F8) acima de **40,0%** dos itens do módulo.\n\n`;
  md += `---\n\n`;

  md += `## 1. Quadro Geral de Conformidade por Módulo\n\n`;
  md += `| Módulo | Título | Total Itens | % Aplicar + Analisar | Tipo Mais Frequente | Meta Habilidades | Meta Diversidade |\n`;
  md += `| :--- | :--- | :---: | :---: | :---: | :---: | :---: |\n`;

  analises.forEach((a) => {
    const statusHab = a.conformeMetaAplicacaoAnalise ? '✅ Conforme (≥ 30%)' : '❌ Abaixo (< 30%)';
    const statusDiv = a.conformeMetaMaxTipo ? '✅ Conforme (≤ 40%)' : `❌ Concentrado (${a.maxPctTipo}%)`;

    md += `| **${a.moduloCodigo}** | ${a.moduloTitulo} | ${a.totalExercicios} | **${a.pctAplicacaoAnalise}%** | ${a.tipoMaisFrequente} (${a.maxPctTipo}%) | ${statusHab} | ${statusDiv} |\n`;
  });

  md += `\n---\n\n`;
  md += `## 2. Detalhamento Estatístico por Habilidade Cognitiva (Item 14.1.1)\n\n`;

  analises.forEach((a) => {
    md += `### Módulo ${a.moduloCodigo} — ${a.moduloTitulo}\n`;
    md += `- **Total de Exercícios Mapeados:** ${a.totalExercicios}\n`;
    md += `- **Distribuição por Habilidade:**\n`;
    HABILIDADES_ORDEM.forEach((hab) => {
      const qtd = a.porHabilidade[hab];
      const pct = a.porcentagemHabilidade[hab];
      md += `  - **${hab.charAt(0).toUpperCase() + hab.slice(1)}:** ${qtd} itens (${pct}%)\n`;
    });
    md += `- **Distribuição por Tipo de Exercício:**\n`;
    Object.entries(a.porTipo)
      .sort(([, aCount], [, bCount]) => bCount - aCount)
      .forEach(([tipo, count]) => {
        md += `  - \`${tipo}\`: ${count} itens (${a.porcentagemTipo[tipo]}%)\n`;
      });
    md += `\n`;
  });

  return md;
}

// Execução direta via CLI
if (process.argv[1] && process.argv[1].endsWith('auditarHabilidadesExerciciosT9.ts')) {
  console.log('🔍 Executando auditoria de cobertura por habilidade e tipo (T9.1)...');
  const { analises, todasConformes, totalGeralExercicios } = executarAuditoriaHabilidades();

  const relatorioMd = gerarRelatorioMarkdown(analises);
  const outPath = path.resolve('docs/relatorios/auditoria_habilidades_exercicios_t9.md');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, relatorioMd, 'utf-8');

  console.log(`📊 Total de módulos analisados: ${analises.length}`);
  console.log(`📊 Total geral de exercícios auditados: ${totalGeralExercicios}`);
  console.log(`📄 Relatório gravado em: ${outPath}`);
  console.log(`Resultado da Auditoria: ${todasConformes ? '✅ 100% CONFORME com as metas pedagógicas!' : '⚠️ Foram detectados pontos a ajustar.'}`);
}
