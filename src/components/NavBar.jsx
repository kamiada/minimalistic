import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components.scss";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <Fragment>
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
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Navbar;
