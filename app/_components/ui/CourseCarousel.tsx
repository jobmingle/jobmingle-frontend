"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";
import { formatCurrency, timeAgo } from "@/lib/helpers";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import Slider from "react-slick";

interface Course {
	shortname: string;
	fullname: string;
	displayname: string;
	about_vendor: string;
	course_creator_name: string;
	course_requirements: string;
	price: number;
	id: number;
	course_id: number;
	summary: string;

	timecreated: string;
}

interface CarouselProps {
	courses: Course[];
}

const Carousel = () => {
	const { courses }: CarouselProps = useJobCourse();

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
					<h2 className=" text-[1.4rem] lg:text-3xl font-bold text-center">
						EXPERT LED COURSES FOR YOU
					</h2>
				</div>
				<div className="w-full mt-5 lg:bg-stone-600-">
					<div className="w-full  lg:w-[85%] m-auto ">
						<Slider {...settings}>
							{courses.map((course, index) => (
								<div key={index} className="p-2">
									<CourseCard course={course} />
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

interface CourseCardProps {
	course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
	const { handleShareCourse } = useJobCourse();

	let link = "";
	return (
		<div
			key={course.id}
			className="rounded-2xl border-l-8 border-t-2- border-yellow-600 h-auto "
		>
			<div
				key={course.id}
				className="shadow shadow-yellow-500 p-2 md:p-3 rounded-md h-[100%] flex flex-col justify-center"
			>
				<div className="grid grid-cols-2  gap-4  ">
					<section className="flex items-center">
						<Image
							src="/image/break-bank.jpg"
							alt="company-icon"
							className="w-full h-[8rem] md:h-[9rem] lg:h-full rounded"
							width={90}
							height={90}
						/>
					</section>
					<div className="flex flex-col">
						<p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
							{course.course_creator_name}
						</p>
						<p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">
							{course.displayname}
						</p>
						{/* <p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">
							{course.summary.split(" ").slice(0, 2).join(" ") + "..."}
						</p> */}
						<section className="flex flex-row justify-between">
							<div className="flex flex-row items-center gap-1">
								{/* <Image src={tiredicon} alt="tiredicon" className="w-7 h-7" />
									<div className="flex flex-col">
										<p className="sora text-xs font-bold capitalize text-blue-900">
											prosper
											</p>
											<p className="sora text-[65%] font-semibold">15 Lessons</p>
											</div> */}
							</div>
							<p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">
								Not Enrolled
							</p>
						</section>
						<section className="flex flex-row justify-between m-1 py-1 ">
							<button className="w-6 h-6">
								<Image src={love} alt="loveicon" />
							</button>
							<button
								className="w-6 h-6"
								onClick={() => handleShareCourse(course?.id)}
							>
								<Image src={share} alt="shareicon" />
							</button>
						</section>
						<section className=" border-solid border-x-black-100 py-1">
							<Link href={`/courses/${course.id || course.course_id}`}>
								<button
									className="border w-full bg-white rounded-md font-bold  text-black hover:bg-yellow-500 hover:text-white py-1.5 capitalize transition-all duration-1000"
									// onClick={handleApplyClick}
								>
									Learn More
								</button>
							</Link>
						</section>
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
