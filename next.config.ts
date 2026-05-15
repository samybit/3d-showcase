import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production build fallback (if Webpack is still used)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      three: "three",
    };
    return config;
  },

  // Development server configuration for Next.js 16+
  turbopack: {
    resolveAlias: {
      three: "three",
    },
  },
};

export default nextConfig;