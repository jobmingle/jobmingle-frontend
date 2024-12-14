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

import Loader from "@/app/_components/ui/Loader";
import { useEffect, useState } from "react";
import { useGetListedJobsQuery } from "@/app/_features/appSlices/apiSlice";

const AccountDashboard = () => {
	const {
		currentData: jobsData,
		isFetching: isLoading,
		refetch: refetchJobs,
		error,
	}: any = useGetListedJobsQuery({});
	const jobs = jobsData?.data;

	const rejectedJobs = jobs?.filter(
		(job: any) => job.status === "rejected"
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
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="totalJobs" fill="#3b82fc" radius={[5, 5, 0, 0]} />
						<Bar dataKey="approvedJobs" fill="#22c55e" radius={[5, 5, 0, 0]} />
						<Bar dataKey="pendingJobs" fill="#eab308" radius={[5, 5, 0, 0]} />
						<Bar dataKey="rejectedJobs" fill="#dc2626" radius={[5, 5, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AccountDashboard;
