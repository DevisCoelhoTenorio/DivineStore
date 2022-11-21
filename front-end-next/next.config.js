/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  scripts: [
    '/home/arthur/divineStore/DivineStore/front-end-next/node_modules/react-chartjs-2/dist/index',
  ],
};

module.exports = nextConfig;
