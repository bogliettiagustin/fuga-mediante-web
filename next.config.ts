import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  redirects() {
    return [{ source: "/disimular", destination: "/", permanent: false }];
  },
};

export default nextConfig;
