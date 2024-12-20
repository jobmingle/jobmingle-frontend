import React, { useState } from "react";
import tiredicon from "@/public/image/tiredicon.png";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";
import NoResult from "../ui/NoResult";
import Pagination from "../ui/Pagination";
import { usePagination } from "@/app/_hooks/usePagination";
import Spinner from "../ui/Spinner";

import toast from "react-hot-toast";
import Link from "next/link";
import NoListings from "../ui/NoListings";
import { useGetEnrolledCoursesQuery } from "@/app/_features/appSlices/apiSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import { user as userData } from "@/app/_features/appSlices/userSlice";

const MyCourses = ({ searchQuery, link }: any) => {
	const { from, to } = usePagination();
	// const [showPopup, setShowPopup] = useState(false);

	const user = useAppSelector(userData);
	const userId = user?.id;
	const {
		currentData: courses,
		isFetching,
		isLoading,
	} = useGetEnrolledCoursesQuery(userId, {
		// pollingInterval: 3000,
		refetchOnMountOrArgChange: true,
		skip: false,
	});

	// console.log("STUDENT COURSES:", courses);
	const searchedCourses =
		searchQuery?.length > 0
			? courses?.filter((course: any) =>
					`${course?.shortname} ${course?.fullname} ${course?.summary}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: courses;

	const Courses = searchedCourses?.slice(from, to);
	const handleApplyClick = () => {
		if (!user) {
			toast("Please sign in to continue your learning!", { icon: "🔑" });
		}
	};

	if (isFetching && !courses) {
		return <Spinner />;
	}

	if (!isLoading && courses?.length === 0) {
		return (
			<NoListings
				url="/dashboard/courses"
				title="You have not enrolled for any course yet! :)"
				comment="Enroll for a course to continue learning..."
				url_text="Checkout available courses"
			/>
		);
	}

	if (!isLoading && searchedCourses?.length === 0) {
		return <NoResult />;
	}

	return (
		<div>
			{/* {Courses >= 1 ? ( */}
			<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] p-2 lg:p-4">
				{searchedCourses?.length >= 1 && (
					<div className="py-4">
						<h1 className="text-2xl mb-0  text-center md:text-3xl- text-yellow-400 max-md:font-bold font-bold justify-center items-center ">
							My Learning
						</h1>
					</div>
				)}

				<div className="text-sm md:text-base font-bold rounded-md border-l-4 border-t-2 border-yellow-600   p-1 mb-5 w-[50%] md:w-[30%] text-center">
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
							<div className="shadow shadow-yellow-500 p-2 md:p-3 rounded-md h-[100%] flex flex-col justify-center">
								<div key={course.id} className="grid grid-cols-2  gap-4  ">
									<div className="flex items-center border rounded">
										<Image
											src={
												course?.thumbnail
													? `https://rosybrown-spider-442940.hostingersite.com/${course?.thumbnail}`
													: "/image/question_mark.jpg"
											}
											alt="company-icon"
											className="w-full h-[8rem] md:h-[9rem] lg:h-full rounded"
											width={90}
											height={90}
										/>
									</div>
									<div className="flex flex-col">
										<p className=" text-xs sm:text-[85%]  capitalize text-[#f5cb1a] py-0.5 ">
											{course.displayname}
										</p>
										<p className=" text-xs sm:text-[80%] md:text-[85%] sora text-gray-500 pb-2 tracking-wide">
											{course.summary.split(" ").slice(0, 7).join(" ") + "..."}
										</p>

										<section className="flex flex-row justify-between">
											<div className="flex flex-row items-center gap-1"></div>
										</section>
										<section className="flex flex-row justify-between m-1 py-1 ">
											<p className="text-sm font-bold">
												{" "}
												{course?.course_creator_name}
											</p>
											<button className="w-6 h-6">
												<Image src={share} alt="shareicon" />
											</button>
										</section>
										<section className=" border-solid border-x-black-100 py-1">
											<Link href={`/${link}/${course.id}`}>
												<button
													className="border w-full bg-white rounded-md font-semibold text-sm  sora  text-black hover:bg-yellow-500 hover:text-white py-1.5 capitalize transition-all duration-1000"
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
				{/* {searchedCourses.length === 0 && <NoResult />} */}
				<Pagination count={searchedCourses?.length} assets="courses" />
			</main>
		</div>
	);
};

export default MyCourses;
