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
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function AccountDashboard() {
	const [isClicked, setIsClicked] = useState(false);
	const router = useRouter();

	const { user } = useAuth();
	const {
		listedCourses: courses,
		fetchListedCourses,
		isLoading,
	} = useJobCourse();

	const totalCourses = courses?.length;
	const approvedCourses = totalCourses;
	const rejectedCourses = null;
	const totalStudents = courses
		?.map((course: any) => course.enrolled_users)
		.reduce((sum: any, total: any) => sum + total, 0);

	const chartData = [
		{
			name: "Sep",
			totalCourses,
			approvedCourses,
			rejectedCourses,
			totalStudents,
		},
		{
			name: "Oct",
			totalCourses,
			approvedCourses,
			rejectedCourses,
			totalStudents,
		},
		{
			name: "Nov",
			totalCourses,
			approvedCourses,
			rejectedCourses,
			totalStudents,
		},
		{
			name: "Dec",
			totalCourses,
			approvedCourses,
			rejectedCourses,
			totalStudents,
		},
	];

	function handleVisitCourse() {
		// setIsClicked((click) => !click);
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 200);
		router.push("/vendor-dashboard/courses");
	}

	useEffect(() => {
		// if (user?.goals === "List a course") {
		fetchListedCourses(user?.id);
		// fetchListedCourses(user?.moodle_user_id);
		// }
		// eslint-disable-next-line
	}, [courses?.length]);

	return (
		<div className="container mx-auto md:p-9">
			{/* Cards for Total Numbers */}

			<div className="grid grid-cols-2 gap-3 md:flex  md:justify-between md:gap-6 mb-6 text-stone-200">
				<div className="w-full  h-28  border-l-4 border-t border-green-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-green-500 ">
					<div className=" w-full h-full flex flex-col justify-center pl-5 bg-green-500  rounded-lg  ">
						<p className="text-2xl">{approvedCourses}</p>
						<h3 className="text-l font-bold translate-x-6 ">
							Approved Courses
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-yellow-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-yellow-500 ">
					<div className="w-full h-full  flex flex-col justify-center pl-5 bg-yellow-500  rounded-lg  ">
						<p className="text-2xl ">{totalCourses}</p>
						<h3 className="text-l font-bold translate-x-6">
							Total <br /> Courses
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-blue-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-blue-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-blue-500  rounded-lg  ">
						<p className="text-2xl">{totalStudents}</p>
						<h3 className="text-l font-bold translate-x-6">
							Total <br /> Students
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-red-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-red-500 ">
					<div
						className={`w-full h-full flex flex-col justify-center pl-5 bg-red-500 hover:translate-x-3- hover:-skew-x-2- translate-x-2- cursor-pointer rounded-lg ${
							isClicked && "-skew-x-3 "
						}`}
						onClick={handleVisitCourse}
					>
						<p className="text-2xl">{rejectedCourses}</p>
						<h3 className="text-l font-bold translate-x-6"> Visit Courses</h3>
					</div>
				</div>
			</div>

			{/* Bar Chart */}
			<div className="w-full h-96 mt-[10%] ">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="totalCourses" fill="#94d845" />
						<Bar dataKey="approvedCourses" fill="#0c9842" />
						<Bar dataKey="rejectedCourses" fill="#3497b2" />
						<Bar dataKey="totalStudents" fill="#1848cb" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default AccountDashboard;
