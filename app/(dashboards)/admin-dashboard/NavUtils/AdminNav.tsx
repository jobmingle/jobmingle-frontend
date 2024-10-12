"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Button from "@/app/_components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { HiChartBar, HiMiniBriefcase } from "react-icons/hi2";

const SideNav = () => {
	const router = useRouter();
	const { logout } = useAuth();

	const pathname = usePathname();

	const isActive = (path: string): boolean => pathname === path;

	function handleLogout() {
		logout();
		router.push("/sign-in");
	}

	return (
		<nav className={` flex flex-col items-center md:items-start w-full`}>
			<ul className=" flex flex-col gap-[0.8rem] w-full">
				<li>
					<Link
						href="/admin-dashboard"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/admin-dashboard") ? "bg-gray-50" : ""
						}`}
					>
						<HiChartBar className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Analytics</p>
					</Link>
				</li>

				<li>
					<Link
						href="/admin-dashboard/jobs"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/admin-dashboard/jobs") ? "bg-gray-50" : ""
						}`}
					>
						<HiMiniBriefcase className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Jobs</p>
					</Link>
				</li>
				<li>
					<Button onClick={handleLogout} type="logout">
						Logout
					</Button>
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;
