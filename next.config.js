/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/portfolio/" : "",
  // Add basePath
  basePath: isProd ? "/portfolio" : "",
};

module.exports = nextConfig;
