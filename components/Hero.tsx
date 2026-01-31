
import React from 'react';
import { View } from '../types';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              Reconstruye tu identidad en 7 días
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Deja de gestionar tu tiempo. <br />
              <span className="gradient-text">Gestiona tu emoción.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              El sistema anti-procrastinación basado en micro-acciones de 15 minutos que aborda el miedo, no tu agenda.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <button
                onClick={onStart}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:text-lg shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 transition-all"
              >
                Empezar Guía Gratis
              </button>
              <button
                className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
              >
                Ver Método ZERO
              </button>
            </div>
            <div className="mt-8 flex items-center sm:justify-center lg:justify-start space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/100/100?random=${i}`} alt="user" />
                ))}
              </div>
              <span className="text-sm text-slate-500 font-medium">+1,200 personas ya lo están usando</span>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden aspect-video bg-slate-200">
               <img src="https://picsum.photos/800/600?nature" className="w-full h-full object-cover grayscale-[0.2]" alt="Zero Method" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold italic">"Por fin dejé de sentir culpa por no hacer nada."</p>
                    <p className="mt-2 text-sm text-blue-200">— Maria, Diseñadora Freelance</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
