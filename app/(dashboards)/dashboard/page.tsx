"use client";

import React, { useEffect, useState } from "react";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import {
	useGetAllCoursesQuery,
	useGetAllJobsQuery,
	useGetEnrolledCoursesQuery,
} from "@/app/_features/appSlices/apiSlice";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import { useRouter } from "next/navigation";

const AccountDashboard = () => {
	const [isClicked, setIsClicked] = useState(false);
	const router = useRouter();

	const { currentData: jobsData, error }: any = useGetAllJobsQuery({});
	const jobs = jobsData?.data;

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

	const appliedJobs = jobs?.filter((job: any) => job.stat === "Applied").length;
	const totalJobs = jobs?.length;
	const enrolledCourses = courses?.length;
	const finishedCourses = courses?.filter(
		(course: any) => course.status === "Completed"
	).length;
	const certifications = courses?.filter(
		(course: any) => course.status === "Completed"
	).length;

	function handleVisitCourse() {
		// setIsClicked((click) => !click);
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 200);
		router.push("/dashboard/my-learning");
	}

	// Chart data (example data showing trends over time)
	const chartData = [
		{
			name: "Sep",
			enrolledCourses,
			finishedCourses,
			totalJobs,
			certifications,
		},
		{
			name: "Oct",
			enrolledCourses,
			finishedCourses,
			totalJobs,
			certifications,
		},
		{
			name: "Nov",
			enrolledCourses,
			finishedCourses,
			totalJobs,
			certifications,
		},
		{
			name: "Dec",
			enrolledCourses,
			finishedCourses,
			totalJobs,
			certifications,
		},

		// Add more monthly data as needed
	];

	return (
		<div className="container mx-auto md:p-9">
			{/* Cards for Total Numbers */}

			<div className="grid grid-cols-2 gap-3 md:flex  md:justify-between md:gap-6 mb-6 text-stone-200">
				<div className="w-full  h-28  border-l-4 border-t border-yellow-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-yellow-500 ">
					<div
						className={`w-full h-full flex flex-col justify-center pl-5 bg-yellow-500  rounded-lg ${
							isClicked && "-skew-x-3 "
						} `}
						onClick={handleVisitCourse}
					>
						<p className="text-2xl">{enrolledCourses}</p>
						<h3 className="text-l font-bold translate-x-6 ">
							Enrolled <br />
							{enrolledCourses <= 1 ? "Course" : " Courses"}
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-green-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-green-500 ">
					<div className="w-full h-full  flex flex-col justify-center pl-5 bg-green-500  rounded-lg  ">
						<p className="text-2xl ">{finishedCourses}</p>
						<h3 className="text-l font-bold  translate-x-6">
							Finished <br /> Courses
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-blue-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-blue-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-blue-500  rounded-lg  ">
						<p className="text-2xl">{certifications}</p>
						<h3 className="text-md font-bold translate-x-4">Certifications</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-red-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-red-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-red-500  rounded-lg ">
						<p className="text-2xl">{totalJobs}</p>
						<h3 className="text-mdradius={[5, 5, 0, 0]}  font-bold translate-x-6">
							Jobs
						</h3>
					</div>
				</div>
			</div>

			{/* Bar Chart */}
			<div className="w-full h-96 mt-[10%] ">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={chartData}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="enrolledCourses"
							fill="#eab308"
							radius={[5, 5, 0, 0]}
						/>
						<Bar
							dataKey="finishedCourses"
							fill="#22c55e"
							radius={[5, 5, 0, 0]}
						/>
						<Bar dataKey="totalJobs" fill="#dc2626" radius={[5, 5, 0, 0]} />
						<Bar
							dataKey="certifications"
							fill="#3b82fc"
							radius={[5, 5, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AccountDashboard;
