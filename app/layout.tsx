import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import favicon from "./favicon.ico";
import AppHeader from "@/app/component/ui/AppHeader";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobMingle",
  description: "JobMingle LandingPage",
  icons: `${favicon}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="favico.ico" type="image/x-icon" />

      <body className={inter.className}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
