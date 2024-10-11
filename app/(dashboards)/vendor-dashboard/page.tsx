import React from "react";
// import Button from "../_components/atoms/Button";
import Button from '../../_components/atoms/Button'
import "../globals.css";
import Image from "next/image";
import tireds from "../../public/tiredicon.png";
import Card from '../student-dashboard/component/Card'
import { courses } from "@/lib/_exportLinks";

const Page = () => {
	const Jobs = 1;

	const time = new Date().getHours();

	return (
		<div className="min-h-screen mx-2 md:mx-0">
			<Button className="w-[200px] max-md:w-[160px] text-[14px] mt-3 md:mt-0 text-white sora bg-[#f5cb1a]">
				List a Course Here
			</Button>
			{Jobs >= 1 ? (
				<main className="border-black/50 w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid border-[0.5px] rounded-md mt-10 p-4">
					<div className="flex justify-between gap-4 items-center flex-wrap">
						<section>
							<h2 className="text-[18px] lg:text-[24px] montserrat font-semibold text-[#f5cb1a]">
								{time >= 12 ? "Good Evening" : "Good Morning"} Omole!
							</h2>
							<h3 className="text-[16px] lg:text-[20px] montserrat capitalize">
								Welcome to your vendor dashboard
							</h3>
							<p className="text-sm lg:text-[100%] montserrat text-center">
								Here is your Course Listings Statistics Report from July to
								September 2023
							</p>
						</section>
						<section>
							<input
								type="date"
								className="border-[#f5cb1a] w-[7.5rem] md:w-36 border-solid border-[1px] px-2 py-2 sora text-[75%] md:text-sm rounded-sm focus:outline-none"
							/>
						</section>
					</div>
					<div className="flex justify-between mt-10">
						<div className="bg-[#1648C7] w-[8rem] sm:w-[10rem] h-[4rem] sm:h-[5rem] py-2">
							<section className="sora text-white text-sm text-center flex flex-col justify-between h-full">
								<div className="text-xs sm:text-[100%]">Total Courses Sold</div>
								<div className="text-[25px] font-semibold">28</div>
							</section>
						</div>
						<div className="bg-[#1648C7] w-fit sm:w-[10rem] h-[4rem] sm:h-[5rem] py-2">
							<section className="sora text-white text-sm text-center flex flex-col justify-between h-full">
								<div className="text-xs sm:text-[100%]">Total Amount Made</div>
								<div className="text-[25px] font-semibold">N10,000</div>
							</section>
						</div>
					</div>
					<div className="mt-3 flex justify-between">
						<p className="montserrat font-bold text-black-100 text-[90%] sm:text-[120%]">
							Listed Courses
						</p>
						<p className="montserrat font-semibold text-[#f5cb1a] text-[80%] sm:text-[110%] underline cursor-pointer">
							View all
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
						{courses.map((course, index) => (
							<Card key={index} course={course} />
						))}
					</div>
				</main>
			) : (
				<main className="border-black/50 w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid border-[0.5px] rounded-md mt-10 p-4">
					<div className="flex justify-between gap-4 items-center flex-wrap">
						<section>
							<h2 className="text-[18px] lg:text-[24px] montserrat font-semibold text-[#f5cb1a]">
								{time >= 12 ? "Good Evening" : "Good Morning"} Omole
							</h2>
							<h3 className="text-[16px] lg:text-[20px] montserrat capitalize">
								Welcome to your vendor dashboard
							</h3>
							<p className="text-sm lg:text-[100%] montserrat text-center">
								Here is your Course Listings Statistics Report from July to
								September 2023
							</p>
						</section>
						<section>
							<input
								type="date"
								className="border-[#f5cb1a] w-[7.5rem] md:w-36 border-solid border-[1px] px-2 py-2 sora text-[75%] md:text-sm rounded-sm focus:outline-none"
							/>
						</section>
					</div>
					<section className="flex flex-col justify-center items-center py-4">
						<Image
							src={tireds}
							alt="tiredicon"
							className="w-24 h-24 md:w-28 md:h-28 m-auto"
						/>
						<p className="sora capitalize pt-2">
							You have not Listed any Course yet!
						</p>
						<p className="sora capitalize text-md text-[#f5cb1a] underline cursor-pointer">
							Click here to list a course now
						</p>
					</section>
				</main>
			)}
			<div className="flex flex-col justify-center items-center space-y-3 py-1 mt-10">
				<p className="sora capitalize text-2xl text-[#f5cb1a] underline">
					Join our newsletter.
				</p>
				<p className="sora capitalize text-center text-sm md:text-[100%]">
					Never miss out on our updates, freebies and news!
				</p>
				<section className="w-full sm:w-auto flex flex-row flex-wrap justify-center gap-3 p-1">
					<input
						type="text"
						className="h-12 w-full md:w-[19rem] rounded-sm bg-[#F5F5F1] outline-none sora pl-4 text-sm"
						placeholder="enter your email here"
					/>
					<Button className="w-[140px] max-md:w-[160px] h-12 text-[12px] text-white sora bg-[#f5cb1a] text-center">
						Subscribe Now
					</Button>
				</section>
			</div>
		</div>
	);
};

export default Page;
