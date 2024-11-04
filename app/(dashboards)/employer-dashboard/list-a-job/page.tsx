"use client";
import Image from "next/image";
import React, { useState } from "react";
import jobmingle from "@/public/image/jobmingle.png";
import arrowback from "@/public/image/arrowback.png";
import { useRouter } from "next/navigation";
import SuccessModal from "@/Components/SuccessModal";
import { HiArrowLeft } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/ui/Button";
import { useJob } from "@/app/_contexts/jobs/JobsState";

interface FormData {
	company_name: string;
	company_site: string;
	job_role: string;
	job_type: string;
	salary: number;
	job_description: string;
	job_responsibilities: string;
	job_email: string;
}

function Page() {
	const router = useRouter();
	const [Alert, setAlert] = useState(false);
	const { postJob } = useJob();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const handleback = () => {
		router.back();
	};

	function onSubmit(data: FormData) {
		console.log(data);
		postJob(data);
	}

	function onError(errors: any) {
		console.error(errors);
	}
	return (
		<div className="flex flex-col  min-h-screen  relative overflow-x-hidden md:py-[2rem]">
			{Alert ? (
				<SuccessModal
					extrastyling={"min-h-[110vh]  sm:h-[110vh] lg:h-[120vh] xl:h-[110vh]"}
					Act={
						"Job Listed Successfully " +
						"" +
						" it will take a while for the verification process to be completed"
					}
					linkto={"/"}
					whereto={"Click Here To Go Back To Home"}
				/>
			) : null}
			<div className="flex flex-col gap-3 mx-auto  min-h-screen ">
				{/* <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden "> */}

				<div
					className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2 "
					onClick={handleback}
				>
					<HiArrowLeft className="text-2xl" />
				</div>

				{/*  */}
				<h3 className="montserrat capitalize text-3xl sm:text-3xl font-bold text-center">
					List your jobs on jobmingle
				</h3>
				<p className="sora text-md text-center capitalize tracking-wide px-2 sm:px-0">
					Note: It will take about 24hours for verification to be completed
				</p>
				<main
				// className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[90%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center"
				>
					<form
						onSubmit={handleSubmit(onSubmit, onError)}
						className="w-full h-full pt-4"
					>
						<label className="text-sm montserat py-1 tracking-wider font-medium">
							Name of company/Organization
						</label>
						<input
							type="text"
							id="company_name"
							className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
							placeholder="Enter company name here"
							{...register("company_name", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Company Webiite{" "}
						</label>
						<input
							type="text"
							id="company_site"
							className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
							placeholder="Link to company's website/organization"
							{...register("company_site", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Job Role
						</label>
						<textarea
							id="job_role"
							className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
							placeholder="Enter job responsibilities"
							{...register("job_role", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Job Type
						</label>
						<input
							type="text"
							id="job_type"
							className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
							placeholder="Hybrid/Remote"
							{...register("job_type", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Salary (In naira)
						</label>
						<input
							type="number"
							id="salary"
							className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
							placeholder="Enter expected salary here"
							{...register("salary", { required: false, valueAsNumber: true })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Job Description
						</label>
						<textarea
							id="job_description"
							className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
							placeholder="Enter job Description"
							{...register("job_description", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Job Responsibilities
						</label>
						<textarea
							id="job_responsibilities"
							className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
							placeholder="Enter job responsibilities"
							{...register("job_responsibilities", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Job Email
						</label>
						<input
							type="email"
							id="job_email"
							className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
							placeholder="Email/ Link to reach out to"
							{...register("job_email", { required: false })}
						/>
						{/* <button
							type="submit"
							className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[1rem] bg-[#F6CC16] text-center"
						>
							Submit{" "}
						</button> */}
						<Button
							type="login"
							// onClick={(e) => handleSubmit(e)}
						>
							Submit
							{/* <span>{isLoading && <Spinner />}</span> */}
						</Button>
					</form>
				</main>
			</div>
		</div>
	);
}

export default Page;
