import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import TechStack from "./components/TechStack/TechStack";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Welcome from "./views/Welcome/Welcome";
import Projects from "./views/Projects/Projects";
import ContactMe from "./views/Contact me/ContactMe";
import { useRef } from "react";

function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contactMe = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Welcome
        scrollToSection={scrollToSection}
        references={{ about, skills, projects, contactMe }}
      />
      <span className="blur">c</span>
      <NavBar
        scrollToSection={scrollToSection}
        references={{ about, skills, projects, contactMe }}
      />
      <div
        className="aboutRef"
        ref={about}>
        about reference
      </div>
      <About />
      <div
        className="skillsRef"
        ref={skills}>
        skills reference
      </div>
      <Skills />
      <TechStack />
      <div
        className="projectsRef"
        ref={projects}>
        projects reference
      </div>
      <Projects />
      <div
        className="contactMeRef"
        ref={contactMe}>
        contactMe reference
      </div>
      <ContactMe />
    </div>
  );
}

export default App;
