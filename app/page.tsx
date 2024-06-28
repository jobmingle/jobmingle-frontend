import Image from "next/image";
import AboutSection from "./about/page";
import Hero from "./home/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
    </main>
  );
}
