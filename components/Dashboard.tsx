
import React, { useState } from 'react';
import { UserState, ZeroStep } from '../types';
import { getZeroCoachFeedback } from '../services/geminiService';

interface DashboardProps {
  user: UserState;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [currentAction, setCurrentAction] = useState("");
  const [coachResponse, setCoachResponse] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  const handleAskCoach = async () => {
    if (!currentAction) return;
    setIsAsking(true);
    const feedback = await getZeroCoachFeedback(currentAction, user.procrastinationType);
    setCoachResponse(feedback);
    setIsAsking(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <header className="mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900">Hola, {user.name} 👋</h1>
        <p className="text-slate-600 mt-1">Tu perfil: <span className="font-bold text-blue-600 uppercase tracking-wide">{user.procrastinationType}</span></p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Tu Reto de 7 Días</h3>
            <div className="space-y-3">
              {days.map(day => (
                <div key={day} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${day === user.currentDay ? 'bg-blue-600 text-white shadow-lg' : day < user.currentDay ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                    {day < user.currentDay ? '✓' : day}
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-semibold ${day === user.currentDay ? 'text-blue-600' : 'text-slate-600'}`}>Día {day}</p>
                    {day === user.currentDay && <p className="text-xs text-blue-400 font-medium">En curso</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 p-6 rounded-3xl text-white">
            <h3 className="font-bold mb-2">Recordatorio R:</h3>
            <p className="text-blue-100 text-sm italic">"Nunca falles dos días seguidos. La identidad se construye con repetición, no con perfección."</p>
          </div>
        </div>

        {/* Action Center */}
        <div className="lg:col-span-2 space-y-8">
          {/* Zero Coach Tool */}
          <section className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-100 flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white mr-4">🤖</div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Coach Zero IA</h2>
                <p className="text-sm text-slate-500">¿Qué te está paralizando hoy? Lo haremos simple.</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <textarea 
                value={currentAction}
                onChange={(e) => setCurrentAction(e.target.value)}
                placeholder="Ej: Tengo que empezar mi informe trimestral y me da pánico..."
                className="w-full h-32 p-4 rounded-2xl border-2 border-slate-100 focus:border-blue-500 focus:ring-0 transition-all resize-none text-slate-700"
              />
              <button 
                onClick={handleAskCoach}
                disabled={isAsking || !currentAction}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors disabled:bg-slate-300 shadow-lg shadow-slate-200"
              >
                {isAsking ? "Simplificando..." : "Simplificar Tarea"}
              </button>

              {coachResponse && (
                <div className="mt-6 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <h4 className="font-bold text-blue-900 mb-2 uppercase text-xs tracking-widest">Tu Paso Z (Zona de Claridad):</h4>
                  <p className="text-blue-800 text-lg leading-relaxed">{coachResponse}</p>
                </div>
              )}
            </div>
          </section>

          {/* Today's Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {Object.entries(ZeroStep).map(([key, value]) => (
               <div key={key} className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                  <span className="text-3xl font-black text-slate-200 block mb-2">{key}</span>
                  <h4 className="font-bold text-slate-900 mb-1">{value}</h4>
                  <p className="text-xs text-slate-500">Aplicar pilar {key} para hoy.</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
