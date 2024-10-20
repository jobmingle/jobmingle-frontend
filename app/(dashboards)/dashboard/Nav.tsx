"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { usePathname, useRouter } from "next/navigation";
import Button from "../../_components/ui/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../_components/ui/Logo";
import Jmlogo from "@/public/jobmingle.png";
import {
	HiAcademicCap,
	HiHome,
	HiMiniBriefcase,
	HiOutlineBookOpen,
	HiOutlineCog,
} from "react-icons/hi2";

const MainNav = () => {
	const router = useRouter();
	const { logout, isAuthenticated } = useAuth();
	const [Active, setActive] = useState(false);
	function handleLogout() {
		logout();
	}
	const pathname = usePathname();
	const isActive = (path: string): boolean => pathname === path;

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/sign-in");
		}

		//eslint-disable-next-line
	}, [isAuthenticated]);

	return (
		<nav
			className={` flex flex-col items-center md:items-start w-full`}
			// className={` bg-gray-800 text-white flex flex-col items-center md:items-start border min-h-screen`}
		>
			<ul className=" flex flex-col gap-[0.8rem] w-full">
				<li>
					<Link
						href="/dashboard"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/dashboard") ? "bg-gray-50" : ""
						}`}
					>
						<HiHome className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Home</p>
						<p className=" md:hidden" title="Jobs">
							{" "}
							J
						</p>
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/jobs"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/dashboard/jobs") ? "bg-gray-50" : ""
						}`}
					>
						<HiMiniBriefcase className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex"> Jobs</p>
						<p className=" md:hidden" title="Jobs">
							{" "}
							J
						</p>
					</Link>
				</li>
				<li>
					<Link
						href={"/dashboard/courses"}
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem]  hover:bg-gray-50 rounded-l ${
							isActive("/dashboard/courses") ? "bg-gray-50" : ""
						}`}
					>
						<HiOutlineBookOpen className="w-[1.8rem] h-[1.8rem] hover:text-yellow-500 text-stone-950 " />

						<p className="hidden md:flex"> Courses</p>
						<p className=" md:hidden" title="Courses">
							{" "}
							C
						</p>
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/settings"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/dashboard/settings") ? "bg-gray-50" : ""
						}`}
					>
						<HiOutlineCog className="w-[1.8rem] h-[1.8rem] hover:text-yellow-500 text-stone-950" />

						<p className="hidden md:flex">Settings</p>
						<p className=" md:hidden" title="Settings">
							{" "}
							S
						</p>
					</Link>
				</li>
				<li>
					<Button onClick={handleLogout} type="logout">
						<p className="hidden md:flex"> Logout</p>
						<span className="md:hidden" title="Logout">
							L
						</span>
					</Button>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
