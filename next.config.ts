import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
