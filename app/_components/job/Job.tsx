"use client";
import { formatCurrency, timeAgo } from "@/lib/helpers";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";

import Image from "next/image";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Link from "next/link";
import Button from "@/app/_components/ui/Button";
import {
	HiArrowLeft,
	HiMiniArrowTopRightOnSquare,
	HiPencil,
} from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Spinner from "../ui/Spinner";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { HiTrash } from "react-icons/hi";
import { useState } from "react";
import EditJobForm from "../ui/EditJobForm";

interface JobPageProps {
	params: { id: string };
}

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
	job_link: string;
}
export default function JobDetails(params: JobPageProps) {
	const [showForm, setShowForm] = useState(false);

	const { jobs, deleteJob, isLoading, handleShareJob } = useJobCourse();
	const { user } = useAuth();
	const router = useRouter();

	const job: ReturnType<typeof jobs.find> = jobs?.find(
		(job: Job) => job?.id === Number(params?.params?.id)
	);
	const isEmployer = user?.goals === "Post a job";
	const isStudent = user?.goals === "Apply for a job / Take a course";

	if (isLoading) {
		return <Spinner />;
	}

	if (!job && !isLoading) {
		return <h1>Job not found!</h1>;
	}

	function handleDeleteJob(jobId: any) {
		window.alert("Are you sure you want to delete this job?");
		// console.log(jobId);
		deleteJob(jobId);
	}
	function handleBack() {
		router.back();
	}
	return (
		<div className="flex flex-col items-center py-10 ">
			<div className="w-full xl:w-[80%]  ">
				<div className=" flex flex-col ">
					<div className="flex flex-col border border-gray-900 p-[1rem] h-full-  rounded-2xl  w-[100%]  relative shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
						<div className="flex gap-[1rem] border-b border-gray-900 py-[1rem] ">
							<div className="logo h-[4rem] w-[4rem]  rounded-full p-[0.6rem] border border-gray-900 ">
								<Image
									alt="jobmingle"
									src="/image/logo.png"
									width={90}
									height={90}
									className="image"
								/>
							</div>
							<div className="flex flex-col gap-[.1rem]">
								<h2 className="text-xl font-bold ">{job?.company_name}</h2>
								<h2 className="text-sm text-yellow-400 font-bold ">
									<Link target="_blank" href={`${job?.company_site}`}>
										{job?.company_site}
									</Link>
								</h2>
								{/* <h2 className="big">{job?.platform}</h2> */}
								<div
									className={`absolute right-0 top-[7rem] md:top-20 text-white text-base px-3 md:px-10 py-3 rounded-l capitalize ${
										job?.status === "Applied" ? "bg-green-700" : "bg-red-700"
									}`}
								>
									{job?.status ? job?.status : null}
								</div>
								<div className=" flex items-start py-[.5rem]  gap-5 items-center-">
									<p className="text-[1rem] font-bold ">{job?.job_type}</p>
									{/* <h2 className="text-[.9rem] font-bold">Posted:</h2> */}
									<p className="text-[.8rem] font-bold text-stone-500">
										{timeAgo(job?.created_at)}
									</p>
									<p className="text-[.8rem] font-bold text-stone-500 ">
										{formatCurrency(job?.salary)}
									</p>
								</div>
							</div>
						</div>
						<div className=" flex py-[.5rem] items-center-  gap-5 mt-5">
							<h2 className="text-[.9rem] font-bold">Job Title:</h2>
							<span className="text-[.8rem] font-bold">{job?.job_role}</span>
						</div>
						<div className=" flex items-start py-[.5rem]  gap-5 items-center-">
							<h2 className="text-[.9rem] font-bold">Description:</h2>
							<span className="text-[.8rem]font-bold ">
								{job?.job_description}
							</span>
						</div>
						<div className=" flex items-start py-[.5rem]  gap-5 items-center-">
							<h2 className="text-[.9rem] font-bold">Responsibilities:</h2>
							<span className="text-[.8rem]font-bold ">
								{job?.job_responsibilities}
							</span>
						</div>

						<div className=" flex items-start py-[.5rem]  gap-5 items-center-">
							<h2 className="text-[.9rem] font-bold">Salary:</h2>
							<span className="text-[1rem] font-bold ">
								{formatCurrency(job?.salary)}
							</span>
						</div>
						<div className=" flex items-start py-[.5rem]  gap-5 items-center-">
							<h2 className="text-[.9rem] font-bold">Posted:</h2>
							<p className="text-[1rem] font-bold ">
								{timeAgo(job?.created_at)}
							</p>
						</div>
						<section className="flex flex-row justify-end gap-3 m-1 py-1 ">
							<button className="w-5 h-5">
								<Image src={love} alt="loveicon" />
							</button>
							<button
								className="w-5 h-5"
								onClick={() => handleShareJob(job?.id)}
							>
								<Image src={share} alt="shareicon" />
							</button>
						</section>
						<div className=" flex justify-between">
							<div>
								<button
									className="absolute- flex w-[8rem] justify-center py-3 rounded border border-gray-900 items-center hover:bg-yellow-500"
									onClick={handleBack}
								>
									<span className="text-2xl">
										<HiArrowLeft />
									</span>
									<span>Go back</span>
								</button>
							</div>
							<div className=" flex items-center px-[.5rem] justify-center w-[100%]  "></div>

							{isEmployer && (
								<div className="flex gap-3 border- px-2 items-center">
									{/* <Button type="login"> */}
									<button
										className="text-xl hover:text-yellow-500 transition-all duration-700 border p-1 rounded"
										onClick={() => setShowForm((show) => !show)}
									>
										<HiPencil />
									</button>
									<button
										className="text-xl hover:text-yellow-500 transition-all duration-700 border p-1 rounded"
										onClick={() => handleDeleteJob(job.id)}
									>
										<HiTrash />
									</button>
									{/* </Button>  */}
								</div>
							)}
						</div>

						{isStudent && (
							<div className="lg:m-auto lg:w-[50%] px-10 ">
								<Link
									href={`mailto:${job.job_email}`}
									className="text-yellow-500"
								>
									<Button type="login">
										Apply
										<span className="text-xl">
											<HiMiniArrowTopRightOnSquare />
										</span>
									</Button>
								</Link>
							</div>
						)}

						{showForm && <EditJobForm job={job} />}
					</div>
				</div>
			</div>
		</div>
	);
}
