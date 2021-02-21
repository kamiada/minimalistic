import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components.scss";
import { Home, Skills, Projects, About } from "../pages";

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
                <a href="/">Home</a>
              </li>
              <li class="nav-item">
                <a href="/skills">Skills</a>
              </li>
              <li class="nav-item">
                <a href="/projects">Projects</a>
              </li>
              <li class="nav-item">
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/skills" component={Skills}>
            </Route>
            <Route path="/projects" component={Projects}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Navbar;
