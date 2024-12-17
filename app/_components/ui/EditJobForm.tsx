"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import SuccessModal from "@/Components/SuccessModal";
import { HiArrowLeft } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/ui/Button";

import Spinner from "@/app/_components/ui/Spinner";
import toast from "react-hot-toast";
import Error from "@/app/_components/ui/Error";
import {
	useGetAllJobsQuery,
	useUpdateJobMutation,
} from "@/app/_features/appSlices/apiSlice";

interface FormData {
	company_name: string;
	company_site: string;
	job_role: string;
	job_type: string;
	salary: number;
	job_description: string;
	job_responsibilities: string;
	job_email: string;
	job_link: string;
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

function EditJobForm({ jobId }: any) {
	const router = useRouter();
	const [Alert, setAlert] = useState(false);

	const {
		currentData: jobsData,
		isFetching,
	}: // error,
	any = useGetAllJobsQuery({});
	const jobs = jobsData?.data;
	const job: ReturnType<typeof jobs.find> = jobs?.find(
		(job: Job) => job?.id === jobId
	);

	const [updateJob, { isLoading: isUpdatingJob, error }] =
		useUpdateJobMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();

	const handleback = () => {
		router.back();
	};

	async function handleJobUpdate(data: FormData) {
		const jobId = job?.id;
		try {
			const res: any = await updateJob({ jobId, data }).unwrap();
			toast.success(res?.message);
			router.push("/employer-dashboard/jobs");
			reset();
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while perfoming request!"
			);
			console.error(error);
		}
	}

	function onError(errors: any) {
		console.error(errors);
	}
	return (
		<div className="flex flex-col  min-h-screen lg:w-[80%] pb-20 md:pl-10- mx-auto relative overflow-x-hidden md:py-[2rem]">
			{Alert ? (
				<SuccessModal
					extrastyling={"min-h-[110vh]  sm:h-[110vh] lg:h-[120vh] xl:h-[110vh]"}
					Act={
						"Job Listed Successfully " +
						"" +
						" it will take a while for the verification process to be completed"
					}
					linkto={"/employer-dashboard"}
					whereto={"Click Here To Go Back To Home"}
				/>
			) : null}
			<div className="flex flex-col gap-3 mx-auto  min-h-screen ">
				{/* <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden "> */}

				<div
					className="w-full cursor-pointer flex pl-4 items-center py-4 flex-row sm:absolute top-2 md:top-0 left-2 md:left-[-15px] "
					onClick={handleback}
				>
					<HiArrowLeft className="text-2xl" />
				</div>

				{/*  */}
				<h3 className="montserrat capitalize text-lg sm:text-2xl font-bold text-center">
					Edit Job
				</h3>
				<p className="sora text-sm text-center  tracking-wide px-2 sm:px-0">
					Note: It will take about 24hours for verification to be completed!
				</p>
				<main
				// className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[90%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center"
				>
					<form
						onSubmit={handleSubmit(handleJobUpdate, onError)}
						className="w-full h-full p-4"
					>
						<div className=" shadow shadow-gray-500 rounded p-2">
							<div className=" shadow shadow-gray-500 rounded p-2">
								<label className="text-sm montserat py-1 tracking-wider font-medium">
									Name of company/Organization
								</label>
								<input
									type="text"
									id="company_name"
									defaultValue={job?.company_name}
									placeholder="Enter company name here"
									className="input"
									{...register("company_name", { required: false })}
								/>
								{errors?.company_name?.message && (
									<Error>{errors.company_name.message}</Error>
								)}
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Company Webiite{" "}
								</label>
								<input
									type="url"
									id="company_site"
									defaultValue={job?.company_site}
									placeholder="Link to company's website/organization"
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
									{...register("company_site", { required: false })}
								/>
								{errors?.company_site?.message && (
									<Error>{errors.company_site.message}</Error>
								)}
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Job Role
								</label>
								<input
									id="job_role"
									defaultValue={job?.job_role}
									placeholder="Enter job role"
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
									{...register("job_role", { required: false })}
								/>
								{errors?.job_role?.message && (
									<Error>{errors.job_role.message}</Error>
								)}
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Job Type
								</label>
								<select
									id="job_type"
									defaultValue={job?.job_type}
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent bg-yellow-500- border-black-100 border-[1px] text-[68%] pr-* sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4 cursor-pointer"
									// placeholder="Hybrid/Remote"
									{...register("job_type", {
										required: "Please specify the job type.",
									})}
								>
									{/* <option value="">Select job type</option> */}
									<option className="" value="Remote">
										Remote
									</option>
									<option value="Hybrid">Hybrid</option>
									<option value="full-time">Full-Time</option>
								</select>
								{errors?.job_type?.message && (
									<Error>{errors.job_type.message}</Error>
								)}
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Salary
								</label>
								<input
									type="number"
									id="salary"
									defaultValue={job?.salary}
									placeholder="Enter expected salary here"
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
									{...register("salary", {
										required: "Salary is required for job posting.",
										min: {
											value: 1000,
											message: "Salary must be at least 1000",
										},
										max: {
											value: 99999999,
											message: "Salary must not exceed 8 digits",
										},
										valueAsNumber: true,
									})}
								/>
								{errors?.salary?.message && (
									<Error>{errors.salary.message}</Error>
								)}

								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Job Responsibilities
								</label>
								<textarea
									id="job_responsibilities"
									defaultValue={job?.job_responsibilities}
									placeholder="Enter job responsibilities"
									className="focus:outline-none mb-3 bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
									{...register("job_responsibilities", {
										required: "Job responsibilities is required.",
										minLength: {
											value: 50,
											message:
												"The job responsibilities must be at least 50 characters long.",
										},
										maxLength: {
											value: 1000,
											message:
												"The job responsibilities must not exceed 1000 characters.",
										},
									})}
									rows={3}
								/>
								{errors?.job_responsibilities?.message && (
									<Error>{errors.job_responsibilities.message}</Error>
								)}
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Job Description
								</label>
								<textarea
									id="job_description"
									defaultValue={job?.job_description}
									placeholder="Enter job Description"
									className="focus:outline-none mb-3 h-[6rem]- bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
									{...register("job_description", {
										required: "Job description is required.",
										minLength: {
											value: 50,
											message:
												"The job description must be at least 50 characters long.",
										},
										maxLength: {
											value: 1000,
											message:
												"The job description must not exceed 1000 characters.",
										},
									})}
									rows={5}
								/>
								{errors?.job_description?.message && (
									<Error>{errors.job_description.message}</Error>
								)}

								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Application Email
								</label>
								<input
									type="email"
									id="job_email"
									defaultValue={job?.job_email}
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
									placeholder="Email/ Link to reach out to"
									{...register("job_email", { required: false })}
								/>
								{errors?.job_email?.message && (
									<Error>{errors.job_email.message}</Error>
								)}
								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Application Link
								</label>
								<input
									type="url"
									id="job_link"
									defaultValue={job?.job_link}
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
									placeholder="Link to reach out to"
									{...register("job_link", { required: false })}
								/>
								{errors?.job_link?.message && (
									<Error>{errors.job_link.message}</Error>
								)}
							</div>
						</div>
						{/* <button
							type="submit"
							className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[1rem] bg-[#F6CC16] text-center"
						>
							Submit{" "}
						</button> */}
						<Button type="login" disabled={isUpdatingJob}>
							<span>{isUpdatingJob ? <Spinner /> : "Update"}</span>
						</Button>
					</form>
				</main>
			</div>
		</div>
	);
}

export default EditJobForm;
