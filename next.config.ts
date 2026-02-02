import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Attēlu optimizācija
  images: {
    // Ieslēdzam modernākos formātus
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.isjumti.lv",
      },
    ],
    // PIEZĪME: 'quality' šeit nav atļauts. Tas ir noklusējuma iestatījums (75).
    // Ja vajag citu kvalitāti, to norāda pie <Image quality={80} ... /> komponentes.
  },

  // 2. Eksperimentālā optimizācija bibliotēkām
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'embla-carousel-react',
      'zod',
      'date-fns',
      'react-hook-form'
    ],
  },

  // 3. Rewrites (URL pāradresācijas)
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
};

export default nextConfig;