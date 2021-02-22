import React, { Component } from "react";
import "./pages.scss";
import data from "../Posts/posts.json";

//props which will take in id, id will match with the id on the json file - this file is going to be loaded into this Project Page

class Minipage extends Component {
  render() {
    return (
      <body>
        <div className="page_container">
         {this.props.id ? <p>{data.projectsDescriptions[this.props.id.parseInt()].post}</p> : 'There is no post assosciated wit this project'}
          <p>{this.props.text}</p>
        </div>
      </body>
    );
  }
}
export default Minipage;
