import React, { useState } from "react";

import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";
import NoResult from "../ui/NoResult";
import Pagination from "../ui/Pagination";
import { usePagination } from "@/app/_hooks/usePagination";
import Spinner from "../ui/Spinner";

import toast from "react-hot-toast";
import Link from "next/link";
import { useGetAllCoursesQuery } from "@/app/_features/appSlices/apiSlice";
import NoListings from "../ui/NoListings";
import { formatCurrency, ShareCourse } from "@/lib/helpers";
import { useAppSelector } from "@/app/_hooks/hooks";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { HiCreditCard } from "react-icons/hi2";

const CoursesPage = ({ searchQuery, link }: any) => {
	const { from, to } = usePagination();
	const user = useAppSelector(userData);
	const [showPopup, setShowPopup] = useState(false);

	const {
		currentData: courseData,
		isFetching: isLoading,
		error,
	}: any = useGetAllCoursesQuery({});

	const courses = courseData?.data?.filter(
		(course: any) => course.visible === 1
	);
	// console.log(courses);
	// console.log(courseData);

	const searchedCourses =
		searchQuery.length > 0
			? courses?.filter((course: any) =>
					`${course?.shortname} ${course?.fullname} ${course?.summary}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: courses;

	const Courses = searchedCourses?.slice(from, to);
	const handleApplyClick = () => {
		if (!user) {
			toast("Please sign in to start learning!", { icon: "🔑" });
		}
	};

	function handleShareCourse(courseId: string) {
		const course = courses?.find((c: any) => c.id === courseId);
		ShareCourse(course, courseId);
	}

	if (isLoading) {
		return <Spinner />;
	}

	if (!isLoading && searchedCourses?.length === 0) {
		return <NoResult />;
	}
	if (
		!courses?.length ||
		courses === null ||
		(courses === undefined && !isLoading)
	) {
		return (
			<NoListings
				url="/dashboard"
				title="No courses available yet! :)"
				comment="Please check back in a while..."
				url_text="Go Home"
			/>
		);
	}

	return (
		<div>
			{/* {Courses >= 1 ? ( */}
			<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] p-2 lg:p-4">
				{searchedCourses?.length >= 1 && (
					<div className="py-4">
						<h1 className="text-[22px] mb-0  text-center md:text-3xl text-yellow-400 max-md:font-bold font-bold justify-center items-center ">
							Expert-Led Courses For You
						</h1>
					</div>
				)}

				<div className="text-sm md:text-base font-bold rounded-md border-l-4 border-t-2 border-yellow-600   p-1 my-5 w-[50%] md:w-[30%] text-center">
					<div className="shadow shadow-yellow-500 rounded p-2">
						<p>
							{searchedCourses?.length} Expert{" "}
							{searchedCourses?.length > 1 ? "courses" : "course"}
						</p>
					</div>
				</div>
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
					{Courses?.map((course: any) => (
						<div
							key={course.id}
							className="rounded-2xl border-l-8 border-t-2- border-yellow-600 h-full "
						>
							<div
								key={course.id}
								className="shadow shadow-yellow-500 p-2 md:p-3 rounded-md h-[100%] flex flex-col justify-center"
							>
								<div className="grid grid-cols-2  gap-4  ">
									<div className="flex items-center border rounded">
										<Image
											src={
												course?.thumbnail
													? `https://rosybrown-spider-442940.hostingersite.com/${course?.thumbnail}`
													: "/image/question_mark.jpg"
											}
											alt="Upload thumbnail"
											className="w-full h-[8rem] md:h-[9rem] lg:h-full rounded "
											width={90}
											height={90}
										/>
									</div>
									<div className="flex flex-col">
										<p className=" text-xs sm:text-[85%] montserrat- capitalize text-[#f5cb1a] py-0.5 ">
											{course.displayname}
										</p>
										{/* <p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
											{course.summary.split(" ").slice(0, 5).join(" ") + "..."}
										</p> */}
										<section className="flex flex-col ">
											<div className="flex flex-row items-center gap-1 text-xl">
												<HiCreditCard />
												<div className="flex flex-col">
													<p className="sora text-[65%] font-semibold">
														{formatCurrency(course?.price)}
													</p>
												</div>
											</div>
										</section>
										<section className="flex flex-row justify-between m-1 py-1 ">
											<p className=" text-xs sm:text-[85%] montserrat- capitalize text-stone-500 -text-[#f5cb1a] py-0.5 font-semibold">
												{course.course_creator_name}
											</p>
											<button
												className="w-6 h-6"
												onClick={() => handleShareCourse(course?.id)}
											>
												<Image src={share} alt="shareicon" />
											</button>
										</section>
										<section className=" border-solid border-x-black-100 py-1">
											<Link href={`/${link}/${course.id || course.course_id}`}>
												<button
													className="border w-full bg-white rounded-md font-semibold text-sm sora  text-black hover:bg-yellow-500 hover:text-white py-1.5 capitalize transition-all duration-1000"
													onClick={handleApplyClick}
												>
													Learn More
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
				<Pagination count={searchedCourses?.length} assets="courses" />
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
