"use client";

import Image from "next/image";
import Button from "../atoms/Button";
import HomeImg from "@/public/image/home-hero-final-5.png";
import Link from "next/link";

const Hero = () => {
	// const path =
	// 	"https://www.netcraft.com/wp-content/uploads/2023/04/home-hero-final-5.png";

	return (
		<div
			id="home"
			className="  flex justify-center items-start md:mb-[5rem]  md:items-center  md-justify-center flex-col md:flex-row  "
		>
			{/* Right column */}
			<div className="w-full  md:hidden lg:hidden  h-full flex items-center justify-center my-10  ">
				<Image
					src={HomeImg}
					alt="Background"
					data-aos="zoom-in"
					style={{ objectFit: "cover" }}
					priority
					// className="h-auto w-auto"
					className=" max-md:w-[400px] max-md:h-[300px]"
				/>
			</div>
			{/* Left column */}
			<div className="relative   flex lg:items-start  flex-col h-full max-md:border-2 max-md:py-6 max-md:mb-6  md:px-2 ">
				<div
					className="flex w-full justify-center md:justify-start flex-col"
					data-aos="zoom-in"
					style={{ fontFamily: "Ubuntu" }}
				>
					<div className="w-full text-center items-center lg:text-start text-balance text-[2rem] font-bold font-sans  max-md:text-[1.9rem] max-md:leading-normal text-black">
						Your{" "}
						<span className="text-yellow-500 font-extrabold ">
							Dream Remote Job
						</span>
						<span> Awaits - Let Us Skill You Up and Guide You There</span>
					</div>
				</div>

				<div
					className="text-center lg:text-start  text-balance justify-center font-revert text-[#545454] mb-3 mt-5 text-lg font-medium px-[5px] "
					data-aos="zoom-in"
					data-aos-duration="1000"
					data-aos-delay="500"
				>
					Join the exclusive set of individuals who are now learning a
					high-income skill to make their dream remote job a reality
					<br />
					<b>Join the JobMingle family today</b>
				</div>

				<div
					className="flex justify-center max-md:mx-auto lg:justify-start   lg:items-start  my-6"
					data-aos="zoom-in"
					data-aos-duration="1200"
					data-aos-delay="700"
					id="animationbutton"
				>
					<Link href="/sign-up">
						<Button className="w-[200px] max-md:py-6 text-[16px] border-white border-solid shadow shadow-black bg-[#f5cb1a]">
							Get Started
						</Button>
					</Link>
				</div>
			</div>

			{/* Right column */}
			<div className="w-full max-lg:hidden h-full flex items-center justify-center">
				<Image
					src={HomeImg}
					alt="Background"
					data-aos="zoom-in"
					style={{ objectFit: "cover" }}
					className=" max-md:w-[400px] max-md:h-[300px]"
					priority
				/>
			</div>
		</div>
	);
};

export default Hero;
