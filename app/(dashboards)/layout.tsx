import AppFooter from "../_components/ui/Footer";
// import ProtectedRoute from "@/app/_hooks/ProtectedRoute";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <ProtectedRoute>
		<main>{children}</main>
		// </ProtectedRoute>
	);
}
