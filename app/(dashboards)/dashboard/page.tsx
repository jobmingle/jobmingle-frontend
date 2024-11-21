"use client";

import React, { useEffect, useState } from "react";
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

const AccountDashboard = () => {
	const totalAppliedJobs = Jobs.filter((job) => job.stat === "Applied").length;
	const totalJObs = Jobs.length;
	const totalEnrolledCourses = CoursesList.filter(
		(course) => course.stat === "Enrolled"
	).length;
	const totalCourses = CoursesList.length;

	// Chart data (example data showing trends over time)
	const chartData = [
		{ name: "Jan", Enrolled_Courses: 1, Courses: 5, Applied_Jobs: 2, Jobs: 3 },
		{ name: "Feb", Enrolled_Courses: 3, Courses: 7, Applied_Jobs: 3, Jobs: 8 },
		{
			name: "Mar",
			Enrolled_Courses: 4,
			Courses: 10,
			Applied_Jobs: 4,
			Jobs: 10,
		},
		{
			name: "Apr",
			Enrolled_Courses: 6,
			Courses: 12,
			Applied_Jobs: 6,
			Jobs: 15,
		},

		// Add more monthly data as needed
	];

	return (
		<div className="container mx-auto md:p-9">
			{/* Cards for Total Numbers */}

			<div className="grid grid-cols-2 gap-3 md:flex  md:justify-between md:gap-6 mb-6 text-stone-200">
				<div className="w-full  h-28  border-l-4 border-t border-green-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-green-500 ">
					<div className=" w-full h-full flex flex-col justify-center pl-5 bg-green-500  rounded-lg  ">
						<p className="text-2xl">{totalEnrolledCourses}</p>
						<h3 className="text-l font-bold translate-x-6 ">
							Completed <br /> Courses
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-yellow-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-yellow-500 ">
					<div className="w-full h-full  flex flex-col justify-center pl-5 bg-yellow-500  rounded-lg  ">
						<p className="text-2xl ">{totalAppliedJobs}</p>
						<h3 className="text-l font-bold  translate-x-6">
							Applied <br /> Jobs
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-red-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-red-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-red-500  rounded-lg ">
						<p className="text-2xl">{totalJObs}</p>
						<h3 className="text-l font-bold translate-x-6">
							{" "}
							Total <br /> Jobs
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-blue-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-blue-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-blue-500  rounded-lg  ">
						<p className="text-2xl">{totalCourses}</p>
						<h3 className="text-l font-bold translate-x-6">
							Enrolled <br /> Courses
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
						<Bar dataKey="Enrolled_Courses" fill="#94d845" />
						<Bar dataKey="Courses" fill="#0c9842" />
						<Bar dataKey="Applied_Jobs" fill="#3497b2" />
						<Bar dataKey="Jobs" fill="#1848cb" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AccountDashboard;
