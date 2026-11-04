import { TREINOS_DISCURSIVOS_MODULO } from '../../content/treinosDiscursivosModulo';

export function TreinoDiscursivoModulo({ moduloId }: { moduloId: string }) {
  const treino = TREINOS_DISCURSIVOS_MODULO[moduloId];
  if (!treino) return null;
  const peca = treino.tipo === 'peca';
  return (
    <section aria-labelledby="treino-discursivo-modulo" className="my-8 rounded-2xl border border-accent/40 bg-accent-soft/20 p-5 sm:p-7 space-y-4">
      <div>
        <p className="text-xs font-mono font-bold text-accent uppercase">Treino discursivo autoral</p>
        <h2 id="treino-discursivo-modulo" className="mt-1 text-xl font-bold text-ink">Aplique o que estudou</h2>
        <p className="mt-2 text-sm text-ink-2">{peca ? 'Peça técnica: até 50 linhas; no edital informado, vale até 30 pontos.' : 'Questão discursiva: até 20 linhas; no edital informado, cada questão vale até 15 pontos.'} Este exercício é uma prática, não uma questão oficial.</p>
      </div>
      <p className="font-serif leading-relaxed text-ink">{treino.enunciado}</p>
      <p className="text-sm text-ink-2">Escreva sua resposta antes de consultar os pontos de revisão. Você pode usar o espaço Discursiva da plataforma ou uma folha de papel.</p>
      <details className="rounded-lg border border-border bg-surface p-4">
        <summary className="cursor-pointer font-semibold text-ink">Conferir pontos para autoavaliação</summary>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-ink-2">{treino.pontos.map(ponto => <li key={ponto}>{ponto}</li>)}</ul>
        <p className="mt-3 text-xs text-ink-2">Roteiro de estudo elaborado para este exercício; não é espelho ou pontuação oficial da banca.</p>
      </details>
      <details className="rounded-lg border border-accent/30 bg-surface p-4">
        <summary className="cursor-pointer font-semibold text-ink">Como a banca espera que você responda?</summary>
        <p className="mt-3 text-sm text-ink-2">Resposta-modelo autoral, elaborada para atender aos critérios deste exercício. Não é espelho oficial nem garantia de nota máxima; o número de linhas depende da folha e da escrita.</p>
        <div className="mt-4 space-y-4 font-serif leading-relaxed text-ink">{treino.respostaModelo.split('\n\n').map(paragrafo => <p key={paragrafo}>{paragrafo}</p>)}</div>
        <p className="mt-4 text-sm text-ink-2"><strong>Fundamentação:</strong> {treino.fundamentacao}</p>
      </details>
    </section>
  );
}
