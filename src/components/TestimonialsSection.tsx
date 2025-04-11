
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Roberto Carvalho',
    position: 'Empresário',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: 'A experiência com a Luxo Imóvel foi excepcional do início ao fim. Encontrei o imóvel dos meus sonhos e todo o processo foi conduzido com profissionalismo e atenção aos detalhes.'
  },
  {
    id: 2,
    name: 'Mariana Santos',
    position: 'Diretora Executiva',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: 'Após procurar por meses, a equipe da Luxo Imóvel me apresentou opções que realmente se encaixavam nas minhas expectativas. O atendimento personalizado fez toda a diferença.'
  },
  {
    id: 3,
    name: 'Carlos Mendonça',
    position: 'Investidor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: 'Como investidor do mercado imobiliário, valorizo muito a transparência e a ética. A Luxo Imóvel demonstrou essas qualidades em todas as negociações que fizemos.'
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="luxury-container">
        <h2 className="section-title text-center mb-4">O Que Nossos Clientes Dizem</h2>
        <p className="text-center text-luxury-mediumGray mb-12 max-w-2xl mx-auto">
          A satisfação de nossos clientes é o nosso maior patrimônio
        </p>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-luxury-beige p-8 rounded-lg text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-luxury-gold"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-luxury-gold fill-luxury-gold" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                    <p className="font-playfair font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-luxury-mediumGray">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg text-luxury-DEFAULT hover:text-luxury-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg text-luxury-DEFAULT hover:text-luxury-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-luxury-gold' : 'bg-luxury-lightGray'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
