import React from "react";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div>
      <section id="Home">
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
    </div>
  );
}
