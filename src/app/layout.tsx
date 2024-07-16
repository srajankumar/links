import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Srajan Kumar • Links",
    template: "%s | Srajan's Website",
  },
  description: "All my links in one place.",
  keywords: [
    "Srajan Kumar",
    "Srajan Links",
    "Srajan",
    "Srajan Sahyadri",
    "Srajan Kumar Sahyadri",
    "Srajan Sahyadri College",
    "Srajan Kumar Sahyadri College",
    "Srajan SCEM",
    "Srajan Kumar SCEM",
    "Designer",
    "Portfolio",
    "Portfolio Website",
    "Designer and Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Full Stack Developer",
    "React Developer",
    "MERN Stack Developer",
  ],
  creator: "Srajan Kumar",
  openGraph: {
    title: "Srajan Kumar • Links",
    description: "All my links in one place.",
    url: "https://srajan.vercel.app/",
    siteName: "Srajan Kumar • Links",
    images: [
      {
        url: "https://srajan.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Srajan Kumar • Links",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srajan Kumar • Links",
    description: "All my links in one place.",
    creator: "@kumarsrajan02",
    images: ["https://srajan.vercel.app/og.png"],
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative mx-auto max-w-4xl px-5">
          {/* <Background /> */}
          <div className="flex justify-center items-center min-h-[100dvh]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
