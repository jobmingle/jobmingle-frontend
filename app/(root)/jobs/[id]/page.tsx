// "use client";
// import { formatCurrency, timeAgo } from "@/lib/helpers";
// import { useJobCourse } from "@/app/_contexts/apis/ApiState";

import JobDetails from "@/app/_components/job/Job";

// import Image from "next/image";
// import love from "@/public/image/loveicon.png";
// import share from "@/public/image/shareicon.png";
// import { Content } from "@/app/_components/job/styles";
// import Link from "next/link";
// import Button from "@/app/_components/ui/Button";

// interface JobPageProps {
// 	params: { id: string };
// }

// export default function JobPage({ params }: JobPageProps) {
// 	console.log(params);
// 	const { jobs } = useJobCourse();
// 	console.log(jobs);

// 	const job = jobs?.find((job: any) => job.id === Number(params.id));
// 	// const job = {
// 	// 	salary: 500,
// 	// 	created_at: "776323242",
// 	// 	job_description: "fsfdssfsfdf",
// 	// 	job_responsibilities: "fsfdssfsfdf",
// 	// 	company_name: "fsfdssfsfdf",
// 	// 	job_role: "mech",
// 	// 	job_type: "mech",
// 	// 	stat: "applied",
// 	// };
// 	if (!job) {
// 		return <h1>Job not found!</h1>;
// 	}
// 	return (
// 		<div className="flex flex-col items-center py-10">
// 			<div className="w-[80%]">
// 				<div className=" flex flex-col ">
// 					<div className="flex flex-col border border-gray-900 p-[1rem] cursor-pointer rounded-2xl  w-[100%]  relative shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
// 						<div className="flex gap-[1rem] border-b border-gray-900 py-[1rem] ">
// 							<div className="logo h-[4rem] w-[4rem]  rounded-full p-[0.6rem] border border-gray-900 ">
// 								<Image
// 									alt="jobmingle"
// 									src="/image/logo.png"
// 									width={90}
// 									height={90}
// 									className="image"
// 								/>
// 							</div>
// 							<div className="flex flex-col gap-[.1rem]">
// 								<h2 className="text-xl font-bold ">{job?.company_name}</h2>
// 								<h2 className="text-sm text-yellow-400 font-bold ">
// 									<Link target="_blank" href={`${job?.company_site}`}>
// 										{job?.company_site}
// 									</Link>
// 								</h2>
// 								{/* <h2 className="big">{job?.platform}</h2> */}
// 								<div
// 									className={`absolute right-1 top-20 text-white text-xs px-1 py-0.5 rounded-sm capitalize ${
// 										job?.stat === "Applied" ? "bg-green-700" : "bg-red-700"
// 									}`}
// 								>
// 									{job?.stat ? job?.stat : null}
// 								</div>
// 								<p className="text-[.8rem]font-bold ">{job?.job_type}</p>
// 							</div>
// 						</div>
// 						<div className=" flex py-[.5rem] items-center-  gap-5">
// 							<h2 className="text-[.8rem] font-bold">Job Title:</h2>
// 							<span className="text-[.8rem] font-bold">{job?.job_role}</span>
// 						</div>
// 						<div className=" flex items-start p-[.5rem] w-[100%] gap-5 items-center-">
// 							<h2 className="text-[.9rem] font-bold">Description:</h2>
// 							<span className="text-[.8rem]font-bold ">
// 								{job?.job_description}
// 							</span>
// 						</div>
// 						<div className=" flex items-start p-[.5rem] w-[100%] gap-5 items-center-">
// 							<h2 className="text-[.9rem] font-bold">Task:</h2>
// 							<span className="text-[.8rem]font-bold ">
// 								{job?.job_responsibilities}
// 							</span>
// 						</div>
// 						<div className=" flex items-start p-[.5rem] w-[100%] gap-5 items-center-">
// 							<h2 className="text-[.9rem] font-bold">Salary:</h2>
// 							<span className="text-[.8rem]font-bold ">
// 								{formatCurrency(job?.salary)}
// 							</span>
// 						</div>
// 						<div className=" flex items-start p-[.5rem] w-[100%] gap-5 items-center-">
// 							<h2 className="text-[.9rem] font-bold">Posted:</h2>
// 							<p className="text-[.8rem]font-bold ">
// 								{timeAgo(job?.created_at)}
// 							</p>
// 						</div>
// 						<section className="flex flex-row justify-end gap-3 m-1 py-1 ">
// 							<button className="w-5 h-5">
// 								<Image src={love} alt="loveicon" />
// 							</button>
// 							<button className="w-5 h-5">
// 								<Image src={share} alt="shareicon" />
// 							</button>
// 						</section>
// 						<div className=" flex items-center px-[.5rem] justify-center w-[100%] "></div>

// 						<div className=" flex items-center px-[.5rem] justify-center w-[100%] ">
// 							{/* <button className="border border-black rounded-[5px] py-[.5rem] px-[1.5rem] transition-all duration-[0.2s] text-black  hover:bg-black hover:text-white ">
// 								<Link
// 									href={`mailto:${job.job_email}`}
// 									className="text-yellow-500-"
// 								>
// 									Apply
// 								</Link>
// 							</button> */}
// 							<Button type="login">
// 								<Link
// 									href={`mailto:${job.job_email}`}
// 									className="text-yellow-500-"
// 								>
// 									Apply
// 								</Link>
// 							</Button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

interface JobPageProps {
	params: { id: string };
}

export default function JobPage({ params }: JobPageProps) {
	return (
		<div>
			<JobDetails params={params} />
		</div>
	);
}
