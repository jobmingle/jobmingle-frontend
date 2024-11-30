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
	HiOutlineCog,
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
		<nav
			className={`flex flex-col justify-center w-full py-3 px-0 max-lg:px-2 lg:pl-[2.5rem]  overflow-y-auto`}
		>
			<ul className=" flex flex-row lg:flex-col gap-[0.2rem] w-full justify-between lg:justify-between items-center lg:items-start overflow-y-auto h-full">
				<li className={`lg:w-full `}>
					<Link
						href="/admin-dashboard/"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiHome
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>
						<p className="hidden md:flex"> Home</p>
					</Link>
				</li>
				<li className="lg:w-full">
					<Link
						href="/admin-dashboard/analytics"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard/analytics")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiChartBar
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem]  text-inherit`}
						/>
						<p className="hidden md:flex"> Analytics</p>
					</Link>
				</li>
				<li className="lg:w-full">
					<Link
						href="/admin-dashboard/jobs"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard/jobs")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiMiniBriefcase
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem]  text-inherit`}
						/>
						<p className="hidden md:flex"> Jobs</p>
					</Link>
				</li>
				<li className="lg:w-full">
					<Link
						href="/admin-dashboard/users"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard/users")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiUserGroup
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem]  text-inherit`}
						/>
						<p className="hidden md:flex"> Users</p>
					</Link>
				</li>
				<li className="lg:w-full">
					<Link
						href="/admin-dashboard/settings"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/admin-dashboard/settings")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiOutlineCog
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>

						<p className="hidden md:flex">Settings</p>
					</Link>
				</li>
				<li className=" lg:w-full">
					<button
						onClick={handleLogout}
						className=" flex items-center gap-2 transition-all hover:text-yellow-500 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded px-8 md:px-4"
					>
						<HiMiniArrowLeftStartOnRectangle
							title="Logout"
							className="   w-[1.8rem] h-[1.8rem] text-inherit"
						/>
						<p className="hidden md:flex text-center "> Logout</p>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;
