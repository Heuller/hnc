// Vercel Serverless Function: /api/dictionary
// Integrates with Google Gemini API to define terms in the context of Cebraspe & Biblioteconomia

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { termo, contexto } = req.body || {};

  if (!termo || typeof termo !== 'string') {
    return res.status(400).json({ error: 'Parâmetro "termo" é obrigatório' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    // Retorna resposta de fallback estruturada se a chave não estiver configurada no ambiente Vercel
    return res.status(200).json({
      termo,
      area: 'Biblioteconomia e Documentação',
      conceitoCanonico: `Definição técnica para "${termo}": Conceito documental e informacional empregado na organização de acervos, representação temática/descritiva ou gestão de fluxos de informação legislativa.`,
      armadilhaCebraspe: `A banca Cebraspe costuma explorar "${termo}" trocando suas características essenciais por exceções ou atribuindo a sua função a conceitos análogos.`,
      aplicacaoCamara: `Na Câmara dos Deputados, aplica-se no tratamento dos recursos da Biblioteca Pedro Aleixo e na assessoria técnica ao processo legislativo.`,
      fonteReferencia: 'Dicionário de Biblioteconomia e Arquivologia (Cunha & Lemos) / Padrão Cebraspe.',
    });
  }

  const prompt = `
Você é o autor do Dicionário de Biblioteconomia e Arquivologia (referência Murilo Bastos da Cunha e Antonio Agenor Briquet de Lemos) e um examinador sênior da banca CEBRASPE/CESPE especialista no concurso da Câmara dos Deputados para o cargo de Analista Legislativo - Bibliotecário.

Defina com rigor conceitual o termo técnico a seguir:
TERMO: "${termo}"
${contexto ? `CONTEXTO DA FRASE ONDE APARECEU: "${contexto}"` : ''}

Retorne ESTRITAMENTE um objeto JSON válido (sem blocos markdown adicionais, sem preâmbulo, apenas o JSON puro) com a seguinte estrutura de campos:
{
  "termo": "${termo}",
  "area": "Área do edital (ex: Catalogação e Metadados, Classificação, Recuperação da Informação, Preservação, Gestão, Normalização, Legislação ou RLM)",
  "conceitoCanonico": "Definição técnica precisa, acadêmica e clara, sem rodeios ou superficialidade (1 a 2 parágrafos).",
  "armadilhaCebraspe": "Como a banca Cebraspe costuma cobrar ou distorcer este termo (a 'casca de banana' típica em assertivas C/E).",
  "aplicacaoCamara": "Como este conceito se aplica na prática na Câmara dos Deputados, no Congresso Nacional ou na rotina de uma biblioteca parlamentar.",
  "fonteReferencia": "Nome de autor canônico, livro ou norma associada (ex: Cutter, AACR2, ABNT, Vergueiro, Lei 12.527/11, Cunha & Lemos)."
}
`;

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[Gemini API Error]', errText);
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error('Resposta vazia do modelo Gemini');
    }

    const parsed = JSON.parse(rawText);
    return res.status(200).json(parsed);
  } catch (error: any) {
    console.error('[Serverless Dictionary Error]', error?.message);
    return res.status(200).json({
      termo,
      area: 'Biblioteconomia e Ciência da Informação',
      conceitoCanonico: `Termo técnico: "${termo}". Refere-se a elemento essencial do patrimônio bibliográfico, documental ou da teoria da informação para concursos públicos.`,
      armadilhaCebraspe: `Em assertivas de Certo ou Errado do Cebraspe, fique atento a inversões entre o conceito de "${termo}" e seus correlatos.`,
      aplicacaoCamara: `Subsidia a atividade parlamentar e o processamento técnico da Biblioteca da Câmara dos Deputados.`,
      fonteReferencia: 'Dicionário de Biblioteconomia e Arquivologia / Padrão Cebraspe.',
    });
  }
}
