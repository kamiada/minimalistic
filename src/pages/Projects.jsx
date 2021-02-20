import React, { Component } from "react";
import "./pages.scss";
import { Segment, Navbar} from '../components';
import PeriodicTable from '../gifs_examples/periodicTableUpdate.gif';

class Projects extends Component {
  render() {
    return (
      <body>
        <div className="projects_container">
          <Segment 
            gif={PeriodicTable}
            title="Periodic Table"
            description="Project done in React.js"
            tags={['React.Js', 'Frontend']}
          />
        </div>
      </body>
    );
  }
}
export default Projects;