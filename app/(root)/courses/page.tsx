"use client";

import React, { useState } from "react";
import SearchBar from "@/app/_components/ui/SearchBar";
import Courses from "../../_components/course/Courses";
import ScrollableTags from "@/app/_components/ui/ScrollableTags";
import { jobTags } from "@/lib/_exportLinks";
import { HiBookOpen } from "react-icons/hi2";

const CoursesPage = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Search your favorite course!"
				placeholder="Course title"
				icon={<HiBookOpen />}
			/>
			<ScrollableTags setSearchQuery={setSearchQuery} tags={jobTags} />
			<Courses searchQuery={searchQuery} />
		</>
	);
};

export default CoursesPage;
