"use client";
import Button from "@/app/_components/atoms/Button";
import React from "react";
import { BsXLg } from "react-icons/bs";

const Modal = ({ setActive }: any) => {
	const handleclose = () => {
		setActive(false);
	};

	const style =
		"border-[#e5bb0a] border-[1px] border-solid h-[2rem] w-full text-xs rounded-sm sora pl-2 bg-transparent text-white focus:outline-none";
	return (
		<div
			className={
				"absolute top-0 bottom-0 right-0 left-0 h-screen bg-black-100/10 px-5 sm:px-0 flex flex-col items-center z-40"
			}
		>
			<div className="relative h-auto md:h-[15rem] min-w-[25rem] w-auto  max-w-[32rem] rounded-md  bg-gray-800 m-auto ">
				<button
					className=" absolute sora text-xs right-1 pr-2 pt-2 text-white p-1"
					onClick={handleclose}
				>
					<BsXLg />
				</button>
				<main className=" flex flex-col md:flex-row m-auto w-full h-full gap-4 items-center justify-center py-3">
					<div className="border w-[7rem] h-[7rem] rounded-full"></div>
					<form action="" className=" flex flex-col gap-4 w-[80%] md:w-auto">
						<input type="text" name="" className={style} placeholder="Name" />
						<input
							type="text"
							name=""
							className={style}
							placeholder="Location"
						/>
						<Button className="">Save</Button>
					</form>
				</main>
			</div>
		</div>
	);
};

export default Modal;
