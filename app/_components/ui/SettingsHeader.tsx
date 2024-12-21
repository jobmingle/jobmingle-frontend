"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import defaultProfilePic from "@/public/image/default-user.jpg";

import Modal from "@/app/_components/ui/Modal";

import { fetchAddress } from "@/lib/helpers";
import { useAppSelector } from "@/app/_hooks/hooks";
import {
	user as userData,
	token as authToken,
} from "@/app/_features/appSlices/userSlice";

interface Location {
	position: {
		latitude: number;
		longitude: number;
	};
	address: string;
}

export default function SettingsHeader() {
	const [address, setAddress] = useState<Location | undefined>(undefined);

	const [Active, setActive] = useState(false);
	// const { user } = useAuth();
	const user = useAppSelector(userData);
	const token = useAppSelector(authToken);

	useEffect(() => {
		async function handleGetAddress() {
			const address = await fetchAddress();
			setAddress(address);
		}
		handleGetAddress();
	}, []);

	return (
		<div className="w-full lg:w-[50%] ">
			{/* Edit profile */}
			<div className="flex  relative">
				{Active ? <Modal setActive={setActive} /> : null}
				<div className="sm:px-2 w-full max-h-[100vh] overflow-auto shadow shadow-gray-500 rounded">
					<section className="m-auto max-w-[22rem] flex flex-col justify-center py-2 sm:px-2 my-4 ">
						<main className=" flex justify-center flex-row items-center gap-4  ">
							<div className="flex justify-center border-2 border-yellow-600 items-center w-16 h-16 rounded-full overflow-hidden ">
								<div className="w-14 h-14 rounded-full overflow-hidden">
									<Image
										src={
											user?.image
												? `https://rosybrown-spider-442940.hostingersite.com/${user?.image}`
												: defaultProfilePic
										}
										alt="User profile pic"
										width={300}
										height={300}
										className="w-full h-full object-fill object-center "
									/>
								</div>
							</div>
							<div className="flex-grow text-center shadow shadow-gray-500 rounded p-2">
								{" "}
								<h3 className="font-bold text-xl montserrat">
									<span>{user?.firstName} </span>
									<span> {user?.lastName} </span>
								</h3>
								{/* <p className="sora text-sm">{location}</p> */}
								<div className="relative sora  text-sm">
									<input type="text" defaultValue={address?.address} />
								</div>
								<button
									className="text-xs border rounded-md px-2 py-1 sora mt-1"
									onClick={() => setActive((active) => !active)}
								>
									Edit
								</button>
							</div>
						</main>
					</section>
				</div>
			</div>
		</div>
	);
}
