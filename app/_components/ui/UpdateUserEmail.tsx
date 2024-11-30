"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

import Button from "./Button";
import Error from "./Error";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Spinner from "@/app/_components/ui/Spinner";
import ViewPassword from "./VIewPassword";

interface FormData {
	password: string;
	new_email: string;
}

export default function UpdateUserEmail() {
	const [Open, setOpen] = useState(false);

	const { register, handleSubmit, watch, formState, reset } =
		useForm<FormData>();
	const { errors } = formState;
	const { error, clearErrors, updateUserEmail, isLoading, user } = useAuth();

	useEffect(() => {
		if (error === "Network Error") {
			toast.error(error);
			clearErrors();
		}

		// eslint-disable-next-line
	}, [error]);

	function onSubmit(data: FormData) {
		// console.log(data);
		updateUserEmail(user?.id, data);
		reset();
	}

	function onError(errors: any) {
		console.error(errors);
	}

	return (
		<div className="w-full lg:w-[55%] ">
			<section className=" w-full- lg:max-w-[30rem] px-2 sm:px-20 md:px-0">
				<h2 className="font-bold text-xl montserrat text-center capitalize tracking-wide py-2">
					Change Email
				</h2>
			</section>
			<form
				className=" md:w-[50%]-  mt-4"
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<div className="relative">
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						Password
					</label>
					<input
						type={Open ? "text" : "password"}
						id="password"
						className="input w-full"
						placeholder="Your password"
						{...register("password", {
							required: "This field is required!",
							pattern: {
								value: /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
								message:
									"Password must be at least 8 characters long and contain at least one number",
							},
						})}
					/>
					<ViewPassword
						Open={Open}
						setOpen={setOpen}
						styles={"right-2 top-6"}
					/>
					{errors?.password?.message && (
						<Error>{errors.password.message}</Error>
					)}
				</div>
				<div>
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						New Email
					</label>
					<input
						type="text"
						id="new_email"
						className="input w-full"
						defaultValue={user?.email}
						placeholder="Your new_email"
						{...register("new_email", {
							required: false,
						})}
					/>
					{errors?.new_email?.message && (
						<Error>{errors.new_email.message}</Error>
					)}
				</div>

				<Button
					type="login"
					disabled={isLoading}
					// onClick={(e) => handleSubmit(e)}
				>
					Update Email
					<span>{isLoading && <Spinner />}</span>
				</Button>
			</form>
		</div>
	);
}
