"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import jobmingle from "@/public/image/jobmingle.png";
import arrowback from "@/public/image/arrowback.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Timer from "@/Components/Timer";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Spinner from "@/app/_components/ui/Spinner";
import Button from "@/app/_components/ui/Button";
import toast from "react-hot-toast";

interface FormData {
	digit1: string;
	digit2: string;
	digit3: string;
	digit4: string;
}

function Page() {
	const [timeLeft, setTimeLeft] = useState(1 * 60);
	const [isVisible, setIsVisible] = useState(true);
	const { control, handleSubmit } = useForm<FormData>({
		defaultValues: {
			digit1: "",
			digit2: "",
			digit3: "",
			digit4: "",
		},
	});
	const router = useRouter();
	const inputs = useRef<(HTMLInputElement | null)[]>([]);
	const {
		verify,
		resendVerificationCode,
		user,
		isLoading,
		error,
		clearErrors,
	} = useAuth();

	useEffect(() => {
		if (error) {
			toast.error(error);
			clearErrors();
		}
	}, [error, clearErrors]);

	const onSubmit = (data: FormData) => {
		const code = `${data.digit1}${data.digit2}${data.digit3}${data.digit4}`;
		verify({ pin: code });
	};

	const handleback = () => {
		router.back();
	};

	const handleResendCode = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const logEmail = { email: user?.email || "creator.prjt@gmail.com" };
		setTimeLeft(1 * 60);
		setIsVisible(true);
		resendVerificationCode(logEmail);
	};

	return (
		<main className="text-black min-h-screen h-auto overflow-x-hidden">
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
				<div className="relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg">
					<Image
						src={jobmingle}
						alt="logo"
						className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8"
					/>
				</div>
				<div className="w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[100vh] flex sm:justify-center relative flex-col items-center">
					<div
						className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2"
						onClick={handleback}
					>
						<Image src={arrowback} alt="arrowback" />
					</div>
					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 text-center mt-1 w-full px-4">
						Confirm Email
					</h2>
					<p className="montserrat font-semibold text-sm text-black-100 text-center px-4">
						Please enter the verification pin sent to ***doe@example.com to
						reset password
					</p>
					<main className="relative min-w-[95%] sm:min-w-[70%] mt-7 sm:mt-4 pb-6 flex items-center flex-col">
						<form
							className="w-full mt-4 mx-2"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="w-full flex flex-row justify-center gap-2">
								{Array.from({ length: 4 }).map((_, index) => (
									<Controller
										key={index}
										name={`digit${index + 1}` as keyof FormData}
										control={control}
										rules={{
											required: true,
											maxLength: 1,
											pattern: /^[0-9]$/i,
										}}
										render={({ field }) => (
											<input
												{...field}
												type="text"
												maxLength={1}
												className="w-[50px] h-[50px] text-2xl text-center border rounded-[5px]"
												onChange={(e) => {
													if (
														/^[0-9]$/.test(e.target.value) ||
														e.target.value === ""
													) {
														field.onChange(e);
														if (e.target.value !== "") {
															const nextSibling = document.querySelector(
																`input[name=digit${index + 2}]`
															) as HTMLInputElement;
															if (nextSibling) nextSibling.focus();
														}
													}
												}}
												onKeyDown={(e) => {
													if (e.key === "Backspace" && field.value === "") {
														const prevSibling = document.querySelector(
															`input[name=digit${index}]`
														) as HTMLInputElement;
														if (prevSibling) prevSibling.focus();
													}
												}}
											/>
										)}
									/>
								))}
							</div>
							<div className="mt-3">
								{isVisible ? (
									<div className="montserrat font-bold text-lg text-[#021C5F] text-center">
										<Timer
											minute={1}
											secs={60}
											timeLeft={timeLeft}
											setTimeLeft={setTimeLeft}
											isVisible={isVisible}
											setIsVisible={setIsVisible}
										/>
									</div>
								) : (
									<div className="mt-6 w-full text-center">
										<p className="text-black-100 text-xs sora">
											Didn&#39;t get the email ?
										</p>
										<button
											onClick={handleResendCode}
											className="border-none text-sm sora tracking-wider sora font-semibold text-[#F6CC16]"
										>
											click here to resend
										</button>
									</div>
								)}
							</div>
							<Button type="login">
								Submit pin <span>{isLoading && <Spinner />}</span>
							</Button>
						</form>
					</main>
				</div>
			</div>
		</main>
	);
}

export default Page;
