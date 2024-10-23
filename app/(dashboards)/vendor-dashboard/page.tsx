"use client";

import React, { useState } from "react";
import Button from "../../_components/atoms/Button";
import "../../_styles/globals.css";
import Image from "next/image";
import tiredicon from "@/public/image/tiredicon.png";
import share from "@/public/image/shareicon.png";
import love from "@/public/image/loveicon.png";
import { CoursesList } from "@/lib/_exportLinks";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import Loader from "@/app/_components/ui/Loader";

const Page = () => {
	const { user, isLoading } = useAuth();
	const today = new Date().toISOString().split("T")[0];
	const [selectedDate, setSelectedDate] = useState(today);

	const Jobs = 1;
	const time = new Date().getHours();
	const timeOfTheDay = time >= 12 ? "Evening" : "Morning";

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedDate(event.target.value);
	};

	if (isLoading || !user) {
		return <Loader />;
	}

	return (
		<div className="min-h-[70vh] sm:min-h-[85vh] md:min-h-[90vh] h-auto mx-2 md:mx-0">
			{Jobs >= 1 ? (
				<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] rounded-md my-10 p-2 lg:p-4">
					<div className=" flex justify-between gap-4 items-center flex-wrap">
						<section className="flex flex-col gap-5">
							<div>
								<h1 className="text-2xl font-bold">
									Good {timeOfTheDay}, {user?.firstName || "Champ"}!
								</h1>
								<p>Welcome to your dashboard</p>
							</div>

							<p className="text-sm lg:text-[100%] font-bold montserrat text-cebbter">
								Here is your course listing statistics from july-september 2023
							</p>
						</section>
						<section>
							<input
								type="date"
								name=""
								id=""
								className="border-[#f5cb1a] mr-4 w-[7.5rem] md:w-36 border-solid border-[1px] px-2 py-2 sora text-[75%] md:text-sm rounded-sm focus:outline-none "
								placeholder="july-Nov"
								defaultValue={selectedDate}
								onChange={handleDateChange}
							/>
						</section>
					</div>
					<div className="flex justify-between mt-10">
						{/* <div className=" bg-[#1648C7] w-[8rem] sm:w-[10rem] h-[4rem] sm:h-[5rem] py-2 rounded"> */}
						<Button className="w-[180px] max-md:w-[180px] text-[14px] mt-3 md:my-4 text-white sora bg-[#f5cb1a]">
							List a course here !
						</Button>
						{/* </div> */}
						<div className=" bg-[#1648C7] w-[8rem] sm:w-[10rem] h-[4rem] sm:h-[5rem] py-2 rounded">
							<section className="sora text-white text-sm text-center flex flex-col gap-5 h-full">
								<div className=" text-xs sm:text-[100%]">
									Total course listed
								</div>
								{/* <button className="border w-7 h-7 float-right">-</button> */}
								<div className=" text-[25px] font-semibold">28</div>
							</section>
						</div>
						{/* <div className=" bg-[#1648C7] w-[8rem] sm:w-[10rem] h-[4rem] sm:h-[5rem] py-2 rounded">
							<section className="sora text-white text-sm text-center flex flex-col gap-5 h-full">
								<div className=" text-xs sm:text-[100%]">Available Course</div>
								<div className="text-[25px] font-semibold">16</div>
							</section>
						</div> */}
					</div>
					<div className=" mt-3 flex flex-row justify-between">
						<p className="montserrat font-bold capitalize text-black-100 text-[90%] sm:text-[120%]">
							Listed Courses
						</p>
						<p className="montserrat font-semibold capitalize text-[#f5cb1a] text-[80%] sm:text-[110%] ">
							View all
						</p>
					</div>
					<section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  mt-4 gap-4 ">
						{CoursesList.map((course) => (
							<div key={course.id} className="border p-2 rounded-md">
								<section className="items-center">
									<Image
										src={course.icon}
										alt="company-icon"
										className="w-full h-[8rem] md:h-[9rem] lg:h-[9.7rem]"
									/>
								</section>
								<p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
									{course.category}
								</p>
								<p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">
									{course.coursetitle}
								</p>
								<p className=" border-b-[2px] border-solid border-x-black-100 text-xs sm:text-[90%] sora  text-gray-500 pb-2 tracking-wide">
									{course.des}
								</p>
								<section className="flex flex-row justify-between m-1 py-1 ">
									<button className="w-6 h-6">
										<Image src={love} alt="loveicon" />
									</button>
									<button className="w-6 h-6">
										<Image src={share} alt="shareicon" />
									</button>
								</section>
							</div>
						))}
					</section>
					<br />
				</main>
			) : (
				<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] rounded-md mt-10 p-2">
					<div className=" flex justify-between gap-4 items-center flex-wrap">
						<section>
							<h2 className="text-[18px] lg:text-[24px] montserrat font-semibold text-[#f5cb1a]">
								{time >= 12 ? "Good Evening" : "Good Morning"} Nneji!{" "}
							</h2>
							<h3 className="text-[16px] lg:text-[20px] montserrat capitalize">
								Welcome to your vendor dashboard
							</h3>
							<p className="text-sm lg:text-[100%] montserrat text-cebbter">
								Here is your course listing statistics from july-september 2023
							</p>
						</section>
						<section>
							<input
								type="date"
								name=""
								id=""
								className="border-[#f5cb1a] mr-4 w-[7.5rem] md:w-36 border-solid border-[1px] px-2 py-2 sora text-[75%] md:text-sm rounded-sm focus:outline-none "
							/>
						</section>
					</div>
					<section className="flex flex-col justify-center items-center py-4">
						<Image
							src={tiredicon}
							alt="tiredicon"
							className="w-24 h-24 md:w-28 md:h-28 m-auto"
						/>

						<p className="sora capitalize pt-2 ">
							you have not listed any job yet!
						</p>
						<p className="sora capitalize text-md text-[#f5cb1a] underline">
							click here to list a job now!
						</p>
					</section>
					<br />
				</main>
			)}
		</div>
	);
};

export default Page;
