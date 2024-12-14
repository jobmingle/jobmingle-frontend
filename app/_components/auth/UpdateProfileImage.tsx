import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

import toast from "react-hot-toast";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import { useUpdateProfileImageMutation } from "@/app/_features/appSlices/apiSlice";
import { convertFileToBase64 } from "@/app/_hooks/Helpers";

const UpdateProfileImage: React.FC = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null); // Preview URL
	const [selectedFile, setSelectedFile] = useState<File | null>(null); // Selected File
	// const [loading, setLoading] = useState(false);

	const [
		updateProfileImage,
		{ isLoading: isUpdatingProfileImage, error: updatingImageError },
	] = useUpdateProfileImageMutation();

	const user = useAppSelector(userData);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]; // Get the first selected file
		if (file) {
			setSelectedFile(file);
			setImagePreview(URL.createObjectURL(file)); // Generate preview URL
		}
	};

	const handleUpload = async (e: React.FormEvent) => {
		e.preventDefault();
		const userId = user?.id;
		if (!selectedFile) {
			alert("Please select an image first.");
			return;
		}

		const base64Image = selectedFile
			? await convertFileToBase64(selectedFile)
			: null;
		const imageData = {
			image: base64Image,
		};

		try {
			const res: any = await updateProfileImage({ userId, imageData }).unwrap();

			toast.success(res?.message);
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	};

	// useEffect(() => {
	// 	if (error === "The image size must not exceed 1 MB.") {
	// 		toast.error(`${error}: Please upload a smaller image size!`);
	// 		clearErrors();
	// 	}
	// }, [error]);

	return (
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
					onChange={handleImageChange}
					className="hidden"
				/>
			</div>

			{/* Upload Button */}
			<button
				onClick={(e) => handleUpload(e)}
				disabled={!selectedFile || isUpdatingProfileImage}
				className={` px-6 py-2 rounded ${
					isUpdatingProfileImage
						? "bg-gray-400 cursor-not-allowed"
						: "bg-yellow-600 hover:bg-yellow-700 text-white"
				}`}
			>
				{isUpdatingProfileImage ? "Uploading..." : "Upload"}
			</button>
		</div>
	);
};

export default UpdateProfileImage;
