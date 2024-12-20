"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

import toast from "react-hot-toast";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import { useUploadCourseThumbnailMutation } from "@/app/_features/appSlices/apiSlice";
import { convertFileToBase64 } from "@/app/_hooks/Helpers";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

interface CoursePageProps {
	params: { id: string };
}

const UploadCourseThumbnail: React.FC = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null); // Preview URL
	const [selectedFile, setSelectedFile] = useState<File | null>(null); // Selected File
	// const [loading, setLoading] = useState(false);
	const router = useRouter();

	const paramId = sessionStorage.getItem("params")
		? sessionStorage.getItem("params")
		: "";
	console.log(paramId);
	const [
		UploadCourseThumbnail,
		{ isLoading: isUploadingThumbnail, error: updatingImageError },
	] = useUploadCourseThumbnailMutation();

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
		const courseId = sessionStorage.getItem("courseId") || paramId;
		if (!selectedFile) {
			alert("Please select an image first.");
			return;
		}

		const base64Image = selectedFile
			? await convertFileToBase64(selectedFile)
			: null;
		const imageData = {
			thumbnail: base64Image,
		};

		try {
			const res: any = await UploadCourseThumbnail({
				courseId,
				imageData,
			}).unwrap();
			toast.success(res?.message);

			window.open(
				"https://courses.jobmingle.co/login/index.php",
				"_blank",
				"noopener,noreferrer"
			);
			router.push("/vendor-dashboard/courses");
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		} finally {
			sessionStorage.removeItem("courseId");
			sessionStorage.removeItem("params");
		}
	};

	// useEffect(() => {
	// 	if (error === "The image size must not exceed 1 MB.") {
	// 		toast.error(`${error}: Please upload a smaller image size!`);
	// 		clearErrors();
	// 	}
	// }, [error]);

	return (
		<div className="flex  flex-col max-md:mt-10 items-center  justify-center gap-5 w-full h-full">
			{/* Profile Picture Container */}
			<label className="text-md font-bold montserrat py-1 tracking-wider ">
				Course Thumbnail Upload
			</label>
			<div className="relative border-2 border-dashed border-gray-400 rounded-lg p-4">
				{imagePreview ? (
					<Image
						src={imagePreview}
						alt="Profile Picture"
						width={160}
						height={160}
						className="h-40 w-full object-cover rounded-lg shadow-md"
					/>
				) : (
					<div className="bg-gray-200 w-full h-full pl-6 pr-2 py-1 flex items-center justify-center text-gray-500">
						Upload Image
					</div>
				)}
				{/* </div> */}

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
				disabled={!selectedFile || isUploadingThumbnail}
				className={` px-6 py-2 rounded ${
					isUploadingThumbnail
						? "bg-gray-400 cursor-not-allowed"
						: "bg-yellow-600 hover:bg-yellow-700 text-white"
				}`}
			>
				{isUploadingThumbnail ? "Uploading..." : "Upload"}
			</button>
		</div>
	);
};

export default UploadCourseThumbnail;
