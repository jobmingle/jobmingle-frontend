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
import { BiBookOpen } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const UserDashboard = () => {
	const pathname = usePathname();
	const { logout } = useAuth();
	function handleLogout() {
		logout();
	}

	const isActive = (path: string): boolean => pathname === path;

	return (
		<nav
			className={`flex flex-col justify-center  w-full   py-3 px-0 max-lg:px-2  lg:pl-[2.5rem]  md:overflow-y-auto`}
		>
			<ul className=" flex flex-row lg:flex-col gap-[0.2rem] w-full justify-between lg:justify-between items-center lg:items-start md:overflow-y-auto h-full">
				<li className="lg:w-full">
					<Link
						href="/dashboard"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard") ? "text-yellow-500 md:bg-gray-50" : ""
						}`}
					>
						<HiHome
							className={`text-inherit hover:text-yellow-500 w-[1.8rem] h-[1.8rem] `}
						/>
						<p className="hidden lg:flex"> Dashboard</p>
					</Link>
				</li>
				<li className=" lg:w-full ">
					<Link
						href="/dashboard/my-learning"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard/my-learning")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						{/* <HiOutlineBookOpen */}
						<FaBookOpenReader
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit `}
						/>
						<p className="hidden lg:flex  "> My Learning</p>
					</Link>
				</li>
				<li className=" lg:w-full">
					<Link
						href="/dashboard/courses"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard/courses")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<FaBook
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit `}
						/>
						<p className="hidden lg:flex"> Courses</p>
					</Link>
				</li>

				<li className=" lg:w-full">
					<Link
						href="/dashboard/jobs"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard/jobs") ? "text-yellow-500 md:bg-gray-50" : ""
						}`}
					>
						<HiMiniBriefcase
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>
						<p className="hidden lg:flex"> Jobs</p>
					</Link>
				</li>

				<li className="lg:w-full">
					<Link
						href="/dashboard/settings"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/dashboard/settings")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiOutlineCog
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>

						<p className="hidden lg:flex">Settings</p>
					</Link>
				</li>

				<li className=" lg:w-full">
					<button
						onClick={handleLogout}
						className=" flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 md:hover:bg-gray-50 rounded md:rounded-l px-[1.2rem] md:px-4"
					>
						<HiMiniArrowLeftStartOnRectangle
							title="Logout"
							className=" hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem]"
						/>
						<p className="hidden lg:flex text-center "> Logout</p>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default UserDashboard;
