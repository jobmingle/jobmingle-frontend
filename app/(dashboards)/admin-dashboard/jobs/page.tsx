"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import love from "@/public/Heart.png";
import share from "@/public/Icon.png";
import tired from "@/public/discord.png";

// Define the type for a job
type Job = {
	id: number;
	icon: StaticImageData;
	platform: string;
	jobTitle: string;
	location: string;
	pricerange: string;
	description: string;
	createdTime: string;
	approved: boolean;
};

// Dummy job data
const initialJobs: Job[] = [
	{
		id: 1,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assistance",
		location: "Remote",
		pricerange: "$15-$25",
		description: "Assist with administrative tasks.",
		createdTime: "2024-08-30",
		approved: false,
	},
	{
		id: 2,
		icon: tired,
		platform: "Figma",
		jobTitle: "UI Designer",
		location: "Remote",
		pricerange: "$40-$85",
		description: "Design user interfaces.",
		createdTime: "2024-08-29",
		approved: false,
	},
	{
		id: 3,
		icon: tired,
		platform: "Discord",
		jobTitle: "Moderator",
		location: "Uyo, Nigeria",
		pricerange: "$15-$25",
		description: "Moderate Discord channels.",
		createdTime: "2024-08-28",
		approved: false,
	},
];

const Joblist = ({ isAdmin }: { isAdmin: boolean }) => {
	const [jobs, setJobs] = useState<Job[]>(initialJobs);
	const [deletedJobs, setDeletedJobs] = useState<Job[]>([]);
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const totalTarget = 10;

	const openModal = (job: Job) => {
		setSelectedJob(job);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedJob(null);
	};

	const deleteJob = (id: number) => {
		const jobToDelete = jobs.find((job) => job.id === id);
		if (jobToDelete) {
			setDeletedJobs([...deletedJobs, jobToDelete]);
			setJobs(jobs.filter((job) => job.id !== id));
		}
	};

	const approveJob = (id: number) => {
		setJobs(
			jobs.map((job) =>
				job.id === id ? { ...job, approved: !job.approved } : job
			)
		);
	};

	const progressData = [
		{ name: "Job Listings", value: jobs.length },
		{
			name: "Remaining Target",
			value: totalTarget - jobs.length,
		},
	];

	return (
		<div className="container mx-auto p-6">
			<div className="flex flex-col lg:flex-row gap-6 mb-12">
				{/* Overview Section */}
				<div className="bg-gray-100 rounded-lg p-6 shadow-lg flex-1 lg:h-[7rem]">
					<h3 className="text-2xl font-semibold text-gray-700 mb-2">
						Job Listings Overview
					</h3>
					<p className="text-gray-600 mb-4">Number of Jobs: {jobs.length}</p>
				</div>

				{/* Approved Jobs Section */}
				<div
					className="bg-green-100 p-6 rounded-lg shadow-lg flex-1"
					style={{ height: "35%", width: "70%" }}
				>
					<h3 className="text-xl font-semibold text-green-700">
						Approved Jobs
					</h3>
					<p className="text-green-600 text-2xl">
						{jobs.filter((job) => job.approved).length} Approved
					</p>
				</div>

				{/* Deleted Count Section */}
				<div
					className="bg-blue-100 p-6 rounded-lg shadow-lg flex-1"
					style={{ height: "35%", width: "50%" }}
				>
					<h3 className="text-xl font-semibold text-blue-700">Deleted Job</h3>
					<p className="text-blue-600 text-2xl">{deletedJobs.length} Deleted</p>
				</div>
			</div>

			{/* Job Cards Section */}
			<section className="flex flex-row flex-wrap gap-6 justify-between mb-12">
				{jobs.map((job) => (
					<div
						key={job.id}
						className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-[30%] transition transform hover:scale-105 hover:shadow-2xl"
						onClick={() => openModal(job)}
					>
						<div className="mb-4 flex items-center">
							<Image src={job.icon} alt="company-icon" className="w-10 h-10" />
							<p className="text-lg font-semibold capitalize ml-3 text-gray-700">
								{job.platform}
							</p>
						</div>
						<p className="font-semibold text-2xl capitalize text-gray-800 mb-2">
							{job.jobTitle}
						</p>
						<p className="text-lg text-gray-600 mb-2">{job.location}</p>
						<p className="text-2xl font-bold text-yellow-500">
							{job.pricerange}
						</p>
						<div className="flex justify-between items-center mt-4">
							{isAdmin && (
								<>
									<button
										className={`${
											job.approved ? "bg-green-500" : "bg-gray-300"
										} text-white font-semibold px-4 py-2 rounded-md transition-colors`}
										onClick={(e) => {
											e.stopPropagation();
											approveJob(job.id);
										}}
									>
										{job.approved ? "Approved" : "Approve"}
									</button>
									<button
										className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
										onClick={(e) => {
											e.stopPropagation();
											deleteJob(job.id);
										}}
									>
										Delete
									</button>
								</>
							)}
							<div className="flex gap-3">
								<button className="w-8 h-8">
									<Image src={love} alt="love icon" />
								</button>
								<button className="w-8 h-8">
									<Image src={share} alt="share icon" />
								</button>
							</div>
						</div>
					</div>
				))}
			</section>

			{/* Bar Chart Section */}
			<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
				<h3 className="text-lg font-semibold mb-4">Progress Overview</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={progressData} barSize={20}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="value" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Job Details Modal */}
			{isModalOpen && selectedJob && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-1/3 relative border border-gray-200">
						<button
							className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
							onClick={closeModal}
						>
							&times;
						</button>
						<h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">
							{selectedJob.jobTitle}
						</h2>
						<p className="text-lg text-gray-700 mb-2">
							<strong>Platform:</strong> {selectedJob.platform}
						</p>
						<p className="text-lg text-gray-700 mb-2">
							<strong>Location:</strong> {selectedJob.location}
						</p>
						<p className="text-lg text-gray-700 mb-2">
							<strong>Price Range:</strong> {selectedJob.pricerange}
						</p>
						<p className="text-lg text-gray-700 mb-4">
							<strong>Description:</strong> {selectedJob.description}
						</p>
						<p className="text-lg text-gray-700 mb-4">
							<strong>Created Time:</strong> {selectedJob.createdTime}
						</p>
						<div className="flex justify-end">
							{isAdmin && (
								<button
									className={`${
										selectedJob.approved ? "bg-green-500" : "bg-gray-300"
									} text-white font-semibold px-4 py-2 rounded-md mr-2`}
									onClick={() => approveJob(selectedJob.id)}
								>
									{selectedJob.approved ? "Approved" : "Approve"}
								</button>
							)}
							<button
								className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
								onClick={closeModal}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Joblist;
