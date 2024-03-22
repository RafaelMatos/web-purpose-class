/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        hostname: 'cdn.myportfolio.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'github.com',
      },
      {
        hostname: 'i.ytimg.com',
      },
      {
        hostname: 'correionogueirense.com.br',
      },
    ],
  },
}

export default nextConfig
