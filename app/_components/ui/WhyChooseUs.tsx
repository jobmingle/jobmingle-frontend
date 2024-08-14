import Image from "next/image";
import Girl from "@/public/2.jpg";
import { whyChooseUsData as slides } from "@/lib/_exportLinks";

export default function WhyChooseUs() {
	return (
		<>
			<div className="p-5">
				<h2 className="text-4xl font-bold text-center text-yellow-500">
					Why <span className="text-stone-800">Choose Us?</span>
				</h2>
			</div>
			<div className=" mb-[3rem] flex p-2 max-lg:flex-col  lg:gap-10 items-center justify-center">
				{slides.map((slide, index) => (
					<WhyChooseUsCard slide={slide} index={index} key={index} />
				))}
			</div>
		</>
	);
}

function WhyChooseUsCard({ slide, index }) {
	return (
		<div className=" border  mb-5  max-w-screen mx-auto p- rounded-lg  border-yellow-  ">
			<div className=" w-">
				<Image
					className="w-full h-[300px] md:h-[400px] lg:h-[250px]  rounded-t-lg object-cover"
					alt={`Slide${index}`}
					src={slide.img}
					width={100}
					height={100}
				/>
				<div className="mt-10 lg:mt-5 p-3">
					<div className="h-1 rounded-lg ml-3 w-16 mt- bg-yellow-500"></div>

					<div className="f p-3">
						<h3 className="text-3xl font-bold">{slide.title}</h3>
						<p className="text-sm text-start ">{slide.description}</p>
					</div>
					{/* <div className="h-1 rounded-lg ml-3 w-16 mt- bg-yellow-500"></div> */}
				</div>
			</div>
		</div>
	);
}
