import { HiMiniXMark } from "react-icons/hi2";

export default function SearchBar({
	searchQuery,
	setSearchQuery,
	icon,
	title,
	placeholder,
}: any) {
	function handleClearSearch() {
		setSearchQuery("");
	}

	return (
		<div className="bg-gray-200 py-3 md:py-7 rounded-md">
			<div className=" md:max-w-5xl mx-auto px-">
				<h1 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-5">
					{title}
				</h1>
				<div className="relative bg-white md:rounded-full shadow-lg flex items-center max-md:flex-col max-md:py-2">
					<div className="flex-1 flex items-center px-4 py-3  max-md:rounded-full max-md:bg-stone-300">
						<span className="text-gray-500 text-2xl mx-3">{icon}</span>
						<input
							type="text"
							placeholder={`${placeholder} or keyword`}
							className="flex-1 bg-transparent outline-none text-gray-700"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						{searchQuery.length >= 1 && (
							<button className="text-2xl " onClick={handleClearSearch}>
								<HiMiniXMark />
							</button>
						)}
					</div>

					{/* <button className="bg-yellow-500 max-md:hidden text-white rounded-full py-2 px-6 m-2 hover:bg-yellow-700">
						Search
					</button> */}
				</div>
			</div>
		</div>
	);
}
