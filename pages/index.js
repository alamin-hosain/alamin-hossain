import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";



export default function Home({ projects }) {

  return (
    <div>
      <Hero />
      <div className="px-10 lg:px-0">
        <Projects />
      </div>
      <div className="px-10 lg:px-0">
        <Contact />
      </div>
    </div>
  )
}


