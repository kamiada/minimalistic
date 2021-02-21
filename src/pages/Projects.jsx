import React, { Component } from "react";
import "./pages.scss";
import { Segment, Navbar, Minipage} from '../components';
import PeriodicTable from '../gifs_examples/periodicTableUpdate.gif';

class Projects extends Component {
  render() {
    return (
        <div className="projects_container">
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