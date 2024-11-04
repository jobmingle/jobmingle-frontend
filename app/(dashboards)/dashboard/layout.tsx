"use client";
import Nav from "./Nav";
import HeaderDash from "@/app/_components/ui/HeaderDash";

import Logo from "@/app/_components/ui/Logo";
import Jmlogo from "@/public/image/jobmingle.png";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col md:grid md:grid-cols-[15rem_1fr]  md:grid-rows-[auto_1fr]   h-[100vh] overflow-hidden">
			<HeaderDash />
			<aside className="hidden md:flex md:flex-col  gap-[3.2rem] md:row-span-full py-[3.2rem]  bg-gray-400">
				<Logo path={Jmlogo} width={120} height={120} />
				<Nav />
			</aside>
			<div className="p-[1rem] overflow-auto">
				<div className="flex flex-col mx-auto max-w-[120rem] overflow-auto">
					{children}
				</div>
			</div>
			<footer className="md:hidden">
				<Nav />
			</footer>
		</main>
		// <main className="grid grid-cols-12 min-h-screen relative">
		// 	<aside className=" absolute md:static bottom-0 h-20 md:min-h-screen w-full md:w-auto md:bottom-auto md:col-span-2 bg-gray-300  flex md:flex-col text-center items-center  md:gap-14 md:pl-[1rem] py-[0.7rem] md:py-[3.2rem] z-40 md:z-auto">
		// 		<div className="mx-auto hidden md:flex">
		// 			<Logo path={Jmlogo} width={120} height={120} />
		// 		</div>
		// 		<Nav />
		// 	</aside>
		// 	<div className="col-span-12 md:col-span-10 sm:px-2 w-full max-h-[100vh] overflow-auto">
		// 		{children}
		// 	</div>
		// </main>
	);
}
