"use client";

import React, { useState } from "react";
import SearchBar from "@/app/_components/ui/SearchBar";
import Courses from "../../_components/course/Courses";
import ScrollableTags from "@/app/_components/ui/ScrollableTags";
import { jobTags } from "@/lib/_exportLinks";
import { HiBookOpen } from "react-icons/hi2";
import Button from "@/app/_components/atoms/Button";
import ModalController from "@/app/_components/ui/ModalController";
import CourseAds from "@/app/_components/ui/CourseAds";

const CoursesPage = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [isCvModalOpen, setIsCvModalOpen] = useState(false);

	const closeCvModal = () => {
		setIsCvModalOpen(false);
	};

	const handleOpen = () => {
		setIsCvModalOpen(true);
	};
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

			<ModalController
				H1="5 free bonus for you"
				P1="Get instant access to 5 exclusive bonuses when you enroll for a course today."
				P2="Note that this offer is only for a limited time!"
				cta="See bonuses here!"
				setIsOpen={setIsCvModalOpen}
			/>

			<Courses searchQuery={searchQuery} link="courses" />
			<CourseAds isOpen={isCvModalOpen} setIsOpen={setIsCvModalOpen} />
		</>
	);
};

export default CoursesPage;
