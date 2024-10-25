import AppFooter from "../_components/ui/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={`h-screen w-full flex flex-col`}>
			<main className="max-md:scroll-">{children}</main>
			{/* <AppFooter /> */}
		</section>
	);
}
