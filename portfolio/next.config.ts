import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "framer-motion",
      "radix-ui",
      "sonner",
      "@sanity/icons",
    ],
  },

  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
