// "use client";

import Hero from "@/app/_components/ui/Hero";
import Contact from "../contact-us/page";
import AboutSlider from "../_components/ui/AboutSlider";
import PartnersSponsors from "../_components/ui/PartnersLogo";
import WhyChooseUs from "../_components/ui/WhyChooseUs";
import Steps from "../_components/ui/Steps";
import Testimonials from "@/app/_components/ui/Testimonials";
import Services from "@/app/_components/ui/Services";
import FAQSection from "../_components/ui/FAQSection";

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
