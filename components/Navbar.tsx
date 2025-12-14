// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Importamos o Image, pois no futuro a Logo será uma imagem otimizada
import Image from 'next/image'; 

// Define a estrutura dos links de navegação
const navLinks = [
  { href: '#atuacao', label: 'Atuação' },
  { href: '#sobre', label: 'A Advogada' },
  { href: '#depoimentos', label: 'Depoimentos' },
];

const WHATSAPP_LINK = "https://wa.me/5541997606069?text=Ol%C3%A1%20Dra.%20Mariana%2C%20preciso%20de%20atendimento%20jur%C3%ADdico%20urgente.";

const Navbar: React.FC = () => {
  // Estado para controlar se o menu mobile está aberto
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar o scroll (se a barra deve ter sombra ou mudar)
  const [scrolled, setScrolled] = useState(false);

  // Lógica do Scroll (adiciona sombra ao rolar)
  useEffect(() => {
    const handleScroll = () => {
      // Adiciona sombra se o scroll for maior que 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      // Fundo escuro, fixa no topo, efeito blur, transição suave.
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                 bg-rich-black/95 backdrop-blur-md 
                 ${scrolled ? 'shadow-xl border-b border-gold-dark/30' : 'border-b border-transparent'}`}
    >
      <div className="container mx-auto px-5 py-4 md:py-3 flex justify-between items-center">
        
        {/* LOGO (Texto Cinzel - Autoridade) */}
        <Link href="#inicio" className="font-cinzel text-xl md:text-2xl text-white font-bold tracking-wider hover:text-gold-main transition-colors">
          Mariana Bueno
          {/* Se quiser usar a imagem da logo: 
          <Image src="/assets/img/logo-mb.png" alt="Mariana Bueno Logo" width={100} height={45} priority className="max-h-[45px] w-auto" />
          */}
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="font-montserrat text-gray-400 hover:text-gold-main uppercase text-sm tracking-wider transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {/* CTA Destaque Desktop */}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-montserrat text-gold-main border border-gold-main hover:bg-gold-main hover:text-black transition-all duration-200 py-2 px-4 uppercase text-xs font-semibold rounded-sm tracking-widest"
          >
            Plantão 24h
          </a>
        </nav>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
        >
          <span className={`block w-6 h-0.5 bg-gold-main transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[0.45rem]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-main transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-main transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[0.45rem]' : ''}`}></span>
        </button>
      </div>

      {/* MENU MOBILE EXPANSÍVEL (Condicional) */}
      <nav 
        className={`md:hidden absolute top-full left-0 w-full bg-rich-black transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 border-t border-gold-dark/30 shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
              className="font-montserrat text-white hover:text-gold-main uppercase text-sm tracking-wider py-3 px-5 border-b border-gray-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {/* CTA Destaque Mobile */}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-gold-main bg-dark-card border-l-4 border-gold-main py-4 px-5 mt-2 uppercase text-sm font-semibold tracking-widest hover:bg-black transition-colors"
          >
            Plantão 24h
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
