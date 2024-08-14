"use client";

import ScrollableTags from "./ScrollableTags";

export default function JobHeader() {
	return (
		<div className="bg-gray-200 py-10 rounded-md">
			<div className=" md:max-w-5xl mx-auto px-4">
				<h1 className="text-3xl font-bold text-start mb-6">
					Find Your Dream Job Here
				</h1>
				<div className="relative bg-white md:rounded-full shadow-lg flex items-center max-md:flex-col max-md:py-5">
					<div className="flex-1 flex items-center px-4 py-3  max-md:rounded-full max-md:bg-stone-300">
						<span className="text-gray-500 mr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 9V7a4 4 0 014-4h4a4 4 0 014 4v2M6 21h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2z"
								/>
							</svg>
						</span>
						<input
							type="text"
							placeholder="Job title or keyword"
							className="flex-1 bg-transparent outline-none text-gray-700"
						/>
					</div>
					<div className="h-6 border-l border-gray-300"></div>
					<div className="flex-1 flex items-center px-4 py-3 max-md:rounded-full max-md:bg-stone-300">
						<span className="text-gray-500 mr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 9a2 2 0 110-4 2 2 0 010 4z"
								/>
							</svg>
						</span>
						<input
							type="text"
							placeholder="Add country or city"
							className="flex-1 bg-transparent outline-none text-gray-700"
						/>
					</div>
					<button className="bg-yellow-500 text-white rounded-full py-2 px-6 m-2 hover:bg-yellow-700">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
