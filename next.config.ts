import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
      {
        hostname: "miro.medium.com",
        protocol: "https",
      },
      {
        hostname: "fastly.picsum.photos",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
