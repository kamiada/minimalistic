import React from "react";
import "./components.scss";


const NavBar = ({ hrefHome, hrefSkills, hrefProjects, hrefAbout }) => {
  <nav>
    <ul>
      <li>
        <span>Menu</span>
      </li>
      <li class="nav-item">
        <a href={hrefHome}>Home</a>
      </li>
      <li class="nav-item">
        <a href={hrefSkills}>Skills</a>
      </li>
      <li class="nav-item">
        <a href={hrefProjects}>Projects</a>
      </li>
      <li class="nav-item">
        <a href={hrefAbout}>About</a>
      </li>
    </ul>
  </nav>;
};

export default NavBar;
