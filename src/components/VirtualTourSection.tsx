
import React from 'react';
import { Play } from 'lucide-react';

const VirtualTourSection = () => {
  return (
    <section className="relative py-24">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Property Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="luxury-container relative z-20 text-center">
        <h2 className="section-title text-white mb-4">Experimente um Tour Virtual</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-10">
          Conheça nossos imóveis sem sair de casa. Visite virtualmente e explore cada detalhe antes de agendar uma visita presencial.
        </p>

        {/* Play Button */}
        <button className="group relative inline-flex items-center justify-center">
          <span className="absolute w-20 h-20 rounded-full bg-luxury-gold animate-pulse opacity-75 group-hover:opacity-100"></span>
          <span className="relative w-16 h-16 flex items-center justify-center bg-luxury-gold rounded-full">
            <Play className="h-8 w-8 text-white ml-1" />
          </span>
        </button>

        {/* CTA */}
        <div className="mt-12">
          <a href="#" className="inline-block bg-white text-luxury-DEFAULT px-6 py-3 rounded shadow-lg font-medium hover:bg-luxury-gold hover:text-white transition-colors duration-300">
            Agende um Tour ao Vivo
          </a>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
