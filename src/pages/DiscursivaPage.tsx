import React, { useState, useEffect, useMemo } from 'react';
import {
  PenTool,
  Copy,
  Check,
  Plus,
  BookOpen,
  Save,
} from 'lucide-react';
import { Button } from '../components/common/Button';

interface EnunciadoDiscursiva {
  id: string;
  tipo: 'questao_20' | 'peca_50';
  titulo: string;
  enunciado: string;
  limiteLinhas: number;
}

interface VersaoTexto {
  id: string;
  dataHora: string;
  texto: string;
  linhasEstimadas: number;
  devolutiva?: string;
}

const CARACTERES_POR_LINHA_ESTIMATIVA = 70;

const RUBRICA_PADRAO = `1. Domínio Técnico do Conteúdo (peso 50%): exatidão conceitual, citação de marcos canônicos/normativos e adequação ao tema.
2. Estrutura e Coesão Textual (peso 30%): progressão lógica, introdução/desenvolvimento/conclusão, conectivos e paragrafação.
3. Correção Linguística (peso 20%): concordância, regência, pontuação, ortografia oficial e vocabulário técnico.`;

const PROMPT_CORRECAO_TEMPLATE = `Você é um corretor experiente de provas discursivas de concursos públicos do Cebraspe, com conhecimento de Biblioteconomia e Ciência da Informação. Avalie o texto de um candidato ao cargo de Analista Legislativo (Bibliotecário) da Câmara dos Deputados.
REGRAS: (1) Não invente critérios oficiais: use somente a rubrica de estudo abaixo e informe que ela não é a oficial. (2) Para cada critério, dê uma nota estimada com faixa de incerteza e cite os trechos que a justificam. (3) Aponte erros de língua portuguesa (gramática, pontuação, coesão), citando o trecho e a correção. (4) Aponte lacunas de conteúdo técnico; se não tiver segurança sobre algum ponto de Biblioteconomia ou de legislação, diga isso explicitamente em vez de afirmar. (5) Não reescreva o texto inteiro; ofereça, no máximo, a reescrita de um parágrafo como exemplo. (6) Verifique o limite de linhas.
DADOS: Tipo: {{tipo}} | Limite: {{limite_linhas}} linhas | Enunciado: {{enunciado}} | Rubrica de estudo: {{rubrica}} | Texto do candidato ({{n_linhas_estimadas}} linhas estimadas): {{texto}}
FORMATO DA RESPOSTA: 1) Nota estimada total e por critério; 2) Pontos fortes; 3) Problemas de conteúdo; 4) Problemas de língua; 5) Três ações priorizadas para a próxima versão.`;

export const DiscursivaPage: React.FC = () => {
  const [enunciados, setEnunciados] = useState<EnunciadoDiscursiva[]>(() => {
    try {
      const raw = localStorage.getItem('hnc_discursiva_enunciados');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [enunciadoAtivoId, setEnunciadoAtivoId] = useState<string>(() => {
    return enunciados[0]?.id || '';
  });

  const [textoCandidato, setTextoCandidato] = useState('');
  const [rubricaEstudo, setRubricaEstudo] = useState(RUBRICA_PADRAO);
  const [devolutivaColada, setDevolutivaColada] = useState('');
  const [copiado, setCopiado] = useState(false);
  const [historico, setHistorico] = useState<VersaoTexto[]>([]);

  // Novo enunciado form
  const [isNovoEnunciadoOpen, setIsNovoEnunciadoOpen] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novoEnunciado, setNovoEnunciado] = useState('');
  const [novoTipo, setNovoTipo] = useState<'questao_20' | 'peca_50'>('questao_20');

  const enunciadoAtivo = enunciados.find((e) => e.id === enunciadoAtivoId);
  const limiteLinhas = enunciadoAtivo?.limiteLinhas || (novoTipo === 'questao_20' ? 20 : 50);

  // Estimativa de linhas: número de quebras de linha reais + quebras simuladas por comprimento
  const linhasEstimadas = useMemo(() => {
    if (!textoCandidato) return 0;
    const paragrafos = textoCandidato.split('\n');
    let total = 0;
    for (const p of paragrafos) {
      if (p.length === 0) {
        total += 1;
      } else {
        total += Math.max(1, Math.ceil(p.length / CARACTERES_POR_LINHA_ESTIMATIVA));
      }
    }
    return total;
  }, [textoCandidato]);

  // Carrega texto e histórico para o enunciado ativo
  useEffect(() => {
    if (!enunciadoAtivoId) return;
    try {
      const raw = localStorage.getItem(`hnc_discursiva_texto_${enunciadoAtivoId}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        setTextoCandidato(parsed.texto || '');
        setHistorico(parsed.historico || []);
        setDevolutivaColada(parsed.devolutiva || '');
      } else {
        setTextoCandidato('');
        setHistorico([]);
        setDevolutivaColada('');
      }
    } catch {
      // Ignora erro
    }
  }, [enunciadoAtivoId]);

  // Salvamento automático
  useEffect(() => {
    if (!enunciadoAtivoId) return;
    const timer = setTimeout(() => {
      localStorage.setItem(
        `hnc_discursiva_texto_${enunciadoAtivoId}`,
        JSON.stringify({
          texto: textoCandidato,
          historico,
          devolutiva: devolutivaColada,
        })
      );
    }, 600);
    return () => clearTimeout(timer);
  }, [enunciadoAtivoId, textoCandidato, historico, devolutivaColada]);

  const handleSalvarVersao = () => {
    if (!textoCandidato.trim()) return;
    const novaVersao: VersaoTexto = {
      id: `versao-${Date.now()}`,
      dataHora: new Date().toISOString(),
      texto: textoCandidato,
      linhasEstimadas,
      devolutiva: devolutivaColada,
    };
    setHistorico((prev) => [novaVersao, ...prev]);
  };

  const handleCriarEnunciado = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoTitulo.trim() || !novoEnunciado.trim()) return;

    const item: EnunciadoDiscursiva = {
      id: `enunciado-${Date.now()}`,
      tipo: novoTipo,
      titulo: novoTitulo,
      enunciado: novoEnunciado,
      limiteLinhas: novoTipo === 'questao_20' ? 20 : 50,
    };

    const atualizados = [...enunciados, item];
    setEnunciados(atualizados);
    localStorage.setItem('hnc_discursiva_enunciados', JSON.stringify(atualizados));
    setEnunciadoAtivoId(item.id);
    setIsNovoEnunciadoOpen(false);
    setNovoTitulo('');
    setNovoEnunciado('');
  };

  const handleCopiarParaIA = () => {
    const promptPreenchido = PROMPT_CORRECAO_TEMPLATE
      .replace('{{tipo}}', enunciadoAtivo?.tipo === 'questao_20' ? 'Questão Discursiva (até 20 linhas)' : 'Peça Técnica (até 50 linhas)')
      .replace('{{limite_linhas}}', String(limiteLinhas))
      .replace('{{enunciado}}', enunciadoAtivo?.enunciado || 'Enunciado não cadastrado')
      .replace('{{rubrica}}', rubricaEstudo)
      .replace('{{n_linhas_estimadas}}', String(linhasEstimadas))
      .replace('{{texto}}', textoCandidato);

    navigator.clipboard.writeText(promptPreenchido);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      {/* Cabeçalho */}
      <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink">
                  Laboratório de Discursiva
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 uppercase">
                  Estrutura Provisória · Ajustar ao Edital
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink-2">
                2 questões de até 20 linhas e 1 peça técnica de até 50 linhas com rubrica de estudo e exportação para correção.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsNovoEnunciadoOpen(true)}
            className="flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Adicionar Enunciado</span>
          </Button>
        </div>
      </div>

      {/* MODAL / FORMULÁRIO DE NOVO ENUNCIADO */}
      {isNovoEnunciadoOpen && (
        <div className="p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4">
          <h2 className="text-base font-serif font-bold text-ink">Novo Tema de Prova Discursiva</h2>
          <form onSubmit={handleCriarEnunciado} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink mb-1">Título / Tema</label>
                <input
                  type="text"
                  value={novoTitulo}
                  onChange={(e) => setNovoTitulo(e.target.value)}
                  placeholder="Ex: Discorra sobre o Tratamento Monográfico em Paul Otlet"
                  className="w-full px-3 py-2 rounded-xl bg-surface-2 border border-border text-sm text-ink focus:outline-hidden focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">Tipo de Prova</label>
                <select
                  value={novoTipo}
                  onChange={(e) => setNovoTipo(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-surface-2 border border-border text-sm text-ink focus:outline-hidden focus:ring-1 focus:ring-accent"
                >
                  <option value="questao_20">Questão Discursiva (até 20 linhas)</option>
                  <option value="peca_50">Peça Técnica (até 50 linhas)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink mb-1">Enunciado Oficial / Proposta</label>
              <textarea
                value={novoEnunciado}
                onChange={(e) => setNovoEnunciado(e.target.value)}
                rows={3}
                placeholder="Insira o texto motivador e os tópicos obrigatórios que devem ser abordados pelo candidato..."
                className="w-full px-3 py-2 rounded-xl bg-surface-2 border border-border text-sm text-ink focus:outline-hidden focus:ring-1 focus:ring-accent"
                required
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost" size="sm" type="button" onClick={() => setIsNovoEnunciadoOpen(false)}>
                Cancelar
              </Button>
              <Button variant="primary" size="sm" type="submit">
                Cadastrar Enunciado
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* ÁREA DE TRABALHO: SELETOR DE ENUNCIADO + EDITOR */}
      {enunciados.length === 0 ? (
        <div className="p-8 rounded-2xl bg-surface border border-dashed border-border text-center space-y-3">
          <BookOpen className="w-8 h-8 mx-auto text-ink-2/60" />
          <h3 className="font-serif font-bold text-base text-ink">Banco de Enunciados Vazio</h3>
          <p className="text-xs text-ink-2 max-w-md mx-auto">
            Cadastre um tema ou proposta discursiva clicando em "Adicionar Enunciado" acima para iniciar seu treino de redação.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* COLUNA ESQUERDA: ENUNCIADOS E RUBRICA */}
          <div className="space-y-5">
            {/* Seletor de Enunciados */}
            <div className="bg-surface border border-border rounded-2xl p-4 shadow-editorial-sm space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-ink-2 block">
                Temas Cadastrados ({enunciados.length})
              </span>
              <div className="space-y-2">
                {enunciados.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEnunciadoAtivoId(item.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-colors cursor-pointer ${
                      item.id === enunciadoAtivoId
                        ? 'bg-purple-500/10 border-purple-500/30 text-ink font-semibold'
                        : 'bg-surface hover:bg-surface-2 border-border text-ink-2'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-ink-2 mb-1">
                      <span>{item.tipo === 'questao_20' ? 'Questão (20L)' : 'Peça (50L)'}</span>
                      <span>{item.limiteLinhas} linhas</span>
                    </div>
                    <p className="line-clamp-2">{item.titulo}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Rubrica de Estudo Provisória */}
            <div className="bg-surface border border-border rounded-2xl p-4 shadow-editorial-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-ink-2 block">
                  Rubrica de Estudo Provisória
                </span>
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">
                  Não oficial
                </span>
              </div>
              <textarea
                value={rubricaEstudo}
                onChange={(e) => setRubricaEstudo(e.target.value)}
                rows={5}
                className="w-full p-2.5 rounded-xl bg-surface-2/60 border border-border text-xs text-ink font-mono leading-relaxed focus:outline-hidden"
              />
            </div>
          </div>

          {/* COLUNA PRINCIPAL: EDITOR DE TEXTO E LINHAS */}
          <div className="lg:col-span-2 space-y-5">
            {enunciadoAtivo && (
              <div className="bg-surface border border-border rounded-2xl p-5 shadow-editorial-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-ink-2 border-b border-border pb-2">
                  <span className="font-bold text-ink">{enunciadoAtivo.titulo}</span>
                  <span>Limite: {limiteLinhas} linhas</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed italic">
                  "{enunciadoAtivo.enunciado}"
                </p>
              </div>
            )}

            {/* Editor de Redação com Contador de Linhas */}
            <div className="bg-surface border border-border rounded-2xl p-5 shadow-editorial-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-ink uppercase">
                    Redação do Candidato
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                      linhasEstimadas > limiteLinhas
                        ? 'bg-rose-500/10 border-rose-500/30 text-rose-600'
                        : 'bg-surface-2 border-border text-ink-2'
                    }`}
                  >
                    Linhas estimadas: {linhasEstimadas} / {limiteLinhas}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-ink-2 italic">
                  *Caracteres por linha é uma ESTIMATIVA (~70 carac/linha)
                </span>
              </div>

              <textarea
                value={textoCandidato}
                onChange={(e) => setTextoCandidato(e.target.value)}
                rows={14}
                placeholder="Comece a redigir sua resposta aqui respeitando a norma culta e os tópicos da banca..."
                className="w-full p-4 rounded-xl bg-surface-2/30 border border-border text-sm text-ink font-serif leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-accent resize-y"
              />

              {/* Barra de Ações: Salvar Versão e Copiar para IA */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSalvarVersao}
                  className="flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar Versão</span>
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleCopiarParaIA}
                  className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {copiado ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiado ? 'Copiado para a Área de Transferência!' : 'Copiar para Correção por IA'}</span>
                </Button>
              </div>
            </div>

            {/* Campo para Colar a Devolutiva Recebida da IA */}
            <div className="bg-surface border border-border rounded-2xl p-5 shadow-editorial-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-ink">
                  Devolutiva e Análise da IA
                </span>
                <span className="text-[10px] text-ink-2">
                  Cole aqui o retorno da correção para anexar ao seu histórico
                </span>
              </div>
              <textarea
                value={devolutivaColada}
                onChange={(e) => setDevolutivaColada(e.target.value)}
                rows={6}
                placeholder="Cole aqui a resposta recebida para arquivar com sua tentativa..."
                className="w-full p-3 rounded-xl bg-surface-2/30 border border-border text-xs text-ink leading-relaxed font-mono focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
