import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import tiredicon from "@/public/image/tiredicon.png";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import { Jobs } from "@/lib/_exportLinks";
import { Content, PopupContainer, Overlay } from "./styles";
import NoResult from "../ui/NoResult";
import { usePagination } from "@/app/_hooks/usePagination";
import Pagination from "../ui/Pagination";

const JobsPage = ({ searchQuery }: any) => {
	//   const { isLoggedIn } = useAuth();
	const { from, to } = usePagination();
	const [showPopup, setShowPopup] = useState(false);

	const searchedJobs =
		searchQuery.length > 0
			? Jobs.filter((job) =>
					`${job.jobTitle} ${job.platform} `
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: Jobs;

	const jobs = searchedJobs.slice(from, to);

	const handleApplyClick = () => {
		setShowPopup(true);
	};
	const handleClosePopup = () => {
		setShowPopup(false);
	};

	return (
		<Content>
			{searchedJobs.length >= 1 && (
				<div className="head text-yellow-400">
					<h1 className="head__big">Featured Jobs</h1>
					<p className="head__small">Find a job that best suits your skills!</p>
				</div>
			)}

			<div className="box">
				{jobs.map((job) => (
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
									<h2 className="big">{job.platform}</h2>
									<div
										className={`absolute right-1 top-20 text-white text-xs px-1 py-0.5 rounded-sm capitalize ${
											job.stat === "Applied" ? "bg-green-700" : "bg-red-700"
										}`}
									>
										{job.stat ? job.stat : null}
									</div>
									<p className="small">Full-time</p>
								</div>
							</div>
							<div className="txt-1">
								<h2 className="big-1">{job.jobTitle}</h2>
								<p className="small">{job.location}</p>
							</div>
							<div className="txt-2">
								<h2 className="big-1">Pay:</h2>
								<p className="small">{job.pricerange}</p>
							</div>

							<div className="txt-2">
								<h2 className="big-1">Posted:</h2>
								<p className="small">3 days ago</p>
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
								<button className="btn" onClick={handleApplyClick}>
									View Job
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
									<h2>Apply for {job.jobTitle}</h2>
									<p>Company: {job.platform}</p>
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
};

export default JobsPage;
