import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Welcome from "./views/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <NavBar />
    </div>
  );
}

export default App;
