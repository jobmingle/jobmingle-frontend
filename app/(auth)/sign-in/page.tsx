import Image from "next/image";
import React from "react";
import jobmingle from "@/public/jobmingle.png";
import Googleicon from "@/public/Googleicon.png";
import Link from "next/link";
import LoginForm from "@/app/_components/ui/LoginForm";
import Logo from "@/app/_components/ui/Logo";
import logo from "@/public/logo.png";

function Page() {
	return (
		<main className="text-black min-h-screen h-auto overflow-x-hidden max-lg:border max-lg:rounded-lg max-lg:mx-2 max-lg:my-5 mt-5">
			<div className="h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
				<div className=" relative max-lg:hidden   w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg hidden">
					<Image
						src={jobmingle}
						alt="logo"
						className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8"
					/>
				</div>
				<div className=" w-full lg:w-[50%]  py-4 sm:py-12   bg-[#FEFEFE] sm:h-[100%] border flex  flex-col items-center ">
					<Logo path={logo} />
					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full p-5">
						Welcome Back To Jobmingle
					</h2>
					<p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">
						Please log in to your account to access feautures
					</p>
					<div className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-4 p-2 pb-8 flex flex-col">
						<button className="border-black-100 border-solid montserrat border-[1px] w-full h-[3rem] sm:h-[3rem] rounded-[10px] flex justify-center items-center gap-1 bg-transparent">
							<Image src={Googleicon} alt="google icon" className="w-4 h-4" />
							<p className="text-xs font-bold">Login With Google</p>
						</button>
						<div className="border-black-100/50 border-solid montserrat border-b-[1px] h-[1rem] text-center mt-2 leading-3 pt-2 mx-12">
							<span className="text-[75%] text-center px-3 py-0.5 text-black-100 bg-[#FEFEFE]">
								Or enter details below
							</span>
						</div>
						<LoginForm />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Page;
