import React, { useState, useEffect, useMemo, useRef } from 'react';
import mermaid from 'mermaid';
import {
  Workflow,
  ListTree,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Code2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  AlertCircle,
  Eye,
} from 'lucide-react';

export interface EditorialDiagramProps {
  code: string;
  className?: string;
  isDark?: boolean;
}

export interface ParsedNode {
  id: string;
  label: string;
  title: string;
  details: string[];
  isDecision: boolean;
  isExample: boolean;
}

export interface ParsedEdge {
  from: string;
  to: string;
  label?: string;
  isPositive: boolean;
  isNegative: boolean;
}

export interface ParsedGraph {
  title: string;
  nodes: ParsedNode[];
  edges: ParsedEdge[];
  nodeMap: Map<string, ParsedNode>;
  roots: ParsedNode[];
}

function parseMermaidText(rawCode: string): ParsedGraph {
  const lines = rawCode.trim().split('\n');
  const nodeMap = new Map<string, ParsedNode>();
  const edges: ParsedEdge[] = [];
  let title = '';

  const cleanLabel = (text: string) => {
    return text
      .replace(/<br\s*\/?>/gi, ' - ')
      .replace(/\\"/g, '"')
      .replace(/^["']|["']$/g, '')
      .trim();
  };

  const processNode = (id: string, rawLabelText: string, shapeType: string): ParsedNode => {
    const label = cleanLabel(rawLabelText || id);
    const parts = label.split(' - ').map(p => p.trim()).filter(Boolean);
    const mainTitle = parts[0] || label;
    const details = parts.slice(1);

    const isDecision = shapeType === 'decision' || mainTitle.includes('?') || mainTitle.toLowerCase().includes('analise');
    const isExample = mainTitle.startsWith('Ex:') || mainTitle.includes('$a') || mainTitle.includes('MARC 21');

    return {
      id,
      label,
      title: mainTitle,
      details,
      isDecision,
      isExample,
    };
  };

  const extractNodeDef = (str: string): ParsedNode => {
    const trimmed = str.trim();
    const match = trimmed.match(/^([A-Za-z0-9_-]+)(?:\["?(.*?)"?\]|\{"?([^"}]*?)"?\}|\("?(.*?)"?\))?$/s);
    if (match) {
      const id = match[1];
      const rawText = match[2] ?? match[3] ?? match[4] ?? id;
      const shapeType = match[3] !== undefined ? 'decision' : 'box';
      return processNode(id, rawText, shapeType);
    }
    return processNode(trimmed, trimmed, 'box');
  };

  lines.forEach(rawLine => {
    const line = rawLine.trim();
    if (!line || line.startsWith('%%')) return;

    if (line.startsWith('subgraph ')) {
      title = line.replace('subgraph', '').replace(/[[\]"']/g, '').trim();
      return;
    }
    if (line === 'end' || line.startsWith('graph ') || line.startsWith('flowchart ')) return;

    const arrowRegex = /(-->|---|==>|-\.->)(?:\|([^|]+)\|)?/g;
    const matches = Array.from(line.matchAll(arrowRegex));

    if (matches.length > 0) {
      const parts: { fromText: string; arrow: string; label?: string }[] = [];
      let lastIndex = 0;
      matches.forEach(m => {
        parts.push({
          fromText: line.substring(lastIndex, m.index).trim(),
          arrow: m[1],
          label: m[2] ? m[2].trim() : undefined,
        });
        lastIndex = m.index + m[0].length;
      });
      const finalToText = line.substring(lastIndex).trim();

      for (let i = 0; i < parts.length; i++) {
        const fromNode = extractNodeDef(parts[i].fromText);
        const toNode = (i === parts.length - 1) ? extractNodeDef(finalToText) : extractNodeDef(parts[i + 1].fromText);

        if (!nodeMap.has(fromNode.id) || (fromNode.label !== fromNode.id && nodeMap.get(fromNode.id)?.label === fromNode.id)) {
          nodeMap.set(fromNode.id, fromNode);
        }
        if (!nodeMap.has(toNode.id) || (toNode.label !== toNode.id && nodeMap.get(toNode.id)?.label === toNode.id)) {
          nodeMap.set(toNode.id, toNode);
        }

        const rawEdgeLabel = parts[i].label;
        const lowerLabel = (rawEdgeLabel || '').toLowerCase();
        const isPositive = lowerLabel.startsWith('sim') || lowerLabel.includes('correto');
        const isNegative = lowerLabel.startsWith('não') || lowerLabel.startsWith('nao') || lowerLabel.includes('exceção');

        edges.push({
          from: fromNode.id,
          to: toNode.id,
          label: rawEdgeLabel,
          isPositive,
          isNegative,
        });
      }
    } else {
      const single = extractNodeDef(line);
      if (single.id && !nodeMap.has(single.id)) {
        nodeMap.set(single.id, single);
      }
    }
  });

  const nodes = Array.from(nodeMap.values());
  const incoming = new Set(edges.map(e => e.to));
  const roots = nodes.filter(n => !incoming.has(n.id));
  if (roots.length === 0 && nodes.length > 0) {
    roots.push(nodes[0]);
  }

  if (!title) {
    const hasDecision = nodes.some(n => n.isDecision);
    if (hasDecision) title = 'Fluxo Decisório Cebraspe';
    else if (roots.length > 0) title = roots[0].title;
    else title = 'Esquema Conceitual';
  }

  return { title, nodes, edges, nodeMap, roots };
}

let diagramCounter = 0;

export const EditorialDiagram: React.FC<EditorialDiagramProps> = ({
  code,
  className = '',
  isDark: propIsDark,
}) => {
  const [viewMode, setViewMode] = useState<'visual' | 'tree' | 'code'>('visual');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [svgContent, setSvgContent] = useState<string>('');
  const [renderError, setRenderError] = useState<string | null>(null);

  const svgHostRef = useRef<HTMLDivElement>(null);
  const fullscreenSvgHostRef = useRef<HTMLDivElement>(null);

  // Detecção ativa de dark mode caso a prop não seja explicitamente informada
  const [effectiveIsDark, setEffectiveIsDark] = useState<boolean>(() => {
    if (typeof propIsDark === 'boolean') return propIsDark;
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (typeof propIsDark === 'boolean') {
      setEffectiveIsDark(propIsDark);
      return;
    }
    const observer = new MutationObserver(() => {
      setEffectiveIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [propIsDark]);

  const parsed = useMemo(() => parseMermaidText(code), [code]);

  // Renderização do SVG vetorial com o Mermaid
  useEffect(() => {
    let isCancelled = false;
    diagramCounter++;
    const uniqueId = `mermaid-diag-${diagramCounter}-${Date.now().toString(36)}`;

    async function renderSvg() {
      try {
        const themeVars = effectiveIsDark
          ? {
              darkMode: true,
              background: 'transparent',
              mainBkg: '#1B2440',
              nodeBorder: '#3B4B75',
              textColor: '#E9ECF5',
              lineColor: '#94A3B8',
              primaryColor: '#1B2440',
              primaryTextColor: '#E9ECF5',
              primaryBorderColor: '#3B4B75',
              secondaryColor: '#141B2E',
              secondaryTextColor: '#A9B2C7',
              secondaryBorderColor: '#2A3555',
              tertiaryColor: '#202942',
              tertiaryTextColor: '#E9ECF5',
              tertiaryBorderColor: '#3B4B75',
              edgeLabelBackground: '#141B2E',
              clusterBkg: '#141B2E',
              clusterBorder: '#2A3555',
              titleColor: '#FBBF24',
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontSize: '13px',
            }
          : {
              darkMode: false,
              background: 'transparent',
              mainBkg: '#FFFFFF',
              nodeBorder: '#D8D1C2',
              textColor: '#1A2238',
              lineColor: '#64748B',
              primaryColor: '#FFFFFF',
              primaryTextColor: '#1A2238',
              primaryBorderColor: '#D8D1C2',
              secondaryColor: '#F2EEE4',
              secondaryTextColor: '#4A5468',
              secondaryBorderColor: '#E4DED0',
              tertiaryColor: '#FAF7F0',
              tertiaryTextColor: '#1A2238',
              tertiaryBorderColor: '#D8D1C2',
              edgeLabelBackground: '#F2EEE4',
              clusterBkg: '#FAF7F0',
              clusterBorder: '#E4DED0',
              titleColor: '#16244A',
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontSize: '13px',
            };

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          theme: 'base',
          themeVariables: themeVars,
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
            curve: 'basis',
            padding: 16,
            nodeSpacing: 40,
            rankSpacing: 45,
          },
        });

        // Garantir que a sintaxe tenha graph TD ou flowchart TD se omitido
        let normalizedCode = code.trim();
        if (!normalizedCode.startsWith('graph ') && !normalizedCode.startsWith('flowchart ') && !normalizedCode.startsWith('subgraph ')) {
          normalizedCode = `graph TD\n${normalizedCode}`;
        }

        const { svg } = await mermaid.render(uniqueId, normalizedCode);
        if (!isCancelled) {
          // Ajustar SVG para ter estilo limpo e responsivo
          const cleanedSvg = svg
            .replace(/width="[^"]*"/, 'width="100%"')
            .replace(/style="max-width:[^;"]*;?/, 'style="');
          setSvgContent(cleanedSvg);
          setRenderError(null);
        }
      } catch (err: any) {
        if (!isCancelled) {
          console.warn('[EditorialDiagram] Erro no renderizador vetorial:', err);
          setRenderError(err?.message || 'Erro ao gerar o diagrama vetorial.');
        }
      }
    }

    renderSvg();

    return () => {
      isCancelled = true;
      const el = document.getElementById(uniqueId);
      if (el) el.remove();
    };
  }, [code, effectiveIsDark]);

  // Anexação direta e segura de elementos SVG no DOM via DOMParser nativo
  useEffect(() => {
    if (!svgContent) return;

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgElement = doc.documentElement;

      if (svgHostRef.current && svgElement) {
        svgHostRef.current.replaceChildren(svgElement.cloneNode(true));
      }

      if (fullscreenSvgHostRef.current && svgElement) {
        fullscreenSvgHostRef.current.replaceChildren(svgElement.cloneNode(true));
      }
    } catch (e) {
      console.warn('[EditorialDiagram] Falha ao anexar SVG no host DOM:', e);
    }
  }, [svgContent, viewMode, isFullscreen]);

  const handleCopy = () => {
    let text = `# ${parsed.title}\n\n`;
    parsed.nodes.forEach(n => {
      text += `* **${n.title}**\n`;
      if (n.details.length > 0) {
        n.details.forEach(d => {
          text += `  - ${d}\n`;
        });
      }
    });
    if (parsed.edges.length > 0) {
      text += '\n### Conexões e Relações:\n';
      parsed.edges.forEach(e => {
        const fromNode = parsed.nodeMap.get(e.from)?.title || e.from;
        const toNode = parsed.nodeMap.get(e.to)?.title || e.to;
        text += `- ${fromNode} ➔ ${toNode}${e.label ? ` (${e.label})` : ''}\n`;
      });
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(2.0, +(prev + 0.15).toFixed(2)));
  const handleZoomOut = () => setZoom(prev => Math.max(0.5, +(prev - 0.15).toFixed(2)));
  const handleZoomReset = () => setZoom(1);

  return (
    <>
      <div className={`my-6 rounded-2xl border border-border bg-surface shadow-editorial-sm overflow-hidden min-w-0 transition-all ${className}`}>
        {/* Cabeçalho Editorial com Identidade "Papel e Tinta" */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-surface-2/60 border-b border-border flex flex-wrap items-center justify-between gap-3 min-w-0">
          {/* Título & Badge de Retenção */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0 shadow-2xs">
              <Workflow className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <h4 className="font-serif font-bold text-sm sm:text-[15px] text-ink truncate">
                  {parsed.title}
                </h4>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-surface text-ink-2 border border-border shrink-0">
                  Infográfico Cebraspe
                </span>
              </div>
              <p className="text-[11px] text-ink-2 truncate">
                {parsed.nodes.length > 0 ? `${parsed.nodes.length} conceitos mapeados` : 'Esquema Conceitual'} • Representação Canônica
              </p>
            </div>
          </div>

          {/* Ferramentas e Seletor de Modo */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Seletor Segmentado */}
            <div className="inline-flex p-0.5 rounded-lg bg-surface border border-border text-xs font-medium shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('visual')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 text-xs font-sans ${
                  viewMode === 'visual'
                    ? 'bg-accent text-accent-text font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
                title="Exibir infográfico visual interativo"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Visual</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('tree')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 text-xs font-sans ${
                  viewMode === 'tree'
                    ? 'bg-accent text-accent-text font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
                title="Exibir resumo hierárquico em tópicos"
              >
                <ListTree className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tópicos</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('code')}
                className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 text-xs font-mono ${
                  viewMode === 'code'
                    ? 'bg-accent text-accent-text font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
                title="Ver código fonte do esquema"
              >
                <Code2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Ações: Copiar Síntese */}
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors flex items-center gap-1.5 text-xs font-medium shadow-2xs cursor-pointer"
              title="Copiar síntese do esquema para Anki ou Resumos"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-ok" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            {/* Ações: Expandir em Tela Cheia */}
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="p-1.5 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors shadow-2xs cursor-pointer"
              title="Expandir diagrama em tela cheia com zoom"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Corpo do Diagrama */}
        <div className="p-4 sm:p-6 min-w-0 bg-surface">
          {viewMode === 'visual' && (
            <div className="space-y-3 min-w-0">
              {/* Barra de Controles de Zoom Flutuante Discreta */}
              <div className="flex items-center justify-between text-xs text-ink-2 pb-2 border-b border-border/50">
                <span className="text-[11px] font-mono text-ink-2 flex items-center gap-1">
                  <span>💡</span>
                  <span className="hidden sm:inline">Arraste para navegar ou use o zoom</span>
                  <span className="sm:hidden">Deslize para ver detalhes</span>
                </span>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.6}
                    className="p-1 rounded hover:bg-surface-2 text-ink-2 hover:text-ink disabled:opacity-40 cursor-pointer"
                    title="Diminuir zoom"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[11px] w-12 text-center select-none font-semibold text-ink">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={zoom >= 1.8}
                    className="p-1 rounded hover:bg-surface-2 text-ink-2 hover:text-ink disabled:opacity-40 cursor-pointer"
                    title="Aumentar zoom"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  {zoom !== 1 && (
                    <button
                      type="button"
                      onClick={handleZoomReset}
                      className="p-1 rounded hover:bg-surface-2 text-accent cursor-pointer ml-1"
                      title="Redefinir zoom para 100%"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Área Vetorial com Rolagem Segura e Zero Colisão */}
              {renderError ? (
                <div className="p-4 rounded-xl border border-alerta/30 bg-alerta-soft text-ink flex items-start gap-3 text-xs">
                  <AlertCircle className="w-4 h-4 text-alerta shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-alerta mb-1">Modo de Exibição em Tópicos Ativado</strong>
                    <p className="text-ink-2">Não foi possível calcular o traçado vetorial específico. Você pode ler o esquema completo na aba <strong>Tópicos</strong>.</p>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full overflow-x-auto overflow-y-hidden py-3 px-1 scroll-smooth select-none flex justify-center"
                  style={{
                    cursor: zoom > 1 ? 'grab' : 'default',
                  }}
                >
                  <div
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: 'top center',
                      transition: 'transform 0.15s ease-out',
                      minWidth: 'fit-content',
                    }}
                    className="mermaid-svg-container max-w-full flex justify-center"
                    ref={svgHostRef}
                  >
                    {!svgContent && (
                      <div className="py-12 flex flex-col items-center justify-center text-ink-2 gap-2 text-xs">
                        <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                        <span>Renderizando diagrama vetorial...</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {viewMode === 'tree' && (
            <div className="p-2 sm:p-3 space-y-4 min-w-0">
              <div className="pb-3 border-b border-border flex items-center justify-between text-xs">
                <span className="font-mono font-bold uppercase tracking-wider text-ink-2">
                  Árvore de Síntese para Memorização Cebraspe
                </span>
                <span className="font-mono text-accent font-semibold">
                  {parsed.nodes.length} nós • {parsed.edges.length} conexões
                </span>
              </div>

              <div className="space-y-4 font-sans text-ink min-w-0">
                {parsed.roots.map((root, rIdx) => {
                  const childEdges = parsed.edges.filter(e => e.from === root.id);
                  return (
                    <div key={rIdx} className="space-y-2 min-w-0">
                      <div className="font-bold text-sm sm:text-base text-ink flex items-center gap-2 min-w-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                        <span className="min-w-0 break-words">{root.title}</span>
                      </div>

                      {childEdges.length > 0 && (
                        <div className="ml-4 sm:ml-6 pl-3 sm:pl-4 border-l-2 border-border/80 space-y-2.5 min-w-0">
                          {childEdges.map((e, cIdx) => {
                            const child = parsed.nodeMap.get(e.to);
                            if (!child) return null;
                            const grandChildren = parsed.edges.filter(ge => ge.from === child.id);

                            return (
                              <div key={cIdx} className="space-y-1.5 min-w-0">
                                <div className="text-xs sm:text-[13.5px] font-semibold text-ink flex items-baseline gap-2 min-w-0 flex-wrap">
                                  <span className="text-accent shrink-0">↳</span>
                                  <span className="min-w-0 break-words">{child.title}</span>
                                  {e.label && (
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono font-bold shrink-0 ${
                                      e.isPositive
                                        ? 'bg-ok-soft text-ok border-ok/30'
                                        : e.isNegative
                                        ? 'bg-alerta-soft text-alerta border-alerta/30'
                                        : 'bg-surface-2 text-ink-2 border-border'
                                    }`}>
                                      {e.label}
                                    </span>
                                  )}
                                </div>

                                {child.details.length > 0 && (
                                  <div className="ml-5 text-xs text-ink-2 space-y-0.5">
                                    {child.details.map((d, dIdx) => (
                                      <p key={dIdx} className="leading-relaxed">• {d}</p>
                                    ))}
                                  </div>
                                )}

                                {grandChildren.length > 0 && (
                                  <div className="ml-4 sm:ml-6 pl-3 border-l-2 border-border/50 space-y-1.5 min-w-0 pt-1">
                                    {grandChildren.map((ge, gIdx) => {
                                      const gChild = parsed.nodeMap.get(ge.to);
                                      if (!gChild) return null;
                                      return (
                                        <div key={gIdx} className="text-xs sm:text-[13px] text-ink-2 flex items-baseline gap-2 min-w-0 flex-wrap">
                                          <span className="text-ink-2 shrink-0">›</span>
                                          <span className={`min-w-0 break-words ${gChild.isExample ? 'font-mono text-accent font-semibold' : ''}`}>
                                            {gChild.title}
                                          </span>
                                          {ge.label && (
                                            <span className="text-[9px] px-1.5 py-0.2 rounded border font-mono bg-surface-2 text-ink-2 border-border shrink-0">
                                              {ge.label}
                                            </span>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === 'code' && (
            <div className="relative">
              <pre className="font-mono text-xs p-4 rounded-xl bg-surface-2 border border-border text-ink overflow-x-auto leading-relaxed">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Modal em Tela Cheia Imersivo com Zoom Avançado */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-6xl max-h-[92vh] bg-surface rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-border bg-surface-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 min-w-0">
                <Workflow className="w-5 h-5 text-accent shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-base text-ink truncate">
                    {parsed.title}
                  </h3>
                  <span className="text-[11px] text-ink-2 font-mono">
                    Visualização Ampliada de Alta Retenção
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1 bg-surface px-2 py-1 rounded-lg border border-border">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="p-1 hover:text-accent cursor-pointer"
                    title="Diminuir"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs w-12 text-center font-bold text-ink">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="p-1 hover:text-accent cursor-pointer"
                    title="Aumentar"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomReset}
                    className="p-1 hover:text-accent cursor-pointer ml-1 text-ink-2"
                    title="100%"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 rounded-xl border border-border bg-surface hover:bg-surface-2 text-ink transition-colors cursor-pointer"
                  title="Fechar tela cheia"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto p-6 sm:p-8 flex items-center justify-center bg-surface">
              <div
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.15s ease-out',
                }}
                className="mermaid-svg-container max-w-none flex justify-center"
                ref={fullscreenSvgHostRef}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
