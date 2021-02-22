import React, { Component } from "react";
import "./components.scss";
import { Link } from 'react-router-dom';
import GifPlayer from "react-gif-player";

const Tag = (title) => {
  return <div className="tag">{title}</div>;
};

class Segment extends Component {
  render() {
    return (
      <div className="segment">
        <GifPlayer
          gif={this.props.gif}
          pauseRef={(pause) => (this.pauseGif = pause)}
        />
        <div className="inside_text">
          {this.props.tags && this.props.tags.length
            ? this.props.tags.map((element) => Tag(element))
            : ""}
            <div>
            <Link className="title_holder_segment" to={`/projects/${this.props.href}`}>
              {this.props.title}{" "}
          </Link>
            </div>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default Segment;
