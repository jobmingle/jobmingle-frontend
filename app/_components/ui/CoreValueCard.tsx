type Props = {
	title: string;
	description: string;
	aos: string;
	aostimer: string;
};

export default function CoreValueCard({
	title,
	description,
	aos,
	aostimer,
}: Props) {
	return (
		<div
			data-aos={aos}
			data-aos-duration={aostimer}
			className="shadow-lg max-md:mt-3 z-10 flex-shrink-0 w-[330px] text-slate-400 h-[320px] hover:text-yellow-500 rounded-2xl border-2 border-blue-100 pl-5 pt-2 transition duration-500 hover:bg-black hover:shadow-lg max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group"
		>
			<div className="relative z-20 flex-shrink-0 w-12 h-12 rounded-full bg-white/[.10] flex items-center justify-center my-5">
				<svg
					width={20}
					height={32}
					viewBox="0 0 20 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* SVG Path Here */}
					<path
						d="M10 0L0 32H20L10 0Z" // Example path data
						fill="#e2c105" // Example fill color
					/>
				</svg>
			</div>
			<div className="font-bold text-[16px] leading-loose mb-3 text-black group-hover:text-yellow-500">
				{title}
			</div>
			<div className="font-medium group-hover:text-white">
				<p>{description}</p>
			</div>
		</div>
	);
}
