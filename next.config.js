/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MAPBOX_ACCESS_TOKEN:
      "[MAPBOX_TOKEN_HERE]", 
      STADIA_API_KEY: process.env.STADIA_API_KEY
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
}

module.exports = nextConfig
