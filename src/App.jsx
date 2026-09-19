import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Skills from "./components/Skills"
import Journey from "./components/Journey"
import Certificates from "./components/Certificates"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-darker text-ivory">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Journey/>
      <Certificates/>
      <Projects/>
      <Contact/>
      {/*
        TODO — build these next, same pattern as Navbar/Hero:
        <Projects />   → replaces the old shoe "Products" grid
        <About />      → replaces "Heritage" story section
        <Skills />     → replaces "Craft" 4-step section
        <Contact />    → replaces "Newsletter" section
      */}
    </div>
  );
}
