"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "./Button";
import Error from "./Error";

import Spinner from "@/app/_components/ui/Spinner";
import {
	useSubmitMessageMutation,
	useSubscribeNewsletterMutation,
} from "@/app/_features/appSlices/apiSlice";

interface FormData {
	email: string;
}

export default function Newsletter() {
	const { register, handleSubmit, formState, reset } = useForm<FormData>();
	const { errors } = formState;

	const [subscribe, { isLoading: isSubscribing, error }] =
		useSubscribeNewsletterMutation();

	async function handleSubscribe(data: FormData) {
		try {
			const res: any = await subscribe(data);
			toast.success(res?.data?.message);
			reset();
		} catch (err: any) {
			toast.error(
				err?.data?.message || "An error occured while performing request!"
			);
			console.error(err);
		}
	}

	function onError(errors: any) {
		console.error(errors);
	}

	return (
		<div>
			<form
				className=" w-[80%] mt-4 mx-auto"
				onSubmit={handleSubmit(handleSubscribe, onError)}
			>
				<div className="flex flex-col lg:flex-row gap-1 justify-center items-center lg:gap-4 mb-5">
					<div className="w-full md:w-[65%] ">
						<input
							type="text"
							id="email"
							className="input h-[3.5rem] outline-1"
							placeholder="Enter your email"
							{...register("email", {
								required: false,
							})}
						/>
						{errors?.email?.message && <Error>{errors.email.message}</Error>}
					</div>

					<button
						className="flex  items-center justify-center tracking-wider border rounded px-5 py-4 h-[3.5rem] w-[50%] md:w-[20%] shadow shadow-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white transition-colors duration-700 "
						disabled={isSubscribing}
						// onClick={(e) => handleSubmit(e)}
					>
						<span>{isSubscribing ? <Spinner /> : "Subscribe Now"}</span>
					</button>
				</div>
			</form>
		</div>
	);
}
