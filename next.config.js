/** @type {import('next').NextConfig} */

const nextConfig = {
  cssModules: false,
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  webpack: (config, {
    isServer
  }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
}

module.exports = nextConfig