/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/:slug*",
        destination: "https://dcbadge.limes.pink/api/:slug*",
        permanent: false,
      },
      {
        source: "/",
        destination: "https://github.com/gitlimes/discord-md-badge#readme",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
