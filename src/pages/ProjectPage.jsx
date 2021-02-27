import React, { Component } from "react";
import "./pages.scss";
import data from "../Posts/posts.json";

const Tag = (title) => {
  return <div className="tag">{title}</div>;
};

const enlargeImage = () => {
  const image = document.getElementById("img");
  image.style.transform = "scale(1.5)"; 
  image.style.transition = "transform 0.25s ease"; 
}

class Minipage extends Component {
  state = {
    onClick: false,
  }
  render() {
    const id = Number.parseInt(this.props.id);
    return (
      <body>
        <div className="page_container">
          <div>
            {this.props.id && <h1>{data.projectsDescriptions[id].title}</h1>}
          </div>
          <div className="tag_container">
            {this.props.id && data.projectsDescriptions[id].tags.length > 0
              ? data.projectsDescriptions[id].tags.map((tag) => {
                  return Tag(tag);
                })
              : ""}
          </div>
          <div className="page_description">
            {this.props.id ? (
              <p>
                {data.projectsDescriptions[id].post}
              </p>
            ) : (
              "There is no post assosciated wit this project"
            )}
          </div>
          <div className="page_image_holder">
          <img id="img" src={this.props.image} alt={this.props.imageALT} onClick={() => enlargeImage()}/>
          </div>
          <div className="links_container">
            {this.props.id &&
            data.projectsDescriptions[id].links &&
            data.projectsDescriptions[id].links.length > 0
              ? data.projectsDescriptions[id].links.map((el) => {
                  return (
                    <a className="linkToProject" href={el}>
                      View the project
                    </a>
                  );
                })
              : ""}
            {this.props.id && data.projectsDescriptions[id].github ? (
              <a
                className="linkToProject"
                href={data.projectsDescriptions[id].github}
              >
                {"</> View the source code"}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </body>
    );
  }
}
export default Minipage;
