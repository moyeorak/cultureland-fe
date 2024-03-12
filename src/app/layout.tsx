import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOYEORAK - CultureLand",
  description: "udemy MOYEORAK 팀 CultureLand client",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
