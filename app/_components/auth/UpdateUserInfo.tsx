"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

// import Button from "./Button";
import Button from "@/app/_components/atoms/Button";

import Error from "../ui/Error";

import Spinner from "@/app/_components/ui/Spinner";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import {
	useGetAuthUserQuery,
	useUpdateUserInfoMutation,
} from "@/app/_features/appSlices/apiSlice";

interface FormData {
	firstName: string;
	lastName: string;
	phoneNumber: number;
}

export default function UpdateUserInfo() {
	const { register, handleSubmit, watch, formState, reset } =
		useForm<FormData>();
	const { errors } = formState;
	const user = useAppSelector(userData);
	// const { data: user, refetch: refetchUser } = useGetAuthUserQuery();

	const [updateUserInfo, { isLoading: isUpdatingInfo, error }] =
		useUpdateUserInfoMutation();

	async function handleUserInfoUpdate(data: FormData) {
		const userId = user?.id;
		try {
			const res: any = await updateUserInfo({ userId, data }).unwrap();
			toast.success(res?.message);
			// router.push("/employer-dashboard/jobs");
			reset();
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	}

	// useEffect(() => {
	// 	if (error === "Network Error") {
	// 		toast.error(error);
	// 		clearErrors();
	// 	}

	// 	if (
	// 		error ===
	// 		"The phone number field must not be greater than 15 characters. (and 1 more error)"
	// 	) {
	// 		toast.error(`Invalid number format: Please enter a valid phone number!`);
	// 		clearErrors();
	// 	}

	// 	// eslint-disable-next-line
	// }, [error]);
	function onError(errors: any) {
		console.error(errors);
	}

	const style =
		"border-[#e5bb0a] border-[1px] border-solid h-[2rem] w-full text-xs rounded-sm sora pl-2 bg-transparent text-white focus:outline-none";

	return (
		<div>
			<form
				className="flex flex-col gap-2 w-[80%] text-white md:w-auto"
				onSubmit={handleSubmit(handleUserInfoUpdate, onError)}
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
				<Button className="" disabled={isUpdatingInfo}>
					<span>{isUpdatingInfo ? <Spinner /> : "Save"}</span>
				</Button>
			</form>
			{/* <Button
				type="login"
				disabled={isUpdatingInfo}
				// onClick={(e) => handleSubmit(e)}
			>
				Update Password
				<span>{isUpdatingInfo && <Spinner />}</span>
			</Button> */}
		</div>
	);
}
