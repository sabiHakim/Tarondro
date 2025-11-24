import HeroSection from "./components/HeroSection";
import Services from "./components/Service";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Works />
      <About />
      <Contact />
    </>
  );
}