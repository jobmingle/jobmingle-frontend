"use client";

import Hero from "./home/page";
import Contact from "./contact-us/page";
import AboutSlider from "./component/ui/AboutSlider";
import PartnersSponsors from "./component/ui/PartnersLogo";
import WhyChooseUs from "./component/ui/WhyChooseUs";
import Steps from "./component/ui/Steps";
import Testimonials from "@/app/component/ui/Testimonials";
import Services from "@/app/component/ui/Services";
import FAQSection from "./component/ui/FAQSection";

export default function Home() {
	return (
		<main className="md:px-8  md:py-8 ">
			<Hero />
			<WhyChooseUs />
			<Steps />
			<PartnersSponsors />
			<Services />
			<Testimonials />
			<AboutSlider />
			<FAQSection />
			<Contact />
		</main>
	);
}
