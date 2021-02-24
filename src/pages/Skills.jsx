import React, { Component } from "react";
import "./pages.scss";

class Skills extends Component {
  render() {
    return (
      <div className="skills_body">
          <h2>FRONT END</h2>
          <div className="skills">
            REACT.JS
            CSS, SASS, HTML + JAVASCRIPT
            
          </div>
          <hr />
          <h2>BACK END</h2>
          <div className="skills">
          NODE.JS
          C#
          JAVA
          PYTHON
          MICROSERVICES
          </div>
      </div>
    );
  }
}
export default Skills;