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
            I work as a full-stack software engineer for BBC Archive Services. I
            am both interested in frontend and backend technologies. I really
            like building web-apps with React, games in Unity Engine and
            learning new programming languages and concepts. I am a bit of a
            data geek and I like reading about AI and Data Science.
            <br />
            <br />
            My interests are focused on impact of technology on people's
            everyday life and how technology can improve things.
            <br />
            <br />
            Outside that, I like learning about history of the world, write and
            read books, doing yoga (when I don't feel lazy)travel and cook.
            During lockdown I started an online book club in Edinburgh, and I
            joined few other book clubs as well.
            <br />
            <br />
            To find out more about me please check out my resume, or scroll down
            😊
            <br />
          </p>
        </div>

        <div className="title_dividers">
          <h2>Work history</h2>
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

        <div className="title_dividers">
          <h2>Education</h2>
        </div>

        <div className="panel_container">
        <Panel
            title="BEng Computing in Edinburgh Napier University"
            years="finished in 2019"
            description={["blah"]}
          />
        </div>

      </div>
    );
  }
}
export default About;
