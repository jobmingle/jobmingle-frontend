"use client";
import spinner from "@/public/image/Spinner.gif";
import Image from "next/image";
import bg from "@/public/image/why-us4.jpg";
import { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi2";

export default function AppLoader() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-900 p-0 bg-opacity-90 px-4 py-3 h-screen z-50">
			<div className="flex flex-col h-full justify-between space-y-4 w-full max-w-md-">
				<header className=" h-[15%] bg-stone-900 rounded w-full  ">
					<div className="flex items-center justify-between h-full bg-stone-500 rounded w-full animate-pulse px-4 shimmer- ">
						<div className="bg-white p-2 rounded-full text-2xl font-extrabold ">
							JM
						</div>
						<div className=" p-2 rounded-full  ">JOBMINGLE</div>
						<div className="flex p-2 bg-white rounded-full  justify-center items-center">
							<HiUser />{" "}
						</div>
					</div>
				</header>
				<main className="grid grid-cols-2 -md:grid-cols-2   place-items-center  py-3  bg-gray-800- rounded w-full animate-pulse- gap-2  flex-1">
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
					<div className="bg-stone-400 py-2- px-5- h-full rounded w-full animate-pulse"></div>
				</main>{" "}
				<footer className=" bg-stone-700 rounded  animate-pulse- py-3 h-[20%]- h-auto -z-20 ">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:px-4 mb-8 animate-pulse-">
						<div className="flex flex-col  gap-[10px] justify-between-  items-center lg:items-start mb-8 lg:mb-0">
							<div className="flex space-x-4 mb-4 animate-pulse">
								<p className="bg-stone-500 py-2 px-5 rounded animate-pulse "></p>
								<p className="bg-stone-300 py-2 px-5 rounded animate-pulse "></p>
								<p className="bg-stone-500 py-2 px-5 rounded animate-pulse "></p>
								<p className="bg-stone-300 py-2 px-5 rounded animate-pulse "></p>
								<p className="bg-stone-500 py-2 px-5 rounded animate-pulse "></p>
								<p className="bg-stone-300 py-2 px-5 rounded animate-pulse "></p>
							</div>
							<div className="bg-stone-300 py-2 px-5 rounded animate-pulse  w-5/6"></div>
							<div className="bg-stone-300 py-2 px-5 rounded animate-pulse  w-5/6"></div>
						</div>

						<div className="flex- grid grid-cols-2 lg:grid-cols-2 text-stone-200 satoshi  ">
							<div className="flex flex-col gap-2 items-center- max-lg:ml-6 justify-start- items-start ">
								<div className="bg-yellow-600 py-2 px-5 h-10 rounded animate-pulse  w-5/6"></div>
								<div className="bg-stone-300 py-2 px-5 h-10 rounded animate-pulse  w-5/6"></div>
							</div>
							<div className="flex flex-col gap-2  ">
								<div className="bg-stone-300 text-stone-800 text-center font-extrabold  py-2 px-5 h-10 rounded animate-pulse  w-5/6">
									JOBMINGLE
								</div>
								<div className="bg-stone-400 py-2 md:px-5 h-auto md:h-10 rounded animate-pulse  w-5/6  z-40 ">
									<div className="flex gap-1 items-center justify-center z-50 flex-wrap">
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											J
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											O
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											B
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											M
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											I
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											N
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											G
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											L
										</span>
										<span className="w-5 h-5 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
											E
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Copyright Section */}
					<div className="text-center h-10 px-4 mt-8 animate-pulse">
						<div className="bg-stone-400 py-2 px-5 rounded w-full h-full"></div>
					</div>
				</footer>
				{/* Skeleton for the button */}
			</div>
		</div>
	);
}
