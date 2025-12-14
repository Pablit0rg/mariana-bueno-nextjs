// components/SobreAdvogada.tsx
import React from 'react';
import Image from 'next/image';

const SobreAdvogada: React.FC = () => {
  return (
    // Seção Dark Alt (Dark Card)
    <section id="sobre" className="bg-dark-card py-20 md:py-28 border-y border-[#1a1a1a]">
      <div className="container mx-auto px-5">
        
        {/* Container Lado a Lado (Desktop) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
          
          {/* TEXTO (1ª Coluna) */}
          <div className="flex-1 text-center md:text-left">
            {/* Título H2 */}
            <h2 className="font-cinzel text-gold-main text-3xl md:text-4xl uppercase relative mb-6 md:mb-10">
              A Advogada
              <span className="block w-16 h-1 bg-gradient-gold mx-auto md:ml-0 mt-4"></span>
            </h2>
            
            {/* Subtítulo H3 */}
            <h3 className="font-montserrat text-white text-2xl font-semibold mb-4">
              Dra. Mariana Bueno
            </h3>

            {/* Parágrafos */}
            <p className="font-montserrat text-gray-400 text-base mb-4">
              Com uma atuação pautada na ética inegociável e na combatividade técnica, dedico minha carreira a defender quem precisa de voz ativa nos tribunais.
            </p>
            <p className="font-montserrat text-gray-400 text-base mb-6">
              Entendo que por trás de cada processo existe uma vida, uma família ou um sustento que precisa ser respeitado. Minha missão é garantir que a justiça seja feita.
            </p>
            <p className="font-montserrat text-white font-bold text-lg">
              Advocacia Humanizada e de Impacto.
            </p>
          </div>
          
          {/* IMAGEM (2ª Coluna) */}
          <div className="relative flex-1 w-full max-w-md mx-auto">
            <div className="p-1 border border-gold-main/30 rounded-sm shadow-xl shadow-rich-black/50">
                <Image 
                    src="/assets/img/sobre-mariana.jpg" 
                    alt="Dra. Mariana Bueno, humanização e confiança"
                    width={500} 
                    height={500} 
                    className="w-full h-auto object-cover rounded-sm"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreAdvogada;
