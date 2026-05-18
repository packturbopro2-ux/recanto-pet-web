import React from 'react';
import { Shield, Camera, Heart, Home } from 'lucide-react';

const cards = [
  { icon: Home, title: "Ambiente Acolhedor", desc: "Sinta-se em casa, sem grades e com muito espaço para brincar." },
  { icon: Shield, title: "Segurança Total", desc: "Supervisão constante e ambiente monitorado para evitar fugas ou acidentes." },
  { icon: Camera, title: "Atualizações Diárias", desc: "Fotos e vídeos enviados via WhatsApp para acalmar seu coração." },
  { icon: Heart, title: "Atenção Individual", desc: "Respeitamos a rotina e a personalidade de cada pet." }
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Por que escolher o Recanto?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <card.icon className="w-12 h-12 text-verde mb-6" />
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
