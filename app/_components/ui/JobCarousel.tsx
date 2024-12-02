"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";
import { formatCurrency, timeAgo } from "@/lib/helpers";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import Slider from "react-slick";

interface Job {
	company_name: string;
	company_site: string;
	job_role: string;
	job_type: string;
	salary: number;
	id: number;
	job_description: string;
	job_responsibilities: string;
	job_email: string;
	status: string;
	job_link: string;
	created_at: string;
}

interface CarouselProps {
	jobs: Job[];
}

const Carousel = () => {
	const { jobs }: CarouselProps = useJobCourse();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="w-full mt-10 ">
			<div className=" slider-container">
				<div className="flex flex-col justify-center items-center py-4 ">
					<h2 className=" text-2xl lg:text-3xl font-bold">FIND REMOTE JOBS</h2>
				</div>
				<div className="w-full mt-5 lg:bg-stone-600-">
					<div className="w-full  lg:w-[85%] m-auto ">
						<Slider {...settings}>
							{jobs.map((job, index) => (
								<div key={index} className="p-2">
									<JobCard job={job} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

interface JobCardProps {
	job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
	const { handleShareJob } = useJobCourse();

	return (
		<div className="flex flex-col space-y-4 h-[420px]- h-auto ">
			<div
				key={job.id}
				className="flex flex-col space-y-4 rounded-2xl border-l-8 border-t-2- border-yellow-600  h-full "
			>
				<div className="flex flex-col space-y-4 card relative bg-white  shadow transition transform hover:scale-105 hover:shadow-2xl  shadow-yellow-500 p-2 md:p-3 rounded-md h-full">
					<div className="flex justify-between- items-center gap-5 border-b-4 border-black py-5">
						<div className="logo">
							<Image
								alt="jobmingle"
								src="/image/logo.png"
								width={90}
								height={90}
								className="image"
							/>
						</div>
						<div className="flex flex-col gap-[0.1rem]">
							<h2 className="text-base font-bold">{job.company_name}</h2>
							{/* <h2 className="big">{job.platform}</h2> */}
							<div
								className={`absolute right-1 top-28 text-white text-xs px-1 py-0.5 rounded-sm capitalize ${
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

					<div className="txt-2 flex gap-5 items-center-">
						<h2 className="big-1">Salary:</h2>
						<span className="small">{formatCurrency(job.salary)}</span>
					</div>

					<div className="txt-2 flex gap-5 items-center-">
						<h2 className="big-1">Posted:</h2>
						<p className="small">{timeAgo(job.created_at)}</p>
					</div>

					<section className="flex flex-row justify-end gap-3 m-1 py-1 ">
						<button className="w-5 h-5  ">
							<Image src={love} alt="loveicon" />
						</button>
						{/* <button className="w-5 h-5 "> */}
						<button
							className="w-5 h-5 "
							onClick={() => handleShareJob(job?.id)}
						>
							<Image src={share} alt="shareicon" />
						</button>
					</section>

					<div className=" flex items-center justify-center border rounded p-2 ">
						{/* <button className="btn" onClick={handleApplyClick}>
          View Job
          </button> */}
						<Link href={`/jobs/${job.id}`}>
							<button className="btn">
								{/* <Link href={`/employer-dashboard/jobs/job/${job?.id}`}> */}
								Learn More
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "#eab308",
				borderRadius: "50%",
			}}
			onClick={onClick}
		/>
	);
}

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "#eab308",
				borderRadius: "50%",
			}}
			onClick={onClick}
		/>
	);
}
