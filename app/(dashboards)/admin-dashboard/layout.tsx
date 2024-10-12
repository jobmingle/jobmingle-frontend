// import type {Metadata} from "next";
// import {Inter} from "next/font/google";
// import "./_styles/globals.css";
// import "./App.css";
import MyApp from "@/app/_app";
import favicon from "./favicon.ico";
import AppHeader from "@/app/_components/ui/AppHeader";
import Sidenav from "./NavUtils/AdminNav";
import Logo from "@/app/_components/ui/Logo";
import SideNav from "./NavUtils/AdminNav";
import Jmlogo from "@/public/jobmingle.png";

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
		<main className="grid grid-cols-12 h-screen relative">
			<aside className="col-span-12  md:col-span-2  bg-gray-300  flex flex-col text-center items-center md:items-start border min-h-screen gap-14 pl-[1rem] py-[3.2rem] ">
				<div className="mx-auto">
					<Logo path={Jmlogo} width={120} height={120} />
				</div>
				<SideNav />
			</aside>
			<div className="col-span-12 md:col-span-10 sm:px-2 w-full max-h-[100vh] overflow-auto">
				{children}
			</div>
		</main>
	);
}
