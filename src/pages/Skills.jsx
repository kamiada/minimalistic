import React, { Component } from "react";
import "./pages.scss";
import {AnimatedTitle} from '../components/index';

class Skills extends Component {
  render() {
    return (
      <div className="skills_body">
          <h2>PROGRAMMING LANGUAGES & FRAMEWORKS</h2>
          <div className="skills">
          <AnimatedTitle title="REACT.JS" />
            REACT.JS
            REACT NATIVE
            JEST
            CSS, SASS, HTML + JAVASCRIPT
            
          </div>
          <div className="animatedLine" />
          <h2>TECHNOLOGIES & SKILLS</h2>
          <div className="skills">
          NODE.JS
          C#, C#.NET
          JAVA
          PYTHON
          AWS
          ANDROID
          GIT
          MICROSERVICES
          UNITY
          
          </div>
      </div>
    );
  }
}
export default Skills;