import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { NeuralStudio } from "@/components/neural-studio/neural-studio";
import { Stack } from "@/components/sections/stack";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <NeuralStudio />
        <Stack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
