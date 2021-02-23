import React, { Component } from "react";
import "./pages.scss";
import data from "../Posts/posts.json";

class Minipage extends Component {
  render() {
    console.log(Number.parseInt(this.props.id));
    return (
      <body>
        <div className="page_container">
          {this.props.id && this.props.id ? (
            <p>{data.projectsDescriptions[Number.parseInt(this.props.id)].post}</p>
          ) : (
            "There is no post assosciated wit this project"
          )}
        </div>
      </body>
    );
  }
}
export default Minipage;
