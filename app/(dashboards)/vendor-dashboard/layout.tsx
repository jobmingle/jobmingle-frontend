import Nav from "./Nav";
import Logo from "@/app/_components/ui/Logo";
import Jmlogo from "@/public/image/jobmingle.png";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const username = "Prosper Williams";
	const location = "Benin City Nigeria";
	return (
		<main className="grid grid-cols-12 min-h-screen relative">
			<aside className="col-span-12  md:col-span-2  bg-gray-300  flex flex-col text-center items-center md:items-start border min-h-screen gap-14 pl-[1rem] py-[3.2rem] ">
				<div className="mx-auto">
					<Logo path={Jmlogo} width={120} height={120} />
				</div>
				<Nav />
			</aside>
			<div className="col-span-12 md:col-span-10 sm:px-2 w-full max-h-[100vh] overflow-auto">
				{children}
			</div>
		</main>
	);
}
