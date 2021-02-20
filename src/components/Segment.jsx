import React, { Component } from "react";
import "./components.scss";
import { BrowserRouter as Link } from "react-router-dom";
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
        {this.props.tags && this.props.tags.length
          ? this.props.tags.map((element) => Tag(element))
          : ""}
        <Link to={this.props.href}>
          <p>
            {this.props.title} {this.props.description}
          </p>
        </Link>
      </div>
    );
  }
}
export default Segment;
