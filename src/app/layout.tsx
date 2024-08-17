import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Loading from "@/app/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car dealer app",
  description: "Car dealer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
