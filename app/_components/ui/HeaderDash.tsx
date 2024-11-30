import styled from "styled-components";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import userProfilePic from "@/public/image/profile-image.png";
import defaultProfilePic from "@/public/image/default-user.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { useEffect } from "react";
import { getGreeting } from "@/lib/helpers";
import Link from "next/link";

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4rem;
	/* border-bottom: 1px solid var(--color-grey-100); */
	border-bottom: 1px solid var(--color-grey-800);
	@media (max-width: 568px) {
		padding: 0.6rem 2.4rem;
	}
`;

function Header() {
	const { user, isLoading, isAuthenticated } = useAuth();

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
		<StyledHeader>
			<div className=" flex flex-row py-1- items-center justify-between">
				<div className="p- ">
					<div className="border-l-4 border-b-2  rounded-lg p-1 border-yellow-600  ">
						<h1 className="text-sm md:text-xl font-bold ">
							Good {greeting}, {user?.firstName || "Champ"}!
						</h1>
						<p className="text-sm font-semibold md:text-base sora ">
							Welcome back!
						</p>
					</div>
				</div>

				<div className="flex justify-center border-2 border-yellow-600 items-center w-16 h-16 rounded-full overflow-hidden">
					{/* <Link href={url ? url : "#"}> */}
					<div className="w-14 h-14 rounded-full overflow-hidden">
						<Image
							src={
								`https://rosybrown-spider-442940.hostingersite.com/${user?.image}` ||
								defaultProfilePic
							}
							alt="User profile pic"
							width={300}
							height={300}
							className="w-full h-full object-fill object-center "
						/>
					</div>
					{/* </Link> */}
					{/* {isAuthenticated ? (
						
					) : (
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<Image
								src={
									`https://rosybrown-spider-442940.hostingersite.com/${user?.image}` ||
									defaultProfilePic
								}
								alt="User profile pic"
								width={300}
								height={300}
								className="w-full h-full object-fill object-center "
							/>
						</div>
					)} */}
				</div>
			</div>
		</StyledHeader>
	);
}

export default Header;
