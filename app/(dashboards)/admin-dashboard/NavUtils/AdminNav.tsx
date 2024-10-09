"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Button from "@/app/_components/ui/Button";
import { useRouter } from "next/navigation";

const SideNav = () => {
	const router = useRouter();
	const { logout } = useAuth();

	function handleLogout() {
		logout();
		router.push("/sign-in");
	}

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<aside className="w-64 bg-gray-800 text-white flex flex-col">
				<div className="p-6">
					<h1 className="text-2xl font-bold">Dashboard</h1>
				</div>
				<nav className="flex-1 px-4 space-y-4">
					<a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">
						Home
					</a>
					<a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">
						Profile
					</a>
					<a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">
						Settings
					</a>

					<Button onClick={handleLogout} type="logout">
						Logout
					</Button>
				</nav>
			</aside>
		</div>
	);
};

export default SideNav;
