"use client";
import Image from "next/image";
import React from "react";
import JMLOGO from "@/public/logo.png";
import { useRouter } from "next/navigation";
import Button from "./_components/atoms/Button";

const Notfound = () => {
	const router = useRouter();
	const handleNavigate = () => {
		router.back();
	};
	return (
		<div className="max-h-screen min-h-screen flex items-center justify-center flex-col ">
			<main className="flex items-center flex-col">
				{/* <h1 className="text-7xl font-bold text-center text-yellow-500 ">404</h1> */}
				<div className="flex justify-center flex-row items-center">
					<p className="text-9xl font-bold text-center text-yellow-500 cabinetG ">
						4
					</p>
					<Image
						alt="logo"
						src={JMLOGO}
						width={100}
						height={100}
						className="m-auto"
					/>
					<p className="text-9xl font-bold text-center text-yellow-500 cabinetG ">
						4
					</p>
				</div>
				<p className="satoshi text-[90%] text-center">OOPS!</p>
				<p className="satoshi text-[90%] text-center">Wrong landing!!!</p>
				<p className="satoshi text-[90%] text-center">
					It looks like there&apos;s nothing here!, please go back and
					re-navigate.
				</p>
				<br />

				<br />
				<Button
					className="bg-yellow-500 text-white px-4 h-[1.8rem] w-auto rounded-sm"
					onClick={handleNavigate}
				>
					Go Back
				</Button>
			</main>
		</div>
	);
};

export default Notfound;
