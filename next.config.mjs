/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname:
          "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app",
      },
      {
        hostname: "www.kopis.or.kr",
      },
      {
        hostname: "k.kakaocdn.net",
      },
      {
        hostname: "yanastudys3.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
