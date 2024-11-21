"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useAuth } from "@/app/_contexts/auth/AuthState";
import arrowback from "@/public/image/arrowback.png";
import jobmingle from "@/public/image/jobmingle.png";
import Button from "@/app/_components/ui/Button";
import Error from "@/app/_components/ui/Error";
import Spinner from "@/app/_components/ui/Spinner";

interface FormData {
	email: string;
}

function Page() {
	const router = useRouter();

	const { register, handleSubmit, formState } = useForm<FormData>();
	const { errors } = formState;
	const { forgotPassword, error, clearErrors, isLoading } = useAuth();

	useEffect(() => {
		if (error === "Network Error") {
			toast.error(error);
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error]);

	function onSubmit(data: FormData) {
		forgotPassword(data);
	}

	function onError(errors: any) {
		console.error(errors);
	}
	const handleback = () => {
		router.back();
	};

	return (
		<main className="text-black min-h-screen h-auto overflow-x-hidden ">
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
				<div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg ">
					<Image
						src={jobmingle}
						alt="logo"
						className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8"
					/>
				</div>
				<div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[100vh] relative flex sm:justify-center flex-col items-center ">
					<div
						onClick={handleback}
						className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2  "
					>
						<Image src={arrowback} alt="arrowback" className="" />
					</div>
					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">
						Forgot Password
					</h2>
					<p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">
						Please enter your email. A One Time Password (OTP) <br />
						will be sent to you to confirm your email.
					</p>

					{/* FORM */}
					<section className="relative min-w-[95%] sm:min-w-[60%] md:min-w-[90%] lg:min-w-[60%] mt-7 sm:mt-4 p-2 pb-8 flex flex-col mx-4 sm:mx-8">
						<form
							className=" w-full mt-4"
							onSubmit={handleSubmit(onSubmit, onError)}
						>
							<div>
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Email
								</label>
								<input
									type="text"
									id="email"
									className="input"
									placeholder="Enter your email"
									{...register("email", {
										required: "This field is required!",
									})}
								/>
								{errors?.email?.message && (
									<Error>{errors.email.message}</Error>
								)}
							</div>

							<Button type="login">
								Reset Password
								<span>{isLoading && <Spinner />} </span>
							</Button>

							<Link
								href={"/sign-in"}
								className="text-sm montserrat  font-medium float-right mt-4 text-black-100/80"
							>
								Remember Password ?{" "}
								<span className="text-[#F6CC16]">Login!</span>
							</Link>
						</form>
					</section>
				</div>
			</div>
		</main>
	);
}

export default Page;
