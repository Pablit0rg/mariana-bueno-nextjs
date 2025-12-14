/** @type {import('next').NextConfig} */
const nextConfig = {
    // Permite carregar imagens de domínios externos se precisarmos
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
