// components/ServiceCard.js

"use client";

import Head from "next/head";
import { useState } from "react";
import bg from "@/public/hello.png";
import Button from "../atoms/Button";

type Props = {
	title: string;
	description: string;
	aos: string;
	aostime: string;
	n: string;
	hasMoreInfo?: boolean;
	onSeeMoreClick?: () => void;
};

function HowItWorks() {
	const [isRecruitmentModalOpen, setIsRecruitmentModalOpen] = useState(false);
	const [isCvModalOpen, setIsCvModalOpen] = useState(false);

	const handleRecruitmentSeeMoreClick = () => {
		setIsRecruitmentModalOpen(true);
	};

	const handleCvSeeMoreClick = () => {
		setIsCvModalOpen(true);
	};

	const closeRecruitmentModal = () => {
		setIsRecruitmentModalOpen(false);
	};

	const closeCvModal = () => {
		setIsCvModalOpen(false);
	};

	return (
		<div
			className={`flex flex-col items-center mt-[72px] justify-center ${
				isRecruitmentModalOpen || isCvModalOpen ? "blur-background" : ""
			}`}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
			}}
		>
			<Head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
				></script>
				<meta name="google-adsense-account" content="ca-pub-9738664936744628" />
			</Head>
			<div
				className="Ellipse1 w-96 h-96 opacity-80 z-10 bg-[#f5cb1a63] rounded-full blur-[190px] absolute left-[70%] bottom-[20%] max-md:hidden"
				data-aos="zoom-in"
			/>

			<h3 className="mt-[3%] text-4xl font-bold max-md:text-4xl max-md:text-left">
				OUR SERVICES
			</h3>

			<div className="h-full my-[1%] max-md:h-fit max-md:mt-[10px]">
				<div className="flex flex-wrap justify-center items-center mt-8 gap-5">
					<ServiceCard
						title="RE-SKILLING"
						aostime="3000"
						n="1"
						aos="fade-left"
						description="Transitioning to a new career doesn't have to be difficult. All you need is the right kind of training
            to acquire the skills necessary for success, and that's precisely what JobMingle offers. We
            provide you with access to the right courses and experts that guide you from being a novice to a
            pro."
					/>
					<ServiceCard
						title="UP-SKILLING"
						aostime="3000"
						n="2"
						aos="fade-up"
						description="To stand out in your niche, you must constantly seek ways to improve your existing skills. For
            example, as a Facebook ads expert, it also makes sense to have comprehensive knowledge of
            Google advertising. At JobMingle, we offer a wide variety of digital courses that provide you with
            opportunities to advance your career with ease."
					/>
					<ServiceCard
						title="REMOTE JOB LISTINGS"
						aostime="3000"
						aos="fade-right"
						n="3"
						description="In today's world, acquiring a digital skill is not enough; you must be ready to put it to work. One
            of the challenges faced by new freelancers today is the scarcity of remote job opportunities.
            That's why at JobMingle, we not only enhance your skills, but we also provide access to
            numerous remote job opportunities across the country."
					/>

					<ServiceCard
						title="RECRUITMENT (Done-For-You)"
						aostime="3000"
						aos="fade-right"
						n="4"
						description="You don't have to subject yourself to the stress of sifting through numerous CVs and conducting interviews with hundreds of applicants to find the right candidate. Let our HR team handle that for you. They'll help you shortlist the top 3 candidates, and then you can make the final hiring decision."
						hasMoreInfo={true}
						onSeeMoreClick={handleRecruitmentSeeMoreClick}
					/>
					<ServiceCard
						title="CV SERVICES/PORTFOLIO WEBSITE"
						aostime="3000"
						aos="zoom-in"
						n="5"
						description="Tired of writing cover letters and submitting CVs that fail to land interviews? 
            Do you need a professional portfolio that showcases your skills, past work samples, and clearly communicates your expertise to potential employers? 
            If so, our expert CV writer and portfolio developer can help you boost your interview chances today...
            By creating a personalized CV and portfolio that meet your needs and help you stand out in the job market."
						hasMoreInfo={true}
						onSeeMoreClick={handleCvSeeMoreClick}
					/>

					{/* video card */}
				</div>
			</div>

			{isRecruitmentModalOpen && (
				<div className="fixed top-0 left-0 inset-0 flex items-center justify-center z-50">
					<div
						className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
						onClick={closeRecruitmentModal}
					></div>
					<div className="bg-white rounded-lg p-8 z-50 w-[90%] max-w-2xl max-h-[90vh] overflow-auto  shadow-lg">
						<h2 className="text-2xl font-bold mb-4">More Information</h2>
						<p className="text-lg leading-relaxed">
							<strong>What Our HR Experts Will Do For You:</strong>
							<ul className="list-disc ml-5 mt-2">
								<li>
									Craft a well-tailored job description and responsibilities.
								</li>
								<li>
									Post the job on our platform and various communities to
									attract high-quality candidates.
								</li>
								<li>
									Our HR team will screen and shortlist the top 10 candidates
									for the role.
								</li>
								<li>
									Conduct interviews to ensure they are qualified for the
									position.
								</li>
								<li>Deliver the top 3 candidates to you within a few days.</li>
							</ul>
							<div className="mt-4">
								<strong>FEE:</strong> #10,000
							</div>
							<div className="mt-2 flex items-center">
								WhatsApp/Call us here:{" "}
								<a
									href="https://wa.me/2347077308481"
									className="text-blue-500 text-lg"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="32"
										height="32"
										viewBox="0 0 48 48"
										className="ml-2"
										fill="#34A853"
									>
										<path
											fill="#fff"
											d="M4.868,44.041c-1.026,0-1.793-0.274-2.434-0.863c-0.918-0.822-1.18-2.071-0.726-3.312L7.5,30.373
                        c-1.644-2.739-2.498-5.792-2.498-8.999c0-9.925,8.073-17.999,17.998-17.999c4.807,0,9.322,1.872,12.731,5.279
                        c3.41,3.409,5.279,7.924,5.279,12.72c0,9.926-8.073,18.001-17.998,18.001c-3.032,0-6.017-0.777-8.654-2.249l-11.428,2.934
                        C5.922,43.861,5.399,44.041,4.868,44.041z"
										/>
										<path
											fill="#fff"
											d="M21.002,9.501c-6.907,0-12.5,5.594-12.5,12.5c0,2.866,0.932,5.61,2.696,7.867
                        c0.42,0.531,0.556,1.221,0.372,1.867l-1.372,4.897l4.906-1.26c0.199-0.052,0.402-0.078,0.605-0.078
                        c0.469,0,0.926,0.146,1.303,0.419c2.456,1.826,5.353,2.796,8.39,2.796c6.906,0,12.5-5.595,12.5-12.501
                        c0-3.34-1.301-6.476-3.662-8.838C27.478,10.801,24.342,9.501,21.002,9.501z M30.154,30.855c-0.393,1.094-2.271,2.056-3.14,2.118
                        c-0.244,0.017-0.507,0.025-0.781,0.025c-0.666,0-1.429-0.098-2.205-0.291c-2.239-0.594-4.871-2.086-6.738-4.005
                        c-1.866-1.918-3.267-4.527-3.813-6.758c-0.338-1.271-0.227-2.374,0.322-3.115c0.288-0.381,0.755-0.854,1.36-0.848
                        c0.319,0.004,0.677,0.114,1.093,0.326c0.284,0.146,0.604,0.354,0.961,0.609c0.22,0.15,0.457,0.328,0.706,0.523
                        c0.406,0.312,0.84,0.646,1.171,0.888c0.167,0.122,0.318,0.231,0.458,0.326c0.351,0.234,0.635,0.422,0.87,0.604
                        c0.208,0.157,0.408,0.31,0.61,0.461c0.188,0.14,0.379,0.282,0.566,0.415c0.102,0.073,0.204,0.147,0.303,0.218
                        c0.257,0.185,0.497,0.359,0.732,0.528c0.155,0.111,0.318,0.228,0.49,0.354c0.454,0.328,0.911,0.658,1.375,0.99
                        c0.271,0.192,0.545,0.38,0.822,0.573c0.251,0.173,0.503,0.345,0.754,0.515c0.35,0.237,0.707,0.478,1.065,0.721
                        c0.216,0.148,0.435,0.293,0.653,0.438c0.123,0.081,0.243,0.16,0.365,0.239c0.438,0.285,0.875,0.568,1.313,0.846
                        c0.255,0.162,0.514,0.318,0.776,0.474c0.06,0.036,0.124,0.071,0.187,0.107c0.468,0.268,0.933,0.535,1.393,0.799
                        c0.173,0.097,0.35,0.192,0.525,0.289c0.051,0.029,0.101,0.057,0.152,0.086C30.155,30.854,30.155,30.855,30.154,30.855z"
										/>
									</svg>
								</a>
							</div>
							<div className="mt-4 flex justify-center">
								<Button
									onClick={closeRecruitmentModal}
									className="w-[100px] rounded-lg text-white border-none bg-[#f5cb1a]"
								>
									Close
								</Button>
							</div>
						</p>
					</div>
				</div>
			)}
			{isCvModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div
						className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
						onClick={closeCvModal}
					></div>
					<div className="bg-white rounded-lg p-4 md:p-8 z-50 w-[90%] max-w-2xl max-h-[90vh] overflow-auto shadow-lg">
						<h2 className="text-xl md:text-2xl font-bold mb-4">Our Packages</h2>
						<table className="w-full text-left border-collapse">
							<thead>
								<tr>
									<th className="border-b py-2 text-sm md:text-base">
										Package
									</th>
									<th className="border-b py-2 text-sm md:text-base">
										Details
									</th>
									<th className="border-b py-2 text-sm md:text-base">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border-b py-2 text-sm md:text-base">
										Premium Package
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										<ul className="list-disc ml-5">
											<li>ATS-optimized CV/Resume</li>
											<li>Personalized cover letter</li>
											<li>Keyword-optimised LinkedIn profile</li>
											<li>Professional portfolio website</li>
										</ul>
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										NGN 40,000
									</td>
								</tr>
								<tr>
									<td className="border-b py-2 text-sm md:text-base">
										Standard Package
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										<ul className="list-disc ml-5">
											<li>ATS-optimized CV/Resume</li>
											<li>Personalized cover letter</li>
											<li>Keyword-optimised LinkedIn profile</li>
										</ul>
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										NGN 20,000
									</td>
								</tr>
								<tr>
									<td className="border-b py-2 text-sm md:text-base">
										Basic Package
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										<ul className="list-disc ml-5">
											<li>ATS-optimized CV/Resume</li>
											<li>Personalized cover letter</li>
										</ul>
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										NGN 10,000
									</td>
								</tr>
							</tbody>
						</table>
						<div className="mt-4 text-sm md:text-base">
							<strong>Account details:</strong>
							<p>2044112176</p>
							<p>JobMingle Nigeria</p>
							<p>FirstBank</p>
						</div>
						<div className="mt-4 text-sm md:text-base">
							<strong>WhatsApp us with proof of payment:</strong> 07077308481
						</div>
						<div className="mt-4 text-sm md:text-base">
							<strong>Want A Customized Service?</strong>
							<p>Please reach out to us via the following:</p>
							<p>Email: contact@jobmingle.co</p>
							<p>WhatsApp: 07077308481</p>
						</div>
						<div className="mt-4 flex justify-center">
							<Button
								onClick={closeCvModal}
								className="w-[100px] rounded-lg text-white border-none bg-[#f5cb1a]"
							>
								Close
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default HowItWorks;

function ServiceCard({
	title,
	description,
	aos,
	aostime,
	n,
	hasMoreInfo,
	onSeeMoreClick,
}: Props) {
	return (
		<div
			data-aos={aos}
			data-aos-duration={aostime}
			className="shadow-lg max-md:mt-3 z-10 flex flex-col h-[550px] max-md:h-fit md:h-fit max-md:w-[300px] w-[350px] text-slate-400 hover:text-[#27272a] rounded-2xl border-2 border-blue-100 pl-5 pt-2 transition duration-500 hover:shadow-lg max-md:hover:ml-[5px] max-md:p-[9px] group border-animate service-card"
		>
			<div className="relative  z-20 flex-shrink-0 w-12 h-12 rounded-full bg-[#FFBE0B] items-center justify-center flex text-center my-5">
				<p className="text-2xl font-bold text-center text-black">{n}</p>
			</div>
			<div className="font-bold text-[16px] leading-loose mb-3 text-[black]">
				{title}
			</div>
			<div className="font-medium font-sans leading-normal p-4  flex-grow">
				{description}
			</div>
			{hasMoreInfo && (
				<div className="mt-auto flex justify-center mb-5">
					<Button
						onClick={onSeeMoreClick}
						className="w-[150px] mt-3 max-md:w-[150px] rounded-lg text-[12px] text-black border-white border-solid  bg-[#f5cb1a]"
					>
						<span className="mr-2">See More</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</Button>
				</div>
			)}
		</div>
	);
}
