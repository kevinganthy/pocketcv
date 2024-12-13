import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const getNextConfig = (phase: string): NextConfig => {
  const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: { unoptimized: true },
    assetPrefix: phase === PHASE_DEVELOPMENT_SERVER ? undefined : '/pocketcv/',
    async headers() {
      return [
        {
          source: "/:path*\\.(svg|webp|css)$",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=86400, immutable", 
            },
          ],
        },
      ];
    },
  };

  return nextConfig;
};

export default getNextConfig;