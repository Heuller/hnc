import fs from 'node:fs';
import path from 'node:path';
import { EDITAL_CAMARA_2026 } from '../src/domain/edital/matrizEdital2026';
import { ALL_COURSE_MODULES } from '../src/content/registry';
import { SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY } from '../src/content/simuladosRegistry';
import { conceptRepository } from '../src/domain/concepts/conceptRepository';
import { normalizarParaExercicio } from '../src/domain/exercicios/distribuicaoExercicios';

export interface LinhaMatrizEdital {
  bloco: string;
  eixoNome: string;
  topicoId: string;
  codigoEdital: string;
  tituloTopico: string;
  moduloCodigo: string;
  submodulosHnc: string[];
  totalExerciciosLeitura: number;
  exerciciosPorTipo: Record<string, number>;
  totalVariantesRevisao: number;
  totalItensSimulado: number;
  totalGeralItens: number;
  situacao: 'COBERTURA FORTE' | 'COBERTO' | 'COBERTURA FRACA' | 'DESCOBERTO';
}

export function gerarMatrizViva(): {
  linhas: LinhaMatrizEdital[];
  topicosSemSubmodulo: LinhaMatrizEdital[];
  topicosSemSimulado: LinhaMatrizEdital[];
  topicosCoberturaFraca: LinhaMatrizEdital[];
  totalTopicos: number;
} {
  const todosSimulados = [...SIMULADOS_REGISTRY, ...MINI_SIMULADOS_REGISTRY];
  const linhas: LinhaMatrizEdital[] = [];

  // Mapeia submódulos em cache para busca rápida
  const mapaSubmodulosPorNumero = new Map<string, any>();
  const mapaSubmodulosPorId = new Map<string, any>();

  ALL_COURSE_MODULES.forEach((macro) => {
    (macro.modulosFilhos || []).forEach((sub) => {
      mapaSubmodulosPorNumero.set(sub.numero, sub);
      mapaSubmodulosPorId.set(sub.id, sub);
    });
  });

  EDITAL_CAMARA_2026.eixos.forEach((eixo) => {
    // Determina o bloco visual
    let blocoNome = 'Conhecimentos Básicos';
    if (eixo.bloco === 'CONHECIMENTOS_ESPECIFICOS') {
      const num = eixo.moduloHncNumero;
      if (num === 1 || num === 10) blocoNome = 'Bloco A — Fundamentos e Legislação';
      else if (num === 2 || num === 2.5) blocoNome = 'Bloco B — Catalogação e Metadados';
      else if (num === 3 || num === 4) blocoNome = 'Bloco C — Classificação e Recuperação';
      else if (num === 5 || num === 6) blocoNome = 'Bloco D — Gestão, Digital e IA';
      else if (num === 7 || num === 8 || num === 9) blocoNome = 'Bloco E — Preservação, ABNT e Métricas';
      else blocoNome = 'Conhecimentos Específicos';
    }

    eixo.topicos.forEach((topico) => {
      const submodulosEncontrados: any[] = [];
      const submodulosNomes: string[] = [];

      (topico.submodulosRef || []).forEach((refNum) => {
        const sub = mapaSubmodulosPorNumero.get(refNum) || mapaSubmodulosPorId.get(refNum);
        if (sub) {
          submodulosEncontrados.push(sub);
          submodulosNomes.push(`${sub.numero} (${sub.titulo_curto || sub.titulo})`);
        }
      });

      // Se não encontrou por número de submódulo, busca pelo módulo de referência
      if (submodulosEncontrados.length === 0 && topico.moduloRef) {
        const modRefClean = topico.moduloRef.toLowerCase().replace('m', '');
        const macro = ALL_COURSE_MODULES.find(
          (m) => m.codigo.toLowerCase() === topico.moduloRef.toLowerCase() || String(m.numero) === modRefClean
        );
        if (macro && macro.modulosFilhos?.length) {
          macro.modulosFilhos.forEach((sub) => {
            submodulosEncontrados.push(sub);
            submodulosNomes.push(`${sub.numero} (${sub.titulo_curto || sub.titulo})`);
          });
        }
      }

      // 1. Contagem de exercícios de checkpoints e seções
      let totalExerciciosLeitura = 0;
      const exerciciosPorTipo: Record<string, number> = {};

      submodulosEncontrados.forEach((sub) => {
        (sub.checkpoints || []).forEach((cp: any) => {
          totalExerciciosLeitura++;
          const ex = normalizarParaExercicio(cp);
          const t = ex.tipo || 'X2';
          exerciciosPorTipo[t] = (exerciciosPorTipo[t] || 0) + 1;
        });

        (sub.secoes || []).forEach((sec: any) => {
          (sec.itens || []).forEach((it: any) => {
            totalExerciciosLeitura++;
            const ex = normalizarParaExercicio(it);
            const t = ex.tipo || 'X2';
            exerciciosPorTipo[t] = (exerciciosPorTipo[t] || 0) + 1;
          });
        });
      });

      // 2. Variantes de revisão cognitiva derivadas
      let totalVariantesRevisao = 0;
      submodulosEncontrados.forEach((sub) => {
        const conceitos = conceptRepository.getPorSubmodulo(sub.id);
        conceitos.forEach((c) => {
          totalVariantesRevisao += c.formatosDisponiveis.length;
          c.formatosDisponiveis.forEach((fmt) => {
            exerciciosPorTipo[fmt] = (exerciciosPorTipo[fmt] || 0) + 1;
          });
        });
      });

      // 3. Itens de simulado associados aos submódulos
      let totalItensSimulado = 0;
      todosSimulados.forEach((sim) => {
        const subIds = sim.submodulosIds || [];
        const cobreSubmodulo = submodulosEncontrados.some(
          (s) => subIds.includes(s.numero) || subIds.includes(s.id)
        );

        if (cobreSubmodulo) {
          totalItensSimulado += sim.questoes.length;
        } else if (
          sim.macroModuloId.toLowerCase() === eixo.moduloHncId.toLowerCase() ||
          sim.macroModuloId.toLowerCase() === topico.moduloRef.toLowerCase()
        ) {
          totalItensSimulado += Math.round(sim.questoes.length / Math.max(1, eixo.topicos.length));
        }
      });

      // Pelo menos os itens disponíveis declarados na matriz do edital caso simulado seja agregado
      if (totalItensSimulado === 0 && topico.questoesDisponiveis > 0) {
        totalItensSimulado = topico.questoesDisponiveis;
      }

      const totalGeralItens = totalExerciciosLeitura + totalVariantesRevisao + totalItensSimulado;

      let situacao: LinhaMatrizEdital['situacao'] = 'DESCOBERTO';
      if (submodulosEncontrados.length === 0) {
        situacao = 'DESCOBERTO';
      } else if (totalGeralItens >= 15) {
        situacao = 'COBERTURA FORTE';
      } else if (totalGeralItens >= 3) {
        situacao = 'COBERTO';
      } else {
        situacao = 'COBERTURA FRACA';
      }

      linhas.push({
        bloco: blocoNome,
        eixoNome: eixo.nome,
        topicoId: topico.id,
        codigoEdital: topico.codigoEdital,
        tituloTopico: topico.titulo,
        moduloCodigo: topico.moduloRef,
        submodulosHnc: submodulosNomes,
        totalExerciciosLeitura,
        exerciciosPorTipo,
        totalVariantesRevisao,
        totalItensSimulado,
        totalGeralItens,
        situacao,
      });
    });
  });

  const topicosSemSubmodulo = linhas.filter((l) => l.submodulosHnc.length === 0);
  const topicosSemSimulado = linhas.filter((l) => l.totalItensSimulado === 0);
  const topicosCoberturaFraca = linhas.filter((l) => l.situacao === 'COBERTURA FRACA');

  return {
    linhas,
    topicosSemSubmodulo,
    topicosSemSimulado,
    topicosCoberturaFraca,
    totalTopicos: linhas.length,
  };
}

export function gerarRelatorioMatrizMarkdown(resultado: ReturnType<typeof gerarMatrizViva>): string {
  const { linhas, topicosSemSubmodulo, topicosSemSimulado, topicosCoberturaFraca, totalTopicos } = resultado;

  let md = `# Matriz Viva do Edital nº 1/2026 — Cargo 5 (Biblioteconomia)\n\n`;
  md += `**Câmara dos Deputados — Analista Legislativo**  \n`;
  md += `**Banca:** Cebraspe | **Edital:** nº 1, de 02/10/2026 | **Prova:** 17/01/2027  \n`;
  md += `**Gerado Automaticamente em:** ${new Date().toLocaleDateString('pt-BR')}  \n\n`;
  md += `---\n\n`;

  md += `## 1. Sumário Executivo de Cobertura\n\n`;
  md += `- **Total de Tópicos do Edital Mapeados:** ${totalTopicos}\n`;
  md += `- **Tópicos sem Submódulo Correspondente:** ${topicosSemSubmodulo.length === 0 ? '✅ **ZERO** (100% dos tópicos cobertos por conteúdo teórico)' : `❌ **${topicosSemSubmodulo.length}**`}\n`;
  md += `- **Tópicos sem Questão de Simulado:** ${topicosSemSimulado.length === 0 ? '✅ **ZERO** (100% dos tópicos possuem itens de simulado)' : `❌ **${topicosSemSimulado.length}**`}\n`;
  md += `- **Tópicos com Cobertura Fraca (< 3 itens):** ${topicosCoberturaFraca.length === 0 ? '✅ **ZERO** (todos os tópicos têm acervo de treino robusto)' : `⚠️ **${topicosCoberturaFraca.length}**`}\n\n`;

  md += `---\n\n`;
  md += `## 2. Matriz Detalhada: Tópicos do Edital → Submódulos → Exercícios → Simulados\n\n`;

  // Agrupa por bloco
  const blocosUnicos = Array.from(new Set(linhas.map((l) => l.bloco)));

  blocosUnicos.forEach((bloco) => {
    md += `### ${bloco}\n\n`;
    md += `| Item | Tópico Oficial do Edital | Submódulo(s) HNC | Exercícios (Leitura + Revisão) | Itens de Simulado | Total Itens | Situação |\n`;
    md += `| :---: | :--- | :--- | :---: | :---: | :---: | :--- |\n`;

    const linhasBloco = linhas.filter((l) => l.bloco === bloco);
    linhasBloco.forEach((l) => {
      const subsFormatados = l.submodulosHnc.join('<br>') || '*(Nenhum)*';
      const statusIcon =
        l.situacao === 'COBERTURA FORTE'
          ? '🟢 Cobertura Forte'
          : l.situacao === 'COBERTO'
          ? '✅ Coberto'
          : l.situacao === 'COBERTURA FRACA'
          ? '🟡 Cobertura Fraca'
          : '🔴 Descoberto';

      md += `| **${l.codigoEdital}** | ${l.tituloTopico} | ${subsFormatados} | ${l.totalExerciciosLeitura + l.totalVariantesRevisao} itens | ${l.totalItensSimulado} itens | **${l.totalGeralItens}** | ${statusIcon} |\n`;
    });

    md += `\n`;
  });

  if (topicosCoberturaFraca.length > 0) {
    md += `---\n\n`;
    md += `## 3. Tópicos com Cobertura Fraca (< 3 exercícios)\n\n`;
    topicosCoberturaFraca.forEach((t) => {
      md += `- **[${t.codigoEdital}] ${t.tituloTopico}:** ${t.totalGeralItens} itens disponíveis (${t.submodulosHnc.join(', ') || 'Sem submódulo'})\n`;
    });
    md += `\n`;
  }

  return md;
}

// Execução via CLI
if (process.argv[1] && process.argv[1].endsWith('gerarMatrizVivaEdital.ts')) {
  console.log('🔍 Gerando Matriz Viva do Edital nº 1/2026 (T9.2)...');
  const resultado = gerarMatrizViva();
  const mdContent = gerarRelatorioMatrizMarkdown(resultado);

  const outPath = path.resolve('docs/matriz_edital_cargo5.md');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, mdContent, 'utf-8');

  console.log(`📊 Total de tópicos do edital processados: ${resultado.totalTopicos}`);
  console.log(`✅ Tópicos sem submódulo: ${resultado.topicosSemSubmodulo.length}`);
  console.log(`✅ Tópicos sem simulado: ${resultado.topicosSemSimulado.length}`);
  console.log(`⚠️  Tópicos com cobertura fraca: ${resultado.topicosCoberturaFraca.length}`);
  console.log(`📄 Documento gravado com sucesso em: ${outPath}`);
}
