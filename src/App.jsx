import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LINK DO LOGO AJUSTADO PARA A PASTA PUBLIC */}
        <div className="flex items-center">
          <a href="/">
            <img 
              src="/logo.png" 
              alt="Recanto do Pet Logo" 
              className="h-16 w-auto object-contain" 
            />
          </a>
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#sobre" className="hover:text-amber-600 transition">Sobre Nós</a>
          <a href="#servicos" className="hover:text-amber-600 transition">Serviços</a>
          <a href="#contato" className="hover:text-amber-600 transition">Contato</a>
        </nav>

        {/* BOTÃO DE AGENDAMENTO */}
        <div className="flex items-center">
          <a 
            href="https://wa.me/seu-numero" 
            target="_blank" 
            rel="noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition"
          >
            <Phone size={18} />
            <span>Agendar Visita</span>
          </a>
        </div>

      </div>
    </header>
  );
}
