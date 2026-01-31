
import React, { useState } from 'react';
import { getAssessmentAnalysis } from '../services/geminiService';
import { AssessmentResult } from '../types';

interface AssessmentProps {
  onComplete: (result: AssessmentResult) => void;
}

const Assessment: React.FC<AssessmentProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      q: "¿Cómo te sientes cuando tienes una tarea importante?",
      options: ["Paralizado por querer hacerlo perfecto", "Agotado solo de pensar en ello", "Hago cualquier otra cosa (limpiar, correos)", "Pienso que tengo tiempo y lo dejo para el final"]
    },
    {
      q: "¿Qué suele detenerte?",
      options: ["Miedo al juicio o al fracaso", "Falta de energía física o mental", "No sé por dónde empezar", "Me distraigo con cosas 'urgentes' pero no importantes"]
    },
    {
      q: "Tu espacio de trabajo actual está...",
      options: ["Caótico y lleno de recordatorios", "Minimalista pero no me inspira", "Cualquier sitio me sirve pero me distraigo", "Intento organizarlo y pierdo el tiempo ahí"]
    }
  ];

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      processResults(newAnswers);
    }
  };

  const processResults = async (finalAnswers: string[]) => {
    setLoading(true);
    try {
      const result = await getAssessmentAnalysis(finalAnswers);
      if (result) {
        onComplete(result);
      }
    } catch (e) {
      // Fallback
      onComplete({
        type: 'Perfeccionista',
        description: 'Te detienes porque el estándar es demasiado alto.',
        recommendation: 'Hazlo mal hoy, corrígelo mañana.'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-slate-800">Analizando tu perfil psicológico...</h2>
        <p className="text-slate-500 mt-2">El Coach Zero está conectando los puntos de tu comportamiento.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100">
        <div className="flex justify-between items-center mb-8">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Diagnóstico Zero</span>
          <span className="text-slate-400 text-sm">{step + 1} de {questions.length}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">
          {questions[step].q}
        </h2>
        <div className="space-y-4">
          {questions[step].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all group"
            >
              <span className="text-lg font-medium text-slate-700 group-hover:text-blue-700">{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
