import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const getNextConfig = (phase: string): NextConfig => {
  const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: { unoptimized: true },
    // basePath: '/pocketcv',
    assetPrefix: phase === PHASE_DEVELOPMENT_SERVER ? undefined : '/pocketcv/',
  };

  return nextConfig;
};

export default getNextConfig;