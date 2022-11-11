/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aiwaelectronics.com.ar',
      },
    ],
  },
}

module.exports = nextConfig
