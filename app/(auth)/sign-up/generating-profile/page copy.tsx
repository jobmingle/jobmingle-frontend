"use client";
import Image from "next/image";
import React, { useState } from "react";
import jobmingle from "@/public/jobmingle.png";
import { useRouter } from "next/navigation";
import SuccessModal from "@/Components/SuccessModal";
import Interests from "@/Components/ProfileTabs/Interests";
import Usage from "@/Components/ProfileTabs/Usage";
import ProfilePic from "@/Components/ProfileTabs/ProfilePic";
import Button from "@/app/_components/ui/Button";
//

function Page() {
	const router = useRouter();
	const [ModalActive, setModalActive] = useState(false);
	const [ModalActive2, setModalActive2] = useState(false);
	const [currentTab, setCurrentTab] = useState(0);
	const tabs = [
		<Interests key="interests" />,
		<Usage key="usage" />,
		<ProfilePic key="profile" />,
	];

	const tabZero = currentTab === 0;

	const handleNext = () => {
		if (currentTab < 2) setCurrentTab(currentTab + 1);
	};
	const handlePrev = () => {
		if (currentTab > 0) setCurrentTab(currentTab - 1);
	};

	const handlefinish = (e: any) => {
		e.preventDefault();
		setModalActive2(true);
	};
	// const handleback = () => {
	//    router.back();
	// };

	return (
		<main
			className={`text-black min-h-[110vh] h-auto lg:min-h-[120vh] overflow-x-hidden ${
				ModalActive2 ? "overflow-y-hidden max-h-[100vh] h-[100vh]" : null
			}`}
		>
			{ModalActive ? (
				<SuccessModal
					extrastyling={"h-[110vh] sm:h-auto"}
					Act={"Email Verified"}
					linkto={"/sign-up/generating-profile"}
					whereto={"Click Here To Continue The Sign Up Process"}
				/>
			) : null}
			{ModalActive2 ? (
				<SuccessModal
					extrastyling={" min-h-[123vh] sm:min-h-[110vh] lg:min-h-[120vh] "}
					Act={"Account Created Successfully"}
					linkto={"/dashboard"}
					whereto={"Click Here To Continue"}
				/>
			) : null}
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
				<div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[110vh] bg2 lg:min-h-[120vh] ">
					<Image
						src={jobmingle}
						alt="logo"
						className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8"
					/>
				</div>
				<div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[110vh] flex sm:justify-center relative flex-col items-center pb-6 sm:pb-3 lg:min-h-[120vh] ">
					{/* <div className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2 " onClick={handleback}>
                  <Image src={arrowback} alt="arrowback" className="" />
               </div> */}
					<div className=" w-full h-3 py-5 rounded-full max-w-[95%] sm:max-w-[70%] md:max-w-[90%] lg:max-w-[70%] flex justify-start items-center">
						<div
							className={`bg-[#F6CC16] ${
								currentTab === 0 ? "w-[33.3%]" : null
							} min-h-3 m-0 rounded-full  ${
								currentTab === 1 ? "w-[66.6%]" : null
							}  ${currentTab === 2 ? "w-[100%]" : null}`}
						></div>
					</div>

					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-3 sm:mt-1 w-full px-4">
						Generating Profile
					</h2>

					{/*  */}
					<main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center">
						{tabs[currentTab]}
						{currentTab < 2 ? (
							<div className="flex w-full justify-between">
								{currentTab > 0 && (
									<Button type="profile" onClick={handlePrev}>
										Prev
									</Button>
								)}
								<Button flexible={tabZero} type="profile" onClick={handleNext}>
									Next
								</Button>
							</div>
						) : (
							<button
								type="submit"
								onClick={handlefinish}
								className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[2rem] bg-[#F6CC16] text-center"
							>
								Finish
							</button>
						)}
					</main>
				</div>
			</div>
		</main>
	);
}

export default Page;
