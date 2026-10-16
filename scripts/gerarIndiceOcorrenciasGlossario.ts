import * as fs from 'fs';
import * as path from 'path';
import { GLOSSARIO_TECNICO } from '../src/content/glossario-tecnico';
import { COURSE_REGISTRY } from '../src/content/registry';
import { CONJUNTO_DOMINIO_CONHECIDO } from '../src/content/dominio-conhecido';

interface VerbeteReferencia {
  id: string;
  termo: string;
  acervo: 'tecnico' | 'dicionario';
  definicaoCurta: string;
  exemploBiblioteca?: string;
}

interface TermoDestaqueSubmodulo {
  termo: string;
  verbeteId: string;
  acervo: 'tecnico' | 'dicionario';
  definicaoCurta: string;
  exemploBiblioteca?: string;
}

// Mapa de termos conhecidos: termoNormalizado -> VerbeteReferencia
const mapaVerbetes = new Map<string, VerbeteReferencia>();

// 1. Indexa siglas e termos técnicos do Edital (prioridade máxima)
for (const tec of GLOSSARIO_TECNICO) {
  const norm = tec.termo.trim().toLowerCase();
  mapaVerbetes.set(norm, {
    id: `tec-${tec.slug.toLowerCase()}`,
    termo: tec.termo,
    acervo: 'tecnico',
    definicaoCurta: tec.definicaoCurta,
    exemploBiblioteca: tec.exemploBiblioteca,
  });

  // Também indexa sinônimos/siglas se aplicável
  for (const sin of tec.sinonimos) {
    const sinNorm = sin.trim().toLowerCase();
    if (sinNorm.length >= 3 && !mapaVerbetes.has(sinNorm)) {
      mapaVerbetes.set(sinNorm, {
        id: `tec-${tec.slug.toLowerCase()}`,
        termo: tec.termo,
        acervo: 'tecnico',
        definicaoCurta: tec.definicaoCurta,
        exemploBiblioteca: tec.exemploBiblioteca,
      });
    }
  }
}

// 2. Carrega Dicionário Cunha & Cavalcanti (2008)
const dictPath = path.resolve(process.cwd(), 'src/content/glossario/dicionario.json');
if (fs.existsSync(dictPath)) {
  const dicionario = JSON.parse(fs.readFileSync(dictPath, 'utf-8'));
  for (const item of dicionario) {
    const t = item.termo.trim();
    const tNorm = t.toLowerCase();

    // Filtra termos de domínio banal ou muito curtos
    if (tNorm.length < 3) continue;
    if (CONJUNTO_DOMINIO_CONHECIDO.has(tNorm)) continue;
    if (mapaVerbetes.has(tNorm)) continue; // Mantém prioridade técnica

    // Extrai 1 a 2 frases da definição para prévia rápida
    const defCurta = (item.definicao || '')
      .split(/(?<=[.!?])\s+/)
      .slice(0, 2)
      .join(' ')
      .trim();

    mapaVerbetes.set(tNorm, {
      id: `dic-${item.id.toLowerCase()}`,
      termo: t,
      acervo: 'dicionario',
      definicaoCurta: defCurta,
    });
  }
}

// Limpa texto markdown de código, fórmulas, cabeçalhos e tabelas para contagem limpa
function limparMarkdown(texto: string): string {
  return texto
    .replace(/```[\s\S]*?```/g, '') // Blocos de código
    .replace(/`[^`]+`/g, '') // Código inline
    .replace(/\$\$[\s\S]*?\$\$/g, '') // Fórmulas bloco
    .replace(/\$[^$]+?\$/g, '') // Fórmulas inline
    .replace(/^#+\s+.*$/gm, '') // Cabeçalhos
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Links (mantém texto)
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ''); // Imagens
}

// Índice resultante: submoduloId -> TermoDestaqueSubmodulo[]
const indiceOcorrenciasPorSubmodulo: Record<string, TermoDestaqueSubmodulo[]> = {};

// Mapeamento inverso: verbeteId -> submoduloIds[]
const indiceSubmodulosPorVerbete: Record<string, { id: string; numero: string; titulo: string }[]> = {};

let totalDestaquesMapeados = 0;

for (const macro of COURSE_REGISTRY) {
  for (const sub of macro.modulosFilhos) {
    const textoLimpo = limparMarkdown(sub.teoriaDensaMarkdown || '');
    const secoes = textoLimpo.split(/\n\s*\n/); // Divide por parágrafos/blocos

    const termosNoSubmodulo = new Map<string, TermoDestaqueSubmodulo>();

    for (const secao of secoes) {
      const palavras = secao.split(/\s+/).filter(Boolean);
      if (palavras.length < 20) continue;

      // Teto de densidade: máximo 1 destaque a cada ~100 palavras na seção
      const tetoDestaquesSecao = Math.max(1, Math.floor(palavras.length / 80));
      let destaquesNaSecao = 0;

      // Testa termos do vocabulário
      for (const [tNorm, ref] of mapaVerbetes.entries()) {
        if (destaquesNaSecao >= tetoDestaquesSecao) break;
        if (termosNoSubmodulo.has(tNorm)) continue; // Apenas 1ª ocorrência no submódulo

        // Busca como palavra inteira
        const escaped = tNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, 'i');

        if (regex.test(secao)) {
          termosNoSubmodulo.set(tNorm, {
            termo: ref.termo,
            verbeteId: ref.id,
            acervo: ref.acervo,
            definicaoCurta: ref.definicaoCurta,
            exemploBiblioteca: ref.exemploBiblioteca,
          });

          // Registra mapeamento inverso
          if (!indiceSubmodulosPorVerbete[ref.id]) {
            indiceSubmodulosPorVerbete[ref.id] = [];
          }
          if (!indiceSubmodulosPorVerbete[ref.id].some((s) => s.id === sub.id)) {
            indiceSubmodulosPorVerbete[ref.id].push({
              id: sub.id,
              numero: sub.numero,
              titulo: sub.titulo,
            });
          }

          destaquesNaSecao++;
          totalDestaquesMapeados++;
        }
      }
    }

    // Se o submódulo tiver termos antesDeLer declarados, garante inclusão
    if (sub.antesDeLer) {
      for (const adl of sub.antesDeLer) {
        const adlNorm = adl.termo.trim().toLowerCase();
        if (!termosNoSubmodulo.has(adlNorm)) {
          const refExistente = mapaVerbetes.get(adlNorm);
          termosNoSubmodulo.set(adlNorm, {
            termo: adl.termo,
            verbeteId: refExistente ? refExistente.id : `adl-${adlNorm.replace(/\s+/g, '-')}`,
            acervo: refExistente ? refExistente.acervo : 'tecnico',
            definicaoCurta: adl.definicao,
            exemploBiblioteca: adl.exemploBiblioteca,
          });
        }
      }
    }

    indiceOcorrenciasPorSubmodulo[sub.id] = Array.from(termosNoSubmodulo.values());
    indiceOcorrenciasPorSubmodulo[sub.numero] = indiceOcorrenciasPorSubmodulo[sub.id];
  }
}

// Salva arquivos de índice gerados em src/content/glossario/
const outDir = path.resolve(process.cwd(), 'src/content/glossario');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const arquivoOcorrencias = path.join(outDir, 'ocorrencias-termos.json');
fs.writeFileSync(arquivoOcorrencias, JSON.stringify(indiceOcorrenciasPorSubmodulo, null, 2), 'utf-8');

const arquivoInverso = path.join(outDir, 'termos-para-submodulos.json');
fs.writeFileSync(arquivoInverso, JSON.stringify(indiceSubmodulosPorVerbete, null, 2), 'utf-8');

console.log('=== GERAÇÃO DO ÍNDICE DE OCORRÊNCIAS DE GLOSSÁRIO (U3.12) ===');
console.log(`Submódulos mapeados: ${Object.keys(indiceOcorrenciasPorSubmodulo).length / 2}`);
console.log(`Total de termos destacados no curso: ${totalDestaquesMapeados}`);
console.log(`Verbetes com ocorrências diretas mapeadas: ${Object.keys(indiceSubmodulosPorVerbete).length}`);
console.log(`Arquivo salvo em: ${arquivoOcorrencias}`);
console.log(`Arquivo inverso salvo em: ${arquivoInverso}`);
