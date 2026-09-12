const allowIndexing = process.env.ALLOW_INDEXING === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Solo indexa si ALLOW_INDEXING=true en producción
          ...(allowIndexing ? [] : [{ key: 'X-Robots-Tag', value: 'noindex' }]),
        ],
      },
    ]
  },
}
export default nextConfig
