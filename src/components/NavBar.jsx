import React, { Component } from "react";
import "./components.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
      <ul>
        <li>
          <span>Menu</span>
        </li>
        <li class="nav-item">
          <a href={this.props.hrefHome}>Home</a>
        </li>
        <li class="nav-item">
          <a href={this.props.hrefSkills}>Skills</a>
        </li>
        <li class="nav-item">
          <a href={this.props.hrefProjects}>Projects</a>
        </li>
        <li class="nav-item">
          <a href={this.props.hrefAbout}>About</a>
        </li>
      </ul>
    </nav>
    )
  }
}

export default Navbar;
