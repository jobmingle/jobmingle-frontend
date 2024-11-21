"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

import Button from "./Button";
import Error from "./Error";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Spinner from "@/app/_components/ui/Spinner";

interface FormData {
	old_password: string;
	password: string;
	password_confirmation: string;
}

export default function UpdatePassword() {
	const { register, handleSubmit, watch, formState, reset } =
		useForm<FormData>();
	const { errors } = formState;
	const { error, clearErrors, updatePassword, isLoading, user } = useAuth();

	useEffect(() => {
		if (error === "Network Error") {
			toast.error(error);
			clearErrors();
		}

		// eslint-disable-next-line
	}, [error]);

	function onSubmit(data: FormData) {
		// console.log(data);
		updatePassword(user?.id, data);
		reset();
	}

	const password = watch("password", "");

	function onError(errors: any) {
		console.error(errors);
	}

	return (
		<div className="w-full lg:w-[55%] ">
			<section className=" w-full- lg:max-w-[30rem] px-2 sm:px-20 md:px-0">
				<h2 className="font-bold text-xl montserrat text-center capitalize tracking-wide py-2">
					Create new password
				</h2>
			</section>
			<form
				className=" md:w-[50%]-  mt-4"
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<div>
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						Current Password
					</label>
					<input
						type="password"
						id="old_password"
						className="input w-full"
						placeholder="Your old_password"
						{...register("old_password", {
							required: "This field is required!",
							pattern: {
								value:
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
								message:
									"Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
							},
						})}
					/>
					{errors?.old_password?.message && (
						<Error>{errors.old_password.message}</Error>
					)}
				</div>
				<div>
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						New Password
					</label>
					<input
						type="password"
						id="password"
						className="input w-full"
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
						className="input w-full"
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

				<Button
					type="login"
					disabled={isLoading}
					// onClick={(e) => handleSubmit(e)}
				>
					Update Password
					<span>{isLoading && <Spinner />}</span>
				</Button>
			</form>
		</div>
	);
}
