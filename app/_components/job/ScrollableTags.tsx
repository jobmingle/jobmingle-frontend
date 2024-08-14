import { jobTags } from "@/lib/_exportLinks";
import { useRef } from "react";

export default function ScrollableTags() {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);

	const scroll = (direction: any) => {
		const { current } = scrollContainerRef;
		if (direction === "left") {
			current?.scrollBy({ left: -200, behavior: "smooth" });
		} else {
			current?.scrollBy({ left: 200, behavior: "smooth" });
		}
	};

	return (
		<div className="relative py-4 h-[100px] items-center flex">
			<button
				onClick={() => scroll("left")}
				className="absolute left-0 z-10 bg-white border border-gray-300 text-yellow-500 px-3 py-1 rounded-full shadow-sm hover:bg-gray-100 transition"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-7 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
			<div
				ref={scrollContainerRef}
				className="flex space-x-2 overflow-x-hidden scrollbar-hide px-10"
			>
				{jobTags.map((tag, index) => (
					<span
						key={index}
						className="whitespace-nowrap bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-full shadow-sm cursor-pointer hover:bg-yellow-200 transition"
					>
						{tag}
					</span>
				))}
			</div>
			<button
				onClick={() => scroll("right")}
				className="absolute right-0 z-10 bg-white border border-gray-300 text-yellow-500 px-3 py-1 rounded-full shadow-sm hover:bg-gray-100 transition"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-7 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</div>
	);
}

// export default function ScrollableTags() {
// 	return (
// 		<div className="overflow-x-auto py-4">
// 			<div className="flex space-x-2 px-4">
// 				{JobTags.map((tag, index) => (
// 					<span
// 						key={index}
// 						className="whitespace-nowrap bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100 transition"
// 					>
// 						{tag}
// 					</span>
// 				))}
// 			</div>
// 		</div>
// 	);
// }
