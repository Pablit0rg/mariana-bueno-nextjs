// components/Depoimentos.tsx
import React from 'react';

const testimonials = [
  {
    quote: "Excelente profissional. Me ajudou no momento mais difícil da minha demissão. A Dra. Mariana foi firme com a empresa e conseguiu meus direitos. Recomendo de olhos fechados.",
    author: 'Cliente Trabalhista (via Google)',
  },
  {
    quote: "Muito atenciosa e transparente. Resolveu meu divórcio com rapidez e clareza, sem enrolação. Me senti muito segura durante todo o processo.",
    author: 'Cliente Cível (via WhatsApp)',
  },
  // Pode adicionar mais depoimentos aqui, a grade se ajustará
];

const Depoimentos: React.FC = () => {
  return (
    // Seção em fundo Rich Black, com padding otimizado
    <section id="depoimentos" className="bg-rich-black py-20 md:py-28">
      <div className="container mx-auto px-5">
        
        {/* Título da Seção */}
        <h2 className="font-cinzel text-gold-main text-3xl md:text-4xl text-center uppercase relative mb-12">
          O que dizem meus clientes
          {/* Linha Dourada */}
          <span className="block w-16 h-1 mx-auto mt-4 bg-gradient-gold"></span>
        </h2>
        
        {/* Grid dos Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            // Card do Depoimento (Fundo Dark Card)
            <div 
              key={index} 
              className="relative bg-dark-card p-6 pt-12 md:p-8 md:pt-14 border border-gold-dark/20 shadow-lg"
            >
              {/* Aspas Douradas Decorativas (Simula o ::before do CSS) */}
              <span className="font-cinzel absolute top-[-10px] left-4 text-gold-main/20 text-7xl leading-none select-none">
                “
              </span>
              
              {/* Citação */}
              <p className="font-montserrat text-gray-300 italic text-base md:text-lg relative z-10 mb-6">
                {test.quote}
              </p>
              
              {/* Autor */}
              <span className="font-montserrat text-gold-main uppercase text-xs font-semibold tracking-wider block">
                {test.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
