"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

// import Button from "./Button";
import Button from "@/app/_components/atoms/Button";

import Error from "./Error";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Spinner from "@/app/_components/ui/Spinner";

interface FormData {
	firstName: string;
	lastName: string;
	phoneNumber: number;
}

export default function UpdateUserInfo() {
	const { register, handleSubmit, watch, formState, reset } =
		useForm<FormData>();
	const { errors } = formState;
	const { error, clearErrors, updateUserInfo, isLoading, user } = useAuth();

	useEffect(() => {
		if (error === "Network Error") {
			toast.error(error);
			clearErrors();
		}

		// eslint-disable-next-line
	}, [error]);

	function onSubmit(data: FormData) {
		// console.log(data);
		updateUserInfo(user?.id, data);
	}

	function onError(errors: any) {
		console.error(errors);
	}

	const style =
		"border-[#e5bb0a] border-[1px] border-solid h-[2rem] w-full text-xs rounded-sm sora pl-2 bg-transparent text-white focus:outline-none";

	return (
		<div>
			<form
				className="flex flex-col gap-4 w-[80%] text-white md:w-auto"
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<div>
					<label className="text-sm montserrat tracking-wider font-medium">
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						className={style}
						defaultValue={user?.firstName}
						placeholder="first name"
						{...register("firstName", {
							required: false,
						})}
					/>
					{errors?.firstName?.message && (
						<Error>{errors.firstName.message}</Error>
					)}
				</div>
				<div>
					<label className="text-sm montserrat  tracking-wider font-medium">
						Last Name
					</label>
					<input
						type="text"
						id="lastName"
						className={style}
						defaultValue={user?.lastName}
						placeholder="last name"
						{...register("lastName", {
							required: false,
						})}
					/>
					{errors?.lastName?.message && (
						<Error>{errors.lastName.message}</Error>
					)}
				</div>
				<div>
					<label className="text-sm montserrat  tracking-wider font-medium">
						Phone
					</label>
					<input
						type="text"
						id="phoneNumber"
						className={style}
						defaultValue={user?.phoneNumber}
						placeholder="phoneNumber"
						{...register("phoneNumber", {
							required: false,
						})}
					/>
					{errors?.phoneNumber?.message && (
						<Error>{errors.phoneNumber.message}</Error>
					)}
				</div>
				<Button className="">
					<span>{isLoading ? <Spinner /> : "Save"}</span>
				</Button>
			</form>
			{/* <Button
				type="login"
				disabled={isLoading}
				// onClick={(e) => handleSubmit(e)}
			>
				Update Password
				<span>{isLoading && <Spinner />}</span>
			</Button> */}
		</div>
	);
}
