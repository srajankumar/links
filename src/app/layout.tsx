import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srajan Kumar • Links",
  description: "All my links in one place.",
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
          <Background />
          <div className="flex justify-center items-center min-h-[100dvh]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
