import React from 'react';
import {
  Palette,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
  Type,
  SlidersHorizontal,
  Info,
  Lightbulb,
  Bookmark,
  AlertTriangle,
  AlertOctagon,
  Smartphone,
  Eye,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Kbd } from '../components/common/Kbd';
import { AlertaCebraspe } from '../components/content-blocks/AlertaCebraspe';
import { CheckpointCard } from '../components/content-blocks/CheckpointCard';
import { TabelaResponsiva } from '../components/common/TabelaResponsiva';
import { DESIGN_TOKENS } from '../config/designTokens';

export const DesignSystemPage: React.FC = () => {
  const sampleCheckpoint = {
    id: 'ds-cp-1',
    pergunta: 'Micro-Checkpoint de Fixação (Testing Effect)',
    item: 'Para Harold Borko (1968), a Ciência da Informação é a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processamento para otimizar acessibilidade e uso.',
    gabarito: 'C' as const,
    justificativa: 'Correto! Esta é a clássica definição canônica de Harold Borko, explorada com alta frequência pela banca Cebraspe.',
  };

  const sampleTabela = {
    titulo: 'Matriz Comparativa: Biblioteconomia vs Documentação vs Ciência da Informação',
    colunas: ['Critério', 'Biblioteconomia', 'Documentação', 'Ciência da Informação'],
    linhas: [
      ['Origem Histórica', 'Antiguidade clássica e bibliotecas monásticas', 'Fim do séc. XIX (Paul Otlet, 1895)', 'Pós-Segunda Guerra Mundial (décadas 50-60)'],
      ['Objeto de Estudo', 'O livro e a coleção física institucional', 'O documento em qualquer suporte material', 'A informação em si, propriedades e fluxos'],
      ['Enfoque Principal', 'Guarda, organização e custódia patrimonial', 'Disseminação ativa e princípio monográfico', 'Recuperação algorítmica e sistemas tecnológicos'],
    ],
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-4 px-3 sm:px-6">
      {/* Banner de Apresentação */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent border border-accent/30 text-xs font-bold uppercase tracking-wider">
          <Palette className="w-3.5 h-3.5 text-accent" />
          <span>Design System Editorial • {DESIGN_TOKENS.identidade.nome} v{DESIGN_TOKENS.identidade.versao}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-ink tracking-normal m-0">
          Conceito "Papel e Tinta" (Mobile-First)
        </h1>

        <p className="font-serif text-base sm:text-lg text-ink-2 leading-relaxed m-0">
          {DESIGN_TOKENS.identidade.descricao} Focado na leitura de alto rendimento no celular, sem distrações, sem cartões aninhados excessivos e com tipografia canônica escalonada.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-border text-xs text-ink-2 font-mono">
          <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 text-accent" /> WCAG 2.2 AA (≥ 4.5:1)</span>
          <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-accent" /> Alvos de toque ≥ 44px</span>
          <span>Zero rolagem horizontal</span>
          <span>Fontes Fontsource</span>
        </div>
      </div>

      {/* 1. Três Níveis de Superfície (U6.1) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Layers className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold text-ink m-0">
            1. Três Níveis de Superfície (Redução de Ruído Cognitivo)
          </h2>
        </div>
        <p className="text-sm text-ink-2">
          Elimina o padrão de "cartão dentro de cartão dentro de cartão". A interface organiza-se estritamente em 3 profundidades perceptuais:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl border border-border bg-bg space-y-1.5">
            <span className="text-xs font-mono uppercase font-bold tracking-wider text-ink-2 block">
              Nível 1 · Fundo Base
            </span>
            <span className="font-bold text-sm text-ink block">--surface-1 / --bg</span>
            <span className="font-mono text-xs text-ink-2 block">Claro: #FAF7F0 | Escuro: #0D1220</span>
            <p className="text-xs text-ink-2 leading-relaxed">
              Papel base da tela. Dá descanso visual e elimina luz branca pura agressiva.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface space-y-1.5 shadow-xs">
            <span className="text-xs font-mono uppercase font-bold tracking-wider text-accent block">
              Nível 2 · Cartão / Leitura
            </span>
            <span className="font-bold text-sm text-ink block">--surface-2 / --surface</span>
            <span className="font-mono text-xs text-ink-2 block">Claro: #FFFFFF | Escuro: #141B2E</span>
            <p className="text-xs text-ink-2 leading-relaxed">
              Folha editorial onde o texto principal, teoria e assertivas são lidos.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-surface-2 space-y-1.5 shadow-sm">
            <span className="text-xs font-mono uppercase font-bold tracking-wider text-ink-2 block">
              Nível 3 · Elevado / Gaveta
            </span>
            <span className="font-bold text-sm text-ink block">--surface-3 / --surface-2</span>
            <span className="font-mono text-xs text-ink-2 block">Claro: #F2EEE4 | Escuro: #1B2440</span>
            <p className="text-xs text-ink-2 leading-relaxed">
              Gavetas inferiores móveis (vaul), abas ativas, caixas de ferramentas e popovers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Cores Semânticas e Avaliação Cebraspe */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Palette className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold text-ink m-0">
            2. Cores Semânticas e Contraste Aferido
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300 text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Acerto (+1 pt)</span>
            </div>
            <p className="text-xs text-ink m-0">Verde canônico Cebraspe (WCAG 6.66:1 ✅)</p>
          </div>

          <div className="p-3.5 rounded-xl border border-rose-500/40 bg-rose-500/10 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300 text-xs">
              <XCircle className="w-4 h-4" />
              <span>Erro (-1 pt anula acerto)</span>
            </div>
            <p className="text-xs text-ink m-0">Alerta de penalização rígida (WCAG 6.05:1 ✅)</p>
          </div>

          <div className="p-3.5 rounded-xl border border-border bg-surface-2 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-ink-2 text-xs">
              <HelpCircle className="w-4 h-4" />
              <span>Em Branco (0 pt)</span>
            </div>
            <p className="text-xs text-ink-2 m-0">Gestão tática de risco (neutro)</p>
          </div>
        </div>
      </section>

      {/* 3. Escala Tipográfica Fixa (U6.1) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Type className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold text-ink m-0">
            3. Escala Tipográfica Fixa (Corpo ≥ 16px no Celular)
          </h2>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border space-y-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent block mb-1">
              Fonte de Leitura Longa: Source Serif 4 (≥ 16px no Mobile)
            </span>
            <p className="font-serif text-base sm:text-lg text-ink leading-relaxed m-0 max-w-[70ch]">
              "A informação como coisa é a única dimensão tangível capaz de ser transferida, armazenada e processada em sistemas documentais." O texto de leitura adota proporções canônicas de 60 a 72 caracteres por linha, com entrelinha 1.65 para leitura sem fadiga visual.
            </p>
          </div>

          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-ink-2 block">
                Interface (Inter)
              </span>
              <span className="font-sans font-bold text-sm text-ink">
                Botões, rótulos, cabeçalhos e navegação
              </span>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase text-ink-2 block">
                Atalhos e Código (JetBrains Mono)
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <Kbd>C</Kbd> <span className="text-xs text-ink-2">Certo</span>
                <Kbd>E</Kbd> <span className="text-xs text-ink-2">Errado</span>
                <Kbd>B</Kbd> <span className="text-xs text-ink-2">Branco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Callouts Padronizados em Português (U6.3) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Bookmark className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold text-ink m-0">
            4. Callouts Padronizados em Português (5 Tipos Fixos)
          </h2>
        </div>

        <div className="space-y-3">
          <aside className="p-4 rounded-xl border-l-4 border shadow-xs flex items-start gap-3 border-l-blue-500 border-blue-200/80 dark:border-blue-800/60 bg-blue-50/80 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="block font-sans font-bold text-xs uppercase tracking-wider mb-0.5">Nota</strong>
              <span>Explicação complementar e contexto doutrinário ou histórico de apoio.</span>
            </div>
          </aside>

          <aside className="p-4 rounded-xl border-l-4 border shadow-xs flex items-start gap-3 border-l-emerald-500 border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200">
            <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="block font-sans font-bold text-xs uppercase tracking-wider mb-0.5">Dica</strong>
              <span>Estratégia prática de estudo, memorização e associação rápida para a prova.</span>
            </div>
          </aside>

          <aside className="p-4 rounded-xl border-l-4 border shadow-xs flex items-start gap-3 border-l-indigo-600 border-indigo-200/80 dark:border-indigo-800/60 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200">
            <Bookmark className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="block font-sans font-bold text-xs uppercase tracking-wider mb-0.5">Importante</strong>
              <span>Conceito canônico central de cobrança obrigatória e de alto peso no edital.</span>
            </div>
          </aside>

          <aside className="p-4 rounded-xl border-l-4 border shadow-xs flex items-start gap-3 border-l-amber-500 border-amber-200/80 dark:border-amber-800/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-950 dark:text-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="block font-sans font-bold text-xs uppercase tracking-wider mb-0.5">Atenção</strong>
              <span>Ponto crítico de confusão conceitual onde muitos candidatos erram itens simples.</span>
            </div>
          </aside>

          <aside className="p-4 rounded-xl border-l-4 border shadow-xs flex items-start gap-3 border-l-rose-500 border-rose-200/80 dark:border-rose-800/60 bg-rose-50/80 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200">
            <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="block font-sans font-bold text-xs uppercase tracking-wider mb-0.5">Casca de banana</strong>
              <span>Armadilha clássica e distratores maliciosos empregados pela banca Cebraspe.</span>
            </div>
          </aside>
        </div>
      </section>

      {/* 5. Componentes e Blocos Responsivos */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Smartphone className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold text-ink m-0">
            5. Componentes Responsivos e Alvos Táteis (≥ 44px)
          </h2>
        </div>

        {/* Alerta Cebraspe */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">
            Bloco de Alerta da Banca:
          </span>
          <AlertaCebraspe
            alertas={[
              'O Cebraspe frequentemente atribui a definição canônica de Ciência da Informação de Harold Borko à Biblioteconomia.',
              'Atenção à troca simétrica entre a 2ª Lei (sujeito: Leitor/Inclusão) e a 3ª Lei (sujeito: Documento/Estantes abertas).',
            ]}
          />
        </div>

        {/* Micro-Checkpoint Interativo */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">
            Micro-Checkpoint de Recuperação Ativa (Testing Effect):
          </span>
          <CheckpointCard checkpoint={sampleCheckpoint} />
        </div>

        {/* Tabela Responsiva Sem Rolagem Horizontal */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">
            Tabela Responsiva (Cartões Empilhados no Celular &lt; 640px, Sem Rolagem Horizontal):
          </span>
          <TabelaResponsiva
            titulo={sampleTabela.titulo}
            colunas={sampleTabela.colunas}
            linhas={sampleTabela.linhas}
          />
        </div>
      </section>

      {/* 6. Botões e Controles com Alvo ≥ 44px */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <SlidersHorizontal className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold text-ink m-0">
            6. Botões de Ação e Alvos de Toque (≥ 44×44px)
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" className="min-h-[44px]">Botão Primário</Button>
          <Button variant="secondary" className="min-h-[44px]">Secundário</Button>
          <Button variant="outline" className="min-h-[44px]">Contorno</Button>
          <Button variant="accent" className="min-h-[44px]">Acento Âmbar</Button>
          <Button variant="ok" className="min-h-[44px]" icon={<CheckCircle2 className="w-4 h-4" />}>
            CERTO (+1)
          </Button>
          <Button variant="err" className="min-h-[44px]" icon={<XCircle className="w-4 h-4" />}>
            ERRADO (-1)
          </Button>
        </div>
      </section>
    </div>
  );
};
