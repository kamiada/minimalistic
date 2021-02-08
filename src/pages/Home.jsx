import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import Card from "../components/Card";
import Skills from './Skills';
import About from './About';
import Projects from './Projects';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>
            <ReactTypingEffect
              className="typingeffect"
              text={[
                "Hi, my name is Adrianna, I am a software engineer",
                "Welcome to my Website",
              ]}
              speed={100}
              eraseDelay={100}
            ></ReactTypingEffect>
          </h2>
        </header>

        <body>
          <Router>
            <div className="cardholder">
              <Card href="/skills" title="skills." />
              <Card href="/about" title="about." />
              <Card href="/projects" title="projects." />
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
            </div>
          </Router>
        </body>
      </div>
    );
  }
}
