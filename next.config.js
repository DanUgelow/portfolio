/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Add basePath
  basePath: isProd ? "" : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;
