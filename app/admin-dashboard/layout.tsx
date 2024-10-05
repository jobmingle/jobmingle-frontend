// import type {Metadata} from "next";
// import {Inter} from "next/font/google";
// import "./_styles/globals.css";
// import "./App.css";
import MyApp from "@/app/_app";
import favicon from "./favicon.ico";
import AppHeader from "@/app/_components/ui/AppHeader";
import Sidenav from "./NavUtils/AdminNav";

// export const metadata: Metadata = {
//    title: "JobMingle",
//    description: "JobMingle LandingPage",
//    icons: `${favicon}`,
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen relative ">
			<Sidenav />
			<div className="flex-grow">{children}</div>
		</div>
	);
}
