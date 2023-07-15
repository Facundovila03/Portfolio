import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import TechStack from "./components/TechStack/TechStack";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Welcome from "./views/Welcome/Welcome";
import Projects from "./views/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Welcome />
      <span className="blur">c</span>
      <NavBar />
      <About />
      <Skills />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
