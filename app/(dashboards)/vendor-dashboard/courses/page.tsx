"use client";
import React, { useState } from "react";
import tiredicon from "@/public/image/tiredicon.png";
import profilepic from "@/public/image/ceo.jpeg";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import Image from "next/image";
import { CoursesList } from "@/lib/_exportLinks";
import Pagination from "@/app/_components/ui/Pagination";
import { useSearchParams } from "next/navigation";
import { usePagination } from "@/app/_hooks/usePagination";
import SearchBar from "@/app/_components/ui/SearchBar";
import { HiBookOpen } from "react-icons/hi2";
import Courses from "@/app/_components/course/Courses";

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
			<Courses searchQuery={searchQuery} />
		</>
	);
};

export default Page;
