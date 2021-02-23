import React, { Component } from "react";
import "./pages.scss";
import data from "../Posts/posts.json";

class Minipage extends Component {
  render() {
    const id = Number.parseInt(this.props.id);
    return (
      <body>
        <div className="page_container">
          {this.props.id && this.props.id ? (
            <p>{data.projectsDescriptions[id].post}</p>
          ) : (
            "There is no post assosciated wit this project"
          )}
          <div className="links_container">
            {this.props.id && data.projectsDescriptions[id].links &&
              data.projectsDescriptions[id].links.length > 0 ? (
                data.projectsDescriptions[id].links.map((el) => {
                  return (
                    <a
                      className="linkToProject"
                      href={el}
                    >
                      View the project
                    </a>
                  );
                })
              ) : ''}
          </div>
        </div>
      </body>
    );
  }
}
export default Minipage;
