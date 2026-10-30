import { comentarioGenerico, contrasteArtificial } from '../../domain/qualidadeEditorial';
import React, { useState } from 'react';
import { AplicacaoEstudoReverso } from './AplicacaoEstudoReverso';
import type { AnaliseItemReverso } from '../../domain/treinoReverso';
import {
  AlertTriangle,
  ArrowLeftRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Crosshair,
  Lightbulb,
  XCircle,
} from 'lucide-react';
import type { CebraspeQuestion, GrauCertezaCebraspe, JulgamentoCebraspe } from '../../domain/schemas/question.schema';
import {
  destacarGatilho,
  exigeAutoexplicacao,
  limparPrefixoGabarito,
  mensagemCalibracao,
  separarTecnica,
  situacaoResposta,
} from '../../domain/estudoReverso';

export type QuestaoEstudoReverso = Pick<
  CebraspeQuestion,
  'id' | 'item' | 'gabarito' | 'justificativa'
> &
  Partial<Pick<CebraspeQuestion, 'armadilhaBanca' | 'versao_correta' | 'versao_errada' | 'gatilho' | 'submoduloId'>>;

export interface PainelEstudoReversoProps {
  questao: QuestaoEstudoReverso;
  resposta?: JulgamentoCebraspe;
  analise?: AnaliseItemReverso;
  certeza?: GrauCertezaCebraspe;
  /** Pausa de autoexplicação antes da fundamentação (desligue em relatórios de revisão em lote). */
  autoexplicacao?: boolean;
  onReverTeoria?: (submoduloId: string) => void;
}

const ESTILO_CALIBRACAO = {
  alerta: 'bg-alerta-soft border-alerta-cebraspe/40 text-ink',
  atencao: 'bg-accent-soft border-accent/30 text-ink',
  neutro: 'bg-surface-2 border-border text-ink',
} as const;

/**
 * Correção comentada no formato de estudo reverso:
 * pausa de autoexplicação → trecho decisivo → por quê → versão contrastante → técnica da banca → teoria.
 * Fundamentação: docs/ESTUDO_REVERSO.md.
 */
export const PainelEstudoReverso: React.FC<PainelEstudoReversoProps> = (props) => (
  // Reinicia a pausa de autoexplicação a cada item
  <PainelEstudoReversoConteudo key={props.questao.id} {...props} />
);

const PainelEstudoReversoConteudo: React.FC<PainelEstudoReversoProps> = ({
  questao,
  resposta,
  certeza,
  autoexplicacao = true,
  onReverTeoria,
  analise,
}) => {
  const situacao = situacaoResposta(resposta, questao.gabarito);
  const [revelado, setRevelado] = useState(!(autoexplicacao && exigeAutoexplicacao(situacao, certeza)));
  const rotuloGabarito = questao.gabarito === 'C' ? 'CERTO' : 'ERRADO';
  const calibracao = mensagemCalibracao(situacao, certeza);
  const { tecnica, explicacao } = separarTecnica(questao.armadilhaBanca);
  const trechos = destacarGatilho(questao.item, questao.gatilho);
  const comentarioPendente = comentarioGenerico(questao.justificativa);
  const temGatilho = !comentarioPendente && trechos.some((t) => t.decisivo);
  const contraste = questao.gabarito === 'E' ? questao.versao_correta : questao.versao_errada;
  const subId = questao.submoduloId;
  const raciocinio = analise?.itemId === questao.id && analise.gabarito === questao.gabarito ? analise : undefined;

  if (!revelado) {
    return (
      <section
        aria-label="Pausa de autoexplicação"
        className="p-4 rounded-2xl border border-accent/30 bg-accent-soft space-y-3"
      >
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-ink">
          <Brain className="w-4 h-4 text-accent shrink-0" />
          <span>Antes de ler a fundamentação</span>
        </div>
        <p className="m-0 text-sm font-serif text-ink leading-relaxed">
          O gabarito é <strong>{rotuloGabarito}</strong>. Releia o item e responda mentalmente:{' '}
          {questao.gabarito === 'E'
            ? 'qual palavra ou trecho torna a assertiva errada e como ela ficaria certa?'
            : 'qual elemento garante que a assertiva está certa e o que a banca trocaria para torná-la errada?'}
        </p>
        <p className="m-0 text-xs text-ink-2 font-sans">
          Tente recuperar a regra antes de conferir. Se não souber, use a explicação para construir a resposta.
        </p>
        <button
          type="button"
          onClick={() => setRevelado(true)}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-primary text-primary-text text-xs font-bold cursor-pointer hover:opacity-95 foco"
        >
          Pensei — mostrar fundamentação
        </button>
      </section>
    );
  }

  return (
    <section aria-label="Estudo reverso do item" className="space-y-3">
      {resposta && (
        <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
          <h3 className="m-0 text-sm font-bold text-ink">{situacao === 'acerto' ? 'Por que você acertou' : situacao === 'erro' ? 'Por que seu julgamento está incorreto' : 'Como resolver o item em branco'}</h3>
          <p className="m-0 text-sm text-ink leading-relaxed">
            {situacao === 'branco'
              ? `Você deixou em branco. O julgamento fundamentado é ${rotuloGabarito}. Confira a regra abaixo e tente explicar sua aplicação ao enunciado.`
              : `Você marcou ${resposta === 'C' ? 'CERTO' : 'ERRADO'}; o item está ${rotuloGabarito}. ${situacao === 'acerto' ? 'Seu julgamento coincide com o gabarito. Confira se o motivo que você usou corresponde à fundamentação abaixo.' : 'Seu julgamento diverge do gabarito. Compare a regra que você usou com a fundamentação abaixo e localize a condição que muda a conclusão.'}`}
          </p>
        </div>
      )}
      {calibracao && (
        <div className={`p-3.5 rounded-xl border space-y-1 ${ESTILO_CALIBRACAO[calibracao.tom]}`} role="note">
          <div className="flex items-center gap-1.5 text-xs font-sans font-bold">
            <Lightbulb className="w-4 h-4 shrink-0 text-accent" />
            <span>{calibracao.titulo}</span>
          </div>
          <p className="m-0 text-xs font-sans leading-relaxed text-ink-2">{calibracao.texto}</p>
        </div>
      )}

      {temGatilho && (
        <div className="p-4 rounded-xl border border-border bg-surface space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-ink-2">
            <Crosshair className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Trecho que decide o julgamento</span>
          </div>
          <p className="m-0 text-sm font-serif text-ink leading-relaxed">
            {trechos.map((t, i) =>
              t.decisivo ? (
                <mark
                  key={i}
                  className={`px-0.5 rounded font-semibold text-ink underline decoration-2 underline-offset-2 ${
                    questao.gabarito === 'E' ? 'bg-err-soft decoration-err' : 'bg-ok-soft decoration-ok'
                  }`}
                >
                  {t.texto}
                </mark>
              ) : (
                <span key={i}>{t.texto}</span>
              )
            )}
          </p>
        </div>
      )}

      {comentarioPendente && <p role="note" className="p-3 rounded-xl border border-border text-sm text-ink">Este comentário ainda precisa de fundamentação específica. Ele repete o gabarito sem demonstrar a regra. Consulte o texto-base ou a fonte antes de consolidar a resposta.</p>}
      <div className="p-5 bg-surface-2 rounded-xl border border-border space-y-2">
        <div className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-ink-2">
          <BookOpen className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>Por que o item está {rotuloGabarito}</span>
        </div>
        <p className="m-0 text-sm font-serif text-ink leading-relaxed">{limparPrefixoGabarito(questao.justificativa)}</p>
      </div>

      {raciocinio && (
        <div className="p-4 rounded-xl border border-accent/30 bg-accent-soft space-y-3">
          <h3 className="m-0 text-sm font-bold">Como chegar ao julgamento</h3>
          <p className="m-0 text-sm"><strong>Regra:</strong> {raciocinio.regra}</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">{raciocinio.passos.map(passo => <li key={passo}>{passo}</li>)}</ol>
          <a className="text-xs underline text-accent foco" href={raciocinio.fonte.url} target="_blank" rel="noopener noreferrer">{raciocinio.fonte.titulo} — {raciocinio.fonte.localizador}</a>
        </div>
      )}

      {resposta && (
        <details className="p-4 rounded-xl border border-border bg-surface text-sm">
          <summary className="cursor-pointer font-bold foco">{situacao === 'acerto' ? 'Como conferir se aprendi' : 'Como identificar o possível erro'}</summary>
          <p className="mt-3 text-ink-2">O resultado sozinho não revela como você pensou. Use estas perguntas para conferir seu raciocínio:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Sem reler a explicação, qual regra sustenta o gabarito? Se não conseguir explicá-la, retome o assunto na teoria.</li>
            <li>Qual condição do enunciado permite aplicar essa regra? Confira sujeitos, negações, quantidades, relações e exceções; palavras isoladas não definem o gabarito.</li>
            <li>Minha regra estava correta, mas interpretei outra condição ou marquei a alternativa contrária? Refaça o julgamento antes de classificar a dificuldade.</li>
            <li>Em outro dia, tente resolver novamente sem consultar a correção. Reconhecer a explicação agora não garante que conseguirá recuperá-la depois.</li>
          </ol>
        </details>
      )}

      {contraste && !contrasteArtificial(contraste) && !comentarioPendente && (
        <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
          <div className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-ink-2">
            <ArrowLeftRight className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>{questao.gabarito === 'E' ? 'Como ficaria CERTO' : 'Como a banca tornaria ERRADO'}</span>
          </div>
          <p className="m-0 flex items-start gap-2 text-sm font-serif text-ink leading-relaxed">
            {questao.gabarito === 'E' ? (
              <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-ok" aria-label="Versão certa" />
            ) : (
              <XCircle className="w-4 h-4 mt-1 shrink-0 text-err" aria-label="Versão errada" />
            )}
            <span className="italic">“{contraste}”</span>
          </p>
          <p className="m-0 text-xs text-ink-2 font-sans">
            Compare as versões e identifique a regra ou condição alterada. Uma palavra isolada não determina o gabarito.
          </p>
        </div>
      )}

      {explicacao && (
        <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-l-amber-500 border border-amber-500/25 space-y-1.5">
          <div className="flex items-center gap-1.5 flex-wrap font-sans font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-200">
            <AlertTriangle className="w-4 h-4 shrink-0 text-accent" />
            <span>Técnica da banca</span>
            {tecnica && (
              <span className="normal-case tracking-normal px-2 py-0.5 rounded-full bg-surface border border-amber-500/30 text-ink">
                {tecnica}
              </span>
            )}
          </div>
          <p className="m-0 text-xs sm:text-sm font-sans text-ink leading-relaxed">{explicacao}</p>
        </div>
      )}

      {raciocinio && <AplicacaoEstudoReverso transferencia={raciocinio.transferencia} />}

      {onReverTeoria && subId && (
        <button
          type="button"
          onClick={() => onReverTeoria(subId)}
          className="min-h-[44px] px-4 py-2 rounded-xl border border-border bg-surface text-ink text-xs font-semibold hover:border-accent cursor-pointer flex items-center gap-2 foco"
        >
          <BookOpen className="w-4 h-4 text-accent" />
          <span>Rever o assunto na teoria (submódulo {subId})</span>
        </button>
      )}
    </section>
  );
};
