"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Button from "@/app/_components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
	HiChartBar,
	HiMiniBriefcase,
	HiHome,
	HiHomeModern,
	HiUserGroup,
	HiMiniArrowLeftStartOnRectangle,
} from "react-icons/hi2";

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
		<nav className={`flex flex-col justify-center w-full  py-6 md:pl-[2.5rem]`}>
			<ul className=" flex flex-row md:flex-col gap-[0.2rem] w-full justify-between  items-center md:items-start">
				<li className="md:w-full">
					<Link
						href="/admin-dashboard/"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard") ? "bg-gray-50" : ""
						}`}
					>
						<HiHome className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Dashboard</p>
					</Link>
				</li>
				<li className="md:w-full">
					<Link
						href="/admin-dashboard/analytics"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard/analytics") ? "bg-gray-50" : ""
						}`}
					>
						<HiChartBar className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Analytics</p>
					</Link>
				</li>

				<li className="md:w-full">
					<Link
						href="/admin-dashboard/jobs"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard/jobs") ? "bg-gray-50" : ""
						}`}
					>
						<HiMiniBriefcase className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Jobs</p>
					</Link>
				</li>
				<li className="md:w-full">
					<Link
						href="/admin-dashboard/users"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard/users") ? "bg-gray-50" : ""
						}`}
					>
						<HiUserGroup className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Users</p>
					</Link>
				</li>
				<li className=" md:w-full">
					<button
						onClick={handleLogout}
						className=" flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-8 md:px-4"
					>
						<HiMiniArrowLeftStartOnRectangle
							title="Logout"
							className=" hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem]"
						/>
						<p className="hidden md:flex text-center "> Logout</p>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;
