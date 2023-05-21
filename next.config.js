/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["www.tmdb.org", "www.themoviedb.org"],
  },
};

module.exports = nextConfig;
