"use client";
import Logo from "@/app/_components/ui/Logo";
import HeaderDash from "@/app/_components/ui/HeaderDash";
import SideNav from "./NavUtils/AdminNav";
import Jmlogo from "@/public/image/jobmingle.png";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col lg:grid lg:grid-cols-[16rem_1fr] lg:grid-rows-[auto_1fr]   h-[100vh] overflow-hidden">
			<HeaderDash />
			<aside className="hidden lg:flex lg:flex-col  gap-[3.2rem] lg:row-span-full pt-[3.2rem]  bg-gray-400">
				<Logo path={Jmlogo} width={120} height={120} />
				<SideNav />
			</aside>
			<div className=" max-lg:flex-1 overflow-y-auto pb-[5rem]">
				<div className="p-[1rem] flex flex-col mx-auto max-w-[120rem] ">
					{children}
				</div>
			</div>
			<footer className="lg:hidden bg-gray-300 h-[80px]  fixed right-0 left-0 bottom-0 z-[2]">
				<SideNav />
			</footer>
		</main>
	);
}
