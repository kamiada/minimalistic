import React, { Component } from "react";
import {Panel} from '../components/index';
import "./pages.scss";

class About extends Component {
  render() {
    return (
      <div className="about_container">
        <div>
          <h1>Hi, I'am Adrianna, a software engineer for BBC Scotland.</h1>
        </div>
        <div>
          <p>
            I work as a full-stack software engineer for BBC Archive Services, 
            and I am both interested in
            frontend and backend technologies. I previously worked as a Student
            Assistant for Data Analytics module in Edinburgh Napier University,
            Software Engineering Intern for Computer Application Services and as
            a Helpdesk Assistant in Finance Department of the University of
            Edinburgh. I finished BEng Computing with 2:1 in Edinburgh Napier
            University.
          </p>
        </div>
      </div>
    );
  }
}
export default About;
