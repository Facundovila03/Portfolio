import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import About from "./views/About/About";
import Welcome from "./views/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <span className="blur">c</span>
      <NavBar />
      <About />
    </div>
  );
}

export default App;
