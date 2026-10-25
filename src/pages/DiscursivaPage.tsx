import React, { useState, useMemo } from 'react';
import {
  PenTool,
  Copy,
  Check,
  Plus,
  Save,
  History,
  RotateCcw,
  Sparkles,
  Award,
  AlertTriangle,
  RefreshCw,
  Printer,
  UserCheck,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import type { TemaDiscursiva, AvaliacaoCebraspe, VersaoTextoComAvaliacao } from '../domain/discursiva/types';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../domain/discursiva/temasOficiais';
import {
  TRILHA_DISCURSIVA_D1_D9,
  type SessaoDiscursivaTrilha,
} from '../domain/discursiva/trilhaDiscursiva';
import { discursivaService } from '../domain/discursiva/discursivaService';
import { EspelhoCorrecaoCebraspe } from '../components/discursiva/EspelhoCorrecaoCebraspe';
import { FolhaRespostaManuscritaModal } from '../components/discursiva/FolhaRespostaManuscritaModal';
import { CronometroDiscursiva } from '../components/discursiva/CronometroDiscursiva';
import { PainelCalibracaoHumana } from '../components/discursiva/PainelCalibracaoHumana';

const CARACTERES_POR_LINHA_ESTIMATIVA = 70;

const PROMPT_CORRECAO_TEMPLATE = `Você é um corretor experiente de provas discursivas de concursos públicos do Cebraspe, com conhecimento de Biblioteconomia e Ciência da Informação. Avalie o texto de um candidato ao cargo de Analista Legislativo (Bibliotecário) da Câmara dos Deputados.
REGRAS: (1) Use o padrão preliminar de resposta oficial. (2) Aplique estritamente as fórmulas oficiais Cebraspe do Edital nº 1/2026 (itens 9.8.5.1 e 9.8.5.2): para questões de até 20 linhas, NQi = NCi - 3 * (NEi / TLi); para peças técnicas de até 50 linhas, NPT = NC - 6 * (NE / TL). (3) Aponte erros de língua portuguesa citando o trecho e a linha. (4) Forneça nota detalhada por quesito.
DADOS: Tipo: {{tipo}} | Limite: {{limite_linhas}} linhas | Enunciado: {{enunciado}} | Padrão: {{padrao}} | Texto do candidato ({{n_linhas_estimadas}} linhas estimadas): {{texto}}`;

interface DadosEnunciadoArmazenado {
  texto: string;
  historico: VersaoTextoComAvaliacao[];
  devolutiva: string;
  avaliacaoAtiva?: AvaliacaoCebraspe;
  tempoGastoSegundos?: number;
  autoavaliacaoHumana?: {
    notaHumana: number;
    notaConteudoHumana: number;
    errosHumanos: number;
    conceitosQuesitos: Record<number, number>;
  };
}

export const DiscursivaPage: React.FC = () => {
  const [enunciados, setEnunciados] = useState<TemaDiscursiva[]>(() => {
    try {
      const raw = localStorage.getItem('hnc_discursiva_enunciados');
      const parsed = raw ? JSON.parse(raw) : [];
      return parsed && parsed.length > 0 ? parsed : TEMAS_OFICIAIS_DISCURSIVA;
    } catch {
      return TEMAS_OFICIAIS_DISCURSIVA;
    }
  });

  const [enunciadoAtivoId, setEnunciadoAtivoId] = useState<string>(() => {
    return enunciados[0]?.id || TEMAS_OFICIAIS_DISCURSIVA[0].id;
  });

  const [dadosEnunciados, setDadosEnunciados] = useState<Record<string, DadosEnunciadoArmazenado>>(() => {
    if (typeof window === 'undefined') return {};
    const map: Record<string, DadosEnunciadoArmazenado> = {};
    for (const e of enunciados) {
      try {
        const raw = localStorage.getItem(`hnc_discursiva_texto_${e.id}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          map[e.id] = {
            texto: parsed.texto || '',
            historico: parsed.historico || [],
            devolutiva: parsed.devolutiva || '',
            avaliacaoAtiva: parsed.avaliacaoAtiva,
          };
        }
      } catch {
        // Ignora erro
      }
    }
    return map;
  });

  const [isAvaliando, setIsAvaliando] = useState(false);
  const [erroAvaliacao, setErroAvaliacao] = useState<string | null>(null);
  const [copiado, setCopiado] = useState(false);
  const [isPadraoAberto, setIsPadraoAberto] = useState(true);
  const [isFolhaModalOpen, setIsFolhaModalOpen] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState<'ia' | 'calibracao_humana'>('ia');
  const [abaListaTemas, setAbaListaTemas] = useState<'trilha' | 'banco'>('trilha');
  const [tempoGastoCronometro, setTempoGastoCronometro] = useState<number>(0);

  // Novo enunciado form
  const [isNovoEnunciadoOpen, setIsNovoEnunciadoOpen] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novoEnunciado, setNovoEnunciado] = useState('');
  const [novoTipo, setNovoTipo] = useState<'questao_20' | 'peca_50'>('questao_20');

  const todosTemasDisponiveis = useMemo(() => {
    const map = new Map<string, TemaDiscursiva>();
    for (const d of TRILHA_DISCURSIVA_D1_D9) {
      map.set(d.id, d);
    }
    for (const e of enunciados) {
      if (!map.has(e.id)) {
        map.set(e.id, e);
      }
    }
    return Array.from(map.values());
  }, [enunciados]);

  const enunciadoAtivo =
    todosTemasDisponiveis.find((e) => e.id === enunciadoAtivoId) ||
    TRILHA_DISCURSIVA_D1_D9[0] ||
    enunciados[0];

  const sessaoTrilhaAtiva: SessaoDiscursivaTrilha | undefined = useMemo(() => {
    return TRILHA_DISCURSIVA_D1_D9.find((s) => s.id === enunciadoAtivo?.id);
  }, [enunciadoAtivo]);
  const dadosAtuais = dadosEnunciados[enunciadoAtivo?.id || ''] || {
    texto: '',
    historico: [],
    devolutiva: '',
  };
  const textoCandidato = dadosAtuais.texto;
  const historico = dadosAtuais.historico;
  const limiteLinhas = enunciadoAtivo?.limiteLinhas || (novoTipo === 'questao_20' ? 20 : 50);

  // Estimativa de linhas: quebras de linha reais + quebras simuladas
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

  const atualizarTextoCandidato = (novoTexto: string) => {
    if (!enunciadoAtivo) return;
    setDadosEnunciados((prev) => {
      const atual = prev[enunciadoAtivo.id] || { texto: '', historico: [], devolutiva: '' };
      const updated = { ...atual, texto: novoTexto };
      try {
        localStorage.setItem(`hnc_discursiva_texto_${enunciadoAtivo.id}`, JSON.stringify(updated));
      } catch {}
      return { ...prev, [enunciadoAtivo.id]: updated };
    });
  };

  const handleSalvarVersao = () => {
    if (!textoCandidato.trim() || !enunciadoAtivo) return;
    const novaVersao: VersaoTextoComAvaliacao = {
      id: `versao-${Date.now()}`,
      dataHora: new Date().toISOString(),
      texto: textoCandidato,
      linhasEstimadas,
      avaliacao: dadosAtuais.avaliacaoAtiva,
      devolutiva: dadosAtuais.devolutiva,
      tempoGastoSegundos: tempoGastoCronometro,
      autoavaliacaoHumana: dadosAtuais.autoavaliacaoHumana,
    };
    setDadosEnunciados((prev) => {
      const atual = prev[enunciadoAtivo.id] || { texto: '', historico: [], devolutiva: '' };
      const updated = { ...atual, historico: [novaVersao, ...(atual.historico || [])] };
      try {
        localStorage.setItem(`hnc_discursiva_texto_${enunciadoAtivo.id}`, JSON.stringify(updated));
      } catch {}
      return { ...prev, [enunciadoAtivo.id]: updated };
    });
  };

  const handleSalvarCalibracaoHumana = (dados: {
    notaHumana: number;
    notaConteudoHumana: number;
    errosHumanos: number;
    conceitosQuesitos: Record<number, number>;
  }) => {
    if (!enunciadoAtivo) return;
    setDadosEnunciados((prev) => {
      const atual = prev[enunciadoAtivo.id] || { texto: '', historico: [], devolutiva: '' };
      const updated: DadosEnunciadoArmazenado = {
        ...atual,
        autoavaliacaoHumana: dados,
      };
      try {
        localStorage.setItem(`hnc_discursiva_texto_${enunciadoAtivo.id}`, JSON.stringify(updated));
      } catch {}
      return { ...prev, [enunciadoAtivo.id]: updated };
    });
  };

  const handleRestaurarVersao = (v: VersaoTextoComAvaliacao) => {
    if (
      typeof window !== 'undefined' &&
      !window.confirm(
        `Deseja carregar a versão salva em ${new Date(v.dataHora).toLocaleString('pt-BR')}? O texto atual no editor será substituído.`
      )
    ) {
      return;
    }
    if (!enunciadoAtivo) return;

    setDadosEnunciados((prev) => {
      const atual = prev[enunciadoAtivo.id] || { texto: '', historico: [], devolutiva: '' };
      const updated = {
        ...atual,
        texto: v.texto,
        avaliacaoAtiva: v.avaliacao,
        devolutiva: v.devolutiva || '',
      };
      try {
        localStorage.setItem(`hnc_discursiva_texto_${enunciadoAtivo.id}`, JSON.stringify(updated));
      } catch {}
      return { ...prev, [enunciadoAtivo.id]: updated };
    });
  };

  const handleAvaliarComBanca = async () => {
    if (!enunciadoAtivo) return;
    if (!textoCandidato.trim() || textoCandidato.trim().length < 50) {
      alert('Escreva ao menos 50 caracteres para submeter sua redação à avaliação da banca Cebraspe.');
      return;
    }

    setIsAvaliando(true);
    setErroAvaliacao(null);

    try {
      const avaliacao = await discursivaService.avaliarRedacao(
        enunciadoAtivo,
        textoCandidato,
        linhasEstimadas
      );

      // Atualiza e arquiva automaticamente a versão avaliada
      setDadosEnunciados((prev) => {
        const atual = prev[enunciadoAtivo.id] || { texto: '', historico: [], devolutiva: '' };
        const novaVersao: VersaoTextoComAvaliacao = {
          id: `versao-${Date.now()}`,
          dataHora: new Date().toISOString(),
          texto: textoCandidato,
          linhasEstimadas,
          avaliacao,
          devolutiva: avaliacao.parecerGeralExaminador,
        };
        const updated: DadosEnunciadoArmazenado = {
          ...atual,
          avaliacaoAtiva: avaliacao,
          historico: [novaVersao, ...(atual.historico || [])],
        };
        try {
          localStorage.setItem(`hnc_discursiva_texto_${enunciadoAtivo.id}`, JSON.stringify(updated));
        } catch {}
        return { ...prev, [enunciadoAtivo.id]: updated };
      });
    } catch (err: unknown) {
      setErroAvaliacao((err instanceof Error && err.message) || 'Falha ao processar avaliação com a banca examinadora.');
    } finally {
      setIsAvaliando(false);
    }
  };

  const handleRestaurarTemasPadrao = () => {
    if (
      typeof window !== 'undefined' &&
      !window.confirm('Deseja restaurar os temas oficiais Cebraspe da Câmara dos Deputados?')
    ) {
      return;
    }
    setEnunciados(TEMAS_OFICIAIS_DISCURSIVA);
    localStorage.setItem('hnc_discursiva_enunciados', JSON.stringify(TEMAS_OFICIAIS_DISCURSIVA));
    setEnunciadoAtivoId(TEMAS_OFICIAIS_DISCURSIVA[0].id);
  };

  const handleCriarEnunciado = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoTitulo.trim() || !novoEnunciado.trim()) return;

    const item: TemaDiscursiva = {
      id: `enunciado-${Date.now()}`,
      tipo: novoTipo,
      titulo: novoTitulo,
      enunciado: novoEnunciado,
      limiteLinhas: novoTipo === 'questao_20' ? 20 : 50,
      padraoRespostaPreliminar: 'Atendimento aos tópicos do enunciado com terminologia técnica correta.',
      criteriosPontuacao: [
        {
          item: 'Domínio Técnico e Conceitual',
          pontuacaoMaxima: novoTipo === 'questao_20' ? 8.0 : 16.0,
          descricaoEsperada: 'Atendimento aos tópicos essenciais solicitados no enunciado.',
        },
        {
          item: 'Estruturação Lógica e Coesão',
          pontuacaoMaxima: novoTipo === 'questao_20' ? 7.0 : 14.0,
          descricaoEsperada: 'Paragrafação equilibrada e progressão temática consistente.',
        },
      ],
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
    if (!enunciadoAtivo) return;
    const promptPreenchido = PROMPT_CORRECAO_TEMPLATE
      .replace('{{tipo}}', enunciadoAtivo.tipo === 'questao_20' ? 'Questão Discursiva (20L)' : 'Peça Técnica (50L)')
      .replace('{{limite_linhas}}', String(limiteLinhas))
      .replace('{{enunciado}}', enunciadoAtivo.enunciado)
      .replace('{{padrao}}', enunciadoAtivo.padraoRespostaPreliminar)
      .replace('{{n_linhas_estimadas}}', String(linhasEstimadas))
      .replace('{{texto}}', textoCandidato);

    navigator.clipboard.writeText(promptPreenchido);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      {/* Cabeçalho Editorial */}
      <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink">
                  Avaliador Cebraspe de Discursivas
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300 uppercase">
                  Fórmulas Oficiais: NQ = NC - 3×(NE/TL) · NPT = NC - 6×(NE/TL) · Edital 1/2026 (Item 9)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink-2">
                Simulação real de espelho de correção Cebraspe para o concurso da Câmara dos Deputados (Bibliotecário).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFolhaModalOpen(true)}
              className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 dark:text-purple-300 border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 cursor-pointer"
              title="Visualizar e Imprimir Folha de Resposta Padrão Cebraspe para treino manuscrito"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Folha Pautada (Manuscrita)</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleRestaurarTemasPadrao}
              className="flex items-center gap-1.5 text-xs cursor-pointer"
              title="Restaurar banco de temas oficiais da Câmara"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restaurar Padrão</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsNovoEnunciadoOpen(true)}
              className="flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Tema</span>
            </Button>
          </div>
        </div>
      </div>

      {/* FORMULÁRIO DE NOVO TEMA */}
      {isNovoEnunciadoOpen && (
        <div className="p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4 animate-in fade-in duration-150">
          <h2 className="text-base font-serif font-bold text-ink">Novo Tema de Prova Discursiva</h2>
          <form onSubmit={handleCriarEnunciado} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="novo-enunciado-titulo" className="block text-xs font-semibold text-ink mb-1">Título / Tema</label>
                <input
                  id="novo-enunciado-titulo"
                  type="text"
                  value={novoTitulo}
                  onChange={(e) => setNovoTitulo(e.target.value)}
                  placeholder="Ex: Discorra sobre o Tratamento Monográfico em Paul Otlet"
                  className="w-full px-3 py-2 rounded-xl bg-surface-2 border border-border text-sm text-ink focus:outline-hidden focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="novo-enunciado-tipo" className="block text-xs font-semibold text-ink mb-1">Tipo de Peça / Limite</label>
                <select
                  id="novo-enunciado-tipo"
                  value={novoTipo}
                  onChange={(e) => setNovoTipo(e.target.value as 'questao_20' | 'peca_50')}
                  className="w-full px-3 py-2 rounded-xl bg-surface-2 border border-border text-sm text-ink focus:outline-hidden focus:ring-1 focus:ring-accent"
                >
                  <option value="questao_20">Questão Discursiva (até 20 linhas - 15 pts)</option>
                  <option value="peca_50">Peça Técnica (até 50 linhas - 30 pts)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="novo-enunciado-texto" className="block text-xs font-semibold text-ink mb-1">Enunciado Oficial</label>
              <textarea
                id="novo-enunciado-texto"
                value={novoEnunciado}
                onChange={(e) => setNovoEnunciado(e.target.value)}
                rows={4}
                placeholder="Insira o texto motivador e os tópicos obrigatórios que o candidato deve abordar..."
                className="w-full p-3 rounded-xl bg-surface-2 border border-border text-sm text-ink font-serif leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-accent"
                required
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsNovoEnunciadoOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Salvar Tema
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* ÁREA DE TRABALHO: COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {/* COLUNA ESQUERDA: TEMAS E PADRÃO DE RESPOSTA */}
        <div className="space-y-5">
          {/* Seletor de Temas e Trilha D1-D9 */}
          <div className="bg-surface border border-border rounded-2xl p-4 shadow-editorial-sm space-y-3">
            {/* Tabs de Seleção: Trilha D1-D9 vs Banco Geral */}
            <div className="flex border-b border-border pb-1 gap-1">
              <button
                type="button"
                onClick={() => setAbaListaTemas('trilha')}
                className={`flex-1 py-1.5 px-2 text-xs font-mono font-bold rounded-lg transition-colors cursor-pointer text-center ${
                  abaListaTemas === 'trilha'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-ink-2 hover:bg-surface-2 hover:text-ink'
                }`}
              >
                Trilha D1–D9 ({TRILHA_DISCURSIVA_D1_D9.length})
              </button>
              <button
                type="button"
                onClick={() => setAbaListaTemas('banco')}
                className={`flex-1 py-1.5 px-2 text-xs font-mono font-bold rounded-lg transition-colors cursor-pointer text-center ${
                  abaListaTemas === 'banco'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-ink-2 hover:bg-surface-2 hover:text-ink'
                }`}
              >
                Banco Geral ({enunciados.length})
              </button>
            </div>

            {/* Lista da Trilha Semanal D1-D9 */}
            {abaListaTemas === 'trilha' ? (
              <div className="space-y-2">
                {TRILHA_DISCURSIVA_D1_D9.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEnunciadoAtivoId(item.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-colors cursor-pointer ${
                      item.id === enunciadoAtivo?.id
                        ? 'bg-purple-500/10 border-purple-500/30 text-ink font-semibold shadow-xs'
                        : 'bg-surface hover:bg-surface-2 border-border text-ink-2'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-ink-2 mb-1">
                      <span className="font-bold text-purple-700 dark:text-purple-400">
                        {item.codigo} · {item.dataIso.split('-').slice(1).reverse().join('/')}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-2 border border-border">
                        {item.limiteLinhas === 0 ? 'Estudo' : `${item.limiteLinhas}L · ${item.tempoSugeridoMinutos}m`}
                      </span>
                    </div>
                    <p className="line-clamp-2 font-serif text-ink">{item.titulo}</p>
                  </button>
                ))}
              </div>
            ) : (
              /* Lista do Banco Geral */
              <div className="space-y-2">
                {enunciados.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEnunciadoAtivoId(item.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-colors cursor-pointer ${
                      item.id === enunciadoAtivo?.id
                        ? 'bg-purple-500/10 border-purple-500/30 text-ink font-semibold shadow-xs'
                        : 'bg-surface hover:bg-surface-2 border-border text-ink-2'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-ink-2 mb-1">
                      <span className="font-bold text-purple-700 dark:text-purple-400">
                        {item.tipo === 'questao_20' ? 'Questão (20L)' : 'Peça Técnica (50L)'}
                      </span>
                      <span>{item.limiteLinhas} linhas</span>
                    </div>
                    <p className="line-clamp-2 font-serif text-ink">{item.titulo}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Padrão de Resposta Preliminar da Banca */}
          {enunciadoAtivo && (
            <div className="bg-surface border border-border rounded-2xl p-4 shadow-editorial-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-ink flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Padrão de Resposta (Modelo do HNC, não é padrão do Cebraspe)</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsPadraoAberto(!isPadraoAberto)}
                  className="text-xs text-accent hover:underline cursor-pointer"
                >
                  {isPadraoAberto ? 'Ocultar' : 'Exibir'}
                </button>
              </div>

              {isPadraoAberto && (
                <div className="space-y-3 pt-1 text-xs font-serif leading-relaxed text-ink-2 animate-in fade-in duration-150">
                  <div className="p-3 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 text-ink">
                    {enunciadoAtivo.padraoRespostaPreliminar}
                  </div>

                  {enunciadoAtivo.criteriosPontuacao && enunciadoAtivo.criteriosPontuacao.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-mono font-bold uppercase text-ink block">
                        Distribuição de Pontos (NCP):
                      </span>
                      {enunciadoAtivo.criteriosPontuacao.map((crit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start justify-between gap-2 p-2 rounded-lg bg-surface-2 text-xs"
                        >
                          <span className="text-ink">{crit.item}</span>
                          <span className="font-mono font-bold text-purple-700 dark:text-purple-400 shrink-0">
                            {crit.pontuacaoMaxima.toFixed(1)} pts
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* COLUNA PRINCIPAL: ENUNCIADO, EDITOR, AVALIAÇÃO E HISTÓRICO */}
        <div className="lg:col-span-2 space-y-6">
          {/* Alerta / Diretriz Pedagógica da Trilha D1-D9 */}
          {sessaoTrilhaAtiva && (
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-ink space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2 font-mono text-xs">
                <span className="font-bold text-purple-800 dark:text-purple-300">
                  {sessaoTrilhaAtiva.codigo} · {sessaoTrilhaAtiva.diaSemana} ({sessaoTrilhaAtiva.dataIso.split('-').slice(1).reverse().join('/')})
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-900 dark:text-purple-200">
                  {sessaoTrilhaAtiva.limiteLinhas === 0 ? 'Sessão de Dissecação de Padrões' : `${sessaoTrilhaAtiva.limiteLinhas} linhas · Sugerido: ${sessaoTrilhaAtiva.tempoSugeridoMinutos} min`}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-serif leading-relaxed text-ink">
                <strong>Foco Pedagógico:</strong> {sessaoTrilhaAtiva.focoPedagogico}
              </p>
              {sessaoTrilhaAtiva.instrucoesMetodo.length > 0 && (
                <ul className="text-xs text-ink-2 font-serif space-y-1 list-disc list-inside pt-1.5 border-t border-purple-500/20">
                  {sessaoTrilhaAtiva.instrucoesMetodo.map((inst, i) => (
                    <li key={i}>{inst}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {enunciadoAtivo && (
            <div className="bg-surface border border-border rounded-2xl p-5 shadow-editorial-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-ink-2 border-b border-border pb-2 flex-wrap gap-2">
                <span className="font-bold text-ink text-sm sm:text-base font-serif">
                  {enunciadoAtivo.titulo}
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-2 border border-border text-xs">
                  Limite: {limiteLinhas} linhas
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink font-serif leading-relaxed italic bg-surface-2/30 p-3 rounded-xl border border-border/60">
                "{enunciadoAtivo.enunciado}"
              </p>
            </div>
          )}

          {/* Cronômetro Oficial de Treino Cebraspe */}
          <CronometroDiscursiva
            tempoSugeridoMinutos={
              sessaoTrilhaAtiva
                ? sessaoTrilhaAtiva.tempoSugeridoMinutos || 35
                : enunciadoAtivo?.tipo === 'peca_50'
                ? 75
                : 35
            }
            onTempoAtualizado={(seg) => setTempoGastoCronometro(seg)}
          />

          {/* Editor de Redação com Contador de Linhas */}
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-editorial-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-ink uppercase">
                  Folha de Resposta do Candidato
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                    linhasEstimadas > limiteLinhas
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-600'
                      : 'bg-surface-2 border-border text-ink'
                  }`}
                >
                  Linhas: {linhasEstimadas} / {limiteLinhas}
                </span>
              </div>

              <span className="text-xs font-mono text-ink-2 italic">
                *Fórmulas do Edital nº 1/2026 (itens 9.8.4 e 9.8.5): penalização proporcional às linhas escritas (fator 3× para questões de 20L e 6× para peças de 50L)
              </span>
            </div>

            <textarea
              aria-label="Texto da sua resposta discursiva"
              value={textoCandidato}
              onChange={(e) => atualizarTextoCandidato(e.target.value)}
              rows={14}
              placeholder="Redija sua resposta dissertativa aqui com rigor gramatical e terminológico..."
              className="w-full p-4 rounded-xl bg-surface-2/30 border border-border text-sm text-ink font-serif leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-accent resize-y"
            />

            {/* Barra de Ações: Avaliar com IA, Salvar e Copiar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSalvarVersao}
                  className="flex items-center gap-1.5 cursor-pointer"
                  title="Salvar rascunho manualmente"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar Rascunho</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopiarParaIA}
                  className="flex items-center gap-1.5 text-ink-2 hover:text-ink text-xs cursor-pointer"
                  title="Copiar prompt completo para uso externo"
                >
                  {copiado ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiado ? 'Copiado!' : 'Copiar Prompt'}</span>
                </Button>
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={handleAvaliarComBanca}
                disabled={isAvaliando || textoCandidato.trim().length < 50}
                className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold shadow-md cursor-pointer disabled:opacity-50"
              >
                {isAvaliando ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Corrigindo com a Banca Cebraspe...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Corrigir com a Banca Cebraspe (IA)</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Seletor de Abas de Correção: IA vs Autoavaliação Humana */}
          <div className="flex border-b border-border gap-1 flex-wrap">
            <button
              type="button"
              onClick={() => setAbaAtiva('ia')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold border-b-2 transition-all cursor-pointer ${
                abaAtiva === 'ia'
                  ? 'border-purple-600 text-purple-700 dark:text-purple-300 bg-purple-500/5'
                  : 'border-transparent text-ink-2 hover:text-ink'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Correção com a Banca Cebraspe (IA)</span>
            </button>

            <button
              type="button"
              onClick={() => setAbaAtiva('calibracao_humana')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold border-b-2 transition-all cursor-pointer ${
                abaAtiva === 'calibracao_humana'
                  ? 'border-purple-600 text-purple-700 dark:text-purple-300 bg-purple-500/5'
                  : 'border-transparent text-ink-2 hover:text-ink'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Autoavaliação e Calibração Humana (Régua Cebraspe)</span>
            </button>
          </div>

          {/* Modo Autoavaliação e Calibração Humana */}
          {abaAtiva === 'calibracao_humana' && enunciadoAtivo && (
            <PainelCalibracaoHumana
              tema={enunciadoAtivo}
              totalLinhas={linhasEstimadas}
              avaliacaoIA={dadosAtuais.avaliacaoAtiva}
              onSalvarCalibracao={handleSalvarCalibracaoHumana}
            />
          )}

          {/* Modo Correção IA Oficial Cebraspe */}
          {abaAtiva === 'ia' && (
            <>
              {/* Estado de Carregamento da IA */}
              {isAvaliando && (
                <div className="p-8 rounded-2xl bg-surface border border-purple-200 dark:border-purple-900 shadow-editorial-sm flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-10 h-10 border-3 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-ink">
                      A Banca Examinadora Cebraspe está corrigindo sua prova...
                    </h4>
                    <p className="text-xs text-ink-2 max-w-md">
                      Calculando pontuação de conteúdo (NC), identificando desvios gramaticais (NE), aplicando as fórmulas
                      oficiais do Edital nº 1/2026 (NQi = NCi − 3×(NE/TL) e NPT = NC − 6×(NE/TL)) e confrontando com o padrão preliminar.
                    </p>
                  </div>
                </div>
              )}

              {/* Erro de Avaliação */}
              {erroAvaliacao && !isAvaliando && (
                <div className="p-4 rounded-xl border border-rose-300 bg-rose-50 text-rose-800 text-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{erroAvaliacao}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleAvaliarComBanca}>
                    Tentar Novamente
                  </Button>
                </div>
              )}

              {/* ESPELHO OFICIAL DE CORREÇÃO (QUANDO AVALIADO) */}
              {dadosAtuais.avaliacaoAtiva && !isAvaliando && (
                <EspelhoCorrecaoCebraspe
                  avaliacao={dadosAtuais.avaliacaoAtiva}
                  onNovaCorrecao={() => {
                    const el = document.querySelector('textarea');
                    el?.focus();
                  }}
                />
              )}
            </>
          )}

          {/* Histórico de Versões Salvas */}
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-editorial-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono font-bold uppercase text-ink">
                  Histórico de Versões Salvas ({historico.length})
                </span>
              </div>
              <span className="text-xs text-ink-2">
                Arquivamento local com espelhos de nota
              </span>
            </div>

            {historico.length === 0 ? (
              <p className="text-xs text-ink-2 italic py-2">
                Nenhuma versão salva para esta questão. Submeta para a banca ou clique em "Salvar Rascunho" para registrar seu progresso.
              </p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {historico.map((v, idx) => (
                  <div
                    key={v.id || idx}
                    className="p-3 rounded-xl bg-surface-2/40 border border-border flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono font-semibold text-ink">
                          {new Date(v.dataHora).toLocaleString('pt-BR')}
                        </span>
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-ink-2">
                          {v.linhasEstimadas} linhas
                        </span>
                        {v.avaliacao && (
                          <span
                            className={`text-xs font-mono px-1.5 py-0.5 rounded font-bold border ${
                              v.avaliacao.situacao === 'HABILITADO'
                                ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                                : 'bg-rose-500/10 text-rose-600 border-rose-500/20'
                            }`}
                          >
                            Nota: {v.avaliacao.notaFinal.toFixed(2)} pts ({v.avaliacao.situacao === 'HABILITADO' ? 'acima da referência de 2/3' : 'abaixo da referência de 2/3'})
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ink-2 truncate max-w-md font-serif">
                        {v.texto.slice(0, 110)}...
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRestaurarVersao(v)}
                      className="flex items-center gap-1 text-xs shrink-0"
                      title="Restaurar versão no editor"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restaurar</span>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal da Folha de Resposta Manuscrita Cebraspe */}
      {enunciadoAtivo && (
        <FolhaRespostaManuscritaModal
          tema={enunciadoAtivo}
          textoCandidato={textoCandidato}
          isOpen={isFolhaModalOpen}
          onClose={() => setIsFolhaModalOpen(false)}
        />
      )}
    </div>
  );
};
