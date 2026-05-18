import React from 'react';
import { Instagram, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-marrom text-bege py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Recanto do Pet</h3>
          <p className="opacity-80">Cuidando do seu melhor amigo com o amor e a dedicação que ele merece.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Contato</h4>
          <a href="https://wa.me/5577981642913" target="_blank" rel="noopener noreferrer" className="block hover:text-verde mb-2">WhatsApp: (77) 98164-2913</a>
          <p className="flex items-center gap-2"><Mail size={18}/> contato@recantodopet.com.br</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Redes</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-verde transition-colors"><Instagram /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center opacity-60">
        <p>© {new Date().getFullYear()} Recanto do Pet. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
