"use client";
import React, { useEffect, useState } from "react";
import hamburger from "../../../public/hamburgericon.svg";
import close from "../../../public/closeicon.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//
const Sidenav = () => {
	const [Navactive, setNavactive] = useState(false);
	const pathname = usePathname();
	// const Links = [
	//    {
	//       id: 1,
	//       Name: "Dashboard",
	//       to: "/admindashboard",
	//    },
	//    {
	//       id: 2,
	//       Name: "Courses",
	//       to: "/admindashboard/courses",
	//    },
	//    {
	//       id: 3,
	//       Name: "Jobs",
	//       to: "/admindashboard/jobs",
	//    },
	// ];

	const handlelinkclick = () => {
		if (Navactive === true) {
			setNavactive(false);
		}
	};

	return (
		<div className="fixed  sm:top-40 sm:left-[11rem] left-0 right-0">
			<button
				className=" rounded-full mb-1 flex justify-center items-center p-2 shadow-xl"
				onClick={() => setNavactive(!Navactive)}
			>
				<Image
					src={Navactive ? close : hamburger}
					alt="icpn"
					className="w-[2rem] h-[2rem]"
				/>
			</button>
			{Navactive && (
				<main className="bg-[#F5F5F1] shadow-2xl py-1 w-[8rem] min-h-[8rem] rounded-md flex flex-col items-center justify-center space-y-3 text-left px-2 sora">
					<div className="py-1 w-full tracking-wider">
						<Link
							href="/admin-dashboard"
							className={`text-black ${
								pathname === "/admin-dashboard"
									? "text-yellow-400 font-semibold"
									: ""
							}`}
							onClick={handlelinkclick}
						>
							{" "}
							Dashboard{" "}
						</Link>
					</div>
					<div className="py-1 w-full tracking-wider">
						<Link
							href="/admin-dashboard/courses"
							className={`text-black ${
								pathname === "/admin-dashboard/courses"
									? "text-yellow-400 font-semibold"
									: ""
							}`}
							onClick={handlelinkclick}
						>
							Courses{" "}
						</Link>
					</div>
					<div className="py-1 w-full tracking-wider">
						<Link
							href="/admin-dashboard/jobs"
							className={`text-black ${
								pathname === "/admin-dashboard/jobs"
									? "text-yellow-400 font-semibold"
									: ""
							}`}
							onClick={handlelinkclick}
						>
							{" "}
							Jobs{" "}
						</Link>
					</div>
					<ul className=" w-full text-red-600 tracking-wider text-bold text-lg">
						Logout
					</ul>
				</main>
			)}
		</div>
	);
};

export default Sidenav;
