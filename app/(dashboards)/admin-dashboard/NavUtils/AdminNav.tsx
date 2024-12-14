"use client";

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
import LogoutButton from "@/app/_components/auth/LogoutButton";

const SideNav = () => {
	const router = useRouter();

	const pathname = usePathname();

	const isActive = (path: string): boolean => {
		const segment = path.split("/").filter(Boolean);
		return pathname === path || pathname.includes("/" + segment[1]);
	};

	return (
		<nav
			className={`flex flex-col justify-center w-full py-3 px-0 max-lg:px-2 lg:pl-[2.5rem]  overflow-auto`}
		>
			<ul className=" flex flex-row lg:flex-col gap-[0.2rem] w-full justify-between lg:justify-between items-center lg:items-start overflow-y-auto h-full">
				<li className={`lg:w-full `}>
					<Link
						href="/admin-dashboard/"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
					<LogoutButton />
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;
