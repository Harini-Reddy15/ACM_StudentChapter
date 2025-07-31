import { useEffect } from "react";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { useScrollPosition } from "@/hooks/use-scroll";

export default function Home() {
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const dynamicBg = document.getElementById('dynamic-bg');
    if (!dynamicBg) return;

    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    // Remove all scroll classes
    dynamicBg.classList.remove('scrolled-25', 'scrolled-50', 'scrolled-75', 'scrolled-100');

    // Add appropriate class based on scroll percentage
    if (scrollPercentage > 75) {
      dynamicBg.classList.add('scrolled-100');
    } else if (scrollPercentage > 50) {
      dynamicBg.classList.add('scrolled-75');
    } else if (scrollPercentage > 25) {
      dynamicBg.classList.add('scrolled-50');
    } else if (scrollPercentage > 0) {
      dynamicBg.classList.add('scrolled-25');
    }
  }, [scrollPosition]);

  return (
    <>
      <div className="dynamic-bg" id="dynamic-bg" />
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
