// "use client";

import Hero from "@/app/_components/ui/Hero";
import Contact from "./contact-us/page";
import AboutSlider from "../_components/ui/AboutSlider";
import PartnersSponsors from "../_components/ui/PartnersLogo";
import WhyChooseUs from "../_components/ui/WhyChooseUs";
import Steps from "../_components/ui/Steps";
import Testimonials from "@/app/_components/ui/Testimonials";
import Services from "@/app/_components/ui/Services";
import FAQSection from "../_components/ui/FAQSection";
import Head from "next/head";
import JobCarousel from "../_components/ui/JobCarousel";
import CourseCarousel from "../_components/ui/CourseCarousel";
import AppLoader from "../_components/ui/AppLoader";

//
export default function Home() {
	// return (
	// 	<main className="flex flex-col justify-center items-center h-[100vh]- w-full ">
	// 		<AppLoader />
	// 	</main>
	// );
	return (
		<main className="md:px-8  md:py-8 ">
			<Hero />
			<WhyChooseUs />
			<Steps />
			<CourseCarousel />
			<JobCarousel />
			<PartnersSponsors />
			<Services />
			<Testimonials />
			<AboutSlider />
			<FAQSection />
			<Contact />
		</main>
	);
}
