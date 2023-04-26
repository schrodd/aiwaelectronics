/*
/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['aiwaelectronics.com.ar'],
  }
}

module.exports = nextConfig
*/

module.exports = {
  //basePath: '/next',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['aiwaelectronics.com.ar', 'www.aiwaelectronics.com.ar'],
    unoptimized: true
  },
  //output: 'export',
  trailingSlash: true,
};