"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "./Button";
import Error from "./Error";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Spinner from "@/app/_components/ui/Spinner";

interface FormData {
	email: string;
	password: string;
}

export default function LoginForm() {
	const { register, handleSubmit, formState } = useForm<FormData>();
	const router = useRouter();
	const { errors } = formState;
	const { login, token, error, isAuthenticated, clearErrors, isLoading } =
		useAuth();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/sign-in");
		}

		if (error === "Bad credentials") {
			toast.error(error);
			clearErrors();
		}
		if (error === "The provided credentials are incorrect.") {
			toast.error(
				`${error} Please input correct details or reset your password!`
			);
			clearErrors();
		}

		if (error === "Network Error") {
			toast.error(error);
			clearErrors();
		}
	}, [error, isAuthenticated]);

	function onSubmit(data: FormData): void {
		login(data);
		toast.success("Form submitted successfully.");
	}

	function onError(errors: any) {
		console.log(errors);
	}

	return (
		<div>
			<form className=" w-full mt-4" onSubmit={handleSubmit(onSubmit, onError)}>
				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						Email
					</label>
					<input
						type="text"
						id="email"
						className="input"
						placeholder="Enter Your Email Here"
						{...register("email", {
							required: "This field is required!",
						})}
					/>
					{errors?.email?.message && <Error>{errors.email.message}</Error>}
				</div>

				<div>
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						Password
					</label>
					<input
						type="password"
						id="password"
						className="input"
						placeholder="Your Password"
						{...register("password", {
							required: "This field is required!",
							minLength: {
								value: 6,
								message: "Password should be a minimum of six characters",
							},
						})}
					/>
					{errors?.email?.message && <Error>{errors.email.message}</Error>}
				</div>
				<div className=" mt-4 flex flex-row justify-between">
					<div className="flex flex-row gap-1">
						<input type="checkbox" id="" />
						<p className=" montserrat text-xs font-medium">Remember me</p>
					</div>
					<Link
						href={"/sign-in/forgot-password"}
						className="text-xs text-[#F6CC16] montserrat font-medium"
					>
						Forgot Password?
					</Link>
				</div>

				<Button
					type="login"
					// onClick={(e) => handleSubmit(e)}
				>
					Login<span>{isLoading && <Spinner />} </span>
				</Button>
			</form>
			<p className="text-sm montserrat  font-medium float-right mt-5 mb-3 text-black-100/80 ">
				Don&#39;t have an Account?{" "}
				<Link href="/sign-up" className="text-[#F6CC16]">
					Sign up now!
				</Link>
			</p>
		</div>
	);
}
