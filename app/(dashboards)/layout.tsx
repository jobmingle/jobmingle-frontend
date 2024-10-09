import type { Metadata } from "next";

import AppFooter from "../_components/ui/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <section>
		<section className={` min-h-screen flex flex-col`}>
			<div className="flex-1 ">
				<main className="max-w-7xl  mx-auto">{children}</main>
			</div>
			{/* <AppFooter /> */}
		</section>
	);
}
