/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Attēlu optimizācija (LCP uzlabojums)
  images: {
    // Ieslēdzam modernākos formātus. AVIF ir par ~20% vieglāks nekā WebP.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.isjumti.lv",
      },
    ],
    // Nedaudz samazinām kvalitāti, lai ietaupītu joslas platumu (vizuāli nevar atšķirt)
    quality: 80,
  },

  // 2. JavaScript optimizācija
  swcMinify: true, // Izmanto ātro SWC kompilatoru

  // 3. Eksperimentālā optimizācija bibliotēkām (samazina JS apjomu)
  experimental: {
    optimizePackageImports: ['lucide-react', 'embla-carousel-react', 'zod', 'date-fns', 'react-hook-form'],
  },

  // 4. Tavi esošie Rewrites (URL pāradresācijas)
  async rewrites() {
    return [
      {
        source: '/pakalpojumi',
        destination: '/services',
      },
      {
        source: '/galerija',
        destination: '/gallery',
      },
      {
        source: '/izmaksas',
        destination: '/pricing',
      },
      {
        source: '/padomi',
        destination: '/blog',
      },
      {
        source: '/kontakti',
        destination: '/contact',
      },
      {
        source: '/privatuma-politika',
        destination: '/privacy',
      },
    ];
  },

  async redirects() {
    return [];
  }
};

export default nextConfig;