import Image from "next/image";
import { teamMembers } from "@/lib/_exportLinks";

export default function TeamSection() {
	return (
		<div className="flex  items-center justify-center h-[100%] my-16 md:mt-32 ">
			<div className="flex flex-col">
				<div className="flex flex-col">
					<div className="container max-w-7xl   ">
						<div className="flex flex-wrap justify-center text-center mb-10">
							<div data-aos="fade-up" className="w-full lg:w-6/12 px-4">
								<h1 className="text-gray-900 text-4xl font-bold mb-4">
									Meet the Team
								</h1>
								<p className="text-gray-700 text-lg font-light px-5 text-center">
									With years of combined experience, we&#39;ve got a
									well-seasoned team at the helm.
								</p>
							</div>
						</div>
						<div className="flex overflow-x-auto max-md:overflow-x-hidden items-center justify-center max-md:flex-col space-x-4 py-4  custom-scrollbar">
							{teamMembers.map((member, index) => (
								<div
									key={index}
									data-aos="zoom-in"
									className="flex-shrink-0 w-[300px] md:w-6/12 lg:w-3/12 mb-6 px-3 sm:px-6 lg:px-4"
								>
									<div className="flex flex-col items-center">
										<Image
											className="rounded-2xl h-[300px] object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
											src={member.src}
											alt={`${member.name} photo`}
											width={300}
										/>
										<div className="text-center  mt-6">
											<h1 className="text-gray-900 text-xl font-bold mb-1">
												{member.name}
											</h1>
											<div className="w-[40%] items-center h-[2px] bg-[#eab308] "></div>
											<div className="text-gray-700 font-light mb-2">
												{member.role}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
