"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { usePathname, useRouter } from "next/navigation";
import Button from "../../_components/ui/Button";
import Link from "next/link";

import {
	HiArrowLeft,
	HiHome,
	HiMiniArrowLeftStartOnRectangle,
	HiMiniBriefcase,
	HiOutlineBookOpen,
	HiOutlineCog,
	HiPencilSquare,
} from "react-icons/hi2";

const UserDashboard = () => {
	const pathname = usePathname();
	const { logout } = useAuth();
	function handleLogout() {
		logout();
	}

	const isActive = (path: string): boolean => pathname === path;

	return (
		<nav
			className={`flex flex-col justify-center  w-full   py-3 md:pl-[2.5rem]`}
		>
			<ul className=" flex flex-row md:flex-col gap-[0.2rem] w-full justify-between  items-center md:items-start">
				<li className={` md:w-full `}>
					<Link
						href="/dashboard"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 md:hover:bg-gray-50 max-md:rounded md:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard") ? "text-yellow-500 md:bg-gray-50" : ""
						}`}
					>
						<HiHome
							className={`hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] ${
								isActive("/dashboard") ? "text-yellow-500" : ""
							}`}
						/>
						<p className="hidden md:flex"> Home</p>
					</Link>
				</li>
				<li className=" md:w-full">
					<Link
						href="/dashboard/courses"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 md:hover:bg-gray-50 max-md:rounded md:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard/courses")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiOutlineBookOpen
							className={`hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] ${
								isActive("/dashboard/courses") ? "text-yellow-500" : ""
							}`}
						/>
						<p className="hidden md:flex"> Courses</p>
					</Link>
				</li>

				<li className=" md:w-full">
					<Link
						href="/dashboard/jobs"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 md:hover:bg-gray-50 max-md:rounded md:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard/jobs") ? "text-yellow-500 md:bg-gray-50" : ""
						}`}
					>
						<HiMiniBriefcase
							className={`hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] ${
								isActive("/dashboard/jobs") ? "text-yellow-500" : ""
							}`}
						/>
						<p className="hidden md:flex"> Jobs</p>
					</Link>
				</li>

				<li className="md:w-full">
					<Link
						href="/dashboard/settings"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 md:hover:bg-gray-50 max-md:rounded md:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard/settings")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiOutlineCog
							className={`hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] ${
								isActive("/dashboard/settings") ? "text-yellow-500" : ""
							}`}
						/>

						<p className="hidden md:flex">Settings</p>
					</Link>
				</li>

				<li className=" md:w-full">
					<button
						onClick={handleLogout}
						className=" flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 md:hover:bg-gray-50 rounded md:rounded-l px-[1.2rem] md:px-4"
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

export default UserDashboard;
