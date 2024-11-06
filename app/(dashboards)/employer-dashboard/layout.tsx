"use client";

import Logo from "@/app/_components/ui/Logo";
import HeaderDash from "@/app/_components/ui/HeaderDash";
import Jmlogo from "@/public/image/jobmingle.png";
import Nav from "./Nav";
import { JobProvider } from "@/app/_contexts/jobs/JobsState";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col md:grid md:grid-cols-[16rem_1fr] md:grid-rows-[auto_1fr]   h-[100vh] overflow-hidden">
			<HeaderDash />
			<aside className="hidden md:flex md:flex-col  gap-[3.2rem] md:row-span-full py-[3.2rem]  bg-gray-300">
				<Logo path={Jmlogo} width={120} height={120} />
				<Nav />
			</aside>
			<JobProvider>
				<div className=" max-md:flex-1 overflow-y-auto pb-[5rem]">
					<div className="p-[1rem] flex flex-col mx-auto max-w-[120rem] ">
						{children}
					</div>
				</div>
			</JobProvider>
			<footer className="md:hidden bg-gray-300 h-[80px]  fixed right-0 left-0 bottom-0 z-[2]">
				<Nav />
			</footer>
		</main>
	);
}
