import React, { Component } from "react";
import { Panel } from "../components/index";
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
            and I am both interested in frontend and backend technologies. I
            previously worked as a Student Assistant for Data Analytics module
            in Edinburgh Napier University, Software Engineering Intern for
            Computer Application Services and as a Helpdesk Assistant in Finance
            Department of the University of Edinburgh. I finished BEng Computing
            with 2:1 in Edinburgh Napier University.
            <br/>
            <br/>
            My interests are focused on impact of technology on people's everyday life
            and how technology can improve things. 
            <br/>
            <br/>

            Outside that, I like learning about history of the world, write and read books
            <br/>

          </p>
        </div>
        <div className="panel_container">
          <Panel
            title="Fullstack Software Engineer for BBC Archives"
            years="01/2020 - currently"
            description={["Fabric Decomissioning", "Maintenance"]}
          />
          <Panel
            title="Student Assistant in Edinburgh Napier University (Data Analytics module)"
            years="09/2019 - 12/2019"
            description={["blah"]}
          />
          <Panel
            title="Software Engineering Intern in Computer Application Services Ltd."
            years="06/2019 – 09/2019"
            description={["blah"]}
          />
          <Panel
            title="Finance Helpdesk Officer in the University of Edinburgh"
            years="05/2017 – 08/2018"
            description={["blah"]}
          />
        </div>
      </div>
    );
  }
}
export default About;
