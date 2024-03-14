import { KAKAO_MAP_API_KEY } from "@/constants/index.constant";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOYEORAK - CultureLand",
  description: "udemy MOYEORAK 팀 CultureLand client",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
        <Script
          src={"https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"}
          strategy="beforeInteractive"
          integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
