import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-bege/80 border-b border-white/20">
      <div className="font-bold text-2xl text-marrom">Recanto do Pet</div>
      <a 
        href="https://wa.me/5577981642913" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-2 bg-marrom text-white rounded-full font-semibold hover:bg-verde transition-all"
      >
        Reservar agora
      </a>
    </nav>
  );
}
