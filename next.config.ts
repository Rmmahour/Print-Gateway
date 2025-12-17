import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/printing-gateway',
  assetPrefix: '/printing-gateway/',
  experimental: { typedRoutes: true },
  images: {
    domains: ['blob.v0.app', 'blobs.vusercontent.net', 'campaign.basiq360.com', 'localhost:3000'],
    unoptimized: true,
  }
  /* config options here */
};

export default nextConfig;
