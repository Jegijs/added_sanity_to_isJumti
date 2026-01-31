/** @type {import('next').NextConfig} */

const nextConfig = {
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
    return [
      // ... your redirects
    ];
  }
};

export default nextConfig;