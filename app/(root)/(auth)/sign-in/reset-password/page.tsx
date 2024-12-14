"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import arrowback from "@/public/image/arrowback.png";
import SuccessModal from "@/Components/SuccessModal";

import Loader from "@/app/_components/ui/Loader";
import Button from "@/app/_components/ui/Button";
import Error from "@/app/_components/ui/Error";
import Spinner from "@/app/_components/ui/Spinner";
import { useResetPasswordMutation } from "@/app/_features/appSlices/apiSlice";

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
	const resetEmail = sessionStorage.getItem("resetEmail")
		? sessionStorage.getItem("resetEmail")?.toString()
		: "";

	const { register, handleSubmit, watch, formState } = useForm<FormData>({
		defaultValues: {
			email: resetEmail,
			pin: "",
			password: "",
			password_confirmation: "",
		},
	});
	const { errors } = formState;

	const [resetPassword, { isLoading: isReseting, error }] =
		useResetPasswordMutation();

	// useEffect(() => {
	// 	if (error === "Network Error") {
	// 		toast.error(error);
	// 		clearErrors();
	// 	}
	// 	// eslint-disable-next-line
	// }, [error]);

	async function handleResetPassword(data: FormData) {
		try {
			const res: any = await resetPassword(data).unwrap();
			toast.success(res?.message);
			router.push("/sign-in");
			sessionStorage.removeItem("resetEmail");
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	}

	const password = watch("password", "");

	function onError(errors: any) {
		console.error(errors);
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
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center relative overflow-x-hidden  py-3">
				<div className=" w-[90%] md:w-[50%] h-auto bg-[#FEFEFE]  flex sm:justify-center flex-col items-center border rounded shadow shadow-yellow-600 ">
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
						Provide a new unique password to gain access into your account!
					</p>

					{/* FORM */}
					<main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-4 p-2 pb-8 flex flex-col">
						<form
							className=" w-full mt-4"
							onSubmit={handleSubmit(handleResetPassword, onError)}
						>
							<div className="hidden-">
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Email
								</label>
								<input
									type="text"
									id="email"
									className="input"
									// defaultValue={resetEmail}
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

							<Button type="login" disabled={isReseting}>
								<span>{isReseting ? <Spinner /> : "Reset Password"} </span>
							</Button>
						</form>
					</main>
				</div>
			</div>
		</main>
	);
}

export default Page;
