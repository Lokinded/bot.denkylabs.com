/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  cleanDistDir: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  async redirects() {
    return [
      {
        source: "/add",
        destination: "https://discord.com/oauth2/authorize?client_id=704517722100465746&scope=bot+applications.commands&permissions=1346759886",
        permanent: false
      },
      {
        source: "/support",
        destination: "https://discord.gg/bVWdscg",
        permanent: false
      },
      {
        source: "/vote",
        destination: "https://top.gg/bot/704517722100465746/vote",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
