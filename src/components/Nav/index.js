import React from "react";
import logo from "./Chris-Hailey.png";

function Nav(props) {
  const { setNavSelection, navSelection } = props;
  return (
    <header className="flex-row px-1">
      <div className="flex-row logo-container">
        <img className="logo" src={logo} />
      </div>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => setNavSelection("about")}>
              About
            </a>
          </li>
          <li className="mx-2">
            <a href="#projects" onClick={() => setNavSelection("projects")}>
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact" onClick={() => setNavSelection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
