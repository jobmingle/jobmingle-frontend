"use client";
import React, { useEffect, useState } from "react";
import { HiBriefcase } from "react-icons/hi2";
import SearchBar from "@/app/_components/ui/SearchBar";
import JobItems from "@/app/_components/job/EmployerJobs";
import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import { useAuth } from "@/app/_contexts/auth/AuthState";

//

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const { jobs, listedJobs, fetchListedJobs, isLoading } = useJobCourse();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (!listedJobs.length && isAuthenticated) {
			fetchListedJobs();
		}

		// eslint-disable-next-line
	}, [listedJobs, isAuthenticated]);

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Search job list!"
				placeholder="Job title"
				icon={<HiBriefcase />}
			/>
			<JobItems searchQuery={searchQuery} link="employer-dashboard/jobs" />
		</>
	);
};

export default Page;
