import React, { Component } from "react";
import "./pages.scss";
import { AnimatedTitle } from "../components/index";

const progrLang = [
  " REACT.JS",
  "REACT NATIVE",
  "JEST",
  "CSS, SASS, HTML + JAVASCRIPT",
  "NODE.JS",
  "C#, C#.NET",
  "JAVA",
  "PYTHON",
  "SQL",
];
const techSkills = [
  "ELASTICSEARCH",
  "AWS",
  "ANDROID",
  "GIT/GITHUB",
  "MICROSERVICES",
  "BDD",
  "TDD",
  "C4",
  "UNITY ENGINE",
];

class Skills extends Component {
  render() {
    return (
      <div className="skills_body">
        <h2>PROGRAMMING LANGUAGES & FRAMEWORKS</h2>
        <div className="skills">
          {progrLang.map((element) => (
            <AnimatedTitle title={element} />
          ))}
        </div>
        <div className="animatedLine" />
        <h2>TECHNOLOGIES & SKILLS</h2>
        <div className="skills">
          {techSkills.map((element) => (
            <AnimatedTitle title={element} />
          ))}
        </div>
      </div>
    );
  }
}
export default Skills;
