/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default nextConfig;
