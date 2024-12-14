"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "@/app/_components/ui/SearchBar";
import { HiBookOpen } from "react-icons/hi2";
import Courses from "@/app/_components/course/VendorCourses";

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Search course lists!"
				placeholder="Course title"
				icon={<HiBookOpen />}
			/>
			<Courses searchQuery={searchQuery} link="vendor-dashboard/courses" />
		</>
	);
};

export default Page;
