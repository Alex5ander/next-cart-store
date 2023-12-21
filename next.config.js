const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [{ hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com' }],
  },
};

module.exports = nextConfig;
