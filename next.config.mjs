/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["yanastudys3.s3.ap-northeast-2.amazonaws.com"],
    remotePatterns: [
      {
        hostname:
          "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app",
      },
      {
        hostname: "www.kopis.or.kr",
      },
    ],
  },
};

export default nextConfig;
