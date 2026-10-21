import React, { useState } from 'react';
import { Sparkles, Brain, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

export interface MnemonicoItem {
  id: string;
  mnemonico: string;
  titulo: string;
  categoria: 'Constituição' | 'Regimento Interno' | 'LAI & Informação' | 'Processo Legislativo';
  significado: string;
  regraDeOuro: string;
  exemploCebraspe: string;
}

export const MNEMONICOS_LEGISLATIVO: MnemonicoItem[] = [
  {
    id: 'mnem-1',
    mnemonico: 'SO-CI-DI-VA-PLU',
    titulo: 'Fundamentos da República Federativa do Brasil (Art. 1º da CF/88)',
    categoria: 'Constituição',
    significado: 'SOberania, CIdadania, DIgnidade da pessoa humana, VAlore sociais do trabalho e da livre iniciativa, PLUralismo político.',
    regraDeOuro: 'São os 5 pilares estruturantes. Não confunda com os Objetivos Fundamentais (Art. 3º), que sempre começam com verbos no infinitivo!',
    exemploCebraspe: 'A banca costuma afirmar que "promover o bem de todos" é um fundamento da República. Errado: é um objetivo fundamental (verbo no infinitivo).',
  },
  {
    id: 'mnem-2',
    mnemonico: 'CON-GAR-ER-PRO',
    titulo: 'Objetivos Fundamentais da República (Art. 3º da CF/88)',
    categoria: 'Constituição',
    significado: 'CONstruir uma sociedade livre, justa e solidária; GARantir o desenvolvimento nacional; ERradicar a pobreza e a marginalização; PROmover o bem de todos sem preconceitos.',
    regraDeOuro: 'Todos os objetivos fundamentais da CF/88 iniciam obrigatoriamente por verbo no infinitivo (ações/metas estatais).',
    exemploCebraspe: 'Identifique o verbo no infinitivo no enunciado da assertiva: se houver verbo, trata-se de objetivo fundamental (art. 3º), e não de princípio internacional (art. 4º).',
  },
  {
    id: 'mnem-3',
    mnemonico: '5 - 15 - 25 - 100',
    titulo: 'Tríade dos Graus de Sigilo e Dados Pessoais (LAI - Lei 12.527/2011)',
    categoria: 'LAI & Informação',
    significado: 'Reservada: até 5 anos | Secreta: até 15 anos | Ultrassecreta: até 25 anos | Informações Pessoais (Intimidade/Honra): até 100 anos.',
    regraDeOuro: 'Prazos são MÁXIMOS. Ultrassecreta admite prorrogação única por mais 25 anos exclusivamente pela CMRI.',
    exemploCebraspe: 'O Cebraspe frequentemente inverte: diz que documentos reservados têm sigilo de 15 anos ou que a proteção de dados pessoais exige classificação formal prévia.',
  },
  {
    id: 'mnem-4',
    mnemonico: '3/5 em 2 turnos (308/49)',
    titulo: 'Quórum de Emenda Constitucional (Art. 60, § 2º da CF/88)',
    categoria: 'Processo Legislativo',
    significado: 'Aprovada por 3/5 dos membros em 2 turnos nas duas Casas do Congresso Nacional (308 Deputados Federais e 49 Senadores).',
    regraDeOuro: 'PEC NÃO VAI À SANÇÃO PRESIDENCIAL! É promulgada conjuntamente pelas Mesas da Câmara e do Senado.',
    exemploCebraspe: 'Assertiva Cebraspe afirmando que o Presidente da República pode vetar parcialmente uma PEC aprovada pelo Congresso Nacional. Errado: não há sanção nem veto.',
  },
  {
    id: 'mnem-5',
    mnemonico: '60 + 60 | 45 Tranca',
    titulo: 'Prazos Capitais da Medida Provisória (Art. 62 da CF/88)',
    categoria: 'Processo Legislativo',
    significado: 'Vigência inicial de 60 dias + prorrogação automática única de 60 dias. Se não votada em 45 dias da publicação, entra em regime de urgência e tranca a pauta da Casa em que tramitar.',
    regraDeOuro: 'A comissão mista é obrigatória na fase inicial para emitir parecer de admissibilidade dos pressupostos constitucionais de relevância e urgência.',
    exemploCebraspe: 'A banca tenta afirmar que a MPV tranca a pauta a partir do 60º dia. Errado: o trancamento ocorre já no 45º dia após a publicação.',
  },
  {
    id: 'mnem-6',
    mnemonico: 'IRREPETIBILIDADE: PEC (Absoluta) vs LEI (Relativa)',
    titulo: 'Reapresentação de Proposições Rejeitadas na Mesma Sessão Legislativa',
    categoria: 'Regimento Interno',
    significado: 'PEC rejeitada NUNCA pode ser reapresentada no mesmo ano (sessão legislativa). Projeto de Lei rejeitado PODE se houver proposta da MAIORIA ABSOLUTA de qualquer das Casas.',
    regraDeOuro: 'Irrepetibilidade absoluta para Emenda Constitucional (Art. 60, § 5º); Irrepetibilidade relativa para Leis Ordinárias e Complementares (Art. 67).',
    exemploCebraspe: 'Assertiva dizendo que a maioria absoluta da Câmara pode desarquivar uma PEC rejeitada no mesmo ano. Errado: para PEC a vedação é absoluta.',
  },
];

export const PainelMnemonicosLegislativo: React.FC = () => {
  const [expandidoId, setExpandidoId] = useState<string | null>('mnem-1');
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  const handleCopiar = (id: string, texto: string) => {
    navigator.clipboard.writeText(texto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2000);
  };

  return (
    <div className="bg-surface rounded-2xl border border-border p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-sans font-bold text-ink m-0">
              Mnemônicos Estratégicos Cebraspe (Metodologia Teach)
            </h3>
            <p className="text-xs text-ink-2 font-serif m-0">
              Ancoragens mnemônicas de alta fixação para os pontos de maior incidência e pegadinha no edital da Câmara.
            </p>
          </div>
        </div>
        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-surface-2 text-ink-2 self-start sm:self-auto border border-border/60">
          {MNEMONICOS_LEGISLATIVO.length} Fórmulas Mnemônicas
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {MNEMONICOS_LEGISLATIVO.map((item) => {
          const aberto = expandidoId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-xl border transition-all text-xs ${
                aberto
                  ? 'bg-surface-2/60 border-accent/70 shadow-xs'
                  : 'bg-surface-2/30 border-border hover:border-border/90'
              }`}
            >
              <button
                type="button"
                onClick={() => setExpandidoId(aberto ? null : item.id)}
                className="w-full p-3.5 flex items-start justify-between gap-3 text-left cursor-pointer"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono font-bold text-accent px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20">
                      {item.mnemonico}
                    </span>
                    <span className="text-xs font-sans font-semibold text-ink-2 uppercase tracking-wider">
                      {item.categoria}
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-ink text-xs sm:text-sm m-0">
                    {item.titulo}
                  </h4>
                </div>
                <div className="text-ink-2 shrink-0 pt-0.5">
                  {aberto ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {aberto && (
                <div className="px-3.5 pb-3.5 pt-1 space-y-2.5 border-t border-border/60">
                  <div className="space-y-1 bg-surface p-2.5 rounded-lg border border-border/70">
                    <span className="font-sans font-bold text-ink text-xs block">Desdobramento:</span>
                    <p className="font-serif text-ink-2 m-0 leading-relaxed select-text">
                      {item.significado}
                    </p>
                  </div>

                  <div className="space-y-1 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/30 text-emerald-900 dark:text-emerald-200">
                    <span className="font-sans font-bold text-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      Regra de Ouro da Memória:
                    </span>
                    <p className="font-serif m-0 leading-relaxed">
                      {item.regraDeOuro}
                    </p>
                  </div>

                  <div className="space-y-1 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/30 text-rose-950 dark:text-rose-200">
                    <span className="font-sans font-bold text-xs block text-rose-700 dark:text-rose-400">
                      Armadilha Típica da Banca Cebraspe:
                    </span>
                    <p className="font-serif m-0 leading-relaxed italic">
                      "{item.exemploCebraspe}"
                    </p>
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopiar(
                          item.id,
                          `${item.mnemonico} - ${item.titulo}\n${item.significado}\nRegra: ${item.regraDeOuro}`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-sans font-semibold text-ink-2 hover:text-ink transition-colors cursor-pointer"
                    >
                      {copiadoId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Mnemônico</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
