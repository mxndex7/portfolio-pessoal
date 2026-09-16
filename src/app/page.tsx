import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Otimizacao from "@/components/Otimizacao";
import ComoFicariaASua from "@/components/ComoFicariaASua";
import Precos from "@/components/Precos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Otimizacao />
        <ComoFicariaASua />
        <Precos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
