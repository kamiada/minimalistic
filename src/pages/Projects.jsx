import React, { Component } from "react";
import "./pages.scss";
import { Segment, Minipage} from '../components';
import PeriodicTable from '../gifs_examples/periodicTableUpdate.gif';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


let { path, url } = useRouteMatch();

class Projects extends Component {
  render() {
    return (
        <div className="projects_container">
          <Segment 
            gif={PeriodicTable}
            title="Periodic Table"
            description="Project done in React.js"
            tags={['React.Js', 'Frontend']}
            href="/:periodicTable"
          />
          <Segment 
            gif={PeriodicTable}
            title="Periodic Table"
            description="Project done in React.js"
            tags={['React.Js', 'Frontend']}
          />
                    <Segment 
            gif={PeriodicTable}
            title="Periodic Table"
            description="Project done in React.js"
            tags={['React.Js', 'Frontend']}
          />
                    <Segment 
            gif={PeriodicTable}
            title="Periodic Table"
            description="Project done in React.js"
            tags={['React.Js', 'Frontend']}
          />
                    <Segment 
            gif={PeriodicTable}
            title="Periodic Table"
            description="Project done in React.js"
            tags={['React.Js', 'Frontend']}
          />
        </div>
    );
  }
}
export default Projects;