import Image from "next/image";
import LaptopPic from "@/public/jobSearch.jpg";
import LaptopPicTwo from "@/public/african-american-business-woman-holding-laptop-standing-by-window.png";
import LaptopPicThree from "@/public/Pexels Photo by Christina Morillo.svg";
import LaptopPicFour from "@/public/christina.png";
import AboutSlider from "@/app/component/ui/AboutSlider";
import Services from "@/app/component/ui/Services";
import Testimonials from "@/app/component/ui/Testimonials";
import FAQ1 from "@/app/component/ui/FAQSection";
import FAQ2 from "../component/ui/FAQSection2";
import TeamSection from "../component/ui/TeamMember";
import CoreValueCard from "../component/ui/CoreValueCard";
import Contact from "../contact-us/page";

const AboutSection = () => {
	return (
		<section id="about" className="md:px-8  md:py-">
			<div className="w-full h-full flex flex-row justify-around items-start mt-1 max-md:mt-[10px] px-[1rem] max-md:p-[1rem] max-md:flex-col max-md:justify-center max-md:items-center md:gap-10  ">
				<div
					className="w-[70%] max-md:w-full  flex justify-start flex-col mt-[5rem] max-md:ml-[2px] max-md:mt-[1rem] sm:border-none border-solid border-2 border-yellow-400 sm:text-start text-center p-5 shadow-xl shadow-cyan-800"
					data-aos="zoom-in"
				>
					<div
						className="text-[56.5px] max-md:text-[30px] font-extrabold text-black"
						style={{ fontFamily: "Raleway" }}
					>
						<h2
							data-aos="fade-left"
							className="text-5xl mb-3 max-md:text-1xl text-font-extrabold max-md:font-bold leading-[82px] max-md:leading-[24px] max-md:text-[29px]"
						>
							JOBMINGLE <span className="text-yellow-400">OVERVIEW</span>
						</h2>
					</div>
					<div className="w-[90%] max-md:pr-[4%] max-md:text-justify max-md:w-auto text-[#4f4f53] font-[50px] font-sans leading-normal max-md:text-[15.5px] space-y-4">
						<p>
							JobMingle is an ed-tech and remote job recruitment website that
							empowers individuals seeking to transition to a new career with
							high-income skills and provides access to numerous remote job
							opportunities across the country.
						</p>
						<p className="max-md:mt-3">
							Incorporated on July 25th, 2023, and launched in March, 2024,
							JobMingle aims to assist those who are tired of the traditional
							9-5 jobs and are looking for ways to earn money online, working
							from home doing the things they love. We are committed to building
							the best ed-tech and remote job recruitment company in Nigeria for
							job applicants, employers, and course creators.
						</p>
						<p className="max-md:mt-3">
							JobMingle is leveraging technology to address the skills
							acquisition gap and meet human resources needs in the remote
							industry in Nigeria. Join us as we turn this dream into a reality!
						</p>
					</div>
				</div>

				<div className="flex w-[80%] h-full gap-[1rem] mt-[6.5rem] max-md:gap-[1rem] max-md:mt-[20%]">
					<div className="flex flex-col gap-y-6">
						<div className="relative group sm:block hidden ">
							<Image
								src={LaptopPic}
								data-aos="fade-down-right"
								alt="ImageOne"
								className="h-[200px] shadow-lg rounded-2xl object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
								<p className="text-white text-center px-4">
									Meet human resources needs
								</p>
							</div>
						</div>

						<div className="relative group ">
							<Image
								className="h-[200px] shadow-lg rounded-2xl object-cover"
								src={LaptopPicTwo}
								data-aos="fade-down-left"
								alt="imagetwo"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
								<p className="text-white text-center px-4">earn money online</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-y-6 mt-[-10%] ">
						<div className="relative group sm:block hidden">
							<Image
								className="h-[200px] shadow-lg rounded-2xl object-cover"
								src={LaptopPicThree}
								data-aos="fade-up-right"
								alt="imagethree"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
								<p className="text-white text-center px-4">
									High-income skills
								</p>
							</div>
						</div>
						<div className="relative group">
							<Image
								className="h-[200px] shadow-lg rounded-2xl object-cover"
								src={LaptopPicFour}
								data-aos="fade-up-left"
								alt="imagefour"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
								<p className="text-white text-center px-4">
									dream into a reality
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="h-full my-[5%] max-md:h-fit max-md:mt-[10px]">
				<div className="flex flex-wrap items-center justify-center mt-8 gap-8">
					<CoreValueCard
						title="MISSION"
						aos="zoom-in"
						aostimer="3000"
						description="To be the most preferred ed-tech & remote jobs company where employers can easily find the talent they desire, and jobseekers can effortlessly find the jobs they need."
					/>
					<CoreValueCard
						title="VISION"
						aos="zoom-in"
						aostimer="5000"
						description="To empower individuals and jobseekers with the tools they need to transition to new, high-income careers through comprehensive digital skills training and strategic connections to remote opportunities."
					/>
					<CoreValueCard
						title="OUR CORE VALUES"
						aos="zoom-in"
						aostimer="6000"
						description="Being problem solvers is integral to our identity. Therefore, our core values are teamwork, innovation, competency, and community."
					/>
				</div>
			</div>
			<AboutSlider />
			<Services />
			<TeamSection />
			<Testimonials />
			<FAQ2 />
			<Contact />
		</section>
	);
};

export default AboutSection;
