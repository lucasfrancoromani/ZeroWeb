
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const getZeroCoachFeedback = async (challenge: string, type: string) => {
  if (!API_KEY) return "Lo siento, el coach no está disponible ahora.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemPrompt = `Eres el 'Coach Zero', un experto en psicología conductual y superación de la procrastinación. 
  Tu misión es aplicar el Método Zero (Zona de Claridad, Energía Enfocada, Ritmo Sostenido, Objetivo Cumplido).
  El usuario tiene un perfil de procrastinador tipo: ${type}.
  Debes convertir su problema complejo en un 'Paso Z' (Zona de Claridad) que tome MENOS de 5 minutos.
  Sé directo, empático y antifrágil. No des listas largas. Solo el paso mínimo viable.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Mi problema es: ${challenge}. ¿Cuál es mi Paso Zero inmediato?`,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    return response.text || "Intenta definir el paso más pequeño posible que puedas hacer en 2 minutos.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Define una acción de 5 minutos y hazla ahora mismo. No pienses, solo actúa.";
  }
};

export const getAssessmentAnalysis = async (answers: string[]) => {
  if (!API_KEY) return null;
  const ai = new GoogleGenAI({ apiKey: API_KEY });

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analiza estas respuestas de un usuario sobre su procrastinación: ${answers.join(', ')}. 
    Determina su tipo predominante entre: Perfeccionista, Abrasado, Evitador o Soñador. 
    Devuelve un JSON con el tipo, una descripción breve y el primer paso del Método Zero.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          type: { type: Type.STRING },
          description: { type: Type.STRING },
          recommendation: { type: Type.STRING }
        },
        required: ["type", "description", "recommendation"]
      }
    }
  });

  return JSON.parse(response.text);
};
