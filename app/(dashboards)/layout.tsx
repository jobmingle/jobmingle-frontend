"use client";
import { useAppDispatch, useAppSelector } from "../_hooks/hooks";
import { setUser, user as userData } from "../_features/appSlices/userSlice";
import { useGetAuthUserQuery } from "../_features/appSlices/apiSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import ProtectedRoute from "@/app/_hooks/ProtectedRoute";

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
		dispatch(setUser({ user: user }));
		// eslint-disable-next-line
	}, [user, dispatch, error]);

	useEffect(() => {
		if (token && !user) {
			refetchUser();
		}
		dispatch(setUser({ user: user }));
	}, [user, dispatch, token, refetchUser]);

	return <>{children}</>;
}
export default Layout;
