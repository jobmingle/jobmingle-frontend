"use client";
import Nav from "./Nav";
import HeaderDash from "@/app/_components/ui/HeaderDash";

import Logo from "@/app/_components/ui/Logo";
import Jmlogo from "@/public/image/jobmingle.png";
import Link from "next/link";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col  lg:grid lg:grid-cols-[15rem_1fr] min-h-screen h-screen lg:grid-rows-[auto_1fr]  overflow-hidden">
			<HeaderDash />
			<aside className="hidden lg:flex lg:flex-col  gap-[3.2rem] lg:row-span-full pt-[3.2rem]  bg-gray-400">
				<Link href="/">
					<Logo path={Jmlogo} width={120} height={120} />
				</Link>
				<Nav />
			</aside>
			<div className=" overflow-y-auto pb-[5rem]">
				<div className="p-[.5rem] lg:p-[1rem]  mx-auto max-w-[120rem] ">
					{children}
				</div>
			</div>
			<footer className="lg:hidden bg-gray-300   fixed right-0 left-0 bottom-0 z-[2]">
				<Nav />
			</footer>
		</main>
	);
}
