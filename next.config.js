/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    qualities: [75, 80, 85, 100],
    remotePatterns: [{
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'backend.tigertigerfoods.com',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [{
        source: '/products/asia',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/asia/',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/cuisine',
        destination: '/cuisines',
        permanent: true,
      },
      {
        source: '/cuisine/:path*',
        destination: '/cuisines/:path*',
        permanent: true,
      },
      {
        source: '/product_detail/:slug',
        destination: '/products/:slug',
        permanent: true,
      },
      {
        source: '/product_detail/:slug/:path*',
        destination: '/products/:slug/:path*',
        permanent: true,
      },
      {
        source: '/categories/:category/:slug/:sku',
        destination: '/products/:slug/:sku/',
        permanent: true,
      },
      {
        source: '/categories/undefined/:slug/:sku',
        destination: '/products/:slug/:sku/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;