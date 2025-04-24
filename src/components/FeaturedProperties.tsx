import React from "react";
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Mansão Beira-Mar",
    location: "Balneário Camboriú, SC",
    price: "R$ 12.500.000",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    beds: 5,
    baths: 6,
    area: "720 m²",
  },
  {
    id: 2,
    title: "Cobertura Duplex",
    location: "Jardins, São Paulo",
    price: "R$ 8.900.000",
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    beds: 4,
    baths: 5,
    area: "540 m²",
  },
  {
    id: 3,
    title: "Villa Contemporânea",
    location: "Barra da Tijuca, RJ",
    price: "R$ 6.300.000",
    image: "https://www.lummi.ai/photo/luxurious-modern-house-at-evening-wq0u3",
    beds: 4,
    baths: 4,
    area: "480 m²",
  },
  {
    id: 4,
    title: "Apartamento Vista Mar",
    location: "Ipanema, Rio de Janeiro",
    price: "R$ 7.800.000",
    image:
      "https://www.lummi.ai/photo/luxurious-cliffside-modern-house-with-sea-view-d0z49",
    beds: 3,
    baths: 4,
    area: "320 m²",
  },
  {
    id: 5,
    title: "Casa de Campo Luxuosa",
    location: "Fazenda Boa Vista, SP",
    price: "R$ 5.200.000",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    beds: 4,
    baths: 3,
    area: "520 m²",
  },
  {
    id: 6,
    title: "Penthouse de Luxo",
    location: "Brooklin, São Paulo",
    price: "R$ 9.500.000",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
    beds: 4,
    baths: 5,
    area: "650 m²",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-white">
      <div className="luxury-container">
        <h2 className="section-title text-center mb-4">Imóveis em Destaque</h2>
        <p className="text-center text-luxury-mediumGray mb-12 max-w-2xl mx-auto">
          Conheça nossa seleção exclusiva de propriedades premium nas melhores
          localizações
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="property-card group">
              <div className="relative overflow-hidden h-80">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-10">
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-luxury-gold hover:text-white transition-colors duration-300">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <div className="property-card-overlay group-hover:opacity-100">
                  <div className="bg-black bg-opacity-50 p-4 -mx-6 -mb-6">
                    <h3 className="text-white text-xl font-playfair mb-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-luxury-gold font-semibold">
                        {property.price}
                      </span>
                      <button className="text-white text-sm font-medium border-b border-luxury-gold hover:text-luxury-gold transition-colors">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 border border-t-0 border-luxury-lightGray">
                <div className="flex justify-between items-center text-sm text-luxury-mediumGray">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds} Quartos</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} Banheiros</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary rounded">Ver Todos os Imóveis</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
