/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import TechStack from "./components/TechStack/TechStack";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Welcome from "./views/Welcome/Welcome";
import Projects from "./views/Projects/Projects";
import ContactMe from "./views/Contact me/ContactMe";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadSkills, uploadProjects, uploadTechStack } from "./Redux/actions";
import useGetSkills from "./hooks/useGetSkills";
import useGetProjects from "./hooks/useGetProject";
import useGetTechstack from "./hooks/useGetTechStack";
import Loader from "./components/loader/loader";
import { motion } from "framer-motion";

function App() {
  const [loader, setLoader] = useState(true);

  //asking for resources

  const dispatch = useDispatch();

  const [allSkills] = useGetSkills();
  const [allProjects] = useGetProjects();
  const [techstack] = useGetTechstack();

  useEffect(() => {
    allSkills.length > 1 && dispatch(uploadSkills(allSkills));
    allProjects.length > 0 && dispatch(uploadProjects(allProjects));
    techstack.length > 1 && dispatch(uploadTechStack(techstack));
    setTimeout(() => {
      setLoader(false);
    }, 1200);
  }, [allSkills, allProjects, techstack]);

  //scroll to section

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

  if (loader) {
    return <Loader />;
  }

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}>
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
        .
      </div>
      <About />
      <div
        className="skillsRef"
        ref={skills}>
        .
      </div>
      <Skills />
      <TechStack />
      <div
        className="projectsRef"
        ref={projects}>
        .
      </div>
      <Projects />
      <div
        className="contactMeRef"
        ref={contactMe}>
        .
      </div>
      <ContactMe />
    </motion.div>
  );
}

export default App;
