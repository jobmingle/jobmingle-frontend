import { jobTags } from "@/lib/_exportLinks";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type ComponentProps = {
	tags: string[];
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function ScrollableTags({
	setSearchQuery,
	tags,
}: ComponentProps) {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);

	const scroll = (direction: "left" | "right") => {
		const { current } = scrollContainerRef;
		if (direction === "left") {
			current?.scrollBy({ left: -200, behavior: "smooth" });
		} else {
			current?.scrollBy({ left: 200, behavior: "smooth" });
		}
	};

	function handleClickTag(query: any) {
		setSearchQuery(query);
	}
	return (
		<div className="relative py-4 h-[100px] items-center flex">
			<button
				onClick={() => scroll("left")}
				className="absolute left-0 z-10 text-2xl bg-white border border-gray-300 text-yellow-500 px-3 py-1 rounded-full shadow-sm hover:bg-gray-100 transition"
			>
				<HiChevronLeft />
			</button>
			<div
				ref={scrollContainerRef}
				className="flex space-x-2 overflow-x-hidden scrollbar-hide px-10"
			>
				{tags.map((tag, index) => (
					<input
						className="whitespace-nowrap bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-full shadow-sm cursor-pointer hover:bg-yellow-200 transition"
						key={index}
						type="button"
						value={tag}
						onClick={() => handleClickTag(tag)}
					/>
				))}
			</div>
			<button
				onClick={() => scroll("right")}
				className="absolute right-0 z-10 text-2xl bg-white border border-gray-300 text-yellow-500 px-3 py-1 rounded-full shadow-sm hover:bg-gray-100 transition"
			>
				<HiChevronRight />
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
