import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['shiptap.in'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
