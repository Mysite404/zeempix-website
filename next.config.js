/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com', 'plus.unsplash.com'], // Add domains where you'll host your actual images
    },
  }
  
  module.exports = nextConfig