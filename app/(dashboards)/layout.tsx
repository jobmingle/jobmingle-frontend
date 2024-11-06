import AppFooter from "../_components/ui/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={` `}>
			<main className="">{children}</main>
		</section>
	);
}
