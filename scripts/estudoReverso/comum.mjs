// Utilitários compartilhados do pipeline de estudo reverso (exportar → enriquecer → aplicar).
import fs from 'node:fs';
import path from 'node:path';

export const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '../..');
export const DIR_QUESTOES = path.join(RAIZ, 'src/content/questions');
export const DIR_MODULOS = path.join(RAIZ, 'src/content/modules');
// Arquivos JSON-puros do banco (mini-modulo-orgaos tem comentários e é tratado à parte)
export const ARQUIVOS_JSON = fs
  .readdirSync(DIR_QUESTOES)
  .filter((f) => f.endsWith('.ts') && f !== 'mini-modulo-orgaos-30q.ts' && f !== 'questoes-submodulos-ampliados.ts');

export function lerArquivo(nome) {
  const caminho = path.join(DIR_QUESTOES, nome);
  const texto = fs.readFileSync(caminho, 'utf8');
  const i = texto.indexOf('[', texto.indexOf('='));
  const j = texto.lastIndexOf(']');
  return { caminho, texto, prefixo: texto.slice(0, i), sufixo: texto.slice(j + 1), itens: JSON.parse(texto.slice(i, j + 1)) };
}

export function gravarArquivo({ caminho, texto, prefixo, sufixo }, itens) {
  const eol = texto.includes('\r\n') ? '\r\n' : '\n';
  const corpo = JSON.stringify(itens, null, 2).replace(/\n/g, eol);
  fs.writeFileSync(caminho, prefixo + corpo + sufixo);
}

export const chaveItem = (q) => q.item.replace(/\s+/g, ' ').trim().toLowerCase();

// Textos-modelo que não ensinam nada (detectados na medição de out/2026)
const MODELOS = [
  /avaliando o domínio da matéria em consonância/i,
  /em consonância (estrita )?com (as normas e )?(a )?doutrina canônica/i,
  /em consonância com as fontes e normas canônicas/i,
  /induz a erro ao (distorcer|contrariar)/i,
  /contraria as normas e doutrina canônica/i,
  /em conformidade com as fontes técnicas de/i,
  /^Item cobrado (no|pela)/i,
];
const MODELOS_ARMADILHA = [
  /^Armadilha clássica da banca Cebraspe/i,
  /^Assertiva (tecnicamente )?correta/i,
  /^Pegadinha Cebraspe de/i,
  /^Assertiva conceitual correta/i,
  /semântica estrita conforme cobrado/i,
  /distorção conceitual deliberada/i,
];
const semGabarito = (t = '') => t.replace(/^\s*Gabarito( oficial)?\s+(CERTO|ERRADO)\.?\s*/i, '').trim();

export function justificativaFraca(t) {
  const util = semGabarito(t);
  return util.length < 60 || MODELOS.some((r) => r.test(util));
}
export function armadilhaFraca(t) {
  return !t || t.trim().length < 25 || MODELOS_ARMADILHA.some((r) => r.test(t.trim()));
}

export function arquivoTeoria(submoduloId) {
  const m = /^(\d+)\.(\d+)/.exec(submoduloId || '');
  if (!m) return null;
  for (const dir of fs.readdirSync(DIR_MODULOS)) {
    const p = path.join(DIR_MODULOS, dir, `sub-${m[1]}-${m[2]}.ts`);
    if (fs.existsSync(p)) return path.relative(RAIZ, p).split(path.sep).join('/');
  }
  return null;
}
