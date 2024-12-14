import Link from "next/link";

import { BsInstagram, BsMedium, BsTiktok, BsTwitterX } from "react-icons/bs";
import {
	FaFacebook,
	FaFacebookF,
	FaLinkedinIn,
	FaMailBulk,
	FaPhoneAlt,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer
			id="footer"
			className=" border-t-4 bg-stone-700 text-white- border-yellow-500 py-8"
		>
			{/* <div className="container- mx-auto-  lg:px-4 flex flex-col lg:flex-row  justify-between -lg:justify-between -gap-[2%] max-md:gap-[5%]- max-md:block- items-center-"> */}
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:px-4 mb-8">
				{/* Social Media and Contact Info */}
				<div className="flex flex-col  gap-[10px] justify-between-  items-center lg:items-start mb-8 lg:mb-0">
					<div className="flex space-x-4 mb-4">
						<Link
							target="_blank"
							href="https://web.facebook.com/profile.php?id=61556529943063"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15]  rounded-full   hover:bg-black hover:text-yellow-500 hover:rotate-45 hover:translate-x-1 "
						>
							<FaFacebookF />
						</Link>
						<Link
							target="_blank"
							href="https://www.linkedin.com/company/jobmingle-nigeria/"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full   hover:bg-black hover:text-yellow-500 hover:rotate-45 hover:translate-x-1 "
						>
							<FaLinkedinIn />
						</Link>
						<Link
							target="_blank"
							href="https://www.instagram.com/jobminglengr?igsh=MTZiODRhdnhqeHJtYg=="
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full   hover:bg-black hover:text-yellow-500 hover:rotate-45 hover:translate-x-1 "
						>
							<BsInstagram />{" "}
						</Link>
						<Link
							target="_blank"
							href="https://twitter.com/JobMingleNGR?t=Y9dBxLTQAtyrLzvvc1xfBA&s=09"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full hover:bg-black hover:text-yellow-500 hover:rotate-45 hover:translate-x-1 "
						>
							<BsTwitterX />
						</Link>
						<Link
							target="_blank"
							href="https://www.tiktok.com/@jobminglengr?_t=8raeCRQIoa7&_r=1"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full  hover:bg-black hover:text-yellow-500 hover:rotate-45 hover:translate-x-1 "
						>
							<BsTiktok />
						</Link>
						<Link
							target="_blank"
							href="https://medium.com/@JobMingleNGR"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full  -hover:bg-yellow-500 hover:rotate-45 hover:translate-x-1 hover:bg-black hover:text-yellow-500 "
						>
							<BsMedium />
						</Link>
					</div>
					<div className="text-white flex gap-2">
						<span className="rotate-45"></span>
						Call us :
						<Link href="tel:07077308481" className="text-yellow-500">
							07077308481
						</Link>
					</div>
					<p className="text-white flex gap-2">
						Email:
						<Link
							href="mailto:contact@jobmingle.co"
							className="text-yellow-500"
						>
							contact@jobmingle.co
						</Link>
					</p>
				</div>

				{/* Links Section */}
				<div className="flex- grid grid-cols-2 lg:grid-cols-2 text-white  ">
					<div className="flex flex-col gap-2 items-center- max-lg:ml-6 justify-start- items-start ">
						<h3 className="font-bold mb- text-yellow-500">Quick Links</h3>
						<Link
							href="/jobs"
							className="hover:underline hover:text-yellow-400"
						>
							Jobs
						</Link>
						<Link
							href="/courses"
							className="hover:underline hover:text-yellow-400"
						>
							Courses
						</Link>
						<Link
							href="/career"
							className="hover:underline hover:text-yellow-400"
						>
							Career Tool
						</Link>
						<Link
							href="/about"
							className="hover:underline hover:text-yellow-400"
						>
							About Us
						</Link>
					</div>
					<div className="flex flex-col gap-2  ">
						<Link
							href="/about/#services"
							className="hover:underline hover:text-yellow-400"
						>
							Services
						</Link>
						<Link
							href="/terms"
							className="hover:underline hover:text-yellow-400"
						>
							Terms and Conditions
						</Link>
						<Link
							href="/privacy"
							className="hover:underline hover:text-yellow-400"
						>
							Privacy Policy
						</Link>
						<Link
							href="/about/#FAQ"
							className="hover:underline hover:text-yellow-400"
						>
							FAQS
						</Link>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="text-center mt-8">
				<p className="text-gray-400">
					&copy; Copyright {year} Jobmingle. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
