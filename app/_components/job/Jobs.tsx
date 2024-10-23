import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import tiredicon from "@/public/image/tiredicon.png";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import { Jobs } from "@/lib/_exportLinks";
import { Content, PopupContainer, Overlay } from "./styles";
import NoResult from "../ui/NoResult";

const JobsPage = ({ searchQuery }: any) => {
	//   const { isLoggedIn } = useAuth();
	const [showPopup, setShowPopup] = useState(false);

	const searchedJobs =
		searchQuery.length > 0
			? Jobs.filter((job) =>
					`${job.jobTitle} ${job.platform} `
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: Jobs;

	//   const handleApplyClick = () => {
	//     if (isLoggedIn) {
	//       setShowPopup(true);
	//     } else {
	//       alert("Please log in to apply.");
	//     }
	//   };
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
				{searchedJobs.map((job) => (
					<div key={job.id}>
						<div className="card relative">
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
			{searchedJobs.length === 0 && <NoResult />}
		</Content>
	);
};

export default JobsPage;

<>
	<section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  mt-4 gap-4 ">
		{Jobs.map((job) => (
			<div key={job.id} className="border p-2 md:p-3 rounded-md">
				<section className=" flex flex-row gap-2 items-center relative">
					<Image src={job.icon} alt="company-icon" className="w-8 h-8" />{" "}
					<p className="text-sm font-semibold capitalize">{job.platform}</p>
					<section
						className={`absolute right-1 text-white text-xs px-1 py-0.5 rounded-sm capitalize ${
							job.stat === "Applied" ? "bg-green-700" : "bg-red-700"
						}`}
					>
						{job.stat ? job.stat : null}
					</section>
				</section>
				<p className=" font-semibold text-md montserrat capitalize">
					{job.jobTitle}
				</p>
				<p className=" text-xs sm:text-[85%] montserrat capitalize">
					{job.location}
				</p>
				<p className=" border-b-[2px] border-solid border-x-black-100 text-xl sm:text-[120%] montserrat capitalize text-[#f5cb1a] font-semibold tracking-wide">
					{job.pricerange}
				</p>
				<section className="flex flex-row justify-between m-1 py-1 ">
					<button className="w-6 h-6">
						<Image src={love} alt="loveicon" />
					</button>
					<button className="w-6 h-6">
						<Image src={share} alt="shareicon" />
					</button>
				</section>
			</div>
		))}
		<br />
	</section>

	<main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid mt-10 p-2">
		<section className="flex flex-col justify-center items-center py-4">
			<Image
				src={tiredicon}
				alt="tiredicon"
				className="w-24 h-24 md:w-28 md:h-28 m-auto"
			/>

			<p className="sora capitalize pt-2 ">
				you have not apllied for any jobs yet!
			</p>
			<p className="sora capitalize text-md text-[#f5cb1a] underline">
				click here to apply for a job now!
			</p>
		</section>
		<br />
	</main>
</>;
