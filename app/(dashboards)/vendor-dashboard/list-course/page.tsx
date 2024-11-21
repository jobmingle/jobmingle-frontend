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
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import Spinner from "@/app/_components/ui/Spinner";

interface FormData {
	course_title: string;
	amount: number;
	description: string;
	about_vendor: string;
	course_requirements: string;
}

function Page() {
	const { postCourse, isLoading, error, clearErrors } = useJobCourse();

	const router = useRouter();
	const [Alert, setAlert] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const handleback = () => {
		router.back();
	};

	function onSubmit(data: FormData) {
		console.log(data);
		reset();
		postCourse(data);
	}

	function onError(errors: any) {
		console.error(errors);
	}
	return (
		<div className="flex flex-col  min-h-screen lg:w-[55%] pb-20 md:pl-10- mx-auto relative overflow-x-hidden md:py-[2rem]">
			{Alert ? (
				<SuccessModal
					extrastyling={"min-h-[110vh]  sm:h-[110vh] lg:h-[120vh] xl:h-[110vh]"}
					Act={
						"Job Listed Successfully " +
						"" +
						" it will take a while for the verification process to be completed"
					}
					linkto={"/vendor-dashboard"}
					whereto={"Click Here To Go Back To Home"}
				/>
			) : null}
			<div className="flex flex-col gap-3 mx-auto  min-h-screen ">
				{/* <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden "> */}

				<div
					className="w-full cursor-pointer flex pl-4 items-center py-4 flex-row sm:absolute top-2 md:top-0 left-2 md:left-[-17px] "
					onClick={handleback}
				>
					<HiArrowLeft className="text-2xl" />
				</div>

				{/*  */}
				<h3 className="montserrat capitalize text-3xl sm:text-3xl font-bold text-center">
					List your courses on jobmingle
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
							Course title
						</label>
						<input
							type="text"
							id="course_title"
							className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
							placeholder="Enter course title here"
							{...register("course_title", { required: false })}
						/>

						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Description
						</label>
						<textarea
							id="description"
							className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
							placeholder="what students will learn in the course"
							{...register("description", { required: false })}
						/>

						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Your Bio
						</label>
						<textarea
							id="about_vendor"
							className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
							placeholder="let the students know more about you"
							{...register("about_vendor", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Course Requirements
						</label>
						<textarea
							id="course_requirements"
							className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
							placeholder="e.g no laptop"
							{...register("course_requirements", { required: false })}
						/>
						<label className="text-sm montserrat py-1 tracking-wider font-medium">
							Price
						</label>
						<input
							type="number"
							id="amount"
							className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
							placeholder="amount in naira"
							{...register("amount", { required: false })}
						/>

						<Button type="login">
							Submit
							<span>{isLoading && <Spinner />}</span>
						</Button>
					</form>
				</main>
			</div>
		</div>
	);
}

export default Page;
