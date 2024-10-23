"use client";
import { useState } from "react";
import { userPreferences } from "@/lib/_exportLinks";
import { useAuth } from "@/app/_contexts/auth/AuthState";

export default function PreferencesForm() {
	const [step, setStep] = useState(0);
	const { error, updateUser, user } = useAuth();
	const [selectedPreferences, setSelectedPreferences] = useState({
		usage: "" as string,
		interests: [] as string[],
		image: "" as string,
	});

	// console.log(selectedPreferences);

	const handleSelected = (category: string, option: string): void => {
		setSelectedPreferences((prev) => {
			if (category === "usage" || category === "image") {
				// Only one selectable option for 'usage' and 'image'
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
		} else {
			// Handle the final submission (e.g., send to backend)
			console.log("Submitted Preferences: ", selectedPreferences);
		}
	};

	// Submit User Preferences
	function handleSubmit(e: any) {
		e.preventDefault();
		updateUser(user?.id, selectedPreferences);
	}

	return (
		<div className="w-[80%] flex flex-col gap-5 py-10 my-10 px-20 m-auto justify-center border border-stone-950 rounded-md">
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
						Select your usage
					</h2>
					<div className="flex flex-col space-y-6 justify-center">
						{userPreferences.usage.map((option) => (
							<input
								type="button"
								className={`w-full list-none py-3 cursor-pointer pl-2 border-black-100 border-solid border-[1px] sora rounded-[10px] capitalize ${
									selectedPreferences.usage === option
										? "text-yellow-500 border-yellow-500"
										: ""
								}`}
								key={option}
								onClick={() => handleSelected("usage", option)}
								value={option}
							/>
						))}
					</div>
				</div>
			)}

			{step === 2 && (
				<div>
					<h2 className="text-xl text-stone-800 text-center font-bold mb-5">
						Upload your profile image
					</h2>
					<div className="flex flex-col space-y-6 justify-center">
						<input
							type="file"
							className={`w-full list-none py-10 cursor-pointer px-5 border-black-100 border-solid border-[1px] sora rounded-[10px] capitalize file:py-[0.8rem] file:px-[1.2rem] file:rounded-sm file:mr-[1.2rem] file:font-bold file:border-none file:cursor-pointer file:bg-yellow-600 file:hover:bg-yellow-500 file:hover:scale-110 file:transition file:ease-in-out file:delay-150 file:hover:-translate-y-1  file:duration-300  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 `}
							onChange={(e) =>
								handleSelected(
									"image",
									e.target.files ? e.target.files[0].name : ""
								)
							}
						/>
					</div>
				</div>
			)}

			<div className="flex justify-end gap-5">
				{step > 0 && (
					<button
						className="w-[100px] bg-yellow-400 hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  rounded-sm px-5 py-2"
						onClick={handlePrev}
					>
						Back
					</button>
				)}
				<button
					className="w-[100px] bg-yellow-400 hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-sm px-5 py-2"
					onClick={
						step < Object.keys(userPreferences).length - 1
							? handleNext
							: handleSubmit
					}
				>
					{step < Object.keys(userPreferences).length - 1 ? "Next" : "Finish"}
				</button>
			</div>
		</div>
	);
}
