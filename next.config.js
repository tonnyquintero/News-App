/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.seattlepi.com', 'thenextweb.com','techcrunch.com', 's.yimg.com', 'cdnp3.stackassets.com']
  }
}

module.exports = nextConfig
