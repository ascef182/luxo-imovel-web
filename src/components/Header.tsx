
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="luxury-container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className={cn(
            'font-playfair text-2xl font-bold tracking-wider transition-colors',
            isScrolled ? 'text-luxury-DEFAULT' : 'text-white'
          )}>
            LUXO<span className="text-luxury-gold">IMÓVEL</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['Início', 'Imóveis', 'Localizações', 'Sobre Nós', 'Contato'].map((item) => (
            <Link
              key={item}
              to={item === 'Início' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className={cn(
                'font-montserrat font-medium hover:text-luxury-gold transition-colors',
                isScrolled ? 'text-luxury-DEFAULT' : 'text-white'
              )}
            >
              {item}
            </Link>
          ))}
          <button className="btn-gold font-medium rounded">
            Agende uma Visita
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-luxury-DEFAULT' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-luxury-DEFAULT' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="luxury-container flex flex-col space-y-4">
            {['Início', 'Imóveis', 'Localizações', 'Sobre Nós', 'Contato'].map((item) => (
              <Link
                key={item}
                to={item === 'Início' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="font-montserrat font-medium text-luxury-DEFAULT hover:text-luxury-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="btn-gold font-medium rounded w-full py-3 mt-2">
              Agende uma Visita
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
