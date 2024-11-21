"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: any) => {
	const { isAuthenticated } = useAuth();
	const router = useRouter();

	// useEffect(() => {
	// 	if (!isAuthenticated) {
	// 		router.push("/sign-in");
	// 	}
	// }, []);

	// if (isAuthenticated === null) return;
	// if (isAuthenticated === null) return <div>Loading...</div>;

	// return isAuthenticated ? <main>{children}</main> : null;
	return <main>{children}</main>;
	// return <main>{isAuthenticated ? children : null}</main>;
};

export default ProtectedRoute;
