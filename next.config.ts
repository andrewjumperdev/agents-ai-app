import type { NextConfig } from "next";

const allowedHostnames = [
  "towardsdatascience.com",
  "i.ytimg.com",
  "img.youtube.com",
  "images.pexels.com",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: allowedHostnames.map(hostname => ({
      protocol: 'https',
      hostname,
      port: '',
      pathname: '/**',
    })),
  },
};

export default nextConfig;
