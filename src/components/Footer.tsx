
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, Send, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-darkGray text-white">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              LUXO<span className="text-luxury-gold">IMÓVEL</span>
            </h3>
            <p className="text-white/70 mb-6">
              Especialistas em imóveis de alto padrão nas melhores localizações do Brasil. Oferecemos um serviço personalizado para atender às suas necessidades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-luxury-gold transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-luxury-gold transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-luxury-gold transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-luxury-gold">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Imóveis', 'Localizações', 'Sobre Nós', 'Contato', 'Blog', 'Política de Privacidade'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-luxury-gold">Contato</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-luxury-gold mr-2 flex-shrink-0" />
                <span className="text-white/70">Av. Paulista, 1000, Jardins, São Paulo - SP</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-luxury-gold mr-2 flex-shrink-0" />
                <span className="text-white/70">+55 (11) 3000-0000</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-luxury-gold mr-2 flex-shrink-0" />
                <span className="text-white/70">contato@luxoimovel.com.br</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-luxury-gold">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Inscreva-se para receber novidades sobre imóveis exclusivos
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 bg-white/10 text-white placeholder:text-white/50 flex-1 focus:outline-none border border-white/20 focus:border-luxury-gold rounded-l"
              />
              <button className="bg-luxury-gold px-3 py-2 rounded-r">
                <Send className="h-5 w-5 text-luxury-DEFAULT" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="luxury-container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2024 Luxo Imóvel – Todos os direitos reservados
          </p>
          <div className="flex space-x-4 text-white/50 text-sm">
            <a href="#" className="hover:text-luxury-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
