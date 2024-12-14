"use client";

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
import LogoutButton from "@/app/_components/auth/LogoutButton";

const Nav = () => {
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
				<li className=" lg:w-full">
					<Link
						href="/vendor-dashboard"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
							isActive("/vendor-dashboard")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiHome
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>
						<p className="hidden md:flex"> Dashboard</p>
					</Link>
				</li>

				<li className=" lg:w-full">
					<Link
						href="/vendor-dashboard/courses"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
							isActive("/vendor-dashboard/courses")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiOutlineBookOpen
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>
						<p className="hidden md:flex"> Courses</p>
					</Link>
				</li>
				<li className="lg:w-full">
					<Link
						href="/vendor-dashboard/list-course"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
							isActive("/vendor-dashboard/list-course")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiPencilSquare
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>
						<p className="hidden md:flex">List Course</p>
					</Link>
				</li>
				<li className="lg:w-full">
					<Link
						href="/vendor-dashboard/settings"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1rem] md:px-4 ${
							isActive("/vendor-dashboard/settings")
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

export default Nav;
