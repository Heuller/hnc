import React from 'react';
import {
  Printer,
  Sparkles,
  ArrowLeft,
  Flame,
  CheckCircle2,
  Clock,
  Layers,
  BookOpen,
} from 'lucide-react';
import { useNavigationStore } from '../store/useNavigationStore';

export const FolhaVesperaPage: React.FC = () => {
  const { setActiveView } = useNavigationStore();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2 px-1 sm:px-0 folha-vespera-container">
      {/* Barra de Ações (Oculta na Impressão) */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={() => setActiveView('painel')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-theme-ink-2 hover:text-theme-ink transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Painel</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent font-bold">
            Revisão 48 Horas
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-text text-xs font-bold shadow-editorial-sm cursor-pointer hover:opacity-95"
            title="Imprimir ou Salvar em PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Salvar PDF</span>
          </button>
        </div>
      </div>

      {/* Banner de Apresentação (Oculto na Impressão) */}
      <div className="card-editorial p-6 sm:p-8 space-y-4 border-l-4 border-l-accent no-print">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-accent-soft text-theme-ink border border-theme-accent text-xs font-bold uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5 text-accent" />
          <span>Folha de Véspera • Síntese de Ultra-Densidade</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-theme-ink tracking-tight m-0">
          Revisão de Véspera: Números, Fórmulas e Regras Críticas
        </h1>

        <p className="font-serif-reading text-base text-theme-ink-2 leading-relaxed m-0">
          Documento consolidado de alta retenção para as 48 horas antecedentes à prova do Cebraspe para o cargo de Analista Legislativo — Bibliotecário da Câmara dos Deputados.
        </p>
      </div>

      {/* CABEÇALHO FORMAL PARA IMPRESSÃO */}
      <div className="hidden print:block border-b-2 border-black pb-3 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight text-black m-0">
              Heuller na Câmara · Folha de Véspera
            </h1>
            <p className="text-xs text-gray-700 m-0">
              Concurso Câmara dos Deputados · Analista Legislativo — Bibliotecário · Banca Cebraspe
            </p>
          </div>
          <div className="text-right text-[10px] font-mono text-gray-600">
            <span>Síntese Doutrinária e Normativa</span>
            <br />
            <span>Uso Pessoal Exclusivo</span>
          </div>
        </div>
      </div>

      {/* BLOCO 1: FÓRMULAS E MÉTRICAS DE RECUPERAÇÃO E BIBLIOMETRIA */}
      <section className="card-editorial p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Sparkles className="w-4 h-4 text-accent print:text-black" />
          <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0">
            1. Fórmulas de SRI e Leis Bibliométricas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-2">
            <span className="font-bold text-accent print:text-black block text-sm">
              Revocação & Precisão (Lancaster / Salton)
            </span>
            <div className="space-y-1.5 font-mono text-[11px]">
              <p className="m-0">
                <strong>Revocação (Recall):</strong> R = A / (A + C)
                <span className="block text-[10px] text-ink-2 print:text-gray-700">
                  A = Relevantes Recuperados; C = Relevantes NÃO Recuperados (Omissões)
                </span>
              </p>
              <p className="m-0">
                <strong>Precisão (Precision):</strong> P = A / (A + B)
                <span className="block text-[10px] text-ink-2 print:text-gray-700">
                  A = Relevantes Recuperados; B = Não Relevantes Recuperados (Ruído)
                </span>
              </p>
              <p className="m-0">
                <strong>F-Score (Média Harmônica):</strong> F₁ = (2 · P · R) / (P + R)
              </p>
            </div>
            <p className="text-[11px] text-ink-2 print:text-black font-serif italic pt-1 border-t border-border">
              Regra de ouro Cebraspe: Revocação e Precisão mantêm relação INVERSA.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-2">
            <span className="font-bold text-accent print:text-black block text-sm">
              As 3 Leis da Bibliometria
            </span>
            <ul className="space-y-1.5 font-serif text-[11px] text-ink print:text-black list-disc pl-4 m-0">
              <li>
                <strong>Bradford (Dispersão de Periódicos):</strong> Núcleo de alta produtividade e zonas sucessivas na proporção <strong>1 : n : n²</strong>.
              </li>
              <li>
                <strong>Lotka (Produtividade dos Autores):</strong> O número de autores com n publicações é inversamente proporcional a <strong>1 / n²</strong> (cerca de 60% produzem apenas 1 artigo).
              </li>
              <li>
                <strong>Zipf (Frequência de Palavras):</strong> O produto do posto (r) pela frequência (f) é constante: <strong>r × f = C</strong>. Termos com maior poder discriminatório estão na <em>zona média</em> (ponto de corte de Luhn).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOCO 2: PRAZOS E REGRAS LEGISLATIVAS (RICD, CF/88 E LAI) */}
      <section className="card-editorial p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Clock className="w-4 h-4 text-accent print:text-black" />
          <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0">
            2. Prazos e Números Canônicos do Poder Legislativo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1.5">
            <span className="font-bold text-ink print:text-black block text-xs uppercase tracking-wider">
              Medida Provisória (CF art. 62)
            </span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Vigência de <strong>60 dias</strong>, prorrogável uma única vez por igual período (máx. <strong>120 dias</strong>).
            </p>
            <p className="text-[10px] text-accent print:text-black font-semibold m-0">
              Após 45 dias da publicação, entra em regime de urgência trancando a pauta.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1.5">
            <span className="font-bold text-ink print:text-black block text-xs uppercase tracking-wider">
              Veto Presidencial (CF art. 66)
            </span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Prazo de <strong>15 dias úteis</strong> para veto presidencial; o Congresso tem <strong>30 dias corridos</strong> para apreciar.
            </p>
            <p className="text-[10px] text-accent print:text-black font-semibold m-0">
              Rejeição exige MAIORIA ABSOLUTA de Deputados (257) e Senadores (41).
            </p>
          </div>

          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1.5">
            <span className="font-bold text-ink print:text-black block text-xs uppercase tracking-wider">
              Poder Conclusivo das Comissões
            </span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Comissões deliberam dispensando o Plenário (RICD art. 24, II).
            </p>
            <p className="text-[10px] text-accent print:text-black font-semibold m-0">
              Recurso ao Plenário: exige <strong>1/10 dos membros da Câmara</strong> (52 Deputados) em até 5 sessões.
            </p>
          </div>
        </div>

        {/* LAI e Depósito Legal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1.5">
            <span className="font-bold text-ink print:text-black block text-xs uppercase tracking-wider">
              Classificação de Sigilo (LAI - Lei 12.527/2011)
            </span>
            <ul className="text-[11px] font-mono text-ink print:text-black space-y-1 list-none p-0 m-0">
              <li>• Ultrassecreta: máximo de <strong>25 anos</strong> (renovável 1x)</li>
              <li>• Secreta: máximo de <strong>15 anos</strong></li>
              <li>• Reservada: máximo de <strong>5 anos</strong></li>
              <li>• Dados pessoais: proteção de até <strong>100 anos</strong></li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1.5">
            <span className="font-bold text-ink print:text-black block text-xs uppercase tracking-wider">
              Depósito Legal (Lei Federal 10.994/2004)
            </span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Remessa obrigatória de pelo menos 1 exemplar de publicação produzida em território nacional à Fundação Biblioteca Nacional no prazo máximo de <strong>30 dias</strong> após a publicação comercial.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 3: MAPA DE CAMPOS MARC 21 BIBLIOGRÁFICO */}
      <section className="card-editorial p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Layers className="w-4 h-4 text-accent print:text-black" />
          <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0">
            3. Mapa Canônico de Campos MARC 21
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">020 / 022</span>
            <span className="text-[11px] text-ink-2 print:text-black">020 = ISBN<br />022 = ISSN</span>
          </div>
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">080 / 082</span>
            <span className="text-[11px] text-ink-2 print:text-black">080 = CDU<br />082 = CDD</span>
          </div>
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">100 / 110 / 111</span>
            <span className="text-[11px] text-ink-2 print:text-black">100 = Pessoal<br />110 = Coletiva<br />111 = Evento</span>
          </div>
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">245 (Título)</span>
            <span className="text-[11px] text-ink-2 print:text-black">$a Título<br />$b Subtítulo<br />$c Responsabilidade</span>
          </div>
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">250 / 260 / 264</span>
            <span className="text-[11px] text-ink-2 print:text-black">250 = Edição<br />260 = Imprenta antiga<br />264 = Produção RDA</span>
          </div>
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">300 (Descrição)</span>
            <span className="text-[11px] text-ink-2 print:text-black">$a Extensão / págs<br />$b Detalhes físicos<br />$c Dimensões</span>
          </div>
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">600 / 610 / 650</span>
            <span className="text-[11px] text-ink-2 print:text-black">600 = Pessoa assunto<br />610 = Entidade assunto<br />650 = Tópico geral</span>
          </div>
          <div className="p-2.5 rounded bg-surface-2 border border-border print:border-gray-400">
            <span className="font-bold text-accent print:text-black block">700 / 856</span>
            <span className="text-[11px] text-ink-2 print:text-black">700 = Secundária<br />856 = URL / Acesso eletrônico</span>
          </div>
        </div>
      </section>

      {/* BLOCO 4: MODELO IFLA LRM & FRBR (WEMI) */}
      <section className="card-editorial p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <BookOpen className="w-4 h-4 text-accent print:text-black" />
          <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0">
            4. Hierarquia WEMI (IFLA LRM / RDA / FRBR)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1">
            <span className="font-bold text-accent print:text-black block text-sm">Obra (Work)</span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Criação intelectual ou artística pura e abstrata.
            </p>
            <span className="text-[10px] font-mono text-ink-2 block">Ex: Dom Casmurro</span>
          </div>

          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1">
            <span className="font-bold text-accent print:text-black block text-sm">Expressão</span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Realização intelectual sob forma de sinais linguísticos ou sonoros.
            </p>
            <span className="text-[10px] font-mono text-ink-2 block">Ex: Tradução para inglês</span>
          </div>

          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1">
            <span className="font-bold text-accent print:text-black block text-sm">Manifestação</span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Corporificação física do conjunto de exemplares publicados.
            </p>
            <span className="text-[10px] font-mono text-ink-2 block">Ex: Edição Record 2024</span>
          </div>

          <div className="p-3 rounded-lg bg-surface-2 border border-border print:border-gray-400 space-y-1">
            <span className="font-bold text-accent print:text-black block text-sm">Item</span>
            <p className="text-[11px] text-ink-2 print:text-black leading-snug m-0">
              Exemplar físico ou digital único e individualizado na biblioteca.
            </p>
            <span className="text-[10px] font-mono text-ink-2 block">Ex: Tombo nº 142.508</span>
          </div>
        </div>
      </section>

      {/* BLOCO 5: TOP 10 PEGADINHAS CEBRASPE CRÍTICAS */}
      <section className="card-editorial p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 print:text-black" />
          <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0">
            5. As 10 Pegadinhas Mais Recorrentes do Cebraspe
          </h2>
        </div>

        <ol className="text-xs space-y-2 font-serif text-ink print:text-black pl-4 m-0 leading-relaxed">
          <li>
            <strong>Borko vs Le Coadic:</strong> A definição de CI (comportamento e fluxo da informação) é de <em>Harold Borko (1968)</em>. Le Coadic divide a disciplina em biblioteconomia dos livros (técnica) e dos leitores (usuários).
          </li>
          <li>
            <strong>Antílope de Suzanne Briet:</strong> O animal selvagem na savana NÃO é documento; capturado e catalogado no zoológico torna-se <em>documento primário</em> (exige materialidade, intencionalidade, tratamento e valor probatório).
          </li>
          <li>
            <strong>As Leis de Ranganathan:</strong> A 4ª Lei ("Poupe o tempo do leitor") fundamenta <em>livre acesso às estantes</em> e catálogos eficientes, NUNCA estantes fechadas burocráticas.
          </li>
          <li>
            <strong>FRBR Expressão vs Manifestação:</strong> Tradução em novo idioma cria <em>NOVA EXPRESSÃO</em>. Mudança apenas na editora, formato ou capa cria <em>NOVA MANIFESTAÇÃO</em>.
          </li>
          <li>
            <strong>Dublin Core:</strong> Todos os 15 elementos constitutivos simples são <em>opcionais e repetíveis</em> por definição canônica do padrão DCMI.
          </li>
          <li>
            <strong>CDD Notação Pura:</strong> A Classificação Decimal de Dewey utiliza <em>notação pura decimal</em>, nunca mista com letras nas 10 classes fundamentais.
          </li>
          <li>
            <strong>Revocação e Precisão:</strong> Em buscas com operadores booleanos, <em>OR aumenta a revocação</em> (e tende a reduzir a precisão); <em>AND e NOT aumentam a precisão</em> (e tendem a reduzir a revocação).
          </li>
          <li>
            <strong>Indexação Sintática vs Pré-Coordenada:</strong> A pré-coordenação combina os termos na <em>fase de entrada/indexação</em> (ex: cabeçalhos de assunto). A pós-coordenação combina na <em>fase de busca pelo usuário</em> (sistemas computadorizados).
          </li>
          <li>
            <strong>Tramitação Conclusiva:</strong> Comissões da Câmara exercem poder terminativo, MAS recurso com <em>1/10 dos membros</em> (52 Deputados) submete o projeto ao Plenário.
          </li>
          <li>
            <strong>Sigilo LAI:</strong> O prazo máximo para documentos <em>ultrassecretos é 25 anos</em>, renovável por mais 25 anos (total 50 anos). Documentos sobre direitos humanos violados <em>não podem ter sigilo</em>.
          </li>
        </ol>
      </section>

      {/* RODAPÉ DE IMPRESSÃO */}
      <div className="hidden print:block text-center text-[10px] text-gray-500 pt-4 border-t border-gray-300">
        Plataforma Heuller na Câmara · Analista Legislativo — Bibliotecário · Preparação de Alta Performance
      </div>
    </div>
  );
};
