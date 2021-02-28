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
      {
        this.props.gif ? 
        <GifPlayer
          gif={this.props.gif}
          pauseRef={(pause) => (this.pauseGif = pause)}
        /> :
        <div className="empty_segment" />
      }
       
        <div className="inside_text">
        <div className="segment_tags">
        {this.props.tags && this.props.tags.length
            ? this.props.tags.map((element) => Tag(element))
            : ""}
        </div>
            <div className="border_title">
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
