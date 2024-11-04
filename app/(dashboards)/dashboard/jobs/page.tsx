"use client";
import React, { useState } from "react";
import { HiBriefcase } from "react-icons/hi2";
import SearchBar from "@/app/_components/ui/SearchBar";
import ScrollableTags from "@/app/_components/ui/ScrollableTags";
import JobItems from "@/app/_components/job/Jobs";
import { jobTags } from "@/lib/_exportLinks";

//

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
			<JobItems searchQuery={searchQuery} />
		</>
	);
};

export default Page;
