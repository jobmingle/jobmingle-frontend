"use client";
import React, { useState } from "react";
import { HiBriefcase } from "react-icons/hi2";
import SearchBar from "@/app/_components/ui/SearchBar";
import JobItems from "@/app/_components/job/Jobs";

//

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Search job list!"
				placeholder="Job title"
				icon={<HiBriefcase />}
			/>
			<JobItems searchQuery={searchQuery} link="dashboard/jobs" />
		</>
	);
};

export default Page;
