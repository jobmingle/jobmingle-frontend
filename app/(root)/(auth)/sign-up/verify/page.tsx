"use client";
import Image from "next/image";
import React, { useState } from "react";
import jobmingle from "@/public/image/jobmingle.png";
import arrowback from "@/public/image/arrowback.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SuccessModal from "@/Components/SuccessModal";
//
function Page() {
	const router = useRouter();
	const [ModalActive, setModalActive] = useState(false);
	setTimeout(() => {
		setModalActive(true);
	}, 2000);

	return (
		<main className="text-black min-h-[100vh] h-auto overflow-x-hidden ">
			{ModalActive ? (
				<SuccessModal
					extrastyling={"h-[110vh] sm:h-auto"}
					Act={"Email Verified"}
					linkto={"/sign-up/generating-profile"}
					whereto={"Click Here To Continue The Sign Up Process"}
				/>
			) : null}
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
				<div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg2 ">
					<Image
						src={jobmingle}
						alt="logo"
						className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8"
					/>
				</div>
				<div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[100vh] flex sm:justify-center relative flex-col items-center pb-6 sm:pb-3">
					<div className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2 ">
						<Image src={arrowback} alt="arrowback" className="" />
					</div>
					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">
						Verify Your Email
					</h2>
					<p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">
						please check your email. A verification link <br />
						has been send to{" "}
						<span className="text-[#021C5F]">youremail@gmail.com</span>
						<br />
						<span className="text-[#021C5F] text-xs mt-3">
							check your spam folder if <br />
							you do not find it in your inbox.
						</span>
					</p>

					{/*  */}
					<main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-2 p-2 pb-8 sm:pb-2 flex flex-col justify-center items-center">
						<section className="w-14 h-14 rounded-full bg-[#d8d8d8] text-black-100 montserrat text-3xl font-bold text-center flex flex-col justify-center items-center">
							10
						</section>
					</main>

					<p className="text-sm montserrat font-semibold mt-7">
						Didn&#39;t get the link ?{" "}
						<span className="text-[#F6CC16] ">Resend link</span>
					</p>
				</div>
			</div>
		</main>
	);
}

export default Page;
