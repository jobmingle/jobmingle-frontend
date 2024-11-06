import styled from "styled-components";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import userProfilePic from "@/public/image/profile-image.png";
import defaultProfilePic from "@/public/image/default-user.jpg";
import Image from "next/image";

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4rem;
	/* border-bottom: 1px solid var(--color-grey-100); */
	border-bottom: 1px solid var(--color-brand-500);
	@media (max-width: 568px) {
		padding: 0.6rem 2.4rem;
	}
`;

function Header() {
	const { user, isLoading } = useAuth();

	let MyJobs = 1;
	const time = new Date().getHours();
	const timeOfTheDay = time >= 12 ? "Evening" : "Morning";
	return (
		<StyledHeader>
			<div className=" flex flex-row py-1 items-center justify-between">
				<div className="text-sm md:text-xl ">
					<h1 className="font-bold">
						Good {timeOfTheDay}, {user?.firstName || "Champ"}!
					</h1>
					<p>Welcome back!</p>
				</div>

				<div className="flex justify-center border-2 border-yellow-600 items-center w-16 h-16 rounded-full overflow-hidden">
					<div className="w-14 h-14 rounded-full overflow-hidden">
						<Image
							src={
								`https:www.rosybrown-spider-442940.hostingersite.com/storage/${user?.image}` ||
								defaultProfilePic
							}
							alt="User profile pic"
							width={300}
							height={300}
							className="w-full h-full object-fill object-center "
						/>
					</div>
				</div>
			</div>
		</StyledHeader>
	);
}

export default Header;
