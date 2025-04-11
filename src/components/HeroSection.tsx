
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={image}
            alt={`Luxury Property ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center max-w-4xl mb-6 animate-fade-in">
          Descubra o Luxo que Você Merece
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl text-center animate-fade-in">
          Imóveis exclusivos nas melhores localizações do Brasil
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white rounded-md shadow-lg overflow-hidden">
          <div 
            className="flex items-center cursor-pointer p-4 text-luxury-DEFAULT"
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
          >
            <Search className="h-5 w-5 text-luxury-gold mr-2" />
            <span className="font-medium">Buscar imóveis...</span>
            <ChevronDown className={`ml-auto transition-transform duration-300 ${isSearchExpanded ? 'rotate-180' : ''}`} />
          </div>

          {isSearchExpanded && (
            <div className="p-4 border-t border-luxury-lightGray animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-luxury-darkGray mb-1">Tipo</label>
                  <select className="border border-luxury-lightGray rounded p-2 focus:border-luxury-gold focus:outline-none">
                    <option>Todos os tipos</option>
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Cobertura</option>
                    <option>Mansão</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-luxury-darkGray mb-1">Localização</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Digite a localização"
                      className="border border-luxury-lightGray rounded p-2 w-full focus:border-luxury-gold focus:outline-none pl-8"
                    />
                    <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-luxury-mediumGray" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-luxury-darkGray mb-1">Preço</label>
                  <select className="border border-luxury-lightGray rounded p-2 focus:border-luxury-gold focus:outline-none">
                    <option>Qualquer preço</option>
                    <option>Até R$ 1 milhão</option>
                    <option>R$ 1-3 milhões</option>
                    <option>R$ 3-5 milhões</option>
                    <option>R$ 5-10 milhões</option>
                    <option>Acima de R$ 10 milhões</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-luxury-darkGray mb-1">Quartos</label>
                  <select className="border border-luxury-lightGray rounded p-2 focus:border-luxury-gold focus:outline-none">
                    <option>Qualquer</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>
              <button className="w-full mt-4 bg-luxury-gold text-luxury-DEFAULT py-3 rounded font-medium hover:bg-opacity-90 transition-all duration-300">
                Buscar Imóveis
              </button>
            </div>
          )}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
          <span className="text-sm mb-2">Explore mais</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
