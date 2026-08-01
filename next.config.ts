import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/resume": ["./private/Ahmed-Nisar-CV.pdf"],
  },
};

export default nextConfig;
