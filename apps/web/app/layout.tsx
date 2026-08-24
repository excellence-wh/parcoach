import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Parcoach 亲导 — 面向老师/家长的 PBL 项目式学习开源资源",
  description:
    "Parcoach（亲导）：教师与家长的情绪合作伙伴，带孩子以 PBL（项目式学习）方式探索与成长。开源 PBL 教案生成体系，含知识点澄清、教案生成与统一输出。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
