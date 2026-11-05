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

  async headers() {
    return [{
      source: '/categories/rice',
      headers: [{
        key: 'Link',
        value: '</_next/static/css/06gm_knwcliz-x.css>; rel=preload; as=style',
      }],
    }];
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
        source: '/cuisines',
        destination: '/recipes/',
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

      // Duplicate featured product URLs -> real product pages
      {
        source: '/feature_product/products/:slug/:sku',
        destination: '/products/:slug/:sku/',
        permanent: true,
      },
            // Old blog detail URLs -> new blog pages
      {
        source: '/blog-details/:slug',
        destination: '/blogs/:slug/',
        permanent: true,
      },
      // Old blog list URL -> blog list
      {
        source: '/blog-details',
        destination: '/blogs/',
        permanent: true,
      },
      
      // Featured products list duplicate -> featured page
      {
        source: '/feature_product/products',
        destination: '/feature_product/',
        permanent: true,
      },
      // Old single-segment featured product pages -> products list
      {
        source: '/feature_product/:ProductSlug',
        destination: '/products/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;