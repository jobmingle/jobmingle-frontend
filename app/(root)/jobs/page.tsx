"use client";

import React, { useState } from "react";
import { Wrapper } from "./style";

// import Feature from "../../Components/job/index";
// import JobItems from "@/ /_components/job/Jobs";
import JobItems from "@/app/_components/job/Jobs";
import { url } from "inspector";

import ScrollableTags from "@/app/_components/ui/ScrollableTags";
import FAQSection from "../../_components/ui/FAQJob";
import SearchBar from "@/app/_components/ui/SearchBar";
import { HiBriefcase } from "react-icons/hi2";
import { jobTags } from "@/lib/_exportLinks";

const Page = () => {
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
			<div className="px-[1rem] md:px-[4rem]">
				<JobItems searchQuery={searchQuery} link="jobs" />
			</div>
			<FAQSection />
		</>
	);
};

export default Page;
