
import React from 'react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <nav className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => setView('home')}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-2 group-hover:bg-blue-700 transition-colors">
                Z
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Método<span className="text-blue-600">Zero</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setView('home')} className={`text-sm font-medium ${currentView === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Inicio</button>
              <button onClick={() => setView('dashboard')} className={`text-sm font-medium ${currentView === 'dashboard' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Mi Plan</button>
              <button 
                onClick={() => setView('checkout')} 
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
              >
                Obtener el Libro
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setView('checkout')} className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                PRO
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© 2024 Método Zero. Transforma tu parálisis en progreso.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
