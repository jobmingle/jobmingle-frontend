// components/FAQSection.js
"use client";
import { useState } from "react";
import Image from "next/image";
import LaptopPic from "@/public/jobSearch.jpg";
import { faqItemss } from "@/lib/_exportLinks";
// Declaring type for FAQ items

const FAQSections = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div
			id="FAQ"
			className="flex justify-around items-center max-w-screen-xl mb-[4rem] max-md:border max-md:rounded-lg max-md:mx-2 md:mb-[6rem] mx-auto px-5 bg-white h-[100%]"
		>
			<div className="relative group">
				<Image
					src={LaptopPic}
					alt="ImageOne"
					className="max-lg:hidden  w-[900px] h-[450px] shadow rounded-2xl object-cover img1"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
					<p className="text-white text-center px-4 text-2xl">
						Find the best remote jobs available on JobMingle
					</p>
				</div>
			</div>
			<div className="w-full max-lg:mt-10">
				<div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-3">
					<div className="flex flex-col">
						<h2 className="font-bold text-5xl mb-2 tracking-tight max-sm:text-center">
							FAQs
						</h2>
					</div>
					{faqItemss.map((item, index) => (
						<FAQItem
							key={index}
							index={index}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === index}
							onToggle={handleToggle}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
//component

type FAQItemProps = {
	index: number;
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: (index: number) => void;
};

const FAQItem = ({
	index,
	question,
	answer,
	isOpen,
	onToggle,
}: FAQItemProps) => {
	return (
		<div className="py-5">
			<div
				className={`group ${isOpen ? "open" : ""}`}
				onClick={() => onToggle(index)}
			>
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>{question}</span>
					<span className="transition group-open:rotate-180">
						<svg
							fill="none"
							height="24"
							shapeRendering="geometricPrecision"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							width="24"
						>
							<path d="M6 9l6 6 6-6"></path>
						</svg>
					</span>
				</summary>
				{/* if it opens close else opene it  */}
				{isOpen && (
					<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
						{answer}
					</p>
				)}
			</div>
		</div>
	);
};

export default FAQSections;
