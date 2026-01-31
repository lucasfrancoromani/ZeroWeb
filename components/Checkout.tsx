
import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">El Sistema Completo de Acción</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          No dejes que el impulso de hoy se pierda mañana. Accede al libro completo y las herramientas de por vida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
            <img src="https://picsum.photos/400/600?book" className="w-full h-80 object-cover rounded-xl mb-6 shadow-sm" alt="Método Zero Book" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Método Zero (PDF + Planificador)</h3>
            <p className="text-slate-500 text-sm mb-6">Guía definitiva de +3,800 líneas + Calendario de 90 días anti-procrastinación.</p>
            
            <ul className="space-y-3 mb-8">
              {['9 Módulos de gestión emocional', 'Plantillas de micro-hábitos', 'Acceso a comunidad secreta', 'Actualizaciones de por vida'].map(item => (
                <li key={item} className="flex items-center text-slate-700 text-sm">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-slate-400 line-through text-lg">$30 USD</span>
                <div className="text-4xl font-black text-slate-900">$15 USD</div>
              </div>
              <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase">50% OFF HOY</div>
            </div>

            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25">
              Comprar Ahora
            </button>
            <p className="text-center text-slate-400 text-xs mt-4">Garantía de satisfacción de 7 días o devolución total.</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">¿Por qué invertir en ti?</h4>
            <p className="text-slate-600">
              La procrastinación no te quita solo tiempo, te quita autoestima. Cada vez que no haces lo que dijiste que harías, tu cerebro deja de confiar en ti. 
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Entrega Automática</h4>
            <p className="text-slate-600">
              Recibirás el acceso a tu zona de miembros inmediatamente después del pago. Disponible en España y LatAm.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center mb-4">
               <div className="text-yellow-400 flex mr-2">
                 {'★★★★★'.split('').map((s,i) => <span key={i}>{s}</span>)}
               </div>
               <span className="font-bold text-slate-900">4.9/5 de valoración</span>
            </div>
            <p className="text-slate-500 italic text-sm">"Lo mejor que he comprado este año. Por fin entiendo por qué no podía avanzar."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
