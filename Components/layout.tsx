import MyApp from "@/app/_app";
import AppHeader from "@/app/_components/ui/AppHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppFooter from "../app/_components/ui/Footer";
import "./App.css";
import favicon from "./favicon.ico";
import "./globals.css";

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
    <html lang="en" style={{ overflowX: "hidden" }}>
      <MyApp />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      {/* <body className={`${inter.className} `}>
				<AppHeader />

				{children}

				<AppFooter />
			</body> */}
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <AppHeader />
        <div className="flex-1 md:px-8  md:py-8 ">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
