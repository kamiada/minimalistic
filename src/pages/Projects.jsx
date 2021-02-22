import React, { Component } from "react";
import "./pages.scss";
import { Segment } from "../components";
import PeriodicTable from "../gifs_examples/periodicTableUpdate.gif";
import HackathonApp from "../gifs_examples/React App.png";
import Arctica from "../gifs_examples/arctica.gif";
import Dissertation from "../gifs_examples/AdriannaKaminkaPosterFinal.png"


class Projects extends Component {
  render() {
    return (
      <div className="projects_container">
        <Segment
          gif={PeriodicTable}
          title="Periodic Table"
          description="Project done in React.js"
          tags={["React.Js", "Frontend"]}
          href="/periodicTable"
        />
        <Segment
          gif={HackathonApp}
          title="Live!"
          description="Created during BBC Platform Hackathon  2020, zoom repository web app"
          tags={[
            "React.Js",
            "Fullstack",
            "Python",
            "Flask",
            "AWS",
            "Postman",
            "API",
          ]}
          href="/Live"
        />
        <Segment
          gif={Dissertation}
          title="Dissertation: The prototype of a mobile application for customised tourism in Edinburgh"
          description="The focus of my dissertation was to create a prototype mobile app for Android phones, 
          which could improve the experience of visiting the city via customised tourism"
          tags={["Android", "Java", "Mobile App", "UX/UI"]}
          href="/CustomisedTourism"
        />
        <Segment
          gif={PeriodicTable}
          title="Tracker"
          description="Internship project for CAS Ltd, focused on developing a tracking tool with purpose of gathering user 
          data regarding how users are using Workpro software in their everyday tasks."
          tags={[
            "C#.Net",
            "Data gathering",
            "JavaScript",
            "Data Visualisation",
            "SQL",
            "Google Charts",
          ]}
          href="/Tracker"
        />
        <Segment
          gif={PeriodicTable}
          title="Panda Mediator"
          description="Unity game done for Global Game Jam 2020. The theme for this game jam was relationship"
          tags={["Unity", "Game", "C#", "Point & Click", "Time constraints"]}
        />
        <Segment
          gif={Arctica}
          title="Arctica"
          description="Uniy web game done during Global Game Jam 2019, focused on raising awareness about climate change"
          tags={["Unity", "Game", "C#", "Web"]}
          href="/Arctica"
        />
        <Segment
          gif={PeriodicTable}
          title="Feel my feels"
          description="Game made for Global Game Jam 2018. "
          tags={["Unity", "Game", "C#", "Multiplayer"]}
          href="/FeelMyFeels"
        />
      </div>
    );
  }
}
export default Projects;
