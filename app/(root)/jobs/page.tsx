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
import Button from "@/app/_components/atoms/Button";
import AdvertModal from "@/app/_components/ui/AdvertModal";
import ModalController from "@/app/_components/ui/ModalController";

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const [isCvModalOpen, setIsCvModalOpen] = useState(false);

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
			<ModalController
				setIsOpen={setIsCvModalOpen}
				H1=" Tired of Sending Countless Job Applications Without Landing an
					Interview?"
				P1="Then your CV or work portfolio could be the problem. Collaborate with
					our team of expert CV writers and portfolio specialists to uniquely
					showcase your skills and experience, so you start landing job
					interviews. "
				P2="Click the button below and elevate your career today!"
				cta="Rebuild my cv/portfolio"
			/>
			<div className="px-[1rem] md:px-[4rem]">
				<JobItems searchQuery={searchQuery} link="jobs" />
			</div>
			<FAQSection />
			<AdvertModal isOpen={isCvModalOpen} setIsOpen={setIsCvModalOpen} />
		</>
	);
};

export default Page;
