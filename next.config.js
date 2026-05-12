/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. Sabse pehle qualities define karein (Taaki wo yellow warnings khatam ho jayein)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Aapki mangi hui qualities yahan hain
    qualities: [25, 50, 75, 85, 100], 

    // 2. Remote Patterns (Backend se images allow karne ke liye)
    remotePatterns: [
      {
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
        pathname: '/**', // Double star taaki sare sub-folders cover ho jayein
      },
    ],
  },
};

module.exports = nextConfig;