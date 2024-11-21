import React, { useState } from "react";
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
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// const JobsPage = async ({ searchQuery }: any) => {
function JobsPage({ searchQuery, link }: any) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { jobs } = useJobCourse();
	const { from, to } = usePagination();
	// const jobs = localStorage?.getItem("jobs")
	// 	? JSON.parse(localStorage?.getItem("jobs") ?? "[]")
	// 	: [];
	const [showPopup, setShowPopup] = useState(false);

	// console.log(jobs);
	const searchedJobs =
		searchQuery.length > 0
			? jobs.filter((job: any) =>
					`${job.job_type} ${job.job_role} ${job.job_description} `
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: jobs;

	const Jobs = searchedJobs?.slice(from, to);
	// const Jobs = Array.isArray(searchedJobs) ? searchedJobs.slice(from, to) : [];

	const handleApplyClick = (id: any) => {
		// setShowPopup(true);
		// const newParams = new URLSearchParams(searchParams);
		// newParams.set("job", id);
		// router.push(`/employer-dashboard/jobs/${id}`);
	};
	const handleClosePopup = () => {
		setShowPopup(false);
	};

	return (
		<Content>
			{searchedJobs?.length >= 1 && (
				<div className="head text-yellow-400">
					<h1 className="head__big">Featured Jobs</h1>
					<p className="head__small">Find a job that best suits your skills!</p>
				</div>
			)}

			<div className="box">
				{Jobs.map((job: any) => (
					<div key={job.id}>
						<div className="card relative bg-white  shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
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
								<button
									className="btn"
									// onClick={() => handleApplyClick(job.id)}
								>
									{/* <Link href={`/employer-dashboard/jobs/job/${job?.id}`}> */}
									<Link href={`/${link}/${job.id}`}>More</Link>
								</button>
							</div>
						</div>

						{showPopup && (
							<>
								<Overlay onClick={handleClosePopup} />
								<PopupContainer>
									<button onClick={handleClosePopup} className="close">
										<IoClose />
									</button>
									<h2>Apply for {job?.jobTitle}</h2>
									<p>Company: {job?.platform}</p>
									{/* <p>Location: {job.location}</p>
									<h2>Apply for :Senior Software Engineer</h2>
									<p>Company: JobMingle</p>
									<p>Location: Lagos, NG</p> */}
								</PopupContainer>
							</>
						)}
					</div>
				))}
			</div>
			<br />
			{searchedJobs.length === 0 && <NoResult />}

			<Pagination count={searchedJobs.length} assets="jobs" />
		</Content>
	);
}

export default JobsPage;
