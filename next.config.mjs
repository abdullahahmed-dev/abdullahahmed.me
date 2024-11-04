/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Add Cloudflare Pages specific config
  experimental: {
    runtime: 'edge',
  },
}

export default nextConfig