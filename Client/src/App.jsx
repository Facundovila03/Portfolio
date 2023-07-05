import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Welcome from "./views/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <span className="blur">c</span>
      <NavBar />
      <About />
      <Skills/>
    </div>
  );
}

export default App;
