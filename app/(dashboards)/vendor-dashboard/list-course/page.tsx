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

import Spinner from "@/app/_components/ui/Spinner";
import Error from "@/app/_components/ui/Error";
import Btn from "@/app/_components/atoms/Button";
import { usePostCourseMutation } from "@/app/_features/appSlices/apiSlice";
import toast from "react-hot-toast";

interface FormData {
	fullname: string;
	categoryid: number;
	price: number;
	summary: string;
	about_vendor: string;
	course_requirements: string;
}

function Page() {
	// const { postCourse, isLoading, error, clearErrors } = useJobCourse();

	const router = useRouter();
	const [Alert, setAlert] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			fullname: "",
			categoryid: 0,
			price: 0,
			summary: "",
			about_vendor: "",
			course_requirements: "",
		},
	});

	const [postCourse, { isLoading: isCreatingCourse, error }] =
		usePostCourseMutation();

	const handleback = () => {
		router.back();
	};

	async function handlePostCourse(data: FormData) {
		try {
			const res: any = await postCourse(data).unwrap();
			toast.success(res?.data?.original?.success);
			sessionStorage.setItem("courseId", res?.data?.original?.course_id);
			router.push("/vendor-dashboard/upload-thumbnail");
			console.log(res);
			// reset();
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	}
	const closeCvModal = () => {
		setIsModalOpen(false);
	};

	const handleOpen = () => {
		setIsModalOpen(true);
	};

	function onError(errors: any) {
		console.error(errors);
	}
	return (
		<div className="flex flex-col  min-h-screen lg:w-[60%] pb-20 md:pl-10- mx-auto relative overflow-x-hidden md:py-[2rem]">
			<div className="flex flex-col gap-3 mx-auto  min-h-screen ">
				{/* <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden "> */}

				<div
					className="w-full cursor-pointer flex md:pl-4 items-center py-4 flex-row sm:absolute top-2 md:top-0 left-2 md:left-[-17px] "
					onClick={handleback}
				>
					<HiArrowLeft className="text-2xl" />
				</div>

				{/*  */}
				<h3 className="montserrat capitalize text-lg sm:text-2xl font-bold text-center">
					List your courses on jobmingle
				</h3>
				<p className="sora text-sm text-center  tracking-wide px-2 sm:px-0">
					Note: It will take about 24hours for verification to be completed
				</p>
				<p
					className="sora text-md text-center capitalize tracking-wide px-2 py-3 border-2 rounded-lg bg-stone-600 shadow shadow-yellow-500 text-yellow-400 hover:bg-stone-400 hover:text-yellow-500 transition-all duration-700 cursor-pointer "
					onClick={handleOpen}
				>
					See conditions for listing a course
				</p>
				<main
				// className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[90%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center"
				>
					<form
						onSubmit={handleSubmit(handlePostCourse, onError)}
						className="w-full h-full md:p-4"
					>
						<div className="shadow rounded shadow-gray-500 p-2">
							<div className="shadow rounded shadow-gray-500 p-2">
								<label className="text-sm montserat py-1 tracking-wider font-medium">
									Course title
								</label>
								<input
									type="text"
									id="fullname"
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
									placeholder="Enter course title here"
									{...register("fullname", { required: false })}
								/>
								{errors?.fullname?.message && (
									<Error>{errors.fullname.message}</Error>
								)}

								<label
									htmlFor="job_type"
									className="text-sm montserrat py-1 tracking-wider font-medium"
								>
									Category
								</label>
								<select
									id="categoryid"
									// defaultValue="Marketing"
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent bg-yellow-500- border-black-100 border-[1px] text-[68%] pr-* sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4 cursor-pointer"
									// placeholder="Hybrid/Marketing"
									{...register("categoryid", {
										required: "Please specify the job type.",
									})}
								>
									{/* <option value="">Select job type</option> */}
									<option value="" disabled>
										Select category
									</option>
									<option value={4}>IT Support</option>
									<option value={5}>Marketing</option>
									<option value={6}>Designs</option>
									<option value={7}>Software Development</option>
									<option value={8}>Data Science / Analytics</option>
									<option value={9}>Writing</option>
									<option value={10}>Video Editing</option>
									<option value={11}>Human Resources</option>
									<option value={12}>Others</option>
								</select>
								{errors?.categoryid?.message && (
									<Error>{errors.categoryid.message}</Error>
								)}

								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Summary
								</label>
								<textarea
									id="summary"
									className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
									placeholder="what students will learn in the course"
									{...register("summary", { required: false })}
								/>
								{errors?.summary?.message && (
									<Error>{errors.summary.message}</Error>
								)}

								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Course Requirements
								</label>
								<textarea
									id="course_requirements"
									className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
									placeholder="i.e Basic computer literacy..."
									{...register("course_requirements", { required: false })}
								/>
								{errors?.course_requirements?.message && (
									<Error>{errors.course_requirements.message}</Error>
								)}

								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Your Bio
								</label>
								<textarea
									id="about_vendor"
									className="focus:outline-none mb-3  bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
									placeholder="Let your students know more about you"
									{...register("about_vendor", {
										required: "Tell your students about you.",
										minLength: {
											value: 50,
											message: "Bio must be at least 50 characters.",
										},
										maxLength: {
											value: 1000,
											message: "Bio must not exceed 1000 characters.",
										},
									})}
									rows={5}
								/>
								{errors?.about_vendor?.message && (
									<Error>{errors.about_vendor.message}</Error>
								)}

								<label className="text-sm montserrat py-1 tracking-wider font-medium">
									Price
								</label>
								<input
									type="number"
									id="price"
									className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
									placeholder="Set price"
									{...register("price", { required: false })}
								/>
								{errors?.price?.message && (
									<Error>{errors.price.message}</Error>
								)}
							</div>
						</div>
						<Button type="login" disabled={isCreatingCourse}>
							<span>{isCreatingCourse ? <Spinner /> : "Submit"}</span>
						</Button>
					</form>
				</main>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div
						className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
						onClick={closeCvModal}
					></div>
					<div className="bg-white rounded-lg p-4 md:p-8 z-50 w-[90%] max-w-2xl max-h-[90vh] overflow-auto shadow-lg">
						<h2 className="text-xl md:text-2xl font-bold mb-4">
							{" "}
							Full details
						</h2>
						<ul className="text-left sora list-disc space-y-5">
							<li>
								Relevance: Courses should align with in-demand skills and
								industry needs.
							</li>
							<li>
								Quality video & audio: Courses must demonstrate high-quality
								content, be well-produced, and feature simple,
								easy-to-understand language with easy-to-follow instructions.
							</li>
							<li>
								Alignment with JobMingle&apos;s goals: Courses should support
								JobMingle&apos;s vision to bridge the skills gap and enhance
								employability.
							</li>
							<li>
								Compliance with JobMingle&apos;s policies: Course creators must
								agree to JobMingle&apos;s{" "}
								<span className="text-yellow-400">terms and conditions.</span>
							</li>
							<li>
								Pricing and Credibility: Courses must not be more than ₦20,000
								and must have at least 30 individuals whose lives have been
								transformed by the course.
							</li>
							<li>
								Target audience: Courses should cater to JobMingle&apos;s
								primary audience, typically students, graduates, corps members,
								9-to-5 workers, job seekers, and stay-at-home mothers.
							</li>
							<li>
								Money-back guarantee: Users are eligible for a refund within 7
								days of purchase, provided they have not downloaded any content
								or exceeded three video views.
							</li>
							<li>
								Continuous improvement: Course creators should demonstrate a
								commitment to updating and refining their courses.
							</li>
							<li>
								Certification: JobMingle is allowed to issue a certificate after
								course completion.
							</li>
						</ul>

						<div className="mt-4 flex justify-center">
							<Btn
								onClick={closeCvModal}
								className="w-[100px] rounded-lg text-white border-none bg-[#f5cb1a]"
							>
								Close
							</Btn>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Page;
