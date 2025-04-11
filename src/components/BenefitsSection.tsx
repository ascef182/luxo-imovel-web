
import React from 'react';
import { Shield, Target, Gem, Clock, Users, Key } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="h-10 w-10 text-luxury-gold" />,
    title: 'Segurança Total',
    description: 'Todas as nossas propriedades contam com sistemas de segurança de última geração.'
  },
  {
    icon: <Target className="h-10 w-10 text-luxury-gold" />,
    title: 'Localizações Estratégicas',
    description: 'Imóveis selecionados nas áreas mais valorizadas e exclusivas.'
  },
  {
    icon: <Gem className="h-10 w-10 text-luxury-gold" />,
    title: 'Acabamento Premium',
    description: 'Materiais de altíssima qualidade e design personalizado em cada detalhe.'
  },
  {
    icon: <Clock className="h-10 w-10 text-luxury-gold" />,
    title: 'Atendimento 24h',
    description: 'Nossa equipe está sempre disponível para atender suas necessidades.'
  },
  {
    icon: <Users className="h-10 w-10 text-luxury-gold" />,
    title: 'Consultoria Especializada',
    description: 'Consultores exclusivos para encontrar o imóvel que se adapta ao seu estilo de vida.'
  },
  {
    icon: <Key className="h-10 w-10 text-luxury-gold" />,
    title: 'Processo Simplificado',
    description: 'Fazemos toda a documentação e acompanhamos cada etapa da negociação.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-luxury-beige">
      <div className="luxury-container">
        <h2 className="section-title text-center mb-4">Vantagens Exclusivas</h2>
        <p className="text-center text-luxury-mediumGray mb-12 max-w-2xl mx-auto">
          Descubra por que nossos clientes escolhem a Luxo Imóvel para suas aquisições premium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">{benefit.title}</h3>
              <p className="text-luxury-mediumGray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
