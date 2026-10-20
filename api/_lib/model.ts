// Centralized Gemini Model Configuration (Regra F-05)
export const DEFAULT_GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

export function getGeminiGenerateContentUrl(model: string = DEFAULT_GEMINI_MODEL): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
}
