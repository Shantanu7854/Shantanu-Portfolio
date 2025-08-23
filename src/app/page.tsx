import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="sm:space-y-0">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
