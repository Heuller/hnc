
/** Roteiro de conferência sem inferir uma causa cognitiva a partir de acerto/erro. */
export function GuiaDaResposta({ acertou, resposta, gabarito, justificativa }: { acertou: boolean; resposta?: string; gabarito?: string; justificativa?: string }) {
  return <section aria-label="Raciocínio da resposta" className="p-4 rounded-xl border border-border bg-surface space-y-3 text-sm text-ink">
    <h3 className="font-bold m-0">{acertou ? 'Por que você acertou' : 'Por que sua resposta precisa de revisão'}</h3>
    <p className="m-0">{resposta ? `Sua resposta: ${resposta}. ` : ''}{gabarito ? `Resposta esperada: ${gabarito}. ` : ''}{acertou ? 'A resposta atende ao critério deste exercício. Confira se a regra que você utilizou coincide com a fundamentação.' : 'A resposta não atende ao critério deste exercício. Compare as condições pedidas com a fundamentação; o resultado não revela sozinho a causa da dificuldade.'}</p>
    {justificativa && <p className="font-serif leading-relaxed m-0">{justificativa}</p>}
    <details><summary className="min-h-[44px] cursor-pointer font-semibold foco">Como identificar a dificuldade e aprender com ela</summary><ol className="list-decimal pl-5 space-y-2">
      <li>Explique a regra sem consultar. Se não conseguir, retome a teoria e o exemplo correspondente.</li>
      <li>Confira o que o enunciado pede: sujeito, relação, condição, exceção ou cálculo. Compare com a explicação do item.</li>
      <li>Distinga desconhecimento da regra, interpretação e marcação. Não atribua a causa ao erro sem conferir seu raciocínio.</li>
      <li>Recupere a regra em outro dia e em outra questão. Reconhecer a correção agora não comprova retenção.</li>
    </ol></details>
  </section>;
}
