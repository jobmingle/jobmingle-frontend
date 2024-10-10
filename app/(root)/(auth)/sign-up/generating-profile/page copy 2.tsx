// "use client";
// import Image from "next/image";
// import React, { FormEvent, useState } from "react";
// import jobmingle from "@/public/jobmingle.png";
// import { useRouter } from "next/navigation";
// import SuccessModal from "@/Components/SuccessModal";
// import Interests from "@/Components/ProfileTabs/Interests";
// import Usage from "@/Components/ProfileTabs/Usage";
// import ProfilePic from "@/Components/ProfileTabs/ProfilePic";
// import Button from "@/app/_components/ui/Button";
// import { useMultistepForm } from "@/app/_hooks/useMultistepForm";
// //
// type FormData = {
// 	usage: string[];
// 	interests: string[];
// };

// const INITIAL_DATA: FormData = {
// 	usage: [],
// 	interests: [],
// };

// function Page() {
// 	const router = useRouter();
// 	const [data, setData] = useState(INITIAL_DATA);
// 	console.log(data);

// 	const { step, steps, currentIndex, isLastStep, handleNext, handlePrev } =
// 		useMultistepForm([
// 			<Interests key="interests" {...data} updateFields={updateFields} />,
// 			<Usage key="usage" {...data} updateFields={updateFields} />,
// 			<ProfilePic key="profile" {...data} updateFields={updateFields} />,
// 		]);
// 	const [ModalActive, setModalActive] = useState(false);
// 	const [ModalActive2, setModalActive2] = useState(false);

// 	// const tabs = [
// 	// 	<Interests key="interests" />,
// 	// 	<Usage key="usage" />,
// 	// 	<ProfilePic key="profile" />,
// 	// ];

// 	const tabZero = currentIndex === 0;

// 	function updateFields(fields: Partial<FormData>) {
// 		setData((prev) => {
// 			return { ...prev, ...fields };
// 		});
// 	}

// 	function onSubmit(e: FormEvent) {
// 		e.preventDefault();
// 		if (!isLastStep) return handleNext();
// 		router.push("/student-dashboard");
// 		// setModalActive2(true);
// 	}
// 	// const handleback = () => {
// 	//    router.back();
// 	// };

// 	return (
// 		<main
// 			className={`text-black min-h-[110vh] h-auto lg:min-h-[120vh] overflow-x-hidden ${
// 				ModalActive2 ? "overflow-y-hidden max-h-[100vh] h-[100vh]" : null
// 			}`}
// 		>
// 			{ModalActive ? (
// 				<SuccessModal
// 					extrastyling={"h-[110vh] sm:h-auto"}
// 					Act={"Email Verified"}
// 					linkto={"/sign-up/generating-profile"}
// 					whereto={"Click Here To Continue The Sign Up Process"}
// 				/>
// 			) : null}
// 			{ModalActive2 ? (
// 				<SuccessModal
// 					extrastyling={" min-h-[123vh] sm:min-h-[110vh] lg:min-h-[120vh] "}
// 					Act={"Account Created Successfully"}
// 					linkto={"/dashboard"}
// 					whereto={"Click Here To Continue"}
// 				/>
// 			) : null}

// 			<div className=" m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden bg-slate-100 border-2 border-stone-900 relative p-6">
// 				<form onSubmit={onSubmit}>
// 					<div className=" w-full h-3 py-5 rounded-full max-w-[95%] sm:max-w-[70%] md:max-w-[90%] lg:max-w-[70%] flex justify-start items-center">
// 						<div
// 							className={`bg-[#F6CC16] ${
// 								currentIndex === 0 ? "w-[33.3%]" : null
// 							} min-h-3 m-0 rounded-full  ${
// 								currentIndex === 1 ? "w-[66.6%]" : null
// 							}  ${currentIndex === 2 ? "w-[100%]" : null}`}
// 						></div>
// 					</div>

// 					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-3 sm:mt-1 w-full px-4">
// 						Generating Profile
// 					</h2>
// 					<div className="absolute top-1 right-1">
// 						{currentIndex + 1}/ {steps.length}
// 					</div>
// 					<div>{step}</div>

// 					{/*  */}
// 					<main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center">
// 						{/* {tabs[currentIndex]} */}

// 						<div className="flex w-full justify-between">
// 							{currentIndex > 0 && (
// 								<Button type="profile" onClick={handlePrev}>
// 									Back
// 								</Button>
// 							)}
// 							<Button flexible={tabZero} type="profile">
// 								{isLastStep ? "Finish" : "Next"}
// 							</Button>
// 						</div>
// 					</main>
// 				</form>
// 			</div>
// 		</main>
// 	);
// }

// export default Page;
