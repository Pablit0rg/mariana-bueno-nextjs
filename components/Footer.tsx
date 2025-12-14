// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    // Footer Corporativo: Fundo Preto, Borda Dourada Forte
    <footer className="bg-black pt-20 mt-10 border-t-4 border-gold-main">
      <div className="container mx-auto px-5">
        
        {/* Grid Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-[#1a1a1a]">
          
          {/* Coluna 1: Identidade e OAB */}
          <div className="flex flex-col">
            <Link href="#inicio" className="font-cinzel text-3xl text-gold-main font-bold mb-4 hover:text-white transition-colors">
              Mariana Bueno
            </Link>
            <p className="font-montserrat text-white text-sm font-semibold mb-6 border border-[#333] px-3 py-1 self-start">
              OAB/PR 00.000
            </p>
            <p className="font-montserrat text-gray-400 text-sm">
              Advocacia pautada na ética, transparência e na busca incansável pela justiça social e trabalhista.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-cinzel text-white text-base uppercase mb-4 border-l-4 border-gold-main pl-4">
              Navegação
            </h4>
            <ul className="space-y-3 font-montserrat text-sm">
              <li><Link href="#atuacao" className="text-gray-400 hover:text-gold-main transition-all duration-300 hover:pl-2 block">Áreas de Atuação</Link></li>
              <li><Link href="#sobre" className="text-gray-400 hover:text-gold-main transition-all duration-300 hover:pl-2 block">A Advogada</Link></li>
              <li><Link href="#depoimentos" className="text-gray-400 hover:text-gold-main transition-all duration-300 hover:pl-2 block">Depoimentos</Link></li>
              <li><Link href="#contato" className="text-gray-400 hover:text-gold-main transition-all duration-300 hover:pl-2 block">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-cinzel text-white text-base uppercase mb-4 border-l-4 border-gold-main pl-4">
              Contato
            </h4>
            <ul className="space-y-4 font-montserrat text-sm">
              <li>
                <strong className="text-white">WhatsApp:</strong><br/>
                <a href="https://wa.me/5541997606069" target="_blank" className="text-gray-400 hover:text-white transition-colors block">(41) 9 9760-6069</a>
              </li>
              <li>
                <strong className="text-white">Email:</strong><br/>
                <span className="text-gray-400">marianabueno.ribeiro@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Direitos Autorais e Crédito do Desenvolvedor) */}
        <div className="bg-black py-4 text-center">
            <p className="font-montserrat text-xs text-gray-600">
                &copy; 2025 Mariana Bueno Advocacia. Todos os direitos reservados.
            </p>
            <p className="font-montserrat text-xs text-gold-main mt-1 opacity-70">
                Desenvolvido por Pablo Rosa Gomes (Seu crédito de portfólio)
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
