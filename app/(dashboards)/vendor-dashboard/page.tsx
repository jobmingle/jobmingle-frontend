"use client";
import React from "react";
import { CoursesList } from "@/lib/_exportLinks";
import { Jobs } from "@/lib/_exportLinks";
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function AccountDashboard() {
	// async function AccountDashboard() {
	// const data = await fetch(`${BASE_URL}/moodle/getallcourses`);
	// const courses = await data.json();
	// console.log(courses);

	const chartData = [
		{
			name: "Jan",
			Listed_Courses: 2,
			Approved_Courses: 2,
			Rejected_Courses: 0,
			Total_Students: 100,
		},
		{
			name: "Feb",
			Listed_Courses: 3,
			Approved_Courses: 2,
			Rejected_Courses: 1,
			Total_Students: 300,
		},
		{
			name: "Mar",
			Listed_Courses: 5,
			Approved_Courses: 4,
			Rejected_Courses: 1,
			Total_Students: 600,
		},
		{
			name: "Apr",
			Listed_Courses: 2,
			Approved_Courses: 2,
			Rejected_Courses: 0,
			Total_Students: 800,
		},
	];

	const totalCourses = CoursesList.length;
	const totalEnrolledCourses = CoursesList.filter(
		(course) => course.stat === "Enrolled"
	).length;
	// const totalApprovedCourses = Number(totalCourses - totalEnrolledCourses);
	const totalApprovedCourses = chartData
		.map((data) => data.Approved_Courses)
		.reduce((sum, total) => sum + total, 0);
	const totalRejectedCourses = chartData
		.map((data) => data.Rejected_Courses)
		.reduce((sum, total) => sum + total, 0);
	const totalStudents = chartData
		.map((data) => data.Total_Students)
		.reduce((sum, total) => sum + total, 0);

	return (
		<div className="container mx-auto md:p-9">
			{/* Cards for Total Numbers */}

			<div className="grid grid-cols-2 gap-3 md:flex  md:justify-between md:gap-6 mb-6 text-stone-200">
				<div className="w-full  h-28  border-l-4 border-t border-yellow-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-yellow-500 ">
					<div className="w-full h-full  flex flex-col justify-center pl-5 bg-yellow-500  rounded-lg  ">
						<p className="text-2xl ">{totalCourses}</p>
						<h3 className="text-l font-bold translate-x-6">
							Total <br /> Courses
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-green-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-green-500 ">
					<div className=" w-full h-full flex flex-col justify-center pl-5 bg-green-500  rounded-lg  ">
						<p className="text-2xl">{totalApprovedCourses}</p>
						<h3 className="text-l font-bold translate-x-6 ">
							Approved Courses
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-red-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-red-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-red-500  rounded-lg ">
						<p className="text-2xl">{totalRejectedCourses}</p>
						<h3 className="text-l font-bold translate-x-6">
							{" "}
							Rejected Courses
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
						<Bar dataKey="Listed_Courses" fill="#94d845" />
						<Bar dataKey="Approved_Courses" fill="#0c9842" />
						<Bar dataKey="Rejected_Courses" fill="#3497b2" />
						<Bar dataKey="Total_Students" fill="#1848cb" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default AccountDashboard;
