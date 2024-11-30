"use client";

import tiredicon from "@/public/image/tiredicon.png";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";

import Spinner from "../ui/Spinner";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import { HiArrowLeft } from "react-icons/hi2";

interface CoursePageProps {
	params: { id: string };
}

const CoursesPage = (params: CoursePageProps) => {
	const { courses, isLoading, handleShareCourse, initiatePayment } =
		useJobCourse();
	const { user } = useAuth();
	const router = useRouter();

	const course = courses?.find(
		(job: any) => job.id === Number(params.params.id)
	);

	const isVendor = user?.goals === "List a course";
	const isStudent = user?.goals === "Apply for a job / Take a course";

	if (isLoading && !course) {
		<Spinner />;
	}
	// if (!course) {
	// 	return <h1>Course not found!</h1>;
	// }
	function handleBack() {
		router.back();
	}
	return (
		<div>
			<main className=" flex flex-col items-center py-10">
				<section className="w-full xl:w-[80%]  ">
					<div
						key={course?.id}
						className="flex flex-col mg:grid grid-rows-2  gap-4 border p-2  md:p-5 rounded-md  lg:h-[850px] "
					>
						<section className="items-center max-md:place-self-center ">
							<Image
								src="/image/break-bank.jpg"
								alt="company-icon"
								className="w-full h-[7rem]- md:h-[20rem]  rounded-t-lg"
								width={90}
								height={90}
							/>
						</section>
						<section className="flex flex-col gap-4">
							{/* <p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">
								{course?.shortname}
								</p> */}
							<p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
								{course?.displayname}
							</p>
							<p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
								{course?.summary}
							</p>
							<p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
								<strong>Requirements:</strong> {course?.course_requirements}
							</p>
							<p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">
								{course?.course_creator_name}
							</p>
							<div className="flex flex-row justify-between">
								<div className="flex flex-row items-center gap-1">
									<Image src={tiredicon} alt="tiredicon" className="w-7 h-7" />
									<div className="flex flex-col">
										<p className="sora text-[65%] font-semibold">15 Lessons</p>
									</div>
								</div>
								<p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">
									Not enrolled
								</p>
							</div>
							<div className="flex flex-row justify-between m-1 py-1 ">
								<button className="w-6 h-6">
									<Image src={love} alt="loveicon" />
								</button>
								<button
									className="w-6 h-6"
									onClick={() => handleShareCourse(course?.id)}
								>
									<Image src={share} alt="shareicon" />
								</button>
							</div>
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
							{isStudent && (
								<div className="border-b-[2px]- border-solid border-x-black-100 py-1">
									{/* <button className="border w-full bg-yellow-500 rounded-md text-white py-1.5 capitalize"> */}
									<Button
										type="regular"
										onClick={() =>
											initiatePayment(course?.course_id, course?.price)
										}
									>
										{isLoading ? (
											<span>
												{" "}
												<Spinner />
											</span>
										) : (
											"Enroll"
										)}
									</Button>
									{/* </button> */}
								</div>
							)}
						</section>
					</div>
				</section>
			</main>
		</div>
	);
};

export default CoursesPage;
