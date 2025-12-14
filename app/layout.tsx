// app/layout.tsx
import './globals.css'; // Importa o CSS Global (que será criado a seguir)
import type { Metadata } from 'next';
import { Cinzel, Montserrat } from 'next/font/google'; // Importa as fontes otimizadas

// Configuração das Fontes (Cinzel para Títulos, Montserrat para o Corpo)
// As configurações refletem o que definimos no tailwind.config.js
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
});

// Metadados para SEO Global
export const metadata: Metadata = {
  title: 'Mariana Bueno | Advogada Trabalhista e Cível em Curitiba',
  description: 'Advogada especialista em reversão de Justa Causa, Divórcio e Inventário em Curitiba. Atendimento ágil, estratégico e de confiança.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${montserrat.variable} scroll-smooth`}>
      {/* O className 'bg-rich-black' do Tailwind será aplicado via CSS Global
        A tag 'scroll-smooth' habilita a rolagem suave das âncoras (Navbar)
      */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
