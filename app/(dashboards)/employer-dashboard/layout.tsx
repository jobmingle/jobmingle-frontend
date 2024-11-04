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
			<aside className="hidden md:flex md:flex-col  gap-[3.2rem] md:row-span-full py-[3.2rem]  bg-gray-400">
				<Logo path={Jmlogo} width={120} height={120} />
				<Nav />
			</aside>
			<JobProvider>
				<div className="p-[1rem] overflow-auto">
					<div className="flex flex-col mx-auto max-w-[120rem] overflow-auto">
						{children}
					</div>
				</div>
			</JobProvider>
			<footer className="md:hidden">
				<Nav />
			</footer>
		</main>
	);
}
