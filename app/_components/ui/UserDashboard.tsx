"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Button from "./Button";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
	const router = useRouter();
	const { logout } = useAuth();

	function handleLogout() {
		logout();
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

			{/* Main Content */}
			<main className="flex-1 p-8 bg-gray-100">
				<h2 className="text-3xl font-semibold mb-6">
					Welcome to Your Dashboard
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Example Card */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-bold mb-4">Recent Activity</h3>
						<p>Your recent activities will appear here.</p>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-bold mb-4">Statistics</h3>
						<p>Overview of your account statistics.</p>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-bold mb-4">Messages</h3>
						<p>You have no new messages.</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default UserDashboard;
