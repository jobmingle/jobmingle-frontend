"use client";

import { useEffect, useState } from "react";
import { userPreferences } from "@/lib/_exportLinks";
import toast from "react-hot-toast";
import Spinner from "@/app/_components/ui/Spinner";
import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import Cookies from "js-cookie";

import { useUpdateProfileMutation } from "@/app/_features/appSlices/apiSlice";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/hooks";
import { setUser, user as userData } from "@/app/_features/appSlices/userSlice";
import { convertFileToBase64 } from "@/app/_hooks/Helpers";

export default function UpdateProfileForm() {
	const dispatch = useAppDispatch();
	const [step, setStep] = useState(0);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [selectedPreferences, setSelectedPreferences] = useState({
		goals: "" as string,
		interests: [] as string[],
		image: null as File | null,
	});

	const router = useRouter();

	const user = useAppSelector(userData);
	const [updateProfile, { isLoading: isGeneratingProfile, error }] =
		useUpdateProfileMutation();

	useEffect(() => {
		if (user) {
			switch (user.goals) {
				case "List a course":
					router.push("/vendor-dashboard");
					break;
				case "Post a job":
					router.push("/employer-dashboard");
					break;
				case "Apply for a job / Take a course":
					router.push("/dashboard");
					break;
				default:
					if (user.role === "Admin") router.push("/admin-dashboard");
			}
		}
	}, [error, user, router]);

	const handleSelected = (category: string, option: any): void => {
		setSelectedPreferences((prev) => {
			if (category === "goals") {
				return { ...prev, goals: option };
			}

			if (category === "image") {
				setImagePreview(option ? URL.createObjectURL(option) : null);
				return { ...prev, image: option };
			}

			if (category === "interests") {
				const isSelected = prev.interests.includes(option);
				return {
					...prev,
					interests: isSelected
						? prev.interests.filter((item) => item !== option)
						: [...prev.interests, option],
				};
			}

			return prev;
		});
	};

	const handlePrev = () => setStep((prev) => Math.max(0, prev - 1));

	const handleNext = () => {
		if (step < 2) {
			setStep((prev) => prev + 1);
		}
	};

	const handleUpdateProfile = async (e: React.FormEvent) => {
		e.preventDefault();

		const userId = sessionStorage.getItem("userId") || "";
		const base64Image = selectedPreferences.image
			? await convertFileToBase64(selectedPreferences.image)
			: null;

		const formData = {
			...selectedPreferences,
			interests: selectedPreferences.interests.join(", "),
			image: base64Image,
		};

		try {
			const res: any = await updateProfile({ userId, formData }).unwrap();
			dispatch(setUser({ user: res?.data, token: res?.token }));
			if (res?.token) {
				localStorage.setItem("access_token", res?.token);
				Cookies.set("access_token", res?.token, {
					path: "/",
					expires: 24 * 60 * 60,
					secure: process.env.NODE_ENV === "production",
					sameSite: "Strict",
				});

				if (res?.data?.goals === "List a course") {
					router.push("/vendor-dashboard");
				}

				if (res?.data?.goals === "Post a job") {
					router.push("/employer-dashboard");
				}

				if (res?.data?.goals === "Apply for a job / Take a course") {
					router.push("/dashboard");
				}

				if (res?.data?.role === "admin") {
					router.push("/admin-dashboard");
				}

				toast.success(res?.message);

				// console.log(userData);
			}
		} catch (error: any) {
			toast.error(error?.data?.message);

			console.error(error);
		}
	};

	return (
		<div className="w-[90%] flex flex-col gap-5 py-10 my-10 px-5 md:px-20 m-auto justify-center border border-stone-950 rounded-md">
			{step === 0 && (
				<div>
					<h2 className="text-xl text-stone-800 text-center font-bold mb-5">
						Select your Interests
					</h2>
					<div className="flex flex-col space-y-6 justify-center">
						{userPreferences.interests.map((option) => (
							<input
								type="button"
								className={`w-full list-none py-3 cursor-pointer pl-2 border-black-100 border-solid border-[1px] sora rounded-[10px] capitalize ${
									selectedPreferences.interests.includes(option)
										? "text-yellow-500 border-yellow-500"
										: ""
								}`}
								key={option}
								onClick={() => handleSelected("interests", option)}
								value={option}
							/>
						))}
					</div>
				</div>
			)}

			{step === 1 && (
				<div>
					<h2 className="text-xl text-stone-800 text-center font-bold mb-5">
						Select your goals
					</h2>
					<div className="flex flex-col space-y-6 justify-center">
						{userPreferences.usage.map((option) => (
							<input
								type="button"
								className={`w-full list-none py-3 cursor-pointer pl-2 border-black-100 border-solid border-[1px] sora rounded-[10px]  ${
									selectedPreferences.goals === option
										? "text-yellow-500 border-yellow-500"
										: ""
								}`}
								key={option}
								onClick={() => handleSelected("goals", option)}
								value={option}
							/>
						))}
					</div>
				</div>
			)}

			{step === 2 && (
				<div className="flex  md:flex-col items-center justify-center gap-5">
					{/* Profile Picture Container */}
					<div className="relative w-40 h-30 ">
						<div className="rounded-[50%]- rounded-full overflow-hidden border border-gray-300">
							{imagePreview ? (
								<Image
									src={imagePreview}
									alt="Profile Picture"
									width={160}
									height={160}
									className="object-cover h-[160px] w-[160px] rounded-full"
								/>
							) : (
								<div className="bg-gray-200 w-full h-[80px] text-center pl-6- flex items-center justify-center text-gray-500">
									Upload Image
								</div>
							)}
						</div>

						{/* Edit Icon */}
						<label
							htmlFor="profile-picture-input"
							className="absolute bottom-0 left-2 bg-yellow-600 p-2 rounded-full cursor-pointer"
						>
							<FiEdit2 className="text-white" />
						</label>
						<input
							id="profile-picture-input"
							type="file"
							accept="image/*"
							onChange={(e) =>
								handleSelected(
									"image",
									e.target.files ? e.target.files[0] : null
								)
							}
							className="hidden"
						/>
					</div>
				</div>
			)}

			<div className="flex justify-center md:justify-end gap-5">
				{step > 0 && (
					<button
						className="w-[100px] bg-yellow-400 hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  rounded-sm px-5 py-2"
						onClick={handlePrev}
					>
						Back
					</button>
				)}
				<button
					className="flex text-center items-center tracking-wider h-[3rem] w-[100px] bg-yellow-400 hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-sm px-5 py-2"
					onClick={
						step < Object.keys(userPreferences).length - 1
							? handleNext
							: handleUpdateProfile
						// : handleSubmit
					}
				>
					{!isGeneratingProfile ? (
						`${
							step < Object.keys(userPreferences).length - 1 ? "Next" : "FInish"
						}`
					) : (
						<span>
							<Spinner />
						</span>
					)}
					{/* // : `${isGeneratingProfile ? "Loading..." : "Finish"}` */}
				</button>
			</div>
		</div>
	);
}
