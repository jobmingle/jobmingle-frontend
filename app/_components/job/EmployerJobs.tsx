import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import tiredicon from "@/public/image/tiredicon.png";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
// import { Jobs } from "@/lib/_exportLinks";
import { Content, PopupContainer, Overlay } from "./styles";
import NoResult from "../ui/NoResult";
import { usePagination } from "@/app/_hooks/usePagination";
import Pagination from "../ui/Pagination";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import { formatCurrency, timeAgo } from "@/lib/helpers";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import NoListings from "../ui/NoListings";

// const JobsPage = async ({ searchQuery }: any) => {
function JobsPage({ searchQuery, link }: any) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { jobs, listedJobs, fetchListedJobs, isLoading } = useJobCourse();
	const { user } = useAuth();
	const { from, to } = usePagination();

	// console.log(listedJobs);
	const searchedJobs =
		searchQuery.length > 0
			? listedJobs?.filter((job: any) =>
					`${job.job_type} ${job.job_role} ${job.job_description} `
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: listedJobs;

	const Jobs = searchedJobs?.slice(from, to);
	// const Jobs = Array.isArray(searchedJobs) ? searchedJobs.slice(from, to) : [];

	const handleApplyClick = () => {
		if (!user) {
			toast("Please sign in to continue your job application!", { icon: "🔑" });
		}
	};

	useEffect(() => {
		fetchListedJobs();
	}, [jobs.length, fetchListedJobs]);

	if (!listedJobs.length && isLoading) {
		return <Spinner />;
	}

	if (!isLoading && listedJobs.length === 0) {
		return (
			<NoListings
				url="/employer-dashboard/list-job"
				title="You have not listed any job yet! :)"
				comment="List a job to continue..."
				url_text="List a job"
			/>
		);
	}

	if (!isLoading && searchedJobs.length === 0) {
		return <NoResult />;
	}

	return (
		<Content>
			<div className="text-sm md:text-base font-bold rounded-md border-l-4 border-t-2 border-yellow-600   p-1 my-8 w-[50%] md:w-[30%] text-center">
				<div className="shadow shadow-yellow-500 rounded p-2">
					<p>
						{searchedJobs.length} {searchedJobs.length > 1 ? "jobs" : "job"}{" "}
						listed!
					</p>
				</div>
			</div>

			<div className="box">
				{Jobs.map((job: any) => (
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
									<div
										className={`absolute right-1 top-20 text-white text-xs px-1 py-0.5 rounded-sm capitalize ${
											job.status === "Applied" ? "bg-green-700" : "bg-red-700"
										}`}
									>
										{job.status ? job.status : null}
									</div>
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
								<button className="w-5 h-5">
									<Image src={love} alt="loveicon" />
								</button>
								<button className="w-5 h-5">
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

			<Pagination count={searchedJobs.length} assets="jobs" />
		</Content>
	);
}

export default JobsPage;
