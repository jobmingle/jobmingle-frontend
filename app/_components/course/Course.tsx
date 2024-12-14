"use client";

import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";

import Spinner from "../ui/Spinner";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import { HiArrowLeft, HiCreditCard } from "react-icons/hi2";
import {
	useCoursePaymentMutation,
	useGetAllCoursesQuery,
	useGetCourseByIdQuery,
	useGetEnrolledCoursesQuery,
} from "@/app/_features/appSlices/apiSlice";
import { formatCurrency, ShareCourse } from "@/lib/helpers";
import { useAppSelector } from "@/app/_hooks/hooks";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import NoListings from "../ui/NoListings";

interface CoursePageProps {
	params: { id: string };
}

const CoursesPage = (params: CoursePageProps) => {
	const user = useAppSelector(userData);
	const router = useRouter();

	const userId = user?.id;
	const { currentData: studentCourse, isFetching } = useGetEnrolledCoursesQuery(
		userId,
		{
			// pollingInterval: 3000,
			refetchOnMountOrArgChange: true,
			skip: false,
		}
	);

	const courseId = params?.params?.id;
	const {
		currentData: courseData,
		isFetching: isFetchingCourse,
		isLoading,
	} = useGetCourseByIdQuery(courseId, {
		// pollingInterval: 3000,
		refetchOnMountOrArgChange: true,
		skip: false,
	});

	const course = courseData?.data;
	// const course = courses?.find(
	// 	(job: any) => job.id === Number(params.params.id)
	// );

	const isPaid = studentCourse.some(
		(paidCourse: any) => paidCourse.id === +courseId
	);


	const [coursePayment, { isLoading: isPaying, error: paymentError }] =
		useCoursePaymentMutation();

	const isVendor = user?.goals === "List a course";
	const isStudent = user?.goals === "Apply for a job / Take a course";

	function handleBack() {
		router.back();
	}

	function handleShareCourse(courseId: string) {
		ShareCourse(course, courseId);
	}

	async function initiatePayment(courseId: any, price: any) {
		const payData = {
			amount: price,
			course_id: courseId,
		};
		try {
			const res: any = await coursePayment(payData).unwrap();

			window.open(
				res?.authorization_url.toString(),
				"_blank",
				"noopener,noreferrer"
			);
			if (res.success) {
				toast.success("Please kindly proceed to make payment!");
				// router.push(res?.authorization_url.toString());
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
			console.error(error);
		}
	}

	if (isLoading) {
		return <Spinner />;
	}

	if (!course && !isLoading) {
		return (
			<NoListings
				url="/dashboard/courses"
				title="Course not found! :)"
				comment="Please check out other avaialble courses..."
				url_text="Checkout available courses"
			/>
		);
	}

	return (
		<div>
			<main className=" flex flex-col items-center py-10">
				<section className="w-full xl:w-[80%]  ">
					<div
						key={course?.id}
						className="flex flex-col mg:grid grid-rows-2  gap-4 border p-2  md:p-5 rounded-md  lg:h-[850px]- "
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
							<p className=" text-xl sm:text-[85%]- montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
								{course[0].displayname}
							</p>
							<p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
								{course[0].summary}
							</p>
							<p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
								<strong>Requirements:</strong> {course?.course_requirements}
							</p>
							<div className="flex flex-row justify-between">
								<p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">
									Course by {course?.course_creator_name}
								</p>
								<button
									className="w-6 h-6"
									onClick={() => handleShareCourse(course?.id)}
								>
									<Image src={share} alt="shareicon" />
								</button>
							</div>
							<div className="flex flex-row justify-between">
								<div className="flex flex-row items-center gap-1 text-xl">
									<HiCreditCard />
									<div className="flex flex-col">
										<p className="sora text-[65%] font-semibold">
											{formatCurrency(course?.price)}
										</p>
									</div>
								</div>
								<p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">
									{course?.enrolled_users}
								</p>
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
							<div className="border-b-[2px]- border-solid border-x-black-100 py-1">
								{isPaid ? (
									<Button
										type="regular"
										onClick={() => {
											window.open(
												"https://courses.jobmingle.co/",
												"_blank",
												"noopener,noreferrer"
											);
										}}
									>
										Go to Course
									</Button>
								) : (
									<Button
										type="regular"
										onClick={(e) => {
											e.preventDefault();
											initiatePayment(course?.course_id, course?.price);
										}}
										disabled={isPaying}
									>
										{isPaying ? (
											<span>
												<Spinner />
											</span>
										) : (
											"Enroll"
										)}
									</Button>
								)}
								{/* </button> */}
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	);
};

export default CoursesPage;
