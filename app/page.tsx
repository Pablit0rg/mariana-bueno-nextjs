// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AreasAtuacao from '@/components/AreasAtuacao';
import SobreAdvogada from '@/components/SobreAdvogada';
// Importaremos os componentes Footer e Depoimentos a seguir

// Define o link do WhatsApp para ser usado nos CTAs
const WHATSAPP_LINK_CONSULTORIA = "https://wa.me/5541997606069?text=Ol%C3%A1%20Dra.%20Mariana%2C%20acessei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria.";

export default function Home() {
  return (
    <>
      <Navbar /> 
      
      <main className="pt-[80px]"> {/* Adiciona padding para evitar que o conteúdo fique atrás da Navbar fixa */}
        <Hero whatsappLink={WHATSAPP_LINK_CONSULTORIA} />
        
        <AreasAtuacao />
        
        <SobreAdvogada />
        
        {/* <Depoimentos /> -- SERÁ CRIADO A SEGUIR */}
        
        {/* <ContatoFinal /> -- SERÁ CRIADO A SEGUIR */}

        {/* <Footer /> -- SERÁ CRIADO A SEGUIR */}
      </main>
    </>
  );
}
