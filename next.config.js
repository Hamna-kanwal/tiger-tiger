/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com', // Jo pehle flag wala kiya tha
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash ke liye ye zaroori hai
      },
    ],
  },
};

module.exports = nextConfig;