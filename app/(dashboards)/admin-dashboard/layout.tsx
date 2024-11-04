"use client";
import Logo from "@/app/_components/ui/Logo";
import HeaderDash from "@/app/_components/ui/HeaderDash";
import SideNav from "./NavUtils/AdminNav";
import Jmlogo from "@/public/image/jobmingle.png";

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
				<SideNav />
			</aside>
			<div className="p-[1rem] overflow-auto">
				<div className="flex flex-col mx-auto max-w-[120rem] overflow-auto">
					{children}
				</div>
			</div>
			<footer className="md:hidden">
				<SideNav />
			</footer>
		</main>
	);
}
