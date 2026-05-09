import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 70, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.isjumti.lv",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'zod', 'react-hook-form'],
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
        source: '/padomi/:path*',
        destination: '/blog/:path*',
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

  // 4. Veco WordPress URL saglabāšana
  async redirects() {
    return [
      {
        source: '/elements/galleries',
        destination: '/galerija',
        permanent: true,
      },
      {
        source: '/elements/galleries/',
        destination: '/galerija',
        permanent: true,
      },
      {
        source: '/2024/07/30/noteku-sistemu-uzturesana-ka-nodrosinat-efektivu-lietus-udens-novadisanu',
        destination: '/padomi/noteku-sistemu-uzturesana',
        permanent: true,
      },
      {
        source: '/2024/07/30/ekovates-prieksrocibas-videi-draudziga-siltinasana-jusu-majam',
        destination: '/padomi/ekovates-prieksrocibas',
        permanent: true,
      },
      {
        source: '/2024/07/30/tamesanas-pamati-ka-planot-jumta-remontu-un-renovaciju',
        destination: '/padomi/tamesanas-pamati',
        permanent: true,
      },
      {
        source: '/2024/07/25/jumika-pakalpojumu-izmaksu-celvedis',
        destination: '/padomi/jumika-pakalpojumu-izmaksu-celvedis',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
