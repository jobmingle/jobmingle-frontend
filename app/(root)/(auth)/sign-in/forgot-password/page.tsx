"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import arrowback from "@/public/image/arrowback.png";
import Button from "@/app/_components/ui/Button";
import Error from "@/app/_components/ui/Error";
import Spinner from "@/app/_components/ui/Spinner";
import CusSpinner from "@/app/_components/ui/CusSpinner";
import { useForgetPasswordMutation } from "@/app/_features/appSlices/apiSlice";

interface FormData {
	email: string;
}

function Page() {
	const router = useRouter();

	const { register, handleSubmit, formState } = useForm<FormData>();
	const { errors } = formState;

	const [forgotPassword, { isLoading: isRequesting, error }] =
		useForgetPasswordMutation();

	// useEffect(() => {
	// 	if (error === "Network Error") {
	// 		toast.error(error);
	// 		clearErrors();
	// 	}
	// 	// eslint-disable-next-line
	// }, [error]);

	async function handleForgotPassword(data: FormData) {
		sessionStorage.setItem("resetEmail", data?.email);
		try {
			const res: any = await forgotPassword(data).unwrap();
			toast.success(res?.message);
			router.push("/sign-in/reset-password");
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
			console.error(error?.error);
		}
	}

	function onError(errors: any) {
		console.error(errors);
	}
	const handleback = () => {
		router.back();
	};

	return (
		<main className="text-black min-h-screen h-auto relative overflow-x-hidden">
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center relative overflow-x-hidden  py-3">
				<div className=" w-[90%] md:w-[50%] py-5 rounded  bg-[#FEFEFE] border shadow shadow-yellow-600 h-full- relative flex sm:justify-center flex-col items-center mt-3   ">
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
							onSubmit={handleSubmit(handleForgotPassword, onError)}
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

							<Button type="login" disabled={isRequesting}>
								<span>{isRequesting ? <Spinner /> : "Forgot Password"} </span>
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
