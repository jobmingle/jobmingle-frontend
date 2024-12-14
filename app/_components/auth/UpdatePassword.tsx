"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "../ui/Button";
import Error from "../ui/Error";

import Spinner from "@/app/_components/ui/Spinner";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import { useUpdatePasswordMutation } from "@/app/_features/appSlices/apiSlice";

interface FormData {
	old_password: string;
	password: string;
	password_confirmation: string;
}

export default function UpdatePassword() {
	const router = useRouter();
	const { register, handleSubmit, watch, formState, reset } =
		useForm<FormData>();
	const { errors } = formState;

	const [updatePassword, { isLoading: isUpdatingPassword, error }] =
		useUpdatePasswordMutation();

	const user = useAppSelector(userData);

	async function handlePasswordUpdate(data: FormData) {
		const userId = user?.id;
		try {
			const res: any = await updatePassword({ userId, data }).unwrap();
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

	const password = watch("password", "");

	function onError(errors: any) {
		console.error(errors);
	}

	return (
		<div className="w-full lg:w-[55%]  ">
			<section className=" w-full- lg:max-w-[30rem] p-1 border-l-4 border-t-2 border-yellow-600 rounded-lg  ">
				<h2 className="font-bold text-xl montserrat text-center capitalize tracking-wide p-2 shadow shadow-yellow-500 rounded">
					Create new password
				</h2>
			</section>
			<form
				className=" md:w-[50%]-  mt-3"
				onSubmit={handleSubmit(handlePasswordUpdate, onError)}
			>
				<div className="shadow shadow-gray-500 rounded p-2">
					<div className="p-5 border- shadow shadow-gray-500 rounded border-gray-900">
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
					</div>
				</div>

				<Button type="login" disabled={isUpdatingPassword}>
					<span>{isUpdatingPassword ? <Spinner /> : "Update Password"}</span>
				</Button>
			</form>
		</div>
	);
}
