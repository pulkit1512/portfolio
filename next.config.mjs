/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    // Serve AVIF (then WebP) so the ~1900px source screenshots ship as much
    // smaller, per-device optimized variants. Purely a delivery optimization —
    // the rendered result is visually identical.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
