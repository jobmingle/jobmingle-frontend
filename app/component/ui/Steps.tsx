// This is React icons https://react-icons.github.io/react-icons, it imports many icon library, I am using Heroicons2 precisely
import { HiSearch } from "react-icons/hi";
import {
	HiAcademicCap,
	HiBriefcase,
	HiChevronDoubleRight,
	HiKey,
	HiMiniPencilSquare,
	HiOutlineBookOpen,
	HiRocketLaunch,
	HiTruck,
	HiXMark,
} from "react-icons/hi2";

export default function Steps() {
	return (
		<div className="flex max-md:flex-col justify-center md:gap-5 mb-5 lg:my-16">
			<div className="flex gap-3 text-xl md:text-4xl font-sans items-center justify-center h-[4rem] md:h-[10rem] w-full md:w-[10rem] lg:w-[20rem] bg-yellow-400 hover:bg-yellow-500 hover:translate-x-2 rounded-l-2xl max-md:rounded-none ">
				<span>STEPS</span> <HiAcademicCap />
			</div>

			<div className="grid  max-md:grid-cols-3 max-md:gap-0 md:grid-cols-5  p-2 items-center justify-center text-center w-full">
				<div className="flex justify-center items-center flex-col h-[10rem] w-full   border border-yellow-500 hover:bg-yellow-400 transition ease-in-out delay-100 duration-1000">
					<div>
						<HiKey className="h-[2.4rem] w-[2.4rem] text-yellow-500 hover:text-white " />
					</div>
					<div className="">
						<h3 className="font-bold text-xl">Step 1</h3>
						<p className=" text-sm text-stone-600 p-2 mt-2 border rounded-md border-yellow-300">
							Sign up!
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center flex-col h-[10rem]  w-full   border border-yellow-500 hover:bg-yellow-400 transition ease-in-out delay-100 duration-1000">
					<div>
						<HiMiniPencilSquare className="h-[2.4rem] w-[2.4rem] text-yellow-500" />
					</div>
					<div>
						<h3 className="font-bold text-xl">Step 2</h3>
						<p className="text-sm text-stone-600 mt-2 p-2 border rounded-md border-yellow-300">
							Update profile
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center flex-col h-[10rem] w-full   border border-yellow-500 hover:bg-yellow-400 transition ease-in-out delay-100 duration-1000">
					<div>
						<HiOutlineBookOpen className="h-[2.4rem] w-[2.4rem] text-yellow-500" />
					</div>
					<div>
						<h3 className="font-bold text-xl">Step 3</h3>
						<p className="text-sm text-stone-600 mt-2 p-2 border rounded-md border-yellow-300">
							Take a course
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center flex-col h-[10rem] w-full  border border-yellow-500 hover:bg-yellow-400 transition ease-in-out delay-100 duration-1000">
					<div>
						<HiSearch className="h-[2.4rem] w-[2.4rem] text-yellow-500" />
					</div>
					<div>
						<h3 className="font-bold text-xl">Step 4</h3>
						<p className="text-sm text-stone-600 p-2 mt-2 border rounded-md border-yellow-300">
							Search for job
						</p>
					</div>
				</div>
				<div className="flex max-md:col-span-2  justify-center items-center flex-col h-[10rem] w-full   border border-yellow-500 md:rounded-r-2xl hover:bg-yellow-400 transition ease-in-out delay-100 duration-1000">
					<div>
						<HiBriefcase className="h-[2.4rem] w-[2.4rem] text-yellow-500" />
					</div>
					<div>
						<h3 className="font-bold text-xl">Step 5</h3>
						<p className="text-sm text-stone-600 mt-2 p-2 border rounded-md  border-yellow-300 ">
							Employed
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
