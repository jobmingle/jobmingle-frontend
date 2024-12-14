"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "./Button";
import Error from "./Error";

import Spinner from "@/app/_components/ui/Spinner";
import { SubmitContactForm } from "@/lib/helpers";
import { useSubmitMessageMutation } from "@/app/_features/appSlices/apiSlice";

interface FormData {
	name: string;
	email: string;
	subject: number;
	message: string;
}

export default function ContactForm() {
	const { register, handleSubmit, watch, formState, reset } =
		useForm<FormData>();
	const { errors } = formState;

	const [submitMessage, { isLoading: isSubmittingMessage, error }] =
		useSubmitMessageMutation();

	async function handleSubmitmessage(data: FormData) {
		try {
			const res: any = await submitMessage(data).unwrap();
			toast.success(res?.message);
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
				className=" w-full mt-4 "
				onSubmit={handleSubmit(handleSubmitmessage, onError)}
			>
				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						Name
					</label>
					<input
						type="text"
						id="name"
						className="input"
						placeholder="Enter your  name"
						{...register("name", {
							required: "This field is required!",
						})}
					/>
					{errors?.name?.message && <Error>{errors.name.message}</Error>}
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
						Subject
					</label>
					<input
						type="text"
						id="subject"
						className="input"
						placeholder="Enter your subject"
						{...register("subject", {
							required: false,
						})}
					/>
					{errors?.subject?.message && <Error>{errors.subject.message}</Error>}
				</div>

				<div>
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						Message
					</label>
					<textarea
						// type="message"
						id="message"
						className="input h-[100px]"
						placeholder="Your message"
						{...register("message", {
							required: false,
						})}
					/>
					{errors?.message?.message && <Error>{errors.message.message}</Error>}
				</div>

				<Button
					type="login"
					disabled={isSubmittingMessage}
					// onClick={(e) => handleSubmit(e)}
				>
					<span>{isSubmittingMessage ? <Spinner /> : "Send Message"}</span>
				</Button>
			</form>
		</div>
	);
}
