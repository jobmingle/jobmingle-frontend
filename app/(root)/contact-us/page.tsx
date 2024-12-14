"use client";

import Button from "../../_components/atoms/Button";
import Input from "../../_components/atoms/Input";
import { useState } from "react";
import Textarea from "../../_components/atoms/Textarea";
import ContactForm from "@/app/_components/ui/ContactForm";
import Newsletter from "@/app/_components/ui/Newsletter";

export default function Contact() {
	const [FormData, setFormData] = useState({
		Name: "",
		Email: "",
		Message: "",
		NewsLetter: "",
	});

	function handleChange(event: any) {
		const { name, value } = event.target;
		setFormData((p) => ({ ...p, [name]: value }));
	}

	return (
		<section
			id="contact"
			className="flex flex-col items-center mt-7 md:mt-4 justify-center w-full   "
			style={{ fontFamily: "Poppins" }}
		>
			{/* Contact Info Section */}
			<h1 className="text-4xl mb-0  max-md:text-center max-md:text-3xl text-yellow-400 max-md:font-bold font-bold justify-center items-center">
				Contact Information
			</h1>
			<p className="p-3 text-center">
				You are just a step away from reaching us!
			</p>
			<div className="w-full h-1 bg-[#eab308] sm:mb-15"></div>

			{/* <div className="flex flex-col lg:flex-row text-white w-full items-center justify-center gap-6 lg:gap-24 p-6  xsm:p-3 mt-7"> */}
			<div className="grid grid-cols-1 lg:grid-cols-2 max-md:gap-10 text-white w-full items-center justify-center gap-6- lg:gap-24 p-6  xsm:p-3 mt-7">
				<div className="  text-black  font-bold   lg:w-auto bg-white p-6 rounded border-2 border-gray-400 shadow-lg md:items-center">
					<ContactForm />
				</div>
				<div className="bg-2 flex flex-col items-start justify-center  max-md:w-auto  h-[200px] w-[800px] lg:w-auto   text-yellow-400 p-10 rounded border-2 z-0  border-gray-400 shadow-2xl  md:items-center  ">
					<p className="flex items-center- mb-4 z-10 text-balance text-md font-mono   shadow-inner shadow-yellow-500 font-bold p-5">
						Learn A Skill Today Without Breaking The Bank!
					</p>
				</div>

				{/* Contact Form */}
			</div>

			{/* Newsletter Section */}
			<div className="mt-8 text-center w-full">
				<h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
				<p className="mb-4 max-md:text-1xl ">
					Never miss out on our updates, freebies and news
				</p>
				<Newsletter />
			</div>
		</section>
	);
}
