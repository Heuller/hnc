import React, { useState, useEffect, useRef } from 'react';
import {
  Scale,
  X,
  Send,
  Loader2,
  CheckCircle2,
  BookmarkPlus,
  BookOpen,
  HelpCircle,
  Sparkles,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { ItemCadernoErro } from '../../domain/cadernoErros';
import type { SessaoSocratica } from '../../domain/socratic/types';
import {
  iniciarSessaoSocratica,
  enviarArgumentoBanca,
  marcarSessaoSuperada,
} from '../../domain/socratic/socraticService';
import { useProgressStore } from '../../store/useProgressStore';

interface DialogoBancaModalProps {
  item: ItemCadernoErro | null;
  isOpen: boolean;
  onClose: () => void;
  onSuperadoChange?: (itemId: string, superado: boolean) => void;
}

export const DialogoBancaModal: React.FC<DialogoBancaModalProps> = ({
  item,
  isOpen,
  onClose,
  onSuperadoChange,
}) => {
  const { salvarTermoVocabulario, isTermoSalvo } = useProgressStore();

  const [sessao, setSessao] = useState<SessaoSocratica | null>(null);
  const [carregandoInicial, setCarregandoInicial] = useState<boolean>(false);
  const [enviandoArgumento, setEnviandoArgumento] = useState<boolean>(false);
  const [argumentoInput, setArgumentoInput] = useState<string>('');
  const [mostrarDetalhesItem, setMostrarDetalhesItem] = useState<boolean>(true);
  const [salvoNoBaralhoToast, setSalvoNoBaralhoToast] = useState<boolean>(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Carrega ou inicializa a sessão quando o item for aberto
  useEffect(() => {
    if (!isOpen || !item) {
      setSessao(null);
      return;
    }

    let ativo = true;
    setCarregandoInicial(true);

    iniciarSessaoSocratica(item)
      .then((sess) => {
        if (ativo) {
          setSessao(sess);
          setCarregandoInicial(false);
        }
      })
      .catch((err) => {
        console.error('Erro ao iniciar sessão socrática:', err);
        if (ativo) setCarregandoInicial(false);
      });

    return () => {
      ativo = false;
    };
  }, [isOpen, item]);

  // Rola até o final das mensagens
  useEffect(() => {
    if (sessao && sessao.mensagens.length > 0) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sessao?.mensagens]);

  // Fecha com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const gabaritoExtenso = item.gabarito === 'C' ? 'CERTO' : 'ERRADO';
  const escolhaExtensa = item.respostaUsuario === 'C' ? 'CERTO' : 'ERRADO';
  const cardIdBaralho = `baralho-soc-${item.id}`;
  const jaSalvo = isTermoSalvo(cardIdBaralho);

  const handleEnviar = async (textoPersonalizado?: string) => {
    const texto = textoPersonalizado || argumentoInput;
    if (!texto.trim() || !sessao || enviandoArgumento) return;

    setEnviandoArgumento(true);
    setArgumentoInput('');

    try {
      const atualizada = await enviarArgumentoBanca(sessao, texto);
      setSessao(atualizada);
    } catch (err) {
      console.error('Falha ao enviar argumento:', err);
    } finally {
      setEnviandoArgumento(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleAlternarSuperado = () => {
    if (!sessao) return;
    const novoStatus = !sessao.superado;
    const atualizada = marcarSessaoSuperada(sessao.itemId, novoStatus);
    if (atualizada) {
      setSessao({ ...atualizada });
      onSuperadoChange?.(sessao.itemId, novoStatus);
    }
  };

  const handleSalvarNoBaralho = () => {
    if (!sessao?.parecerInicial) return;
    const { sugestaoBaralho, fundamentacao } = sessao.parecerInicial;

    salvarTermoVocabulario({
      id: cardIdBaralho,
      termo: `[Cebraspe] ${item.assertiva.slice(0, 48)}...`,
      area: item.macroModuloTitulo,
      definicaoCurta: sugestaoBaralho?.verso || item.justificativa,
      armadilhaResumo: `${sessao.parecerInicial.pontoCegoIdentificado} (Ref: ${fundamentacao.autor})`,
      dataSalvamento: new Date().toISOString(),
    });

    setSalvoNoBaralhoToast(true);
    setTimeout(() => setSalvoNoBaralhoToast(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialogo-banca-titulo"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-surface border border-border rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-editorial-xl overflow-hidden">
        {/* CABEÇALHO EDITORIAL DO TRIBUNAL DA BANCA */}
        <header className="p-4 sm:p-5 border-b border-border bg-surface-2 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-600/20 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-500/30">
                  Tribunal da Banca Cebraspe
                </span>
                <span className="text-xs font-mono text-ink-2 hidden sm:inline">
                  {item.macroModuloTitulo}
                </span>
              </div>
              <h2
                id="dialogo-banca-titulo"
                className="text-base sm:text-lg font-serif font-bold text-ink tracking-tight m-0"
              >
                Parecer Técnico & Diálogo Socrático com o Examinador
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {sessao?.superado && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Superado</span>
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
              title="Fechar (Esc)"
              aria-label="Fechar diálogo com a banca"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* CORPO DO DIÁLOGO */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-surface/50">
          {/* CARD DO ITEM EM JULGAMENTO (RETRÁTIL) */}
          <div className="card-editorial p-4 border border-border/90 bg-surface space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-ink-2 uppercase">
                  Assertiva em Julgamento:
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 border border-border text-ink">
                  {item.tituloContexto}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMostrarDetalhesItem(!mostrarDetalhesItem)}
                className="text-xs font-semibold text-accent hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{mostrarDetalhesItem ? 'Recolher' : 'Expandir'}</span>
                {mostrarDetalhesItem ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {mostrarDetalhesItem && (
              <>
                <div className="p-3.5 rounded-lg bg-surface-2/80 border border-border/80">
                  <p className="font-serif-reading text-sm sm:text-base text-ink leading-relaxed m-0 select-text">
                    "{item.assertiva}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                    <span className="text-amber-800 dark:text-amber-300 font-semibold">Você marcou:</span>
                    <span className="font-bold text-amber-700 dark:text-amber-400">{escolhaExtensa}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                    <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Gabarito Oficial:</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">{gabaritoExtenso}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ESTADO DE CARREGAMENTO INICIAL */}
          {carregandoInicial && (
            <div className="p-12 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-amber-600 animate-spin mx-auto" />
              <p className="font-serif text-sm text-ink-2">
                O Examinador Titular do Cebraspe está redigindo o Parecer Técnico e estruturando o desafio conceitual...
              </p>
            </div>
          )}

          {/* FUNDAMENTAÇÃO CANÔNICA (SE DISPONÍVEL) */}
          {sessao?.parecerInicial?.fundamentacao && (
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Autoridade e Obra de Referência da Banca</span>
              </div>
              <div className="text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                <strong>{sessao.parecerInicial.fundamentacao.autor}</strong> —{' '}
                <span className="italic">{sessao.parecerInicial.fundamentacao.obraOuNorma}</span>
              </div>
              <blockquote className="m-0 pl-3 border-l-2 border-amber-500/50 text-xs sm:text-sm font-serif-reading text-amber-900/90 dark:text-amber-300/90 italic leading-relaxed">
                "{sessao.parecerInicial.fundamentacao.citacao}"
              </blockquote>
            </div>
          )}

          {/* HISTÓRICO DE MENSAGENS SOCRÁTICAS */}
          {sessao && sessao.mensagens.length > 0 && (
            <div className="space-y-4 pt-1">
              {sessao.mensagens.map((msg) => {
                const ehBanca = msg.remetente === 'banca';

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${ehBanca ? 'justify-start' : 'justify-end'}`}
                  >
                    {ehBanca && (
                      <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Scale className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 sm:p-5 space-y-2 shadow-editorial-sm ${
                        ehBanca
                          ? 'bg-surface border border-border text-ink'
                          : 'bg-primary text-primary-text border border-primary/20'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 text-[11px] font-mono opacity-75 border-b border-border/40 pb-1.5 mb-2">
                        <span className="font-bold">
                          {ehBanca ? 'Examinador Titular Cebraspe' : 'Recurso / Argumento do Candidato'}
                        </span>
                        <span>{new Date(msg.dataHora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>

                      <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-serif-reading">
                        {msg.conteudo}
                      </div>
                    </div>
                  </div>
                );
              })}

              {enviandoArgumento && (
                <div className="flex gap-3 justify-start items-center text-xs text-ink-2 pl-11">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                  <span className="font-serif italic">Examinando o pleito e cotejando com a bibliografia...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>
          )}

          {/* SUGESTÕES RÁPIDAS DE ARGUMENTO / RECURSO */}
          {sessao && !enviandoArgumento && (
            <div className="space-y-1.5 pt-2">
              <span className="text-[11px] font-mono text-ink-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Provocações sugeridas para aprofundar:</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Por que não cabe recurso contra este gabarito?',
                  'Qual palavra ou advérbio anula a assertiva?',
                  'Como diferenciar este conceito no dia da prova?',
                  'Como a Câmara dos Deputados aplica essa regra no acervo?',
                ].map((sugestao, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleEnviar(sugestao)}
                    className="px-2.5 py-1 rounded-lg bg-surface-2 hover:bg-surface border border-border text-[11px] text-ink hover:text-accent transition-colors cursor-pointer text-left"
                  >
                    "{sugestao}"
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* BARRA DE ENTRADA DE ARGUMENTOS & AÇÕES DE RECURSO */}
        <footer className="p-3 sm:p-4 border-t border-border bg-surface-2 space-y-3 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEnviar();
            }}
            className="flex gap-2 items-center"
          >
            <textarea
              ref={inputRef}
              rows={2}
              value={argumentoInput}
              onChange={(e) => setArgumentoInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleEnviar();
                }
              }}
              placeholder="Digite seu recurso, contra-argumento ou responda ao desafio da banca (Enter para enviar)..."
              disabled={enviandoArgumento || carregandoInicial}
              className="flex-1 p-2.5 text-xs sm:text-sm rounded-xl bg-surface border border-border text-ink focus:outline-none focus:border-accent resize-none transition-colors"
            />

            <button
              type="submit"
              disabled={!argumentoInput.trim() || enviandoArgumento || carregandoInicial}
              className="px-4 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-editorial-sm shrink-0"
              title="Submeter argumento à banca examinadora"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Peticionar</span>
            </button>
          </form>

          {/* LINHA DE AÇÕES AUXILIARES */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-border/50 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSalvarNoBaralho}
                disabled={!sessao?.parecerInicial}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-ink hover:border-accent transition-colors cursor-pointer text-xs font-semibold"
                title="Salvar resumo desta armadilha no Meu Baralho de vocabulário"
              >
                {jaSalvo || salvoNoBaralhoToast ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Salvo no Meu Baralho!</span>
                  </>
                ) : (
                  <>
                    <BookmarkPlus className="w-4 h-4 text-accent" />
                    <span>Salvar no Meu Baralho</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleAlternarSuperado}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer text-xs font-semibold ${
                  sessao?.superado
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400'
                    : 'bg-surface border-border text-ink hover:border-accent'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{sessao?.superado ? 'Lacuna Superada ✓' : 'Marcar como Superado'}</span>
              </button>
            </div>

            <div className="text-[11px] text-ink-2 font-mono flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Baseado no edital e jurisprudência Cebraspe</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
