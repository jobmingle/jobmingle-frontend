import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./_styles/globals.css";
// import "./App.css";
import AppFooter from "./_components/ui/Footer";
import MyApp from "@/app/_app";
import favicon from "./favicon.ico";
import AppHeader from "@/app/_components/ui/AppHeader";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
   // title: "JobMingle",
   description: "JobMingle LandingPage",
   icons: `${favicon}`,
};
export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" style={{overflowX: "hidden"}} className="min-h-[100vh]">
         <head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QCE3Y88E2S"></Script>
            <Script>{` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-QCE3Y88E2S'); `}</Script>
         </head>

         <MyApp />
         <link rel="icon" href="favicon.ico" type="image/x-icon" />
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
