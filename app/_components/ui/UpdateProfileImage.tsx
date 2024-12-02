import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import toast from "react-hot-toast";

const UpdateProfileImage: React.FC = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null); // Preview URL
	const [selectedFile, setSelectedFile] = useState<File | null>(null); // Selected File
	// const [loading, setLoading] = useState(false);
	const { updateProfileImage, user, error, clearErrors, isLoading } = useAuth();

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]; // Get the first selected file
		if (file) {
			setSelectedFile(file);
			setImagePreview(URL.createObjectURL(file)); // Generate preview URL
		}
	};

	const handleUpload = async (e: any) => {
		e.preventDefault();

		if (!selectedFile) {
			alert("Please select an image first.");
			return;
		}

		// console.log(selectedFile);
		updateProfileImage(user?.id, selectedFile);
	};

	useEffect(() => {
		if (error === "The image size must not exceed 1 MB.") {
			toast.error(`${error}: Please upload a smaller image size!`);
			clearErrors();
		}
	}, [error]);

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
				disabled={!selectedFile || isLoading}
				className={` px-6 py-2 rounded ${
					isLoading
						? "bg-gray-400 cursor-not-allowed"
						: "bg-yellow-600 hover:bg-yellow-700 text-white"
				}`}
			>
				{isLoading ? "Uploading..." : "Upload"}
			</button>
		</div>
	);
};

export default UpdateProfileImage;
