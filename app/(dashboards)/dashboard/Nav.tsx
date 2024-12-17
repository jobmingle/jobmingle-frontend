"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { HiHome, HiMiniBriefcase, HiOutlineCog } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import LogoutButton from "@/app/_components/auth/LogoutButton";

const UserDashboard = () => {
	const pathname = usePathname();

	// const isActive = (path: string): boolean => pathname === path;

	const isActive = (path: string): boolean => {
		const segment = path.split("/").filter(Boolean);
		return pathname === path || pathname.includes("/" + segment[1]);
	};

	return (
		<nav
			className={`flex flex-col justify-center  w-full   py-3 px-0 max-lg:px-2-  lg:pl-[2.5rem]  overflow-auto-`}
		>
			<ul className=" flex flex-row lg:flex-col md:gap-[0.2rem]  w-full justify-between lg:justify-between items-center lg:items-start md:overflow-y-auto h-full">
				<li className="lg:w-full">
					<Link
						href="/dashboard"
						className={`flex items-center lg:gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center lg:gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center lg:gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center lg:gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
						className={`flex items-center lg:gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
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
					<LogoutButton />
				</li>
			</ul>
		</nav>
	);
};

export default UserDashboard;
