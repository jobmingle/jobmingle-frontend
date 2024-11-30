"use client";
import { useEffect, useState } from "react";
import { userPreferences } from "@/lib/_exportLinks";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import toast from "react-hot-toast";
import Spinner from "@/app/_components/ui/Spinner";
import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";

export default function PreferencesForm() {
	const [step, setStep] = useState(0);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const router = useRouter();
	const {
		error,
		updateUser,
		user,
		clearErrors,
		isLoading,
		convertFileToBase64,
	} = useAuth();
	const [selectedPreferences, setSelectedPreferences] = useState({
		goals: "" as string,
		interests: [] as string[],
		image: File,
	});

	useEffect(() => {
		if (error === "User not found.") {
			toast.error(`Error: ${error}`);
			clearErrors();
		}
		if (error === "The image field must be a string.") {
			toast.error(`Error: ${error}`);
			clearErrors();
		}

		if (error === "Network Error") {
			toast.error(`Error: ${error}`);
			clearErrors();
		}
		if (error === "The image size must not exceed 1 MB.") {
			toast.error(`File upload error: ${error}`);
			clearErrors();
		}

		if (user) {
			if (user.goals === "List a course") router.push("/vendor-dashboard");

			if (user.goals === "Post a job") router.push("/employer-dashboard");

			if (user.goals === "Apply for a job / Take a course")
				router.push("/dashboard");
			if (user.goals === "Admin" || user.role === "Admin")
				router.push("/admin-dashboard");
		}
		// eslint-disable-next-line
	}, [error, user]);

	const handleSelected = (category: string, option: any): void => {
		setSelectedPreferences((prev) => {
			if (category === "goals" || category === "image") {
				// Only one selectable option for 'goals' and 'image'
				if (category === "image") {
					setImagePreview(URL.createObjectURL(option));
				}
				return {
					...prev,
					[category]: option,
				};
			} else if (category === "interests") {
				const alreadySelected = prev.interests.includes(option);
				return {
					...prev,
					interests: alreadySelected
						? prev.interests.filter((item) => item !== option)
						: [...prev.interests, option],
				};
			}
			return prev;
		});
	};

	const handlePrev = () => {
		setStep((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	};

	const handleNext = () => {
		if (step < Object.keys(userPreferences).length - 1) {
			setStep(step + 1);
		}
		// else {
		// 	// Handle the final submission (e.g., send to backend)
		// 	console.log("Submitted Preferences: ", selectedPreferences);
		// }
	};

	function handleSubmit(e: any) {
		e.preventDefault();
		const formattedPreferences = {
			...selectedPreferences,
			interests: selectedPreferences.interests.join(", "), // Converts array to comma-separated string
		};
		updateUser(formattedPreferences);
		console.log(formattedPreferences);
	}

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
				<div className="flex  md:flex-col items-center gap-5">
					{/* Profile Picture Container */}
					<div className="relative w-40 h-30 ">
						<div className="rounded-[50%]- rounded-full overflow-hidden border border-gray-300">
							{imagePreview ? (
								<Image
									src={imagePreview}
									alt="Profile Picture"
									width={160}
									height={160}
									className="object-cover"
								/>
							) : (
								<div className="bg-gray-200 w-full h-full pl-6 flex items-center justify-center text-gray-500">
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
								handleSelected("image", e.target.files ? e.target.files[0] : "")
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
							: handleSubmit
					}
				>
					{!isLoading ? (
						`${
							step < Object.keys(userPreferences).length - 1 ? "Next" : "FInish"
						}`
					) : (
						<span>
							<Spinner />
						</span>
					)}
					{/* // : `${isLoading ? "Loading..." : "Finish"}` */}
				</button>
			</div>
		</div>
	);
}
