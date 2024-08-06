import AboutSection from "./about/page";
import Hero from "./home/page";
import Contact from "./contact-us/page";
import HowItWorks from "./component/ui/Services";
import AboutUs from "./about-us/page";
import TeamSection from "./component/ui/TeamMember";
import FAQSection from "./component/ui/FAQSection";
import PartnersSponsors from "./component/ui/PartnersLogo";
import KeenSliderComponent from "./component/ui/Testimonial";
import FAQSections from "./component/ui/FAQSection2";

export default function Home() {
	return (
		<main>
			<Hero />
			<PartnersSponsors />
			<AboutSection />
			<AboutUs />
			<HowItWorks />
			<FAQSection />
			<TeamSection />
			<KeenSliderComponent />
			<FAQSections />
			<Contact />
		</main>
	);
}
