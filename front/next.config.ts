import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: '/pocketcv',
  assetPrefix: '/pocketcv/',
};

export default nextConfig;
