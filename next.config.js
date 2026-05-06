/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;