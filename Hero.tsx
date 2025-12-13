import React from 'react';
import Image from 'next/image'; // Usar o Image do Next para performance

// Define a interface para as Props (TypeScript!)
interface HeroProps {
  whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ whatsappLink }) => {
  return (
    // Body Dark, Altura da Tela
    <section id="inicio" className="bg-rich-black min-h-screen pt-20 md:pt-32">
      <div className="container mx-auto px-5">
        
        {/* HERO CONTENT: Desktop Lado a Lado | Mobile Empilhado */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          
          {/* TEXTO (1ª Coluna) */}
          <div className="flex flex-col text-center md:text-left flex-1 order-2 md:order-1">
            
            {/* Destaque Topo */}
            <span className="font-montserrat text-gold-main text-xs uppercase tracking-widest mb-4 border-b border-gold-main pb-1 md:pb-2 self-center md:self-start">
              Advocacia de Alta Complexidade
            </span>
            
            {/* Título H1 */}
            <h1 className="font-cinzel text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
              Defesa estratégica para quem exige resultados.
            </h1>
            
            {/* Subtítulo */}
            <p className="font-montserrat text-gray-400 text-base md:text-lg mb-8 max-w-lg self-center md:self-start">
              Dra. Mariana Bueno: Combatividade técnica em casos trabalhistas e de família. A segurança jurídica que você precisa no momento mais decisivo.
            </p>
            
            {/* CTAs (Botão Dourado e Status) */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
              
              {/* Botão Dourado (Substitui cta-button-gold) */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="
                  bg-gradient-gold text-rich-black font-montserrat font-bold uppercase text-sm tracking-widest 
                  py-4 px-8 rounded-sm shadow-xl transition-all duration-300 transform 
                  hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto
                "
              >
                Falar com a Advogada
              </a>
              
              {/* Badge Status */}
              <div className="flex items-center text-gray-500 text-sm">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 shadow-md shadow-green-600 animate-pulse"></span>
                Disponível Agora
              </div>
            </div>
          </div>
          
          {/* IMAGEM (2ª Coluna) */}
          <div className="relative flex-1 w-full max-w-md mx-auto order-1 md:order-2 mt-8 md:mt-0">
            {/* Gold Backdrop (Efeito Dourado) - Exclusivo Desktop */}
            <div className="hidden md:block absolute top-6 right-0 w-full h-full border-4 border-gold-main opacity-30 -z-10"></div>

            {/* Imagem usando Next/Image para otimização */}
            {/* Lembre-se de configurar o next.config.js para a URL da imagem se necessário */}
            <Image 
              src="/assets/img/hero-mariana.jpg" // Caminho local no Next.js
              alt="Dra. Mariana Bueno, advogada especialista"
              width={500} 
              height={700} 
              priority // Carregamento prioritário para o Hero
              className="w-full h-auto rounded-sm shadow-2xl border-b-4 border-gold-main object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
