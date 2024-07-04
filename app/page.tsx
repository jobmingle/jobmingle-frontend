import AboutSection from "./about/page";
import Hero from "./home/page";
import Contact from "./contactus/page";
import HowItWorks from "./component/ui/Services";
import AboutUs from "./aboutUs/page";
import TeamSection from "./component/ui/TeamMember";
import FAQSection from "./component/ui/FAQSection";
import PartnersSponsors from "./component/ui/PartnersLogo";

export default function Home() {
  return (
    <main>
      <Hero />
      <PartnersSponsors />
      <HowItWorks />
      <AboutUs />
      <AboutSection />
      <FAQSection />
      <TeamSection />
      <Contact />
    </main>
  );
}
