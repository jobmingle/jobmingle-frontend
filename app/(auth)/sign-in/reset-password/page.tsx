"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import jobmingle from "@/public/jobmingle.png";
import arrowback from "@/public/arrowback.png";
import SuccessModal from "@/Components/SuccessModal";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Loader from "@/app/_components/ui/Loader";
import Button from "@/app/_components/ui/Button";
import Error from "@/app/_components/ui/Error";
import Spinner from "@/app/_components/ui/Spinner";

interface FormData {
	email: string;
	pin: string;
	password: string;
	password_confirmation: string;
}

//
function Page() {
	const [ResetSuccessful, setResetSuccessful] = useState(false);
	const router = useRouter();
	const { register, handleSubmit, watch, formState } = useForm<FormData>();
	const { errors } = formState;
	const { resetPassword, error, clearErrors, isLoading, resetOk } = useAuth();

	useEffect(() => {
		if (resetOk) {
			router.push("/sign-in");
		}

		if (error === "Network Error") {
			toast.error(error);
			clearErrors();
		}

		// setResetSuccessful(true);
		// eslint-disable-next-line
	}, [error]);

	function onSubmit(data: FormData) {
		console.log(data);
		resetPassword(data);
		toast.success("Wow!.... Form submitted successfully.");
	}

	const password = watch("password", "");

	function onError(errors: any) {
		console.log(errors);
	}

	const handleback = () => {
		Router.back();
	};

	return (
		<main className="text-black min-h-screen h-auto relative overflow-x-hidden">
			{ResetSuccessful ? (
				<SuccessModal
					extrastyling={"h-screen"}
					whereto={" Click here to go back to login"}
					Act={"Your password has been changed successfully!"}
					linkto={"/sign-in"}
				/>
			) : null}{" "}
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center relative overflow-x-hidden">
				<div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:min-h-screen bg ">
					<Image
						src={jobmingle}
						alt="logo"
						className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8"
					/>
				</div>
				<div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE]  flex sm:justify-center flex-col items-center ">
					<div
						className="w-full flex pl-4 items-center py-4 flex-row"
						onClick={handleback}
					>
						<Image src={arrowback} alt="arrowback" className="  sm:hidden" />
					</div>
					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">
						Create new Password
					</h2>
					<p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">
						please log in to your account to access feautures
					</p>

					{/* FORM */}
					<main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-4 p-2 pb-8 flex flex-col">
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
							<div>
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Pin
								</label>
								<input
									type="text"
									id="pin"
									className="input"
									placeholder="Enter your pin"
									{...register("pin", {
										required: "This field is required!",
									})}
								/>
								{errors?.pin?.message && <Error>{errors.pin.message}</Error>}
							</div>
							<div>
								<label className="text-sm py-1 montserrat tracking-wider font-medium ">
									Password
								</label>
								<input
									type="password"
									id="password"
									className="input"
									placeholder="Your password"
									{...register("password", {
										required: "This field is required!",
										pattern: {
											value:
												/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
											message:
												"Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
										},
									})}
								/>
								{errors?.password?.message && (
									<Error>{errors.password.message}</Error>
								)}
							</div>

							<div>
								<label className="text-sm py-1 montserrat tracking-wider font-medium ">
									Confirm Password
								</label>
								<input
									type="password"
									id="password_confirmation"
									className="input"
									placeholder="Confirm password"
									{...register("password_confirmation", {
										required: "This field is required!",
										validate: (value) =>
											value === password || "Password do not match!",
										minLength: {
											value: 6,
											message: "Password should be a minimum of six characters",
										},
									})}
								/>
								{errors?.password_confirmation?.message && (
									<Error>{errors.password_confirmation.message}</Error>
								)}
							</div>

							<Button type="login">
								Update Password <span>{isLoading && <Spinner />} </span>
							</Button>
						</form>
					</main>
				</div>
			</div>
		</main>
	);
}

export default Page;
