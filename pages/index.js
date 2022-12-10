import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";



export default function Home() {
  return (
    <div className="px-10 lg:px-0">
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}
