"use client";
import React from "react";
import tiredicon from "@/public/image/tiredicon.png";
import profilepic from "@/public/image/ceo.jpeg";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";
import { CoursesList } from "@/lib/_exportLinks";
import Pagination from "@/app/_components/ui/Pagination";
import { usePagination } from "@/app/_hooks/usePagination";

//

const Page = () => {
	const { from, to } = usePagination();
	let Courses = 1;
	const courses = CoursesList.slice(from, to);

	return (
		<div>
			{Courses >= 1 ? (
				<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] p-2 lg:p-4">
					<div className="flex flex-row py-4 items-center justify-between ">
						<h1 className="text-4xl mb-0  max-md:text-center max-md:text-3xl text-yellow-400 max-md:font-bold font-bold justify-center items-center">
							View list of courses!
						</h1>
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<Image
								src={profilepic}
								alt="user_profile_pic"
								className="w-full h-full object-fill object-center "
							/>
						</div>
					</div>
					<div className="w-full py-4 flex row justify-center">
						<input
							type="text"
							className="border-[1px] border-solid border-yellow-400 pl-4 sora w-[23rem] h-[2.6rem] text-sm rounded-md focus:outline-none"
							placeholder="Browse Courses..."
						/>
					</div>

					<section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
						{courses.map((course) => (
							<div key={course.id} className="border p-2 md:p-3 rounded-md">
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
								<p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
									{course.des}
								</p>
								<section className="flex flex-row justify-between">
									<div className="flex flex-row items-center gap-1">
										<Image
											src={tiredicon}
											alt="tiredicon"
											className="w-7 h-7"
										/>
										<div className="flex flex-col">
											<p className="sora text-xs font-bold capitalize text-blue-900">
												prosper
											</p>
											<p className="sora text-[65%] font-semibold">
												15 Lessons
											</p>
										</div>
									</div>
									<p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">
										Enrolled
									</p>
								</section>
								<section className="border-b-[2px] border-solid border-x-black-100 py-1">
									<button className="border w-full bg-[#113DAE] rounded-md text-white py-1.5 capitalize">
										resume course
									</button>
								</section>
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
					<Pagination count={CoursesList.length} />
				</main>
			) : (
				<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid mt-10 p-2">
					<section className="flex flex-col justify-center items-center py-4">
						<Image
							src={tiredicon}
							alt="tiredicon"
							className="w-24 h-24 md:w-28 md:h-28 m-auto"
						/>
						<p className="sora capitalize pt-2 ">
							you have not paid for any course yet!
						</p>
						<p className="sora capitalize text-md text-[#f5cb1a] underline">
							click here to see courses now!
						</p>
					</section>
					<br />
				</main>
			)}
		</div>
	);
};

export default Page;
