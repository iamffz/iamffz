/** @type {import('next').NextConfig} */

const nextConfig = {
  cssModules: false,
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  }
}

module.exports = nextConfig