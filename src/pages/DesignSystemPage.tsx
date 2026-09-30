import React from 'react';
import { Palette, CheckCircle2, XCircle, HelpCircle, BookOpen, Layers, Type, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Kbd } from '../components/common/Kbd';
import { AlertaCebraspe } from '../components/content-blocks/AlertaCebraspe';
import { CheckpointCard } from '../components/content-blocks/CheckpointCard';
import { TabelaComparativa } from '../components/content-blocks/TabelaComparativa';

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
    <div className="space-y-10 max-w-4xl mx-auto py-2">
      {/* Banner de Apresentação */}
      <div className="card-editorial p-6 sm:p-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-accent-soft text-theme-ink border border-theme-accent text-xs font-bold uppercase tracking-wider">
          <Palette className="w-3.5 h-3.5 text-theme-accent" />
          <span>Design System Editorial • Versão 2.0</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-theme-ink tracking-tight m-0">
          Conceito "Papel e Tinta"
        </h1>

        <p className="font-serif-reading text-base sm:text-lg text-theme-ink-2 leading-relaxed m-0">
          A leitura de alta performance é a atividade primordial da plataforma. O design atua em serviço da cognição: sóbrio, com alto contraste medido, zero gradientes agressivos e zero gamificação infantil.
        </p>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-theme text-xs text-theme-ink-2">
          <span>• WCAG 2.2 AA (Contraste mínimo 4.5:1)</span>
          <span>• Alvos de toque mínimo 44x44px</span>
          <span>• Zero rolagem horizontal em 320px+</span>
          <span>• Fontes autohospedadas Fontsource</span>
        </div>
      </div>

      {/* 1. Tokens de Cores e Contraste */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-theme pb-2">
          <Layers className="w-4 h-4 text-theme-accent" />
          <h2 className="text-lg font-bold text-theme-ink m-0">
            1. Tokens Semânticos e Contraste Aferido
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-lg border border-theme bg-theme-bg space-y-1">
            <span className="text-[11px] font-bold text-theme-ink block">--bg</span>
            <span className="font-mono text-xs text-theme-ink-2">Fundo Base</span>
          </div>

          <div className="p-3.5 rounded-lg border border-theme bg-theme-surface space-y-1">
            <span className="text-[11px] font-bold text-theme-ink block">--surface</span>
            <span className="font-mono text-xs text-theme-ink-2">Superfície</span>
          </div>

          <div className="p-3.5 rounded-lg border border-theme bg-theme-surface-2 space-y-1">
            <span className="text-[11px] font-bold text-theme-ink block">--surface-2</span>
            <span className="font-mono text-xs text-theme-ink-2">Superfície 2</span>
          </div>

          <div className="p-3.5 rounded-lg border border-theme bg-theme-primary text-theme-primary-contrast space-y-1">
            <span className="text-[11px] font-bold block">--primary</span>
            <span className="font-mono text-xs opacity-90">Acento Nobre</span>
          </div>
        </div>

        {/* Cores Funcionais de Avaliação */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-lg border border-theme-ok bg-theme-ok-soft space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-theme-ok text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Acerto (+1 pt)</span>
            </div>
            <p className="text-[11px] text-theme-ink m-0">Contraste WCAG 2.2: 6.66:1 (Pass ✅)</p>
          </div>

          <div className="p-3.5 rounded-lg border border-theme-err bg-theme-err-soft space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-theme-err text-xs">
              <XCircle className="w-4 h-4" />
              <span>Erro (-1 pt anula)</span>
            </div>
            <p className="text-[11px] text-theme-ink m-0">Contraste WCAG 2.2: 6.05:1 (Pass ✅)</p>
          </div>

          <div className="p-3.5 rounded-lg border border-theme bg-theme-surface-2 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-theme-ink-2 text-xs">
              <HelpCircle className="w-4 h-4" />
              <span>Em Branco (0 pt)</span>
            </div>
            <p className="text-[11px] text-theme-ink-2 m-0">Risco Neutro / Gestão de Risco</p>
          </div>
        </div>
      </section>

      {/* 2. Tipografia Editorial */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-theme pb-2">
          <Type className="w-4 h-4 text-theme-accent" />
          <h2 className="text-lg font-bold text-theme-ink m-0">
            2. Tipografia e Escala Modular
          </h2>
        </div>

        <div className="card-editorial p-5 sm:p-6 space-y-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-theme-accent block mb-1">
              Fonte de Leitura Longa: Source Serif 4 (Autohospedada)
            </span>
            <p className="font-serif-reading text-base sm:text-lg text-theme-ink leading-relaxed m-0 max-w-[68ch]">
              "A informação como coisa é a única dimensão tangível capaz de ser transferida, armazenada e processada em sistemas documentais." O texto de leitura longa adota proporções canônicas de 62 a 72 caracteres por linha, com entrelinha 1.65 e <span className="highlighter-amber">marca-texto âmbar plano funcional</span> para ancoragem da atenção.
            </p>
          </div>

          <div className="pt-4 border-t border-theme flex flex-wrap items-center gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-theme-ink-2 block">
                Interface (Inter)
              </span>
              <span className="font-sans font-bold text-sm text-theme-ink">
                Botões, Rótulos, Cabeçalhos e Abas
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-theme-ink-2 block">
                Atalhos e Código (JetBrains Mono)
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <Kbd>C</Kbd> <span className="text-xs text-theme-ink-2">Certo</span>
                <Kbd>E</Kbd> <span className="text-xs text-theme-ink-2">Errado</span>
                <Kbd>B</Kbd> <span className="text-xs text-theme-ink-2">Branco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Componentes e Blocos com Identidade Própria */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-theme pb-2">
          <BookOpen className="w-4 h-4 text-theme-accent" />
          <h2 className="text-lg font-bold text-theme-ink m-0">
            3. Blocos com Identidade Visual Própria (Conforme Seção 4.1)
          </h2>
        </div>

        {/* Alerta Cebraspe */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-theme-ink-2 uppercase tracking-wider">
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
          <span className="text-xs font-bold text-theme-ink-2 uppercase tracking-wider">
            Micro-Checkpoint de Recuperação Ativa (Testing Effect):
          </span>
          <CheckpointCard checkpoint={sampleCheckpoint} />
        </div>

        {/* Tabela Comparativa Sem Rolagem Horizontal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-theme-ink-2 uppercase tracking-wider">
              Tabela Comparativa Responsiva (Zero Rolagem Horizontal em &gt;= 320px):
            </span>
          </div>
          <TabelaComparativa quadro={sampleTabela} />
        </div>
      </section>

      {/* 4. Botões e Estados */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-theme pb-2">
          <SlidersHorizontal className="w-4 h-4 text-theme-accent" />
          <h2 className="text-lg font-bold text-theme-ink m-0">
            4. Botões e Alvos de Toque (&gt;= 44x44px)
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Botão Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="outline">Contorno</Button>
          <Button variant="accent">Marca-Texto</Button>
          <Button variant="ok" icon={<CheckCircle2 className="w-4 h-4" />}>
            CERTO
          </Button>
          <Button variant="err" icon={<XCircle className="w-4 h-4" />}>
            ERRADO
          </Button>
        </div>
      </section>
    </div>
  );
};
