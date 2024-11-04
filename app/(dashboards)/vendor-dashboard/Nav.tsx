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
		<nav className={`flex flex-col justify-center w-full py-6 md:pl-[2.5rem]`}>
			<ul className=" flex flex-row md:flex-col gap-[0.2rem] md:gap-[1.2rem] w-full justify-between md:justify-between items-center md:items-start">
				<li className=" md:w-full">
					<Link
						href="/vendor-dashboard"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 max-md:rounded md:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/vendor-dashboard") ? "bg-gray-50" : ""
						}`}
					>
						<HiHome
							className={`hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] ${
								isActive("/vendor-dashboard") ? "text-yellow-500" : ""
							}`}
						/>
						<p className="hidden md:flex"> Home</p>
					</Link>
				</li>
				<li className=" md:w-full">
					<Link
						href="/vendor-dashboard/courses"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 max-md:rounded md:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/vendor-dashboard/courses") ? "bg-gray-50" : ""
						}`}
					>
						<HiOutlineBookOpen
							className={`hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] ${
								isActive("/vendor-dashboard/courses") ? "text-yellow-500" : ""
							}`}
						/>
						<p className="hidden md:flex"> Courses</p>
					</Link>
				</li>

				<li className="md:w-full">
					<Link
						href="/vendor-dashboard/settings"
						className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 max-md:rounded md:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/vendor-dashboard/settings") ? "bg-gray-50" : ""
						}`}
					>
						<HiOutlineCog
							className={`hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] ${
								isActive("/vendor-dashboard/settings") ? "text-yellow-500" : ""
							}`}
						/>

						<p className="hidden md:flex">Settings</p>
					</Link>
				</li>

				<li className=" md:w-full mt-20">
					<button
						onClick={handleLogout}
						className=" flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-[1.2rem] md:px-4"
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
