import React, { Component } from "react";
import { Panel, WidePanel } from "../components/index";
import "./pages.scss";

const FabricProjectDescr =
  "Fabric Decomissioning - decommissioning a system called Fabric, used by programme-makers to search an archived metadata catalogue and to self-order tapes. This project was focused on implementing Fabric data and properties to the currently existing Archive Search search system and updating AS with new UI and functionality, on both front- and backend";

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
            read books, doing yoga (when I don't feel lazy), travel and cook.
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
          <hr />
          <h2>Work history</h2>
          <hr />
        </div>

        <div className="panel_container">
          <Panel
            title="Fullstack Software Engineer for BBC Archives"
            years="01/2020 - currently"
            description={[
              FabricProjectDescr,
              "Writing and updating AWS Lambdas, ElasticSearch schemas",
              "Working closely with UX designer and testers",
              "Working with strict deadlines in the sprint development approach",
              "Following TDD approach and working in pair with other engineers",
            ]}
          />
          <Panel
            title="Student Assistant in Edinburgh Napier University (Data Analytics module)"
            years="09/2019 - 12/2019"
            description={[
              "Helping students during practical classes with their exercises using R",
              "Helping students with exercises in Weka",
              "Helping students to understand Data Analytics, including different approaches and algorithms",
            ]}
          />
          <Panel
            title="Software Engineering Intern in Computer Application Services Ltd."
            years="06/2019 – 09/2019"
            description={[
              "Project: Tracker (to read more about it please click here",
              "Research about different data analytics online tools in order to write a report and discover new technologies",
              "Teamwork, following code reviews feedback and code style",
              "Writing automated tests",
            ]}
          />
          <Panel
            title="Finance Helpdesk Officer in the University of Edinburgh"
            years="05/2017 – 08/2018"
            description={[
              "Helping users with the use of financial systems in the University of Edinburgh, often with the use of remote desktop control (Bomgar) or PL/SQL ",
              "Training users and new members of staff",
              "Fixing issues in databases",
              "Presenting great customer service and time management skills",
            ]}
          />
        </div>

        <div className="title_dividers">
          <hr />
          <h2>Education</h2>
          <hr />
        </div>

        <div className="panel_container">
          <WidePanel
            title="BEng Computing in Edinburgh Napier University"
            years="finished in 2019"
            first={[
              "Computational Intelligence",
              "Computing in Contemporary Society",
              "Multi-Agent Systems",
              "Software Architecture",
              "Honors Project",
            ]}
            second={[
              "Physic-Based Animation",
              "Artificial Intelligence",
              "Data Analytics",
              "Year long placement"
            ]}
            third={[
              "Software Development 2",
              "Database Systems",
              "System Services",
              "Computer Graphics",
              "Programming Fundamentals",
              "Software Engineering Methods"
            ]}
          />
        </div>
      </div>
    );
  }
}
export default About;
