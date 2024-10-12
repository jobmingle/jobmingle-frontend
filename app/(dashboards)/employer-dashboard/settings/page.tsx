"use client";

import React, { useState } from "react";
import changepassbg from "@/public/changepassimg.png";
import Image from "next/image";
import tiredicon from "@/public/tiredicon.png";
import editicon from "@/public/editicon.png";
// import Modal from "../components/Modal";
// import Modal from '../../../'

const Page = () => {
	const username = "Prosper Williams";
	const location = "Benin City Nigeria";
	const [Active, setActive] = useState(false);

	return (
		<div className=" flex flex-col items-center gap-3 h-auto">
			{/* Edit profile */}
			<div className="flex relative">
				{/* {Active ? <Modal setActive={setActive} /> : null} */}
				<div className="sm:px-2 w-full max-h-[100vh] overflow-auto">
					<section className="m-auto max-w-[22rem] flex flex-col justify-center py-2 sm:px-2 my-4 ">
						<main className=" flex justify-center flex-row items-center gap-3">
							<div className=" flex-2">
								{" "}
								<Image
									src={tiredicon}
									alt="profile image"
									className="max-w-[5.6rem] sm:max-w-[6rem] object-cover"
								/>
							</div>
							<div className="flex-grow text-center">
								{" "}
								<h3 className="font-bold text-xl montserrat">{username}</h3>
								<p className="sora text-sm">{location}</p>
								<button
									className="text-xs border rounded-md px-2 py-1 sora mt-1"
									onClick={() => setActive(true)}
								>
									Edit
								</button>
							</div>
						</main>
					</section>
				</div>
			</div>
			<section className=" w-full lg:max-w-[30rem] px-2 sm:px-20 md:px-0">
				<h2 className="font-bold text-xl montserrat text-center capitalize tracking-wide py-2">
					Create new password
				</h2>
				<form action="" className=" flex flex-col mt-4 pb-4">
					<label htmlFor="currentpass " className="text-[100%] font-semibold">
						Current Password
					</label>
					<input
						type="password"
						name="currentpass"
						id="currentpass"
						className="focus:outline-none h-[2.9rem] bg-transparent border-[1.2px] border-solid border-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[80%]"
						placeholder="Current Password"
					/>
					<p className="mb-5 text-xs sora py-0.5">
						We need to be sure you&#39;re making this change
					</p>
					<label htmlFor="newpass" className="text-[100%] font-semibold">
						New Password
					</label>
					<input
						type="password"
						name="newpass"
						id="newpass"
						className="focus:outline-none mb-5 h-[2.9rem] bg-transparent border-[1.2px] border-solid border-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[80%]"
						placeholder="Enter new papssword"
					/>
					<label htmlFor="confirmnewpass" className="text-[100%] font-semibold">
						Confirm Password
					</label>
					<input
						type="password"
						name="confirmnewpass"
						id="confirmnewpass"
						className="focus:outline-none mb-5 h-[2.9rem] bg-transparent border-[1.2px] border-solid border-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[80%]"
						placeholder="Enter password again"
					/>

					<button className="focus:outline-none mt-6 h-[2.9rem] border-[1.2px] border-solid bg-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[100%] text-white">
						change password
					</button>
				</form>
			</section>
		</div>
	);
};

export default Page;
