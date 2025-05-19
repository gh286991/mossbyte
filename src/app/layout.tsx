import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from '../components/Navbar';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mossbyte Studio",
  description: "Mossbyte Studio 官方網站，像素遊戲、開發誌、教學與 Podcast。",
  icons: {
    icon: [
      { url: '/icons/favicon.png', sizes: '32x32' },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-5xl mx-auto px-4 w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
