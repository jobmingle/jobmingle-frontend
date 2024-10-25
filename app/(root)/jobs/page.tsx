"use client";

import React, { useState } from "react";
import { Wrapper } from "./style";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
// import Feature from "../../Components/job/index";
import JobItems from "../../_components/job/Jobs";
import { url } from "inspector";

import ScrollableTags from "@/app/_components/ui/ScrollableTags";
import FAQSection from "../../_components/ui/FAQJob";
import SearchBar from "@/app/_components/ui/SearchBar";
import { HiBriefcase } from "react-icons/hi2";
import { jobTags } from "@/lib/_exportLinks";

function Page()  {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Find your dream job!"
				placeholder="Job title"
				icon={<HiBriefcase />}
			/>
			<ScrollableTags setSearchQuery={setSearchQuery} tags={jobTags} />
			<JobItems searchQuery={searchQuery} />
			<FAQSection />
		</>
	);
};

export default Page;
