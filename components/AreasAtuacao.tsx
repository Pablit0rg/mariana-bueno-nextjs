// components/AreasAtuacao.tsx
import React from 'react';

// Define a estrutura dos cards de atuação
const areas = [
  {
    title: 'Direito Trabalhista',
    description: 'Especialista em reversão de justa causa, assédio moral, reconhecimento de vínculo e cálculo de verbas rescisórias. Não deixe a empresa lesar seus direitos.',
  },
  {
    title: 'Direito de Família',
    description: 'Soluções firmes para divórcio (consensual ou litigioso), pensão alimentícia, guarda de filhos e partilha de bens. Proteção para você e seus filhos.',
  },
  {
    title: 'Sucessões (Inventário)',
    description: 'Agilidade e segurança jurídica para regularização de bens e inventários extrajudiciais em cartório. Resolva a burocracia familiar com técnica.',
  },
];

const AreasAtuacao: React.FC = () => {
  return (
    // Seção em fundo Rich Black, com padding otimizado
    <section id="atuacao" className="bg-rich-black py-20 md:py-28">
      <div className="container mx-auto px-5">
        
        {/* Título da Seção (H2 - Cinzel e Dourado) */}
        <h2 className="font-cinzel text-gold-main text-3xl md:text-4xl text-center uppercase relative mb-12">
          Como posso te defender?
          {/* Linha Dourada (Ajuste a altura para simular o ::after do CSS) */}
          <span className="block w-16 h-1 mx-auto mt-4 bg-gradient-gold"></span>
        </h2>
        
        {/* Grid dos Cards de Atuação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            // Card de Atuação (dark-card com borda dourada à esquerda)
            <div 
              key={index} 
              className="bg-dark-card p-6 md:p-8 border border-[#222] border-l-4 border-l-gold-main transition-transform duration-300 hover:shadow-2xl hover:shadow-gold-main/10 hover:-translate-y-1"
            >
              {/* Título do Card (H3) */}
              <h3 className="font-cinzel text-white text-xl uppercase mb-3 tracking-wider">
                {area.title}
              </h3>
              {/* Descrição */}
              <p className="font-montserrat text-gray-400 text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
