import React, { Component } from "react";
import "./components.scss";
import { BrowserRouter as Link } from "react-router-dom";
import GifPlayer from 'react-gif-player';
import Tag from './Tag';

class Segment extends Component {
  render() {
    return (
      <div className="segment">
        <GifPlayer
          gif={this.props.gif}
          pauseRef={(pause) => (this.pauseGif = pause)}
        />
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
