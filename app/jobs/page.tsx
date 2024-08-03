"use client";
import React from "react";
import { Wrapper } from "./style";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
// import Feature from "../../Components/job/index";
import JobItems from "../../Components/job/Jobs";
import { url } from "inspector";
import JobHeader from "../../Components/job/JobHeader";
import ScrollableTags from "@/Components/job/ScrollableTags";

const page = () => {
	return (
		<>
			<JobHeader />
			<ScrollableTags />
			<JobItems />
		</>
	);
};

export default page;
