"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "./Button";
import Error from "./Error";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Spinner from "@/app/_components/ui/Spinner";

interface FormData {
	firstName: string;
	lastName: string;
	phonenumber: number;
	email: string;
	password: string;
	password_confirmation: string;
}

export default function SignUpForm() {
	const router = useRouter();
	const [agreedToTerms, setAgreedToTerms] = useState(null);

	const { register, handleSubmit, watch, formState } = useForm<FormData>();
	const { errors } = formState;
	const {
		register: registerUser,
		error,
		clearErrors,
		isAuthenticated,
		isLoading,
	} = useAuth();

	useEffect(() => {
		// if (isAuthenticated) {
		// 	router.push("/sign-up/confirm-email");
		// }

		if (error === "User already exists with this email address.") {
			toast.error(error);
			clearErrors();
		}

		if (error === "Network Error") {
			toast.error(error);
			clearErrors();
		}
		{
			isLoading && <Spinner />;
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated]);

	function onSubmit(data: FormData) {
		console.log(data);
		console.log(error);

		registerUser(data);
		toast.success("Wow!.... Form was submitted successfully.");
	}

	const password = watch("password", "");

	function onError(errors: any) {
		console.log(errors);
	}

	function handdleAgreement(e: any) {
		setAgreedToTerms(e.target.checked);
	}

	return (
		<div>
			<form className=" w-full mt-4" onSubmit={handleSubmit(onSubmit, onError)}>
				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						className="input"
						placeholder="Enter your first name"
						{...register("firstName", {
							required: "This field is required!",
						})}
					/>
					{errors?.firstName?.message && (
						<Error>{errors.firstName.message}</Error>
					)}
				</div>
				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						Last Name
					</label>
					<input
						type="text"
						id="lastName"
						className="input"
						placeholder="Enter your last name"
						{...register("lastName", {
							required: "This field is required!",
						})}
					/>
					{errors?.lastName?.message && (
						<Error>{errors.lastName.message}</Error>
					)}
				</div>

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
					{errors?.email?.message && <Error>{errors.email.message}</Error>}
				</div>

				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						Phone Number
					</label>
					<input
						type="text"
						id="phonenumber"
						className="input"
						placeholder="Enter your phone number"
						{...register("phonenumber", {
							required: "This field is required!",
						})}
					/>
					{errors?.phonenumber?.message && (
						<Error>{errors.phonenumber.message}</Error>
					)}
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

				<div className=" mt-1 flex flex-row justify-between">
					<div className="flex flex-row gap-1">
						<input
							type="checkbox"
							name="agreement"
							id=""
							onChange={handdleAgreement}
						/>
						<label className=" montserrat text-xs font-medium">
							i have read and agreed to the{" "}
							<Link className="text-yellow-500" href="/terms">
								Terms and Conditions{" "}
							</Link>{" "}
							of Jobmingle.
						</label>
					</div>
				</div>

				<Button
					type="login"
					disabled={!agreedToTerms}
					// onClick={(e) => handleSubmit(e)}
				>
					Sign Up
					<span>{isLoading && <Spinner />}</span>
				</Button>
			</form>
			<p className="text-sm montserrat  font-medium float-right mt-4 text-black-100/80">
				Don&#39;t have an Account?{" "}
				<Link href="/sign-in" className="text-[#F6CC16]">
					Login
				</Link>
			</p>
		</div>
	);
}
