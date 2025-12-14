// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AreasAtuacao from '@/components/AreasAtuacao';
// CORREÇÃO: Removemos o "/components" extra do caminho
import SobreAdvogada from '@/components/SobreAdvogada'; 
import Depoimentos from '@/components/Depoimentos';
import Footer from '@/components/Footer';

// Define o link do WhatsApp para ser usado nos CTAs
const WHATSAPP_LINK_CONSULTORIA = "https://wa.me/5541997606069?text=Ol%C3%A1%20Dra.%20Mariana%2C%20acessei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria.";

export default function Home() {
  return (
    <>
      <Navbar /> 
      
      <main className="pt-[80px]"> 
        <Hero whatsappLink={WHATSAPP_LINK_CONSULTORIA} />
        <AreasAtuacao />
        <SobreAdvogada />
        <Depoimentos />
        
        {/* SEÇÃO FINAL DE CONTATO (CTA) */}
        <section id="contato" className="bg-dark-card py-24 md:py-32 text-center">
          <div className="container mx-auto px-5 max-w-2xl">
            <h2 className="font-cinzel text-white text-3xl md:text-4xl uppercase mb-4 relative">
              Não arrisque seu direito.
              <span className="block w-16 h-1 mx-auto mt-4 bg-gradient-gold"></span>
            </h2>
            <p className="font-montserrat text-gray-400 text-lg mb-10">
              Prazos processuais são fatais. Uma demora pode custar a sua causa. Garanta sua defesa técnica hoje mesmo.
            </p>
            
            <a 
              href="https://wa.me/5541997606069?text=Ol%C3%A1%20Dra.%20Mariana%2C%20preciso%20de%20atendimento%20jur%C3%ADdico%20priorit%C3%A1rio." 
              className="cta-button-gold big"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Iniciar Atendimento Prioritário
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}              <span className="block w-16 h-1 mx-auto mt-4 bg-gradient-gold"></span>
            </h2>
            <p className="font-montserrat text-gray-400 text-lg mb-10">
              Prazos processuais são fatais. Uma demora pode custar a sua causa. Garanta sua defesa técnica hoje mesmo.
            </p>
            
            {/* CTA BIG: Mensagem de Prioridade */}
            <a 
              href="https://wa.me/5541997606069?text=Ol%C3%A1%20Dra.%20Mariana%2C%20preciso%20de%20atendimento%20jur%C3%ADdico%20priorit%C3%A1rio." 
              className="cta-button-gold big"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Iniciar Atendimento Prioritário
            </a>
          </div>
        </section>
        
      </main>
      
      {/* RODAPÉ CORPORATIVO */}
      <Footer />
    </>
  );
}
