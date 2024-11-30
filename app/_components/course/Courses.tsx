import React, { useState } from "react";
import tiredicon from "@/public/image/tiredicon.png";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";
import { CoursesList } from "@/lib/_exportLinks";
import NoResult from "../ui/NoResult";
import Pagination from "../ui/Pagination";
import { usePagination } from "@/app/_hooks/usePagination";
import Spinner from "../ui/Spinner";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import toast from "react-hot-toast";
import Link from "next/link";

const CoursesPage = ({ searchQuery, link }: any) => {
	const { from, to } = usePagination();
	const { user } = useAuth();

	const { courses, isLoading, handleShareCourse } = useJobCourse();
	//   const { isLoggedIn } = useAuth();
	const [showPopup, setShowPopup] = useState(false);

	const searchedCourses =
		searchQuery.length > 0
			? courses?.filter((course: any) =>
					`${course?.shortname} ${course?.fullname} ${course?.summary}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: courses;

	const Courses = searchedCourses.slice(from, to);
	const handleApplyClick = () => {
		if (!user) {
			toast("Please sign in to continue your learning!", { icon: "🔑" });
		}
	};

	if (!courses.length || isLoading) {
		return <Spinner />;
	}

	if (!isLoading && searchedCourses.length === 0) {
		return <NoResult />;
	}

	return (
		<div>
			{/* {Courses >= 1 ? ( */}
			<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] p-2 lg:p-4">
				{searchedCourses.length >= 1 && (
					<div className="py-4">
						<h1 className="text-2xl mb-0  text-center md:text-3xl text-yellow-400 max-md:font-bold font-bold justify-center items-center ">
							Expert-Led Courses For You
						</h1>
					</div>
				)}

				<div className="text-sm md:text-base font-bold rounded-md border-l-4 border-t-2 border-yellow-600   p-1 mb-5 w-[50%] md:w-[30%] text-center">
					<div className="shadow shadow-yellow-500 rounded p-2">
						<p>
							{searchedCourses.length} Expert{" "}
							{searchedCourses.length > 1 ? "courses" : "course"}
						</p>
					</div>
				</div>
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
					{Courses.map((course: any) => (
						<div
							key={course.id}
							className="rounded-2xl border-l-8 border-t-2- border-yellow-600 h-full "
						>
							<div
								key={course.id}
								className="shadow shadow-yellow-500 p-2 md:p-3 rounded-md h-[100%] flex flex-col justify-center"
							>
								<div className="grid grid-cols-2  gap-4  ">
									<section className="flex items-center">
										<Image
											src="/image/break-bank.jpg"
											alt="company-icon"
											className="w-full h-[8rem] md:h-[9rem] lg:h-full rounded"
											width={90}
											height={90}
										/>
									</section>
									<div className="flex flex-col">
										<p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
											{course.course_creator_name}
										</p>
										<p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
											{course.displayname}
										</p>
										<p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
											{course.summary.split(" ").slice(0, 5).join(" ") + "..."}
										</p>
										<section className="flex flex-row justify-between">
											<div className="flex flex-row items-center gap-1">
												{/* <Image src={tiredicon} alt="tiredicon" className="w-7 h-7" />
									<div className="flex flex-col">
										<p className="sora text-xs font-bold capitalize text-blue-900">
											prosper
											</p>
											<p className="sora text-[65%] font-semibold">15 Lessons</p>
											</div> */}
											</div>
											<p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">
												Not Enrolled
											</p>
										</section>
										<section className="flex flex-row justify-between m-1 py-1 ">
											<button className="w-6 h-6">
												<Image src={love} alt="loveicon" />
											</button>
											<button
												className="w-6 h-6"
												onClick={() => handleShareCourse(course?.id)}
											>
												<Image src={share} alt="shareicon" />
											</button>
										</section>
										<section className=" border-solid border-x-black-100 py-1">
											<Link href={`/${link}/${course.id || course.id}`}>
												<button
													className="border w-full bg-white rounded-md font-bold  text-black hover:bg-yellow-500 hover:text-white py-1.5 capitalize transition-all duration-1000"
													onClick={handleApplyClick}
												>
													More
												</button>
											</Link>
										</section>
									</div>
								</div>
							</div>
						</div>
					))}
				</section>
				<br />
				{/* {searchedCourses.length === 0 && <NoResult />} */}
				<Pagination count={searchedCourses.length} assets="courses" />
			</main>
			{/* ) : (
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
			)} */}
		</div>
	);
};

export default CoursesPage;
