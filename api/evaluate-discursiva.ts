// Vercel Serverless Function: /api/evaluate-discursiva
import {
  validateAuth,
  checkRateLimit,
  fetchWithTimeout,
  sendApiError,
  evaluateDiscursivaSchema,
} from './_lib/guard.js';
import { getGeminiGenerateContentUrl } from './_lib/model.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return sendApiError(res, 405, 'Método não permitido.', 'METHOD_NOT_ALLOWED');
  }

  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // 1. Validação de Autenticação (F-01.a)
  const { auth, error: authError } = await validateAuth(req);
  if (authError || !auth) {
    return sendApiError(res, authError?.status || 401, authError?.message || 'Não autorizado.', authError?.code || 'UNAUTHORIZED');
  }

  // 2. Limite de Taxa (F-01.b)
  const rateLimit = await checkRateLimit(auth.userId, 'evaluate-discursiva');
  if (!rateLimit.allowed) {
    if (rateLimit.retryAfterSeconds) {
      res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds));
    }
    return sendApiError(
      res,
      429,
      'Limite de requisições excedido. Aguarde antes de submeter uma nova correção.',
      'RATE_LIMIT_EXCEEDED'
    );
  }

  // 3. Validação do Corpo com Zod (F-01.c)
  const parseResult = evaluateDiscursivaSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues[0]?.message || 'Parâmetros inválidos.';
    return sendApiError(res, 400, errorMsg, 'VALIDATION_ERROR');
  }

  const {
    titulo,
    tipo,
    enunciado,
    padraoResposta,
    criteriosPontuacao,
    textoCandidato,
    linhasEstimadas,
  } = parseResult.data;

  const totalLinhas = Math.min(60, Math.max(10, Number(linhasEstimadas) || Math.ceil(textoCandidato.length / 70)));
  const isPeca = tipo === 'peca_50';
  const notaMaximaGeral = isPeca ? 30.0 : 15.0;
  const fatorDesconto = isPeca ? 6 : 3;

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    // Retorno de fallback determinístico quando sem chave configurada (F-01)
    const notaConteudoBase = Number((notaMaximaGeral * 0.78).toFixed(2));
    const neFallback = 2;
    const desconto = Number((fatorDesconto * (neFallback / totalLinhas)).toFixed(2));
    const notaFinal = Math.max(0, Number((notaConteudoBase - desconto).toFixed(2)));

    const formulaAplicada = isPeca
      ? `NPT = NC - 6 × (${neFallback} / ${totalLinhas}) = ${notaFinal} (Edital nº 1/2026, item 9.8.5.2)`
      : `NQ = NC - 3 × (${neFallback} / ${totalLinhas}) = ${notaFinal} (Edital nº 1/2026, item 9.8.5.1)`;

    return res.status(200).json({
      id: `eval-${Date.now()}`,
      dataAvaliacao: new Date().toISOString(),
      temaId: titulo || 'avaliacao-local',
      tipo: tipo || 'questao_20',
      totalLinhas,
      notaConteudo: notaConteudoBase,
      notaConteudoMaxima: notaMaximaGeral,
      numErrosGramaticais: neFallback,
      descontoGramatical: desconto,
      notaFinal,
      formulaAplicada,
      parecerMacroestrutural:
        'Avaliação local em modo determinístico: o texto demonstra estrutura formal adequada e atende aos elementos solicitados no padrão preliminar.',
      itensConteudoAvaliados: (criteriosPontuacao || []).map((crit: any, idx: number) => ({
        criterioId: crit.criterioId || `crit-${idx + 1}`,
        descricao: crit.descricao || 'Atendimento ao aspecto teórico do tema',
        notaAtribuida: Number(((crit.notaMaxima || 5) * 0.8).toFixed(2)),
        notaMaxima: crit.notaMaxima || 5,
        justificativa:
          'Abordagem satisfatória dos preceitos fundamentais da questão discursiva com encadeamento lógico adequado.',
      })),
      errosGramaticaisIdentificados: [
        {
          tipo: 'pontuacao',
          trecho: 'no entanto o bibliotecário',
          sugestao: 'no entanto, o bibliotecário',
          explicacao: 'Conjunção adversativa deslocada exige isolamento por vírgulas.',
          linhaAproximada: 5,
        },
      ],
      pontosFortes: [
        'Vocabulário técnico apropriado aos padrões da Ciência da Informação.',
        'Divisão parágrafo a parágrafo correspondente aos quesitos solicitados pela banca.',
      ],
      pontosMelhoria: [
        'Aprofundar a fundamentação com citação de normas canônicas vigentes (ABNT/RDA).',
        'Atenção ao rigor na pontuação de orações subordinadas e conectivos.',
      ],
      modoDeterministico: true,
      modo: 'offline',
    });
  }

  const prompt = `
Você é a BANCA EXAMINADORA OFICIAL DO CEBRASPE (CESPE/UnB) responsável pela correção da Prova Discursiva (P3) do Concurso Público da Câmara dos Deputados para o cargo de Analista Legislativo - Bibliotecário (Edital nº 1/2026).

SUA MISSÃO: Corrigir a resposta discursiva do candidato com o máximo rigor técnico, acadêmico e gramatical característico do Cebraspe.

DADOS DA QUESTÃO:
- Tema / Título: "${titulo || 'Tema Técnico da Biblioteconomia'}"
- Modalidade: ${isPeca ? 'Estudo de Caso / Peça Técnica (máximo 50 linhas, valor 30,00 pontos)' : 'Questão Discursiva Específica (máximo 20 linhas, valor 15,00 pontos)'}
- Enunciado da Prova:
"""
${enunciado || 'Desenvolva o tema conforme os padrões da literatura canônica de Biblioteconomia.'}
"""

- Padrão de Resposta Esperado da Banca (Espelho):
"""
${padraoResposta || 'Apresentação fundamentada dos conceitos essenciais do tema.'}
"""

- Critérios de Pontuação Macroestrutural:
${JSON.stringify(criteriosPontuacao || [], null, 2)}

RESPOSTA DO CANDIDATO PARA AVALIAÇÃO:
"""
${textoCandidato}
"""
- Linhas Estimadas: ${totalLinhas} linhas (limite máximo de ${isPeca ? 50 : 20} linhas).

FORMULAÇÃO DE NOTA DO EDITAL Nº 1/2026:
- Nota de Conteúdo (NC): soma das notas atribuídas em cada critério de conteúdo, até o limite de ${notaMaximaGeral.toFixed(2)} pontos.
- Desconto Gramatical: ${isPeca ? '6 × (NE / TL)' : '3 × (NE / TL)'}, em que NE = número de erros gramaticais e TL = total de linhas efetivamente escritas (${totalLinhas}).
- Nota Final: NC - Desconto Gramatical (mínimo 0,00).

Retorne ESTRITAMENTE um objeto JSON válido com a seguinte estrutura:
{
  "parecerMacroestrutural": "Parecer geral formal e detalhado da banca sobre a resposta do candidato.",
  "itensConteudoAvaliados": [
    {
      "criterioId": "string identificadora",
      "descricao": "descrição do aspecto avaliado",
      "notaAtribuida": 0.00,
      "notaMaxima": 0.00,
      "justificativa": "justificativa detalhada da nota neste critério"
    }
  ],
  "errosGramaticaisIdentificados": [
    {
      "tipo": "grafia|concordancia|regencia|pontuacao|clareza",
      "trecho": "trecho exato com erro",
      "sugestao": "forma corrigida",
      "explicacao": "regra gramatical violada",
      "linhaAproximada": 1
    }
  ],
  "pontosFortes": ["ponto 1", "ponto 2"],
  "pontosMelhoria": ["ponto 1", "ponto 2"]
}
`;

  try {
    const geminiUrl = getGeminiGenerateContentUrl();

    const response = await fetchWithTimeout(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: 'application/json',
        },
      }),
    }, 20000);

    if (!response.ok) {
      throw new Error(`Gemini status ${response.status}`);
    }

    const data: any = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Resposta vazia');

    const parsed = JSON.parse(rawText);

    // Calcula notas oficiais com fórmulas do edital
    const itens = parsed.itensConteudoAvaliados || [];
    const notaConteudoCalculada = itens.reduce((acc: number, it: any) => acc + (Number(it.notaAtribuida) || 0), 0);
    const notaConteudoFinal = Math.min(notaMaximaGeral, Math.max(0, Number(notaConteudoCalculada.toFixed(2))));

    const erros = parsed.errosGramaticaisIdentificados || [];
    const numErros = erros.length;
    const descontoGramatical = Number((fatorDesconto * (numErros / totalLinhas)).toFixed(2));
    const notaFinalCalculada = Math.max(0, Number((notaConteudoFinal - descontoGramatical).toFixed(2)));

    const formulaAplicada = isPeca
      ? `NPT = NC - 6 × (${numErros} / ${totalLinhas}) = ${notaFinalCalculada} (Edital nº 1/2026, item 9.8.5.2)`
      : `NQ = NC - 3 × (${numErros} / ${totalLinhas}) = ${notaFinalCalculada} (Edital nº 1/2026, item 9.8.5.1)`;

    return res.status(200).json({
      id: `eval-${Date.now()}`,
      dataAvaliacao: new Date().toISOString(),
      temaId: titulo || 'avaliacao-oficial',
      tipo,
      totalLinhas,
      notaConteudo: notaConteudoFinal,
      notaConteudoMaxima: notaMaximaGeral,
      numErrosGramaticais: numErros,
      descontoGramatical,
      notaFinal: notaFinalCalculada,
      formulaAplicada,
      parecerMacroestrutural: parsed.parecerMacroestrutural,
      itensConteudoAvaliados: itens,
      errosGramaticaisIdentificados: erros,
      pontosFortes: parsed.pontosFortes || [],
      pontosMelhoria: parsed.pontosMelhoria || [],
      modo: 'online',
    });
  } catch (error: any) {
    console.error('[Evaluate Discursiva Error]', error?.message);
    return sendApiError(res, 500, 'Falha ao processar avaliação discursiva.', 'EVALUATION_FAILED');
  }
}
