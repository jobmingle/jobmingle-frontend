"use client";

import React, { useState } from "react";
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
	// const chartData = [
	// 	{ name: "Jan", Vendors: 3, Employees: 5, Students: 2 },
	// 	{ name: "Feb", Vendors: 2, Employees: 4, Students: 3 },
	// 	{ name: "Mar", Vendors: 5, Employees: 6, Students: 4 },
	// 	// Add more monthly data as needed
	// ];

	return (
		<div className="container mx-auto md:p-9">
			{/* Cards for Total Numbers */}
			<div className="grid grid-cols-2 gap-3 md:flex  md:justify-between md:gap-6 mb-6">
				<div className="w-full p-4 bg-blue-600 text-white rounded-lg">
					<h3 className="text-xl font-bold"> Enrolled Courses</h3>
					<p className="text-3xl">{totalEnrolledCourses}</p>
				</div>
				<div className="w-full p-4 bg-green-600 text-white rounded-lg">
					<h3 className="text-xl font-bold">Total Courses</h3>
					<p className="text-3xl">{totalCourses}</p>
				</div>
				<div className="w-full p-4 bg-yellow-600 text-white rounded-lg">
					<h3 className="text-xl font-bold"> Applied Jobs</h3>
					<p className="text-3xl">{totalAppliedJobs}</p>
				</div>
				<div className="w-full p-4 bg-red-600 text-white rounded-lg">
					<h3 className="text-xl font-bold">Total Jobs</h3>
					<p className="text-3xl">{totalJObs}</p>
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
