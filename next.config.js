/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Quality ko default rehne dein ya thora barha dein
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // 🟢 Senior ki Backend API yahan add karni hai
      {
        protocol: 'https',
        hostname: 'backend.tigertigerfoods.com',
        pathname: '**', // Taaki har folder ki image allow ho jaye
      },
    ],
  },
};

module.exports = nextConfig;