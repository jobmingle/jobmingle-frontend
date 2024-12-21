import Image from "next/image";
import defaultProfilePic from "@/public/image/default-user.jpg";
import Jmlogo from "@/public/logo.png";

import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { useEffect } from "react";
import { getGreeting } from "@/lib/helpers";
import Link from "next/link";
import { useGetAuthUserQuery } from "@/app/_features/appSlices/apiSlice";
import { setUser, user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/hooks";
import { UserTypes } from "@/app/_hooks/Helpers";
import Logo from "./Logo";

function Header() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const user = useAppSelector(userData);

	let url;
	if (user) {
		if (user.goals === "List a course") url = "/vendor-dashboard/settings";

		if (user.goals === "Post a job") url = "/employer-dashboard/settings";

		if (user.goals === "Apply for a job / Take a course")
			url = "/dashboard/settings";
	}

	const time = new Date().getHours();
	const greeting = getGreeting(time);

	// if (isLoading && !isAuthenticated) return <Loader />;

	return (
		<div className=" flex flex-row py-1- items-center  justify-between py-[0.6rem] px-[1rem] md:py-[1.2rem] md:px-[4rem] border-b border-gray-800  ">
			<div className="flex lg:hidden">
				<Link href={"/"}>
					<Logo path={Jmlogo} width={55} height={55} />
				</Link>
			</div>

			<div className="border-l-4 border-b-2  rounded-lg p-1 border-yellow-600 max-md:translate-x-6 ">
				<p className="flex gap-1 text-[12px] font-semibold md:text-base sora ">
					Good {greeting},
					<span className="hidden md:flex">
						{user ? user?.firstName + "!" : ""}
					</span>
				</p>
				<h1 className=" md:hidden text-[18px] md:text-xl font-bold translate-x-5 md:translate-x-3 ">
					{user ? user?.firstName + "!" : ""}
				</h1>
				<p className="hidden md:flex text-[12px] font-semibold md:text-base sora ">
					Welcome back!
				</p>
			</div>

			<div className="flex justify-center border-2 border-yellow-600 items-center w-16 h-16 rounded-full overflow-hidden">
				<div className="w-14 h-14 rounded-full overflow-hidden">
					<Image
						src={
							user?.image
								? `https://rosybrown-spider-442940.hostingersite.com/${user?.image}`
								: defaultProfilePic
						}
						alt="User profile pic"
						width={300}
						height={300}
						className="w-full h-full object-fill object-center "
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
