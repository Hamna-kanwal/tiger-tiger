/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. Quality error fix karne ke liye ye line add ki hai
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