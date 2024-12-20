import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";

import { Toaster } from "react-hot-toast";

import favicon from "./favicon.ico";

import "./_styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTopButton from "./_components/ui/ScrollToTop";
import { Suspense } from "react";
import Spinner from "./_components/ui/Spinner";
import Loader from "./_components/ui/Loader";
import { Provider } from "react-redux";
import { store } from "./_hooks/store";
import ClientProvider from "./ClientProvider";
// import setAuthToken from "@/lib/setAuthToken";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
	title: { template: "%s JobMingle", default: "Welcome / Jobmingle" },
	description:
		"We are a ed-tech and job recruitment platform that empowers individuals seeking to transition to a new career with high-income skills and provides access to numerous remote job opportunities across the country.",
	icons: `${favicon}`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" style={{ overflowX: "hidden" }}>
			<link rel="icon" href="favicon.ico" type="image/x-icon" />

			{/* <body className={` ${ibmPlexSerif.className} ${inter.className}`}> */}
			<body className={` ${ibmPlexSerif.className} `}>
				{/* <Suspense fallback={<Loader />}> */}
				<ClientProvider>
					<main>{children}</main>
				</ClientProvider>
				{/* </Suspense> */}
				<ScrollToTopButton />

				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "100px 8px" }}
					toastOptions={{
						success: { duration: 3000 },
						error: { duration: 5000 },
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							backgroundColor: "#fff",
							color: "#374151",
						},
					}}
				/>
			</body>
		</html>
	);
}
