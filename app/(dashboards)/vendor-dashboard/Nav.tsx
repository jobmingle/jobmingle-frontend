"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { usePathname, useRouter } from "next/navigation";
import Button from "../../_components/ui/Button";
import { useState } from "react";
import Link from "next/link";
import {
	HiOutlineBookOpen,
	HiOutlineCog,
	HiPencilSquare,
} from "react-icons/hi2";

const UserDashboard = () => {
	const router = useRouter();
	const pathname = usePathname();
	const { logout } = useAuth();
	function handleLogout() {
		logout();
	}

	const isActive = (path: string): boolean => pathname === path;

	return (
		<nav className={` flex flex-col items-center md:items-start w-full`}>
			<ul className=" flex flex-col gap-[0.8rem] w-full">
				<li>
					<Link
						href={"/vendor-dashboard"}
						className={`flex gap-2  transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/vendor-dashboard") ? "bg-gray-50" : ""
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
						href="/"
						className={`flex gap-1 transition-all 0.3s text-[1rem] py-3 pl-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/") ? "bg-gray-50" : ""
						}`}
					>
						<HiPencilSquare className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex">Add Course</p>
						<p className=" md:hidden" title="Settings">
							{" "}
							S
						</p>
					</Link>
				</li>
				<li>
					<Link
						href="/vendor-dashboard/settings"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/vendor-dashboard/settings") ? "bg-gray-50" : ""
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

export default UserDashboard;
