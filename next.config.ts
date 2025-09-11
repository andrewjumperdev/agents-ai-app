import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["towardsdatascience.com", "i.ytimg.com", "img.youtube.com"], 
  },
};

export default nextConfig;
