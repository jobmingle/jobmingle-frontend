import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { AuthProvider } from "../_contexts/auth/AuthState";
import { Toaster } from "react-hot-toast";

import MyApp from "@/app/_app";
import AppHeader from "@/app/_components/ui/AppHeader";
import AppFooter from "../_components/ui/Footer";
import "../_styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-col min-h-screen">
			<header>
				<AppHeader />
			</header>
			<div className="flex-1  ">
				<main className=" mx-auto">{children}</main>
			</div>
			<footer>
				<AppFooter />
			</footer>
		</section>
	);
}
