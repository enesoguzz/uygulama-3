import type { NextConfig } from "next";

// Site tamamen statik: `next build` çıktısı `out/` klasörüne düz HTML olarak yazılır.
const config: NextConfig = {
  output: "export",
  reactStrictMode: true,
};

export default config;
