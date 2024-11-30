// "use client";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { usePathname, useRouter } from "next/navigation";
import Button from "../../_components/ui/Button";
import Link from "next/link";
import {
	HiArrowLeft,
	HiHome,
	HiMiniArrowLeftStartOnRectangle,
	HiMiniBriefcase,
	HiOutlineCog,
	HiPencilSquare,
} from "react-icons/hi2";
import Loader from "@/app/_components/ui/Loader";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";

const UserDashboard = () => {
	const pathname = usePathname();
	const { logout, isAuthenticated } = useAuth();
	const { resetListedItems } = useJobCourse();
	function handleLogout() {
		logout();
		resetListedItems();
	}

	const isActive = (path: string): boolean => pathname === path;

	// if (isAuthenticated === null) return <Loader />;

	return (
		<nav
			className={`flex flex-col justify-center w-full  py-3 px-0 max-lg:px-2 lg:pl-[2.5rem]  overflow-y-auto`}
		>
			<ul className=" flex flex-row lg:flex-col gap-[0.2rem] w-full  justify-between items-center lg:items-start overflow-y-auto h-full">
				<li className=" lg:w-full">
					<Link
						href="/employer-dashboard"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/employer-dashboard")
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
						href="/employer-dashboard/jobs"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/employer-dashboard/jobs")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiMiniBriefcase
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>
						<p className="hidden md:flex"> Jobs</p>
					</Link>
				</li>

				<li className="lg:w-full">
					<Link
						href="/employer-dashboard/list-job"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/employer-dashboard/list-job")
								? "text-yellow-500 md:bg-gray-50"
								: ""
						}`}
					>
						<HiPencilSquare
							className={`hover:text-yellow-500 text-stone-950- w-[1.8rem] h-[1.8rem] text-inherit`}
						/>
						<p className="hidden md:flex">List Job</p>
					</Link>
				</li>
				<li className="lg:w-full">
					<Link
						href="/employer-dashboard/settings"
						className={`flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:text-yellow-500 lg:hover:bg-gray-50 max-lg:rounded lg:rounded-l px-[1.2rem] md:px-4 ${
							isActive("/employer-dashboard/settings")
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
						className=" flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 md:hover:bg-gray-50 rounded px-[1.2rem] md:px-4"
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
