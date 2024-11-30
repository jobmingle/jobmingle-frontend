"use client";

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
import Loader from "@/app/_components/ui/Loader";
import { useEffect, useState } from "react";

const AccountDashboard = () => {
	const { user, isAuthenticated } = useAuth();
	const { listedJobs: jobs, fetchListedJobs, isLoading } = useJobCourse();
	const [fetchCount, setFetchCount] = useState(0);
	const maxCount = 3;

	const rejectedJobs = jobs?.filter(
		(job: any) => job.status !== "approved" && job.status !== "draft"
	).length;

	const pendingJobs = jobs?.filter((job: any) => job.status === "draft").length;
	const approvedJobs = jobs?.filter(
		(job: any) => job.status === "approved"
	).length;
	const totalJobs = jobs?.length;

	// Chart data (example data showing trends over time)
	const chartData = [
		{ name: "Sep", totalJobs, approvedJobs, pendingJobs, rejectedJobs },
		{ name: "Oct", totalJobs, approvedJobs, pendingJobs, rejectedJobs },
		{
			name: "Nov",
			totalJobs,
			approvedJobs,
			pendingJobs,
			rejectedJobs,
		},
		{
			name: "Dec",
			totalJobs,
			approvedJobs,
			pendingJobs,
			rejectedJobs,
		},

		// Add more monthly data as needed
	];

	useEffect(() => {
		fetchListedJobs();

		// eslint-disable-next-line
	}, [jobs.length]);

	return (
		<div className="container mx-auto md:p-9">
			{/* Cards for Total Numbers */}
			<div className="grid grid-cols-2 gap-3 md:flex  md:justify-between md:gap-6 mb-6 text-stone-200">
				<div className="w-full  h-28  border-l-4 border-t border-green-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-green-500 ">
					<div className=" w-full h-full flex flex-col justify-center pl-5 bg-green-500  rounded-lg  ">
						<p className="text-2xl">{approvedJobs}</p>
						<h3 className="text-l font-bold  translate-x-6 ">
							Approved <br /> Jobs
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-red-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-red-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-red-500  rounded-lg ">
						<p className="text-2xl">{rejectedJobs}</p>
						<h3 className="text-l font-bold translate-x-6 ">
							Rejected <br /> Jobs
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-blue-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-blue-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-blue-500  rounded-lg  ">
						<p className="text-2xl">{totalJobs}</p>
						<h3 className="text-l font-bold translate-x-6 ">
							{" "}
							Total <br /> Jobs
						</h3>
					</div>
				</div>
				<div className="w-full  h-28  border-l-4 border-t border-yellow-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-yellow-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-yellow-500  rounded-lg  ">
						<p className="text-2xl">{pendingJobs}</p>
						<h3 className="text-l font-bold translate-x-6 ">
							{" "}
							Pending <br /> Approval
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
						<Bar dataKey="totalJobs" fill="#94d845" />
						<Bar dataKey="approvedJobs" fill="#0c9842" />
						<Bar dataKey="pendingJobs" fill="#3497b2" />
						<Bar dataKey="rejectedJobs" fill="#1848cb" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AccountDashboard;
