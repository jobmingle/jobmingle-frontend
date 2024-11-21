"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import tiredicon from "@/public/image/tiredicon.png";

import Modal from "@/app/_components/ui/Modal";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { fetchAddress } from "@/lib/helpers";

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
	const { user } = useAuth();

	useEffect(() => {
		async function handleGetAddress() {
			const address = await fetchAddress();
			setAddress(address);
		}
		handleGetAddress();
	}, []);

	return (
		<div className="w-full lg:w-[50%] border border-gray-800 rounded">
			{/* Edit profile */}
			<div className="flex  relative">
				{Active ? <Modal setActive={setActive} /> : null}
				<div className="sm:px-2 w-full max-h-[100vh] overflow-auto">
					<section className="m-auto max-w-[22rem] flex flex-col justify-center py-2 sm:px-2 my-4 ">
						<main className=" flex justify-center flex-row items-center gap-3">
							<div className="flex justify-center border-2 border-yellow-600 items-center w-16 h-16 rounded-full overflow-hidden">
								<div className="w-14 h-14 rounded-full overflow-hidden">
									<Image
										src={
											`https:www.rosybrown-spider-442940.hostingersite.com/storage/${user?.image}` ||
											tiredicon
										}
										alt="User profile pic"
										width={300}
										height={300}
										className="w-full h-full object-fill object-center "
									/>
								</div>
							</div>
							<div className="flex-grow text-center">
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
