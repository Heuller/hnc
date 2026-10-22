// Valida um arquivo de saída do enriquecimento contra o lote de entrada correspondente.
// Uso: node scripts/estudoReverso/validarSaida.mjs <lote-entrada.json> <saida.json>
import fs from 'node:fs';
import { justificativaFraca, armadilhaFraca } from './comum.mjs';

const [entradaPath, saidaPath] = process.argv.slice(2);
const entrada = JSON.parse(fs.readFileSync(entradaPath, 'utf8'));
let saida;
try {
  saida = JSON.parse(fs.readFileSync(saidaPath, 'utf8'));
} catch (e) {
  console.error('JSON inválido:', e.message);
  process.exit(1);
}
const norm = (t = '') => t.replace(/\s+/g, ' ').trim();
const porId = new Map(saida.map((s) => [s.id, s]));
const erros = [];
const PROIBIDO = /(doutrina canônica|normas canônicas|em consonância|apreensão precisa|semântica estrita|leitura analítica rigorosa|distorção conceitual deliberada)/i;

for (const g of entrada) {
  const id = g.ids[0];
  const s = porId.get(id);
  const e = (m) => erros.push(`${id}: ${m}`);
  if (!s) { e('ausente na saída'); continue; }
  if (s.alerta) { if (!/^gabarito-suspeito: .{20,}/.test(s.alerta)) e('alerta deve ser "gabarito-suspeito: <motivo com 20+ caracteres>"'); continue; }
  const rotulo = g.gabarito === 'C' ? 'CERTO' : 'ERRADO';
  // gatilho: obrigatório, trecho literal do item
  if (!s.gatilho) e('gatilho ausente');
  else {
    if (!norm(g.item).includes(norm(s.gatilho))) e(`gatilho não é trecho literal do item: "${s.gatilho}"`);
    const palavras = norm(s.gatilho).split(' ').length;
    if (palavras > 14) e(`gatilho longo demais (${palavras} palavras; máx. 14)`);
  }
  if (g.precisa.justificativa || s.justificativa) {
    const j = s.justificativa;
    if (!j) e('justificativa ausente');
    else {
      if (!j.startsWith(`Gabarito ${rotulo}.`)) e(`justificativa deve começar com "Gabarito ${rotulo}."`);
      if (j.length < 220 || j.length > 700) e(`justificativa com ${j.length} caracteres (220–700)`);
      if (justificativaFraca(j) || PROIBIDO.test(j)) e('justificativa contém texto-modelo');
    }
  }
  if (g.precisa.armadilhaBanca || s.armadilhaBanca) {
    const a = s.armadilhaBanca;
    if (!a) e('armadilhaBanca ausente');
    else {
      if (!/^Técnica: [^.]{3,60}\. .{40,}/.test(a)) e('armadilhaBanca deve seguir "Técnica: <nome>. <como identificar>" (40+ caracteres após o nome)');
      if (a.length > 360) e(`armadilhaBanca com ${a.length} caracteres (máx. 360)`);
      if (armadilhaFraca(a) || PROIBIDO.test(a)) e('armadilhaBanca contém texto-modelo');
    }
  }
  if (g.gabarito === 'E' && g.precisa.versao_correta) {
    if (!s.versao_correta) e('versao_correta ausente (item ERRADO)');
    else if (norm(s.versao_correta) === norm(g.item)) e('versao_correta idêntica ao item');
  }
  if (g.gabarito === 'C' && g.precisa.versao_errada) {
    if (!s.versao_errada) e('versao_errada ausente (item CERTO)');
    else if (norm(s.versao_errada) === norm(g.item)) e('versao_errada idêntica ao item');
  }
  if (g.gabarito === 'C' && s.versao_correta) e('item CERTO não leva versao_correta');
  if (g.gabarito === 'E' && s.versao_errada) e('item ERRADO não leva versao_errada');
}
for (const s of saida) if (!entrada.some((g) => g.ids[0] === s.id)) erros.push(`${s.id}: id não pertence ao lote`);

const alertas = saida.filter((s) => s.alerta).length;
if (erros.length) {
  console.error(`${erros.length} problema(s):\n` + erros.join('\n'));
  process.exit(1);
}
console.log(`OK: ${saida.length} itens válidos (${alertas} com alerta de gabarito).`);
