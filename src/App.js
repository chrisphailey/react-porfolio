import { useState } from "react";
import "./App.css";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Nav from "./components/Nav/index";
import Projects from "./components/Projects/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navSelection, setNavSelection] = useState("about");

  return (
    <div>
      <Nav navSelection={navSelection} setNavSelection={setNavSelection}></Nav>
      <main>
        {navSelection === "about" ? (
          <About></About>
        ) : navSelection === "projects" ? (
          <Projects></Projects>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
