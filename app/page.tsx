import AboutSection from "./about/page";
import Hero from "./home/page";
import Contact from "./contactus/page";
import AboutUs from "./aboutUs/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />

      <AboutSection />
      <Contact />
    </main>
  );
}
