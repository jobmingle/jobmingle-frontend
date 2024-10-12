"use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { usePathname, useRouter } from "next/navigation";
import Button from "../../_components/ui/Button";
import Link from "next/link";
import { HiMiniBriefcase, HiOutlineCog, HiPencilSquare } from "react-icons/hi2";

const UserDashboard = () => {
	const pathname = usePathname();
	const { logout } = useAuth();
	function handleLogout() {
		logout();
	}

	const isActive = (path: string): boolean => pathname === path;

	return (
		<nav className={` flex flex-col items-center md:items-start w-full`}>
			<ul className="flex-1 px-4 space-y-4">
				<li>
					<Link
						href="/employer-dashboard"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/employer-dashboard") ? "bg-gray-50" : ""
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
						href="/employer-dashboard/list-a-job"
						className={`flex gap-1 transition-all 0.3s text-[1rem] py-3 pl-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/") ? "bg-gray-50" : ""
						}`}
					>
						<HiPencilSquare className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
						<p className="hidden md:flex">List a Job</p>
						<p className=" md:hidden" title="Jobs">
							{" "}
							S
						</p>
					</Link>
				</li>
				<li>
					<Link
						href="/employer-dashboard/settings"
						className={`flex gap-2 transition-all 0.3s text-lg py-3 px-[2.4rem] hover:bg-gray-50 rounded-l ${
							isActive("/employer-dashboard/settings") ? "bg-gray-50" : ""
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
