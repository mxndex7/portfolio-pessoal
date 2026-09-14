import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ComoFicariaASua from "@/components/ComoFicariaASua";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Services />
        <ComoFicariaASua />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
