import Link from "next/link";
import Image from "next/image";
import Email from "@/public/svg-icons/email.svg";
import Instagram from "@/public/svg-icons/instagram.svg";
import Facebook from "@/public/svg-icons/facebook.svg";
import contact from "@/public/svg-icons/call-us.svg";
import Twitter from "@/public/svg-icons/twitter.svg";
import LinkedIn from "@/public/svg-icons/linkedin.svg";
export default function Footer() {
	return (
		<footer
			id="footer"
			className=" border-t-4 bg-black text-white border-yellow-500 py-8"
		>
			<div className="container mx-auto  px-4 flex flex-col lg:flex-row justify-center gap-[20%] max-md:gap-[5%] max-md:block items-center">
				{/* Social Media and Contact Info */}
				<div className="flex flex-col  gap-[20%] max-md:gap-[2%] items-center lg:items-start mb-8 lg:mb-0">
					<div className="flex space-x-4 mb-4">
						{/* Placeholder for social media icons */}
						<Link
							href="https://web.facebook.com/profile.php?id=61556529943063"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full"
						>
							<Image src={Facebook} alt="Facebook" width={16} height={16} />
						</Link>
						<Link
							href="https://www.linkedin.com/company/jobmingle-nigeria/"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full"
						>
							<Image src={LinkedIn} alt="Twitter" width={16} height={16} />
						</Link>
						<Link
							href="https://www.instagram.com/jobminglengr?igsh=MTZiODRhdnhqeHJtYg=="
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full"
						>
							<Image src={Instagram} alt="Instagram" width={16} height={16} />
						</Link>
						<Link
							href="https://twitter.com/JobMingleNGR?t=Y9dBxLTQAtyrLzvvc1xfBA&s=09"
							className="w-8 h-8 flex justify-center items-center bg-[#facc15] rounded-full"
						>
							<Image src={LinkedIn} alt="LinkedIn" width={16} height={16} />
						</Link>
					</div>
					<p className="text-white">Call us @:09048744395</p>
					<p className="text-white">
						Email us @:
						<Link
							href="mailto:contact@jobmingle.co"
							className="text-yellow-500"
						>
							contact@jobmingle.co
						</Link>
					</p>
				</div>

				{/* Links Section */}
				<div className="justify-between w-full lg:w-auto  max-md:flex contents">
					<div className="flex flex-col items-start max-md:ml-6 justify-start lg:items-start mb-8 lg:mb-0 mr-5">
						<h3 className="font-bold mb-2">Links</h3>
						<Link href="/jobs" className="hover:underline">
							Jobs
						</Link>
						<Link href="/about" className="hover:underline">
							Courses
						</Link>
						<Link href="/about" className="hover:underline">
							About Us
						</Link>
					</div>
					<div className="flex flex-col items-start lg:items-start mb-8 lg:mb-0 mx-4">
						<h3 className="font-bold mb-2">Links</h3>
						<Link href="/about" className="hover:underline">
							Services
						</Link>
						<Link href="/about" className="hover:underline">
							Terms and Conditions
						</Link>
						<Link href="/about" className="hover:underline">
							Privacy Policy
						</Link>
					</div>
					<div className="flex flex-col items-start lg:items-start mb-8 lg:mb-0 mx-4">
						<h3 className="font-bold mb-2">Links</h3>
						<Link href="/about" className="hover:underline">
							Products
						</Link>
						<Link href="/contact" className="hover:underline">
							Support
						</Link>
						<Link href="/about" className="hover:underline">
							FAQ
						</Link>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="text-center mt-8">
				<p className="text-gray-600">
					&copy; Copyright 2023 Jobmingle. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
