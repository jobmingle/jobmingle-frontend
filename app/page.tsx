import AboutSection from "./about/page";
import Hero from "./home/page";
import Contact from "./contactus/page";
import HowItWorks from "./component/ui/Services";
import AboutUs from "./aboutUs/page";
import TeamSection from "./component/ui/TeamMember";
export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <AboutUs />
      <AboutSection />
      <TeamSection />
      <Contact />
    </main>
  );
}
