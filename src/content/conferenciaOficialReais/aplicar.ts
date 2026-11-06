import registro from './registro.json';
import type { QuestaoReal } from '../questoesReais';

type Fonte = { provaUrl: string; gabaritoUrl: string; modo: 'original' | 'copia'; tipoGabarito: 'tabela' | 'recurso'; codigo: string };
type Conferencia = { fonteId: string; numero: number; gabarito: 'C' | 'E' | 'X' };
type RegistroLote = { fontes: Record<string, Fonte>; itens: Record<string, Conferencia>; editorial?: Record<string, Partial<QuestaoReal>> };
const lotes = import.meta.glob<RegistroLote>('./lote*.json', { eager: true, import: 'default' });
const fontes = { ...registro.fontes } as Record<string, Fonte>;
const itens = { ...registro.itens } as Record<string, Conferencia>;
const editorial = { ...registro.editorial } as Record<string, Partial<QuestaoReal>>;
for (const nome of Object.keys(lotes).sort()) {
  for (const [id, fonte] of Object.entries(lotes[nome].fontes)) {
    if (fontes[id] && (['provaUrl', 'gabaritoUrl', 'modo', 'tipoGabarito', 'codigo'] as const).some(k => fontes[id][k] !== fonte[k])) throw new Error(`Fontes de lotes conflitantes: ${id}`);
    fontes[id] = fonte;
  }
  for (const [id, item] of Object.entries(lotes[nome].itens)) {
    if (itens[id]) throw new Error(`Item repetido entre conferências de lotes: ${id}`);
    itens[id] = item;
  }
  for (const [id, ajuste] of Object.entries(lotes[nome].editorial || {})) {
    if (editorial[id] && JSON.stringify(editorial[id]) !== JSON.stringify(ajuste)) throw new Error(`Ajustes editoriais conflitantes: ${id}`);
    editorial[id] = ajuste;
  }
}
if (Object.keys(editorial).some(id => !itens[id])) throw new Error('Ajuste editorial sem conferência documental.');

/** O JSON de origem é histórico. Treinos usam apenas itens documentalmente conferidos. */
export function aplicarConferenciaOficial(questoes: readonly QuestaoReal[]): QuestaoReal[] {
  return questoes.flatMap(q => {
    const conferencia = itens[q.id];
    if (!conferencia) return q.estadoConferencia === 'caderno' || !q.gabaritoUrl ? [] : [q];
    if (conferencia.gabarito === 'X') return [];
    const fonte = fontes[conferencia.fonteId];
    if (!fonte) throw new Error(`Fonte oficial ausente: ${q.id}`);
    let titulo = q.prova.replace(/ · atribuição (?:na apostila|no caderno)$/, '');
    if (fonte.codigo.includes('ABIN')) titulo = 'ABIN 2018 · Oficial Técnico de Inteligência — Área 10';
    if (fonte.codigo.includes('SERPRO13')) titulo = 'SERPRO 2013 · Analista — Biblioteconomia';
    if (fonte.codigo.includes('291_SEEDF')) titulo = 'SEE/DF · edital de 2016 · prova de 2017 — Biblioteconomia';
    if (fonte.codigo.includes('164DPU')) titulo = 'DPU 2016 · Bibliotecário';
    return [{
      ...q, ...editorial[q.id],
      prova: `${titulo} · item ${conferencia.numero}`,
      provaUrl: fonte.provaUrl, gabaritoUrl: fonte.gabaritoUrl,
      gabarito: conferencia.gabarito,
      estadoConferencia: fonte.modo === 'copia' ? 'copia-oficial' : undefined,
      conferenciaOficial: {
        numero: conferencia.numero, tipoGabarito: fonte.tipoGabarito,
        provaEmEspelho: !new URL(fonte.provaUrl).hostname.endsWith('cebraspe.org.br'),
        gabaritoEmEspelho: !new URL(fonte.gabaritoUrl).hostname.endsWith('cebraspe.org.br'),
      },
      fonte: `${q.fonte} Conferência documental: ${fonte.codigo}, item ${conferencia.numero}, ${fonte.tipoGabarito === 'recurso' ? 'decisão definitiva do recurso' : 'gabarito definitivo'}${fonte.modo === 'copia' ? ', documento consultado em cópia' : ', arquivos da banca'}.`,
    }];
  });
}
