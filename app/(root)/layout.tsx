"use client";
import { useAppDispatch, useAppSelector } from "../_hooks/hooks";
import { setUser, user as userData } from "../_features/appSlices/userSlice";
import { useGetAuthUserQuery } from "../_features/appSlices/apiSlice";
import { useEffect } from "react";
import AppHeader from "@/app/_components/ui/AppHeader";
import AppFooter from "../_components/ui/Footer";
import { useRouter } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const token = localStorage.getItem("auth_token")
		? localStorage.getItem("auth_token")
		: null;

	const {
		currentData: user,
		isFetching,
		refetch: refetchUser,
		error,
	}: any = useGetAuthUserQuery();

	useEffect(() => {
		if (error?.status === 401) {
			console.log(error);
			localStorage.removeItem("access_token");
			router.push("/");
		}
		// eslint-disable-next-line
	}, [user, error]);

	useEffect(() => {
		if (token && !user) {
			refetchUser();
		}
		dispatch(setUser({ user: user }));
	}, [user, token, dispatch]);

	return (
		<main className="flex flex-col justify-between min-h-screen">
			<header className="md:mb-24">
				<AppHeader />
			</header>
			<div className="flex-1  ">
				<main className=" mx-auto">{children}</main>
			</div>
			<footer>
				<AppFooter />
			</footer>
		</main>
	);
}
export default Layout;
