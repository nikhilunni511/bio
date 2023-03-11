/** @type {import('next').NextConfig} */
const path = require('path');
const rewrites = () => {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:3001/v1/:path*",
    },
    {
      source: "/ducks",
      destination: "https://random-d.uk/api/random",
    },
  ];
};
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  rewrites
}

module.exports = nextConfig
