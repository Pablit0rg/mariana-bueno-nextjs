// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        // Cores de Fundo (Rich Black)
        'rich-black': '#080808', // Cor de fundo principal
        'dark-card': '#121212',  // Cor de destaque (cards)

        // Cores do Ouro (Manter o Hex principal)
        'gold-main': '#d4af37', // Ouro Principal
        'gold-light': '#f7ef8a', // Para efeitos de brilho
        'gold-dark': '#ae8625',  // Para sombras
      },
      fontFamily: {
        // Nossas fontes de autoridade
        cinzel: ['Cinzel', 'serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
      },
      // Criando o gradiente Dourado (Para usar em botões)
      backgroundImage: {
        'gradient-gold': 'linear-gradient(110deg, #ae8625 0%, #f7ef8a 25%, #d2ac47 50%, #edc967 100%)', // Gradiente de Ouro
      }
    },
  },
  plugins: [],
}
