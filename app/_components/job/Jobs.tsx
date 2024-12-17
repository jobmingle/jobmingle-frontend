import React, { Suspense, useState } from "react";
import Image from "next/image";

import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
// import { Jobs } from "@/lib/_exportLinks";
import { Content, PopupContainer, Overlay } from "./styles";
import NoResult from "../ui/NoResult";
import { usePagination } from "@/app/_hooks/usePagination";
import Pagination from "../ui/Pagination";
import { formatCurrency, ShareJob, timeAgo } from "@/lib/helpers";
import Link from "next/link";

import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";

import { useGetAllJobsQuery } from "@/app/_features/appSlices/apiSlice";
import NoListings from "../ui/NoListings";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import { useAppSelector } from "@/app/_hooks/hooks";

function JobsPage({ searchQuery, link }: any) {
	const user = useAppSelector(userData);

	const { from, to } = usePagination();

	const [showPopup, setShowPopup] = useState(false);

	const {
		currentData: jobsData,
		isFetching: isLoading,
		error,
	}: any = useGetAllJobsQuery({});

	const jobs = jobsData?.data?.filter((job: any) => job.status === "approved");

	const searchedJobs =
		searchQuery?.length > 0
			? jobs?.filter((job: any) =>
					`${job.job_type} ${job.job_role} ${job.job_description} `
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: jobs;

	const Jobs = searchedJobs?.slice(from, to);
	// const Jobs = Array.isArray(searchedJobs) ? searchedJobs.slice(from, to) : [];

	function handleShareJob(jobId: string) {
		const job = jobs?.find((c: any) => c.id === jobId);
		ShareJob(job, jobId);
	}

	const handleApplyClick = () => {
		if (!user) {
			toast("Please sign in to see job apllication details!", { icon: "🔑" });
			// return;
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	if (!isLoading && searchedJobs?.length === 0) {
		return <NoResult />;
	}

	if (!jobs?.length || jobs === undefined || (jobs === null && !isLoading)) {
		return (
			<NoListings
				url="/dashboard"
				title="No jobs available yet! :)"
				comment="Please check back in a while..."
				url_text="Go Home"
			/>
		);
	}

	return (
		<Content>
			{searchedJobs?.length >= 1 && (
				<div className="head text-yellow-400 mt-5">
					<h1 className="head__big"> Find your dream job here</h1>
				</div>
			)}

			<div className="text-sm md:text-base font-bold rounded-md border-l-4 border-t-2 border-yellow-600   p-1 my-8 w-[50%] md:w-[30%] text-center">
				<div className="shadow shadow-yellow-500 rounded p-2">
					<p>
						{searchedJobs?.length} Top{" "}
						{searchedJobs?.length > 1 ? "jobs" : "job"} for you!
					</p>
				</div>
			</div>

			<div className="box">
				{Jobs?.map((job: any) => (
					<div
						key={job.id}
						className="rounded-3xl border-l-8 border-t-2- border-yellow-600  h-full"
					>
						<div className="card relative bg-white  shadow transition transform hover:scale-105 hover:shadow-2xl  shadow-yellow-500 p-2 md:p-3 rounded-md ">
							<div className="head">
								<div className="logo">
									<Image
										alt="jobmingle"
										src="/image/logo.png"
										width={90}
										height={90}
										className="image"
									/>
								</div>
								<div className="txt">
									<h2 className="big">{job.company_name}</h2>
									{/* <h2 className="big">{job.platform}</h2> */}

									<p className="small">{job.job_type}</p>
								</div>
							</div>
							<div className="txt-1 flex items-center-  gap-5">
								<h2 className="big-1">Job Title:</h2>
								<span className="big-1">{job.job_role}</span>
							</div>
							{/* <div className="txt-2 flex gap-5 items-center-">
								<h2 className="big-1">Description:</h2>
								<span className="small">{job.job_description}</span>
							</div> */}
							{/* <div className="txt-2 flex gap-5 items-center-">
								<h2 className="big-1">Task:</h2>
								<span className="small">{job.job_responsibilities}</span>
							</div> */}
							<div className="txt-2 flex gap-5 items-center-">
								<h2 className="big-1">Salary:</h2>
								<span className="small">{formatCurrency(job.salary)}</span>
							</div>

							<div className="txt-2 flex gap-5 items-center-">
								<h2 className="big-1">Posted:</h2>
								<p className="small">{timeAgo(job.created_at)}</p>
							</div>

							<section className="flex flex-row justify-end gap-3 m-1 py-1 ">
								{/* <button className="w-5 h-5  ">
									<Image src={love} alt="loveicon" />
								</button> */}
								<button
									className="w-5 h-5 "
									onClick={() => handleShareJob(job?.id)}
								>
									<Image src={share} alt="shareicon" />
								</button>
							</section>

							<div className="txt-3 flex items-center justify-end">
								{/* <button className="btn" onClick={handleApplyClick}>
									View Job
									</button> */}
								<Link href={`/${link}/${job.id}`}>
									<button className="btn" onClick={() => handleApplyClick()}>
										{/* <Link href={`/employer-dashboard/jobs/job/${job?.id}`}> */}
										More
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<br />
			{/* {searchedJobs.length === 0 && <NoResult />} */}

			{isLoading ? null : (
				<Pagination count={searchedJobs?.length} assets="jobs" />
			)}
		</Content>
	);
}

export default JobsPage;
