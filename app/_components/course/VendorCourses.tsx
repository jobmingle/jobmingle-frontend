import React, { useEffect, useState } from "react";
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
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import { useGetListedCoursesQuery } from "@/app/_features/appSlices/apiSlice";
import { HiAcademicCap, HiCreditCard, HiUsers } from "react-icons/hi2";
import { formatCurrency } from "@/lib/helpers";

const VendorCourses = ({ searchQuery, link }: any) => {
	const { from, to } = usePagination();
	const user = useAppSelector(userData);
	const userId = user?.id;
	const [showPopup, setShowPopup] = useState(false);

	const {
		currentData: courseData,
		isFetching,
		isLoading,
	}: any = useGetListedCoursesQuery(userId, {
		// pollingInterval: 3000,
		refetchOnMountOrArgChange: true,
		skip: false,
	});
	const courses = courseData?.data?.courses;

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
			toast("Please sign in to continue your learning!", { icon: "🔑" });
		}
	};

	if (isFetching && !courses) {
		return <Spinner />;
	}

	if (!isLoading && courses?.length === 0) {
		return (
			<NoListings
				url="/vendor-dashboard/list-course"
				title="You have not listed any course yet! :)"
				comment="List a course to continue..."
				url_text="List a course"
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
				<div className="text-sm md:text-base font-bold rounded-md border-l-4 border-t-2 border-yellow-600   p-1 mb-5 w-[50%] md:w-[30%] text-center">
					<div className="shadow shadow-yellow-500 rounded p-2">
						<p>
							{searchedCourses?.length}{" "}
							{searchedCourses?.length > 1 ? "courses" : "course"} listed!
						</p>
					</div>
				</div>
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
					{Courses?.map((course: any) => (
						<div
							key={course?.id}
							className="rounded-2xl border-l-8 border-t-2- border-yellow-600 h-full "
						>
							<div className="shadow shadow-yellow-500 p-2 md:p-3 rounded-md h-[100%] flex flex-col justify-center">
								<div key={course.id} className="grid grid-cols-2  gap-4  ">
									<section className="flex items-center">
										<Image
											src="/image/break-bank.jpg"
											alt="company-icon"
											className="w-full h-[8rem] md:h-[9rem] lg:h-full rounded"
											width={90}
											height={90}
										/>
									</section>
									<div key={course?.id} className="flex flex-col">
										{/* <p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">
											{course.shortname}
										</p> */}
										<p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
											{course.fullname}
										</p>

										<section className="flex flex-col w-full"></section>
										<div className="flex flex-row items-center gap-1 text-xl">
											<HiCreditCard />
											<div className="flex flex-col">
												<p className="sora text-[65%] font-semibold">
													{formatCurrency(course?.price)}
												</p>
											</div>
										</div>
										<section className="flex flex-row justify-between m-1 py-1 ">
											<div className="flex  gap-2 justify-center items-center text-stone-600 capitalize text-sm montserrat font-bold">
												{/* {course.enrolled_users > 1 ? "students" : "student"} ({" "} */}
												<HiAcademicCap className="text-xl" />
												<p>( {course.enrolled_users} )</p>
											</div>
											<button className="w-6 h-6">
												<Image src={share} alt="shareicon" />
											</button>
										</section>
										<section className=" border-solid border-x-black-100 py-1">
											<Link href={`/${link}/${course.id || course.course_id}`}>
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

export default VendorCourses;
