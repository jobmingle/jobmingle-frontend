"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "@/app/_components/ui/SearchBar";
import { HiBookOpen } from "react-icons/hi2";
import Courses from "@/app/_components/course/VendorCourses";
import { useAuth } from "@/app/_contexts/auth/AuthState";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const { user } = useAuth();
	const {
		listedCourses: courses,
		fetchListedCourses,
		isLoading,
	} = useJobCourse();

	useEffect(() => {
		// if (user?.goals === "List a course") {
		fetchListedCourses(user?.id);
		// fetchListedCourses(user?.moodle_user_id);
		// }
	}, [courses?.length]);

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
