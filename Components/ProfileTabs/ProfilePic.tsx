import React from "react";
import { usage } from "../Constants";
import Image from "next/image";
import upload from "@/public/Upload.png";

const ProfilePic = ({}) => {
	return (
		<div className=" w-full">
			<p className="montserrat font-semibold text-sm my-4 sm:text-lg text-black-100 w-full text-center px-4">
				Upload a profile image
			</p>
			<div className="flex flex-col space-y-6 justify-center px-4">
				<div className="border-dashed border-black-100/90 border-[1px] rounded-[6px] flex flex-col justify-center items-center py-6 space-y-4">
					<Image src={upload} alt="upload icon" className="w-20 h-20" />
					<p className="montserrat text-black-100/90 text-lg text-center font-semibold">
						choose an image to upload
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfilePic;
