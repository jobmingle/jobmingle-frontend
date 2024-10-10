"use client";

import React from "react";
import { Wrapper } from "./style";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
// import Feature from "../../Components/job/index";
import JobItems from "../../_components/job/Jobs";
import { url } from "inspector";
import JobHeader from "../../_components/job/JobHeader";
import ScrollableTags from "@/app/_components/job/ScrollableTags";
import FAQSection from "../../_components/ui/FAQJob";

const page = () => {
	return (
		<>
			<JobHeader />
			<ScrollableTags />
			<JobItems />
			<FAQSection />
		</>
	);
};

export default page;
